// FULL AUDIT: Cross-reference every pipeline item against seed files
const fs = require('fs');

// Read seeds
const menLines = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const womenLines = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

const menSeed = menLines.slice(0, 100).map((url, i) => ({ url: url.trim(), line: i + 1, gender: 'men' }));
const womenSeed = womenLines.slice(0, 100).map((url, i) => ({ url: url.trim(), line: i + 1, gender: 'women' }));
const allSeeds = [...menSeed, ...womenSeed];

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return null;
    return { brand: m[1].replace(/-/g, ' '), name: m[2].replace(/-/g, ' ').replace(/\s+\d+$/, ''), fragId: m[3] };
}

// Build seed lookup: normalize name for matching
function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const seedLookup = allSeeds.map(s => {
    const parsed = parseUrl(s.url);
    return { ...s, parsed, normalized: parsed ? normalize(parsed.brand + parsed.name) : '' };
});

// Read mockData and extract pipeline items
const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');

// Original 58 IDs
const ORIGINAL_58 = new Set([
    'sauvage-elixir', 'armani-stronger-with-you-intensely', 'lattafa-khamrah', 'bleu-chanel-edp',
    'ysl-black-opium', 'creed-aventus', 'baccarat-rouge-540', 'tom-ford-noir-extreme',
    'dior-sauvage-edp', 'ysl-y-edp', 'versace-eros-edp', 'acqua-di-gio-profondo',
    'afnan-9pm', 'jpg-le-male-le-parfum', 'jpg-ultra-male', 'montblanc-explorer',
    'prada-lhomme', 'terre-dhermes-edt', 'dior-homme-intense', 'valentino-uomo-born-in-roma-intense',
    'jpg-le-beau-le-parfum', 'mancera-cedrat-boise', 'maison-margiela-jazz-club', 'kilian-angels-share',
    'ysl-libre-edp', 'parfums-de-marly-delina', 'carolina-herrera-good-girl', 'lancome-la-vie-est-belle',
    'valentino-born-in-roma-intense', 'azzaro-the-most-wanted-parfum', 'mancera-instant-crush',
    'kayali-vanilla-28', 'prada-luna-rossa-carbon', 'dolce-gabbana-the-one-edp', 'giorgio-armani-my-way',
    'burberry-her-edp', 'gucci-bloom-edp', 'miss-dior-blooming-bouquet', 'chloe-signature-edp',
    'narciso-rodriguez-for-her-edp', 'ysl-mon-paris-edp', 'versace-bright-crystal',
    'dolce-gabbana-light-blue-pour-femme', 'armani-si-edp', 'chanel-coco-mademoiselle-edp',
    'armaf-club-de-nuit-intense-man', 'givenchy-gentleman-reserve-privee', 'viktor-rolf-spicebomb-extreme',
    'issey-miyake-leau-dissey-pour-homme', 'bvlgari-man-in-black', 'boss-bottled-edp', 'coach-for-men',
    'moschino-toy-boy', 'initio-side-effect', 'xerjoff-erba-pura', 'mugler-alien-edp',
    'elie-saab-le-parfum', 'maison-francis-kurkdjian-gentle-fluidity-gold'
]);

