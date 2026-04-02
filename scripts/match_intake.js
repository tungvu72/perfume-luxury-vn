const fs = require('fs');
const path = require('path');

function unMath(str) {
    return str.normalize('NFKC').replace(/[\u0300-\u036f]/g, "").replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const rawDir = 'D:\\anti\\ảnh nước hoa';
const folders = fs.readdirSync(rawDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// 1. Dumper JS to load mockData
const mockDataContent = fs.readFileSync(path.join(__dirname, '../src/constants/mockData.ts'), 'utf8');

// We don't want to spin a full parser, let's just grab names, subNames, brands via simple regex or logic
// But it's easier to transpile or just read attributes. Let's use simple matchAll for id, name, brand, subName
const products = [];
const blocks = mockDataContent.split('id: ');
for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const idMatch = block.match(/^["']([^"']+)["']/);
    const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
    const brandMatch = block.match(/brand:\s*["']([^"']+)["']/);
    const subNameMatch = block.match(/subName:\s*["']([^"']+)["']/);

    if (idMatch && nameMatch && brandMatch) {
        products.push({
            id: idMatch[1],
            name: nameMatch[1],
            brand: brandMatch[1],
            subName: subNameMatch ? subNameMatch[1] : "",
            searchTerm: unMath(nameMatch[1] + " " + (subNameMatch ? subNameMatch[1] : "") + " " + brandMatch[1]).toLowerCase()
        });
    }
}

const report = {
    total: folders.length,
    reject: [],
    matched_existing: [],
    not_on_site_yet: [],
    ambiguous_variant: [],
    needs_review: []
};

function scoreMatch(raw, searchTarget) {
    const rawWords = unMath(raw).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w);
    const dictWords = searchTarget.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w);
    
    // Count how many raw words are in dictWords
    let matchCount = 0;
    for (const rw of rawWords) {
        if (dictWords.includes(rw)) matchCount++;
    }
    return matchCount / Math.max(rawWords.length, 1);
}

folders.forEach(rawName => {
    const cleanName = unMath(rawName).toLowerCase();
    
    if (cleanName.includes("ảnh chính") || cleanName.includes("bổ xung")) {
        report.reject.push({ raw: rawName, reason: "Thư mục không phải sản phẩm (reject)" });
        return;
    }

    let bestMatch = null;
    let bestScore = 0;
    let candidates = [];

    for (const p of products) {
        const score = scoreMatch(cleanName, p.searchTerm);
        if (score > 0.4) {
            candidates.push({ p, score });
        }
    }
    
    candidates.sort((a,b) => b.score - a.score);

    if (candidates.length === 0) {
        report.not_on_site_yet.push({ raw: rawName });
    } else if (candidates.length === 1 || (candidates.length > 1 && candidates[0].score > candidates[1].score + 0.2)) {
        if (candidates[0].score >= 0.7) {
            report.matched_existing.push({ raw: rawName, match: candidates[0].p });
        } else {
            report.needs_review.push({ raw: rawName, candidates: candidates.slice(0, 3) });
        }
    } else {
        // Tie or ambiguous
        if (cleanName.includes("edp") || cleanName.includes("edt") || cleanName.includes("parfum") || cleanName.includes("extrait") || cleanName.includes("intense")) {
            report.ambiguous_variant.push({ raw: rawName, candidates: candidates.slice(0, 3) });
        } else {
            report.ambiguous_variant.push({ raw: rawName, candidates: candidates.slice(0, 3) });
        }
    }
});

// Create Artifact MD
let md = `# Báo Cáo Phân Loại Intake Ảnh Thực Tế (SOP Phase A)
**Tổng số folder nạp vào:** ${report.total}

`;

md += `## 🟢 1. Matched Existing (Đã có chuẩn trên site: ${report.matched_existing.length})\n`;
report.matched_existing.forEach(i => {
    md += `- **${i.raw}** => \`${i.match.id}\` (${i.match.name} - ${i.match.brand})\n`;
});

md += `\n## 🟡 2. Ambiguous Variant (Nhiều bản nồng độ, dính nghi vấn lộn chai: ${report.ambiguous_variant.length})\n`;
report.ambiguous_variant.forEach(i => {
    md += `- **${i.raw}** -> Có thể là: ${i.candidates.map(c => `\`${c.p.id}\``).join(' hoặc ')}\n`;
});

md += `\n## 🟠 3. Needs Review (Khớp nham nhở, có thể lính mới hoặc viết sai tên: ${report.needs_review.length})\n`;
report.needs_review.forEach(i => {
    md += `- **${i.raw}** -> Candidate: ${i.candidates.map(c => `\`${c.p.id}\``).join(', ')}\n`;
});

md += `\n## 🔴 4. Not On Site Yet (Chưa có trên Web: ${report.not_on_site_yet.length})\n`;
report.not_on_site_yet.forEach(i => {
    md += `- **${i.raw}**\n`;
});

md += `\n## ⚪ 5. Gạt bỏ (Reject: ${report.reject.length})\n`;
report.reject.forEach(i => {
    md += `- **${i.raw}** (${i.reason})\n`;
});

console.log(md);

console.log("SUCCESS. Created artifact at: " + artifactPath);
console.log(`Matched: ${report.matched_existing.length}, Ambiguous: ${report.ambiguous_variant.length}, NeedsReview: ${report.needs_review.length}, NotOnSite: ${report.not_on_site_yet.length}`);
