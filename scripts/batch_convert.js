const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/images/products';

// 1. CLEANUP RÁC THEO YÊU CẦU
const cleanupList = [
    'bvlgari-man-in-black-main.jpg.tmp',
    'bleuchanel edp',
    'dark-375x500.14811.2x.avif',
    'ref',
    'chanel-no-19-eau-de-parfum-main.webp',
    'guerlain-l-homme-ideal-eau-de-parfum-main.webp',
    'guerlain-shalimar-lessence-main.webp'
];

console.log('--- CLEANUP ---');
cleanupList.forEach(f => {
    const p = path.join(dir, f);
    if (fs.existsSync(p)) {
        fs.rmSync(p, { recursive: true, force: true });
        console.log(`Deleted rác: ${f}`);
    }
});

// 2. TẬP LỆNH BATCH
const crashingJpegs = [
  'azzaro-the-most-wanted-parfum-main.jpg',
  'creed-absolu-aventus-main.jpg',
  'mugler-alien-edp-main.jpg',
  'parfums-de-marly-althair-main.jpg',
  'mugler-angel-main.jpg'
];

function detectMimeSync(p) {
  try {
    const b = Buffer.alloc(32);
    const fd = fs.openSync(p, 'r');
    fs.readSync(fd, b, 0, 32, 0);
    fs.closeSync(fd);
    const hex = b.toString('hex');
    if (hex.startsWith('ffd8ff')) return 'jpeg';
    if (hex.startsWith('89504e47')) return 'png';
    if (hex.startsWith('52494646') && hex.substring(16,24) === '57454250') return 'webp';
    if (hex.includes('66747970') && (hex.includes('61766966') || hex.includes('6d696631'))) return 'avif';
    return 'unknown';
  } catch (e) {
    return 'error';
  }
}

async function renameAndMap(oldName, newName) {
    const mockDataFile = 'src/constants/mockData.ts';
    let data = fs.readFileSync(mockDataFile, 'utf8');
    const oldRef = "/images/products/" + oldName;
    const newRef = "/images/products/" + newName;
    if (data.includes(oldRef)) {
        data = data.replaceAll(oldRef, newRef);
        fs.writeFileSync(mockDataFile, data);
        console.log(`  [MAPPING] Updated ${oldName} -> ${newName}`);
    }
}

async function processFile(f) {
    const inPath = path.join(dir, f);
    const mime = detectMimeSync(inPath);
    
    // SAFETY: Bỏ qua 47 ảnh native JPEG tốt
    if (mime === 'jpeg' && !crashingJpegs.includes(f)) {
        return 'skipped';
    }
    
    let finalFileName = f;
    const currentExt = path.extname(f);
    
    // Xử lý lệch đuôi
    if (currentExt !== '.jpg' && currentExt !== '.jpeg') {
         finalFileName = f.replace(currentExt, '.jpg');
    }
    
    const finalOutPath = path.join(dir, finalFileName);
    const tmpOutPath = path.join(dir, f + '.processing.tmp');
    
    try {
        const img = sharp(inPath);
        // Flatten alpha và bồi background trắng
        let processed = img.flatten({ background: '#ffffff' });
        
        // Ép dính định dạng thuần sRGB JPEG
        await processed.jpeg({ quality: 92, mozjpeg: true }).toFile(tmpOutPath);
        
        // VALIDATE bước chạy:
        const outMime = detectMimeSync(tmpOutPath);
        if (outMime === 'jpeg') {
            await sharp(tmpOutPath).metadata(); // Throws lỗi nếu JPEG không toàn vẹn
            
            // Nếu đổi ext, xoá cọc cũ trước, move tmp tới, cập nhật Mapping
            if (finalFileName !== f) {
                fs.unlinkSync(inPath);
                fs.renameSync(tmpOutPath, finalOutPath);
                await renameAndMap(f, finalFileName);
            } else {
                fs.renameSync(tmpOutPath, inPath); // Ghi đè file cũ an toàn
            }
            console.log(`[PASS] ${finalFileName}`);
            return 'processed';
        } else {
            console.log(`[FAIL] ${f} - Lỗi format validate, bãi bỏ.`);
            fs.unlinkSync(tmpOutPath);
            return 'failed';
        }
    } catch (e) {
        console.log(`[FAIL] ${f} - Exception: ${e.message}`);
        if (fs.existsSync(tmpOutPath)) fs.unlinkSync(tmpOutPath);
        return 'failed';
    }
}

async function runBatch() {
    console.log('\n--- START BATCH CHỌN LỌC ---');
    const files = fs.readdirSync(dir);
    let successCount = 0;
    let failCount = 0;
    let skipCount = 0;
    
    for (const f of files) {
        if (f.endsWith('.tmp') || fs.statSync(path.join(dir, f)).isDirectory()) continue;
        
        const r = await processFile(f);
        if (r === 'processed') successCount++;
        else if (r === 'skipped') skipCount++;
        else failCount++;
    }
    
    console.log('\n=== CHỐT SỔ BATCH ===');
    console.log(`Đã gọt ép láng mịn (AVIF/PNG/Crashing): ${successCount}`);
    console.log(`Đã bảo toàn (Không đụng JPEG tốt): ${skipCount}`);
    console.log(`Thất bại lỗi kĩ thuật: ${failCount}`);
}

runBatch();
