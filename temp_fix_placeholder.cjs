const fs = require('fs');
let text = fs.readFileSync('src/constants/mockData.ts', 'utf8');
text = text.replaceAll('products/placeholder.jpg', 'placeholder.jpg');
fs.writeFileSync('src/constants/mockData.ts', text);
console.log('Fixed placeholder path in mockData.ts');
