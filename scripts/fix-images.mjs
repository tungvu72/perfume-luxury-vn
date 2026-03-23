import fs from 'fs';
import path from 'path';

const productsDir = 'data/products';
const imagesDir = 'public/images/products';

// Get all actual image files
const actualImages = fs.readdirSync(imagesDir).filter(f => !fs.statSync(path.join(imagesDir, f)).isDirectory());

// Build a lookup: basename (without extension) -> full filename
const imageMap = {};
actualImages.forEach(f => {
  const base = f.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  if (!imageMap[base]) imageMap[base] = [];
  imageMap[base].push(f);
});

const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.json'));
let fixCount = 0;

for (const f of files) {
  const fp = path.join(productsDir, f);
  const j = JSON.parse(fs.readFileSync(fp, 'utf8'));
  let changed = false;

  const fixImg = (imgPath) => {
    const fullPath = path.join('public', imgPath);
    if (fs.existsSync(fullPath)) return imgPath; // already exists
    
    // Try to find the right file
    const basename = path.basename(imgPath).replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
    
    // Check exact match with different extension
    if (imageMap[basename]) {
      const newFile = imageMap[basename][0];
      const newPath = '/images/products/' + newFile;
      console.log(`  FIX: ${imgPath} -> ${newPath}`);
      changed = true;
      return newPath;
    }
    
    // Try fuzzy match - find the closest
    // e.g. "guerlain-linstant-femme-main" -> "guerlain-linstant-de-guerlain-femme-main"
    const keys = Object.keys(imageMap);
    for (const key of keys) {
      // Check if the missing basename is a substring match
      const parts = basename.split('-');
      const keyParts = key.split('-');
      // Check brand match
      if (parts[0] === keyParts[0] && key.includes('main')) {
        // Check if key contains enough of the missing name parts
        const matchParts = parts.filter(p => key.includes(p));
        if (matchParts.length >= parts.length * 0.6) {
          const newFile = imageMap[key][0];
          const newPath = '/images/products/' + newFile;
          console.log(`  FUZZY: ${imgPath} -> ${newPath}`);
          changed = true;
          return newPath;
        }
      }
    }
    
    console.log(`  NOT FOUND: ${imgPath}`);
    return imgPath;
  };

  if (j.image) {
    const fullPath = path.join('public', j.image);
    if (!fs.existsSync(fullPath)) {
      console.log(`\n${f}:`);
      j.image = fixImg(j.image);
    }
  }

  if (j.images) {
    for (let i = 0; i < j.images.length; i++) {
      const fullPath = path.join('public', j.images[i].url);
      if (!fs.existsSync(fullPath)) {
        if (!changed) console.log(`\n${f}:`);
        j.images[i].url = fixImg(j.images[i].url);
      }
    }
  }

  if (changed) {
    fs.writeFileSync(fp, JSON.stringify(j, null, 2) + '\n');
    fixCount++;
  }
}

console.log(`\nFixed ${fixCount} product files`);
