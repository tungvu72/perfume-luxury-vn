const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, '../src/constants/mockData.ts');
const IMAGES_DIR = path.join(__dirname, '../public/images/products');

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
        const block = 'id:' + blocks[i].split('}')[0] + '}'; // rough block chunk
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
                const slugPart = id;
                
                products.push({
                    id,
                    brand,
                    brandSlug,
                    name,
                    gender: genderStr,
                    url: `https://maisondeson.com/nuoc-hoa-${genderStr}-${brandSlug}-${id}`
                });
            }
        } catch (e) {}
    }
    
    // De-dupe based on ID just in case
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

function doAudit() {
    const products = parseMockData();
    console.log(`Tìm thấy ${products.length} sản phẩm trên web.`);

    // 2. Read processed folders
    const allProcessedFolders = fs.readdirSync(IMAGES_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

    console.log(`Tìm thấy ${allProcessedFolders.length} folders ảnh đã xử lý thực tế.`);

    const matchedProducts = [];
    const missingImageProducts = [];
    const matchedFolderSlugs = new Set();
    const mapLog = {};

    // 3. Mapping logic
    for (const p of products) {
        const sFull = sanitize(`${p.brand}-${p.name}`);
        const sName = sanitize(p.name);
        const sId = p.id;
        
        let foundFolder = null;
        
        // Exact matches
        for (const f of allProcessedFolders) {
            if (f === sId || f === sFull || f === sName || f.includes(sId) || sId.includes(f)) {
                foundFolder = f;
                break;
            }
        }
        
        // Loose match if not found
        if (!foundFolder) {
            for (const f of allProcessedFolders) {
                const fClean = sanitize(f);
                if (fClean.includes(sName) || sFull.includes(fClean) || fClean.includes(sFull)) {
                    foundFolder = f;
                    break;
                }
            }
        }

        if (foundFolder) {
            matchedProducts.push({ product: p, folder: foundFolder });
            matchedFolderSlugs.add(foundFolder);
            mapLog[foundFolder] = p.name;
        } else {
            missingImageProducts.push(p);
        }
    }

    // Unused folders
    const orphanedFolders = allProcessedFolders.filter(f => !matchedFolderSlugs.has(f) && f !== 'anh-chinh-bo-xung' && f !== '-edp' && f !== '-new-2024' && f !== '-' && f !== 'new-2025');

    // 4. GENERATE REPORT
    let report = `# Báo Cáo Chẩn Đoán Dữ Liệu Web (Audit Report)

**Tổng số Sản phẩm đang public trên Web (` + '`mockData.ts`' + `):** ${products.length} SP
**Tổng số Folder ảnh chụp thật có sẵn:** ${allProcessedFolders.length} Folders

---

## 1. SẢN PHẨM ĐẠT CHUẨN KÈM URL (${matchedProducts.length}/${products.length})
(Những chai ĐÃ CÓ trên Web và MAPPED THÀNH CÔNG với thư mục ảnh thực tế. Sẵn sàng gắn ảnh vào Data)

`;
    
    matchedProducts.forEach((m, idx) => {
        report += `${idx + 1}. **[${m.product.brand}] ${m.product.name}**\n   Folder ảnh: \`${m.folder}\`\n   URL: [${m.product.url}](${m.product.url})\n\n`;
    });

    report += `---

## 2. NHỮNG MẪU CHAI THIẾU ẢNH CHỤP THỰC TẾ (${missingImageProducts.length})
(Những chai ĐANG PUBLIC trên web nhưng KHÔNG TÌM THẤY folder ảnh chụp. Hiện đang dùng ảnh hãng/mặc định)

`;
    missingImageProducts.forEach(m => {
        report += `- **[${m.brand}] ${m.name}** (ID: \`${m.id}\`)\n`;
    });

    report += `---

## 3. ẢNH CHỤP THẬT NHƯNG CHƯA ĐƯỢC LÊN WEB - CẦN ĐĂNG MỚI (${orphanedFolders.length})
(Những Folder Sếp đã chụp ảnh thật, nhưng chưa có thông tin ở \`mockData.ts\` hoặc đặt tên lệch không thể map tự động)

`;
    orphanedFolders.forEach(f => {
        report += `- \`${f}\`\n`;
    });

    fs.writeFileSync(path.join(__dirname, '../audit_report.md'), report);
    console.log('✅ Đã tạo file: audit_report.md');
}

doAudit();
