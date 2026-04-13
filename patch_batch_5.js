const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  // 41
  "no-19-poudre": {
    subName: "EDP", perfumer: "Jacques Polge", year: 2011, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 60, summer: 20, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Chanel No 19 Poudré EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No.19 Poudré chính hãng: Bản phối hiện đại của No.19, mềm mại hơn với lớp phấn hoa diên vĩ êm ái.",
    description: "No.19 Poudré là sự kết hợp cực kỳ nhuần nhuyễn giữa sự lạnh lùng của bản gốc và vẻ mềm mại, bông xốp của phấn diên vĩ. Hương xanh rêu sồi được hạ tông để nhường chỗ cho vẻ thanh tú, tựa như nệm nhung bao phủ quanh một hình bóng nữ tính sang trọng.",
    vibes: [{label: "Nữ tính", icon: "💅"}, {label: "Thanh tú", icon: "🦢"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 7.0, value: 8.2, total: 7.7 },
    topNotes: [{name: "Nhựa Galbanum"}, {name: "Neroli"}, {name: "Cam Mandarin"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hoa nhài (Jasmine)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Xạ hương"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Phấn", value: 100, color: "#ffb6c1"},
      {name: "Diên vĩ", value: 80, color: "#9370db"},
      {name: "Thực vật", value: 70, color: "#006400"},
      {name: "Gỗ", value: 60, color: "#8b4513"},
      {name: "Xạ hương", value: 50, color: "#a9a9a9"}
    ]
  },
  // 42
  "no-5-eau-de-parfum": {
    subName: "EDP", perfumer: "Jacques Polge", year: 1986, gender: "nu", longevity: 9, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Chanel No 5 EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No 5 EDP chính hãng: Tượng đài Aldehyde quyền lực, sang trọng vượt thời gian mọi phụ nữ đều khao khát.",
    description: "Chẳng cần nói nhiều về No 5 EDP, nó là khuôn mẫu di sản của mùi hương xa xỉ. Hương Aldehyde bung tỏa chói lóa như một bọt Champagne đắt tiền, quyện cùng ngọc lan tây, hoa hồng tạo nên thần thái quý bà vô cùng trưởng thành và giàu có.",
    vibes: [{label: "Kinh điển", icon: "🥇"}, {label: "Quyền uy", icon: "👑"}],
    score: { scent: 7.8, uniqueness: 6.0, compliments: 8.5, value: 7.8, total: 7.7 },
    topNotes: [{name: "Aldehydes"}, {name: "Ngọc lan tây (Ylang-Ylang)"}, {name: "Neroli"}, {name: "Đào (Peach)"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hoa hồng (Rose)"}, {name: "Hoa linh lan"}, {name: "Hoa nhài"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Vanilla"}, {name: "Rêu sồi (Oakmoss)"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Phấn", value: 100, color: "#ffb6c1"},
      {name: "Aldehydic", value: 95, color: "#e0ffff"},
      {name: "Gỗ", value: 80, color: "#8b4513"},
      {name: "Hoa kim ngân", value: 70, color: "#ffd700"}
    ]
  },
  // 43
  "no-5-eau-de-toilette": {
    subName: "EDT", perfumer: "Ernest Beaux", year: 1921, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 35, summer: 10, fall: 30, winter: 25 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Chanel No 5 EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No 5 EDT chính hãng: Dễ chịu hơn bản EDP, sự cân bằng hoàn hảo giữa phấn hoa và Aldehyde hoài cổ.",
    description: "Được pha chế bởi Ernest Beaux vào năm 1921, No.5 EDT là một phiên bản gỗ phấn thanh tao, ít ngột ngạt hơn so với EDP. Mùi hương có sự tươi sáng lấp lánh của chanh và cam Bergamot, hợp để sử dụng hằng ngày nhưng vẫn giữ trọn linh hồn kinh điển của DNA Chanel.",
    vibes: [{label: "Thanh lịch", icon: "🦢"}, {label: "Hoài cổ", icon: "🎞️"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 7.0, value: 8.0, total: 7.6 },
    topNotes: [{name: "Aldehydes"}, {name: "Ngọc lan tây"}, {name: "Neroli"}, {name: "Chanh vàng"}],
    middleNotes: [{name: "Hoa diên vĩ"}, {name: "Hoa hồng"}, {name: "Hoa linh lan"}, {name: "Gốc diên vĩ"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Hương bài khô"}, {name: "Hổ phách"}, {name: "Rêu sồi"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Aldehydic", value: 90, color: "#e0ffff"},
      {name: "Phấn", value: 80, color: "#ffb6c1"},
      {name: "Hoa cỏ", value: 70, color: "#ffc0cb"}
    ]
  },
  // 44
  "no-5-parfum": {
    subName: "Parfum", perfumer: "Ernest Beaux", year: 1921, gender: "nu", longevity: 9, sillage: 6,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Chanel No 5 Parfum Extrait chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chanel No 5 Parfum chính hãng: Phiên bản tinh chất Extrait đậm đặc nhất, xa xỉ và tròn trịa đến từng nốt phấn.",
    description: "Bản Parfum (tinh chất) là tuyệt tác hội tụ tinh hoa thuần túy nhất của No.5. Không gắt gỏng chói lòa như EDP, Parfum ôm sát lấy da, lả lướt và béo ngậy. Chiết xuất rễ diên vĩ và gỗ đàn hương ở nồng độ cực cao lột tả chân giá trị thực sự của một biểu tượng.",
    vibes: [{label: "Đắt tiền", icon: "💎"}, {label: "Xúc giác", icon: "🧴"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 8.0 },
    topNotes: [{name: "Aldehydes"}, {name: "Ngọc lan tây (Ylang-Ylang)"}, {name: "Neroli"}],
    middleNotes: [{name: "Hoa nhài vùng Grasse"}, {name: "Hoa hồng"}, {name: "Gốc diên vĩ (Orris Root)"}],
    baseNotes: [{name: "Gỗ đàn hương"}, {name: "Hương bài (Civet)"}, {name: "Rêu (Moss)"}, {name: "Patchouli"}],
    accords: [
      {name: "Phấn", value: 100, color: "#dda0dd"},
      {name: "Aldehydic", value: 85, color: "#e0ffff"},
      {name: "Hoa trắng", value: 70, color: "#fffacd"}
    ]
  },
  // 45
  "chloe-atelier-des-fleurs-rosa-damascena": {
    subName: "EDP", perfumer: "Amandine Clerc-Marie", year: 2019, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 60, summer: 20, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Chloé Rosa Damascena chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chloé Rosa Damascena chính hãng: Hương hoa hồng Damask ngậm sương mai, trong vắt thanh khiết đầy nữ tính.",
    description: "Nằm trong bộ sưu tập Atelier des Fleurs danh giá, Rosa Damascena tựa chùm hoa hồng đọng sương rạng sáng. Nó không có cảm giác nồng phấn già cỗi, mà là hương thơm tự nhiên, xanh mát, giòn giã và thanh tao tuyệt đối.",
    vibes: [{label: "Trong trẻo", icon: "🪷"}, {label: "Thuần khiết", icon: "💧"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Hồng Damask (Damask Rose)"}],
    middleNotes: [],
    baseNotes: [],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ffb6c1"},
      {name: "Hoa cỏ", value: 80, color: "#ffc0cb"}
    ]
  },
  // 46
  "chloe-atelier-des-fleurs-santalum": {
    subName: "EDP", perfumer: "Marypierre Julien", year: 2022, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 15, summer: 5, fall: 45, winter: 35 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Chloé Santalum chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chloé Santalum chính hãng: Gỗ đàn hương thiền định kem béo mềm nhẹ, mang lại cảm giác bình yên thư giãn.",
    description: "Khác biệt với phong cách hoa cỏ thông thường của Chloé, Santalum vinh danh nét đẹp trầm mặc của Gỗ đàn hương sấy khô. Hương gỗ sữa béo, mềm mịn, vương vấn tựa như một dải lụa ấm áp cuộn vào cơ thể trong ngày lộng gió.",
    vibes: [{label: "Thiền định", icon: "🧘‍♀️"}, {label: "Bình yên", icon: "🕯️"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 8.0 },
    topNotes: [{name: "Gỗ đàn hương (Sandalwood)"}],
    middleNotes: [],
    baseNotes: [],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Phấn gỗ", value: 85, color: "#deb887"}
    ]
  },
  // 47
  "eau-de-parfum": {
    subName: "EDP", perfumer: "Amandine Clerc-Marie", year: 2008, gender: "nu", longevity: 8, sillage: 6,
    seasons: { spring: 55, summer: 25, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Chloé EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chloé EDP chính hãng: Hương hoa hồng, hoa mẫu đơn tiểu thư yêu kiều, mùi hương signature nữ tính.",
    description: "Một biểu tượng tiểu thư vạn người mê. Chloé EDP là bó hoa mẫu đơn và hoa hồng bung nở trong làn gió Xuân mơn trớn. Với sự điểm xuyết của trái vải tươi ngọt, hương thơm gợi lên hình ảnh một quý cô thanh lịch với dải ruy băng lụa trên cổ tay, điệu đà nhưng kiêu sa vô bờ bến.",
    vibes: [{label: "Nữ tính", icon: "🎀"}, {label: "Điệu đà", icon: "💃"}],
    score: { scent: 8.2, uniqueness: 6.0, compliments: 7.0, value: 8.2, total: 7.5 },
    topNotes: [{name: "Hoa mẫu đơn (Peony)"}, {name: "Quả vải (Litchi)"}, {name: "Hoa lan Nam Phi (Freesia)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}, {name: "Hạc đính (Lily-of-the-Valley)"}, {name: "Mộc lan (Magnolia)"}],
    baseNotes: [{name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ffc0cb"},
      {name: "Hoa hồng", value: 90, color: "#ffb6c1"},
      {name: "Thanh mát", value: 70, color: "#add8e6"}
    ]
  },
  // 48
  "nomade-edp": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2018, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 35, summer: 20, fall: 30, winter: 15 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Chloé Nomade EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Chloé Nomade EDP chính hãng: Cá tính tự do phiêu bạt với hương rêu sồi (Oakmoss) mạnh mẽ hòa cùng mận vàng.",
    description: "Rũ bỏ dải ruy băng tiểu thư quen thuộc, Nomade mang đến cú twist mạnh mẽ với Rêu sồi (Oakmoss) gai góc kết hợp mận Mirabelle chín ngọt. Đúng như tên gọi, đây là mùi hương của sự phóng khoáng, hoang tàn, phiêu lưu của một nàng mộc nữ tự do thích xê dịch.",
    vibes: [{label: "Tự do", icon: "🦅"}, {label: "Cá tính", icon: "🔥"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 8.5, value: 8.0, total: 8.0 },
    topNotes: [{name: "Mận Mirabelle"}, {name: "Cam Bergamot"}, {name: "Chanh (Lemon)"}, {name: "Quả cam"}],
    middleNotes: [{name: "Lan Nam Phi (Freesia)"}, {name: "Quả đào (Peach)"}, {name: "Hoa nhài"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Amberwood"}, {name: "Patchouli"}, {name: "Gỗ đàn hương"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Cam chanh", value: 85, color: "#ffd700"},
      {name: "Lòng đất", value: 75, color: "#654321"},
      {name: "Trái cây", value: 60, color: "#ffaa00"}
    ]
  },
  // 49
  "for-men": {
    subName: "EDT", perfumer: "Anne Flipo", year: 2017, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 35, summer: 30, fall: 25, winter: 10 }, dayNight: { day: 70, night: 30 },
    seoTitle: "Coach For Men EDT chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Coach For Men EDT chính hãng: Lựa chọn hương mát mẻ, an toàn dễ dùng hằng ngày với vị lê tươi ngọt.",
    description: "Một bản giao hưởng trái cây tươi sạch dành trọn cho phái mạnh. Sự kết hợp giữa trái lê Nashi ướp lạnh, vỏ kim quất và lá thảo mộc làm cho mùi hương mát rượi thanh cảnh. Coach For Men nổi bật tính an toàn, cực kỳ đa năng phù hợp tới giảng đường hay công sở mỗi ngày.",
    vibes: [{label: "Năng động", icon: "🧢"}, {label: "Dễ gần", icon: "🤝"}],
    score: { scent: 8.0, uniqueness: 7.0, compliments: 7.0, value: 8.0, total: 7.6 },
    topNotes: [{name: "Lê Nashi (Pear)"}, {name: "Quất (Kumquat)"}, {name: "Cam Bergamot"}, {name: "Oải hương"}],
    middleNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Hoa phong lữ (Geranium)"}, {name: "Rau mùi"}],
    baseNotes: [{name: "Long diên hương (Ambergris)"}, {name: "Da lộn (Suede)"}, {name: "Hương bài"}],
    accords: [
      {name: "Trái cây ngọt", value: 100, color: "#ffa500"},
      {name: "Ngọt ngào", value: 85, color: "#ff4500"},
      {name: "Thảo mộc", value: 75, color: "#556b2f"}
    ]
  },
  // 50
  "creed-aventus": {
    subName: "EDP", perfumer: "Olivier Creed", year: 2010, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 30, summer: 30, fall: 25, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Creed Aventus EDP chính hãng mua ở đâu giá tốt? Review 2026",
    metaDescription: "Đánh giá Creed Aventus chính hãng: Ông hoàng nước hoa Niche nam tôn vinh sự quyền lực từ Dứa búng khói bạch dương.",
    description: "Tượng đài bất hủ, 'Ông vua' càn quét toàn bộ thị trường nước hoa Niche suốt hơn một thập kỷ. Sự bùng nổ của lát khóm (dứa) ngọt lịm bị xém than hòa quyện cùng khói gỗ bạch dương và rêu sồi (Oakmoss) đã nhào nặn ra một mùi hương phong trần, quyền lực tuyệt đối dành cho một Alpha Male thực thụ.",
    vibes: [{label: "Vương giả", icon: "🤴"}, {label: "Alpha Male", icon: "🐺"}],
    score: { scent: 8.8, uniqueness: 6.5, compliments: 8.5, value: 7.8, total: 8.2 },
    topNotes: [{name: "Quả dứa (Pineapple)"}, {name: "Cam Bergamot"}, {name: "Quả lý chua đen"}, {name: "Quả táo"}],
    middleNotes: [{name: "Gỗ sồi bạch dương (Birch)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Hồng Maroc"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Rêu sồi (Oak moss)"}, {name: "Long diên hương"}, {name: "Vani"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ffd700"},
      {name: "Ngọt ngào", value: 85, color: "#ff0000"},
      {name: "Da thuộc", value: 75, color: "#8b4513"},
      {name: "Khói", value: 70, color: "#a9a9a9"}
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

// Global Tag verification since patch script might break something?
// Actually this just replaces props, doesn't touch tags.

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("==> BATCH 5 HOÀN TẤT. Ghi ra ổ cứng.");
