// Find remaining seed URLs that have NO product on site
// Then create clean shells with ONLY verifiable data from URL
const fs = require('fs');

const MOCK_PATH = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
const mock = fs.readFileSync(MOCK_PATH, 'utf8');
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

const menLines = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const womenLines = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

// Brand abbreviation map
const BRAND_SLUGS = {
    'Yves Saint Laurent': 'ysl',
    'Jean Paul Gaultier': 'jpg',
    'Dolce Gabbana': 'dg',
    'Giorgio Armani': 'armani',
    'Hugo Boss': 'boss',
    'Maison Francis Kurkdjian': 'mfk',
    'Calvin Klein': 'ck',
    'Parfums de Marly': 'parfums-de-marly',
    'Narciso Rodriguez': 'narciso-rodriguez',
    'Essential Parfums': 'essential-parfums',
    'Initio Parfums Prives': 'initio',
    'Frederic Malle': 'frederic-malle',
    'Lolita Lempicka': 'lolita-lempicka',
    'Louis Vuitton': 'louis-vuitton',
    'Memo Paris': 'memo-paris',
    'Guy Laroche': 'guy-laroche',
    'Tom Ford': 'tom-ford',
    'Marc Antoine Barrois': 'marc-antoine-barrois',
    'By Kilian': 'kilian',
    'Acqua di Parma': 'acqua-di-parma',
    'Carolina Herrera': 'carolina-herrera',
    'Viktor Rolf': 'viktor-rolf',
    'Zadig Voltaire': 'zadig-voltaire',
    'Maison Margiela': 'maison-margiela',
    'Van Cleef Arpels': 'van-cleef-arpels',
    'Penhaligon s': 'penhaligons',
    'Les Liquides Imaginaires': 'les-liquides-imaginaires',
    'Giardini Di Toscana': 'giardini-di-toscana',
    'Sospiro Perfumes': 'sospiro',
};

const BRAND_DISPLAY = {
    'ysl': 'YVES SAINT LAURENT',
    'jpg': 'JEAN PAUL GAULTIER',
    'dg': 'DOLCE & GABBANA',
    'armani': 'GIORGIO ARMANI',
    'boss': 'HUGO BOSS',
    'mfk': 'MAISON FRANCIS KURKDJIAN',
    'ck': 'CALVIN KLEIN',
    'kilian': 'BY KILIAN',
    'initio': 'INITIO PARFUMS PRIVÉS',
    'penhaligons': "PENHALIGON'S",
};

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return null;
    const brand = m[1].replace(/-/g, ' ');
    let name = m[2].replace(/-/g, ' ');
    // Remove trailing Fragrantica ID from name
    name = name.replace(/\s+\d+$/, '');
    return { brand, name };
}

function slug(str) {
    return str.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/['`']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function generateId(brand, name, brandSlug) {
    const nSlug = slug(name);
    // Remove brand prefix from name if name starts with brand
    // E.g. "Dior Homme Intense" with brand "dior" → "dior-homme-intense" not "dior-dior-homme-intense"
    const bWords = brandSlug.split('-');
    const nWords = nSlug.split('-');
    if (nWords[0] === bWords[0]) {
        // Name starts with brand name already
        return nSlug;
    }
    return `${brandSlug}-${nSlug}`;
}

function getBrandSlug(brand) {
    return BRAND_SLUGS[brand] || slug(brand);
}

function getBrandDisplay(brandSlug, rawBrand) {
    return BRAND_DISPLAY[brandSlug] || rawBrand.toUpperCase();
}

// Concentration from name
function getSubName(name) {
    const lower = name.toLowerCase();
    if (lower.includes('parfum') && !lower.includes('eau de parfum')) return 'Parfum';
    if (lower.includes('extrait')) return 'Extrait de Parfum';
    if (lower.includes('eau de parfum intense')) return 'Eau de Parfum Intense';
    if (lower.includes('eau de parfum')) return 'Eau de Parfum';
    if (lower.includes('eau de toilette')) return 'Eau de Toilette';
    if (lower.includes('eau de cologne')) return 'Eau de Cologne';
    if (lower.includes('le parfum')) return 'Le Parfum';
    if (lower.includes('elixir')) return 'Elixir';
    if (lower.includes('intense')) return 'Intense';
    return 'Eau de Parfum'; // Default
}

// Clean product name (remove concentration suffix for display)
function cleanName(name) {
    return name
        .replace(/\s*Eau de Parfum\s*/gi, ' ')
        .replace(/\s*Eau de Toilette\s*/gi, ' ')
        .replace(/\s*Eau de Cologne\s*/gi, ' ')
        .replace(/\s*Extrait de Parfum\s*/gi, ' ')
        .replace(/\s*Le Parfum\s*/gi, ' ')
        .replace(/\s*Parfum\s*/gi, ' ')
        .trim()
        || name;
}

// Check if a seed URL has a matching product
function hasMatch(seedId, existingIds) {
    if (existingIds.has(seedId)) return true;
    // Also check partial matches
    for (const eid of existingIds) {
        // Strong match: one contains the other and >60% length overlap
        const shorter = seedId.length < eid.length ? seedId : eid;
        const longer = seedId.length < eid.length ? eid : seedId;
        if (shorter.length >= 8 && longer.includes(shorter)) return true;
        if (shorter.length >= 8 && shorter.includes(longer.slice(0, Math.floor(longer.length * 0.7)))) return true;
    }
    return false;
}

// Process all seeds
const missing = [];
const found = [];

function processSeed(url, lineNum, gender) {
    const parsed = parseUrl(url);
    if (!parsed) return;

    const brandSlug = getBrandSlug(parsed.brand);
    const id = generateId(parsed.brand, parsed.name, brandSlug);
    const brandDisplay = getBrandDisplay(brandSlug, parsed.brand);

    if (hasMatch(id, existingIds)) {
        found.push({ id, gender, line: lineNum });
    } else {
        missing.push({
            id,
            brandSlug,
            brand: brandDisplay,
            name: parsed.name,
            subName: getSubName(parsed.name),
            gender: gender === 'men' ? 'nam' : 'nu',
            seedFile: gender,
            seedLine: lineNum,
            seedUrl: url
        });
    }
}

menLines.slice(0, 100).forEach((url, i) => processSeed(url.trim(), i + 1, 'men'));
womenLines.slice(0, 100).forEach((url, i) => processSeed(url.trim(), i + 1, 'women'));

console.log('=== SEED COVERAGE ===');
console.log('Found (on site):', found.length);
console.log('Missing (need shell):', missing.length);
console.log('Total:', found.length + missing.length);

console.log('\n=== MISSING PRODUCTS ===');
missing.forEach(m => {
    console.log(`  ${m.seedFile} L${String(m.seedLine).padStart(3)} | ${m.id} | ${m.brand} — ${m.name}`);
});

// Save missing for injection
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/remaining-missing.json',
    JSON.stringify(missing, null, 2));
console.log('\nSaved', missing.length, 'items to remaining-missing.json');
