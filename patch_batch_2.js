const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = [
  {
    id: "rmni-prive-the-yulong",
    data: {
      subName: "EDT", perfumer: "Julie Masse", year: 2020, gender: "unisex",
      longevity: 6, sillage: 6, seasons: { spring: 90, summer: 100, fall: 40, winter: 10 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Armani Prive The Yulong chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Armani Prive The Yulong chính hãng: Hương trà thanh khiết đỉnh cao, sảng khoái cho mùa Hè, tư vấn mua uy tín tại Maison De Son.",
      score: { scent: 8.4, uniqueness: 8.5, compliments: 7, value: 7.4, total: 7.9 },
      topNotes: [{name: "Cam Mandarin"}, {name: "Tinh dầu lá cam (Petitgrain)"}],
      middleNotes: [{name: "Trà (Tea)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Hoa nhài (Jasmine)"}],
      baseNotes: [{name: "Cỏ hương bài (Vetiver)"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Xanh lá", value: 90, color: "#228b22"},
        {name: "Hoa trắng", value: 85, color: "#f0f8ff"},
        {name: "Thảo mộc", value: 75, color: "#7cb342"},
        {name: "Gỗ", value: 60, color: "#8b4513"}
      ]
    }
  },
  {
    id: "musk-kashmir",
    data: {
      subName: "EDP", perfumer: "Attar Collection", year: 2016, gender: "unisex",
      longevity: 7, sillage: 8, seasons: { spring: 80, summer: 60, fall: 70, winter: 50 }, dayNight: { day: 75, night: 25 },
      seoTitle: "Attar Collection Musk Kashmir chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Attar Collection Musk Kashmir chính hãng: Mùi xạ hương trắng mịn màng như da thịt, tỏa siêu mượt, mua uy tín tại Maison De Son.",
      score: { scent: 7.4, uniqueness: 7.5, compliments: 8.5, value: 8.4, total: 7.9 },
      topNotes: [{name: "Tiêu trắng (White Pepper)"}, {name: "Đinh hương (Cloves)"}],
      middleNotes: [{name: "Hoa dành dành (Gardenia)"}],
      baseNotes: [{name: "Xạ hương trắng (White Musk)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
      accords: [
        {name: "Xạ hương", value: 100, color: "#e6e6fa"},
        {name: "Phấn", value: 85, color: "#f5deb3"},
        {name: "Cay ấm", value: 80, color: "#cc4400"},
        {name: "Cay tươi", value: 75, color: "#7cb342"},
        {name: "Gỗ", value: 65, color: "#8b4513"}
      ]
    }
  },
  {
    id: "the-most-wanted-parfum",
    data: {
      subName: "Parfum", perfumer: "Azzaro", year: 2022, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 30, summer: 10, fall: 90, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Azzaro The Most Wanted Parfum chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Azzaro The Most Wanted Parfum chính hãng: Mối đe dọa vũ khí tối thượng với Vanila và gừng cay ấm, siêu bám tỏa.",
      score: { scent: 9.2, uniqueness: 6, compliments: 8.5, value: 10, total: 8.7 },
      topNotes: [{name: "Gừng đỏ (Red Ginger)"}],
      middleNotes: [{name: "Gỗ (Woody Notes)"}],
      baseNotes: [{name: "Vanilla"}],
      accords: [
        {name: "Vanilla", value: 100, color: "#ffffcc"},
        {name: "Gỗ", value: 85, color: "#8b4513"},
        {name: "Cay ấm", value: 75, color: "#7cb342"},
        {name: "Tươi mát", value: 60, color: "#80deea"},
        {name: "Phấn", value: 55, color: "#e6ccb2"}
      ]
    }
  },
  {
    id: "gris-charnel-extrait",
    data: {
      subName: "Extrait", perfumer: "Mathilde Bijaoui", year: 2022, gender: "unisex",
      longevity: 8, sillage: 8, seasons: { spring: 50, summer: 20, fall: 95, winter: 90 }, dayNight: { day: 30, night: 70 },
      seoTitle: "BDK Gris Charnel Extrait chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá BDK Gris Charnel Extrait: Bản nâng cấp đậm đặc hơn, trầm ấm gỗ đàn hương và trà đen, cực đỉnh cho mùa Thu Đông.",
      score: { scent: 8.8, uniqueness: 7.5, compliments: 8.5, value: 7.8, total: 8.4 },
      topNotes: [{name: "Trà đen (Black Tea)"}, {name: "Bạch đậu khấu (Cardamom)"}, {name: "Sung (Fig)"}],
      middleNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Vanilla"}],
      baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}],
      accords: [
        {name: "Gỗ", value: 100, color: "#6b4226"},
        {name: "Cay ấm", value: 80, color: "#cc4400"},
        {name: "Vanilla", value: 75, color: "#ffffcc"},
        {name: "Phấn", value: 70, color: "#e6ccb2"},
        {name: "Thảo mộc", value: 65, color: "#2e8b57"}
      ]
    }
  },
  {
    id: "her-edp",
    data: {
      subName: "EDP", perfumer: "Francis Kurkdjian", year: 2018, gender: "nu",
      longevity: 6, sillage: 8, seasons: { spring: 95, summer: 80, fall: 70, winter: 40 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Burberry Her EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Burberry Her EDP chính hãng: Quả mọng dâu tây ngot ngào, nịnh mũi tạo bởi 'tác giả' của Baccarat Rouge 540.",
      score: { scent: 7.8, uniqueness: 6, compliments: 8.5, value: 8.8, total: 7.9 },
      topNotes: [{name: "Dâu tây (Strawberry)"}, {name: "Mâm xôi (Raspberry)"}, {name: "Cherry chua (Sour Cherry)"}],
      middleNotes: [{name: "Vòi voi"}],
      baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Vanilla"}],
      accords: [
        {name: "Trái cây", value: 100, color: "#ff4500"},
        {name: "Ngọt ngào", value: 80, color: "#ff69b4"},
        {name: "Gỗ", value: 60, color: "#6b4226"},
        {name: "Phấn", value: 55, color: "#e6ccb2"},
        {name: "Xạ hương", value: 50, color: "#e6e6fa"}
      ]
    }
  },
  {
    id: "man-in-black",
    data: {
      subName: "EDP", perfumer: "Alberto Morillas", year: 2014, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 30, summer: 10, fall: 90, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Bvlgari Man In Black chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Bvlgari Man In Black EDP chính hãng: Mùi hương quý ông đĩnh đạc trưởng thành với da thuộc, rượu Rum gai góc.",
      score: { scent: 8.6, uniqueness: 6, compliments: 8.5, value: 9.6, total: 8.3 },
      topNotes: [{name: "Gia vị (Spicy Notes)"}, {name: "Rượu Rum (Rum)"}],
      middleNotes: [{name: "Da thuộc (Leather)"}, {name: "Hoa diên vĩ"}],
      baseNotes: [{name: "Thuốc lá (Tobacco)"}, {name: "Gỗ Guaiac (Guaiac Wood)"}, {name: "Đậu Tonka (Tonka Bean)"}],
      accords: [
        {name: "Cay ấm", value: 100, color: "#cc4400"},
        {name: "Gỗ", value: 85, color: "#6b4226"},
        {name: "Da thuộc", value: 80, color: "#8b5a2b"},
        {name: "Rượu", value: 80, color: "#a0522d"},
        {name: "Hổ phách", value: 75, color: "#d2691e"}
      ]
    }
  },
  {
    id: "byredo-blanche-edp",
    data: {
      subName: "EDP", perfumer: "Ben Gorham", year: 2009, gender: "nu",
      longevity: 6, sillage: 6, seasons: { spring: 95, summer: 90, fall: 30, winter: 20 }, dayNight: { day: 90, night: 10 },
      seoTitle: "Byredo Blanche EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Byredo Blanche EDP chính hãng: Hương hoa cỏ và Aldehydes tạo cảm giác sạch sẽ như những tờ giấy trắng tinh tươm.",
      score: { scent: 7.4, uniqueness: 6.5, compliments: 7, value: 6.4, total: 7.0 },
      topNotes: [{name: "Aldehydes"}, {name: "Tiêu hồng (Pink Pepper)"}, {name: "Hoa hồng (Rose)"}],
      middleNotes: [{name: "Mẫu đơn (Peony)"}, {name: "Violet"}, {name: "Hoa cam (Orange Blossom)"}],
      baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
      accords: [
        {name: "Tươi mát", value: 100, color: "#80deea"},
        {name: "Aldehydes", value: 90, color: "#e0f7fa"},
        {name: "Xạ hương", value: 80, color: "#e6e6fa"},
        {name: "Phấn", value: 75, color: "#f5deb3"},
        {name: "Hương hoa", value: 75, color: "#ff69b4"}
      ]
    }
  },
  {
    id: "byredo-la-tulipe",
    data: {
      subName: "EDP", perfumer: "Jerome Epinette", year: 2010, gender: "nu",
      longevity: 6, sillage: 8, seasons: { spring: 100, summer: 70, fall: 20, winter: 10 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Byredo La Tulipe chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Byredo La Tulipe chính hãng: Hương hoa tulip tươi thắm vừa cắt cành vào sáng sớm mùa xuân thanh thản nhè nhẹ.",
      score: { scent: 8.2, uniqueness: 6.5, compliments: 8.5, value: 7.2, total: 7.9 },
      topNotes: [{name: "Lan Nam Phi (Freesia)"}, {name: "Cyclamen"}, {name: "Đại hoàng (Rhubarb)"}],
      middleNotes: [{name: "Hoa Tulip vàng (Tulip)"}],
      baseNotes: [{name: "Hương mục xanh (Green Notes)"}, {name: "Cỏ hương bài (Vetiver)"}],
      accords: [
        {name: "Hương hoa", value: 100, color: "#ff69b4"},
        {name: "Xanh lá", value: 85, color: "#228b22"},
        {name: "Hoa hồng", value: 65, color: "#e9967a"},
        {name: "Trái cây", value: 60, color: "#ff4500"},
        {name: "Thảo mộc", value: 60, color: "#2e8b57"}
      ]
    }
  },
  {
    id: "bal-dafrique",
    data: {
      subName: "EDP", perfumer: "Jerome Epinette", year: 2009, gender: "unisex",
      longevity: 6, sillage: 8, seasons: { spring: 85, summer: 90, fall: 50, winter: 30 }, dayNight: { day: 85, night: 15 },
      seoTitle: "Byredo Bal d'Afrique EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Byredo Bal d'Afrique chính hãng: Lễ hội hoa quả châu Phi cuồng nhiệt mang đậm âm hưởng nghệ thuật phóng khoáng.",
      score: { scent: 8.2, uniqueness: 6.5, compliments: 8.5, value: 7.2, total: 7.9 },
      topNotes: [{name: "Cúc Thủy Tiên (African Marigold)"}, {name: "Cam Bergamot"}],
      middleNotes: [{name: "Hoa anh thảo (Cyclamen)"}, {name: "Hoa Violet (Violet)"}],
      baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Tuyết tùng (Cedar)"}],
      accords: [
        {name: "Gỗ", value: 100, color: "#8b4513"},
        {name: "Thảo mộc", value: 90, color: "#2e8b57"},
        {name: "Đất", value: 80, color: "#6b4226"},
        {name: "Hoa Violet", value: 75, color: "#8a2be2"},
        {name: "Hương hoa", value: 70, color: "#ff69b4"}
      ]
    }
  },
  {
    id: "ck-obsession",
    data: {
      subName: "EDT", perfumer: "Bob Slattery", year: 1986, gender: "nam",
      longevity: 7, sillage: 8, seasons: { spring: 20, summer: 5, fall: 90, winter: 100 }, dayNight: { day: 15, night: 85 },
      seoTitle: "Calvin Klein Obsession EDT For Men chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Calvin Klein Obsession For Men chính hãng: Hương thơm cổ điển, ấm cúng và đầy nam tính kinh điển của những năm 90s.",
      score: { scent: 7.8, uniqueness: 6, compliments: 8.5, value: 9.8, total: 8.0 },
      topNotes: [{name: "Quế (Cinnamon)"}, {name: "Cam Mandarin"}],
      middleNotes: [{name: "Mộc dược (Myrrh)"}, {name: "Nhục đậu khấu (Nutmeg)"}],
      baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Vanilla"}, {name: "Gỗ đàn hương (Sandalwood)"}],
      accords: [
        {name: "Cay ấm", value: 100, color: "#cc4400"},
        {name: "Gỗ", value: 85, color: "#8b4513"},
        {name: "Hổ phách", value: 80, color: "#d2691e"},
        {name: "Thảo mộc", value: 80, color: "#2e8b57"},
        {name: "Quế", value: 75, color: "#d2691e"}
      ]
    }
  }
];

updates.forEach(upd => {
  let startIdx = lines.findIndex(l => l.includes(`id: "${upd.id}",`));
  if (startIdx === -1) {
    console.err("NOT FOUND:", upd.id);
    return;
  }
  
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes(`isPublished: true`));
  if (endIdx === -1) return;

  let injectLines = [];
  const propsToReplace = ['subName', 'perfumer', 'gender', 'year', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords'];

  let cleanedLines = [];
  
  for (let i = startIdx; i <= endIdx; i++) {
    let line = lines[i];
    let skip = false;
    
    for (let p of propsToReplace) {
      if (line.trim().startsWith(p + ':')) {
        skip = true;
        if (p === 'accords' && line.includes('[')) {
          let j = i;
          while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
          i = j; 
        }
        break;
      }
    }
    if (!skip) cleanedLines.push(line);
  }

  let nameFileIdx = cleanedLines.findIndex(l => l.trim().startsWith('name:'));
  
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
      } else {
        injectLines.push(`    ${p}: ${vStr},`);
      }
    }
  }

  cleanedLines.splice(nameFileIdx + 1, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
});

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully patched Batch 2 using reliable Line-by-Line array mutations.");
