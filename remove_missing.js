const fs = require('fs');
const path = require('path');

const mockDataPath = 'src/constants/mockData.ts';
const imagesDir = 'public/images/products';

let mockData = fs.readFileSync(mockDataPath, 'utf8');

// Match lines looking like: { url: "/images/products/FILENAME.ext", source: "...", caption: "...", verified: true },
const lineRegex = /[ \t]*\{[ \t]*url:[ \t]*"\/images\/products\/([^"]+)"[ \t]*,[  \t]*source:[^}]+\}[ \t]*,?\n?/g;

mockData = mockData.replace(lineRegex, (match, filename) => {
    const fullPath = path.join(imagesDir, filename);
    if (!fs.existsSync(fullPath)) {
        console.log(`Removing non-existent array entry for: ${filename}`);
        return ''; // remove the line because file is gone
    }
    return match; // keep it
});

fs.writeFileSync(mockDataPath, mockData, 'utf8');

console.log("Cleanup complete!");
