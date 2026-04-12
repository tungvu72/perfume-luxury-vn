const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "musc-noir-rose-for-her": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2022, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 25, summer: 15, fall: 30, winter: 30 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Narciso Musc Noir Rose nữ hoàng khiêu gợi",
    metaDescription: "Review Narciso Musc Noir Rose EDP: Nữ hoàng tiệc tùng bóng đêm với Quả Mận (Plum) chín nẫu, Xạ hương và Vani ngọt ngào quyến rũ chết người.",
    description: "Được săn lùng nhiều nhất nhà Narciso hiện tại! Musc Noir Rose rũ bỏ vẻ ngoài e ấp để khoác lên mình bộ cánh mỏng manh khiêu gợi của bóng đêm. Vẫn là Xạ hương (Musk) quen thuộc bám rít lấy da thịt, nhưng lần này đẫm sương đêm hòa quyện cùng Quả mận (Plum) tím rịm ngâm trong Vani ngọt ngào say đắm. Mùi hương không quá u tối mà bồng bềnh, mượt mà và cực kỳ 'tình', khiến đối phương không thể tự chủ mà muốn ôm chầm lấy rúc vào hõm cổ bạn.",
    vibes: [{label: "Xác thịt", icon: "💋"}, {label: "Khiêu gợi", icon: "💃"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Quả Mận (Plum)"}, {name: "Tiêu hồng (Pink Pepper)"}],
    middleNotes: [{name: "Xạ Hương (Musk)"}, {name: "Hoa Hồng (Rose)"}, {name: "Hoa Huệ Trắng (Tuberose)"}],
    baseNotes: [{name: "Vani (Vanilla)"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#d8bfd8"},
      {name: "Trái cây", value: 85, color: "#ff4500"},
      {name: "Ngọt ngào", value: 75, color: "#ff0000"},
      {name: "Vani", value: 65, color: "#f5f5dc"},
      {name: "Hoa hồng", value: 60, color: "#ff1493"}
    ]
  },
  "narciso-musc-nude": {
    subName: "Musc Nude EDP", perfumer: "Sonia Constant", year: 2024, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 25, fall: 20, winter: 15 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Narciso Musc Nude da thịt nguyên sơ",
    metaDescription: "Đánh giá Narciso Musc Nude EDP: Lớp da thịt trần trụi nguyên sơ, sạch sẽ phủ sương ôm ấp với Hoa nhài trắng muốt, Đậu Tonka bùi béo dập Xạ Hương đặc trưng.",
    description: "Đúng như cái tên 'Nude' (Trần trụi), chai nước hoa này tháo gỡ mọi rào cản trang sức hào nhoáng, trả bạn về bản ngã da thịt tự nhiên nhất, tinh khôi nhất. Phủ lên da bằng làn bột phấn rạo rực ngấm Xạ hương nồng ấm. Điểm nhấn là chùm Hoa nhài Trắng muốt bung nở rợp trời ôm rịt lấy Đậu Tonka (Tonka Bean) ngầy ngậy, vuốt ve tâm trí một cách bình yên đến lạ. Phù hợp cho những lúc thư rãn trốn tìm thế giới, hay chỉ đơn giản ôm ấp người thương trên gường.",
    vibes: [{label: "Nàng thơ", icon: "🕊️"}, {label: "Da thịt Nude", icon: "🤍"}],
    score: { scent: 8.2, uniqueness: 7.5, compliments: 8.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Hoa trắng"}, {name: "Hoa Nhài (Jasmine)"}, {name: "Tiêu hồng"}],
    middleNotes: [{name: "Xạ Hương (Musk)"}, {name: "Hoa Hồng Đan Mạch"}, {name: "Hoa Cam (Orange Blossom)"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Hoắc hương"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Xạ hương", value: 85, color: "#e6e6fa"},
      {name: "Hoa hồng", value: 75, color: "#ff1493"},
      {name: "Phấn", value: 65, color: "#e3d5c8"},
      {name: "Ngọt bùi", value: 60, color: "#ff0000"}
    ]
  },
  "nar-poudree": {
    subName: "EDP", perfumer: "Aurélien Guichard", year: 2016, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 15, fall: 25, winter: 25 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Narciso Poudree lùn phấn sang chảnh",
    metaDescription: "Review Narciso Poudree EDP: Lùn Phấn sang chảnh làm chao đảo thế giới nước hoa. Hàng hiên Xạ Hương rải đầy Hoa Nhài, Hoa Cam và Tuyết tùng bồng bềnh mịn màng.",
    description: "Được giới mộ điệu Việt ưu ái gán cho cái tên 'Nacisor Lùn Phấn', đây là một tượng đài về sự chỉn chu thanh mảnh. Poudrée là lúc ADN Xạ hương đặc trưng được phủ lên một lớp Phấn (Powder) trang điểm dày đặc bồng bềnh, mượt mà thượng hạng do chất Coumarin tự nhiên tạo thành. Thơm nức nở như nhào lộn vào chăn gối lụa tơ tằm! Lóp đệm Gỗ Tuyết tùng (Cedar) chắc nịch làm khô mùi hương khiến nó không hề quê kiểng mà đài các, đẳng cấp vượt thời gian tuổi trẻ bồng bột.",
    vibes: [{label: "Phấn thơm đài các", icon: "💅"}, {label: "Quý bà lụa là", icon: "👗"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.0, value: 8.5, total: 8.6 },
    topNotes: [{name: "Hoa Nhài (Jasmine)"}, {name: "Hoa Hồng Bulgary (Rose)"}, {name: "Hoa Cam (Orange Blossom)"}],
    middleNotes: [{name: "Xạ Hương (Musk)"}],
    baseNotes: [{name: "Coumarin"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Cỏ hương bài"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Xạ hương", value: 85, color: "#d8bfd8"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "pure-musc-for-her": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2019, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 35, fall: 15, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Narciso Pure Musc lùn trắng",
    metaDescription: "Đánh giá Narciso Pure Musc For Her EDP: Lùn trắng giũ sạch bụi trần, gột rửa Xạ Hương bằng Gỗ Cashmeran và Hoa nhài sắc lạnh. Xài layering mĩ mãn.",
    description: "Trắng muốt, sạch bâng, thoát tục! Pure Musc như chiếc sơ mi lụa trắng giặt phẳng phiu vừa rút ra khỏi tiệm sấy. Xạ Hương (Musk) vốn xôi thịt thú tính đã bị gọt tỉa, chà bóng bằng cụm hoa Nhài (Jasmine) và Gỗ Cashmeran lạnh lẽo tinh tươm tơi tỏa. Không cầu kì mời gọi, người ngửi thấy nó sẽ mặc định bạn là hình mẫu cô nàng 'White Flag' tinh khiết hoàn mĩ. Bật mí: Hãng thiết kế chai này nhằm làm BASE, xịt layer (đè) lên bất kì chai Narciso nào khác để cộng hưởng độ ngon lên gấp bội!",
    vibes: [{label: "Sơ mi trắng", icon: "👔"}, {label: "Thanh thuần", icon: "🦢"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 8.5, value: 8.5, total: 8.4 },
    topNotes: [{name: "Xạ Hương (Musk)"}],
    middleNotes: [{name: "Hoa trắng"}],
    baseNotes: [{name: "Gỗ Cashmeran"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#e6e6fa"},
      {name: "Phấn", value: 85, color: "#f5deb3"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Hổ phách", value: 65, color: "#cd6600"},
      {name: "Nguyên sơ", value: 60, color: "#a0522d"}
    ]
  },
  "ani": {
    subName: "Extrait de Parfum", perfumer: "Cécile Zarokian", year: 2019, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Nishane Ani Vanilla vương giả Thổ Nhĩ Kỳ",
    metaDescription: "Review Nishane Ani Extrait: Vua của nước hoa Vani. Quả bom Gừng (Ginger) chát xé hòa tấu với Vani béo ngậy khổng lồ và Gỗ Đàn hương bốc lửa mịt mù.",
    description: "Được xưng tụng là 'Ông vua của nhóm Vanilla', Nishane Ani dẹp loạn mọi định kiến Vani phải ngọt như bánh trái con nít. Đây là Vani dành cho dân sừng sỏ! Khởi đầu bằng nếp rát mũi cay nồng rực lửa của Gừng tươi (Ginger) cạo vỏ và Bạch đậu khấu, Ani bùng lên rát một cách sung sướng. Dần dà, lớp Vani (Vanilla) béo ngậy cổ xưa, vàng óng nuốt trọn lấy thứ hương cay đó tạo nên bản giao hưởng uy quyền, hùng tráng tạc lên tấm Gỗ Đàn hương mượt rười rượi. Bám vô cực, quệt 1 shot cũng đủ rên la.",
    vibes: [{label: "Vua Vani", icon: "👑"}, {label: "Vương giả phương Đông", icon: "🕌"}],
    score: { scent: 9.2, uniqueness: 9.0, compliments: 9.0, value: 8.5, total: 9.0 },
    topNotes: [{name: "Gừng khô (Ginger)"}, {name: "Cam Bergamot"}, {name: "Tiêu hồng"}, {name: "Chanh vàng rực"}],
    middleNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Lý chua đen (Blackcurrant)"}, {name: "Hoa Hồng cay"}],
    baseNotes: [{name: "Vani Madagascar (Vanilla)"}, {name: "Gỗ Đàn hương (Sandalwood)"}, {name: "An tức hương (Benzoin)"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Vani ngậy", value: 100, color: "#fafaad"},
      {name: "Gia vị ấm", value: 85, color: "#cd3300"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Gia vị tươi", value: 65, color: "#7cb342"},
      {name: "Cam chanh", value: 60, color: "#ffff00"}
    ]
  },
  "hacivat": {
    subName: "Extrait de Parfum", perfumer: "Jorge Lee", year: 2017, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 30, summer: 40, fall: 20, winter: 10 }, dayNight: { day: 70, night: 30 },
    seoTitle: "Nước hoa Nishane Hacivat khóm dứa Thổ Nhĩ Kỳ",
    metaDescription: "Đánh giá Nishane Hacivat Extrait: Chiến thần mùa Hè bất bại. Trái Dứa (Pineapple) nướng trên nền Rêu sồi (Oakmoss) xanh thẫm uy quyền bám tỏa như mãnh thú.",
    description: "Được mang lên bàn cân sinh tử với Aventus Creed hằng ngày hằng giờ, nhưng Hacivat chứng tỏ nó là một con quái vật độc tôn ở mùa Hè. Quát thẳng vào mũi người dùng bằng rổ Dứa (Pineapple) chua loét, chín ứa nước pha cùng Bưởi tây (Grapefruit) the bốc não. Nhưng sức mạnh khủng khiếp nằm ở Cốt Rêu Sồi (Oakmoss) đại thụ thâm u gai góc ở Base Note. Nó kẹp chặt trái Dứa bằng hàm chông rêu hoang dã, vắt kiệt và khuếch đại mùi hương lên gấp bội. Đi dưới trời 40 độ vẫn mát mẻ ngạo nghễ dội bom bất kì ai đi lướt qua.",
    vibes: [{label: "Dứa vương", icon: "🍍"}, {label: "Chiến thần", icon: "⚔️"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 10.0, value: 9.0, total: 9.1 },
    topNotes: [{name: "Quả Dứa ngọt (Pineapple)"}, {name: "Bưởi Tây (Grapefruit)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hoắc hương"}, {name: "Hoa Nhài"}],
    baseNotes: [{name: "Rêu Sồi cổ thụ (Oakmoss)"}, {name: "Hương Gỗ (Woody Notes)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Rêu sồi thẳm", value: 75, color: "#556b2f"},
      {name: "Trái cây", value: 65, color: "#fc4f2a"},
      {name: "Thổ (Đất)", value: 60, color: "#4d3d3d"}
    ]
  },
  "hundred-silent-ways": {
    subName: "Extrait de Parfum", perfumer: "Jorge Lee", year: 2016, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 15, fall: 30, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Nishane Hundred Silent Ways một trăm lời câm lặng",
    metaDescription: "Review Nishane Hundred Silent Ways: Vẻ đẹp ngọt lịm như Kẹo trái cây đắt tiền. Hương Vani (Vanilla) ôm ấp Hoa Nhài Trắng và đào mọng (Peach) kiều diễm.",
    description: "Một tuyệt tác mang tên 'Một trăm lời câm lặng' nhằm bày tỏ thứ tình yêu không ngôn từ nào tạc nổi. Nishane Hundred Silent Ways đánh cắp trái tim bằng rổ Đào mọng (Peach) căng ứa nước dầm chung vào Hoa Huệ (Tuberose) và chiết xuất Vani ngọt lựng như sữa. Hương thơm ngậy, rạo rực, luyến ái cào xé khiến người ta liên tưởng tới chai Black Opium của YSL nhưng được phủ mạ nạm vàng ngọc rực rỡ và đẫy đà hơn gấp nhiều lần. Một cô gái xịt em này đi cưa chai thì mười anh gục cả mười một.",
    vibes: [{label: "Lẳng lơ", icon: "🌸"}, {label: "Kẹo trái cây", icon: "🍬"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.2, value: 8.5, total: 8.6 },
    topNotes: [{name: "Quả Đào mọng (Peach)"}, {name: "Hoa Huệ trắng (Tuberose)"}, {name: "Cam Quýt"}],
    middleNotes: [{name: "Hoa Dành Dành (Gardenia)"}, {name: "Hoa Nhài (Jasmine)"}, {name: "Rễ Hoa Diên Vĩ đỏ"}],
    baseNotes: [{name: "Vani đục (Vanilla)"}, {name: "Gỗ Đàn hương (Sandalwood)"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Vani", value: 85, color: "#ffffcc"},
      {name: "Phấn", value: 75, color: "#e6d2c4"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hoa Huệ trắng", value: 60, color: "#e0ffeb"}
    ]
  },
  "paco-pure-xs": {
    subName: "EDT", perfumer: "Anne Flipo, Caroline Dumur", year: 2017, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 10, fall: 40, winter: 35 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa nam Paco Rabanne Pure XS rượu ngọt bốc lửa",
    metaDescription: "Đánh giá Paco Rabanne Pure XS For Men: Ly Rượu mùi (Liquor) sóng sánh nhồi Vani sưởi ấm Gừng (Ginger) xóc nảy. Tay chơi Playboy thứ thiệt ở các Bar Club.",
    description: "Biểu tượng của chữ XS (Excess - Sự quá đà). Pure XS lột tả một chàng trai ăn chơi trác táng, tay xách ly Rượu mùi (Liquor) nhâm nhi điệu nghệ. Đập thẳng vô mặt là phát khà của Rượu bốc cháy pha Cồn cực bén, tạt thêm Gừng gọt vỏ hăng ngái. Ngay khi mũi chuẩn bị bị sốc, hũ Vani (Vanilla) béo ngậy được rót lỏng lẻo ra bọc rịt lấy tất cả thành một hợp chất ngọt ngào ứa nước dãi, mời gọi nhục dục cực độ. Sinh ra là để dội bom khứu giác lúc 1h sáng ở hố đen club vũ trường.",
    vibes: [{label: "Tay chơi Club", icon: "🥃"}, {label: "Ác quỷ", icon: "🦇"}],
    score: { scent: 8.0, uniqueness: 8.0, compliments: 8.5, value: 8.0, total: 8.1 },
    topNotes: [{name: "Gừng cay (Ginger)"}, {name: "Cỏ Xạ hương"}, {name: "Bưởi tây"}],
    middleNotes: [{name: "Vani (Vanilla)"}, {name: "Rượu Mùi (Liquor)"}, {name: "Quế (Cinnamon)"}, {name: "Da thuộc"}, {name: "Táo"}],
    baseNotes: [{name: "Nhựa thơm Myrrh"}, {name: "Đường tinh luyện (Sugar)"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Vani", value: 100, color: "#ffffcc"},
      {name: "Ngọt bốc", value: 85, color: "#ed2939"},
      {name: "Gia vị làm nóng", value: 75, color: "#cc4100"},
      {name: "Hổ phách", value: 65, color: "#b87333"},
      {name: "Gỗ", value: 60, color: "#6b4226"}
    ]
  },
  "althair": {
    subName: "EDP", perfumer: "Hamid Merati-Kashani, Ilias Ermenidis", year: 2023, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nam Parfums De Marly Althair vương tử kẹo bông",
    metaDescription: "Review Parfums De Marly Althair: Vương quốc của các anh chàng hảo ngọt. Kẹo Praline, Quế vương giả (Cinnamon) tẩm Vani sưởi ấm bầu không khí băng giá.",
    description: "Một bom tấn dành riêng cho nam giới mê mùi 'ăn được' (Gourmand). Parfums De Marly Althaïr thết đãi một ly kem Vani thượng lưu êm ái chưa từng có. Viên Kẹo Praline nhân óc chó ngọt lịm tan chảy trên đầu lưỡi, xóc nảy cùng rổ bột Quế (Cinnamon) cay rân rân xộc lên vòm họng. Lớp ngụy trang tuyệt đẹp của Hoa cam giúp trung hòa khiến Althair không bị rợn mũi con nít mà ra nét trưởng giả ăn chơi rủng rỉnh tiền bạc. Mặc nó với bộ đồ len dệt kim ngồi nhà hàng 5 sao mùa đông thì lói mắt.",
    vibes: [{label: "Ngot sang chảnh", icon: "🍡"}, {label: "Quý tộc Pháp", icon: "🇫🇷"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.0, value: 8.0, total: 8.6 },
    topNotes: [{name: "Hoa Cam (Orange Blossom)"}, {name: "Bạch đậu khấu (Cardamom)"}, {name: "Quả cam Bergamot"}],
    middleNotes: [{name: "Vani Bourbon (Vanilla)"}, {name: "Nhựa hương Elemi"}],
    baseNotes: [{name: "Kẹo Praline (Praline)"}, {name: "Guaiac Wood"}, {name: "Xạ hương"}, {name: "Ambroxan"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#ff2020"},
      {name: "Vani", value: 85, color: "#ffffb3"},
      {name: "Gia vị ấm", value: 75, color: "#b03a00"},
      {name: "Quế", value: 65, color: "#d2691e"},
      {name: "Thảo mộc", value: 60, color: "#2e8b57"}
    ]
  },
  "carlisle": {
    subName: "EDP", perfumer: "Guillaume Flavigny", year: 2015, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Parfums De Marly Carlisle con ngựa đen quý tộc",
    metaDescription: "Đánh giá Parfums De Marly Carlisle EDP: Bóng đè ác mộng với Hoắc hương (Patchouli) dày khộp ngâm đẫm Apple giòn tẩm Vani và Nhục đậu khấu uy quyền.",
    description: "Carlisle là con Ngựa Đen lực điền, bóng bảy hiếu chiến nhất trong chuồng PDM. Hương mở đầu ngợp thở như nếm rổ Táo Xanh (Apple) cắn dở ngâm trong bình rượu Vani (Vanilla) bị rắc đầy rẫy Nhục đậu khấu (Nutmeg) rát họng. Sự trỗi dậy mạnh mẽ của lá Hoắc hương (Patchouli) râm ran ẩm mốc nhai nhóp nhép chung Đậu Tonka (Tonka Bean) đẩy mùi hương lên một bậc uy quyền tối thượng vương giả. Rất ma mị, bành trướng, kén mũi vô cực nhưng nếu hợp sẽ bị nghiện đến ám ảnh.",
    vibes: [{label: "Hắc mã", icon: "🐎"}, {label: "Dark Lord", icon: "🦇"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Táo giòn (Apple)"}, {name: "Nhục đậu khấu (Nutmeg)"}],
    middleNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Hoa Hồng (Rose)"}],
    baseNotes: [{name: "Hoắc Hương (Patchouli)"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Vani", value: 100, color: "#ffffcc"},
      {name: "Hoắc hương", value: 85, color: "#556b2f"},
      {name: "Gia vị nóng", value: 75, color: "#cc3300"},
      {name: "Gia vị tươi", value: 65, color: "#66cc33"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
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
console.log('==> BATCH 21 HOAN TAT.');
