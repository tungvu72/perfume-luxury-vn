const fs = require('fs');

const mockDataContent = fs.readFileSync('src/constants/mockData.ts', 'utf-8');

const products = [];
// More reliable parsing of nested objects can be tricky with regex. 
// A naive parsing:
const blocks = mockDataContent.split('id: ');

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    
    // Attempt to match fields cleanly.
    const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
    const brandMatch = block.match(/brand:\s*['"]([^'"]+)['"]/);
    // Images are inside `images: { main: ..., card: ... }`
    const mainImgMatch = block.match(/main:\s*['"]([^'"]+)['"]/);
    const cardImgMatch = block.match(/card:\s*['"]([^'"]+)['"]/);
    
    // sometimes it's like images: [ '...' ] if it's an array, but the database uses { main: ..., card: ... } as seen in previous sessions. Let's see what matches.
    const imagesMatch = block.match(/images.*?\[(.*?)\]/s); 
    let mainImgStr = 'N/A';
    
    if (mainImgMatch) {
       mainImgStr = mainImgMatch[1].split('/').pop();
    } else if (imagesMatch) {
       const firstImg = imagesMatch[1].match(/['"]([^'"]+)['"]/);
       if (firstImg) mainImgStr = firstImg[1].split('/').pop();
    }
    
    const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);

    if (nameMatch && slugMatch) {
       products.push({
           brand: brandMatch ? brandMatch[1] : '',
           name: nameMatch[1],
           mainImg: mainImgStr,
           cardImg: cardImgMatch ? cardImgMatch[1].split('/').pop() : 'N/A',
           slug: slugMatch[1]
       });
    }
}

let csvContent = '\uFEFF'; // BOM
csvContent += '"STT","Brand_TenSP","Anh_Main","Anh_Card","URL"\n';

products.forEach((p, index) => {
    const stt = (index + 1).toString().padStart(3, '0');
    // Ensure no quotes break CSV
    const brandTen = (p.brand + " " + p.name).replace(/"/g, '""');
    const url = "https://www.maisondeson.com/product/" + p.slug;
    csvContent += `"${stt}","${brandTen}","${p.mainImg}","${p.cardImg}","${url}"\n`;
});

fs.writeFileSync('danh_sach_sp_chuan.csv', csvContent, 'utf-8');
console.log("Extracted " + products.length + " products into danh_sach_sp_chuan.csv");
