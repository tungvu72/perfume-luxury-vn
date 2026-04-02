const fs = require('fs');
const path = require('path');

const dir = 'public/images/products';
const files = fs.readdirSync(dir);

const results = {
  total: 0,
  trueJpeg: [],
  truePng: [],
  trueAvif: [],
  trueWebp: [],
  corrupt: [],
  temp: [],
  mismatchExt: [],  // extension doesn't match real format
};

// Magic bytes detection
function detectFormat(buf) {
  if (buf.length < 12) return 'too_small';
  const hex = buf.toString('hex');
  // JPEG: starts with FFD8FF
  if (hex.startsWith('ffd8ff')) return 'jpeg';
  // PNG: starts with 89504E47
  if (hex.startsWith('89504e47')) return 'png';
  // WEBP: starts with 52494646....57454250
  if (hex.startsWith('52494646') && hex.substring(16, 24) === '57454250') return 'webp';
  // AVIF: contains 'ftyp' then 'avif' — hex for 'ftypavif' is 6674797061766966
  if (hex.includes('66747970')) {
    if (hex.includes('61766966') || hex.includes('6d696631')) return 'avif';
    // Could be HEIF
    if (hex.includes('68656963') || hex.includes('68657663')) return 'heif';
  }
  return 'unknown';
}

function getExpectedFormat(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'jpeg';
  if (ext === '.png') return 'png';
  if (ext === '.webp') return 'webp';
  if (ext === '.avif') return 'avif';
  return 'other';
}

for (const f of files) {
  const fullPath = path.join(dir, f);
  const stat = fs.statSync(fullPath);
  
  // Skip directories
  if (stat.isDirectory()) continue;
  
  results.total++;
  
  // Check temp/orphan files
  if (f.endsWith('.tmp') || f.startsWith('.') || f.startsWith('~')) {
    results.temp.push({ name: f, size: stat.size });
    continue;
  }
  
  // Read magic bytes
  let realFormat;
  try {
    const buf = Buffer.alloc(32);
    const fd = fs.openSync(fullPath, 'r');
    const bytesRead = fs.readSync(fd, buf, 0, 32, 0);
    fs.closeSync(fd);
    
    if (bytesRead < 4) {
      results.corrupt.push({ name: f, reason: 'file too small', size: stat.size });
      continue;
    }
    
    realFormat = detectFormat(buf);
  } catch (err) {
    results.corrupt.push({ name: f, reason: 'unreadable: ' + err.message, size: stat.size });
    continue;
  }
  
  if (realFormat === 'unknown' || realFormat === 'too_small') {
    results.corrupt.push({ name: f, reason: 'unknown format', size: stat.size });
    continue;
  }
  
  const expectedFormat = getExpectedFormat(f);
  
  // Classify by real format
  if (realFormat === 'jpeg') results.trueJpeg.push(f);
  else if (realFormat === 'png') results.truePng.push(f);
  else if (realFormat === 'avif') results.trueAvif.push(f);
  else if (realFormat === 'webp') results.trueWebp.push(f);
  else if (realFormat === 'heif') results.trueAvif.push(f); // group with avif
  
  // Check mismatch
  if (realFormat !== expectedFormat) {
    results.mismatchExt.push({ name: f, extension: expectedFormat, realFormat, size: stat.size });
  }
}

// Output report
console.log('=== IMAGE AUDIT REPORT ===');
console.log(`Tổng số file: ${results.total}`);
console.log(`JPEG thật: ${results.trueJpeg.length}`);
console.log(`PNG thật: ${results.truePng.length}`);
console.log(`AVIF thật: ${results.trueAvif.length}`);
console.log(`WEBP thật: ${results.trueWebp.length}`);
console.log(`Corrupt/unreadable: ${results.corrupt.length}`);
console.log(`Temp/rác: ${results.temp.length}`);
console.log(`Sai extension (MIME != ext): ${results.mismatchExt.length}`);

if (results.corrupt.length > 0) {
  console.log('\n--- CORRUPT FILES ---');
  results.corrupt.forEach(c => console.log(`  ${c.name} | reason: ${c.reason} | size: ${c.size}`));
}

if (results.temp.length > 0) {
  console.log('\n--- TEMP/RÁC FILES ---');
  results.temp.forEach(t => console.log(`  ${t.name} | size: ${t.size}`));
}

if (results.mismatchExt.length > 0) {
  console.log('\n--- SAI EXTENSION ---');
  results.mismatchExt.forEach(m => console.log(`  ${m.name} | ext says: ${m.extension} | real: ${m.realFormat} | size: ${m.size}`));
}

if (results.truePng.length > 0) {
  console.log('\n--- PNG THẬT (trong thư mục) ---');
  results.truePng.forEach(f => console.log(`  ${f}`));
}

if (results.trueAvif.length > 0) {
  console.log('\n--- AVIF THẬT (trong thư mục) ---');
  results.trueAvif.forEach(f => console.log(`  ${f}`));
}

if (results.trueWebp.length > 0) {
  console.log('\n--- WEBP THẬT (trong thư mục) ---');
  results.trueWebp.forEach(f => console.log(`  ${f}`));
}

// Also cross-check with mockData
console.log('\n=== CROSS-CHECK VỚI MOCKDATA ===');
const mockData = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const imgRefs = new Set();
const regex = /\/images\/products\/([^"']+)/g;
let match;
while ((match = regex.exec(mockData)) !== null) {
  imgRefs.add(match[1]);
}

const actualFiles = new Set(files);
const missingOnDisk = [];
imgRefs.forEach(ref => {
  if (!actualFiles.has(ref)) missingOnDisk.push(ref);
});

const orphanFiles = [];
actualFiles.forEach(f => {
  if (f.endsWith('.tmp') || f.startsWith('.')) return;
  if (!imgRefs.has(f)) orphanFiles.push(f);
});

console.log(`Tổng ref trong mockData: ${imgRefs.size}`);
console.log(`Missing trên disk (data tham chiếu nhưng không có file): ${missingOnDisk.length}`);
missingOnDisk.forEach(f => console.log(`  MISSING: ${f}`));
console.log(`Orphan trên disk (file có nhưng data không tham chiếu): ${orphanFiles.length}`);
orphanFiles.forEach(f => console.log(`  ORPHAN: ${f}`));
