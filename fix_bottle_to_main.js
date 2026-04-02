const fs = require('fs');
const path = require('path');

const mockDataPath = 'src/constants/mockData.ts';
const searchIndexPath = 'src/constants/searchIndex.ts';
const imgDir = 'public/images/products';

let mockData = fs.readFileSync(mockDataPath, 'utf8');
let searchIndex = fs.readFileSync(searchIndexPath, 'utf8');

// Find all unique filenames ending with -bottle.(jpg|png|webp|avif) in mockData
const matches = [...mockData.matchAll(/\/images\/products\/([^"'\s]+-bottle\.(?:jpg|png|webp|avif))/g)];
const uniqueBottles = [...new Set(matches.map(m => m[1]))];

console.log("Found " + uniqueBottles.length + " '-bottle' files in mockData.ts.");

for (const oldFile of uniqueBottles) {
    // Determine new name by replacing '-bottle.' with '-main.'
    const newFile = oldFile.replace('-bottle.', '-main.');
    
    // Replace in files globally for this oldFile
    // Use regex to replace confidently
    const regex = new RegExp(oldFile.replace(/\./g, '\\.'), 'g');
    mockData = mockData.replace(regex, newFile);
    searchIndex = searchIndex.replace(regex, newFile);
    
    console.log(`Renamed reference: ${oldFile} -> ${newFile}`);

    // If the old file exists on disk, delete it!
    const oldPath = path.join(imgDir, oldFile);
    if (fs.existsSync(oldPath)) {
        try {
            fs.unlinkSync(oldPath);
            console.log(`Deleted physical file: ${oldFile}`);
        } catch (e) {
            console.error(`Failed to delete ${oldFile}:`, e);
        }
    }
}

fs.writeFileSync(mockDataPath, mockData, 'utf8');
fs.writeFileSync(searchIndexPath, searchIndex, 'utf8');

console.log("Done updating mockData, searchIndex and cleaning up folder!");
