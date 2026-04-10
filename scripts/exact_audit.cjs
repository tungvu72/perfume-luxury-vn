const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, '../src/constants/mockData.ts');
const RAW_DIR = 'd:/anti/ảnh nước hoa';

function sanitize(str) {
    if (!str) return '';
    return str.toLowerCase()
              .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
              .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
              .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
              .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
              .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
              .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
              .replace(/đ/g, 'd')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-+|-+$/g, '');
}

function parseMockData() {
    const data = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const products = [];
    const blocks = data.split('id:');
    
    for (let i = 1; i < blocks.length; i++) {
        const block = 'id:' + blocks[i].split('}')[0] + '}'; 
        try {
            const idMatch = block.match(/id:\s*["']([^"']+)["']/);
            const brandSlugMatch = block.match(/brandSlug:\s*["']([^"']+)["']/);
            const brandMatch = block.match(/brand:\s*["']([^"']+)["']/);
            const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
            const genderMatch = block.match(/gender:\s*["'](nam|nu|unisex)["']/);
            
            if (idMatch && nameMatch) {
                const id = idMatch[1];
                const brand = brandMatch ? brandMatch[1] : '';
                const brandSlug = brandSlugMatch ? brandSlugMatch[1] : sanitize(brand);
                const name = nameMatch[1];
                const gender = genderMatch ? genderMatch[1] : 'unisex';
                const genderStr = gender === 'nam' ? 'nam' : (gender === 'nu' ? 'nu' : 'unisex');
                const pFull = sanitize(brand) + '-' + sanitize(name);
                
                products.push({
                    id,
                    brand,
                    brandSlug,
                    name,
                    gender: genderStr,
                    slugFull: pFull,
                    url: `https://maisondeson.com/nuoc-hoa-${genderStr}-${brandSlug}-${id}`
                });
            }
        } catch (e) {}
    }
    
    // Deduplicate
    const unique = [];
    const seen = new Set();
    for (let p of products) {
        if (!seen.has(p.id)) {
            seen.add(p.id);
            unique.push(p);
        }
    }
    return unique;
}

function runExactAudit() {
    const products = parseMockData();
    const rawFolders = fs.readdirSync(RAW_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory() && d.name !== 'ảnh chính bổ xung')
        .map(d => d.name);

    if (rawFolders.length !== 81) {
        throw new Error("Raw folders length is not 81");
    }

    const matchedProducts = [];
    const matchingLog = [];
    const unmatchedProducts = [];
    const orphanFolders = [];

    // Tries to map folder to product
    const usedProductIds = new Set();
    const folderToProductMap = new Map();

    for (const folder of rawFolders) {
        const fSlug = sanitize(folder);
        // Ex: "ARMAF Effects of Uniq" -> "armaf-effects-of-uniq"
        
        let bestMatch = null;
        for (const p of products) {
            // Strong match logic
            if (fSlug === p.slugFull || fSlug === sanitize(p.name) || p.slugFull.includes(fSlug) || fSlug.includes(p.slugFull) || fSlug.includes(p.id.replace(/-/g, ''))) {
                bestMatch = p;
                break;
            }
        }

        if (bestMatch) {
            folderToProductMap.set(folder, bestMatch);
            usedProductIds.add(bestMatch.id);
        } else {
            orphanFolders.push(folder);
        }
    }

    for (const p of products) {
        if (usedProductIds.has(p.id)) {
            matchedProducts.push(p);
        } else {
            unmatchedProducts.push(p);
        }
    }

    // Export the exact report
    let report = `## TỔNG SẢN PHẨM TRÊN WEB: ${products.length}\n`;
    report += `## TỔNG FOLDER ẢNH: ${rawFolders.length}\n\n`;

    report += `### 1. ĐẠT CHUẨN (${matchedProducts.length} SẢN PHẨM KHỚP ẢNH GỐC)\n`;
    for (const [folder, p] of folderToProductMap) {
        report += `- [${p.brand}] ${p.name} -> URL: ${p.url}\n`;
    }

    report += `\n### 2. THIẾU ẢNH THẬT (${unmatchedProducts.length} SẢN PHẨM TRÊN WEB NHƯNG KHÔNG CÓ FOLDER)\n`;
    unmatchedProducts.forEach(p => {
        report += `- [${p.brand}] ${p.name} | URL: ${p.url}\n`;
    });

    report += `\n### 3. CÓ ẢNH CHỤP THẬT NHƯNG CHƯA ĐĂNG TRÊN WEB (${orphanFolders.length} FOLDER)\n`;
    orphanFolders.forEach(f => {
        report += `- Folder: ${f}\n`;
    });

    fs.writeFileSync(path.join(__dirname, '../exact_audit.md'), report);
    console.log("Xong!");
}

runExactAudit();
