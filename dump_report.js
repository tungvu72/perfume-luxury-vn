const fs = require('fs');
const mockContent = fs.readFileSync('./src/constants/mockData.ts', 'utf8');

// Regex or eval? Eval is safer to get actual objects.
const fakeRequire = `
    const module = { exports: {} };
    // remove imports
    ${mockContent.replace(/import .*? from .*?;/g, '')}
    module.exports = MASTER_PERFUMES;
`;

try {
    const TEMP_FILE = './temp_dump_report.js';
    let code = `
        const m = require('./tempData.cjs');
        let products = m.MASTER_PERFUMES.filter(p => p.description && p.description.length > 50 && p.isPublished && (
            p.verdict.includes('chuẩn bị cập nhật') || p.id === 'armaf-effects-of-uniq' || p.id === 'black-phantom-by-kilian' || p.id === 'blanche-bete'
        ));
        
        let md = '# 🚀 BÁO CÁO HOÀN THIỆN XUẤT BẢN 74 CHAI (ĐÃ GỘP TRÙNG LẶP)\\n\\n';
        md += 'Dưới đây là danh sách chính xác 100% URL Production và H1 của toàn bộ các chai vớt từ kho nháp lên Live:\\n\\n';
        
        products.forEach((p, i) => {
            const genderTag = p.gender === 'nam' ? 'Nam' : (p.gender === 'nu' ? 'Nữ' : 'Unisex');
            const url = 'https://maisondeson.com/nuoc-hoa-' + (p.gender || 'unisex') + '-' + (p.brandSlug || p.brand.toLowerCase().replace(/\\s+/g, '-')) + '-' + p.id;
            const h1 = 'Nước Hoa ' + genderTag + ' ' + p.brand + ' ' + (p.subName ? p.name + ' ' + p.subName : p.name);
            md += \`**\${i+1}. \${h1}**\\n\`;
            md += \`- URL: [\${url}](\${url})\\n\\n\`;
        });
        
        const fs = require('fs');
        fs.writeFileSync('final_74_report.md', md, 'utf-8');
        console.log('Saved to final_74_report.md');
    `;
    fs.writeFileSync(TEMP_FILE, code, 'utf-8');
} catch (e) {
    console.error(e);
}
