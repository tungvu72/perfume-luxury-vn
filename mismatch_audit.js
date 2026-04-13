const fs = require('fs');

const mockPath = require('path').join(__dirname, 'src', 'constants', 'mockData.ts');
const fileData = fs.readFileSync(mockPath, 'utf8');

let products = [];
let lines = fileData.split('\n');

let currentProduct = {};
for (let i = 0; i < lines.length; i++) {
   let line = lines[i];
   let mId = line.match(/^\s*id:\s*"([^"]+)"/);
   if (mId) {
       if (currentProduct.id) products.push(currentProduct);
       currentProduct = { id: mId[1], name: "", slug: "", brand: "", images: [] };
   }
   
   let mName = line.match(/^\s*name:\s*"([^"]+)"/);
   if (mName && !currentProduct.name) currentProduct.name = mName[1];
   
   let mBrand = line.match(/^\s*brand:\s*"([^"]+)"/);
   if (mBrand && !currentProduct.brand) currentProduct.brand = mBrand[1];
   
   let mImg = line.match(/^\s*image:\s*"([^"]+)"/);
   if (mImg && !currentProduct.mainImg) currentProduct.mainImg = mImg[1];
   
   if (line.includes('images: [')) {
       let j = i + 1;
       let imgs = [];
       while (j < lines.length && !lines[j].includes('],') && !lines[j].includes('] )')) {
           let uMatch = lines[j].match(/"([^"]+\.(webp|jpg|jpeg|png|avif))/);
           if (uMatch) imgs.push(uMatch[1]);
           j++;
       }
       currentProduct.images = imgs;
       i = j;
   }
}
if (currentProduct.id) products.push(currentProduct);

let wrongImages = [];
let noWhiteBgImages = [];

products.forEach(p => {
    let mainImgUrl = p.images && p.images.length > 0 ? p.images[0] : p.mainImg;
    if (!mainImgUrl) {
         noWhiteBgImages.push(`${p.id} (No image configured)`);
         return;
    }
    
    // Check for mismatch (e.g. brand name missing in image or completely different)
    const imgStr = mainImgUrl.toLowerCase();
    const idParts = p.id.split('-').filter(x => x.length > 2);
    let matchCount = 0;
    idParts.forEach(part => {
        if (imgStr.includes(part)) matchCount++;
    });
    
    // If fewer than half the ID parts are in the image URL, flag as potentially wrong
    if (matchCount < idParts.length / 3) {
        wrongImages.push(`- ${p.name} [ID: ${p.id}] -> Image: ${mainImgUrl}`);
    }
    
    // Any image in /images/products vs /products/
    // actually, let's look for "thuc-te" (real) or missing fragrantica
    if (imgStr.includes('thuc-te') || imgStr.includes('real-') || !imgStr.includes('main')) {
        noWhiteBgImages.push(`- ${p.name} [ID: ${p.id}] -> Image: ${mainImgUrl}`);
    }
});

fs.writeFileSync('audit_out.txt', "WRONG MAPPINGS:\n" + wrongImages.join('\n') + "\n\nNO WHITE BG:\n" + noWhiteBgImages.join('\n'));
console.log('Done');
