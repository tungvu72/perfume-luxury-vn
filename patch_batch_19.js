const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "jazz-club": {
    subName: "Replica EDT", perfumer: "Alienor Massenet", year: 2013, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa nam Maison Margiela Replica Jazz Club khói xì gà",
    metaDescription: "Đánh giá Replica Jazz Club: Câu lạc bộ đêm ngập ngụa mùi Rượu Rum say xỉn, xì gà Cuba (Tobacco) khét lẹt và Vani béo ngọt.",
    description: "Tái hiện một câu lạc bộ Jazz ngầm ở Brooklyn năm 2013. Cú xịt đầu tạt thẳng vào khứu giác một ly Rượu Rum sóng sánh, cay nồng cồn cào. Sau đó, nó lắng xuống thành vệt khói Thuốc lá (Tobacco) khét lẹt, ngai ngái xen lẫn vị ngọt béo rười rượi của Vani (Vanilla). Một gã trai hư mặc áo khoác da, phớt đời, nhả khói xì gà điệu nghệ trong điệu kèn saxophone đê mê. Mùi hương cực kì quyến rũ, cấm kỵ và ấm áp tột độ cho những đêm mùa đông hẹn hò.",
    vibes: [{label: "Bad boy", icon: "🥃"}, {label: "Xì gà", icon: "🚬"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 9.0, value: 8.0, total: 8.6 },
    topNotes: [{name: "Tiêu hồng (Pink Pepper)"}, {name: "Hoa Cam Neroli"}],
    middleNotes: [{name: "Rượu Rum"}, {name: "Dầu Cỏ hương bài (Vetiver)"}],
    baseNotes: [{name: "Lá Thuốc lá (Tobacco)"}, {name: "Vani (Vanilla)"}, {name: "Nhựa Styrax"}],
    accords: [
      {name: "Thuốc lá", value: 100, color: "#8b4513"},
      {name: "Ngọt ngào", value: 85, color: "#d2691e"},
      {name: "Vani", value: 75, color: "#f5f5dc"},
      {name: "Rượu Rum", value: 65, color: "#800000"},
      {name: "Gỗ", value: 60, color: "#a0522d"}
    ]
  },
  "replica-by-the-fireplace": {
    subName: "Replica EDT", perfumer: "Marie Salamagne", year: 2015, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Maison Margiela Replica By The Fireplace lò sưởi ấm",
    metaDescription: "Review Replica By The Fireplace: Hạt dẻ (Chestnut) nướng cháy cạnh bùi béo đỏ rực than hồng, quyện Gỗ Guaiac hun khói và Vani sưởi ấm mùa đông tuyết rơi.",
    description: "Nhắm mắt lại và bạn đang ngồi quay quần bên lò sưởi lách tách lửa hồng giữa mùa đông nước Pháp. By The Fireplace bưng lên dĩa Hạt dẻ nướng (Chestnut) siêu béo, bùi ngậy đứt lưỡi, rưới đẫm Vani (Vanilla) ngọt ngào. Mùi Khói củi (Smoky) bốc ra chân thực từ Gỗ Guaiac hun khét lẹt làm nó cực kỳ ấm áp, an toàn nhưng thừa sức chọc ngoáy vị giác. Thứ 'đồ nhắm' gây nghiện này xịt vào mùa lạnh thì đối phương chỉ muốn ôm rịt lấy bạn mà rúc vào cổ hít lấy hít để.",
    vibes: [{label: "Lò sưởi ấm", icon: "🔥"}, {label: "Hạt dẻ bùi", icon: "🌰"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 8.8, value: 8.0, total: 8.7 },
    topNotes: [{name: "Đinh hương (Cloves)"}, {name: "Tiêu hồng"}, {name: "Hoa cam (Orange Blossom)"}],
    middleNotes: [{name: "Hạt dẻ (Chestnut)"}, {name: "Gỗ Guaiac (Guaiac Wood)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Nhựa thơm Peru (Balsam)"}, {name: "Phấn Cashmeran"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Ngọt cháy", value: 75, color: "#cd853f"},
      {name: "Cay ấm", value: 65, color: "#d2691e"},
      {name: "Hổ phách", value: 60, color: "#b8860b"}
    ]
  },
  "replica-lazy-sunday-morning": {
    subName: "Replica EDT", perfumer: "Louise Turner", year: 2013, gender: "unisex", longevity: 6, sillage: 6,
    seasons: { spring: 45, summer: 35, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Replica Lazy Sunday Morning drap giường trắng tinh",
    metaDescription: "Đánh giá Replica Lazy Sunday Morning: Cô gái lười biếng cuộn mình trong chiếc chăn lanh trắng tinh cạp bột Giặt Xạ Hương (Musk) và mảng Hoa Hồng (Rose) lả lơi.",
    description: "Chẳng có gì bình yên hơn một sớm chủ nhật lười nhác cuộn tròn trên giường! Mùi hương trong veo hệt như bạn nắm lấy nệm drap trải giường lanh trắng tinh cạp sực nức bột giặt đắt tiền. Sự sạch sẽ đến từ hỗn hợp Xạ hương (Musk) mềm tơi, kết hợp Hoa Linh Lan Trắng và chiết xuất Andehit (Aldehydes) tạo hiệu ứng 'xà phòng' bông xốp rười rượi. Mặc nó với áo thun trắng trễ nải, nhâm nhi cafe sáng, ôi cái sự tối giản mà lại quyến rũ chết người.",
    vibes: [{label: "Lười biếng", icon: "🛏️"}, {label: "Chăn gối", icon: "🧼"}],
    score: { scent: 8.5, uniqueness: 7.5, compliments: 8.0, value: 7.0, total: 7.8 },
    topNotes: [{name: "Lõi Andehit (Aldehydes)"}, {name: "Hoa Linh Lan Trắng (Lily-of-the-valley)"}, {name: "Quả Lê dập nát"}],
    middleNotes: [{name: "Hoa Hồng Thổ Nhĩ Kỳ (Rose)"}, {name: "Hoa Diên Vĩ (Iris)"}],
    baseNotes: [{name: "Xạ Hương Trắng (Musk)"}, {name: "Rêu sồi (Oakmoss)"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#e6e6fa"},
      {name: "Tươi mát", value: 85, color: "#add8e6"},
      {name: "Hoa trắng", value: 75, color: "#f8f8ff"},
      {name: "Xà phòng", value: 65, color: "#f0ffff"},
      {name: "Hoa hồng", value: 60, color: "#ff69b4"}
    ]
  },
  "mancera-cedrat-boise": {
    subName: "EDP", perfumer: "Pierre Montale", year: 2011, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 40, fall: 15, winter: 10 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa nam Mancera Cedrat Boise trái cây gỗ quái thú",
    metaDescription: "Review Mancera Cedrat Boise: Biệt danh 'Aventus của Châu Á', trái cây (Fruity) chua nổ chát đắng lồng ghép trong phiến Gỗ Tuyết tùng và Da thuộc hoang dại. Bám tỏa vô địch.",
    description: "Thường xuyên bị đem lên bàn cân so sánh với huyền thoại Creed Aventus, nhưng Cedrat Boise tàn bạo và ngổ ngáo hơn hẳn! Khởi thủy là hàng loạt tép Chanh vàng (Lemon) chua quéo và Lý chua đen (Black Currant) rỏ ứa nước bạt tai thẳng vào rốn. Sự hung hãn dịu lại nhường rạp cho lớp Da thuộc (Leather) khét nắng và Gỗ Tuyết tùng vạm vỡ. Mặc em nó như ném vào người một trái bom năng lượng tươi mát bùng nổ, bám kinh hồn bạt vía bất phân thời tiết.",
    vibes: [{label: "Aventus Killer", icon: "⚔️"}, {label: "Săn mồi", icon: "🐅"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 9.0, value: 9.0, total: 8.6 },
    topNotes: [{name: "Chanh vàng Sicily (Lemon)"}, {name: "Lý chua đen (Black Currant)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hương trái cây (Fruity Notes)"}, {name: "Lá hoắc hương"}],
    baseNotes: [{name: "Gỗ Tuyết Tùng (Cedar)"}, {name: "Da thuộc (Leather)"}, {name: "Rêu sồi (Oakmoss)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Phấn", value: 60, color: "#e3d5c8"}
    ]
  },
  "instant-crush": {
    subName: "EDP", perfumer: "Pierre Montale", year: 2019, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Unisex Mancera Instant Crush tình yêu sét đánh",
    metaDescription: "Đánh giá Mancera Instant Crush: Tình yêu kẹo ngọt với Nhụy hoa nghệ tây (Saffron) cay lẹm, Vani ngào đường và Hổ phách béo ngậy. Sillage không khoan nhượng.",
    description: "'Tình yêu sét đánh' giáng thẳng vào hệ thần kinh không báo trước. Người ta gọi Instant Crush là phiên bản ồn ào và ngọt lịm hơn của Baccarat Rouge 540. Vẫn là Nhụy hoa nghệ tây (Saffron) mang sắc diện kim loại nha khoa y tế lấp ló, nhưng bị dìm ngạt dộp trong dòng thác Vani (Vanilla) lỏng quánh béo nồng nặc và Gỗ Đàn hương cay cháy. Một ấn bản cực kỳ khiêu khích, hừng hực nhục dục bám chặt trên da để bạn giật trọn spotlight giữa đám đông cuồng nhiệt.",
    vibes: [{label: "Spotlight", icon: "🌟"}, {label: "Sét đánh", icon: "⚡"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 9.5, value: 8.5, total: 8.6 },
    topNotes: [{name: "Nhụy hoa nghệ tây (Saffron)"}, {name: "Gừng (Ginger)"}, {name: "Cam Sicily"}],
    middleNotes: [{name: "Nhựa Hổ Phách (Amberwood)"}, {name: "Hoa Hồng Ma Rốc"}, {name: "Hoa Nhài Ai Cập"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Xạ hương trắng (Musk)"}, {name: "Gỗ Đàn hương (Sandalwood)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay ấm", value: 85, color: "#cd853f"},
      {name: "Vani", value: 75, color: "#f5f5dc"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "mancera-sicily": {
    subName: "EDP", perfumer: "Pierre Montale", year: 2016, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Mancera Sicily rổ trái dứa nhiệt đới",
    metaDescription: "Review Mancera Sicily: Thiên đường nhiệt đới vắt chéo Cam Quít (Mandarin) và Dứa (Pineapple) siêu mọng nước, quyện Hoa nhài và đào trắng. Siêu phẩm giải nhiệt nức nở.",
    description: "Lên thuyền chu du ra đảo Sicily tràn ngập sinh khí! Mancera Sicily xới tung lên vị giác bằng rổ trái cây tươi rọi phơi dưới nắng ấm: Quýt bóc vỏ nhúng với Quả Dứa (Pineapple) dồn dập tứa nước bọt ròng ròng xít xoắn. Trái Đào (Peach) chín muồi mềm nhũn và Xạ hương trắng lót bông sạch sẽ tẻ tan. Hương mùa hè đúng nghĩa, cực kì bắt mũi (mass-pleasing), tươi hớn hở tột độ như một ly cocktail trái cây ướp lạnh, uống vào tự nhiên tỉnh cả hồn.",
    vibes: [{label: "Giỏ trái cây", icon: "🍍"}, {label: "Giải nhiệt", icon: "🧊"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 9.0, value: 8.0, total: 8.3 },
    topNotes: [{name: "Quả Quýt (Mandarin Orange)"}, {name: "Bưởi Tây (Grapefruit)"}, {name: "Quả Đào (Peach)"}, {name: "Qủa Dứa (Pineapple)"}],
    middleNotes: [{name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Ylang-Ylang"}],
    baseNotes: [{name: "Xạ hương trắng (White Musk)"}, {name: "Gỗ Tuyết Tùng"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Trái cây", value: 85, color: "#ff8c00"},
      {name: "Ngọt ngào", value: 75, color: "#ff4500"},
      {name: "Cay tươi", value: 65, color: "#9acd32"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "ganymede": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2019, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 35, summer: 25, fall: 30, winter: 10 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa niche Ganymede khoáng chất vũ trụ kim loại",
    metaDescription: "Đánh giá Marc-Antoine Barrois Ganymede: Đóa hoa lạ từ vũ trụ. Sự bốc hơi của Đá Khoáng (Mineral), Da lộn (Suede) mới toanh và Gỗ Akigala sắc bén, tri thức vĩ đại.",
    description: "Bản báo cáo y khoa của giới thượng lưu hay siêu thực của tương lai? Ganymede là cái tên mặt trăng dội thẳng sự khô khan sắc lẹm từ những khối Đá Khoáng Chết (Mineral Notes) mặn mòi. Da lộn (Suede) lót trên mặt phẳng không gian dội thẳng cùng lá Hoa Mộc Tê ngái chua và thứ gỗ nhân tạo Akigalawood đánh sập khứu giác bằng âm hưởng lạnh giá, tân tiến, trí não kinh hoàng. Mặc nó vào phòng sếp mà sếp còn phải liếc nhìn kiền kiêng nể.",
    vibes: [{label: "Đá khoáng", icon: "🪨"}, {label: "Vũ trụ", icon: "🛰️"}],
    score: { scent: 9.2, uniqueness: 10.0, compliments: 8.5, value: 8.0, total: 8.9 },
    topNotes: [{name: "Quả Quýt Tây (Mandarin)"}, {name: "Nhụy hoa nghệ tây (Saffron)"}],
    middleNotes: [{name: "Hoa Mộc Tê (Osmanthus)"}, {name: "Hương Khoáng (Mineral Notes)"}],
    baseNotes: [{name: "Da lộn (Suede)"}, {name: "Gỗ Akigala (Akigalawood)"}],
    accords: [
      {name: "Đá khoáng", value: 100, color: "#d3d3d3"},
      {name: "Cay ấm", value: 85, color: "#cd853f"},
      {name: "Da thuộc", value: 75, color: "#8b4513"},
      {name: "Gỗ", value: 65, color: "#a0522d"},
      {name: "Trầm hương", value: 60, color: "#4c3821"}
    ]
  },
  "mcm-zen-elephant": {
    subName: "Eau de Parfum", perfumer: "Clement Gavarry", year: 2021, gender: "unisex", longevity: 6, sillage: 6,
    seasons: { spring: 40, summer: 40, fall: 15, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Unisex MCM Eau de Parfum chiếc balo nhỏ xinh",
    metaDescription: "Review MCM Eau de Parfum: Chiếc balo sành điệu tỏa hơi thở của Quả mơ (Apricot) ú nu, Mâm xôi (Raspberry) lảnh lót chua chua và Hương hoa mẫu đơn sạch sẽ thơm tho.",
    description: "Nhỏ xinh mà có võ! Ẩn mình trong thiết kế chiếc ba-lô MCM sành điệu đình đám, mùi hương của nó dễ cưng và an toàn không góc chết. Nó rớt bịch xuống những quả Đào và Quả Mơ (Apricot) ních tọng mọng nước cực kì ngon mồm, quyện với Mâm Xôi (Raspberry) the nhôn nhốt. Phảng phất đâu đó cái vị the the ngai ngái nhạt ráo của Ambroxan và Hoa mẫu đơn ngậm sương đài các. Xịt bừa đi dạo, cắp sách lên giảng đường tự nhiên người sạch bưng thơm phưng phức.",
    vibes: [{label: "Backpack", icon: "🎒"}, {label: "Đáng yêu", icon: "🍑"}],
    score: { scent: 8.0, uniqueness: 7.5, compliments: 8.5, value: 7.5, total: 7.9 },
    topNotes: [{name: "Quả Mâm Xôi (Raspberry)"}, {name: "Quả Mơ (Apricot)"}],
    middleNotes: [{name: "Hoa Mẫu Đơn (Peony)"}, {name: "Lá Violet (Violet Leaf)"}],
    baseNotes: [{name: "Long diên hương (Ambroxan)"}, {name: "Gỗ Đàn hương (Sandalwood)"}, {name: "Rêu sồi"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ff8c00"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Hổ phách", value: 75, color: "#d2691e"},
      {name: "Tươi mát", value: 65, color: "#add8e6"},
      {name: "Ngọt ngào", value: 60, color: "#ff4500"}
    ]
  },
  "african-leather": {
    subName: "EDP", perfumer: "Alienor Massenet", year: 2015, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Memo Paris African Leather thảo nguyên xanh tàn lụi",
    metaDescription: "Đánh giá Memo Paris African Leather: Con báo vằn hoang dã cạp Bạch đậu khấu cay ấm xòe trên phiến Da thuộc (Leather) và Hoắc hương. Hoang vu đầy sức hấp dẫn.",
    description: "Chúa sơn lâm gầm gào trên bình nguyên Châu Phi khô hạn nắng cháy! African Leather quất thẳng vô khứu giác vị rễ chua nồng của Bạch đậu khấu (Cardamom) nghiền vụn liếm quanh lớp Da thuộc (Leather) thô ráp nhăn nheo, gồ ghề. Càng về sau, Hoắc hương đen ngòm phủ đầy bụi đỏ bốc cao nghi ngút với Trầm hương xỉn màu. Một gã đàn ông từng trải phong trần, khoác hờ áo da mô tô lao vun vút bỏ lại sau lưng ngọn gió bão thảo nguyên điệu nghệ gai góc.",
    vibes: [{label: "Safari", icon: "🐆"}, {label: "Bụi bặm", icon: "🏜️"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.0, value: 8.0, total: 8.6 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Phong lữ (Geranium)"}, {name: "Nghệ tây (Saffron)"}, {name: "Thì là (Cumin)"}],
    baseNotes: [{name: "Da thuộc (Leather)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Gỗ trầm hương (Oud)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#cc4e00"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Da thuộc", value: 75, color: "#8b4513"},
      {name: "Hoắc hương", value: 65, color: "#556b2f"},
      {name: "Cay tươi", value: 60, color: "#9acd32"}
    ]
  },
  "explorer": {
    subName: "EDP", perfumer: "J. G. Gillotin, O. Pescheux, A. Fernandez", year: 2019, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 40, fall: 20, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa nam Montblanc Explorer thay thế Creed Aventus",
    metaDescription: "Review Montblanc Explorer: Bản dupe xuất sắc của Aventus cực kì dễ xài. Cam Bergamot tươi mát quyện Gỗ bạch dương và Long diên hương đắt tiền.",
    description: "'Kẻ khám phá' không ngần ngại học hỏi kẻ vĩ đại Creed Aventus để dọn cỗ một mùi hương tuyệt vời với giá tiền không tưởng. Mở đầu tươi giòn tan bằng rổ Cam Bergamot nạo vỏ lạo xạo. Sau đó là sự nịnh nọt chết ruồi rớt bùm bụp của Ambroxan trắng muốt lót dày vào nền Gỗ Akigala (Akigalawood) vạm vỡ. Đóng đinh cuối với cỏ hương bài và Da thuộc chát chát sành sỏi. Đa dụng bất bại, đem con cưng này đi làm công sở hái ra cả rổ gái xin info không ngớt.",
    vibes: [{label: "All rounder", icon: "💯"}, {label: "Đa dụng", icon: "🏢"}],
    score: { scent: 8.5, uniqueness: 7.0, compliments: 9.5, value: 9.5, total: 8.6 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Tiêu hồng (Pink Pepper)"}, {name: "Cây đơn sâm (Clary Sage)"}],
    middleNotes: [{name: "Cỏ hương bài Haiti (Vetiver)"}, {name: "Da thuộc (Leather)"}],
    baseNotes: [{name: "Long diên hương (Ambroxan)"}, {name: "Gỗ Akigala"}, {name: "Lá hoắc hương Indo"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Thảo mộc", value: 75, color: "#2e8b57"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Xạ hương", value: 60, color: "#d8bfd8"}
    ]
  }
};

const propsToReplace = ['subName', 'perfumer', 'year', 'gender', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'description', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords', 'vibes'];

for (let id in updates) {
  let startIdx = lines.findIndex(l => l.includes('id: "' + id + '"'));
  if (startIdx === -1) {
    console.log('[!] Khong tim thay ID: ' + id);
    continue; 
  }
  
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('isPublished: true'));
  
  let cleanedLines = [];
  for (let i = startIdx; i <= endIdx; i++) {
    let line = lines[i];
    let skip = false;
    for (let p of propsToReplace) {
      if (line.trim().startsWith(p + ':')) {
        skip = true;
        if (['accords', 'topNotes', 'middleNotes', 'baseNotes', 'vibes'].includes(p) && line.includes('[')) {
          let j = i + 1;
          while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
          i = j;
        }
        break;
      }
    }
    if (!skip) {
      cleanedLines.push(line);
    }
  }
  
  let nameFileIdx = cleanedLines.findIndex(l => l.trim().startsWith('name:'));
  let injectLines = [];
  
  for (let p of propsToReplace) {
    if (updates[id][p] !== undefined) {
      let vStr = JSON.stringify(updates[id][p]);
      if (p === 'accords') {
        let accStr = '    accords: [\n';
        updates[id][p].forEach((a, idx) => {
          accStr += '      {"name": "' + a.name + '", "value": ' + a.value + ', "color": "' + a.color + '"}' + (idx < updates[id][p].length - 1 ? ',' : '') + '\n';
        });
        accStr += '    ],';
        injectLines.push(accStr);
      } else if (p === 'vibes') {
        let vStr2 = '    vibes: [\n';
        updates[id][p].forEach((v, idx) => {
          vStr2 += '      { label: "' + v.label + '", icon: "' + v.icon + '" }' + (idx < updates[id][p].length - 1 ? ',' : '') + '\n';
        });
        vStr2 += '    ],';
        injectLines.push(vStr2);
      } else if (['topNotes', 'middleNotes', 'baseNotes'].includes(p)) {
        let arrStr = '    ' + p + ': [\n' + updates[id][p].map(n => '      {"name": "' + n.name + '"}').join(',\n') + '\n    ],';
        injectLines.push(arrStr);
      } else {
        injectLines.push('    ' + p + ': ' + vStr + ',');
      }
    }
  }
  
  let injectPoint = cleanedLines.findIndex(l => l.trim().startsWith('name:')) + 1;
  cleanedLines.splice(injectPoint, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
  console.log('[v] Da cap nhat xong ID: ' + id);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('==> BATCH 19 HOAN TAT.');
