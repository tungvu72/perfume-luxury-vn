const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "versace-eros-edt": {
    subName: "EDT", perfumer: "Aurelien Guichard", year: 2012, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 15, fall: 30, winter: 35 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Versace Eros EDT nam thần trăng hoa",
    metaDescription: "Đánh giá Versace Eros EDT: Tượng đài nước hoa clubbing (đi quẩy). Bạc hà mát lạnh nhốt trong vỏ bọc Vani, Đậu Tonka béo ngậy. Sát thủ săn mồi bóng đêm.",
    description: "Nhắc đến đi quẩy, dân chơi không ai không biết Vị Thần Tình Yêu mang tên Eros! Bản EDT là người anh cả khai sinh ra đế chế 'ngọt lịm sát gái'. Phát xịt đầu tung ra vị the mát của lá Bạc hà và Táo xanh giòn rụm nịnh mũi đến mức vô lý. Nhưng điểm lừa tình nằm ở lớp base: Vanilla, Đậu Tonka ùa lên béo ngậy, ngọt đặc sánh. Trẻ trung, ồn ào và đầy thú tính, xịt Eros đi bar chính là dán chữ 'trai hư' lên trán.",
    vibes: [{label: "Ăn chơi", icon: "🥃"}, {label: "Sát gái", icon: "🤤"}],
    score: { scent: 8.5, uniqueness: 7.5, compliments: 9.5, value: 9.0, total: 8.6 },
    topNotes: [{name: "Lá Bạc hà the (Mint)"}, {name: "Táo xanh (Apple)"}, {name: "Chanh vàng (Lemon)"}],
    middleNotes: [{name: "Đậu Tonka xốp (Tonka Bean)"}, {name: "Ambroxan"}, {name: "Hoa Phong lữ"}],
    baseNotes: [{name: "Vani béo (Vanilla)"}, {name: "Gỗ Tuyết tùng"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Vani đặc", value: 100, color: "#ffffe0"},
      {name: "Bạc hà xanh", value: 85, color: "#2e8b57"},
      {name: "Thảo mộc the", value: 75, color: "#008000"},
      {name: "Cay tươi", value: 65, color: "#9acd32"},
      {name: "Hổ phách ngọt", value: 60, color: "#d2691e"}
    ]
  },
  "versace-eros-energy-edp": {
    subName: "EDP", perfumer: "Aurelien Guichard", year: 2024, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 30, summer: 50, fall: 15, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Versace Eros Energy bùng nổ năng lượng vàng",
    metaDescription: "Review Versace Eros Energy: Phiên bản ngập ngụa trái cây họ cam chanh (Citrus). Bưởi, Cam đỏ, Chanh quyện Gỗ xạ hương, giải nhiệt mùa hè cực sướng.",
    description: "Eros lột xác khỏi ánh đèn hộp đêm, lao ra bãi biển đầy nắng! Energy như một ly nước ép tổng hợp vắt kiệt Chanh vàng, Cam cam đỏ, Bưởi tươi mọng rót ngập đá. Không còn sự béo rít mũi của Vani, nó thế chỗ bằng sự khô ráo, nam tính của Gỗ và Xạ hương (Musky). Dành cho mấy chàng trai cơ bắp, năng động, cần một làn sóng cuồng nhiệt đạp tan sức nóng nực của mùa hè.",
    vibes: [{label: "Nắng chói", icon: "☀️"}, {label: "Cam chanh vắt", icon: "🍋"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 8.5, total: 8.4 },
    topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Cam đỏ (Blood Orange)"}, {name: "Bưởi (Grapefruit)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hạt tiêu hồng"}, {name: "Nhựa gỗ khô"}],
    baseNotes: [{name: "Xạ hương sạch (Musk)"}, {name: "Gỗ băm (Woody)"}, {name: "Hoắc hương trắng"}],
    accords: [
      {name: "Cam chanh tươi", value: 100, color: "#ffff00"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Gia vị sảng khoái", value: 75, color: "#7cb342"},
      {name: "Xạ hương da thịt", value: 65, color: "#e6e6fa"},
      {name: "Gỗ mục", value: 60, color: "#8b4513"}
    ]
  },
  "versace-eros-flame": {
    subName: "EDP", perfumer: "Olivier Pescheux", year: 2018, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Versace Eros Flame ngọn lửa màu đỏ",
    metaDescription: "Đánh giá Versace Eros Flame: Chàng Eros chững chạc hơn với vị chua đắng của Cam Chinotto và Tiêu đen, rẽ lối vào Vanilla ấm áp. Bám tỏa trâu, cực manly.",
    description: "Ngọn lửa nồng thắm thiêu rụi màn đêm của Versace! Eros Flame sửa lại cái tính non tơ của bản EDT bằng cách đập vào mặt một rổ quả Cam đắng Ý (Chinotto) quyện Tiêu đen the cay nóng rực. Cú chuyển biến từ lạnh ngắt sang nóng ran, rồi lại dìm vào sự mượt mà của Vani và Gỗ Tuyết tùng biến Flame thành gã trai trải đời, thú vị và ấm áp lạ lùng. Ít dập khuôn mác 'badboy', xịt đi hẹn hò bao mlem.",
    vibes: [{label: "Lửa đỏ", icon: "🔥"}, {label: "Cay ấm", icon: "🌶️"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.0, value: 9.0, total: 8.8 },
    topNotes: [{name: "Cam đắng Chinotto"}, {name: "Chanh vàng (Lemon)"}, {name: "Tiêu đen (Pepper)"}],
    middleNotes: [{name: "Hoa hồng gai"}, {name: "Cây hương thảo"}, {name: "Tiêu tứ xuyên"}],
    baseNotes: [{name: "Vani bùi (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ Tuyết tùng"}],
    accords: [
      {name: "Chanh cam ngọt", value: 100, color: "#ffff00"},
      {name: "Cay nồng", value: 85, color: "#7cb342"},
      {name: "Vani phấn", value: 75, color: "#ffffe0"},
      {name: "Thảo mộc thanh", value: 65, color: "#2e8b57"},
      {name: "Gỗ sấy", value: 60, color: "#8b4513"}
    ]
  },
  "versce-pour-homme": {
    subName: "EDT", perfumer: "Alberto Morillas", year: 2008, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Versace Pour Homme tinh tươm sơ mi trắng",
    metaDescription: "Review Versace Pour Homme: Tuyệt phẩm mùa hè. Chanh vàng, hoa Neroli và cam Bergamot rực rỡ tươi mát. Mùi hương auto gắn liền với áo sơ mi trắng, văn phòng lịch sự.",
    description: "Nếu có một chai nước hoa mùa hè không bao giờ lỗi thời, không bao giờ mất giá trị, đó là Versace Pour Homme! Tổ hợp Chanh non vắt cùng Hoa Cam (Neroli) bung xõa rực rỡ dưới nắng, sạch bong bốc hơi sắc kim loại. Một chàng trai mặc sơ mi trắng mỏng, tóc xịt gôm tươm tất, bước ra từ nhà tắm đầy bọt xà phòng hoa dạ lan hương (Hyacinth). 10 điểm dễ dùng, xịt đi làm, đi học, đi chơi đều sảng khoái vạn người mê.",
    vibes: [{label: "Sơ mi trắng", icon: "👔"}, {label: "Sạch sẽ", icon: "🧼"}],
    score: { scent: 9.2, uniqueness: 7.5, compliments: 9.0, value: 9.5, total: 8.8 },
    topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Cam Bergamot"}, {name: "Hoa Cam (Neroli)"}],
    middleNotes: [{name: "Hoa Lan dạ hương (Hyacinth)"}, {name: "Cây xô thơm"}, {name: "Lan tỏa Gỗ Tuyết tùng"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Xạ hương sạch (Musk)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Cam chanh bay", value: 100, color: "#ffff00"},
      {name: "Thảo mộc dịu", value: 85, color: "#2e8b57"},
      {name: "Cay tươi the", value: 75, color: "#7cb342"},
      {name: "Hoa phất phơ", value: 65, color: "#ffb6c1"},
      {name: "Hoa hồng sương", value: 60, color: "#ff1493"}
    ]
  },
  "dylan-blue": {
    subName: "EDT", perfumer: "Alberto Morillas", year: 2016, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 35, fall: 25, winter: 15 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Versace Pour Homme Dylan Blue đại dương nam tính",
    metaDescription: "Đánh giá Versace Dylan Blue: Bản giao hưởng Thủy Sinh (Aquatic) và Ambroxan nhức nách. Rất mát, rất nhang khói, đa dụng mọi mùa, cưa đổ mọi cô nàng.",
    description: "Con bài đa năng 'Versatile' đáng mua bậc nhất mọi thời đại nhà Versace! Dylan Blue múc trọn sự tươi mát của dòng nước biển (Water Notes) quyện Bưởi đắng, rồi sấy khô mọi thứ bằng lượng lớn Ambroxan và Nhang khói (Incense) bí ẩn. Xịt mùa hè thì mát mẻ sảng khoái, xịt mùa thu đông thì ấm khói quyến rũ. Nam tính trần trụi, bụi bặm nhưng không xộc xệch, mặc đồ gì ướp mùi này cũng thành 'trẩu hóa bảnh'.",
    vibes: [{label: "Đa dụng", icon: "🔄"}, {label: "Đại dương cạn", icon: "🌊"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 9.2, value: 9.5, total: 8.7 },
    topNotes: [{name: "Nước biển (Water Notes)"}, {name: "Cam Bergamot"}, {name: "Bưởi bóc (Grapefruit)"}],
    middleNotes: [{name: "Ambroxan rực"}, {name: "Tiêu đen (Pepper)"}, {name: "Lá Violet"}],
    baseNotes: [{name: "Nhang khói trầm (Incense)"}, {name: "Xạ hương"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Hổ phách ấm", value: 100, color: "#d2691e"},
      {name: "Cam chanh đắng", value: 85, color: "#ffff00"},
      {name: "Cay nhọn", value: 75, color: "#7cb342"},
      {name: "Xạ hương đê mê", value: 65, color: "#e6e6fa"},
      {name: "Biển cả mặn", value: 60, color: "#4fc3f7"}
    ]
  },
  "spicebomb-extreme": {
    subName: "EDP", perfumer: "Carlos Benaim, Jean-Christophe Herault", year: 2015, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 0, fall: 40, winter: 50 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Viktor & Rolf Spicebomb Extreme vũ khí sát thương",
    metaDescription: "Review Spicebomb Extreme: Trái lựu đạn Vani nhồi đầy Thuốc lá, Quế cạo và Rượu Bourbon. Mùi hương cay ấm bùng nổ, quyến rũ chí mạng mùa noel tuyết lạnh.",
    description: "Quả lựu đạn chốt hạ mọi ánh nhìn trong đêm tiệc tuyết phủ! Spicebomb Extreme đúng tên gọi, rắc cả mớ Gia vị cay nóng ran (Tiêu, Thì là, Quế) ụp thẳng vào chóp mũi cực bốc. Nhưng ngay sau đó, Thứ Thuốc là khô (Tobacco) ướp Rượu Bourbon sóng sánh và Vani xốp sệt len lén ôm ấp làn da, tạo độ ngọt cay the béo lả lơi. Sát thương của em này nằm ở sức bám tỏa trâu bò và độ ngầu lòi khó ai bì kịp.",
    vibes: [{label: "Quả bom ấm", icon: "💣"}, {label: "Thuốc lá rượu", icon: "🥃"}],
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.8, value: 8.5, total: 9.2 },
    topNotes: [{name: "Thì là trắng (Cumin)"}, {name: "Cánh hoa nghệ tây (Saffron)"}],
    middleNotes: [{name: "Quế già (Cinnamon)"}, {name: "Tiêu đen vụn"}],
    baseNotes: [{name: "Vani béo xốp (Vanilla)"}, {name: "Thuốc lá non (Tobacco)"}, {name: "Rượu Bourbon"}],
    accords: [
      {name: "Vani mịn màng", value: 100, color: "#ffffe0"},
      {name: "Thuốc lá điếu", value: 85, color: "#b8860b"},
      {name: "Gia vị cay cháy", value: 75, color: "#cd5c5c"},
      {name: "Ngọt lịm", value: 65, color: "#dc143c"},
      {name: "Quế thanh tung", value: 60, color: "#d2691e"}
    ]
  },
  "alexandria-ii": {
    subName: "EDP", perfumer: "Chris Maurice", year: 2012, gender: "unisex", longevity: 9, sillage: 9,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Xerjoff Alexandria II đế chế phồn vinh",
    metaDescription: "Đánh giá Xerjoff Alexandria II EDP: Mùi hương xa xỉ của bậc đế vương. Oải hương nồng nàn quyện Gỗ cẩm lai, Trầm hương (Oud) sạch muốt và Vani.",
    description: "Mở cánh cửa lăng mộ cổ Ai Cập ngập vàng ngọc! Alexandria II là một trong số ít mùi hương mang lại cảm giác vương quyền giàu sang đỉnh cao đáng đồng tiền bát gạo. Nó nhuyễn nát Hoa Oải hương (Lavender) thơm lừng xoa lên Gỗ Trầm hương (Oud) sạch tinh tươm và Gỗ cẩm lại đỏ chót. Kẻ thống trị càng khô xuống càng rắc thêm chút Phấn và Amber quyến luyến. Cần quyền lực, cần uy nghiêm, cần phú quý - xịt Alexandria II.",
    vibes: [{label: "Đế vương", icon: "🏰"}, {label: "Vàng ròng", icon: "💰"}],
    score: { scent: 9.6, uniqueness: 9.5, compliments: 9.0, value: 8.0, total: 9.0 },
    topNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Gỗ hồng mộc Palisander (Rosewood)"}],
    middleNotes: [{name: "Hoa linh lan (Lily)"}, {name: "Hoa Hồng lả"}, {name: "Táo tuyết"}],
    baseNotes: [{name: "Gỗ Trầm hương sang (Oud)"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Amber"}, {name: "Vani rưới"}],
    accords: [
      {name: "Gỗ đàn hồi", value: 100, color: "#8b4513"},
      {name: "Hổ phách ngọt bùi", value: 85, color: "#d2691e"},
      {name: "Phấn mịn", value: 75, color: "#ffe4c4"},
      {name: "Gia vị cay đắt", value: 65, color: "#cd5c5c"},
      {name: "Trầm sạch", value: 60, color: "#54301a"}
    ]
  },
  "xerjoff-casamorati-mefisto": {
    subName: "EDP", perfumer: "Casamorati", year: 2009, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 45, summer: 45, fall: 5, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Xerjoff Casamorati Mefisto nam thần chải chuốt",
    metaDescription: "Review Xerjoff Casamorati Mefisto: Bức tranh siêu nét của Chanh Ý, Bưởi đắng, Oải hương và Hoa Diên vĩ (Iris). Đẳng cấp xa xỉ của mùi sơ mi hoàng gia.",
    description: "Tuyệt tác nâng cấp sự tươm tất lên tầm kiệt tác nghệ thuật! Mefisto không chỉ là Cam chanh thông thường, bộ ba Bưởi, Chanh vàng rực và Cam Bergamot Ý của nó cắn ngập răng trong nước ép đắt tiền. Sự xuất hiện của Oải hương (Lavender), Hoa Hồng và Hoa Diên vĩ (Iris) lấn át phơn phớt, rải một lớp phấn mượt như vải lụa xanh. Nam giới mặc sơ mi họa tiết cổ Cuba dạo chơi ven biển Napoli xịt em nó thì sát rộp màng sương.",
    vibes: [{label: "Quý tộc Ý", icon: "🥂"}, {label: "Sang xịn", icon: "💎"}],
    score: { scent: 9.2, uniqueness: 8.5, compliments: 9.0, value: 8.0, total: 8.7 },
    topNotes: [{name: "Bưởi tép mọng (Grapefruit)"}, {name: "Chanh vàng rực (Lemon)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Hoa Diên vĩ (Iris)"}, {name: "Hoa Hồng quyến rũ"}],
    baseNotes: [{name: "Xạ hương xốp"}, {name: "Gỗ tuyết tùng"}, {name: "Hổ phách tươi"}],
    accords: [
      {name: "Cam chanh đỉnh cao", value: 100, color: "#ffff00"},
      {name: "Phấn mềm mại", value: 85, color: "#ffe4c4"},
      {name: "Thảo mộc thanh", value: 75, color: "#2e8b57"},
      {name: "Cay sắc sảo", value: 65, color: "#7cb342"},
      {name: "Gỗ khô", value: 60, color: "#8b4513"}
    ]
  },
  "dama-bianca": {
    subName: "EDP", perfumer: "Xerjoff", year: 2012, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 30, fall: 20, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Xerjoff Dama Bianca thiên nga tuyết trắng",
    metaDescription: "Đánh giá Xerjoff Dama Bianca EDP: Vani xốp nheo nhẹ nhàng ngâm Quất hoàng kim (Kumquat) chua ngọt cùng Hoa Violet đầy mộng mị. Tiểu thư vương giả kiêu kỳ.",
    description: "Nàng Bạch tuyết tỉnh ngủ giữa rừng cây mùa xuân! Dama Bianca dịch ra là 'Bạch Hậu', và mùi hương đúng chất lông vũ mềm mượt vuốt ve. Một rổ Quất quả (Kumquat) chua nhẹ thanh tao lặn hụp trong lớp kem Vani bùi béo dính cả vụn Mạch nha (Malt). Những cánh Violet và Diên vĩ đan xen, thả lớp phấn lửng lơ trong gió. Quyến rũ kiểu e ấp, tinh khôi, cực kỳ nịnh mũi và đẳng cấp dành cho bậc phu nhân hoàng thất.",
    vibes: [{label: "Bạch hậu", icon: "🦢"}, {label: "Mỏng manh", icon: "❄️"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 8.8, value: 8.0, total: 8.7 },
    topNotes: [{name: "Quất hoàng kim (Kumquat)"}, {name: "Chanh mộc"}],
    middleNotes: [{name: "Hoa Violet (Hoa tử罗兰)"}, {name: "Hoa Diên vĩ (Iris)"}, {name: "Linh lan trắng"}],
    baseNotes: [{name: "Vanilla nguyên xốp (Vanilla)"}, {name: "Mạch nha quyện (Malt)"}, {name: "Xạ hương ngà (Musk)"}],
    accords: [
      {name: "Phấn xốp dịu", value: 100, color: "#eedc82"},
      {name: "Vani kem mịn", value: 85, color: "#ffffe0"},
      {name: "Tím mộng mị", value: 75, color: "#8a2be2"},
      {name: "Hoa lá nhẹ", value: 65, color: "#ff69b4"},
      {name: "Cam chanh đắng", value: 60, color: "#ffff00"}
    ]
  },
  "erba-pura": {
    subName: "EDP", perfumer: "Christian Carbonnel", year: 2019, gender: "unisex", longevity: 8, sillage: 9,
    seasons: { spring: 30, summer: 35, fall: 20, winter: 15 }, dayNight: { day: 55, night: 45 },
    seoTitle: "Nước hoa Xerjoff Erba Pura chảo trái cây hóa học",
    metaDescription: "Review Xerjoff Erba Pura: Quả bom trái cây (Fruity) và Xạ hương (Musk) ngọt xé mũi. Tỏa hương xuyên thủng giông bão, phù hợp nổi bật nhưng dễ gây sốc.",
    description: "Một chảo Trái cây lên men kẹo ngọt khét lẹt ném cả mảng Xạ hương quái thú! Xerjoff Erba Pura là đỉnh chóp của mảng 'hương tổng hợp' dính nhớt, the the trái cây chua ngọt chói chang cắn nát khứu giác. Lưu hương, tỏa hương thuộc dạng vô biên dội boom cả khán phòng. Có người gọi nó là thiên đường mật ngọt, kẻ khạc nhổ kêu ngáo đá tổng hợp. Tựu chung lại, xịt nó, bạn là trung tâm dải ngân hà, không sai nửa lời.",
    vibes: [{label: "Ăn chơi xả láng", icon: "🍹"}, {label: "Quái vật xé mũi", icon: "💣"}],
    score: { scent: 7.5, uniqueness: 8.5, compliments: 8.5, value: 7.5, total: 7.8 },
    topNotes: [{name: "Cam ruột đỏ (Orange)"}, {name: "Chanh vàng Sicilian"}, {name: "Cam Bergamot Calabrian"}],
    middleNotes: [{name: "Trái cây sấy khô lên men (Fruity Notes)"}],
    baseNotes: [{name: "Xạ hương động vật (Musk)"}, {name: "Vani đanh đỏ (Vanilla)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Chanh cam gắt", value: 100, color: "#ffff00"},
      {name: "Trái cây hóa học", value: 85, color: "#ff4500"},
      {name: "Ngọt phè phè", value: 75, color: "#dc143c"},
      {name: "Xạ hương quái", value: 65, color: "#e6e6fa"},
      {name: "Phấn gắt", value: 60, color: "#d2b48c"}
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
console.log('==> BATCH 25 HOAN TAT.');
