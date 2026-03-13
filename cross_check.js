const fs = require('fs');
const d = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const ids = [...d.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
const existSet = new Set(ids);
const missing = JSON.parse(fs.readFileSync('D:/anti/perfume-luxury-vn/data/product-batches/truly-missing.json', 'utf8'));

let realMissing = [];
let alreadyHave = [];

for (const m of missing) {
    const n = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    let found = false;
    for (const e of existSet) {
        // Check if product name is substantially in existing ID
        if (n.length >= 6 && e.includes(n.slice(0, Math.min(n.length, 12)))) { found = true; alreadyHave.push({ ...m, matchedId: e }); break; }
        if (n.length < 6 && e.includes(n)) { found = true; alreadyHave.push({ ...m, matchedId: e }); break; }
    }
    if (!found) realMissing.push(m);
}

console.log('Already on site:', alreadyHave.length);
alreadyHave.forEach(m => console.log('  ✓', m.brand, '—', m.name, '→', m.matchedId));
console.log('\nActually missing:', realMissing.length);
realMissing.forEach(m => console.log('  ✗', m.gender, '#' + m.idx, m.brand, '—', m.name));
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/final-missing.json', JSON.stringify(realMissing, null, 2));
