const fs = require('fs');
const path = require('path');
const DIR = 'D:/anti/perfume-luxury-vn/public/images/products';

// Find all products with main but no bottle
const files = fs.readdirSync(DIR);
const mainFiles = files.filter(f => f.includes('-main.'));
const missing = [];

for (const mf of mainFiles) {
  const id = mf.replace(/-main\.[^.]+$/, '');
  const hasBottle = files.some(f => f.startsWith(id + '-bottle.'));
  if (!hasBottle) {
    missing.push(id);
  }
}

console.log(`Products with main but no bottle: ${missing.length}`);
missing.forEach((id, i) => console.log(`${i+1}. ${id}`));
fs.writeFileSync('D:/anti/perfume-luxury-vn/need_bottle.json', JSON.stringify(missing, null, 2));
