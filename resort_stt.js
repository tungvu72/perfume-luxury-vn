const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public', 'images', 'products');
const mockPath = path.join(__dirname, 'src', 'constants', 'mockData.ts');

const content = fs.readFileSync(mockPath, 'utf8');
const lines = content.split('\n');

// ============================================================
// STEP 1: Parse all products with their image field
// ============================================================
const products = [];
let cur = null;
for (let i = 0; i < lines.length; i++) {
  const mId = lines[i].match(/^\s*id:\s*"([^"]+)"/);
  if (mId) { if (cur) products.push(cur); cur = { id: mId[1], brand: '', name: '', brandSlug: '', gender: '', image: '', imageLine: -1 }; }
  if (!cur) continue;
  const mBrand = lines[i].match(/^\s*brand:\s*"([^"]+)"/);
  if (mBrand && !cur.brand) cur.brand = mBrand[1];
  const mName = lines[i].match(/^\s*name:\s*"([^"]+)"/);
  if (mName && !cur.name) cur.name = mName[1];
  const mBS = lines[i].match(/^\s*brandSlug:\s*"([^"]+)"/);
  if (mBS && !cur.brandSlug) cur.brandSlug = mBS[1];
  const mG = lines[i].match(/^\s*gender:\s*"([^"]+)"/);
  if (mG && !cur.gender) cur.gender = mG[1];
  const mImg = lines[i].match(/^\s*image:\s*"([^"]+)"/);
  if (mImg && !cur.image) { cur.image = mImg[1]; cur.imageLine = i; }
}
if (cur) products.push(cur);

console.log(`[INFO] ${products.length} products parsed`);

// ============================================================
// STEP 2: Sort by brand (alpha), then by name within brand
// ============================================================
const sorted = [...products].sort((a, b) => {
  const brandA = a.brand.toUpperCase();
  const brandB = b.brand.toUpperCase();
  if (brandA < brandB) return -1;
  if (brandA > brandB) return 1;
  return a.name.localeCompare(b.name);
});

// Create mapping: slug -> new STT
const sttMap = {};
sorted.forEach((p, i) => {
  sttMap[p.id] = String(i + 1).padStart(3, '0');
});

// ============================================================
// STEP 3: Get all existing files and folders
// ============================================================
const allItems = fs.readdirSync(productsDir);
const allFiles = allItems.filter(f => fs.statSync(path.join(productsDir, f)).isFile());
const allFolders = allItems.filter(f => fs.statSync(path.join(productsDir, f)).isDirectory());

// ============================================================
// STEP 4: Rename main images to new STT
// ============================================================
let mainRenameCount = 0;
const mainImageMapping = {}; // old path -> new path (relative to /images/products/)

for (const p of products) {
  const newSTT = sttMap[p.id];
  
  // Find current main image file
  const currentMainBasename = p.image ? path.basename(p.image) : null;
  
  if (currentMainBasename && fs.existsSync(path.join(productsDir, currentMainBasename))) {
    const ext = path.extname(currentMainBasename);
    const newMainName = `${newSTT}-${p.id}-main${ext}`;
    
    if (currentMainBasename !== newMainName) {
      // Copy then delete to avoid EBUSY
      fs.copyFileSync(
        path.join(productsDir, currentMainBasename),
        path.join(productsDir, `__new_${newMainName}`)
      );
      mainImageMapping[currentMainBasename] = newMainName;
      mainRenameCount++;
    }
  } else {
    // Try to find by pattern: *slug*main* or just slug-main
    const slug = p.id;
    const oldSTT = allFiles.find(f => {
      const stripped = f.replace(/^\d{3}-/, '');
      return stripped.startsWith(slug + '-main') || stripped === slug + '-main.jpg' || stripped === slug + '-main.webp';
    });
    if (oldSTT) {
      const ext = path.extname(oldSTT);
      const newMainName = `${newSTT}-${p.id}-main${ext}`;
      if (oldSTT !== newMainName) {
        fs.copyFileSync(
          path.join(productsDir, oldSTT),
          path.join(productsDir, `__new_${newMainName}`)
        );
        mainImageMapping[oldSTT] = newMainName;
        mainRenameCount++;
      }
    }
  }
}

// Now also catch any remaining *-main* files not yet handled
const handledOld = new Set(Object.keys(mainImageMapping));
for (const f of allFiles) {
  if (f.includes('-main') && !handledOld.has(f) && !f.startsWith('__new_')) {
    // Try to match to a product
    const stripped = f.replace(/^\d{3}-/, '');
    const matchedProduct = products.find(p => stripped.startsWith(p.id + '-main'));
    if (matchedProduct) {
      const newSTT = sttMap[matchedProduct.id];
      const ext = path.extname(f);
      const newMainName = `${newSTT}-${matchedProduct.id}-main${ext}`;
      if (f !== newMainName) {
        fs.copyFileSync(
          path.join(productsDir, f),
          path.join(productsDir, `__new_${newMainName}`)
        );
        mainImageMapping[f] = newMainName;
        mainRenameCount++;
      }
    }
  }
}

