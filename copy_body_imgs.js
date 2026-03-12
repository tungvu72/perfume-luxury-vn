const fs = require('fs');
const path = require('path');
const src = 'C:/Users/Admin/.gemini/antigravity/brain/d1f7c52c-2d32-4244-b96e-92bca0f1dc23';
const dst = 'D:/anti/perfume-luxury-vn/public/images/articles';

const copies = [
    ['bdc_edp_v2_1773337874231.png', 'bleu-de-chanel-edp-van-phong.png'],
    ['ysl_y_edp_v2_1773337891598.png', 'ysl-y-edp-hien-dai.png'],
    ['bdc_vs_ysl_climate_1773337656657.png', 'nuoc-hoa-khi-hau-nong-am.png'],
    ['bdc_vs_ysl_verdict_1773337675404.png', 'so-sanh-bleu-chanel-ysl-y-ket-luan.png'],
    ['creed_luxury_heritage_1773337712420.png', 'creed-di-san-xa-xi.png'],
    ['creed_aventus_iconic_1773337729311.png', 'creed-aventus-bieu-tuong.png'],
    ['creed_controversy_1773337745333.png', 'creed-tranh-cai-gia-tri.png'],
    ['niche_info_access_1773337762454.png', 'nguoi-dung-tim-hieu-nuoc-hoa.png'],
    ['niche_price_value_1773337791064.png', 'gia-tri-thuc-nuoc-hoa-niche.png'],
    ['niche_smart_buyer_1773337810251.png', 'nguoi-mua-thong-thai-2026.png'],
];

copies.forEach(([s, d]) => {
    try {
        fs.copyFileSync(path.join(src, s), path.join(dst, d));
        console.log('OK:', d);
    } catch (e) {
        console.error('FAIL:', d, e.message);
    }
});
console.log('ALL DONE');
