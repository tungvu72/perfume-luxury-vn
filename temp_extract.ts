import { MASTER_PERFUMES } from './src/constants/mockData';
import fs from 'fs';

let csvContent = '\uFEFF';
csvContent += '"STT","Brand_TenSP","Anh_Main","Anh_Card","URL"\n';

MASTER_PERFUMES.forEach((p, index) => {
    const stt = (index + 1).toString().padStart(3, '0');
    const brandTen = (p.brand + " " + p.name).replace(/"/g, '""');
    
    // Some slugs might be different, normally it's `id` or `slug`. Let's fallback to id
    const urlSlug = p.slug ?? p.id;
    const genderPath = p.gender === 'nam' ? 'nam' : p.gender === 'nu' ? 'nu' : 'unisex'; 
    const url = "https://www.maisondeson.com/nuoc-hoa-" + genderPath + "-" + p.brandSlug + "-" + urlSlug;
    
    const mainImg = p.image ? p.image.split('/').pop() : 'N/A';
    
    // Find card image if it exists
    let cardImg = 'N/A';
    if (p.images && p.images.length > 0) {
        const cardObj = p.images.find(img => img.source === 'fragram' || img.url.includes('fragram') || img.url.match(/chai-nuoc-hoa-5/));
        if (cardObj) {
            cardImg = cardObj.url.split('/').pop() || 'N/A';
        } else if (p.images.length > 1) {
            // Assume 2nd image is card if no explicit tagging
            cardImg = p.images[1].url.split('/').pop() || 'N/A';
        }
    }

    csvContent += `"${stt}","${brandTen}","${mainImg}","${cardImg}","${url}"\n`;
});

fs.writeFileSync('danh_sach_sp_chuan.csv', csvContent, 'utf-8');
console.log("Extracted " + MASTER_PERFUMES.length + " products into danh_sach_sp_chuan.csv");
