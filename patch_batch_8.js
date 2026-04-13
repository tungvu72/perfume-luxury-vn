const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Data extracted by reading each Fragrantica card image (71-80)
const updates = {
  // 71 - Card: "Dior Homme Intense 2011", Dior, for men. Rating 4.5 (24073). Longevity 8h. Sillage Strong.
  "homme-intense": {
    subName: "EDP", perfumer: "Francois Demachy", year: 2011, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Dior Homme Intense EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Homme Intense chính hãng: Hoa diên vĩ (Iris) quyền lực bọc phấn gỗ trầm, mùi hương lịch lãm số 1 của Dior.",
    description: "Dior Homme Intense là phiên bản nồng độ cao, đậm đặc hơn của dòng Homme huyền thoại. Hoa diên vĩ (Iris) được đẩy lên cường độ tối đa, phủ một lớp phấn gỗ tuyết tùng và quả lê chín mọng. Mùi hương sang trọng, lịch lãm tột đỉnh cho những buổi tối trọng đại.",
    vibes: [{label: "Lịch lãm", icon: "🕴️"}, {label: "Diên vĩ", icon: "💜"}],
    score: { scent: 8.6, uniqueness: 8.0, compliments: 8.5, value: 8.6, total: 8.5 },
    topNotes: [{name: "Oải hương (Lavender)"}, {name: "Quả lê (Pear)"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hạt Ambrette (Musk Mallow)"}],
    baseNotes: [{name: "Gỗ tuyết tùng (Cedar)"}, {name: "Cỏ hương bài (Vetiver)"}],
    accords: [
      {name: "Diên vĩ (Iris)", value: 100, color: "#9370db"},
      {name: "Gỗ", value: 90, color: "#8b4513"},
      {name: "Phấn", value: 80, color: "#dda0dd"},
      {name: "Lòng đất", value: 75, color: "#5c4033"},
      {name: "Thảo mộc", value: 70, color: "#556b2f"}
    ]
  },
  // 72 - Card: "Hypnotic Poison", Dior, for women. Rating 4.1 (29401). Longevity 7h. Sillage Strong.
  "hypnotic-poison": {
    subName: "EDT", perfumer: "Annick Menardo", year: 1998, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Dior Hypnotic Poison EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Hypnotic Poison EDT chính hãng: Bùa mê thuốc lú Vanilla gây nghiện, bọc hạnh nhân và dừa ngọt ngào bí ẩn.",
    description: "Hypnotic Poison là một viên thuốc ngấm từ từ nhưng cực kỳ gây nghiện. Vanilla béo ngậy quện chặt với hạnh nhân (Almond) rang cháy cạnh và cơm dừa ngọt lịm, tạo ra một vũng xoáy mê hoặc không thể cưỡng lại. Mùi hương của sự quyến rũ chết người trong bóng tối.",
    vibes: [{label: "Mê hoặc", icon: "🍷"}, {label: "Bí ẩn", icon: "🔮"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 8.5, value: 8.2, total: 8.1 },
    topNotes: [{name: "Quả mận (Plum)"}, {name: "Hạnh nhân (Almond)"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Gỗ cẩm lai (Brazilian Rosewood)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Dừa (Coconut)"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5deb3"},
      {name: "Ngọt ngào", value: 90, color: "#ff69b4"},
      {name: "Hạnh nhân", value: 85, color: "#deb887"},
      {name: "Trái cây", value: 75, color: "#ff4500"},
      {name: "Hạt", value: 65, color: "#d2b48c"}
    ]
  },
  // 73 - Card: "J'adore", Dior, for women. Rating 3.8 (28727). Longevity 7h. Sillage Strong.
  "jadore-edp": {
    subName: "EDP", perfumer: "Calice Becker", year: 1999, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 25, fall: 20, winter: 15 }, dayNight: { day: 55, night: 45 },
    seoTitle: "Dior J'adore EDP chính hãng mua ở đâu? Giá bao nhiêu 2026?",
    metaDescription: "Đánh giá Dior J'adore EDP chính hãng: Biểu tượng hoa trắng sang trọng bậc nhất thế giới với nhài, mộc lan và quả lê.",
    description: "J'adore là biểu tượng vĩnh cửu của sự nữ tính rực rỡ. Một bó hoa trắng xa xỉ từ Nhài Grasse, Mộc lan và Hoa lan Nam Phi (Tuberose) được tắm trong vị ngọt mát của quả Lê và Dưa lưới. Một DNA quá quen thuộc nhưng vẫn mãi là sự lựa chọn số 1 cho phái đẹp.",
    vibes: [{label: "Nữ tính", icon: "✨"}, {label: "Sang trọng", icon: "💛"}],
    score: { scent: 7.6, uniqueness: 6.0, compliments: 8.5, value: 7.6, total: 7.5 },
    topNotes: [{name: "Quả lê (Pear)"}, {name: "Dưa lưới (Melon)"}, {name: "Quả đào (Peach)"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Hoa linh lan (Lily-of-the-Valley)"}, {name: "Hoa mộc lan (Magnolia)"}, {name: "Lan Nam Phi (Tuberose)"}, {name: "Hoa Freesia"}],
    baseNotes: [{name: "Xạ hương trắng (White Musk)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#fffaf0"},
      {name: "Hoa cỏ", value: 95, color: "#ffc0cb"},
      {name: "Trái cây", value: 85, color: "#ffa500"},
      {name: "Ngọt ngào", value: 70, color: "#ff69b4"},
      {name: "Tươi mát", value: 65, color: "#add8e6"}
    ]
  },
  // 74 - Card: "Midnight Poison", Dior, for women. Rating 4.2 (9758). Longevity 8h. Sillage Strong.
  "midnight-poison": {
    subName: "EDP", perfumer: "Francois Demachy", year: 2007, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Dior Midnight Poison EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Midnight Poison EDP chính hãng: Hoắc hương quyền quý giao nhau với hoa hồng và hổ phách trong đêm tối.",
    description: "Midnight Poison là phiên bản hiếm hoi đã bị ngưng sản xuất, trở thành huyền thoại săn lùng của giới sưu tầm. Hoắc hương (Patchouli) nồng nàn quyện Hoa hồng Damask trên nền Hổ phách rực rỡ, tạo ra một đêm trường bí ẩn, nơi sự quyến rũ chết người không thể nào chìm vào quên lãng.",
    vibes: [{label: "Huyền thoại", icon: "🌙"}, {label: "Quyến rũ", icon: "🫦"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 8.5, value: 8.4, total: 8.4 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Quýt Mandarin (Mandarin Orange)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}, {name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Hoắc hương", value: 100, color: "#556b2f"},
      {name: "Cam chanh", value: 90, color: "#ffd700"},
      {name: "Hoa hồng", value: 85, color: "#ff1493"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Hổ phách", value: 75, color: "#ff8c00"}
    ]
  },
  // 75 - Card: "Miss Dior Blooming Bouquet (2023)", Dior, for women. Rating 4.1 (1850). Longevity 5h. Sillage Moderate.
  "miss-dior-blooming-bouquet": {
    subName: "EDT", perfumer: "Francois Demachy", year: 2023, gender: "nu", longevity: 5, sillage: 6,
    seasons: { spring: 55, summer: 25, fall: 12, winter: 8 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Dior Miss Dior Blooming Bouquet chính hãng mua ở đâu?",
    metaDescription: "Đánh giá Dior Miss Dior Blooming Bouquet (2023) chính hãng: Bó hoa mẫu đơn hồng phấn tươi mát, thanh nhã và cực nữ tính.",
    description: "Blooming Bouquet là phiên bản mùa Xuân tươi sáng nhất trong gia đình Miss Dior. Hoa Mẫu đơn (Peony) hồng phấn quyện lấy Hoa hồng Damask trên nền Xạ hương trắng (Musk) mềm mại, tựa như một bó hoa cưới tinh khôi được trao bên Tháp Eiffel. Mùi hương cực kỳ safe, nịnh mũi tất cả mọi người.",
    vibes: [{label: "Ngọt ngào", icon: "🌷"}, {label: "Tinh tế", icon: "🎀"}],
    score: { scent: 8.2, uniqueness: 6.0, compliments: 7.0, value: 8.2, total: 7.5 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Hoa đậu ngọt (Sweet Pea)"}],
    middleNotes: [{name: "Hoa mẫu đơn (Peony)"}, {name: "Hoa hồng (Rose)"}],
    baseNotes: [{name: "Xạ hương trắng (White Musk)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ffc0cb"},
      {name: "Hoa hồng", value: 90, color: "#ff69b4"},
      {name: "Tươi mát", value: 75, color: "#add8e6"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Cam chanh", value: 60, color: "#ffd700"}
    ]
  },
  // 76 - Card: "Miss Dior Cherie Eau de Parfum", Dior, for women. Rating 4.1 (5137). Longevity 7h. Sillage Strong.
  "miss-dior-cherie": {
    subName: "EDP", perfumer: "Francois Demachy", year: 2011, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 15, fall: 30, winter: 25 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Dior Miss Dior Chérie EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Miss Dior Chérie EDP chính hãng: Dâu tây rừng quyện hoắc hương và rêu sồi (Oakmoss), phiên bản được yêu nhất.",
    description: "Miss Dior Chérie là phiên bản huyền thoại đã bị thay thế nhưng vẫn được săn lùng khắp nơi. Dâu tây (Strawberry) mọng căng phủ lên nền Hoắc hương (Patchouli) dày dặn, điểm xuyết gỗ đàn hương và rêu sồi (Oakmoss). Một sự kết hợp trái cây - gỗ hoàn hảo mà không bao giờ tìm lại được.",
    vibes: [{label: "Huyền thoại", icon: "🍓"}, {label: "Cá tính", icon: "⚡"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 8.5, value: 8.2, total: 8.3 },
    topNotes: [{name: "Quýt Mandarin"}, {name: "Dâu tây (Strawberry)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hổ phách (Amber)"}, {name: "Rêu sồi (Oakmoss)"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ff4500"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Ngọt ngào", value: 80, color: "#ff69b4"},
      {name: "Hoắc hương", value: 70, color: "#556b2f"},
      {name: "Cam chanh", value: 60, color: "#ffd700"}
    ]
  },
  // 77 - Card: "Poison", Dior, for women. Rating 3.9 (15974). Longevity 8h. Sillage Enormous.
  "poison": {
    subName: "EDT", perfumer: "Edouard Flechier", year: 1985, gender: "nu", longevity: 8, sillage: 10,
    seasons: { spring: 8, summer: 2, fall: 35, winter: 55 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Dior Poison EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Poison EDT chính hãng: Thuốc độc quyền năng từ mận, mật ong và trầm hương, sillage cực khủng (Enormous).",
    description: "Poison là một cú nổ thực sự. Sillage được Fragrantica đánh giá ở mức 'Enormous' (Khổng lồ) - hiếm chai nào trên đời đạt được. Mận chín đen hòa cùng mật ong, trầm hương và quế tạo ra một bức màn hương đặc quánh, ngột ngạt và cực kỳ quyền lực trong bóng tối sâu thẳm.",
    vibes: [{label: "Chất độc", icon: "☠️"}, {label: "Quyền lực tối", icon: "🖤"}],
    score: { scent: 7.8, uniqueness: 8.0, compliments: 8.5, value: 7.8, total: 8.1 },
    topNotes: [{name: "Quả mận (Plum)"}, {name: "Rau mùi (Coriander)"}, {name: "Quả rừng (Forest Fruits)"}],
    middleNotes: [{name: "Tuberose"}, {name: "Trầm hương (Incense)"}, {name: "Mật ong (Honey)"}, {name: "Quế (Cinnamon)"}],
    baseNotes: [{name: "Nhựa Opoponax"}, {name: "Gỗ đàn hương"}, {name: "Hổ phách"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#8b0000"},
      {name: "Ngọt ngào", value: 90, color: "#ff4500"},
      {name: "Hổ phách", value: 85, color: "#ff8c00"},
      {name: "Hoa trắng", value: 75, color: "#fffaf0"},
      {name: "Gỗ", value: 65, color: "#8b4513"}
    ]
  },
  // 78 - Card: "Pure Poison", Dior, for women. Rating 4.0 (17195). Longevity 7h. Sillage Strong.
  "pure-poison": {
    subName: "EDP", perfumer: "Carlos Benaim", year: 2004, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 15, fall: 25, winter: 25 }, dayNight: { day: 55, night: 45 },
    seoTitle: "Dior Pure Poison EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Pure Poison EDP chính hãng: Hoa trắng tinh khiết thanh tao với nhài, hoa cam và gỗ đàn hương ấm áp.",
    description: "Khác xa với người chị Poison nguyên bản nặng nề, Pure Poison mang vẻ đẹp tinh khiết hơn nhưng vẫn giữ sức hút không thể cưỡng lại. Hoa nhài (Jasmine) trắng muốt và Gardenia hòa cùng hoa cam (Orange Blossom), tạo ra một chuỗi hoa trắng thuần khiết trên nền gỗ đàn hương ấm áp.",
    vibes: [{label: "Thuần khiết", icon: "🤍"}, {label: "Thanh tao", icon: "🕊️"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Quả cam (Orange)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Hoa dành dành (Gardenia)"}, {name: "Hoa cam (Orange Blossom)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hổ phách (Amber)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#fffaf0"},
      {name: "Cam chanh", value: 80, color: "#ffd700"},
      {name: "Gỗ", value: 70, color: "#8b4513"},
      {name: "Phấn", value: 60, color: "#dda0dd"},
      {name: "Xạ hương", value: 55, color: "#d8bfd8"}
    ]
  },
  // 79 - Card: "Sauvage Eau de Parfum", Dior, for men. Rating 4.2 (13698). Longevity 7h. Sillage Strong.
  "sauvage-edp": {
    subName: "EDP", perfumer: "Francois Demachy", year: 2018, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 20, fall: 30, winter: 25 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Dior Sauvage EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Sauvage EDP chính hãng: Siêu phẩm doanh thu toàn cầu với Ambroxan sáng chói và Tiêu Tứ Xuyên cay nồng.",
    description: "Dior Sauvage EDP là cỗ máy in tiền của nhà Dior, liên tục giữ vị trí nước hoa bán chạy nhất thế giới nhiều năm liên tiếp. Với Ambroxan bùng nổ trên nền Tiêu Tứ Xuyên (Sichuan Pepper) cay gắt và Oải hương (Lavender), nó mang đến một mùi hương nam tính mạnh mẽ, sạch sẽ và cực nịnh mũi.",
    vibes: [{label: "Best seller", icon: "🥇"}, {label: "Nam tính", icon: "💪"}],
    score: { scent: 8.4, uniqueness: 6.0, compliments: 8.5, value: 8.4, total: 8.0 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Tiêu Tứ Xuyên (Sichuan Pepper)"}],
    middleNotes: [{name: "Oải hương (Lavender)"}, {name: "Đại hồi (Star Anise)"}, {name: "Nhục đậu khấu (Nutmeg)"}],
    baseNotes: [{name: "Ambroxan"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Cay tươi", value: 100, color: "#9acd32"},
      {name: "Cam chanh", value: 85, color: "#ffd700"},
      {name: "Hổ phách", value: 75, color: "#ff8c00"},
      {name: "Oải hương", value: 65, color: "#e6e6fa"},
      {name: "Xạ hương", value: 55, color: "#d8bfd8"}
    ]
  },
  // 80 - Card: "Sauvage Elixir", Dior, for men. Rating 4.3 (17688). Longevity 9h. Sillage Enormous.
  "sauvage-elixir": {
    subName: "Parfum Elixir", perfumer: "Francois Demachy", year: 2021, gender: "nam", longevity: 9, sillage: 10,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Dior Sauvage Elixir chính hãng mua ở đâu? Giá bao nhiêu?",
    metaDescription: "Đánh giá Dior Sauvage Elixir chính hãng: Phiên bản đậm đặc nhất, Sillage Enormous với cam thảo, quế và gỗ đàn hương.",
    description: "Sauvage Elixir là đỉnh cao nồng độ của dòng Sauvage. Với Sillage được Fragrantica đánh giá 'Enormous' (Khổng lồ), nó dội thẳng Oải hương và Cam thảo (Licorice) lẫn Quế trên nền gỗ đàn hương và Hoắc hương cực sâu. Một quả bom gia vị cay ấm mùa Đông không thể bỏ qua dành cho nam giới.",
    vibes: [{label: "Tối thượng", icon: "⚔️"}, {label: "Đậm đặc", icon: "🔥"}],
    score: { scent: 8.6, uniqueness: 7.0, compliments: 8.5, value: 8.6, total: 8.3 },
    topNotes: [{name: "Oải hương (Lavender)"}, {name: "Cam thảo (Licorice)"}, {name: "Nhục đậu khấu (Nutmeg)"}, {name: "Quế (Cinnamon)"}],
    middleNotes: [{name: "Bạch đậu khấu (Cardamom)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hổ phách (Amber)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#b22222"},
      {name: "Cay tươi", value: 85, color: "#32cd32"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Thảo mộc", value: 70, color: "#2e8b57"},
      {name: "Oải hương", value: 65, color: "#e6e6fa"}
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
console.log('==> BATCH 8 HOAN TAT.');
