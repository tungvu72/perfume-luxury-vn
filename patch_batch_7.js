const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  // 61
  "homme-cologne": {
    subName: "Cologne", perfumer: "Francois Demachy", year: 2013, gender: "nam", longevity: 5, sillage: 6,
    seasons: { spring: 30, summer: 65, fall: 4, winter: 1 }, dayNight: { day: 90, night: 10 },
    seoTitle: "Dior Homme Cologne chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Homme Cologne chính hãng: Mùi hương mùa hè tươi mát từ hoa bưởi (Grapefruit blossom) và nốt chanh thanh khiết.",
    description: "Một ly nước chanh đá buốt lạnh giữa buổi trưa Hè. Dior Homme Cologne gây nghiện bởi hương cam chanh (Citrus) và hoa bưởi siêu nịnh mũi, sạch sẽ tinh tươm như chiếc sơ mi trắng mới ủi thơm phức. Tuy độ lưu hương không cao, nhưng độ sảng khoái và thanh lịch là số 1.",
    vibes: [{label: "Sạch sẽ", icon: "🍋"}, {label: "Sảng khoái", icon: "🧊"}],
    score: { scent: 8.8, uniqueness: 7.0, compliments: 7.0, value: 8.8, total: 8.0 },
    topNotes: [{name: "Cam Bergamot Calabrian"}],
    middleNotes: [{name: "Hoa Bưởi (Grapefruit blossom)"}],
    baseNotes: [{name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Thanh mát", value: 85, color: "#e0ffff"},
      {name: "Hoa cỏ tươi", value: 70, color: "#ffc0cb"}
    ]
  },
  // 62
  "homme-parfum": {
    subName: "Parfum", perfumer: "Francois Demachy", year: 2014, gender: "nam", longevity: 10, sillage: 8,
    seasons: { spring: 8, summer: 2, fall: 35, winter: 55 }, dayNight: { day: 15, night: 85 },
    seoTitle: "Dior Homme Parfum chính hãng giá bao nhiêu? Mua ở đâu?",
    metaDescription: "Đánh giá Dior Homme Parfum chính hãng: Bản tinh chất đen đậm đặc, kiệt tác Diên vĩ bọc Da thuộc quyền uy tối thượng.",
    description: "Chén thánh của dòng Dior Homme. Phiên bản Parfum (Tĩnh chất) mang lại nồng độ sâu thẳm, mạnh bạo. Hoa Diên vĩ (Iris) nức tiếng xứ Tuscan quyện chặt với một lớp Da thuộc (Leather) và Trầm hương, tạo ra vỏ bọc quyền lực ngút ngàn, nam tính và vương giả, phù hợp với các quý ông mặc suit thiết kế.",
    vibes: [{label: "Quyền uy", icon: "🕴️"}, {label: "Diên vĩ", icon: "💜"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 8.8, total: 8.6 },
    topNotes: [{name: "Hoa diên vĩ vùng Tuscan"}, {name: "Cam Ý"}],
    middleNotes: [{name: "Da thuộc (Leather)"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Cây vông vang"}, {name: "Trầm hương (Oud)"}, {name: "Cedar"}],
    accords: [
      {name: "Diên vĩ (Iris)", value: 100, color: "#9370db"},
      {name: "Da thuộc", value: 90, color: "#8b4513"},
      {name: "Gỗ", value: 80, color: "#654321"},
      {name: "Phấn đen", value: 70, color: "#696969"}
    ]
  },
  // 63
  "homme-sport-2021": {
    subName: "EDT", perfumer: "Francois Demachy", year: 2021, gender: "nam", longevity: 7, sillage: 6,
    seasons: { spring: 35, summer: 40, fall: 20, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Dior Homme Sport (2021) EDT chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Dior Homme Sport 2021 chính hãng: Phong cách thể thao hiện đại, bùng nổ năng lượng cam chanh và tiêu hồng mạnh mẽ.",
    description: "Dior Homme Sport bản 2021 là sự tiến hóa hoàn hảo: Nó đã loại bỏ vị gắt của gừng cũ, thay vào đó là sự êm dịu, dày dặn hơn từ nhựa nhũ hương gai góc nhưng rất mịn mũi. Cảm giác mùi hương như một tay đấm bốc mặc suit sang trọng, vừa tràn trề năng lượng vừa vững chãi lịch lãm.",
    vibes: [{label: "Thể thao", icon: "🥊"}, {label: "Năng lượng", icon: "⚡"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 7.0, value: 8.2, total: 7.7 },
    topNotes: [{name: "Chanh vàng"}, {name: "Cam Bergamot"}, {name: "Aldehydes"}],
    middleNotes: [{name: "Nhựa Elemi"}, {name: "Tiêu hồng (Pink Pepper)"}],
    baseNotes: [{name: "Gỗ"}, {name: "Nhũ hương (Olibanum)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Gỗ sấy", value: 85, color: "#8b4513"},
      {name: "Cay tươi", value: 75, color: "#3cb371"}
    ]
  },
  // 64
  "diorissimo": {
    subName: "EDT", perfumer: "Edmond Roudnitska", year: 1956, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 60, summer: 25, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Dior Diorissimo EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Diorissimo EDT chính hãng: Bó hoa linh lan Muguet kinh điển, biểu tượng mùa xuân may mắn của Christian Dior.",
    description: "Diorissimo không chỉ là một chai nước hoa, nó là câu chuyện về hoa Linh Lan (Muguet) - loài hoa biểu tượng may mắn của chính Christian Dior. Tác phẩm mang tông hoa trắng đượm màu xanh thực vật, trong trẻo, chân thật như vùi mặt vào một luống hoa mùa xuân đầy sương sớm.",
    vibes: [{label: "Hoa Linh Lan", icon: "🌱"}, {label: "Ngây thơ", icon: "🕊️"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Lá xanh (Green Leaves)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa linh lan (Lily-of-the-Valley)"}, {name: "Tử đinh hương (Lilac)"}, {name: "Hoa nhài"}, {name: "Hoa bách hợp"}, {name: "Ngọc lan tây"}, {name: "Hương thảo"}],
    baseNotes: [{name: "Hương bài (Civet)"}, {name: "Gỗ đàn hương"}],
    accords: [
      {name: "Hoa cỏ trắng", value: 100, color: "#fffafa"},
      {name: "Thực vật", value: 85, color: "#228b22"},
      {name: "Tươi mới", value: 75, color: "#e0ffff"}
    ]
  },
  // 65
  "dolce-vita": {
    subName: "EDT", perfumer: "Pierre Bourdon", year: 1994, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 15, summer: 10, fall: 40, winter: 35 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Dior Dolce Vita EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Dolce Vita EDT chính hãng: Mùi hương cay nồng màu vàng nắng ấm từ Đào chín, Quế và gỗ Gỗ cẩm lai.",
    description: "Dolce Vita ('Cuộc sống tươi đẹp') rực rỡ và lôi cuốn y như cái tên nó. Là một sự pha trộn cổ điển giữa độ nhão của trái Đào chín và sức ấm nóng rần cháy của Quế. Thêm vào một chút Vanila béo mịn, nó khơi gợi niềm vui trong những ngày chớm đông giá lạnh.",
    vibes: [{label: "Cổ điển", icon: "🍂"}, {label: "Rực rỡ", icon: "☀️"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 8.0 },
    topNotes: [{name: "Quả đào (Peach)"}, {name: "Bạch đậu khấu"}, {name: "Hoa loa kèn"}, {name: "Bưởi"}, {name: "Cam Bergamot"}, {name: "Hoa hồng"}],
    middleNotes: [{name: "Quế (Cinnamon)"}, {name: "Quả mơ"}, {name: "Gỗ cẩm lai"}, {name: "Linh lan"}, {name: "Vòi voi"}, {name: "Mộc lan"}],
    baseNotes: [{name: "Vani"}, {name: "Gỗ đàn hương"}, {name: "Cedar"}, {name: "Dừa"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cay ấm", value: 85, color: "#b22222"},
      {name: "Phấn ngọt", value: 75, color: "#ffb6c1"},
      {name: "Trái cây", value: 65, color: "#ffa500"}
    ]
  },
  // 66
  "dune-edt": {
    subName: "EDT", perfumer: "Jean-Louis Sieuzac", year: 1991, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 15, summer: 25, fall: 40, winter: 20 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Dior Dune EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Dune EDT chính hãng: Viên lưu ly sa mạc khô cằn, hoài cổ mang nét đẹp tĩnh lặng của gỗ hồng và hổ phách.",
    description: "Dune là một kiệt tác dị biệt, không thuộc về những bông hoa mềm mại hay đại dương mát mẻ. Nó mang phong vị khô ráo của cát lộng gió, tĩnh mịch cùng hương gỗ hoắc hương, hòa nhịp với rêu sồi (Oakmoss) mạnh mẽ. Khắc họa một nàng thơ tự tại cô đơn giữa bãi biển mùa thu.",
    vibes: [{label: "Tĩnh lặng", icon: "🏜️"}, {label: "Hoài cổ", icon: "📻"}],
    score: { scent: 8.0, uniqueness: 8.0, compliments: 7.0, value: 8.0, total: 7.7 },
    topNotes: [{name: "Gỗ cẩm lai"}, {name: "Aldehydes"}, {name: "Quýt"}, {name: "Bergamot"}, {name: "Mẫu đơn"}],
    middleNotes: [{name: "Bách hợp (Lily)"}, {name: "Ngọc lan tây"}, {name: "Mù tạc (Wallflower)"}, {name: "Nhài"}, {name: "Hồng"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Hổ phách (Amber)"}, {name: "Benzoin"}, {name: "Rêu sồi"}, {name: "Vani"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Gỗ khô", value: 100, color: "#8b4513"},
      {name: "Hổ phách", value: 85, color: "#cd853f"},
      {name: "Cay nóng", value: 75, color: "#b22222"},
      {name: "Phấn gỗ", value: 60, color: "#dda0dd"}
    ]
  },
  // 67
  "eau-sauvage": {
    subName: "EDT", perfumer: "Edmond Roudnitska", year: 1966, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 40, summer: 45, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Dior Eau Sauvage EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Eau Sauvage EDT bản kinh điển 1966: Hương cam chanh, thảo mộc vượt thời gian của các minh tinh màn bạc.",
    description: "Đừng nhầm nó với Dior Sauvage hiện đại. Eau Sauvage (1966) là huyền thoại vượt thời gian của đàn ông châu Âu quy tụ từ Cam chanh (Citrus), Cỏ hương bài (Vetiver) và Hoắc hương. Một vẻ đẹp chín chắn, lịch lãm mang dấu ấn điện ảnh của ngôi sao Alain Delon.",
    vibes: [{label: "Vintage", icon: "🎞️"}, {label: "Chín chắn", icon: "🍸"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 8.0 },
    topNotes: [{name: "Chanh vàng"}, {name: "Cam Bergamot"}, {name: "Húng quế (Basil)"}, {name: "Hương thảo (Rosemary)"}, {name: "Hạt Caraway"}],
    middleNotes: [{name: "Nhài (Jasmine)"}, {name: "Rau mùi"}, {name: "Cẩm chướng"}, {name: "Hoắc hương"}, {name: "Rễ diên vĩ"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Cỏ hương bài (Vetiver)"}, {name: "Xạ hương"}, {name: "Hổ phách"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Thảo mộc", value: 85, color: "#2E8B57"},
      {name: "Nhựa gỗ", value: 75, color: "#9ACD32"}
    ]
  },
  // 68
  "eau-sauvage-parfum": {
    subName: "Parfum", perfumer: "Francois Demachy", year: 2017, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 35, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Dior Eau Sauvage Parfum chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Dior Eau Sauvage Parfum chính hãng: Quyền lực, dày dặn với nhựa Elemi và Cỏ hương đào sắc sảo.",
    description: "Nếu bản EDT mát mẻ thì bản Parfum lại tối màu, đặc sệt nhựa sống của Elemi kết dính chặt vào cỏ hương bài Haitian. Sự dày dặn và sắc sảo này mang lại một bầu không khí trang trọng, chín muồi và cực kỳ quyền lực cho những doanh nhân trong những bộ âu phục sẫm màu.",
    vibes: [{label: "Trang trọng", icon: "♟️"}, {label: "Quy củ", icon: "💼"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 8.5, value: 8.4, total: 8.4 },
    topNotes: [{name: "Quả Thanh yên (Citron)"}, {name: "Cam Bergamot"}, {name: "Oải hương"}],
    middleNotes: [{name: "Cỏ hương bài Haitian (Haitian Vetiver)"}],
    baseNotes: [{name: "Nhựa Elemi"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Hổ phách (Nhựa)", value: 85, color: "#ff8c00"},
      {name: "Lòng đất", value: 75, color: "#556b2f"}
    ]
  },
  // 69
  "fahrenheit": {
    subName: "EDT", perfumer: "Jean-Louis Sieuzac", year: 1988, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 10, fall: 40, winter: 35 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Dior Fahrenheit EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Dior Fahrenheit EDT: Mùi hương 'xăng sinh học' dị biệt kết hợp Violet và Da thuộc cực bốc dành cho tay chơi thực thụ.",
    description: "Nhắc đến Fahrenheit là nhắc đến mùi hương dị biệt, với note lá Violet (hoa tím) trộn khéo léo với nhục đậu khấu và da thuộc, tạo ra một mùi thơm gợi liên tưởng đến... mùi Da Nội Thất Xe Hơi pha loãng Xăng Đốt. Một thần thái vô cùng gai góc, bốc lửa và bất cần của một tay đua kiệt xuất.",
    vibes: [{label: "Gai góc", icon: "🏍️"}, {label: "Chơi bời", icon: "🔥"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 8.5, value: 8.4, total: 8.4 },
    topNotes: [{name: "Hoa nhục đậu khấu"}, {name: "Oải hương"}, {name: "Tuyết tùng"}, {name: "Cúc la mã"}, {name: "Mandarin Orange"}, {name: "Táo gai"}, {name: "Bergamot"}, {name: "Chanh"}],
    middleNotes: [{name: "Lá Violet (Violet Leaf)"}, {name: "Nhục đậu khấu"}, {name: "Tuyết tùng"}, {name: "Đàn hương"}, {name: "Cẩm chướng"}, {name: "Kim ngân hoa"}, {name: "Nhài"}, {name: "Linh lan"}],
    baseNotes: [{name: "Da thuộc (Leather)"}, {name: "Hương bài"}, {name: "Xạ hương"}, {name: "Hổ phách"}, {name: "Hoắc hương"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Da thuộc", value: 100, color: "#8b4513"},
      {name: "Thảo mộc tẩm gia vị", value: 85, color: "#2f4f4f"},
      {name: "Gỗ", value: 75, color: "#696969"}
    ]
  },
  // 70
  "fahrenheit-le-parfum": {
    subName: "Parfum", perfumer: "Francois Demachy", year: 2014, gender: "nam", longevity: 9, sillage: 8,
    seasons: { spring: 8, summer: 2, fall: 35, winter: 55 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Dior Fahrenheit Le Parfum chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Dior Fahrenheit Le Parfum chính hãng: Say khướt trong Rượu Rum, gắt gỏng Da lộn bốc lửa trong mùa Đông lạnh giá.",
    description: "Nếu bản EDT là mùi xăng phóng điên dại thì bản Parfum là kẻ đang say khướt bên lò sưởi. Francois Demachy đã ném thẳng Rượu Rum nhão nhẹt vào nền Vanilla Bourbon siêu béo rực đốm đỏ lửa. Một tác phẩm cực bốc, ngọt men và đậm đặc cho mùa Đông tuyết rơi.",
    vibes: [{label: "Nhiệt huyết", icon: "🥃"}, {label: "Lưu hương khủng", icon: "💥"}],
    score: { scent: 8.6, uniqueness: 8.0, compliments: 8.5, value: 8.6, total: 8.5 },
    topNotes: [{name: "Da lộn (Suede)"}, {name: "Cam thảo (Licorice)"}, {name: "Quýt Sicilian"}],
    middleNotes: [{name: "Lá Violet (Violet Leaf)"}, {name: "Rượu Rum (Rum)"}, {name: "Rau mùi"}, {name: "Thì là (Cumin)"}],
    baseNotes: [{name: "Vani Bourbon (Bourbon Vanilla)"}],
    accords: [
      {name: "Vani béo", value: 100, color: "#d2b48c"},
      {name: "Da lộn", value: 90, color: "#a0522d"},
      {name: "Men Rượu Rum", value: 80, color: "#800000"},
      {name: "Violet tím", value: 70, color: "#9370db"}
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
console.log("==> BATCH 7 HOÀN TẤT. Ghi ra ổ cứng.");
