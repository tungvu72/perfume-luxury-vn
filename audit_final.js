const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = content.split('\n');

const products = [];
let i = 0;
while (i < lines.length) {
  const idMatch = lines[i].match(/^\s*id:\s*"([^"]+)"/);
  if (idMatch) {
    const id = idMatch[1];
    const block = lines.slice(i, i + 25);
    const brand = (block.find(l => l.trim().startsWith('brand:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const brandSlug = (block.find(l => l.trim().startsWith('brandSlug:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const name = (block.find(l => l.trim().startsWith('name:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const gender = (block.find(l => l.trim().startsWith('gender:')) || '').match(/"([^"]+)"/)?.[1] || '';
    products.push({ id, brand: brand.toUpperCase(), brandSlug, name, gender, line: i + 1 });
  }
  i++;
}

// 1. Check duplicate IDs
console.log("═══════════════════════════════════════");
console.log("  CHECK 1: DUPLICATE IDs");
console.log("═══════════════════════════════════════");
const idCounts = {};
products.forEach(p => { idCounts[p.id] = (idCounts[p.id] || 0) + 1; });
const dupIds = Object.entries(idCounts).filter(([_, c]) => c > 1);
if (dupIds.length === 0) console.log("✅ PASS — 0 duplicate IDs");
else dupIds.forEach(([id, c]) => console.log(`❌ FAIL — "${id}" appears ${c} times`));

// 2. Check exact same name + same brand
console.log("\n═══════════════════════════════════════");
console.log("  CHECK 2: SAME NAME + SAME BRAND");
console.log("═══════════════════════════════════════");
const nameBrandKey = {};
let check2Pass = true;
products.forEach(p => {
  const key = `${p.brand}|||${p.name}`;
  if (!nameBrandKey[key]) nameBrandKey[key] = [];
  nameBrandKey[key].push(p);
});
Object.entries(nameBrandKey).forEach(([key, items]) => {
  if (items.length > 1) {
    check2Pass = false;
    console.log(`❌ DUPLICATE: "${items[0].brand} — ${items[0].name}"`);
    items.forEach(p => console.log(`   ID: ${p.id} | gender: ${p.gender} | line: ${p.line}`));
  }
});
if (check2Pass) console.log("✅ PASS — 0 exact name+brand duplicates");

// 3. Check similar names within same brand (fuzzy)
console.log("\n═══════════════════════════════════════");
console.log("  CHECK 3: SIMILAR NAMES (SAME BRAND)");
console.log("═══════════════════════════════════════");
function normalize(s) { return s.toLowerCase().replace(/[^a-z0-9]/g, ''); }
let check3Issues = 0;
const brandGroups = {};
products.forEach(p => {
  if (!brandGroups[p.brand]) brandGroups[p.brand] = [];
  brandGroups[p.brand].push(p);
});
Object.entries(brandGroups).forEach(([brand, items]) => {
  for (let a = 0; a < items.length; a++) {
    for (let b = a + 1; b < items.length; b++) {
      const nA = normalize(items[a].name);
      const nB = normalize(items[b].name);
      // Check if one is substring of the other or very similar
      if (nA === nB || (nA.length > 5 && nB.startsWith(nA)) || (nB.length > 5 && nA.startsWith(nB))) {
        if (items[a].name !== items[b].name) { // Already caught by check 2
          console.log(`⚠️  SIMILAR: [${brand}]`);
          console.log(`   A: "${items[a].name}" (${items[a].id})`);
          console.log(`   B: "${items[b].name}" (${items[b].id})`);
          check3Issues++;
        }
      }
    }
  }
});
if (check3Issues === 0) console.log("✅ PASS — 0 suspiciously similar names");

// 4. Check same brandSlug but different brand casing (data inconsistency)
console.log("\n═══════════════════════════════════════");
console.log("  CHECK 4: BRAND NAME INCONSISTENCY");
console.log("═══════════════════════════════════════");
const slugToBrands = {};
products.forEach(p => {
  if (!slugToBrands[p.brandSlug]) slugToBrands[p.brandSlug] = new Set();
  slugToBrands[p.brandSlug].add(p.brand);
});
let check4Issues = 0;
Object.entries(slugToBrands).forEach(([slug, brands]) => {
  if (brands.size > 1) {
    console.log(`⚠️  brandSlug "${slug}" has inconsistent brand names: ${[...brands].join(' | ')}`);
    check4Issues++;
  }
});
if (check4Issues === 0) console.log("✅ PASS — all brand names consistent");

console.log("\n═══════════════════════════════════════");
console.log(`  TOTAL: ${products.length} products`);
console.log("═══════════════════════════════════════");
