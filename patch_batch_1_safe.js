const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const updates = [
  {
    id: "colonia",
    data: {
      subName: "EDC",
      perfumer: "Acqua Di Parma",
      year: 1916,
      gender: "unisex",
      longevity: 6,
      sillage: 6,
      seasons: { spring: 60, summer: 90, fall: 20, winter:10 },
      dayNight: { day: 80, night: 20 },
      seoTitle: "Acqua Di Parma Colonia chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá nước hoa Acqua Di Parma Colonia chính hãng: hương cam chanh cổ điển của Ý, độ lưu hương thực tế, tư vấn mua uy tín tại Maison De Son.",
      score: { scent: 8.2, uniqueness: 7.5, compliments: 7, value: 7.2, total: 7.6 },
      topNotes: [{name: "Cam chanh (Citruses)"}, {name: "Nhựa thơm chanh (Lemon Verbena)"}],
      middleNotes: [{name: "Oải hương (Lavender)"}, {name: "Hương thảo (Rosemary)"}],
      baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Xạ hương (Musk)"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff66"},
        {name: "Thảo mộc", value: 80, color: "#2E8B57"},
        {name: "Cay tươi", value: 70, color: "#9ACD32"},
        {name: "Gỗ", value: 60, color: "#8B4513"},
        {name: "Oải hương", value: 55, color: "#9370DB"}
      ]
    }
  },
  {
    id: "9pm",
    data: {
      subName: "EDP",
      perfumer: "Afnan",
      year: 2020,
      gender: "nam",
      longevity: 8,
      sillage: 8,
      seasons: { spring: 30, summer: 10, fall: 70, winter: 80 },
      dayNight: { day: 30, night: 70 },
      seoTitle: "Afnan 9PM EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Afnan 9PM Eau de Parfum chính hãng: Bản dupe hoàn hảo của Ultra Male, siêu bám tỏa, giá rẻ, tư vấn mua uy tín tại Maison De Son.",
      score: { scent: 8.8, uniqueness: 6, compliments: 8.5, value: 10, total: 8.5 },
      topNotes: [{name: "Táo (Apple)"}, {name: "Quế (Cinnamon)"}],
      middleNotes: [{name: "Ngọt ngào (Sweet Notes)"}, {name: "Oải hương (Lavender)"}],
      baseNotes: [{name: "Vanilla"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Hổ phách (Amber)"}],
      accords: [
        {name: "Vanilla", value: 100, color: "#ffffcc"},
        {name: "Hổ phách", value: 70, color: "#ff8c00"},
        {name: "Cay ấm", value: 60, color: "#cc4400"},
        {name: "Trái cây", value: 50, color: "#ff4500"},
        {name: "Ngọt ngào", value: 45, color: "#ff3333"}
      ]
    }
  },
  {
    id: "interlude-man",
    data: {
      subName: "EDP",
      perfumer: "Pierre Negrin",
      year: 2012,
      gender: "nam",
      longevity: 9,
      sillage: 10,
      seasons: { spring: 20, summer: 5, fall: 85, winter: 90 },
      dayNight: { day: 35, night: 65 },
      seoTitle: "Amouage Interlude Man chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá nước hoa Amouage Interlude Man EDP chính hãng: 'Quái thú' bám tỏa với hương khói trầm hương vương giả, tư vấn mua uy tín tại Maison De Son.",
      score: { scent: 8.2, uniqueness: 6.5, compliments: 9.5, value: 6.2, total: 8.0 },
      topNotes: [{name: "Oregano"}, {name: "Tiêu (Pepper)"}],
      middleNotes: [{name: "Nhang trầm (Incense)"}, {name: "Opoponax"}, {name: "Hổ phách (Amber)"}],
      baseNotes: [{name: "Da thuộc (Leather)"}, {name: "Trầm hương (Agarwood/Oud)"}],
      accords: [
        {name: "Hổ phách", value: 100, color: "#b84d00"},
        {name: "Nhựa thơm", value: 70, color: "#a67c52"},
        {name: "Cay tươi", value: 65, color: "#7cb342"},
        {name: "Khói", value: 60, color: "#746b7d"},
        {name: "Cay ấm", value: 55, color: "#cc3300"}
      ]
    }
  },
  {
    id: "reflection-45-man",
    data: {
      subName: "Extrait",
      perfumer: "Lucas Sieuzac",
      year: 2021,
      gender: "nam",
      longevity: 8,
      sillage: 8,
      seasons: { spring: 80, summer: 40, fall: 75, winter: 60 },
      dayNight: { day: 50, night: 50 },
      seoTitle: "Amouage Reflection 45 Man Extrait chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Amouage Reflection 45 Man Extrait chính hãng: Phiên bản hoàn hảo và đậm đặc hơn của huyền thoại hoa trắng nam giới tại Maison De Son.",
      score: { scent: 8.8, uniqueness: 7.5, compliments: 8.5, value: 6.8, total: 8.2 },
      topNotes: [{name: "Bagas de Zimbro"}, {name: "Oải hương (Lavender)"}],
      middleNotes: [{name: "Diên vĩ (Iris)"}, {name: "Neroli"}, {name: "Trắng hoa (Jasmine)"}],
      baseNotes: [{name: "Nhũ hương (Olibanum/Frankincense)"}, {name: "Gỗ (Woody Notes)"}],
      accords: [
        {name: "Thảo mộc", value: 100, color: "#2E8B57"},
        {name: "Gỗ", value: 90, color: "#8B4513"},
        {name: "Hổ phách", value: 85, color: "#d2691e"},
        {name: "Cay ấm", value: 75, color: "#cd3300"},
        {name: "Phấn", value: 60, color: "#f5deb3"}
      ]
    }
  },
  {
    id: "reflection-man",
    data: {
      subName: "EDP",
      perfumer: "Lucas Sieuzac",
      year: 2007,
      gender: "nam",
      longevity: 7,
      sillage: 8,
      seasons: { spring: 85, summer: 50, fall: 70, winter: 40 },
      dayNight: { day: 60, night: 40 },
      seoTitle: "Amouage Reflection Man EDP chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Amouage Reflection Man chính hãng: Hương gỗ hoa trắng sang trọng bậc nhất cho nam khoa trương nhưng tinh tế. Đặt mua tại Maison De Son.",
      score: { scent: 8.8, uniqueness: 6.5, compliments: 8.5, value: 6.8, total: 8.1 },
      topNotes: [{name: "Hương thảo (Rosemary)"}, {name: "Tiêu hồng (Pink Pepper)"}],
      middleNotes: [{name: "Hoa nhài (Jasmine)"}, {name: "Neroli"}, {name: "Rễ diên vĩ (Orris Root)"}],
      baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
      accords: [
        {name: "Gỗ", value: 100, color: "#6b4226"},
        {name: "Hoa trắng", value: 85, color: "#f0f8ff"},
        {name: "Thảo mộc", value: 75, color: "#2e8b57"},
        {name: "Phấn", value: 65, color: "#e6ccb2"},
        {name: "Cay tươi", value: 60, color: "#7cb342"}
      ]
    }
  },
  {
    id: "odyssey-limoni",
    data: {
      subName: "EDP",
      perfumer: "Armaf",
      year: 2024,
      gender: "unisex",
      longevity: 5,
      sillage: 6,
      seasons: { spring: 80, summer: 90, fall: 20, winter: 10 },
      dayNight: { day: 85, night: 15 },
      seoTitle: "Armaf Odyssey Limoni Fresh Edition chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Armaf Odyssey Limoni Fresh Edition chính hãng: Hương cam chanh tưới mát hoàn hảo cho mùa Hè, giá rẻ độ bám tốt tại Maison De Son.",
      score: { scent: 8.6, uniqueness: 8, compliments: 7, value: 10, total: 8.3 },
      topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Cam (Orange)"}],
      middleNotes: [{name: "Trà xanh (Tea)"}, {name: "Hoa cam (Orange Blossom)"}],
      baseNotes: [{name: "Cam Mandarin (Mandarin Orange)"}, {name: "Cam Bergamot"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff33"},
        {name: "Cay tươi", value: 70, color: "#7cb342"},
        {name: "Thảo mộc", value: 65, color: "#2e8b57"},
        {name: "Tươi mát", value: 60, color: "#80deea"},
        {name: "Xanh lá", value: 55, color: "#228b22"}
      ]
    }
  },
  {
    id: "odyssey-mandarin-sky",
    data: {
      subName: "EDP",
      perfumer: "Armaf",
      year: 2023,
      gender: "nam",
      longevity: 7,
      sillage: 8,
      seasons: { spring: 70, summer: 60, fall: 60, winter: 40 },
      dayNight: { day: 60, night: 40 },
      seoTitle: "Armaf Odyssey Mandarin Sky chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Armaf Odyssey Mandarin Sky EDP chính hãng: Bản dupe xuất sắc của Scandal Pour Homme, hương caramel cam quýt ngọt ngào quyến rũ.",
      score: { scent: 8.6, uniqueness: 7, compliments: 8.5, value: 10, total: 8.5 },
      topNotes: [{name: "Cam Mandarin"}, {name: "Cam (Orange)"}],
      middleNotes: [{name: "Caramel"}, {name: "Đậu Tonka (Tonka Bean)"}],
      baseNotes: [{name: "Ambroxan"}, {name: "Gỗ tuyết tùng (Cedar)"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#ffff33"},
        {name: "Caramel", value: 85, color: "#cf9a5b"},
        {name: "Ngọt ngào", value: 80, color: "#e34234"},
        {name: "Hổ phách", value: 70, color: "#b84d00"},
        {name: "Thảo mộc", value: 65, color: "#368b6b"}
      ]
    }
  },
  {
    id: "club-de-nuit-intense-man",
    data: {
      subName: "Parfum",
      perfumer: "Armaf",
      year: 2019,
      gender: "nam",
      longevity: 8,
      sillage: 8,
      seasons: { spring: 80, summer: 85, fall: 60, winter: 40 },
      dayNight: { day: 70, night: 30 },
      seoTitle: "Armaf Club de Nuit Intense Man Parfum chính hãng mua ở đâu?",
      metaDescription: "Đánh giá Armaf Club de Nuit Intense Man Parfum (Bản Parfum) chính hãng: Dupe Aventus cực mượt, bám tỏa mạnh mẽ, mượt mà hơn bản EDT.",
      score: { scent: 8.6, uniqueness: 7, compliments: 8.5, value: 10, total: 8.5 },
      topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Dứa (Pineapple)"}, {name: "Bergamot"}],
      middleNotes: [{name: "Gỗ bạch dương (Birch)"}],
      baseNotes: [{name: "Long diên hương (Ambergris)"}, {name: "Xạ hương (Musk)"}],
      accords: [
        {name: "Cam chanh", value: 100, color: "#eaff2b"},
        {name: "Trái cây", value: 85, color: "#ff4d29"},
        {name: "Da thuộc", value: 70, color: "#6b4226"},
        {name: "Gỗ", value: 65, color: "#8b5a2b"},
        {name: "Khói", value: 60, color: "#7a6a7c"}
      ]
    }
  },
  {
    id: "armaf-effects-of-uniq",
    data: {
      subName: "EDP",
      perfumer: "Armaf",
      year: 2024,
      gender: "unisex",
      longevity: 7,
      sillage: 8,
      seasons: { spring: 30, summer: 10, fall: 85, winter: 90 },
      dayNight: { day: 35, night: 65 },
      seoTitle: "Armaf Effects Of Uniq chính hãng mua ở đâu? Review 2026",
      metaDescription: "Đánh giá Armaf Effects Of Uniq chính hãng bản limited edition: Cuộc dạo chơi mượt mà của Vanilla, Cà phê và Caramel ngọt ngào nịnh mũi.",
      score: { scent: 8.8, uniqueness: 9, compliments: 8.5, value: 10, total: 8.9 },
      topNotes: [{name: "Lê (Pear)"}, {name: "Hoa cam (Orange Blossom)"}],
      middleNotes: [{name: "Cà phê (Coffee)"}, {name: "Caramel"}],
      baseNotes: [{name: "Vanilla"}, {name: "Tuyết tùng (Cedar)"}],
      accords: [
        {name: "Vanilla", value: 100, color: "#ffffcc"},
        {name: "Ngọt ngào", value: 95, color: "#e33434"},
        {name: "Gỗ", value: 85, color: "#6b4226"},
        {name: "Cà phê", value: 80, color: "#493829"},
        {name: "Caramel", value: 75, color: "#cf9a5b"}
      ]
    }
  }
];

function updateObject(contentStr, id, dataObj) {
  const idStr = `id: "${id}",`;
  let idx = contentStr.indexOf(idStr);
  if (idx === -1) return contentStr;
  
  // Find start bracket
  let objStart = contentStr.lastIndexOf('{', idx);
  // Find end bracket by balancing
  let objEnd = -1;
  let depth = 0;
  for (let i = objStart; i < contentStr.length; i++) {
    if (contentStr[i] === '{') depth++;
    if (contentStr[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i + 1;
        break;
      }
    }
  }
  
  if (objEnd !== -1) {
    let objStr = contentStr.substring(objStart, objEnd);
    
    // Inject or replace keys inside objStr
    for (const [key, value] of Object.entries(dataObj)) {
      const valStr = JSON.stringify(value);
      const keyRegex = new RegExp(`\\b${key}\\s*:\\s*[\\s\\S]*?(?=,\\n|\\n\\s*\\})`, 'g');
      
      if (objStr.match(keyRegex)) {
        objStr = objStr.replace(keyRegex, `${key}: ${valStr}`);
      } else {
        // Find a safe spot to inject (after name)
        objStr = objStr.replace(/(name:\s*".*?",)/, `$1\n    ${key}: ${valStr},`);
      }
    }
    
    return contentStr.substring(0, objStart) + objStr + contentStr.substring(objEnd);
  }
  return contentStr;
}

for (let upd of updates) {
  content = updateObject(content, upd.id, upd.data);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully injected safely using AST-like bracket balancing!");
