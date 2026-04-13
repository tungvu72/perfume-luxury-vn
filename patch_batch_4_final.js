const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  // 31
  "chance-eau-tendre": {
    subName: "EDP", perfumer: "Olivier Polge", year: 2019, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 70, summer: 20, fall: 8, winter: 2 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Chanel Chance Eau Tendre EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Chance Eau Tendre EDP chính hãng: Nét nữ tính thanh tao ngập màu hường từ vỏ bưởi và hoa nhài đan xen.",
    description: "Chance Eau Tendre EDP là một hiện thân rạng rỡ của đóa hồng xuân thì. Sự quyện hòa giữa vị chua nhẹ của bưởi và nét trong trẻo của hoa hồng, hoa nhài mang đến một Vibe cực kỳ tiểu thư, mềm mại nhưng vẫn giữ được sự tinh tế, sang trọng bẩm sinh của nhà Chanel.",
    vibes: [{label: "Tiểu thư", icon: "🌸"}, {label: "Thanh tao", icon: "✨"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 7.0, value: 8.2, total: 7.7 },
    topNotes: [{name: "Quả bưởi (Grapefruit)"}, {name: "Mộc qua (Quince)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}, {name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Xạ hương trắng (White Musk)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ffb6c1"},
      {name: "Trái cây", value: 85, color: "#ffd700"},
      {name: "Hoa hồng", value: 75, color: "#ffc0cb"},
      {name: "Xạ hương", value: 65, color: "#a9a9a9"}
    ]
  },
  // 32
  "coco-eau-de-parfum": {
    subName: "Eau de Parfum", perfumer: "Jacques Polge", year: 1984, gender: "nu", longevity: 10, sillage: 8,
    seasons: { spring: 8, summer: 2, fall: 35, winter: 55 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Chanel Coco EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Coco EDP chính hãng: Một tượng đài vĩnh cửu của thế giới nước hoa cổ điển, quyền lực, ngập tràn hổ phách và đinh hương.",
    description: "Coco EDP mang đậm linh hồn di sản của Chanel, là một bản giao hưởng phức tạp của các loại gia vị cay ấm và hổ phách. Hương đinh hương sưởi ấm hoa hồng nồng nàn, lột tả hình ảnh một người đàn bà quyền lực, trưởng thành và mang sự bí ẩn không thể lấn át đến từ những thập niên rực rỡ.",
    vibes: [{label: "Quyền lực", icon: "👑"}, {label: "Cổ điển (Classic)", icon: "🎞️"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 8.5, value: 8.4, total: 8.4 },
    topNotes: [{name: "Rau mùi (Coriander)"}, {name: "Hoa hồng (Bulgarian Rose)"}, {name: "Đào (Peach)"}, {name: "Nhài (Jasmine)"}, {name: "Quýt (Mandarin)"}],
    middleNotes: [{name: "Đinh hương (Cloves)"}, {name: "Hoa hồng (Rose)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Hoa trinh nữ (Mimosa)"}],
    baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Đậu Tonka"}, {name: "Hương bài (Civet)"}, {name: "Nhựa Opoponax"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#ff8c00"},
      {name: "Cay ấm", value: 90, color: "#b22222"},
      {name: "Ngọt ngào", value: 75, color: "#8b0000"},
      {name: "Hoa cỏ", value: 60, color: "#ffc0cb"},
      {name: "Phấn", value: 50, color: "#dda0dd"}
    ]
  },
  // 33
  "coco-eau-de-toilette": {
    subName: "Eau de Toilette", perfumer: "Jacques Polge", year: 1984, gender: "nu", longevity: 8, sillage: 6,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Chanel Coco EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Coco EDT chính hãng: Bản phối màu nhẹ nhàng hơn của tượng đài Coco với hổ phách, trái cây và gia vị.",
    description: "Vẫn giữ trọn cốt cách quý phái của bản gốc, Coco EDT lùi lại một bước để những nốt đào chín và tinh dầu cam quýt mọng nước tỏa sáng hơn. Một mùi hương gia vị hổ phách hoàn hảo nhưng dễ thở và uyển chuyển hơn, hợp để diện vào những ngày chớm lạnh mang theo nét hoài niệm sâu lắng.",
    vibes: [{label: "Hoài niệm", icon: "🕰️"}, {label: "Quý phái", icon: "💃"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 7.9 },
    topNotes: [{name: "Rau mùi (Coriander)"}, {name: "Quýt (Mandarin Orange)"}, {name: "Đào (Peach)"}, {name: "Nhài (Jasmine)"}],
    middleNotes: [{name: "Hồng (Rose)"}, {name: "Đinh hương (Cloves)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Trinh nữ (Mimosa)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hổ phách (Amber)"}, {name: "Hương bài (Civet)"}, {name: "Nhựa Opoponax"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#ff8c00"},
      {name: "Cay ấm", value: 85, color: "#b22222"},
      {name: "Ngọt ngào", value: 75, color: "#d2691e"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Phấn", value: 60, color: "#dda0dd"}
    ]
  },
  // 34
  "coco-mademoiselle-edp": {
    subName: "EDP", perfumer: "Jacques Polge", year: 2001, gender: "nu", longevity: 9, sillage: 8,
    seasons: { spring: 35, summer: 20, fall: 30, winter: 15 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Chanel Coco Mademoiselle EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Coco Mademoiselle EDP chính hãng: Siêu phẩm doanh thu mọi thời đại, một mùi hoắc hương đầy quyền lực ngầm.",
    description: "Chanel Coco Mademoiselle là cuộc cách mạng của giới mùi hương. Sự đan xen xuất sắc giữa vẻ rực rỡ tươi sáng của cam quýt và độ sâu thẳm, quyền lực của hoắc hương (Patchouli) tạo nên một hình tượng người phụ nữ hiện đại: Độc lập, sắc sảo nhưng không kém phần gợi cảm.",
    vibes: [{label: "Thành đạt", icon: "💼"}, {label: "Sắc sảo", icon: "⚡"}],
    score: { scent: 8.2, uniqueness: 6.0, compliments: 8.5, value: 8.2, total: 8.0 },
    topNotes: [{name: "Quả cam (Orange)"}, {name: "Quýt (Mandarin)"}, {name: "Cam Bergamot"}, {name: "Hoa cam khô"}],
    middleNotes: [{name: "Hồng Thổ Nhĩ Kỳ"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa trinh nữ"}, {name: "Ngọc lan tây (Ylang-Ylang)"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Xạ hương trắng"}, {name: "Hương thảo (Vetiver)"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Hoắc hương", value: 90, color: "#228b22"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Ngọt ngào", value: 70, color: "#ff4500"},
      {name: "Hoa hồng", value: 60, color: "#ffc0cb"}
    ]
  },
  // 35
  "coco-noir": {
    subName: "EDP", perfumer: "Jacques Polge", year: 2012, gender: "nu", longevity: 8, sillage: 6,
    seasons: { spring: 15, summer: 5, fall: 45, winter: 35 }, dayNight: { day: 15, night: 85 },
    seoTitle: "Chanel Coco Noir EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Coco Noir EDP chính hãng: Đen tuyền bí ẩn, vẻ đẹp của nhũ hương và hoắc hương bóng tối.",
    description: "Ẩn mình trong thiết kế thủy tinh đen tuyền huyền bí, Coco Noir khắc hoạ sự tĩnh mịch, quyến rũ mang hơi hướm phương Đông. Hoắc hương hoà quyện đằm thắm vào nhũ hương và đàn hương, bóc tách ra từng dải lụa mềm mại vây quanh không gian màn đêm, khiến bất kỳ ai cũng phải tò mò.",
    vibes: [{label: "Bí ẩn (Dark)", icon: "🌑"}, {label: "Quyến rũ", icon: "🫦"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 7.0, value: 8.2, total: 7.7 },
    topNotes: [{name: "Quả bưởi (Grapefruit)"}, {name: "Cam Bergamot"}, {name: "Cam (Orange)"}],
    middleNotes: [{name: "Hồng (Rose)"}, {name: "Hoa phong lữ (Geranium)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa thủy tiên"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Nhũ hương (Olibanum)"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Hoắc hương", value: 100, color: "#006400"},
      {name: "Cam chanh", value: 85, color: "#ffd700"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Cay ấm", value: 65, color: "#b22222"},
      {name: "Nhựa hương", value: 50, color: "#556b2f"}
    ]
  },
  // 36
  "coromandel-eau-de-parfum": { // Note ID in mockData is likely coromandel-eau-de-parfum
    subName: "EDP", perfumer: "Jacques Polge", year: 2016, gender: "unisex", longevity: 10, sillage: 8,
    seasons: { spring: 8, summer: 2, fall: 35, winter: 55 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Chanel Coromandel EDP Les Exclusifs chính hãng mua ở đâu?",
    metaDescription: "Đánh giá Chanel Coromandel EDP chính hãng: Siêu phẩm hoắc hương phủ chocolate trắng ngập tràn nhung lụa phương Đông.",
    description: "Được mệnh danh là 'Nữ hoàng hoắc hương', Coromandel thuộc dòng Les Exclusifs đắt đỏ của Chanel phô bày một loại Patchouli mượt như nhung lụa. Được phủ một lớp áo choàng chocolate trắng ngọt lịm và nhựa sống (benzoin), mùi hương này sưởi ấm tiết trời lạnh lẽo bằng sự vương giả ngạo nghễ tột cùng.",
    vibes: [{label: "Quý tộc", icon: "⚜️"}, {label: "Vương giả", icon: "🍷"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 8.8, total: 8.6 },
    topNotes: [{name: "Cam đắng (Bitter Orange)"}, {name: "Tinh dầu hoa cam (Neroli)"}, {name: "Hương cam chanh"}],
    middleNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Rễ diên vĩ (Orris)"}, {name: "Hoa hồng (Rose)"}, {name: "Hoa nhài"}],
    baseNotes: [{name: "Sôcôla trắng (White Chocolate)"}, {name: "Nhựa Benzoin"}, {name: "Hổ phách (Amber)"}, {name: "Nhũ hương (Olibanum)"}],
    accords: [
      {name: "Hoắc hương", value: 100, color: "#228b22"},
      {name: "Gỗ", value: 90, color: "#8b4513"},
      {name: "Hổ phách", value: 80, color: "#ff8c00"},
      {name: "Cay ấm", value: 70, color: "#b22222"},
      {name: "Chocolate", value: 60, color: "#3e2723"}
    ]
  },
  // 37
  "egoiste": {
    subName: "EDT", perfumer: "Jacques Polge", year: 1990, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Chanel Égoïste EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Égoïste EDT chính hãng: Đại diện nam tính đầy kiêu hãnh của dòng hương gỗ và quế cay nồng.",
    description: "Égoïste là tên gọi mang ý nghĩa 'Kẻ ích kỷ' - một tượng đài dành cho những tay chơi ngạo mạn nhưng sở hữu gu thẩm mỹ cực cao. Hàng loạt nốt nhạc từ gỗ, đinh hương hòa làm một cùng quế tạo hiệu ứng nồng nhiệt cay ấm vô đối. Một DNA nam tính kiểu mẫu của những năm 90 nhưng vẫn bất hủ đến ngày nay.",
    vibes: [{label: "Phong trần", icon: "🥃"}, {label: "Hào hoa", icon: "🎩"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 8.5, value: 8.4, total: 8.4 },
    topNotes: [{name: "Gỗ cẩm lai (Brazilian Rosewood)"}, {name: "Rau mùi (Coriander)"}, {name: "Quýt Sicilian"}, {name: "Gỗ đào dái (Mahogany)"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Hồng Damask (Damask Rose)"}, {name: "Hoa cẩm chướng (Carnation)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Thuốc lá (Tobacco)"}, {name: "Vani (Vanilla)"}, {name: "Da thuộc (Leather)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay ấm", value: 85, color: "#b22222"},
      {name: "Nhựa hương", value: 70, color: "#006400"},
      {name: "Quế", value: 60, color: "#8b0000"},
      {name: "Hổ phách", value: 50, color: "#ff8c00"}
    ]
  },
  // 38
  "egoiste-platinum": {
    subName: "EDT", perfumer: "Jacques Polge", year: 1993, gender: "nam", longevity: 7, sillage: 6,
    seasons: { spring: 40, summer: 40, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Chanel Égoïste Platinum EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel Égoïste Platinum EDT chính hãng: Hình tượng người đàn ông áo mi trắng, sạch sẽ mượt mà từ lavender.",
    description: "Platinum mọc lên từ cái bóng của nguyên bản nhưng lại mang hình thái mát lịm của kim loại. Chút hoa oải hương (lavender) pha xô thơm làm cho hương thơm này có sự sạch sẽ, nam tính một cách chuẩn mực kiểu áo sơ mi trắng tinh tươm. Cực kỳ nịnh mũi và sắc sảo, thích hợp để diện chốn công sở mỗi tuần.",
    vibes: [{label: "Lịch lãm", icon: "👔"}, {label: "Sạch sẽ", icon: "💈"}],
    score: { scent: 8.6, uniqueness: 7.0, compliments: 7.0, value: 8.6, total: 7.9 },
    topNotes: [{name: "Oải hương (Lavender)"}, {name: "Hương thảo (Rosemary)"}, {name: "Tinh dầu hoa cam (Neroli)"}, {name: "Lá cam (Petitgrain)"}],
    middleNotes: [{name: "Hoa phong lữ (Geranium)"}, {name: "Xô thơm (Clary Sage)"}, {name: "Nhựa Galbanum"}, {name: "Nhài (Jasmine)"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Hương bài (Vetiver)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Đàn hương"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#556b2f"},
      {name: "Cay tươi", value: 85, color: "#90ee90"},
      {name: "Gỗ", value: 70, color: "#8b4513"},
      {name: "Oải hương", value: 60, color: "#e6e6fa"},
      {name: "Hoa cỏ", value: 50, color: "#ffc0cb"}
    ]
  },
  // 39
  "no-19-eau-de-parfum": {
    subName: "EDP", perfumer: "Jacques Polge", year: 2014, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 60, summer: 15, fall: 15, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Chanel No 19 EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No 19 EDP chính hãng: Nốt hương xanh rêu gai góc, phủ đầy bột rễ diên vĩ kiêu kì và lạnh lùng.",
    description: "Chẳng phải là đóa hoa đang nở rộ e ấp, No.19 là một màu xanh thẫm, lạnh lẽo, cao ngạo và đanh thép. Tổ hợp của rêu sồi (Oakmoss) pha lẫn bột rễ diên vĩ (Orris) mang lại một lớp hương phấn gỗ sắc lạnh, mô tả hoàn hảo thần thái độc tôn lạnh lùng của bậc nữ vương khó tiếp cận.",
    vibes: [{label: "Kiêu kỳ", icon: "👸"}, {label: "Lạnh lùng", icon: "🧊"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Hương xanh (Green Notes)"}, {name: "Cam Bergamot"}, {name: "Neroli"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hoa hồng (Rose)"}, {name: "Hoa thủy tiên (Narcissus)"}, {name: "Hoa linh lan (Lily-of-the-Valley)"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Hương bài (Vetiver)"}, {name: "Da thuộc (Leather)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Thực vật", value: 100, color: "#006400"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Diên vĩ", value: 70, color: "#9370db"},
      {name: "Phấn", value: 60, color: "#dda0dd"},
      {name: "Lòng đất", value: 50, color: "#5c4033"}
    ]
  },
  // 40
  "no-19-eau-de-toilette": {
    subName: "EDT", perfumer: "Henri Robert", year: 1970, gender: "nu", longevity: 5, sillage: 6,
    seasons: { spring: 60, summer: 30, fall: 8, winter: 2 }, dayNight: { day: 90, night: 10 },
    seoTitle: "Chanel No 19 EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No 19 EDT chính hãng: Bản gốc kinh điển từ 1970 với hơi thở diên vĩ xanh biếc như một sớm mùa xuân.",
    description: "Cùng mang tông Vibe kiêu kỳ sắc lạnh, No.19 EDT (trình làng bởi Henri Robert từ những năm 1970) lại sáng và ẩm ướt rêu phong hơn. Diên vĩ hòa mình với sự nhão nhẹt nhưng lôi cuốn của nhựa galbanum, tôn vinh hình mẫu phụ nữ trí thức, xa cách, luôn khoác trên mình những đường cắt may Haute couture.",
    vibes: [{label: "Cổ điển", icon: "⏳"}, {label: "Khoảng cách", icon: "❄️"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Nhựa Galbanum"}, {name: "Lục bình (Hyacinth)"}, {name: "Cam Bergamot"}, {name: "Neroli"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Rễ diên vĩ (Orris Root)"}, {name: "Hoa linh lan (Lily-of-the-Valley)"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Cỏ hương bài (Vetiver)"}, {name: "Da thuộc (Leather)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Thực vật", value: 100, color: "#004d00"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Diên vĩ", value: 75, color: "#8a2be2"},
      {name: "Phấn", value: 65, color: "#dda0dd"},
      {name: "Lòng đất", value: 55, color: "#5c4033"}
    ]
  }
};

const propsToReplace = ['subName', 'perfumer', 'year', 'gender', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'description', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords', 'vibes'];

for (let id in updates) {
  let startIdx = lines.findIndex(l => l.includes(`id: "${id}"`));
  if (startIdx === -1) {
    console.log(`[!] Khong tim thay ID: ${id}`);
    continue; 
  }
  
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes(`isPublished: true`));
  
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
        let accStr = `    accords: [\n`;
        updates[id][p].forEach((a, idx) => {
          accStr += `      {"name": "${a.name}", "value": ${a.value}, "color": "${a.color}"}${idx < updates[id][p].length - 1 ? ',' : ''}\n`;
        });
        accStr += `    ],`;
        injectLines.push(accStr);
      } else if (p === 'vibes') {
        let vStr = `    vibes: [\n`;
        updates[id][p].forEach((v, idx) => {
          vStr += `      { label: "${v.label}", icon: "${v.icon}" }${idx < updates[id][p].length - 1 ? ',' : ''}\n`;
        });
        vStr += `    ],`;
        injectLines.push(vStr);
      } else if (['topNotes', 'middleNotes', 'baseNotes'].includes(p)) {
        let arrStr = `    ${p}: [\n` + updates[id][p].map(n => `      {"name": "${n.name}"}`).join(',\n') + `\n    ],`;
        injectLines.push(arrStr);
      } else if (p === 'description') {
        injectLines.push(`    description: ${vStr},`);
      } else {
        injectLines.push(`    ${p}: ${vStr},`);
      }
    }
  }
  
  cleanedLines.splice(nameFileIdx + 1, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
  console.log(`[v] Đã cập nhật xong ID: ${id}`);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("==> TẤT CẢ HOÀN TẤT. Ghi ra ổ cứng.");
