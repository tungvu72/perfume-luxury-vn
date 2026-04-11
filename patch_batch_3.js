const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = [
  {
    id: "good-girl-carolina",
    data: {
      subName: "EDP", perfumer: "Louise Turner", year: 2016, gender: "nu",
      longevity: 7, sillage: 8, seasons: { spring: 30, summer: 10, fall: 85, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Carolina Herrera Good Girl EDP chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Carolina Herrera Good Girl EDP chính hãng: Biểu tượng giày gót nhọn, cacao ngọt ngào cho tiệc tùng cháy phố.",
      description: "Good Girl EDP mang đến hình ảnh chiếc giày gót nhọn lừng danh của giới sành điệu. Mùi hương ngập tràn sự quyến rũ chết người từ cacao sưởi ấm kết hợp với hoa huệ, lý tưởng cho những đêm tiệc tùng bùng nổ năng lượng.",
      score: { scent: 8.0, uniqueness: 6.0, compliments: 8.5, value: 9.0, total: 8.0 },
      topNotes: [{name: "Cacao"}, {name: "Hạnh nhân"}],
      middleNotes: [{name: "Hoa huệ (Tuberose)"}, {name: "Hoa nhài"}],
      baseNotes: [{name: "Đậu Tonka"}, {name: "Vanilla"}],
      accords: [
        {name: "Ngọt ngào", value: 100, color: "#ff3333"},
        {name: "Hoa trắng", value: 85, color: "#f0f8ff"},
        {name: "Cay ấm", value: 80, color: "#cc4400"},
        {name: "Vanilla", value: 75, color: "#ffffcc"},
        {name: "Hổ phách", value: 70, color: "#d2691e"}
      ]
    }
  },
  {
    id: "allure-edp",
    data: {
      subName: "EDP", perfumer: "Jacques Polge", year: 1999, gender: "nu",
      longevity: 8, sillage: 8, seasons: { spring: 95, summer: 40, fall: 90, winter: 60 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Chanel Allure EDP nữ chính hãng mua ở đâu? Review",
      metaDescription: "Đánh giá Chanel Allure EDP chính hãng: Sang trọng thanh lịch vượt thời gian từ cam quýt đào và vanilla nịnh mũi.",
      description: "Chanel Allure EDP là đỉnh cao của sự thanh lịch và trưởng thành. Hương hoa đào và cam quýt quyện vani mượt mà, tạo nên khí chất nữ tính sang trọng không diện mạo nào sánh bằng.",
      score: { scent: 8.2, uniqueness: 6.0, compliments: 8.5, value: 8.2, total: 8.0 },
      topNotes: [{name: "Quả đào"}, {name: "Cam Mandarin"}],
      middleNotes: [{name: "Hoa nhài"}, {name: "Hoa mộc lan (Magnolia)"}],
      baseNotes: [{name: "Vanilla"}, {name: "Cam Bergamot"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Hương hoa", value: 85, color: "#ff69b4"},
        {name: "Hoa trắng", value: 75, color: "#f0f8ff"},
        {name: "Vanilla", value: 70, color: "#ffffcc"},
        {name: "Trái cây", value: 65, color: "#ff4500"}
      ]
    }
  },
  {
    id: "allure-homme-edition-blanche",
    data: {
      subName: "EDP", perfumer: "Jacques Polge", year: 2014, gender: "nam",
      longevity: 6, sillage: 8, seasons: { spring: 90, summer: 100, fall: 40, winter: 20 }, dayNight: { day: 90, night: 10 },
      seoTitle: "Chanel Allure Homme Edition Blanche EDP chính hãng",
      metaDescription: "Đánh giá Chanel Allure Homme Edition Blanche quyến rũ như chiếc bánh chanh nướng béo ngậy.",
      description: "Bản Edition Blanche nổi tiếng với mùi hương tựa như chiếc bánh chanh chanh béo ngậy giữa mùa hè rực rỡ. Đẳng cấp, thanh sạch và dễ chịu tột đỉnh.",
      score: { scent: 8.8, uniqueness: 6.0, compliments: 8.5, value: 8.8, total: 8.3 },
      topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Cam Bergamot"}],
      middleNotes: [{name: "Tiêu hồng"}, {name: "Vanilla"}],
      baseNotes: [{name: "Gỗ đàn hương"}, {name: "Đậu Tonka"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Thảo mộc", value: 85, color: "#2e8b57"},
        {name: "Vanilla", value: 80, color: "#ffffcc"},
        {name: "Gỗ", value: 80, color: "#8b4513"},
        {name: "Phấn", value: 70, color: "#e6ccb2"}
      ]
    }
  },
  {
    id: "allure-homme-edt",
    data: {
      subName: "EDT", perfumer: "Jacques Polge", year: 1999, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 85, summer: 40, fall: 95, winter: 60 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Chanel Allure Homme EDT chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Chanel Allure Homme EDT: Kinh điển, ấm áp, nam tính hoài niệm.",
      description: "Allure Homme EDT kinh điển mang trọn nét nam tính cổ điển và ấm áp vượt thời gian. Một mùi hương đa dụng cân trọn mọi hoàn cảnh từ đi làm đến hẹn hò với gia vị gừng và chanh mượt mà.",
      score: { scent: 8.6, uniqueness: 6.0, compliments: 8.5, value: 8.6, total: 8.1 },
      topNotes: [{name: "Chanh vàng"}, {name: "Gừng"}, {name: "Quả đào"}],
      middleNotes: [{name: "Cam Mandarin"}],
      baseNotes: [{name: "Vanilla"}, {name: "Đậu Tonka"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Vanilla", value: 85, color: "#ffffcc"},
        {name: "Gỗ", value: 80, color: "#8b4513"},
        {name: "Cay tươi", value: 75, color: "#7cb342"},
        {name: "Ngọt", value: 70, color: "#ff3333"}
      ]
    }
  },
  {
    id: "allure-homme-sport-eau-extreme",
    data: {
      subName: "Eau Extrême", perfumer: "Jacques Polge", year: 2012, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 90, summer: 90, fall: 85, winter: 40 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Chanel Allure Homme Sport Eau Extreme chính hãng",
      metaDescription: "Đánh giá Chanel Allure Homme Sport Eau Extreme sát thủ phòng gym, quyện bạc hà và đậu tonka nịnh mũi.",
      description: "Được ví như 'King of versatile' - vua đa dụng, Allure Homme Sport Eau Extreme quyện bạc hà mát lạnh với đậu Tonka thể thao năng động, một sát thủ cuốn hút trọn vẹn sức sống 4 mùa.",
      score: { scent: 8.6, uniqueness: 6.0, compliments: 8.5, value: 8.6, total: 8.1 },
      topNotes: [{name: "Bạc hà"}, {name: "Tiêu"}],
      middleNotes: [{name: "Cam Mandarin"}, {name: "Xạ hương"}],
      baseNotes: [{name: "Đậu Tonka"}, {name: "Gỗ đàn hương"}],
      accords: [
        {name: "Thảo mộc", value: 100, color: "#2e8b57"},
        {name: "Gỗ", value: 85, color: "#8b4513"},
        {name: "Cay tươi", value: 80, color: "#7cb342"},
        {name: "Cam chanh", value: 75, color: "#ffff66"},
        {name: "Xanh lá", value: 75, color: "#228b22"}
      ]
    }
  },
  {
    id: "allure-homme-sport",
    data: {
      subName: "EDT", perfumer: "Jacques Polge", year: 2004, gender: "nam",
      longevity: 6, sillage: 8, seasons: { spring: 90, summer: 100, fall: 40, winter: 20 }, dayNight: { day: 90, night: 10 },
      seoTitle: "Chanel Allure Homme Sport EDT chính hãng mua ở đâu?",
      metaDescription: "Chanel Allure Homme Sport EDT nước hoa nam nạp năng lượng mùa hè bằng cam quýt và nước biển mát lạnh.",
      description: "Phiên bản Sport EDT giải nhiệt tức thì bằng năng lượng mát lạnh của nước biển và tưng bừng cam quýt căng mọng. Mang đậm hình ảnh sau buổi tập gym săn chắc, sảng khoái nam tính tột độ.",
      score: { scent: 8.6, uniqueness: 6.0, compliments: 8.5, value: 8.6, total: 8.1 },
      topNotes: [{name: "Hương biển (Sea Water)"}, {name: "Cam"}, {name: "Aldehydes"}],
      middleNotes: [{name: "Cam Mandarin"}, {name: "Tiêu"}],
      baseNotes: [{name: "Xạ hương"}, {name: "Vanilla"}, {name: "Đậu Tonka"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Thảo mộc", value: 80, color: "#2e8b57"},
        {name: "Vanilla", value: 75, color: "#ffffcc"},
        {name: "Aldehydes", value: 70, color: "#e0f7fa"},
        {name: "Biển", value: 65, color: "#0066cc"}
      ]
    }
  },
  {
    id: "antaeus",
    data: {
      subName: "EDT", perfumer: "Jacques Polge", year: 1981, gender: "nam",
      longevity: 8, sillage: 8, seasons: { spring: 30, summer: 10, fall: 90, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Chanel Antaeus EDT chính hãng nam tính powerhouse",
      metaDescription: "Đánh giá Chanel Antaeus EDT kinh điển cho dân chơi hương bệ vệ với da thuộc và xạ hương mạnh mẽ.",
      description: "Antaeus là hiện thân của những quý ông thập kỷ 80 mạnh mẽ như thần thoại Hy Lạp. Mùi rêu sồi pha da thuộc đậm chất powerhouse đàn ông, chững chạc, uy quyền và bệ vệ ngút trời.",
      score: { scent: 8.6, uniqueness: 6.0, compliments: 8.5, value: 8.6, total: 8.1 },
      topNotes: [{name: "Nốt hoang dã (Castoreum)"}, {name: "Ngò rí"}],
      middleNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Hoa hồng"}, {name: "Xô thơm"}],
      baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Nhựa thơm (Labdanum)"}, {name: "Cỏ xạ hương"}],
      accords: [
        {name: "Gỗ", value: 100, color: "#8b4513"},
        {name: "Thảo mộc", value: 85, color: "#2e8b57"},
        {name: "Da thuộc", value: 80, color: "#8b5a2b"},
        {name: "Rêu", value: 75, color: "#556b2f"},
        {name: "Đất", value: 75, color: "#6b4226"}
      ]
    }
  },
  {
    id: "bleu-de-chanel-eau-de-parfum",
    data: {
      subName: "EDP", perfumer: "Jacques Polge", year: 2014, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 90, summer: 90, fall: 85, winter: 40 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Bleu de Chanel EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Bleu de Chanel EDP - Bản hoàn hảo và đa dụng nhất của Chanel với bưởi và trầm hương ấm áp nam tính.",
      description: "Sự cân bằng hoàn hảo nhất trong cả dòng Bleu đình đám. Gỗ hổ phách, bưởi chưng cất thành dáng vẻ quý ông hoàn hảo 'Blue Fragrance' mọi cô gái đều say lòng.",
      score: { scent: 8.8, uniqueness: 6.0, compliments: 8.5, value: 8.8, total: 8.3 },
      topNotes: [{name: "Bưởi"}, {name: "Chanh vàng"}, {name: "Bạc hà"}],
      middleNotes: [{name: "Nhang trầm (Incense)"}, {name: "Gừng"}],
      baseNotes: [{name: "Hổ phách"}, {name: "Tuyết tùng (Cedar)"}, {name: "Gỗ đàn hương"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Hổ phách", value: 85, color: "#d2691e"},
        {name: "Gỗ", value: 80, color: "#8b4513"},
        {name: "Cay tươi", value: 75, color: "#7cb342"},
        {name: "Thảo mộc", value: 70, color: "#2e8b57"}
      ]
    }
  },
  {
    id: "bleu-de-chanel-parfum",
    data: {
      subName: "Parfum", perfumer: "Olivier Polge", year: 2018, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 90, summer: 80, fall: 95, winter: 70 }, dayNight: { day: 80, night: 20 },
      seoTitle: "Bleu de Chanel Parfum chính hãng mua ở đâu?",
      metaDescription: "Chanel Bleu Parfum bản đậm đặc gỗ đàn hương nhất dành cho nam giới trưởng thành.",
      description: "Lớp gỗ đàn hương tự nhiên rực rỡ biến Bleu Parfum thành siêu phẩm trầm lắng nhất trong toàn bộ BST. Mùi hương đậm đặc, quyền lực và trưởng thành chín chắn cực độ.",
      score: { scent: 8.8, uniqueness: 6.0, compliments: 8.5, value: 8.8, total: 8.3 },
      topNotes: [{name: "Vỏ chanh (Lemon Zest)"}, {name: "Cam Bergamot"}],
      middleNotes: [{name: "Hoa oải hương"}, {name: "Iso E Super"}],
      baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Tuyết tùng"}, {name: "Amberwood"}, {name: "Đậu Tonka"}],
      accords: [
        {name: "Gỗ", value: 100, color: "#8b4513"},
        {name: "Cam chanh", value: 80, color: "#ffff66"},
        {name: "Thảo mộc", value: 70, color: "#2e8b57"},
        {name: "Hổ phách", value: 60, color: "#d2691e"},
        {name: "Cay tươi", value: 60, color: "#7cb342"}
      ]
    }
  }
];

// Helper to remove any lines starting with `{ name: ` to prevent JSON syntax crashes
function removeStrayArrayElements(linesArr, startIdx, endIdx) {
  let cleaned = [];
  for (let i = startIdx; i <= endIdx; i++) {
    const l = linesArr[i];
    if (l.trim().startsWith('{ name:') || l.trim().startsWith('{"name":') || l.trim() === '],') {
      // skip stray array element
      continue;
    }
    cleaned.push(l);
  }
  return cleaned;
}

updates.forEach(upd => {
  let startIdx = lines.findIndex(l => l.includes(`id: "${upd.id}",`));
  if (startIdx === -1) {
    console.err("NOT FOUND:", upd.id);
    return;
  }
  
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes(`isPublished: true`));
  if (endIdx === -1) return;

  const propsToReplace = ['subName', 'perfumer', 'gender', 'year', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'description', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords'];

  let cleanedLines = [];
  
  for (let i = startIdx; i <= endIdx; i++) {
    let line = lines[i];
    let skip = false;
    
    for (let p of propsToReplace) {
      if (line.trim().startsWith(p + ':')) {
        skip = true;
        if (p === 'accords' && line.includes('[')) {
          let j = i + 1;
          while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
          i = j; 
        }
        break;
      }
    }
    if (!skip) {
      // additional check to avoid importing orphaned `{name:` lines because of old bugs
      if (line.trim().startsWith('{ name:') || line.trim().startsWith('{"name":') || line.trim() === '],') {
         // Drop safely
      } else {
         cleanedLines.push(line);
      }
    }
  }

  let nameFileIdx = cleanedLines.findIndex(l => l.trim().startsWith('name:'));
  
  let injectLines = [];
  for (let p of propsToReplace) {
    if (upd.data[p] !== undefined) {
      let vStr = JSON.stringify(upd.data[p]);
      if (p === 'accords') {
        let accStr = `    accords: [\n`;
        upd.data[p].forEach((a, idx) => {
          accStr += `      {"name": "${a.name}", "value": ${a.value}, "color": "${a.color}"}${idx < upd.data[p].length-1 ? ',' : ''}\n`;
        });
        accStr += `    ],`;
        injectLines.push(accStr);
      } else if (p === 'description') {
        injectLines.push(`    description: ${vStr},`);
      } else {
        injectLines.push(`    ${p}: ${vStr},`);
      }
    }
  }

  cleanedLines.splice(nameFileIdx + 1, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
});

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully patched Batch 3 with fully dynamic description writer & stray syntax cleaner.");
