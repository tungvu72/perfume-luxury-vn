const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  // 82 - Card: "Light Blue Eau Intense", Dolce&Gabbana, for women. Rating 4.1 (5269). Longevity: 6h. Sillage: Strong.
  "dg-light-blue-eau-intense": {
    subName: "Eau Intense EDP", perfumer: "Olivier Cresp", year: 2017, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 60, fall: 10, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Dolce & Gabbana Light Blue Eau Intense chính hãng mua ở đâu?",
    metaDescription: "Đánh giá D&G Light Blue Eau Intense chính hãng: Quả chanh vàng và táo Granny Smith mọng nước, phiên bản lưu hương cực tốt mùa hè.",
    description: "Light Blue Eau Intense là phiên bản nâng cấp hoàn hảo của huyền thoại Light Blue. Hương chanh tươi rói hòa quyện cùng Táo xanh mọng nước trên nền xạ hương và gỗ hổ phách, tạo nên cảm giác giải nhiệt rực rỡ và bám tỏa cực kỳ ấn tượng trong những ngày gắt gao nhất.",
    vibes: [{label: "Tươi mát", icon: "🍋"}, {label: "Giải nhiệt", icon: "🌊"}],
    score: { scent: 8.2, uniqueness: 6.0, compliments: 8.5, value: 8.2, total: 7.8 },
    topNotes: [{name: "Quả chanh vàng (Lemon)"}, {name: "Táo xanh Granny Smith (Apple)"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Hoa cúc vạn thọ (French Marigold)"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Gỗ hổ phách (Amberwood)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Xạ hương", value: 85, color: "#d8bfd8"},
      {name: "Tươi mát", value: 80, color: "#e0ffff"},
      {name: "Trái cây", value: 75, color: "#ff4500"},
      {name: "Thảo mộc", value: 70, color: "#2e8b57"}
    ]
  },
  // 83 - Card: "Light Blue", Dolce&Gabbana, for women. Rating 3.9 (35142). Longevity: 6h. Sillage: Moderate.
  "light-blue-pour-femme": {
    subName: "EDT", perfumer: "Olivier Cresp", year: 2001, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 20, summer: 60, fall: 10, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "D&G Light Blue EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dolce & Gabbana Light Blue EDT chính hãng: Biểu tượng mùa hè rực rỡ với chanh Ý, táo xanh và gỗ tuyết tùng tươi sáng.",
    description: "Light Blue EDT là bức tranh kinh điển về mùa hè vùng Địa Trung Hải. Mùi hương giòn tan của Táo xanh quyện trong độ chua thanh khiết của Chanh Sicilia và nét mộc mạc của Tre. Một mùi hương không bao giờ lỗi thời và nịnh mũi bất kỳ ai vào ban ngày đầy nắng.",
    vibes: [{label: "Kinh điển", icon: "🌞"}, {label: "Sạch sẽ", icon: "🍃"}],
    score: { scent: 7.8, uniqueness: 6.0, compliments: 8.0, value: 7.8, total: 7.6 },
    topNotes: [{name: "Chanh Sicilia (Lemon)"}, {name: "Táo xanh (Apple)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hoa chuông (Bellflower)"}],
    middleNotes: [{name: "Tre (Bamboo)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa hồng trắng"}],
    baseNotes: [{name: "Gỗ tuyết tùng (Cedar)"}, {name: "Xạ hương (Musk)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Tươi mát", value: 75, color: "#e0ffff"},
      {name: "Trái cây", value: 70, color: "#ff4500"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"}
    ]
  },
  // 84 - Card: "The One", Dolce&Gabbana, for women. Rating 3.8 (16943). Longevity: 7h. Sillage: Strong.
  "the-one-edp": {
    subName: "EDP", perfumer: "Christine Nagel", year: 2006, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Dolce & Gabbana The One EDP chính hãng mua ở đâu?",
    metaDescription: "Đánh giá D&G The One EDP chính hãng: Nét quyến rũ vàng óng từ quả Đào, Vani nồng nàn và Hoa bách hợp lấp lánh đài các.",
    description: "The One mang đúng tinh thần xa xỉ, lấp lánh như vàng của nhà Dolce. Vani béo ngậy được rót lên Quả đào chín mọng và Mận căng tròn, tôn vinh bó hoa Bách hợp (Lily) quý phái. Mùi hương ấm áp, đậm đà và vô cùng gợi cảm, hoàn hảo cho những đêm tiệc sang trọng.",
    vibes: [{label: "Quyến rũ", icon: "💃"}, {label: "Quý phái", icon: "✨"}],
    score: { scent: 7.6, uniqueness: 6.0, compliments: 8.5, value: 7.6, total: 7.6 },
    topNotes: [{name: "Quả đào (Peach)"}, {name: "Vải thiều (Litchi)"}, {name: "Quýt Mandarin"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa bách hợp (Lily)"}, {name: "Qủa mận (Plum)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa linh lan"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Xạ hương (Musk)"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ff4500"},
      {name: "Hoa trắng", value: 85, color: "#fffaf0"},
      {name: "Vani", value: 75, color: "#f5deb3"},
      {name: "Phấn", value: 70, color: "#dda0dd"},
      {name: "Ngọt ngào", value: 65, color: "#ff69b4"}
    ]
  },
  // 85 - Card: "The One for Men Eau de Parfum", Dolce&Gabbana. Rating 4.5. Longevity 6h. Sillage Moderate.
  "the-one-for-men-eau-de-parfum": {
    subName: "EDP", perfumer: "Olivier Polge", year: 2015, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "D&G The One For Men EDP chính hãng mua ở đâu? Review giá",
    metaDescription: "Đánh giá D&G The One For Men EDP chính hãng: Quý ông thời thượng nam tính với Hổ phách, Thuốc lá sấy khô và Bạch đậu khấu.",
    description: "Phiên bản EDP của The One For Men khắc phục được điểm yếu lưu hương, đẩy sự nam tính lên một tầm cao mới. Sự cay ấm của Gừng và Bạch đậu khấu, hòa quyện cực kỳ mượt mà với Hổ phách và Thuốc lá vàng. Mùi hương như cái ôm ấm áp và rắn rỏi của một quý ông lịch lãm đích thực.",
    vibes: [{label: "Quý ông", icon: "🥃"}, {label: "Ấm áp", icon: "🧥"}],
    score: { scent: 9.0, uniqueness: 7.0, compliments: 8.5, value: 9.0, total: 8.6 },
    topNotes: [{name: "Bưởi tây (Grapefruit)"}, {name: "Rau mùi (Coriander)"}, {name: "Húng quế (Basil)"}],
    middleNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Gừng (Ginger)"}, {name: "Hoa cam (Orange Blossom)"}],
    baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Thuốc lá (Tobacco)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#ff8c00"},
      {name: "Thuốc lá", value: 90, color: "#8b4513"},
      {name: "Cay tươi", value: 80, color: "#32cd32"},
      {name: "Cam chanh", value: 70, color: "#ffd700"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"}
    ]
  },
  // 86 - Card: "Le Parfum", Elie Saab, for women. Rating 4.0. Longevity 7h, Sillage Strong.
  "le-parfum-elie-saab": {
    subName: "EDP", perfumer: "Francis Kurkdjian", year: 2011, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 10, fall: 30, winter: 20 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Elie Saab Le Parfum EDP chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Elie Saab Le Parfum EDP chính hãng: Mật ong óng ánh rót trên cánh hoa cam tươi rói, tác phẩm để đời của Kurkdjian.",
    description: "Giống như một bộ đầm dạ hội Haute Couture được dệt từ ánh sáng mặt trời. Hoa cam và Nhài Grandiflorum rạng rỡ được tắm trong từng giọt Mật ong vàng óng, đệm thêm hoắc hương và gỗ tuyết tùng vững chãi. Một mùi hương vô cùng sang trọng, nữ tính và quyền quý vượt thời gian.",
    vibes: [{label: "Nữ hoàng", icon: "👑"}, {label: "Lấp lánh", icon: "✨"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Hoa cam Châu Phi (African Orange Flower)"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Mật ong trắng (White Honey)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Hoa hồng (Rose)"}, {name: "Gỗ tuyết tùng (Virginia Cedar)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#fffaf0"},
      {name: "Mật ong", value: 85, color: "#ffa500"},
      {name: "Ngọt ngào", value: 80, color: "#ff69b4"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hoa cỏ", value: 60, color: "#ffc0cb"}
    ]
  },
  // 87 - Card: "White Tea", Elizabeth Arden. Rating 3.9. Longevity 5h, Moderate Sillage.
  "elizabeth-arden-white-tea-edt": {
    subName: "EDT", perfumer: "Rodrigo Flores-Roux", year: 2017, gender: "nu", longevity: 5, sillage: 6,
    seasons: { spring: 40, summer: 40, fall: 10, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Elizabeth Arden White Tea EDT chính hãng: Trà trắng thư giãn",
    metaDescription: "Đánh giá Elizabeth Arden White Tea EDT chính hãng: Chén trà trắng thanh tao giữa sương mai, hơi thở thiên nhiên mộc mạc thư thái.",
    description: "White Tea như một buổi bình minh tĩnh tại, mộc mạc và an yên. Hương trà trắng tinh tế quyện với lá dương xỉ tươi, hương biển mát lạnh và đậu tonka dịu nhẹ. Không ồn ào hay rực rỡ, nó mang lại một không gian riêng tư thư giãn cực kỳ sạch sẽ và dễ chịu, tựa hơi thở của thiền định.",
    vibes: [{label: "Thư giãn", icon: "🍵"}, {label: "Bình yên", icon: "🌿"}],
    score: { scent: 7.8, uniqueness: 7.0, compliments: 7.0, value: 7.8, total: 7.5 },
    topNotes: [{name: "Hương biển (Sea Notes)"}, {name: "Dương xỉ (Fern)"}, {name: "Quýt Mandarin"}, {name: "Cây xô thơm (Clary Sage)"}],
    middleNotes: [{name: "Trà trắng (White Tea)"}, {name: "Iris (Diên vĩ)"}, {name: "Trà Mate"}],
    baseNotes: [{name: "Hạt Ambrette"}, {name: "Hương gỗ đỏ (Exotic Woods)"}, {name: "Đậu Tonka"}, {name: "Hổ phách"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#2e8b57"},
      {name: "Xanh lá", value: 80, color: "#008000"},
      {name: "Biển", value: 75, color: "#0000cd"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Diên vĩ", value: 60, color: "#9370db"}
    ]
  },
  // 88 - Card: "Pluie Sur Ha Long", Ella K. Rating 4.1. Longevity 7h, Strong Sillage.
  "ella-k-pluie-sur-ha-long": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2018, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 45, summer: 45, fall: 5, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Ella K Pluie Sur Ha Long chính hãng mua ở đâu? Mùi mưa Vịnh Hạ Long",
    metaDescription: "Đánh giá Ella K Pluie Sur Ha Long EDP chính hãng: Cơn mưa rào trên Vịnh Hạ Long quyện hoa sen và nước măng cụt xanh mát.",
    description: "Lấy cảm hứng từ chuyến du ngoạn trên Vịnh Hạ Long của nhà chế tác Sonia Constant. Mùi hương miêu tả chân thực bầu không khí trong vắt sau cơn mưa rào nhiệt đới: Sen hồng đọng nước ngập tràn sức sống quyện với sự mọng nước tươi mát của Lê và Đại hoàng. Một bức họa thủy mặc xứ Đông Dương đẹp đến nao lòng.",
    vibes: [{label: "Thủy mặc", icon: "🏞️"}, {label: "Mưa nhiệt đới", icon: "🌧️"}],
    score: { scent: 8.2, uniqueness: 8.5, compliments: 8.0, value: 8.2, total: 8.2 },
    topNotes: [{name: "Hương nước (Water Notes)"}, {name: "Quả lê Nashi (Nashi Pear)"}, {name: "Đại hoàng (Rhubarb)"}, {name: "Sen (Lotus)"}],
    middleNotes: [{name: "Hoa mộc lan (Magnolia)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa hồng (Rose)"}, {name: "Tiêu hồng (Pink Pepper)"}],
    baseNotes: [{name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ff69b4"},
      {name: "Thủy sinh", value: 85, color: "#00ced1"},
      {name: "Xạ hương", value: 80, color: "#d8bfd8"},
      {name: "Khí quyển", value: 75, color: "#afeeee"},
      {name: "Phấn", value: 65, color: "#ffdab9"}
    ]
  },
  // 89 - Card: "Bois Imperial", Essential Parfums. Rating 4.2. Longevity 8h, Strong Sillage.
  "bois-imperial": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2020, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 30, summer: 25, fall: 30, winter: 15 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Essential Parfums Bois Impérial chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Bois Impérial chính hãng: Siêu phẩm gỗ Akigalawood và cỏ hương bài sảng khoái, nịnh mũi và bám tỏa bá đạo.",
    description: "Một hiện tượng chấn động của giới mộ điệu toàn cầu bởi Quentin Bisch. Akigalawood cay sáng, rực rỡ kết hợp với Cỏ hương bài (Vetiver) Haiti và Húng quế (Basil) xanh trong. Sự pha trộn giữa Gỗ cay, tươi sáng, mượt như nhung với hiệu năng lưu hương vô cùng kinh ngạc. Sang, sạch, và hoàn hảo để dùng hàng ngày.",
    vibes: [{label: "Thời thượng", icon: "😎"}, {label: "Nam châm", icon: "🧲"}],
    score: { scent: 8.4, uniqueness: 7.5, compliments: 9.0, value: 8.4, total: 8.5 },
    topNotes: [{name: "Húng quế (Basil)"}, {name: "Tiêu nước Timur (Timur Pepper)"}],
    middleNotes: [{name: "Hương gỗ (Woody Notes)"}, {name: "Cỏ hương bài Haiti (Haitian Vetiver)"}],
    baseNotes: [{name: "Gỗ Akigalawood"}, {name: "Ambroxan"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay tươi", value: 80, color: "#9acd32"},
      {name: "Thảo mộc", value: 75, color: "#20b2aa"},
      {name: "Oud", value: 65, color: "#4b0082"},
      {name: "Xanh lá", value: 60, color: "#008000"}
    ]
  },
  // 90 - "Blue Talisman", Ex Nihilo. Rating 4.2. Longevity 7h, Strong Sillage.
  "ex-nihilo-blue-talisman": {
    subName: "EDP", perfumer: "Jordi Fernández", year: 2023, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Ex Nihilo Blue Talisman chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Ex Nihilo Blue Talisman chính hãng: Lê rực rỡ quyện gỗ Akigalawood, một phiên bản xa xỉ siêu cuốn hút gây nghiện.",
    description: "Chai nước hoa kỷ niệm 10 năm của nhà Ex Nihilo. Một bùa hộ mệnh (Talisman) xanh mướt, pha trộn sự mát mẻ của Cam Bergamot, vị Lê giòn tan mọng nước, và Ambrofix óng ánh trên nền gỗ Akigalawood đặc trưng. Không cầu kỳ phức tạp nhưng lại toát lên sự đắt tiền, một nam châm thu hút sự chú ý theo phong cách tối giản xa xỉ (Quiet Luxury).",
    vibes: [{label: "Xa xỉ", icon: "💎"}, {label: "Cuốn hút", icon: "💫"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 9.0, value: 8.4, total: 8.5 },
    topNotes: [{name: "Quả lê (Pear)"}, {name: "Cam Bergamot"}, {name: "Quýt Mandarin"}, {name: "Gừng (Ginger)"}],
    middleNotes: [{name: "Hoa cam (Orange Blossom)"}, {name: "Gỗ Akigalawood"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Ambrofix"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Trái cây", value: 85, color: "#ff4500"},
      {name: "Xạ hương", value: 80, color: "#d8bfd8"},
      {name: "Ngọt ngào", value: 75, color: "#ff69b4"},
      {name: "Gỗ", value: 70, color: "#8b4513"}
    ]
  },
  // 91 - "Carnal Flower", Frederic Malle. Rating 4.2. Longevity 8h, Strong Sillage.
  "carnal-flower": {
    subName: "EDP", perfumer: "Dominique Ropion", year: 2005, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 40, summer: 40, fall: 10, winter: 10 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Frederic Malle Carnal Flower EDP chính hãng mua ở đâu?",
    metaDescription: "Đánh giá Frederic Malle Carnal Flower chính hãng: Bức tranh hoa huệ trắng tinh khiết, the mát nhựt lá bạch đàn - siêu phẩm niche.",
    description: "Một kiệt tác Hoa Huệ Trắng (Tuberose) được xem là chuẩn mực tối thượng. Không nồng gắt hay giả tạo dính phấn, Carnal Flower mở ra xanh rờn rợn nhờ tinh dầu Bạch đàn (Eucalyptus) the mát và Dưa lưới. Ropion mất tới 18 tháng để tìm ra tỉ lệ hoàn hảo này. Huệ xác thịt quyện dừa non béo ngậy, tạo ra một mùi hương lộng lẫy và đầy ám ảnh tâm trí.",
    vibes: [{label: "Tuyệt tác hoa", icon: "🪷"}, {label: "Da thịt", icon: "🌿"}],
    score: { scent: 8.4, uniqueness: 9.0, compliments: 8.0, value: 8.4, total: 8.5 },
    topNotes: [{name: "Bạch đàn (Eucalyptus)"}, {name: "Dưa lưới (Melon)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa huệ trắng (Tuberose)"}, {name: "Hoa ngọc lan tây (Ylang-Ylang)"}, {name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Quả dừa (Coconut)"}, {name: "Xạ hương trắng (White Musk)"}, {name: "Hoa cam tami (Orange Blossom Absolute)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cơm dừa", value: 80, color: "#f5f5dc"},
      {name: "Rừng xanh xẻ mát", value: 75, color: "#556b2f"},
      {name: "Hoa trắng", value: 65, color: "#f8f8ff"},
      {name: "Ngọt bùi", value: 60, color: "#ee3b3b"}
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
console.log('==> BATCH 9 HOAN TAT.');
