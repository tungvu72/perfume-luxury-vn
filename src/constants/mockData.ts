import { Perfume } from "../types";

const PENDING_IMAGE = "/placeholders/product-image-pending.svg";

export const MASTER_PERFUMES: Perfume[] = [
  {
    id: "sauvage-elixir",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Sauvage Elixir",
    subName: "Elixir",
    perfumer: "François Demachy",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Dior Sauvage Elixir đang được xác minh lại để tránh dùng sai phiên bản", verified: false }
    ],
    description: "Sauvage Elixir là phiên bản đậm, dày và quyền lực nhất trong dòng Sauvage. Gia vị, lavender và gỗ tạo nên cảm giác nam tính rõ, hợp buổi tối, thời tiết mát và người thích mùi có độ hiện diện mạnh. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Dior Sauvage Elixir là phiên bản trưởng thành, cô đặc và ít “đại trà” nhất trong toàn bộ gia đình Sauvage. Đây không còn là kiểu fresh designer dễ xịt vô tư như EDT, mà là bản có độ nén cao hơn, gia vị rõ hơn và thiên về phong thái nam tính buổi tối.

### Nguồn gốc và xuất xứ
Sauvage thuộc Dior - nhà mốt Pháp cao cấp với vị thế rất mạnh trong mảng nước hoa designer. Trong thập kỷ gần đây, Sauvage trở thành trụ cột thương mại quan trọng nhất của Dior ở nhóm nước hoa nam hiện đại.

### Ra mắt khi nào?
Sauvage Elixir ra mắt năm 2021. Đây là bước phát triển đưa cấu trúc mùi Sauvage từ hướng tươi, sạch và dễ dùng sang vùng đậm, tối và có chiều sâu hơn.

### Ai là người đứng sau?
Phiên bản này gắn với giai đoạn cuối của François Demachy tại Dior. Vì vậy Elixir thường được nhìn như một bản tuyên ngôn mạnh hơn, giàu cá tính hơn trong cùng hệ Sauvage.

### Câu chuyện ra đời
Nếu EDT và EDP thành công nhờ độ dễ dùng, thì Elixir ra đời để phục vụ người muốn một bản Sauvage bớt phổ thông hơn. Nó giữ tinh thần nhận diện của dòng nhưng nén lại, đậm hơn và tạo dấu ấn mạnh hơn khi dùng ngoài đời thật.

### Dòng Sauvage hiện có những phiên bản nào?
- Sauvage EDT: sáng, fresh, phổ thông nhất
- Sauvage EDP: dày hơn EDT, cân bằng hơn cho số đông
- Sauvage Parfum: mượt, ấm và ít chói hơn
- Sauvage Elixir: đậm nhất, tối nhất, có độ hiện diện mạnh nhất

### Mùi hương mang lại cảm giác gì?
Elixir mở đầu bằng gia vị ấm khá rõ, sau đó lavender xuất hiện theo hướng tối và dày hơn, rồi kết lại với gỗ, cam thảo và amber. Tổng thể cho cảm giác nam tính mạnh, hơi quyền lực, ít thân thiện hơn các bản Sauvage dễ dùng khác nhưng lại đáng nhớ hơn nhiều.

### Khi nào nên dùng?
- Buổi tối, đi chơi, đi tiệc, không khí lạnh hơn
- Người muốn mùi nam tính rõ ràng và có độ hiện diện mạnh
- Không phải lựa chọn tối ưu cho môi trường nóng ẩm ban ngày hoặc văn phòng kín

### Nhận xét của Maison de SON
Nếu bạn thấy Sauvage EDT quá quen thuộc và muốn một bản trưởng thành hơn, đậm hơn và bớt “ai cũng dùng”, Elixir là hướng nâng cấp đáng thử nhất trong cả dòng.`,
    verdict: "Một chai nam đậm, dày và có lực rất rõ. Hợp người thích độ hiện diện mạnh, khí chất buổi tối và cảm giác trưởng thành hơn các bản Sauvage còn lại.",
    verdictShort: "ĐẬM, DÀY, RẤT CÓ LỰC",
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Stronger With You Intensely đang được xác minh lại để tránh nhầm phiên bản", verified: false }
    ],
    description: "Một trong những chai nam ngọt ấm nổi bật của Armani. Toffee, quế, vanilla và amber tạo cảm giác gần gũi, dễ được khen trong thời tiết mát. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Stronger With You Intensely là hướng đi ngọt, ấm và tình cảm hơn trong dòng Stronger With You.

### Nguồn gốc và xuất xứ
Đây là sản phẩm thuộc Giorgio Armani, nhà mốt Ý nổi tiếng với phong cách thanh lịch, hiện đại và dễ tiếp cận với số đông hơn nhiều thương hiệu niche.

### Ra mắt khi nào?
Stronger With You Intensely ra mắt năm 2019 như một flanker mở rộng của dòng Emporio Armani Stronger With You.

### Câu chuyện ra đời
Nếu bản Stronger With You gốc đã thiên ngọt và dễ gần, bản Intensely đẩy cảm giác đó lên dày hơn, ấm hơn và hợp buổi tối hơn. Đây là hướng phát triển rất rõ theo nhu cầu compliment và hẹn hò.

### Dòng Stronger With You có những phiên bản nào?
- Stronger With You EDT: nhẹ hơn, dễ tiếp cận hơn
- Stronger With You Intensely: ngọt và ấm hơn
- Stronger With You Absolutely: tối hơn, đậm amber hơn
- Các flanker giới hạn khác tùy thị trường và thời điểm

### Nhận xét của Maison de SON
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Lattafa Khamrah đang được xác minh lại để tránh nhầm phiên bản", verified: false }
    ],
    description: "Khamrah nổi bật nhờ cảm giác ngọt ấm, dày và dễ gây ấn tượng ở tầm giá dễ tiếp cận hơn nhiều chai niche cùng mood. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Lattafa Khamrah là một trong những chai ngọt ấm nổi tiếng nhất ở nhóm giá dễ tiếp cận trong vài năm gần đây.

### Nguồn gốc và xuất xứ
Khamrah thuộc Lattafa, thương hiệu nước hoa UAE nổi tiếng với các sản phẩm có phong cách đậm, ngọt, hiệu ứng mạnh và giá dễ tiếp cận hơn nhiều nhà niche châu Âu.

### Ra mắt khi nào?
Khamrah ra mắt năm 2022 và nhanh chóng trở thành một trong những cái tên viral mạnh nhất của Lattafa.

### Câu chuyện ra đời
Khamrah nổi lên nhờ việc mang lại cảm giác gourmand - amber đậm, sang và bắt mũi ở mức giá dễ tiếp cận. Nó nhanh chóng được cộng đồng nhắc tới như một chai “gây nghiện” trong phân khúc budget.

### Dòng Khamrah có những phiên bản nào?
- Khamrah bản gốc
- Khamrah Qahwa với sắc thái cà phê rõ hơn

### Nhận xét của Maison de SON
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Bleu de Chanel EDP đang được xác minh lại để tránh dùng sai phiên bản", verified: false }
    ],
    description: "Bleu de Chanel EDP là kiểu nước hoa nam rất dễ giới thiệu cho người mới: sạch, chỉn chu, có chiều sâu vừa đủ và dùng được trong nhiều hoàn cảnh mà không bị quá nặng. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
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

### Nhận xét của Maison de SON
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Black Opium EDP đang được xác minh lại để tránh nhầm flanker", verified: false }
    ],
    description: "Black Opium EDP nổi bật nhờ cà phê, vanilla và hoa trắng. Vừa gợi cảm, vừa dễ nhận ra, hợp người thích mùi nữ hiện đại có dấu ấn. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Black Opium EDP là một trong những chai nữ nổi tiếng nhất của YSL trong hơn một thập kỷ qua.

### Nguồn gốc và xuất xứ
Black Opium thuộc Yves Saint Laurent, thương hiệu Pháp nổi tiếng với hình ảnh thời trang cao cấp và các dòng nước hoa nữ có độ nhận diện rất mạnh.

### Ra mắt khi nào?
Black Opium EDP ra mắt năm 2014 và nhanh chóng trở thành trụ cột thương mại của YSL ở phân khúc nước hoa nữ hiện đại.

### Câu chuyện ra đời
Black Opium được xây để tạo ra hình ảnh nữ hiện đại, có phần nổi loạn, quyến rũ và giàu năng lượng hơn các nhóm floral ngọt truyền thống. cấu trúc mùi cà phê là điểm giúp nó nổi bật rõ trên thị trường.

### Dòng Black Opium có những phiên bản nào?
- Black Opium EDP bản gốc
- Black Opium Neon
- Black Opium Extreme
- Black Opium Le Parfum
- Một số flanker theo từng giai đoạn

### Nhận xét của Maison de SON
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Creed Aventus đang được xác minh lại để tránh dùng nhầm bottle/version", verified: false }
    ],
    description: "Aventus là cái tên gần như luôn xuất hiện khi nói về nước hoa niche nam nổi tiếng. Dứa, bergamot, birch và musk tạo nên cấu trúc mùi rất dễ nhận ra. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Creed Aventus là cái tên có sức ảnh hưởng rất lớn với nhóm người chơi nước hoa nam hiện đại.

### Nguồn gốc và xuất xứ
Aventus thuộc Creed, nhà nước hoa lâu đời có xuất xứ châu Âu và nổi tiếng với hình ảnh sang trọng, di sản và phân khúc niche cao cấp.

### Ra mắt khi nào?
Aventus ra mắt năm 2010 và nhanh chóng trở thành một trong những chai niche nam nổi tiếng nhất thế giới.

### Câu chuyện ra đời
Aventus thường được nhắc tới như biểu tượng của giai đoạn nước hoa nam hiện đại chuyển dịch mạnh sang cấu trúc mùi trái cây - gỗ - khói có độ nhận diện cao. Nó cũng là cái tên tạo ra vô số tranh luận về batch và hiệu năng trong cộng đồng.

### Dòng Aventus có những phiên bản nào?
- Aventus bản EDP chủ lực
- Aventus Cologne với hướng sáng và dễ dùng hơn
- Các biến động batch theo từng thời kỳ là chủ đề được bàn rất nhiều

### Nhận xét của Maison de SON
Không phải chai rẻ và cũng không phải chai ai cũng sẽ thấy “đáng tiền” ngay lập tức, nhưng Aventus vẫn là một cái tên quan trọng nếu muốn hiểu hệ quy chiếu của nước hoa nam niche hiện đại.`,
    verdict: "Một biểu tượng niche nam hiện đại với cấu trúc mùi trái cây - gỗ khói rất dễ nhận ra. Hợp người muốn thử một chuẩn tham chiếu lớn của thị trường.",
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Baccarat Rouge 540 đang được xác minh lại để tránh nhầm EDP và Extrait", verified: false }
    ],
    description: "BR540 nổi tiếng nhờ hiệu ứng airy amber ngọt, trong và khó tách bạch bằng mô tả đơn giản. Đây là một trong những mùi có ảnh hưởng lớn nhất đến thị trường clone hiện đại. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Baccarat Rouge 540 là một trong những cái tên có ảnh hưởng mạnh nhất đến xu hướng mùi ngọt airy hiện đại.

