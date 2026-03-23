import fs from 'fs';
import path from 'path';

const manualFixes = {
  '1-million-parfum': '/images/products/paco-rabanne-invictus.jpg', // temp: use Invictus
  'acqua-di-gio-parfum': '/images/products/armani-acqua-di-gio-parfum-main.jpg',
  'acqua-di-gio-profondo': '/images/products/acqua-di-gio-profondo-main.jpg',
  'andromeda': '/images/products/nishane-hacivat-main.jpg', // temp: use Nishane 
  'bottled-absolu': '/images/products/boss-bottled-absolu-main.jpg',
  'by-the-fireplace': '/images/products/maison-margiela-jazz-club-main.jpg', // same brand
};

const productsDir = 'data/products';

for (const [product, correctImg] of Object.entries(manualFixes)) {
  const fp = path.join(productsDir, product + '.json');
  if (!fs.existsSync(fp)) { console.log(`SKIP: ${product}`); continue; }
  
  const imgPath = path.join('public', correctImg);
  if (!fs.existsSync(imgPath)) { console.log(`WARNING: ${correctImg} not found`); continue; }
  
  const j = JSON.parse(fs.readFileSync(fp, 'utf8'));
  j.image = correctImg;
  if (j.images && j.images.length > 0) j.images[0].url = correctImg;
  fs.writeFileSync(fp, JSON.stringify(j, null, 2) + '\n');
  console.log(`FIXED: ${product} -> ${correctImg}`);
}
