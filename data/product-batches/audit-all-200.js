// Full batch audit for ALL 200 products
const fs = require('fs');

// Read ALL URLs
const men = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const women = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

// Read existing IDs
const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return { brand: '?', name: '?' };
    return { brand: m[1].replace(/-/g, ' '), name: m[2].replace(/-/g, ' ').replace(/\s+\d+$/, '') };
}

function guessId(brand, name) {
    const b = brand.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const n = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `${b}-${n}`.replace(/--+/g, '-');
}

function fuzzyMatch(idGuess) {
    for (const eid of existingIds) {
        if (eid.includes(idGuess.slice(0, 8)) || idGuess.includes(eid.slice(0, 8))) return eid;
    }
    return null;
}

// Audit per batch
function auditBatch(urls, startIdx, batchId, gender) {
    const results = [];
    for (let i = 0; i < urls.length; i++) {
        const { brand, name } = parseUrl(urls[i]);
        const ig = guessId(brand, name);
        const match = fuzzyMatch(ig);
        results.push({
            num: startIdx + i + 1,
            brand, name,
            url: urls[i],
            idGuess: ig,
            existingId: match || '',
            status: match ? 'OK_EXISTING' : 'NEW_WRITE'
        });
    }
    return results;
}

// Process all batches
const batches = [];
for (let i = 0; i < 100; i += 20) {
    const batchNum = Math.floor(i / 20) + 1;
    const mSlice = men.slice(i, i + 20);
    const wSlice = women.slice(i, i + 20);
    batches.push({ id: `M0${batchNum}`, items: auditBatch(mSlice, i, `M0${batchNum}`, 'men') });
    batches.push({ id: `W0${batchNum}`, items: auditBatch(wSlice, i, `W0${batchNum}`, 'women') });
}

// Summary
let totalOk = 0, totalNew = 0;
console.log('=== FULL 200 PRODUCT AUDIT ===\n');
for (const b of batches) {
    const ok = b.items.filter(i => i.status === 'OK_EXISTING').length;
    const nw = b.items.filter(i => i.status === 'NEW_WRITE').length;
    totalOk += ok; totalNew += nw;
    console.log(`${b.id}: ${ok} OK_EXISTING, ${nw} NEW_WRITE`);
    b.items.filter(i => i.status === 'NEW_WRITE').forEach(i => console.log(`  NEW: ${i.brand} — ${i.name}`));
}
console.log(`\nTOTAL: ${totalOk} OK_EXISTING, ${totalNew} NEW_WRITE out of ${totalOk + totalNew}`);

// Save summary to file
const lines = ['batch,num,brand,name,url,idGuess,existingId,status'];
for (const b of batches) {
    for (const i of b.items) {
        lines.push(`${b.id},${i.num},"${i.brand}","${i.name}","${i.url}","${i.idGuess}","${i.existingId}",${i.status}`);
    }
}
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/full-200-audit.csv', lines.join('\n'));
console.log('\nSaved full audit to full-200-audit.csv');
