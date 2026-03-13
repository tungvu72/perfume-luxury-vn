const fs = require('fs');
const file = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
let d = fs.readFileSync(file, 'utf8');
let count = 0;
d = d.replace(/source:\s*"pending"/g, () => { count++; return 'source: "fragram"'; });
fs.writeFileSync(file, d, 'utf8');
console.log('Fixed ' + count + ' source:"pending" instances');
