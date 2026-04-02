const fs = require('fs');

// 1. Fix mockData.ts
let mockData = fs.readFileSync('src/constants/mockData.ts', 'utf8');
if (mockData.includes('dior-homme-original-main.jpg')) {
    mockData = mockData.replace('dior-homme-original-main.jpg', 'dior-homme-sport-2021-main.jpg');
    fs.writeFileSync('src/constants/mockData.ts', mockData, 'utf8');
    console.log("Đã sửa lỗi URL ảnh bị lộn sang Dior Homme Original bên trong Dior Homme Sport 2021!");
}

// 2. Xoá file ảnh bị lõi
const imgPath = 'public/images/products/dior-homme-original-main.jpg';
if (fs.existsSync(imgPath)) {
    fs.unlinkSync(imgPath);
    console.log("Đã xoá hoàn toàn file ảnh lỗi dior-homme-original-main.jpg khỏi hệ thống!");
} else {
    console.log("File ảnh dior-homme-original-main.jpg đã không còn tồn tại.");
}
