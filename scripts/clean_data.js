const fs = require('fs');
let data = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// 1. Remove Dior Pour Homme
const diorStart = data.indexOf('id: "pour-homme"');
if (diorStart > -1) {
    const startObj = data.lastIndexOf('{', diorStart);
    const endObj = data.indexOf('isPublished: true', diorStart) + 25;
    console.log("Found Dior Pour Homme. Removing...");
    data = data.substring(0, startObj) + data.substring(endObj);
}

// 2. We have MULTIPLE Montblanc Signatures. 
// We want to KEEP the one that has "montblanc-signature-main.jpg" and DELETE the one that has "chloe" in its image, OR delete both and re-insert a clean one.
// Let's find all occurrences of 'id: "montblanc-signature-edp"'
let idx = data.indexOf('id: "montblanc-signature-edp"');
let kept = false;
let passes = 0;
while (idx > -1 && passes < 10) {
    passes++;
    const startObj = data.lastIndexOf('{', idx);
    const endObj = data.indexOf('isPublished: true', idx) + 25;
    const objStr = data.substring(startObj, endObj);
    
    if (objStr.includes('chloe-eau-de-parfum-main.jpg') || objStr.includes('chloe-signature-edp-main.jpg') || objStr.includes('Antoine Maisondieu')) {
        console.log("Removing bad Montblanc Signature...");
        data = data.substring(0, startObj) + data.substring(endObj);
        idx = data.indexOf('id: "montblanc-signature-edp"'); // recalculate
    } else {
        console.log("Keeping good Montblanc Signature...");
        kept = true;
        idx = data.indexOf('id: "montblanc-signature-edp"', endObj); // search next
    }
}

// 3. What if the bad one had a different ID (like "signature-edp")?
let idx2 = data.indexOf('id: "signature-edp"');
if (idx2 > -1) {
    const startObj = data.lastIndexOf('{', idx2);
    const endObj = data.indexOf('isPublished: true', idx2) + 25;
    const objStr = data.substring(startObj, endObj);
    if (objStr.includes('MONTBLANC')) {
       console.log("Removing bad Montblanc Signature with id signature-edp...");
       data = data.substring(0, startObj) + data.substring(endObj);
    }
}

// Write back
fs.writeFileSync('src/constants/mockData.ts', data, 'utf8');
console.log('Cleanup finished.');
