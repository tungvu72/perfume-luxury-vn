// CLEANUP SCRIPT — Strip all inferred metadata from pipeline shells
// KEEP: id, brand, brandSlug, name, subName, gender
// BLANK: everything else
// REMOVE: chloe-edp
// BLOCK: 8 suspect items
const fs = require('fs');

const MOCK_PATH = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
let src = fs.readFileSync(MOCK_PATH, 'utf8');

// Original 58 IDs — do NOT touch
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

// INVALID items — remove entirely
const INVALID = new Set(['chloe-edp']);

// SUSPECT items — keep but mark BLOCKED_REVIEW
const SUSPECT = new Set([
    'creed-absolu-aventus-2',
    'kayali-vanilla-28-2',
    'dior-sauvage-edp-variant',
    'dior-addict-edp-2014',
    'dior-hypnotic-poison-edp',
    'chanel-allure-edp',
    'chloe-nomade-edp',
    'guerlain-linstant-de-guerlain-femme'
]);

// Find the MASTER_PERFUMES array boundaries
const startMarker = 'export const MASTER_PERFUMES: Perfume[] = [';
const startIdx = src.indexOf(startMarker);
if (startIdx === -1) { console.error('Cannot find MASTER_PERFUMES'); process.exit(1); }

// Split into: header, products, footer
const arrayStart = startIdx + startMarker.length;

// Find matching closing bracket
let depth = 1, pos = arrayStart;
while (depth > 0 && pos < src.length) {
    if (src[pos] === '[') depth++;
    else if (src[pos] === ']') depth--;
    pos++;
}
const arrayEnd = pos - 1;

const header = src.slice(0, arrayStart);
const productsStr = src.slice(arrayStart, arrayEnd);
const footer = src.slice(arrayEnd);

// Split products into individual blocks
// Each product starts with "  {" and ends with "  },"
const productBlocks = [];
let blockStart = -1;
let braceDepth = 0;

for (let i = 0; i < productsStr.length; i++) {
    const ch = productsStr[i];
    if (ch === '{' && braceDepth === 0) {
        blockStart = i;
        braceDepth = 1;
    } else if (ch === '{') {
        braceDepth++;
    } else if (ch === '}') {
        braceDepth--;
        if (braceDepth === 0 && blockStart !== -1) {
            productBlocks.push(productsStr.slice(blockStart, i + 1));
            blockStart = -1;
        }
    }
}

console.log('Found', productBlocks.length, 'product blocks');

// Extract ID from a block
function extractField(block, field) {
    const regex = new RegExp(field + ':\\s*"([^"]*)"');
    const m = block.match(regex);
    return m ? m[1] : null;
}

let cleaned = 0, removed = 0, blocked = 0, kept = 0;
const readyQueue = [];
const blockedQueue = [];
const newBlocks = [];

for (const block of productBlocks) {
    const id = extractField(block, 'id');
    if (!id) { newBlocks.push(block); kept++; continue; }

    // Skip original 58
    if (ORIGINAL_58.has(id)) {
        newBlocks.push(block);
        kept++;
        continue;
    }

    // Remove INVALID
    if (INVALID.has(id)) {
        console.log('REMOVED:', id);
        removed++;
        continue;
    }

    // Extract SAFE fields
    const brand = extractField(block, 'brand');
    const brandSlug = extractField(block, 'brandSlug');
    const name = extractField(block, 'name');
    const subName = extractField(block, 'subName');
    const gender = extractField(block, 'gender');
    const isBlocked = SUSPECT.has(id);

    const status = isBlocked ? 'BLOCKED_REVIEW' : 'NEEDS_SOURCE';

    // Build clean block
    const cleanBlock = `  {
    id: "${id}",
    brandSlug: "${brandSlug}",
    brand: "${brand}",
    name: "${name}",
    subName: "${subName || ''}",
    perfumer: "BLOCKED_SOURCE",
    gender: "${gender}",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "${brand} ${name} chính hãng", verified: false }],
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
    tags: ["${gender === 'nam' ? 'Nam' : gender === 'nu' ? 'Nữ' : 'Unisex'}", "${status}"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "${status}"
  }`;

    newBlocks.push(cleanBlock);
    cleaned++;

    if (isBlocked) {
        blocked++;
        blockedQueue.push({ id, brand, name, status: 'BLOCKED_REVIEW' });
    } else {
        readyQueue.push({ id, brand, name, status: 'READY_FOR_CONTENT' });
    }
}

// Reconstruct file
const newProductsStr = '\n' + newBlocks.join(',\n') + '\n';
const newSrc = header + newProductsStr + footer;
fs.writeFileSync(MOCK_PATH, newSrc, 'utf8');

// Output summary
console.log('\n=== CLEANUP SUMMARY ===');
console.log('Total cleaned (metadata stripped):', cleaned);
console.log('Total removed (INVALID):', removed);
console.log('Total blocked_review (suspect):', blocked);
console.log('Total ready_for_content:', readyQueue.length);
console.log('Total original kept untouched:', kept);

console.log('\n=== READY QUEUE (' + readyQueue.length + ' items) ===');
readyQueue.forEach(r => console.log('  ✅', r.id));

console.log('\n=== BLOCKED QUEUE (' + blockedQueue.length + ' items) ===');
blockedQueue.forEach(b => console.log('  ⛔', b.id, '—', b.brand, b.name));

// Save queues
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/ready-queue.json',
    JSON.stringify(readyQueue, null, 2));
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/blocked-queue.json',
    JSON.stringify(blockedQueue, null, 2));

console.log('\nSaved ready-queue.json and blocked-queue.json');
