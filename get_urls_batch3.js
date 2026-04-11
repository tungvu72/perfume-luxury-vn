
// since mockData is ts, we can just regex the file for the products to get their slug, brandSlug, gender
const fs = require('fs');

const ids = [
  "good-girl-carolina",
  "allure-edp",
  "allure-homme-edition-blanche",
  "allure-homme-edt",
  "allure-homme-sport-eau-extreme",
  "allure-homme-sport",
  "antaeus",
  "bleu-de-chanel-eau-de-parfum",
  "bleu-de-chanel-parfum"
];

const content = fs.readFileSync('./src/constants/mockData.ts', 'utf8');

ids.forEach(id => {
  let idx = content.indexOf(`id: "${id}"`);
  if (idx > -1) {
    let block = content.substring(idx, idx + 1000);
    let brandSlug = block.match(/brandSlug:\s*"([^"]+)"/)[1];
    let gender = block.match(/gender:\s*"([^"]+)"/)[1];
    let url = `/nuoc-hoa-${gender}-${brandSlug}-${id}`;
    let productTitle = ` Sản phẩm ${id} `;
    
    // Check missing images
    let imgMatch = block.match(/images:\s*\[([\s\S]*?)\]/);
    let errorCount = 0;
    if (imgMatch) {
       let urls = [...imgMatch[1].matchAll(/url:\s*"([^"]+)"/g)].map(m => m[1]);
       
       urls.forEach(u => {
         if (!fs.existsSync("." + u) && !fs.existsSync("./public" + u)) {
            console.log(`ERROR: Image missing: ${u}`);
            errorCount++;
         }
       });
    }

    if(errorCount === 0) {
      console.log(`✅ [${id}] -> https://www.maisondeson.com${url}`);
    }
  }
});
