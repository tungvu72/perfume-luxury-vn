const fs = require('fs');
const path = require('path');

function unMath(str) {
    return str.normalize('NFKC').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const rawDir = 'D:\\anti\\ảnh nước hoa';
const folders = fs.readdirSync(rawDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Load mockData products
const mockDataContent = fs.readFileSync(path.join(__dirname, '../src/constants/mockData.ts'), 'utf8');
const products = [];
const blocks = mockDataContent.split('id: ');
for (let i = 1; i < blocks.length; i++) {
    const idMatch = blocks[i].match(/^["']([^"']+)["']/);
    const nameMatch = blocks[i].match(/name:\s*["']([^"']+)["']/);
    const brandMatch = blocks[i].match(/brand:\s*["']([^"']+)["']/);
    const subNameMatch = blocks[i].match(/subName:\s*["']([^"']+)["']/);
    const genderMatch = blocks[i].match(/gender:\s*["']([^"']+)["']/);

    if (idMatch && nameMatch && brandMatch) {
        products.push({
            id: idMatch[1],
            name: nameMatch[1],
            brand: brandMatch[1].toLowerCase(),
            subName: subNameMatch ? subNameMatch[1] : "",
            gender: genderMatch ? genderMatch[1] : "",
            searchTarget: unMath(nameMatch[1] + " " + (subNameMatch ? subNameMatch[1] : "")).toLowerCase()
        });
    }
}

const BRAND_ALIASES = {
    'ysl': 'yves saint laurent',
    'mfk': 'maison francis kurkdjian',
    'pdm': 'parfums de marly',
    'jpg': 'jean paul gaultier',
    'nar ': 'narciso rodriguez',
    'narciso': 'narciso rodriguez',
    'armani': 'giorgio armani',
    'tom ford': 'tom ford',
    'creed': 'creed',
    'versace': 'versace',
    'dior': 'dior',
    'chanel': 'chanel',
    'mancera': 'mancera',
    'amouage': 'amouage',
    'le labo': 'le labo',
    'kilian': 'by didier kilian', // the site uses By Kilian maybe?
    'byredo': 'byredo',
    'diptyque': 'diptyque',
    'replica': 'maison margiela',
    'chloe': 'chloé',
    'gucci': 'gucci',
    'guerlain': 'guerlain',
    'hermes': 'hermès',
    'xerjoff': 'xerjoff',
    'thomas kosmala': 'thomas kosmala',
    'moschino': 'moschino',
    'lalique': 'lalique'
};

const SITE_BRANDS = [...new Set(products.map(p => p.brand))];

function extractBrand(rawNameClean) {
    for (const [alias, actual] of Object.entries(BRAND_ALIASES)) {
        if (rawNameClean.includes(alias)) {
            // map site brand if it differs slightly
            const sb = SITE_BRANDS.find(b => b.includes(actual) || actual.includes(b));
            return sb || actual;
        }
    }
    // Try exact site brand match
    for (const b of SITE_BRANDS) {
        if (rawNameClean.includes(b)) return b;
    }
    return null;
}

// Token scoring
function scoreTokens(rawStr, targetStr) {
    const rawTokens = rawStr.split(/[\s\-]+/).filter(w => w.length > 1);
    const targetTokens = targetStr.split(/[\s\-]+/).filter(w => w.length > 1);
    
    let matchCount = 0;
    for (const rt of rawTokens) {
        if (targetTokens.includes(rt)) matchCount++;
    }
    return matchCount / Math.max(rawTokens.length, 1);
}

// Anti false positive hardcodes
function isFalsePositive(raw, productId) {
    if (productId.includes('for-her') && !raw.includes('for her')) return true;
    if (raw.includes('for her') && raw.includes('aventus') && !productId.includes('aventus')) return true; // prevent narciso
    if (raw.includes('pour homme') && !raw.includes('dylan') && productId.includes('dylan-blue')) return true; // prevent pour homme -> dylan blue
    if (raw.includes('ysl y') || raw.includes('y eau de')) {
        if (productId.includes('libre') || productId.includes('cinema') || productId.includes('opium')) return true;
    }
    return false;
}

const report = {
    high_confidence_existing: [],
    ambiguous_existing: [],
    manual_review: [],
    unmatched: []
};

folders.forEach(rawName => {
    const cleanName = unMath(rawName).toLowerCase().replace(/[^a-z0-9\s\-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanName.includes("anh chinh") || cleanName.includes("bo xung")) return; // skip
    
    const projectedBrand = extractBrand(cleanName);
    
    let candidatePool = products;
    if (projectedBrand) {
        candidatePool = products.filter(p => p.brand === projectedBrand);
    }
    
    const scored = [];
    for (const p of candidatePool) {
        if (isFalsePositive(cleanName, p.id)) continue;
        
        let score = scoreTokens(cleanName.replace(projectedBrand || "", ""), p.searchTarget);
        
        // boost exact word match
        if (cleanName.includes(p.id.replace(/-/g, ' '))) score += 0.5;
        if (cleanName.includes('intense') && p.searchTarget.includes('intense')) score += 0.3;
        if (cleanName.includes('edp') && p.searchTarget.includes('edp')) score += 0.2;
        if (cleanName.includes('edt') && p.searchTarget.includes('edt')) score += 0.2;
        
        if (score > 0.2) scored.push({ p, score });
    }
    
    scored.sort((a,b) => b.score - a.score);
    const top3 = scored.slice(0, 3);
    
    const resultObj = {
        raw: rawName,
        brand: projectedBrand || "Unknown",
        family: "Unknown",
        candidates: top3,
    };
    
    if (top3.length > 0) {
        resultObj.family = top3[0].p.name.split(' ')[0]; // rough guess
    }

    if (top3.length === 0) {
        report.unmatched.push(resultObj);
    } else {
        const best = top3[0];
        const second = top3[1];
        
        if (best.score >= 0.8) {
            if (second && best.score - second.score < 0.2) {
                // Ambiguous variants
                report.ambiguous_existing.push(resultObj);
            } else {
                report.high_confidence_existing.push(resultObj);
            }
        } else {
            // Score < 0.8 means manual review
            report.manual_review.push(resultObj);
        }
    }
});

let md = `# Báo Cáo Phân Loại Intake Ảnh Thực Tế (Refined)
**Tổng folder:** ${folders.length} (Trừ folder gạt bỏ)

## 🟢 1. High Confidence Existing (${report.high_confidence_existing.length})
`;
report.high_confidence_existing.forEach(i => {
    md += `- **${i.raw}** -> \`${i.candidates[0].p.id}\` (Brand: ${i.brand}, Confidence: ${parseFloat(i.candidates[0].score).toFixed(2)})\n`;
});

md += `\n## 🟡 2. Ambiguous Existing (${report.ambiguous_existing.length})\n`;
report.ambiguous_existing.forEach(i => {
    md += `- **${i.raw}** (Brand: ${i.brand})\n  Candidates: ${i.candidates.map(c => `\`${c.p.id}\` (${parseFloat(c.score).toFixed(2)})`).join(', ')}\n`;
});

md += `\n## 🟠 3. Manual Review (${report.manual_review.length})\n`;
report.manual_review.forEach(i => {
    md += `- **${i.raw}** (Brand: ${i.brand})\n  Candidates: ${i.candidates.map(c => `\`${c.p.id}\` (${parseFloat(c.score).toFixed(2)})`).join(', ')}\n`;
});

md += `\n## 🔴 4. Unmatched (${report.unmatched.length})\n`;
report.unmatched.forEach(i => {
    md += `- **${i.raw}** (Brand: ${i.brand})\n`;
});

const outPath = path.join(__dirname, '../tmp/refined_intake_report.md');
fs.writeFileSync(outPath, md, 'utf8');
console.log("Viết báo cáo tại: " + outPath);
