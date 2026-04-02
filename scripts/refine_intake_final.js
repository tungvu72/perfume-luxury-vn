const fs = require('fs');
const path = require('path');

function removeAccents(str) {
    if (!str) return "";
    return str.normalize('NFKD') 
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const BRAND_ALIASES = [
    { aliases: ['ysl', 'yves'], actual: 'yves saint laurent' },
    { aliases: ['mfk', 'kurkdjian'], actual: 'maison francis kurkdjian' },
    { aliases: ['pdm', 'parfums de marly'], actual: 'parfums de marly' },
    { aliases: ['jpg', 'jean paul'], actual: 'jean paul gaultier' },
    { aliases: ['nar', 'narciso'], actual: 'narciso rodriguez' },
    { aliases: ['armani', 'acqua di gio'], actual: 'giorgio armani' },
    { aliases: ['tom ford'], actual: 'tom ford' },
    { aliases: ['creed'], actual: 'creed' },
    { aliases: ['versace'], actual: 'versace' },
    { aliases: ['dior'], actual: 'dior' },
    { aliases: ['chanel'], actual: 'chanel' },
    { aliases: ['mancera'], actual: 'mancera' },
    { aliases: ['amouage'], actual: 'amouage' },
    { aliases: ['le labo'], actual: 'le labo' },
    { aliases: ['kilian', 'by kilian', 'kilian paris'], actual: 'kilian' }, 
    { aliases: ['byredo'], actual: 'byredo' },
    { aliases: ['diptyque'], actual: 'diptyque' },
    { aliases: ['replica', 'margiela'], actual: 'maison margiela' },
    { aliases: ['chloe', 'chloé'], actual: 'chloe' },
    { aliases: ['gucci'], actual: 'gucci' },
    { aliases: ['guerlain'], actual: 'guerlain' },
    { aliases: ['hermes', 'hermès'], actual: 'hermes' },
    { aliases: ['xerjoff', 'casamorati'], actual: 'xerjoff' },
    { aliases: ['thomas kosmala'], actual: 'thomas kosmala' },
    { aliases: ['moschino'], actual: 'moschino' },
    { aliases: ['lalique'], actual: 'lalique' },
    { aliases: ['carolina herrera'], actual: 'carolina herrera' },
    { aliases: ['viktor & rolf', 'spicebomb'], actual: 'viktor & rolf' }
];

function _internalExtractBrand(str) {
    if (!str) return null;
    for (const b of BRAND_ALIASES) {
        if (b.aliases.some(a => str.includes(a))) return b.actual;
    }
    return null;
}

function extractBrand(rawNameClean) {
    return _internalExtractBrand(rawNameClean);
}

const rawDir = 'D:\\anti\\ảnh nước hoa';
const folders = fs.readdirSync(rawDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const mockDataContent = fs.readFileSync(path.join(__dirname, '../src/constants/mockData.ts'), 'utf8');
const products = [];
const blocks = mockDataContent.split('id: ');

let currentBrand = 'unknown';
for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const idMatch = block.match(/^[\s]*["']([^"']+)["']/);
    const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
    const subNameMatch = block.match(/subName:\s*["']([^"']+)["']/);

    const brandMatch = block.match(/brand:\s*["']([^"']+)["']/);
    if (brandMatch) {
       currentBrand = brandMatch[1].trim().toLowerCase();
    }
    
    let dbRawBrand = currentBrand;
    let productBrand = _internalExtractBrand(dbRawBrand) || dbRawBrand;

    // Hard fallback if the group logic breaks
    if (!productBrand || productBrand === 'unknown') {
        if (idMatch && idMatch[1].includes('ysl')) productBrand = 'yves saint laurent';
        else if (idMatch && idMatch[1].includes('jpg')) productBrand = 'jean paul gaultier';
        else if (idMatch && idMatch[1].includes('libre')) productBrand = 'yves saint laurent';
    }

    if (idMatch && nameMatch) {
        products.push({
            id: idMatch[1],
            name: nameMatch[1],
            brand: productBrand,
            subName: subNameMatch ? subNameMatch[1] : "",
            searchTarget: removeAccents(nameMatch[1] + " " + (subNameMatch ? subNameMatch[1] : "")).toLowerCase()
        });
    }
}

function scoreTokens(rawStr, targetStr) {
    const rawTokens = rawStr.split(/[\s\-]+/).filter(w => w.length > 1);
    const targetTokens = targetStr.split(/[\s\-]+/).filter(w => w.length > 1);
    
    let matchCount = 0;
    for (const rt of rawTokens) {
        if (targetTokens.includes(rt)) matchCount++;
    }
    return matchCount / Math.max(rawTokens.length, 1);
}

function isFalsePositive(raw, productId) {
    if (productId.includes('for-her') && !raw.includes('for her')) return true;
    if (raw.includes('for her') && raw.includes('aventus') && !productId.includes('aventus')) return true; 
    if (raw.includes('pour homme') && !raw.includes('dylan') && productId.includes('dylan-blue')) return true; 

    // fix: un-mathed ascii lowercase comparison
    const rawAsciiLower = removeAccents(raw).toLowerCase().replace(/[^a-z0-9\s\-]/g, ' ').replace(/\s+/g, ' ').trim();
    const isYSL = rawAsciiLower.includes('ysl y') || rawAsciiLower.includes('y eau de');
    if (isYSL && (productId.includes('libre') || productId.includes('cinema') || productId.includes('opium'))) return true;
    return false;
}

const TRICKY_FAMILIES = ['opium', 'aventus', 'narciso', 'libre', 'acqua di gio'];
const HUMAN_CONFIRM_DB = ['aventus', 'libre', 'narciso', 'acqua di', 'opium', 'good girl', 'black orchid', 'spicebomb', 'y edp', 'y-'];

const report = {
    high_confidence_existing: [],
    ambiguous_existing: [],
    manual_review: [],
    unmatched: []
};

folders.forEach(rawName => {
    const rLower = rawName.toLowerCase();
    if (rLower.includes('ảnh chính') || rLower.includes('bổ xung') || rLower.includes('anh chinh') || rLower.includes('bo xung')) return;

    const cleanName = removeAccents(rawName).toLowerCase().replace(/[^a-z0-9\s\-]/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanName.length < 3) return;
    
    const projectedBrand = extractBrand(cleanName);
    
    let candidatePool = products;
    if (projectedBrand) {
        const localCandidates = products.filter(p => p.brand.includes(projectedBrand) || projectedBrand.includes(p.brand));
        if (localCandidates.length > 0) {
            candidatePool = localCandidates;
        }
    }
    
    const scored = [];
    for (const p of candidatePool) {
        if (isFalsePositive(rawName, p.id)) continue;
        
        let targetBrandClean = projectedBrand ? projectedBrand.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") : "";
        let strToScore = projectedBrand ? cleanName.replace(new RegExp(targetBrandClean, 'g'), "") : cleanName;
        // In case cleanName doesn't have 'yves saint laurent' but has 'ysl', let's manually strip aliases
        if (projectedBrand) {
             const bObj = BRAND_ALIASES.find(x => x.actual === projectedBrand);
             if (bObj) {
                 for (let al of bObj.aliases) {
                     strToScore = strToScore.replace(new RegExp(al.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), "");
                 }
             }
        }
        
        let score = scoreTokens(strToScore, p.searchTarget);
        
        if (cleanName.includes(p.id.replace(/-/g, ' '))) score += 0.5;
        if (cleanName.includes('intense') && p.searchTarget.includes('intense')) score += 0.3;
        if (cleanName.includes('edp') && p.searchTarget.includes('edp')) score += 0.2;
        if (cleanName.includes('edt') && p.searchTarget.includes('edt')) score += 0.2;
        if (cleanName.includes('parfum') && p.searchTarget.includes('parfum')) score += 0.2;
        if (cleanName.includes('extrait') && p.searchTarget.includes('extrait')) score += 0.2;
        
        if (score > 0.15) scored.push({ p, score });
    }
    
    scored.sort((a,b) => b.score - a.score);
    const top3 = scored.slice(0, 3);
    
    const resultObj = {
        raw: rawName,
        brand: projectedBrand || "Unknown",
        candidates: top3,
        needs_human_confirm: false
    };

    if (top3.length === 0) {
        report.unmatched.push(resultObj);
    } else {
        const best = top3[0];
        const second = top3[1];
        
        const hitTrickyFamily = HUMAN_CONFIRM_DB.some(tf => cleanName.includes(tf) || best.p.id.includes(tf));
        if (hitTrickyFamily) resultObj.needs_human_confirm = true;

        let isTricky = TRICKY_FAMILIES.some(tf => cleanName.includes(tf) || best.p.id.includes(tf));
        
        if (best.score >= 0.8 && resultObj.brand !== "Unknown") {
            if (second && best.score - second.score < 0.2) {
                report.ambiguous_existing.push(resultObj);
            } else if (isTricky && best.score < 1.0) {
                report.manual_review.push(resultObj);
            } else {
                report.high_confidence_existing.push(resultObj);
            }
        } else {
            if (second && best.score >= 0.5 && best.score - second.score < 0.1) {
                report.ambiguous_existing.push(resultObj);
            } else {
                report.manual_review.push(resultObj);
            }
        }
    }
});

let md = `# Coder Bot Intake Report (V3 Refined Final)
**Total Folders Scanned:** ${report.high_confidence_existing.length + report.ambiguous_existing.length + report.manual_review.length + report.unmatched.length} (Excluding non-product rejects)
**Encoding:** UTF-8

> **Note on Match Score Heuristic:** The number indicates a calculated text overlap and structural match, NOT absolute certainty. All buckets reflect script heuristics.

## 🟢 1. High Confidence Existing (${report.high_confidence_existing.length})
> Mapped to a single ID with high heuristic score AND confirmed Brand match.
`;
report.high_confidence_existing.forEach(i => {
    const flag = i.needs_human_confirm ? " **[⚠️ HUMAN CONFIRM RECOMMENDED]**" : "";
    md += `- **${i.raw}**\n  => \`${i.candidates[0].p.id}\` \n  *(Brand Block Locked: [${i.brand}], Heuristic: ${parseFloat(i.candidates[0].score).toFixed(2)})${flag}*\n`;
});

md += `\n## 🟡 2. Ambiguous Existing (${report.ambiguous_existing.length})\n> High overlap but multiple variants competing closely (script cannot decide).\n`;
report.ambiguous_existing.forEach(i => {
    const flag = i.needs_human_confirm ? " **[⚠️ HUMAN CONFIRM RECOMMENDED]**" : "";
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])${flag}* \n`;
    i.candidates.forEach(c => {
        md += `  ? \`${c.p.id}\` (Heuristic: ${parseFloat(c.score).toFixed(2)})\n`;
    });
});

md += `\n## 🟠 3. Manual Review (${report.manual_review.length})\n> Low heuristic score OR Brand unlocked (Unknown) OR belongs to a tricky flanker family.\n`;
report.manual_review.forEach(i => {
    const flag = i.needs_human_confirm ? " **[⚠️ HUMAN CONFIRM RECOMMENDED]**" : "";
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])${flag}* \n`;
    i.candidates.forEach(c => {
        md += `  ? \`${c.p.id}\` (Heuristic: ${parseFloat(c.score).toFixed(2)})\n`;
    });
});

md += `\n## 🔴 4. Unmatched (${report.unmatched.length})\n> Currently unmatched by script (Needs metadata created or totally absent from database).\n`;
report.unmatched.forEach(i => {
    md += `- **${i.raw}** *(Brand Guess: [${i.brand}])*\n`;
});

const outPath = path.join(__dirname, '../tmp/refined_intake_report_final.md');
fs.writeFileSync(outPath, md, 'utf-8');
console.log("SUCCESS. Báo cáo lưu tại: " + outPath);
