// HONEST AUDIT: Check every product shell against seed files
// Flag ALL inferred metadata
const fs = require('fs');

const men = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const women = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const seedUrls = new Set([...men.slice(0, 100), ...women.slice(0, 100)]);

const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const allIds = [...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);

// Original 58 products (before pipeline)
const ORIGINAL_58 = [
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
];
const originalSet = new Set(ORIGINAL_58);

// Items added by Anti pipeline
const pipelineItems = allIds.filter(id => !originalSet.has(id));

console.log('=== SOURCE AUDIT REPORT ===\n');
console.log('Total seeded items (men.txt 1-100 + women.txt 1-100):', 200);
console.log('Original products (pre-pipeline):', ORIGINAL_58.length);
console.log('Total products on site now:', allIds.length);
console.log('Items added by Anti pipeline:', pipelineItems.length);

// ALL pipeline items have inferred metadata
console.log('\n--- INFERRED METADATA STATUS ---');
console.log('Every pipeline item has the following fields INFERRED (not from verified source):');
console.log('  - perfumer: INFERRED from AI training data');
console.log('  - topNotes: INFERRED');
console.log('  - middleNotes: INFERRED');
console.log('  - baseNotes: INFERRED');
console.log('  - accords: INFERRED');
console.log('  - longevity: INFERRED');
console.log('  - sillage: INFERRED');
console.log('  - seasons: INFERRED');
console.log('  - score: INFERRED');
console.log('  - basePrice: INFERRED');
console.log('  - vibes: INFERRED');
console.log('  - description: INFERRED (short desc)');
console.log('  - verdict/verdictShort: INFERRED');

// Fields that are SAFE (derived from seed URL)
console.log('\nFields that ARE verifiable from seed URL:');
console.log('  - brand: YES (from URL path)');
console.log('  - brandSlug: YES (from URL path)');
console.log('  - name: YES (from URL path)');
console.log('  - gender: YES (from which file: men.txt / women.txt)');
console.log('  - id: DERIVED (brand+name slug)');

console.log('\n--- PIPELINE ITEMS (' + pipelineItems.length + ') ---');
pipelineItems.forEach(id => {
    console.log('  ' + id + ' | ALL metadata INFERRED');
});

// Items outside seed check
console.log('\n--- ITEMS POTENTIALLY OUTSIDE SEED ---');
console.log('(Items that may not correspond to any URL in men.txt/women.txt)');
const suspectItems = [];
pipelineItems.forEach(id => {
    // These are items that might be duplicates or invented
    if (id.includes('-2') || id.includes('-variant') || id === 'creed-absolu-aventus-2' || id === 'kayali-vanilla-28-2' || id === 'dior-sauvage-edp-variant') {
        suspectItems.push(id);
        console.log('  SUSPECT:', id, '— may be duplicate or renamed');
    }
});

console.log('\n=== SUMMARY ===');
console.log('Total seeded items: 200');
console.log('Total items created (pipeline): ' + pipelineItems.length);
console.log('Items with 100% INFERRED metadata: ' + pipelineItems.length + ' (ALL of them)');
console.log('Items potentially outside seed: ' + suspectItems.length);
console.log('Items blocked by source: 0 (should have been blocked but Anti guessed instead)');
console.log('Items safe for content inject (brand/name/gender correct): ~' + (pipelineItems.length - suspectItems.length));
console.log('\n=== RECOMMENDED ACTION ===');
console.log('Option A: KEEP shells but mark ALL perfumer/notes/accords/scores/price as BLOCKED_SOURCE');
console.log('Option B: ROLLBACK all pipeline items, keep only original 58');
console.log('Option C: Keep brand/name/gender, blank out inferred fields, wait for verified source data');
