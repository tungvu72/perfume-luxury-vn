const fs = require('fs');
const path = require('path');

const dir = 'public/images/products';
const mockData = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// Extract all image references from mockData
const imgRefs = new Set();
const regex = /\/images\/products\/([^"']+)/g;
let match;
while ((match = regex.exec(mockData)) !== null) {
    imgRefs.add(match[1]);
}

// Get all actual files
const actualFiles = new Set(fs.readdirSync(dir));

// Files referenced in data but missing on disk
const missingOnDisk = [];
imgRefs.forEach(ref => {
    if (!actualFiles.has(ref)) missingOnDisk.push(ref);
});

// Files on disk but NOT referenced in data (orphans)
const orphans = [];
actualFiles.forEach(f => {
    if (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp')) {
        if (!imgRefs.has(f)) orphans.push(f);
    }
});

// Check which files are truly JPEG vs AVIF/WEBP disguised
let trueJpeg = 0, fakeJpeg = 0, otherFormat = 0;
actualFiles.forEach(f => {
    if (!f.endsWith('.jpg')) return;
    const p = path.join(dir, f);
    const b = Buffer.alloc(12);
    const fd = fs.openSync(p, 'r');
    fs.readSync(fd, b, 0, 12, 0);
    fs.closeSync(fd);
    const hex = b.toString('hex');
    if (hex.startsWith('ffd8ff')) {
        trueJpeg++;
    } else if (hex.includes('6674797061766966') || hex.includes('57454250')) {
        fakeJpeg++;
    } else {
        otherFormat++;
        console.log(`  Unknown format: ${f} (hex: ${hex})`);
    }
});

console.log('\n=== IMAGE AUDIT REPORT ===');
console.log(`Total products in mockData: ${imgRefs.size}`);
console.log(`Total files on disk: ${actualFiles.size}`);
console.log(`\n--- File Format Check ---`);
console.log(`True JPEG files: ${trueJpeg}`);
console.log(`Fake JPEG (AVIF/WEBP inside): ${fakeJpeg}`);
console.log(`Other/Unknown format: ${otherFormat}`);
console.log(`\n--- Missing on disk (referenced in data) ---`);
missingOnDisk.forEach(f => console.log(`  MISSING: ${f}`));
console.log(`Total missing: ${missingOnDisk.length}`);
console.log(`\n--- Orphan files (on disk but not in data) ---`);
orphans.forEach(f => console.log(`  ORPHAN: ${f}`));
console.log(`Total orphans: ${orphans.length}`);
