const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "vetiver": {
    subName: "EDT", perfumer: "Jean-Paul Guerlain", year: 1959, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 40, fall: 15, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Guerlain Vetiver EDT chính hãng giá tốt",
    metaDescription: "Đánh giá Guerlain Vetiver EDT: Tượng đài Cỏ hương bài phong trần, nam tính với rễ đất ẩm, hòa quyện khói Thuốc lá và Cam chanh thanh lịch cổ điển.",
    description: "Nhắc đến Cỏ hương bài (Vetiver), thế giới phải gọi tên Guerlain Vetiver (1959) như một định chuẩn. Khởi đầu với sự bùng nổ của Cam Bergamot và Chanh tươi rói, nó nhanh chóng khô lại và phủ lên rễ Vetiver một lớp khói Thuốc lá (Tobacco) và Tiêu đen cực kì lôi cuốn. Không phải thứ cỏ xanh rờn ướt át, mà là thứ cỏ phơi sương sớm, vương khói, cổ điển, đáng tin cậy. Dành cho những người đàn ông mặc sơ mi trắng và quần âu xếp ly phẳng phiu.",
    vibes: [{label: "Trưởng thành", icon: "🗞️"}, {label: "Cổ điển", icon: "🎩"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.0, value: 9.0, total: 8.6 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Quả Chanh (Lemon)"}],
    middleNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Gia vị (Nutmeg, Pepper)"}],
    baseNotes: [{name: "Thuốc lá (Tobacco)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#2e8b57"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Đất", value: 65, color: "#556b2f"},
      {name: "Cay tươi", value: 60, color: "#9acd32"}
    ]
  },
  "drakkar-noir": {
    subName: "EDT", perfumer: "Pierre Wargnye", year: 1982, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 35, winter: 35 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa nam Guy Laroche Drakkar Noir EDT giá siêu tốt",
    metaDescription: "Đánh giá Drakkar Noir: Huyền thoại thập niên 80 với hương Oải hương mát rượi, Rêu sồi phong trần và Da thuộc rắn rỏi, bùng nổ sự nam tính.",
    description: "Drakkar Noir là định nghĩa của cụm từ 'Powerhouse 80s' (sức mạnh thập niên 80). Nó mở ra với tiếng gầm của Oải hương (Lavender) cùng Rêu sồi (Oakmoss) dầy đặc và râm ran những nhánh thông xanh gai góc. Về cuối, lớp Da thuộc (Leather) mạnh mẽ lộ ra, bao phủ người đàn ông bằng khí chất ngang tàng. Dù qua hàng chục năm, nó vẫn sát gái và nam tính một cách cục cằn đáng ngưỡng mộ.",
    vibes: [{label: "Ngang tàng", icon: "🎸"}, {label: "Phong trần", icon: "😎"}],
    score: { scent: 8.0, uniqueness: 8.0, compliments: 8.5, value: 9.0, total: 8.3 },
    topNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Quả Chanh (Lemon)"}],
    middleNotes: [{name: "Cây thông (Pine Tree)"}, {name: "Cây Bách (Fir)"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Da thuộc (Leather)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#3cb371"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Oải hương", value: 60, color: "#9370db"}
    ]
  },
  "24-faubourg": {
    subName: "EDP", perfumer: "Maurice Roucel", year: 1995, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 25, summer: 5, fall: 35, winter: 35 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Hermès 24 Faubourg EDP rực rỡ hoàng gia",
    metaDescription: "Review Hermès 24 Faubourg EDP: Nhành Tóc tiên rực rỡ, Hoa Cam chói lòa tẩm Hổ phách ấm áp. Tuyệt đỉnh thanh lịch, xa hoa nhà Hermes.",
    description: "Lấy cảm hứng từ địa chỉ cửa hàng flagship của Hermès tại 24 Rue du Faubourg Saint-Honoré, chai nước hoa này là một sự lộng lẫy tột cùng. Hương Tóc tiên (Hyacinth) và Hoa Nhài dâng trào mạnh mẽ rực rỡ dưới lớp bọc vàng óng của Hổ phách (Amber) và Hoa Cam (Orange Blossom). Mùi hương rạng ngời, sang trọng vô cực, làm sáng bừng nét trang nhã quý phái của giai cấp thượng lưu đầu những năm 90.",
    vibes: [{label: "Xa xỉ", icon: "👑"}, {label: "Rực rỡ", icon: "✨"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 8.0, value: 8.5, total: 8.5 },
    topNotes: [{name: "Hoa Tóc tiên (Hyacinth)"}, {name: "Quả Cam (Orange)"}],
    middleNotes: [{name: "Hoa Cam (Orange Blossom)"}, {name: "Hoa Sơn chi (Gardenia)"}, {name: "Hoa Nhài (Jasmine)"}],
    baseNotes: [{name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f8f8ff"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Ngọt ngào", value: 60, color: "#ff4500"}
    ]
  },
  "hermes-bleue": {
    subName: "EDT", perfumer: "Christine Nagel", year: 2016, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 30, summer: 60, fall: 5, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa nữ Hermes Eau des Merveilles Bleue chính hãng",
    metaDescription: "Đánh giá Eau des Merveilles Bleue: Làn nước biển mằn mặn vỗ về gốc cây khô trên cát cát. Mùi hương aquatic thanh tao, ngậm khoáng dành cho mùa hè.",
    description: "Một ngôi sao biển nằm chờ sóng trên tấm phản gỗ mộc mạc – Merveilles Bleue không phải kiểu hương biển rong rêu tanh nồng. Đây là nước biển (Sea Water) ngậm khoáng chất trong trẻo, mằn mặn sảng khoái kết hợp với Gỗ trôi dạt (Woody Notes) cứng cỏi vương Hoắc hương xám lạnh. Hương thơm tản ra sự tinh tươm, tự do phóng khoáng như cảm giác đưa tay chạm vào bọt biển. Vô cùng xuất sắc cho mùa hè dạo biển.",
    vibes: [{label: "Nước biển", icon: "🌊"}, {label: "Phóng khoáng", icon: "🐬"}],
    score: { scent: 8.2, uniqueness: 8.8, compliments: 8.0, value: 8.0, total: 8.2 },
    topNotes: [{name: "Nước biển (Sea Water)"}],
    middleNotes: [{name: "Hương gỗ (Woody Notes)"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Hương biển", value: 100, color: "#4682b4"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Thảo mộc", value: 75, color: "#3cb371"},
      {name: "Mặn", value: 65, color: "#e0ffff"},
      {name: "Nước", value: 60, color: "#00bfff"}
    ]
  },
  "elixir-des-merveilles": {
    subName: "EDP", perfumer: "Jean-Claude Ellena", year: 2006, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Hermes Elixir des Merveilles EDP chính hãng",
    metaDescription: "Đánh giá Hermès Elixir des Merveilles EDP: Tuyệt chiêu Cam sấy nhúng Nhựa cây (Resins) và Caramel. Ấm áp, nồng nàn lạ kì trong tiết trời Thu Đông.",
    description: "Sáng tạo tuyệt diệu của trưởng nhánh Jean-Claude Ellena! Elixir là viên kẹo ho cam sấy khô lóng lánh (Orange) nhúng đẫm trong một dòng Nhựa cây (Resins). Nó quyện đắng chát xù xì của nhựa, nhưng được cân bằng bởi Caramel cháy và Gỗ tuyết tùng (Cedar) trầm tịnh. Không hề lố lăng hay ngọt gắt, chai Elixir này tỏa sáng như thứ nước thần sưởi ấm người mặc vào những ngày cuối đông lạnh buốt.",
    vibes: [{label: "Ma thuật", icon: "🧙"}, {label: "Ngọt đắng", icon: "🍯"}],
    score: { scent: 8.8, uniqueness: 9.0, compliments: 8.2, value: 8.5, total: 8.6 },
    topNotes: [{name: "Quả Cam (Orange)"}],
    middleNotes: [{name: "Nhựa cây (Resins)"}, {name: "Kẹo Caramel"}],
    baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Nhựa thơm Peru (Peru Balsam)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#d2691e"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Nhựa balsamic", value: 75, color: "#a0522d"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Ngọt ngào", value: 60, color: "#ff4500"}
    ]
  },
  "terre-dhermes-eau-de-toilette": {
    subName: "EDT", perfumer: "Jean-Claude Ellena", year: 2006, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 20, fall: 40, winter: 5 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Terre d'Hermès EDT chính hãng cho nam",
    metaDescription: "Review Terre d'Hermès EDT: Tượng đài Đất nung rễ Vetiver hòa lẫn Cam bưởi đắng, tiêu sọ. Chuẩn mực của đàn ông tĩnh lặng, giàu sang, đáng tin cậy.",
    description: "'Đất của nhà Hermes' - kiệt tác vĩ đại nhất của thương hiệu dành cho nam! Khởi đầu gai góc bởi vỏ Bưởi (Grapefruit) ngăm đắng và rễ Cỏ hương bài (Vetiver). Về nền, tiêu sọ đập dập kết hợp khéo léo với Hoắc hương tạo nên một mùi Đất rễ cây ẩm sau mưa mùa thu. Xù xì, gân guốc sỏi đá nhưng vô cùng vững vàng! Mùi hương của chủ tịch, trầm tính, mặc mộc mạc đi siêu xe - người nói ít làm nhiều.",
    vibes: [{label: "Trầm ổn", icon: "⛰️"}, {label: "Quyền lực", icon: "💼"}],
    score: { scent: 9.5, uniqueness: 9.5, compliments: 8.5, value: 9.0, total: 9.1 },
    topNotes: [{name: "Quả Cam (Orange)"}, {name: "Quả Bưởi (Grapefruit)"}],
    middleNotes: [{name: "Tiêu (Pepper)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Đất", value: 60, color: "#556b2f"}
    ]
  },
  "terre-dhermes-eau-givree": {
    subName: "Eau Givrée", perfumer: "Christine Nagel", year: 2022, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 30, summer: 60, fall: 10, winter: 0 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Hermès Terre d'Hermès Eau Givrée mùa hè rực rỡ",
    metaDescription: "Review Terre d'Hermès Eau Givrée: Đá bào thanh yên (Citron) rải trên sỏi khoáng Bách Xù. Phá bỏ lớp Đất để chạm mặt Băng the mát mẻ.",
    description: "Một định nghĩa mùa hè siêu việt! Eau Givrée (Nước đá bào) giữ lại DNA 'đất đá' của dòng Terre nhưng thổi bay sự ngột ngạt bằng Cây Thanh yên (Citron) the mát và Quả Bách xù hăng lạnh. Sự va đập của Hương khoáng chất (Mineral) vào Gỗ rễ vương vấn một chút Tiêu Timur đẩy độ sang trọng lên kịch trần. Ngửi lạnh toát, cứng cỏi mướt mồ hôi. Sát thủ mùa hè cho dân văn phòng lịch lãm.",
    vibes: [{label: "Băng giá", icon: "🧊"}, {label: "Sắc sảo", icon: "👔"}],
    score: { scent: 9.0, uniqueness: 8.8, compliments: 9.0, value: 8.5, total: 8.8 },
    topNotes: [{name: "Thanh Yên (Citron)"}],
    middleNotes: [{name: "Quả Bách xù (Juniper Berries)"}, {name: "Tiêu Timur"}],
    baseNotes: [{name: "Khoáng chất (Mineral Notes)"}, {name: "Hương gỗ (Woody Notes)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Thảo mộc", value: 65, color: "#2e8b57"},
      {name: "Khoáng chất", value: 60, color: "#5f9ea0"}
    ]
  },
  "terre-dhermes-parfum": {
    subName: "Parfum", perfumer: "Jean-Claude Ellena", year: 2009, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 10, fall: 40, winter: 20 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Nước hoa Terre d'Hermès Parfum chính hãng đậm đặc",
    metaDescription: "Review Terre d'Hermès Parfum: Dày dặn, ít chua rêu phong hơn bản EDT. Bản Parfum đặc quánh Cam cháy và Đá mài (Flint), sang trọng hơn cả.",
    description: "Sánh ngang với bản gốc, bản Parfum của mảng 'đất' nhà Hermès là khi sự xù xì được vo tròn lại thành viên bi đất bóng loáng. Sự the chát của vỏ cam nhường chỗ cho Cam mọng nước chín nục điểm xuyết rêu phong (Oakmoss). Lớp nền dầy bịch gỗ (Woody Notes) dầy vân cứng đanh vấp một chút sự rít rắm của Đá Cầm thạch (Flint) đập vỡ. Khí phách, vững chãi, ít tỏa rát mũi nhưng bám dai mượt mà, sâu thẳm cực độ.",
    vibes: [{label: "Sâu thẳm", icon: "🪵"}, {label: "Đẳng cấp", icon: "🥃"}],
    score: { scent: 9.2, uniqueness: 9.0, compliments: 8.5, value: 8.5, total: 8.8 },
    topNotes: [{name: "Quả Cam (Orange)"}, {name: "Quả Bưởi (Grapefruit)"}],
    middleNotes: [{name: "Đá Lửa (Flint)"}],
    baseNotes: [{name: "Hương gỗ (Woody Notes)"}, {name: "Rêu sồi (Oakmoss)"}, {name: "Benzoin"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Rêu", value: 75, color: "#556b2f"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Đất", value: 60, color: "#556b2f"}
    ]
  },
  "hermes-twilly-eau-poivree": {
    subName: "Eau Poivrée EDP", perfumer: "Christine Nagel", year: 2019, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 5, fall: 40, winter: 30 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Hermès Twilly d'Hermès Eau Poivrée tiêu hồng",
    metaDescription: "Đánh giá Twilly d'Hermès Eau Poivrée: Cú hích mạnh bạo của Tiêu Hồng vào Hoa Hồng đầy son phấn, khép lại bằng Hoắc hương chững chạc nữ tính.",
    description: "Những cô gái quàng khăn lụa Twilly không còn ngoan hiền. Bản Eau Poivrée thắt chặt sự ngây thơ bằng một cú vả cay the của Tiêu Hồng (Pink Pepper) râm ran ở sống mũi. Trái tim dâng lên Hoa Hồng (Rose) lả lướt kiêu sa, bám lớp phấn cực mịn. Dấu chấm kết trần trụi của Hoắc hương (Patchouli) tạo ra một cô nàng kiêu kỳ, hiện đại và không dễ bị đoán bắt tâm tư. Rất hợp thời tiết se lạnh đầu thu.",
    vibes: [{label: "Kiêu kỳ", icon: "🎀"}, {label: "Hiện đại", icon: "🌶️"}],
    score: { scent: 8.0, uniqueness: 8.5, compliments: 8.2, value: 8.0, total: 8.2 },
    topNotes: [{name: "Tiêu hồng (Pink Pepper)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Cay nhẹ", value: 85, color: "#e9967a"},
      {name: "Hoắc hương", value: 75, color: "#556b2f"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Xạ hương", value: 60, color: "#d8bfd8"}
    ]
  },
  "un-jardin-sur-le-nil": {
    subName: "EDT", perfumer: "Jean-Claude Ellena", year: 2005, gender: "unisex", longevity: 6, sillage: 6,
    seasons: { spring: 30, summer: 60, fall: 10, winter: 0 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Unisex Hermès Un Jardin sur le Nil trên sông sừng sững",
    metaDescription: "Review Un Jardin sur le Nil Hermès: Khu vườn bên dòng sông Nile tuyệt đẹp. Hương xanh non nớt của ngó Sen, Xoài xanh và Cà chua tươi roi rói.",
    description: "Một trong bộ sưu tập 'Jardin' kinh điển nhất mọi thời đại. Jean-Claude Ellena đã tạo ra ảo ảnh về một ốc đảo ven sông Nile vĩ đại. Quả Xoài lục non mọng (Mango) gặp Gốc Bưởi (Grapefruit) hơi the. Nét đột phá nằm ở nhánh Cà chua non (Tomato) và Hoa Sen (Lotus) xoa dịu cái nắng Ai Cập rực lửa. Mùi hương ngập mọng nước, êm ru, vô hình vô thức kéo con người vào tự nhiên thảnh thơi nhàn nhã trưa hè.",
    vibes: [{label: "Thiền định", icon: "🪷"}, {label: "Thanh mát", icon: "🥭"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.0, value: 8.5, total: 8.8 },
    topNotes: [{name: "Quả Bưởi (Grapefruit)"}, {name: "Xoài xanh (Mango)"}, {name: "Cà chua (Tomato)"}, {name: "Cà rốt"}],
    middleNotes: [{name: "Hoa Sen (Lotus)"}, {name: "Cây Bồ hoàng (Bulrush)"}],
    baseNotes: [{name: "Nhang hương"}, {name: "Chi Tiên khách lai"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Cay tươi", value: 65, color: "#9acd32"},
      {name: "Xanh non", value: 60, color: "#008000"}
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
console.log('==> BATCH 14 HOAN TAT.');
