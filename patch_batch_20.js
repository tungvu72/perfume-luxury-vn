const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "montblanc-signature-edp": {
    subName: "Eau de Parfum", perfumer: "Guillaume Flavigny, Natalie Gracia-Cetto", year: 2020, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa nữ Montblanc Signature lọ mực sữa tươi ngậy",
    metaDescription: "Đánh giá Montblanc Signature EDP: Quý cô thanh lịch, đài các với bình sữa Vani ngọt ngậy phủ Xạ hương (Musk) trắng muốt cùng Cam Clementine tươi mọng.",
    description: "Được mệnh danh là 'Nước hoa mùi sữa' đỉnh cao nhất trong tầm giá! Montblanc Signature mở ra cực kỳ mượt mà, béo ngậy y hệt như một ly sữa chua Vani (Vanilla) đánh bọt xốp mịn. Một chút Cam ngọt Clementine ở lớp đầu làm nền để Xạ hương trắng (Musk) và Hoa mộc lan dâng lên êm ái, bồng bềnh rưới trên da. Mặc em này đi làm hay hẹn hò đầu mùa thu thì đối phương chỉ muốn lại gần cắn cho một phát vì quá ngon và sạch sẽ.",
    vibes: [{label: "Sữa Vani", icon: "🥛"}, {label: "Thanh lịch", icon: "🦢"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 9.0, value: 9.5, total: 8.7 },
    topNotes: [{name: "Quả Quýt ngọt (Clementine)"}],
    middleNotes: [{name: "Hoa Mộc Lan (Magnolia)"}, {name: "Hoa Ngọc Lan Tây (Ylang-Ylang)"}, {name: "Hoa Mẫu Đơn"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Xạ hương trắng (Musk)"}, {name: "Gỗ An tức hương (Benzoin)"}],
    accords: [
      {name: "Vani sữa", value: 100, color: "#f5f5dc"},
      {name: "Hoa cỏ", value: 85, color: "#ffb6c1"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Xạ hương", value: 65, color: "#e6e6fa"},
      {name: "Ngọt ngào", value: 60, color: "#ff69b4"}
    ]
  },
  "moschino-toy-boy": {
    subName: "Eau de Parfum", perfumer: "Yann Vasnier", year: 2019, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 35, summer: 20, fall: 25, winter: 20 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa nam Moschino Toy Boy gấu đen bad boy",
    metaDescription: "Đánh giá Moschino Toy Boy: Chú gấu đen bạo chúa với rừng hoa hồng đen đâm gai tứa mật tẩm Tiêu hồng (Pink Pepper) cay xé. Biểu tượng trai hư chính hiệu.",
    description: "Đừng để thiết kế chú gấu nhỏ nhắn lừa phỉnh bạn! Toy Boy là một tay sát gái (Fuck boy) khét tiếng ẩn dưới lốt đồ chơi. Mùi hương đậm đặc, ngột ngạt sự mời gọi từ cả một rổ Hoa Hồng (Rose) đen nghiền nát, quyện với gia vị phương Đông: Tiêu hồng (Pink Pepper) và Đinh hương (Cloves) xé toạc mũi. Thứ hổ lốn ma mị này bốc lên cực kỳ gợi tình, phi giới tính và bám lâu khủng khiếp. Mặc đi club hay đi quẩy thì cam đoan không ai có thể làm ngơ.",
    vibes: [{label: "Fuck boy", icon: "🖤"}, {label: "Hoa hồng gai", icon: "🥀"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 8.0, value: 8.5, total: 8.5 },
    topNotes: [{name: "Tiêu hồng (Pink Pepper)"}, {name: "Quả Lê (Pear)"}, {name: "Nhục đậu khấu"}, {name: "Nhựa Elemi"}],
    middleNotes: [{name: "Hoa Hồng Thổ Nhĩ Kỳ (Rose)"}, {name: "Hoa Mộc Lan"}, {name: "Đinh hương (Cloves)"}],
    baseNotes: [{name: "Cỏ hương bài Haiti (Vetiver)"}, {name: "Gỗ Cashmeran"}, {name: "Gỗ Đàn hương"}, {name: "Hợp chất Sylkolide"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#e32636"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Cay nhẹ", value: 60, color: "#cd853f"}
    ]
  },
  "alien-edp": {
    subName: "EDP", perfumer: "Dominique Ropion, Laurent Bruyere", year: 2005, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa nữ Mugler Alien EDP sinh vật ngoài hành tinh",
    metaDescription: "Review Mugler Alien EDP: Siêu năng lực ngoài không gian với chùm Hoa Nhài (Jasmine) nhức nhối tỏa sáng trên đĩa đệm Hổ Phách (Amber) và Phấn hương dày đặc.",
    description: "Một khối kiến trúc siêu thực lơ lửng ngoài vũ trụ, Mugler Alien không phải là nước hoa, nó là một thế lực! Được lược giản đến tối đa, nó chỉ phô bày đúng 3 tầng hương nhưng sức công phá bằng mười chai nước hoa cộng lại. Cơn lốc Hoa Nhài Sambac (Jasmine) trắng phau bung nở ngập ngụa, trừng trộ, đè bẹp lên lớp nền Hổ phách (Amber) và Gỗ Cashmeran dày khộp ấm sực. Xịt Alien vào mùa đông, bạn tỏa sáng hệt như một nữ chúa mặt trời áp đảo mọi rào cản vây quanh.",
    vibes: [{label: "Nữ chúa", icon: "👑"}, {label: "Vũ trụ", icon: "👽"}],
    score: { scent: 8.8, uniqueness: 9.5, compliments: 8.5, value: 8.0, total: 8.7 },
    topNotes: [{name: "Hoa Nhài Sambac (Jasmine)"}],
    middleNotes: [{name: "Gỗ Cashmeran"}],
    baseNotes: [{name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Hổ phách", value: 85, color: "#d2691e"},
      {name: "Hoa cỏ", value: 75, color: "#ffb6c1"},
      {name: "Xạ hương đục", value: 65, color: "#8b4513"},
      {name: "Phấn", value: 60, color: "#e3d5c8"}
    ]
  },
  "angel": {
    subName: "EDP", perfumer: "Olivier Cresp, Yves de Chirin", year: 1992, gender: "nu", longevity: 8, sillage: 9,
    seasons: { spring: 10, summer: 5, fall: 30, winter: 55 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa nữ Mugler Angel thiên thần hay ác quỷ",
    metaDescription: "Đánh giá Mugler Angel EDP: Vị tổ của dòng nước hoa Mùi Đồ Ăn (Gourmand). Sô cô la đen đắng gắt, Kẹo bông gòn chua chát và Hoắc hương sặc sụa dội bom khứu giác.",
    description: "Yêu tao hoặc Ghét tao! Angel là chai nước hoa phân cực kinh điển nhất lịch sử. Khởi tạo ra cả một kỷ nguyên 'Gourmand' - nước hoa ăn được. Nó xộc thẳng vào xoang mũi bằng quả bom chua lè của trái cây nẫu dập, rồi đánh úp bằng một tiệm bánh kẹo hỗn đoan: Sô cô la đen (Dark Chocolate) đắng nghét, Caramel sệt kẹo và Kẹo Bông (Cotton Candy) khét lẹt. Sự xuất hiện của Hoắc hương (Patchouli) râm ran ẩm mốc biến mùi hương này thành quái thú bám tỏa kinh hoàng bạt vía. Rất nịnh người hiểu, nhưng dội bom kẻ phàm phu.",
    vibes: [{label: "Quái vật Gourmand", icon: "🍫"}, {label: "Bạo chúa", icon: "😈"}],
    score: { scent: 8.2, uniqueness: 10.0, compliments: 7.5, value: 8.5, total: 8.6 },
    topNotes: [{name: "Kẹo Bông Gòn (Cotton Candy)"}, {name: "Trái Cọp"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Mật ong"}, {name: "Dâu rừng"}, {name: "Nhục đậu khấu"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Sô cô la đen (Dark Chocolate)"}, {name: "Caramel"}, {name: "Vani"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff0000"},
      {name: "Hoắc hương", value: 85, color: "#556b2f"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Cay ấm", value: 65, color: "#cd853f"},
      {name: "Caramel", value: 60, color: "#d2b48c"}
    ]
  },
  "angel-muse": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2016, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa nữ Mugler Angel Muse mứt hạt dẻ Nutella",
    metaDescription: "Review Mugler Angel Muse: Phiên bản bớt cực đoan của Angel. Hương mứt Hạt Dẻ Cacao (Hazelnut Cocoa) béo ngậy quấn chặt lấy Hoắc hương và Gỗ Hương bài.",
    description: "Nếu Angel nguyên bản khiến bạn hoảng sợ, thì Angel Muse lại ve vuốt như một hũ mứt Nutella phủ đầy sô cô la hạt dẻ ngon lành cắn ngập miệng! Vẫn giữ lại ADN Hoắc hương (Patchouli) gai góc di truyền từ mẹ, nhưng phần ngọt ngào xé họng được thay bọc bằng Hạt dẻ ca cao bùi béo, mềm môi và ẩm ướt đầy bản năng. Khi bay màu bớt, cỏ hương bài (Vetiver) nổi lên khiến mùi hương chuyển sang vẻ sang chảnh, nam tính ngầm. Một bữa tiệc buffet đêm khuya không dành cho dạ dày yếu mệt.",
    vibes: [{label: "Mứt Nutella", icon: "🍯"}, {label: "Vũ tiệc đêm", icon: "🌃"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.5, value: 8.0, total: 8.4 },
    topNotes: [{name: "Tiêu hồng (Pink Pepper)"}, {name: "Bưởi Tây (Grapefruit)"}],
    middleNotes: [{name: "Hạt dẻ ca cao (Hazelnut Cocoa)"}],
    baseNotes: [{name: "Hoắc hương đỏ (Patchouli)"}, {name: "Cỏ hương bài (Vetiver)"}],
    accords: [
      {name: "Hoắc hương", value: 100, color: "#556b2f"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Ngọt ngào", value: 75, color: "#ff0000"},
      {name: "Thổ (Đất)", value: 65, color: "#654321"},
      {name: "Vị bùi tỏi", value: 60, color: "#cd853f"}
    ]
  },
  "narciso-rodriguez-all-of-me-floral": {
    subName: "EDP", perfumer: "Dora Baghriche, Daphné Bugey", year: 2023, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 40, summer: 30, fall: 20, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Narciso Rodriguez All Of Me nữ quyền đa sắc",
    metaDescription: "Đánh giá Narciso All Of Me EDP: DNA Xạ hương quen thuộc xen lẫn Hoa Hồng (Rose) rực rỡ, Phong lữ (Geranium) và Mộc lan. Lời tuyên ngôn quyến rũ, trẻ trung, hiện đại.",
    description: "Gạt bỏ thiết kế 'cục gạch' quen thuộc, All Of Me đánh dấu một thế hệ Narciso mỏng manh, ánh xà cừ hiện đại nhưng không kém phần mãnh liệt. Khai mào bằng đài Hoa hồng (Rose) phủ sương ướt sũng lả lướt, vắt nhuyễn chùm Hoa mộc lan căng tràn mọng nước nhẹ nhàng. Nốt sắc lẹm thú vị đến từ lá Phong Lữ Thảo hòa tấu nhịp nhàng trên đệm Xạ hương (Musk) quen thuộc. Ngửi mùi của cô nàng rất thị thành, đỏm dáng, vừa kiêu kỳ lại ôm ấp cực kì dễ gần, đi nhậu nhẹt nướng BBQ cũng dễ mến lạ thường.",
    vibes: [{label: "Độc bản", icon: "✨"}, {label: "Hồng Xạ", icon: "💐"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.5, value: 7.5, total: 7.8 },
    topNotes: [{name: "Hoa Mộc Lan (Magnolia)"}],
    middleNotes: [{name: "Hoa Hồng Centifolia (Rose)"}, {name: "Phong Lữ Thảo (Geranium)"}],
    baseNotes: [{name: "Xạ Hương (Musk)"}, {name: "Gỗ Đàn Hương (Sandalwood)"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Xạ hương", value: 75, color: "#d8bfd8"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "narciso-ambree": {
    subName: "EDP", perfumer: "Aurélien Guichard", year: 2020, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 25, summer: 35, fall: 25, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Narciso Ambree lùn cam kem chống nắng",
    metaDescription: "Review Narciso Ambree EDP lùn cam: Da thịt bóc mướt phơi dưới nắng Hè, quyện Hoa Sứ (Frangipani), Ylang-Ylang béo ngậy và Xạ Hương (Musk) ngào ngạt.",
    description: "Nhắm mắt lại và bạn đang thả dáng trên bờ biển Maldives rực nắng! Narciso Ambree dẹp bỏ mọi vướng bận, vỗ về khứu giác bằng luồng Gió Lân tinh ngập ngụa mùi Kem chống nắng vùng nhiệt đới. Sự béo ngậy, ngọt ngào của Hoa Sứ (Frangipani) và Ngọc Lan Tây (Ylang-Ylang) đặc quánh chích lên nền Xạ hương (Musk) và Hổ phách bốc hỏa sưởi ấm rơn rơn. Lớp da thịt thoảng mùi dừa non, đàn bà mơn mởn, bung lụa rực cháy chói lóa nhất của nhà Narciso.",
    vibes: [{label: "Nắng hè", icon: "☀️"}, {label: "Kem chống nắng", icon: "🌴"}],
    score: { scent: 8.2, uniqueness: 7.5, compliments: 8.5, value: 8.0, total: 8.1 },
    topNotes: [{name: "Hoa Sứ (Frangipani)"}, {name: "Hoa Ngọc Lan Tây (Ylang-Ylang)"}, {name: "Hoa trắng"}],
    middleNotes: [{name: "Xạ Hương (Musk)"}, {name: "Hổ Phách (Amber)"}],
    baseNotes: [{name: "Gỗ Cashmeran"}, {name: "Vani"}, {name: "Gỗ Tuyết tùng"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#e6e6fa"},
      {name: "Phấn", value: 85, color: "#e3d5c8"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hổ phách", value: 60, color: "#d2691e"}
    ]
  },
  "nar-cristal-edp": {
    subName: "EDP", perfumer: "Natalie Gracia-Cetto", year: 2022, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 45, summer: 35, fall: 15, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Narciso Cristal lùn hồng trong trẻo nhất",
    metaDescription: "Đánh giá Narciso Cristal: Viên pha lê lùn hồng trong sáng, mướt mát với Hoa Lan Nam Phi (Freesia), Hoa Hồng, Xạ Hương trắng tinh khiết. Nữ tính tột điểm.",
    description: "Nếu Narciso EDP (lùn phấn) quện đặc và Narciso Lùn Cam bốc lửa, thì Cristal lùn hồng ánh pha lê này lại xoa dịu bằng dòng lướt nướt tinh khôi vắt nhẹn ráo. Đúng như tên gọi, nó trong trẻo như giọt sương mai giậu nát Hoa Lan Nam Phi (Freesia) mix với Hoa Hồng hồng phớt e ấp. Xạ hương được gột sạch tinh tươm tơi tả đắp chung cùng Cam Bergamot cho cảm giác như mới tắm xong, lướt ngang qua để lại vệt hương thơm mát nhẹ nhàng ngây thơ vô số tội.",
    vibes: [{label: "Pha lê", icon: "💎"}, {label: "Tinh khôi", icon: "🕊️"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.0, value: 8.0, total: 7.8 },
    topNotes: [{name: "Hoa Lan Nam Phi (Freesia)"}, {name: "Hương hoa trắng"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Hồng (Rose)"}, {name: "Xạ Hương Trắng (Musk)"}, {name: "Hoa Nhài"}],
    baseNotes: [{name: "Gỗ Cashmeran"}, {name: "Gỗ Tuyết Tùng"}, {name: "Hổ Phách"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Xạ hương", value: 85, color: "#d8bfd8"},
      {name: "Hoa cỏ", value: 75, color: "#ffb6c1"},
      {name: "Phấn", value: 65, color: "#e3d5c8"},
      {name: "Hổ phách", value: 60, color: "#c06b22"}
    ]
  },
  "narciso-rodriguez-for-her-eau-de-parfum": {
    subName: "EDP", perfumer: "Christine Nagel, Francis Kurkdjian", year: 2006, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 15, fall: 30, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Narciso Rodriguez For Her EDP cao hồng tiểu tam",
    metaDescription: "Review Narciso For Her EDP cao hồng: Huyền thoại Hoa Hồng (Rose) dầm Xạ Hương (Musk) ngây ngất. Ngọt ngào, xác thịt, khiêu khích đỉnh cao.",
    description: "Chai nước hoa thay đổi số mệnh của biết bao cô gái - 'Narciso Cao Hồng' huyền thoại! Được mệnh danh là 'Mùi hương tiểu tam' vì độ lả lơi đĩ thõa của nó. Tất cả nhờ vào Cốt Xạ Hương (Musk) Ai Cập đậm chất da thịt tứa nhầy bám rít trên da, nhồi căng phồng Hoa Hồng (Rose) đang kỳ mãn khai nở bung. Chút quả Đào (Peach) và Hoắc hương làm mềm nhũn mọi thứ, ngọt ngào rã rời tay chân, xịt em này đi cưa chai thì đảm bảo một nhát đổ gục đầu hàng vô điều kiện.",
    vibes: [{label: "Xác thịt", icon: "💋"}, {label: "Gợi cảm", icon: "💃"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 9.0, total: 9.0 },
    topNotes: [{name: "Hoa Hồng (Rose)"}, {name: "Quả Đào (Peach)"}],
    middleNotes: [{name: "Xạ Hương (Musk)"}, {name: "Hổ phách"}],
    baseNotes: [{name: "Hoắc Hương (Patchouli)"}, {name: "Gỗ Đàn Hương (Sandalwood)"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#d8bfd8"},
      {name: "Hoa hồng", value: 85, color: "#ff1493"},
      {name: "Phấn", value: 75, color: "#f5deb3"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hoắc hương", value: 60, color: "#556b2f"}
    ]
  },
  "narciso-for-her-edp-intense-new-2025": {
    subName: "Musc EDP Intense", perfumer: "Sonia Constant", year: 2009, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 35, winter: 30 }, dayNight: { day: 55, night: 45 },
    seoTitle: "Nước hoa Narciso For Her Musc EDP Intense quyền lực",
    metaDescription: "Đánh giá Narciso For Her Musc EDP Intense: Đốt cháy giới hạn với Xạ Hương (Musk) quánh đặc, bạo liệt ngâm trong Mật ong (Honey) và Ylang-Ylang vương giả.",
    description: "Phiên bản này không dành cho thiếu nữ rụt rè. Musc EDP Intense lột trần thân phận mỏng manh để phô trương vẻ đẹp xôi thịt của Xạ Hương (Musk) nguyên sơ được cường điệu hoá, bốc ngùn ngụt ngạt thở. Nó tưới thẳng Mật ngọt (Honey) đặc sánh xuống đám Hoa Ngọc Lan Tây (Ylang-Ylang) và Hoa nhài sắc lạnh, khiến lớp nền khô lại thành một thứ mùi xà phòng cực đắt tiền, hơi chát chát ở cổ họng rền vang uy quyền. Dành cho những 'chị đại' thét ra lửa.",
    vibes: [{label: "Quyền lực", icon: "⚜️"}, {label: "Chị đại", icon: "👠"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 8.0, value: 8.0, total: 8.1 },
    topNotes: [{name: "Hoa Ngọc Lan Tây (Ylang-Ylang)"}, {name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Cam"}],
    middleNotes: [{name: "Xạ Hương Chuyên Sâu (Musk)"}],
    baseNotes: [{name: "Mật ong (Honey)"}, {name: "Hương gỗ mát (Woody Notes)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#d8bfd8"},
      {name: "Hoa trắng", value: 85, color: "#f8f8ff"},
      {name: "Ngọt ngào", value: 75, color: "#ff0000"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Phấn", value: 60, color: "#e3d5c8"}
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
console.log('==> BATCH 20 HOAN TAT.');
