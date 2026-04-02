const fs = require('fs');
const path = require('path');

const mockDataPath = 'src/constants/mockData.ts';
const searchIndexPath = 'src/constants/searchIndex.ts';
const imagesDir = 'public/images/products';

let mockData = fs.readFileSync(mockDataPath, 'utf8');
let searchIndex = fs.readFileSync(searchIndexPath, 'utf8');

const targetFiles = [
    { target: 'mitsouko-main.jpg', searchKeywords: ['mitsouko'] },
    { target: 'noir-extreme-main.jpg', searchKeywords: ['noir', 'extreme'] },
    { target: 'terre-dhermes-edt-main.jpg', searchKeywords: ['terre', 'hermes', 'edt'] },
    { target: 'y-ysl-main.jpg', searchKeywords: ['y-edp', 'y-ysl'] },
    { target: 'pour-homme-dylan-blue-main.jpg', searchKeywords: ['dylan', 'blue'] },
    { target: 'la-nuit-de-lhomme-main.jpg', searchKeywords: ['nuit', 'lhomme'] },
    { target: 'linstant-de-guerlain-pour-homme-main.jpg', searchKeywords: ['linstant', 'homme'] },
    { target: 'habit-rouge-parfum-main.jpg', searchKeywords: ['habit', 'rouge', 'parfum'] },
    { target: 'elixir-des-merveilles-main.jpg', searchKeywords: ['elixir', 'merveilles'] },
    { target: 'eros-flame-main.jpg', searchKeywords: ['eros', 'flame'] },
    { target: 'allure-homme-edition-blanche-main.jpg', searchKeywords: ['allure', 'edition', 'blanche'] },
    { target: 'guerlain-lhomme-ideal-parfum-main.jpg', searchKeywords: ['ideal', 'parfum'] }
];

const deletedFiles = [];
const updatedNames = [];

for (const tf of targetFiles) {
    if (!fs.existsSync(path.join(imagesDir, tf.target))) {
        console.log('Skipping: Target not downloaded -> ' + tf.target);
        continue;
    }

    // Find the old image name in mock data containing the searchKeywords
    // We look for patterns like: something-mitsouko-something.jpg
    const regexStr = '([\\w-]+(' + tf.searchKeywords.join('|') + ')[\\w-]*\\.jpg)';
    const regex = new RegExp('/images/products/' + regexStr, 'i');
    
    // We need to be careful. Let's find all matches of any filename in mockData that could be this product's old image
    const matches = mockData.match(new RegExp('/images/products/([\\w-]+\\.jpg)', 'g'));
    if (matches) {
        // Collect viable old files
        const candidatePaths = [...new Set(matches)];
        let foundOldFileName = null;
        for (const cp of candidatePaths) {
            const filename = cp.split('/').pop();
            if (filename === tf.target) continue; // already updated

            // Check if filename contains all keywords
            const containsAll = tf.searchKeywords.every(k => filename.toLowerCase().includes(k.toLowerCase()));
            if (containsAll) {
                foundOldFileName = filename;
                break;
            }
        }

        if (foundOldFileName) {
            console.log('Found mapping to update: ' + foundOldFileName + ' -> ' + tf.target);
            
            // Replace in mockData
            mockData = mockData.split(foundOldFileName).join(tf.target);
            // Replace in searchIndex
            searchIndex = searchIndex.split(foundOldFileName).join(tf.target);

            // Delete the old file if it exists
            const oldFilePath = path.join(imagesDir, foundOldFileName);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
                deletedFiles.push(foundOldFileName);
            }
            updatedNames.push(tf.target);
        } else {
            console.log('No old file found in mockData to map to ' + tf.target);
        }
    }
}

fs.writeFileSync(mockDataPath, mockData, 'utf8');
fs.writeFileSync(searchIndexPath, searchIndex, 'utf8');

console.log('Done!');
console.log('Deleted old box images:', deletedFiles);
console.log('Updated to correct files:', updatedNames);
