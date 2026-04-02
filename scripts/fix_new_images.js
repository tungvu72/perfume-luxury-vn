const { execSync } = require('child_process');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function run() {
    const gitDiff = execSync('git status --porcelain public/images/products/').toString().split('\n').filter(Boolean);
    console.log(`Đang chạy re-process bảo vệ cho ${gitDiff.length} file vừa tải...`);
    
    for (const line of gitDiff) {
        // Lấy tên file từ git status (ví dụ: " M public/images/products/file.jpg")
        const relativePath = line.substring(3).trim();
        const absolutePath = path.resolve(relativePath);
        
        if (!fs.existsSync(absolutePath)) continue;
        
        const tmp = absolutePath + '.sharp.tmp';
        try {
            await sharp(absolutePath)
                .flatten({ background: '#ffffff' })
                .jpeg({ quality: 92, mozjpeg: true })
                .toFile(tmp);
            
            fs.renameSync(tmp, absolutePath);
            console.log(`[PASS] Chuẩn hoá siêu sạch: ${path.basename(absolutePath)}`);
        } catch(e) {
            console.log(`[FAIL] Lỗi: ${path.basename(absolutePath)} -> ${e.message}`);
        }
    }
}

run();
