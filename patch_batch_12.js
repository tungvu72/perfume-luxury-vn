const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "guerlain-aqua-allegoria-nerolia-vetiver-edp": {
    subName: "Forte EDP", perfumer: "Delphine Jelk", year: 2022, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 45, summer: 45, fall: 5, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Guerlain Aqua Allegoria Forte Nerolia Vetiver chính hãng EDP",
    metaDescription: "Review Forte Nerolia Vetiver chính hãng: Vườn cam chanh mượt mà đan xen Cỏ hương bài rễ và lá Sung xanh mướt. Một chai nước hoa mùa hè tinh tế, thanh tao.",
    description: "Nằm trong bộ sưu tập Forte EDP cải tiến độ lưu hương, Nerolia Vetiver Forte mở ra một cánh rừng mùa hè xanh mướt. Vị Cam đắng trong trẻo của Hoa Cam (Neroli) được làm dịu lại bởi hương chua thanh của Cam Bergamot. Nét độc đáo nhất nằm ở base note: rễ Cỏ Hương Bài (Vetiver) bám đất thoang thoảng cùng vị chát nhẹ của lá Sung, tạo nên một mùi hương unisex sạch sẽ, mộc mạc và cực kỳ sang trọng.",
    vibes: [{label: "Xanh mướt", icon: "🍃"}, {label: "Sạch sẽ", icon: "🛁"}],
    score: { scent: 8.0, uniqueness: 7.5, compliments: 8.0, value: 7.8, total: 7.8 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Lá sung đỏ (Fig Leaf)"}, {name: "Tinh dầu lá chanh (Petitgrain)"}],
    middleNotes: [{name: "Hoa cam (Neroli)"}, {name: "Quả sung (Fig)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Hương lục", value: 75, color: "#008000"},
      {name: "Thảo vãn", value: 65, color: "#2e8b57"},
      {name: "Cay tươi", value: 60, color: "#98fb98"}
    ]
  },
  "guerlain-aqua-allegoria-forte-rosa-palissandro-edp": {
    subName: "Forte EDP", perfumer: "Delphine Jelk", year: 2023, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 40, fall: 15, winter: 5 }, dayNight: { day: 70, night: 30 },
    seoTitle: "Aqua Allegoria Forte Rosa Palissandro EDP chính hãng",
    metaDescription: "Đánh giá Guerlain Rosa Palissandro chính hãng: Bản phối hoàn hảo giữa Hoa hồng tháng 5 quyến rũ và Gỗ trắc bá (Palisander) thanh lịch cổ điển.",
    description: "Rosa Palissandro khắc họa sự giao thoa quyền quý giữa thế giới thực vật. Tinh dầu Hoa hồng tháng năm (May Rose) ngọt ngào kết đôi cùng Gỗ hồng sắc Palisander (Rosewood). Vị cay của Ngò thơm (Coriander) điểm xuyết chút gai góc, trong khi Hoắc hương giữ cho tổng thể đậm chất gỗ ấm. Một chai Eau de Parfum cá tính, sâu lắng và trưởng thành.",
    vibes: [{label: "Sâu lắng", icon: "🥀"}, {label: "Thanh lịch", icon: "🎻"}],
    score: { scent: 7.5, uniqueness: 7.8, compliments: 7.0, value: 7.5, total: 7.4 },
    topNotes: [{name: "Ngò thơm (Coriander)"}],
    middleNotes: [{name: "Hoa hồng (Rose)"}, {name: "Hoa phong lữ (Geranium)"}],
    baseNotes: [{name: "Gỗ hồng sắc (Palisander Rosewood)"}, {name: "Gỗ đàn hương (Sandalwood)"}, {name: "Hoắc hương"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Hoa hồng", value: 85, color: "#ff1493"},
      {name: "Thảo mộc", value: 75, color: "#2e8b57"},
      {name: "Cay ấm", value: 65, color: "#cd853f"},
      {name: "Cay tươi", value: 60, color: "#9acd32"}
    ]
  },
  "guerlain-aqua-allegoria-nettare-di-sole": {
    subName: "EDT", perfumer: "Thierry Wasser", year: 2021, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 40, summer: 40, fall: 15, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Guerlain Aqua Allegoria Nettare Di Sole mùi Mật ong hoa trắng",
    metaDescription: "Review Aqua Allegoria Nettare Di Sole chính hãng: Mật hoa tỏa nắng rực rỡ quyện thêm vị mặn của Nước và sự thanh khiết của Hoa mộc lan.",
    description: "Được dịch ra là 'Mật hoa của Mặt trời', Nettare Di Sole chưng cất nhịp đập rạng rỡ của một ngày hè đầy nắng. Tổ hợp hoa trắng rực rỡ (Hoa cam, Hoa nhài, Mộc lan) đắm chìm trong dòng Mật ong (Honey) ngọt ngào. Lạ lùng thay, nó lại sở hữu một note Nước (Water/Aquatic) mát lạnh mằn mặn, làm dịu đi cái ngọt váng vất. Tạo cảm giác tươi tắn, thanh xuân như một nàng thơ dạo chơi bờ hồ.",
    vibes: [{label: "Êm ái", icon: "🍯"}, {label: "Rạng rỡ", icon: "☀️"}],
    score: { scent: 7.5, uniqueness: 7.0, compliments: 7.5, value: 7.4, total: 7.4 },
    topNotes: [{name: "Hương nước (Water)"}, {name: "Hoa cam (Orange Blossom)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hương ánh mặt trời (Solar Notes)"}, {name: "Hoa mộc lan (Magnolia)"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Mật ong (Honey)"}],
    accords: [
      {name: "Hoa trắng", value: 100, color: "#f0f8ff"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Mật ong", value: 65, color: "#ffa500"},
      {name: "Hương Nước", value: 60, color: "#00ced1"}
    ]
  },
  "champs-elysees-edp": {
    subName: "EDP", perfumer: "Jacques Guerlain", year: 1996, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 60, summer: 25, fall: 10, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Guerlain Champs-Elysées EDP - Ký ức đại lộ nước Pháp",
    metaDescription: "Đánh giá Guerlain Champs-Elysées EDP chính hãng: Rực rỡ hoa Mimosa vàng, một bầu trời Paris hoài niệm, lãng mạn và dịu dàng đến nao lòng.",
    description: "Được đặt theo tên đại lộ hoa lệ bậc nhất Paris, Champs-Elysées EDP là một tuyệt tác kinh điển. Trái tim của mùi hương nằm ở Hoa Trinh nữ (Mimosa) vàng rực, xốp nhẹ và đầy phấn. Nó rải một lớp bụi vàng lấp lánh lên Cây hạnh nhân (Almond tree) và Bụt giấm. Cảm giác e ấp, dịu dàng, nũng nịu nhưng vô cùng quý phái – vừa đủ mộng mơ cho một buổi hẹn hò chớm xuân mơn mởn.",
    vibes: [{label: "Hoài niệm", icon: "🇫🇷"}, {label: "Lãng mạn", icon: "💛"}],
    score: { scent: 8.0, uniqueness: 8.0, compliments: 7.5, value: 8.0, total: 7.9 },
    topNotes: [{name: "Lá Mimosa"}, {name: "Hoa dâm bụt (Hibiscus)"}],
    middleNotes: [{name: "Hoa trinh nữ (Mimosa)"}, {name: "Buddleia (Lilac mùa hè)"}],
    baseNotes: [{name: "Gỗ hạnh nhân (Almond tree)"}, {name: "Hoa hồng (Rose)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ff69b4"},
      {name: "Hoa vàng", value: 85, color: "#ffd700"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Hương lục", value: 65, color: "#008000"},
      {name: "Phấn", value: 60, color: "#f5deb3"}
    ]
  },
  "habit-rouge-eau-de-toilette": {
    subName: "EDT", perfumer: "Jean-Paul Guerlain", year: 1965, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Guerlain Habit Rouge EDT chính hãng mua ở đâu? Review",
    metaDescription: "Review Guerlain Habit Rouge EDT chính hãng: Dấu ấn lịch sử của dòng phương đông nam giới, một kiệt tác Da thuộc - Cam chanh đậm chất quý tộc cưỡi ngựa.",
    description: "Habit Rouge tự hào là mùi hương Amber-Oriental đầu tiên trên thế giới dành riêng cho nam giới (ra mắt 1965). Vị Chanh vàng (Lemon) chua dôn dốt, chát chúa cuộn lấy Vani và Da thuộc (Leather). Nó gợi lên hình ảnh bộ quân phục đỏ sậm của những kỵ sĩ quý tộc Pháp – phong trần, bụi bặm nhưng vô cùng kiêu hãnh và sành sỏi. Một chai nước hoa kén mũi, nhưng ai đã hiểu thì sẽ say đắm cả đời.",
    vibes: [{label: "Cổ điển", icon: "🏇"}, {label: "Kiêu hãnh", icon: "🛡️"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 7.0, value: 8.5, total: 8.2 },
    topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Gỗ hồng (Brazilian Rosewood)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa cẩm chướng (Carnation)"}, {name: "Hoa hồng (Rose)"}, {name: "Gỗ tuyết tùng"}],
    baseNotes: [{name: "Da thuộc (Leather)"}, {name: "Vani (Vanilla)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Cay ấm", value: 75, color: "#d2691e"},
      {name: "Hổ phách", value: 65, color: "#b87333"},
      {name: "Vani", value: 60, color: "#fff8dc"}
    ]
  },
  "habit-rouge-parfum": {
    subName: "Parfum", perfumer: "Delphine Jelk", year: 2024, gender: "nam", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 45, winter: 35 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Guerlain Habit Rouge Parfum chính hãng phiên bản mạnh mẽ",
    metaDescription: "Đánh giá Habit Rouge Parfum chính hãng (2024): Đỉnh cao sâu thẳm của dòng Habit Rouge, pha trộn Rượu Rum ngất ngây, Vani đen tuyền và Hoắc hương.",
    description: "Ở bản Parfum mới nhất, chất quý tộc của Habit Rouge đã nhuốm thêm sự bí ẩn của màn đêm. Bớt đi sự gay gắt của Cam chanh, bản Parfum rót đầy ly Rượu Rum (Rum) tẩm thứ Hoắc hương (Patchouli) râm ran đất ẩm. Lớp Vani quen thuộc được nấu cho kẹo lại, bám đen và ngọt lịm. Đậm đà, say mèm, dạn dĩ – một mùi hương sinh ra để khẳng định vị thế ông chủ.",
    vibes: [{label: "Say đắm", icon: "🥃"}, {label: "Uy quyền", icon: "👑"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.0, value: 8.5, total: 8.4 },
    topNotes: [{name: "Cam Bergamot"}],
    middleNotes: [{name: "Rượu Rum (Rum)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Vani", value: 100, color: "#fff0f5"},
      {name: "Hoắc hương", value: 85, color: "#556b2f"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Rượu Rum", value: 65, color: "#cd5c5c"},
      {name: "Cay ấm", value: 60, color: "#ff4500"}
    ]
  },
  "insolence-edp": {
    subName: "EDP", perfumer: "Maurice Roucel", year: 2021, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 5, fall: 20, winter: 35 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Guerlain Insolence EDP kiêu kỳ mua ở đâu chính hãng",
    metaDescription: "Đánh giá Guerlain Insolence EDP chính hãng: Nàng thơ ngỗ ngược, điệu đà với luồng khí phấn hoa Diên vĩ, Tử đinh hương cháy và Dâu rừng.",
    description: "'Insolence' trong tiếng Pháp ám chỉ sự xấc xược, ngỗ ngược. Đây là mùi hương tôn vinh sự táo bạo lộng lẫy của tuổi trẻ. Insolence EDP sở hữu liều lượng Hoa tím (Violet) cực sốc, kết hợp Diên vĩ (Iris) để tạo ra một vầng hào quang 'phấn' đậm đặc, mượt mà bám lấy làn da. Note Dâu rừng (Wild Strawberry) tạo nét chua dịu nhỏ nhoi. Vô cùng bám tỏa, quyến luyến, điệu đà và lả lơi.",
    vibes: [{label: "Ngỗ ngược", icon: "💅"}, {label: "Điệu đà", icon: "👛"}],
    score: { scent: 8.2, uniqueness: 8.5, compliments: 8.5, value: 8.2, total: 8.3 },
    topNotes: [{name: "Hoa tím (Violet)"}, {name: "Dâu rừng (Wild Strawberry)"}],
    middleNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Hoa cam mộc (Orange Blossom)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Hoa tím Violet", value: 100, color: "#8a2be2"},
      {name: "Phấn", value: 85, color: "#faebd7"},
      {name: "Vani", value: 75, color: "#fffacd"},
      {name: "Diên vĩ", value: 65, color: "#9370db"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "l-heure-bleue-eau-de-parfum": {
    subName: "EDP", perfumer: "Jacques Guerlain", year: 1912, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 5, fall: 40, winter: 30 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Guerlain L'Heure Bleue EDP chính hãng huyền thoại 1912",
    metaDescription: "Review L'Heure Bleue EDP chính hãng: Tuyệt tác 'Giờ xanh' lãng mạn, một buổi chạng vạng Paris đầy hoa Diên vĩ, Hoa tím và Tiểu hồi hương cay nhẹ.",
    description: "Được sáng tạo năm 1912, L'Heure Bleue (Giờ xanh) là khoảnh khắc chạng vạng chập choạng tối nhạt nhòa lãng mạn của thành Paris. Rất sầu muộn nhưng đẹp mê hồn. Mùi hương ngập trong phấn hoa Diên vĩ (Iris), Hoa tím Violet bụi bặm, và nốt Hoa cẩm chướng xen lẫn Hoa vòi voi ấm áp. Phiên bản EDP nồng độ cao tạo ra một bức mành nhung cổ điển, quý phái, sướt mướt của giới tư sản châu Âu rực rỡ.",
    vibes: [{label: "Lãng mạn", icon: "🌃"}, {label: "Cổ điển", icon: "🎭"}],
    score: { scent: 8.8, uniqueness: 9.5, compliments: 7.0, value: 8.5, total: 8.4 },
    topNotes: [{name: "Tiểu hồi hương (Anise)"}, {name: "Cây rau mùi (Coriander)"}],
    middleNotes: [{name: "Hoa cẩm chướng (Carnation)"}, {name: "Hoa tím (Violet)"}, {name: "Hoa vòi voi (Heliotrope)"}],
    baseNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Vani (Vanilla)"}, {name: "An tức hương (Benzoin)"}],
    accords: [
      {name: "Phấn", value: 100, color: "#eedd82"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Vani", value: 75, color: "#fffacd"},
      {name: "Cay ấm", value: 65, color: "#cd5c5c"},
      {name: "Hoa tím", value: 60, color: "#8a2be2"}
    ]
  },
  "l-heure-bleue-eau-de-toilette": {
    subName: "EDT", perfumer: "Jacques Guerlain", year: 1912, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 30, summer: 10, fall: 30, winter: 30 }, dayNight: { day: 50, night: 50 },
    seoTitle: "Guerlain L'Heure Bleue EDT chính hãng có gì khác?",
    metaDescription: "Đánh giá L'Heure Bleue EDT chính hãng: 'Giờ xanh' bản EDT tươi sáng hơn, ít đặc phấn và thanh thoát hơn sự u hoài cổ điển của bản EDP.",
    description: "L'Heure Bleue rực rỡ trên một bức tranh thêu hoài niệm. Ở bản nồng độ EDT, sự u hoài nặng nề của phấn và hoắc hương được tiết chế bớt. Bó hoa nhài, Cẩm chướng và Hoa tím Violet trở nên dứt sức sống và tươi sáng, thoáng khí hơn. Nó vẫn kiêu hãnh và lãng mạn như một bộ phim Pháp trắng đen đầy day dứt, cực kỳ phù hợp cho những người mê đắm vintage nhưng cần tính ứng dụng dễ mặc.",
    vibes: [{label: "Hoài cổ", icon: "🎞️"}, {label: "Tnh tế", icon: "🕊️"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 7.5, value: 8.5, total: 8.3 },
    topNotes: [{name: "Hương cay (Spicy Notes)"}],
    middleNotes: [{name: "Hoa cẩm chướng (Carnation)"}, {name: "Hoa tím (Violet)"}],
    baseNotes: [{name: "Hoa diên vĩ (Iris)"}, {name: "Vani (Vanilla)"}, {name: "An tức hương (Benzoin)"}],
    accords: [
      {name: "Phấn", value: 100, color: "#f5deb3"},
      {name: "Hoa tím", value: 85, color: "#8a2be2"},
      {name: "Cay ấm", value: 75, color: "#d2691e"},
      {name: "Hoa cỏ", value: 65, color: "#ff69b4"},
      {name: "Vani", value: 60, color: "#ffffcc"}
    ]
  },
  "l-homme-ideal-eau-de-parfum": {
    subName: "EDP", perfumer: "Thierry Wasser", year: 2016, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 30, night: 70 },
    seoTitle: "L'Homme Idéal EDP chính hãng cực bén mùi Cherry nướng",
    metaDescription: "Review Guerlain L'Homme Ideal EDP chính hãng: Quý ông hoàn hảo với vị Quả Anh đào (Cherry) nướng cùng Hạnh nhân đầm ấm, mượt mà và khiêu khích.",
    description: "Câu sologan của hãng là: 'Người đàn ông hoàn hảo là một huyền thoại. Nhưng nước hoa của anh ta là thật'. L'Homme Ideal EDP châm ngòi bằng nốt Cherry (Anh đào đen) cay đắng hòa cùng mùi Hạnh nhân cháy (Almond). Rất kích thích và lả lướt. Khi khô lại mượt cực kì với Vani và Da thuộc sang trọng. Nó tinh quái, hư hỏng ngầm nhưng bọc trong lớp suit phẳng phiu. Date night mùa đông vô cùng hoàn hảo.",
    vibes: [{label: "Hư hỏng", icon: "😈"}, {label: "Quyến rũ", icon: "💼"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.2, value: 9.0, total: 8.9 },
    topNotes: [{name: "Quả anh đào (Cherry)"}, {name: "Hạnh nhân (Almond)"}, {name: "Hương cay (Spicy Notes)"}],
    middleNotes: [{name: "Vani (Vanilla)"}, {name: "Hương nhang (Incense)"}, {name: "Hoa hồng (Rose)"}],
    baseNotes: [{name: "Đậu Tonka (Tonka Bean)"}, {name: "Da thuộc (Leather)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Ngọt ngào", value: 100, color: "#dc143c"},
      {name: "Anh đào", value: 85, color: "#8b0000"},
      {name: "Vani", value: 75, color: "#fffacd"},
      {name: "Hạnh nhân", value: 65, color: "#d2b48c"},
      {name: "Quả hạch", value: 60, color: "#cd853f"}
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
console.log('==> BATCH 12 HOAN TAT.');