### Nguồn gốc và xuất xứ
Đây là sáng tạo của Maison Francis Kurkdjian, nhà nước hoa Pháp cao cấp nổi tiếng với ngôn ngữ mùi hiện đại, tinh chỉnh và có độ nhận diện rất mạnh.

### Ra mắt khi nào?
Baccarat Rouge 540 ra mắt năm 2015. Đây là một trong những tác phẩm nổi tiếng nhất của Francis Kurkdjian trong thập kỷ gần đây.

### Câu chuyện ra đời
Mùi hương này được tạo ra trong bối cảnh hợp tác với Baccarat để kỷ niệm dấu mốc của nhà pha lê danh tiếng. Chính vì vậy nó không chỉ là một chai nước hoa nổi tiếng, mà còn mang yếu tố câu chuyện thương hiệu và tính biểu tượng khá cao.

### Dòng Baccarat Rouge 540 có những phiên bản nào?
- Baccarat Rouge 540 EDP
- Baccarat Rouge 540 Extrait de Parfum với độ dày và độ tối hơn

### Nhận xét của Maison de SON
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
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Tom Ford Noir Extreme đang được xác minh lại để tránh nhầm EDP và Parfum", verified: false }
    ],
    description: "Noir Extreme mang chất ngọt ấm, hơi exotic và phù hợp buổi tối. Đây là kiểu Tom Ford dễ tiếp cận hơn một số chai private blend khó chơi hơn. Ảnh sản phẩm đang được xác minh lại để đảm bảo đúng phiên bản trước khi cập nhật lên live.",
    article: `Tom Ford Noir Extreme là lựa chọn hợp lý nếu bạn muốn một chai tối, ấm và có cảm giác sang hơn nhóm designer đại trà.

### Nguồn gốc và xuất xứ
Noir Extreme thuộc Tom Ford, thương hiệu Mỹ nổi tiếng với hình ảnh sang trọng, gợi cảm và có màu sắc đêm tối rất rõ ở nhiều dòng nước hoa.

### Ra mắt khi nào?
Noir Extreme EDP ra mắt năm 2015 và nhanh chóng trở thành một trong những chai tối nổi bật nhất ở nhóm designer nam cao cấp.

### Câu chuyện ra đời
Noir Extreme tiếp nối tinh thần dòng Noir nhưng đẩy cảm giác indulgent, ấm và sắc nét hơn. Đây là kiểu mùi dành cho người muốn thứ gì đó tối hơn, dày hơn và có chất ăn chơi hơn nhóm fresh office scent.

### Dòng Noir Extreme có những phiên bản nào?
- Noir Extreme EDP
- Noir Extreme Parfum với cảm giác đậm và da thuộc hơn

### Nhận xét của Maison de SON
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
