// CLEAN INJECTOR — Add shells with ONLY verifiable data, NO inferred metadata
const fs = require('fs');

const MOCK_PATH = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
const PENDING_IMAGE = 'PENDING_IMAGE'; // reference, not string

const missing = JSON.parse(fs.readFileSync('D:/anti/perfume-luxury-vn/data/product-batches/remaining-missing.json', 'utf8'));
let mock = fs.readFileSync(MOCK_PATH, 'utf8');

// Check existing IDs
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

let added = 0, skipped = 0;
const blocks = [];

for (const p of missing) {
    if (existingIds.has(p.id)) {
        console.log('  SKIP (exists):', p.id);
        skipped++;
        continue;
    }

    // Clean shell — ONLY verifiable data from URL
    const block = `  {
    id: "${p.id}",
    brandSlug: "${p.brandSlug}",
    brand: "${p.brand}",
    name: "${p.name}",
    subName: "${p.subName}",
    perfumer: "BLOCKED_SOURCE",
    gender: "${p.gender}",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "${p.brand} ${p.name} chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["${p.gender === 'nam' ? 'Nam' : 'Nữ'}", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  }`;

    blocks.push(block);
    console.log('  + ' + p.id);
    added++;
}

if (blocks.length > 0) {
    // Insert before the closing ];
    const insertPoint = mock.lastIndexOf(']');
    const before = mock.slice(0, insertPoint).trimEnd();
    const after = mock.slice(insertPoint);

    // Add comma after last existing item if needed
    const needsComma = !before.endsWith(',');
    const newContent = before + (needsComma ? ',' : '') + '\n' + blocks.join(',\n') + '\n' + after;

    fs.writeFileSync(MOCK_PATH, newContent, 'utf8');
}

console.log('\n✅ Added:', added, '| Skipped:', skipped);
