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
  // BATCH 4
  { id: "mcm-zen-elephant", brand: "MCM", brandSlug: "mcm", name: "Eau de Parfum", gender: "unisex",
    desc: "Mùi hương quả mâm xôi tây và hoa nhài trẻ trung, năng động mang hình dáng chiếc balo sành điệu. Thơm nhẹ nhàng, ngọt dịu và rất dễ dùng cho lối sống thành thị.",
    top: ["Quả mâm xôi", "Quả mơ"], mid: ["Hoa nhài", "Hoa mẫu đơn trắng", "Lá Violet"], base: ["Vani", "Gỗ đàn hương", "Rêu hương"],
    accords: [{name: "Trái cây", value:100, color:"#ff69b4"}, {name: "Nhè nhẹ", value:80, color:"#f8f8ff"}],
    vibes: [{label: "Năng động", icon: "🎒"}, {label: "Dễ thương", icon: "🧸"}] },
    
  { id: "maison-francis-kurkdjian-kurky", brand: "Maison Francis Kurkdjian", brandSlug: "maison-francis-kurkdjian", name: "Aqua Universalis", gender: "unisex",
    desc: "Ly nước chanh đá mát lạnh, tinh khiết. Ánh sáng của cam Bergamot, chanh vàng và hoa huệ thung lũng hòa quyện đem lại cảm giác tươm tất, trong lành như sương mai.",
    top: ["Cam Bergamot", "Chanh vàng"], mid: ["Hoa linh lan", "Hoa cam ngọt"], base: ["Xạ hương trắng", "Gỗ sáng"],
    accords: [{name: "Cam chanh", value:100, color:"#ffff00"}, {name: "Hoa trắng", value:85, color:"#fdf5e6"}],
    vibes: [{label: "Trong trẻo", icon: "💧"}, {label: "Sạch sẽ", icon: "✨"}] },

  { id: "mancera-sicily", brand: "Mancera", brandSlug: "mancera", name: "Sicily EDP", gender: "unisex",
    desc: "Giỏ trái cây mùa hè rực rỡ dưới nắng vàng Địa Trung Hải. Sicily kết hợp mổ bưởi, cam quýt, dứa, táo, đào một cách cuồng nhiệt và tràn trề nhựa sống.",
    top: ["Cam Bergamot", "Quả bưởi", "Quả quýt", "Dứa", "Táo"], mid: ["Hoa nhài", "Ngọc lan tây", "Hoa dâm bụt"], base: ["Xạ hương trắng", "Gỗ tuyết tùng"],
    accords: [{name: "Trái cây mùa hè", value:100, color:"#ff8c00"}, {name: "Ngọt cam", value:85, color:"#ffa500"}],
    vibes: [{label: "Rực rỡ", icon: "🌞"}, {label: "Trái cây", icon: "🍍"}] },

  { id: "mancera-cedrat-boise", brand: "Mancera", brandSlug: "mancera", name: "Cedrat Boise", gender: "nam",
    desc: "Một trong những trụ cột làm nên tên tuổi Mancera. Cedrat Boise là sự tổng hòa của cam chanh rực rỡ, gỗ tuyết tùng ấm áp và da thuộc cá tính. Rất bám và bay bổng.",
    top: ["Chanh vàng", "Nho đen", "Cam Bergamot"], mid: ["Hương trái cây", "Lá hoắc hương", "Nhài nước"], base: ["Gỗ tuyết tùng", "Da thuộc", "Rêu sồi"],
    accords: [{name: "Gỗ cam chanh", value:100, color:"#ffd700"}, {name: "Khói nhẹ", value:80, color:"#a9a9a9"}],
    vibes: [{label: "Thành thị", icon: "🏙️"}, {label: "Nam tính", icon: "😎"}] },

  { id: "mfk-baccarat-54-edp", brand: "Maison Francis Kurkdjian", brandSlug: "maison-francis-kurkdjian", name: "Baccarat Rouge 540 EDP", gender: "unisex",
    desc: "Huyền thoại đương đại khó có thể bị soán ngôi. Baccarat Rouge 540 mang thứ đường nung chảy kỳ diệu pha với nhựa linh sam và nhụy hoa nghệ tây đẳng cấp, tạo ra đám mây hương tỏa cực mạnh.",
    top: ["Nhụy hoa nghệ tây", "Hoa nhài"], mid: ["Gỗ hổ phách", "Long diên hương"], base: ["Nhựa linh sam", "Gỗ tuyết tùng"],
    accords: [{name: "Đường nung", value:100, color:"#ff0000"}, {name: "Nhựa đỏ", value:85, color:"#8b0000"}],
    vibes: [{label: "Huyền thoại", icon: "👑"}, {label: "Sang trọng", icon: "💎"}] },

  { id: "mfk-a-la-rose", brand: "Maison Francis Kurkdjian", brandSlug: "maison-francis-kurkdjian", name: "À la rose", gender: "nu",
    desc: "Kính ngữ dành tặng những cánh hồng kiêu sa. À la rose chứa đựng tinh hoa của hơn 400 đóa hồng tươi nhất nước Pháp, mang tới một cảm giác vô cùng thanh tao, thơ mộng.",
    top: ["Cam ngọt", "Chanh vàng"], mid: ["Hồng Damascus", "Hồng Centifolia", "Hoa Violet"], base: ["Gỗ tuyết tùng", "Xạ hương"],
    accords: [{name: "Hoa hồng Pháp", value:100, color:"#ff69b4"}, {name: "Phấn hồng", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Nữ tính", icon: "👗"}, {label: "Dịu dàng", icon: "🌸"}] },

  { id: "miss-dior-essence-new-2025", brand: "Dior", brandSlug: "dior", name: "Miss Dior Essence Parfum", gender: "nu",
    desc: "Bản nâng cấp 2025 với lượng tinh chất cô đặc nhất. Miss Dior Essence nhấn mạnh vào những nốt hoa quý ngập sương mai và gỗ ấm nồng nàng, lưu hương dai dẳng hoàn hảo.",
    top: ["Quả mận lấp lánh", "Ớt hồng"], mid: ["Hồng Grasse", "Hoa lài hoang"], base: ["Vani nguyên chất", "Gỗ đàn hương"],
    accords: [{name: "Hoa thơm chát", value:100, color:"#ff1493"}, {name: "Gỗ ngọt", value:80, color:"#d2691e"}],
    vibes: [{label: "Đẳng cấp", icon: "🌟"}, {label: "Tinh hoa", icon: "💎"}] },

  { id: "miss-dior-parfum-new-2024", brand: "Dior", brandSlug: "dior", name: "Miss Dior Parfum 2024", gender: "nu",
    desc: "Khoảnh khắc hồi sinh của dòng họ Miss Dior. Chuyên gia Francis Kurkdjian tạo ra đóa hoa ngọt ngào đầy tính hiện đại, chìm trong vani và sự rực rỡ tươi sáng của trái cây.",
    top: ["Cam quýt Ý", "Đào ngâm"], mid: ["Dâu rừng", "Hồng quyến rũ"], base: ["Gỗ hổ phách", "Hoắc hương"],
    accords: [{name: "Trái cây hoa", value:100, color:"#ffc0cb"}, {name: "Hiện đại", value:85, color:"#fff0f5"}],
    vibes: [{label: "Hiện đại", icon: "💅"}, {label: "Trẻ trung", icon: "🐣"}] },

  { id: "moschino-toy-boy", brand: "Moschino", brandSlug: "moschino", name: "Toy Boy", gender: "nam",
    desc: "Chú gấu đen ngỗ nghịch mang bên trong bó hoa hồng gai góc cay nồng. Nhựa cây và tiêu đen bám phủ lên nét quyến rũ chết người, Toy Boy là kẻ chơi bời biết cách ăn mặc.",
    top: ["Tiêu hồng", "Lê", "Mùi nhục đậu khấu", "Elemi"], mid: ["Hoa hồng đen", "Mộc lan", "Đinh hương"], base: ["Hoắc hương", "Gia vị", "Xạ hương"],
    accords: [{name: "Hồng cay", value:100, color:"#dc143c"}, {name: "Gia vị nồng", value:85, color:"#000000"}],
    vibes: [{label: "Chơi bời", icon: "🎩"}, {label: "Hấp dẫn", icon: "🫦"}] },

  { id: "musk-kashmir", brand: "Attar Collection", brandSlug: "attar-collection", name: "Musk Kashmir", gender: "nu",
    desc: "Chiếc chăn len cashmere mịn màng nhất thế giới Ả Rập. Giọt xạ hương trắng bồng bềnh cuộn lấy tiêu trắng và hổ phách, mang đến thứ cảm xúc da thịt cực kì mượt mà.",
    top: ["Tiêu trắng", "Clove"], mid: ["Xạ hương trắng nguyên bản", "Hoa trắng"], base: ["Gỗ hổ phách", "Sữa nhạt"],
    accords: [{name: "Xạ da thịt", value:100, color:"#fdf5e6"}, {name: "Bông xốp", value:85, color:"#fffafa"}],
    vibes: [{label: "Mềm như mây", icon: "☁️"}, {label: "E ấp", icon: "🤍"}] },

  { id: "my-way-edp", brand: "Giorgio Armani", brandSlug: "giorgio-armani", name: "My Way EDP", gender: "nu",
    desc: "Hành trình mở mang thế giới của cô gái tự do. My Way hội tụ hoa cam trắng muốt và hoa huệ Ấn Độ, mang vị ngọt chua vui vẻ, tạo sự hứng khởi suốt ngày dài.",
    top: ["Hoa cam", "Cam Bergamot"], mid: ["Hoa huệ Tuberose", "Hoa nhài Ấn"], base: ["Vani Madagascar", "Xạ hương trắng", "Gỗ tuyết tùng"],
    accords: [{name: "Hoa nhài ngọt", value:100, color:"#ff69b4"}, {name: "Nhóm cam chanh", value:80, color:"#ffe4b5"}],
    vibes: [{label: "Tự do", icon: "🌍"}, {label: "Vui vẻ", icon: "😄"}] },

  { id: "nar-cristal-edp", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "Cristal EDP", gender: "nu",
    desc: "Lăng kính pha lê trong suốt, sạch sẽ và nữ tính đến tận cùng. Xạ hương được làm nhẹ tâng, quyện cùng đóa hoa trắng lấp lánh như giọt sương buổi bình minh.",
    top: ["Hoa lan Nam Phi", "Cam Bergamot", "Hoa cam"], mid: ["Hoa hồng", "Xạ hương nhạt", "Hoa trắng"], base: ["Gỗ tuyết tùng", "Cashmeran"],
    accords: [{name: "Sạch sẽ lấp lánh", value:100, color:"#e0ffff"}, {name: "Xạ lỏng", value:85, color:"#f0f8ff"}],
    vibes: [{label: "Tinh khiết", icon: "💎"}, {label: "Mỏng manh", icon: "🧊"}] },

  { id: "nar-poudree", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "Poudrée", gender: "nu",
    desc: "Đám mây phấn hồng mềm mại, quyến rũ chết người. Narciso Poudrée che phủ làn da bằng lớp xạ hương phấn mịn hòa với cỏ vetiver, cực kì gợi tình và đẫy đà.",
    top: ["Hoa nhài đỏ", "Hoa hồng Bulgary", "Hoa cam"], mid: ["Xạ hương phấn"], base: ["Coumarin", "Tuyết tùng đỏ", "Hoắc hương"],
    accords: [{name: "Phấn mỹ phẩm", value:100, color:"#ffe4e1"}, {name: "Xạ hương ấm", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Phấn hồng", icon: "🪞"}, {label: "Gợi cảm", icon: "💋"}] },

  { id: "narciso-ambree", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "Ambrée", gender: "nu",
    desc: "Ánh nắng mật ong trên da thịt trần. Ambrée là ly cocktail hoa đại mượt mà, điểm thêm hổ phách và vani, cực kì nịnh mũi và tỏa nắng trong những ngày dạo biển.",
    top: ["Hoa đại Frangipani", "Hoa ngọc lan tây"], mid: ["Xạ hương mặt trời", "Hổ phách"], base: ["Vani", "Gỗ tuyết tùng"],
    accords: [{name: "Hoa vàng nắng", value:100, color:"#ffd700"}, {name: "Hổ phách ấm", value:85, color:"#ffa500"}],
    vibes: [{label: "Tỏa nắng", icon: "☀️"}, {label: "Mật ngọt", icon: "🍯"}] },

  { id: "narciso-for-her-edp-intense-new-2025", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "For Her EDP Intense", gender: "nu",
    desc: "Khẳng định lại uy quyền nữ giới trong năm 2025 bằng hàm lượng xạ hương cực khủng. Lẳng lơ, cuốn hút và đánh gục đối phương ngay từ lần chạm đầu tiên.",
    top: ["Hoa mộc tề", "Hoa hồng đậm"], mid: ["Xạ hương Ai Cập nguyên chất"], base: ["Gỗ hổ phách", "Hoắc hương đen"],
    accords: [{name: "Xạ hương sâu", value:100, color:"#c71585"}, {name: "Ám muội", value:80, color:"#800080"}],
    vibes: [{label: "Thống trị", icon: "🔥"}, {label: "Thu hút", icon: "🧲"}] },

  // BATCH 5
  { id: "narciso-musc-nude", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "Musc Nude", gender: "nu",
    desc: "Trần trụi, tinh tuyền và mộc mạc nhất. Musc Nude mang lại cảm giác mơn trớn, da kề da vô cùng chân thật và ngây thơ.",
    top: ["Hoa nhài kem", "Cam đào trắng"], mid: ["Xạ hương thực vật", "Hoa hồng Đan Mạch"], base: ["Vani", "Gỗ trắng"],
    accords: [{name: "Dịu dàng", value:100, color:"#ffe4c4"}, {name: "Tinh khôi", value:85, color:"#ffffff"}],
    vibes: [{label: "Nhẹ nhàng", icon: "🕊️"}, {label: "Chân thành", icon: "🤍"}] },

  { id: "narciso-rodriguez-all-of-me-floral", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "All of Me Floral", gender: "nu",
    desc: "Một bản giao hưởng hoa hiện đại từ Narciso thay vì xạ hương thuần túy. Hồng Centifolia kiêu chảnh, trộn lẫn lá Geranium tạo sự năng động chưa từng thấy.",
    top: ["Lá phong lữ", "Quả quýt"], mid: ["Hoa hồng Centifolia", "Hoa xương rồng"], base: ["Xạ hương trắng", "Gỗ đàn hương"],
    accords: [{name: "Hoa hồng xanh", value:100, color:"#ff69b4"}, {name: "Hiện đại rực", value:85, color:"#ffb6c1"}],
    vibes: [{label: "Năng động", icon: "🏃‍♀️"}, {label: "Hoa xuân", icon: "🌸"}] },

  { id: "narciso-rodriguez-for-her-eau-de-parfum", brand: "Narciso Rodriguez", brandSlug: "narciso-rodriguez", name: "For Her EDP", gender: "nu",
    desc: "Chai nước hoa quốc dân màu hồng nhạt. Sự hoàn hảo tuyệt đối của xạ hương và hoa hồng, đem lại khí chất nữ tính, chững chạc và cực kì có uy tín trong giới đi làm hẹn hò.",
    top: ["Hoa hồng nương", "Quả đào"], mid: ["Xạ hương Ai Cập", "Nhựa thông"], base: ["Hoắc hương", "Gỗ đàn hương"],
    accords: [{name: "Phấn hoa hồng", value:100, color:"#ffb6c1"}, {name: "Xạ thanh cao", value:85, color:"#fff0f5"}],
    vibes: [{label: "Quốc dân", icon: "🥇"}, {label: "Uy tín", icon: "💼"}] },

  { id: "odyssey-limoni", brand: "Armaf", brandSlug: "armaf", name: "Odyssey Limoni", gender: "nam",
    desc: "Bản sao tươi mát của những ly chanh Ý hảo hạng. Vị chua sảng khoái và cực kì nổ bọt, độ bám tỏa xuất sắc đến từ nhà Armaf cho mùa hè rực lửa.",
    top: ["Chanh Ý", "Cam Bergamot", "Gừng"], mid: ["Nhài trắng", "Hoa oải hương"], base: ["Xạ hương xạ", "Cỏ Vetiver"],
    accords: [{name: "Chanh sảng khoái", value:100, color:"#ffff00"}, {name: "Sáng chói", value:80, color:"#fdf5e6"}],
    vibes: [{label: "Cực mát", icon: "🧊"}, {label: "Thể thao", icon: "🏄‍♂️"}] },

  { id: "odyssey-mandarin-sky", brand: "Armaf", brandSlug: "armaf", name: "Odyssey Mandarin Sky", gender: "nam",
    desc: "Được mệnh danh là JPG Scandal nam phiên bản clone. Vị cam caramel cháy đậm đặc, ngọt ngào, siêu bám tỏa gây sự chú ý mạnh mẽ và ăn chơi.",
    top: ["Cam Mandarin", "Cây xô thơm"], mid: ["Caramel cháy", "Đậu Tonka"], base: ["Cỏ Vetiver", "Hoắc hương đen"],
    accords: [{name: "Cam ngọt lịm", value:100, color:"#ff8c00"}, {name: "Đường khét", value:85, color:"#8b4513"}],
    vibes: [{label: "Ăn chơi", icon: "🍾"}, {label: "Lưu hương khủng", icon: "💣"}] },

  { id: "oud-forever", brand: "Lattafa", brandSlug: "lattafa", name: "Oud Forever", gender: "nam",
    desc: "Tinh thần Ả Rập bứt phá. Mùi trầm hương quyện khói và gia vị phương đông, mang uy quyền lãnh chúa, cay nồng và cực kì bền bỉ trước mọi điều kiện thời tiết.",
    top: ["Nghệ tây", "Nhục đậu khấu"], mid: ["Trầm hương (Oud)", "Hoa hoắc hương"], base: ["Da thuộc", "Xạ hương đen", "Hoắc hương"],
    accords: [{name: "Trầm khói", value:100, color:"#2f4f4f"}, {name: "Lãnh chúa", value:85, color:"#000000"}],
    vibes: [{label: "Uy quyền", icon: "🦅"}, {label: "Cổ điển Ả Rập", icon: "🕌"}] },

  { id: "paco-pure-xs", brand: "Paco Rabanne", brandSlug: "paco-rabanne", name: "Pure XS", gender: "nam",
    desc: "Sức hút xác thịt bùng cháy ngay phút đầu tiên. Pure XS là sự kết hợp của nhựa thơm Myrrh và vani ngọt, khỏa lấp bởi vẻ nam tính phóng túng gợi dục.",
    top: ["Gừng trắng", "Cây bách xù"], mid: ["Vani ngọt", "Quế cờ", "Da lộn"], base: ["Nhựa Myrrh", "Đường tuyết", "Tuyết tùng"],
    accords: [{name: "Cay ngọt", value:100, color:"#dc143c"}, {name: "Da thịt nồng", value:85, color:"#a52a2a"}],
    vibes: [{label: "Phóng túng", icon: "🔥"}, {label: "Trap boy", icon: "😎"}] },

  { id: "parfums-de-marly-palatine", brand: "Parfums de Marly", brandSlug: "parfums-de-marly", name: "Palatine", gender: "nu",
    desc: "Sự quý tộc lấp lánh của hoàng gia Pháp. Hương mật đào ngọt lịm chìm trong hoa hồng cao ngạo, tạo sự sang chảnh thượng lưu cho những quý cô quyền lực.",
    top: ["Cam Bergamot", "Lá ngò", "Mật đào"], mid: ["Hồng thổ", "Hoa ngọc lan"], base: ["Vani Bourbon", "Xạ hương", "Đàn hương trắng"],
    accords: [{name: "Sang chảnh", value:100, color:"#ffd700"}, {name: "Đào nhung", value:85, color:"#ffdab9"}],
    vibes: [{label: "Quý tộc", icon: "👑"}, {label: "Kiêu ngạo", icon: "👸"}] },

  { id: "parfums-de-marly-valaya", brand: "Parfums de Marly", brandSlug: "parfums-de-marly", name: "Valaya", gender: "nu",
    desc: "Đóa hoa trắng mướt đắt giá, sạch sẽ và thanh tao tuyệt đối. Valaya là hơi thở của sự thanh tao, ngửi như chiếc váy voan nhẹ, mỏng nhưng lưu hương mạnh mẽ dai dẳng.",
    top: ["Mandarin", "Đào trắng"], mid: ["Hoa cam", "Hoa mộc lan", "Xạ hương gỗ"], base: ["Ambroxan", "Gỗ xạ hương"],
    accords: [{name: "Hoa trắng tinh khôi", value:100, color:"#ffffff"}, {name: "Mỏng nhẹ", value:85, color:"#f0f8ff"}],
    vibes: [{label: "Tinh hoa", icon: "🕊️"}, {label: "Bám lâu", icon: "🛡️"}] },

  { id: "parfums-de-marly-valaya-exclusif", brand: "Parfums de Marly", brandSlug: "parfums-de-marly", name: "Valaya Exclusif", gender: "nu",
    desc: "Tinh chất độc quyền cô đặc hơn. Kéo dài sự lộng lẫy và vương giả, các note xạ hương và ambroxan được làm đậm đặc, mượt mà đánh gục trái tim lạnh lùng nhất.",
    top: ["Cam tươi", "Lựu mọng"], mid: ["Cánh hoa hồng Pháp", "Hoa huệ trắng"], base: ["Hổ phách đậm", "Gỗ trắng", "Ambroxan lạch cạch"],
    accords: [{name: "Hoa xa xỉ", value:100, color:"#ff69b4"}, {name: "Giàu có", value:85, color:"#ffd700"}],
    vibes: [{label: "Độc bản", icon: "🏆"}, {label: "Hoàng kim", icon: "💳"}] },

  { id: "rj-burlington-1819", brand: "Roja Dove", brandSlug: "roja", name: "Burlington 1819", gender: "남", 
    desc: "Đóa cam chanh thượng lưu nhất hành tinh từ tay phù thủy Roja Dove. Sự chuyển mình xuất sắc từ bưởi cay xé sang gỗ rêu phong ấm nhẹ, toát lên sự đẳng cấp giàu sang.",
    top: ["Bưởi chùm", "Chanh đào", "Lá bạc hà"], mid: ["Gừng cay", "Tiêu trắng"], base: ["Long diên hương", "Rêu sồi tươi", "Xạ hương"],
    accords: [{name: "Citrus giàu có", value:100, color:"#adff2f"}, {name: "Mượt mà ấm", value:85, color:"#7fff00"}],
    vibes: [{label: "Triệu phú", icon: "💰"}, {label: "Chuyên nghiệp", icon: "👔"}] },

  { id: "replica-by-the-fireplace", brand: "Maison Margiela Replica", brandSlug: "maison-margiela", name: "By The Fireplace", gender: "unisex",
    desc: "Đêm đông giá rét ngồi cạnh chiếc lò sưởi bập bùng, cắn một viên hạt dẻ nướng ngào đường. Mùi hương sưởi ấm tâm hồn, khói ngọt cực kỳ lãng mạn lôi cuốn.",
    top: ["Tiêu hồng", "Hoa cam", "Đinh hương"], mid: ["Hạt dẻ lùi tro", "Gỗ Guaiac đỏ", "Quả bách xù"], base: ["Vani nướng", "Nhựa Peru", "Cashmeran"],
    accords: [{name: "Gỗ nướng khói", value:100, color:"#d2691e"}, {name: "Sưởi ấm", value:85, color:"#8b4513"}],
    vibes: [{label: "Lò sưởi", icon: "🔥"}, {label: "Giáng sinh", icon: "🎄"}] },

  { id: "replica-lazy-sunday-morning", brand: "Maison Margiela Replica", brandSlug: "maison-margiela", name: "Lazy Sunday Morning", gender: "nu",
    desc: "Buổi sáng chủ nhật cuộn tròn trong chiếc chăn bông trắng muốt vừa giặt xong thơm phức. Hương hoa linh lan và An-đê-hít xé dọc sảng khoái và thư thái vô bờ.",
    top: ["Hương An-đê-hít", "Trái lê non", "Linh lan"], mid: ["Hoa Diên Diên", "Hoa hồng nụ", "Hoa cam non"], base: ["Xạ hương trắng bong", "Hoắc hương trắng", "Cây vông vang"],
    accords: [{name: "Chăn mới giặt", value:100, color:"#f8f8ff"}, {name: "Ngủ nướng", value:85, color:"#ffffff"}],
    vibes: [{label: "Trong vắt", icon: "☁️"}, {label: "Sáng cuối tuần", icon: "☕"}] },

  { id: "the-noir", brand: "Le Labo", brandSlug: "le-labo", name: "Thé Noir 29", gender: "unisex",
    desc: "Tách trà đen ngâm quả vả rực rỡ và đượm vị mộc mạc. Thé Noir 29 mang nét trầm mặc, thanh lịch có chiều sâu, gây nghiện ngấm ngầm càng ngửi càng ghiền.",
    top: ["Quả sung ngâm", "Lá trà xanh", "Cam Bergamot"], mid: ["Gỗ tuyết tùng xám", "Rễ cỏ hương bài", "Hoa hồng trà"], base: ["Cỏ hoắc hương", "Xạ hương tuyết", "Phấn hoa"],
    accords: [{name: "Trà mộc", value:100, color:"#8fbc8f"}, {name: "Cổ điển sâu xa", value:85, color:"#556b2f"}],
    vibes: [{label: "Trầm tĩnh", icon: "🍵"}, {label: "Nội tâm", icon: "🍂"}] },

  { id: "thomas-kosmala-no", brand: "Thomas Kosmala", brandSlug: "thomas-kosmala", name: "No 4 Apres l'Amour", gender: "unisex",
    desc: "Cỗ máy tỏa hương mạnh bậc nhất hiện tại. No4 mang âm hưởng của BR540 nhưng bớt ngọt, nhấn mạnh vỏ chanh và Ambroxan để càn quét mọi không gian xung quanh.",
    top: ["Vỏ chanh đắng", "Vỏ đào nhám"], mid: ["Gia vị cay mát"], base: ["Ambroxan siêu bám", "Gỗ trắng", "Xạ hương dai"],
    accords: [{name: "Quái vật tỏa", value:100, color:"#f0e68c"}, {name: "Phòng gym", value:85, color:"#fffacd"}],
    vibes: [{label: "Canh gác", icon: "🚨"}, {label: "Quái vật", icon: "🦖"}] },

  // BATCH 6
  { id: "tom-ford-black-orchid", brand: "Tom Ford", brandSlug: "tom-ford", name: "Black Orchid", gender: "unisex",
    desc: "Quyền lực, tăm tối, gợi dục bậc nhất mọi thời đại. Phong lan đen và nấm truffle của Tom Ford nhấn chiềm khứu giác vào sự hoang dại xa xỉ không có điểm dừng.",
    top: ["Nấm Truffle đen", "Ylang-Ylang lẳng lơ", "Cam Bergamot"], mid: ["Phong lan đen", "Trái cây đỏ đen", "Hoa sen gai"], base: ["Cacao đậm", "Hoắc hương", "Hương nhang trầm", "Sôcôla Mexico"],
    accords: [{name: "Bóng tối xa hoa", value:100, color:"#4a0404"}, {name: "Sexy gai góc", value:85, color:"#000000"}],
    vibes: [{label: "Sex-appeal", icon: "🫦"}, {label: "Áp đảo", icon: "👑"}] },

  { id: "versace-bright-crystal", brand: "Versace", brandSlug: "versace", name: "Bright Crystal", gender: "nu",
    desc: "Viên pha lê hồng trong vắt huyền thoại. Lựa chọn bất bại cho sự tươi mát, nữ tính, an toàn ngửi là ưng cái mũi với quả Yuzu thanh chua và mẫu đơn đỏ thắm.",
    top: ["Quả Yuzu chát", "Quả lựu đỏ", "Hương băng mát"], mid: ["Hoa mẫu đơn", "Hoa sen trắng", "Hoa mộc lan"], base: ["Xạ hương đào", "Cây gụ", "Hổ phách"],
    accords: [{name: "Hoa mát", value:100, color:"#ffb6c1"}, {name: "Quyến rũ trẻ trung", value:85, color:"#ff69b4"}],
    vibes: [{label: "Quốc dân", icon: "🥇"}, {label: "Bánh bèo", icon: "🎀"}] },

  { id: "versace-eros-energy-edp", brand: "Versace", brandSlug: "versace", name: "Eros Energy", gender: "nam",
    desc: "Khoảng nạp điện năng lượng vô tận của mùa hè. Chanh vàng Ý xé toạc định kiến ngọt khé của phiên bản cũ, đây là Eros phiên bản rực sáng chói chang cho dân vận động.",
    top: ["Chanh Calabrian", "Cam máu đỏ", "Bưởi", "Cam Bergamot"], mid: ["Hồng tiêu xé", "Nhựa cây trắng", "Hổ phách"], base: ["Cây sồi đen", "Xạ hương xạ", "Cỏ hoắc hương"],
    accords: [{name: "Chanh rực", value:100, color:"#ffff00"}, {name: "Thể thao", value:85, color:"#ffa500"}],
    vibes: [{label: "Năng lượng", icon: "⚡"}, {label: "Gym", icon: "🏋️‍♂️"}] },

  { id: "versace-eros-flame", brand: "Versace", brandSlug: "versace", name: "Eros Flame", gender: "nam",
    desc: "Ngọn lửa nồng thắm đam mê. Thiết kế đỏ rực cùng với nốt quýt nheo và tiêu đen tạo sinh khí tươi mới hơn rất nhiều và cực kì lôi kéo sự chú ý vào mùa thu đông.",
    top: ["Quả quýt cam", "Chanh vàng", "Tiêu Madagascar"], mid: ["Hồng tiêu", "Cây phong lữ", "Hoa hồng gai"], base: ["Vani ngọt", "Đậu Tonka", "Gỗ đàn hương", "Gỗ tuyết tùng"],
    accords: [{name: "Ngọt cay đỏ", value:100, color:"#ff0000"}, {name: "Lôi kéo", value:85, color:"#dc143c"}],
    vibes: [{label: "Lửa tình", icon: "❤️‍🔥"}, {label: "Nam thần", icon: "🦸‍♂️"}] },

  { id: "versce-pour-homme", brand: "Versace", brandSlug: "versace", name: "Pour Homme", gender: "nam",
    desc: "Chai nước hoa mùa hè bất tử cho nam giới. Versace Pour Homme tinh tươm, sạch sẽ, thơm mùi cơ thể vừa tắm gội xong pha với múi chanh xanh căng bóng.",
    top: ["Chanh vàng tươi", "Hoa tuyết điểm", "Cam Bergamot"], mid: ["Hoa dạ lan", "Gỗ tùng tuyết", "Xô thơm"], base: ["Xạ hương trắng", "Đậu Tonka", "Hổ phách"],
    accords: [{name: "Tinh tươm", value:100, color:"#87ceeb"}, {name: "Đi làm", value:85, color:"#e0ffff"}],
    vibes: [{label: "Sạch sẽ nam tính", icon: "🚿"}, {label: "Cơ động", icon: "🏃‍♂️"}] },

  { id: "xerjoff-casamorati-mefisto", brand: "Xerjoff", brandSlug: "xerjoff", name: "Casamorati Mefisto", gender: "nam",
    desc: "Hào quang vương giả của giới thượng lưu Ý. Mefisto giống hệt Silver Mountain Water nhưng được nâng lên một tầm cao xa xỉ hoàn toàn mới, sắc sảo trơn tru và nịnh mũi xuất thần.",
    top: ["Bưởi Ý", "Chanh Amalfi", "Cam Calabria"], mid: ["Hoa Lavender thảo mộc", "Hoa hồng sắc", "Iris phủ phấn"], base: ["Gỗ đàn hương", "Cỏ tuyết", "Hổ phách"],
    accords: [{name: "Chanh bạc", value:100, color:"#e6e6fa"}, {name: "Phấn thảo", value:85, color:"#b0c4de"}],
    vibes: [{label: "Hoàng gia", icon: "🏰"}, {label: "Xuất chúng", icon: "🪞"}] },

  { id: "xerjoff-torino", brand: "Xerjoff", brandSlug: "xerjoff", name: "Torino 21", gender: "nam",
    desc: "Cú giao bóng Tennis mát mẻ xanh rờn của Torino 21. Lá bạc hà và húng quế mát rười rượi, lưu tâm bám dai nhất trong những dòng nước hoa trà xanh mùa hè cao cấp.",
    top: ["Bạc hà lanh", "Húng quế ngát", "Chanh thơm"], mid: ["Lá cassis", "Hoa nhài trắng", "Hoa oải hương"], base: ["Xạ hương thực vật sâu"],
    accords: [{name: "Thảo dược tuyết", value:100, color:"#00fa9a"}, {name: "Relax max", value:85, color:"#2e8b57"}],
    vibes: [{label: "Sân Tennis", icon: "🎾"}, {label: "Giải nhiệt", icon: "🧊"}] },

  { id: "ysl-black-opium-glitter-edp", brand: "YSL", brandSlug: "yves-saint-laurent", name: "Black Opium Glitter", gender: "nu",
    desc: "Đập tan định kiến với viên kim cương đen kim tuyến lộng lẫy 2025. Vẫn là DNA ly cà phê Vani siêu gây nghiện nhưng bừng lên sự hoa lệ của một buổi party thâu đêm.",
    top: ["Lá xô chua", "Hạt dẻ xé", "Pink Pepper"], mid: ["Hoa cam lấp lánh", "Hoa lài mờ", "Cà phê ủ"], base: ["Vani ngậy đen", "Gỗ Cashmere tuyết", "Xạ hương"],
    accords: [{name: "Cà phê ngọt lịm", value:100, color:"#000000"}, {name: "Xập xình", value:85, color:"#696969"}],
    vibes: [{label: "Nữ hoàng tiệc", icon: "🎇"}, {label: "Hút hồn", icon: "💃"}] },

  { id: "ysl-libre-intense-edp", brand: "YSL", brandSlug: "yves-saint-laurent", name: "Libre Intense EDP", gender: "nu",
    desc: "Sự tuyên ngôn giải phóng phụ nữ của YSL. Libre Intense cực kỳ ngạo nghễ, độc lập với hoa cam đậm đặc hơn, sắc ấm của Vanila và rễ cỏ hoắc hương.",
    top: ["Hoa oải hương mềm", "Dầu quýt", "Cam Bergamot"], mid: ["Hoa cam Ma Rốc", "Hoa nhài rực", "Phong lan dại"], base: ["Vani đen nhạy", "Long diên hương nguyên thủy", "Đậu Tonka"],
    accords: [{name: "Oải hương khói", value:100, color:"#ff8c00"}, {name: "Quyền lực đàn bà", value:85, color:"#ffa500"}],
    vibes: [{label: "Boss Queen", icon: "👑"}, {label: "Chững chạc", icon: "🍷"}] },

  { id: "ysl-y-eau-de-parfum", brand: "YSL", brandSlug: "yves-saint-laurent", name: "Y EDP", gender: "nam",
    desc: "Nam vương đắt khách số một hiện tại. Mùi hương sắc nhọn của táo xanh và cây xô thơm mượt mà bám da suốt 12 tiếng liên tục, cực kì đa dụng và nịnh mũi.",
    top: ["Táo xanh chín", "Lá gừng cay", "Cam Bergamot tươi"], mid: ["Vỏ thảo mộc non", "Hoa phong lữ", "Cây bách xù"], base: ["Long diên hương xốp", "Nam hương tuyết tùng", "Trầm rêu"],
    accords: [{name: "Ngọt sắc nịnh mũi", value:100, color:"#00ced1"}, {name: "Toàn diện", value:85, color:"#4682b4"}],
    vibes: [{label: "Boy phố", icon: "🎧"}, {label: "Trẻ trung nịnh túi", icon: "🤟"}] },

  { id: "rmni-prive-the-yulong", brand: "Armani Prive", brandSlug: "giorgio-armani", name: "The Yulong", gender: "unisex",
    desc: "Chén trà thượng hạng ngâm trên núi tuyết sương khói của Armani Prive. Sự cân bằng tuyệt sắc giữa trà đen mộc mạc và trà xanh thanh mảnh, tinh tế tột bậc.",
    top: ["Cam Mandarin nhỏ", "Thảo quả non"], mid: ["Hương trà xanh xao", "Hương trà đen khói", "Nhài nước"], base: ["Hoắc hương rễ", "Cỏ tuyết tùng", "Vòi lai"],
    accords: [{name: "Trà non tĩnh", value:100, color:"#556b2f"}, {name: "Sương mù", value:85, color:"#e0ffff"}],
    vibes: [{label: "Chill núi", icon: "🏔️"}, {label: "Phật giáo điềm đạm", icon: "🏯"}] },

  { id: "ventus-for-her", brand: "Creed", brandSlug: "creed", name: "Aventus For Her", gender: "nu",
    desc: "Bản đối trọng nữ tính quyền lực của ông vua Aventus. Quả đào mọng sương, xạ hương êm dịu hòa cùng hạt tiêu hồng cay nồng tạo ra phong thái độc tôn của bà vương.",
    top: ["Quả lê xốp", "Quả chanh đào", "Lựu nứt", "Cây hoắc hương nhạt"], mid: ["Hồng Thổ Nhĩ Kỳ", "Trầm mộc", "Quả mận gai"], base: ["Xạ hương đen", "Hoa sơn mộc", "Ilang"],
    accords: [{name: "Uy lực nữ", value:100, color:"#ffd700"}, {name: "Ngọt đắng độc lập", value:85, color:"#fa8072"}],
    vibes: [{label: "Nữ vương", icon: "👸"}, {label: "Luxury", icon: "🥂"}] }
];

batchData.forEach(prod => {
    let rawGender = prod.gender === "nam" ? "nam" : (prod.gender === "nu" ? "nu" : "unisex");
    const struct = `{
    id: "${prod.id}",
    brand: "${prod.brand}",
    brandSlug: "${prod.brandSlug}",
    name: "${prod.name}",
    gender: "${rawGender}",
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
