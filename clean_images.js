const fs = require('fs');
const path = require('path');

const imgDir = 'public/images/products';
const mockDataPath = 'src/constants/mockData.ts';

// 1. Determine Keep Files
// Read all files
const allFiles = fs.readdirSync(imgDir);
let mockData = fs.readFileSync(mockDataPath, 'utf8');

const deletedFiles = [];
const keepPatterns = [
    /-main\.(jpg|png|webp|avif)$/i, // anything with -main matches rules
    /ombre-leather-real/i          // specific rule for ombre leather
];

for (const file of allFiles) {
    if (file.endsWith('.gitkeep') || file === 'ref' || fs.statSync(path.join(imgDir, file)).isDirectory()) {
        continue;
    }

    // Is it referenced as an exact `image:` property in mockData.ts? 
    // This is the absolute source of truth for "Ảnh main"!
    const isMainRef = mockData.includes(`image: "/images/products/${file}"`) || mockData.includes(`"image": "/images/products/${file}"`);
    
    // Is it Ombre Leather real?
    const isOmbreReal = keepPatterns[1].test(file);

    // If it's the exact main image OR ombre real, we keep it.
    // ALSO, sometimes the user downloads the correct image and doesn't name it -main, but replaces it in mockData. We use `isMainRef` to be safe!
    if (isMainRef || isOmbreReal) {
        // KEEP
    } else {
        // DELETE
        try {
            fs.unlinkSync(path.join(imgDir, file));
            deletedFiles.push(file);
            console.log("Deleted: " + file);
            
            // Optional: REMOVE references in mockData.ts so the array doesn't 404
            // Let's replace any line containing this file. 
            // e.g. `{ url: "/images/products/bla-bottle.jpg", ... },`
            const regex = new RegExp(`.*${file}.*\n?`, 'g');
            mockData = mockData.replace(regex, '');
            
        } catch (e) {
            console.error("Failed to delete " + file, e.message);
        }
    }
}

fs.writeFileSync(mockDataPath, mockData, 'utf8');

// Do the same for searchIndex.ts just in case, though searchIndex shouldn't have sub-images!
const searchIndexPath = 'src/constants/searchIndex.ts';
if(fs.existsSync(searchIndexPath)) {
    let searchIndex = fs.readFileSync(searchIndexPath, 'utf8');
    for (const f of deletedFiles) {
        const regex = new RegExp(`.*${f}.*\n?`, 'g');
        searchIndex = searchIndex.replace(regex, '');
    }
    fs.writeFileSync(searchIndexPath, searchIndex, 'utf8');
}

console.log("Cleaned up " + deletedFiles.length + " files.");
