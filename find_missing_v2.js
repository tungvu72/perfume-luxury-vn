// STEP 1: Proper ID generator + exact match → find truly missing products
const fs = require('fs');

const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

// Brand abbreviation map (match existing conventions)
const BRAND_MAP = {
    'Yves Saint Laurent': 'ysl',
    'Jean Paul Gaultier': 'jpg',
    'Dolce Gabbana': 'dg',
    'Giorgio Armani': 'armani',
    'Hugo Boss': 'boss',
    'Maison Francis Kurkdjian': 'mfk',
    'Calvin Klein': 'ck',
    'Acqua di Parma': 'acqua-di-parma',
    'Viktor Rolf': 'viktor-rolf',
    'Parfums de Marly': 'parfums-de-marly',
    'Narciso Rodriguez': 'narciso-rodriguez',
    'Sospiro Perfumes': 'sospiro',
    'Marc Antoine Barrois': 'marc-antoine-barrois',
    'Essential Parfums': 'essential-parfums',
    'Les Liquides Imaginaires': 'les-liquides-imaginaires',
    'Giardini Di Toscana': 'giardini-di-toscana',
    'Zadig Voltaire': 'zadig-voltaire',
    'Initio Parfums Prives': 'initio',
    'Kayali Fragrances': 'kayali',
    'Frederic Malle': 'frederic-malle',
    'Lolita Lempicka': 'lolita-lempicka',
    'Louis Vuitton': 'louis-vuitton',
    'Memo Paris': 'memo-paris',
    'Guy Laroche': 'guy-laroche',
    'Tom Ford': 'tom-ford',
};

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return { brand: '?', rawName: '?' };
    const brand = m[1].replace(/-/g, ' ');
    const rawName = m[2].replace(/-/g, ' ');
    // Remove trailing ID number
    const name = rawName.replace(/\s+\d+$/, '');
    return { brand, name };
}

function slug(str) {
    return str.toLowerCase()
        .replace(/['`']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function generateId(brand, name) {
    const bSlug = BRAND_MAP[brand] || slug(brand);
    let nSlug = slug(name);

    // Remove brand name from product name if it starts with it
    // e.g. "Dior Homme Parfum" → "homme-parfum" if brand is "dior"
    const bParts = bSlug.split('-');
    const nParts = nSlug.split('-');
    if (nParts[0] === bParts[0] || nParts.slice(0, 2).join('-') === bSlug) {
        // Product name starts with brand name, keep as-is for well-known products
    }

    return `${bSlug}-${nSlug}`;
}

// Read all URLs
const men = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const women = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

const allUrls = [
    ...men.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'men' })),
    ...women.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'women' }))
];

// Check each URL
const missing = [];
const found = [];
const dupes = [];

for (const item of allUrls) {
    const { brand, name } = parseUrl(item.url);
    const id = generateId(brand, name);

    // Check EXACT match first
    if (existingIds.has(id)) {
        found.push({ ...item, brand, name, id, match: 'exact' });
        continue;
    }

    // Check if any existing ID contains this ID or vice versa (controlled fuzzy)
    let altMatch = null;
    for (const eid of existingIds) {
        if (eid === id) { altMatch = eid; break; }
        // Only match if >80% overlap
        if (id.length > 8 && eid.length > 8) {
            if (eid.startsWith(id.slice(0, Math.floor(id.length * 0.8))) ||
                id.startsWith(eid.slice(0, Math.floor(eid.length * 0.8)))) {
                altMatch = eid;
                break;
            }
        }
    }

    if (altMatch) {
        found.push({ ...item, brand, name, id, matchedTo: altMatch, match: 'fuzzy' });
    } else {
        missing.push({ ...item, brand, name, id });
    }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Existing IDs on site: ${existingIds.size}`);
console.log(`Found (matched): ${found.length}`);
console.log(`Missing (need shell): ${missing.length}`);
console.log(`Total: ${found.length + missing.length}`);

console.log(`\n=== MISSING PRODUCTS (${missing.length}) ===`);
missing.forEach(m => {
    console.log(`${m.gender.padEnd(5)} #${String(m.idx).padStart(3)} | ${m.id}`);
    console.log(`       ${m.brand} — ${m.name}`);
});

// Save missing list as JSON for next step
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/missing-products.json',
    JSON.stringify(missing.map(m => ({
        gender: m.gender, idx: m.idx, brand: m.brand, name: m.name,
        id: m.id, url: m.url
    })), null, 2));
console.log('\nSaved to missing-products.json');
