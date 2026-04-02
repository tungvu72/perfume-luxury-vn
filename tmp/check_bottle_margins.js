const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/products';

async function checkMargins() {
    console.log('Đang quét 216 ảnh để tìm chai quá bé hoặc chật kín khung...');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
    
    const tooSmall = [];
    const tooTight = [];
    
    for (const f of files) {
        try {
            const p = path.join(dir, f);
            
            // Lấy thông số ảnh trim vùng viền trắng/trong suốt
            // sharp().trim() trả về bounding box của object thực sự
            const { info, data } = await sharp(p)
                .trim({ threshold: 4, background: '#ffffff' })
                .toBuffer({ resolveWithObject: true });
                
            const meta = await sharp(p).metadata();
            
            const originalHeight = meta.height;
            const contentHeight = info.height;
            const originalWidth = meta.width;
            const contentWidth = info.width;
            
            const heightRatio = contentHeight / originalHeight;
            const widthRatio = contentWidth / originalWidth;
            
            // Lọt thỏm bấy nhầy: Chai chỉ chiếm dưới 50% chiều cao ảnh gốc
            if (heightRatio < 0.5 && widthRatio < 0.5) {
                tooSmall.push({ file: f, ratio: heightRatio.toFixed(2) });
            }
            
            // Quá chật (dễ mất nắp): Chai chiếm trên 96% chiều cao ảnh gốc
            if (heightRatio > 0.96) {
                tooTight.push({ file: f, ratio: heightRatio.toFixed(2) });
            }
        } catch (e) {
            // bỏ qua
        }
    }
    
    console.log('\n--- CHAI QUÁ BÉ (CHỈ CHIẾM <50% KHUNG) ---');
    tooSmall.sort((a,b) => a.ratio - b.ratio).forEach(x => console.log(`${x.file} (Chiếm ${Math.round(x.ratio*100)}% chiều cao)`));
    
    console.log('\n--- CHAI QUÁ CHẶT/MẤT NẮP (CHIẾM >96% KHUNG) ---');
    tooTight.sort((a,b) => b.ratio - a.ratio).forEach(x => console.log(`${x.file} (Chiếm ${Math.round(x.ratio*100)}% chiều cao)`));
}

checkMargins();
