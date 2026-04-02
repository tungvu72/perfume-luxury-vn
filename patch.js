const fs = require('fs');
const path = require('path');

const mockDataPath = 'src/constants/mockData.ts';
const searchIndexPath = 'src/constants/searchIndex.ts';
const imagesDir = 'public/images/products';

let mockData = fs.readFileSync(mockDataPath, 'utf8');
let searchIndex = fs.readFileSync(searchIndexPath, 'utf8');

const mapping = {
    // NHOM 2 replacements (Boxed versions downloaded -> correct unboxed versions)
    'guerlain-mitsouko-edp-main.jpg': 'mitsouko-main.jpg',
    'tom-ford-noir-extreme-main.jpg': 'noir-extreme-main.jpg',
    'hermes-terre-dhermes-edt-main.jpg': 'terre-dhermes-edt-main.jpg',
    'terre-dhermes-edt-bottle.jpg': 'terre-dhermes-edt-main.jpg', // just in case
    'ysl-y-edp-main.jpg': 'y-ysl-main.jpg',
    'ysl-y-edp.jpg': 'y-ysl-main.jpg',
    'versace-dylan-blue-main.jpg': 'pour-homme-dylan-blue-main.jpg',
    'ysl-la-nuit-de-lhomme-main.jpg': 'la-nuit-de-lhomme-main.jpg',
    'guerlain-linstant-homme-edp-main.jpg': 'linstant-de-guerlain-pour-homme-main.jpg',
    'guerlain-habit-rouge-parfum-main.webp': 'habit-rouge-parfum-main.jpg',
    'guerlain-habit-rouge-parfum-main.jpg': 'habit-rouge-parfum-main.jpg',
    'guerlain-habit-rouge-parfum.webp': 'habit-rouge-parfum-main.jpg',
    'hermes-elixir-des-merveilles-main.jpg': 'elixir-des-merveilles-main.jpg',
    'versace-eros-flame-main.jpg': 'eros-flame-main.jpg',
    'chanel-allure-homme-edition-blanche-main.jpg': 'allure-homme-edition-blanche-main.jpg',
    'chanel-allure-homme-edition-blanche.webp': 'allure-homme-edition-blanche-main.jpg',
    'guerlain-lhomme-ideal-parfum.webp': 'guerlain-lhomme-ideal-parfum-main.jpg',
    'guerlain-lhomme-ideal-parfum-main.webp': 'guerlain-lhomme-ideal-parfum-main.jpg',
    'guerlain-lhomme-ideal-parfum-main.avif': 'guerlain-lhomme-ideal-parfum-main.jpg'
};

const deleted = [];
let modifications = 0;

for (const [oldName, newName] of Object.entries(mapping)) {
    // Check if new file exists, otherwise we can't replace it unless it actually exists
    if (!fs.existsSync(path.join(imagesDir, newName))) {
        console.log(`WARNNING: target ${newName} not found in directory. Skipping ${oldName}...`);
        continue;
    }
    
    // Replace in mockData
    if (mockData.includes(oldName)) {
        mockData = mockData.split(oldName).join(newName);
        console.log(`Replaced ${oldName} -> ${newName} in mockData.ts`);
        modifications++;
    }
    // Replace in searchIndex
    if (searchIndex.includes(oldName)) {
        searchIndex = searchIndex.split(oldName).join(newName);
        console.log(`Replaced ${oldName} -> ${newName} in searchIndex.ts`);
        modifications++;
    }

    // Attempt to delete OLD file (the boxed version) if it still exists
    const oldPath = path.join(imagesDir, oldName);
    if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
        deleted.push(oldName);
    }
}

// Write back
fs.writeFileSync(mockDataPath, mockData, 'utf8');
fs.writeFileSync(searchIndexPath, searchIndex, 'utf8');

console.log('--- DONE ---');
console.log('Modifications made: ' + modifications);
console.log('Deleted old boxed files: ', deleted);
