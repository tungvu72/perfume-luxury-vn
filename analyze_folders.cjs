const fs = require('fs');
const path = require('path');

const RAW_DIR = 'd:/anti/ảnh nước hoa';
const MOCK_DATA_PATH = path.join(__dirname, 'src/constants/mockData.ts');

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
              .replace(/[^a-z0-9]/g, '');
}

function parseMockData() {
    const data = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const products = [];
    
    // Split by { to get blocks
    const blocks = data.split('{');
    for (const block of blocks) {
        if (block.includes('id:') && block.includes('brand:') && block.includes('name:')) {
            try {
                const idMatch = block.match(/id:\s*["']([^"']+)["']/);
                const brandMatch = block.match(/brand:\s*["']([^"']+)["']/);
                const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
                
                if (idMatch && brandMatch && nameMatch) {
                    products.push({
                        id: idMatch[1],
                        brand: brandMatch[1],
                        name: nameMatch[1],
                        full: sanitize(`${brandMatch[1]} ${nameMatch[1]}`)
                    });
                }
            } catch (e) {}
        }
    }
    return products;
}

const folders = fs.readdirSync(RAW_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(d => d !== 'ảnh chính bổ xung');

const products = parseMockData();

const matched = [];
const unmatched = [];
const usedProductIds = new Set();

for (const folder of folders) {
    const sf = sanitize(folder);
    let bestMatch = null;
    
    for (const p of products) {
        const sp = sanitize(p.name);
        const sfFull = sanitize(p.brand + p.name);
        if (sf.includes(sp) || sfFull.includes(sf) || sf.includes(sfFull)) {
            bestMatch = p;
            break;
        }
    }
    
    if (bestMatch) {
        matched.push({ folder, product: bestMatch });
        usedProductIds.add(bestMatch.id);
    } else {
        unmatched.push(folder);
    }
}

// Missing products from mockData that don't have a matching folder
const productsNeedFolders = products.filter(p => !usedProductIds.has(p.id));

let report = `# Báo Cáo Mapping Ảnh Sản Phẩm (Image Injection)

**Tổng số Folder ảnh gốc:** ${folders.length}
**Tổng số Sản phẩm trên Web (mockData.ts):** ${products.length}

---

## 1. FOLDER TRÙNG KHỚP VỚI SẢN PHẨM (${matched.length})
(Những folder này có sẵn slot trên web để map ảnh vào)

${matched.map(m => `- **${m.folder}** \n  ↳ Match với: [${m.product.brand}] ${m.product.name} (ID: ${m.product.id})`).join('\n')}

---

## 2. FOLDER CHƯA ĐƯỢC ĐĂNG (CẦN ĐĂNG MỚI) (${unmatched.length})
(Có ảnh nhưng chưa có thông tin trong mockData.ts)

${unmatched.map(u => `- ${u}`).join('\n')}

---

## 3. SẢN PHẨM TRÊN WEB BỊ THIẾU FOLDER ẢNH GỐC (${productsNeedFolders.length})
(Những sản phẩm đang có trên web nhưng lại KHÔNG CÓ FOLDER ẢNH tương ứng ở ổ cứng)

${productsNeedFolders.map(p => `- [${p.brand}] ${p.name} (ID: ${p.id})`).slice(0, 50).join('\n')}
${productsNeedFolders.length > 50 ? '... (còn tiếp)' : ''}

---

## 4. CHECK LỖI ĐẶC BIỆT CỦA SẾP
Hai sản phẩm bị lỗi trùng ảnh "Versace Pour Homme"
- Dylan Blue: ${products.some(p => p.full.includes('dylanblue')) ? 'CÓ' : 'KHÔNG'} trên web, ${folders.some(f => sanitize(f).includes('dylanblue')) ? 'CÓ' : 'KHÔNG'} trên folder.
- Chloe: ${products.some(p => p.full.includes('chloe')) ? 'CÓ' : 'KHÔNG'} trên web, ${folders.some(f => sanitize(f).includes('chloe')) ? 'CÓ' : 'KHÔNG'} trên folder.
`;

fs.writeFileSync('task1_analysis.md', report);
console.log('Phân tích xong! Xem file task1_analysis.md');