const allIds = [...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
const pipelineIds = allIds.filter(id => !ORIGINAL_58.has(id));

// Try to match each pipeline item to a seed
function findSeedMatch(productId, productBrand, productName) {
    const prodNorm = normalize(productBrand + productName);
    const prodNameNorm = normalize(productName);

    // Try exact normalized match
    for (const s of seedLookup) {
        if (!s.parsed) continue;
        const seedNorm = s.normalized;
        const seedNameNorm = normalize(s.parsed.name);

        // Check multiple match strategies
        if (prodNorm === seedNorm) return { ...s, matchType: 'EXACT' };
        if (prodNameNorm === seedNameNorm) return { ...s, matchType: 'NAME_EXACT' };

        // Substring match (>70% of longer string)
        const shorter = prodNameNorm.length < seedNameNorm.length ? prodNameNorm : seedNameNorm;
        const longer = prodNameNorm.length < seedNameNorm.length ? seedNameNorm : prodNameNorm;
        if (shorter.length >= 5 && longer.includes(shorter)) return { ...s, matchType: 'CONTAINS' };

        // Check product ID against seed name slug
        const seedSlug = normalize(s.parsed.name);
        const idNorm = productId.replace(/-/g, '');
        if (idNorm.includes(seedSlug.slice(0, Math.min(seedSlug.length, 10))) && seedSlug.length >= 5)
            return { ...s, matchType: 'ID_CONTAINS_SEED' };
        if (seedSlug.includes(idNorm.slice(0, Math.min(idNorm.length, 10))) && idNorm.length >= 5)
            return { ...s, matchType: 'SEED_CONTAINS_ID' };
    }
    return null;
}

// Extract brand+name from mockData for each pipeline item
function extractProductInfo(id) {
    const regex = new RegExp(`id:\\s*"${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?brand:\\s*"([^"]*)"[\\s\\S]*?name:\\s*"([^"]*)"`, 'g');
    const m = regex.exec(mock);
    if (m) return { brand: m[1], name: m[2] };
    return { brand: '?', name: '?' };
}

// Classification
const results = {
    SAFE_FOR_INJECT: [],
    NEEDS_CLEANUP: [],
    BLOCKED_SOURCE: [],
    INVALID_ITEM: []
};

const detailedResults = [];

for (const id of pipelineIds) {
    const info = extractProductInfo(id);
    const seedMatch = findSeedMatch(id, info.brand, info.name);

    const item = {
        id,
        brand: info.brand,
        name: info.name,
        seedMatch: seedMatch ? {
            file: seedMatch.gender,
            line: seedMatch.line,
            url: seedMatch.url,
            matchType: seedMatch.matchType
        } : null,
        // ALL these fields are INFERRED for every pipeline item
        inferredFields: [
            'perfumer', 'topNotes', 'middleNotes', 'baseNotes', 'accords',
            'longevity', 'sillage', 'seasons', 'dayNight', 'score',
            'basePrice', 'vibes', 'tags', 'sizes', 'description', 'verdict', 'verdictShort'
        ],
        safeFields: ['brand', 'brandSlug', 'name', 'gender'],
        suspectFields: ['subName', 'id'],
        status: null,
        problems: []
    };

    if (!seedMatch) {
        item.status = 'INVALID_ITEM';
        item.problems.push('No matching URL found in men.txt or women.txt');
        results.INVALID_ITEM.push(item);
    } else {
        // All items have inferred metadata → NEEDS_CLEANUP
        item.status = 'NEEDS_CLEANUP';
        item.problems.push('All metadata fields (perfumer, notes, accords, scores, price, etc.) are INFERRED from AI training data, not from verified source');
        results.NEEDS_CLEANUP.push(item);
    }

    detailedResults.push(item);
}

// Output
console.log('=== SHELL AUDIT SUMMARY ===');
console.log('Total shells reviewed:', pipelineIds.length);
console.log('SAFE_FOR_INJECT:', results.SAFE_FOR_INJECT.length, '(none — all have inferred metadata)');
console.log('NEEDS_CLEANUP:', results.NEEDS_CLEANUP.length);
console.log('BLOCKED_SOURCE:', results.BLOCKED_SOURCE.length);
console.log('INVALID_ITEM:', results.INVALID_ITEM.length);

console.log('\n=== INVALID / SUSPECT ITEMS ===');
results.INVALID_ITEM.forEach(item => {
    console.log(`\n  ID: ${item.id}`);
    console.log(`  Name: ${item.brand} — ${item.name}`);
    console.log(`  Seed source: NOT FOUND`);
    console.log(`  Problem: ${item.problems.join('; ')}`);
    console.log(`  Action: REMOVE from mockData`);
});

console.log('\n=== NEEDS_CLEANUP ITEMS (matched seed but has inferred metadata) ===');
results.NEEDS_CLEANUP.forEach(item => {
    console.log(`  ${item.id} | ${item.seedMatch.file} L${item.seedMatch.line} | ${item.seedMatch.matchType}`);
});

console.log('\n=== CLEANUP PLAN ===');
console.log('Fields to REMOVE across ALL pipeline items:');
console.log('  perfumer, topNotes, middleNotes, baseNotes, accords,');
console.log('  longevity, sillage, seasons, dayNight, score,');
console.log('  basePrice, vibes, tags, sizes, description, verdict, verdictShort');
console.log('\nFields to KEEP across ALL pipeline items:');
console.log('  brand, brandSlug, name, gender, id, image(placeholder)');
console.log('\nItems to ROLLBACK (INVALID):');
results.INVALID_ITEM.forEach(item => console.log('  REMOVE: ' + item.id));
console.log('\nAfter cleanup, items ready for Coder content inject:');
console.log('  ' + results.NEEDS_CLEANUP.length + ' items (once metadata fields are blanked/blocked)');

// Save full results
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/full-audit-results.json',
    JSON.stringify(detailedResults, null, 2));
console.log('\nFull results saved to full-audit-results.json');
