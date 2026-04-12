const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "lhomme-ideal-parfum": {
    subName: "Parfum", perfumer: "Thierry Wasser", year: 2024, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Guerlain L'Homme Ideal Parfum đánh giá chuyên sâu",
    metaDescription: "Review L'Homme Ideal Parfum chính hãng: Bản nâng cấp đậm đặc nhất của Ideal, với Hạnh nhân Amaretto kết hợp Da thuộc và Hoắc hương đầy nam tính.",
    description: "L'Homme Idéal Parfum (2024) phô diễn một sức mạnh êm ái mà tĩnh lặng. Ở nồng độ Parfum đắt giá, nhà chế tác mạnh tay loại bỏ sự chua nhẹ của quả Cherry ban đầu (từng có ở bản EDP) và thay bằng Rượu mùi Hạnh nhân (Amaretto). Mùi hương nhanh chóng lan tỏa và chìm sâu vào lớp Da thuộc (Leather) xen lẫn Xạ hương (Musk) quyến rũ ngút ngàn. Dòng hương cuối để lại dấu ấn Hoắc hương đầy vẻ từng trải. Một chàng trai không chỉ hoàn hảo mà còn sâu thẳm khó đoán.",
    vibes: [{label: "Lịch thiệp", icon: "🎩"}, {label: "Sâu thẳm", icon: "🥃"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.5, value: 8.4, total: 8.5 },
    topNotes: [{name: "Rượu Amaretto (Amaretto)"}],
    middleNotes: [{name: "Da thuộc (Leather)"}, {name: "Xạ hương (Musk)"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Quả hạch", value: 100, color: "#d2b48c"},
      {name: "Trái cây", value: 85, color: "#ff4500"},
      {name: "Da thuộc", value: 75, color: "#8b4513"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Động vật", value: 60, color: "#8b0000"}
    ]
  },
  "linstant-de-guerlain-femme": {
    subName: "EDP", perfumer: "Maurice Roucel", year: 2003, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 40, winter: 25 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Guerlain L'Instant de Guerlain EDP chính hãng",
    metaDescription: "Review L'Instant de Guerlain nữ chính hãng: Sự thăng hoa của Cây mộc lan và Mật ong ướp nhụy Hoa Ngọc lan tây rực rỡ ngọt ngào.",
    description: "'Khoảnh khắc' chớp nhoáng của tình yêu sét đánh là nguồn cảm hứng tạo nên L'Instant de Guerlain. Lớp Mật ong (Honey) sánh mịn vàng ươm rưới lên những cánh Hoa Ngọc lan tây (Ylang-Ylang) và Hoa nhài ngát hương. Sự xuất hiện của Hổ phách (Amber) giúp nó trở nên ấm áp, quyến luyến trên da thịt. L'Instant de Guerlain như vầng thái dương sưởi ấm mùa thu, dịu dàng, lấp lánh và trưởng thành.",
    vibes: [{label: "Rực rỡ", icon: "🌞"}, {label: "Dịu dàng", icon: "🍯"}],
    score: { scent: 8.2, uniqueness: 8.0, compliments: 8.0, value: 8.2, total: 8.1 },
    topNotes: [{name: "Mật ong (Honey)"}],
    middleNotes: [{name: "Hoa ngọc lan tây (Ylang-Ylang)"}, {name: "Hoa mộc lan (Magnolia)"}],
    baseNotes: [{name: "Hổ phách (Amber)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Hoa cỏ", value: 100, color: "#ff69b4"},
      {name: "Mật ong", value: 85, color: "#ffa500"},
      {name: "Ngọt ngào", value: 75, color: "#dc143c"},
      {name: "Hoa vàng", value: 65, color: "#ffd700"},
      {name: "Cam chanh", value: 60, color: "#ffff00"}
    ]
  },
  "linstant-homme-edp": {
    subName: "EDP", perfumer: "Beatrice Piquet", year: 2015, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nam L'Instant de Guerlain Pour Homme EDP giá tốt",
    metaDescription: "Đánh giá L'Instant de Guerlain Pour Homme EDP: Cacao đen mạnh mẽ quện Hoắc hương ẩm ướt và Hoa Hồi cay nồng. Cực kỳ lịch lãm.",
    description: "Một cực phẩm mùa đông xuất sắc nhà Guerlain! L'Instant de Guerlain Pour Homme EDP là sự gặp gỡ của ánh sáng lạnh và đêm đen. Hoa Hồi (Star Anise) the mát gai góc là nhát cắn đầu tiên. Nhường chổ cho sự bùng nổ của Cacao khô nhẫn đắng quện vào Hoắc hương (Patchouli) rễ đất. Khí chất trí thức, mang mác nỗi buồn đẹp, cực kì sang trọng khi đi cùng suit tối màu.",
    vibes: [{label: "Trí thức", icon: "📚"}, {label: "Bí ẩn", icon: "🤎"}],
    score: { scent: 9.0, uniqueness: 8.8, compliments: 8.5, value: 9.0, total: 8.8 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Hoa Hồi (Star Anise)"}, {name: "Nhựa Elemi"}],
    middleNotes: [{name: "Hoắc hương (Patchouli)"}],
    baseNotes: [{name: "Hạt Cacao (Cacao Pod)"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#d2691e"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Cacao", value: 75, color: "#a0522d"},
      {name: "Hoắc hương", value: 65, color: "#556b2f"},
      {name: "Cam chanh", value: 60, color: "#ffff00"}
    ]
  },
  "mitsouko-edp": {
    subName: "EDP", perfumer: "Jacques Guerlain", year: 1919, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 40, winter: 25 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa nữ Mitsouko EDP Guerlain huyển thoại Chypre",
    metaDescription: "Đánh giá Guerlain Mitsouko EDP chính hãng: Bà hoàng dòng hương Chypre trái cây mượt mà bí ẩn với Quả đào nhung, Rêu sồi và Hương cay nền nã.",
    description: "Được mệnh danh là 'Chypre' hay nhất mọi thời đại, Mitsouko (ra đời 1919) kể câu chuyện tình buồn của nữ nữ quý tộc Nhật Bản Mitsouko trong cuốn tiểu thuyết La Bataille. Đây là mùi hương đi trước thời đại khi ướp Quả đào (Peach) mọng nước với Rêu sồi (Oakmoss) cổ kính và các loại gia vị nồng nàn. Cay độc, phức tạp, ảm đạm nhưng rực rỡ và quý tộc bất tận. Không dành cho số đông, chỉ dành cho những tâm hồn nghệ thuật.",
    vibes: [{label: "Bất diệt", icon: "🖼️"}, {label: "Vương giả", icon: "👑"}],
    score: { scent: 9.5, uniqueness: 9.8, compliments: 7.0, value: 9.0, total: 8.8 },
    topNotes: [{name: "Quả đào (Peach)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hương cay (Spicy Notes)"}, {name: "Hoa tử đinh hương"}],
    baseNotes: [{name: "Rêu sồi (Oakmoss)"}, {name: "Cỏ hương bài (Vetiver)"}, {name: "Quế (Cinnamon)"}],
    accords: [
      {name: "Đất", value: 100, color: "#556b2f"},
      {name: "Rêu", value: 85, color: "#454b1b"},
      {name: "Cay ấm", value: 75, color: "#cd5c5c"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Cam chanh", value: 60, color: "#ffff00"}
    ]
  },
  "mon-guerlain": {
    subName: "EDP", perfumer: "Thierry Wasser", year: 2017, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 10, fall: 35, winter: 20 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Review Nước hoa Mon Guerlain EDP mùi Vani và Oải hương",
    metaDescription: "Đánh giá Mon Guerlain EDP chính hãng: Nàng thơ quốc dân với hợp hương Vani Tahiti tuyệt hảo và Hoa Oải Hương Carla thư thả, lôi cuốn.",
    description: "Người đại diện cho Mon Guerlain không ai khác chính là Angelina Jolie. Mùi hương được đo ni đóng giày cho một người phụ nữ độc lập, mạnh mẽ nhưng ẩn chứa sự nữ tính bất diệt. Bí ẩn nằm ở cách pha trộn Hoa Oải Hương (Lavender) thanh mộc, phóng khoáng cùng Vani (Vanilla) béo ngậy ngọt ngào nức nở. Cú huých Diên vĩ (Iris) và Đậu Tonka khiến tổng thể bám tỏa mượt mà. Vừa hiện đại, vừa an ủi và quyến rũ không cần cố gắng.",
    vibes: [{label: "Nữ tính", icon: "👗"}, {label: "Lôi cuốn", icon: "✨"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 9.0, value: 8.5, total: 8.5 },
    topNotes: [{name: "Hoa Oải Hương (Lavender)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Coumarin"}, {name: "Gỗ đàn hương (Sandalwood)"}],
    accords: [
      {name: "Vani", value: 100, color: "#fffacd"},
      {name: "Oải hương", value: 85, color: "#9370db"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Thảo vãn", value: 65, color: "#2e8b57"},
      {name: "Phấn", value: 60, color: "#faf0e6"}
    ]
  },
  "mon-guerlain-intense": {
    subName: "EDP Intense", perfumer: "Thierry Wasser", year: 2019, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 40, winter: 35 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Mon Guerlain Intense chính hãng phiên bản quyến rũ",
    metaDescription: "Đánh giá Mon Guerlain Intense EDP chính hãng: Gia tăng cực mạnh nồng độ Vani Tahiti và Hoắc hương. Bí ẩn, sâu thẳm dành cho ban đêm.",
    description: "Nếu Mon Guerlain EDP là nàng thơ dạo phố, thì bản Intense là khi nàng mặc đầm dạ hội đen bước vào quán rượu. Nồng độ Hoa Oải Hương được hạ xuống một nhịp, nhường sân khấu tối đa cho Vani Tahiti (Vanilla) cháy bỏng x2. Sự thêm thắt Cam thảo (Licorice) ngòn ngọt điểm xuyết thêm Hoắc hương (Patchouli) khiến Mon Guerlain Intense trở nên dày dặn, đầm đìa và gây nghiện cực cao. Dạ tiệc mùa lạnh chính là vũ đài của nàng.",
    vibes: [{label: "Gây nghiện", icon: "💋"}, {label: "Sâu sắc", icon: "🍷"}],
    score: { scent: 8.8, uniqueness: 8.2, compliments: 8.8, value: 8.5, total: 8.6 },
    topNotes: [{name: "Hoa Oải Hương (Lavender)"}, {name: "Cam thảo (Licorice)"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}, {name: "Hoa hồng"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Coumarin)"}, {name: "Hoắc hương (Patchouli)"}],
    accords: [
      {name: "Vani", value: 100, color: "#fffacd"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Oải hương", value: 75, color: "#9370db"},
      {name: "Phấn", value: 65, color: "#faebd7"},
      {name: "Thảo mộc", value: 60, color: "#3cb371"}
    ]
  },
  "samsara-edp": {
    subName: "EDP", perfumer: "Jean-Paul Guerlain", year: 1989, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 40, winter: 35 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa nữ Samsara EDP Guerlain chính hãng hương Đàn Hương",
    metaDescription: "Review Guerlain Samsara EDP: Sự tôn nghiêm của luân hồi. Tượng đài Đàn Hương (Sandalwood) phương Đông đậm đặc quyện Hoa Ngọc Lan Tây.",
    description: "Samsara tiếng Phạn nghĩa là luân hồi. Đây là lời tỏ tình bất diệt mà Jean-Paul Guerlain tạo ra. Tại cốt lõi của nó là sự thống trị của Gỗ Đàn Hương (Sandalwood) nhẵn thín, ngậy như sữa bột quý tộc, ôm lấy tổ hợp Hoa nhài trắng và Ngọc lan tây (Ylang-Ylang) vương giả. Một sự bao bọc thần thánh, mùi của nhang trầm cung điện, một niết bàn tĩnh lặng và uy nghiêm rực rỡ.",
    vibes: [{label: "Thần thánh", icon: "🪷"}, {label: "Tĩnh tại", icon: "🧘"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 7.5, value: 8.5, total: 8.4 },
    topNotes: [{name: "Chiết xuất Cam chanh (Citruses)"}],
    middleNotes: [{name: "Hoa Ngọc lan tây (Ylang-Ylang)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa Diên vĩ (Iris)"}],
    baseNotes: [{name: "Gỗ đàn hương (Sandalwood)"}, {name: "Vani (Vanilla)"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Hoa vàng", value: 85, color: "#ffd700"},
      {name: "Phấn", value: 75, color: "#eedd82"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Vani", value: 60, color: "#fffacd"}
    ]
  },
  "shalimar-eau-de-parfum": {
    subName: "EDP", perfumer: "Jacques Guerlain", year: 1925, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Guerlain Shalimar Eau De Parfum nữ hoàng Amber",
    metaDescription: "Review Shalimar EDP chính hãng: Tượng đài Amber phương Đông rực rỡ 1925, với Vani ám khói nhang, Da thuộc và sự chát nhẹ của Cam Bergamot cổ điển.",
    description: "Shalimar là nước hoa phương Đông (Amber/Oriental) đầu tiên trên thế giới! Nó được lấy cảm hứng từ tình yêu của hoàng đế Shah Jahan dành cho công chúa Mumtaz Mahal. Shalimar EDP có một cú mở đầu đầy chát chua cổ điển của Cam Bergamot. Nhưng dần lộ ra trái tim rực cháy của Vani (Vanilla) bám một chút khói Nhang (Incense) nghi ngút và một lớp Da thuộc (Leather) mạnh bạo. Hoàng gia, kiêu kỳ, ảm đạm rực rỡ - bức tượng đài trăm tuổi không bao giờ đổ ngã.",
    vibes: [{label: "Hoàng gia", icon: "🕌"}, {label: "Quyền uy", icon: "🦚"}],
    score: { scent: 9.5, uniqueness: 9.5, compliments: 7.5, value: 9.0, total: 8.9 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Hương cam chanh (Citruses)"}],
    middleNotes: [{name: "Nhựa Opoponax"}, {name: "Nhang khói (Incense)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Da thuộc (Leather)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Hổ phách", value: 85, color: "#d2691e"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Vani", value: 65, color: "#fff0f5"},
      {name: "Phấn", value: 60, color: "#dfcbad"}
    ]
  },
  "shalimar-lessence": {
    subName: "L'Essence", perfumer: "Jacques Guerlain", year: 2024, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Đánh giá Guerlain Shalimar L'Essence chính hãng",
    metaDescription: "Review Shalimar L'Essence 2024: Sự trỗi dậy mạnh mẽ của Vani, Xạ hương và Diên vĩ, mượt mà béo ngậy cắt bỏ nét Da thuộc cổ điển dữ dội.",
    description: "L'Essence là góc tiếp cận hiện đại và cực kì nịnh mũi của tượng đài Shalimar vào kỷ nguyên 2024. Hãng đã gột bớt lớp gai góc da thuộc rêu phong, bù đắp bằng một kho tàng Vani (Vanilla) béo ngậy, ngọt ngào cùng Nhựa An tức hương (Benzoin). Tổ ấm của Diên vĩ (Iris) và Đậu Tonka trải ra một tấm nệm lụa là ấm rực rỡ dơ dáng ôm lấy da. Dành cho những ai mê cốt lỏi ngậy vàng của Shalimar nhưng ngại phần da thuộc gai góc.",
    vibes: [{label: "Mượt mà", icon: "🧶"}, {label: "Hiện đại", icon: "🥂"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.8, value: 8.5, total: 8.6 },
    topNotes: [{name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Diên vĩ (Iris)"}, {name: "Xạ hương (Musk)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "An tức hương (Benzoin)"}, {name: "Hổ phách (Amber)"}, {name: "Đậu Tonka"}],
    accords: [
      {name: "Vani", value: 100, color: "#fffacd"},
      {name: "Phấn", value: 85, color: "#faebd7"},
      {name: "Hổ phách", value: 75, color: "#b87333"},
      {name: "Diên vĩ", value: 65, color: "#9370db"},
      {name: "Ngọt ngào", value: 60, color: "#ff4500"}
    ]
  },
  "shalimar-parfum": {
    subName: "Parfum Extrait", perfumer: "Jacques Guerlain", year: 1925, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Guerlain Shalimar Parfum Extrait chính hãng siêu hiếm",
    metaDescription: "Đánh giá Shalimar Parfum (Extrait de Parfum) chính hãng: Tinh hoa đậm đặc nhất của Shalimar, mượt như nhung chìm vào Vani đen và Đậu tonka đẳng cấp.",
    description: "Nồng độ Parfum Extrait là dạng cô đặc xa xỉ nhất của nhà Guerlain, nơi từng giọt nước hoa là châu báu lỏng. Ở nồng độ kinh dị này, sự tương phản gay gắt của Cam chanh bay qua rất nhanh, nhường toàn bộ sân khấu cho lớp Vani quý giá (Vanilla) ôm chặt lấy Diên vĩ (Iris) và Đậu Tonka (Tonka Bean). Mọi thứ tròn trịa rực cháy, chảy trên da như nhựa sống. Hâm nóng cái giá lạnh khắc nghiệt nhất chỉ bằng một vệt lướt.",
    vibes: [{label: "Nhung lụa", icon: "🧣"}, {label: "Tối thượng", icon: "💎"}],
    score: { scent: 9.8, uniqueness: 9.5, compliments: 8.0, value: 8.5, total: 9.0 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Hương hoa (Floral Notes)"}],
    middleNotes: [{name: "Hoa Diên vĩ (Iris)"}, {name: "Hoa hồng (Rose)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    accords: [
      {name: "Vani", value: 100, color: "#fff8dc"},
      {name: "Cam chanh", value: 85, color: "#ffff00"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Phấn", value: 65, color: "#dfcbad"},
      {name: "Diên vĩ", value: 60, color: "#9370db"}
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
console.log('==> BATCH 13 HOAN TAT.');
