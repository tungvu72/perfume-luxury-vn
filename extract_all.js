const fs = require('fs');

let mockPath = './src/constants/mockData.ts';
let content = fs.readFileSync(mockPath, 'utf8');

// Use regex to extract id, brand, name instead of eval to avoid TS/import issues
let products = [];
let re = /id:\s*['"](.*?)['"],\s*brand:\s*['"](.*?)['"],\s*(?:brandSlug:\s*['"](.*?)['"],\s*)?name:\s*['"](.*?)['"]/g;
let match;
while ((match = re.exec(content)) !== null) {
    products.push({
        id: match[1],
        brand: match[2],
        name: match[4]
    });
}

let md = '# 📋 DANH SÁCH TỔNG HỢP TOÀN BỘ SẢN PHẨM HIỆN CÓ TRÊN WEBSITE\n\n';
md += 'Tổng cộng: ' + products.length + ' sản phẩm.\n\n';

products.forEach((p, i) => {
    md += `**${i + 1}.** ${p.brand} - **${p.name}** (\`${p.id}\`)\n`;
});

fs.writeFileSync('all_products_list.md', md, 'utf-8');
console.log('Saved list of ' + products.length + ' items to all_products_list.md');
