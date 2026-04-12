const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "jpg-le-male-elixir": {
    subName: "Elixir Parfum", perfumer: "Quentin Bisch", year: 2023, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa nam JPG Le Male Elixir mạ vàng óng ả",
    metaDescription: "Đánh giá JPG Le Male Elixir: Thủy thủ lột xác thành tay chơi thứ thiệt dính đầy mật ong ngâm Vani ngọt lịm. Quái vật tỏa hương clubbing mùa đông.",
    description: "Nếu Le Male là lính thủy đánh bộ, thì Le Male Elixir chính là thủy thủ khoác áo giáp vàng được nung chảy trong ánh lửa. Hương thơm đặc quánh, béo ngậy tột đỉnh của Vani đun sôi cùng Mật ong (Honey) óng rực rỡ, lót dưới là lớp Thuốc lá (Tobacco) khô ấm nóng ruột gan. Ngọt lịm vỡ nát, tỏa hương mãnh liệt như thiêu như đốt - đây là vũ khí hạng nặng tuyệt đối chỉ dành cho những đêm bar sàn mùa đông bung xõa. Lưu bám như một lớp sơn dính chắt trên da thịt.",
    vibes: [{label: "Clubbing", icon: "🥃"}, {label: "Xập xình", icon: "✨"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Bạc hà (Mint)"}],
    middleNotes: [{name: "Vani (Vanilla)"}, {name: "Bạch đậu khấu (Cardamom)"}],
    baseNotes: [{name: "Mật ong (Honey)"}, {name: "Thuốc lá (Tobacco)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Mật ong", value: 75, color: "#daa520"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Hổ phách", value: 60, color: "#d2691e"}
    ]
  },
  "jpg-le-male-le-parfum": {
    subName: "Le Parfum", perfumer: "Quentin Bisch, Nathalie Gracia-Cetto", year: 2020, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa nam JPG Le Male Le Parfum sĩ quan đen bí ẩn",
    metaDescription: "Review JPG Le Male Le Parfum: Chàng sĩ quan khoác áo choàng hoa Diên Vĩ phấn bùi, quyện Vani quấn lá Bạch đậu khấu cay ấm. Sát gái lịch lãm nhất JPG.",
    description: "Phiên bản được đánh giá là 'lịch sự và sát gái ngầm' nhất của nhà Le Male. Chàng sĩ quan khoác chiếc áo màu đen tuyền từ bỏ sự ồn ào. Bạch đậu khấu (Cardamom) cay ấm hòa nhịp cùng cánh Oải hương (Lavender) sâu thẳm. Mùi hương mài mòn đi sự ngọt ngán, thay vào đó là một chút kem bùi của Hoa Diên Vĩ (Iris) quyện Vani sấy khô, sang trọng và trầm tĩnh hơn rất nhiều. Phù hợp cho những buổi hẹn hò dưới nến râm ran đầy bí ẩn.",
    vibes: [{label: "Bí ẩn", icon: "♟️"}, {label: "Lịch lãm", icon: "🕴️"}],
    score: { scent: 9.2, uniqueness: 8.5, compliments: 9.2, value: 8.8, total: 8.9 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}],
    middleNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Hoa Diên Vĩ (Iris)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hương phương đông (Oriental Notes)"}, {name: "Gỗ (Woody Notes)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Oải hương", value: 75, color: "#9370db"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "jpg-ultra-male": {
    subName: "EDT Intense", perfumer: "Francis Kurkdjian", year: 2015, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa JPG Ultra Male quái thú clubbing tay chơi",
    metaDescription: "Review JPG Ultra Male: Vua của vũ trường. Mất kiểm soát với mứt Lê (Pear) ngâm Vani và Quế. Ngọt ngào, nịnh mũi vô cùng tận, đi club bao dính cục.",
    description: "Huyền thoại bất tử của những đêm clubbing điên rồ! Ultra Male tự xưng vương với cú cào cấu đầu tiên của Quả Lê (Pear) ngào đường ngọt lịm mọng nước, tiếp theo xát thêm Quế (Cinnamon) cay rát và nhấn chìm trong biển Vani cuồng nộ. Nó ầm ĩ, nó bad boy chính hiệu, cởi trần và thách thức cả DJ đập sập sàn. Nếu bạn cần một mùi hương 'đi quẩy' phá đảo mọi mũi gái trong bán kính 2m, xin mời đón lấy Vua Ultra Male.",
    vibes: [{label: "Quẩy nát", icon: "🍾"}, {label: "Sát gái", icon: "😈"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Quả Lê (Pear)"}, {name: "Bạc hà (Mint)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Xô Thơm (Clary Sage)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Tuyết tùng (Cedar)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Trái cây", value: 85, color: "#ff8c00"},
      {name: "Thảo mộc", value: 75, color: "#2e8b57"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Quế", value: 60, color: "#cd853f"}
    ]
  },
  "jimmy-choo-i-want-choo": {
    subName: "EDP", perfumer: "Louise Turner", year: 2020, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 15, fall: 35, winter: 30 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa nữ Jimmy Choo I Want Choo ngọt ngào mê đắm",
    metaDescription: "Đánh giá Jimmy Choo I Want Choo: Quả đào (Peach) chín mọng nhỏ giọt trên Hoa Nhài và Vani, mang lại dáng vóc tiểu thư đi tiệc sành điệu lung linh.",
    description: "'Tôi muốn em' - Một tuyên ngôn ngọt lịm từ Jimmy Choo. I Want Choo mở ra mọng nước như đang cắn ngập một Quả Đào (Peach) ruột vàng chín mềm nhễ nhại sương. Ngay sau đó, thảm Hoa Nhài (Jasmine) trổ bung trắng muốt và ôm siết vào lớp Vani sánh mịn ở dải hương cuối. Mùi hương toát lên vẻ tiểu thư sành điệu, đỏm dáng lóng lánh mang giày gót nhọn đang kiêu kỳ sải bước vào đêm tiệc.",
    vibes: [{label: "Tiểu thư", icon: "👠"}, {label: "Sành điệu", icon: "💅"}],
    score: { scent: 8.5, uniqueness: 7.5, compliments: 8.5, value: 8.5, total: 8.2 },
    topNotes: [{name: "Quả Đào (Peach)"}, {name: "Cam Mandarin"}],
    middleNotes: [{name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Huệ đỏ (Red Lily)"}],
    baseNotes: [{name: "Vani (Vanilla)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "vanilla-28": {
    subName: "EDP", perfumer: "Mona Kattan", year: 2018, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa vùng vịnh Kayali Vanilla 28 ngon như bánh",
    metaDescription: "Review Kayali Vanilla 28 EDP: Đường nâu cô đặc bám nướng cháy trên Vani và Hổ Phách xực nức mũi. Vua layering (phối mùi) của giới ghiền hương ngọt.",
    description: "Nhà Kayali chưa bao giờ làm dân cuồng ngọt (Gourmand) thất vọng, và Vanilla 28 là vedette vĩnh cửu. Không phải Vani trong mút kem, mà đây là Vani Madagascar đang bị Đôn (Brown Sugar) đun nhỏ lửa xém mịn màn thành caramel. Phảng phất cái ấm nồng của Hổ Phách ngả vàng đượm. Nó ngon, nó ngon một cách muốn ăn thịt được! Khả năng layer (xịt đè mài) của chai này với các mùi hương khác là vô địch thiên hạ.",
    vibes: [{label: "Ngon miệng", icon: "🍮"}, {label: "Ấm áp", icon: "🍂"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 9.0, value: 8.0, total: 8.4 },
    topNotes: [{name: "Hoa Lan (Orchid)"}, {name: "Hoa Nhài (Jasmine)"}],
    middleNotes: [{name: "Đường Nâu (Brown Sugar)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    baseNotes: [{name: "Hương Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#d2691e"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Vani", value: 65, color: "#f5f5dc"},
      {name: "Cay ấm", value: 60, color: "#cd853f"}
    ]
  },
  "angels-share": {
    subName: "EDP", perfumer: "Benoist Lapouza", year: 2020, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Kilian Angels' Share mứt rượu Cognac thần thánh",
    metaDescription: "Đánh giá Kilian Angels' Share: Ly rượu Cognac đắt tiền ngâm mọng Quế sấy, Vani và Kẹo Praline. Kiệt tác gây nghiện của giới thượng lưu vào mùa đông.",
    description: "'Phần của những Thiên Thần' là giọt rượu Cognac bốc hơi từ những thùng ủ gỗ sồi. Tiên tửng đóa vương miện cho kiệt tác này bằng một chùm Rượu Cognac ngùn ngụt lửa. Tiếp đó rắc ngập Quế khô (Cinnamon) cay tê, lót dạ mâm Kẹo hạt dẻ Praline nướng chín quết Vani béo ngậy cực kỳ sang chảnh và lãng mạn. Ngửi Angels' Share vào đêm Giáng sinh giống như nhấp một ly rượu thuốc nổ trong lò sưởi ấm cúng bời bời. Quá xuất sắc!",
    vibes: [{label: "Thượng lưu", icon: "🥃"}, {label: "Say đắm", icon: "✨"}],
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.5, value: 8.5, total: 9.1 },
    topNotes: [{name: "Rượu Cognac"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ Sồi (Oak)"}],
    baseNotes: [{name: "Kẹo Praline (Praline)"}, {name: "Vani (Vanilla)"}, {name: "Đàn hương trắng"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay ấm", value: 85, color: "#d2691e"},
      {name: "Ngọt ngào", value: 75, color: "#ff4500"},
      {name: "Vani", value: 65, color: "#f5f5dc"},
      {name: "Quế", value: 60, color: "#cd853f"}
    ]
  },
  "black-phantom-by-kilian": {
    subName: "Memento Mori", perfumer: "Sidonie Lancesseur", year: 2017, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa tăm tối Kilian Black Phantom cà phê ma mị",
    metaDescription: "Review Kilian Black Phantom: Nụ hôn thần chết tẩm chất độc ngọt ngào từ Cà phê đen, Socola đắng nhăn và Caramel kẹo cứng. Mùi hương ngải cứu sát thủ.",
    description: "Được mệnh danh là 'cà phê của tử thần' (Memento Mori - Hãy nhớ rẳng ngươi sẽ phải chết). Black Phantom dụ dỗ con mồi bằng một cốc Cà phê đặc sít màu đen nhuyễn, nhỏ thêm mấy giọt Rượu Rum chát lè và nấu chảy khối Socola Đen (Dark Chocolate). Khi đã khô, Caramel trảo cháy bọc lấy Xyanua hạnh nhân ngai ngái ma mị đến lạnh người. Đây là một mùi hương tăm tối tuyệt đối, độc dược kích thích dâm dục cho những gã trai hiểm ác và cô ả điêu ngoa.",
    vibes: [{label: "Hắc ám", icon: "🏴‍☠️"}, {label: "Hiểm độc", icon: "☕"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.5, value: 8.0, total: 8.8 },
    topNotes: [{name: "Rượu Rum"}, {name: "Mia đường (Sugar)"}],
    middleNotes: [{name: "Socola đen (Dark Chocolate)"}, {name: "Cà phê đen (Coffee)"}, {name: "Caramel"}],
    baseNotes: [{name: "Hạnh nhân (Almond)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Vòi voi"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff4500"},
      {name: "Cay ấm", value: 85, color: "#d2691e"},
      {name: "Caramel", value: 75, color: "#cd853f"},
      {name: "Socola", value: 65, color: "#8b4513"},
      {name: "Cà phê", value: 60, color: "#696969"}
    ]
  },
  "kilan-good-girl-gone-bad": {
    subName: "EDP", perfumer: "Alberto Morillas", year: 2012, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa nữ Kilian Good Girl Gone Bad - Rắn trắng hư hỏng",
    metaDescription: "Đánh giá Kilian Good Girl Gone Bad: Hoa Mộc Tê, Huệ Tây và Nhài ấp cạn sự thơ ngây, nặn thành cô quả phụ thanh tao mơn trớn. Mùi hương gái ngành cao cấp.",
    description: "Nửa ngây thơ, nửa đồi bại. Good Girl Gone Bad (Rắn trắng) không dùng phấn nồng mượt, cô ả khéo léo phơi bày thân thể bằng thảm Hoa Mộc Tê (Osmanthus) thơm lịm hương hoa nhài và mùi mơ chín. Từ từ, Hoa Huệ tây (Tuberose) nhễ nhại sương bung nở, quyệt chút Hoa Thủy Tiên kiêu kỳ chọc ngoáy. Đợi chồi lên nét 'bad girl' từ sâu thịt da vừa mơn trớn, vừa lạnh lùng xa cách. Không ngọt kẹo, nó chỉ ngọt thịt, đủ sức cưa phăng túi bóp giới thượng lưu. Rất sạch lại rất gợi đòn.",
    vibes: [{label: "Nửa kín nửa hở", icon: "🐍"}, {label: "Câu dẫn", icon: "🍑"}],
    score: { scent: 8.5, uniqueness: 8.5, compliments: 9.5, value: 8.0, total: 8.6 },
    topNotes: [{name: "Hoa Mộc Tê (Osmanthus)"}, {name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Hồng Đan Mạch"}],
    middleNotes: [{name: "Hoa Huệ Tây (Tuberose)"}, {name: "Hoa Thủy Tiên (Narcissus)"}],
    baseNotes: [{name: "Hổ Phách (Amber)"}, {name: "Gỗ Tuyết Tùng"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ff69b4"},
      {name: "Hoa trắng", value: 85, color: "#f8f8ff"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Huệ tây", value: 65, color: "#e0ffff"},
      {name: "Hoa vàng", value: 60, color: "#ffd700"}
    ]
  },
  "love-dont-be-shy": {
    subName: "EDP", perfumer: "Calice Becker", year: 2007, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Kilian Love dont be shy kẹo mashmallow tình yêu",
    metaDescription: "Review Kilian Love Don't Be Shy: Kẹo dẻo kẹo đường ngâm Hoa Cam, Vani ngọt đến tận xương tủy. Chữ ký nước hoa của cô ca sĩ tỷ phú Rihanna nổi danh khắp thế giới.",
    description: "Ai chưa biết chữ ký mùi hương của Rihanna là gì xin hãy nếm thử Love Don't Be Shy. Xịt một nhát, bạn hóa thân thành một cục Kẹo Marshmallow màu hồng bông xốp, nóng hổi mùi kẹo đường (Sugar), quyện với dằm chảy Vani bốc khói ngập ngụa Caramen. Để cân bằng sự ngọt lịm khé cổ đó, chút Hoa Cam (Orange Blossom) ngả ngớn thanh khiết chen ngang. Ngọt ngây ngất, ngọt chới với, ngọt xé trăng tan! Chắc chắn không có một anh trai nào thoát khỏi vòng tay dính nhớp tình yêu này.",
    vibes: [{label: "Ngọt gắt", icon: "🧁"}, {label: "Đắm chìm", icon: "💕"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.0, value: 8.0, total: 8.4 },
    topNotes: [{name: "Hoa Cam Neroli"}, {name: "Cam Bergamot"}, {name: "Hạt tiêu hồng"}],
    middleNotes: [{name: "Hoa Cam (Orange Blossom)"}, {name: "Hoa Kim Ngân (Honeysuckle)"}, {name: "Hoa Nhài"}],
    baseNotes: [{name: "Mia đường (Sugar)"}, {name: "Caramel"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff4500"},
      {name: "Hoa trắng", value: 85, color: "#f8f8ff"},
      {name: "Vani", value: 75, color: "#f5f5dc"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Caramel", value: 60, color: "#cd853f"}
    ]
  },
  "kilian-rolling-in-love": {
    subName: "EDP", perfumer: "Pascal Gaurin", year: 2019, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Kilian Rolling In Love sữa hạnh nhân béo ngậy",
    metaDescription: "Đánh giá Kilian Rolling in Love: Bột sữa sữa chua Hạnh Nhân, Vani phấn thơm tho như bông phấn dặm lên da thiếu nữ râm ran. Tỏa hương dính da gợi dục ngầm.",
    description: "Nhân đôi dục cảm bằng một tấm chăn len mềm mại, Rolling In Love (Ngụp lặn trong tình yêu) là mẩu tự tình thầm kín sát sát vô da thịt (skin scent). Mùi hương nặn khối bằng cục Sữa Hạnh Nhâm (Almond) béo mượt bột sánh, phết thêm chút Hoa Huệ nhã nhặn và Xạ hương hạt Ambrette ngai ngái sạch tinh tươm. Nó không hét toáng lên, mà bắt người ôm mình phải hít lấy hít để cọ mũi vào cần cổ miệt mài. Mùi phấn son đắt tiền sành điệu, ngấm vào len lỏi.",
    vibes: [{label: "Gần gũi", icon: "🥛"}, {label: "Da thịt", icon: "💋"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 7.5, total: 8.2 },
    topNotes: [{name: "Sữa Hạnh Nhân (Almond)"}, {name: "Xạ hương Ambrette"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}, {name: "Hoa Lan Nam Phi (Freesia)"}],
    baseNotes: [{name: "Hoa Huệ Tây (Tuberose)"}, {name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Hạnh nhân", value: 85, color: "#ffe4c4"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Ngọt ngào", value: 60, color: "#ff4500"}
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
  
  // Tim the "  {"
  let injectPoint = cleanedLines.findIndex(l => l.trim().startsWith('name:')) + 1;
  cleanedLines.splice(injectPoint, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
  console.log('[v] Da cap nhat xong ID: ' + id);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('==> BATCH 16 HOAN TAT.');
