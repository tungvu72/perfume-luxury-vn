const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  // 51
  "ventus-for-her": {
    subName: "EDP", perfumer: "Olivier Creed", year: 2016, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 35, summer: 35, fall: 20, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Creed Aventus For Her chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Creed Aventus For Her chính hãng: Phiên bản nữ quyền vương giả với quả táo xanh thanh giòn và hoắc hương uy quyền.",
    description: "Sau thành công vô tiền khoáng hậu của bản nam, phiên bản Aventus dành cho nữ mang đậm chất Niche quyền uy nhưng tươi sáng hơn. Sự căng mọng của táo xanh và đào hòa quyện sắc sảo cùng hoắc hương, mang lại thần thái vương giả, hoàn hảo cho một nữ doanh nhân thành đạt.",
    vibes: [{label: "Nữ quyền", icon: "👑"}, {label: "Vương giả", icon: "💎"}],
    score: { scent: 8.2, uniqueness: 7.0, compliments: 7.0, value: 7.2, total: 7.5 },
    topNotes: [{name: "Táo xanh"}, {name: "Cam Bergamot"}, {name: "Hoắc hương"}, {name: "Chanh vàng"}, {name: "Tiêu hồng"}, {name: "Hoa tím"}],
    middleNotes: [{name: "Xạ hương"}, {name: "Hoa hồng"}, {name: "Gỗ đàn hương"}, {name: "Styrax"}],
    baseNotes: [{name: "Lý chua đen"}, {name: "Quả đào"}, {name: "Hổ phách"}, {name: "Ngọc lan tây"}, {name: "Hoa tử đinh hương"}],
    accords: [
      {name: "Trái cây", value: 100, color: "#ffd700"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Chua thanh", value: 75, color: "#ffff00"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Hoa cỏ", value: 50, color: "#ffc0cb"}
    ]
  },
  // 52
  "creed-love-in-white": {
    subName: "EDP", perfumer: "Olivier Creed", year: 2005, gender: "nu", longevity: 7, sillage: 6,
    seasons: { spring: 60, summer: 20, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Creed Love in White EDP chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Creed Love in White chính hãng: Nàng thơ tinh khôi mặc váy trắng, hương hoa tự nhiên ngập tràn lãng mạn.",
    description: "Một bản tình ca hoa cỏ thuần khiết, gợi nhớ đến những ngày Xuân trong vắt. Hương mộc lan đan xen cùng diên vĩ trên nền gạo và vani mềm mượt, phác họa lên hình ảnh một cô gái mặc chiếc váy trắng bồng bềnh, dạo bước trên thảm cỏ xanh mướt.",
    vibes: [{label: "Tinh khôi", icon: "🕊️"}, {label: "Lãng mạn", icon: "🌸"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 7.2, total: 7.6 },
    topNotes: [{name: "Vỏ cam (Orange Peel)"}],
    middleNotes: [{name: "Hoa mộc lan (Magnolia)"}, {name: "Gạo (Rice)"}, {name: "Thủy tiên"}, {name: "Nhài Ý"}, {name: "Diên vĩ"}, {name: "Hồng Bulgarian"}],
    baseNotes: [{name: "Long diên hương"}, {name: "Gỗ đàn hương"}, {name: "Vani"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ffc0cb"},
      {name: "Phấn hoa", value: 85, color: "#dda0dd"},
      {name: "Thanh tao", value: 70, color: "#f0f8ff"},
      {name: "Cam chanh", value: 50, color: "#ffd700"}
    ]
  },
  // 53
  "creed-silver-moutain-water": {
    subName: "EDP", perfumer: "Olivier Creed", year: 1995, gender: "unisex", longevity: 7, sillage: 6,
    seasons: { spring: 35, summer: 45, fall: 15, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Creed Silver Mountain Water chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Creed Silver Mountain Water (SMW): Vibe núi tuyết hùng vĩ, trong veo mát lạnh với tinh chất trà xanh tuyết sơn.",
    description: "Được lấy cảm hứng từ những dãy núi tuyết Alps sừng sững, Silver Mountain Water mang lại sự sảng khoái và trong veo như dòng suối băng. Ghi chú trà xanh và lý chua đen pha quyện cùng xạ hương kim loại, tạo ra một mùi hương kích thích sự sảng khoái vào mùa Hè.",
    vibes: [{label: "Trong veo", icon: "🏔️"}, {label: "Mát lạnh", icon: "🧊"}],
    score: { scent: 8.4, uniqueness: 7.0, compliments: 7.0, value: 7.4, total: 7.8 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Quýt Mandarin"}],
    middleNotes: [{name: "Trà xanh (Green Tea)"}, {name: "Lý chua đen (Black Currant)"}],
    baseNotes: [{name: "Xạ hương"}, {name: "Lá cam (Petitgrain)"}, {name: "Đàn hương"}, {name: "Nhựa Galbanum"}],
    accords: [
      {name: "Thanh mát", value: 100, color: "#00ffff"},
      {name: "Trà xanh", value: 85, color: "#98fb98"},
      {name: "Trái cây", value: 70, color: "#ffd700"},
      {name: "Kim loại", value: 50, color: "#c0c0c0"}
    ]
  },
  // 54
  "absolu-aventus": {
    subName: "EDP", perfumer: "Olivier Creed", year: 2023, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 25, summer: 15, fall: 35, winter: 25 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Creed Absolu Aventus Limited chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Creed Absolu Aventus chính hãng: Bản nâng cấp đậm đặc và gai góc hơn với hơi ấm của quế và tuyết tùng.",
    description: "Một cực phẩm giới hạn làm nức lòng dân sành hương. Vẫn giữ DNA dứa khói trứ danh, Absolu Aventus được nêm nếm thêm sự cay nồng cực phẩm chắt lọc từ gừng, quế và thảo quả. Kết cấu mùi dày dặn và ấm áp hơn hẳn, là vũ khí tối thượng cho mùa Thu Đông.",
    vibes: [{label: "Vương giả", icon: "👑"}, {label: "Giới hạn", icon: "🎫"}],
    score: { scent: 8.6, uniqueness: 8.0, compliments: 8.5, value: 7.6, total: 8.3 },
    topNotes: [{name: "Bưởi"}, {name: "Cam Bergamot"}, {name: "Lý chua đen"}],
    middleNotes: [{name: "Gừng"}, {name: "Quế"}, {name: "Thanh yên"}, {name: "Bạch đậu khấu"}],
    baseNotes: [{name: "Tiêu hồng"}, {name: "Hoắc hương"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffd700"},
      {name: "Cay ấm", value: 85, color: "#b22222"},
      {name: "Trái cây", value: 75, color: "#ffa500"},
      {name: "Khói gỗ", value: 65, color: "#696969"}
    ]
  },
  // 56
  "green-irish-tweed": {
    subName: "EDP", perfumer: "Olivier Creed", year: 1985, gender: "nam", longevity: 7, sillage: 6,
    seasons: { spring: 45, summer: 20, fall: 25, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Creed Green Irish Tweed chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Creed Green Irish Tweed chính hãng: Hương cỏ xanh dại điền trang của một quý ông lịch lãm kinh điển.",
    description: "Mang hơi thở của một điền trang xanh mướt trải dài dưới bầu trời lộng gió, Green Irish Tweed là biểu tượng của sự nam tính, chuẩn mực. Violet và cỏ đắng mở đầu ngập tràn sự tươi mát kinh điển, sau đó lùi về để lại một lớp xạ hương đàn hương đắt tiền tột bậc.",
    vibes: [{label: "Lịch lãm", icon: "🤵"}, {label: "Cổ điển", icon: "🌿"}],
    score: { scent: 8.4, uniqueness: 7.0, compliments: 7.0, value: 7.4, total: 7.8 },
    topNotes: [{name: "Cỏ đuôi ngựa (Lemon Verbena)"}, {name: "Hoa diên vĩ"}],
    middleNotes: [{name: "Lá Violet (Violet Leaf)"}],
    baseNotes: [{name: "Long diên hương"}, {name: "Đàn hương"}],
    accords: [
      {name: "Thực vật", value: 100, color: "#228b22"},
      {name: "Phấn gỗ", value: 80, color: "#deb887"},
      {name: "Thanh mát", value: 70, color: "#e0ffff"}
    ]
  },
  // 57
  "cool-water": {
    subName: "EDT", perfumer: "Pierre Bourdon", year: 1988, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 30, summer: 60, fall: 8, winter: 2 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Davidoff Cool Water chính hãng mua ở đâu? Review 2026",
    metaDescription: "Đánh giá Davidoff Cool Water chính hãng: Biểu tượng mùa Hè của phái mạnh với sóng biển, bạc hà và hoa oải hương mát mẻ.",
    description: "Một làn sóng biển vỗ dồn dập vào bờ cát trắng. Cool Water mang lại cảm giác the mát, sạch bong từ Bạc hà và tinh chất hương biển mặn mòi. Mùi hương nam tính quốc dân, siêu tiết kiệm và không bao giờ lỗi thời trong những ngày Hè oi ả.",
    vibes: [{label: "Sát gái", icon: "💦"}, {label: "Tươi mát", icon: "🌊"}],
    score: { scent: 7.8, uniqueness: 6.0, compliments: 7.0, value: 8.8, total: 7.4 },
    topNotes: [{name: "Nước biển"}, {name: "Bạc hà"}, {name: "Lá xanh"}, {name: "Oải hương"}, {name: "Hương thảo"}],
    middleNotes: [{name: "Gỗ đàn hương"}, {name: "Hoa nhài"}, {name: "Hoa phong lữ"}, {name: "Neroli"}],
    baseNotes: [{name: "Xạ hương"}, {name: "Rêu sồi"}, {name: "Gỗ tuyết tùng"}, {name: "Thuốc lá"}, {name: "Hổ phách"}],
    accords: [
      {name: "Hương biển", value: 100, color: "#1e90ff"},
      {name: "Bạc hà", value: 85, color: "#00fa9a"},
      {name: "Thảo mộc", value: 75, color: "#008000"}
    ]
  },
  // 58
  "miss-dior-essence-new-2025": {
    subName: "Esprit de Parfum", perfumer: "Francis Kurkdjian", year: 2025, gender: "nu", longevity: 8, sillage: 6,
    seasons: { spring: 30, summer: 15, fall: 35, winter: 20 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Dior Miss Dior Essence de Parfum chính hãng mua ở đâu?",
    metaDescription: "Đánh giá Dior Miss Dior Essence chính hãng: Cô tiểu thư Dior trưởng thành hơn, ít ngọt và thiên về patchouli quyến rũ.",
    description: "Được Francis Kurkdjian làm lại với nồng độ Esprit de Parfum đậm đặc, bản Essence cắt giảm phần lớn tầng ngọt kẹo của bản cũ. Trái cây mọng đỏ hòa cùng hoắc hương (Patchouli) tạo nên một Miss Dior thực sự sang trọng, đằm thắm và trưởng thành hơn rất nhiều.",
    vibes: [{label: "Tiểu thư", icon: "🎀"}, {label: "Trưởng thành", icon: "💃"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 7.0, value: 8.2, total: 7.8 },
    topNotes: [{name: "Trái mọng đỏ (Red berries)"}],
    middleNotes: [{name: "Hồng tháng 5 (May Rose)"}, {name: "Hồng Grasse"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Gỗ hoắc hương", value: 85, color: "#556b2f"},
      {name: "Trái cây", value: 70, color: "#ff4500"}
    ]
  },
  // 59
  "miss-dior-parfum-new-2024": {
    subName: "Parfum", perfumer: "Francis Kurkdjian", year: 2024, gender: "nu", longevity: 8, sillage: 6,
    seasons: { spring: 25, summer: 10, fall: 35, winter: 30 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Dior Miss Dior Parfum 2024 chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Dior Miss Dior Parfum 2024 chính hãng: Siêu phẩm tái sinh, bùng nổ gỗ rêu và trái mọng ngào ngạt hoài niệm.",
    description: "Bản Parfum 2024 là sự tri ân xuất sắc đến DNA Miss Dior Chérie thuở nào. Tạm biệt thứ hoa lá ẻo lả, Parfum mang màu sắc vintage quyến rũ của Dâu tây rừng, Đào chín mọng trên lớp nền gỗ hổ phách rêu sồi đắt đỏ. Quyền lực, gợi cảm và đầy chất rạp hát.",
    vibes: [{label: "Cổ điển", icon: "🤎"}, {label: "Quyến rũ", icon: "💋"}],
    score: { scent: 8.4, uniqueness: 8.0, compliments: 7.0, value: 8.4, total: 8.0 },
    topNotes: [{name: "Quả quýt (Mandarin)"}, {name: "Mơ (Apricot)"}, {name: "Đào (Peach)"}],
    middleNotes: [{name: "Dâu tây rừng"}, {name: "Các nốt hoa dại"}],
    baseNotes: [{name: "Hoắc hương"}, {name: "Amberwood"}, {name: "Hổ phách"}, {name: "Rêu sồi"}, {name: "Cedar"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Ngọt ấm", value: 90, color: "#b22222"},
      {name: "Hổ phách", value: 80, color: "#ff8c00"},
      {name: "Dâu tây", value: 70, color: "#ff6347"}
    ]
  },
  // 60
  "addict-edp": {
    subName: "EDP", perfumer: "Thierry Wasser", year: 2014, gender: "nu", longevity: 9, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Dior Addict EDP (Xanh Đen) chính hãng mua ở đâu? Review",
    metaDescription: "Đánh giá Dior Addict EDP chính hãng: Vũ khí quyến rũ bóng đêm với hoa nhài Sambac ngập lút trong Vani nóng bỏng.",
    description: "Chiếc chai vỏ xanh đen kỳ bí che giấu một mê hồn hương thuộc hàng bậc nhất nhà Dior. 'Kẻ nghiện ngập' Dior Addict trói buộc đối phương bằng Vanilla Bourbon béo ngậy được nung nóng, bốc lên cùng hoa nhài Sambac ngào ngạt. Một sát thủ bóng đêm cực kỳ mời gọi.",
    vibes: [{label: "Gây nghiện", icon: "☠️"}, {label: "Sát trai", icon: "🖤"}],
    score: { scent: 8.6, uniqueness: 8.0, compliments: 8.5, value: 8.6, total: 8.5 },
    topNotes: [{name: "Lá cam Mandarin"}, {name: "Hoa cam khô"}],
    middleNotes: [{name: "Hoa nhài Sambac"}],
    baseNotes: [{name: "Vani Bourbon (Bourbon Vanilla)"}],
    accords: [
      {name: "Vani béo", value: 100, color: "#f5deb3"},
      {name: "Hoa trắng", value: 90, color: "#fffff0"},
      {name: "Ngọt ngào", value: 75, color: "#d2691e"},
      {name: "Cay ấm", value: 65, color: "#b22222"}
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
console.log("==> BATCH 6 HOÀN TẤT. Ghi ra ổ cứng.");
