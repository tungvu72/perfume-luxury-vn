const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const RAW_DIR = 'd:/anti/ảnh nước hoa';
const TARGET_DIR = path.join(__dirname, 'public/images/products');

function sanitizeSlug(str) {
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

const WATERMARK_SVG = `
  <svg width="400" height="100">
    <style>
      .title { fill: rgba(255, 255, 255, 0.4); font-size: 28px; font-family: sans-serif; font-weight: bold; }
    </style>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="title">MAISON DE SON</text>
  </svg>
`;

async function processImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .resize(800, null, { withoutEnlargement: true })
            .composite([{
                input: Buffer.from(WATERMARK_SVG),
                gravity: 'southeast'
            }])
            .webp({ quality: 80 })
            .toFile(outputPath);
        return true;
    } catch (err) {
        console.error(`Lỗi file ${inputPath}:`, err.message);
        return false;
    }
}

async function runBatch() {
    console.log('Tiếp tục xử lý ảnh CÁC BATCH CÒN LẠI...');
    
    let allFolders = fs.readdirSync(RAW_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory() && d.name !== 'ảnh chính bổ xung')
        .map(d => d.name);

    // Process from 20 to the end
    const batchFolders = allFolders.slice(20);
    
    let processedCount = 0;
    let failedCount = 0;

    for (const folder of batchFolders) {
        const slug = sanitizeSlug(folder);
        const sourcePath = path.join(RAW_DIR, folder);
        const targetPath = path.join(TARGET_DIR, slug);

        if (!fs.existsSync(targetPath)) fs.mkdirSync(targetPath, { recursive: true });

        const files = fs.readdirSync(sourcePath);
        const imageFiles = files.filter(f => /\.(png|jpe?g|webp)$/i.test(f));

        if (imageFiles.length === 0) continue;

        console.log(`\n⏳ Đang xử lý: [${folder}] -> ${slug} (${imageFiles.length} ảnh)`);

        for (let i = 0; i < imageFiles.length; i++) {
            const file = imageFiles[i];
            const inPath = path.join(sourcePath, file);
            const outPath = path.join(targetPath, `${slug}-${i + 1}.webp`);

            // Chỉ xử lý nếu ảnh webp chưa tồn tại (để có thể chạy lại an toàn)
            if (!fs.existsSync(outPath)) {
                const success = await processImage(inPath, outPath);
                if (success) {
                    processedCount++;
                    process.stdout.write('.');
                } else {
                    failedCount++;
                }
            } else {
                process.stdout.write('S'); // S = Skipped (already done)
            }
        }
    }

    console.log(`\n\n✅ Đã hoàn thành xử lý toàn bộ ${batchFolders.length} folder còn lại.`);
    console.log(`📸 Tổng số ảnh convert thành công đợt này: ${processedCount}`);
    if (failedCount > 0) console.log(`❌ Số ảnh lỗi: ${failedCount}`);
}

runBatch();
