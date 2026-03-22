import fs from 'fs';
import path from 'path';

const productsDir = path.resolve('data/products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.json'));

let fixed = 0;
let skipped = 0;
const renames = [];

for (const file of files) {
  const filePath = path.join(productsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const oldId = data.id;
  const brandSlug = data.brandSlug || '';
  
  if (!brandSlug) {
    skipped++;
    continue;
  }
  
  // Check if id starts with brandSlug
  const prefix = brandSlug + '-';
  if (oldId.startsWith(prefix)) {
    const newId = oldId.slice(prefix.length);
    
    // Avoid empty or too-short IDs
    if (newId.length < 2) {
      console.log(`⚠️  SKIP (too short): ${oldId} → ${newId}`);
      skipped++;
      continue;
    }
    
    // Update id in data
    data.id = newId;
    
    // Write updated JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    
    // Rename file
    const newFile = newId + '.json';
    const newFilePath = path.join(productsDir, newFile);
    
    if (file !== newFile) {
      fs.renameSync(filePath, newFilePath);
      renames.push({ from: file, to: newFile, oldId, newId });
    }
    
    fixed++;
    console.log(`✅ ${oldId} → ${newId}`);
  } else {
    skipped++;
  }
}

console.log(`\n📊 Done: ${fixed} fixed, ${skipped} skipped, ${renames.length} renamed`);
