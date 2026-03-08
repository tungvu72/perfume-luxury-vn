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
    article: `Tại <a href="/">Maison de SON</a>, <a href="/sauvage-elixir">Sauvage Elixir</a> thường được xem là bản trưởng thành nhất trong cả dòng Sauvage của <a href="/dior">Dior</a>. Với nhóm người tìm một chai <a href="/nam-gioi">nước hoa nam</a> có độ hiện diện rõ, đây là cái tên rất dễ gây ấn tượng ngay từ lần thử đầu.

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
    description: "Đây là kiểu mùi ngọt ấm, dễ gây thiện cảm và rất hợp đi tối. Hợp người thích mùi dễ được khen, nhất là khi đi chơi hoặc hẹn hò. Nếu ghét mùi ngọt hoặc sống ở nơi nóng quanh năm, bạn nên cân nhắc kỹ.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/armani-stronger-with-you-intensely">Stronger With You Intensely</a> là một trong những chai <a href="/nam-gioi">nước hoa nam</a> kiểu ngọt ấm dễ hiểu nhất. Với người thích hướng mùi gần gũi, dễ được khen và có chất tình cảm hơn, bản này của <a href="/armani">Giorgio Armani</a> khá dễ hợp gu.

### Nguồn gốc và xuất xứ
Đây là sản phẩm thuộc Giorgio Armani - thương hiệu Ý vốn mạnh ở nhóm designer thanh lịch, dễ dùng và có tính đại chúng tốt hơn nhiều dòng niche khó ngửi.

### Ra mắt khi nào?
Stronger With You Intensely ra mắt năm 2019 như một phiên bản đi đậm hơn từ dòng Stronger With You.

### Câu chuyện ra đời
Bản gốc Stronger With You đã là kiểu ngọt dễ mến rồi. Bản Intensely làm mọi thứ rõ hơn: ấm hơn, ngọt hơn, hợp tối hơn và nhắm thẳng vào nhóm thích compliment scent.

### Dòng Stronger With You có những phiên bản nào?
- Stronger With You EDT: nhẹ hơn, dễ tiếp cận hơn
- Stronger With You Intensely: ngọt và ấm hơn rõ
- Stronger With You Absolutely: tối hơn, amber rõ hơn

### Mùi hương mang lại cảm giác gì?
Mở đầu hơi ngọt và cay nhẹ, sau đó toffee, vanilla và amber lên rất rõ. Mùi này không lạ, không khó, nhưng dễ làm người khác thấy bạn ấm áp và dễ gần.

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
    description: "Đây là kiểu mùi ngọt đậm, ấm và khá nịnh mũi nếu bạn thích gourmand. Hợp trời mát, đi tối hoặc người thích mùi dày. Nếu muốn một chai sạch, thoáng và dễ đi làm mỗi ngày thì nó không phải gu đó.",
    article: `Ở <a href="/">Maison de SON</a>, <a href="/lattafa-khamrah">Khamrah</a> thường được nhắc đến như một chai <a href="/unisex">nước hoa unisex</a> ngọt ấm rất nổi trong tầm giá dễ tiếp cận. Với người thích phong cách đậm, có phần giống món tráng miệng và dễ gây chú ý, bản này của <a href="/lattafa">Lattafa</a> khá đáng thử.

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
Bạn sẽ ngửi thấy kiểu ngọt ấm khá dày, có gia vị, vanilla và cảm giác hơi gourmand. Đây là kiểu mùi nhiều người thấy cuốn nhưng cũng có người thấy hơi nặng nếu dùng sai thời điểm.

### Khi nào nên dùng?
- Tối, tiệc, đi chơi, trời mát
- Hợp người thích mùi ngọt rõ và có độ lưu tốt
- Không hợp lắm nếu bạn chỉ thích kiểu fresh sạch nhẹ

