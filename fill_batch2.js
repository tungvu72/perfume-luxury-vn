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
  {
    id: "byredo-blanche-edp",
    brand: "Byredo",
    brandSlug: "byredo",
    name: "Blanche EDP",
    gender: "nu",
    desc: "Mùi hương tối giản, tinh khiết như một chiếc áo sơ mi trắng tinh sương vừa được giặt sạch phơi dưới ánh nắng sớm. Sự kết hợp của Aldehydes, hoa hồng trắng và hoa mẫu đơn mang tới nét thanh tao, sạch sẽ khó tả.",
    top: ["Hương An-đê-hít", "Hoa hồng trắng", "Hạt tiêu hồng"],
    mid: ["Hoa mẫu đơn", "Hoa violet", "Hoa cam African"],
    base: ["Xạ hương", "Hương gỗ", "Gỗ đàn hương"],
    accords: [{name: "Sạch sẽ", value:100, color:"#f0f8ff"}, {name: "Hoa trắng", value:85, color:"#ffffff"}, {name: "Xạ hương", value:70, color:"#dcdcdc"}],
    vibes: [{label: "Sạch sẽ", icon: "✨"}, {label: "Văn phòng", icon: "💼"}, {label: "Tinh tế", icon: "🕊️"}]
  },
  {
    id: "byredo-la-tulipe",
    brand: "Byredo",
    brandSlug: "byredo",
    name: "La Tulipe",
    gender: "nu",
    desc: "Đóa tulip tươi thắm vào khoảnh khắc đầu tiên của thanh xuân rực sáng. Hương xanh mướt của lá cây hòa quyện cùng cánh hoa ngậm sương tạo nên một tác phẩm hoa tươi hiện đại và thanh lịch cực độ.",
    top: ["Hoa lan Nam Phi", "Cây anh thảo", "Đại hoàng"],
    mid: ["Hoa Tulip phấn"],
    base: ["Hương gỗ vàng", "Cỏ hương bài", "Hương lục"],
    accords: [{name: "Hoa tươi", value:100, color:"#ffb6c1"}, {name: "Xanh mướt", value:85, color:"#98fb98"}],
    vibes: [{label: "Tươi mới", icon: "🌿"}, {label: "Lãng mạn", icon: "🌷"}]
  },
  {
    id: "chloe-atelier-des-fleurs-rosa-damascena",
    brand: "Chloé",
    brandSlug: "chloe",
    name: "Rosa Damascena",
    gender: "nu",
    desc: "Bản tôn vinh đóa hồng đài các thuần khiết, nhẹ nhàng và nữ tính. Mùi hương ngập tràn sự e ấp và thanh thoát, tựa như đang đứng giữa một thung lũng hoa hồng ướt đẫm sương sớm.",
    top: ["Cam Bergamot", "Tinh chất sương"],
    mid: ["Hoa hồng Damask"],
    base: ["Gỗ trắng", "Xạ hương"],
    accords: [{name: "Hoa hồng", value:100, color:"#ff69b4"}, {name: "Tươi mát", value:80, color:"#add8e6"}],
    vibes: [{label: "Thanh lịch", icon: "👗"}, {label: "Quyến rũ", icon: "💋"}]
  },
  {
    id: "chloe-atelier-des-fleurs-santalum",
    brand: "Chloé",
    brandSlug: "chloe",
    name: "Santalum",
    gender: "unisex",
    desc: "Một góc nhìn khác về gỗ đàn hương: thơm mùi kem, nhẹ nhàng, trong trẻo. Chloe Santalum không gai góc mà bao quanh bởi sự ấm áp, mượt mà dịu êm của những đốt gỗ ngậm sữa.",
    top: ["Gỗ đàn hương Úc"],
    mid: ["Hương sữa", "Gỗ trắng"],
    base: ["Xạ hương trắng", "Vanilla mộc"],
    accords: [{name: "Gỗ ấm", value:100, color:"#deb887"}, {name: "Sữa", value:70, color:"#faebd7"}],
    vibes: [{label: "Thư giãn", icon: "🧘‍♀️"}, {label: "Trưởng thành", icon: "🧥"}]
  },
  {
    id: "creed-aventus",
    brand: "Creed",
    brandSlug: "creed",
    name: "Aventus",
    gender: "nam",
    desc: "Biểu tượng của quyền lực và thành công. Creed Aventus là sự phối hợp vĩ đại giữa hương dứa mọng nước ngập tràn sức sống và nền rêu sồi, long diên hương dũng mãnh.",
    top: ["Quả dứa", "Cam Bergamot", "Quả lý chua đen", "Táo xanh"],
    mid: ["Gỗ phong vàng", "Hoắc hương", "Bạch dương", "Hồng Maroc"],
    base: ["Xạ hương", "Rêu sồi", "Long diên hương", "Vani"],
    accords: [{name: "Trái cây", value:100, color:"#f1c40f"}, {name: "Ngọt khói", value:85, color:"#a9a9a9"}, {name: "Gỗ sồi", value:70, color:"#228b22"}],
    vibes: [{label: "Quyền lực", icon: "👑"}, {label: "Thành công", icon: "🏆"}, {label: "Đẳng cấp", icon: "💎"}]
  },
  {
    id: "creed-love-in-white",
    brand: "Creed",
    brandSlug: "creed",
    name: "Love In White",
    gender: "nu",
    desc: "Nước hoa mang sắc thái tinh khiết được kết tinh từ những nguyên liệu chọn lọc trải dài trên 5 châu lục. Love in White mở ra cánh cổng đầy chất tinh khôi, sang trọng tôn vinh vẻ đẹp trí thức của phái nữ.",
    top: ["Quả cam từ Tây Ban Nha"],
    mid: ["Hoa mộc lan Ý", "Thủy tiên Pháp", "Hoa hồng Bulgaria", "Gạo Tonkin"],
    base: ["Vani nguyên thủy", "Long diên hương", "Gỗ đàn hương Ấn Độ"],
    accords: [{name: "Hoa trắng", value:100, color:"#ffffff"}, {name: "Phấn ngọt", value:85, color:"#ffe4e1"}],
    vibes: [{label: "Trí thức", icon: "📚"}, {label: "Thượng lưu", icon: "🥂"}]
  },
  {
    id: "creed-silver-moutain-water",
    brand: "Creed",
    brandSlug: "creed",
    name: "Silver Mountain Water",
    gender: "nam",
    desc: "Khí trời mát lạnh sắc bén trên những đỉnh núi tuyết sừng sững Thụy Sĩ. Dòng suối lấp lánh chảy qua khu rừng trà xanh và cam quýt, đem lại một cảm giác vô cùng phóng khoáng và sảng khoái.",
    top: ["Cam Bergamot", "Quả quýt hồng"],
    mid: ["Trà xanh", "Quả lý chua đen"],
    base: ["Xạ hương", "Gỗ đàn hương", "Sứ ngọc", "Nhựa Galbanum"],
    accords: [{name: "Tươi mát", value:100, color:"#e0ffff"}, {name: "Trà", value:85, color:"#98fb98"}],
    vibes: [{label: "Mát lạnh", icon: "❄️"}, {label: "Phóng khoáng", icon: "🌬️"}]
  },
  {
    id: "deliah-blanc",
    brand: "Maison Alhambra",
    brandSlug: "maison-alhambra",
    name: "Deliah Blanc",
    gender: "nu",
    desc: "Hương hoa trắng lấp lánh pha chút uyển chuyển của xạ hương bồng bềnh. Deliah Blanc đại diện cho vẻ đẹp tiểu thư tinh túy, nhẹ nhàng, bay bổng cho bốn mùa.",
    top: ["Hoa nhài", "Mộc qua"],
    mid: ["Hoa huệ diên vĩ", "Vani"],
    base: ["Xạ hương trắng", "Hổ phách"],
    accords: [{name: "Hoa nhài", value:100, color:"#ffffff"}, {name: "Ngọt ngào", value:75, color:"#ffb6c1"}],
    vibes: [{label: "Tiểu thư", icon: "🎀"}, {label: "Mềm mại", icon: "☁️"}]
  },
  {
    id: "diptyque-doson-edp",
    brand: "Diptyque",
    brandSlug: "diptyque",
    name: "Doson EDP",
    gender: "nu",
    desc: "Do Son EDP lưu giữ trọn vẹn những ký ức tuyệt đẹp về gió biển mùa hè và những khóm hoa huệ dọc sườn đồi Đồ Sơn, Việt Nam. Đây là đỉnh cao của hoa huệ thanh tao, xanh ngát và đậm chất nghệ thuật.",
    top: ["Hoa cam", "Hoa hồng", "Hoa diên vĩ"],
    mid: ["Hoa huệ Tuberose", "Tiêu hồng"],
    base: ["An tức hương", "Xạ hương"],
    accords: [{name: "Hoa huệ", value:100, color:"#f8f8ff"}, {name: "Nhiệt đới", value:80, color:"#20b2aa"}],
    vibes: [{label: "Nghệ thuật", icon: "🎨"}, {label: "Vintage", icon: "📻"}]
  },
  {
    id: "diptyque-fleur-de-peau",
    brand: "Diptyque",
    brandSlug: "diptyque",
    name: "Fleur de Peau",
    gender: "unisex",
    desc: "Làn da thứ hai được ướp bằng xạ hương và phấn. Fleur de Peau ôm sát đường cong cơ thể, mô phỏng mùi hương mộc mạc, xác thịt và cực kỳ lôi cuốn một cách kín đáo.",
    top: ["Nhựa xạ hương đỏ", "Cam Bergamot"],
    mid: ["Hoa diên vĩ", "Hoa hồng nhạt"],
    base: ["Xạ hương trắng", "Long diên hương nguyên thủy", "Da thuộc non"],
    accords: [{name: "Xạ hương da", value:100, color:"#f5deb3"}, {name: "Phấn hoa", value:85, color:"#e6e6fa"}],
    vibes: [{label: "Gợi tình", icon: "💋"}, {label: "Kín đáo", icon: "🤫"}]
  },
  {
    id: "dubai-musk",
    brand: "Arabian Oud",
    brandSlug: "arabian-oud",
    name: "Dubai Musk",
    gender: "nam",
    desc: "Xạ hương mang đậm tinh thần hoang mạc Trung Đông, dày dặn, huyền bí và cực kì bí ẩn. Sức mạnh bám tỏa của Dubai Musk là một vũ khí hạng nặng dành cho phái mạnh.",
    top: ["Tiêu đen", "Gia vị"],
    mid: ["Xạ hương tự nhiên", "Hoa nghệ tây"],
    base: ["Trầm hương", "Gỗ Guaiac"],
    accords: [{name: "Gỗ ấm", value:100, color:"#8b4513"}, {name: "Gia vị", value:80, color:"#cd853f"}],
    vibes: [{label: "Huyền bí", icon: "🐪"}, {label: "Manly", icon: "🛡️"}]
  },
  {
    id: "elizabeth-arden-white-tea-edt",
    brand: "Elizabeth Arden",
    brandSlug: "elizabeth-arden",
    name: "White Tea EDT",
    gender: "nu",
    desc: "Giây phút gác lại âu lo để đắm chìm vào bình yên với tách trà trắng tỏa khói dịu nhẹ. Hương thơm tinh khiết cực đỉnh dành cho dân văn phòng hoặc ngày nghỉ cuối tuần.",
    top: ["Quả quýt hồng", "Cây đơn sâm", "Tảo biển"],
    mid: ["Trà trắng", "Trà Mate", "Iris trắng"],
    base: ["Gỗ Madra", "Đậu Tonka", "Xạ tuyết"],
    accords: [{name: "Trà trắng", value:100, color:"#fdf5e6"}, {name: "Xanh mộc", value:80, color:"#8fbc8f"}],
    vibes: [{label: "Tĩnh lặng", icon: "🍵"}, {label: "Nhẹ nhàng", icon: "🍃"}]
  },
  {
    id: "ella-k-pluie-sur-ha-long",
    brand: "Ella K",
    brandSlug: "ella-k",
    name: "Pluie Sur Ha Long",
    gender: "nu",
    desc: "Cơn mưa nhiệt đới trút xuống vịnh Hạ Long kỳ vĩ, đánh thức đóa sen hoa súng hé nở trên mặt nước lam ngọc. Mùi thơm thanh mát, thủy sinh rạng rỡ và đẹp như một bài thơ của Việt Nam.",
    top: ["Khí tươi", "Hạt sen mỏng"],
    mid: ["Hoa súng nước", "Hoa mộc lan"],
    base: ["Gỗ tuyết tùng rêu", "Xạ hương"],
    accords: [{name: "Thủy sinh", value:100, color:"#40e0d0"}, {name: "Hoa nước", value:85, color:"#e0ffff"}],
    vibes: [{label: "Mưa rào", icon: "🌧️"}, {label: "Hương hoa", icon: "💮"}]
  },
  {
    id: "ex-nihilo-blue-talisman",
    brand: "Ex Nihilo",
    brandSlug: "ex-nihilo",
    name: "Blue Talisman",
    gender: "unisex",
    desc: "Viên ngọc xanh mang sức mạnh phong thủy đầy năng lượng tích cực từ Ex Nihilo. Hương lê tươi mọng chìm trong gỗ hiện đại Akigalawood và ambrofix tạo nên sự sắc sảo, vương giả bừng sáng.",
    top: ["Cam Bergamot", "Quả cam", "Lê", "Gừng"],
    mid: ["Ngọc lan tây", "Georgywood"],
    base: ["Akigalawood", "Xạ hương", "Ambrofix"],
    accords: [{name: "Gỗ hiện đại", value:100, color:"#1e90ff"}, {name: "Cam chanh", value:80, color:"#ffd700"}],
    vibes: [{label: "Hiện đại", icon: "🏙️"}, {label: "Vương giả", icon: "💎"}]
  },
  {
    id: "giorgio-armani-acqua-di-gio-profondo",
    brand: "Giorgio Armani",
    brandSlug: "giorgio-armani",
    name: "Acqua di Gio Profondo",
    gender: "nam",
    desc: "Chuyến lặn sâu vào thăm thẳm đại dương nước Ý. Bản Profondo nhấn mạnh nốt hương nước biển mặn mòi, làm lạnh gắt hơn bằng hoắc hương và hương lục. Một vũ khí giải nhiệt hoàn hảo.",
    top: ["Hương biển", "Aquozone", "Cam Bergamot xanh", "Quýt xanh"],
    mid: ["Hương thảo", "Cây bách", "Hoa oải hương", "Nhũ hương"],
    base: ["Hổ phách mù", "Hoắc hương", "Xạ hương rêu"],
    accords: [{name: "Biển cả", value:100, color:"#0000cd"}, {name: "Giải nhiệt", value:85, color:"#00bfff"}],
    vibes: [{label: "Đại dương", icon: "🌊"}, {label: "Sảng khoái", icon: "🧊"}]
  }
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
    tags: ["Thơm lâu", "Tôn lên vẻ đẹp", "Theo dòng xu hướng"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;
    replaceProductData(prod.id, struct);
});
