const fs = require('fs');
const path = require('path');

function unMath(str) {
    if (!str) return "";
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

    if (idMatch && nameMatch && brandMatch) {
        products.push({
            id: idMatch[1],
            name: nameMatch[1],
            brand: brandMatch[1].trim().toLowerCase(),
            subName: subNameMatch ? subNameMatch[1] : "",
            searchTarget: unMath(nameMatch[1] + " " + (subNameMatch ? subNameMatch[1] : "")).toLowerCase()
        });
    }
}

const SITE_BRANDS = [...new Set(products.map(p => p.brand))];

const BRAND_ALIASES = {
    'ysl': 'yves saint laurent',
    'mfk': 'maison francis kurkdjian',
    'pdm': 'parfums de marly',
    'parfums de marly': 'parfums de marly',
    'jpg': 'jean paul gaultier',
    'jean paul': 'jean paul gaultier',
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
    'kilian': 'by kilian', // Some sites use By Kilian
    'byredo': 'byredo',
    'diptyque': 'diptyque',
    'replica': 'maison margiela',
    'margiela': 'maison margiela',
    'chloe': 'chloe',
    'chloé': 'chloe',
    'gucci': 'gucci',
    'guerlain': 'guerlain',
    'hermes': 'hermes',
    'hermès': 'hermes',
    'xerjoff': 'xerjoff',
    'thomas kosmala': 'thomas kosmala',
    'moschino': 'moschino',
    'lalique': 'lalique',
    'carolina herrera': 'carolina herrera',
    'viktor & rolf': 'viktor & rolf',
    'viktor ro': 'viktor & rolf'
};

