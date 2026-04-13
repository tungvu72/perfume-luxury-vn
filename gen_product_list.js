const fs = require('fs');
const content = fs.readFileSync('src/constants/mockData.ts', 'utf8');
const lines = content.split('\n');

const products = [];
let i = 0;
while (i < lines.length) {
  const idMatch = lines[i].match(/^\s*id:\s*"([^"]+)"/);
  if (idMatch) {
    const id = idMatch[1];
    const block = lines.slice(i, i + 25);
    
    const brand = (block.find(l => l.trim().startsWith('brand:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const brandSlug = (block.find(l => l.trim().startsWith('brandSlug:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const name = (block.find(l => l.trim().startsWith('name:')) || '').match(/"([^"]+)"/)?.[1] || '';
    const gender = (block.find(l => l.trim().startsWith('gender:')) || '').match(/"([^"]+)"/)?.[1] || '';
    
    const genderLabel = gender === 'nam' ? 'Nam' : gender === 'nu' ? 'Nữ' : 'Unisex';
    const h1 = `Nước Hoa ${genderLabel} ${brand.toUpperCase()} ${name}`;
    const url = `https://www.maisondeson.com/nuoc-hoa-${gender}-${brandSlug}-${id}`;
    
    products.push({ brand: brand.toUpperCase(), name, h1, url });
  }
  i++;
}

products.sort((a, b) => {
  if (a.brand < b.brand) return -1;
  if (a.brand > b.brand) return 1;
  return a.name.localeCompare(b.name);
});

let md = `# DANH SÁCH TỔNG SẢN PHẨM — MAISON DE SON\n\n`;
md += `Cập nhật: ${new Date().toISOString().split('T')[0]} | Tổng: **${products.length}** sản phẩm\n\n`;

let currentBrand = '';
let num = 0;

products.forEach(p => {
  num++;
  if (p.brand !== currentBrand) {
    currentBrand = p.brand;
    md += `\n### ${currentBrand}\n`;
  }
  md += `**${num}.** ${p.h1}\n${p.url}\n\n`;
});

fs.writeFileSync('danh_sach_sp.md', md, 'utf8');
console.log(`Done: ${products.length} sản phẩm.`);
