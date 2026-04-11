const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = content.split('\n');

const suspects = [
  ["baccarat-rouge-540", "mfk-baccarat-54-edp"],
  ["encre-noire", "lalique-encre-noir-edt"],
  ["for-her-edp", "narciso-rodriguez-for-her-eau-de-parfum"],
  ["le-parfum-elie-saab", "le-parfum-lolita"],
  ["my-way", "my-way-edp"],
  ["y-edp", "ysl-y-eau-de-parfum"]
];

suspects.forEach(([id1, id2]) => {
  console.log(`\n========== ${id1} vs ${id2} ==========`);
  [id1, id2].forEach(id => {
    const idx = lines.findIndex(l => l.includes(`id: "${id}"`));
    if (idx === -1) { console.log(`  ${id}: NOT FOUND`); return; }
    
    // Grab brand, name, brandSlug within 15 lines
    const block = lines.slice(idx, idx + 15);
    const brand = block.find(l => l.trim().startsWith('brand:'));
    const name = block.find(l => l.trim().startsWith('name:'));
    const brandSlug = block.find(l => l.trim().startsWith('brandSlug:'));
    const image = block.find(l => l.trim().startsWith('image:'));
    
    console.log(`  [${id}]`);
    console.log(`    ${(brand || '').trim()}`);
    console.log(`    ${(brandSlug || '').trim()}`);
    console.log(`    ${(name || '').trim()}`);
    console.log(`    ${(image || '').trim()}`);
  });
});
