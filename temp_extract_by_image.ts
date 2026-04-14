import { MASTER_PERFUMES } from './src/constants/mockData';
import fs from 'fs';

let products = [];

MASTER_PERFUMES.forEach((p) => {
    const brandTen = (p.brand + " " + p.name).replace(/"/g, '""');
    const urlSlug = p.slug ?? p.id;
    const genderPath = p.gender === 'nam' ? 'nam' : p.gender === 'nu' ? 'nu' : 'unisex'; 
    const url = "https://www.maisondeson.com/nuoc-hoa-" + genderPath + "-" + p.brandSlug + "-" + urlSlug;
    
    // Default STT to 999 if not found, to put them at the end.
    let stt = '999';
    let mainImg = p.image ? p.image.split('/').pop() : 'N/A';
    
    // Extract STT from main image prefix (e.g. "001-...", "192-montblanc...")
    if (mainImg !== 'N/A') {
        const match = mainImg.match(/^(\d{3})-/);
        if (match) {
            stt = match[1];
        }
    }
    
    let cardImg = 'N/A';
    if (p.images && p.images.length > 0) {
        const cardObj = p.images.find(img => img.source === 'fragram' || img.url.includes('fragram') || img.url.match(/chai-nuoc-hoa-5/));
        if (cardObj) {
            cardImg = cardObj.url.split('/').pop() || 'N/A';
        } else if (p.images.length > 1) {
            cardImg = p.images[1].url.split('/').pop() || 'N/A';
        }
    }

    products.push({
        stt: stt,
        brandTen: brandTen,
        mainImg: mainImg,
        cardImg: cardImg,
        url: url
    });
});

// Sort by STT
products.sort((a, b) => parseInt(a.stt) - parseInt(b.stt));

let csvContent = '\uFEFF';
csvContent += '"STT","Brand_TenSP","Anh_Main","Anh_Card","URL"\n';
products.forEach(p => {
    csvContent += `"${p.stt}","${p.brandTen}","${p.mainImg}","${p.cardImg}","${p.url}"\n`;
});

fs.writeFileSync('danh_sach_sp_chuan_theo_anh.csv', csvContent, 'utf-8');
console.log("Extracted and sorted by STT image prefix into danh_sach_sp_chuan_theo_anh.csv");
