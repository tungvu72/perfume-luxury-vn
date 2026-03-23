import fs from 'fs';
import path from 'path';

const d = 'data/products';
const missing = [];
const files = fs.readdirSync(d).filter(f => f.endsWith('.json'));

for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
  const imgs = [];
  if (j.image) imgs.push(j.image);
  if (j.images) j.images.forEach(i => imgs.push(i.url));
  
  for (const img of imgs) {
    const fp = path.join('public', img);
    if (!fs.existsSync(fp)) {
      missing.push({ product: f.replace('.json', ''), img });
    }
  }
}

if (missing.length === 0) {
  console.log('All images exist!');
} else {
  missing.forEach(m => console.log(`MISSING: ${m.product} -> ${m.img}`));
  console.log(`\nTotal missing: ${missing.length}`);
}
