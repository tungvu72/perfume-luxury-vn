const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
let idx = content.indexOf('black-orchid');
if (idx !== -1) {
    console.log(content.substring(idx - 100, idx + 500));
}
