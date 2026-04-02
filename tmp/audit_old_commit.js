// Audit commit f74e28f by extracting magic bytes for a sample of files
const { execSync } = require('child_process');

const commit = 'f74e28f';

// Get all file names at commit
const filesRaw = execSync(`git ls-tree --name-only ${commit} public/images/products/`, { encoding: 'utf8' });
const files = filesRaw.trim().split('\n').filter(Boolean);

console.log(`Total files at ${commit}: ${files.length}`);

let jpegCount = 0, avifCount = 0, pngCount = 0, webpCount = 0, unknownCount = 0;
const avifFiles = [];
const pngFiles = [];
const mismatchFiles = [];

for (const f of files) {
  const basename = f.replace('public/images/products/', '');
  if (basename.endsWith('.tmp')) continue;
  
  try {
    // Extract just first 32 bytes using git show piped to node
    const hex = execSync(
      `git show ${commit}:"${f}" | node -e "const c=[];process.stdin.on('data',d=>c.push(d));process.stdin.on('end',()=>{const b=Buffer.concat(c);console.log(b.slice(0,32).toString('hex'))})"`,
      { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 5000 }
    ).trim();
    
    let realFormat = 'unknown';
    if (hex.startsWith('ffd8ff')) realFormat = 'jpeg';
    else if (hex.startsWith('89504e47')) realFormat = 'png';
    else if (hex.startsWith('52494646') && hex.includes('57454250')) realFormat = 'webp';
    else if (hex.includes('66747970') && (hex.includes('61766966') || hex.includes('6d696631'))) realFormat = 'avif';
    
    if (realFormat === 'jpeg') jpegCount++;
    else if (realFormat === 'avif') { avifCount++; avifFiles.push(basename); }
    else if (realFormat === 'png') { pngCount++; pngFiles.push(basename); }    
    else if (realFormat === 'webp') webpCount++;
    else unknownCount++;
    
    // Check mismatch
    const ext = basename.endsWith('.jpg') ? 'jpeg' : basename.endsWith('.png') ? 'png' : basename.endsWith('.avif') ? 'avif' : basename.endsWith('.webp') ? 'webp' : 'other';
    if (realFormat !== ext) {
      mismatchFiles.push(`${basename} | ext=${ext} real=${realFormat}`);
    }
  } catch (e) {
    unknownCount++;
  }
}

console.log(`\nJPEG thật: ${jpegCount}`);
console.log(`PNG thật: ${pngCount}`);
console.log(`AVIF thật: ${avifCount}`);
console.log(`WEBP thật: ${webpCount}`);
console.log(`Unknown/error: ${unknownCount}`);

console.log(`\n--- AVIF files ---`);
avifFiles.forEach(f => console.log(`  ${f}`));

console.log(`\n--- PNG files ---`);
pngFiles.forEach(f => console.log(`  ${f}`));

console.log(`\n--- Mismatch ext ---`);
mismatchFiles.forEach(f => console.log(`  ${f}`));
