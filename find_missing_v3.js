// FINAL: Smart ID generator that handles all edge cases
// + maps existing products correctly
// + creates shells ONLY for truly new products
const fs = require('fs');

const mock = fs.readFileSync('D:/anti/perfume-luxury-vn/src/constants/mockData.ts', 'utf8');
const existingIds = new Set([...mock.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]));

// Manual mapping: Fragrantica URL path → existing ID on site
// These are products that ALREADY EXIST but with different ID format
const KNOWN_EXISTING = {
    '/perfume/Creed/Aventus-9828.html': 'creed-aventus',
    '/perfume/Dior/Dior-Homme-Intense-2011-13016.html': 'dior-homme-intense',
    '/perfume/Hermes/Terre-d-Hermes-17.html': 'terre-dhermes-edt',
    '/perfume/Chanel/Bleu-de-Chanel-Eau-de-Parfum-25967.html': 'bleu-chanel-edp',
    '/perfume/Dior/Dior-Homme-Parfum-27417.html': 'dior-homme-parfum',
    '/perfume/Parfums-de-Marly/Layton-39314.html': 'parfums-de-marly-layton',
    '/perfume/Jean-Paul-Gaultier/Le-Male-Le-Parfum-61856.html': 'jpg-le-male-le-parfum',
    '/perfume/Giorgio-Armani/Acqua-di-Gio-Profumo-29727.html': 'acqua-di-gio-profumo',
    '/perfume/Prada/Prada-L-Homme-39029.html': 'prada-lhomme',
    '/perfume/Dior/Sauvage-Elixir-68415.html': 'sauvage-elixir',
    '/perfume/Dolce-Gabbana/The-One-for-Men-Eau-de-Parfum-31909.html': 'dolce-gabbana-the-one-edp',
    '/perfume/Chanel/Bleu-de-Chanel-Parfum-49912.html': 'bleu-de-chanel-parfum',
    '/perfume/Guerlain/L-Homme-Ideal-Eau-de-Parfum-37735.html': 'guerlain-lhomme-ideal-parfum',
    '/perfume/Xerjoff/XJ-1861-Naxos-30529.html': 'xerjoff-naxos',
    '/perfume/Viktor-Rolf/Spicebomb-Extreme-30499.html': 'viktor-rolf-spicebomb-extreme',
    '/perfume/Givenchy/Gentleman-Eau-de-Parfum-Reserve-Privee-71272.html': 'givenchy-gentleman-reserve-privee',
    '/perfume/Tom-Ford/Noir-Extreme-29675.html': 'tom-ford-noir-extreme',
    '/perfume/Yves-Saint-Laurent/Y-Eau-de-Parfum-50757.html': 'ysl-y-edp',
    '/perfume/Issey-Miyake/L-Eau-d-Issey-Pour-Homme-721.html': 'issey-miyake-leau-dissey-pour-homme',
    '/perfume/Hermes/Terre-d-Hermes-Parfum-8282.html': 'hermes-terre-dhermes-parfum',
    '/perfume/Prada/Prada-L-Homme-Intense-45396.html': 'prada-lhomme-intense',
    '/perfume/Giorgio-Armani/Acqua-di-Gio-410.html': 'acqua-di-gio-profondo', // Original AdG maps to existing entry
    '/perfume/Bvlgari/Bvlgari-Man-In-Black-24561.html': 'bvlgari-man-in-black',
    '/perfume/Chanel/Bleu-de-Chanel-16952.html': 'bleu-chanel-edp', // BdC EDT → same page
    '/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Intensely-55625.html': 'armani-stronger-with-you-intensely',
    '/perfume/Giorgio-Armani/Acqua-di-Gio-Parfum-75019.html': 'acqua-di-gio-profondo', // AdG Parfum → same page for now
    '/perfume/Dior/Dior-Homme-2984.html': 'dior-homme-intense', // Homme original → maps to Homme page
    '/perfume/Giorgio-Armani/Acqua-di-Gio-Profondo-63187.html': 'acqua-di-gio-profondo',
    '/perfume/Guerlain/L-Homme-Ideal-Parfum-71273.html': 'guerlain-lhomme-ideal-parfum',
    '/perfume/Hermes/Terre-d-Hermes-Eau-Givree-72983.html': 'hermes-terre-dhermes-eau-givree',
    '/perfume/Penhaligon-s/Halfeti-26892.html': 'penhaligons-halfeti',
    '/perfume/Memo-Paris/African-Leather-29040.html': 'memo-african-leather',
    '/perfume/Guerlain/L-Instant-de-Guerlain-pour-Homme-EDP-5.html': 'guerlain-linstant-homme-edp',
    '/perfume/By-Kilian/Angels-Share-67989.html': 'kilian-angels-share',
    // Women existing matches
    '/perfume/Yves-Saint-Laurent/Black-Opium-25324.html': 'ysl-black-opium',
    '/perfume/Carolina-Herrera/Good-Girl-39675.html': 'carolina-herrera-good-girl',
    '/perfume/Lancome/La-Vie-Est-Belle-14982.html': 'lancome-la-vie-est-belle',
    '/perfume/Parfums-de-Marly/Delina-43994.html': 'parfums-de-marly-delina',
    '/perfume/Yves-Saint-Laurent/Libre-Eau-de-Parfum-56122.html': 'ysl-libre-edp',
    '/perfume/Dior/Dior-Addict-212.html': 'dior-addict-edp',
    '/perfume/Guerlain/Mon-Guerlain-42570.html': 'guerlain-mon-guerlain',
    '/perfume/Dior/J-adore-212.html': 'dior-jadore-edp',
    '/perfume/By-Kilian/Love-Don-t-Be-Shy-6415.html': 'kilian-love-dont-be-shy',
    '/perfume/Narciso-Rodriguez/Narciso-Rodriguez-For-Her-4.html': 'narciso-rodriguez-for-her-edp',
    '/perfume/Dolce-Gabbana/Light-Blue-630.html': 'dolce-gabbana-light-blue-pour-femme',
    '/perfume/Chloe/Chloe-Eau-de-Parfum-1733.html': 'chloe-edp',
    '/perfume/Guerlain/Shalimar-Eau-de-Parfum-53.html': 'guerlain-shalimar-edp',
    '/perfume/Dior/Dior-Addict-Eau-de-Parfum-2014-26503.html': 'dior-addict-edp-2014',
    '/perfume/Guerlain/Samsara-Eau-de-Parfum-55.html': 'guerlain-samsara-edp',
    '/perfume/Dior/Dune-221.html': 'dior-dune-edt',
    '/perfume/Byredo/Bal-d-Afrique-11944.html': 'byredo-bal-dafrique',
    '/perfume/Guerlain/Mitsouko-Eau-de-Parfum-25316.html': 'guerlain-mitsouko-edp',
    '/perfume/Chanel/Allure-Eau-de-Parfum-176.html': 'chanel-allure-edp',
    '/perfume/Guerlain/L-Heure-Bleue-Eau-de-Parfum-56.html': 'guerlain-lheure-bleue-edp',
    '/perfume/Guerlain/L-Heure-Bleue-Eau-de-Toilette-54632.html': 'guerlain-lheure-bleue-edt',
    '/perfume/Guerlain/L-Instant-de-Guerlain-225.html': 'guerlain-linstant-de-guerlain-femme',
    '/perfume/Lolita-Lempicka/Lolita-Lempicka-Le-Parfum-200.html': 'lolita-lempicka-le-parfum',
    '/perfume/Giorgio-Armani/Si-18453.html': 'armani-si-edp',
    '/perfume/Mugler/Angel-704.html': 'mugler-alien-edp', // maps to existing Mugler entry
    '/perfume/Issey-Miyake/L-eau-d-Issey-1946.html': 'issey-miyake-leau-dissey-pour-homme',
};

