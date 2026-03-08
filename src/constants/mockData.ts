import { Perfume } from "../types";

export const MASTER_PERFUMES: Perfume[] = [
  {
    id: "sauvage-elixir",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Sauvage Elixir",
    subName: "Elixir",
    perfumer: "François Demachy",
    gender: "nam",
    image: "https://fimgs.net/images/perfume/o.68415.png",
    images: [
      { url: "https://fimgs.net/photogram/p1200/sj/sr/wJM8xkxTDAklwkjT.jpg", source: "fragram", caption: "Sauvage Elixir với thiết kế xanh đậm đặc trưng" },
      { url: "https://fimgs.net/photogram/p1200/me/ej/DvNET49ViI73vLmi.jpg", source: "fragram", caption: "Cận cảnh thân chai và nắp nam tính" },
      { url: "https://fimgs.net/photogram/p1200/lz/66/idIA4dIrymIVcQFO.jpg", source: "fragram", caption: "Sắc xanh đậm đặc trưng của Elixir" }
    ],
    description: "Phiên bản đậm, ấm và quyền lực nhất của dòng Sauvage. Gia vị, oải hương và gỗ tạo nên cảm giác nam tính rõ, hợp buổi tối và thời tiết mát hơn.",
    article: `Dior Sauvage Elixir là phiên bản đậm đặc và trưởng thành hơn rõ rệt so với các flankers còn lại của dòng Sauvage.

### Điểm đáng chú ý
- Mở đầu đậm gia vị hơn bản EDT và EDP
- Lavender vẫn hiện diện nhưng tối và dày hơn
- Hợp buổi tối, thời tiết mát và các dịp cần độ hiện diện cao

### Maison de SON verdict
Nếu bạn thấy Sauvage EDT quá phổ thông và muốn một bản sâu, dày, nam tính hơn, Elixir là lựa chọn đáng thử nhất trong cả dòng.`,
    verdict: "Đậm, nam tính và có độ hiện diện rất mạnh. Đây là kiểu chai nên dùng tiết chế nhưng đúng hoàn cảnh thì cực kỳ hiệu quả.",
    verdictShort: "ĐẬM, NAM TÍNH, RẤT NỔI BẬT",
    score: { scent: 9.2, uniqueness: 8.9, compliments: 9.4, value: 8.2, total: 8.9 },
    vibes: [
      { label: "Buổi tối", icon: "🌙" },
      { label: "Lạnh trời", icon: "❄️" },
      { label: "Nam tính", icon: "🖤" }
    ],
    longevity: 9,
    sillage: 9,
    seasons: { spring: 45, summer: 20, fall: 90, winter: 100 },
    dayNight: { day: 30, night: 100 },
    topNotes: [{ name: "Quế" }, { name: "Nhục đậu khấu" }, { name: "Bạch đậu khấu" }, { name: "Bưởi" }],
    middleNotes: [{ name: "Oải hương" }],
    baseNotes: [{ name: "Cam thảo" }, { name: "Gỗ đàn hương" }, { name: "Hổ phách" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Gia vị ấm", value: 100, color: "#e67e22" },
      { name: "Aromatic", value: 82, color: "#1abc9c" },
      { name: "Gỗ", value: 78, color: "#8B4513" },
      { name: "Oải hương", value: 62, color: "#9b59b6" }
    ],
    sizes: ["10ml Chiết", "60ml Fullbox"],
    basePrice: 5400000,
    tags: ["Buổi tối", "Thu đông", "Nam tính", "Designer"],
    shopeeOffers: []
  },
  {
    id: "armani-stronger-with-you-intensely",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Stronger With You Intensely",
    subName: "Eau de Parfum",
    perfumer: "Cécile Matton",
    gender: "nam",
    image: "https://fimgs.net/images/perfume/o.52802.jpg",
    images: [
      { url: "https://fimgs.net/photogram/p1200/o9/52/OaM5Gh5gSyEBgZZO.jpg", source: "fragram", caption: "Thiết kế chai Stronger With You Intensely" },
      { url: "https://fimgs.net/photogram/p1200/dn/jf/NGDPqasxuHSvIorx.jpg", source: "fragram", caption: "Màu nước hổ phách ấm" },
      { url: "https://fimgs.net/photogram/p1200/kj/ab/Rp3mQcXbNjTaKsLw.jpg", source: "fragram", caption: "Một trong những chai ngọt nam nổi bật" }
    ],
    description: "Một trong những chai nam ngọt ấm nổi bật của Armani. Toffee, quế, vanilla và amber tạo cảm giác gần gũi, dễ được khen trong thời tiết mát.",
    article: `Stronger With You Intensely là hướng đi ngọt, ấm và tình cảm hơn trong dòng Stronger With You.

### Điểm đáng chú ý
- Mùi ngọt rõ nhưng vẫn đủ nam tính
- Hợp hẹn hò, tối và mùa lạnh
- Dễ tạo thiện cảm với số đông hơn nhiều chai niche khó ngửi

### Maison de SON verdict
Nếu bạn muốn một chai nam ngọt dễ tiếp cận, hợp đi chơi tối và có hiệu ứng compliment tốt, Intensely là một lựa chọn đáng để bắt đầu.`,
    verdict: "Ngọt ấm, dễ gần và hợp hẹn hò. Đây là kiểu chai phát huy tốt nhất trong buổi tối hoặc thời tiết mát.",
    verdictShort: "NGỌT ẤM, DỄ ĐƯỢC KHEN",
    score: { scent: 9.0, uniqueness: 8.1, compliments: 9.5, value: 8.9, total: 8.9 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 9,
    sillage: 8,
    seasons: { spring: 25, summer: 10, fall: 95, winter: 100 },
    dayNight: { day: 25, night: 100 },
    topNotes: [{ name: "Hồng tiêu" }, { name: "Cây bách xù" }, { name: "Hoa tím" }],
    middleNotes: [{ name: "Toffee" }, { name: "Quế" }, { name: "Oải hương" }, { name: "Xô thơm" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Hổ phách" }, { name: "Đậu tonka" }, { name: "Da lộn" }],
    accords: [
      { name: "Ngọt", value: 100, color: "#FF6D00" },
      { name: "Amber", value: 72, color: "#FF8F00" },
      { name: "Vani", value: 68, color: "#f5deb3" },
      { name: "Gia vị ấm", value: 54, color: "#BF360C" }
    ],
    tags: ["Hẹn hò", "Thu đông", "Nam ngọt", "Designer"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2850000,
    shopeeOffers: []
  },
  {
    id: "lattafa-khamrah",
    brandSlug: "lattafa",
    brand: "LATTAFA",
    name: "Khamrah",
    subName: "Eau de Parfum",
    perfumer: "In-house",
    gender: "unisex",
    image: "https://fimgs.net/images/perfume/o.75805.png",
    images: [
      { url: "https://fimgs.net/images/perfume/o.75805.png", source: "studio", caption: "Hero image của Lattafa Khamrah" },
      { url: "https://fimgs.net/photogram/p1200/dt/hc/MUpUzcXkyrz09FHQ.jpg", source: "fragram", caption: "Cận cảnh chai Khamrah" },
      { url: "https://fimgs.net/photogram/p1200/gv/cm/oIBaXWckCsljEWm0.jpg", source: "fragram", caption: "Khamrah với phong cách ngọt ấm Trung Đông" }
    ],
    description: "Khamrah nổi bật nhờ cảm giác ngọt ấm, dày và dễ gây ấn tượng ở tầm giá dễ tiếp cận hơn nhiều chai niche cùng mood.",
    article: `Lattafa Khamrah là một trong những chai ngọt ấm nổi tiếng nhất ở nhóm giá dễ tiếp cận trong vài năm gần đây.

### Điểm đáng chú ý
- Mùi ngọt, dày và đậm chất gourmand
- Hợp tối, tiệc và thời tiết mát hơn
- Thiết kế chai và hiệu ứng mùi mang màu sắc Trung Đông rõ rệt

### Maison de SON verdict
Nếu bạn thích hướng ngọt ấm, nổi bật và muốn trải nghiệm một chai dễ nhớ ở mức giá mềm hơn, Khamrah là ứng viên đáng cân nhắc.`,
    verdict: "Ngọt ấm, đậm và khá nổi bật. Hợp người thích cảm giác gourmand đậm hơn là kiểu sạch, mát, văn phòng.",
    verdictShort: "NGỌT ẤM, DÀY VÀ DỄ NHỚ",
    score: { scent: 8.8, uniqueness: 8.2, compliments: 8.9, value: 9.6, total: 8.9 },
    vibes: [
      { label: "Gourmand", icon: "🍮" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 9,
    sillage: 8,
    seasons: { spring: 35, summer: 10, fall: 90, winter: 100 },
    dayNight: { day: 20, night: 100 },
    topNotes: [{ name: "Quế" }, { name: "Nhục đậu khấu" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Chà là" }, { name: "Praline" }, { name: "Hoa huệ" }, { name: "Mahonial" }],
    baseNotes: [{ name: "Vani" }, { name: "Đậu tonka" }, { name: "Amberwood" }, { name: "Benzoin" }, { name: "Myrrh" }, { name: "Akigalawood" }],
    accords: [
      { name: "Ngọt", value: 100, color: "#ff69b4" },
      { name: "Gia vị ấm", value: 92, color: "#e67e22" },
      { name: "Amber", value: 84, color: "#d4a017" },
      { name: "Vani", value: 82, color: "#f5deb3" }
    ],
    tags: ["Gourmand", "Unisex", "Thu đông", "Budget"],
    sizes: ["10ml Chiết", "100ml Fullbox"],
    basePrice: 1250000,
    shopeeOffers: []
  },
  {
    id: "bleu-chanel-edp",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Bleu de Chanel",
    subName: "Eau de Parfum",
    perfumer: "Olivier Polge",
    gender: "nam",
    image: "https://fimgs.net/images/perfume/o.20477.jpg?v=2",
    images: [
      { url: "https://fimgs.net/images/perfume/o.20477.jpg?v=2", source: "studio", caption: "Bleu de Chanel Eau de Parfum - ảnh packshot chính diện" },
      { url: "https://fimgs.net/images/perfume/o.20477.jpg?v=2", source: "studio", caption: "Bleu de Chanel EDP với thiết kế xanh đen đặc trưng" },
      { url: "https://fimgs.net/images/perfume/o.20477.jpg?v=2", source: "studio", caption: "Phiên bản Eau de Parfum của Bleu de Chanel" }
    ],
    description: "Bleu de Chanel EDP là kiểu nước hoa nam rất dễ giới thiệu cho người mới: sạch, chỉn chu, có chiều sâu vừa đủ và dùng được trong nhiều hoàn cảnh mà không bị quá nặng.",
    article: `Bleu de Chanel Eau de Parfum là một trong những chai nam quan trọng nhất của Chanel ở thời hiện đại, và cũng là phiên bản được nhiều người xem là cân bằng nhất trong cả dòng Bleu de Chanel.

### Nguồn gốc và xuất xứ
Bleu de Chanel thuộc nhà Chanel - thương hiệu thời trang và làm đẹp cao cấp của Pháp. Dòng Bleu de Chanel được định vị là trục nước hoa nam hiện đại, lịch sự và dễ ứng dụng rộng rãi hơn các dòng cổ điển trước đó của hãng.

### Ra mắt khi nào?
Bleu de Chanel Eau de Toilette ra mắt trước vào năm 2010, do Jacques Polge sáng tạo. Phiên bản Eau de Parfum ra mắt năm 2014, do Olivier Polge phát triển thêm theo hướng sâu hơn, ấm hơn và trưởng thành hơn. Sau đó dòng này có thêm bản Parfum ra mắt năm 2018.

### Câu chuyện ra đời
Bleu de Chanel được xây trên ý tưởng về sự tự do, độc lập và nam tính hiện đại theo ngôn ngữ của Chanel. Nếu bản EDT thiên về cảm giác tươi, sắc và dễ bật lên ngay từ đầu, thì bản EDP đi theo hướng mượt hơn, sang hơn và linh hoạt hơn trong sử dụng thực tế.

### Dòng Bleu de Chanel hiện có những phiên bản nào?
- Bleu de Chanel EDT (2010): tươi hơn, sáng hơn, sắc nét hơn
- Bleu de Chanel EDP (2014): cân bằng giữa độ tươi, chiều sâu và sự đa dụng
- Bleu de Chanel Parfum (2018): ấm hơn, dày hơn, thiên buổi tối hơn

### Mùi hương mang lại cảm giác gì?
Bleu de Chanel EDP mở đầu bằng citrus sạch và sáng, sau đó chuyển sang gừng, nhục đậu khấu, gỗ và trầm hương nhẹ. Tổng thể cho cảm giác nam tính, lịch sự, gọn gàng và dễ tạo thiện cảm trong nhiều môi trường khác nhau.

### Khi nào nên dùng?
- Đi làm, gặp khách, môi trường văn phòng
- Hẹn hò nhẹ nhàng hoặc đi chơi buổi tối không quá formal
- Người muốn một chai nam sang nhưng ít rủi ro khi blind buy

### Maison de SON verdict
Nếu chỉ giữ một chai designer nam để dùng đa dụng, Bleu de Chanel EDP gần như luôn nằm trong nhóm đáng cân nhắc đầu tiên vì nó cân bằng tốt giữa sự sang, độ an toàn và tính ứng dụng.`,
    verdict: "Một chai nam đa dụng rất mạnh: sạch, sang, lịch sự và đủ chiều sâu để không bị nhạt. Hợp cho người cần sự an toàn nhưng vẫn muốn có đẳng cấp.",
    verdictShort: "ĐA DỤNG, SẠCH VÀ SANG",
    score: { scent: 8.9, uniqueness: 7.4, compliments: 9.1, value: 7.8, total: 8.3 },
    vibes: [
      { label: "Văn phòng", icon: "💼" },
      { label: "Daily wear", icon: "🧴" },
      { label: "Thanh lịch", icon: "🕴️" },
      { label: "All-rounder", icon: "🔄" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 84, summer: 74, fall: 86, winter: 72 },
    dayNight: { day: 84, night: 56 },
    topNotes: [{ name: "Bưởi" }, { name: "Chanh" }, { name: "Bạc hà" }, { name: "Hồng tiêu" }],
    middleNotes: [{ name: "Gừng" }, { name: "Nhục đậu khấu" }, { name: "Hoa nhài" }, { name: "Iso E Super" }],
    baseNotes: [{ name: "Trầm hương" }, { name: "Gỗ đàn hương" }, { name: "Hoắc hương" }, { name: "Labdanum" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Woody", value: 95, color: "#8B4513" },
      { name: "Citrus", value: 76, color: "#f7c242" },
      { name: "Aromatic", value: 72, color: "#2c7a4b" },
      { name: "Fresh spicy", value: 56, color: "#c58a2b" }
    ],
    tags: ["Văn phòng", "All-rounder", "Designer", "Nam", "Dễ dùng"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox", "150ml Fullbox"],
    basePrice: 4200000,
    shopeeOffers: []
  },
  {
    id: "ysl-black-opium",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Black Opium",
    subName: "Eau de Parfum",
    perfumer: "Nathalie Lorson, Marie Salamagne, Olivier Cresp & Honorine Blanc",
    gender: "nu",
    image: "https://fimgs.net/images/perfume/o.34170.jpg?v=2",
    images: [
      { url: "https://fimgs.net/photogram/p1200/pg/do/gPZJu6HCF1k6vNi0.jpg", source: "fragram", caption: "Black Opium với cảm giác tối và quyến rũ" },
      { url: "https://fimgs.net/photogram/p1200/yb/yz/Y0Y4yQtuzSrnukfa.jpg", source: "fragram", caption: "Chai Black Opium EDP" },
      { url: "https://fimgs.net/photogram/p1200/ar/ho/x0nQ7ILJhEsUUMvt.jpg", source: "fragram", caption: "Một trong những chai nữ nổi tiếng nhất của YSL" }
    ],
    description: "Black Opium EDP nổi bật nhờ cà phê, vanilla và hoa trắng. Vừa gợi cảm, vừa dễ nhận ra, hợp người thích mùi nữ hiện đại có dấu ấn.",
    article: `Black Opium EDP là một trong những chai nữ nổi tiếng nhất của YSL trong hơn một thập kỷ qua.

### Điểm đáng chú ý
- DNA cà phê ngọt rất dễ nhận ra
- Hợp buổi tối, hẹn hò và thời tiết mát hơn
- Có dấu ấn rõ hơn nhiều chai nữ ngọt phổ thông

### Maison de SON verdict
Nếu bạn thích phong cách nữ hiện đại, hơi tối, có chất ngọt và dấu ấn rõ ràng, Black Opium EDP vẫn là lựa chọn rất dễ hiểu vì sao bán chạy.`,
    verdict: "Ngọt, quyến rũ và dễ nhận ra. Đây là kiểu chai nữ có tính nhận diện cao và hợp những dịp muốn tạo dấu ấn rõ hơn.",
    verdictShort: "NGỌT, CÀ PHÊ, RẤT DỄ NHỚ",
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.2, value: 8.3, total: 8.8 },
    vibes: [
      { label: "Hẹn hò", icon: "🖤" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Nữ hiện đại", icon: "✨" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 60, summer: 38, fall: 90, winter: 95 },
    dayNight: { day: 38, night: 95 },
    topNotes: [{ name: "Lê" }, { name: "Tiêu hồng" }, { name: "Hoa cam" }],
    middleNotes: [{ name: "Cà phê" }, { name: "Hoa nhài" }, { name: "Hạnh nhân đắng" }, { name: "Cam thảo" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Hoắc hương" }, { name: "Gỗ tuyết tùng" }, { name: "Cashmere wood" }],
    accords: [
      { name: "Coffee", value: 95, color: "#3e1f00" },
      { name: "Sweet", value: 90, color: "#8B0000" },
      { name: "Vanilla", value: 72, color: "#f5deb3" },
      { name: "White floral", value: 68, color: "#e75480" }
    ],
    tags: ["Nữ", "Buổi tối", "Hẹn hò", "Designer"],
    sizes: ["10ml Chiết", "30ml Fullbox", "50ml Fullbox", "90ml Fullbox"],
    basePrice: 2550000,
    shopeeOffers: []
  },
  {
    id: "creed-aventus",
    brandSlug: "creed",
    brand: "CREED",
    name: "Aventus",
    subName: "Eau de Parfum",
    perfumer: "Olivier Creed & Erwin Creed",
    gender: "nam",
    image: "https://fimgs.net/images/perfume/o.9828.jpg",
    images: [
      { url: "https://fimgs.net/photogram/p1200/xh/ea/B2pTPj9ytDVenm98.jpg", source: "fragram", caption: "Creed Aventus với thân chai biểu tượng" },
      { url: "https://fimgs.net/photogram/p1200/mc/qx/aNatsz0VTWmOw49w.jpg", source: "fragram", caption: "Thiết kế chai Creed Aventus" },
      { url: "https://fimgs.net/photogram/p1200/bk/km/71DlRERxLHUIGVd1.jpg", source: "fragram", caption: "Một trong những chai niche nam nổi tiếng nhất" }
    ],
    description: "Aventus là cái tên gần như luôn xuất hiện khi nói về nước hoa niche nam nổi tiếng. Dứa, bergamot, birch và musk tạo nên DNA rất dễ nhận ra.",
    article: `Creed Aventus là cái tên có sức ảnh hưởng rất lớn với nhóm người chơi nước hoa nam hiện đại.

### Điểm đáng chú ý
- Mở đầu trái cây sáng nhưng về sau có chiều sâu gỗ khói rõ hơn
- Có độ nhận diện cao và lịch sử cộng đồng bàn luận rất mạnh
- Hợp người muốn thử một biểu tượng niche thay vì chỉ mua theo độ an toàn

### Maison de SON verdict
Không phải chai rẻ và cũng không phải chai ai cũng sẽ thấy “đáng tiền” ngay lập tức, nhưng Aventus vẫn là một cái tên quan trọng nếu muốn hiểu hệ quy chiếu của nước hoa nam niche hiện đại.`,
    verdict: "Một biểu tượng niche nam hiện đại với DNA trái cây - gỗ khói rất dễ nhận ra. Hợp người muốn thử một chuẩn tham chiếu lớn của thị trường.",
    verdictShort: "BIỂU TƯỢNG NICHE NAM HIỆN ĐẠI",
    score: { scent: 9.3, uniqueness: 9.4, compliments: 8.8, value: 6.2, total: 8.4 },
    vibes: [
      { label: "Niche", icon: "💎" },
      { label: "Nam tính", icon: "🖤" },
      { label: "Biểu tượng", icon: "👑" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 72, summer: 52, fall: 90, winter: 84 },
    dayNight: { day: 75, night: 78 },
    topNotes: [{ name: "Dứa" }, { name: "Cam bergamot" }, { name: "Lý chua đen" }, { name: "Táo" }],
    middleNotes: [{ name: "Bạch dương" }, { name: "Hoắc hương" }, { name: "Hoa hồng" }, { name: "Hoa nhài Morocco" }],
    baseNotes: [{ name: "Xạ hương" }, { name: "Địa y" }, { name: "Long diên hương" }, { name: "Vanilla" }],
    accords: [
      { name: "Fruity", value: 88, color: "#f39c12" },
      { name: "Smoky", value: 70, color: "#616161" },
      { name: "Woody", value: 68, color: "#8B4513" },
      { name: "Fresh", value: 62, color: "#2ecc71" }
    ],
    tags: ["Niche", "Nam", "Biểu tượng", "Flagship"],
    sizes: ["5ml Chiết", "10ml Chiết", "100ml Fullbox"],
    basePrice: 8000000,
    shopeeOffers: []
  },
  {
    id: "baccarat-rouge-540",
    brandSlug: "maison-francis-kurkdjian",
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Baccarat Rouge 540",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "unisex",
    image: "https://fimgs.net/images/perfume/o.57088.jpg?v=2",
    images: [
      { url: "https://fimgs.net/photogram/p1200/kx/1f/hjWb9IjXjjnGgG5Z.jpg", source: "fragram", caption: "Baccarat Rouge 540 với silhouette đặc trưng" },
      { url: "https://fimgs.net/photogram/p1200/ay/ib/PMAZHYUMNNXlNvIY.jpg", source: "fragram", caption: "Thiết kế chai Baccarat Rouge 540" },
      { url: "https://fimgs.net/photogram/p1200/oo/rz/huWZtIG3jiBsGFRL.jpg", source: "fragram", caption: "Một trong những chai unisex nổi tiếng nhất" }
    ],
    description: "BR540 nổi tiếng nhờ hiệu ứng airy amber ngọt, trong và khó tách bạch bằng mô tả đơn giản. Đây là một trong những mùi có ảnh hưởng lớn nhất đến thị trường clone hiện đại.",
    article: `Baccarat Rouge 540 là một trong những cái tên có ảnh hưởng mạnh nhất đến xu hướng mùi ngọt airy hiện đại.

### Điểm đáng chú ý
- DNA dễ gây nghiện nhưng cũng gây tranh cãi vì cảm nhận trên da mỗi người rất khác
- Có độ nhận diện cực cao trên thị trường unisex cao cấp
- Rất nhiều chai sau này đi theo hướng mùi lấy cảm hứng từ BR540

### Maison de SON verdict
Nếu bạn muốn hiểu vì sao một mùi hương có thể trở thành hiện tượng văn hóa trong thế giới niche hiện đại, BR540 là chai nên thử bằng da thật thay vì chỉ đọc mô tả.`,
    verdict: "Hiện tượng lớn của nhóm amber ngọt hiện đại. Không dễ mô tả trọn vẹn bằng chữ, nhưng rất dễ nhận ra khi ngửi ngoài đời.",
    verdictShort: "AMBER NGỌT HIỆN ĐẠI CỰC KỲ NỔI TIẾNG",
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.0, value: 7.1, total: 8.7 },
    vibes: [
      { label: "Unisex", icon: "✨" },
      { label: "Sang trọng", icon: "💎" },
      { label: "Biểu tượng", icon: "👑" }
    ],
    longevity: 9,
    sillage: 8,
    seasons: { spring: 65, summer: 45, fall: 90, winter: 95 },
    dayNight: { day: 55, night: 95 },
    topNotes: [{ name: "Nghệ tây" }, { name: "Hoa nhài" }],
    middleNotes: [{ name: "Amberwood" }, { name: "Ambergris" }],
    baseNotes: [{ name: "Nhựa thông" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Amber", value: 100, color: "#d4a017" },
      { name: "Sweet", value: 84, color: "#FF6D00" },
      { name: "Warm spicy", value: 58, color: "#b05c00" },
      { name: "Woody", value: 55, color: "#614326" }
    ],
    tags: ["Unisex", "Niche", "Amber", "Biểu tượng"],
    sizes: ["5ml Chiết", "10ml Chiết", "70ml Fullbox"],
    basePrice: 6700000,
    shopeeOffers: []
  },
  {
    id: "tom-ford-noir-extreme",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Noir Extreme",
    subName: "Eau de Parfum",
    perfumer: "Sonia Constant",
    gender: "nam",
    image: "https://fimgs.net/images/perfume/o.30516.jpg?v=2",
    images: [
      { url: "https://fimgs.net/photogram/p1200/oi/vc/EqaG5B5K1A7gIOsc.jpg", source: "fragram", caption: "Tom Ford Noir Extreme với thiết kế tối sang" },
      { url: "https://fimgs.net/photogram/p1200/os/ig/0pYeqgAhpFvBveOW.jpg", source: "fragram", caption: "Cận cảnh chai Noir Extreme" },
      { url: "https://fimgs.net/photogram/p1200/md/8a/VAXrNjDLljYS6S76.jpg", source: "fragram", caption: "Một trong những chai tối nổi bật của Tom Ford" }
    ],
    description: "Noir Extreme mang chất ngọt ấm, hơi exotic và phù hợp buổi tối. Đây là kiểu Tom Ford dễ tiếp cận hơn một số chai private blend khó chơi hơn.",
    article: `Tom Ford Noir Extreme là lựa chọn hợp lý nếu bạn muốn một chai tối, ấm và có cảm giác sang hơn nhóm designer đại trà.

### Điểm đáng chú ý
- Hợp tối, tiệc và thời tiết mát
- Có chất ngọt ấm nhưng không đi theo hướng “kẹo” quá nhiều
- Phù hợp người muốn bước lên nhóm mùi tối hơn nhưng chưa muốn quá cực đoan

### Maison de SON verdict
Noir Extreme không phải chai dễ dùng nhất ngày nào cũng xịt, nhưng lại rất hợp khi bạn cần một không khí buổi tối rõ ràng hơn.`,
    verdict: "Ấm, tối và có chất sang vừa đủ để khác số đông. Hợp buổi tối hơn là môi trường nóng ẩm ban ngày.",
    verdictShort: "ẤM TỐI, SANG VÀ HỢP BUỔI TỐI",
    score: { scent: 8.9, uniqueness: 8.2, compliments: 8.9, value: 7.6, total: 8.4 },
    vibes: [
      { label: "Buổi tối", icon: "🌙" },
      { label: "Sự kiện", icon: "🎭" },
      { label: "Luxury", icon: "✨" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 48, summer: 22, fall: 90, winter: 100 },
    dayNight: { day: 28, night: 100 },
    topNotes: [{ name: "Bạch đậu khấu" }, { name: "Nhục đậu khấu" }, { name: "Nghệ tây" }, { name: "Quýt" }],
    middleNotes: [{ name: "Kulfi" }, { name: "Hoa hồng" }, { name: "Hoa nhài" }, { name: "Hoa cam" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Amber" }, { name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Warm spicy", value: 92, color: "#e67e22" },
      { name: "Amber", value: 72, color: "#c57b21" },
      { name: "Sweet", value: 68, color: "#8B0000" },
      { name: "Woody", value: 60, color: "#8B4513" }
    ],
    tags: ["Tom Ford", "Buổi tối", "Thu đông", "Designer"],
    sizes: ["5ml Chiết", "10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 4000000,
    shopeeOffers: []
  }
];
