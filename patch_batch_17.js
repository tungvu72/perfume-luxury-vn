const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "lorchestre-piano-santal": {
    subName: "EDP", perfumer: "Jean-Jacques", year: 2019, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa L'Orchestre Piano Santal đàn hương và sữa",
    metaDescription: "Review L'Orchestre Piano Santal: Nàng thơ đánh đàn Piano với làn da đẫm mùi Gỗ đàn hương (Sandalwood) đun trong Sữa (Milk) béo ngậy. Mùi hương êm đềm tột đỉnh.",
    description: "Nếu phải tìm một mùi hương bình yên như bản sonata đang chơi trên phím đàn dương cầm, đó chính là Piano Santal. Bản giao hưởng bắt đầu bằng một lớp Sữa tươi (Milk) nóng chảy tràn trề quyện lấy Gỗ đàn hương (Sandalwood) mỏng nhẹ, bào nhẵn. Hỗn hợp xạ hương (Musk) len lỏi cùng phấn Cashmeran khiến nó tan hẳn vào da (skin-scent) tựa như mùi da thịt trắng ngần của một nàng thơ mọt sách. Yên ả, thanh tịnh và béo bùi, một mùi hương ru ngủ mọi giác quan.",
    vibes: [{label: "Êm đềm", icon: "🎹"}, {label: "Sữa nhạt", icon: "🥛"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.0, value: 8.0, total: 8.3 },
    topNotes: [{name: "Sữa tươi (Milk)"}],
    middleNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hương da thịt (Skin)"}],
    baseNotes: [{name: "Phấn Cashmeran"}, {name: "Xạ hương (Musk)"}, {name: "Thì là trắng (Cumin)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Phấn", value: 85, color: "#f5deb3"},
      {name: "Sữa", value: 75, color: "#fffff0"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Hổ phách", value: 60, color: "#d2691e"}
    ]
  },
  "lalique-encre-noir-edt": {
    subName: "EDT", perfumer: "Nathalie Lorson", year: 2006, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nam Lalique Encre Noire hoàng tử bóng đêm",
    metaDescription: "Đánh giá Lalique Encre Noire: Mực đen tăm tối, Rừng thông (Cypress) đẫm mưa bùn và Cỏ hương bài (Vetiver) rễ đắng. Siêu phẩm rẻ, độc, dị.",
    description: "Biệt danh là 'Hành lang cõi âm' hay 'Hoàng tử bóng đêm' không phải hư danh. Encre Noire (Mực Đen) là một cơn bão gỗ cực kì dị biệt. Mũi bạn sẽ cắm phập xuống lớp đất bùn (Earthy) ngai ngái ẩm ướt của Cỏ hương bài (Vetiver) lâu năm, và nhấm ngáp cái không khí lạnh lẽo rùng rợn của Cây bách (Cypress). Mùi hầm hập khói, mờ mịt sương đêm, phù hợp cho những tay chơi hệ đồ đen, ít nói, sắc lạnh và thích sự cô đơn. Bạn không chọn Encre Noire, nó chọn bạn.",
    vibes: [{label: "Bóng đêm", icon: "🦇"}, {label: "Lạnh lùng", icon: "🌲"}],
    score: { scent: 8.5, uniqueness: 9.5, compliments: 7.5, value: 10.0, total: 8.8 },
    topNotes: [{name: "Cây bách (Cypress)"}],
    middleNotes: [{name: "Cỏ hương bài (Vetiver)"}],
    baseNotes: [{name: "Gỗ Cashmere (Cashmir wood)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Đất bùn", value: 75, color: "#696969"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Cay tươi", value: 60, color: "#9acd32"}
    ]
  },
  "la-vie-est-belle": {
    subName: "EDP", perfumer: "Olivier Polge, Dominique Ropion", year: 2012, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nữ Lancome La Vie Est Belle đi tiệc mùa đông",
    metaDescription: "Review Lancome La Vie Est Belle: Cuộc sống tươi đẹp với kẹo Praline, Vani và Hoắc hương tỏa hương mù mịt. Ông hoàng nước hoa nướng cháy mũi của hội chị em.",
    description: "'Cuộc sống thật tươi đẹp' là bản giao hưởng ngọt ngào ám ảnh nhất mọi thời đại. Lancôme đã tống cả một xe tải Kẹo hạt dẻ (Praline) nóng hổi nung cuộn với Vani (Vanilla) béo đặc rớt thẳng xuống da. Nó có sức mạnh xuyên thủng mọi không gian bằng độ bám tỏa hạt nhân kinh hoàng rúng động, quyện Hoắc hương ấm rực rỡ. Rất trưởng thành, rất đài các kiêu sa, chống chỉ định xịt quá 2 nhát nếu đi làm văn phòng mùa hè.",
    vibes: [{label: "Quyền tỷ", icon: "👑"}, {label: "Siêu tỏa", icon: "💥"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 9.5, value: 8.5, total: 8.6 },
    topNotes: [{name: "Nho chua (Black Currant)"}, {name: "Quả Lê"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}, {name: "Hoa Nhài"}, {name: "Hoa Cam"}],
    baseNotes: [{name: "Kẹo Praline (Praline)"}, {name: "Vani (Vanilla)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff4500"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Hoắc hương", value: 65, color: "#556b2f"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "tresor": {
    subName: "EDP", perfumer: "Sophia Grojsman", year: 1990, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa phu nhân Lancome Tresor quyền quý cổ điển",
    metaDescription: "Đánh giá Lancome Tresor: Đào (Peach) và Quả Mơ (Apricot) chín nẫu ủ với Hoa hồng dập nát. Mùi hương đậm chất hoài cổ cho những phu nhân trưởng thành.",
    description: "Tresor là cả một bầu trời hoài niệm thập niên 90. Hương thơm được bóp vụn bằng mớ Đào chín (Peach) và Cam Mơ mềm nhũn, nhúng ngập trong lớp kem phủ Hoa Hồng (Rose) nồng nàn sặc sỡ. Nó có mùi phấn son trang điểm dày cộm (Powdery) trên bàn phấn của mẹ năm xưa. Tresor không dành cho mấy cô gái tuổi mười tám mướt mát, mà chỉ hợp rơ với những phu nhân từng trải, quý phái, mặc áo nhung lụa đi tiệc hội hè.",
    vibes: [{label: "Nostalgia", icon: "🎞️"}, {label: "Phu nhân", icon: "💃"}],
    score: { scent: 8.0, uniqueness: 8.5, compliments: 7.5, value: 8.5, total: 8.1 },
    topNotes: [{name: "Quả Đào (Peach)"}, {name: "Hoa Hồng (Rose)"}, {name: "Quả Mơ (Apricot)"}],
    middleNotes: [{name: "Hoa Nhài"}, {name: "Hoa Diên Vĩ"}, {name: "Hoa Vòi Voi"}],
    baseNotes: [{name: "Gỗ Đàn Hương (Sandalwood)"}, {name: "Vani (Vanilla)"}, {name: "Hổ Phách (Amber)"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ff8c00"},
      {name: "Phấn", value: 85, color: "#f5deb3"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Hoa hồng", value: 60, color: "#ff1493"}
    ]
  },
  "khamrah": {
    subName: "EDP", perfumer: "Lattafa Perfumes", year: 2022, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Lattafa Khamrah kẹo táo ủ quế ngon bá đạo",
    metaDescription: "Review Lattafa Khamrah: Bản dupe giả mạo xuất sắc của Angels' Share? Quả Chà là (Dates), nhục đậu khấu và Quế ngâm Vani say xỉn ngọt ngào.",
    description: "Ông kẹ làm chao đảo mạng xã hội TikTok! Khởi thủy bị coi là bản nhái Angels' Share, nhưng Khamrah tự mình chứng minh đẳng cấp. Cú xịt đầu ập vào mũi là một khay mứt Quả Chà là (Dates) tẩm đường cháy. Mùi Quế (Cinnamon) ngào với Nhục đậu khấu rắc trên nền Vani ngọt kẹo mút (Praline) mọng nước ầm ầm khiêu khích. Một chai nước hoa ngon lành, béo ngậy, bám tỏa trâu quỷ thần sầu với cái giá rẻ bèo. Must-have cho mùa lạnh!",
    vibes: [{label: "Ngon miệng", icon: "🥧"}, {label: "Bám trâu", icon: "🔥"}],
    score: { scent: 9.0, uniqueness: 8.0, compliments: 9.5, value: 10.0, total: 9.1 },
    topNotes: [{name: "Quế (Cinnamon)"}, {name: "Nhục đậu khấu (Nutmeg)"}],
    middleNotes: [{name: "Quả Chà là (Dates)"}, {name: "Kẹo Praline (Praline)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Hổ Phách"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#e32636"},
      {name: "Cay ấm", value: 85, color: "#cc4e00"},
      {name: "Vani", value: 75, color: "#fffacd"},
      {name: "Hổ phách", value: 65, color: "#b85d19"},
      {name: "Quế", value: 60, color: "#c27536"}
    ]
  },
  "oud-forever": {
    subName: "Oud For Glory EDP", perfumer: "Lattafa Perfumes", year: 2020, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Lattafa Bade'e Al Oud (Oud for Glory) clone bá đạo",
    metaDescription: "Đánh giá Lattafa Oud For Glory: Bản clone đỉnh cao của Initio Oud for Greatness. Gỗ Trầm hương (Oud) hòa quyện Nhụy hoa nghệ tây (Saffron) cay nồng vương giả.",
    description: "Vua của dòng clone Trung Đông! Oud for Glory mô phỏng lại siêu phẩm Oud for Greatness đến 85% với một phần gỗ Trầm hương (Oud) bốc khói cay nồng. Cứng cáp, sắc lẹm bằng Saffron kim loại và được bào nhẵn xuống nhờ Oải hương (Lavender) the mát và Hoắc hương tối tăm. Đây là một mùi hương khô khốc, cháy lẹm, mang bóng dáng vương giả oai vệ. Mặc với vest đen và điếu xì gà mùa đông thì ngầu hết nước chấm rớt ra rớt rền.",
    vibes: [{label: "Ngầu lòi", icon: "🧥"}, {label: "Trung đông", icon: "👳‍♂️"}],
    score: { scent: 8.5, uniqueness: 8.5, compliments: 8.5, value: 9.5, total: 8.7 },
    topNotes: [{name: "Nhụy hoa nghệ tây (Saffron)"}, {name: "Nhục đậu khấu (Nutmeg)"}, {name: "Oải hương (Lavender)"}],
    middleNotes: [{name: "Trầm hương (Oud)"}, {name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Gỗ Trầm hương (Oud)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Trầm hương", value: 100, color: "#4c3a30"},
      {name: "Cay ấm", value: 85, color: "#cc2a00"},
      {name: "Cay tươi", value: 75, color: "#82b322"},
      {name: "Hoắc hương", value: 65, color: "#546040"},
      {name: "Kim loại", value: 60, color: "#8a9a99"}
    ]
  },
  "le-labo-santal": {
    subName: "EDP", perfumer: "Frank Voelkl", year: 2011, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 20, fall: 25, winter: 20 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa Le Labo Santal 33 xưởng mộc mùn cưa",
    metaDescription: "Review Le Labo Santal 33: Mùi xưởng gỗ Đàn hương (Sandalwood) ngai ngái, giấy cói (Papyrus) và mảnh Da thuộc (Leather). Icon của giới mộ điệu thời trang.",
    description: "Sức mạnh thao túng cả đô thị New York mang tên Santal 33. Mùi hương nẹt ra cực kỳ thô ráp, giống y hệt khi bạn bước vào một xưởng mộc còn mới tinh với mùn cưa Đàn hương (Sandalwood) và Tuyết tùng vương vãi. Điểm xuyết là mùi Giấy cói (Papyrus) hanh khô và miếng Da thuộc (Leather) sần sùi cọ sát. Nhiều người bảo nó gợi nhớ mùi... 'nhà sư bào gỗ', nhưng cái ngai ngái sang chảnh ấy mới chính là thứ thuốc phiện làm giới thiết kế thời trang cuồng dại.",
    vibes: [{label: "Xưởng mộc", icon: "🪵"}, {label: "Hipster", icon: "🎩"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 9.0, value: 8.0, total: 8.9 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Hoa Tím (Violet)"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}, {name: "Giấy cói (Papyrus)"}],
    baseNotes: [{name: "Gỗ Đàn Hương (Sandalwood)"}, {name: "Da thuộc (Leather)"}, {name: "Tuyết tùng (Cedar)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Phấn", value: 85, color: "#faebd7"},
      {name: "Da thuộc", value: 75, color: "#8b5a2b"},
      {name: "Cay ấm", value: 65, color: "#d2691e"},
      {name: "Hoa tím", value: 60, color: "#9400d3"}
    ]
  },
  "the-noir": {
    subName: "EDP", perfumer: "Frank Voelkl", year: 2015, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 40, winter: 25 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa Le Labo The Noir 29 xác trà đen chát đắng",
    metaDescription: "Đánh giá Le Labo The Noir 29: Quả sung (Fig) chua ngọt rớt vào lẵng xác trà đen ấp ủ Cỏ khô (Hay) và mùi nguyệt quế sắc lạnh. Thâm trầm lẫm liệt.",
    description: "Trà mà không có lóng Trà nào! Thé Noir 29 đánh lừa cái mũi bằng Cỏ khô (Hay) hanh nắng và mùi chát đắng lừ của Lá nguyệt quế đun nhừ. Phảng phất đâu đó vị ngọt chua nhớt của Quả Sung (Fig) và khói Thuốc lá (Tobacco) thoang thoảng. Mùi hương ngả màu rêu mốc, sâu hoắm như xác trà đen dập nát dưới đáy cốc thủy tinh. Một ấn bản cực kỳ tri thức, thâm trầm, sắc lẹm và bí ẩn mặc cùng sơ mi vắt vẻo trong những tiệm sách cũ rích.",
    vibes: [{label: "Thư phòng", icon: "📖"}, {label: "Trà sậm", icon: "☕"}],
    score: { scent: 9.2, uniqueness: 9.5, compliments: 9.0, value: 8.5, total: 9.0 },
    topNotes: [{name: "Quả Sung (Fig)"}, {name: "Lá Nguyệt Quế (Bay Leaf)"}],
    middleNotes: [{name: "Gỗ Tuyết Tùng (Cedar)"}, {name: "Cỏ hương bài (Vetiver)"}],
    baseNotes: [{name: "Cỏ Khô (Hay)"}, {name: "Thuốc lá (Tobacco)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay tươi", value: 85, color: "#7cb342"},
      {name: "Ngọt ngào", value: 75, color: "#f44336"},
      {name: "Thảo mộc", value: 65, color: "#26a69a"},
      {name: "Trái cây", value: 60, color: "#ff5722"}
    ]
  },
  "blanche-bete": {
    subName: "EDP", perfumer: "Louise Turner", year: 2021, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa Niche Blanche Bete ngựa bạch sừng sữa",
    metaDescription: "Review Liquides Imaginaires Blanche Bete: Bạch mã kỳ lân tắm trong vũng Sữa béo (Milk), thoa Vani và Hoa Nhài phấn quyến rũ dính xác da thịt.",
    description: "Huyền thoại Bạch kỳ lân của giới Niche! Bạn như rơi tõm vào một lu Sữa tươi trắng xóa (Milk) đun sệt ngợp thở, dầm thêm một đống Vani ngậy béo và bột Cacao trắng. Mùi Hoa Huệ Tây bốc khói quấn quyện vào da thịt bằng lớp phấn nồng nàn dính dớp (skin-scent). Vừa thánh thiện, vừa trong vắt nhưng lại kích thích thú tính tiềm ẩn một cách kinh ngạc. Xịt đi hẹn hò ngủ nướng thì quá đáng quá quắt với gã mộng tinh kế bên.",
    vibes: [{label: "Quyến rũ", icon: "🦄"}, {label: "Sữa tắm", icon: "🛁"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 9.5, value: 8.0, total: 8.9 },
    topNotes: [{name: "Sữa tươi (Milk)"}, {name: "Xạ hương Ambrette"}],
    middleNotes: [{name: "Hoa Huệ Tây (Tuberose)"}, {name: "Hoa Nhài"}, {name: "Nhang (Incense)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Xạ hương (Musk)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    accords: [
      {name: "Vani", value: 100, color: "#fffacd"},
      {name: "Xạ hương", value: 85, color: "#e6e6fa"},
      {name: "Sữa", value: 75, color: "#fffff0"},
      {name: "Hoa trắng", value: 65, color: "#f0f8ff"},
      {name: "Phấn", value: 60, color: "#e3d5c8"}
    ]
  },
  "le-parfum-lolita": {
    subName: "Le Parfum", perfumer: "Annick Menardo", year: 2021, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Lolita Lempicka quả táo độc thảo mộc",
    metaDescription: "Đánh giá Lolita Lempicka Le Parfum: Cắn ngập quả táo ma thuật tẩm Rễ cam thảo tây (Licorice) đắng lạ, phủ Hoa Hồi gắt nhẹ và Anh Đào thum thủm yêu quái.",
    description: "Quả táo thủy tinh bọc vàng chứa đầy ma lực! Đây là mùi hương dành cho những phù thủy tập sự giấu mình trong rừng vắng. Mở ra cay đắng, xộc thẳng lên bằng mùi Hoa Hồi (Star Anise) và dập nát nhánh Rễ cam thảo (Licorice). Rất kén mũi! Thế nhưng chừng 30 phút sau, lớp áo yêu quái trút đi, nhường chỗ cho kẹo Praline, Vani và Quả Anh đảo (Cherry) ngọt ngây chua xót vỡ òa trên da. Ma quái, dễ nghiện, và chẳng đụng hàng mảy may.",
    vibes: [{label: "Phù thủy", icon: "🧙‍♀️"}, {label: "Quả táo độc", icon: "🍎"}],
    score: { scent: 8.2, uniqueness: 9.5, compliments: 8.0, value: 8.5, total: 8.5 },
    topNotes: [{name: "Rễ Cam Thảo (Licorice)"}, {name: "Hoa Hồi (Star Anise)"}, {name: "Hoa Thường Xuân"}],
    middleNotes: [{name: "Quả Anh Đào (Cherry)"}, {name: "Hoa Tím (Violet)"}],
    baseNotes: [{name: "Kẹo Praline (Praline)"}, {name: "Vani (Vanilla)"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Cay nhẹ", value: 100, color: "#d2691e"},
      {name: "Ngọt ngào", value: 85, color: "#ff2400"},
      {name: "Phấn", value: 75, color: "#e3d5c8"},
      {name: "Hoa hồi tây", value: 65, color: "#aebd93"},
      {name: "Hoa tím", value: 60, color: "#8a2be2"}
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
console.log('==> BATCH 17 HOAN TAT.');
