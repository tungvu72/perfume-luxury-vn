const fs = require('fs');

async function testImages() {
    const mockDataStr = fs.readFileSync('src/constants/mockData.ts', 'utf8');
    const imagePaths = [...mockDataStr.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    
    console.log(`Kiểm tra ${imagePaths.length} ảnh trên Production...`);
    
    // We will use native fetch to hit https://www.maisondeson.com/_next/image?url=encodedUrl&w=384&q=75
    let broken = [];
    
    // Process in batches so we don't spam Vercel too hard
    const batchSize = 10;
    for(let i=0; i < imagePaths.length; i+=batchSize) {
        const batch = imagePaths.slice(i, i+batchSize);
        const promises = batch.map(async (img) => {
            const url = `https://www.maisondeson.com/_next/image?url=${encodeURIComponent(img)}&w=384&q=75`;
            try {
                const res = await fetch(url, { method: 'HEAD' });
                if (!res.ok) {
                    broken.push({ img, status: res.status });
                }
            } catch (e) {
                broken.push({ img, status: "FETCH_ERROR" });
            }
        });
        await Promise.all(promises);
    }
    
    if (broken.length > 0) {
        console.log(`\n\n[DETECTED]: Phát hiện ${broken.length} ảnh KHÔNG RENDER ĐƯỢC trên Vercel:`);
        broken.forEach(b => console.log(`- ${b.img} (Mã lỗi: ${b.status})`));
    } else {
        console.log("Tất cả ảnh đều render HTTP 200 OK!");
    }
}

testImages();
