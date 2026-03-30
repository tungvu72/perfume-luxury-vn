const fs = require('fs');
let data = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// The Chloé image
data = data.replace(/chloe-signature-edp-main\.jpg/g, 'chloe-eau-de-parfum-main.jpg');

// The webp extensions that the user replaced
data = data.replace(/guerlain-l-homme-ideal-eau-de-parfum-main\.webp/g, 'guerlain-l-homme-ideal-eau-de-parfum-main.jpg');
data = data.replace(/chanel-no-19-eau-de-parfum-main\.webp/g, 'chanel-no-19-eau-de-parfum-main.jpg');
data = data.replace(/guerlain-shalimar-lessence-main\.webp/g, 'guerlain-shalimar-lessence-main.jpg');

fs.writeFileSync('src/constants/mockData.ts', data, 'utf8');
console.log('Fixed mockData image extensions.');
