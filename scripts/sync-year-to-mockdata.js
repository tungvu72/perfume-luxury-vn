const fs = require('fs');
const path = require('path');

// Read all product JSONs to get year data
const productsDir = path.join(__dirname, '..', 'data', 'products');
const yearMap = {};

fs.readdirSync(productsDir).filter(f => f.endsWith('.json')).forEach(file => {
  const id = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(productsDir, file), 'utf-8'));
  if (data.year) yearMap[id] = data.year;
});

// Read mockData.ts
const mockDataPath = path.join(__dirname, '..', 'src', 'constants', 'mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf-8');

// For each product, insert year after gender line
let updated = 0;
for (const [id, year] of Object.entries(yearMap)) {
  // Pattern: find the gender line for this product's block
  // We look for: id: "xxx", ... gender: "yyy",
  const idPattern = `id: "${id}"`;
  const idIndex = content.indexOf(idPattern);
  if (idIndex === -1) continue;
  
  // Find the gender line after this id
  const searchFrom = idIndex;
  const genderRegex = /gender: ['"](?:nam|nu|unisex)['"]/;
  const remaining = content.slice(searchFrom);
  const genderMatch = remaining.match(genderRegex);
  
  if (!genderMatch) continue;
  
  const genderLineEnd = searchFrom + genderMatch.index + genderMatch[0].length;
  
  // Check if year already exists right after gender
  const afterGender = content.slice(genderLineEnd, genderLineEnd + 100);
  if (afterGender.includes('year:')) continue;
  
  // Find the comma and newline after gender
  const commaAfter = content.indexOf(',', genderLineEnd);
  if (commaAfter === -1) continue;
  const newlineAfter = content.indexOf('\n', commaAfter);
  if (newlineAfter === -1) continue;
  
  // Insert year line after gender line
  const indent = '    '; // 4 spaces
  const yearLine = `${indent}year: ${year},\n`;
  content = content.slice(0, newlineAfter + 1) + yearLine + content.slice(newlineAfter + 1);
  updated++;
}

fs.writeFileSync(mockDataPath, content, 'utf-8');
console.log(`✅ Synced year to mockData.ts for ${updated} products`);
