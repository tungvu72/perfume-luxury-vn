const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "armani-si-edp": {
    subName: "EDP", perfumer: "Christine Nagel", year: 2013, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Giorgio Armani Sì EDP chính hãng mua ở đâu? Review nữ tính",
    metaDescription: "Đánh giá Armani Sì EDP chính hãng: Lời khẳng định 'Có' với tình yêu, nịnh mũi quyến rũ với lá Lý chua đen thanh tao và Vani mềm mại.",
    description: "Sì theo tiếng Ý nghĩa là 'Có' – một lời đồng ý dấn thân vào sự ngọt ngào, tự do và đam mê. Hương thơm mở đầu bằng sự thanh tao sắc sảo của lá Lý chua đen (Cassis), dần được làm dịu bởi Hoa hồng tháng 5 mượt mà và đóng lại bằng vầng hào quang của Vani, Gỗ và Hoắc hương. Vừa nữ tính đằm thắm, vừa quyền lực, sang trọng như một người phụ nữ thành đạt đã thấu hiểu chính mình.",
    vibes: [{label: "Nữ tính", icon: "💄"}, {label: "Sang trọng", icon: "🍷"}],
    score: { scent: 7.6, uniqueness: 6.5, compliments: 8.5, value: 7.6, total: 7.7 },
    topNotes: [{name: "Lá lý chua đen (Cassis)"}],
    middleNotes: [{name: "Hoa hồng tháng năm (May Rose)"}, {name: "Hoa lan Nam Phi (Freesia)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Hương gỗ (Woody Notes)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Vani", value: 85, color: "#fffacd"},
      {name: "Thảo mộc", value: 75, color: "#2e8b57"},
      {name: "Cay nhẹ", value: 65, color: "#d2691e"},
      {name: "Trái cây", value: 60, color: "#ff6347"}
    ]
  },
  "stronger-with-you-intensely": {
    subName: "EDP", perfumer: "Cecile Matton", year: 2019, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 30, winter: 55 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Stronger With You Intensely chính hãng độ bát hương bao lâu?",
    metaDescription: "Review Stronger With You Intensely chính hãng: Cú nổ ngọt ngào đầy hấp dẫn của Kẹo bơ cứng Toffee, Vani và Quế. Chai nước hoa nam mùa đông đỉnh cao.",
    description: "Chai nước hoa được mệnh danh là 'cỗ máy tán tỉnh' khét tiếng mùa đông. Stronger With You Intensely mang tới nốt hương Kẹo bơ cứng (Toffee) cháy bỏng quyện cùng Vani và Quế cay nồng. Tổ hợp ngọt ấm này dội thẳng vào khứu giác đối phương sự ấm áp, ngon lành và tràn ngập năng lượng gọi mời. Độ bám tỏa cực kỳ hung hãn, lý tưởng tuyệt đối cho clubbing hoặc hẹn hò đêm lạnh.",
    vibes: [{label: "Gọi mời", icon: "🔥"}, {label: "Ngọt ngào", icon: "🍮"}],
    score: { scent: 9.2, uniqueness: 7.0, compliments: 9.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Tiêu hồng (Pink Pepper)"}, {name: "Cây bách xù"}, {name: "Hoa violet"}],
    middleNotes: [{name: "Kẹo bơ cứng (Toffee)"}, {name: "Quế (Cinnamon)"}, {name: "Oải hương"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Vani", value: 100, color: "#ffffcc"},
      {name: "Ngọt ngào", value: 85, color: "#dc143c"},
      {name: "Hổ phách", value: 75, color: "#d2691e"},
      {name: "Quế", value: 65, color: "#cd853f"},
      {name: "Cay ấm", value: 60, color: "#8b0000"}
    ]
  },
  "gentleman-reserve-privee": {
    subName: "EDP", perfumer: "Nathalie Lorson", year: 2022, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 45, winter: 35 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Givenchy Gentleman Reserve Privee EDP chính hãng giá tốt",
    metaDescription: "Đánh giá Gentleman Reserve Privee chính hãng: Vẻ lãng tử trưởng thành toát lên từ rượu Whiskey thượng hạng, Diên vĩ và Hạt dẻ nướng.",
    description: "Givenchy đã chắt lọc tinh túy của một hầm rượu Whisky Scotland để rót vào Gentleman Reserve Privee. Hương rượu nồng say, đầm ấm đọng lại quanh note Hạt dẻ nướng bùi béo. Đâu đó vẫn phảng phất DNA Hoa diên vĩ (Iris) đặc trưng rải lớp phấn mỏng man lãng tử. Mùi hương gõ đúng nhịp đập của một quý ông lịch thiệp, sâu sắc và biết cách thưởng thức cuộc sống.",
    vibes: [{label: "Lịch lãm", icon: "🎩"}, {label: "Say đắm", icon: "🥃"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 8.8, total: 8.6 },
    topNotes: [{name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hạt dẻ (Chestnut)"}],
    baseNotes: [{name: "Rượu Whiskey"}, {name: "Hương gỗ (Woody Notes)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Diên vĩ", value: 85, color: "#9370db"},
      {name: "Rượu Whiskey", value: 75, color: "#daa520"},
      {name: "Phấn", value: 65, color: "#faebd7"},
      {name: "Hổ phách", value: 60, color: "#d2691e"}
    ]
  },
  "l-interdit-eau-de-parfum": {
    subName: "EDP", perfumer: "Dominique Ropion", year: 2018, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 10, fall: 40, winter: 20 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Givenchy L'Interdit EDP chính hãng mùa thu đông",
    metaDescription: "Review Givenchy L'Interdit EDP chính hãng: 'Lệnh cấm' ngọt ngào của Hoa huệ, Hoa cam và Hoắc hương tạo nên kiệt tác thu đông quyến rũ chết người.",
    description: "L'Interdit - theo tiếng Pháp có nghĩa là 'Điều cấm kỵ'. Đây là màn đối đầu đầy mị lực giữa bó hoa trắng muốt (Hoa huệ, Hoa cam, Nhài) và phần dark-base u tối tăm của Hoắc hương, Cỏ hương bài. Nó khơi gợi sự tò mò mãnh liệt, vừa thanh khiết lại vừa phá cách, mời gọi người phụ nữ đập tan sự rụt rè để tự tin tỏa sáng giữa một buổi tiệc lộng lẫy.",
    vibes: [{label: "Phá cách", icon: "🤫"}, {label: "Quyến rũ", icon: "💃"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Quả lê (Pear)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa huệ trắng (Tuberose)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Vani (Vanilla)"}, {name: "Ambroxan"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f0f8ff"},
      {name: "Hoa huệ", value: 85, color: "#e0ffff"},
      {name: "Ngọt ngào", value: 75, color: "#dc143c"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "l-interdit-eau-de-parfum-rouge": {
    subName: "EDP", perfumer: "Dominique Ropion", year: 2021, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 45, winter: 40 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Givenchy L'Interdit Rouge EDP chính hãng mùi Cam máu và Huệ",
    metaDescription: "Đánh giá Givenchy L'Interdit Rouge chính hãng: Phiên bản bốc lửa của Hoa huệ nhuốm màu Gừng cay và Cam máu đê mê cho buổi tiệc đêm.",
    description: "Bước sang bản Rouge (Đỏ), sự cấm kỵ đã trở nên bạo liệt và bốc lửa hơn bao giờ hết. Note Cam máu (Blood Orange) chín mọng bùng nổ cùng vị cay nóng của Gừng tươi, rưới thẳng lên cánh Hoa huệ bản gốc. Mùi hương đậm đặc, lả lơi và có tính sát thương cực cao, như một gót giày đỏ thẫm giẫm cộp lên sàn nhảy, nhốt trọn ánh nhìn của mọi đôi mắt xung quanh.",
    vibes: [{label: "Nóng bỏng", icon: "👠"}, {label: "Mị lực", icon: "🌶️"}],
    score: { scent: 8.4, uniqueness: 7.5, compliments: 9.0, value: 8.4, total: 8.4 },
    topNotes: [{name: "Cam máu (Blood Orange)"}, {name: "Gừng (Ginger)"}],
    middleNotes: [{name: "Hoa huệ (Tuberose)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Lá Pimento"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f0f8ff"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Hoa huệ", value: 75, color: "#e0ffff"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Cay ấm", value: 60, color: "#cc3300"}
    ]
  },
  "organza": {
    subName: "EDP", perfumer: "Sophie Labbe", year: 1996, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Givenchy Organza EDP chính hãng kinh điển 1996",
    metaDescription: "Đánh giá Givenchy Organza chính hãng: Bức tượng điêu khắc mạ vàng chứa đầy Vani, Nhục đậu khấu và hoa trắng quý phái mang hơi thở hoàng gia.",
    description: "Organza mang thiết kế tựa như thân hình một vệ nữ được tạc cẩn thận từ cẩm thạch vàng. Không chạy theo sự hào nhoáng nịnh mũi trẻ trung, Organza là hoài niệm của những năm thập niên 90: đằm thắm, chín chắn. Sự kết hợp của Vani nồng nhiệt, Nhục đậu khấu cay cay và tinh dầu Hoa trắng quyện thành một lớp lụa là ấm áp, quyền quý và bất tử với thời gian.",
    vibes: [{label: "Quyền quý", icon: "👑"}, {label: "Hoài niệm", icon: "⏳"}],
    score: { scent: 8.0, uniqueness: 8.5, compliments: 7.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Nhục đậu khấu (Nutmeg)"}, {name: "Hoa sơn chi (Gardenia)"}, {name: "Hoa cam"}, {name: "Hương hoa lục"}],
    middleNotes: [{name: "Hoa huệ trắng (Tuberose)"}, {name: "Quả óc chó"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa mẫu đơn"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amber)"}, {name: "Hương gỗ"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#fdf5e6"},
      {name: "Cay tươi", value: 85, color: "#9acd32"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Vani", value: 65, color: "#fff8dc"},
      {name: "Hoa huệ", value: 60, color: "#e0ffff"}
    ]
  },
  "gritti-tutu-extrait": {
    subName: "Extrait", perfumer: "Luca Gritti", year: 2019, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 40, summer: 40, fall: 10, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Gritti Tutu Extrait chính hãng mua ở đâu? Review tiểu thư",
    metaDescription: "Review Gritti Tutu Extrait chính hãng: Cô tiểu thư thỏ ngọc nhí nhảnh mặc váy hồng với trái Mâm xôi, Dừa, Táo xanh ngọt ngào phủ xạ hương trắng.",
    description: "'Tutu' là tên gọi mỹ miều gán cho những chiếc váy bale hồng bằng vải tuyn bồng bềnh. Mùi hương này phác họa đúng hình ảnh đó: một cô gái trẻ trung, nhí nhảnh, yêu kiều nhảy múa trên mũi giày. Quả Mâm xôi (Raspberry) và Táo xanh mọng nước rỉ ra dòng sữa Dừa non ngầy ngậy, cuối cùng được ôm trọn bởi Vani và Xạ hương trắng sạch sẽ. Đáng yêu, đỏng đảnh, vô cùng dễ thương.",
    vibes: [{label: "Tiểu thư", icon: "🎀"}, {label: "Bồng bềnh", icon: "☁️"}],
    score: { scent: 7.6, uniqueness: 7.5, compliments: 8.5, value: 7.6, total: 7.9 },
    topNotes: [{name: "Dừa (Coconut)"}, {name: "Táo xanh (Apple)"}, {name: "Lá lý chua đen"}, {name: "Quả bưởi"}],
    middleNotes: [{name: "Quả mâm xôi (Raspberry)"}, {name: "Hoa Heliotrope"}, {name: "Hoa nhài"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Vani (Vanilla)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ff4500"},
      {name: "Vani", value: 85, color: "#fffacd"},
      {name: "Ngọt ngào", value: 75, color: "#dc143c"},
      {name: "Phấn", value: 65, color: "#f5deb3"},
      {name: "Xạ hương", value: 60, color: "#d8bfd8"}
    ]
  },
  "bloom-edp": {
    subName: "EDP", perfumer: "Alberto Morillas", year: 2017, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 50, summer: 30, fall: 15, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Gucci Bloom EDP chính hãng mùi Hoa huệ thanh khiết",
    metaDescription: "Đánh giá Gucci Bloom EDP chính hãng màu hồng: Một khu vườn bừng nở với Hoa huệ nhài thanh tao, mướt mát, nữ tính, không bị gắt.",
    description: "Gucci Bloom được tạo ra với kỳ vọng nắm bắt tinh túy bừng nở của một khu vườn trù phú (Bloom). Không có sự đan xen phức tạp giữa trái cây hay gỗ, Bloom ném bạn thẳng vào vạt hoa Nhài nồng nàn và Hoa huệ thanh tao. Một mùi hương thuần túy ngập tràn hoa trắng, không tạp niệm, đem lại một vẻ đẹp đằm thắm, dịu dàng chuẩn mực của sự thanh lịch.",
    vibes: [{label: "Hoa cỏ", icon: "💐"}, {label: "Thanh lịch", icon: "👒"}],
    score: { scent: 7.6, uniqueness: 6.0, compliments: 8.0, value: 7.6, total: 7.5 },
    topNotes: [{name: "Hoa nhài (Jasmine)"}],
    middleNotes: [{name: "Hoa huệ (Tuberose)"}],
    baseNotes: [{name: "Sử quân tử (Rangoon Creeper)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f0f8ff"},
      {name: "Hoa huệ", value: 85, color: "#e0ffff"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Động vật", value: 65, color: "#8b4513"},
      {name: "Hương lục", value: 60, color: "#008000"}
    ]
  },
  "gucci-flora-gorgeous-gardenia": {
    subName: "EDP", perfumer: "Honorine Blanc", year: 2021, gender: "nu", longevity: 5, sillage: 6,
    seasons: { spring: 45, summer: 35, fall: 15, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Gucci Flora Gorgeous Gardenia EDP chính hãng giá tốt",
    metaDescription: "Review Gucci Flora Gorgeous Gardenia chính hãng (chai hồng phấn): Sự kết hợp tươi tắn của hoa Lê, Dành dành, quả mọng và đường nâu ngọt ngào.",
    description: "Mang giao diện vintage siêu hút mắt, Flora Gorgeous Gardenia lại mở ra một khung trời tuổi trẻ vô cùng mộng mơ và hiện đại. Tuyệt tác là sự bay bổng của Hoa sương lê và Hoa dành dành trắng muốt, rải lên một lớp Đường nâu (Brown Sugar) ngọt lịm nhẹ nhàng. Mùi hương hoa cỏ - trái cây dễ thương, nịnh mũi và đa dụng, hợp cho các buổi cafe chiều mát mẻ.",
    vibes: [{label: "Dễ thương", icon: "🧸"}, {label: "Xinh xắn", icon: "🧚"}],
    score: { scent: 7.8, uniqueness: 6.0, compliments: 8.0, value: 7.8, total: 7.5 },
    topNotes: [{name: "Hoa sương lê (Pear Blossom)"}, {name: "Trái mọng đỏ (Red Berries)"}, {name: "Quả quýt Ý"}],
    middleNotes: [{name: "Hoa dành dành (Gardenia)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa đại"}],
    baseNotes: [{name: "Đường nâu (Brown Sugar)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#fdf5e6"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Ngọt ngào", value: 75, color: "#e32636"},
      {name: "Trái cây", value: 65, color: "#ff4500"},
      {name: "Hoắc hương", value: 60, color: "#556b2f"}
    ]
  },
  "angelique-noire": {
    subName: "EDP", perfumer: "Daniela Andrier", year: 2005, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 45, winter: 30 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Guerlain Angelique Noire chính hãng mua ở đâu? Review giá",
    metaDescription: "Đánh giá Guerlain Angelique Noire chính hãng: Đỉnh cao Vani hòa cùng cành Bạch chỉ xanh rờn, tự hào tạo ra kiệt tác xa xỉ mâu thuẫn nhưng lôi cuốn.",
    description: "Nhà Guerlain đã sáng tạo ra một nghịch lý hoàn hảo trong hương thơm. Angélique Noire khơi mào bằng cái chạm vô cùng hoang dại, xanh ngắt, hơi đắng nghét của rễ cây Bạch chỉ (Angelica). Thế rồi ngay lập tức, khối nhung Vani đặc trưng 100 năm tuổi của Guerlain tràn lên bao bọc, biến sự gay gắt đó thành vị ngọt lịm mượt mà khó cưỡng. Cực sành điệu, cực kén mũi và cũng cực kỳ đẳng cấp.",
    vibes: [{label: "Xa hoa", icon: "💎"}, {label: "Mâu thuẫn", icon: "☯️"}],
    score: { scent: 8.8, uniqueness: 9.0, compliments: 8.0, value: 8.8, total: 8.6 },
    topNotes: [{name: "Cây bạch chỉ (Angelica)"}, {name: "Quả lê (Pear)"}, {name: "Hạt tiêu hồng"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Hạt Caraway"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Cây bạch chỉ (Angelica)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#e6e6fa"},
      {name: "Vani", value: 85, color: "#ffffcc"},
      {name: "Phấn", value: 75, color: "#eaddca"},
      {name: "Hổ phách", value: 65, color: "#b87333"},
      {name: "Ngọt ngào", value: 60, color: "#ed2939"}
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
console.log('==> BATCH 11 HOAN TAT.');
