const fs = require('fs');
const path = require('path');

const mockDataPath = path.resolve('src/constants/mockData.ts');
const publicDir = path.resolve('public');

const content = fs.readFileSync(mockDataPath, 'utf8');

// match { url: "/images/products/xyz.jpg" }
const regex = /url:\s*["']([^"']+)["']/g;
let match;
const missing = [];
const allImages = new Set();

while ((match = regex.exec(content)) !== null) {
    const imgUrl = match[1];
    allImages.add(imgUrl);
}

for (const imgUrl of allImages) {
    // some images might be external like https://... but our catalog is fully local
    if (!imgUrl.startsWith('/')) continue;
    
    // Check if the file physically exists
    const absoluteFilePath = path.join(publicDir, imgUrl);
    if (!fs.existsSync(absoluteFilePath)) {
        missing.push(imgUrl);
    }
}

if (missing.length === 0) {
    console.log("Tuyệt vời! Tất cả các ảnh khai báo trong mockData.ts đều TỒN TẠI trên ổ đĩa.");
} else {
    console.log(`CẢNH BÁO: Phát hiện ${missing.length} đường dẫn rỗng (card trắng)`);
    missing.forEach(m => console.log(` - KHÔNG TỒN TẠI: ${m}`));
}
