const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "lhomme-intense": {
    subName: "EDP", perfumer: "Daniela Andrier", year: 2017, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa Prada L'Homme Intense EDP bóng đêm quyền lực",
    metaDescription: "Đánh giá Prada L'Homme Intense EDP: Bột Hoa diên vĩ (Iris) trầm tĩnh cuộn trong Da thuộc (Leather) và Đậu Tonka. Phiên bản sơ mi đen sang trọng tột bậc.",
    description: "Nếu bản gốc là chiếc sơ mi trắng văn phòng, thì L'Homme Intense là bộ vest đen uy quyền cho những buổi tiệc đêm sang trọng. Vẫn giữ cốt lõi bột Hoa Diên Vĩ (Iris) trứ danh sạch sẽ, nhưng nay được bọc thêm lớp Da thuộc (Leather) đen nhánh và rắc đẫm Đậu Tonka ngọt ngào, trầm ấm tột độ. Nó cực kỳ nam tính, bí ẩn và hút hồn như ánh nhìn sâu thẳm của một quý ông. Xịt đi hẹn hò hoặc dạo phố đêm mùa Thu Đông thì bao trọn điểm 10/10.",
    vibes: [{label: "Vest đen", icon: "🕴️"}, {label: "Bí ẩn", icon: "🌒"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Hoa Diên Vĩ (Iris)"}],
    middleNotes: [{name: "Hổ phách (Amber)"}, {name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Da thuộc (Leather)"}, {name: "Gỗ đàn hương"}],
    accords: [
      {name: "Phấn diên vĩ", value: 100, color: "#9370db"},
      {name: "Hổ phách", value: 85, color: "#d2691e"},
      {name: "Gia vị ấm", value: 75, color: "#8b4513"},
      {name: "Gỗ sấy", value: 65, color: "#6b4226"},
      {name: "Da thuộc", value: 60, color: "#54301a"}
    ]
  },
  "luna-rossa-black": {
    subName: "EDP", perfumer: "Daniela Andrier", year: 2018, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Prada Luna Rossa Black nam tính nguy hiểm",
    metaDescription: "Review Prada Luna Rossa Black: Bóng tối dạt dào từ Hổ phách (Amber) và Coumarin. Xạ hương bám rít hòa nhịp cùng Angelica tạo hương đen tối quyến rũ.",
    description: "Con ác chủ bài đen tối nhất dòng Luna Rossa! Luna Rossa Black không còn vibe đại dương thanh mát, thay vào đó là thứ chất lỏng sẫm màu như lốp xe cháy quyện chút ngọt ấm. Cái ngọt rân rân của Đậu Tonka (Coumarin) được Hổ phách (Amber) bao bọc, thêm Xạ hương (Musk) nhầy nhụa biến vòng tay của nam giới trở thành một vũng lầy cám dỗ. Bí ẩn, hiện đại, và rất 'Bad Boy' mặc áo khoác da lảng vảng trước thềm club lúc nửa đêm.",
    vibes: [{label: "Bad Boy", icon: "🏍️"}, {label: "Áo khoác da", icon: "🧥"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.8, value: 8.0, total: 8.5 },
    topNotes: [{name: "Cam Bergamot"}],
    middleNotes: [{name: "Cây đương quy (Angelica)"}, {name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Đậu Tonka (Coumarin)"}, {name: "Hổ phách đỏ (Amber)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#cd6600"},
      {name: "Xạ hương", value: 85, color: "#e6e6fa"},
      {name: "Phấn ngọt", value: 75, color: "#f5deb3"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Vani", value: 60, color: "#ffffe0"}
    ]
  },
  "luna-rossa-carbon": {
    subName: "EDT", perfumer: "Daniela Andrier", year: 2017, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 40, summer: 30, fall: 20, winter: 10 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Prada Luna Rossa Carbon nam thần oai vệ",
    metaDescription: "Đánh giá Prada Luna Rossa Carbon: Phiên bản sắc sảo, trưởng thành hơn của Sauvage. Tràn ngập Oải hương (Lavender) mix Kim loại (Metallic) sắc lẹm cực ngầu.",
    description: "Được mệnh danh là 'Dior Sauvage phiên bản học thức'! Luna Rossa Carbon mượn cấu trúc cay mát nịnh mũi nổ tung của Bergamot, Tiêu, Ambroxan nhưng lược bỏ sự hoang dại ồn ào. Thay vào đó, Prada độp thêm bó Oải hương (Lavender) đậm chất quý ông tiệm tóc Ý, cùng hiệu ứng than đá và kim loại (Metallic) sắc lẹm. Ngửi nó sạch hơn, tinh tế hơn, và mượt như một cỗ máy thể thao trượt ưới màn sương sớm rực rỡ.",
    vibes: [{label: "Siêu xe đua", icon: "🏎️"}, {label: "Lạnh lùng", icon: "🧊"}],
    score: { scent: 9.0, uniqueness: 7.5, compliments: 9.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Tiêu cay (Pepper)"}],
    middleNotes: [{name: "Oải hương (Lavender)"}, {name: "Than đá (Coal)"}, {name: "Hương nhôm kim loại"}, {name: "Đất ướt"}],
    baseNotes: [{name: "Ambroxan"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#3cb371"},
      {name: "Cay tươi", value: 85, color: "#7cb342"},
      {name: "Oải hương", value: 75, color: "#9370db"},
      {name: "Kim loại", value: 65, color: "#a9a9a9"},
      {name: "Ambroxan", value: 60, color: "#8b4513"}
    ]
  },
  "rj-burlington-1819": {
    subName: "Extrait de Parfum", perfumer: "Roja Dove", year: 2020, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Roja Dove Burlington 1819 triệu phú tinh xảo",
    metaDescription: "Review Roja Burlington 1819: Tuyệt tác cam chanh (Citrus) của vua nước hoa. Bưởi tây rực rỡ bứt phá qua lớp Gỗ, Rêu sồi phong trần và Bạc Hà tứa mát.",
    description: "Bia tươi đẳng cấp hoàng gia gói gọi trong tinh chất triệu USD! Roja Burlington 1819 đánh vỡ khái niệm citrus mau bay, bóp nát Bưởi tây, Chanh đào và Bạc hà the buốt bung xõa rực rỡ bám nhốt dai dẳng. Lớp nền là bản giao hưởng phức tạp của Thuốc lá, Long diên hương (Ambergris) xa xỉ và Rêu sồi (Oakmoss) phong trần. Ngửi toát lên dáng vẻ của một nam thần vận đồ lanh, rít xì gà trên boong du thuyền Monaco lộng gió.",
    vibes: [{label: "Triệu phú Yacht", icon: "🛥️"}, {label: "Citrus xa xỉ", icon: "🍋"}],
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.0, value: 7.5, total: 8.8 },
    topNotes: [{name: "Bưởi tây (Grapefruit)"}, {name: "Chanh đắng (Lime)"}, {name: "Lá bạc hà (Mint)"}, {name: "Cam đắng"}],
    middleNotes: [{name: "Gừng (Ginger)"}, {name: "Quế (Cinnamon)"}, {name: "Nhựa Galbanum"}],
    baseNotes: [{name: "Long diên hương (Ambergris)"}, {name: "Thuốc lá (Tobacco)"}, {name: "Rêu sồi tươi"}, {name: "Gỗ Sồi trắng"}],
    accords: [
      {name: "Bưởi cam", value: 100, color: "#ffff00"},
      {name: "Tươi cay mát", value: 85, color: "#7fff00"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Hổ phách", value: 65, color: "#cd6600"},
      {name: "Rêu xanh", value: 60, color: "#228b22"}
    ]
  },
  "vibrato": {
    subName: "EDP", perfumer: "Christian Provenzano", year: 2022, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Sospiro Vibrato ông hoàng mùa hè mới",
    metaDescription: "Đánh giá Sospiro Vibrato: Quái thú bám tỏa bóp nát Tygar. Rổ bưởi chùm mọng nước gừng sủi bọt cọ xát với bột Phấn (Powdery) quyến rũ bậc nhất.",
    description: "Ông hoàng Citrus mới nổi đánh bật đế chế Bvlgari Tygar! Vibrato sút một cú bùng nổ của Bưởi chùm (Grapefruit) tứa nước mix chung Gừng (Ginger) làm nó sủi bọt, râm ran trên sóng mũi. Điều làm nó ăn tiền là thứ bột Phấn (Powdery) mịn màng vuốt mượt cực độ, kết hợp Xạ Hương bám tỏa điên rồ ròng rã suốt cả ngày dài hè nóng đổ lửa. Mùi hương ngửi rất 'giàu', vừa sảng khoái vươn vai vừa đĩnh đạc tự tin tột đỉnh.",
    vibes: [{label: "Hoàng quyền", icon: "👑"}, {label: "Bưởi bọt", icon: "🍹"}],
    score: { scent: 9.3, uniqueness: 8.5, compliments: 9.5, value: 8.0, total: 8.8 },
    topNotes: [{name: "Bưởi chùm (Grapefruit)"}, {name: "Bergamot"}, {name: "Hoa Nhài"}],
    middleNotes: [{name: "Gừng tự nhiên (Ginger)"}, {name: "Hương xanh cỏ mát (Green Notes)"}, {name: "Bột Phấn (Powdery Notes)"}],
    baseNotes: [{name: "Xạ hương nhung (Musk)"}, {name: "Gỗ tuyết tùng"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Bưởi chua", value: 100, color: "#ffff33"},
      {name: "Cay gừng sủi bọt", value: 85, color: "#9acd32"},
      {name: "Phấn mịn", value: 75, color: "#eeddcc"},
      {name: "Gỗ mượt", value: 65, color: "#8b4513"},
      {name: "Lá xanh tơ", value: 60, color: "#008000"}
    ]
  },
  "thomas-kosmala-no": {
    subName: "EDP", perfumer: "Thomas Kosmala", year: 2018, gender: "unisex", longevity: 9, sillage: 9,
    seasons: { spring: 20, summer: 15, fall: 35, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Thomas Kosmala No 4 quái thú bám tỏa",
    metaDescription: "Review Thomas Kosmala No 4 Apres l'Amour: Cỗ máy phát tia cực tím ràn rụa Ambroxan và Vỏ Chanh càn quét mọi không gian. Được ví như BR540 phiên bản phòng gym.",
    description: "Cỗ xe tăng bọc thép bám tỏa kinh dị nhất tủ đồ! No4 mượn nền tảng khét lẹt đặc quánh nhựa kẹo bông của BR540, nhưng ném tọt thêm Vỏ chanh đắng nghét (Lemon Zest) và rổ Ambroxan sắc bén cào não. Nó không ngọt ruồi mà thiên hướng kim loại chói lọi, sạch bong, xuyên phá mọi lớp khẩu trang và chọc thẳng vào cuống phổi người đối diện. Xịt quá 2 nhát đi gym thì bạn chính là ông hoàng độc chiếm không gian.",
    vibes: [{label: "Quái vật tỏa", icon: "🦖"}, {label: "Bền bỉ", icon: "🔋"}],
    score: { scent: 8.0, uniqueness: 8.5, compliments: 8.5, value: 9.5, total: 8.6 },
    topNotes: [{name: "Vỏ Chanh (Lemon Zest)"}, {name: "Tinh dầu lá Chanh (Petitgrain)"}],
    middleNotes: [{name: "Gia vị cay (Spicy Notes)"}],
    baseNotes: [{name: "Ambroxan lạch cạch"}, {name: "Xạ Hương (Musk)"}, {name: "Hợp chất sấy Gỗ (Woody Notes)"}],
    accords: [
      {name: "Xạ hương hổ phách", value: 100, color: "#e6e6fa"},
      {name: "Ambroxan cháy", value: 85, color: "#cd6600"},
      {name: "Gỗ sấy", value: 75, color: "#8b4513"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Cam chanh đắng", value: 60, color: "#ffff00"}
    ]
  },
  "tom-ford-black-orchid": {
    subName: "EDP", perfumer: "Givaudan", year: 2006, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 15, night: 85 },
    seoTitle: "Nước hoa Tom Ford Black Orchid hoa lan đen bí ẩn",
    metaDescription: "Đánh giá Tom Ford Black Orchid EDP: Quyền lực tuyệt đối với bóng râm dâm đãng của nấm Truffle đen và Socola đắng. Hương thơm gợi cảm nhất mọi thời đại.",
    description: "Kỷ nguyên đen tối xa hoa đầy dục vọng! Black Orchid không dành cho những tâm hồn trong sáng. Ngay cú xịt đầu, mũi Đất ướt át nồng nặc của nấm Truffle quý hiếm nhào trộn lầy lụa với Hoắc hương tăm tối. Hoa Phong Lan Đen ma mị nở rộ được rưới lớp Socola Đen đắng ngắt ma mị cực độ. Nó ngột ngạt, nguy hiểm nhưng tỏa ra ma lực nhục dục không thể kháng cự. Xịt đi quẩy club hay hẹn hò đêm tình nhân thì đối tác xác định...",
    vibes: [{label: "Dục vọng", icon: "🫦"}, {label: "Xã hội đen", icon: "🕷️"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Nấm Truffle đen"}, {name: "Hoa nhài Pháp"}, {name: "Ngọc lan tây (Ylang)"}, {name: "Lý chua đen"}],
    middleNotes: [{name: "Hoa Phong Lan Đen (Orchid)"}, {name: "Gia vị"}, {name: "Hoa sen"}],
    baseNotes: [{name: "Sôcôla đen (Dark Chocolate)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Hương Nhang (Incense)"}, {name: "Vani"}],
    accords: [
      {name: "Gia vị ấm", value: 100, color: "#8b0000"},
      {name: "Đất rêu", value: 85, color: "#4f4f4f"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Ngọt đắng", value: 65, color: "#ff6347"},
      {name: "Hổ phách", value: 60, color: "#b8860b"}
    ]
  },
  "grey-vetiver": {
    subName: "EDP", perfumer: "Harry Fremont", year: 2009, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 40, fall: 20, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Tom Ford Grey Vetiver EDP tài phiệt",
    metaDescription: "Review Tom Ford Grey Vetiver EDP: Cỏ hương bài (Vetiver) tắm trong ánh sáng kim loại Bưởi tây lạnh ngắt. Sạch sẽ, góc cạnh, đầy học thức và quyền lực cự trào.",
    description: "Mùi hương của sự thăng tiến và ký kết hợp đồng triệu đô! Grey Vetiver sở hữu lõi Cỏ hương bài (Vetiver) hoàn hảo nhất thế giới, được gọt giũa sạch tưng, giòn rụm, sáng loáng nhờ đính kết với Bưởi tây (Grapefruit) tứa nước. Nét Mộc nhĩ - Đất rêu đặc trưng của Vetiver đã bị vuốt thẳng thớm thành một chiếc cravat màu xám tro siêu thanh lịch. Đứng đắn, trí thức, sạch bong và vô cùng đáng tin cậy cho những buổi gặp gỡ đối tác hệ trọng.",
    vibes: [{label: "Tài phiệt", icon: "✒️"}, {label: "Tinh tế", icon: "👔"}],
    score: { scent: 9.2, uniqueness: 8.8, compliments: 8.5, value: 8.0, total: 8.6 },
    topNotes: [{name: "Bưởi tây (Grapefruit)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Cây xô thơm"}],
    middleNotes: [{name: "Nhục đậu khấu (Nutmeg)"}, {name: "Ớt khô (Pimento)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Rêu sồi (Oakmoss)"}, {name: "Hương gỗ mát"}],
    accords: [
      {name: "Gỗ giòn", value: 100, color: "#808000"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Đất ướt", value: 75, color: "#5c4033"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Cay tươi", value: 60, color: "#7cb342"}
    ]
  },
  "lost-cherry": {
    subName: "EDP", perfumer: "Louise Turner", year: 2018, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Tom Ford Lost Cherry quả anh đào đỏ mọng",
    metaDescription: "Đánh giá Tom Ford Lost Cherry EDP: Quả Cherry đỏ mọng ngâm trong rượu rỉ mật. Ngọt ngào hư hỏng với Hạnh nhân bùi béo thiêu rụi túi tiền mọi dân chơi.",
    description: "Cắn ngập hàm răng vào quả Anh đào ngâm rượu vang hảo hạng! Tom Ford Lost Cherry là một bản thiết kế đắt đỏ kinh hồn, lấy cảm hứng từ quả Cherry chín mọng ứa đường, nhúng vào thứ siro Hạnh nhân (Almond) bùi béo ngậy môi. Khi bay hơi, Rượu mùi thấm vào da thịt, rải thêm Đậu Tonka nung ấm áp làm mùi hương cực kỳ 'hư hỏng', lả lơi và gọi tình. Mặc nó là bạn đang ném tiền qua cửa sổ nhưng bù lại thu về hàng đống si tình gục ngã.",
    vibes: [{label: "Hư hỏng", icon: "🍒"}, {label: "Rượu anh đào", icon: "🍷"}],
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.0, value: 6.5, total: 8.5 },
    topNotes: [{name: "Quả Anh đào (Cherry)"}, {name: "Hạnh nhân đắng (Almond)"}, {name: "Rượu mùi (Liquor)"}],
    middleNotes: [{name: "Mận mọng"}, {name: "Hoa hồng Thổ Nhĩ Kỳ"}, {name: "Hoa Nhài Sambac"}],
    baseNotes: [{name: "Đậu Tonka"}, {name: "Vani (Vanilla)"}, {name: "Nhựa Peru"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Anh đào", value: 100, color: "#dc143c"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Hạnh nhân bùi", value: 75, color: "#deb887"},
      {name: "Hạt", value: 65, color: "#cd853f"},
      {name: "Trái cây", value: 60, color: "#ff6347"}
    ]
  },
  "noir-extreme": {
    subName: "EDP", perfumer: "Sonia Constant", year: 2015, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Tom Ford Noir Extreme nam tính ngọt ngào",
    metaDescription: "Review Tom Ford Noir Extreme EDP: Gã Don Juan sát thủ mang đĩa kem Kulfi Ấn Độ rưới Vani và Nhục đậu khấu ranh ma chinh phục trái tim đàn bà.",
    description: "Ngọt ngào, ấm áp nhưng đầy toan tính của một Don Juan mặc suit! Noir Extreme không tấn công dồn dập mà từ từ lách vào tâm trí bằng nét êm ái xốp mịn của kem Ấn Độ (Kulfi) lạnh nhưng tan nhuyễn vào Vani (Vanilla). Chút Nhục đậu khấu và Quýt hồng tạo hiệu ứng ánh sáng kim loại lóng lánh, đẩy cái ngọt sệt trở nên sang trọng lẫm liệt chứ không phải kiểu kẹo bánh con nít. Hẹn hò dưới ánh nến mùa Đông với Noir Extreme, chẳng ai có thể từ chối vòng tay bạn.",
    vibes: [{label: "Lãng tử", icon: "🌹"}, {label: "Hẹn hò đêm", icon: "🕯️"}],
    score: { scent: 9.2, uniqueness: 8.8, compliments: 9.2, value: 8.5, total: 8.9 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Nhục đậu khấu (Nutmeg)"}, {name: "Nhụy Saffron"}, {name: "Quýt đào"}],
    middleNotes: [{name: "Kem Kulfi Ấn Độ"}, {name: "Hoa Hồng"}, {name: "Nhũ hương (Mastic)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách tươi (Amber)"}, {name: "Cốt gỗ khô (Woody Notes)"}],
    accords: [
      {name: "Gia vị ấm", value: 100, color: "#cd3300"},
      {name: "Ngọt kẹo kem", value: 85, color: "#ff4500"},
      {name: "Vani", value: 75, color: "#ffffcc"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Phấn mây", value: 60, color: "#eaddcf"}
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
console.log('==> BATCH 23 HOAN TAT.');