### Nhận xét của Maison de SON
Đây là một chai dễ làm người ta nhớ nếu gu của bạn thiên ngọt ấm. Điểm trừ là không hợp số đông trong thời tiết nóng và không phải ai cũng chịu được độ dày của nó.`,
    verdict: "Mùi này ngọt đậm, ấm và khá bắt mũi. Hợp người thích kiểu thơm dày, đi tối và muốn mùi bám rõ. Nếu bạn chuộng mùi nhẹ, sạch và thoáng, bản này sẽ hơi bí.",
    verdictShort: "NGỌT ĐẬM, ẤM VÀ DỄ NHỚ",
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
    description: "Đây là kiểu mùi sạch, sang và dễ dùng trong rất nhiều hoàn cảnh. Hợp người cần một chai đi làm, gặp khách hoặc dùng hằng ngày mà vẫn lịch sự. Nếu bạn thích mùi thật khác biệt hoặc quá nổi bật, bản này có thể hơi an toàn.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/bleu-chanel-edp">Bleu de Chanel Eau de Parfum</a> là một trong những chai <a href="/nam-gioi">nước hoa nam</a> dễ gợi ý nhất cho người mới lẫn người đã chơi lâu. Lý do rất đơn giản: nó lịch sự, dễ dùng và ít khi làm người đối diện khó chịu. Trong số các chai của <a href="/chanel">Chanel</a>, đây là lựa chọn khá an toàn nhưng vẫn giữ được cảm giác sang.

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
Nếu chỉ giữ một chai designer nam để dùng nhiều hoàn cảnh, Bleu de Chanel EDP luôn là ứng viên rất mạnh. Điểm yếu duy nhất là nó an toàn quá, nên ai thích mùi thật cá tính có thể sẽ thấy chưa đủ đã.`,
    verdict: "Mùi này sạch, sang và rất dễ dùng. Hợp người muốn một chai lịch sự để đi làm, gặp gỡ hoặc dùng hằng ngày. Nếu bạn cần mùi thật khác biệt để gây sốc ngay từ đầu, bản này hơi hiền.",
    verdictShort: "SẠCH, SANG, DỄ DÙNG",
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
    description: "Đây là kiểu mùi nữ ngọt, có cà phê và khá gợi cảm. Hợp buổi tối, hẹn hò hoặc người thích mùi có dấu ấn rõ. Nếu bạn chỉ thích mùi nhẹ, thoáng và trong trẻo thì bản này hơi đậm.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/ysl-black-opium">Black Opium EDP</a> là một trong những chai <a href="/nu-gioi">nước hoa nữ</a> dễ nhận ra nhất nhờ chất cà phê ngọt rất riêng. Với nhiều người thích phong cách nữ hiện đại, đây là mùi rất dễ để lại ấn tượng. Trong các dòng nữ nổi bật của <a href="/ysl">Yves Saint Laurent</a>, nó là cái tên có độ phủ cực mạnh.

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
Ngay từ đầu đã có cảm giác ngọt và hơi tối. Sau đó cà phê, vanilla và hoa trắng đi lên cùng nhau, tạo nên kiểu mùi vừa quyến rũ vừa dễ nhận ra, không quá khó ngửi nhưng có cá tính rõ.

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
    description: "Đây là kiểu mùi nam trái cây, khói và khá có khí chất. Hợp người muốn thử một chai nổi tiếng, có tính tham chiếu cao trong thế giới nước hoa. Nếu bạn chỉ cần một chai dễ dùng, ít drama và giá hợp lý, bản này không phải lựa chọn đơn giản nhất.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/creed-aventus">Creed Aventus</a> thường được xem như một cột mốc trong nhóm <a href="/nam-gioi">nước hoa nam</a> cao cấp. Với nhiều người chơi lâu năm, đây gần như là cái tên phải thử một lần để biết vì sao nó được nhắc nhiều đến vậy. Trong số các chai nổi bật của <a href="/creed">Creed</a>, Aventus là biểu tượng rõ nhất.

### Nguồn gốc và xuất xứ
Aventus thuộc Creed - nhà nước hoa lâu đời ở phân khúc cao cấp, nổi tiếng với hình ảnh sang trọng và câu chuyện di sản.

### Ra mắt khi nào?
Aventus ra mắt năm 2010 và rất nhanh đã trở thành một trong những chai niche nam nổi tiếng nhất thế giới.

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
    description: "Đây là kiểu mùi ngọt trong, sang và rất dễ để lại ấn tượng. Hợp người thích mùi nổi tiếng, có độ nhận diện cao và thiên unisex. Nếu bạn không thích kiểu mùi ngọt hơi bay bay hoặc sợ đụng hàng, bạn nên cân nhắc.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/baccarat-rouge-540">Baccarat Rouge 540</a> là một trong những chai <a href="/unisex">nước hoa unisex</a> được nhắc đến nhiều nhất trong vài năm gần đây. Nó không phải kiểu mùi ai cũng mô tả được bằng lời, nhưng lại là kiểu ngửi một lần rất dễ nhớ. Trong các sáng tạo nổi bật của <a href="/maison-francis-kurkdjian">Maison Francis Kurkdjian</a>, đây là cái tên có sức ảnh hưởng mạnh nhất.

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
Đây là kiểu ngọt trong, hơi airy, có saffron, amber và gỗ. Nó vừa sang vừa lạ với người mới, nhưng với người đã ngửi nhiều thì lại rất dễ nhận ra ngay từ xa.

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
    description: "Đây là kiểu mùi ấm, tối và hơi sang theo kiểu đi tối. Hợp người muốn mùi nam khác với nhóm fresh văn phòng. Nếu bạn cần một chai nhẹ, sạch và dễ dùng ban ngày thì bản này hơi nặng.",
    article: `Tại <a href="/">Maison de SON</a>, <a href="/tom-ford-noir-extreme">Tom Ford Noir Extreme</a> là một trong những chai <a href="/nam-gioi">nước hoa nam</a> hợp với người thích phong cách buổi tối rõ ràng. Nó không phải kiểu dễ dùng nhất, nhưng lại có nét riêng hơn nhiều chai designer an toàn. Trong nhóm mùi tối của <a href="/tom-ford">Tom Ford</a>, đây là cái tên khá dễ tiếp cận.

### Nguồn gốc và xuất xứ
Noir Extreme thuộc Tom Ford - thương hiệu Mỹ nổi tiếng với hình ảnh sang, gợi cảm và có hơi hướng đêm tối ở nhiều dòng nước hoa.

### Ra mắt khi nào?
Noir Extreme EDP ra mắt năm 2015 và nhanh chóng trở thành một trong những chai tối nổi bật nhất ở nhóm designer nam cao cấp.

### Câu chuyện ra đời
Dòng Noir vốn đã mang màu sắc tối và chỉn chu, nhưng Noir Extreme đi xa hơn bằng cách thêm cảm giác indulgent, ấm, hơi ngọt và có phần ăn chơi hơn. Đây là kiểu mùi dành cho người muốn bước ra khỏi vùng an toàn của nhóm fresh sạch.

### Dòng Noir Extreme có những phiên bản nào?
- Noir Extreme EDP
- Noir Extreme Parfum với cảm giác đậm hơn và tối hơn

### Mùi hương mang lại cảm giác gì?
Mùi này có gia vị, amber, vanilla và cảm giác ấm khá rõ. Nó không quá ngọt kiểu kẹo, nhưng vẫn đủ dày để tạo không khí buổi tối, hơi sang và hơi bí ẩn.

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
