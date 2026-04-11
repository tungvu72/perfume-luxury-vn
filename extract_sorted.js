const fs = require('fs');

let content = fs.readFileSync('src/constants/searchIndex.ts', 'utf8');
let startIndex = content.indexOf('export const SEARCH_INDEX');
let arrayContent = content.substring(startIndex);
arrayContent = arrayContent.replace('export const SEARCH_INDEX: SearchProduct[] = ', '');
arrayContent = arrayContent.replace('export const SEARCH_INDEX: any[] = ', ''); 
arrayContent = arrayContent.split(';')[0]; 

try {
    let arr = eval('(' + arrayContent + ')');
    
    // Sắp xếp theo brand (thương hiệu)
    arr.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
    
    let md = '# 📋 BẢNG KÊ KHAI TỔNG HỢP TOÀN BỘ SẢN PHẨM TRÊN WEBSITE (GỘP THEO THƯƠNG HIỆU)\n\n';
    md += 'Tổng số lượng: **' + arr.length + ' chai**.\\n\\n';
    
    let currentBrand = '';
    arr.forEach((p, i) => {
        if (p.brand !== currentBrand) {
            currentBrand = p.brand;
            md += `\n### ${currentBrand}\n`;
        }
        md += `**${i + 1}.** ${p.name} (\`${p.id}\`)\n`;
    });
    
    fs.writeFileSync('danh_sach_sp.md', md, 'utf-8');
    console.log('Saved sorted list to danh_sach_sp.md');
} catch (e) {
    console.error('Failed to parse:', e);
}
