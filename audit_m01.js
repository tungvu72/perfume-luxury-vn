const fs = require('fs');

// 1) Read M01 URLs (men lines 1-20)
const menLines = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8')
    .split(/\r?\n/).filter(l => l.trim());
const m01 = menLines.slice(0, 20);

// 2) Parse product info from Fragrantica URLs
function parseFragranticaUrl(url) {
    // Format: /perfume/Brand/Product-Name-ID.html
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return { brand: '?', name: '?', fragId: '?' };
    const brand = m[1].replace(/-/g, ' ');
    const nameRaw = m[2].replace(/-/g, ' ');
    // Remove trailing ID from name
    const name = nameRaw.replace(/\s+\d+$/, '');
    const fragId = m[3] || '?';
    return { brand, name, fragId };
}

// 3) Read all existing product IDs from mockData.ts
const mockData = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const idMatches = [...mockData.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
const nameMatches = [...mockData.matchAll(/name:\s*"([^"]+)"/g)].map(m => m[1]);

// 4) Read all slugs from product-descriptions JSON
const descDir = 'D:/anti/perfume-luxury-vn/content/product-descriptions';
let descSlugs = [];
fs.readdirSync(descDir).filter(f => f.endsWith('.json')).forEach(f => {
    const data = JSON.parse(fs.readFileSync(`${descDir}/${f}`, 'utf8'));
    data.forEach(p => descSlugs.push(p.slug));
});

console.log('=== EXISTING PRODUCTS ON SITE ===');
console.log('Product IDs (mockData.ts):', idMatches.length);
idMatches.forEach(id => console.log('  ', id));
console.log('\nProduct Description Slugs:', descSlugs.length);
descSlugs.forEach(s => console.log('  ', s));

console.log('\n=== M01 AUDIT (men 001-020) ===');
m01.forEach((url, i) => {
    const { brand, name } = parseFragranticaUrl(url);
    const slugGuess = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // Check if exists in mockData IDs
    const existsInMock = idMatches.some(id => {
        const idLower = id.toLowerCase();
        const nameLower = name.toLowerCase().replace(/\s+/g, '-');
        return idLower.includes(nameLower.slice(0, 6)) || nameLower.includes(idLower.slice(0, 6));
    });

    // Check if exists in description slugs
    const existsInDesc = descSlugs.some(s => {
        const sLower = s.toLowerCase();
        const nameLower = name.toLowerCase().replace(/\s+/g, '-');
        return sLower.includes(nameLower.slice(0, 8)) || nameLower.includes(sLower.slice(0, 8));
    });

    const exists = existsInMock || existsInDesc;

    console.log(`${String(i + 1).padStart(3)}. ${brand} | ${name}`);
    console.log(`     URL: ${url}`);
    console.log(`     Slug guess: ${slugGuess}`);
    console.log(`     In mockData: ${existsInMock ? 'YES' : 'NO'}`);
    console.log(`     In descriptions: ${existsInDesc ? 'YES' : 'NO'}`);
    console.log(`     Status: ${exists ? 'OK_EXISTING (check depth)' : 'NEW_WRITE'}`);
    console.log('');
});
