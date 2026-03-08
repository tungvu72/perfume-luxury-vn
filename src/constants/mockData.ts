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
    description: "Đây là kiểu mùi nam rất đậm, cay và có lực. Hợp người thích cảm giác trưởng thành, đi tối hoặc trời mát. Nếu cần một chai dễ dùng ban ngày trong thời tiết nóng ẩm, bản này sẽ hơi nặng.",
    article: `Tại Maison de SON, Sauvage Elixir thường được xem là bản trưởng thành nhất trong cả dòng Sauvage của Dior. Với nhóm người tìm một chai nước hoa nam có độ hiện diện rõ, đây là cái tên rất dễ gây ấn tượng ngay từ lần thử đầu.

### Nguồn gốc và xuất xứ
Sauvage là dòng nước hoa nam chủ lực của Dior, thương hiệu cao cấp đến từ Pháp. Những năm gần đây, đây gần như là trục sản phẩm nam bán mạnh nhất của hãng, nên mỗi phiên bản mới đều được người dùng để ý rất kỹ.

### Ra mắt khi nào?
Sauvage Elixir ra mắt năm 2021. So với EDT, EDP hay Parfum, bản này đi theo hướng đậm hơn hẳn và thiên về cảm giác buổi tối nhiều hơn.

### Câu chuyện ra đời
Nếu các bản Sauvage trước nổi tiếng vì dễ dùng, thì Elixir ra đời cho nhóm người thấy chúng hơi quen quá. Bản này nén mùi lại dày hơn, thêm nhiều gia vị hơn và tạo cảm giác nam tính, có tuổi hơn hẳn.

### Có những phiên bản nào trong dòng Sauvage?
- Sauvage EDT: sáng, dễ dùng nhất
- Sauvage EDP: dày hơn, cân bằng hơn
- Sauvage Parfum: mượt và ấm hơn
- Sauvage Elixir: đậm nhất, nặng nhất và nổi bật nhất

### Mùi hương mang lại cảm giác gì?
Lúc mới xịt sẽ thấy gia vị ấm bật lên khá rõ. Sau đó lavender đi ra theo hướng tối hơn, rồi phần gỗ và cam thảo làm tổng thể trở nên dày, hơi sang nhưng cũng khá áp lực nếu xịt quá tay.

### Khi nào nên dùng?
- Đi tối, đi tiệc, thời tiết mát
- Hợp người thích mùi nam tính rõ rệt
- Không hợp lắm nếu bạn cần một chai đi văn phòng kín giữa trưa nóng

### Nhận xét của Maison de SON
Nếu bạn từng thấy Sauvage EDT quá phổ thông, thì Elixir đúng là bản nâng cấp đáng thử. Nhưng đây không phải kiểu chai ai cũng sẽ thích ngay vì nó nặng hơn, gắt hơn và cần hoàn cảnh phù hợp mới đẹp.`,
    verdict: "Mùi này cho cảm giác nam tính rất rõ, đậm và có phần áp đảo. Hợp người đi tối, thích mùi có lực và muốn người khác phải để ý. Nếu bạn thích kiểu sạch, nhẹ, dễ xịt mỗi ngày thì bản này hơi căng.",
    verdictShort: "ĐẬM, NAM TÍNH, RẤT CÓ LỰC",
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
      { name: "Thơm thảo mộc", value: 82, color: "#1abc9c" },
      { name: "Gỗ", value: 78, color: "#8B4513" },
      { name: "Oải hương", value: 62, color: "#9b59b6" }
    ],
    sizes: ["10ml Chiết", "60ml Fullbox"],
    basePrice: 5400000,
    tags: ["Buổi tối", "Thu đông", "Nam tính", "Thiết kế"],
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
    description: "Đây là kiểu mùi ngọt ấm, dễ gây thiện cảm và rất hợp đi tối. Hợp người thích mùi dễ được khen, nhất là khi đi chơi hoặc hẹn hò. Nếu ghét mùi ngọt hoặc sống ở nơi nóng quanh năm, bạn nên cân nhắc kỹ.",
    article: `Tại Maison de SON, Stronger With You Intensely là một trong những chai nước hoa nam kiểu ngọt ấm dễ hiểu nhất. Với người thích hướng mùi gần gũi, dễ được khen và có chất tình cảm hơn, bản này của Giorgio Armani khá dễ hợp gu.

### Nguồn gốc và xuất xứ
Đây là sản phẩm thuộc Giorgio Armani - thương hiệu Ý vốn mạnh ở nhóm nước hoa cao cấp thanh lịch, dễ dùng và có tính đại chúng tốt hơn nhiều dòng khó tiếp cận.

### Ra mắt khi nào?
Stronger With You Intensely ra mắt năm 2019 như một phiên bản đi đậm hơn từ dòng Stronger With You.

### Câu chuyện ra đời
Bản gốc Stronger With You đã là kiểu ngọt dễ mến rồi. Bản Intensely làm mọi thứ rõ hơn: ấm hơn, ngọt hơn, hợp tối hơn và rất dễ tạo thiện cảm với người đối diện.

### Dòng Stronger With You có những phiên bản nào?
- Stronger With You EDT: nhẹ hơn, dễ tiếp cận hơn
- Stronger With You Intensely: ngọt và ấm hơn rõ
- Stronger With You Absolutely: tối hơn, Hổ phách rõ hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu hơi ngọt và cay nhẹ, sau đó toffee, Vani và Hổ phách lên rất rõ. Mùi này không lạ, không khó, nhưng dễ làm người khác thấy bạn ấm áp và dễ gần.

### Khi nào nên dùng?
- Hẹn hò, đi chơi tối, thời tiết mát
- Hợp người trẻ hoặc người thích phong cách ngọt nam hiện đại
- Không hợp lắm nếu bạn ghét mùi ngọt hoặc thích kiểu khô, gỗ, lạnh

### Nhận xét của Maison de SON
Đây là một chai dễ được thích ngay, đặc biệt nếu gu của bạn thiên về mùi ấm và dễ tạo thiện cảm. Điểm yếu là hơi ngọt nếu dùng sai thời tiết.`,
    verdict: "Mùi này ngọt, ấm và khá dễ mến. Hợp đi tối, hẹn hò hoặc lúc muốn người khác thấy mình thân thiện hơn. Nếu bạn sợ ngọt hoặc thích mùi lạnh, bản này không phải lựa chọn hợp nhất.",
    verdictShort: "NGỌT ẤM, DỄ GÂY THIỆN CẢM",
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
    baseNotes: [{ name: "Vani" }, { name: "Hổ phách" }, { name: "Đậu tonka" }, { name: "Da lộn" }],
    accords: [
      { name: "Ngọt", value: 100, color: "#FF6D00" },
      { name: "Hổ phách", value: 72, color: "#FF8F00" },
      { name: "Vani", value: 68, color: "#f5deb3" },
      { name: "Gia vị ấm", value: 54, color: "#BF360C" }
    ],
    tags: ["Hẹn hò", "Thu đông", "Nam ngọt", "Cao cấp"],
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
    description: "Đây là kiểu mùi ngọt đậm, ấm và khá nịnh mũi nếu bạn thích mùi gourmand. Hợp trời mát, đi tối hoặc người thích mùi dày. Nếu muốn một chai sạch, thoáng và dễ đi làm mỗi ngày thì nó không phải gu đó.",
    article: `Ở Maison de SON, Khamrah thường được nhắc đến như một chai nước hoa unisex ngọt ấm rất nổi trong tầm giá dễ tiếp cận. Với người thích phong cách đậm, có phần giống món tráng miệng và dễ gây chú ý, bản này của Lattafa khá đáng thử.

### Nguồn gốc và xuất xứ
Khamrah thuộc Lattafa - thương hiệu nước hoa đến từ UAE, nổi tiếng với nhiều mùi đậm, hiệu ứng mạnh và giá dễ tiếp cận hơn các nhà niche châu Âu.

### Ra mắt khi nào?
Khamrah ra mắt năm 2022 và nhanh chóng nổi lên nhờ hiệu ứng truyền miệng rất mạnh trên mạng xã hội và các cộng đồng nước hoa.

### Câu chuyện ra đời
Sức hút của Khamrah đến từ việc nó cho người dùng cảm giác sang, ngọt và đậm ở mức giá mềm hơn nhiều chai cùng mood. Vì vậy nó đặc biệt hợp nhóm thích mùi “thơm ngay, thấy ngay”.

### Dòng Khamrah có những phiên bản nào?
- Khamrah bản gốc
- Khamrah Qahwa với sắc cà phê rõ hơn

### Mùi hương mang lại cảm giác gì?
Bạn sẽ ngửi thấy kiểu ngọt ấm khá dày, có gia vị, vani và cảm giác hơi gourmand. Đây là kiểu mùi nhiều người thấy cuốn nhưng cũng có người thấy hơi nặng nếu dùng sai thời điểm.

### Khi nào nên dùng?
- Tối, tiệc, đi chơi, trời mát
- Hợp người thích mùi ngọt rõ và có độ lưu tốt
- Không hợp lắm nếu bạn chỉ thích kiểu sạch nhẹ, thoáng

### Nhận xét của Maison de SON
Đây là một chai dễ làm người ta nhớ nếu gu của bạn thiên ngọt ấm. Điểm trừ là không hợp số đông trong thời tiết nóng và không phải ai cũng chịu được độ dày của nó.`,
    verdict: "Mùi này ngọt đậm, ấm và khá bắt mũi. Hợp người thích kiểu thơm dày, đi tối và muốn mùi bám rõ. Nếu bạn chuộng mùi nhẹ, sạch và thoáng, bản này sẽ hơi bí.",
    verdictShort: "NGỌT ĐẬM, ẤM VÀ DỄ NHỚ",
    score: { scent: 8.8, uniqueness: 8.2, compliments: 8.9, value: 9.6, total: 8.9 },
    vibes: [
      { label: "Ngọt kiểu tráng miệng", icon: "🍮" },
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
      { name: "Hổ phách", value: 84, color: "#d4a017" },
      { name: "Vani", value: 82, color: "#f5deb3" }
    ],
    tags: ["Gourmand", "Unisex", "Thu đông", "Giá mềm"],
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
    description: "Đây là kiểu mùi sạch, sang và dễ dùng trong rất nhiều hoàn cảnh. Hợp người cần một chai đi làm, gặp khách hoặc dùng hằng ngày mà vẫn lịch sự. Nếu bạn thích mùi thật khác biệt hoặc quá nổi bật, bản này có thể hơi an toàn.",
    article: `Tại Maison de SON, Bleu de Chanel Eau de Parfum là một trong những chai nước hoa nam dễ gợi ý nhất cho người mới lẫn người đã chơi lâu. Lý do rất đơn giản: nó lịch sự, dễ dùng và ít khi làm người đối diện khó chịu. Trong số các chai của Chanel, đây là lựa chọn khá an toàn nhưng vẫn giữ được cảm giác sang.

### Nguồn gốc và xuất xứ
Bleu de Chanel thuộc nhà Chanel - thương hiệu thời trang và làm đẹp cao cấp của Pháp. Dòng Bleu de Chanel được tạo ra để đại diện cho hình ảnh nam tính hiện đại, lịch sự và dễ ứng dụng hơn các dòng cổ điển trước đó của hãng.

### Ra mắt khi nào?
Bleu de Chanel EDT ra mắt trước vào năm 2010 do Jacques Polge sáng tạo. Bản EDP ra mắt năm 2014, do Olivier Polge phát triển theo hướng sâu hơn, ấm hơn và đỡ sắc hơn. Sau đó dòng này có thêm bản Parfum ra mắt năm 2018.

### Câu chuyện ra đời
Bleu de Chanel được xây trên ý tưởng về sự tự do và bản lĩnh nam tính theo ngôn ngữ của Chanel. Nếu bản EDT thiên về cảm giác tươi và sắc, thì bản EDP là điểm cân bằng tốt hơn cho đa số người dùng ngoài đời thật.

### Dòng Bleu de Chanel có những phiên bản nào?
- Bleu de Chanel EDT (2010): tươi hơn, sáng hơn
- Bleu de Chanel EDP (2014): cân bằng và dễ dùng nhất với nhiều người
- Bleu de Chanel Parfum (2018): ấm hơn, dày hơn, thiên tối hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu là citrus sạch và sáng, sau đó đi sang gừng, nhục đậu khấu, gỗ và trầm hương nhẹ. Mùi không quá lạ nhưng cho cảm giác gọn, sang và rất dễ tạo thiện cảm khi gặp trực tiếp.

### Khi nào nên dùng?
- Đi làm, gặp khách, môi trường văn phòng
- Hẹn hò nhẹ nhàng hoặc đi chơi buổi tối không quá formal
- Hợp người muốn một chai đa dụng, ít rủi ro khi mua

### Nhận xét của Maison de SON
Nếu chỉ giữ một chai nam cao cấp để dùng nhiều hoàn cảnh, Bleu de Chanel EDP luôn là ứng viên rất mạnh. Điểm yếu duy nhất là nó an toàn quá, nên ai thích mùi thật cá tính có thể sẽ thấy chưa đủ đã.`,
    verdict: "Mùi này sạch, sang và rất dễ dùng. Hợp người muốn một chai lịch sự để đi làm, gặp gỡ hoặc dùng hằng ngày. Nếu bạn cần mùi thật khác biệt để gây sốc ngay từ đầu, bản này hơi hiền.",
    verdictShort: "SẠCH, SANG, DỄ DÙNG",
    score: { scent: 8.9, uniqueness: 7.4, compliments: 9.1, value: 7.8, total: 8.3 },
    vibes: [
      { label: "Văn phòng", icon: "💼" },
      { label: "Dùng hằng ngày", icon: "🧴" },
      { label: "Thanh lịch", icon: "🕴️" },
      { label: "Đa dụng", icon: "🔄" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 84, summer: 74, fall: 86, winter: 72 },
    dayNight: { day: 84, night: 56 },
    topNotes: [{ name: "Bưởi" }, { name: "Chanh" }, { name: "Bạc hà" }, { name: "Hồng tiêu" }],
    middleNotes: [{ name: "Gừng" }, { name: "Nhục đậu khấu" }, { name: "Hoa nhài" }, { name: "Iso E Super" }],
    baseNotes: [{ name: "Trầm hương" }, { name: "Gỗ đàn hương" }, { name: "Hoắc hương" }, { name: "Labdanum" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Gỗ", value: 95, color: "#8B4513" },
      { name: "Cam chanh", value: 76, color: "#f7c242" },
      { name: "Thơm thảo mộc", value: 72, color: "#2c7a4b" },
      { name: "Gia vị tươi", value: 56, color: "#c58a2b" }
    ],
    tags: ["Văn phòng", "Đa dụng", "Cao cấp", "Nam", "Dễ dùng"],
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
    description: "Đây là kiểu mùi nữ ngọt, có cà phê và khá gợi cảm. Hợp buổi tối, hẹn hò hoặc người thích mùi có dấu ấn rõ. Nếu bạn chỉ thích mùi nhẹ, thoáng và trong trẻo thì bản này hơi đậm.",
    article: `Tại Maison de SON, Black Opium EDP là một trong những chai nước hoa nữ dễ nhận ra nhất nhờ chất cà phê ngọt rất riêng. Với nhiều người thích phong cách nữ hiện đại, đây là mùi rất dễ để lại ấn tượng. Trong các dòng nữ nổi bật của Yves Saint Laurent, nó là cái tên có độ phủ cực mạnh.

### Nguồn gốc và xuất xứ
Black Opium thuộc Yves Saint Laurent - thương hiệu Pháp nổi tiếng với hình ảnh thời trang cao cấp và các dòng nước hoa nữ có tính nhận diện rất mạnh.

### Ra mắt khi nào?
Black Opium EDP ra mắt năm 2014 và nhanh chóng trở thành trụ cột thương mại lớn của YSL ở phân khúc nữ hiện đại.

### Câu chuyện ra đời
Mùi này được tạo ra để mang hình ảnh nữ hiện đại, có chút nổi loạn, cuốn hút và năng lượng hơn những nhóm hoa ngọt truyền thống. Nốt cà phê là điểm khiến nó khác biệt rõ với rất nhiều chai nữ mainstream khác.

### Dòng Black Opium có những phiên bản nào?
- Black Opium EDP bản gốc
- Black Opium Neon
- Black Opium Extreme
- Black Opium Le Parfum

### Mùi hương mang lại cảm giác gì?
Ngay từ đầu đã có cảm giác ngọt và hơi tối. Sau đó cà phê, Vani và hoa trắng đi lên cùng nhau, tạo nên kiểu mùi vừa quyến rũ vừa dễ nhận ra, không quá khó ngửi nhưng có cá tính rõ.

### Khi nào nên dùng?
- Đi tối, đi chơi, hẹn hò
- Hợp người thích mùi nữ hiện đại, hơi sexy một chút
- Không hợp lắm nếu bạn chỉ chuộng mùi mỏng, thanh và thật nhẹ

### Nhận xét của Maison de SON
Đây là một chai nữ rất dễ gây nghiện nếu bạn thích hướng ngọt tối. Điểm yếu là dùng ban ngày trời nóng có thể hơi gắt và hơi bí nếu xịt nhiều.`,
    verdict: "Mùi này ngọt, có cà phê và khá cuốn. Hợp đi tối hoặc lúc muốn tạo dấu ấn rõ hơn bình thường. Nếu bạn thích kiểu nữ nhẹ, thanh và sạch, bản này hơi đậm.",
    verdictShort: "NGỌT, CÀ PHÊ, KHÁ CUỐN",
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
    baseNotes: [{ name: "Vani" }, { name: "Hoắc hương" }, { name: "Gỗ tuyết tùng" }, { name: "Cashmere wood" }],
    accords: [
      { name: "Cà phê", value: 95, color: "#3e1f00" },
      { name: "Ngọt", value: 90, color: "#8B0000" },
      { name: "Vani", value: 72, color: "#f5deb3" },
      { name: "Hoa trắng", value: 68, color: "#e75480" }
    ],
    tags: ["Nữ", "Buổi tối", "Hẹn hò", "Cao cấp"],
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
    description: "Đây là kiểu mùi nam trái cây, khói và khá có khí chất. Hợp người muốn thử một chai nổi tiếng, có tính tham chiếu cao trong thế giới nước hoa. Nếu bạn chỉ cần một chai dễ dùng, ít drama và giá hợp lý, bản này không phải lựa chọn đơn giản nhất.",
    article: `Tại Maison de SON, Creed Aventus thường được xem như một cột mốc trong nhóm nước hoa nam cao cấp. Với nhiều người chơi lâu năm, đây gần như là cái tên phải thử một lần để biết vì sao nó được nhắc nhiều đến vậy. Trong số các chai nổi bật của Creed, Aventus là biểu tượng rõ nhất.

### Nguồn gốc và xuất xứ
Aventus thuộc Creed - nhà nước hoa lâu đời ở phân khúc cao cấp, nổi tiếng với hình ảnh sang trọng và câu chuyện di sản.

### Ra mắt khi nào?
Aventus ra mắt năm 2010 và rất nhanh đã trở thành một trong những chai nam cao cấp nổi tiếng nhất thế giới.

### Câu chuyện ra đời
Điều làm Aventus đặc biệt không chỉ là mùi, mà còn là ảnh hưởng của nó lên thị trường. Nó kéo theo vô số bản lấy cảm hứng, đồng thời cũng tạo ra cả một văn hóa tranh luận về batch, hiệu năng và giá trị thật.

### Dòng Aventus có những phiên bản nào?
- Aventus EDP bản chủ lực
- Aventus Cologne sáng và dễ dùng hơn
- Ngoài ra còn có khác biệt batch giữa nhiều giai đoạn sản xuất

### Mùi hương mang lại cảm giác gì?
Lúc đầu sẽ thấy trái cây sáng, đặc biệt là dứa. Sau đó phần gỗ và khói đi lên khiến mùi có chiều sâu hơn. Tổng thể vừa có sự sang, vừa có chút kiêu và khá dễ làm người khác nhớ.

### Khi nào nên dùng?
- Gặp gỡ, đi chơi, môi trường cần tạo hình ảnh chỉn chu
- Hợp người muốn thử một chai có tiếng trong giới chơi nước hoa
- Không hợp lắm nếu bạn đang tìm lựa chọn tiết kiệm và ít phải nghĩ nhiều

### Nhận xét của Maison de SON
Aventus đáng thử vì nó là một hệ quy chiếu quan trọng. Nhưng cũng cần nói thật: giá cao, batch là chuyện có thật, và không phải ai ngửi xong cũng thấy xứng đáng ngay với số tiền bỏ ra.`,
    verdict: "Mùi này sang, có trái cây và khói rất dễ nhận ra. Hợp người muốn thử một chai có tiếng và có khí chất rõ. Nếu bạn ưu tiên dễ mua, dễ dùng và giá mềm, Aventus không phải đường ngắn nhất.",
    verdictShort: "SANG, CÓ KHÍ CHẤT, DỄ NHỚ",
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
    baseNotes: [{ name: "Xạ hương" }, { name: "Địa y" }, { name: "Long diên hương" }, { name: "Vani" }],
    accords: [
      { name: "Trái cây", value: 88, color: "#f39c12" },
      { name: "Khói", value: 70, color: "#616161" },
      { name: "Gỗ", value: 68, color: "#8B4513" },
      { name: "Tươi", value: 62, color: "#2ecc71" }
    ],
    tags: ["Cao cấp", "Nam", "Biểu tượng", "Chủ lực"],
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
    description: "Đây là kiểu mùi ngọt trong, sang và rất dễ để lại ấn tượng. Hợp người thích mùi nổi tiếng, có độ nhận diện cao và thiên unisex. Nếu bạn không thích kiểu mùi ngọt hơi bay bay hoặc sợ đụng hàng, bạn nên cân nhắc.",
    article: `Tại Maison de SON, Baccarat Rouge 540 là một trong những chai nước hoa unisex được nhắc đến nhiều nhất trong vài năm gần đây. Nó không phải kiểu mùi ai cũng mô tả được bằng lời, nhưng lại là kiểu ngửi một lần rất dễ nhớ. Trong các sáng tạo nổi bật của Maison Francis Kurkdjian, đây là cái tên có sức ảnh hưởng mạnh nhất.

### Nguồn gốc và xuất xứ
Đây là sản phẩm của Maison Francis Kurkdjian - nhà nước hoa Pháp cao cấp nổi tiếng với các mùi hiện đại, tinh chỉnh và có độ nhận diện mạnh.

### Ra mắt khi nào?
Baccarat Rouge 540 ra mắt năm 2015 và nhanh chóng trở thành hiện tượng lớn trong thế giới nước hoa cao cấp.

### Câu chuyện ra đời
Mùi này được tạo ra trong bối cảnh hợp tác với Baccarat để đánh dấu cột mốc của nhà pha lê nổi tiếng. Vì vậy nó không chỉ là một chai thơm, mà còn gắn với một câu chuyện thương hiệu khá đặc biệt.

### Dòng Baccarat Rouge 540 có những phiên bản nào?
- Baccarat Rouge 540 EDP
- Baccarat Rouge 540 Extrait de Parfum đậm và dày hơn

### Mùi hương mang lại cảm giác gì?
Đây là kiểu ngọt trong, hơi airy, có saffron, hổ phách và gỗ. Nó vừa sang vừa lạ với người mới, nhưng với người đã ngửi nhiều thì lại rất dễ nhận ra ngay từ xa.

### Khi nào nên dùng?
- Đi chơi, gặp gỡ, dịp muốn tạo dấu ấn
- Hợp cả nam và nữ nếu thích mùi ngọt sang
- Không hợp lắm nếu bạn sợ đụng hàng hoặc ghét kiểu ngọt bay

### Nhận xét của Maison de SON
BR540 nổi tiếng là có lý do, vì nó thực sự tạo ra hiệu ứng nhận diện rất mạnh. Nhưng cũng cần nói thật: vì nổi quá nên cảm giác độc lạ của nó không còn như thời đầu nữa.`,
    verdict: "Mùi này sang, ngọt và rất dễ bị nhớ. Hợp người thích mùi unisex có độ nhận diện cao và muốn tạo dấu ấn. Nếu bạn ghét đụng hàng hoặc không thích ngọt, bản này có thể không hợp.",
    verdictShort: "SANG, NGỌT VÀ RẤT DỄ NHỚ",
    score: { scent: 9.5, uniqueness: 9.0, compliments: 9.0, value: 7.1, total: 8.7 },
    vibes: [
      { label: "Phi giới tính", icon: "✨" },
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
      { name: "Hổ phách", value: 100, color: "#d4a017" },
      { name: "Ngọt", value: 84, color: "#FF6D00" },
      { name: "Gia vị ấm", value: 58, color: "#b05c00" },
      { name: "Gỗ", value: 55, color: "#614326" }
    ],
    tags: ["Unisex", "Cao cấp", "Hổ phách", "Biểu tượng"],
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
    description: "Đây là kiểu mùi ấm, tối và hơi sang theo kiểu đi tối. Hợp người muốn mùi nam khác với nhóm sạch sáng kiểu văn phòng. Nếu bạn cần một chai nhẹ, sạch và dễ dùng ban ngày thì bản này hơi nặng.",
    article: `Tại Maison de SON, Tom Ford Noir Extreme là một trong những chai nước hoa nam hợp với người thích phong cách buổi tối rõ ràng. Nó không phải kiểu dễ dùng nhất, nhưng lại có nét riêng hơn nhiều chai nam cao cấp an toàn. Trong nhóm mùi tối của Tom Ford, đây là cái tên khá dễ tiếp cận.

### Nguồn gốc và xuất xứ
Noir Extreme thuộc Tom Ford - thương hiệu Mỹ nổi tiếng với hình ảnh sang, gợi cảm và có hơi hướng đêm tối ở nhiều dòng nước hoa.

### Ra mắt khi nào?
Noir Extreme EDP ra mắt năm 2015 và nhanh chóng trở thành một trong những chai tối nổi bật nhất ở nhóm nước hoa nam cao cấp.

### Câu chuyện ra đời
Dòng Noir vốn đã mang màu sắc tối và chỉn chu, nhưng Noir Extreme đi xa hơn bằng cách thêm cảm giác hưởng thụ, ấm, hơi ngọt và có phần ăn chơi hơn. Đây là kiểu mùi dành cho người muốn bước ra khỏi vùng an toàn của nhóm sạch nhẹ.

### Dòng Noir Extreme có những phiên bản nào?
- Noir Extreme EDP
- Noir Extreme Parfum với cảm giác đậm hơn và tối hơn

### Mùi hương mang lại cảm giác gì?
Mùi này có gia vị, hổ phách, vani và cảm giác ấm khá rõ. Nó không quá ngọt kiểu kẹo, nhưng vẫn đủ dày để tạo không khí buổi tối, hơi sang và hơi bí ẩn.

### Khi nào nên dùng?
- Đi tối, sự kiện, hẹn hò hoặc trời mát
- Hợp người thích mùi sang nhưng không quá đại trà
- Không hợp lắm nếu bạn cần chai đi làm giữa trưa nóng

### Nhận xét của Maison de SON
Noir Extreme là kiểu mùi dùng đúng lúc thì rất đẹp. Điểm yếu là không linh hoạt bằng các chai đa dụng, nên mua nó là phải xác định rõ nhu cầu.`,
    verdict: "Mùi này ấm, tối và khá sang. Hợp đi tối hoặc lúc muốn mùi nam có không khí hơn bình thường. Nếu bạn chỉ cần một chai dễ xịt mọi nơi, bản này hơi kén hoàn cảnh.",
    verdictShort: "ẤM, TỐI VÀ KHÁ SANG",
    score: { scent: 8.9, uniqueness: 8.2, compliments: 8.9, value: 7.6, total: 8.4 },
    vibes: [
      { label: "Buổi tối", icon: "🌙" },
      { label: "Sự kiện", icon: "🎭" },
      { label: "Sang trọng", icon: "✨" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 48, summer: 22, fall: 90, winter: 100 },
    dayNight: { day: 28, night: 100 },
    topNotes: [{ name: "Bạch đậu khấu" }, { name: "Nhục đậu khấu" }, { name: "Nghệ tây" }, { name: "Quýt" }],
    middleNotes: [{ name: "Kulfi" }, { name: "Hoa hồng" }, { name: "Hoa nhài" }, { name: "Hoa cam" }],
    baseNotes: [{ name: "Vani" }, { name: "Hổ phách" }, { name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Gia vị ấm", value: 92, color: "#e67e22" },
      { name: "Hổ phách", value: 72, color: "#c57b21" },
      { name: "Ngọt", value: 68, color: "#8B0000" },
      { name: "Gỗ", value: 60, color: "#8B4513" }
    ],
    tags: ["Tom Ford", "Buổi tối", "Thu đông", "Cao cấp"],
    sizes: ["5ml Chiết", "10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 4000000,
    shopeeOffers: []
  },
  {
    id: "dior-sauvage-edp",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Sauvage",
    subName: "Eau de Parfum",
    perfumer: "François Demachy",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Dior Sauvage EDP đang được xác minh lại để tránh nhầm EDT và Elixir", verified: false }
    ],
    description: "Đây là kiểu mùi nam sạch, cay nhẹ và rất dễ dùng trong nhiều hoàn cảnh. Hợp người cần một chai đa dụng, lịch sự và dễ tạo thiện cảm. Nếu bạn thích mùi thật độc lạ hoặc quá dày, bản này sẽ hơi an toàn.",
    article: `Tại Maison de SON, Sauvage Eau de Parfum là một trong những chai nước hoa nam dễ gợi ý nhất cho người mới. Bản này của Dior giữ được sự nam tính hiện đại nhưng đỡ sắc và đỡ gắt hơn bản EDT, nên hợp số đông hơn khi dùng ngoài đời thật.

### Nguồn gốc và xuất xứ
Sauvage là dòng nước hoa nam chủ lực của Dior, thương hiệu cao cấp đến từ Pháp. Đây là một trong những line nam nổi tiếng nhất của hãng trong nhiều năm gần đây.

### Ra mắt khi nào?
Sauvage Eau de Parfum ra mắt năm 2018, sau thành công rất lớn của bản EDT. Phiên bản này được phát triển theo hướng sâu hơn, ấm hơn và dễ dùng buổi tối hơn.

### Câu chuyện ra đời
Sau khi bản EDT quá phổ biến, Dior cần một phiên bản giữ được tinh thần Sauvage nhưng bớt chói và trưởng thành hơn. Bản EDP vì thế trở thành lựa chọn cân bằng cho nhiều người.

### Có những phiên bản nào trong dòng Sauvage?
- Sauvage EDT: sáng và sắc hơn
- Sauvage EDP: cân bằng, dễ dùng, phổ thông nhất
- Sauvage Parfum: ấm và mượt hơn
- Sauvage Elixir: đậm và tối hơn rõ

### Mùi hương mang lại cảm giác gì?
Mở đầu là cam bergamot tươi, sau đó chuyển sang tiêu, lavender và chút ấm của vanilla. Tổng thể cho cảm giác sạch, nam tính và dễ khiến người khác thấy bạn gọn gàng, chỉn chu.

### Khi nào nên dùng?
- Đi làm, đi chơi, gặp gỡ hằng ngày
- Hợp người thích mùi nam hiện đại, dễ dùng
- Không hợp lắm nếu bạn muốn mùi thật khác biệt hoặc quá đậm

### Nhận xét của Maison de SON
Nếu cần một chai nước hoa nam an toàn nhưng vẫn đủ lịch sự và cuốn, Sauvage EDP là lựa chọn rất mạnh. Điểm yếu là quá nổi nên không hợp người sợ đụng hàng.`,
    verdict: "Mùi này sạch, nam tính và rất dễ dùng. Hợp người cần một chai đa dụng để đi làm, đi chơi và gặp gỡ hằng ngày. Nếu bạn muốn mùi thật lạ hoặc thật tối, bản này hơi an toàn.",
    verdictShort: "SẠCH, NAM TÍNH, ĐA DỤNG",
    score: { scent: 8.9, uniqueness: 7.6, compliments: 9.3, value: 8.7, total: 8.6 },
    vibes: [
      { label: "Đa dụng", icon: "🔄" },
      { label: "Văn phòng", icon: "💼" },
      { label: "Nam tính", icon: "🖤" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 78, summer: 70, fall: 84, winter: 75 },
    dayNight: { day: 86, night: 62 },
    topNotes: [{ name: "Cam bergamot" }],
    middleNotes: [{ name: "Lavender" }, { name: "Tiêu Tứ Xuyên" }, { name: "Hồi" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Ambroxan" }, { name: "Nhục đậu khấu" }],
    accords: [
      { name: "Thơm thảo mộc", value: 90, color: "#2c7a4b" },
      { name: "Gia vị tươi", value: 70, color: "#c58a2b" },
      { name: "Hổ phách", value: 58, color: "#d4a017" },
      { name: "Gỗ", value: 46, color: "#8B4513" }
    ],
    tags: ["Nam", "Đa dụng", "Văn phòng", "Cao cấp"],
    sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
    basePrice: 3200000,
    shopeeOffers: []
  },
  {
    id: "ysl-y-edp",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Y",
    subName: "Eau de Parfum",
    perfumer: "Dominique Ropion",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh YSL Y EDP đang được xác minh lại để tránh nhầm EDT và Le Parfum", verified: false }
    ],
    description: "Đây là kiểu mùi nam tươi, ngọt nhẹ và rất dễ gần. Hợp người trẻ hoặc người thích phong cách hiện đại, gọn gàng. Nếu bạn ghét ambroxan hoặc không thích mùi phổ thông dễ khen, bản này có thể hơi quen.",
    article: `Tại Maison de SON, Y Eau de Parfum là một trong những chai nước hoa nam hiện đại dễ tiếp cận nhất của Yves Saint Laurent. Nó vừa sáng, vừa sạch, vừa có độ ngọt nhẹ đủ để tạo thiện cảm mà không quá nặng nề.

### Nguồn gốc và xuất xứ
Y là dòng nước hoa nam nổi bật của Yves Saint Laurent, thương hiệu Pháp nổi tiếng ở nhóm mùi hiện đại và dễ dùng. Dòng này hướng tới hình ảnh trẻ, năng động và gọn gàng.

### Ra mắt khi nào?
Y Eau de Parfum ra mắt năm 2018. So với bản EDT, phiên bản này đậm hơn, giữ mùi tốt hơn và có cảm giác hoàn thiện hơn.

### Câu chuyện ra đời
Y được tạo ra cho nhóm nam trẻ thích sự sạch sẽ, chỉn chu nhưng vẫn muốn có chút cá tính. Bản EDP giúp công thức trưởng thành hơn và dùng được nhiều dịp hơn.

### Có những phiên bản nào trong dòng Y?
- Y EDT: nhẹ và sáng hơn
- Y EDP: cân bằng nhất với đa số người dùng
- Y Le Parfum: đậm và tối hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu là táo, cam bergamot và gừng cho cảm giác tươi. Sau đó sage, ambroxan và gỗ đi lên, tạo ra tổng thể sạch, trẻ và rất dễ được thích.

### Khi nào nên dùng?
- Đi học, đi làm, đi chơi hằng ngày
- Hợp người thích phong cách trẻ, sáng và gọn gàng
- Không hợp lắm nếu bạn ghét mùi hiện đại kiểu ambroxan

### Nhận xét của Maison de SON
Y EDP là chai dễ gợi ý cho người muốn một mùi nam thời nay, dễ dùng và dễ được khen. Điểm yếu là không quá khác biệt nếu bạn đã thử nhiều chai cùng nhóm.`,
    verdict: "Mùi này tươi, sạch và dễ gần. Hợp người cần một chai trẻ trung để dùng hằng ngày mà không phải suy nghĩ nhiều. Nếu bạn ghét kiểu mùi hiện đại dễ khen, bản này sẽ hơi quen.",
    verdictShort: "TƯƠI, SẠCH, DỄ GẦN",
    score: { scent: 8.7, uniqueness: 7.5, compliments: 9.1, value: 8.5, total: 8.4 },
    vibes: [
      { label: "Trẻ trung", icon: "⚡" },
      { label: "Hằng ngày", icon: "🧴" },
      { label: "Dễ khen", icon: "👍" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 82, summer: 68, fall: 82, winter: 70 },
    dayNight: { day: 88, night: 55 },
    topNotes: [{ name: "Táo" }, { name: "Cam bergamot" }, { name: "Gừng" }],
    middleNotes: [{ name: "Xô thơm" }, { name: "Bách xù" }, { name: "Phong lữ" }],
    baseNotes: [{ name: "Ambroxan" }, { name: "Gỗ tuyết tùng" }, { name: "Đậu tonka" }],
    accords: [
      { name: "Thơm thảo mộc", value: 88, color: "#2c7a4b" },
      { name: "Tươi", value: 76, color: "#2ecc71" },
      { name: "Ngọt", value: 42, color: "#8B0000" },
      { name: "Gỗ", value: 40, color: "#8B4513" }
    ],
    tags: ["Nam", "Trẻ trung", "Hằng ngày", "Cao cấp"],
    sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
    basePrice: 2850000,
    shopeeOffers: []
  },
  {
    id: "versace-eros-edp",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Eros",
    subName: "Eau de Parfum",
    perfumer: "Olivier Pescheux",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Versace Eros EDP đang được xác minh lại để tránh nhầm EDT và Parfum", verified: false }
    ],
    description: "Đây là kiểu mùi nam ngọt mát, nổi bật và khá dễ gây chú ý. Hợp đi tối, đi chơi hoặc người thích mùi trẻ trung có lực. Nếu bạn thích kiểu kín đáo và nhẹ nhàng, bản này sẽ hơi ồn.",
    article: `Tại Maison de SON, Eros Eau de Parfum là một trong những chai nước hoa nam nổi bật nhất của Versace cho nhóm thích sự trẻ trung và gây chú ý. Bản này giữ tinh thần sexy, ngọt mát của Eros nhưng gọn và đỡ chói hơn EDT.

### Nguồn gốc và xuất xứ
Eros thuộc Versace, thương hiệu Ý nổi tiếng với phong cách thời trang và nước hoa thiên về sự nổi bật, quyến rũ. Đây là line nam rất phổ biến của hãng.

### Ra mắt khi nào?
Eros Eau de Parfum ra mắt năm 2020. Phiên bản này được làm để cân bằng giữa độ bắt mũi và cảm giác sử dụng thực tế.

### Câu chuyện ra đời
Eros vốn nổi tiếng từ lâu nhờ phong cách ngọt mát, trẻ và rất dễ gây chú ý. Bản EDP giúp công thức mượt hơn để dùng dễ chịu hơn so với EDT.

### Có những phiên bản nào trong dòng Eros?
- Eros EDT: sáng và ồn hơn
- Eros EDP: cân bằng hơn, dễ dùng hơn
- Eros Parfum: dày và tối hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu là bạc hà, táo và chanh. Sau đó đậu tonka, vanilla và chút gỗ tạo nên cảm giác ngọt mát, trẻ và rất dễ làm người khác chú ý.

### Khi nào nên dùng?
- Đi tối, đi bar, hẹn hò hoặc đi chơi
- Hợp người trẻ thích mùi hiện diện rõ
- Không hợp lắm nếu bạn cần mùi kín đáo cho văn phòng nhỏ

### Nhận xét của Maison de SON
Eros EDP hợp với người muốn một chai vui, nổi và dễ để lại ấn tượng. Điểm yếu là nếu xịt quá tay trong nơi kín, nó dễ trở nên hơi áp lực.`,
    verdict: "Mùi này ngọt mát, trẻ và khá nổi. Hợp đi tối hoặc lúc muốn người khác chú ý đến mình hơn. Nếu bạn cần một chai hiền và kín đáo, bản này hơi ồn.",
    verdictShort: "NGỌT MÁT, TRẺ, KHÁ NỔI",
    score: { scent: 8.6, uniqueness: 7.8, compliments: 9.0, value: 8.8, total: 8.5 },
    vibes: [
      { label: "Đi chơi", icon: "🎉" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Trẻ trung", icon: "⚡" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 65, summer: 45, fall: 84, winter: 82 },
    dayNight: { day: 45, night: 92 },
    topNotes: [{ name: "Bạc hà" }, { name: "Táo" }, { name: "Chanh" }],
    middleNotes: [{ name: "Xô thơm" }, { name: "Phong lữ" }, { name: "Ambroxan" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Đậu tonka" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Ngọt", value: 78, color: "#8B0000" },
      { name: "Tươi", value: 62, color: "#2ecc71" },
      { name: "Thơm thảo mộc", value: 52, color: "#2c7a4b" },
      { name: "Gỗ", value: 38, color: "#8B4513" }
    ],
    tags: ["Nam", "Buổi tối", "Trẻ trung", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2450000,
    shopeeOffers: []
  },
  {
    id: "acqua-di-gio-profondo",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Acqua di Giò Profondo",
    subName: "Eau de Parfum",
    perfumer: "Alberto Morillas",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Acqua di Giò Profondo đang được xác minh lại để tránh nhầm các bản Acqua di Giò khác", verified: false }
    ],
    description: "Đây là kiểu mùi nam biển, sạch và hiện đại. Hợp người cần cảm giác mát, gọn và dễ dùng trong thời tiết nóng. Nếu bạn thích mùi ngọt ấm hoặc quá dày, bản này sẽ hơi nhẹ nhàng.",
    article: `Tại Maison de SON, Acqua di Giò Profondo là một trong những chai nước hoa nam mùa nóng dễ gợi ý nhất. Bản này của Giorgio Armani giữ tinh thần biển sạch quen thuộc nhưng hiện đại hơn và nam tính hơn bản cổ điển.

### Nguồn gốc và xuất xứ
Acqua di Giò là dòng nam kinh điển của Giorgio Armani, thương hiệu Ý nổi tiếng với phong cách thanh lịch và dễ dùng. Đây là line có sức sống rất dài trên thị trường.

### Ra mắt khi nào?
Profondo ra mắt năm 2020 như một nhánh mới hiện đại hơn trong gia đình Acqua di Giò. Bản này nhấn mạnh cảm giác biển sâu, sạch và gọn.

### Câu chuyện ra đời
Sau nhiều năm, Armani cần một phiên bản biển hợp thị hiếu hiện đại hơn nhưng vẫn giữ DNA dễ dùng của Acqua di Giò. Profondo ra đời để làm vai trò đó.

### Có những phiên bản nào trong dòng Acqua di Giò?
- Acqua di Giò EDT: kinh điển, tươi sáng
- Profumo: tối và có khói hơn
- Profondo: sạch biển và hiện đại hơn
- Parfum: cân bằng giữa hiện đại và độ dày

### Mùi hương mang lại cảm giác gì?
Mùi mở ra rất mát với cam bergamot và marine notes, sau đó rosemary, lavender và khoáng tạo nên cảm giác sạch, biển và rất hợp khí hậu nóng.

### Khi nào nên dùng?
- Đi làm, đi học, ban ngày, mùa nóng
- Hợp người thích mùi sạch biển hiện đại
- Không hợp lắm nếu bạn thích mùi ngọt hoặc ấm dày

### Nhận xét của Maison de SON
Profondo là kiểu chai dễ dùng thật sự trong khí hậu Việt Nam. Điểm yếu là nó thiên an toàn nên không hợp người thích mùi gây sốc hoặc quá khác biệt.`,
    verdict: "Mùi này mát, sạch và rất dễ dùng trời nóng. Hợp người cần một chai gọn gàng để đi làm hoặc dùng hằng ngày. Nếu bạn thích mùi ngọt ấm, bản này sẽ hơi hiền.",
    verdictShort: "MÁT, SẠCH, HỢP TRỜI NÓNG",
    score: { scent: 8.7, uniqueness: 7.4, compliments: 8.8, value: 8.3, total: 8.3 },
    vibes: [
      { label: "Mùa hè", icon: "☀️" },
      { label: "Biển", icon: "🌊" },
      { label: "Văn phòng", icon: "💼" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 82, summer: 96, fall: 58, winter: 36 },
    dayNight: { day: 94, night: 35 },
    topNotes: [{ name: "Cam bergamot" }, { name: "Quýt xanh" }],
    middleNotes: [{ name: "Lavender" }, { name: "Rosemary" }, { name: "Cypress" }],
    baseNotes: [{ name: "Khoáng" }, { name: "Xạ hương" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Biển", value: 90, color: "#3498db" },
      { name: "Tươi", value: 82, color: "#2ecc71" },
      { name: "Thơm thảo mộc", value: 48, color: "#2c7a4b" },
      { name: "Khoáng", value: 42, color: "#95a5a6" }
    ],
    tags: ["Nam", "Mùa hè", "Văn phòng", "Cao cấp"],
    sizes: ["10ml Chiết", "40ml Fullbox", "75ml Fullbox", "125ml Fullbox"],
    basePrice: 2700000,
    shopeeOffers: []
  },
  {
    id: "afnan-9pm",
    brandSlug: "afnan",
    brand: "AFNAN",
    name: "9PM",
    subName: "Eau de Parfum",
    perfumer: "In-house",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Afnan 9PM đang được xác minh lại để tránh nhầm phiên bản đóng gói", verified: false }
    ],
    description: "Đây là kiểu mùi nam ngọt, vui và rất dễ gây chú ý ở tầm giá dễ tiếp cận. Hợp đi tối, đi chơi hoặc người trẻ thích mùi nổi. Nếu bạn ghét mùi ngọt đậm, bản này có thể hơi nhiều.",
    article: `Tại Maison de SON, 9PM là một trong những chai nước hoa nam giá mềm nổi tiếng nhất ở nhóm đi tối. Nó được nhắc nhiều vì hiệu ứng tốt, dễ gây ấn tượng và phù hợp với người thích phong cách trẻ.

### Nguồn gốc và xuất xứ
9PM thuộc Afnan, thương hiệu nước hoa đến từ UAE nổi tiếng ở nhóm mùi hiệu ứng mạnh và giá dễ tiếp cận. Đây là một trong những chai nổi nhất của hãng.

### Ra mắt khi nào?
9PM ra mắt năm 2020 và nhanh chóng phổ biến trong cộng đồng nước hoa nhờ độ bám tốt và cảm giác vui, ngọt, dễ gây chú ý.

### Câu chuyện ra đời
Dòng mùi kiểu ngọt nam trẻ vốn rất được ưa chuộng khi đi tối. 9PM đánh vào đúng nhu cầu đó với mức giá dễ vào hơn nhiều lựa chọn cao cấp.

### Có điểm gì nổi bật?
- Dễ gây chú ý khi đi chơi
- Tầm giá dễ tiếp cận
- Hợp người trẻ thích mùi vui và ngọt

### Mùi hương mang lại cảm giác gì?
Bạn sẽ thấy táo, quế, vanilla và đậu tonka nổi lên khá rõ. Tổng thể ngọt, ấm, trẻ và có xu hướng làm người xung quanh dễ nhận ra.

### Khi nào nên dùng?
- Đi tối, hẹn hò, tụ tập bạn bè
- Hợp người trẻ thích mùi ngọt dễ nổi
- Không hợp lắm nếu bạn cần một chai thật lịch sự cho văn phòng

### Nhận xét của Maison de SON
9PM hấp dẫn ở giá trị trên tiền bỏ ra. Điểm trừ là nó không phải kiểu mùi tinh tế hay kín đáo, nên cần dùng đúng hoàn cảnh.`,
    verdict: "Mùi này ngọt, trẻ và khá nổi. Hợp người muốn một chai đi tối dễ gây chú ý mà giá vẫn mềm. Nếu bạn ghét mùi ngọt đậm, bản này hơi nhiều.",
    verdictShort: "NGỌT, TRẺ, GIÁ MỀM",
    score: { scent: 8.3, uniqueness: 7.2, compliments: 8.8, value: 9.4, total: 8.4 },
    vibes: [
      { label: "Giá mềm", icon: "💸" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Trẻ trung", icon: "⚡" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 52, summer: 22, fall: 88, winter: 92 },
    dayNight: { day: 28, night: 94 },
    topNotes: [{ name: "Táo" }, { name: "Quế" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Hoa cam" }, { name: "Oải hương" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Đậu tonka" }, { name: "Hổ phách" }],
    accords: [
      { name: "Ngọt", value: 88, color: "#8B0000" },
      { name: "Gia vị ấm", value: 58, color: "#e67e22" },
      { name: "Hổ phách", value: 46, color: "#d4a017" },
      { name: "Trái cây", value: 36, color: "#f39c12" }
    ],
    tags: ["Nam", "Buổi tối", "Giá mềm", "Trẻ trung"],
    sizes: ["10ml Chiết", "100ml Fullbox"],
    basePrice: 950000,
    shopeeOffers: []
  },
  {
    id: "jpg-le-male-le-parfum",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Le Male Le Parfum",
    subName: "Parfum",
    perfumer: "Quentin Bisch & Natalie Gracia-Cetto",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Le Male Le Parfum đang được xác minh lại để tránh nhầm Le Beau và Ultra Male", verified: false }
    ],
    description: "Đây là kiểu mùi nam ngọt ấm, có bạch đậu khấu và vanilla rất dễ gây thiện cảm. Hợp đi tối, hẹn hò và trời mát. Nếu bạn ghét mùi ngọt hoặc cần mùi thật thoáng, bản này sẽ hơi dày.",
    article: `Tại Maison de SON, Le Male Le Parfum là một trong những chai nước hoa nam đi tối dễ được thích nhất của Jean Paul Gaultier. Nó giữ chất quyến rũ quen thuộc của dòng Le Male nhưng gọn và sang hơn nhiều bản ngọt trẻ khác.

### Nguồn gốc và xuất xứ
Le Male là dòng nước hoa nam nổi tiếng của Jean Paul Gaultier, thương hiệu Pháp có cá tính mạnh ở cả thời trang lẫn nước hoa. Đây là một trong những line trụ cột của hãng.

### Ra mắt khi nào?
Le Male Le Parfum ra mắt năm 2020 và nhanh chóng trở thành bản được nhiều người đánh giá cao nhất trong dòng hiện đại.

### Câu chuyện ra đời
Sau nhiều phiên bản nổi bật, hãng tạo ra Le Male Le Parfum để mang đến lựa chọn trưởng thành hơn, dày hơn và hợp đi tối hơn cho người thích phong cách quyến rũ.

### Có những phiên bản nào trong dòng Le Male?
- Le Male EDT: cổ điển hơn
- Ultra Male: ngọt trẻ và nổi hơn
- Le Male Le Parfum: cân bằng giữa sang và dễ dùng đi tối

### Mùi hương mang lại cảm giác gì?
Bạch đậu khấu mở đầu rất rõ, sau đó lavender, iris và vanilla lên tạo nên cảm giác ngọt ấm, sang và khá ôm người.

### Khi nào nên dùng?
- Hẹn hò, đi tối, trời mát
- Hợp người thích mùi ngọt nam nhưng không quá trẻ con
- Không hợp lắm nếu bạn cần một chai thật thoáng cho ban ngày nóng

### Nhận xét của Maison de SON
Le Male Le Parfum là lựa chọn sáng giá cho người muốn mùi đi tối vừa cuốn vừa dễ dùng. Điểm yếu là vào ngày quá nóng nó có thể hơi dày.`,
    verdict: "Mùi này ngọt ấm, sang và khá dễ mến. Hợp đi tối, hẹn hò hoặc lúc muốn tạo cảm giác chỉn chu hơn bình thường. Nếu bạn cần mùi thoáng nhẹ, bản này hơi dày.",
    verdictShort: "NGỌT ẤM, SANG, DỄ MẾN",
    score: { scent: 8.9, uniqueness: 8.0, compliments: 9.1, value: 8.6, total: 8.7 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 52, summer: 20, fall: 90, winter: 96 },
    dayNight: { day: 32, night: 96 },
    topNotes: [{ name: "Bạch đậu khấu" }],
    middleNotes: [{ name: "Lavender" }, { name: "Iris" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Gỗ" }, { name: "Hương phương Đông" }],
    accords: [
      { name: "Ngọt", value: 74, color: "#8B0000" },
      { name: "Gia vị ấm", value: 66, color: "#e67e22" },
      { name: "Phấn", value: 34, color: "#d7bde2" },
      { name: "Gỗ", value: 30, color: "#8B4513" }
    ],
    tags: ["Nam", "Hẹn hò", "Thu đông", "Cao cấp"],
    sizes: ["10ml Chiết", "75ml Fullbox", "125ml Fullbox"],
    basePrice: 2900000,
    shopeeOffers: []
  },
  {
    id: "jpg-ultra-male",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Ultra Male",
    subName: "Eau de Toilette Intense",
    perfumer: "Francis Kurkdjian",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Ultra Male đang được xác minh lại để tránh nhầm Le Male khác phiên bản", verified: false }
    ],
    description: "Đây là kiểu mùi nam ngọt trái cây, vui và khá bốc. Hợp đi tối, đi chơi hoặc người trẻ thích mùi nổi. Nếu bạn thích mùi nghiêm túc và kín đáo, bản này không phải lựa chọn hợp nhất.",
    article: `Tại Maison de SON, Ultra Male là một trong những chai nước hoa nam nổi tiếng nhất ở nhóm ngọt trẻ đi tối. Nó được yêu thích vì vừa vui, vừa bắt mũi, vừa dễ tạo cảm giác năng động và nổi bật.

### Nguồn gốc và xuất xứ
Ultra Male thuộc gia đình Le Male của Jean Paul Gaultier, thương hiệu Pháp nổi tiếng với những mùi có cá tính rõ và rất dễ nhớ.

### Ra mắt khi nào?
Ultra Male ra mắt năm 2015 và nhanh chóng trở thành cái tên quen thuộc với người thích mùi nam ngọt đi tối.

### Câu chuyện ra đời
Nếu Le Male EDT thiên cổ điển hơn, Ultra Male được tạo ra cho nhóm thích phong cách trẻ, nổi và có độ vui nhiều hơn. Đây là phiên bản rất dễ nhận ra của cả line.

### Có những phiên bản nào gần nó?
- Le Male EDT: cổ điển hơn
- Ultra Male: ngọt trái cây và trẻ hơn
- Le Male Le Parfum: sang và dày hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu là lê, bergamot và chút ngọt trái cây. Sau đó quế, lavender, vanilla đi lên làm tổng thể vừa ngọt vừa nổi và rất dễ gây chú ý.

### Khi nào nên dùng?
- Đi tối, tụ tập, tiệc tùng
- Hợp người trẻ thích mùi ngọt, vui, nổi
- Không hợp lắm nếu bạn cần mùi kín đáo cho văn phòng nhỏ

### Nhận xét của Maison de SON
Ultra Male hấp dẫn vì hiệu ứng mạnh và dễ vui. Điểm yếu là nó không hợp tất cả hoàn cảnh, nhất là trời nóng và nơi kín.`,
    verdict: "Mùi này ngọt, vui và khá bốc. Hợp đi tối hoặc lúc muốn mùi nam nổi hơn bình thường. Nếu bạn thích sự kín đáo, bản này hơi ồn.",
    verdictShort: "NGỌT, VUI, KHÁ BỐC",
    score: { scent: 8.7, uniqueness: 8.0, compliments: 9.0, value: 8.8, total: 8.6 },
    vibes: [
      { label: "Tiệc tùng", icon: "🎉" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Trẻ trung", icon: "⚡" }
    ],
    longevity: 9,
    sillage: 9,
    seasons: { spring: 48, summer: 18, fall: 88, winter: 94 },
    dayNight: { day: 20, night: 98 },
    topNotes: [{ name: "Lê" }, { name: "Cam bergamot" }, { name: "Chanh" }],
    middleNotes: [{ name: "Quế" }, { name: "Lavender" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Hổ phách" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Ngọt", value: 90, color: "#8B0000" },
      { name: "Trái cây", value: 56, color: "#f39c12" },
      { name: "Gia vị ấm", value: 44, color: "#e67e22" },
      { name: "Hổ phách", value: 36, color: "#d4a017" }
    ],
    tags: ["Nam", "Buổi tối", "Trẻ trung", "Cao cấp"],
    sizes: ["10ml Chiết", "75ml Fullbox", "125ml Fullbox"],
    basePrice: 2650000,
    shopeeOffers: []
  },
  {
    id: "montblanc-explorer",
    brandSlug: "montblanc",
    brand: "MONTBLANC",
    name: "Explorer",
    subName: "Eau de Parfum",
    perfumer: "Jordi Fernández, Antoine Maisondieu & Olivier Pescheux",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Montblanc Explorer đang được xác minh lại để tránh nhầm bottle mới/cũ", verified: false }
    ],
    description: "Đây là kiểu mùi nam tươi, gỗ và khá dễ dùng. Hợp người cần một chai chỉnh chu, nam tính nhẹ và giá dễ vào hơn nhóm cao cấp. Nếu bạn cần mùi thật khác biệt, bản này hơi an toàn.",
    article: `Tại Maison de SON, Montblanc Explorer là một trong những chai nước hoa nam dễ gợi ý ở tầm giá trung cao. Nó sạch, gỗ, dễ dùng và hợp với người muốn một hình ảnh nam tính gọn gàng.

### Nguồn gốc và xuất xứ
Explorer thuộc Montblanc, thương hiệu nổi tiếng với hình ảnh lịch sự và nam tính. Dòng này được biết đến rộng rãi vì dễ tiếp cận và dễ dùng.

### Ra mắt khi nào?
Explorer ra mắt năm 2019. Đây là một trong những chai giúp Montblanc hiện diện mạnh hơn ở nhóm nam hiện đại.

### Câu chuyện ra đời
Mùi này được phát triển theo hướng an toàn, dễ dùng và có tính ứng dụng cao cho số đông. Nó đánh vào nhu cầu có một chai nam gọn gàng mà không quá tốn kém.

### Mùi hương mang lại cảm giác gì?
Mở đầu tươi với bergamot, sau đó hoắc hương, vetiver và ambroxan tạo cảm giác gỗ sạch, nam tính và khá chỉn chu.

### Khi nào nên dùng?
- Đi làm, đi gặp gỡ, dùng hằng ngày
- Hợp người thích mùi nam sạch gỗ hiện đại
- Không hợp lắm nếu bạn cần mùi thật độc lạ

### Nhận xét của Maison de SON
Explorer đáng tiền ở chỗ dễ dùng và không kén hoàn cảnh. Điểm yếu là cá tính không quá mạnh.`,
    verdict: "Mùi này gỗ sạch, nam tính và dễ dùng. Hợp người muốn một chai gọn gàng cho nhiều hoàn cảnh mà giá không quá nặng. Nếu bạn thích sự khác biệt lớn, bản này hơi an toàn.",
    verdictShort: "GỖ SẠCH, NAM TÍNH, DỄ DÙNG",
    score: { scent: 8.3, uniqueness: 7.2, compliments: 8.6, value: 8.9, total: 8.3 },
    vibes: [
      { label: "Văn phòng", icon: "💼" },
      { label: "Hằng ngày", icon: "🧴" },
      { label: "Nam tính", icon: "🖤" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 80, summer: 72, fall: 76, winter: 56 },
    dayNight: { day: 90, night: 45 },
    topNotes: [{ name: "Cam bergamot" }, { name: "Tiêu hồng" }],
    middleNotes: [{ name: "Vetiver" }, { name: "Da thuộc" }],
    baseNotes: [{ name: "Ambroxan" }, { name: "Hoắc hương" }, { name: "Ca cao" }],
    accords: [
      { name: "Gỗ", value: 72, color: "#8B4513" },
      { name: "Tươi", value: 58, color: "#2ecc71" },
      { name: "Da thuộc", value: 26, color: "#6e3b1f" },
      { name: "Thơm thảo mộc", value: 20, color: "#2c7a4b" }
    ],
    tags: ["Nam", "Văn phòng", "Hằng ngày", "Giá trị tốt"],
    sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
    basePrice: 1650000,
    shopeeOffers: []
  },
  {
    id: "prada-lhomme",
    brandSlug: "prada",
    brand: "PRADA",
    name: "L'Homme",
    subName: "Eau de Toilette",
    perfumer: "Daniela Andrier",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Prada L'Homme đang được xác minh lại để tránh nhầm Intense và L'Eau", verified: false }
    ],
    description: "Đây là kiểu mùi nam sạch, phấn và rất chỉnh chu. Hợp môi trường văn phòng, gặp khách hoặc người thích hình ảnh lịch sự. Nếu bạn thích mùi dày, tối hoặc nổi bật mạnh, bản này sẽ hơi hiền.",
    article: `Tại Maison de SON, Prada L'Homme là một trong những chai nước hoa nam văn phòng đẹp nhất nếu bạn thích cảm giác sạch và chỉn chu. Nó không quá ồn ào nhưng cho cảm giác tử tế và gọn gàng rất rõ.

### Nguồn gốc và xuất xứ
Prada L'Homme thuộc Prada, thương hiệu Ý cao cấp nổi tiếng với phong cách tối giản và thanh lịch. Dòng này phản ánh rất rõ tinh thần đó.

### Ra mắt khi nào?
Prada L'Homme ra mắt năm 2016 và nhanh chóng được nhiều người xem là lựa chọn văn phòng rất mạnh.

### Câu chuyện ra đời
Mùi này được tạo theo hướng lịch sự, sạch và có chút phấn sang. Nó nhắm đến người muốn thơm tinh tế hơn là gây chú ý mạnh.

### Có những phiên bản nào trong dòng này?
- Prada L'Homme EDT: sạch và dễ dùng nhất
- Prada L'Homme Intense: tối hơn và dày hơn
- Prada L'Homme L'Eau: sáng và nhẹ hơn

### Mùi hương mang lại cảm giác gì?
Iris, neroli, hoa tím và chút xà phòng sạch tạo nên cảm giác rất chỉnh chu. Đây là kiểu mùi mặc sơ mi trắng hoặc đi làm công sở sẽ thấy hợp ngay.

### Khi nào nên dùng?
- Đi làm, gặp khách, môi trường kín
- Hợp người thích mùi sạch, phấn, lịch sự
- Không hợp lắm nếu bạn muốn mùi đi tối thật cuốn

### Nhận xét của Maison de SON
Prada L'Homme mạnh ở độ tử tế và dễ dùng nơi công sở. Điểm yếu là ai thích mùi cá tính mạnh có thể thấy nó quá hiền.`,
    verdict: "Mùi này sạch, phấn và rất lịch sự. Hợp người làm văn phòng hoặc thích hình ảnh gọn gàng, tử tế. Nếu bạn muốn mùi thật nổi bật, bản này hơi hiền.",
    verdictShort: "SẠCH, PHẤN, RẤT LỊCH SỰ",
    score: { scent: 8.8, uniqueness: 8.1, compliments: 8.7, value: 8.0, total: 8.4 },
    vibes: [
      { label: "Văn phòng", icon: "💼" },
      { label: "Lịch sự", icon: "🕴️" },
      { label: "Sạch sẽ", icon: "🧼" }
    ],
    longevity: 7,
    sillage: 6,
    seasons: { spring: 84, summer: 70, fall: 72, winter: 50 },
    dayNight: { day: 92, night: 30 },
    topNotes: [{ name: "Neroli" }, { name: "Tiêu" }],
    middleNotes: [{ name: "Iris" }, { name: "Hoa tím" }, { name: "Hổ phách" }],
    baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Hoắc hương" }, { name: "Xạ hương" }],
    accords: [
      { name: "Phấn", value: 68, color: "#d7bde2" },
      { name: "Sạch", value: 66, color: "#85c1e9" },
      { name: "Hoa", value: 42, color: "#e75480" },
      { name: "Gỗ", value: 28, color: "#8B4513" }
    ],
    tags: ["Nam", "Văn phòng", "Lịch sự", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2550000,
    shopeeOffers: []
  },
  {
    id: "terre-dhermes-edt",
    brandSlug: "hermes",
    brand: "HERMÈS",
    name: "Terre d'Hermès",
    subName: "Eau de Toilette",
    perfumer: "Jean-Claude Ellena",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [
      { url: PENDING_IMAGE, source: "studio", caption: "Ảnh Terre d'Hermès EDT đang được xác minh lại để tránh nhầm Eau Givree và Parfum", verified: false }
    ],
    description: "Đây là kiểu mùi nam cam chanh, khoáng và gỗ rất trưởng thành. Hợp người thích sự điềm tĩnh, lịch sự và hơi khô. Nếu bạn thích mùi ngọt hoặc dễ gần ngay từ đầu, bản này có thể hơi khó hơn.",
    article: `Tại Maison de SON, Terre d'Hermès EDT là một trong những chai nước hoa nam có cá tính rất rõ ở nhóm lịch sự trưởng thành. Nó không đi theo hướng ngọt dễ khen mà thiên về sự khô, khoáng và gỗ.

### Nguồn gốc và xuất xứ
Terre d'Hermès thuộc Hermès, thương hiệu Pháp nổi tiếng với sự tinh tế và chất lượng rất riêng. Đây là một line nam biểu tượng của hãng.

### Ra mắt khi nào?
Bản EDT ra mắt năm 2006 và đến nay vẫn là cái tên được nhắc rất nhiều trong thế giới nước hoa nam.

### Câu chuyện ra đời
Jean-Claude Ellena tạo ra mùi này để gợi cảm giác đất, đá, cam và không khí khô ráo. Nó không cố gắng chiều lòng tất cả mà chọn phong cách rõ rệt hơn.

### Có những phiên bản nào trong dòng Terre d'Hermès?
- EDT: khô, cam, khoáng rõ nhất
- Parfum: ấm và dày hơn
- Eau Givree: lạnh và mát hơn

### Mùi hương mang lại cảm giác gì?
Cam, bưởi, tiêu và vetiver kết hợp với khoáng tạo cảm giác khô, sạch, điềm tĩnh và rất đàn ông theo kiểu trưởng thành.

### Khi nào nên dùng?
- Đi làm, gặp khách, thời tiết mát hoặc hanh khô
- Hợp người thích mùi nam trưởng thành, không ngọt
- Không hợp lắm nếu bạn cần mùi trẻ trung và nịnh mũi ngay

### Nhận xét của Maison de SON
Terre d'Hermès EDT rất hay nếu gu của bạn thích sự điềm và tinh tế. Điểm yếu là nó không phải kiểu ai ngửi lần đầu cũng mê ngay.`,
    verdict: "Mùi này khô, lịch sự và trưởng thành. Hợp người thích hình ảnh nam điềm tĩnh hơn là kiểu nổi bật dễ khen. Nếu bạn thích mùi ngọt và trẻ, bản này có thể hơi khó.",
    verdictShort: "KHÔ, LỊCH SỰ, TRƯỞNG THÀNH",
    score: { scent: 8.9, uniqueness: 8.6, compliments: 7.8, value: 8.4, total: 8.4 },
    vibes: [
      { label: "Trưởng thành", icon: "🧔" },
      { label: "Lịch sự", icon: "🕴️" },
      { label: "Tinh tế", icon: "🎯" }
    ],
    longevity: 7,
    sillage: 6,
    seasons: { spring: 76, summer: 68, fall: 84, winter: 62 },
    dayNight: { day: 86, night: 40 },
    topNotes: [{ name: "Cam" }, { name: "Bưởi" }],
    middleNotes: [{ name: "Tiêu" }, { name: "Pelargonium" }],
    baseNotes: [{ name: "Vetiver" }, { name: "Gỗ tuyết tùng" }, { name: "Benzoin" }],
    accords: [
      { name: "Cam chanh", value: 62, color: "#f7c242" },
      { name: "Khoáng", value: 56, color: "#95a5a6" },
      { name: "Gỗ", value: 54, color: "#8B4513" },
      { name: "Gia vị tươi", value: 36, color: "#c58a2b" }
    ],
    tags: ["Nam", "Trưởng thành", "Lịch sự", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2550000,
    shopeeOffers: []
  }
];
