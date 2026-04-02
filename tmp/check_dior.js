const fs = require('fs');
const data = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const regex = /id:\s*"([^"]+)",\s*brandSlug:\s*"([^"]+)",\s*brand:\s*"([^"]+)",\s*name:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(data)) !== null) {
  if (match[3].toLowerCase() === 'dior') {
    console.log(`Dior: ID=${match[1]}, Name=${match[4]}`);
  }
}
