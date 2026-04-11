const fs = require('fs');
const path = require('path');

const MOCK_DATA_PATH = path.join(__dirname, 'src/constants/mockData.ts');

function replaceProductData(id, newCode) {
    let content = fs.readFileSync(MOCK_DATA_PATH, 'utf8');
    const idRegex = new RegExp(`id:\\s*['"\`]${id}['"\`]`, 's');
    const match = idRegex.exec(content);
    if (!match) return false;

    let start = match.index;
    while (start > 0 && content[start] !== '{') start--;
    let depth = 0, end = start;
    let inString = false, quoteChar = null;

    while (end < content.length) {
        let char = content[end], prev = end > 0 ? content[end-1] : '';
        if (inString) {
            if (char === quoteChar && prev !== '\\') inString = false;
        } else {
            if (char === '"' || char === "'" || char === "\`") { inString = true; quoteChar = char; }
            else if (char === '{') depth++;
            else if (char === '}') {
                depth--;
                if (depth === 0) {
                    end++;
                    let oldBlock = content.substring(start, end);
                    let imgMatch = oldBlock.match(/image:\s*['"][^'"]*['"]/);
                    let imgsMatch = oldBlock.match(/images:\s*\[[\s\S]*?\](?=\s*(?:,|}|$))/);
                    let finalCode = newCode.replace('__IMAGE_FIELD__', imgMatch ? imgMatch[0] : '').replace('__IMAGES_FIELD__', imgsMatch ? imgsMatch[0] : 'images: []');
                    content = content.substring(0, start) + finalCode + content.substring(end);
                    fs.writeFileSync(MOCK_DATA_PATH, content, 'utf8');
                    console.log(`Updated ${id}`);
                    return true;
                }
            }
        }
        end++;
    }
    return false;
}

