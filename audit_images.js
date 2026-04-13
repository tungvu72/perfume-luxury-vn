const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size'); // exported as default in some CJS, or just a function depending on version

let imageSize;
if (typeof sizeOf === 'function') {
   imageSize = sizeOf;
} else if (sizeOf && typeof sizeOf.imageSize === 'function') {
   imageSize = sizeOf.imageSize;
} else if (sizeOf && typeof sizeOf.default === 'function') {
   imageSize = sizeOf.default;
}

const mockPath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
const fileData = fs.readFileSync(mockPath, 'utf8');

let products = [];
let lines = fileData.split('\n');

let currentProduct = {};
for (let i = 0; i < lines.length; i++) {
   let line = lines[i];
   let mId = line.match(/^\s*id:\s*"([^"]+)"/);
   if (mId) {
       if (currentProduct.id) {
           products.push(currentProduct);
       }
       currentProduct = { id: mId[1], name: "", images: [] };
   }
   
   let mName = line.match(/^\s*name:\s*"([^"]+)"/);
   if (mName && !currentProduct.name) {
       currentProduct.name = mName[1];
   }
   
   let mImg = line.match(/^\s*image:\s*"([^"]+)"/);
   if (mImg && !currentProduct.mainImg) {
       currentProduct.mainImg = mImg[1];
   }
   
   if (line.includes('images: [')) {
       let j = i + 1;
       let imgs = [];
       while (j < lines.length && !lines[j].includes('],') && !lines[j].includes('] )')) {
           let uMatch = lines[j].match(/"([^"]+\.(webp|jpg|jpeg|png))/);
           if (uMatch) {
               imgs.push(uMatch[1]);
           } else {
               let sMatch = lines[j].match(/^\s*"([^"]+)"/);
               if (sMatch) imgs.push(sMatch[1]);
           }
           j++;
       }
       currentProduct.images = imgs;
       i = j;
   }
}
if (currentProduct.id) products.push(currentProduct);

let results = {
   missingOrWrongImages: [],
   notFragranticaFormat: []
};

products.forEach(p => {
    let mainImgUrl = p.images && p.images.length > 0 ? p.images[0] : p.mainImg;
    if (!mainImgUrl) {
         results.missingOrWrongImages.push({ id: p.id, name: p.name, reason: "No image assigned in mockData.ts" });
         return;
    }
    
    // Quick heuristic: If it doesn't end with .webp, or it's from the legacy old folder...
    let imgPath = path.join(__dirname, 'public', mainImgUrl.startsWith('/') ? mainImgUrl.slice(1) : mainImgUrl);
    
    if (!fs.existsSync(imgPath)) {
         results.missingOrWrongImages.push({ id: p.id, name: p.name, reason: "Image file does not exist", path: mainImgUrl });
         return;
    }
    
    // Now for dimension checking
    try {
        let dimensions = imageSize(imgPath);
        let ratio = dimensions.width / dimensions.height;
        let isSquareOrStandard = ratio > 0.95 && ratio < 1.05;
        
        let pathIsLegacy = mainImgUrl.includes('/images/products/');
        
        if (!isSquareOrStandard || pathIsLegacy) {
             results.notFragranticaFormat.push({ 
                 id: p.id, 
                 name: p.name, 
                 ratio: ratio.toFixed(2), 
                 path: mainImgUrl,
                 dimensions: `${dimensions.width}x${dimensions.height}`
             });
        }
    } catch(e) {
        results.missingOrWrongImages.push({ id: p.id, name: p.name, reason: "Error reading size", path: mainImgUrl });
    }
});

fs.writeFileSync('image_audit.json', JSON.stringify(results, null, 2), 'utf8');
console.log(`Scan completed. Found ${results.missingOrWrongImages.length} missing/wrong and ${results.notFragranticaFormat.length} likely self-taken photos.`);
