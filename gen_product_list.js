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
    
    // H1 format: "Nước Hoa {Gender} {BRAND} {Name}"
    const genderLabel = gender === 'nam' ? 'Nam' : gender === 'nu' ? 'Nữ' : 'Unisex';
    const h1 = `Nước Hoa ${genderLabel} ${brand.toUpperCase()} ${name}`;
    const url = `https://www.maisondeson.com/nuoc-hoa-${gender}-${brandSlug}-${id}`;
    
    products.push({ brand: brand.toUpperCase(), brandSlug, name, gender, id, h1, url });
  }
  i++;
}

// Sort by brand name then by product name
products.sort((a, b) => {
  if (a.brand < b.brand) return -1;
  if (a.brand > b.brand) return 1;
  return a.name.localeCompare(b.name);
});

// Build markdown
let md = `# DANH SÁCH SẢN PHẨM MAISON DE SON\n`;
md += `> Cập nhật: ${new Date().toISOString().split('T')[0]} | Tổng: **${products.length}** sản phẩm\n\n`;
md += `| # | H1 | URL |\n`;
md += `|---|------|-----|\n`;

let currentBrand = '';
let num = 0;

products.forEach(p => {
  num++;
  if (p.brand !== currentBrand) {
    currentBrand = p.brand;
    md += `| | **${currentBrand}** | |\n`;
  }
  md += `| ${num} | ${p.h1} | ${p.url} |\n`;
});

fs.writeFileSync('danh_sach_sp_full.md', md, 'utf8');
console.log(`Generated danh_sach_sp_full.md with ${products.length} products.`);
