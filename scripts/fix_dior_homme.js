const fs = require('fs');
let data = fs.readFileSync('src/constants/mockData.ts', 'utf8');

// The replacement strategy for Dior
data = data.replace(/name: "Dior Pour Homme",/g, 'name: "Dior Homme Original",');
data = data.replace(/"\/images\/products\/dior-homme-sport-2021-main.jpg",\s*source: "fragram", caption: "Dior Pour Homme chính hãng"/g, '"/images/products/dior-homme-original-main.jpg", source: "fragram", caption: "Dior Homme Original chính hãng"');
data = data.replace(/image: "\/images\/products\/dior-homme-sport-2021-main.jpg"/g, 'image: "/images/products/dior-homme-original-main.jpg"');
data = data.replace(/seoTitle: "Dior Pour Homme chính hãng mua ở đâu\? Review 2026",/g, 'seoTitle: "Dior Homme Original chính hãng mua ở đâu? Review",');
// Wait, the image field might be replaced multiple times, but this is safe because the exact replacements are contextual.

// Safer fix for the specific object
const pourHommeIndex = data.indexOf('id: "pour-homme"');
if (pourHommeIndex !== -1) {
    const start = data.lastIndexOf('{', pourHommeIndex);
    const end = data.indexOf('isPublished: true', pourHommeIndex) + 25;
    let objStr = data.substring(start, end);
    objStr = objStr.replace(/name:\s*"Dior Pour Homme"/, 'name: "Dior Homme Original"');
    objStr = objStr.replace(/"\/images\/products\/dior-homme-sport-2021-main.jpg"/g, '"/images/products/dior-homme-original-main.jpg"');
    objStr = objStr.replace(/caption:\s*"Dior Pour Homme chính hãng"/, 'caption: "Dior Homme Original chính hãng"');
    objStr = objStr.replace(/seoTitle:\s*"Dior Pour Homme chính hãng mua ở đâu\? Review 2026"/, 'seoTitle: "Dior Homme Original chính hãng mua ở đâu? Review"');
    
    data = data.substring(0, start) + objStr + data.substring(end);
    fs.writeFileSync('src/constants/mockData.ts', data, 'utf8');
    console.log('Fixed Dior Pour Homme successfully.');
}
