const fs = require('fs');

let content = fs.readFileSync('src/constants/searchIndex.ts', 'utf8');

// It exports const SEARCH_INDEX = [ ... ]
// Let's extract the array block.
let startIndex = content.indexOf('export const SEARCH_INDEX');
let arrayContent = content.substring(startIndex);
arrayContent = arrayContent.replace('export const SEARCH_INDEX: SearchProduct[] = ', '');
arrayContent = arrayContent.replace('export const SEARCH_INDEX: any[] = ', ''); // fallback
arrayContent = arrayContent.split(';')[0]; // take the array

try {
    let arr = eval('(' + arrayContent + ')');
    
    let md = '# 📋 BẢNG KÊ KHAI TỔNG HỢP TOÀN BỘ SẢN PHẨM TRÊN WEBSITE\n\n';
    md += 'Tổng số lượng: **' + arr.length + ' chai**.\\n\\n';
    
    arr.forEach((p, i) => {
        md += `**${i + 1}.** ${p.brand} - **${p.name}** (\`${p.id}\`)\n`;
    });
    
    fs.writeFileSync('C:\\Users\\Admin\\.gemini\\antigravity\\brain\\abbed072-a553-4692-a72f-733694484a97\\danh_sach_sp.md', md, 'utf-8');
    console.log('Saved all to danh_sach_sp.md');
} catch (e) {
    console.error('Failed to parse:', e);
}