const batchData = [
  { id: "diptyque-doson-edp", brand: "Diptyque", brandSlug: "diptyque", name: "Doson EDP", gender: "nu",
    desc: "Ký ức tuổi thơ tại Đồ Sơn, Việt Nam với gió biển lồng lộng cuốn theo mùi hoa huệ tinh khiết. Do Son EDP mang nét gợi cảm tự nhiên, xanh ngát và quyến luyến.",
    top: ["Hoa huệ Tuberose", "Hoa cam Châu Phi", "Hoa nhài"], mid: ["Hồng tiêu", "Cam Bergamot"], base: ["Amberwood", "Xạ hương"],
    accords: [{name: "Hoa trắng", value:100, color:"#ffffff"}, {name: "Gợi cảm tự nhiên", value:85, color:"#f8f8ff"}],
    vibes: [{label: "Hoài niệm", icon: "🌊"}, {label: "Tinh tế", icon: "🤍"}] },

  { id: "diptyque-fleur-de-peau", brand: "Diptyque", brandSlug: "diptyque", name: "Fleur de Peau", gender: "unisex",
    desc: "Mùi hương của da thịt tự nhiên, mộc mạc và gợi cảm. Fleur de Peau là bản giao hưởng xạ hương hòa quyện với hoa diên vĩ, tạo nên một đám mây phấn nhẹ nhàng bao phủ cơ thể.",
    top: ["Hương An-đê-hít", "Hồng tiêu", "Cây bạch chỉ", "Cam Bergamot"], mid: ["Hoa diên vĩ (Iris)", "Hoa hồng Thổ Nhĩ Kỳ"], base: ["Xạ hương trắng", "Cây vông vang", "Long diên hương", "Gỗ đàn hương"],
    accords: [{name: "Xạ hương da thịt", value:100, color:"#ffebcd"}, {name: "Phấn hoa", value:85, color:"#ffe4e1"}],
    vibes: [{label: "Xác thịt", icon: "💋"}, {label: "Nhẹ nhàng", icon: "☁️"}] },

  { id: "philosykos-edp", brand: "Diptyque", brandSlug: "diptyque", name: "Philosykos EDP", gender: "unisex",
    desc: "Trái sung Hy Lạp rực rỡ và chân thật nhất. Philosykos mang trọn vẹn cả lá sung xanh ngát, vỏ sung đắng nhẹ, nhựa sung sữa và gỗ sung khô ấm áp.",
    top: ["Lá sung", "Quả sung xanh"], mid: ["Hương lục xanh ngát", "Quả dừa tươi"], base: ["Gỗ sung", "Hương gỗ", "Gỗ tuyết tùng"],
    accords: [{name: "Xanh mộc", value:100, color:"#228b22"}, {name: "Sữa dừa ngọt nhẹ", value:85, color:"#f0fff0"}],
    vibes: [{label: "Xanh mát", icon: "🍃"}, {label: "Chân thật", icon: "🌿"}] },

  { id: "light-blue-intense-homme", brand: "Dolce & Gabbana", brandSlug: "dolce-gabbana", name: "Light Blue Eau Intense", gender: "nam",
    desc: "Làn nước biển trong vắt tại Capri, mát lạnh và mặn mòi. Bản Intense làm đậm thêm độ bám tỏa, là vũ khí mùa hè hủy diệt cái nóng với bưởi và hương biển mơn man.",
    top: ["Bưởi chùm", "Cam Mandarin"], mid: ["Nước biển", "Quả bách xù"], base: ["Xạ hương", "Amberwood"],
    accords: [{name: "Biển cả", value:100, color:"#00bfff"}, {name: "Tươi mặn", value:85, color:"#87cefa"}],
    vibes: [{label: "Sảng khoái", icon: "🌊"}, {label: "Giải nhiệt", icon: "🧊"}] },

  { id: "light-blue-pour-femme", brand: "Dolce & Gabbana", brandSlug: "dolce-gabbana", name: "Light Blue Pour Femme EDT", gender: "nu",
    desc: "Kỳ nghỉ hè bất tận dưới nắng Địa Trung Hải. Hương chanh Sicily và táo xanh giòn rụm vượt thời gian, tươi mát, năng động và cự kì dễ chịu cho một ngày hè.",
    top: ["Chanh Sicily", "Táo xanh", "Gỗ tuyết tùng", "Hoa chuông"], mid: ["Tre", "Hoa nhài", "Hoa hồng trắng"], base: ["Gỗ tuyết tùng", "Xạ hương", "Hổ phách"],
    accords: [{name: "Citrus tươi mát", value:100, color:"#ffff00"}, {name: "Trẻ trung năng động", value:85, color:"#f0e68c"}],
    vibes: [{label: "Kinh điển hè", icon: "🍋"}, {label: "Tự do", icon: "⛵"}] },

  { id: "the-one-edp", brand: "Dolce & Gabbana", brandSlug: "dolce-gabbana", name: "The One EDP", gender: "nu",
    desc: "Quý cô kiêu kỳ, sang trọng và tỏa sáng lấp lánh như vàng ròng. Tổ hợp quả đào mọng nước và hoa huệ trắng hòa vào lớp nền vani ấm áp, khiến ai cũng phải ngoái nhìn.",
    top: ["Quả đào", "Quả vải", "Cam Mandarin", "Cam Bergamot"], mid: ["Hoa loa kèn", "Quả mận", "Hoa nhài", "Hoa linh lan"], base: ["Vani", "Hổ phách", "Xạ hương", "Cỏ Vetiver"],
    accords: [{name: "Ngọt ấm", value:100, color:"#ffd700"}, {name: "Trái cây nhung", value:85, color:"#ff8c00"}],
    vibes: [{label: "Sang chảnh", icon: "✨"}, {label: "Quyến rũ", icon: "💃"}] },

  { id: "the-one-for-men-eau-de-parfum", brand: "Dolce & Gabbana", brandSlug: "dolce-gabbana", name: "The One for Men EDP", gender: "nam",
    desc: "Hương vị của gã đàn ông phong trần, ấm áp và lãng mạn. Mùi thuốc lá quyện gỗ hổ phách tạo ra một dải hương nam tính, mượt mà hoàn hảo cho những buổi hẹn hò đêm.",
    top: ["Bưởi chùm", "Rau mùi", "Húng quế"], mid: ["Bạch đậu khấu", "Gừng cay", "Hoa cam"], base: ["Hổ phách", "Thuốc lá", "Gỗ tuyết tùng"],
    accords: [{name: "Gia vị hổ phách", value:100, color:"#8b4513"}, {name: "Thuốc lá ngọt", value:85, color:"#d2691e"}],
    vibes: [{label: "Sexy man", icon: "🤵"}, {label: "Hẹn hò", icon: "🌃"}] },

  { id: "le-parfum-elie-saab", brand: "Elie Saab", brandSlug: "elie-saab", name: "Le Parfum", gender: "nu",
    desc: "Chiếc váy Haute Couture lấp lánh dệt từ hàng ngàn đóa hoa cam và nhài trắng. Ánh sáng của sự lộng lẫy điểm xuyết mật ong, tạo khí chất cực kì quý phái và quyền lực.",
    top: ["Hoa cam Châu Phi"], mid: ["Hoa nhài Grandiflorum", "Hoa nhài Sambac"], base: ["Mật ong trắng", "Hoắc hương", "Hồng sắc", "Gỗ tuyết tùng Virginia"],
    accords: [{name: "Hoa trắng quyền uy", value:100, color:"#fff8dc"}, {name: "Mật ong nhung", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Đẳng cấp dạ hội", icon: "👗"}, {label: "Lộng lẫy", icon: "💎"}] },

  { id: "elizabeth-arden-white-tea-edt", brand: "Elizabeth Arden", brandSlug: "elizabeth-arden", name: "White Tea EDT", gender: "nu",
    desc: "Phút giây tĩnh lặng, bình yên nhâm nhi cốc trà trắng ấm áp bên trang sách mở. Hương thơm thư giãn tinh thần với sự pha trộn của lá đơn sâm, diên vĩ trắng và gỗ Madra.",
    top: ["Hương biển", "Dương xỉ", "Cây đơn sâm", "Cam Mandarin"], mid: ["Trà trắng", "Hoa diên vĩ trắng", "Trà Mate"], base: ["Gỗ hiếm", "Cây vông vang", "Đậu Tonka", "Amber"],
    accords: [{name: "Trà trắng tĩnh lặng", value:100, color:"#f5f5f5"}, {name: "Thư giãn spa", value:85, color:"#e0ffff"}],
    vibes: [{label: "Bình yên", icon: "🍵"}, {label: "Thanh tịnh", icon: "📖"}] },

  { id: "ella-k-pluie-sur-ha-long", brand: "Ella K", brandSlug: "ella-k", name: "Pluie Sur Ha Long", gender: "unisex",
    desc: "Cơn mưa nhiệt đới làm bừng tỉnh cả Vịnh Hạ Long hùng vĩ. Tiết tấu mềm mại của hoa súng, hoa mộc lan ẩn mình dưới lớp sương mù dày đặc và thanh khiết vô cùng.",
    top: ["Lê Nashi", "Cây đại hoàng", "Hồng tiêu"], mid: ["Hoa sen", "Nhài nước", "Mộc lan", "Hoa hồng"], base: ["Xạ hương trắng", "Gỗ nhiệt đới (Akigalawood)", "Ambrofix™"],
    accords: [{name: "Thủy sinh trong vắt", value:100, color:"#afeeee"}, {name: "Hương hoa cỏ ẩm sương", value:85, color:"#98fb98"}],
    vibes: [{label: "Cơn mưa Hạ Long", icon: "🌧️"}, {label: "Huyền bí Á Đông", icon: "🐉"}] }
];

batchData.forEach(prod => {
    const struct = `{
    id: "${prod.id}",
    brand: "${prod.brand}",
    brandSlug: "${prod.brandSlug}",
    name: "${prod.name}",
    gender: "${prod.gender}",
    __IMAGE_FIELD__,
    __IMAGES_FIELD__,
    description: "${prod.desc}",
    verdict: "Hương thơm xuất sắc, chuẩn bị cập nhật bài phân tích...",
    verdictShort: "Đang cập nhật",
    score: { scent: Math.floor(Math.random()*2)+8, uniqueness: 8, compliments: 8, value: 8, total: 8.5 },
    vibes: ${JSON.stringify(prod.vibes)},
    topNotes: ${JSON.stringify(prod.top.map(n => ({name: n})))},
    middleNotes: ${JSON.stringify(prod.mid.map(n => ({name: n})))},
    baseNotes: ${JSON.stringify(prod.base.map(n => ({name: n})))},
    accords: ${JSON.stringify(prod.accords)},
    tags: ["Thơm lâu", "Hương tinh chọn"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;
    let res = replaceProductData(prod.id, struct);
    if (!res) console.log("FAILED TO MAP:", prod.id);
});
