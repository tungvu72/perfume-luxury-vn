const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "musc-ravageur": {
    subName: "EDP", perfumer: "Maurice Roucel", year: 2000, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 10, fall: 35, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Frederic Malle Musc Ravageur chính hãng mua ở đâu? Review mãnh thú",
    metaDescription: "Đánh giá Frederic Malle Musc Ravageur chính hãng: Kẻ hủy diệt xạ hương đầy nhục dục với vị cay nồng ấm áp của Quế và Vani quyến rũ.",
    description: "Ra mắt từ năm 2000, Musc Ravageur ('Kẻ hủy diệt xạ hương') được coi là chuẩn mực của sự khiêu khích vô hình. Nó không dùng floral (hoa) mà tấn công khứu giác bằng xạ hương trần trụi, quyện cùng Vani béo ngậy, Đinh hương và Quế cay nồng. Một mùi hương ôm ấp, xác thịt, nhưng mang đẳng cấp vương giả đầy quyến rũ cho những đêm hẹn hò cháy bỏng.",
    vibes: [{label: "Xác thịt", icon: "💋"}, {label: "Vương giả", icon: "👑"}],
    score: { scent: 8.4, uniqueness: 8.5, compliments: 8.0, value: 8.4, total: 8.4 },
    topNotes: [{name: "Quế (Cinnamon)"}, {name: "Đinh hương (Cloves)"}],
    middleNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ tuyết tùng"}],
    baseNotes: [{name: "Xạ hương (Musk)"}, {name: "Hổ phách (Amber)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Vani", value: 85, color: "#f5deb3"},
      {name: "Phấn", value: 75, color: "#dda0dd"},
      {name: "Xạ hương", value: 70, color: "#d8bfd8"},
      {name: "Gỗ", value: 65, color: "#8b4513"}
    ]
  },
  "portrait-of-a-lady": {
    subName: "EDP", perfumer: "Dominique Ropion", year: 2010, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Frederic Malle Portrait of a Lady chính hãng: Kiệt tác Hoa hồng",
    metaDescription: "Đánh giá Portrait of a Lady chính hãng: Bức chân dung của Quý bà quyền lực với hàng ngàn cánh hoa hồng Thổ Nhĩ Kỳ và Hoắc hương u tối.",
    description: "Một tuyệt tác vĩ đại (Masterpiece) của giới hương thơm Niche. Dominique Ropion đã nhồi đến 400 đóa hồng Thổ Nhĩ Kỳ vào mỗi chai 100ml. Hương Hoa hồng rực rỡ, ma mị bị sắc tối của Hoắc hương (Patchouli) và Nhang trầm (Incense) kéo xuống dải ngân hà huyền bí. Mùi hương của quyền lực, của sự kiêu hãnh cưa đổ mọi rào cản, bám tỏa cực kỳ khủng khiếp.",
    vibes: [{label: "Kiêu hãnh", icon: "💃"}, {label: "Quyền lực", icon: "🍷"}],
    score: { scent: 8.2, uniqueness: 9.0, compliments: 8.0, value: 8.2, total: 8.2 },
    topNotes: [{name: "Hoa hồng (Rose)"}, {name: "Quả mâm xôi (Raspberry)"}, {name: "Đinh hương (Cloves)"}],
    middleNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Nhang trầm (Incense)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Hổ phách", value: 85, color: "#ff8c00"},
      {name: "Hoa hồng", value: 75, color: "#ff1493"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hoắc hương", value: 60, color: "#556b2f"}
    ]
  },
  "bianco-latte": {
    subName: "EDP", perfumer: "Silvia Martinelli", year: 2021, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Giardini Di Toscana Bianco Latte chính hãng: Bánh ngọt Gourmand",
    metaDescription: "Đánh giá Bianco Latte EDP chính hãng: Siêu phẩm Gourmand ngọt ngào với hương Sữa, Vani, Mật ong và Caramel béo ngậy nịnh mũi.",
    description: "Bianco Latte (Sữa Trắng) là phép thuật dỗ dành khứu giác đỉnh cao của dòng hương Gourmand. Ngay khi chạm da, nó bung tỏa một lớp bọt sữa tắm Caramel ấm áp, điểm xuyết Mật ong sóng sánh và Vani siêu cấp béo ngậy. Một mùi hương 'ăn được', ngon lành chảy nước miếng, khiến bất cứ ai ngửi thấy đều muốn sáp lại gần và cắn một miếng sảng khoái.",
    vibes: [{label: "Ngon ngọt", icon: "🧁"}, {label: "Gây nghiện", icon: "🤤"}],
    score: { scent: 8.2, uniqueness: 7.5, compliments: 9.5, value: 8.2, total: 8.5 },
    topNotes: [{name: "Caramel"}],
    middleNotes: [{name: "Mật ong (Honey)"}, {name: "Coumarin"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Vani", value: 100, color: "#ffff66"},
      {name: "Ngọt ngào", value: 85, color: "#dc143c"},
      {name: "Caramel", value: 75, color: "#cd853f"},
      {name: "Mật ong", value: 65, color: "#daa520"},
      {name: "Nhựa thơm", value: 60, color: "#b8860b"}
    ]
  },
  "acqua-di-gio": {
    subName: "EDT", perfumer: "Alberto Morillas", year: 1996, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 25, summer: 60, fall: 10, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Giò Trắng - Acqua Di Giò EDT chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Acqua Di Giò EDT chính hãng (Giò Trắng): Huyền thoại mùa hè với chanh xanh, cam bergamot và vị mặn mòi gió biển bất tử.",
    description: "Tượng đài bất hủ của thế giới nước hoa nam - 'Giò Trắng'. Acqua Di Giò EDT vẽ lên bức tranh của nắng và gió biển Địa Trung Hải. Vị mặn của nước biển hài hòa tuyệt đẹp cùng quả Chanh xanh (Lime) nguyên bản và Cam Bergamot mọng nước. Hơn 2 thập kỷ trôi qua, mùi hương này vẫn là tấm vé thông hành an toàn nhất cho mọi chàng trai trong thời tiết oi ả.",
    vibes: [{label: "Kinh điển", icon: "🏛️"}, {label: "Biển cả", icon: "🌊"}],
    score: { scent: 8.2, uniqueness: 6.0, compliments: 8.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Chanh xanh (Lime)"}, {name: "Chanh vàng (Lemon)"}, {name: "Cam Bergamot"}, {name: "Cam (Orange)"}],
    middleNotes: [{name: "Hương nước biển (Sea Water)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hương thảo"}],
    baseNotes: [{name: "Gỗ tuyết tùng"}, {name: "Rêu sồi"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Biển", value: 75, color: "#0000cd"},
      {name: "Cay tươi", value: 65, color: "#9acd32"},
      {name: "Hoa cỏ", value: 60, color: "#ff69b4"}
    ]
  },
  "acqua-di-gio-parfum": {
    subName: "Parfum", perfumer: "Alberto Morillas", year: 2023, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 50, fall: 20, winter: 5 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Acqua Di Giò Parfum chính hãng mua ở đâu? Bản nâng cấp của Profumo",
    metaDescription: "Đánh giá Acqua Di Giò Parfum chính hãng: Người kế nhiệm Profumo (Giò Đen) với trầm hương, hoắc hương và hơi thở mặn mòi từ biển sâu.",
    description: "Chai Parfum 2023 mang trên vai trọng trách kế thừa huyền thoại Profumo (Giò Đen) đã ngưng sản xuất. Vẫn là DNA kinh điển của gió biển và Cam Bergamot, nhưng sự kết hợp giữa Hoắc hương (Patchouli) rễ sâu và Nhang trầm (Incense) Olibanum lại trầm mặc, sạch sẽ và mượt mà hơn hạt tiêu xù xì của bản cũ. Rắn rỏi, nam tính, mặc cực hợp với suit.",
    vibes: [{label: "Nam tính", icon: "👔"}, {label: "Rắn rỏi", icon: "⛰️"}],
    score: { scent: 8.8, uniqueness: 7.0, compliments: 8.5, value: 8.8, total: 8.4 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Hương nước biển (Sea Water)"}],
    middleNotes: [{name: "Hương thảo (Rosemary)"}, {name: "Cây xô thơm (Clary Sage)"}, {name: "Phong lữ"}],
    baseNotes: [{name: "Trầm hương trắng (Olibanum)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#2e8b57"},
      {name: "Cay tươi", value: 85, color: "#9acd32"},
      {name: "Biển", value: 75, color: "#104e8b"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Cam chanh", value: 60, color: "#ffff00"}
    ]
  },
  "acqua-di-gio-profondo": {
    subName: "EDP (2020)", perfumer: "Alberto Morillas", year: 2020, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 25, summer: 60, fall: 10, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Acqua di Giò Profondo EDP chính hãng độ lưu hương, tỏa hương?",
    metaDescription: "Đánh giá Acqua Di Giò Profondo EDP chính hãng: Bản Giò Xanh rợp đại dương mát rượi với Aquozone, Quýt xanh và Khoáng chất mặn mà.",
    description: "Profondo (Giò Xanh) tượng trưng cho cú nhảy ngoạn mục xuống vùng biển sâu thẳm. Hiệu ứng phân tử Aquozone bùng nổ sức mạnh khoáng chất mặn mòi, quyện với Quýt xanh mát lạnh tê người. So với tinh thần cổ điển của Giò Trắng, Profondo mang phong thái hiện đại, sảng khoái và vực dậy tinh thần mạnh mẽ hơn gấp bội trong những ngày hè 40 độ.",
    vibes: [{label: "Biển sâu thẳm", icon: "🌊"}, {label: "Phấn khích", icon: "⚡"}],
    score: { scent: 8.6, uniqueness: 7.0, compliments: 8.5, value: 8.6, total: 8.3 },
    topNotes: [{name: "Hương nước biển (Sea Water)"}, {name: "Aquozone"}, {name: "Cam Bergamot"}, {name: "Quýt Mandarin xanh"}],
    middleNotes: [{name: "Hương thảo (Rosemary)"}, {name: "Oải hương (Lavender)"}, {name: "Cây xô thơm (Cypress)"}],
    baseNotes: [{name: "Khoáng chất (Mineral Notes)"}, {name: "Xạ hương"}, {name: "Hổ phách"}],
    accords: [
      {name: "Biển", value: 100, color: "#00008b"},
      {name: "Thảo mộc", value: 85, color: "#3cb371"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Cay tươi", value: 70, color: "#9acd32"},
      {name: "Tươi mát", value: 60, color: "#87ceeb"}
    ]
  },
  "giorgio-armani-acqua-di-gio-profondo": {
    subName: "EDP (2024)", perfumer: "Alberto Morillas", year: 2024, gender: "nam", longevity: 6, sillage: 8,
    seasons: { spring: 25, summer: 60, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Acqua Di Giò Profondo EDP (2024) - Bản nâng cấp mùa hè",
    metaDescription: "Đánh giá Acqua Di Giò Profondo EDP 2024 chính hãng: Chanh quýt tươi rói quyện cùng hương thảo và Ambergris tái tạo đại dương nguyên bản.",
    description: "Phiên bản làm lại năm 2024 của Profondo mang vỏn vẹn tinh thần: mặn hơn, sáng hơn. Morillas đã tiết chế Aquozone bằng note Ambergris (Long diên hương) mang lại ánh nhũ khoáng sản chói lòa hơn. Sự góp mặt của Quýt Mandarin và Oải hương đem tới độ nịnh mũi đa dụng, sắc nét như ánh sáng xuyên thẳng góc qua mặt nước biển trưa hè.",
    vibes: [{label: "Sáng chói", icon: "☀"}, {label: "Thư thái", icon: "🏄"}],
    score: { scent: 8.5, uniqueness: 7.0, compliments: 8.5, value: 8.5, total: 8.2 },
    topNotes: [{name: "Hương nước biển (Sea Water)"}, {name: "Quýt Mandarin (Mandarin Orange)"}],
    middleNotes: [{name: "Khoáng chất (Mineral Notes)"}, {name: "Oải hương (Lavender)"}, {name: "Hương thảo (Rosemary)"}],
    baseNotes: [{name: "Long diên hương (Ambergris)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#3cb371"},
      {name: "Biển", value: 85, color: "#00008b"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Khoáng chất", value: 70, color: "#b0c4de"},
      {name: "Gỗ", value: 65, color: "#8b4513"}
    ]
  },
  "acqua-di-gio-profumo": {
    subName: "Parfum", perfumer: "Alberto Morillas", year: 2015, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 40, fall: 20, winter: 10 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Acqua Di Giò Profumo (Giò Đen) chính hãng giá tốt",
    metaDescription: "Đánh giá Acqua Di Giò Profumo (Giò Đen): Tượng đài đứt gãy giữa biển xanh và đá núi lửa đen ngòm. Sự chạm chán của trầm hương và mùi nước mặn.",
    description: "Dù đã Discontinued (ngưng sản xuất), Profumo - Giò Đen - vẫn thiết lập một ranh giới thần tượng mà đàn em khó qua mặt. Nửa xanh mướt của đại dương và nửa đen tuyền của đá núi lửa, nhang trầm ngun ngút cùng hương lá hoắc hương. Bí ẩn, lạnh lùng, phong trần sương gió nhưng vẫn là quý ông cực kỳ lịch lãm.",
    vibes: [{label: "Phong trần", icon: "🌪️"}, {label: "Lịch lãm", icon: "🤵"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 9.0, value: 8.8, total: 8.5 },
    topNotes: [{name: "Hương nước biển (Sea Water)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hương thảo (Rosemary)"}, {name: "Cây xô thơm (Sage)"}, {name: "Phong lữ"}],
    baseNotes: [{name: "Nhang trầm (Incense)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Thảo mộc", value: 100, color: "#2e8b57"},
      {name: "Biển", value: 80, color: "#0000cd"},
      {name: "Cay tươi", value: 75, color: "#9acd32"},
      {name: "Hổ phách", value: 70, color: "#d2691e"},
      {name: "Gỗ", value: 65, color: "#8b4513"}
    ]
  },
  "code-parfum": {
    subName: "Parfum", perfumer: "Antoine Maisondieu", year: 2022, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Armani Code Parfum chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Armani Code Parfum chính hãng: Diên vĩ đĩnh đạc và Đậu Tonka, cú twist hiện đại từ gã khổng lồ nước Ý mang đến vẻ chỉn chu, trầm ấm.",
    description: "Phiên bản mãnh liệt và thời thượng nhất của dòng Armani Code. Cú twist hiện đại nằm ở note Hoa diên vĩ (Iris) phấn phủ vừa vặn, kết hợp cùng Aldehydes sắc tựa xà phòng đắt tiền. Lót dưới cùng là phần lõi Đậu Tonka ngọt ấm và Gỗ tuyết tùng trầm tĩnh. Mùi hương sạch sẽ, đĩnh đạc và tinh tươm của doanh nhân thành đạt.",
    vibes: [{label: "Đĩnh đạc", icon: "💼"}, {label: "Tự tin", icon: "✨"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 8.5, value: 8.8, total: 8.6 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Lá cam Bergamot"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Củ diên vĩ (Orris)"}, {name: "Aldehydes"}, {name: "Cây xô thơm (Clary Sage)"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ tuyết tùng (Cedar)"}],
    accords: [
      {name: "Diên vĩ", value: 100, color: "#b19cd9"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Phấn", value: 80, color: "#ffdac1"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Cam chanh", value: 70, color: "#ffff00"}
    ]
  },
  "my-way-edp": {
    subName: "EDP", perfumer: "Carlos Benaim", year: 2020, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Giorgio Armani My Way EDP chính hãng mua ở đâu? Mùi thanh xuân",
    metaDescription: "Đánh giá Giorgio Armani My Way EDP chính hãng: Tuyên ngôn tuổi thanh xuân nữ tính với bó hoa huệ trắng muốt, hoa cam lấp lánh và vani ngọt ngào.",
    description: "My Way là đóa hoa huệ trắng tinh khiết đang e ấp làm duyên cùng nụ Hoa cam (Orange Blossom) Ai Cập dưới ánh mặt trời rực rỡ. Rất nịnh mũi, siêu cấp nữ tính và ngập tràn năng lượng tươi trẻ. Note chanh cam mở đầu lấp lánh, để lại hậu vị Vani Madagascar dịu dàng vô vàn, biến bạn thành nàng công chúa xúng xính trong vườn xuân.",
    vibes: [{label: "Nữ tính", icon: "🌸"}, {label: "Thanh xuân", icon: "🎀"}],
    score: { scent: 7.6, uniqueness: 6.0, compliments: 9.0, value: 7.6, total: 7.8 },
    topNotes: [{name: "Hoa cam (Orange Blossom)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa huệ trắng (Tuberose)"}, {name: "Hoa nhài Ấn Độ (Jasmine)"}],
    baseNotes: [{name: "Vani Madagascar (Vanilla)"}, {name: "Xạ hương trắng (White Musk)"}, {name: "Gỗ tuyết tùng"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#faf0e6"},
      {name: "Hoa huệ", value: 85, color: "#f0fff0"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Động vật", value: 65, color: "#8b4513"},
      {name: "Vani", value: 60, color: "#fffacd"}
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
console.log('==> BATCH 10 HOAN TAT.');
