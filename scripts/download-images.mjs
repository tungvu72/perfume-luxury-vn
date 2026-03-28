import fs from 'fs';
import path from 'path';

const dataDir = 'D:/anti/perfume-luxury-vn/data/products';
const imgDir = 'D:/anti/perfume-luxury-vn/public/images/products';

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
const mismatches = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'));
  const imgFile = data.image?.replace('/images/products/', '') || '';
  const id = data.id;
  const brand = data.brandSlug || '';
  
  // Check if imgFile contains the product id or brand at minimum
  if (!imgFile.includes(id) && !imgFile.includes(brand)) {
    mismatches.push({ json: f, id, brand: data.brand, imgFile });
  }
}

if (mismatches.length) {
  console.log(`\n⚠️ ${mismatches.length} products with suspicious image paths:`);
  mismatches.forEach(m => console.log(`  ${m.json} (${m.brand} ${m.id}) → ${m.imgFile}`));
} else {
  console.log('✅ All image paths look correct');
}

// Also check for duplicate Light Blue issue
const lightBlue = files.filter(f => f.includes('light-blue'));
lightBlue.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'));
  console.log(`  ${f} → ${data.image}`);
});
