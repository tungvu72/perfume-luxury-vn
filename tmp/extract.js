const fs = require('fs');
const data = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const idStr = 'id: "pour-homme"';
const idx = data.indexOf(idStr);
if (idx > -1) {
    console.log(data.substring(idx - 10, idx + 400));
}
