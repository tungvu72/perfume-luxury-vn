const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const dir = 'public/images/products';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

async function processFiles() {
  let count = 0;
  for (let f of files) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.size < 12) continue;
    
    const b = Buffer.alloc(12);
    const fd = fs.openSync(p, 'r');
    fs.readSync(fd, b, 0, 12, 0);
    fs.closeSync(fd);
    const hex = b.toString('hex');
    
    // Check if it's AVIF/WEBP
    if (hex.includes('6674797061766966') || hex.includes('57454250')) {
       console.log(`Converting fake JPG -> true JPEG: ${f}`);
       try {
           const processedData = await sharp(p).jpeg({ quality: 90 }).toBuffer();
           fs.writeFileSync(p, processedData);
           count++;
       } catch (err) {
           console.error("Failed on " + f, err);
       }
    }
  }
  console.log(`FINAL: Successfully converted ${count} disguised AVIF/WEBP files to pristine JPEGs.`);
}
processFiles().catch(console.error);
