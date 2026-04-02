const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const filesToTest = [
  'lattafa-khamrah-main.jpg',
  'creed-absolu-aventus-main.jpg',
  'louis-vuitton-ombre-nomade-main.jpg',
  'sauvage-elixir-main.jpg',
  'marc-antoine-barrois-ganymede-main.jpg'
];

const dir = 'public/images/products';
const outDir = 'tmp/test_images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function detectMime(p) {
  const b = Buffer.alloc(32);
  const fd = fs.openSync(p, 'r');
  fs.readSync(fd, b, 0, 32, 0);
  fs.closeSync(fd);
  const hex = b.toString('hex');
  if (hex.startsWith('ffd8ff')) return 'jpeg';
  if (hex.startsWith('89504e47')) return 'png';
  if (hex.startsWith('52494646') && hex.substring(16,24) === '57454250') return 'webp';
  if (hex.includes('66747970') && (hex.includes('61766966') || hex.includes('6d696631'))) return 'avif';
  return 'unknown';
}

async function run() {
  console.log('=== TEST PIPELINE REPORT ===\n');
  let passCount = 0;
  for (const f of filesToTest) {
    const inPath = path.join(dir, f);
    const outPath = path.join(outDir, f.replace(/\.(jpg|png)$/, '.test.jpg'));
    
    // Status before
    if (!fs.existsSync(inPath)) {
        console.log(`[FILE] ${f} MISSING! skipping...`);
        continue;
    }
    const inStat = fs.statSync(inPath);
    const inMime = await detectMime(inPath);
    console.log(`[FILE] ${f}`);
    console.log(`  BEFORE -> MIME: ${inMime.padEnd(6)} | Size: ${(inStat.size/1024).toFixed(1)} KB`);
    
    try {
       const img = sharp(inPath);
       const meta = await img.metadata();
       
       let processed = img;
       // Only flatten if the format has alpha or isn't a native JPEG (or always flatten AVIF/PNGs just in case)
       if (meta.hasAlpha || inMime !== 'jpeg') {
          processed = processed.flatten({ background: '#ffffff' });
       }
       
       // Force JPEG output explicitly
       await processed.jpeg({ quality: 92, mozjpeg: true }).toFile(outPath);
       
       // Validate after
       const outStat = fs.statSync(outPath);
       const outMime = await detectMime(outPath);
       const outMeta = await sharp(outPath).metadata();
       
       console.log(`  AFTER  -> MIME: ${outMime.padEnd(6)} | Dims: ${outMeta.width}x${outMeta.height} | Size: ${(outStat.size/1024).toFixed(1)} KB`);
       
       if (outMime === 'jpeg' && outStat.size > 0 && !outMeta.hasAlpha) {
         console.log(`  Verdict: PASS`);
         passCount++;
       } else {
         console.log(`  Verdict: FAIL (Output format/size invalid)`);
       }
    } catch (err) {
       console.log(`  Verdict: FAIL (${err.message})`);
    }
    console.log('---');
  }
  
  if (passCount === 5) {
      console.log('\nPipeline Result: READY_FOR_BATCH');
  } else {
      console.log('\nPipeline Result: NEEDS_TUNING or BLOCKED');
  }
}
run();
