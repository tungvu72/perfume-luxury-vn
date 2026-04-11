const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');

const id1 = 'id: "good-girl-carolina",';
let idx1 = content.indexOf(id1);
console.log("=== GOOD GIRL CAROLINA ===");
console.log(content.substring(idx1, idx1+500));

const id2 = 'id: "good-girl",';
let idx2 = content.indexOf(id2);
if (idx2 > -1) {
  console.log("\n=== GOOD GIRL ===");
  console.log(content.substring(idx2, idx2+500));
}
