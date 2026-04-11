const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = content.split('\n');

["encre-noire", "lalique-encre-noir-edt"].forEach(id => {
  const idx = lines.findIndex(l => l.includes(`id: "${id}"`));
  const block = lines.slice(idx, idx + 20);
  const brandSlug = (block.find(l => l.trim().startsWith('brandSlug:')) || '').match(/"([^"]+)"/)?.[1];
  const gender = (block.find(l => l.trim().startsWith('gender:')) || '').match(/"([^"]+)"/)?.[1];
  console.log(`https://www.maisondeson.com/nuoc-hoa-${gender}-${brandSlug}-${id}`);
});
