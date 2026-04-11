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
    id: "good-girl-carolina",
    brand: "Carolina Herrera",
    brandSlug: "carolina-herrera",
    name: "Good Girl EDP",
    gender: "nu",
    desc: "Vũ khí bí mật bùng nổ của mẫu giày gót nhọn lừng danh. Good Girl phô trương nét cá tính mạnh mẽ bằng chocolate đen béo ngậy, đậu tonka ấm ngọt và hoa nhài đài các, mang đến vẻ quyến rũ không thể cưỡng lại.",
    top: ["Hạnh nhân", "Cà phê", "Cam Bergamot"],
    mid: ["Hoa nhài Sambac", "Hoa huệ trắng", "Hoa cam", "Hoa hồng Bulgaria"],
    base: ["Đậu Tonka", "Cacao", "Vani", "Kẹo Praline", "Xạ hương"],
    accords: [{name: "Ngọt ngào", value:100, color:"#8b0000"}, {name: "Hoa trắng", value:80, color:"#ffb6c1"}],
    vibes: [{label: "Quyến rũ", icon: "👠"}, {label: "Tiệc đêm", icon: "✨"}]
  },
  {
    id: "gritti-tutu-extrait",
    brand: "Gritti",
    brandSlug: "gritti",
    name: "TuTu Extrait de Parfum",
    gender: "nu",
    desc: "Tuyệt phẩm múa ballet ngọt ngào trên làn da. Gritti TuTu rực rỡ với quả dừa, đào tươi, đan xen cùng xạ hương thanh thoát, tạo ra một áng mây phấn mịn màng tuyệt diệu.",
    top: ["Dừa tươi", "Cam hồng", "Lá dâu tằm", "Kem vanilla"],
    mid: ["Hoa hồng nữ hoàng", "Hoa nghệ tây", "Quả mâm xôi tây"],
    base: ["Hổ phách", "Cỏ hương bài", "Xạ hương"],
    accords: [{name: "Dừa sữa", value:100, color:"#ffffff"}, {name: "Mùi phấn", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Dễ thương", icon: "🎀"}, {label: "Thơ mộng", icon: "🦢"}]
  },
  {
    id: "gucci-flora-gorgeous-gardenia",
    brand: "Gucci",
    brandSlug: "gucci",
    name: "Flora Gorgeous Gardenia",
    gender: "nu",
    desc: "Cẩm tú cầu lộng lẫy và ngọt lịm mùa hè. Flora Gorgeous Gardenia tràn ngập niềm vui từ đường nâu và hoa trắng tỏa nắng, xứng đáng là lọ nước hoa quốc dân cho các thiếu nữ.",
    top: ["Hoa lê", "Quả mọng Ý", "Quả quýt"],
    mid: ["Hoa dành dành", "Hoa nhài", "Frangipani"],
    base: ["Đường nâu", "Cây hoắc hương"],
    accords: [{name: "Hoa nhài ngọt", value:100, color:"#ff69b4"}, {name: "Kẹo đường", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Ngọt ngào", icon: "🍭"}, {label: "Vui vẻ", icon: "🌸"}]
  },
  {
    id: "guerlain-aqua-allegoria-forte-rosa-palissandro-edp",
    brand: "Guerlain",
    brandSlug: "guerlain",
    name: "Aqua Allegoria Forte Rosa Palissandro EDP",
    gender: "nu",
    desc: "Chất thơ cổ điển của rừng gỗ Palissandro kết duyên cùng hoa hồng chưng cất mạnh mẽ. Bản Forte đẩy cường độ lưu hương lên rất cao, lan tỏa sự sang trọng thanh lịch.",
    top: ["Chanh vàng", "Rau bina tươi"],
    mid: ["Hoa hồng Damask", "Gỗ balsa", "Hoa oải hương"],
    base: ["Gỗ Palissandro", "Đàn hương", "Hoắc hương"],
    accords: [{name: "Hoa hồng", value:100, color:"#ff1493"}, {name: "Gỗ ấm", value:85, color:"#deb887"}],
    vibes: [{label: "Thanh lịch", icon: "👗"}, {label: "Sang trọng", icon: "💎"}]
  },
  {
    id: "guerlain-aqua-allegoria-nerolia-vetiver-edp",
    brand: "Guerlain",
    brandSlug: "guerlain",
    name: "Aqua Allegoria Forte Nerolia Vetiver",
    gender: "unisex",
    desc: "Mặt trời chói chang chiếu xuống cánh đồng cỏ hương bài và cam đắng. Sự kết đôi quá hoàn hảo giữa Neroli xanh dịu nhẹ và cỏ Vetiver rễ mộc, một mùi hương thanh tịnh tuyệt đối.",
    top: ["Cam Bergamot", "Lá sung", "Tinh dầu lá chanh"],
    mid: ["Hoa cam Neroli", "Cỏ Vetiver xanh"],
    base: ["Trái vả", "Đâu Tonka", "Xạ hương thiên nhiên"],
    accords: [{name: "Thảo mộc xanh", value:100, color:"#98fb98"}, {name: "Hoa râm", value:85, color:"#fdf5e6"}],
    vibes: [{label: "Thanh tịnh", icon: "🌿"}, {label: "Mát mẻ", icon: "☀️"}]
  },
  {
    id: "guerlain-aqua-allegoria-nettare-di-sole",
    brand: "Guerlain",
    brandSlug: "guerlain",
    name: "Aqua Allegoria Nettare Di Sole",
    gender: "nu",
    desc: "Nettare di Sole – 'Mật hoa mặt trời'. Những giọt mật ong sóng sánh tắm đẫm búp hoa mộc lan trắng buốt. Rực rỡ, ngọt ngào vừa phải và mang đậm chất tiên nữ dạo chơi vườn hạ.",
    top: ["Cam Calabria", "Hương nước", "Hoa cam non"],
    mid: ["Mật ong hoàng gia", "Hoa mộc lan", "Hoa nhài Sambac"],
    base: ["Xạ hương trắng", "Vanilla đậu"],
    accords: [{name: "Mật hoa chói", value:100, color:"#ffd700"}, {name: "Mật ong nhài", value:85, color:"#ffdab9"}],
    vibes: [{label: "Tráng lệ", icon: "☀️"}, {label: "Gợi cảm", icon: "🍯"}]
  },
  {
    id: "hermes-bleue",
    brand: "Hermès",
    brandSlug: "hermes",
    name: "Eau des Merveilles Bleue",
    gender: "nu",
    desc: "Khoảng trời đầy sao rụng xuống bãi biển thênh thang. Merveilles Bleue mang vị của đá cuội nước mặn, gỗ biển trôi và hoắc hương vô cùng phóng khoáng. Sang trọng nhưng không kiểu cách.",
    top: ["Nước biển xanh", "Hương sương mặn"],
    mid: ["Hoắc hương", "Gỗ bãi biển (driftwood)"],
    base: ["Gỗ mun", "Cây hoắc hương nhạt"],
    accords: [{name: "Biển mặn mát", value:100, color:"#87ceeb"}, {name: "Hoắc hương gắt", value:70, color:"#556b2f"}],
    vibes: [{label: "Biển xanh", icon: "🌊"}, {label: "Tinh tế", icon: "💎"}]
  },
  {
    id: "hermes-twilly-eau-poivree",
    brand: "Hermès",
    brandSlug: "hermes",
    name: "Twilly d'Hermès Eau Poivrée",
    gender: "nu",
    desc: "Phiên bản Twilly trưởng thành và cay nồng táo bạo hơn. Hạt tiêu hồng nhảy nhót trên nền hoa hồng tươi thắm và hoắc hương, tạo ra nét cá tính của một quý cô Paris hiện đại độc lập.",
    top: ["Hạt tiêu hồng"],
    mid: ["Hoa hồng hoang dã"],
    base: ["Hoắc hương khô"],
    accords: [{name: "Hồng nồng", value:100, color:"#db7093"}, {name: "Gia vị", value:85, color:"#c71585"}],
    vibes: [{label: "Cá tính", icon: "🌶️"}, {label: "Cô gái Pháp", icon: "🇫🇷"}]
  },
  {
    id: "jimmy-choo-i-want-choo",
    brand: "Jimmy Choo",
    brandSlug: "jimmy-choo",
    name: "I Want Choo EDP",
    gender: "nu",
    desc: "Lọ mứt đào ngon ngọt ngập ngụa Vani rực rỡ. I Want Choo là sự nữ tính năng động, bung tỏa cực tốt, phù hợp cho mọi cuộc hẹn hò mà cô gái nào cũng nên vứt một lọ vào giỏ xách.",
    top: ["Kem dâu", "Quả đào núi"],
    mid: ["Hoa nhài lửa đỏ", "Hoa huệ đồng thau"],
    base: ["Vani", "Xạ hương kẹo"],
    accords: [{name: "Đào thơm", value:100, color:"#ffa07a"}, {name: "Hoa trắng Vani", value:80, color:"#ffb6c1"}],
    vibes: [{label: "Năng động", icon: "💃"}, {label: "Cuốn hút hẹn hò", icon: "💋"}]
  },
  {
    id: "kilan-good-girl-gone-bad",
    brand: "Kilian",
    brandSlug: "kilian",
    name: "Good Girl Gone Bad",
    gender: "nu",
    desc: "Mùi hương 'gái hư' kinh điển của nhà Kilian. Gái ngoan biến chất chưa bao giờ lôi cuốn đến vậy, với sự hòa trộn của mộc tề trắng tuyết, trầm hương gợi tình và hổ phách nhung nhớ.",
    top: ["Hoa nhài", "Hoa mộc tề", "Hoa hồng tháng Năm"],
    mid: ["Hoa huệ diên vĩ", "Hoa thủy tiên vàng"],
    base: ["Hổ phách", "Cây tuyết tùng", "Xạ hương thuần"],
    accords: [{name: "Hương hoa ngọt", value:100, color:"#fffff0"}, {name: "Đàn hương xa xỉ", value:85, color:"#fa8072"}],
    vibes: [{label: "Sang chảnh", icon: "🥂"}, {label: "Bad Girl", icon: "👠"}]
  },
  {
    id: "kilian-rolling-in-love",
    brand: "Kilian",
    brandSlug: "kilian",
    name: "Rolling In Love",
    gender: "unisex",
    desc: "Chạm sát vào da để cảm nhận nhịp đập của sự si mê. Rolling in Love phủ lấp hạnh nhân bùi bùi và hoa diên vĩ mỏng nhẹ, mang sắc đỏ chói chang của tình yêu say đắm cháy bỏng.",
    top: ["Sữa hạnh nhân", "Hạt dền Ambrette"],
    mid: ["Hoa diên vĩ đỏ", "Hoa lan Nam Phi"],
    base: ["Đậu Tonka", "Vanilla trắng", "Hoa huệ hương", "Xạ hươn"],
    accords: [{name: "Sữa hạnh nhân", value:100, color:"#ffe4c4"}, {name: "Phấn da thịt", value:85, color:"#dcdcdc"}],
    vibes: [{label: "Lãng mạn", icon: "❤️"}, {label: "Da thịt mịn", icon: "🧸"}]
  },
  {
    id: "lorchestre-piano-santal",
    brand: "L'Orchestre",
    brandSlug: "lorchestre",
    name: "Piano Santal",
    gender: "unisex",
    desc: "Trải nghiệm dạo phím đàn piano trong một sân khấu phủ đầy bọt sữa nóng và gỗ hương trắng. Piano Santal mịn màng như nhung, một bản hòa ca thư giãn đến từ nghệ sĩ lừng danh của L'Orchestre.",
    top: ["Cam Bergamot mát", "Hương sữa bột"],
    mid: ["Gỗ đàn hương mượt", "Gỗ tuyết tùng xám"],
    base: ["Ambroxan đục", "Hoa nhài cashmere"],
    accords: [{name: "Gỗ sữa", value:100, color:"#f5deb3"}, {name: "Thư giãn nhung", value:80, color:"#d3d3d3"}],
    vibes: [{label: "Hòa ca", icon: "🎹"}, {label: "Thư thái mộc", icon: "🎼"}]
  },
  {
    id: "lalique-encre-noir-edt",
    brand: "Lalique",
    brandSlug: "lalique",
    name: "Encre Noire EDT",
    gender: "nam",
    desc: "Huyền thoại của lọ mực đen. Cỏ hương bài đen kịt và gỗ trắc hòa vào nhau tựa như một góc rừng tối tăm sau mưa, ma mị, lạnh lùng, phong trần và cực kì nam tính.",
    top: ["Cây bách"],
    mid: ["Cỏ hương bài Bourbon", "Cỏ hương bài Haiti"],
    base: ["Gỗ cashmere đen", "Xạ hương trầm"],
    accords: [{name: "Gỗ đen sẫm", value:100, color:"#2f4f4f"}, {name: "Rừng mưa", value:85, color:"#000000"}],
    vibes: [{label: "Lạnh lùng", icon: "🖤"}, {label: "Ma mị chững", icon: "🎩"}]
  },
  {
    id: "le-labo-santal",
    brand: "Le Labo",
    brandSlug: "le-labo",
    name: "Santal 33",
    gender: "unisex",
    desc: "Tinh thần đường phố NY. Santal 33 quá nổi tiếng với mùi cưa gỗ đàn hương tươi quyện mùi đồ da sắc nét, bám tỏa cực bền như một thói quen gây nghiện mãnh liệt.",
    top: ["Bạch đậu khấu", "Giáp vân", "Violet lá"],
    mid: ["Da thuộc cũ", "Hoa diên vĩ khô"],
    base: ["Gỗ đàn hương mạnh", "Tuyết tùng Virginia", "Hổ phách"],
    accords: [{name: "Đàn hương gỗ mộc", value:100, color:"#8b4513"}, {name: "Mùi gỗ gai", value:85, color:"#d2691e"}],
    vibes: [{label: "Bụi bặm", icon: "🕰️"}, {label: "Chất chơi", icon: "🚬"}]
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
    tags: ["Thơm lâu", "Tôn lên vẻ đẹp", "Đáng mua năm nay"],
    sizes: ["100ml"],
    basePrice: 0,
    shopeeOffers: [],
    isPublished: true
}`;
    replaceProductData(prod.id, struct);
});
