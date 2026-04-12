const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "boss-bottled-edp": {
    subName: "EDP", perfumer: "Honorine Blanc", year: 2020, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa nam Hugo Boss Boss Bottled EDP giá rẻ",
    metaDescription: "Đánh giá Boss Bottled EDP: Táo xanh ngâm trong Quế và Gia vị cay nóng. Hương thơm chững chạc, nam tính và đa năng cho dân văn phòng.",
    description: "Phiên bản nâng cấp dầy dặn hơn từ huyền thoại Boss Bottled EDT. Bản EDP (Eau de Parfum) mở đầu bằng mâm Táo xanh (Apple) giòn tan nhưng nhanh chóng bị nhấm chìm trong lượng lớn Quế (Cinnamon) và Tiêu đen cực kì nam tính. Về cuối, Đàn hương trầm lắng gạn đục lại tất cả. Một mùi hương 'signature scent' hoàn hảo cho dân văn phòng: an toàn, lịch sự, chững chạc, khoác lên bộ suit là vô đối xịn xò.",
    vibes: [{label: "Lịch thiệp", icon: "👔"}, {label: "An toàn", icon: "🍏"}],
    score: { scent: 8.0, uniqueness: 7.5, compliments: 8.5, value: 8.5, total: 8.1 },
    topNotes: [{name: "Quả Táo xanh (Apple)"}, {name: "Tiêu đen (Black Pepper)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Hạt Bạch đậu khấu (Cardamom)"}, {name: "Hạt dẻ (Chestnut)"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Cay tươi", value: 85, color: "#9acd32"},
      {name: "Quế", value: 75, color: "#cd853f"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Trái cây", value: 60, color: "#ff8c00"}
    ]
  },
  "bottled-absolu": {
    subName: "Parfum Intense", perfumer: "Suzy Le Helley", year: 2024, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa nam Hugo Boss Bottled Absolu đê mê bóng tối",
    metaDescription: "Review Boss Bottled Absolu: Dày bịch Nhựa hương (Myrrh), Nhang khói và Cuốn da thuộc. Mùi hương đậm đặc, quyền lực tuyệt đối cho mùa lạnh.",
    description: "Nhân tướng học gọi Boss Bottled Absolu là 'kẻ thao túng tâm lý' với độ sâu thẳm khét lẹt. Tuyệt nhiên gạt bỏ Táo xanh ở các phiên bản cũ, Absolu nhồi nhét Nhựa thơm (Myrrh), Nhang thơm (Incense) ngùn ngụt khói. Hương ngả tối dần với Da thuộc (Leather) và Hoắc hương. Cực kì đậm đặc, bám dai dẳng trên áo len mùa đông và không dành cho mấy tay trai trẻ non nớt nhút nhát.",
    vibes: [{label: "Quyền lực", icon: "🥃"}, {label: "Bóng tối", icon: "🌑"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.2, value: 8.0, total: 8.4 },
    topNotes: [{name: "Nhang hương (Incense)"}],
    middleNotes: [{name: "Nhựa thơm Myrrh"}, {name: "Davana"}],
    baseNotes: [{name: "Da thuộc (Leather)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#d2691e"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Nhựa thơm", value: 75, color: "#a0522d"},
      {name: "Cay ấm", value: 65, color: "#cf5300"},
      {name: "Khói", value: 60, color: "#696969"}
    ]
  },
  "musk-therapy": {
    subName: "EDP", perfumer: "Guillaume Flavigny", year: 2021, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Niche Initio Musk Therapy tinh khiết chữa lành",
    metaDescription: "Review Initio Musk Therapy: Xạ hương trắng sạch sẽ, kem dâu tằm (Black Currant) và Nho trắng. Trị liệu khứu giác bằng sự mềm mại tột cùng.",
    description: "'Liệu pháp xạ hương' - quả đúng là một cái tên chuẩn xác. Musk Therapy trùm lên da thịt một lớp lụa trắng muốt dệt từ Xạ hương (Musk) mềm như bông. Xen lẫn trong sự mịn màng đó là một chút the chua ngọt dịu của Nho chua (Black Currant) và tinh dầu Cam Bergamot. Tuyệt đối thanh tao, thư giãn, ngửi phát là mọi muộn phiền tan biến. Lưu hương dai lẩn khuất, dành cho những ai tìm kiếm sự tự do tĩnh lặng.",
    vibes: [{label: "Chữa lành", icon: "☁️"}, {label: "Trắng muốt", icon: "🕊️"}],
    score: { scent: 9.5, uniqueness: 8.5, compliments: 9.0, value: 7.5, total: 8.8 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Cam Mandarin (Mandarin Orange)"}],
    middleNotes: [{name: "Nho chua (Black Currant)"}, {name: "Hoa Mộc lan (Magnolia)"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Đàn hương trắng (Sandalwood)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Xạ hương", value: 85, color: "#d8bfd8"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Trái cây", value: 60, color: "#ff8c00"}
    ]
  },
  "side-effect": {
    subName: "EDP", perfumer: "Guillaume Flavigny", year: 2016, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Initio Side Effect ma túy khứu giác",
    metaDescription: "Đánh giá Initio Side Effect: Rượu Rum ủ với Thuốc lá (Tobacco), Quế và Nhụy hoa nghệ tây (Saffron). Mùi hương 'bad boy/bad girl' hư hỏng, sát gái.",
    description: "Tác dụng phụ? Đó là say. Side Effect là một cuốc chuếch choáng khứu giác của Rượu Rum chát kết hợp cùng lá Thuốc lá (Tobacco) ngọt ngào. Khởi đầu bùng nổ, khiêu khích với Quế và Nhụy hoa nghệ tây (Saffron) nóng bỏng cào xé. Nó là hiện thân của những buổi tiệc thâu đêm rã rời, những cái liếc mắt đưa tình nguy hiểm. Lưu bám chúa tể, tỏa hương cuồng phong - không khuyến cáo dùng cho văn phòng hay lúc cần sự điềm đạm.",
    vibes: [{label: "Hư hỏng", icon: "🍸"}, {label: "Cám dỗ", icon: "🔥"}],
    score: { scent: 9.2, uniqueness: 9.5, compliments: 9.5, value: 8.0, total: 9.1 },
    topNotes: [{name: "Rượu Rum"}],
    middleNotes: [{name: "Thuốc lá (Tobacco)"}, {name: "Quế (Cinnamon)"}],
    baseNotes: [{name: "Nhụy hoa nghệ tây (Saffron)"}, {name: "Đàn hương (Sandalwood)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Thuốc lá", value: 85, color: "#8b4513"},
      {name: "Rượu", value: 75, color: "#b22222"},
      {name: "Quế", value: 65, color: "#cd853f"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "leau-dissey-pour-homme": {
    subName: "EDT", perfumer: "Jacques Cavallier", year: 1994, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa nam Issey Miyake L'Eau d'Issey Pour Homme EDT",
    metaDescription: "Review Issey Miyake L'Eau d'Issey Pour Homme: Quả Yuzu Nhật Bản thanh chua vắt trên những cánh Sen vương sương mờ. Huyền thoại mùa hè 90s.",
    description: "Một tuyệt tác thủy sinh từ năm 1994 sống mãi với thời gian. Bản giao hưởng được rạch tung bởi thứ Quả Yuzu (Thanh Yên Nhật Bản) the chua, sắc lạnh. Thế nhưng sau đó, sự chua gắt dịu đi bằng Đóa sen (Lotus) thanh tịnh và cỏ Vetiver ở lớp nền. Cảm giác như đứng ngắm sương mù trên mặt hồ Kyoto lúc 5 giờ sáng: yên ả, lạnh lẽo, sắc bén nhường nào. Kinh điển mọi thời đại cho dân thích hương chanh sả nịnh mũi.",
    vibes: [{label: "Thiền tịnh", icon: "⛩️"}, {label: "Sắc lạnh", icon: "🍋"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 8.0, value: 9.0, total: 8.5 },
    topNotes: [{name: "Quả Yuzu"}, {name: "Quả Chanh (Lemon)"}, {name: "Cỏ đuôi ngựa (Lemon Verbena)"}],
    middleNotes: [{name: "Hoa Sen (Lotus)"}, {name: "Nhục đậu khấu (Nutmeg)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hoa cỏ", value: 60, color: "#ff69b4"}
    ]
  },
  "jpg-classique-edt": {
    subName: "EDT", perfumer: "Jacques Cavallier", year: 1993, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nữ Jean Paul Gaultier Classique nịt bụng kinh điển",
    metaDescription: "Đánh giá Jean Paul Gaultier Classique EDT: Hoa cam lẳng lơ chìm đắm trong Vani và bột phấn rơm vương dâm bụt. Khiêu gợi sặc mùi thập niên 90.",
    description: "Trước La Belle, đã từng có một Classique khuynh đảo cả thế giới bằng thân hình thắt đáy lưng ong này. Hương Hoa Cam (Orange Blossom) lồng lộng mở đầu, ngay sau đó nhả ra vô vàn bột phấn (Powdery) hòa tan cùng Vani và Hoa Hồi (Star Anise). Một mùi hương ngọt mềm, ngột ngạt nhưng lả lơi, lẳng lơ chết người đúng chất boudoir (phòng ngủ kiểu Pháp). Ai bảo đồ cũ thì không biết câu dẫn cơ chứ?",
    vibes: [{label: "Lả lơi", icon: "💋"}, {label: "Cổ điển", icon: "🪞"}],
    score: { scent: 8.2, uniqueness: 9.0, compliments: 8.0, value: 8.5, total: 8.4 },
    topNotes: [{name: "Hoa Cam (Orange Blossom)"}, {name: "Hoa Hồi (Star Anise)"}],
    middleNotes: [{name: "Ngọc Lan Tây (Ylang-Ylang)"}, {name: "Hoa Lài (Jasmine)"}, {name: "Gừng (Ginger)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Phấn", value: 75, color: "#f5deb3"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Vani", value: 60, color: "#f5f5dc"}
    ]
  },
  "jpg-la-belle-edp": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2019, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nữ Jean Paul Gaultier La Belle EDP cắn ngập đào",
    metaDescription: "Review JPG La Belle EDP: Một quả Lê siêu to khổng lồ ngâm trong vại Vani ngọt ngào say đắm. Mùi hương khiêu khích cho những buổi hẹn hò.",
    description: "Một Eva quá lộng lẫy và tràn trề nhục dục! La Belle mở ra với nốt mứt Quả Lê (Pear) nướng chảy mọng nước đầy tội lỗi. Tầng hương nhồi thêm cả rổ Vani béo ngậy đan xen chút Vetiver (Cỏ hương bài) nhằm làm mùi hương không bị bết rít ngán ngẩm. Ngọt ngào, nịnh mũi, cắn vào mọng nước, xịt đi date vào mùa lạnh thì chả cưa đổ chàng cái rầm. Độ bám tỏa xuất chúng nứt vách.",
    vibes: [{label: "Hấp dẫn", icon: "🍐"}, {label: "Ngọt lịm", icon: "🍰"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.2, value: 8.5, total: 8.6 },
    topNotes: [{name: "Quả Lê (Pear)"}],
    middleNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Hương hoa cỏ (Floral Notes)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Trái cây", value: 85, color: "#ff8c00"},
      {name: "Ngọt ngào", value: 75, color: "#ff4500"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Nước", value: 60, color: "#00bfff"}
    ]
  },
  "jpg-la-belle-le-parfum": {
    subName: "Le Parfum", perfumer: "Quentin Bisch", year: 2021, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa JPG La Belle Le Parfum cho nữ đi quẩy",
    metaDescription: "Đánh giá JPG La Belle Le Parfum: Dày đặc hơn, tối tăm hơn bản EDP. Quả Lê hầm nhừ trong Đậu Tonka, rắc Vani thơm phưng phức, tỏa kinh hoàng.",
    description: "Nhân tướng học gọi tên người đàn bà quyến rũ chết người nhưng thâm sâu khó lường. La Belle Le Parfum giảm đi sự mọng nước của Quả lê, thay vào đó sấy khô gắt lại và hầm nhừ trong ngập ngụa Đậu Tonka (Tonka Bean) ấm nóng cùng Vani bóng tối. Mùi hương ngả màu râm ran, ma mị, lưu bám đực mặt trên 8 tiếng thoải mái đi quẩy club xập xình mà không trôi hạt phấn nào.",
    vibes: [{label: "Ma mị", icon: "🥀"}, {label: "Clubbing", icon: "💃"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.0, value: 8.5, total: 8.8 },
    topNotes: [{name: "Quả Lê (Pear)"}],
    middleNotes: [{name: "Hoa Nhài (Jasmine)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    baseNotes: [{name: "Vani (Vanilla)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Hoa trắng", value: 60, color: "#f8f8ff"}
    ]
  },
  "jpg-le-beau-le-parfum": {
    subName: "Le Parfum (Intense)", perfumer: "Quentin Bisch", year: 2022, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 20, summer: 60, fall: 15, winter: 5 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa nam JPG Le Beau Le Parfum mùi Dừa mùa hè",
    metaDescription: "Review JPG Le Beau Le Parfum: Làn nước cốt Dừa (Coconut) nướng dứa (Pineapple) siêu ngọt, trần trụi và phơi phới cho dâm nam biển mùa hè.",
    description: "Bản Le Beau gốc đã ngon, bản Le Parfum còn cởi tồng nịnh mũi hơn bạo! Vẫn giữ lại DNA kẹo Dừa (Coconut) ngọt lịm đặc trưng, nhưng chai đen này bào thêm cả Dứa (Pineapple) chua ngọt mọng nước nhảy nhót trên làn da rám nắng. Hương nền Đậu Tonka và Gỗ trôi dạt giữ lại sự trầm nam tính đủ xài. Xịt đi biển, xịt đi cháy phố đêm hè, sát gái thì phải gọi là siêu hạng, ngửi phát muốn ngoạm luôn vào da.",
    vibes: [{label: "Lãng tử", icon: "🥥"}, {label: "Quyến rũ", icon: "🏖️"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Quả Dứa (Pineapple)"}, {name: "Hoa Diên Vĩ (Iris)"}],
    middleNotes: [{name: "Trái Dừa (Coconut)"}, {name: "Hương gỗ (Woody Notes)"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Đàn hương (Sandalwood)"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff4500"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Dừa", value: 75, color: "#fff8dc"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Vani", value: 60, color: "#f5f5dc"}
    ]
  },
  "jpg-le-male-edt": {
    subName: "EDT", perfumer: "Francis Kurkdjian", year: 1995, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa JPG Le Male EDT chính hãng tay lính thủy",
    metaDescription: "Đánh giá JPG Le Male EDT: Tượng đài Bad boy nước Pháp thập niên 90. Sự đối lập quyến rũ của Oải hương mát rượi và Vani rạo rực nồng cháy.",
    description: "Tuyệt phẩm đi vào sách giáo khoa khứu giác! Le Male chính là bước rẽ ngoạn mục khi Francis Kurkdjian tạo ra một 'chàng lính thủy đánh bộ' đầy khiêu khích nhục dục. Sự va chạm giữa Bạc hà (Mint) đắp chung Oải hương (Lavender) the mát cắt xéo vào hơi nóng hầm hập của Quế và Vani béo ngậy gào thét. Nó ngọt, nó the, nó ầm ĩ và đầy chất đi chơi clubbing của thanh niên 90s.",
    vibes: [{label: "Bad boy", icon: "⚓"}, {label: "Clubbing", icon: "🔥"}],
    score: { scent: 8.5, uniqueness: 9.5, compliments: 8.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Bạc hà (Mint)"}, {name: "Hoa Oải hương (Lavender)"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Hoa Cam"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#2e8b57"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Oải hương", value: 65, color: "#9370db"},
      {name: "Cay ấm", value: 60, color: "#d2691e"}
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
  
  cleanedLines.splice(nameFileIdx + 1, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
  console.log('[v] Da cap nhat xong ID: ' + id);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('==> BATCH 15 HOAN TAT.');
