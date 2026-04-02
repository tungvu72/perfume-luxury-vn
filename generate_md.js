const fs = require('fs');

const list = fs.readFileSync('bad_padding_list.txt', 'utf8')
    .split('\n')
    .map(x => x.trim())
    .filter(Boolean);

function formatName(f) {
    let name = f.replace('-main.jpg', '').replace(/-/g, ' ');
    name = name.replace(/\b(edp|edt)\b/gi, match => match.toUpperCase());
    name = name.replace(/\b(jpg|dg|ysl|ck|mfk)\b/gi, match => match.toUpperCase());
    name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    name = name.replace('Jpg', 'Jean Paul Gaultier');
    name = name.replace('Dg', 'Dolce & Gabbana');
    name = name.replace('Ysl', 'Yves Saint Laurent');
    name = name.replace('Ck', 'Calvin Klein');
    name = name.replace('Mfk', 'Maison Francis Kurkdjian');
    return name;
}

const needDownloadOutput = [];
const needRemoveBg = [];

list.forEach(f => {
    if (f === 'dior-homme-intense-main.jpg' || f === 'amouage-reflection-45-man-main.jpg' || f === 'parfums-de-marly-althair-main.jpg') return;

    // Detect boxes / wrong crops
    if (f.startsWith('jpg-') || f.includes('lhomme-ideal')) {
        needDownloadOutput.push(f);
    } else {
        needRemoveBg.push(f);
    }
});

let md = '# CÁC NHIỆM VỤ SỬA ẢNH (ĐÃ LỌC)\n\n';

md += '## ✂️ 1. GỬI TÁCH NỀN QUA [REMOVE.BG] (Bị nền tối/Xám xịt/Lem nhem) - ' + needRemoveBg.length + ' Chai\n';
md += '> **Yêu cầu:** Các chai này tuy ảnh đúng hình dáng, nhưng bị dính nền Đen/Xám bẩn. Bạn chỉ việc lôi file gốc đã tải sãn trong máy thả vô Remove.BG (Hoặc bấm giữ trên iPhone để tách nền) rồi lưu bản không nền đè vào máy. Mọi tỷ lệ lồi lõm Code của tôi sẽ lo liệu hết lúc Deploy!\n\n';
md += '| Cột Tên File (Save đè) | Cột Tên Sản Phẩm |\n';
md += '|---|---|\n';
needRemoveBg.forEach(f => { md += '| `' + f + '` | **' + formatName(f) + '** |\n'; });

md += '\n---\n\n';

md += '## 📥 2. BẮT BUỘC TẢI LẠI TRÊN FRAGRANTICA (Có cắm theo hộp thiếc móp méo) - ' + needDownloadOutput.length + ' Chai\n';
md += '> **Yêu cầu:** Toàn bộ hãng JPG (Jean Paul Gaultier) và chai Guerlain đang có hình nguyên bộ cái hộp dính kèm. Bạn vui lòng lên đúng trang Fragrantica để tự tay "Save Image" tấm ảnh sạch sẽ không hộp rồi ném đè vô thư mục.\n\n';
md += '| Cột Tên File (Save as từ Web Fragrantica) | Cột Tên Gốc Để Copy Tìm Fragrantica |\n';
md += '|---|---|\n';
needDownloadOutput.forEach(f => { md += '| `' + f + '` | **' + formatName(f) + '** |\n'; });

fs.writeFileSync('FRAGRANTICA_PENDING_IMAGES.md', md);
console.log('File written!');