// Delete originals and rename __new_ files
for (const [oldName, newName] of Object.entries(mainImageMapping)) {
  try { fs.unlinkSync(path.join(productsDir, oldName)); } catch(e) {}
  fs.renameSync(
    path.join(productsDir, `__new_${newName}`),
    path.join(productsDir, newName)
  );
}

console.log(`[STEP 4] Renamed ${mainRenameCount} main images`);

// ============================================================
// STEP 5: Rename existing folders to new STT
// ============================================================
let folderRenameCount = 0;
const folderMapping = {}; // old folder name -> new folder name

// Refresh folder list
const currentFolders = fs.readdirSync(productsDir).filter(f => 
  fs.statSync(path.join(productsDir, f)).isDirectory() && !f.startsWith('__')
);

for (const folder of currentFolders) {
  // Strip old STT prefix to get slug
  const slug = folder.replace(/^\d{3}-/, '');
  if (sttMap[slug]) {
    const newFolderName = `${sttMap[slug]}-${slug}`;
    if (folder !== newFolderName) {
      fs.cpSync(path.join(productsDir, folder), path.join(productsDir, newFolderName), { recursive: true });
      fs.rmSync(path.join(productsDir, folder), { recursive: true, force: true });
      folderMapping[folder] = newFolderName;
      folderRenameCount++;
    }
  }
}

console.log(`[STEP 5] Renamed ${folderRenameCount} folders`);

// ============================================================
// STEP 6: Create missing folders
// ============================================================
let foldersCreated = 0;
for (const p of products) {
  const newSTT = sttMap[p.id];
  const folderName = `${newSTT}-${p.id}`;
  const folderPath = path.join(productsDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    foldersCreated++;
  }
}
console.log(`[STEP 6] Created ${foldersCreated} missing folders`);

// ============================================================
// STEP 7: Update mockData.ts references
// ============================================================
let newLines = [...lines];
let refUpdateCount = 0;

for (let i = 0; i < newLines.length; i++) {
  let line = newLines[i];
  let changed = false;
  
  // Update main image refs
  for (const [oldName, newName] of Object.entries(mainImageMapping)) {
    if (line.includes(oldName)) {
      line = line.split(oldName).join(newName);
      changed = true;
    }
  }
  
  // Update folder refs (subfolders)
  for (const [oldFolder, newFolder] of Object.entries(folderMapping)) {
    const oldPath = `/products/${oldFolder}/`;
    const newPath = `/products/${newFolder}/`;
    if (line.includes(oldPath)) {
      line = line.split(oldPath).join(newPath);
      changed = true;
    }
  }
  
  if (changed) {
    newLines[i] = line;
    refUpdateCount++;
  }
}

fs.writeFileSync(mockPath, newLines.join('\n'), 'utf8');
console.log(`[STEP 7] Updated ${refUpdateCount} lines in mockData.ts`);

// ============================================================
// STEP 8: Output sorted list for artifact
// ============================================================
let output = '';
sorted.forEach((p, i) => {
  const stt = String(i + 1).padStart(3, '0');
  const folder = `${stt}-${p.id}`;
  const mainImg = `${stt}-${p.id}-main.jpg`;
  const genderVi = p.gender === 'nam' ? 'nam' : (p.gender === 'nu' ? 'nu' : 'unisex');
  const brandSlug = p.brandSlug || p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  // Check actual main image exists
  const mainExists = fs.readdirSync(productsDir).some(f => f.startsWith(`${stt}-${p.id}-main`));
  
  // Check folder has photos
  const folderPath = path.join(productsDir, folder);
  const photos = fs.existsSync(folderPath) ? 
    fs.readdirSync(folderPath).filter(f => fs.statSync(path.join(folderPath, f)).isFile()).length : 0;
  
  output += `${stt}|${p.brand}|${p.name}|${folder}|${mainExists ? '✅' : '❌'}|${photos}|${p.gender}|nuoc-hoa-${genderVi}-${brandSlug}-${p.id}\n`;
});

fs.writeFileSync('sorted_catalog.txt', output);

console.log('\n========================================');
console.log('HOÀN TẤT');  
console.log(`Main images renamed: ${mainRenameCount}`);
console.log(`Folders renamed: ${folderRenameCount}`);
console.log(`Folders created: ${foldersCreated}`);
console.log(`mockData lines updated: ${refUpdateCount}`);
console.log('========================================');