function extractBrand(rawNameClean) {
    for (const [alias, actual] of Object.entries(BRAND_ALIASES)) {
        if (rawNameClean.includes(alias)) {
            const sb = SITE_BRANDS.find(b => b === actual || b.includes(actual) || actual.includes(b));
            if (sb) return sb;
            return actual; 
        }
    }
    // Attempt exact site brand match
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

// Strict anti false positive hardcodes
function isFalsePositive(raw, productId) {
    // Prevent Narciso 'for her' crossing with Creed 'Aventus for her'
    if (productId.includes('for-her') && !raw.includes('for her')) return true;
    if (raw.includes('for her') && raw.includes('aventus') && !productId.includes('aventus')) return true; 

    // Prevent Versace Pour Homme crossing with Dylan Blue
    if (raw.includes('pour homme') && !raw.includes('dylan') && productId.includes('dylan-blue')) return true; 

    // Prevent YSL Y EDP crossing with Libre/Black Opium
    if (raw.includes('ysl y') || raw.includes('y eau de')) {
        if (productId.includes('libre') || productId.includes('cinema') || productId.includes('opium')) return true;
    }
    return false;
}

// Complex flanker families that require manual review unless perfect 1.0 match
const TRICKY_FAMILIES = ['opium', 'aventus', 'narciso', 'libre', 'acqua di gio'];

const report = {
    high_confidence_existing: [],
    ambiguous_existing: [],
    manual_review: [],
    unmatched: []
};

folders.forEach(rawName => {
    // Preserve original for report but clean for matching
    const cleanName = unMath(rawName).toLowerCase().replace(/[^a-z0-9\s\-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanName.includes("anh chinh") || cleanName.includes("bo xung") || cleanName.length < 3) return; 
    
    const projectedBrand = extractBrand(cleanName);
    
    let candidatePool = products;
    if (projectedBrand) {
        // Enforce brand filtering
        const dbBrand = SITE_BRANDS.find(b => b === projectedBrand || b.includes(projectedBrand));
        if (dbBrand) candidatePool = products.filter(p => p.brand === dbBrand);
    }
    
    const scored = [];
    for (const p of candidatePool) {
        if (isFalsePositive(cleanName, p.id)) continue;
        
        let targetCompare = p.searchTarget;
        let score = scoreTokens(cleanName.replace(projectedBrand || "", ""), targetCompare);
        
        // Boosts
        if (cleanName.includes(p.id.replace(/-/g, ' '))) score += 0.5;
        if (cleanName.includes('intense') && targetCompare.includes('intense')) score += 0.3;
        if (cleanName.includes('edp') && targetCompare.includes('edp')) score += 0.2;
        if (cleanName.includes('edt') && targetCompare.includes('edt')) score += 0.2;
        if (cleanName.includes('parfum') && targetCompare.includes('parfum')) score += 0.2;
        
        if (score > 0.15) scored.push({ p, score });
    }
    
    scored.sort((a,b) => b.score - a.score);
    const top3 = scored.slice(0, 3);
    
    const resultObj = {
        raw: rawName, // Keep original casing/unicode for report
        brand: projectedBrand || "Unknown",
        candidates: top3,
    };

    if (top3.length === 0) {
        report.unmatched.push(resultObj);
    } else {
        const best = top3[0];
        const second = top3[1];
        
        // Rule: Unknown brand CANNOT be High Confidence
        let isTricky = TRICKY_FAMILIES.some(tf => cleanName.includes(tf) || best.p.id.includes(tf));
        
        if (best.score >= 0.8 && resultObj.brand !== "Unknown") {
            if (second && best.score - second.score < 0.2) {
                report.ambiguous_existing.push(resultObj);
            } else if (isTricky && best.score < 1.0) {
                // If it's a tricky flanker family, it must be manually reviewed unless perfect
                report.manual_review.push(resultObj);
            } else {
                report.high_confidence_existing.push(resultObj);
            }
        } else {
            // Unlocked brand or low score -> Manual Review (or Ambiguous if tight)
            if (second && best.score >= 0.5 && best.score - second.score < 0.1) {
                report.ambiguous_existing.push(resultObj);
            } else {
                report.manual_review.push(resultObj);
            }
        }
    }
});

let md = `# Coder Bot Intake Report (V2 Refined)
**Total Folders Scanned:** ${folders.length} (Excluding non-product folders)
**Encoding:** UTF-8

> **Note on Match Score Heuristic:** The number indicates a calculated text overlap and structural match, NOT absolute certainty. All buckets reflect script heuristics.

## 🟢 1. High Confidence Existing (${report.high_confidence_existing.length})
> Mapped to a single ID with high heuristic score AND confirmed Brand match.
`;
report.high_confidence_existing.forEach(i => {
    md += `- **${i.raw}**\n  => \`${i.candidates[0].p.id}\` \n  *(Brand Block Locked: [${i.brand}], Heuristic: ${parseFloat(i.candidates[0].score).toFixed(2)})*\n`;
});

md += `\n## 🟡 2. Ambiguous Existing (${report.ambiguous_existing.length})\n> High overlap but multiple variants competing closely (script cannot decide).\n`;
report.ambiguous_existing.forEach(i => {
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])* \n`;
    i.candidates.forEach(c => {
        md += `  ? \`${c.p.id}\` (Heuristic: ${parseFloat(c.score).toFixed(2)})\n`;
    });
});

md += `\n## 🟠 3. Manual Review (${report.manual_review.length})\n> Low heuristic score OR Brand unlocked (Unknown) OR belongs to a tricky flanker family (Aventus/Narciso/Opium/etc).\n`;
report.manual_review.forEach(i => {
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])* \n`;
    i.candidates.forEach(c => {
        md += `  ? \`${c.p.id}\` (Heuristic: ${parseFloat(c.score).toFixed(2)})\n`;
    });
});

md += `\n## 🔴 4. Unmatched (${report.unmatched.length})\n> Zero viable candidates found in the current mockData.ts (Likely totally absent).\n`;
report.unmatched.forEach(i => {
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])*\n`;
});

const outPath = path.join(__dirname, '../tmp/refined_intake_report_v2.md');
fs.writeFileSync(outPath, md, 'utf-8');
console.log("Viết báo cáo UTF-8 tại: " + outPath);