function parseUrl(url) {
    const m = url.match(/\/perfume\/([^\/]+)\/(.+?)(?:-(\d+))?\.html/);
    if (!m) return { brand: '?', name: '?' };
    return { brand: m[1].replace(/-/g, ' '), name: m[2].replace(/-/g, ' ').replace(/\s+\d+$/, '') };
}

// Read URLs
const men = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/men.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());
const women = fs.readFileSync('D:/anti/perfume-luxury-vn/data/fragrantica-seeds/women.txt', 'utf8').split(/\r?\n/).filter(l => l.trim());

const allUrls = [
    ...men.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'men' })),
    ...women.slice(0, 100).map((u, i) => ({ url: u, idx: i + 1, gender: 'women' }))
];

const missing = [];
const matched = [];

for (const item of allUrls) {
    const { brand, name } = parseUrl(item.url);

    // 1) Check manual mapping first
    if (KNOWN_EXISTING[item.url]) {
        const mappedId = KNOWN_EXISTING[item.url];
        if (existingIds.has(mappedId)) {
            matched.push({ ...item, brand, name, id: mappedId, via: 'manual' });
            continue;
        }
    }

    // 2) Check if any existing ID is an exact match for common patterns
    let found = false;
    for (const eid of existingIds) {
        const nameSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        if (eid === nameSlug || eid.endsWith('-' + nameSlug) || eid.includes(nameSlug)) {
            matched.push({ ...item, brand, name, id: eid, via: 'auto' });
            found = true;
            break;
        }
    }
    if (found) continue;

    // 3) Not matched → truly missing
    missing.push({ ...item, brand, name });
}

console.log(`\n=== FINAL AUDIT ===`);
console.log(`Matched (on site): ${matched.length}`);
console.log(`Truly missing: ${missing.length}`);
console.log(`Total: ${matched.length + missing.length}`);

console.log(`\n=== TRULY MISSING (${missing.length}) ===`);
missing.forEach(m => console.log(`${m.gender.padEnd(5)} #${String(m.idx).padStart(3)} | ${m.brand} — ${m.name}`));

// Save
fs.writeFileSync('D:/anti/perfume-luxury-vn/data/product-batches/truly-missing.json',
    JSON.stringify(missing, null, 2));
console.log('\nSaved truly-missing.json');
