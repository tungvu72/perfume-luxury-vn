const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "light-blue-intense-homme": {
    subName: "EDP", perfumer: "Alberto Morillas", year: 2017, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 65, fall: 8, winter: 2 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Dolce & Gabbana Light Blue Eau Intense Nam",
    metaDescription: "Review D&G Light Blue Eau Intense Pour Homme: Hương thơm của vùng biển Capri xanh ngắt. Nốt hương bưởi, quýt tươi mát quyện cùng nước biển sảng khoái tột độ mùa oi bức.",
    description: "Vũ khí diệt hơi nóng mùa hè chuẩn mực nhất dành cho nam! Cú vớt hương hoàn hảo từ bậc thầy Alberto Morillas giúp bản Intense giữ nguyên vị the mát sảng khoái của Bưởi (Grapefruit) và Quýt ngậm nước, nhưng nhân đôi nồng độ của Nước biển (Sea Water) mặn mòi. Kết hợp cùng Gỗ bách xù (Juniper) nam tính và Xạ hương ngà, nó tạo nên một mùi hương mát lạnh vô song nhưng lại bám tỏa trâu bò hiếm thấy trong thế giới nước hoa fresh (tươi mát). Tuyệt phẩm cho dân chơi gym hoặc đi biển.",
    vibes: [{label: "Biển Capri", icon: "🌊"}, {label: "Giải nhiệt", icon: "🧊"}],
    score: { scent: 9.0, uniqueness: 7.5, compliments: 9.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Quả Bưởi chín (Grapefruit)"}, {name: "Cam Mandarin"}],
    middleNotes: [{name: "Nước biển mặn (Sea Water)"}, {name: "Gỗ bách xù (Juniper)"}],
    baseNotes: [{name: "Xạ hương ngà (Musk)"}, {name: "Nhựa Gỗ hổ phách (Amberwood)"}],
    accords: [
      {name: "Cam chanh tươi bay", value: 100, color: "#ffff00"},
      {name: "Thảo mộc thanh", value: 95, color: "#2e8b57"},
      {name: "Nước biển xanh", value: 85, color: "#00bfff"},
      {name: "Gia vị mát", value: 60, color: "#7cb342"},
      {name: "Gỗ mộc", value: 55, color: "#8b4513"}
    ],
    article: `### Ai không nên mua?\n\nNếu bạn làm việc phòng lạnh 100% không bao giờ ra ngoài rước mồ hôi, bản Intense có thể hơi mặn mùi biển. Những ai ghét nốt hương biển học (Marine/Aquatic) nên tránh.\n\n### Có đáng tiền không?\n\nCực kỳ đáng tiền cho mùa hè. Bạn sẽ khó tìm được chai Fresh nào có độ lưu hương bám tỏa vượt qua 7 tiếng trên da như con quái vật mát lạnh này.\n\n### Nên dùng khi nào?\n\nMùa hè, ngày oi bức, đi biển, đi gym, dạo phố ban ngày.`,
    verdict: "Ông hoàng nước hoa mùa đông gục ngã trước ông vua mùa hè. Vị chua mặn bám cực tốt.",
    verdictShort: "ÔNG VUA TƯƠI MÁT MÙA HÈ",
    tags: ["Mùa hè", "Phóng khoáng", "Thể thao", "Đi biển"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2000000,
    shopeeOffers: [],
    isPublished: true
  }
};

const propsToReplace = ['subName', 'perfumer', 'year', 'gender', 'longevity', 'sillage', 'seasons', 'dayNight', 'seoTitle', 'metaDescription', 'description', 'score', 'topNotes', 'middleNotes', 'baseNotes', 'accords', 'vibes', 'article', 'verdict', 'verdictShort', 'tags', 'sizes', 'basePrice', 'shopeeOffers', 'isPublished'];

for (let id in updates) {
  let startIdx = lines.findIndex(l => l.includes('id: "' + id + '"'));
  if (startIdx === -1) continue; 
  
  let endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('isPublished: true'));
  
  let cleanedLines = [];
  for (let i = startIdx; i <= endIdx; i++) {
    let line = lines[i];
    let skip = false;
    for (let p of propsToReplace) {
      if (line.trim().startsWith(p + ':')) {
        skip = true;
        if (['accords', 'topNotes', 'middleNotes', 'baseNotes', 'vibes', 'tags', 'sizes', 'shopeeOffers'].includes(p) && line.includes('[')) {
          let j = i + 1;
          while (j <= endIdx && !lines[j].includes('],') && !lines[j].includes('] )')) j++;
          i = j;
        } else if (p === 'article' && line.includes('`')) {
          let j = i + 1;
          while (j <= endIdx && !lines[j].includes('`,')) j++;
          i = j;
        }
        break;
      }
    }
    if (!skip) {
      cleanedLines.push(line);
    }
  }
  
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
      } else if (p === 'article') {
        injectLines.push('    article: `' + updates[id][p] + '`,');
      } else {
        injectLines.push('    ' + p + ': ' + vStr + ',');
      }
    }
  }
  
  let injectPoint = cleanedLines.findIndex(l => l.trim().startsWith('name:')) + 1;
  cleanedLines.splice(injectPoint, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Patch complete.');
