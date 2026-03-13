// Reusable injector: reads JSON product data, injects into mockData.ts
const fs = require('fs');
const path = require('path');

const MOCK_FILE = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
const dataFile = process.argv[2];
if (!dataFile) { console.error('Usage: node injector.js <data.json>'); process.exit(1); }

const products = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
let mock = fs.readFileSync(MOCK_FILE, 'utf8');

// Check existing IDs to avoid duplicates
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

function buildEntry(p) {
    const tn = (p.topNotes || []).map(n => `{ name: "${n}" }`).join(', ');
    const mn = (p.middleNotes || []).map(n => `{ name: "${n}" }`).join(', ');
    const bn = (p.baseNotes || []).map(n => `{ name: "${n}" }`).join(', ');
    const ac = (p.accords || []).map(a => `\n      { name: "${a[0]}", value: ${a[1]}, color: "${a[2]}" }`).join(',');
    const vb = (p.vibes || []).map(v => `{ label: "${v[0]}", icon: "${v[1]}" }`).join(', ');
    const sz = (p.sizes || []).map(s => `"${s}"`).join(', ');
    const tg = (p.tags || []).map(t => `"${t}"`).join(', ');

    return `  {
    id: "${p.id}",
    brandSlug: "${p.brandSlug}",
    brand: "${p.brand}",
    name: "${p.name}",
    subName: "${p.subName || 'Eau de Parfum'}",
    perfumer: "${p.perfumer || 'N/A'}",
    gender: "${p.gender || 'nam'}",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "pending", caption: "${p.brand} ${p.name} chính hãng", verified: false }],
    description: "${p.desc}",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    verdict: "${p.verdict}",
    verdictShort: "${p.short}",
    score: { scent: ${p.sc[0]}, uniqueness: ${p.sc[1]}, compliments: ${p.sc[2]}, value: ${p.sc[3]}, total: ${p.sc[4]} },
    vibes: [${vb}],
    longevity: ${p.lon || 8}, sillage: ${p.sil || 7},
    seasons: { spring: ${p.sea[0]}, summer: ${p.sea[1]}, fall: ${p.sea[2]}, winter: ${p.sea[3]} },
    dayNight: { day: ${p.dn[0]}, night: ${p.dn[1]} },
    topNotes: [${tn}],
    middleNotes: [${mn}],
    baseNotes: [${bn}],
    accords: [${ac}\n    ],
    tags: [${tg}],
    sizes: [${sz}],
    basePrice: ${p.price},
    shopeeOffers: []
  }`;
}

let added = 0, skipped = 0;
const entries = [];
for (const p of products) {
    if (existingIds.has(p.id)) { console.log('SKIP (exists):', p.id); skipped++; continue; }
    entries.push(buildEntry(p));
    added++;
}

if (entries.length > 0) {
    const str = entries.join(',\n');
    mock = mock.replace(/\n\];\s*$/, ',\n' + str + '\n];\n');
    fs.writeFileSync(MOCK_FILE, mock, 'utf8');
}

console.log(`✅ Added: ${added}, Skipped: ${skipped}`);
products.filter(p => !existingIds.has(p.id)).forEach(p => console.log('  +', p.id));
