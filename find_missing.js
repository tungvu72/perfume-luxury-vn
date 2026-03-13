// Find the 44 missing products: URLs in men/women.txt that DON'T have a matching ID in mockData
const fs = require('fs');

const men = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const women = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return { brand: '?', name: '?' };
    return { brand: m[1].replace(/-/g, ' '), name: m[2].replace(/-/g, ' ').replace(/\s+\d+$/, '') };
}

// Check every URL against ALL existing IDs
function findMatch(url) {
    const { brand, name } = parseUrl(url);
    const nameLower = name.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (const eid of existingIds) {
        const eidClean = eid.replace(/-/g, '').toLowerCase();
        // Exact substring match (at least 10 chars)
        if (nameLower.length >= 10 && (eidClean.includes(nameLower.slice(0, 10)) || nameLower.includes(eidClean.slice(0, 10)))) return eid;
        // Shorter match for short names
        if (nameLower.length < 10 && nameLower.length >= 5 && (eidClean.includes(nameLower) || nameLower.includes(eidClean.replace(/e[dt]p?$/, '')))) return eid;
    }
    return null;
}

const allUrls = [
    ...men.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'men' })),
    ...women.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'women' }))
];

const missing = [];
const matched = [];
for (const item of allUrls) {
    const { brand, name } = parseUrl(item.url);
    const match = findMatch(item.url);
    if (match) {
        matched.push({ ...item, brand, name, matchId: match });
    } else {
        missing.push({ ...item, brand, name });
    }
}

console.log('=== MATCHED (on site):', matched.length);
console.log('=== MISSING (not on site):', missing.length);
console.log('\n--- MISSING PRODUCTS ---');
missing.forEach(m => {
    console.log(`${m.gender} #${String(m.idx).padStart(3)}: ${m.brand} — ${m.name}`);
    console.log(`  URL: ${m.url}`);
});
