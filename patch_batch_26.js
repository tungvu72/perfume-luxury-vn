const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "lira": {
    subName: "EDP", perfumer: "Chris Maurice", year: 2011, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Xerjoff Lira EDP chiếc bánh chanh đường",
    metaDescription: "Đánh giá Xerjoff Lira: Khúc ca ngọt ngào của mùa đông. Một chiếc bánh chanh nướng phủ đầy Vani béo ngậy, Caramel ấm áp và bột Quế.",
    description: "Nhắc đến mùi hương Gourmand (đồ ăn ngọt) đỉnh cao, không thể bỏ qua Xerjoff Lira! Phát xịt đầu mở ra như một tiệm bánh ngọt sang trọng ở Ý, với vị chua nhẹ của Cam đỏ (Blood Orange) nướng phủ đầy Bột Quế (Cinnamon) thơm lừng. Càng về sau, Vani và Caramel rót xuống chảy tràn trề trên da thịt. Mùi hương cực kỳ quyến rũ, muốn cắn, muốn ăn thịt, rất hợp cho những đêm hẹn hò lạnh giá.",
    vibes: [{label: "Bánh ngọt", icon: "🍰"}, {label: "Muốn cắn", icon: "🤤"}],
    score: { scent: 9.5, uniqueness: 8.5, compliments: 9.2, value: 8.0, total: 8.8 },
    topNotes: [{name: "Cam đỏ (Blood Orange)"}, {name: "Cam Bergamot"}, {name: "Hoa Oải hương"}],
    middleNotes: [{name: "Bột Quế (Cinnamon)"}, {name: "Cam thảo"}, {name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Caramel nướng"}, {name: "Vani béo xốp (Vanilla)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Vani bùi", value: 100, color: "#ffffe0"},
      {name: "Caramel kẹo mút", value: 85, color: "#d2b48c"},
      {name: "Ngọt ngào", value: 75, color: "#dc143c"},
      {name: "Quế ấm", value: 65, color: "#d2691e"},
      {name: "Phấn xốp", value: 60, color: "#faebd7"}
    ]
  },
  "naxos": {
    subName: "EDP", perfumer: "Xerjoff", year: 2015, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Xerjoff Naxos EDP điếu xì gà tẩm mật",
    metaDescription: "Review Xerjoff Naxos EDP: Kiệt tác nước hoa Thuốc lá - Mật ong. Oải hương thanh tao hòa quyện Vani béo mượt, Đậu Tonka, rực rỡ và vương giả.",
    description: "Nếu có thứ gì lột tả được vẻ đẹp hào nhoáng của giới siêu giàu Ý, đó là Naxos! Một điếu xì gà non (Tobacco) được ướp đẫm trong Mật ong (Honey) sánh mịn, rắc thêm chút Oải hương (Lavender) thơm sắc nét chuẩn quý tộc. Lớp nền là bản tình ca của Vani và Đậu Tonka ấm sực. Có một chút vị khói, một chút the mát, cực kỳ nịnh mũi và rất trâm anh thế phiệt. Ai gửi thấy cũng phải hít hà khen thơm.",
    vibes: [{label: "Giới siêu giàu", icon: "💰"}, {label: "Xì gà mật", icon: "🍯"}],
    score: { scent: 9.8, uniqueness: 9.0, compliments: 9.5, value: 8.5, total: 9.2 },
    topNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Chanh vàng rực"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Mật ong đặc (Honey)"}, {name: "Quế (Cinnamon)"}, {name: "Hoa Nhài Cashmeran"}],
    baseNotes: [{name: "Thuốc lá non (Tobacco)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Vani mịn (Vanilla)"}],
    accords: [
      {name: "Ngọt sánh", value: 100, color: "#ff4500"},
      {name: "Mật ong đặc", value: 85, color: "#ffa500"},
      {name: "Vani mịn", value: 75, color: "#ffffe0"},
      {name: "Thuốc lá sấy", value: 65, color: "#b8860b"},
      {name: "Oải hương sắc", value: 60, color: "#9370db"}
    ]
  },
  "xerjoff-torino": {
    subName: "EDP", perfumer: "Xerjoff", year: 2021, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 55, fall: 10, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Xerjoff Torino 21 khu vườn sảng khoái",
    metaDescription: "Đánh giá Xerjoff Torino 21: Nước hoa đắt tiền giải nhiệt mùa hè. Cú nổ xanh mát của Bạc hà (Mint), Chanh vàng, Húng quế cực kỳ sảng khoái.",
    description: "Khác lạ hoàn toàn với sự ngọt ngào thường nhật của nhà Xerjoff, Torino 21 là quả bom giải khát cho cái nắng 40 độ! Bạc hà the mát lạnh (Mint) xé rách không gian, kéo theo nước cốt Chanh vàng và Lá húng quế (Basil) xanh rì đắng nghét đập thẳng vào khứu giác. Khi dịu lại, nó để lại trên da mùi hương của Xạ hương trắng sạch bong kin kít. Sang trọng, tươi rói ráo rọi, mùi của kỳ nghỉ dưỡng 5 sao ven biển Địa Trung Hải.",
    vibes: [{label: "Giải khát", icon: "❄️"}, {label: "Xanh mướt", icon: "🌿"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 8.8, value: 7.5, total: 8.4 },
    topNotes: [{name: "Lá Bạc hà the (Mint)"}, {name: "Chanh vàng (Lemon)"}, {name: "Húng quế (Basil)"}],
    middleNotes: [{name: "Tiêu đen"}, {name: "Lý chua đen (Black Currant)"}, {name: "Hương thảo (Rosemary)"}],
    baseNotes: [{name: "Xạ hương trắng (Musk)"}, {name: "Cỏ đuôi ngựa"}],
    accords: [
      {name: "Thảo mộc the", value: 100, color: "#2e8b57"},
      {name: "Gia vị sắc tươi", value: 85, color: "#7cb342"},
      {name: "Xanh lá ngậm nước", value: 75, color: "#008000"},
      {name: "Cam chanh đắng", value: 65, color: "#ffff00"},
      {name: "Xạ hương da", value: 60, color: "#e6e6fa"}
    ]
  },
  "ysl-black-opium-glitter-edp": {
    subName: "EDP", perfumer: "Marie Salamagne", year: 2021, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa YSL Black Opium Glitter lấp lánh hộp đêm",
    metaDescription: "Review Black Opium Glitter: Bản giới hạn lấp lánh như kim tuyến. Giữ nguyên DNA Cà phê - Vani - Hoa cam kinh điển. Cực kỳ nịnh mũi và sexy.",
    description: "Một bản Flanker khoác áo mới lấp lánh (Glitter) nhằm làm hài lòng các cô nàng đi quẩy bar! Về cơ bản, nó giữ nguyên 90% gen của bản Black Opium gốc: một đĩa kẹo Mashmallow xốp dai ngấm đẫm Cà phê nâu và Vani béo ngậy. Nhưng Glitter có vẻ sáng hơn, Hoa nhài thưa thớt hơn và độ nịnh mũi vẫn đỉnh cao như cũ. Xịt em này đi hẹn hò hoặc dạo phố đêm thì y như rằng thu hút ánh nhìn rực rỡ.",
    vibes: [{label: "Kim tuyến", icon: "✨"}, {label: "Sát trai", icon: "👠"}],
    score: { scent: 8.5, uniqueness: 7.0, compliments: 8.8, value: 8.0, total: 8.0 },
    topNotes: [{name: "Hoa Cam trắng (Orange Blossom)"}, {name: "Quả lê"}],
    middleNotes: [{name: "Bột Cà phê (Coffee)"}, {name: "Mashmallow xốp"}, {name: "Hạnh nhân đắng"}],
    baseNotes: [{name: "Vani đen (Vanilla)"}, {name: "Xạ hương đê mê"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Ngọt đậm", value: 100, color: "#ff4500"},
      {name: "Chanh đắng ruột", value: 85, color: "#ffff00"},
      {name: "Vani xốp", value: 75, color: "#ffffe0"},
      {name: "Phấn dịu", value: 65, color: "#faebd7"},
      {name: "Hoa trắng bay", value: 60, color: "#f8f8ff"}
    ]
  },
  "ysl-libre-intense-edp": {
    subName: "EDP", perfumer: "Anne Flipo, Carlos Benaim", year: 2020, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa YSL Libre Intense tự do rực lửa",
    metaDescription: "Đánh giá YSL Libre Intense: Phiên bản sắc sảo, dạn dĩ hơn với sự gia tăng của Vani Madagasca, Oải hương Pháp và Đậu Tonka rực rỡ bốc lửa.",
    description: "Nếu Libre bản gốc là cô nàng mặc vest quyền lực, thì Intense là cô ta đi thẳng từ công ty vào buổi tiệc đêm ướt át! Libre Intense khuếch đại cực đại sự dữ dội của Hoa Oải hương (Lavender) nam tính, quyện với dòng thác ngọt lịm từ Vani bốc khói và Đậu Tonka. Sức nóng hừng hực bung tỏa một màu vàng ươm, quyến rũ, ngạo nghễ và không gì ngăn cản được. Mùi của một nữ cường nhân có gu, bám tỏa khủng long.",
    vibes: [{label: "Nữ quyền vương", icon: "🔥"}, {label: "Sắc sảo", icon: "😎"}],
    score: { scent: 9.3, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Hoa Oải hương sắc (Lavender)"}, {name: "Cam Mandarin"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Oải hương lả"}, {name: "Hoa Lan Châu Phi (Orchid)"}, {name: "Hoa Nhài (Jasmine)"}],
    baseNotes: [{name: "Vani nguyên con (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Long diên hương"}],
    accords: [
      {name: "Vani đen bùi", value: 100, color: "#ffffe0"},
      {name: "Hoa trắng quyến rũ", value: 85, color: "#f8f8ff"},
      {name: "Cam chanh chín mọng", value: 75, color: "#ffff00"},
      {name: "Oải hương the", value: 65, color: "#9370db"},
      {name: "Ngọt ấm nồng", value: 60, color: "#ff4500"}
    ]
  },
  "ysl-y-eau-de-parfum": {
    subName: "EDP", perfumer: "Dominique Ropion", year: 2018, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 25, fall: 30, winter: 20 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa YSL Y EDP áo thun đen quốc dân",
    metaDescription: "Review YSL Y EDP: Mùi 'thanh niên áo đen' huyền thoại. Táo xanh giòn rụm quyện Gừng the mát, Thơm dứa và Xô thơm ảo diệu. Nam tính nịnh mũi số 1.",
    description: "Bạn trai mặc áo thun đen dạo phố, thì cứ mặc định là xịt YSL Y EDP nha! Ngửi vào phát là thấy ngon trai, bảnh bao tức thì. Cú đấm trái cây của Táo xanh (Apple), sự the mát từ Gừng (Ginger) xộc thẳng vào mũi sảng khoái hết cỡ. Chờ một xíu, Gỗ Amberwood và Đậu Tonka lên màu, tạo sự ấm áp, the the vị mùi lá Xô thơm (Sage) nịnh mũi không thể tả. Dễ xài kinh khủng, mùa nào xịt cũng rộp.",
    vibes: [{label: "Quốc dân", icon: "🖤"}, {label: "Bảnh bao trai", icon: "😎"}],
    score: { scent: 9.0, uniqueness: 7.5, compliments: 9.5, value: 8.5, total: 8.6 },
    topNotes: [{name: "Táo xanh giòn (Apple)"}, {name: "Gừng tươi (Ginger)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Lá Xô thơm mặn (Sage)"}, {name: "Quả bách xù"}, {name: "Hoa phong lữ"}],
    baseNotes: [{name: "Gỗ hổ phách nhựa (Amberwood)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ Tuyết tùng"}, {name: "Trầm hương phay"}],
    accords: [
      {name: "Thảo mộc the mặn", value: 100, color: "#2e8b57"},
      {name: "Gia vị sắc", value: 85, color: "#7cb342"},
      {name: "Gỗ nhựa cưa", value: 75, color: "#8b4513"},
      {name: "Trái cây giòn", value: 65, color: "#ff4500"},
      {name: "Hổ phách ngọt", value: 60, color: "#d2691e"}
    ]
  },
  "black-opium": {
    subName: "EDP", perfumer: "Nathalie Lorson, Marie Salamagne", year: 2014, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 0, fall: 40, winter: 50 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Yves Saint Laurent Black Opium cô nàng tiệc tùng",
    metaDescription: "Đánh giá YSL Black Opium: Nước hoa gây nghiện như thuốc phiện. Cà phê đắng cháy quyện Vanilla ngọt lịm. Vua của hộp đêm và hẹn hò.",
    description: "Tuyệt đỉnh thả thính của mọi hộp đêm gọi tên Black Opium! Tổ hợp kinh điển không bao giờ sai lầm: Cà phê (Coffee) xay nhuyễn rang đen nhánh, đổ vào đầy ắp kem Vanilla xốp béo đê mê nhức nhối. Điểm xuyết chút Hồng tiêu (Pink pepper) the cay kích thích ở đầu mũi. Nó ồn ào, mời gọi, dính chặt vào khứu giác bất kỳ người đàn ông nào lướt ngang. Không phải gu gái ngoan, đây là mùi của đêm tối bùng nổ.",
    vibes: [{label: "Nữ hoàng tiệc", icon: "🍸"}, {label: "Cà phê Vani", icon: "☕"}],
    score: { scent: 9.2, uniqueness: 8.0, compliments: 9.5, value: 8.0, total: 8.6 },
    topNotes: [{name: "Quả Lê tươi (Pear)"}, {name: "Tiêu hồng the (Pink Pepper)"}, {name: "Hoa Cam"}],
    middleNotes: [{name: "Cà phê đen (Coffee)"}, {name: "Hoa Nhài lả (Jasmine)"}, {name: "Hạnh nhân đắng"}],
    baseNotes: [{name: "Vani đen sệt (Vanilla)"}, {name: "Hoắc hương đất (Patchouli)"}, {name: "Gỗ Cashmere"}],
    accords: [
      {name: "Vani mềm mượt", value: 100, color: "#ffffe0"},
      {name: "Cà phê đắng nhạt", value: 85, color: "#b8860b"},
      {name: "Ngọt điên cuồng", value: 75, color: "#dc143c"},
      {name: "Hoa trắng rụng", value: 65, color: "#f8f8ff"},
      {name: "Gia vị ran", value: 60, color: "#d2691e"}
    ]
  },
  "black-opium-le-parfum": {
    subName: "Parfum", perfumer: "YSL", year: 2022, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa YSL Black Opium Le Parfum nâng cấp vani đen",
    metaDescription: "Review Black Opium Le Parfum: Phiên bản bóp nghẹt Cà phê, đẩy mạnh 4 loại Vanilla quyện Quế. Độ mượt, xốp, mịn và sâu thẳm đỉnh nhất dòng.",
    description: "Nhân bản một thứ gây nghiện lên gấp nhiều lần! Ở bản Le Parfum, YSL đã quyết định 'chơi lớn' khi lôi tận 4 loại Vanilla thượng hạng Madagascan đập vào da thịt. Khói của Cà phê (Coffee) không còn chát nữa, nó nhường sóng để bộ sậu Vani và Quế (Cinnamon) bung tỏa hương ngòn ngọt xốp nheo nheo mượt mà. Lớp bụi mịn màng (Solar notes) phảng phất tựa như bột vàng rơi trên vai trần lấp lánh.",
    vibes: [{label: "Xốp Vani", icon: "🍦"}, {label: "Đậm mịn", icon: "💫"}],
    score: { scent: 9.3, uniqueness: 8.0, compliments: 9.2, value: 8.0, total: 8.6 },
    topNotes: [{name: "Quả Lê dập (Pear)"}, {name: "Quế già (Cinnamon)"}, {name: "Quýt xanh"}],
    middleNotes: [{name: "Hương ánh sáng (Solar Notes)"}, {name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Cam"}],
    baseNotes: [{name: "Hỗn hợp 4 loại Vani (Vanilla)"}, {name: "Cà phê Arabica (Coffee)"}, {name: "Hoắc hương hoang"}],
    accords: [
      {name: "Vani béo lợ", value: 100, color: "#ffffe0"},
      {name: "Gia vị nóng", value: 85, color: "#cd5c5c"},
      {name: "Cà phê xay", value: 75, color: "#654321"},
      {name: "Ngọt chết người", value: 65, color: "#dc143c"},
      {name: "Hoa lấp loáng", value: 60, color: "#f8f8ff"}
    ]
  },
  "cinema": {
    subName: "EDP", perfumer: "Jacques Cavallier", year: 2004, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Yves Saint Laurent Cinema thảm đỏ mộng mơ",
    metaDescription: "Đánh giá YSL Cinema EDP: Tuyệt phẩm nữ tính bị lãng quên. Hương thơm cổ điển, thanh lịch với Nhài nhuyễn ngậm Hạnh nhân (Almond), Clementine và Vani.",
    description: "Một ngôi sao bước xuống thảm đỏ với chiếc váy vàng ánh kim huy hoàng! Cinema là minh chứng rực rỡ của sự nữ tính sang trọng thập niên 2000. Cam Clementine chua nhẹ kết lại bằng lớp Hoa Hạnh nhân (Almond blossom) bùi bùi và Nhài êm ái. Mùi hương ngấm Vani và Hổ phách (Amber) dẻo dẻo, quấn quýt trên da vừa cổ điển, quyền quý lại không bị hắc già. Rất quý phu nhân đài các.",
    vibes: [{label: "Thảm đỏ sao", icon: "🌟"}, {label: "Đài các", icon: "💃"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 8.5, value: 8.5, total: 8.6 },
    topNotes: [{name: "Quả quýt Clementine"}, {name: "Hoa Hạnh nhân (Almond Blossom)"}, {name: "Hồng nhung"}],
    middleNotes: [{name: "Hoa nhài thanh (Jasmine)"}, {name: "Mẫu đơn trắng"}, {name: "Loa kèn đỏ"}],
    baseNotes: [{name: "Vani bùi (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Nhựa Benzoin (Bồ đề)"}],
    accords: [
      {name: "Hoa phơn phớt", value: 100, color: "#ff69b4"},
      {name: "Vani quánh", value: 85, color: "#ffffe0"},
      {name: "Hổ phách mịn", value: 75, color: "#d2691e"},
      {name: "Ngọt sương sương", value: 65, color: "#dc143c"},
      {name: "Cam chanh đắng", value: 60, color: "#ffff00"}
    ]
  },
  "la-nuit-de-lhomme-bleu-electrique": {
    subName: "EDT", perfumer: "Dominique Ropion", year: 2021, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 10, fall: 35, winter: 25 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa YSL La Nuit de L'Homme Bleu Électrique xanh neon",
    metaDescription: "Review La Nuit Bleu Électrique: Kẻ thay thế hoàn hảo cho bản gốc bị reformulated. Oải hương, Bạch đậu khấu cay tươi, Gừng mọng nước đỉnh chóp hẹn hò.",
    description: "Ánh sáng neon xanh rực xé toạc màn đêm Paris! Bleu Électrique đánh bật bản gốc huyền thoại đang mờ nhạt bằng sự tươi mới mãnh liệt từ Gừng (Ginger) và Cam Bergamot mọng nước. Cái note Nhục đậu khấu (Cardamom) cay the the nịnh mũi ấy vẫn còn nguyên, quấn lấy Oải hương tím (Lavender) cực kỳ lãng tử. Mùi của một trai hư có học thức, biết nắm biết buông, sát thương chí mạng cho First-date (cuộc hẹn đầu).",
    vibes: [{label: "Neon xanh", icon: "⚡"}, {label: "First-date 100%", icon: "💋"}],
    score: { scent: 9.5, uniqueness: 8.0, compliments: 9.8, value: 8.0, total: 8.8 },
    topNotes: [{name: "Bạch đậu khấu cay (Cardamom)"}, {name: "Gừng the (Ginger)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Hoa Phong lữ (Geranium)"}],
    baseNotes: [{name: "Gỗ Tuyết tùng khô (Cedar)"}, {name: "Cỏ hương bài mộc"}],
    accords: [
      {name: "Thảo mộc the", value: 100, color: "#2e8b57"},
      {name: "Gia vị sắc mát", value: 85, color: "#7cb342"},
      {name: "Gia vị ấm nóng", value: 75, color: "#d35400"},
      {name: "Oải hương bụi", value: 65, color: "#9370db"},
      {name: "Gỗ bào", value: 60, color: "#8b4513"}
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
console.log('==> BATCH 26 HOAN TAT.');
