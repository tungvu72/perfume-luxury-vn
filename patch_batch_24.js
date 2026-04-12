const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "ombre-leather": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2018, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Tom Ford Ombre Leather da thuộc bụi bặm",
    metaDescription: "Đánh giá Tom Ford Ombre Leather EDP: Hương Da thuộc (Leather) mạnh mẽ cuốn trong Hoa Nhài (Jasmine) và Bạch đậu khấu. Nam tính, phong trần như gã cao bồi viễn Tây.",
    description: "Khoác lên mình chiếc áo khoác da phong trần giữa sa mạc viễn Tây! Ombre Leather không lắt léo mượt mà như Tuscan Leather, nó là bức tranh thô mộc, trần trụi của Da thuộc (Leather) sờn rách đầy khói bụi. Càng tỏa, hương Hoa Nhài Sambac mềm mại lấp ló cùng Bạch đậu khấu len lên gọt bớt góc cạnh, biến nó thành mùi hương 'bad boy' có chiều sâu, phóng khoáng nhưng không hề thô lỗ. Mặc áo da, phóng mô tô và xịt nó là đủ để thiêu rụi mọi ánh nhìn.",
    vibes: [{label: "Bụi bặm", icon: "🏍️"}, {label: "Áo khoác da", icon: "🧥"}],
    score: { scent: 9.3, uniqueness: 8.8, compliments: 9.0, value: 8.5, total: 8.9 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}],
    middleNotes: [{name: "Da thuộc thô (Leather)"}, {name: "Hoa Nhài Sambac trắng"}],
    baseNotes: [{name: "Hổ phách tươi (Amber)"}, {name: "Rêu sồi (Oakmoss)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Da thuộc", value: 100, color: "#54301a"},
      {name: "Cháy cỏ dại (Animalic)", value: 85, color: "#8b4513"},
      {name: "Gia vị ấm", value: 75, color: "#cd5c5c"},
      {name: "Hoa trắng phơn phớt", value: 65, color: "#f0f8ff"},
      {name: "Hổ phách", value: 60, color: "#b8860b"}
    ]
  },
  "oud-wood": {
    subName: "EDP", perfumer: "Richard Herpin", year: 2007, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Tom Ford Oud Wood trầm hương hoàng gia",
    metaDescription: "Review Tom Ford Oud Wood: Chuẩn mực tinh tế bậc nhất của Trầm hương (Oud) thế giới. Vani, Tuyết tùng và Bạch đậu khấu hòa quyện nên tuyệt tác quý tộc.",
    description: "Một trong những DNA sáng giá nhất đế chế Tom Ford! Oud Wood đã định nghĩa lại khái niệm Trầm Hương (Oud) thủ cựu, biến thứ gỗ đắt đỏ, hắc bẩn phương Đông trở nên quyền lực, sạch bong mềm mượt như lụa. Mix cùng Bạch đậu khấu cay nồng và rải lên lớp Vanilla mịn màng, Oud Wood toát lên ráng dấp của một quý tộc quyền uy nhưng lại dễ gần lạ lùng. Lưu hương không quá trâu bò nhưng đẳng cấp mùi hương thì miễn chê, dân văn phòng xịt auto sang.",
    vibes: [{label: "Hoàng quyền", icon: "👑"}, {label: "Trầm lịch xưng", icon: "🪵"}],
    score: { scent: 9.5, uniqueness: 9.5, compliments: 8.8, value: 7.5, total: 8.8 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Tiêu Tứ Xuyên"}],
    middleNotes: [{name: "Gỗ Trầm hương (Oud)"}, {name: "Gỗ hồng mộc Brazil (Rosewood)"}, {name: "Gỗ đàn hương mềm"}],
    baseNotes: [{name: "Vanilla mượt"}, {name: "Đậu Tonka"}, {name: "Hổ phách"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Gỗ mục", value: 100, color: "#6b4226"},
      {name: "Gia vị cay ấm", value: 85, color: "#ff4500"},
      {name: "Trầm hương sạch", value: 75, color: "#4b3621"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Vani mịn", value: 60, color: "#f5deb3"}
    ]
  },
  "tobacco-vanille": {
    subName: "EDP", perfumer: "Olivier Gillotin", year: 2007, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 0, fall: 40, winter: 50 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Tom Ford Tobacco Vanille xì gà xa xỉ",
    metaDescription: "Đánh giá Tom Ford Tobacco Vanille: Lá thuốc lá cuộn chặt Vani ngọt đặc quánh, phủ thêm Cacao và Trái cây sấy khô. Quyến rũ, sành điệu xé nát đêm khuya.",
    description: "Bước vào một câu lạc bộ điếu cày của tầng lớp thượng lưu London! Tobacco Vanille đập vào khứu giác một lượng lớn lá Thuốc lá đắng tươi quyện thẳng với Vanilla đậm đặc dính nhớp. Đốt lên, hương Trái cây sấy khô lên men rượu cùng nhúm bột Cacao rắc mỏng lan tỏa ma mị đầy nhục dục. Ngọt ngào hư hỏng nhưng đẳng cấp, cực kì quyền lực và sang chảnh cho những đêm dạo phố mùa đông tuyết rơi lạnh buốt.",
    vibes: [{label: "Xì gà", icon: "🚬"}, {label: "Xa hoa", icon: "💎"}],
    score: { scent: 9.2, uniqueness: 9.0, compliments: 9.2, value: 8.5, total: 9.0 },
    topNotes: [{name: "Lá Thuốc lá non"}, {name: "Gia vị cay"}],
    middleNotes: [{name: "Vani béo ngậy (Vanilla)"}, {name: "Bột Cacao"}, {name: "Đậu Tonka"}, {name: "Hoa lá thuốc"}],
    baseNotes: [{name: "Trái cây sấy khô"}, {name: "Nhựa gỗ khô (Woody Notes)"}],
    accords: [
      {name: "Vani đậm đặc", value: 100, color: "#ffffe0"},
      {name: "Kẹo kẹo", value: 85, color: "#ff1493"},
      {name: "Khói thuốc", value: 75, color: "#a52a2a"},
      {name: "Gia vị nồng", value: 65, color: "#d2691e"},
      {name: "Trái cây mọng", value: 60, color: "#ff8c00"}
    ]
  },
  "tuscan-leather": {
    subName: "EDP", perfumer: "Harry Fremont", year: 2007, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Tom Ford Tuscan Leather da thuộc ngâm mâm xôi",
    metaDescription: "Đánh giá Tom Ford Tuscan Leather: Áo khoác Da thuộc đắt đỏ xoa đẫm vị Quả Mâm Xôi (Raspberry) và Nhụy hoa nghệ tây (Saffron) kiêu kỳ, sang trọng bật nhất.",
    description: "Bộ sofa da Ý thượng hạng rưới mật trái cây! Tuscan Leather không khói bụi như Ombre Leather, nó chưng cất Da thuộc (Leather) tươi đắt tiền, bóng loáng, nhẵn mịn. Cú twist thần thánh là đĩa Mâm xôi đỏ (Raspberry) chua ngọt tươi rói nổ tung khiến mùi da trở nên sexy, mọng nước và điệu đà. Cần độ ngông cuồng sành điệu, có ngông cuồng; cần giàu sang vương giả, nó dư sức cân cả bảng xếp hạng.",
    vibes: [{label: "Da xa xỉ", icon: "💼"}, {label: "Chất chơi", icon: "♠️"}],
    score: { scent: 9.4, uniqueness: 9.5, compliments: 9.0, value: 8.0, total: 9.0 },
    topNotes: [{name: "Quả Mâm xôi (Raspberry)"}, {name: "Nhụy Hoa nghệ tây (Saffron)"}, {name: "Xạ hương cỏ thơm"}],
    middleNotes: [{name: "Nhũ hương (Olibanum)"}, {name: "Hoa nhài thanh đêm"}],
    baseNotes: [{name: "Da thuộc xịn (Leather)"}, {name: "Da lộn (Suede)"}, {name: "Gỗ khô"}, {name: "Hổ phách"}],
    accords: [
      {name: "Da thuộc mịn", value: 100, color: "#8b4513"},
      {name: "Trái cây chua rực", value: 85, color: "#dc143c"},
      {name: "Quái dị", value: 75, color: "#556b2f"},
      {name: "Ngọt êm", value: 65, color: "#ffb6c1"},
      {name: "Hổ phách", value: 60, color: "#dda0dd"}
    ]
  },
  "vanilla": {
    subName: "EDP", perfumer: "Givaudan", year: 2023, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa Tom Ford Vanilla Sex vani béo ngậy nhục dục",
    metaDescription: "Review Tom Ford Vanilla Sex: Hạnh nhân bùi bốc khói cùng Vanilla đượm mùi da thịt. Một khái niệm Vanilla béo ngậy (creamy) siêu êm ái, bồng bềnh và mỏng manh.",
    description: "Dập tắt ảo tưởng về những hũ Vanilla nhàm chán ngộp thở! Trái với cái tên 'phóng túng', Vanilla Sex là cục kẹo mashmallow Vanilla hạnh nhân béo ngậy, bông xốp tan ảo trên đầu lưỡi. Điểm ăn tiền của nó là Gỗ đàn hương và rễ Hoa diên vĩ vuốt thêm độ sánh mịn (creamy) như kem tươi lướt lướt trên da thịt sưởi ấm. Giá quá đắt bóp chết số điểm nhưng nếu dư giả tậu một nhát, bạn hóa thành thỏi kem vani di động chực chờ bị nuốt chửng.",
    vibes: [{label: "Kem Vani", icon: "🍦"}, {label: "Nhục dục mềm", icon: "🛌"}],
    score: { scent: 8.5, uniqueness: 7.5, compliments: 8.5, value: 5.5, total: 7.5 },
    topNotes: [{name: "Rễ cây Diên Vĩ (Orris Root)"}, {name: "Bột Hạnh nhân"}],
    middleNotes: [{name: "Vani béo"}, {name: "Hương Hoa nhài"}, {name: "Hương động vật (Animal Notes)"}],
    baseNotes: [{name: "Vanilla nguyên sinh"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Xạ hương phấn trắng"}],
    accords: [
      {name: "Vani kem", value: 100, color: "#ffffe0"},
      {name: "Phấn mềm", value: 85, color: "#ffe4b5"},
      {name: "Gỗ đàn hương xốp", value: 75, color: "#d2b48c"},
      {name: "Nhựa ngọt", value: 65, color: "#cd853f"},
      {name: "Kẹo mịn", value: 60, color: "#ffb6c1"}
    ]
  },
  "born-in-roma-intense": {
    subName: "EDP", perfumer: "Amandine Clerc-Marie", year: 2023, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa Valentino Donna Born in Roma Intense vani đêm lộng lẫy",
    metaDescription: "Đánh giá Valentino Donna Born in Roma Intense: Bữa tiệc quẩy đêm nồng nàn Vani bọc Hoa nhài trắng muốt và Hổ phách ấm áp. Sang chảnh, nịnh mũi bám tỏa cực tốt.",
    description: "Quả bom nổ chậm cho những nữ hoàng đêm tiệc La Mã! Bản Intense bốc toàn bộ độ chua của hoa quả chói lóa đi, cô đặc vào lồng ngực Vani đượm đặc và màn tung hứng của bó Hoa Nhài nở rộ đầy khiêu khích. Càng về cuối, Benzoin và Hổ Phách hâm nóng da thịt ngấm thứ mật siêu gợi cảm, cuốn chặt và dính rịt. Thuộc hàng sát thủ diệt rộp, xịt tới đâu rớt nước dãi tới đấy dành cho mấy nàng kẹo ngọt thích nổi bật.",
    vibes: [{label: "Nữ hoàng tiệc", icon: "💃"}, {label: "Vani quyến rũ", icon: "🍮"}],
    score: { scent: 9.0, uniqueness: 8.0, compliments: 9.5, value: 8.5, total: 8.8 },
    topNotes: [{name: "Vani Bourbon chua dịu (Vanilla)"}, {name: "Benzoin"}],
    middleNotes: [{name: "Hoa Nhài sáng trắng (Jasmine)"}, {name: "Nhũ hương"}],
    baseNotes: [{name: "Hổ phách tươi ấm (Amber)"}, {name: "Vũ điệu nhựa cây xanh"}],
    accords: [
      {name: "Hổ phách ngọt", value: 100, color: "#d2691e"},
      {name: "Vani nhọn", value: 85, color: "#ffffe0"},
      {name: "Hoa trắng", value: 75, color: "#f0f8ff"},
      {name: "Phấn dịu", value: 65, color: "#ffe4c4"},
      {name: "Gia vị cay ấm", value: 60, color: "#cd5c5c"}
    ]
  },
  "uomo-born-in-roma-intense": {
    subName: "EDP", perfumer: "Guillaume Flavigny", year: 2023, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Valentino Uomo Born In Roma Intense soái ca rực lửa",
    metaDescription: "Review Valentino Uomo Born In Roma Intense: Phiên bản bốc lửa của badboy tiệm tóc. Vani đê mê, Oải hương nịnh mũi và Cỏ Hương Bài nam tính. Mùi hương auto thả thính.",
    description: "Công thức cưa gái chớp nhoáng xé nát hộp đêm! Uomo Born In Roma Intense khoanh vùng mùi hương ở chữ 'Nịnh mũi khủng khiếp'. Khai màn bằng Oải hương (Lavender) bay bổng đậm chất tiệm hớt tóc Ý, nó chuyển mượt vào trái tim Vani Bourbon xốp đặc béo ngậy. Cuối cùng, Cỏ hương bài (Vetiver) vuốt cái thơm sệt kẹo này lại, giữ vững độ oai vệ phong phanh cằm râu nam tính. Badboy áo khóa da xịt con này thề không cô nương nào né đạn nổi.",
    vibes: [{label: "Gã thợ săn", icon: "🎯"}, {label: "Xập xình", icon: "🎧"}],
    score: { scent: 9.2, uniqueness: 8.0, compliments: 9.5, value: 8.5, total: 8.8 },
    topNotes: [{name: "Oải hương tím (Lavender)"}, {name: "Vani rắc"}],
    middleNotes: [{name: "Vani Bourbon quyến rũ"}, {name: "Tiêu non"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Gỗ băm"}],
    accords: [
      {name: "Oải hương thơm lừng", value: 100, color: "#9370db"},
      {name: "Vani ngọt xốp", value: 85, color: "#fffacd"},
      {name: "Thảo mộc the", value: 75, color: "#3cb371"},
      {name: "Gỗ chẻ", value: 65, color: "#8b4513"},
      {name: "Cay nịnh mũi", value: 60, color: "#9acd32"}
    ]
  },
  "versace-bright-crystal": {
    subName: "EDT", perfumer: "Alberto Morillas", year: 2006, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 40, summer: 50, fall: 5, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Versace Bright Crystal thỏi pha lê hồng tiểu thư",
    metaDescription: "Đánh giá Versace Bright Crystal EDT: Biểu tượng kinh điển của sự trong sáng mỏng manh. Hoa Mẫu đơn, Yuzu và Lựu róc rách làm nên mùi hương văn phòng nữ vạn người mê.",
    description: "Nhắc đến mùi hương quốc dân 10 điểm trong sáng sạch sẽ, gọi tên Viên Pha lê Hồng của Versace! Bright Crystal chẻ đôi trái Yuzu Nhật Bản và quả Lựu căng cực vắt thẳng vào khứu giác the mát mượt mà. Hoa Mẫu đơn, Hoa Sen trắng mọc lên e ấp, tỏa hơi sương tinh khôi tạo phong thái cô em hàng xóm dịu hiền. Dễ dùng, cực kì an toàn cho đi học, đi làm, nhắm mắt xịt bừa vẫn ra dáng yểu điệu thục nữ đáng yêu vô ngần.",
    vibes: [{label: "Tiểu thư", icon: "🎀"}, {label: "Pha lê vỡ", icon: "💎"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 8.5, value: 9.0, total: 8.4 },
    topNotes: [{name: "Quả Yuzu (Chanh Nhật)"}, {name: "Lựu (Pomegranate)"}, {name: "Đá lạnh (Ice)"}],
    middleNotes: [{name: "Hoa Mẫu đơn (Peony)"}, {name: "Hoa Sen (Lotus)"}, {name: "Hoa Mộc lan"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Gỗ Gụ đỏ (Mahogany)"}, {name: "Hổ phách tươi"}],
    accords: [
      {name: "Hoa phất phơ", value: 100, color: "#ffb6c1"},
      {name: "Cam chanh vắt", value: 85, color: "#ffff00"},
      {name: "Tươi ướp lạnh", value: 75, color: "#add8e6"},
      {name: "Gỗ ngâm", value: 65, color: "#a0522d"},
      {name: "Hồng leo", value: 60, color: "#ff1493"}
    ]
  },
  "crystal-noir-eau-de-toilette": {
    subName: "EDT", perfumer: "Antoine Lie", year: 2004, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Versace Crystal Noir viên pha lê đen tối",
    metaDescription: "Review Versace Crystal Noir EDT: Bóng đêm dụ hoặc từ Hoa Dành Dành (Gardenia) tắm trong Dừa (Coconut) béo và các loại gia vị nồng hạt. Huyền bí và lả tính không đùa.",
    description: "Thỏi Pha lê đen u tối, ma mị nhưng béo ngậy đê mê! Crystal Noir tung hỏa mù gia vị bằng Gừng và Tiêu xay, xộc thẳng lên mũi rát sướng. Nhưng ở cốt tủy, nó xé đôi trái Dừa (Coconut) nạo vụn, xoa mịn lên cánh Hoa Dành dành trắng buốt rên rỉ (Lactonic - hơi hướng sữa béo chát). Ngửi rất lạ, u ám ngái ngái nhưng kích thích tò mò tột độ. Một cực phẩm clubbing, sang trọng, đầy mưu mô của hội phu nhân thứ thiệt.",
    vibes: [{label: "Bóng tối", icon: "🌑"}, {label: "Sữa dừa béo", icon: "🥥"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 8.5, value: 8.5, total: 8.8 },
    topNotes: [{name: "Tiêu sọ (Pepper)"}, {name: "Gừng non (Ginger)"}, {name: "Bạch đậu khấu"}],
    middleNotes: [{name: "Dừa bào (Coconut)"}, {name: "Hoa Dành dành (Gardenia)"}, {name: "Hoa Cam"}, {name: "Hoa mẫu đơn đoan trang"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Xạ hương"}, {name: "Hổ phách"}],
    accords: [
      {name: "Gia vị tươi mát", value: 100, color: "#7cb342"},
      {name: "Gia vị ấm nồng", value: 85, color: "#d2691e"},
      {name: "Hoa trắng ma", value: 75, color: "#f0f8ff"},
      {name: "Cốt dừa", value: 65, color: "#f5deb3"},
      {name: "Sữa kem xốp", value: 60, color: "#fff0f5"}
    ]
  },
  "eros-edp": {
    subName: "EDP", perfumer: "Olivier Pescheux", year: 2020, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 15, fall: 25, winter: 35 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Versace Eros EDP thần tình yêu nam tính",
    metaDescription: "Đánh giá Versace Eros EDP: Vị Nam Thần tình yêu củng cố đế chế. Táo xanh, Bạc hà đay xiết phủ lớp Vani răn rỏi, gỗ mịn. Trưởng thành hơn bản EDT, nịnh mũi không phanh.",
    description: "Ông vua thả thính vĩnh cửu vừa tu thành chính quả! Eros EDP lấy bản nhạc clubbing ngọt lịm huyền thoại của EDT, gọt bớt sự choàng ngợp trẻ trâu bồng bột. Cú mở màn the buốt mũi của Bạc hà kẹp trong Táo kẹo siêu bám nhốt. Lớp Vani quyện Cỏ và Ambroxan rực lên sưởi ấm toàn bộ khứu giác. Bản EDP này mượt mà, sâu sắc và gân guốc (woody) hơn, vẫn sát gái nhưng ở một đẳng cấp đàn ông bảnh bao chứ không còn loi choi.",
    vibes: [{label: "Thần tình yêu", icon: "🏹"}, {label: "Clubbing", icon: "🪩"}],
    score: { scent: 9.0, uniqueness: 8.0, compliments: 9.5, value: 9.0, total: 8.9 },
    topNotes: [{name: "Bạc hà ngâm sương (Mint)"}, {name: "Kẹo Táo đỏ (Candy Apple)"}, {name: "Chanh vàng"}, {name: "Quýt cam"}],
    middleNotes: [{name: "Ambroxan rựa"}, {name: "Hoa Phong lữ (Geranium)"}, {name: "Cây xô thơm"}],
    baseNotes: [{name: "Vani sệt (Vanilla)"}, {name: "Gỗ Tuyết tùng"}, {name: "Gỗ Đàn hương xanh"}, {name: "Da lộn"}],
    accords: [
      {name: "Chanh bạc hà", value: 100, color: "#ffff00"},
      {name: "Thảo mộc xanh", value: 85, color: "#2e8b57"},
      {name: "Tươi mơn mởn", value: 75, color: "#008000"},
      {name: "Vani dầy", value: 65, color: "#ffffe0"},
      {name: "Gỗ gân guốc", value: 60, color: "#8b4513"}
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
console.log('==> BATCH 24 HOAN TAT.');
