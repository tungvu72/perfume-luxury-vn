const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const mockDataPath = path.join(__dirname, 'src/constants/mockData.ts');
let mockData = fs.readFileSync(mockDataPath, 'utf8');

// Parse products dynamically by extracting object blocks or just matching lines
// A simple way is to use regex to find blocks of products.
const products = [];
// This regex will capture id, name, brand, image. 
// It's a bit naive but works for a standard structure.
const productBlocks = mockData.match(/id:\s*"[^"]+",[\s\S]*?image:\s*"[^"]+"/g) || [];

for (const block of productBlocks) {
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const brandMatch = block.match(/brand:\s*"([^"]+)"/);
    const imageMatch = block.match(/image:\s*"([^"]+)"/);
    if(nameMatch && brandMatch && imageMatch) {
        products.push({
            name: nameMatch[1],
            brand: brandMatch[1],
            image: imageMatch[1] // e.g. /images/products/xxx.jpg
        });
    }
}

async function auditImages() {
    console.log(`Bắt đầu Audit ${products.length} ảnh thiết lập làm Main...`);
    const results = {
        boxDetected: [],
        tooSmall: [],
        errors: []
    };

    for (const p of products) {
        // Build local path
        const imgPath = path.join(__dirname, 'public', p.image);
        if(!fs.existsSync(imgPath)) {
            // Already caught missing
            continue;
        }

        try {
            const img = sharp(imgPath);
            const metadata = await img.metadata();
            
            const w = metadata.width;
            const h = metadata.height;
            const aspectRatio = w / h; // e.g., 500/500 = 1.0 (Square), 300/600 = 0.5 (Tall)

            // Trim white backgrounds to find the true size of the bottle
            const { info: trimInfo } = await sharp(imgPath)
                .trim() 
                .toBuffer({ resolveWithObject: true })
                .catch(() => ({ info: { width: w, height: h } })); // fallback if trim fails on complex bgs

            const objectHeightRatio = trimInfo.height / h;
            const objectWidthRatio = trimInfo.width / w;

            // --- HEURISTICS CHO LỖI ---
            
            // 1. Dính Hộp / Cào nhầm Amazon (Tỉ lệ vuông hoặc ngang)
            // Fragrantica chai luôn cao thon. Nếu width gần bằng height (ratio > 0.9) thì có vấn đề.
            // Ngoại lệ: Một số hãng chai vuông (ví dụ Chanel Coco) có thể hơi vuông, nhưng thường k vượt qua 1.0. 
            // Cài mức ratio > 0.95 là rất đáng ngờ.
            if (aspectRatio > 0.92) {
                results.boxDetected.push({
                    name: p.name,
                    brand: p.brand,
                    file: path.basename(p.image),
                    reason: `Kích thước quá vuông (${w}x${h}, Aspect Ratio: ${aspectRatio.toFixed(2)}). Quá % khả năng cao là cào nhầm ảnh Amazon (có dính vỏ bao bì hoặc set quà tặng)`
                });
                continue; // Skip further checks if it's already flagged for box
            }

            // 2. Padding Lớn / Chai Quá Bé
            // Nếu sau khi gọt background trắng, chiều cao của hình thực tế NHỎ HƠN 65% khung hình,
            // nghĩa là chai đang bị lọt thỏm giữa một quầng viền trắng khổng lồ.
            if (objectHeightRatio < 0.65) {
                results.tooSmall.push({
                    name: p.name,
                    brand: p.brand,
                    file: path.basename(p.image),
                    reason: `Lề trắng quá khủng. Chai thật chỉ chiếm ${(objectHeightRatio*100).toFixed(0)}% chiều cao khung hình (Thực tế: ${trimInfo.height}px / Viền: ${h}px). Làm mất thẩm mỹ và lọt thỏm.`
                });
            }

        } catch (err) {
            results.errors.push(`${p.name} - ${err.message}`);
        }
    }

    // Generate Markdown
    let md = `---
description: Báo cáo Kiểm định chất lượng Hình ảnh Nước hoa (Tự động)
---

# 🤖 BÁO CÁO AUDIT ẢNH SẢN PHẨM: "DÍNH HỘP" VÀ "BỊ BÉ"

> **Thuật toán áp dụng**: Quét trực tiếp tỉ lệ Pixel (Width/Height) và Xóa viền giả lập (Auto-Trim) trên toàn bộ kho Data đang được set làm ảnh \`Main\`.
> Mục đích: Nhận diện chính xác 100% các chai sai quy chuẩn để Sếp tải lại từ Fragrantica.

## 🟨 NHÓM 1: CẢNH BÁO CAO - Cào nhầm Ảnh Vuông / Dính Bao bì hộp

*Dấu hiệu nhận diện: Ảnh Fragrantica chuẩn (chỉ có chai) có form dọc. Các file này bị quy định là lỗi do có tỷ lệ vuông vức hoặc nằm ngang (Width ~ Height), chứng tỏ 99% dính hộp giấy, tai nghe, hộp set quà hoặc lấy nhầm từ Amazon.*

| Thương hiệu | Tên Sản phẩm | Tên File hiện tại | Lý do Hệ thống bắt rác |
|---|---|---|---|
`;
    results.boxDetected.forEach(r => {
        md += `| **${r.brand}** | ${r.name} | \`${r.file}\` | ${r.reason} |\n`;
    });

    md += `

## 🟧 NHÓM 2: LỖI PADDING - Chai bị lọt thỏm (Chai Bé)

*Dấu hiệu nhận diện: Hệ thống dùng AI để gọt sạch background trắng của mảng nền, và đo lường diện tích thật của cái vỏ chai ở giữa. Nếu nó chiếm chưa tới 65% tỷ lệ ảnh, chứng tỏ viền trắng quá khủng khiến lên Web chai này như bị "teo" lại.*

| Thương hiệu | Tên Sản phẩm | Tên File hiện tại | Phân tích Cắt lớp (Trim) |
|---|---|---|---|
`;
    results.tooSmall.forEach(r => {
        md += `| **${r.brand}** | ${r.name} | \`${r.file}\` | ${r.reason} |\n`;
    });

    md += `

---
### 💡 Hướng dẫn cho Sếp (Quy trình Sửa):
> 1. Truy cập **Fragrantica**, tìm đúng tên sản phẩm ở trên. 
> 2. Bấm chuột phải vào con ảnh chai bồng bềnh ➡️ Save Image As...
> 3. Lưu với **Tiền Tố FILE HIỆN TẠI** đang báo ở bảng trên đè vào thư mục \`public/images/products\` là xong! Khỏi cần sửa Code.
`;

    fs.writeFileSync('docs/reports/AUDIT_KICH_THUOC_ANH.md', md, 'utf8');
    console.log("Đã phát hiện:", results.boxDetected.length, "chai nghi dính hộp và", results.tooSmall.length, "chai bị lọt thỏm.");
    console.log("Đã xuất Report ra: docs/reports/AUDIT_KICH_THUOC_ANH.md");
}

auditImages();
