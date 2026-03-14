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
    image: "/images/products/sauvage-elixir-main.jpg",
    images: [{ url: "/images/products/sauvage-elixir-main.jpg", source: "fragram", caption: "Dior Sauvage Elixir chính hãng", verified: true }],
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
    image: "/images/products/armani-stronger-with-you-intensely-main.jpg",
    images: [{ url: "/images/products/armani-stronger-with-you-intensely-main.jpg", source: "fragram", caption: "Giorgio Armani Stronger With You Intensely chính hãng", verified: true }],
    description: "Đây là kiểu mùi ngọt ấm, dễ gây thiện cảm và rất hợp đi tối. Hợp người thích mùi dễ được khen, nhất là khi đi chơi hoặc hẹn hò. Nếu ghét mùi ngọt hoặc sống ở nơi nóng quanh năm, bạn nên cân nhắc kỹ.",
    productCopy: `Armani Stronger With You Intensely EDP là kiểu nước hoa ngọt ấm dành cho những ai thích cảm giác gần gũi nhưng vẫn nổi bật. Mùi mở ra với chút cay nhẹ và ngọt rõ, sau đó nhanh chóng đi vào lớp vanilla, hổ phách và nền gỗ ấm áp. Tổng thể cho cảm giác dày, mượt, trẻ trung và có độ quyến rũ rất trực diện.

Điểm mạnh của chai này là sự dễ thích. Nó không phải kiểu quá nghệ thuật hay khó hiểu, mà là mùi ngọt ấm khiến nhiều người thấy dễ chịu ngay từ đầu. Stronger With You Intensely đặc biệt hợp với những buổi tối, đi chơi, hẹn hò hoặc thời tiết mát, khi lớp ngọt phát huy đúng vẻ hấp dẫn của nó.

Trên da, mùi phát triển theo hướng mềm hơn và ấm hơn sau khoảng 20 phút. Dù ngọt khá rõ, chai này vẫn giữ được sự nam tính nhờ nền gỗ và gia vị. Nó hợp với người trẻ, hoặc những ai muốn một chai nước hoa giúp mình trở nên gần gũi, thân thiện nhưng vẫn có sức hút tình cảm.

Về độ lưu hương và độ tỏa, đây là chai làm rất tốt trong tầm designer. Mùi bám ổn, tỏa khá rõ và dễ được người xung quanh cảm nhận. Trong điều kiện Việt Nam, nên ưu tiên dùng vào buổi tối, mùa mưa, phòng máy lạnh hoặc những ngày thời tiết dịu hơn để tránh cảm giác quá ngọt.

Nếu bạn thích những mùi hương ấm, sexy và thiên về cảm xúc, Armani Stronger With You Intensely là lựa chọn rất đáng cân nhắc. Nó không dành cho người mê phong cách fresh sạch kiểu văn phòng, nhưng lại cực hợp với người muốn một mùi hương ôm sát, cuốn và có khả năng ghi điểm trong khoảng cách gần.`,
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
    image: "/images/products/lattafa-khamrah-main.jpg",
    images: [{ url: "/images/products/lattafa-khamrah-main.jpg", source: "fragram", caption: "Lattafa Khamrah Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi ngọt đậm, ấm và khá nịnh mũi nếu bạn thích mùi gourmand. Hợp trời mát, đi tối hoặc người thích mùi dày. Nếu muốn một chai sạch, thoáng và dễ đi làm mỗi ngày thì nó không phải gu đó.",
    productCopy: `Lattafa Khamrah EDP là một trong những chai nước hoa Trung Đông được nhắc đến nhiều nhất vì khả năng tạo cảm giác đậm, ngọt và cực kỳ cuốn ngay từ lần đầu ngửi. Mùi mở ra với quế, gia vị và lớp ngọt ấm rất rõ, sau đó dần chuyển sang vanilla, amber và cảm giác gourmand dày, gần như gợi ra hình ảnh món tráng miệng phủ gia vị trong một không gian ấm. Đây là kiểu mùi không hề nhẹ tay, và cũng không cố gắng trở nên kín đáo.

Điểm khiến Khamrah được yêu thích là nó cho cảm giác vượt tầm giá rất mạnh. Mùi hương không đi theo hướng tươi hay sạch, mà thiên về sự ấm áp, xa hoa và có phần opulent rất rõ. Nó gợi ra hình ảnh một buổi tối sang, ánh đèn vàng, không khí dày và một mùi thơm bao quanh cơ thể thay vì chỉ nằm sát trên da. Dù là unisex, chai này nghiêng nhiều hơn về người thích sự nổi bật, đậm đà và không ngại ngọt.

Khi lên da, Khamrah càng lúc càng trở nên tròn và mượt hơn. Lớp gia vị đầu tạo sự chú ý rất nhanh, nhưng phần đẹp nhất lại nằm ở dry down khi vanilla và amber hòa vào nhau thành một lớp ngọt ấm rất dày. Đây là kiểu mùi tạo cảm giác ôm, rất hợp với những dịp buổi tối, đi chơi, hẹn hò hoặc những lúc muốn xuất hiện với dấu ấn rõ ràng.

Về hiệu năng, Lattafa Khamrah làm rất tốt trong tầm giá. Độ lưu hương lâu, độ tỏa rõ và khả năng bám trên quần áo tốt là những điểm mạnh rất thực tế. Trong điều kiện Việt Nam, chai này nên dùng vào buổi tối, phòng máy lạnh hoặc ngày mưa mát. Nếu dùng giữa trưa nóng, chỉ nên xịt rất tiết chế để tránh cảm giác quá dày.

Nếu bạn muốn một chai nước hoa unisex ngọt ấm, đậm, dễ gây nghiện và có vibe sang theo kiểu Trung Đông hiện đại, Khamrah là lựa chọn rất đáng cân nhắc. Nó không dành cho người thích sự sạch nhẹ, nhưng lại cực hợp với ai muốn thơm rõ, thơm lâu và có mặt rất mạnh trong không gian.`,
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
    image: "/images/products/bleu-chanel-edp-amazon-1.jpg",
    images: [
      { url: "/images/products/bleu-chanel-edp-life-1.png", source: "community", caption: "Bleu de Chanel EDP trên áo sơ mi trắng", verified: true },
      { url: "/images/products/bleu-chanel-edp-life-2.png", source: "community", caption: "Bleu de Chanel EDP cầm tay", verified: true },
      { url: "/images/products/bleu-chanel-edp-life-3.png", source: "community", caption: "Bleu de Chanel EDP trên bàn, cùng đồng hồ và kính", verified: true },
    ],
    description: "Đây là kiểu mùi sạch, sang và dễ dùng trong rất nhiều hoàn cảnh. Hợp người cần một chai đi làm, gặp khách hoặc dùng hằng ngày mà vẫn lịch sự. Nếu bạn thích mùi thật khác biệt hoặc quá nổi bật, bản này có thể hơi an toàn.",
    productCopy: `Bleu de Chanel EDP là kiểu nước hoa rất dễ làm người ta có thiện cảm. Mùi mở đầu sạch, sáng và gọn, sau đó chuyển dần sang lớp hương gỗ ấm, mượt và nam tính hơn. Nó không cố gây ấn tượng bằng sự quá mạnh hay quá lạ, mà chinh phục bằng cảm giác chỉn chu, lịch lãm và dễ dùng trong đời sống hằng ngày.

Điểm đáng giá nhất của Bleu de Chanel EDP là sự cân bằng. Mùi đủ tươi để không bị nặng, đủ ấm để không quá nhạt, đủ sang để dùng trong những dịp cần ăn mặc chỉnh tề, nhưng cũng đủ dễ chịu để dùng đi làm mỗi ngày. Đây là kiểu mùi rất hợp với người thích phong cách gọn gàng, trưởng thành và không muốn chọn một chai quá phô trương.

Trên da, phần đẹp nhất của Bleu de Chanel EDP nằm ở giai đoạn sau khoảng 20 đến 30 phút. Khi lớp cam chanh ban đầu dịu xuống, phần gỗ và chút cay nhẹ bắt đầu hiện rõ hơn, tạo cảm giác sạch sẽ nhưng vẫn có chiều sâu. Mùi này không quá ngọt, không quá tối, cũng không mang cảm giác trẻ con. Nó cho cảm giác chững chạc, tự tin và khá dễ tạo thiện cảm với người đối diện.

Về độ lưu hương và độ tỏa, Bleu de Chanel EDP ở mức vừa đủ đẹp. Không phải kiểu quá bùng nổ, nhưng đủ để người đứng gần cảm nhận rõ ràng. Trong môi trường văn phòng, gặp gỡ khách hàng, đi ăn tối hay hẹn hò nhẹ nhàng, nó hoạt động rất ổn vì không gây ngộp mà vẫn giữ được sự hiện diện. Đây là một trong những lý do chai này được xem là lựa chọn an toàn nhưng cao cấp cho nam giới.

Bleu de Chanel EDP hợp với người muốn có một mùi hương dùng được trong nhiều hoàn cảnh: đi làm, gặp đối tác, ra ngoài cuối tuần hay những dịp cần lịch sự một chút. Nếu bạn thích một mùi nam tính, sạch, sang và dễ dùng lâu dài, đây vẫn là một lựa chọn rất mạnh. Còn nếu bạn đang tìm một chai thật khác biệt, thật nổi hoặc có cá tính cực mạnh, thì Bleu de Chanel EDP có thể sẽ hơi an toàn.

Tóm lại, đây không phải là kiểu nước hoa khiến bạn choáng ngợp ngay lập tức, nhưng lại là kiểu càng dùng càng thấy hợp lý. Bleu de Chanel EDP phù hợp với người đàn ông muốn thơm một cách tinh tế, lịch lãm và ổn định, hơn là cố gắng gây chú ý bằng mọi giá.`,
    article: `Bleu de Chanel EDP là một trong số rất ít chai designer nam mà Maison de SON có thể gọi là “an toàn nhưng không nhạt”. Nó không đi theo kiểu gây choáng từ 5 phút đầu, cũng không cố tỏ ra khác người. Giá trị của chai này nằm ở chỗ: càng dùng trong đời sống thật, người ta càng hiểu vì sao nó sống lâu đến vậy.

### Bối cảnh của Bleu de Chanel EDP
Nếu nhìn toàn bộ line Bleu de Chanel, EDT là bản sáng và bay nhanh hơn, Parfum thì dày, tối và ăn mặc hơn. EDP đứng đúng giữa hai thái cực đó. Nó giữ được sự sạch sẽ, lịch sự vốn làm nên tên tuổi của dòng Bleu, nhưng thêm đủ chiều sâu để không bị cảm giác quá “fresh office” như nhiều chai nam designer khác.

### Mùi trên da thực tế nói gì
Trên giấy thử, Bleu de Chanel EDP dễ khiến người ta nghĩ đây chỉ là một mùi nam đẹp, gọn gàng và dễ dùng. Nhưng lên da thật, điểm hay nằm ở cách citrus, gừng, gỗ và incense nối với nhau rất mượt. Nó không bốc lên kiểu phô trương. Thay vào đó là cảm giác một người đàn ông biết mình đang mặc gì, nói gì và dừng ở đâu. Đây là kiểu sang vừa đủ, không cần gào lên để chứng minh đẳng cấp.

### Dùng ở Việt Nam có hợp không
Rất hợp. Đó là lý do Maison de SON luôn xếp Bleu de Chanel EDP vào nhóm dễ tư vấn nhất cho nam giới Việt. Thời tiết nóng ẩm, môi trường văn phòng, gặp khách, đi ăn tối hay dùng làm mùi hương mặc định mỗi ngày — chai này đều xử lý ổn. Nó không phải kiểu mùi để gây tranh cãi. Nó là kiểu mùi để tạo thiện cảm lâu dài.

### Chai này hợp với kiểu người nào
Bleu de Chanel EDP hợp nhất với người muốn một mùi chỉn chu, trưởng thành, dễ bước vào nhiều bối cảnh mà không phải nghĩ quá nhiều. Nếu bạn đang cần một chai đầu tư tương đối nghiêm túc để đi làm, gặp đối tác, hẹn hò hoặc làm “signature scent” đầu tiên, đây là ứng viên rất mạnh. Ngược lại, nếu thứ bạn tìm là một mùi thật dị, thật tối hoặc có độ tuyên ngôn mạnh, Bleu có thể hơi hiền.

### Kết luận của Maison de SON
Bleu de Chanel EDP không phải chai thú vị nhất thế giới nước hoa nam, nhưng là một trong những chai khó chê nhất khi đặt vào đời sống thật. Nó không cố làm nghệ thuật. Nó làm tốt vai trò của một mùi hương nam cao cấp: sạch, sang, dễ sống cùng và đủ tinh tế để người đối diện nhớ theo cách tích cực.`,
    verdict: "Bleu de Chanel EDP là lựa chọn cực mạnh cho nam giới cần một mùi hương sang, sạch, dễ dùng và bền vững trong nhiều hoàn cảnh thực tế tại Việt Nam. Không quá nổi loạn, nhưng rất khó sai.",
    verdictShort: "Sang, sạch, chỉn chu, cực khó sai",
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
    image: "/images/products/ysl-black-opium-main.jpg",
    images: [{ url: "/images/products/ysl-black-opium-main.jpg", source: "fragram", caption: "YSL Black Opium Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nữ ngọt, có cà phê và khá gợi cảm. Hợp buổi tối, hẹn hò hoặc người thích mùi có dấu ấn rõ. Nếu bạn chỉ thích mùi nhẹ, thoáng và trong trẻo thì bản này hơi đậm.",
    productCopy: `YSL Black Opium EDP là một trong những chai nước hoa nữ nổi tiếng nhất ở nhóm ngọt ấm quyến rũ. Mùi mở đầu có cảm giác ngọt khá nhanh, sau đó cà phê và vanilla dần hiện rõ, tạo nên tổng thể vừa ấm, vừa mềm, vừa có chút nổi loạn. Đây là kiểu mùi hương rất dễ khiến người đối diện nhớ đến, đặc biệt trong những không gian gần và buổi tối.

Điểm hấp dẫn của Black Opium là sự cân bằng giữa nữ tính và cá tính. Nó không mong manh kiểu hoa trắng thuần túy, cũng không quá gourmand như mùi bánh kẹo. Thay vào đó, chai này cho cảm giác một cô gái hiện đại, biết mình cuốn ở đâu và không ngại thể hiện sức hút của bản thân.

Khi lên da, phần cà phê không đi theo hướng đắng mạnh mà thiên về cảm giác rang nhẹ, làm nền cho vanilla và lớp hoa phía trên. Nhờ vậy, Black Opium vừa có chất đêm, vừa có độ mượt rất nịnh mũi. Nó hợp với hẹn hò, đi chơi tối, tiệc nhẹ hoặc những dịp muốn thơm theo kiểu gợi cảm rõ ràng.

Về hiệu năng, YSL Black Opium EDP có độ lưu hương khá tốt và tỏa hương ở mức vừa đến khá. Trong khí hậu Việt Nam, chai này đẹp nhất vào buổi tối, môi trường máy lạnh hoặc ngày mát. Nếu dùng giữa trưa nóng, nên xịt tiết chế để tránh cảm giác ngọt dày.

Nếu bạn thích một chai nước hoa nữ vừa sexy, vừa hiện đại, vừa dễ được khen, YSL Black Opium là lựa chọn rất đáng tiền. Nó không dành cho người chỉ thích mùi nhẹ nhàng sạch sẽ, nhưng lại cực hợp với ai muốn một mùi hương có độ cuốn và thần thái rất riêng.`,
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
    image: "/images/products/creed-aventus-main.jpg",
    images: [{ url: "/images/products/creed-aventus-main.jpg", source: "fragram", caption: "Creed Aventus chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam trái cây, khói và khá có khí chất. Hợp người muốn thử một chai nổi tiếng, có tính tham chiếu cao trong thế giới nước hoa. Nếu bạn chỉ cần một chai dễ dùng, ít drama và giá hợp lý, bản này không phải lựa chọn đơn giản nhất.",
    productCopy: `Creed Aventus EDP là một trong những chai nước hoa nam được nhắc đến nhiều nhất khi nói về hình ảnh thành đạt, tự tin và có khí chất lãnh đạo. Mùi mở đầu bằng cảm giác trái cây tươi sáng, thường gợi ra sự mọng của dứa và táo, sau đó chuyển dần sang lớp hương khói nhẹ và gỗ khô rất đặc trưng. Tổng thể vừa sáng, vừa sang, vừa có độ nam tính hiện đại.

Điểm khiến Aventus được yêu thích là sự cân bằng giữa độ dễ dùng và độ đẳng cấp. Nó không quá tối, không quá ngọt, không quá trẻ, cũng không quá già. Mùi hương này cho cảm giác chỉn chu, giàu năng lượng và có sự tự tin tự nhiên, rất hợp với người làm việc trong môi trường cần hình ảnh chuyên nghiệp.

Trên da, Creed Aventus thay đổi khá thú vị. Lớp đầu tươi và sắc nét, nhưng càng về sau lại càng mượt, khô và lịch lãm hơn. Cảm giác khói ở đây không quá nặng mà chỉ đủ để tạo chiều sâu, giúp chai này khác biệt với nhiều mùi fresh thông thường. Chính điều đó làm nó vừa dễ gần, vừa có chất riêng.

Về hiệu năng, Aventus lưu hương khá ổn và tỏa hương vừa phải đến khá, tùy da. Đây là kiểu mùi dùng tốt cho đi làm, gặp khách hàng, sự kiện, hẹn hò hoặc những ngày cần ăn mặc gọn gàng. Trong khí hậu Việt Nam, nó hoạt động đẹp ở cả ban ngày lẫn buổi tối, đặc biệt trong môi trường máy lạnh.

Nếu bạn đang tìm một chai nước hoa nam cao cấp, lịch lãm và có khả năng tạo thiện cảm rất tốt, Creed Aventus EDP vẫn là cái tên đáng cân nhắc. Nó không quá phá cách, nhưng độ hoàn thiện và thần thái mà nó mang lại vẫn khiến nhiều người xem đây là một chuẩn mực khó thay thế.`,
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
    image: "/images/products/baccarat-rouge-540-main.jpg",
    images: [{ url: "/images/products/baccarat-rouge-540-main.jpg", source: "fragram", caption: "Maison Francis Kurkdjian Baccarat Rouge 540 Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi ngọt trong, sang và rất dễ để lại ấn tượng. Hợp người thích mùi nổi tiếng, có độ nhận diện cao và thiên unisex. Nếu bạn không thích kiểu mùi ngọt hơi bay bay hoặc sợ đụng hàng, bạn nên cân nhắc.",
    productCopy: `Maison Francis Kurkdjian Baccarat Rouge 540 EDP là một trong những chai nước hoa niche có độ nhận diện cao nhất trên thị trường hiện nay. Điều làm nó đặc biệt không nằm ở việc mùi quá phức tạp, mà ở chỗ nó tạo ra một hiệu ứng rất riêng: sáng, trong, hơi ngọt, hơi khoáng và gần như có cảm giác phát sáng trên da. Đây là kiểu mùi khiến nhiều người ngửi một lần là nhớ, vì nó không đi theo lối hoa ngọt hay gỗ ấm truyền thống.

Điểm đắt của Baccarat Rouge 540 là cảm giác sang theo kiểu sạch sẽ, hiện đại và rất có không khí. Nó không phô trương bằng độ dày hay độ tối, mà gây ấn tượng bằng một thứ aura rất đặc trưng: trong veo nhưng không mỏng, ngọt nhưng không kẹo, ấm nhưng không nặng. Chính sự lửng lơ đó làm chai này vừa unisex thật sự, vừa rất dễ tạo tò mò với người xung quanh.

Khi lên da, Baccarat Rouge 540 thường cho cảm giác thoáng ở giai đoạn đầu, sau đó dần trở nên ấm hơn và mượt hơn. Nhiều người cảm nhận nó như mùi đường cháy rất tinh khiết, pha cùng nhựa hổ phách và chút khoáng sạch. Nó không phải kiểu ôm sát da hiền lành, mà là kiểu tạo vùng hương mờ nhưng rõ sự hiện diện, rất hợp với những ai thích một mùi thơm sang mà không cần nói quá nhiều.

Về hiệu năng, đây là chai làm rất tốt ở cả độ lưu hương lẫn độ tỏa. Trong điều kiện khí hậu Việt Nam, Baccarat Rouge 540 vẫn hoạt động ổn nếu dùng tiết chế, đặc biệt đẹp trong môi trường máy lạnh, buổi tối hoặc những dịp cần hình ảnh chỉn chu. Chỉ cần vài xịt là đủ, vì đây là dạng mùi rất dễ đọng lại trong trí nhớ người khác.

Nếu bạn muốn một chai nước hoa niche sang, khác biệt, có độ nhận diện cao và tạo cảm giác đắt tiền rất rõ, Baccarat Rouge 540 là lựa chọn cực mạnh. Nó không dành cho người thích sự kín đáo tuyệt đối, nhưng lại rất hợp với ai muốn mùi hương của mình vừa tinh tế, vừa có sức hút riêng khó nhầm lẫn.`,
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
    image: "/images/products/tom-ford-noir-extreme-main.jpg",
    images: [{ url: "/images/products/tom-ford-noir-extreme-main.jpg", source: "fragram", caption: "Tom Ford Noir Extreme Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi ấm, tối và hơi sang theo kiểu đi tối. Hợp người muốn mùi nam khác với nhóm sạch sáng kiểu văn phòng. Nếu bạn cần một chai nhẹ, sạch và dễ dùng ban ngày thì bản này hơi nặng.",
    productCopy: `Tom Ford Noir Extreme EDP là kiểu nước hoa nam mang màu sắc rất rõ của những buổi tối sang trọng. Mùi mở đầu bằng cảm giác cay ấm và ngọt nhẹ, sau đó nhanh chóng chuyển sang lớp hương dày hơn với vanilla, amber và một chút gourmand rất đặc trưng. Tổng thể tạo cảm giác ấm áp, quyến rũ và có sự xa xỉ rất Tom Ford.

Đây không phải kiểu mùi để dùng vô tư mỗi ngày, mà là chai dành cho những lúc bạn muốn mình trông hấp dẫn hơn, chỉn chu hơn và có điểm nhấn hơn. Noir Extreme hợp với áo sơ mi tối màu, blazer, không gian tiệc tối, quầy bar hoặc những buổi hẹn hò cần chút tinh tế và gợi cảm.

Trên da, mùi trở nên mềm và mượt sau khoảng 15 đến 20 phút. Phần ngọt không đi theo hướng kẹo trẻ trung mà nghiêng về kiểu kem, ấm và dày, tạo cảm giác trưởng thành. Lớp gia vị đầu giúp chai này không bị quá ngấy, trong khi nền gỗ và amber giữ cho tổng thể luôn nam tính.

Về hiệu năng, Tom Ford Noir Extreme EDP có độ lưu hương tốt và tỏa hương ở mức khá. Nó phát huy đẹp nhất vào buổi tối, thời tiết mát hoặc môi trường máy lạnh. Trong thời tiết Việt Nam, nếu dùng giữa trưa nóng có thể hơi dày, nên xịt tiết chế để mùi giữ được độ sang.

Nếu bạn muốn một chai nước hoa nam ngọt ấm nhưng không mất đi sự lịch lãm, Noir Extreme là lựa chọn rất đáng cân nhắc. Nó không dành cho người thích sự an toàn kiểu fresh office, nhưng lại cực kỳ hợp với người muốn mùi hương của mình mang cảm giác sexy, sang và có chiều sâu.`,
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
    image: "/images/products/dior-sauvage-edp-main.jpg",
    images: [{ url: "/images/products/dior-sauvage-edp-main.jpg", source: "fragram", caption: "Dior Sauvage Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam sạch, cay nhẹ và rất dễ dùng trong nhiều hoàn cảnh. Hợp người cần một chai đa dụng, lịch sự và dễ tạo thiện cảm. Nếu bạn thích mùi thật độc lạ hoặc quá dày, bản này sẽ hơi an toàn.",
    productCopy: `Dior Sauvage EDP là một trong những mùi hương nam nổi tiếng nhất vì nó đánh rất đúng vào cảm giác mạnh mẽ, sạch sẽ và hiện đại. Ngay từ những phút đầu, mùi mở ra với sự tươi sáng của cam bergamot, sau đó nhanh chóng chuyển sang lớp hương cay ấm và ambroxan đặc trưng. Tổng thể tạo cảm giác nam tính, sáng sủa và có độ hút người khá rõ.

Điểm mạnh của Dior Sauvage EDP là khả năng tạo ấn tượng nhanh. Đây không phải kiểu mùi quá trầm hay quá nghệ, mà là kiểu vừa bước vào phòng đã có sự hiện diện. Nó hợp với đàn ông trẻ đến trung niên, đặc biệt là những ai muốn một chai nước hoa dễ dùng nhưng vẫn đủ nổi bật trong môi trường đông người.

Khi lên da, Dior Sauvage EDP cho cảm giác mượt hơn bản EDT. Lớp cay được làm tròn lại, phần nền ấm hơn và có chiều sâu hơn, nên mùi bớt gắt và dễ dùng vào buổi tối. Tuy vậy, tinh thần chủ đạo vẫn là sạch, nam tính và hơi hoang dã theo đúng tinh thần Sauvage.

Về hiệu năng, đây là chai có độ lưu hương tốt và độ tỏa khá ổn. Đi làm, đi chơi tối, gặp bạn bè, hẹn hò hay thậm chí đi sự kiện đều dùng được. Trong thời tiết Việt Nam, Dior Sauvage EDP vẫn hoạt động tốt nếu xịt vừa tay, đặc biệt ở môi trường máy lạnh hoặc buổi tối.

Nếu bạn muốn một mùi hương nam dễ được khen, dễ tạo thiện cảm và không phải suy nghĩ nhiều khi dùng, Dior Sauvage EDP là lựa chọn rất mạnh. Còn nếu bạn thích thứ gì đó quá độc đáo hoặc ít đụng hàng, chai này có thể hơi phổ biến. Nhưng xét về tính thực dụng và độ hiệu quả, nó vẫn là một tượng đài rất khó bỏ qua.`,
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
    image: "/images/products/ysl-y-edp-main.jpg",
    images: [{ url: "/images/products/ysl-y-edp-main.jpg", source: "fragram", caption: "YSL Y Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam tươi, ngọt nhẹ và rất dễ gần. Hợp người trẻ hoặc người thích phong cách hiện đại, gọn gàng. Nếu bạn ghét ambroxan hoặc không thích mùi phổ thông dễ khen, bản này có thể hơi quen.",
    productCopy: `## Mùi hương tổng thể
Y Eau de Parfum là một trong những chai designer nam hiện đại thành công nhất vì nó kết hợp được cảm giác sạch, trẻ, ambroxan sáng và chút ngọt vừa đủ theo kiểu rất dễ dùng. Đây là loại mùi đúng nghĩa mass appealing: vừa dễ ngửi, vừa lên người gọn gàng, vừa đủ hiện đại để hợp gu số đông.

Điểm mạnh của Y EDP là tính linh hoạt. Nó không quá thể thao, không quá nghiêm, cũng không quá tình cảm. Thành ra đi làm, đi chơi, hẹn hò nhẹ hay dùng hằng ngày đều ổn. Ở thị trường Việt Nam, đây là kiểu chai rất dễ được đón nhận vì nó sạch, tươi và có cảm giác sáng nam tính vừa phải.

## Diễn biến trên da
Mở đầu là táo, bergamot và độ sạch mát khá rõ. Sau đó xô thơm, gỗ và ambroxan làm tổng thể trở nên hiện đại hơn, nam tính hơn và có hiệu ứng thơm sạch rất quen thuộc của designer đời mới.

Drydown của Y EDP ôm về hướng fresh-sweet ambroxan khá mượt. Nó không có chiều sâu quá phức tạp, nhưng cực kỳ hiệu quả trong đời sống thực tế. Nhược điểm là độ độc đáo không cao nếu mày đã ngửi nhiều designer nam cùng thời.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Y EDP có hiệu năng tốt trong phân khúc, thường 7-9 giờ và tỏa hương khá rõ ở giai đoạn đầu. Nó hợp đi làm, đi học, đi chơi, hẹn hò, dùng quanh năm và đặc biệt tốt với người cần một chai đa dụng.

Trong khí hậu Việt Nam, Y EDP dùng ổn cả ngày nóng lẫn tối mát nếu xịt hợp lý. Ưu điểm là dễ dùng, bám khá và dễ được khen; nhược điểm là cảm giác hơi phổ biến với người thích mùi cá tính hơn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam hiện đại, đa dụng, dễ khen và gần như khó fail, Y EDP là lựa chọn rất mạnh. Nó hợp người mới chơi, người trẻ hoặc ai cần một chai all-rounder đáng tin cậy.

Nên mua khi mày muốn một signature dễ dùng. Nếu mày cần cá tính riêng mạnh hoặc một mùi ít đụng hàng hơn, nên tìm sang nhóm niche hoặc designer đặc thù hơn.`,
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
    image: "/images/products/versace-eros-edp-main.jpg",
    images: [{ url: "/images/products/versace-eros-edp-main.jpg", source: "fragram", caption: "Versace Eros Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt mát, nổi bật và khá dễ gây chú ý. Hợp đi tối, đi chơi hoặc người thích mùi trẻ trung có lực. Nếu bạn thích kiểu kín đáo và nhẹ nhàng, bản này sẽ hơi ồn.",
    productCopy: `Versace Eros EDP là kiểu nước hoa sinh ra để gây chú ý. Mùi hương mở đầu bằng cảm giác mát sáng của bạc hà và cam chanh, sau đó nhanh chóng đi vào lớp ngọt ấm với vanilla và gỗ. Sự kết hợp này tạo nên một tổng thể vừa trẻ trung, vừa quyến rũ, vừa có độ bùng nổ rất đặc trưng của dòng Eros.

So với bản EDT, Eros EDP mượt hơn, đỡ chói hơn và có chiều sâu hơn. Nó vẫn giữ tinh thần sexy, năng lượng cao và hướng ngoại, nhưng được làm tròn để dễ dùng hơn trong nhiều tình huống. Đây là kiểu mùi hợp với người thích được chú ý, thích cảm giác nổi bật khi xuất hiện trong đám đông.

Trên da, Versace Eros EDP phát triển khá đẹp. Lớp tươi mát đầu mang lại cảm giác sảng khoái, sau đó phần ngọt ấm bắt đầu chiếm ưu thế và giúp mùi trở nên dày, hấp dẫn hơn. Nó đặc biệt hợp với các buổi tối, đi bar, đi chơi cuối tuần hoặc những buổi hẹn hò cần cảm giác tự tin.

Về hiệu năng, đây là chai lưu hương tốt và tỏa hương khá rõ. Nếu dùng trong thời tiết mát hoặc buổi tối thì rất đẹp. Ở khí hậu nóng ẩm Việt Nam, nên tiết chế số lần xịt vào ban ngày để tránh cảm giác hơi ngọt quá mức.

Nếu bạn muốn một chai nước hoa nam trẻ trung, gợi cảm và có độ party rõ rệt, Versace Eros EDP là ứng viên rất mạnh. Nó không theo hướng lịch lãm kín đáo, mà thiên về sự tự tin, bốc lửa và dễ tạo ấn tượng ngay từ những phút đầu.`,
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
    image: "/images/products/acqua-di-gio-profondo-main.jpg",
    images: [{ url: "/images/products/acqua-di-gio-profondo-main.jpg", source: "fragram", caption: "Giorgio Armani Acqua di Giò Profondo Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam biển, sạch và hiện đại. Hợp người cần cảm giác mát, gọn và dễ dùng trong thời tiết nóng. Nếu bạn thích mùi ngọt ấm hoặc quá dày, bản này sẽ hơi nhẹ nhàng.",
    productCopy: `Acqua di Giò Profondo EDP mang tinh thần biển xanh, sạch và hiện đại, nhưng được làm sâu hơn và nam tính hơn so với những mùi aquatic thông thường. Ngay từ đầu, mùi cho cảm giác mát, khoáng và rất thoáng, sau đó dần đi vào lớp hương thơm gọn gàng hơn với thảo mộc và nền gỗ nhẹ. Tổng thể tạo cảm giác tươi nhưng không mỏng, sạch nhưng không nhạt.

Điểm đẹp của Profondo là sự cân bằng giữa cảm giác biển và sự trưởng thành. Nó không quá sporty, cũng không đi theo hướng văn phòng khô cứng. Mùi hương này giống hình ảnh một người đàn ông gọn gàng, điềm tĩnh, thích sự chỉn chu nhưng không phô trương. Vì vậy, nó rất dễ dùng trong đời sống thường ngày.

Khi lên da, Profondo giữ được sự mát mẻ khá lâu, sau đó trở nên ấm và sạch hơn ở lớp nền. Nó không phải kiểu gây chú ý mạnh, mà là kiểu khiến người đối diện cảm thấy bạn rất dễ gần và có gu. Đây là một trong những lý do chai này được nhiều người chọn cho môi trường công sở hoặc mùa nóng.

Về hiệu năng, Acqua di Giò Profondo EDP lưu hương khá ổn với độ tỏa vừa phải. Trong khí hậu Việt Nam, đây là một trong những chai hoạt động đẹp nhất vào ban ngày, đặc biệt khi đi làm, đi gặp khách hoặc đi ra ngoài trong thời tiết nóng ẩm.

Nếu bạn muốn một chai nước hoa nam tươi sạch, hiện đại và dễ dùng mà vẫn có chiều sâu hơn nhóm aquatic phổ thông, Profondo là lựa chọn rất đáng thử. Nó không quá ồn ào, nhưng càng dùng lâu càng thấy hợp lý và dễ gắn bó.`,
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
    image: "/images/products/afnan-9pm-main.jpg",
    images: [{ url: "/images/products/afnan-9pm-main.jpg", source: "fragram", caption: "Afnan 9PM Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt, vui và rất dễ gây chú ý ở tầm giá dễ tiếp cận. Hợp đi tối, đi chơi hoặc người trẻ thích mùi nổi. Nếu bạn ghét mùi ngọt đậm, bản này có thể hơi nhiều.",
    productCopy: `Afnan 9PM EDP là một trong những chai nước hoa được nhắc đến nhiều ở phân khúc dễ tiếp cận vì nó cho cảm giác rất vui, rất trẻ và khá cuốn. Mùi mở đầu ngọt sáng với trái cây và chút cay nhẹ, sau đó chuyển dần sang lớp vanilla ấm, mềm và khá dày. Tổng thể mang màu sắc party rõ rệt, thiên về sự nổi bật hơn là kín đáo.

Điểm dễ thích của Afnan 9PM là nó cho cảm giác vào mood rất nhanh. Đây là kiểu mùi không cần suy nghĩ nhiều: đi chơi, gặp bạn, hẹn hò tối, cà phê cuối tuần hoặc những dịp muốn ăn mặc gọn gàng hơn bình thường đều dùng ổn. Nó tạo cảm giác trẻ, năng lượng cao và hơi nghịch một chút.

Trên da, lớp ngọt của 9PM hiện lên khá rõ, nhưng không theo hướng quá nặng nề nếu dùng đúng liều. Sau khi lớp đầu qua đi, chai này trở nên mềm hơn, có chút ấm và ôm da hơn, giúp tổng thể dễ gần hơn. Đây là kiểu mùi thường hợp với người trẻ hoặc người thích vibe nổi bật.

Về hiệu năng, Afnan 9PM có độ lưu hương tốt và tỏa hương khá mạnh trong tầm giá. Chính vì vậy, nó hợp với buổi tối hoặc thời tiết mát hơn ban ngày nóng gắt. Ở Việt Nam, nếu dùng trong không gian kín thì chỉ cần xịt vừa đủ để tránh cảm giác hơi dày.

Nếu bạn muốn một chai nước hoa nam giá tốt, dễ gây chú ý và hợp cho những buổi tối vui vẻ, Afnan 9PM là lựa chọn rất đáng thử. Nó không quá tinh tế kiểu niche cao cấp, nhưng bù lại có độ hiệu quả cao và rất biết cách tạo không khí.`,
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
    perfumer: "Quentin Bisch, Natalie Gracia-Cetto",
    gender: "nam",
    image: "/images/products/jpg-le-male-le-parfum-main.jpg",
    images: [{ url: "/images/products/jpg-le-male-le-parfum-main.jpg", source: "fragram", caption: "Jean Paul Gaultier Le Male Le Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt ấm, có bạch đậu khấu và vanilla rất dễ gây thiện cảm. Hợp đi tối, hẹn hò và trời mát. Nếu bạn ghét mùi ngọt hoặc cần mùi thật thoáng, bản này sẽ hơi dày.",
    productCopy: `## Mùi hương tổng thể
Le Male Le Parfum là phiên bản trưởng thành và sang hơn rõ rệt so với DNA Le Male gốc. Nó giữ tinh thần gợi cảm, ngọt ấm và dễ gây chú ý, nhưng đẩy lên một tầng sâu hơn với bạch đậu khấu, oải hương, vanilla và nhóm gỗ hổ phách. Đây là kiểu mùi rất hợp với thị hiếu Việt Nam: dễ ngửi, dễ khen, có độ sexy rõ nhưng không quá trẻ con.

Điểm mạnh của chai này là cảm giác dress up rất rõ. Chỉ cần áo sơ mi tối màu, blazer hoặc outfit gọn gàng một chút là Le Male Le Parfum lên đúng vibe. Nó không cố làm mùi niche khó hiểu, mà tập trung vào việc khiến người dùng trở nên hấp dẫn hơn trong bối cảnh buổi tối, hẹn hò, tiệc tùng nhẹ hoặc sự kiện có ăn mặc. Với ai thích nước hoa nam vừa sang vừa có độ ngọt cuốn, đây là con bài rất mạnh.

## Diễn biến trên da
Mở đầu là bạch đậu khấu cay ấm khá bắt mũi, đi cùng chút oải hương đặc trưng của dòng Le Male. Nhưng thay vì hướng aromatic barbershop, bản Le Parfum nhanh chóng chuyển sang nền vanilla, gỗ và amber mềm, tạo cảm giác dày và mượt hơn. Trên da ấm, mùi lên ngọt và quyến rũ hơn khá rõ.

Giai đoạn drydown là lúc chai này đẹp nhất: ngọt nhưng không kẹo, ấm nhưng không ngột nếu xịt đúng lượng. Nó tạo cảm giác ôm da rất tốt, đặc biệt khi đứng gần. Nhược điểm nhỏ là nếu dùng quá tay trong thời tiết nóng ẩm, vanilla và amber có thể hơi dày, khiến tổng thể nặng hơn mong muốn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Le Male Le Parfum có hiệu năng tốt trong phân khúc designer: lưu hương thường 7-9 giờ, tỏa hương ở mức khá trong 1-2 giờ đầu. Với thời tiết Việt Nam, nó hợp nhất cho chiều tối, tối, phòng máy lạnh, đi chơi, đi date hoặc các dịp muốn tạo sức hút rõ ràng.

Chai này không phải lựa chọn tối ưu cho buổi trưa nóng gắt, di chuyển ngoài trời nhiều hay môi trường quá kín nếu mày xịt nặng tay. Dùng đẹp nhất là 3-5 xịt tùy hoàn cảnh. Ưu điểm lớn là rất dễ được compliment; nhược điểm là độ độc đáo không quá cao với người chơi nước hoa lâu năm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam buổi tối dễ khen, ngọt ấm, sang hơn Le Male gốc và đủ nổi bật để dùng hẹn hò, Le Male Le Parfum là lựa chọn rất ổn. Nó hợp người trẻ, người thích style hiện đại, có chút sexy nhưng vẫn gọn gàng.

Nên mua khi mày muốn một chai grab and go cho date night hoặc event tối. Nếu mày ghét mùi ngọt hoặc thích kiểu khô, xanh, văn phòng tuyệt đối thì đây không phải hướng hợp nhất.`,
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
    verdict: "Phiên bản Parfum đậm đà, tăng cường vani và hổ phách",
    verdictShort: "VERIFIED",
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
    middleNotes: [{ name: "Oải hương" }, { name: "Hoa diên vĩ" }],
    baseNotes: [{ name: "Vani" }, { name: "Hương phương Đông" }, { name: "Gỗ" }],
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
    image: "/images/products/jpg-ultra-male-main.jpg",
    images: [{ url: "/images/products/jpg-ultra-male-main.jpg", source: "fragram", caption: "Jean Paul Gaultier Ultra Male chính hãng", verified: true }],
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
    image: "/images/products/montblanc-explorer-main.jpg",
    images: [{ url: "/images/products/montblanc-explorer-main.jpg", source: "fragram", caption: "Montblanc Explorer Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam tươi, gỗ và khá dễ dùng. Hợp người cần một chai chỉnh chu, nam tính nhẹ và giá dễ vào hơn nhóm cao cấp. Nếu bạn cần mùi thật khác biệt, bản này hơi an toàn.",
    productCopy: `Montblanc Explorer EDP là kiểu nước hoa nam rất dễ dùng và dễ tạo thiện cảm. Mùi mở đầu sáng, thoáng và hơi citrus, sau đó đi vào lớp hương gỗ sạch, khô và gọn gàng. Tổng thể cho cảm giác hiện đại, lịch sự và không quá phô trương, rất hợp với người thích phong cách chỉn chu trong đời sống thường ngày.

Điểm mạnh của Explorer là sự an toàn theo nghĩa tích cực. Nó không gây sốc, không quá ngọt, không quá cay, cũng không quá trẻ. Đây là kiểu mùi bạn có thể cầm lên dùng khi đi làm, gặp đối tác, đi cà phê, đi ăn tối hoặc đi xa mà gần như không sợ lệch hoàn cảnh.

Trên da, Explorer giữ được sự sạch và nam tính khá ổn định. Lớp nền gỗ hiện lên rõ hơn sau một lúc, giúp mùi có chiều sâu hơn thay vì chỉ dừng ở cảm giác tươi mát. Nó cho cảm giác người mặc gọn gàng, thực tế và có gu vừa đủ mà không cần cố gắng quá nhiều.

Về hiệu năng, Montblanc Explorer EDP lưu hương khá và tỏa hương ở mức vừa phải. Nó không phải kiểu bùng nổ, nhưng đủ để người đứng gần cảm nhận được sự hiện diện. Trong khí hậu Việt Nam, đây là chai rất dễ dùng quanh năm, nhất là cho môi trường văn phòng và di chuyển hằng ngày.

Nếu bạn cần một chai nước hoa nam dễ dùng, lịch sự, hợp nhiều tình huống và có cảm giác cao cấp hơn tầm giá, Montblanc Explorer là lựa chọn đáng tin cậy. Nó không quá độc lạ, nhưng chính sự gọn gàng và hiệu quả ổn định mới là điều làm chai này được ưa chuộng lâu dài.`,
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
    image: "/images/products/prada-lhomme-main.jpg",
    images: [{ url: "/images/products/prada-lhomme-main.jpg", source: "fragram", caption: "Prada L'Homme Eau de Toilette chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam sạch, phấn và rất chỉnh chu. Hợp môi trường văn phòng, gặp khách hoặc người thích hình ảnh lịch sự. Nếu bạn thích mùi dày, tối hoặc nổi bật mạnh, bản này sẽ hơi hiền.",
    productCopy: `Prada L'Homme EDT là một trong những chai nước hoa nam thể hiện rất rõ tinh thần sạch sẽ, tinh tế và sang theo cách kín đáo. Mùi hương mở đầu gọn, sáng, sau đó nhanh chóng đi vào lớp iris phấn nhẹ đặc trưng của Prada, kết hợp cùng neroli và nền gỗ mềm. Tổng thể tạo cảm giác như áo sơ mi trắng vừa là phẳng: sạch, mượt, sang và rất chỉn chu.

Điểm đẹp của Prada L'Homme nằm ở sự thanh lịch. Nó không cố tỏ ra nam tính kiểu cơ bắp hay gây chú ý bằng độ ngọt mạnh. Thay vào đó, chai này cho cảm giác người mặc có gu, biết chăm chút bản thân và luôn xuất hiện trong trạng thái gọn gàng nhất. Đây là kiểu mùi rất hợp với dân văn phòng, môi trường công sở hoặc các dịp cần sự lịch sự.

Khi lên da, lớp iris của Prada L'Homme hiện ra rất mượt, hơi phấn nhưng không hề nữ tính. Nó tạo cảm giác sạch kiểu cao cấp, gần như mùi của sự chỉn chu hơn là mùi của một note hương cụ thể. Nền gỗ nhẹ phía dưới giúp tổng thể không bị quá mềm, giữ lại sự nam tính và trưởng thành cần thiết.

Về hiệu năng, Prada L'Homme EDT lưu hương khá ổn và tỏa hương ở mức vừa phải. Đây không phải kiểu chai bùng nổ, nhưng lại rất đẹp trong môi trường gần, đặc biệt là văn phòng, họp hành, gặp khách hay đi ăn tối nhẹ nhàng. Trong khí hậu Việt Nam, chai này dùng ban ngày rất ổn vì cảm giác sạch và thoáng.

Nếu bạn cần một chai nước hoa nam sang, lịch sự và dễ khiến người khác đánh giá là người này rất gọn gàng, Prada L'Homme EDT là lựa chọn cực mạnh. Nó không dành cho ai thích sự nổi loạn, nhưng lại rất đáng giá với người đề cao sự tinh tế và ổn định lâu dài.`,
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
    verdict: "Hương iris-amber thanh lịch, phong cách văn phòng tinh tế",
    verdictShort: "VERIFIED",
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
    topNotes: [{ name: "Hoa cam Neroli" }, { name: "Tiêu đen" }, { name: "Bạch đậu khấu" }, { name: "Hạt cà rốt" }],
    middleNotes: [{ name: "Hoa diên vĩ" }, { name: "Hoa violet" }, { name: "Phong lữ thảo" }, { name: "Mate" }],
    baseNotes: [{ name: "Hổ phách" }, { name: "Gỗ tuyết tùng" }, { name: "Gỗ đàn hương" }, { name: "Hoắc hương" }],
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
    image: "/images/products/terre-dhermes-edt-main.jpg",
    images: [{ url: "/images/products/terre-dhermes-edt-main.jpg", source: "fragram", caption: "Hermès Terre d'Hermès Eau de Toilette chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam cam chanh, khoáng và gỗ rất trưởng thành. Hợp người thích sự điềm tĩnh, lịch sự và hơi khô. Nếu bạn thích mùi ngọt hoặc dễ gần ngay từ đầu, bản này có thể hơi khó hơn.",
    productCopy: `Terre d'Hermès EDT là một trong những chai nước hoa nam có cá tính rất riêng. Mùi mở đầu với cam chanh khô, sáng nhưng không quá mọng, sau đó nhanh chóng đi vào phần khoáng đất, tiêu nhẹ và nền gỗ khô đặc trưng. Tổng thể tạo cảm giác rất trưởng thành, rất trí thức và có chiều sâu, khác hẳn kiểu mùi ngọt hoặc blue fragrance phổ biến.

Điểm hấp dẫn của Terre d'Hermès nằm ở chất điềm tĩnh. Nó không phải kiểu bước vào là bùng nổ, mà là kiểu càng đứng gần, càng để ý, người ta càng thấy thú vị. Mùi hương này gợi ra hình ảnh một người đàn ông tự tin, biết mình là ai, không cần quá nhiều phô trương để tạo ấn tượng.

Trên da, chai này phát triển theo hướng khô và khoáng rất đẹp. Cam chanh ở đây không ngọt mà hơi đắng nhẹ, giúp tổng thể có cảm giác thanh và sang. Phần nền gỗ đất khiến Terre d'Hermès mang một chất rất riêng: nam tính nhưng không ồn, cổ điển nhưng không hề già cỗi.

Về hiệu năng, Terre d'Hermès EDT lưu hương khá và tỏa hương ở mức vừa phải. Nó hợp cho đi làm, gặp đối tác, những buổi trò chuyện nghiêm túc hoặc bất kỳ dịp nào bạn muốn mình toát ra vẻ chững chạc và đáng tin. Trong khí hậu Việt Nam, chai này dùng ban ngày khá ổn vì độ khô và thoáng của nó.

Nếu bạn muốn một chai nước hoa nam có bản sắc riêng, trưởng thành và không chạy theo số đông, Terre d'Hermès EDT là lựa chọn rất đáng thử. Nó không phải kiểu nịnh mũi ngay lập tức với tất cả mọi người, nhưng với người hợp gu, đây là một mùi hương rất khó thay thế.`,
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
    verdict: "Hương gỗ-khoáng biểu tượng, dẫn đầu dòng citrus-earthy cho nam",
    verdictShort: "VERIFIED",
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
    middleNotes: [{ name: "Tiêu" }, { name: "Phong lữ thảo" }, { name: "Đá lửa" }],
    baseNotes: [{ name: "Cỏ hương bài" }, { name: "Gỗ tuyết tùng" }, { name: "Hoắc hương" }, { name: "An tức hương" }],
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
  },
  {
    id: "dior-homme-intense",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dior Homme Intense",
    subName: "Eau de Parfum",
    perfumer: "François Demachy",
    gender: "nam",
    image: "/images/products/dior-homme-intense-main.jpg",
    images: [{ url: "/images/products/dior-homme-intense-main.jpg", source: "fragram", caption: "Dior Homme Intense Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam phấn, iris và khá sang theo hướng chỉnh chu. Hợp người thích vẻ lịch sự, đi tối hoặc trời mát. Nếu bạn chỉ thích mùi sạch thể thao, bản này sẽ hơi điệu hơn gu đó.",
    productCopy: `Dior Homme Intense EDP là một trong những chai nước hoa nam mang chất sang và tinh tế rất riêng. Mùi hương nổi bật bởi iris phấn mịn, quyện cùng chút cacao và nền gỗ ấm, tạo cảm giác mềm, sạch nhưng vẫn rất đàn ông. Đây không phải kiểu nam tính ồn ào hay thể thao, mà là kiểu lịch lãm, có gu và khá cuốn theo cách trầm tĩnh.

Điểm đẹp của chai này nằm ở sự mượt mà. Dior Homme Intense không mở đầu quá bùng nổ, mà tiến vào da theo cách rất gọn và sang. Cảm giác phấn ở đây không hề nữ tính, ngược lại còn khiến tổng thể trở nên chỉn chu và cao cấp hơn. Mùi này đặc biệt hợp với áo sơ mi, blazer, suit hoặc những dịp cần hình ảnh trưởng thành.

Khi khô xuống, lớp gỗ và chút ngọt nhẹ giúp mùi trở nên ấm hơn, quyến rũ hơn. Nó không gây chú ý kiểu ồn ào, nhưng người đứng gần thường sẽ cảm nhận được nét mềm mại và rất khác biệt. Đây là kiểu nước hoa hợp với người thích sự tinh tế hơn là khoe độ mạnh.

Về hiệu năng, Dior Homme Intense EDP lưu hương khá tốt và tỏa hương ở mức vừa phải. Dùng đi làm văn phòng, hẹn hò tối, dự tiệc hoặc những không gian gần đều rất đẹp. Trong khí hậu Việt Nam, chai này hợp hơn vào buổi tối, ngày mát hoặc môi trường máy lạnh để giữ được độ thanh lịch của mùi.

Nếu bạn muốn một chai nước hoa nam sang, mềm, khác biệt với số đông và có chất gentleman rõ ràng, Dior Homme Intense là lựa chọn rất đáng tiền. Nó không hợp với người thích mùi quá tươi hay quá thể thao, nhưng lại cực hợp với ai đang tìm một mùi hương nam trưởng thành và có gu rõ nét.`,
    article: `Tại Maison de SON, Dior Homme Intense là một trong những chai nước hoa nam nổi tiếng nhất ở nhóm phấn iris. Nó không ồn ào nhưng có sự sang và độ chỉnh chu rất riêng, hợp với người thích vẻ nam tính mềm hơn kiểu thể thao thông thường.

### Nguồn gốc và xuất xứ
Dior Homme Intense thuộc dòng Dior Homme của Dior, thương hiệu cao cấp đến từ Pháp. Đây là line nam quan trọng của hãng, nổi tiếng với chất iris khác biệt.

### Ra mắt khi nào?
Dior Homme Intense ra mắt năm 2007 và nhanh chóng trở thành chai tham chiếu ở nhóm mùi phấn sang cho nam.

### Câu chuyện ra đời
Dòng Dior Homme chọn hướng đi khác với nhiều chai nam đại trà bằng việc nhấn mạnh iris, cacao và cảm giác mềm mịn. Bản Intense là phiên bản dày và sang hơn rõ.

### Có những phiên bản nào trong dòng Dior Homme?
- Dior Homme EDT: sáng và dễ dùng hơn
- Dior Homme Intense: phấn, sang, đi tối đẹp
- Dior Homme Parfum: dày và tối hơn nữa

### Mùi hương mang lại cảm giác gì?
Iris đi lên rất rõ, đi cùng ambrette, cacao và gỗ tạo cảm giác mềm, phấn, chỉn chu và hơi ăn diện. Đây là kiểu mùi dễ làm người khác thấy bạn có gu hơn bình thường.

### Khi nào nên dùng?
- Đi tối, hẹn hò, trời mát
- Hợp người thích mùi phấn sang và khác số đông
- Không hợp lắm nếu bạn chỉ thích mùi sạch thể thao

### Nhận xét của Maison de SON
Dior Homme Intense rất đẹp nếu gu của bạn thích sự lịch lãm mềm mại. Điểm yếu là nó không phải kiểu ai cũng hợp ngay từ lần đầu xịt.`,
    verdict: "Mùi này phấn, sang và khá có gu. Hợp người thích phong cách lịch sự, chỉn chu và đi tối đẹp. Nếu bạn thích mùi thể thao sạch sẽ, bản này hơi điệu hơn gu đó.",
    verdictShort: "PHẤN, SANG, KHÁ CÓ GU",
    score: { scent: 9.0, uniqueness: 8.6, compliments: 8.7, value: 8.2, total: 8.6 },
    vibes: [
      { label: "Lịch lãm", icon: "🕴️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 46, summer: 18, fall: 90, winter: 96 },
    dayNight: { day: 28, night: 95 },
    topNotes: [{ name: "Lavender" }],
    middleNotes: [{ name: "Iris" }, { name: "Ambrette" }],
    baseNotes: [{ name: "Cacao" }, { name: "Vetiver" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Phấn", value: 80, color: "#d7bde2" },
      { name: "Iris", value: 72, color: "#c39bd3" },
      { name: "Gỗ", value: 32, color: "#8B4513" },
      { name: "Ấm", value: 28, color: "#e67e22" }
    ],
    tags: ["Nam", "Lịch lãm", "Buổi tối", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 3400000,
    shopeeOffers: []
  },
  {
    id: "valentino-uomo-born-in-roma-intense",
    brandSlug: "valentino",
    brand: "VALENTINO",
    name: "Uomo Born In Roma Intense",
    subName: "Eau de Parfum Intense",
    perfumer: "Antoine Maisondieu & Guillaume Flavigny",
    gender: "nam",
    image: "/images/products/valentino-uomo-born-in-roma-intense-main.jpg",
    images: [{ url: "/images/products/valentino-uomo-born-in-roma-intense-main.jpg", source: "fragram", caption: "Valentino Uomo Born in Roma Intense chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt ấm, hiện đại và dễ gây thiện cảm. Hợp đi tối, hẹn hò hoặc người thích mùi nam trẻ mà vẫn lịch sự. Nếu bạn ghét vanilla ngọt, bản này có thể hơi nhiều.",
    productCopy: `Valentino Uomo Born In Roma Intense EDP là kiểu nước hoa nam đi theo hướng ngọt ấm hiện đại, dễ thích và rất hợp với thị hiếu ngày nay. Mùi mở đầu mềm, hơi ngọt và có cảm giác sạch, sau đó dần chuyển sang lớp vanilla dày hơn với nền gỗ ấm phía dưới. Tổng thể cho cảm giác trẻ trung, mượt và khá cuốn theo kiểu gần gũi.

Điểm mạnh của chai này là nó vừa sexy vừa dễ dùng. Nó không quá ngọt như một số chai party scent, nhưng cũng không quá kín như những mùi formal. Nhờ đó, Uomo Born In Roma Intense rất hợp với các buổi hẹn hò, đi chơi tối, ăn tối cuối tuần hoặc những lúc muốn thơm theo kiểu hiện đại và gợi cảm vừa đủ.

Khi lên da, mùi phát triển theo hướng ngày càng mềm và ấm hơn. Vanilla đóng vai trò khá rõ, nhưng được giữ trong mức dễ chịu nhờ phần nền gỗ và cảm giác sạch ở phía trên. Điều này giúp chai nước hoa có độ nịnh mũi cao, đặc biệt với người xung quanh trong khoảng cách gần.

Về hiệu năng, Valentino Uomo Born In Roma Intense EDP có độ lưu hương tốt và tỏa hương khá ổn. Trong điều kiện Việt Nam, nó sẽ đẹp nhất vào buổi tối, trời mát hoặc không gian máy lạnh. Nếu dùng ban ngày, chỉ cần tiết chế một chút là đủ để giữ độ sang mà không bị quá dày.

Nếu bạn muốn một chai nước hoa nam vừa trendy, vừa dễ được khen, vừa có chất quyến rũ hiện đại, đây là lựa chọn rất đáng cân nhắc. Nó không quá khác người, nhưng lại làm rất tốt nhiệm vụ khiến bạn trở nên thơm, cuốn và dễ được nhớ đến.`,
    article: `Tại Maison de SON, Uomo Born In Roma Intense là một trong những chai nước hoa nam hiện đại dễ được thích nhanh. Nó ngọt ấm, có vanilla rõ nhưng vẫn giữ được cảm giác sạch sẽ vừa đủ để không quá nặng nề.

### Nguồn gốc và xuất xứ
Đây là sản phẩm thuộc Valentino, thương hiệu Ý nổi tiếng với hình ảnh thời trang trẻ và sang. Dòng Born In Roma hướng tới sự hiện đại và dễ tiếp cận hơn với số đông.

### Ra mắt khi nào?
Uomo Born In Roma Intense ra mắt năm 2023 như một phiên bản đậm hơn và thiên tối hơn so với bản gốc.

### Câu chuyện ra đời
Sau khi Born In Roma được yêu thích nhờ sự trẻ trung, bản Intense ra đời để tăng độ quyến rũ và độ bám, phục vụ tốt hơn cho đi tối và hẹn hò.

### Mùi hương mang lại cảm giác gì?
Vanilla nổi khá rõ, đi cùng lavender và vetiver tạo cảm giác ngọt ấm, hiện đại và dễ tạo thiện cảm. Nó không quá phức tạp nhưng rất hợp gu số đông.

### Khi nào nên dùng?
- Hẹn hò, đi tối, trời mát
- Hợp người thích mùi nam trẻ nhưng vẫn lịch sự
- Không hợp lắm nếu bạn ghét vanilla ngọt

### Nhận xét của Maison de SON
Đây là kiểu chai thơm ngay, dễ thích ngay. Điểm yếu là cá tính không quá sâu, nhưng bù lại hiệu quả thực chiến rất tốt.`,
    verdict: "Mùi này ngọt ấm, hiện đại và dễ mến. Hợp đi tối hoặc lúc muốn tạo thiện cảm nhanh. Nếu bạn ghét vanilla, bản này hơi ngọt.",
    verdictShort: "NGỌT ẤM, HIỆN ĐẠI, DỄ MẾN",
    score: { scent: 8.7, uniqueness: 7.8, compliments: 9.1, value: 8.3, total: 8.5 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Hiện đại", icon: "⚡" },
      { label: "Buổi tối", icon: "🌙" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 55, summer: 20, fall: 88, winter: 94 },
    dayNight: { day: 34, night: 96 },
    topNotes: [{ name: "Vanilla" }],
    middleNotes: [{ name: "Lavender" }],
    baseNotes: [{ name: "Vetiver" }],
    accords: [
      { name: "Ngọt", value: 80, color: "#8B0000" },
      { name: "Vanilla", value: 72, color: "#f5deb3" },
      { name: "Thơm thảo mộc", value: 34, color: "#2c7a4b" },
      { name: "Gỗ", value: 24, color: "#8B4513" }
    ],
    tags: ["Nam", "Hẹn hò", "Buổi tối", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2950000,
    shopeeOffers: []
  },
  {
    id: "jpg-le-beau-le-parfum",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Le Beau Le Parfum",
    subName: "Parfum",
    perfumer: "Quentin Bisch",
    gender: "nam",
    image: "/images/products/jpg-le-beau-le-parfum-main.jpg",
    images: [{ url: "/images/products/jpg-le-beau-le-parfum-main.jpg", source: "fragram", caption: "Jean Paul Gaultier Le Beau Le Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam dừa, ngọt và khá gợi cảm theo hướng đi chơi. Hợp người thích mùi tropical nhưng vẫn có độ tối. Nếu bạn ghét dừa hoặc ngọt trái cây, bản này có thể không hợp.",
    productCopy: `JPG Le Beau Le Parfum là kiểu nước hoa nam mang màu sắc nhiệt đới rất rõ, nhưng được làm dày và quyến rũ hơn so với những mùi fresh thông thường. Mùi mở ra với cảm giác ngọt mát của trái cây, sau đó nhanh chóng đi vào lớp dừa, đậu tonka và gỗ ấm. Tổng thể vừa ngọt, vừa mềm, vừa có sự gợi cảm rất hiện đại.

Điểm đặc biệt của chai này là nó tạo cảm giác vacation sexy rất rõ. Mùi hương gợi ra hình ảnh một người đàn ông tự tin, có chút phóng khoáng, thích tận hưởng và biết cách làm mình trở nên hấp dẫn hơn. Nó hợp với đi chơi tối, hẹn hò, du lịch hoặc những dịp không quá nghiêm túc.

Khi lên da, Le Beau Le Parfum trở nên mượt và ôm hơn sau lớp đầu. Phần ngọt ở đây không quá kẹo mà thiên về hướng kem, ấm và quyến rũ. Dừa và tonka giúp chai này có cá tính riêng, khác biệt với nhiều mùi nam ngọt phổ biến trên thị trường.

Về hiệu năng, chai này lưu hương tốt và tỏa hương khá ổn, đặc biệt trong không gian gần. Trong điều kiện khí hậu Việt Nam, nó hợp hơn vào buổi tối hoặc thời tiết dịu mát. Nếu dùng ban ngày nắng mạnh thì nên xịt vừa tay để mùi không trở nên quá dày.

Nếu bạn thích một chai nước hoa nam ngọt cuốn, có chất nhiệt đới và tạo cảm giác sexy rõ rệt, JPG Le Beau Le Parfum là lựa chọn rất đáng thử. Nó không theo hướng formal cổ điển, nhưng lại rất hợp với người muốn mùi hương của mình có màu sắc riêng và dễ khiến người khác nhớ.`,
    article: `Tại Maison de SON, Le Beau Le Parfum là một trong những chai nước hoa nam đi tối vui và gợi cảm nhất của Jean Paul Gaultier. Nó có nét tropical từ dừa và dứa nhưng được làm dày hơn để không bị quá đơn giản.

### Nguồn gốc và xuất xứ
Le Beau thuộc Jean Paul Gaultier, thương hiệu Pháp nổi tiếng với những line có cá tính rất rõ. Đây là nhánh nam trẻ trung và vui hơn trong catalog của hãng.

### Ra mắt khi nào?
Le Beau Le Parfum ra mắt năm 2022, sau khi bản Le Beau gốc tạo được chỗ đứng khá tốt.

### Câu chuyện ra đời
Bản Le Parfum ra đời để tăng độ quyến rũ và chiều sâu cho công thức tropical của Le Beau, giúp mùi dùng tốt hơn vào buổi tối và trời mát.

### Mùi hương mang lại cảm giác gì?
Dứa, dừa, đậu tonka và gỗ tạo nên cảm giác ngọt, hơi béo, vui và có chút sexy. Nó không phải kiểu mùi nghiêm túc mà thiên về hưởng thụ rõ hơn.

### Khi nào nên dùng?
- Đi chơi, đi tối, nghỉ dưỡng
- Hợp người thích mùi tropical ngọt có điểm nhấn
- Không hợp lắm nếu bạn ghét dừa hoặc muốn mùi văn phòng an toàn

### Nhận xét của Maison de SON
Le Beau Le Parfum dễ ghi điểm nếu bạn thích mùi vui và bắt mũi. Điểm yếu là không hợp mọi hoàn cảnh.`,
    verdict: "Mùi này tropical, ngọt và khá gợi cảm. Hợp đi chơi, đi tối hoặc lúc muốn mùi nam vui hơn bình thường. Nếu bạn ghét dừa, bản này không hợp.",
    verdictShort: "TROPICAL, NGỌT, KHÁ GỢI CẢM",
    score: { scent: 8.8, uniqueness: 8.2, compliments: 9.0, value: 8.5, total: 8.6 },
    vibes: [
      { label: "Đi chơi", icon: "🏝️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Quyến rũ", icon: "🔥" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 62, summer: 38, fall: 84, winter: 80 },
    dayNight: { day: 40, night: 92 },
    topNotes: [{ name: "Dứa" }, { name: "Gừng" }],
    middleNotes: [{ name: "Dừa" }, { name: "Gỗ" }],
    baseNotes: [{ name: "Đậu tonka" }, { name: "Hổ phách" }],
    accords: [
      { name: "Ngọt", value: 74, color: "#8B0000" },
      { name: "Tropical", value: 66, color: "#f39c12" },
      { name: "Hổ phách", value: 32, color: "#d4a017" },
      { name: "Gỗ", value: 28, color: "#8B4513" }
    ],
    tags: ["Nam", "Đi chơi", "Buổi tối", "Cao cấp"],
    sizes: ["10ml Chiết", "75ml Fullbox", "125ml Fullbox"],
    basePrice: 3000000,
    shopeeOffers: []
  },
  {
    id: "mancera-cedrat-boise",
    brandSlug: "mancera",
    brand: "MANCERA",
    name: "Cedrat Boise",
    subName: "Eau de Parfum",
    perfumer: "Pierre Montale",
    gender: "unisex",
    image: "/images/products/mancera-cedrat-boise-main.jpg",
    images: [{ url: "/images/products/mancera-cedrat-boise-main.jpg", source: "fragram", caption: "Mancera Cedrat Boisé Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi citrus, trái cây và gỗ khá đa dụng. Hợp cả nam lẫn nữ nếu thích phong cách sạch sáng nhưng vẫn có chiều sâu. Nếu bạn ghét kiểu citrus hơi synthetic, bản này có thể chưa phải gu.",
    productCopy: `Mancera Cedrat Boisé EDP là một trong những chai niche dễ tiếp cận nhất vì nó cân bằng rất tốt giữa sự tươi sáng và chiều sâu. Mùi mở đầu với citrus rõ, sáng và sạch, sau đó dần đi vào phần trái cây chín vừa, da thuộc nhẹ và nền gỗ mềm. Tổng thể tạo cảm giác sang, gọn và hiện đại, vừa đủ nổi bật để có bản sắc nhưng không quá khó gần.

Điểm mạnh của Cedrat Boisé là tính linh hoạt rất cao. Nó không fresh kiểu thể thao đơn giản, cũng không tối kiểu gỗ khói nặng. Mùi hương này nằm ở khoảng giữa rất đẹp: có độ sáng để dùng ban ngày, có nền gỗ đủ để giữ sự trưởng thành, và có độ tròn để tạo cảm giác cao cấp. Vì thế, nó hợp với khá nhiều độ tuổi và hoàn cảnh, từ đi làm đến gặp gỡ khách hàng hay đi ăn tối nhẹ.

Khi lên da, Cedrat Boisé chuyển lớp khá mượt. Citrus đầu tạo sự bắt mũi nhanh, nhưng càng về sau mùi càng ấm và chỉn chu hơn nhờ phần gỗ. Sự xuất hiện của trái cây ở đây không theo hướng kẹo hay quá ngọt, mà tạo cảm giác mọng vừa phải để tổng thể không bị khô. Chính điều đó khiến chai này vừa nịnh mũi vừa không nhàm.

Về hiệu năng, Mancera Cedrat Boisé làm tốt trong tầm niche dễ tiếp cận. Độ lưu hương khá tốt, độ tỏa vừa đến rõ và khả năng dùng ổn ở nhiều điều kiện là ưu điểm thực tế. Trong khí hậu Việt Nam, đây là chai khá dễ dùng quanh năm nếu xịt vừa tay, đặc biệt đẹp trong môi trường máy lạnh hoặc buổi chiều tối.

Nếu bạn muốn một chai nước hoa unisex sang, sáng, có chất gỗ sạch và đủ linh hoạt để dùng nhiều dịp, Cedrat Boisé là lựa chọn rất hợp lý. Nó không quá nghệ hay quá ngọt, nhưng chính sự cân bằng, hiệu quả và thần thái gọn gàng của nó mới là lý do khiến nhiều người gắn bó lâu dài.`,
    article: `Tại Maison de SON, Cedrat Boise là một trong những chai nước hoa unisex dễ gợi ý nhất của Mancera vì nó vừa sáng vừa có độ bám tốt. Nó cho cảm giác sạch, sang vừa phải và dùng được nhiều hoàn cảnh hơn vẻ ngoài niche của nó.

### Nguồn gốc và xuất xứ
Cedrat Boise thuộc Mancera, thương hiệu Pháp nổi tiếng với các mùi hiệu ứng mạnh và độ bền tốt. Đây là một trong những chai nổi tiếng nhất của hãng.

### Ra mắt khi nào?
Cedrat Boise ra mắt năm 2011 và nhanh chóng trở thành chai tham chiếu của Mancera ở nhóm dễ dùng.

### Câu chuyện ra đời
Giữa nhiều mùi khá dày của Mancera, Cedrat Boise nổi bật vì cho cảm giác sáng, trái cây và gỗ dễ tiếp cận hơn, nên hợp cả người mới lẫn người đã chơi lâu.

### Mùi hương mang lại cảm giác gì?
Citrus mở đầu rất rõ, đi cùng trái cây đen, chút khói nhẹ và gỗ. Tổng thể sạch, có lực vừa đủ và khá linh hoạt.

### Khi nào nên dùng?
- Đi làm, đi chơi, gặp gỡ
- Hợp cả nam và nữ thích mùi citrus gỗ
- Không hợp lắm nếu bạn ghét opening hơi synthetic

### Nhận xét của Maison de SON
Cedrat Boise mạnh ở độ đa dụng và hiệu năng. Điểm yếu là opening không phải ai cũng mê ngay.`,
    verdict: "Mùi này sáng, trái cây và khá đa dụng. Hợp người muốn một chai unisex dễ dùng mà vẫn có lực. Nếu bạn ghét citrus synthetic, bản này có thể chưa hợp.",
    verdictShort: "SÁNG, TRÁI CÂY, KHÁ ĐA DỤNG",
    score: { scent: 8.7, uniqueness: 8.0, compliments: 8.8, value: 8.5, total: 8.5 },
    vibes: [
      { label: "Đa dụng", icon: "🔄" },
      { label: "Unisex", icon: "✨" },
      { label: "Gặp gỡ", icon: "🤝" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 78, summer: 68, fall: 80, winter: 60 },
    dayNight: { day: 82, night: 56 },
    topNotes: [{ name: "Cam chanh" }, { name: "Lý chua đen" }],
    middleNotes: [{ name: "Trái cây" }, { name: "Lá hoắc hương" }],
    baseNotes: [{ name: "Gỗ" }, { name: "Da thuộc" }, { name: "Xạ hương" }],
    accords: [
      { name: "Cam chanh", value: 72, color: "#f7c242" },
      { name: "Trái cây", value: 58, color: "#f39c12" },
      { name: "Gỗ", value: 42, color: "#8B4513" },
      { name: "Da thuộc", value: 20, color: "#6e3b1f" }
    ],
    tags: ["Unisex", "Đa dụng", "Cao cấp", "Gặp gỡ"],
    sizes: ["10ml Chiết", "120ml Fullbox"],
    basePrice: 2400000,
    shopeeOffers: []
  },
  {
    id: "maison-margiela-jazz-club",
    brandSlug: "maison-margiela",
    brand: "MAISON MARGIELA",
    name: "Jazz Club",
    subName: "Eau de Toilette",
    perfumer: "Aliénor Massenet",
    gender: "unisex",
    image: "/images/products/maison-margiela-jazz-club-main.jpg",
    images: [{ url: "/images/products/maison-margiela-jazz-club-main.jpg", source: "fragram", caption: "Maison Margiela Replica Jazz Club Eau de Toilette chính hãng", verified: true }],
    description: "Đây là kiểu mùi rum, tobacco và vani rất có không khí. Hợp người thích cảm giác quán bar, buổi tối và thời tiết mát. Nếu bạn thích mùi sạch sáng, bản này sẽ hơi tối.",
    productCopy: `Maison Margiela Jazz Club EDT là kiểu nước hoa không cố gây choáng ngợp ngay từ phút đầu, mà chinh phục bằng không khí rất rõ. Đúng như tên gọi, chai này gợi ra cảm giác của một quán jazz nhỏ: ánh sáng thấp, gỗ tối màu, ly rum trên bàn và tiếng nhạc chơi chậm. Mùi mở ra với rượu rum và chút cay nhẹ, sau đó thuốc lá, vanilla và nền gỗ dần hiện lên, tạo nên một tổng thể ấm, trầm và rất biết kể chuyện.

Điểm đẹp của Jazz Club là sự lịch lãm không phô trương. Nó không ngọt dày như nhiều chai gourmand boozy, cũng không tối nặng như vài mùi thuốc lá kiểu cổ điển. Thay vào đó, chai này giữ được sự cân bằng rất tốt giữa độ ấm, độ mềm và độ nam tính trung tính, nhờ vậy nó thật sự unisex và rất dễ tạo thiện cảm với người thích gu tinh tế.

Khi lên da, Jazz Club phát triển theo hướng ngày càng mượt. Lớp rum đầu tạo điểm nhấn, nhưng phần đẹp nhất nằm ở giai đoạn sau đó, khi thuốc lá và vanilla hòa vào nhau thành một lớp hương ấm, mềm và hơi khô. Nó không quá bám sát da ngay, mà tạo một sự hiện diện vừa phải, kiểu đủ để người gần bạn nhận ra và thấy bạn có gu.

Về hiệu năng, vì là EDT nên Jazz Club không phải kiểu quá bùng nổ, nhưng độ lưu hương vẫn khá ổn và độ tỏa vừa phải đủ đẹp trong môi trường gần. Trong khí hậu Việt Nam, chai này hợp nhất vào buổi tối, ngày mưa, thời tiết mát hoặc không gian máy lạnh, nơi các lớp hương có thể hiện rõ và giữ được chiều sâu.

Nếu bạn muốn một chai nước hoa unisex có mood rõ, sang theo kiểu kể chuyện và không bị quá đại trà, Maison Margiela Jazz Club là lựa chọn rất đáng thử. Nó không phải kiểu ồn ào để gây chú ý ngay, nhưng lại là kiểu mùi càng ở gần càng thấy tinh tế và đáng nhớ.`,
    article: `Tại Maison de SON, Jazz Club là một trong những chai nước hoa Replica nổi tiếng nhất vì nó tạo ra được bối cảnh rất rõ. Chỉ cần ngửi qua là thấy ngay không khí buổi tối, gỗ, đồ uống và chút ấm áp.

### Nguồn gốc và xuất xứ
Jazz Club thuộc Maison Margiela Replica, thương hiệu Pháp nổi tiếng với các mùi tái hiện lại bối cảnh sống và ký ức. Đây là một trong những bản nổi tiếng nhất của line này.

### Ra mắt khi nào?
Jazz Club ra mắt năm 2013 và giữ được sức hút rất tốt qua nhiều năm.

### Câu chuyện ra đời
Mùi này được xây để gợi hình ảnh một quán jazz ấm, có rum, có thuốc lá và gỗ. Nó không cố quá sạch, mà cố tạo không khí.

### Mùi hương mang lại cảm giác gì?
Rum, tobacco, vanilla và chút tiêu hồng tạo cảm giác ấm, tối, thư giãn và hơi sang. Đây là kiểu mùi có mood rất rõ.

### Khi nào nên dùng?
- Đi tối, trời mát, không gian chill
- Hợp người thích mùi có bối cảnh rõ
- Không hợp lắm nếu bạn cần mùi sáng và đa dụng ban ngày

### Nhận xét của Maison de SON
Jazz Club hay ở chỗ có mood rất riêng. Điểm yếu là không linh hoạt bằng các chai đa dụng hơn.`,
    verdict: "Mùi này ấm, có không khí và khá chill. Hợp đi tối hoặc lúc muốn mùi hương có bối cảnh rõ. Nếu bạn thích mùi sáng sạch, bản này hơi tối.",
    verdictShort: "ẤM, CÓ MOOD, KHÁ CHILL",
    score: { scent: 8.8, uniqueness: 8.4, compliments: 8.5, value: 8.0, total: 8.4 },
    vibes: [
      { label: "Buổi tối", icon: "🌙" },
      { label: "Chill", icon: "🥃" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 42, summer: 16, fall: 90, winter: 94 },
    dayNight: { day: 22, night: 96 },
    topNotes: [{ name: "Tiêu hồng" }, { name: "Cam neroli" }],
    middleNotes: [{ name: "Rum" }, { name: "Cây xô thơm" }],
    baseNotes: [{ name: "Thuốc lá" }, { name: "Vanilla" }, { name: "Styrax" }],
    accords: [
      { name: "Thuốc lá", value: 70, color: "#6e3b1f" },
      { name: "Vanilla", value: 42, color: "#f5deb3" },
      { name: "Ấm", value: 40, color: "#e67e22" },
      { name: "Rum", value: 36, color: "#7b4b1f" }
    ],
    tags: ["Unisex", "Buổi tối", "Thu đông", "Cao cấp"],
    sizes: ["10ml Chiết", "30ml Fullbox", "100ml Fullbox"],
    basePrice: 3200000,
    shopeeOffers: []
  },
  {
    id: "kilian-angels-share",
    brandSlug: "kilian",
    brand: "KILIAN",
    name: "Angels' Share",
    subName: "Eau de Parfum",
    perfumer: "Benoist Lapouza",
    gender: "unisex",
    image: "/images/products/kilian-angels-share-main.jpg",
    images: [{ url: "/images/products/kilian-angels-share-main.jpg", source: "fragram", caption: "Kilian Angels' Share Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi cognac, quế và ngọt ấm rất nổi bật. Hợp người thích cảm giác sang, ấm và tiệc tối. Nếu bạn sợ mùi gourmand hoặc ở nơi nóng quanh năm, bản này có thể hơi dày.",
    productCopy: `Kilian Angels' Share EDP là một trong những chai gourmand boozy đẹp nhất ở thế giới niche hiện đại. Mùi hương mở đầu gần như ngay lập tức với cảm giác cognac ngọt ấm, sau đó quế, vanilla và gỗ dần hiện lên, tạo thành một tổng thể dày, mềm và rất sang. Nó gợi ra hình ảnh của rượu ngon, gỗ sồi, ánh đèn vàng và cảm giác xa xỉ được làm một cách rất mượt.

Điều làm Angels' Share nổi bật là nó gourmand nhưng không trẻ con. Đây không phải mùi bánh kẹo ngọt đơn giản, mà là kiểu ngọt có chiều sâu, có độ ấm và có chất trưởng thành rõ rệt. Sự boozy ở đây không quá gắt, mà mượt như rượu hảo hạng đã được làm tròn bởi vanilla và quế. Nhờ vậy, chai này vừa dễ gây nghiện, vừa giữ được sự đắt tiền mà nhiều mùi ngọt khác khó làm được.

Trên da, Angels' Share phát triển rất đẹp theo hướng ngày càng ôm và mượt hơn. Lớp mở đầu rực rỡ và hơi nồng, nhưng sau khoảng 15 đến 20 phút, mùi trở nên tròn, mềm và cực kỳ quyến rũ. Đây là kiểu nước hoa khiến người đứng gần dễ chú ý vì nó tạo ra cảm giác ấm áp, thân mật và hơi say rất tinh tế.

Về hiệu năng, Kilian Angels' Share là chai làm rất tốt trong nhóm gourmand niche. Độ lưu hương lâu, độ tỏa rõ và khả năng để lại dấu ấn là điểm mạnh rất lớn. Trong điều kiện Việt Nam, chai này hợp nhất với buổi tối, phòng máy lạnh, mùa mưa hoặc dịp cuối năm khi thời tiết dịu hơn. Nếu dùng giữa trưa nóng, cần xịt rất tiết chế.

Nếu bạn muốn một chai nước hoa unisex ngọt ấm, sang, có chất rượu đẹp và tạo cảm giác cực kỳ cuốn hút, Angels' Share là lựa chọn rất đáng tiền. Nó không dành cho người chỉ thích sự nhẹ nhàng sạch sẽ, nhưng lại hoàn hảo với ai muốn một mùi hương vừa xa xỉ, vừa cảm xúc, vừa dễ làm người khác nhớ rất lâu.`,
    article: `Tại Maison de SON, Angels' Share là một trong những chai nước hoa unisex nổi tiếng nhất ở nhóm ngọt ấm sang trọng. Nó tạo ấn tượng rất mạnh ngay từ đầu nhờ cảm giác rượu, gỗ và quế rõ rệt.

### Nguồn gốc và xuất xứ
Đây là sản phẩm của Kilian, thương hiệu cao cấp nổi tiếng với hình ảnh sang và khá tiệc tối. Angels' Share là một trong những chai ăn khách nhất của hãng.

### Ra mắt khi nào?
Angels' Share ra mắt năm 2020 và nhanh chóng trở thành hiện tượng trong nhóm gourmand ấm.

### Câu chuyện ra đời
Tên gọi lấy cảm hứng từ phần rượu bay hơi trong quá trình ủ cognac. Vì vậy toàn bộ mùi được xây xoay quanh cảm giác rượu ấm, quế và gỗ.

### Mùi hương mang lại cảm giác gì?
Cognac, quế, tonka và vanilla tạo cảm giác ngọt ấm, sang và rất có mặt. Đây là kiểu mùi nhiều người nhớ rất lâu sau khi ngửi.

### Khi nào nên dùng?
- Đi tối, dịp đặc biệt, trời mát
- Hợp người thích mùi ngọt ấm sang rõ rệt
- Không hợp lắm nếu bạn ở môi trường nóng kín cả ngày

### Nhận xét của Maison de SON
Angels' Share đẹp nếu bạn muốn một mùi có màu sắc rất rõ. Điểm yếu là nó khá dày và khó thành chai dùng hằng ngày.`,
    verdict: "Mùi này ngọt ấm, sang và rất nổi. Hợp dịp đặc biệt hoặc lúc muốn tạo dấu ấn mạnh. Nếu bạn sợ gourmand dày, bản này hơi quá tay.",
    verdictShort: "NGỌT ẤM, SANG, RẤT NỔI",
    score: { scent: 9.2, uniqueness: 8.8, compliments: 9.1, value: 7.6, total: 8.7 },
    vibes: [
      { label: "Dịp đặc biệt", icon: "🥂" },
      { label: "Thu đông", icon: "🍂" },
      { label: "Sang trọng", icon: "💎" }
    ],
    longevity: 9,
    sillage: 8,
    seasons: { spring: 34, summer: 10, fall: 94, winter: 100 },
    dayNight: { day: 18, night: 100 },
    topNotes: [{ name: "Cognac" }],
    middleNotes: [{ name: "Quế" }, { name: "Đậu tonka" }, { name: "Gỗ sồi" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Praline" }, { name: "Gỗ đàn hương" }],
    accords: [
      { name: "Ngọt", value: 86, color: "#8B0000" },
      { name: "Gia vị ấm", value: 68, color: "#e67e22" },
      { name: "Gỗ", value: 34, color: "#8B4513" },
      { name: "Rượu", value: 32, color: "#7b4b1f" }
    ],
    tags: ["Unisex", "Dịp đặc biệt", "Thu đông", "Cao cấp"],
    sizes: ["10ml Chiết", "50ml Fullbox"],
    basePrice: 5600000,
    shopeeOffers: []
  },
  {
    id: "ysl-libre-edp",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Libre",
    subName: "Eau de Parfum",
    perfumer: "Anne Flipo & Carlos Benaïm",
    gender: "nu",
    image: "/images/products/ysl-libre-edp-main.jpg",
    images: [{ url: "/images/products/ysl-libre-edp-main.jpg", source: "fragram", caption: "YSL Libre Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nữ lavender, hoa trắng và vanilla rất hiện đại. Hợp người thích sự sang, nữ tính nhưng vẫn có cá tính. Nếu bạn ghét lavender hoặc mùi ngọt hiện đại, bản này có thể chưa hợp.",
    productCopy: `YSL Libre EDP là một chai nước hoa nữ rất hiện đại, mang tinh thần tự do và tự tin đúng như tên gọi. Mùi mở đầu sáng và thơm với lavender, sau đó phát triển sang hoa trắng và nền vanilla ấm. Tổng thể cho cảm giác nữ tính nhưng không yếu mềm, sang nhưng vẫn có cạnh sắc, rất hợp với hình ảnh người phụ nữ chủ động và có gu riêng.

Điểm đặc biệt của Libre là cách nó dùng lavender theo hướng nữ tính mà không hề cũ. Lavender ở đây không khiến mùi trở nên nam tính, ngược lại còn làm tổng thể thêm hiện đại và khác biệt. Kết hợp với hoa trắng và vanilla, chai này vừa có nét sạch sáng, vừa có độ mềm và độ cuốn cần thiết.

Trên da, Libre EDP phát triển rất gọn. Lớp đầu cho cảm giác sang và hơi sắc, sau đó nền ấm bắt đầu rõ hơn giúp mùi trở nên mượt và dễ gần hơn. Đây là kiểu nước hoa có thể dùng đi làm, gặp gỡ đối tác, đi ăn tối hoặc bất cứ dịp nào bạn muốn mình vừa thơm đẹp vừa thể hiện sự tự tin.

Về hiệu năng, YSL Libre EDP có độ lưu hương tốt và tỏa hương khá. Nó hoạt động ổn ở cả ban ngày lẫn buổi tối, đặc biệt đẹp trong môi trường máy lạnh hoặc thời tiết dịu. Trong khí hậu Việt Nam, đây là chai khá linh hoạt nếu xịt vừa tay.

Nếu bạn muốn một chai nước hoa nữ sang, hiện đại, có cá tính và không quá bánh bèo, YSL Libre EDP là lựa chọn rất đáng thử. Nó không phải kiểu ngọt hiền cổ điển, mà là kiểu thơm đẹp của một người phụ nữ biết mình muốn gì và không ngại thể hiện điều đó.`,
    article: `Tại Maison de SON, Libre EDP là một trong những chai nước hoa nữ hiện đại dễ nhận ra nhất của Yves Saint Laurent. Nó có sự cân bằng khá hay giữa nữ tính, sang và chút cá tính từ lavender.

### Nguồn gốc và xuất xứ
Libre thuộc Yves Saint Laurent, thương hiệu Pháp nổi tiếng với các line nữ hiện đại, thời trang và dễ tạo dấu ấn. Đây là một trong những trụ cột thương mại lớn của hãng.

### Ra mắt khi nào?
Libre EDP ra mắt năm 2019 và nhanh chóng phủ rất mạnh ở phân khúc nữ cao cấp dễ tiếp cận.

### Câu chuyện ra đời
Libre được tạo ra để mang hình ảnh người phụ nữ hiện đại, tự tin và có cá tính hơn những line hoa ngọt truyền thống. Lavender chính là điểm khác biệt rõ của nó.

### Mùi hương mang lại cảm giác gì?
Lavender, hoa cam và vanilla tạo nên cảm giác vừa sang, vừa nữ tính, vừa có nét hiện đại. Đây là kiểu mùi dễ nhận ra giữa đám đông.

### Khi nào nên dùng?
- Đi làm, đi chơi, hẹn hò
- Hợp người thích mùi nữ hiện đại có điểm nhấn
- Không hợp lắm nếu bạn ghét lavender rõ

### Nhận xét của Maison de SON
Libre EDP nổi vì có lý do: nó đẹp, dễ dùng và có cá tính vừa đủ. Điểm yếu là độ đụng hàng khá cao.`,
    verdict: "Mùi này sang, hiện đại và khá dễ nhớ. Hợp người thích mùi nữ vừa đẹp vừa có cá tính. Nếu bạn ghét lavender, bản này có thể chưa hợp.",
    verdictShort: "SANG, HIỆN ĐẠI, KHÁ DỄ NHỚ",
    score: { scent: 8.9, uniqueness: 8.1, compliments: 9.0, value: 8.3, total: 8.6 },
    vibes: [
      { label: "Nữ hiện đại", icon: "✨" },
      { label: "Hằng ngày", icon: "🧴" },
      { label: "Sang trọng", icon: "💎" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 78, summer: 62, fall: 84, winter: 70 },
    dayNight: { day: 84, night: 64 },
    topNotes: [{ name: "Lavender" }, { name: "Quýt" }],
    middleNotes: [{ name: "Hoa cam" }, { name: "Hoa nhài" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Xạ hương" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Hoa trắng", value: 72, color: "#e75480" },
      { name: "Vanilla", value: 42, color: "#f5deb3" },
      { name: "Thơm thảo mộc", value: 32, color: "#2c7a4b" },
      { name: "Ngọt", value: 28, color: "#8B0000" }
    ],
    tags: ["Nữ", "Hiện đại", "Hằng ngày", "Cao cấp"],
    sizes: ["10ml Chiết", "30ml Fullbox", "50ml Fullbox", "90ml Fullbox"],
    basePrice: 2850000,
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-delina",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Delina",
    subName: "Eau de Parfum",
    perfumer: "Quentin Bisch",
    gender: "nu",
    image: "/images/products/parfums-de-marly-delina-main.jpg",
    images: [{ url: "/images/products/parfums-de-marly-delina-main.jpg", source: "fragram", caption: "Parfums de Marly Delina Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nữ hoa hồng, trái cây và hơi chua thanh rất dễ nhận ra. Hợp người thích phong cách nữ tính sang, sáng và nổi bật. Nếu bạn ghét hoa hồng rõ, bản này có thể không hợp.",
    productCopy: `Parfums de Marly Delina EDP là một trong những chai nước hoa nữ niche nổi bật nhất ở nhóm hoa hồng hiện đại. Mùi hương mở đầu tươi và sáng với trái cây chua nhẹ, sau đó hoa hồng dần chiếm trung tâm, được làm mềm bằng xạ hương và lớp nền ấm. Tổng thể vừa nữ tính, vừa sang, vừa có độ nhận diện rất cao ngay từ lần đầu ngửi.

Điểm đẹp của Delina là nó khiến hoa hồng trở nên trẻ trung và thời thượng hơn rất nhiều. Đây không phải kiểu hoa hồng cổ điển dày phấn, mà là hoa hồng sáng, mọng, có chuyển động và rất biết cách thu hút sự chú ý. Mùi hương này gợi ra hình ảnh một cô gái chỉn chu, nổi bật, có gu thẩm mỹ rõ và thích những thứ đẹp theo kiểu sang chứ không phô.

Khi lên da, Delina vẫn giữ được độ tươi khá lâu trước khi mềm dần xuống. Phần xạ hương làm tổng thể trở nên mượt, trong khi lớp hoa hồng vẫn hiện diện rõ ràng như chữ ký chính. Đây là kiểu nước hoa rất hợp với tiệc, hẹn hò, sự kiện hoặc những lúc muốn mình thật thơm và nổi bật.

Về hiệu năng, Delina EDP lưu hương tốt và tỏa hương khá rõ. Nó dễ tạo vùng hương đẹp xung quanh cơ thể, nên chỉ cần xịt vừa đủ là đã rất hiệu quả. Trong khí hậu Việt Nam, chai này dùng được cả ngày lẫn tối, nhưng trong thời tiết quá nóng nên tiết chế để giữ độ thanh của mùi.

Nếu bạn muốn một chai nước hoa nữ sang, nổi bật và mang màu sắc nữ tính rất rõ, Delina là lựa chọn cực kỳ đáng cân nhắc. Nó không dành cho người thích sự tối giản kín đáo, nhưng lại rất hợp với ai muốn mùi hương của mình vừa đẹp, vừa có dấu ấn, vừa khiến người khác nhớ rất lâu.`,
    article: `Nếu đang tìm một chai nước hoa nữ sang, dễ tạo ấn tượng ngay từ lần đầu gặp, Delina là cái tên rất khó bỏ qua. Ở Maison de SON, đây là kiểu mùi tao chỉ dám gợi ý cho người thật sự thích cảm giác nữ tính rõ, có độ chỉn chu và muốn người đối diện nhớ mình lâu hơn một chút.

### Nguồn gốc và xuất xứ
Delina thuộc Parfums de Marly, thương hiệu Pháp nổi tiếng với phong cách sang và hơi kiểu tiểu thư châu Âu. Đây là một trong những chai nổi nhất của hãng, gần như nhắc tới brand này là nhiều người nhớ Delina đầu tiên.

### Ra mắt khi nào?
Chai này ra mắt năm 2017. Từ đó đến giờ, nó vẫn nằm trong nhóm mùi nữ cao cấp được nhắc nhiều vì độ nhận diện quá rõ.

### Câu chuyện ra đời
Cái hay của Delina là nó làm hoa hồng theo hướng sáng, mượt và có sức sống, chứ không cũ hay đứng tuổi. Nó vẫn nữ tính, nhưng không phải kiểu hiền quá.

### Mùi hương mang lại cảm giác gì?
Lúc mới xịt, Delina cho cảm giác sáng và hơi chua thanh từ vải với rhubarb. Sau đó hoa hồng đi lên rất rõ, mềm, sạch và sang. Drydown có xạ hương nên tổng thể vẫn mịn và ôm da, không bị sắc quá lâu.

### Khi nào nên dùng?
- Đi hẹn hò, gặp gỡ, ăn tối hoặc những dịp muốn ăn mặc chỉnh chu hơn bình thường
- Hợp với người thích mùi hoa hồng nữ tính nhưng vẫn hiện đại
- Không hợp lắm nếu bạn ghét hoa hồng rõ hoặc chỉ thích mùi thật kín đáo

### Nhận xét của Maison de SON
Delina đẹp thật, không phải kiểu được tâng bốc cho quá. Nhưng nó cũng không phải chai dành cho tất cả mọi người. Nếu đã mê phong cách nữ tính sang, thích hoa hồng sáng và muốn có một mùi khiến người khác nhớ, đây là lựa chọn rất mạnh. Còn nếu gu của bạn thiên sạch nhẹ, tối giản và ít muốn nổi bật, Delina có thể hơi quá đẹp so với nhu cầu thường ngày.`,
    verdict: "Mùi này nữ tính, sang và khá nổi bật. Hợp người thích hoa hồng đẹp, hiện đại và dễ được nhớ. Nếu bạn ghét hoa hồng rõ, bản này không hợp.",
    verdictShort: "NỮ TÍNH, SANG, KHÁ NỔI BẬT",
    score: { scent: 9.1, uniqueness: 8.5, compliments: 9.0, value: 7.4, total: 8.5 },
    vibes: [
      { label: "Nữ tính", icon: "🌹" },
      { label: "Sang trọng", icon: "💎" },
      { label: "Gặp gỡ", icon: "✨" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 92, summer: 68, fall: 80, winter: 56 },
    dayNight: { day: 82, night: 64 },
    topNotes: [{ name: "Vải" }, { name: "Rhubarb" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Hoa hồng" }, { name: "Hoa mẫu đơn" }],
    baseNotes: [{ name: "Xạ hương" }, { name: "Cashmeran" }, { name: "Vanilla" }],
    accords: [
      { name: "Hoa hồng", value: 76, color: "#e75480" },
      { name: "Trái cây", value: 42, color: "#f39c12" },
      { name: "Xạ hương", value: 34, color: "#95a5a6" },
      { name: "Chua thanh", value: 28, color: "#f7c242" }
    ],
    tags: ["Nữ", "Hoa hồng", "Sang trọng", "Cao cấp"],
    sizes: ["10ml Chiết", "75ml Fullbox"],
    basePrice: 5900000,
    shopeeOffers: []
  },
  {
    id: "carolina-herrera-good-girl",
    brandSlug: "carolina-herrera",
    brand: "CAROLINA HERRERA",
    name: "Good Girl",
    subName: "Eau de Parfum",
    perfumer: "Louise Turner",
    gender: "nu",
    image: "/images/products/carolina-herrera-good-girl-main.jpg",
    images: [{ url: "/images/products/carolina-herrera-good-girl-main.jpg", source: "fragram", caption: "Carolina Herrera Good Girl Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nữ ngọt, hoa trắng và khá sexy. Hợp đi tối, hẹn hò hoặc người thích mùi nữ hiện đại dễ tạo dấu ấn. Nếu bạn thích mùi mỏng nhẹ, bản này hơi đậm.",
    productCopy: `Carolina Herrera Good Girl EDP là kiểu nước hoa nữ khiến người ta liên tưởng ngay đến hình ảnh quyến rũ, tự tin và có phần sắc sảo. Mùi mở đầu khá ấn tượng với cảm giác ngọt ấm, sau đó phát triển sang lớp hoa trắng, đậu tonka và cacao mềm. Tổng thể vừa sang, vừa gợi cảm, vừa có chút kịch tính đúng tinh thần của thiết kế chiếc giày cao gót biểu tượng.

Điểm mạnh của Good Girl là nó tạo ra cảm giác nữ tính theo hướng có chủ đích. Đây không phải kiểu ngọt dễ thương hay trong trẻo, mà là kiểu ngọt có chiều sâu, có thần thái và rất biết cách thu hút sự chú ý. Mùi hương này hợp với tiệc tối, hẹn hò, đi ăn tối hoặc những lúc muốn mình trông nổi bật hơn thường ngày.

Trên da, Good Girl trở nên mượt hơn sau lớp đầu khá nổi. Hoa trắng giúp mùi giữ được vẻ nữ tính sang trọng, trong khi cacao và tonka tạo độ ấm và độ cuốn. Chính sự tương phản giữa sáng và tối làm chai này trở nên thú vị và không bị quá một màu.

Về độ lưu hương và độ tỏa, Good Girl EDP làm tốt trong nhóm designer nữ. Mùi bám khá ổn, tỏa vừa đến rõ, đủ để tạo dấu ấn mà không cần xịt quá nhiều. Trong điều kiện Việt Nam, chai này phát huy đẹp nhất vào buổi tối hoặc nơi có máy lạnh.

Nếu bạn muốn một chai nước hoa nữ vừa sang, vừa quyến rũ, vừa có khả năng khiến người khác nhớ đến mình, Carolina Herrera Good Girl EDP là cái tên rất đáng cân nhắc. Nó không quá nhẹ nhàng, nhưng chính sự nổi bật và độ hoàn thiện tốt đã giúp chai này giữ vị trí rất vững trong thế giới designer nữ.`,
    article: `Tại Maison de SON, Good Girl là một trong những chai nước hoa nữ đi tối nổi tiếng nhất ở nhóm designer. Nó quyến rũ, dễ nhận ra và hợp với người thích mùi nữ hiện đại có lực rõ.

### Nguồn gốc và xuất xứ
Good Girl thuộc Carolina Herrera, thương hiệu nổi tiếng với hình ảnh thời trang nữ sang và có cá tính. Đây là line nước hoa nữ rất thành công của hãng.

### Ra mắt khi nào?
Good Girl EDP ra mắt năm 2016 và nhanh chóng trở thành chai chủ lực ở phân khúc nữ sexy hiện đại.

### Câu chuyện ra đời
Mùi này được xây theo hình ảnh người phụ nữ vừa tốt vừa nổi loạn, nên mùi có sự pha trộn giữa ngọt, hoa và chút tối quyến rũ.

### Mùi hương mang lại cảm giác gì?
Hạnh nhân, hoa trắng, tonka và cacao tạo nên cảm giác ngọt, quyến rũ và có độ hiện diện khá rõ. Đây là kiểu mùi đi tối rất dễ tạo dấu ấn.

### Khi nào nên dùng?
- Hẹn hò, đi tối, sự kiện
- Hợp người thích mùi nữ sexy, hiện đại
- Không hợp lắm nếu bạn cần mùi nhẹ để dùng công sở kín

### Nhận xét của Maison de SON
Good Girl dễ nổi và dễ được nhớ. Điểm yếu là nó không quá tinh tế nếu xịt quá tay.`,
    verdict: "Mùi này ngọt, sexy và khá nổi. Hợp đi tối hoặc lúc muốn tạo dấu ấn rõ rệt. Nếu bạn thích mùi nhẹ, bản này hơi đậm.",
    verdictShort: "NGỌT, SEXY, KHÁ NỔI",
    score: { scent: 8.7, uniqueness: 8.0, compliments: 9.0, value: 8.2, total: 8.5 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Sexy", icon: "🔥" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 60, summer: 28, fall: 88, winter: 92 },
    dayNight: { day: 30, night: 96 },
    topNotes: [{ name: "Hạnh nhân" }, { name: "Cà phê" }],
    middleNotes: [{ name: "Hoa huệ" }, { name: "Hoa nhài sambac" }],
    baseNotes: [{ name: "Đậu tonka" }, { name: "Cacao" }, { name: "Vanilla" }],
    accords: [
      { name: "Hoa trắng", value: 60, color: "#e75480" },
      { name: "Ngọt", value: 54, color: "#8B0000" },
      { name: "Ấm", value: 32, color: "#e67e22" },
      { name: "Cacao", value: 22, color: "#5d4037" }
    ],
    tags: ["Nữ", "Hẹn hò", "Buổi tối", "Cao cấp"],
    sizes: ["10ml Chiết", "30ml Fullbox", "50ml Fullbox", "80ml Fullbox"],
    basePrice: 2550000,
    shopeeOffers: []
  },
  {
    id: "lancome-la-vie-est-belle",
    brandSlug: "lancome",
    brand: "LANCOME",
    name: "La Vie Est Belle",
    subName: "Eau de Parfum",
    perfumer: "Olivier Polge, Dominique Ropion & Anne Flipo",
    gender: "nu",
    image: "/images/products/lancome-la-vie-est-belle-main.jpg",
    images: [{ url: "/images/products/lancome-la-vie-est-belle-main.jpg", source: "fragram", caption: "Lancôme La Vie Est Belle Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nữ ngọt, hoa và rất đại chúng theo hướng dễ được thích. Hợp người thích mùi nữ rõ ràng, vui và dễ dùng. Nếu bạn ghét kiểu ngọt mainstream, bản này sẽ hơi quen.",
    productCopy: `Lancôme La Vie Est Belle EDP là một trong những chai nước hoa nữ nổi tiếng nhất ở nhóm ngọt nữ tính và dễ được yêu thích. Mùi hương mở đầu mềm, sáng, sau đó nhanh chóng đi vào lớp iris, praline và vanilla tạo cảm giác ngọt mịn, ấm và rất nữ tính. Tổng thể mang lại hình ảnh rạng rỡ, chỉn chu và có nét sang kiểu Pháp khá rõ.

Điểm khiến La Vie Est Belle được yêu thích rộng rãi là độ nịnh mũi rất cao. Đây là kiểu mùi hương dễ tạo thiện cảm với số đông, phù hợp với người muốn thơm theo hướng ngọt đẹp, không quá phá cách nhưng vẫn đủ sang để nổi bật. Nó gợi cảm giác một người phụ nữ chỉn chu, dịu dàng nhưng vẫn biết cách thu hút ánh nhìn.

Khi lên da, phần ngọt của chai này khá rõ, nhưng không theo hướng trẻ con. Iris giúp tổng thể có cảm giác mịn và cao cấp hơn, trong khi vanilla và praline tạo độ ôm và độ ấm. Mùi này rất hợp với gặp gỡ, tiệc nhẹ, đi làm trong môi trường máy lạnh hoặc những lúc muốn mình luôn trong trạng thái thơm đẹp.

Về hiệu năng, La Vie Est Belle EDP lưu hương tốt và tỏa hương khá rõ. Với khí hậu Việt Nam, nên dùng vừa tay vào ban ngày để tránh cảm giác hơi ngọt quá mức trong thời tiết nóng. Buổi tối hoặc không gian máy lạnh sẽ là lúc chai này lên đẹp hơn.

Nếu bạn cần một chai nước hoa nữ ngọt sang, dễ được khen và có độ phổ biến đủ để yên tâm blind buy, Lancôme La Vie Est Belle là lựa chọn rất mạnh. Nó không quá mới lạ, nhưng chính sự nữ tính dễ mến và hiệu quả ổn định đã làm nên sức sống lâu dài của chai này.`,
    article: `Tại Maison de SON, La Vie Est Belle là một trong những chai nước hoa nữ nổi tiếng nhất thế giới ở nhóm ngọt dễ dùng. Nó mang cảm giác vui, sáng và rất hợp với người thích mùi nữ truyền thống hiện đại.

### Nguồn gốc và xuất xứ
La Vie Est Belle thuộc Lancôme, thương hiệu Pháp lâu đời nổi tiếng ở nhóm mỹ phẩm và nước hoa nữ đại chúng cao cấp. Đây là một trong những line nữ thành công nhất của hãng.

### Ra mắt khi nào?
La Vie Est Belle EDP ra mắt năm 2012 và nhanh chóng phủ rất rộng trên toàn cầu.

### Câu chuyện ra đời
Mùi này được xây để mang cảm giác hạnh phúc, dễ gần và nữ tính. Vì vậy công thức ưu tiên sự dễ thích và dễ nhận ra hơn là quá khác biệt.

### Mùi hương mang lại cảm giác gì?
Lê, hoa iris, hoa trắng, praline và vanilla tạo nên cảm giác ngọt, nữ và khá vui. Đây là kiểu mùi dễ làm người xung quanh thấy quen và dễ chịu.

### Khi nào nên dùng?
- Đi làm, đi chơi, gặp gỡ thường ngày
- Hợp người thích mùi nữ ngọt dễ dùng
- Không hợp lắm nếu bạn ghét mùi mainstream ngọt rõ

### Nhận xét của Maison de SON
La Vie Est Belle mạnh ở độ đại chúng và dễ dùng. Điểm yếu là không còn quá mới mẻ với người chơi lâu.`,
    verdict: "Mùi này ngọt, nữ tính và dễ được thích. Hợp người muốn một chai an toàn, dễ dùng và dễ tạo thiện cảm. Nếu bạn ghét ngọt mainstream, bản này hơi quen.",
    verdictShort: "NGỌT, NỮ TÍNH, DỄ ĐƯỢC THÍCH",
    score: { scent: 8.5, uniqueness: 7.2, compliments: 8.9, value: 8.4, total: 8.3 },
    vibes: [
      { label: "Hằng ngày", icon: "🧴" },
      { label: "Nữ tính", icon: "✨" },
      { label: "Dễ dùng", icon: "👍" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 74, summer: 44, fall: 80, winter: 84 },
    dayNight: { day: 78, night: 58 },
    topNotes: [{ name: "Lê" }, { name: "Lý chua đen" }],
    middleNotes: [{ name: "Iris" }, { name: "Hoa nhài" }, { name: "Hoa cam" }],
    baseNotes: [{ name: "Praline" }, { name: "Vanilla" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Ngọt", value: 74, color: "#8B0000" },
      { name: "Hoa", value: 46, color: "#e75480" },
      { name: "Phấn", value: 24, color: "#d7bde2" },
      { name: "Trái cây", value: 22, color: "#f39c12" }
    ],
    tags: ["Nữ", "Hằng ngày", "Dễ dùng", "Cao cấp"],
    sizes: ["10ml Chiết", "30ml Fullbox", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2450000,
    shopeeOffers: []
  },
  {
    id: "valentino-born-in-roma-intense",
    brandSlug: "valentino",
    brand: "VALENTINO",
    name: "Born In Roma Intense",
    subName: "Uomo Eau de Parfum Intense",
    perfumer: "Antoine Maisondieu & Guillaume Flavigny",
    gender: "nam",
    image: "/images/products/valentino-born-in-roma-intense-main.jpg",
    images: [{ url: "/images/products/valentino-born-in-roma-intense-main.jpg", source: "fragram", caption: "Valentino Donna Born in Roma Intense chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt ấm, vanilla và khá hiện đại. Hợp đi tối, hẹn hò hoặc người thích mùi trẻ mà vẫn sang. Nếu bạn ghét vanilla ngọt, bản này sẽ hơi dày.",
    productCopy: `Valentino Donna Born In Roma Intense EDP là kiểu nước hoa nữ đi theo hướng ngọt ấm và quyến rũ rất rõ, nhưng vẫn giữ được sự sang trọng hiện đại. Mùi mở đầu mềm, có cảm giác ngọt dễ chịu, sau đó dần đậm hơn với vanilla và phần hương hoa được làm mịn, tạo nên tổng thể vừa nữ tính vừa có chiều sâu.

Điểm hay của chai này là nó không chỉ ngọt, mà còn có sự chỉn chu rất tốt. Donna Born In Roma Intense mang lại hình ảnh một cô gái biết mình hấp dẫn ở đâu, ăn mặc đẹp, có thần thái và không cần quá nhiều phô trương. Mùi hương này hợp với tiệc tối, hẹn hò, gặp gỡ cuối tuần hoặc những dịp muốn xuất hiện thật cuốn hút.

Trên da, phần vanilla hiện lên khá rõ, nhưng không bị quá gourmand hay quá kẹo. Thay vào đó, nó cho cảm giác mịn, ấm và sang. Lớp hoa phía trên giúp tổng thể vẫn giữ được chất nữ tính, trong khi nền ấm phía dưới tạo cảm giác trưởng thành hơn so với nhiều chai floral ngọt phổ biến.

Về độ lưu hương và độ tỏa, đây là chai hoạt động tốt trong nhóm designer nữ. Nó bám ổn, tỏa vừa đến khá và đặc biệt đẹp khi dùng vào buổi tối hoặc trong môi trường có máy lạnh. Với thời tiết Việt Nam, nên dùng vừa tay vào ban ngày để tránh mùi trở nên quá dày.

Nếu bạn thích một chai nước hoa nữ ngọt sang, hiện đại và dễ khiến người khác cảm thấy bạn rất cuốn, Valentino Donna Born In Roma Intense là lựa chọn rất sáng giá. Nó không theo hướng nhẹ nhàng mong manh, mà thiên về vẻ đẹp nữ tính có chủ đích, trưởng thành và có sức hút rõ ràng.`,
    article: `Tại Maison de SON, Born In Roma Intense là kiểu nước hoa nam rất hợp với gu hiện đại: dễ ngửi, dễ thấy đẹp và khá hợp hẹn hò. Nó không đi theo hướng quá cổ điển mà trẻ, bóng và có chút sang vừa đủ.

### Nguồn gốc và xuất xứ
Đây là sản phẩm của Valentino, thương hiệu Ý nổi tiếng ở mảng thời trang cao cấp. Dòng Born In Roma được đẩy mạnh theo hướng trẻ trung, thời thượng và hợp thị hiếu số đông.

### Ra mắt khi nào?
Born In Roma Intense ra mắt năm 2023 như một hướng đi đậm hơn từ line Born In Roma.

### Câu chuyện ra đời
Nếu bản thường khá dễ tiếp cận, thì bản Intense làm phần vanilla và chiều sâu rõ hơn. Nó được tạo cho nhóm người thích cảm giác buổi tối, có chút sexy nhưng không quá khó dùng.

### Mùi hương mang lại cảm giác gì?
Vanilla, lavender và vetiver tạo cảm giác ngọt ấm, mượt và khá nịnh mũi. Đây là kiểu mùi dễ tạo thiện cảm ngay trong vài lần gặp đầu.

### Khi nào nên dùng?
- Hẹn hò, đi tối, đi chơi cuối tuần
- Hợp người trẻ thích mùi nam hiện đại, hơi bóng bẩy
- Không hợp lắm nếu bạn chỉ thích mùi khô, sạch hoặc thật truyền thống

### Nhận xét của Maison de SON
Điểm mạnh của chai này là dễ thấy đẹp và khá hợp xu hướng hiện tại. Điểm yếu là chưa phải kiểu quá riêng nếu so với nhiều chai niche.`,
    verdict: "Mùi này ngọt ấm, hiện đại và dễ tạo thiện cảm. Hợp đi tối hoặc hẹn hò. Nếu bạn ghét vanilla rõ, bản này hơi dày.",
    verdictShort: "NGỌT ẤM, HIỆN ĐẠI, DỄ MẾN",
    score: { scent: 8.8, uniqueness: 7.9, compliments: 9.1, value: 8.4, total: 8.5 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Hiện đại", icon: "✨" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 52, summer: 28, fall: 88, winter: 92 },
    dayNight: { day: 34, night: 96 },
    topNotes: [{ name: "Vanilla" }],
    middleNotes: [{ name: "Lavender" }],
    baseNotes: [{ name: "Cỏ hương bài" }],
    accords: [
      { name: "Vanilla", value: 76, color: "#f5deb3" },
      { name: "Ấm", value: 44, color: "#e67e22" },
      { name: "Thơm thảo mộc", value: 28, color: "#2c7a4b" },
      { name: "Gỗ", value: 20, color: "#8B4513" }
    ],
    tags: ["Nam", "Hẹn hò", "Buổi tối", "Hiện đại"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2950000,
    shopeeOffers: []
  },
  {
    id: "azzaro-the-most-wanted-parfum",
    brandSlug: "azzaro",
    brand: "AZZARO",
    name: "The Most Wanted",
    subName: "Parfum",
    perfumer: "Nicolas Bonneville",
    gender: "nam",
    image: "/images/products/azzaro-the-most-wanted-parfum-main.jpg",
    images: [{ url: "/images/products/azzaro-the-most-wanted-parfum-main.jpg", source: "fragram", caption: "Azzaro The Most Wanted Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ngọt, gừng và gỗ khá hút người đối diện. Hợp đi tối, đi chơi và người thích mùi có lực. Nếu bạn cần chai mỏng nhẹ đi làm, bản này không phải ưu tiên đầu.",
    productCopy: `Azzaro The Most Wanted Parfum là kiểu nước hoa nam được làm ra cho những dịp muốn gây ấn tượng mạnh. Mùi mở đầu đã cho cảm giác ấm, hơi cay và ngọt rõ, sau đó nhanh chóng đi vào lớp vanilla, gỗ và chút hổ phách dày dặn. Tổng thể vừa tối hơn, vừa quyến rũ hơn, mang màu sắc rất hợp với hẹn hò và những buổi tối có không khí.

Điểm mạnh của chai này là độ cuốn. Nó không đi theo hướng lịch sự kiểu văn phòng, mà thiên về vibe đàn ông tự tin, biết mình hấp dẫn và không ngại trở nên nổi bật. The Most Wanted Parfum hợp với không gian gần, những buổi đi ăn tối, đi chơi đêm hoặc các dịp muốn để lại ấn tượng rõ ràng ngay từ lần đầu.

Trên da, mùi trở nên mượt hơn sau lớp cay đầu. Phần ngọt được xử lý khá đẹp, không quá trẻ con mà nghiêng về hướng sexy, ôm da và dễ gây thiện cảm. Chính sự cân bằng này khiến chai nước hoa vừa đủ mạnh để có dấu ấn, vừa đủ mượt để không bị thô.

Về hiệu năng, đây là chai có độ lưu hương tốt và tỏa hương khá rõ. Trong điều kiện khí hậu Việt Nam, nó phù hợp nhất vào buổi tối, phòng máy lạnh hoặc thời tiết dịu mát. Nếu dùng giữa trưa nắng nóng thì chỉ nên xịt rất tiết chế để tránh cảm giác quá dày.

Nếu bạn muốn một chai nước hoa nam hiện đại, ngọt ấm và có sức hút tình cảm mạnh, Azzaro The Most Wanted Parfum là một lựa chọn đáng tiền. Nó không dành cho người thích sự kín đáo, nhưng lại cực hợp với người muốn mùi hương của mình có lực hút ngay từ những giây đầu tiên.`,
    article: `Ở Maison de SON, The Most Wanted Parfum là một trong những chai nam designer đi tối đáng chú ý nhất ở tầm giá dễ tiếp cận hơn niche. Nó có kiểu đẹp khá trực diện: ngọt, ấm, nam tính và dễ được khen.

### Nguồn gốc và xuất xứ
The Most Wanted thuộc Azzaro, thương hiệu đã có nhiều dòng nam nổi tiếng với phong cách mạnh, trẻ và dễ tạo ấn tượng.

### Ra mắt khi nào?
Bản Parfum ra mắt năm 2022, sau khi line Wanted đã có chỗ đứng tốt ở phân khúc nam hiện đại.

### Câu chuyện ra đời
Chai này được tạo để đi theo hướng hấp dẫn và dễ gây chú ý hơn trong môi trường thực tế. Nó không quá cầu kỳ nhưng hiệu quả cao nếu dùng đúng hoàn cảnh.

### Mùi hương mang lại cảm giác gì?
Gừng, vanilla bourbon và gỗ tạo cảm giác ngọt ấm, hơi cay nhẹ và khá ôm người. Đây là kiểu mùi đi tối rất dễ được thấy là nam tính và cuốn.

### Khi nào nên dùng?
- Hẹn hò, đi chơi tối, bar, cafe đêm
- Hợp người thích mùi nam hiện đại có độ hút tốt
- Không hợp lắm nếu bạn chỉ thích mùi sạch sáng ban ngày

### Nhận xét của Maison de SON
Điểm mạnh của chai này là hiệu quả thực chiến cao. Điểm yếu là không quá lạ và hơi đụng hàng trong nhóm nam trẻ.`,
    verdict: "Mùi này ngọt ấm, nam tính và rất hợp đi tối. Hợp người thích mùi dễ được khen. Nếu bạn cần chai đi làm nhẹ nhàng, bản này hơi gắt.",
    verdictShort: "NAM TÍNH, NGỌT ẤM, DỄ ĐƯỢC KHEN",
    score: { scent: 8.9, uniqueness: 7.8, compliments: 9.2, value: 8.8, total: 8.7 },
    vibes: [
      { label: "Buổi tối", icon: "🌙" },
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Nam tính", icon: "🖤" }
    ],
    longevity: 8,
    sillage: 8,
    seasons: { spring: 44, summer: 18, fall: 90, winter: 96 },
    dayNight: { day: 24, night: 100 },
    topNotes: [{ name: "Gừng" }],
    middleNotes: [{ name: "Hương gỗ" }],
    baseNotes: [{ name: "Vanilla bourbon" }],
    accords: [
      { name: "Ngọt", value: 64, color: "#8B0000" },
      { name: "Gỗ", value: 38, color: "#8B4513" },
      { name: "Gia vị", value: 28, color: "#e67e22" },
      { name: "Ấm", value: 26, color: "#c58a2b" }
    ],
    tags: ["Nam", "Buổi tối", "Hẹn hò", "Giá tốt"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2250000,
    shopeeOffers: []
  },
  {
    id: "mancera-instant-crush",
    brandSlug: "mancera",
    brand: "MANCERA",
    name: "Instant Crush",
    subName: "Eau de Parfum",
    perfumer: "Pierre Montale",
    gender: "unisex",
    image: "/images/products/mancera-instant-crush-main.jpg",
    images: [{ url: "/images/products/mancera-instant-crush-main.jpg", source: "fragram", caption: "Mancera Instant Crush Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi unisex ngọt, saffron và hổ phách khá bám. Hợp người thích mùi nổi, sang và có lực. Nếu bạn ghét mùi dày hoặc ở môi trường kín nóng, bản này sẽ hơi áp lực.",
    productCopy: `Mancera Instant Crush EDP đúng như tên gọi: đây là kiểu nước hoa được làm để gây thiện cảm rất nhanh. Mùi mở đầu sáng và hơi cay, sau đó lập tức chuyển sang lớp amber ngọt ấm, vanilla và hoa được làm dày nhưng rất mượt. Tổng thể cho cảm giác sang, nổi bật và hơi kịch tính, phù hợp với những ai thích mùi hương của mình có độ hiện diện rõ ràng.

Điều khiến Instant Crush được yêu thích là nó đánh đúng vào vùng ngửi dễ thích của nhiều người, nhưng vẫn giữ được chất niche đủ rõ. Nó ngọt, nhưng không đơn giản kiểu bánh kẹo. Nó floral, nhưng không mỏng. Nó ấm, nhưng không quá tối. Tất cả được nén lại thành một khối hương rất đậm đặc, tạo cảm giác đắt tiền và có chút xa hoa. Đây là kiểu mùi dễ khiến người đối diện chú ý và nhớ bạn lâu hơn.

Khi lên da, Instant Crush phát triển khá mạnh trong giai đoạn đầu rồi dần mượt lại. Phần amber và vanilla là xương sống chính, nhưng chính lớp gia vị và sắc hoa phía trên mới giúp mùi không bị phẳng. Sau khoảng 30 phút, chai này trở nên tròn hơn, ôm hơn và cho cảm giác rất cuốn, đặc biệt trong không gian gần hoặc buổi tối.

Về hiệu năng, đây là chai làm rất tốt. Độ lưu hương lâu, độ tỏa rõ và khả năng bám trên quần áo mạnh là những thứ khiến Instant Crush trở thành lựa chọn nổi bật trong phân khúc của nó. Trong điều kiện Việt Nam, nên ưu tiên dùng vào buổi tối, phòng máy lạnh hoặc trời dịu để mùi giữ được độ sang mà không bị nặng.

Nếu bạn muốn một chai nước hoa unisex ngọt amber có lực, dễ gây chú ý và tạo cảm giác rất sang theo kiểu hiện đại, Mancera Instant Crush là lựa chọn rất đáng cân nhắc. Nó không dành cho người thích sự kín đáo tối giản, nhưng lại cực hợp với ai muốn thơm một cách tự tin, rõ ràng và rất có sức hút.`,
    article: `Ở Maison de SON, Instant Crush là kiểu mùi unisex rất dễ làm người khác chú ý. Nó thuộc nhóm chai có sức phủ tốt, màu mùi rõ và lên da khá ấn tượng nếu bạn thích phong cách đậm.

### Nguồn gốc và xuất xứ
Instant Crush thuộc Mancera, thương hiệu Pháp nổi tiếng với các mùi có hiệu năng mạnh và độ hiện diện cao.

### Ra mắt khi nào?
Chai này ra mắt năm 2019 và nhanh chóng trở thành một trong những tên nổi bật nhất của Mancera.

### Câu chuyện ra đời
Nó được tạo ra cho nhóm người muốn mùi hương sang, có lực và dễ để lại ấn tượng. Đây không phải hướng chơi an toàn mà là hướng có mặt rõ.

### Mùi hương mang lại cảm giác gì?
Saffron, amberwood, hoa và vanilla tạo cảm giác ngọt ấm, hơi sang và khá dày. Mùi này bám rất tốt và dễ khiến người khác nhớ.

### Khi nào nên dùng?
- Đi tối, dịp đặc biệt, trời mát
- Hợp người thích mùi nổi, bám tốt và có độ sang
- Không hợp lắm nếu bạn chỉ cần chai nhẹ nhàng để dùng văn phòng kín

### Nhận xét của Maison de SON
Instant Crush mạnh ở hiệu năng và độ nhận diện. Điểm yếu là hơi áp lực nếu dùng quá tay hoặc sai thời tiết.`,
    verdict: "Mùi này nổi, sang và bám rất tốt. Hợp người thích mùi có lực rõ. Nếu bạn thích mùi nhẹ nhàng, bản này hơi nặng.",
    verdictShort: "NỔI, SANG, BÁM RẤT TỐT",
    score: { scent: 8.8, uniqueness: 8.3, compliments: 8.8, value: 8.7, total: 8.6 },
    vibes: [
      { label: "Dịp đặc biệt", icon: "🥂" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Có lực", icon: "🔥" }
    ],
    longevity: 9,
    sillage: 9,
    seasons: { spring: 40, summer: 14, fall: 92, winter: 98 },
    dayNight: { day: 20, night: 100 },
    topNotes: [{ name: "Nghệ tây" }, { name: "Gừng" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Hoa hồng" }, { name: "Hoa nhài" }, { name: "Gỗ amber" }],
    baseNotes: [{ name: "Vanilla" }, { name: "Xạ hương" }, { name: "Gỗ đàn hương" }],
    accords: [
      { name: "Hổ phách", value: 58, color: "#d4a017" },
      { name: "Ngọt", value: 50, color: "#8B0000" },
      { name: "Nghệ tây", value: 24, color: "#f39c12" },
      { name: "Gỗ", value: 22, color: "#8B4513" }
    ],
    tags: ["Unisex", "Buổi tối", "Bám tốt", "Cao cấp"],
    sizes: ["10ml Chiết", "120ml Fullbox"],
    basePrice: 2550000,
    shopeeOffers: []
  },
  {
    id: "kayali-vanilla-28",
    brandSlug: "kayali",
    brand: "KAYALI",
    name: "Vanilla 28",
    subName: "Eau de Parfum",
    perfumer: "Gabriela Chelariu",
    gender: "unisex",
    image: "/images/products/kayali-vanilla-28-main.jpg",
    images: [{ url: "/images/products/kayali-vanilla-28-main.jpg", source: "fragram", caption: "Kayali Vanilla 28 Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi vanilla ngọt, nâu và khá ôm da. Hợp người thích mùi dễ layer hoặc muốn một chai ngọt ấm dễ chịu. Nếu bạn sợ vanilla đậm, bản này sẽ hơi dính.",
    productCopy: `Kayali Vanilla 28 EDP là kiểu nước hoa lấy vanilla làm trung tâm nhưng không đi theo hướng quá đơn giản hay quá trẻ con. Ngay từ đầu, mùi cho cảm giác ngọt ấm, mềm và hơi tối nhẹ, sau đó dần mở ra lớp vanilla sâu hơn cùng amber và chút nâu đen của đường cháy. Tổng thể tạo cảm giác mượt, ôm da và có sự gợi cảm rất hiện đại, phù hợp với người thích những mùi ngọt nhưng không muốn quá gourmand kiểu bánh kẹo.

Điểm hay của Vanilla 28 là nó dễ dùng và dễ sống chung. Đây không phải kiểu vanilla bùng nổ khiến cả căn phòng phải chú ý, mà là kiểu vanilla đẹp ở khoảng cách gần. Nó gợi ra hình ảnh một người thơm theo kiểu mềm mại, chỉn chu và có chút lười biếng sang trọng. Vì vậy, chai này rất hợp với ai thích mùi hương mang tính personal scent hơn là statement scent.

Khi lên da, Vanilla 28 phát triển theo hướng ngày càng mượt và ấm hơn. Lớp đầu có chút đường nâu và amber làm mùi trở nên sâu hơn vanilla trắng thông thường. Sau đó mọi thứ ổn định lại thành một lớp hương ngọt, mềm, rất nịnh mũi và khá gây nghiện. Đây cũng là lý do chai này được nhiều người dùng như một mùi standalone hoặc mang đi layer với các mùi floral, woody hay musky khác.

Về hiệu năng, Kayali Vanilla 28 ở mức khá với độ lưu hương ổn và độ tỏa vừa phải. Nó không quá mạnh, nhưng đủ để giữ cảm giác thơm đẹp quanh cơ thể nhiều giờ. Trong khí hậu Việt Nam, chai này hợp với buổi tối, không gian máy lạnh hoặc những ngày dịu thời tiết hơn. Dùng ban ngày vẫn ổn nếu xịt nhẹ tay.

Nếu bạn muốn một chai nước hoa vanilla mềm, sang, dễ gây nghiện và có tính ứng dụng cao, Kayali Vanilla 28 là lựa chọn rất hợp lý. Nó không quá niche cầu kỳ, nhưng lại làm rất tốt điều quan trọng nhất: khiến người mặc có cảm giác thơm, ấm và cuốn một cách rất tự nhiên.`,
    article: `Tại Maison de SON, Vanilla 28 là một trong những chai vanilla dễ dùng và dễ hiểu nhất cho người mới lẫn người thích layer mùi. Nó không quá phức tạp, nhưng tạo cảm giác ngọt ấm rất dễ chịu khi dùng đúng thời tiết.

### Nguồn gốc và xuất xứ
Vanilla 28 thuộc Kayali, thương hiệu Trung Đông hiện đại nổi bật với các mùi dễ phối và hợp xu hướng social media.

### Ra mắt khi nào?
Chai này ra mắt năm 2018 và nhanh chóng thành best-seller của Kayali.

### Câu chuyện ra đời
Dòng này được tạo để người dùng vừa có thể dùng riêng, vừa có thể phối thêm với các mùi khác. Vì vậy tính dễ layer là một điểm mạnh rất rõ.

### Mùi hương mang lại cảm giác gì?
Vanilla, đường nâu, hổ phách và chút xạ hương tạo cảm giác ngọt ấm, mềm và khá ôm da. Đây là kiểu mùi khiến người ở gần thấy dễ chịu hơn là gây sốc từ xa.

### Khi nào nên dùng?
- Dùng hằng ngày, hẹn hò nhẹ, trời mát
- Hợp người thích vanilla mềm và dễ phối mùi
- Không hợp lắm nếu bạn cần mùi thật thoáng hoặc hoàn toàn không ngọt

### Nhận xét của Maison de SON
Vanilla 28 dễ sống chung và khá linh hoạt nếu bạn thích nhóm mùi ngọt. Điểm yếu là thiếu bất ngờ nếu dùng một mình lâu dài.`,
    verdict: "Mùi này ngọt ấm, mềm và dễ chịu. Hợp người mê vanilla hoặc thích layer. Nếu bạn sợ ngọt, bản này sẽ hơi dính.",
    verdictShort: "VANILLA ẤM, MỀM, DỄ CHỊU",
    score: { scent: 8.5, uniqueness: 7.6, compliments: 8.7, value: 8.2, total: 8.2 },
    vibes: [
      { label: "Layering", icon: "🧪" },
      { label: "Ấm áp", icon: "🤎" },
      { label: "Hằng ngày", icon: "🧴" }
    ],
    longevity: 7,
    sillage: 6,
    seasons: { spring: 62, summer: 38, fall: 86, winter: 90 },
    dayNight: { day: 62, night: 74 },
    topNotes: [{ name: "Vanilla orchid" }, { name: "Hoa nhài" }],
    middleNotes: [{ name: "Đường nâu" }, { name: "Đậu tonka" }],
    baseNotes: [{ name: "Hổ phách" }, { name: "Xạ hương" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Vanilla", value: 74, color: "#f5deb3" },
      { name: "Ngọt", value: 44, color: "#8B0000" },
      { name: "Hổ phách", value: 24, color: "#d4a017" },
      { name: "Mềm", value: 18, color: "#a1887f" }
    ],
    tags: ["Unisex", "Vanilla", "Layering", "Hằng ngày"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2650000,
    shopeeOffers: []
  },
  {
    id: "prada-luna-rossa-carbon",
    brandSlug: "prada",
    brand: "PRADA",
    name: "Luna Rossa Carbon",
    subName: "Eau de Toilette",
    perfumer: "Daniela Andrier",
    gender: "nam",
    image: "/images/products/prada-luna-rossa-carbon-main.jpg",
    images: [{ url: "/images/products/prada-luna-rossa-carbon-main.jpg", source: "fragram", caption: "Prada Luna Rossa Carbon Eau de Toilette chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam sạch, lavender và hơi khoáng rất dễ dùng. Hợp người thích sự gọn gàng, lịch sự và không quá ngọt. Nếu bạn cần mùi thật nổi, bản này hơi hiền.",
    productCopy: `Prada Luna Rossa Carbon EDT là kiểu nước hoa nam hiện đại, sạch và có cảm giác khoáng rất dễ chịu. Mùi mở đầu với lavender và citrus theo hướng sáng, sau đó phát triển sang phần hương khoáng, hơi kim loại nhẹ và nền gỗ sạch. Tổng thể cho cảm giác rất gọn, rất nam tính nhưng không quá dữ, phù hợp với người thích sự hiện đại và dễ dùng.

Điểm hay của Luna Rossa Carbon là nó nằm giữa hai thế giới: đủ sạch để dùng đi làm hằng ngày, nhưng cũng đủ cá tính để không bị nhạt. Mùi hương này tạo cảm giác như một người đàn ông thích công nghệ, thể thao nhẹ, ăn mặc tối giản và luôn muốn mọi thứ trông gọn gàng. Nó có độ thực dụng rất cao.

Khi lên da, chai này mượt hơn nhiều so với ấn tượng ban đầu. Phần lavender giúp mùi vẫn giữ được nét thơm sạch quen thuộc, trong khi lớp khoáng làm nó hiện đại và khác một chút với nhiều chai blue fragrance phổ thông. Nhờ vậy, Prada Luna Rossa Carbon EDT vừa dễ gần vừa có bản sắc riêng.

Về lưu hương và độ tỏa, chai này ở mức khá, đủ dùng tốt cho môi trường công sở, đi học, đi cà phê hay gặp gỡ bạn bè. Trong điều kiện nóng ẩm của Việt Nam, đây là dạng mùi rất dễ phát huy vì nó không quá ngọt, không quá dày và gần như không gây ngộp nếu xịt vừa tay.

Nếu bạn cần một chai nước hoa nam sạch, dễ dùng, hiện đại và không phải suy nghĩ nhiều về dịp sử dụng, Prada Luna Rossa Carbon là lựa chọn đáng tin cậy. Nó không quá nổi loạn, nhưng càng dùng lâu càng thấy tiện và hợp với nhịp sống thường ngày.`,
    article: `Tại Maison de SON, Luna Rossa Carbon là lựa chọn khá hợp cho người muốn một chai nam sạch, hiện đại nhưng đỡ đại trà hơn vài cái tên quá nổi. Nó vẫn an toàn, nhưng có nét khoáng và mịn riêng.

### Nguồn gốc và xuất xứ
Đây là sản phẩm của Prada, thương hiệu Ý nổi tiếng với phong cách tối giản, sạch và tinh tế ở cả thời trang lẫn nước hoa.

### Ra mắt khi nào?
Luna Rossa Carbon ra mắt năm 2017 và nhanh chóng được xem là một trong những chai nam dễ dùng nhất của Prada.

### Câu chuyện ra đời
Chai này được xây theo cảm giác hiện đại, kỹ thuật và mịn. Nó không cố làm quá khác biệt, nhưng tạo ra một kiểu sạch có chất riêng hơn nhiều chai shower-gel phổ biến.

### Mùi hương mang lại cảm giác gì?
Lavender, tiêu, than khoáng và ambroxan tạo cảm giác sạch, hơi lạnh và gọn. Đây là kiểu mùi hợp người thích sự chỉn chu hơn là phô diễn.

### Khi nào nên dùng?
- Đi làm, đi học, gặp khách, dùng mỗi ngày
- Hợp người thích mùi nam sạch, tinh gọn, ít ngọt
- Không hợp lắm nếu bạn cần mùi thật nổi hoặc thật sexy

### Nhận xét của Maison de SON
Carbon sống rất dễ trong đời thường. Điểm yếu là thiếu độ wow nếu bạn thích mùi gây ấn tượng mạnh từ đầu.`,
    verdict: "Mùi này sạch, tinh gọn và khá lịch sự. Hợp đi làm mỗi ngày. Nếu bạn thích mùi thật nổi, bản này hơi hiền.",
    verdictShort: "SẠCH, TINH GỌN, KHÁ LỊCH SỰ",
    score: { scent: 8.4, uniqueness: 7.6, compliments: 8.5, value: 8.5, total: 8.3 },
    vibes: [
      { label: "Văn phòng", icon: "💼" },
      { label: "Hằng ngày", icon: "🧴" },
      { label: "Tinh gọn", icon: "⚪" }
    ],
    longevity: 7,
    sillage: 6,
    seasons: { spring: 82, summer: 76, fall: 74, winter: 58 },
    dayNight: { day: 90, night: 40 },
    topNotes: [{ name: "Cam bergamot" }, { name: "Tiêu" }],
    middleNotes: [{ name: "Lavender" }, { name: "Than khoáng" }],
    baseNotes: [{ name: "Ambroxan" }, { name: "Hoắc hương" }],
    accords: [
      { name: "Sạch", value: 42, color: "#95a5a6" },
      { name: "Khoáng", value: 26, color: "#7f8c8d" },
      { name: "Lavender", value: 24, color: "#9b59b6" },
      { name: "Gỗ", value: 18, color: "#8B4513" }
    ],
    tags: ["Nam", "Văn phòng", "Hằng ngày", "Ít ngọt"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2150000,
    shopeeOffers: []
  },
  {
    id: "dolce-gabbana-the-one-edp",
    brandSlug: "dolce-gabbana",
    brand: "DOLCE & GABBANA",
    name: "The One",
    subName: "Eau de Parfum",
    perfumer: "Olivier Polge",
    gender: "nam",
    image: "/images/products/dolce-gabbana-the-one-edp-main.jpg",
    images: [{ url: "/images/products/dolce-gabbana-the-one-edp-main.jpg", source: "fragram", caption: "Dolce & Gabbana The One Eau de Parfum chính hãng", verified: true }],
    description: "Đây là kiểu mùi nam ấm, thuốc lá nhẹ và rất dễ tạo thiện cảm ở khoảng cách gần. Hợp hẹn hò hoặc người thích mùi nam lịch sự, quyến rũ. Nếu bạn cần độ bám mạnh, bản này hơi hiền.",
    productCopy: `D&G The One EDP là một trong những chai nước hoa nam nổi tiếng nhờ chất lịch lãm và quyến rũ rất riêng. Mùi mở đầu hơi cay nhẹ, có cảm giác sáng vừa đủ, sau đó nhanh chóng chuyển sang lớp thuốc lá mềm, amber ấm và nền gỗ mượt. Tổng thể cho cảm giác sang, nam tính và rất hợp với những dịp cần sự gần gũi tinh tế.

Điểm khiến The One EDP được yêu thích lâu năm là cách nó quyến rũ mà không cần gào lên. Đây không phải kiểu mùi đi vào là chiếm trọn căn phòng, mà là kiểu khiến người ngồi gần bạn cảm thấy rất dễ chịu và bị thu hút dần. Nó gợi ra hình ảnh một người đàn ông trưởng thành, ăn nói điềm tĩnh và biết cách xuất hiện vừa đủ.

Khi lên da, phần ấm của chai này hiện ra rất đẹp. Thuốc lá ở đây không nặng khói mà mềm và sang, kết hợp với amber tạo nên cảm giác ôm sát, thân mật. Đây là một trong những lý do The One EDP thường được nhắc đến như một mùi hương hẹn hò rất mạnh.

Về hiệu năng, chai này không quá bùng nổ nhưng đủ dùng đẹp trong không gian gần. Độ lưu hương ở mức khá, tỏa hương vừa phải, phù hợp với những buổi tối, bữa ăn, gặp gỡ riêng tư hoặc môi trường máy lạnh. Trong khí hậu Việt Nam, nó lên tốt hơn vào tối hoặc ngày dịu mát.

Nếu bạn muốn một chai nước hoa nam quyến rũ theo cách lịch lãm, không ồn ào và có chất gentleman rất rõ, D&G The One EDP là lựa chọn rất đáng cân nhắc. Nó không phải kiểu hiệu năng khủng, nhưng bù lại có vibe rất đẹp và khó lỗi thời.`,
    article: `Tại Maison de SON, The One EDP là cái tên kinh điển mỗi khi nói đến nhóm nước hoa nam hẹn hò. Nó không phải kiểu bắn xa hay quá phô, mà đẹp ở khoảng cách gần và tạo cảm giác lịch sự rất ổn.

### Nguồn gốc và xuất xứ
Đây là sản phẩm của Dolce & Gabbana, thương hiệu Ý nổi tiếng với phong cách nam tính, thời trang và dễ tiếp cận.

### Ra mắt khi nào?
The One EDP ra mắt năm 2015, sau thành công lớn của bản EDT trước đó.

### Câu chuyện ra đời
Bản EDP được làm để sâu hơn và hợp buổi tối hơn. Nó vẫn giữ chất quyến rũ dễ hiểu của dòng The One nhưng trầm và nam hơn.

### Mùi hương mang lại cảm giác gì?
Bưởi, gừng, bạch đậu khấu, thuốc lá và hổ phách tạo cảm giác ấm, hơi cay và rất gần gũi. Đây là kiểu mùi người đối diện đứng gần mới thấy đẹp rõ.

### Khi nào nên dùng?
- Hẹn hò, ăn tối, gặp gỡ gần
- Hợp người thích mùi nam lịch sự và quyến rũ vừa phải
- Không hợp lắm nếu bạn ưu tiên độ tỏa xa hoặc bám cực lâu

### Nhận xét của Maison de SON
The One EDP đẹp vì nó biết tiết chế. Điểm yếu là hiệu năng không phải thế mạnh lớn nhất.`,
    verdict: "Mùi này ấm, lịch sự và khá quyến rũ ở khoảng cách gần. Hợp hẹn hò. Nếu bạn cần bám và tỏa mạnh, bản này hơi hiền.",
    verdictShort: "ẤM, LỊCH SỰ, QUYẾN RŨ GẦN",
    score: { scent: 8.8, uniqueness: 7.7, compliments: 8.9, value: 8.0, total: 8.3 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Lịch sự", icon: "🕴️" },
      { label: "Ấm áp", icon: "🤎" }
    ],
    longevity: 6,
    sillage: 6,
    seasons: { spring: 50, summer: 24, fall: 88, winter: 92 },
    dayNight: { day: 28, night: 94 },
    topNotes: [{ name: "Bưởi" }, { name: "Gừng" }, { name: "Bạch đậu khấu" }],
    middleNotes: [{ name: "Hoa cam" }, { name: "Hổ phách" }],
    baseNotes: [{ name: "Thuốc lá" }, { name: "Gỗ tuyết tùng" }],
    accords: [
      { name: "Thuốc lá", value: 30, color: "#6e3b1f" },
      { name: "Ấm", value: 28, color: "#e67e22" },
      { name: "Gia vị", value: 22, color: "#c58a2b" },
      { name: "Hổ phách", value: 18, color: "#d4a017" }
    ],
    tags: ["Nam", "Hẹn hò", "Lịch sự", "Buổi tối"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2350000,
    shopeeOffers: []
  },
  {
    id: "giorgio-armani-my-way",
    brandSlug: "giorgio-armani",
    brand: "GIORGIO ARMANI",
    name: "My Way",
    subName: "Eau de Parfum",
    perfumer: "Carlos Benaim & Bruno Jovanovic",
    gender: "nu",
    image: "/images/products/giorgio-armani-my-way-main.jpg",
    images: [{ url: "/images/products/giorgio-armani-my-way-main.jpg", source: "fragram", caption: "Giorgio Armani My Way Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Giorgio Armani My Way EDP là một chai nước hoa nữ hiện đại theo hướng hoa trắng sáng và rất dễ tiếp cận. Mùi mở đầu tươi và mềm, sau đó hoa huệ cùng hoa cam dần hiện rõ, tạo nên tổng thể nữ tính, sạch và có cảm giác rất gọn. Đây là kiểu mùi thơm đẹp, dễ dùng và dễ tạo thiện cảm mà không cần quá nhiều thời gian làm quen.

Điểm mạnh của My Way là sự rạng rỡ. Nó mang lại hình ảnh một cô gái hiện đại, vui tươi, cởi mở và thích khám phá nhưng vẫn giữ được sự chỉn chu. Mùi hương này không quá ngọt, không quá dày, cũng không quá nghệ, nhờ vậy nó phù hợp với khá nhiều độ tuổi và tình huống khác nhau.

Khi lên da, My Way EDP trở nên mềm hơn và có chút kem nhẹ ở nền, giúp phần hoa trắng không bị quá sắc. Điều này làm chai nước hoa vừa nữ tính vừa dễ chịu, rất hợp cho đi làm, đi học, đi chơi ban ngày hay các buổi gặp gỡ nhẹ nhàng.

Về hiệu năng, My Way EDP lưu hương khá và tỏa hương vừa phải, đủ để tạo cảm giác thơm sạch xung quanh mà không lấn át. Trong điều kiện khí hậu Việt Nam, đây là chai khá dễ dùng quanh năm, đặc biệt đẹp vào ban ngày hoặc trong môi trường máy lạnh.

Nếu bạn muốn một chai nước hoa nữ hiện đại, sáng, dễ dùng và có cảm giác sang nhẹ nhàng, Giorgio Armani My Way là lựa chọn rất hợp lý. Nó không quá kịch tính hay quá độc lạ, nhưng chính sự tươi mới và nữ tính cân bằng của nó khiến nhiều người rất dễ gắn bó lâu dài.`,
    article: "My Way dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "burberry-her-edp",
    brandSlug: "burberry",
    brand: "BURBERRY",
    name: "Her",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "nu",
    image: "/images/products/burberry-her-edp-main.jpg",
    images: [{ url: "/images/products/burberry-her-edp-main.jpg", source: "fragram", caption: "Burberry Her Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Burberry Her EDP là kiểu nước hoa nữ mang cảm giác mọng, tươi và rất vui ngay từ lần đầu ngửi. Mùi mở đầu với các nốt berries ngọt sáng, sau đó dần đi vào lớp xạ hương và nền ấm mềm, tạo nên tổng thể vừa trẻ trung vừa nữ tính. Đây là kiểu mùi dễ khiến người ta liên tưởng đến hình ảnh một cô gái năng động, vui vẻ và có năng lượng tích cực.

Điểm hấp dẫn của Burberry Her là độ dễ thương nhưng không quá non. Phần trái cây lên khá rõ, mang cảm giác ngọt mọng rất bắt mũi, nhưng nhờ phần nền mềm phía sau nên tổng thể vẫn đủ chỉn chu để không bị quá đơn giản. Chai này hợp với đi chơi, đi học, đi làm môi trường trẻ hoặc những ngày muốn bản thân thơm theo kiểu tươi sáng.

Trên da, Burberry Her giữ được sắc thái berries khá lâu, sau đó mượt dần và trở nên ôm hơn. Nó không phải kiểu mùi quá phức tạp, nhưng lại làm rất tốt việc tạo cảm giác vui, dễ gần và dễ được khen. Đây cũng là lý do chai này được nhiều người chọn như một mùi hương “grab and go”.

Về hiệu năng, Burberry Her EDP lưu hương khá tốt và tỏa hương ở mức vừa đến khá. Trong khí hậu Việt Nam, nó dùng tốt cả ban ngày lẫn tối, nhưng nếu trời quá nóng thì xịt vừa tay sẽ giúp giữ được sự dễ chịu của phần trái cây.

Nếu bạn thích một chai nước hoa nữ trẻ trung, ngọt trái cây và rất dễ tạo thiện cảm, Burberry Her EDP là lựa chọn rất đáng thử. Nó không quá sang kiểu tiệc tối, nhưng lại rất hợp với nhịp sống hiện đại và tinh thần vui tươi, nữ tính mà nhiều người tìm kiếm.`,
    article: "Her dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "gucci-bloom-edp",
    brandSlug: "gucci",
    brand: "GUCCI",
    name: "Bloom",
    subName: "Eau de Parfum",
    perfumer: "Alberto Morillas",
    gender: "nu",
    image: "/images/products/gucci-bloom-edp-main.jpg",
    images: [{ url: "/images/products/gucci-bloom-edp-main.jpg", source: "fragram", caption: "Gucci Bloom Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Gucci Bloom EDP là một chai nước hoa nữ dành cho người thật sự yêu hương hoa trắng. Mùi mở ra gần như ngay lập tức với cảm giác của một bó hoa tươi, nổi bật là huệ trắng và nhài, tạo nên tổng thể rất nữ tính, tự nhiên và đầy sức sống. Đây không phải kiểu hoa trắng được phủ quá nhiều đường hay vanilla, mà là hoa theo hướng chân thật và có độ hiện diện rõ.

Điểm đẹp của Gucci Bloom là sự thẳng thắn. Nó không cố làm mình thành một mùi gourmand hay một chai floral-fruity dễ chiều số đông. Thay vào đó, chai này trung thành với vẻ đẹp của hoa, mang lại hình ảnh một người phụ nữ thanh lịch, có gu riêng và không cần mùi quá ngọt để trở nên cuốn hút.

Khi lên da, Bloom giữ được chất hoa khá tròn và nhất quán. Mùi không chuyển quá nhiều lớp, nhưng đó lại là điểm mạnh vì nó làm rất rõ tinh thần “vườn hoa nở trên da”. Phù hợp với người thích sự nữ tính truyền thống, đi làm, gặp gỡ ban ngày, đi ăn trưa hoặc những dịp cần một mùi hương chỉnh tề nhưng không phô trương.

Về hiệu năng, Gucci Bloom EDP lưu hương khá và tỏa hương ở mức vừa. Trong khí hậu Việt Nam, chai này khá hợp vì không quá ngọt, nhưng nếu thời tiết quá oi thì chỉ nên xịt vừa tay để hoa giữ được độ sáng đẹp.

Nếu bạn muốn một chai nước hoa nữ thiên về hoa thật, thanh lịch và có cảm giác “nữ tính đúng nghĩa”, Gucci Bloom EDP là lựa chọn rất đáng cân nhắc. Nó không phải mùi dành cho ai thích ngọt rõ, nhưng lại cực hợp với người yêu vẻ đẹp của hoa trắng một cách tinh gọn và tinh tế.`,
    article: "Bloom dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "miss-dior-blooming-bouquet",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Miss Dior",
    subName: "Blooming Bouquet",
    perfumer: "Louise Turner",
    gender: "nu",
    image: "/images/products/miss-dior-blooming-bouquet-main.jpg",
    images: [{ url: "/images/products/miss-dior-blooming-bouquet-main.jpg", source: "fragram", caption: "Miss Dior Blooming Bouquet Eau de Toilette chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Miss Dior Blooming Bouquet EDT là kiểu nước hoa nữ mang cảm giác nhẹ nhàng, trong trẻo và rất dễ mến. Mùi mở đầu sáng và mềm, sau đó nhanh chóng chuyển sang lớp hoa mỏng nhẹ với cảm giác sạch và thanh. Tổng thể giống như một bó hoa hồng phấn được làm thật gọn, không quá ngọt, không quá dày, rất hợp với hình ảnh nữ tính dịu dàng.

Điểm mạnh của chai này là sự tinh khôi. Nó không cố trở nên quá sexy hay quá sang theo kiểu sắc nét, mà thiên về vẻ đẹp trẻ trung, gọn gàng và dễ tạo thiện cảm. Miss Dior Blooming Bouquet rất hợp với đi làm, đi học, đi cà phê, gặp gỡ ban ngày hoặc những lúc chỉ muốn mình thơm nhẹ một cách tinh tế.

Khi lên da, mùi gần da hơn và giữ cảm giác sạch, hoa mềm khá ổn định. Đây không phải kiểu nước hoa chuyển lớp quá nhiều hay tạo dấu ấn mạnh trong cả căn phòng, nhưng lại rất đẹp ở khoảng cách gần. Nó khiến người ta có cảm giác bạn chỉn chu, dễ gần và có gu nhẹ nhàng.

Về hiệu năng, vì là EDT nên Miss Dior Blooming Bouquet có độ lưu hương và độ tỏa ở mức vừa phải. Chính điều đó lại làm nó trở thành lựa chọn an toàn cho ban ngày và khí hậu nóng ẩm như Việt Nam. Nếu cần bám lâu hơn, có thể xịt thêm trên quần áo.

Nếu bạn đang tìm một chai nước hoa nữ nhẹ, thanh lịch và mang tinh thần “clean floral” dễ dùng, Miss Dior Blooming Bouquet là lựa chọn rất đáng yêu. Nó không quá kịch tính, nhưng lại có sức hút của sự tinh tế và dịu dàng mà nhiều người rất khó chê.`,
    article: "Miss Dior dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "chloe-signature-edp",
    brandSlug: "chloe",
    brand: "CHLOE",
    name: "Signature",
    subName: "Eau de Parfum",
    perfumer: "Amandine Clerc-Marie & Michel Almairac",
    gender: "nu",
    image: "/images/products/chloe-signature-edp-main.jpg",
    images: [{ url: "/images/products/chloe-signature-edp-main.jpg", source: "fragram", caption: "Chloé Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Chloé Signature EDP là một trong những chai nước hoa nữ nổi bật ở nhóm hoa hồng sạch và thanh lịch. Mùi hương mở đầu mềm, hơi phấn nhẹ, sau đó hoa hồng hiện ra rõ hơn cùng chút lychee và nền xạ hương sạch. Tổng thể mang lại cảm giác rất gọn, rất nữ tính và rất Paris theo kiểu không cần cố gắng quá nhiều vẫn thấy đẹp.

Điểm hấp dẫn của Chloé Signature là sự thanh lịch hiện đại. Nó không phải kiểu hoa hồng đậm cổ điển, cũng không quá trái cây hay quá ngọt. Đây là kiểu mùi hương gợi ra hình ảnh một cô gái chỉn chu, ăn mặc tinh tế, thích sự nhẹ nhàng nhưng không hề nhạt nhòa.

Trên da, phần hoa hồng và xạ hương phối với nhau rất đẹp, tạo cảm giác vừa sạch vừa mềm. Chai này đặc biệt hợp với môi trường công sở, gặp gỡ ban ngày, đi ăn trưa, đi dạo hoặc bất cứ hoàn cảnh nào cần mùi hương nữ tính mà không gây áp lực cho người xung quanh.

Về hiệu năng, Chloé Signature EDP lưu hương khá và tỏa hương vừa phải. Nó không phải kiểu bùng nổ, nhưng đủ để tạo cảm giác thơm đẹp một cách liên tục. Trong thời tiết Việt Nam, đây là một chai khá dễ dùng vì độ sạch và độ thoáng của nó.

Nếu bạn muốn một chai nước hoa nữ hoa hồng thanh lịch, sạch và hợp phong cách sống hiện đại, Chloé Signature là lựa chọn rất đáng thử. Nó không quá kịch tính hay quá nổi loạn, nhưng chính sự tinh tế, dễ dùng và cảm giác “well-dressed” của nó mới là điều khiến chai này được yêu thích lâu dài.`,
    article: "Signature dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "narciso-rodriguez-for-her-edp",
    brandSlug: "narciso-rodriguez",
    brand: "NARCISO RODRIGUEZ",
    name: "For Her",
    subName: "Eau de Parfum",
    perfumer: "Christine Nagel & Francis Kurkdjian",
    gender: "nu",
    image: "/images/products/narciso-rodriguez-for-her-edp-main.jpg",
    images: [{ url: "/images/products/narciso-rodriguez-for-her-edp-main.jpg", source: "fragram", caption: "Narciso Rodriguez For Her Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Narciso Rodriguez For Her EDP là một chai nước hoa nữ nổi tiếng vì chất xạ hương rất đẹp và rất riêng. Mùi mở đầu mềm, có chút hoa và cảm giác sạch nhẹ, sau đó musk dần trở thành trung tâm, đi cùng hổ phách và nền ấm mượt. Tổng thể mang lại cảm giác rất nữ tính, rất ôm da và có sức hút theo kiểu không cần nói to.

Điểm đẹp của chai này là sự tinh tế trưởng thành. Nó không phải kiểu ngọt trẻ trung hay hoa bùng nổ, mà là kiểu mùi hương khiến người ta muốn đến gần hơn để cảm nhận rõ. For Her EDP gợi ra hình ảnh một người phụ nữ điềm tĩnh, biết giữ khoảng cách, có chiều sâu và rất có gu.

Khi lên da, phần musk càng lúc càng mượt và trở nên gần như làn da đẹp hơn, thơm hơn. Đây là kiểu nước hoa rất hợp với môi trường gần, hẹn hò, đi làm, ăn tối hoặc những lúc bạn muốn mùi hương của mình thật tinh tế chứ không quá phô trương.

Về hiệu năng, Narciso Rodriguez For Her EDP lưu hương khá tốt và tỏa hương ở mức vừa phải. Nó không quá ồn, nhưng bám trên da rất đẹp. Trong điều kiện Việt Nam, đây là chai dùng ổn quanh năm nếu xịt vừa tay, đặc biệt hợp với môi trường máy lạnh.

Nếu bạn muốn một chai nước hoa nữ sang, musky, trưởng thành và có sức hút kiểu gần da rất rõ, Narciso Rodriguez For Her EDP là lựa chọn rất đáng cân nhắc. Nó không đi theo số đông, nhưng với người thích sự mềm sâu và tinh tế, đây là một mùi hương cực kỳ đáng giá.`,
    article: "For Her dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "ysl-mon-paris-edp",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Mon Paris",
    subName: "Eau de Parfum",
    perfumer: "Olivier Cresp, Dora Baghriche & Harry Fremont",
    gender: "nu",
    image: "/images/products/ysl-mon-paris-edp-main.jpg",
    images: [{ url: "/images/products/ysl-mon-paris-edp-main.jpg", source: "fragram", caption: "YSL Mon Paris Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `YSL Mon Paris EDP là kiểu nước hoa nữ mang tinh thần yêu đương rất rõ: ngọt, sáng, mềm và khá gợi cảm. Mùi mở đầu với trái cây mọng, sau đó đi vào lớp hoa trắng và xạ hương tạo cảm giác vừa vui tươi vừa ôm da. Tổng thể cho cảm giác nữ tính hiện đại, hơi bay bổng nhưng không quá mơ hồ, rất hợp với những ai thích mùi thơm lãng mạn dễ gây thiện cảm.

Điểm mạnh của Mon Paris là sự dễ thích. Nó không quá trầm, không quá sắc, cũng không quá “kẹo”. Chai này đi đúng vào vùng an toàn đẹp: ngọt vừa, hoa vừa, cuốn vừa. Nhờ vậy, nó đặc biệt hợp với hẹn hò, đi chơi tối, gặp gỡ cuối tuần hoặc những dịp muốn mình thơm theo kiểu mềm và gần gũi.

Trên da, phần trái cây mở đầu dần dịu xuống để lớp hoa và xạ hương hiện rõ hơn. Đây là lúc Mon Paris đẹp nhất: nữ tính, hơi quyến rũ và rất nịnh mũi. Nó không quá khác biệt về mặt ý tưởng, nhưng cách phối tổng thể khiến chai này rất dễ được khen.

Về hiệu năng, YSL Mon Paris EDP có độ lưu hương khá và tỏa hương vừa đến khá. Trong khí hậu Việt Nam, chai này dùng tốt cả ngày lẫn tối nếu xịt tiết chế, nhưng đẹp nhất vẫn là ở môi trường máy lạnh hoặc buổi tối dịu hơn.

Nếu bạn muốn một chai nước hoa nữ ngọt hoa hiện đại, lãng mạn và có khả năng tạo thiện cảm cao, YSL Mon Paris là lựa chọn rất dễ yêu. Nó không quá niche hay quá nghệ, nhưng lại làm rất tốt vai trò của một mùi hương hẹn hò nữ tính và cuốn hút.`,
    article: "Mon Paris dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "versace-bright-crystal",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Bright Crystal",
    subName: "Eau de Toilette",
    perfumer: "Alberto Morillas",
    gender: "nu",
    image: "/images/products/versace-bright-crystal-main.jpg",
    images: [{ url: "/images/products/versace-bright-crystal-main.jpg", source: "fragram", caption: "Versace Bright Crystal Eau de Toilette chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Versace Bright Crystal EDT là một trong những chai nước hoa nữ tươi sáng và dễ dùng nhất trong nhóm designer. Mùi mở đầu có cảm giác watery trái cây rất mát và sạch, sau đó hoa nhẹ dần hiện ra, tạo nên tổng thể thanh, nữ tính và thoáng. Đây là kiểu mùi hương rất hợp với ban ngày, thời tiết nóng và những ai không thích nước hoa quá nặng.

Điểm đẹp của Bright Crystal là sự dễ chịu. Nó không cố gây ấn tượng bằng độ ngọt hay độ sang quá rõ, mà chinh phục bằng cảm giác gọn, sạch và tươi. Mùi hương này gợi ra hình ảnh một cô gái nữ tính, vui vẻ, thích sự đơn giản và luôn muốn mình thơm nhẹ một cách tự nhiên.

Khi lên da, Bright Crystal giữ được tinh thần watery floral khá ổn định. Mùi không quá phức tạp hay quá nhiều lớp, nhưng lại rất hợp với nhịp sống hằng ngày: đi làm, đi học, đi cà phê, đi ăn trưa hoặc những lúc cần một mùi hương an toàn cho không gian gần.

Về hiệu năng, vì là EDT nên độ lưu hương và độ tỏa của chai này ở mức vừa phải. Dù không quá bùng nổ, đó lại là lợi thế trong khí hậu nóng ẩm như Việt Nam, nơi những mùi quá dày dễ trở nên ngột. Nếu muốn bám lâu hơn, bạn có thể xịt thêm trên tóc hoặc quần áo.

Nếu bạn đang tìm một chai nước hoa nữ tươi, nhẹ, sạch và dễ dùng hằng ngày, Versace Bright Crystal EDT là lựa chọn rất hợp lý. Nó không quá cá tính, nhưng chính sự dễ chịu, nữ tính và an toàn đẹp của nó khiến chai này luôn có chỗ đứng ổn định.`,
    article: "Bright Crystal dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "dolce-gabbana-light-blue-pour-femme",
    brandSlug: "dolce-gabbana",
    brand: "DOLCE & GABBANA",
    name: "Light Blue Pour Femme",
    subName: "Eau de Toilette",
    perfumer: "Olivier Cresp",
    gender: "nu",
    image: "/images/products/dolce-gabbana-light-blue-pour-femme-main.jpg",
    images: [{ url: "/images/products/dolce-gabbana-light-blue-pour-femme-main.jpg", source: "fragram", caption: "Dolce & Gabbana Light Blue Eau de Toilette chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `D&G Light Blue Pour Femme EDT là một trong những chai nước hoa nữ mùa nóng kinh điển vì nó làm rất tốt điều mà nhiều mùi fresh khác hay thiếu: vừa mát, vừa có sức sống, vừa không bị quá nhạt. Mùi mở đầu với chanh và táo xanh rất rõ, tạo cảm giác sáng, sạch và gần như có gió biển lướt qua. Sau đó lớp hoa nhẹ và nền gỗ sạch xuất hiện, giúp tổng thể giữ được nét nữ tính thay vì chỉ dừng ở cảm giác citrus đơn thuần.

Điểm mạnh của Light Blue Pour Femme là tinh thần rất dễ sống chung. Nó không đi theo hướng ngọt, không quá phấn, cũng không cố sexy. Đây là kiểu mùi khiến người ta liên tưởng đến áo trắng, nắng đẹp, kỳ nghỉ ven biển và một hình ảnh phụ nữ gọn gàng, tươi tắn. Nhờ vậy, chai này cực hợp với người thích sự năng động, chỉn chu và muốn mình luôn thơm theo kiểu sạch sáng.

Trên da, phần citrus đầu đem lại cảm giác bắt mũi và sảng khoái, nhưng phần đẹp của chai này lại nằm ở cách nó khô xuống. Khi táo, chanh dịu lại, lớp hoa và nền sạch bắt đầu hiện ra rõ hơn, làm mùi trở nên mềm hơn và nữ tính hơn. Nó không quá phức tạp, nhưng đủ tinh tế để không bị xem là đơn giản.

Về hiệu năng, vì là EDT nên Light Blue Pour Femme có độ lưu hương và độ tỏa ở mức vừa phải. Tuy nhiên, đây không phải điểm yếu lớn vì bản chất mùi hương này sinh ra cho thời tiết nóng và nhịp sống ban ngày. Trong khí hậu Việt Nam, chai này dùng cực ổn cho văn phòng, đi học, đi dạo, đi ăn trưa hoặc du lịch.

Nếu bạn cần một chai nước hoa nữ tươi, sạch, dễ dùng và đặc biệt hợp mùa nóng, D&G Light Blue Pour Femme là lựa chọn rất đáng tin cậy. Nó không phải kiểu để gây choáng ngợp, nhưng lại là kiểu thơm lâu dài theo nghĩa rất thực tế: lúc nào cần cũng cầm lên dùng được và hiếm khi sai hoàn cảnh.`,
    article: "Light Blue Pour Femme dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "armani-si-edp",
    brandSlug: "giorgio-armani",
    brand: "GIORGIO ARMANI",
    name: "S�",
    subName: "Eau de Parfum",
    perfumer: "Christine Nagel",
    gender: "nu",
    image: "/images/products/armani-si-edp-main.jpg",
    images: [{ url: "/images/products/armani-si-edp-main.jpg", source: "fragram", caption: "Giorgio Armani Sì Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Giorgio Armani Sì EDP là kiểu nước hoa nữ mang lại cảm giác thanh lịch hiện đại rất rõ ngay từ lần đầu ngửi. Mùi mở đầu với quả lý chua đen cho cảm giác mọng và hơi sắc, sau đó dần đi vào lớp hoa mềm và nền vanilla, gỗ được xử lý rất mượt. Tổng thể vừa nữ tính, vừa sang, vừa có chiều sâu, khiến nó trở thành một trong những chai designer nữ trưởng thành dễ dùng nhất trên thị trường.

Điểm đẹp của Armani Sì nằm ở sự cân bằng. Nó không quá ngọt kiểu gourmand, cũng không quá lạnh kiểu floral sạch. Chai này đứng ở khoảng giữa rất đẹp: đủ mềm để tạo cảm giác nữ tính, đủ sang để dùng trong môi trường chỉn chu, và đủ cuốn để không trở nên nhạt. Hình ảnh mà nó gợi ra là một người phụ nữ trưởng thành, tự tin, ăn nói gọn gàng và có gu theo cách không cần cố thể hiện.

Khi lên da, Armani Sì phát triển rất mượt. Phần blackcurrant ở đầu giúp mùi có điểm nhấn và không bị quá hiền, nhưng càng về sau nền vanilla và gỗ lại làm mọi thứ mềm lại theo hướng rất dễ chịu. Đây là một trong những chai nước hoa có khả năng làm người mặc trông “well put together” rất tốt, đặc biệt trong văn phòng, gặp gỡ hoặc ăn tối nhẹ nhàng.

Về hiệu năng, Armani Sì EDP có độ lưu hương khá tốt và độ tỏa ở mức vừa đến khá. Nó đủ để tạo dấu ấn nhưng không quá áp đảo, nên dùng được cả ban ngày lẫn buổi tối. Trong điều kiện khí hậu Việt Nam, chai này khá linh hoạt nếu xịt vừa tay, đặc biệt đẹp trong môi trường máy lạnh.

Nếu bạn muốn một chai nước hoa nữ sang, trưởng thành, dễ dùng và có độ cuốn rất ổn mà không cần quá phô trương, Giorgio Armani Sì EDP là lựa chọn rất đáng cân nhắc. Nó không phải kiểu gây sốc ngay lập tức, nhưng lại là kiểu càng dùng càng thấy hợp lý, đẹp và khó lỗi thời.`,
    article: "S� dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "chanel-coco-mademoiselle-edp",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Coco Mademoiselle",
    subName: "Eau de Parfum",
    perfumer: "Jacques Polge",
    gender: "nu",
    image: "/images/products/chanel-coco-mademoiselle-edp-main.jpg",
    images: [{ url: "/images/products/chanel-coco-mademoiselle-edp-main.jpg", source: "fragram", caption: "Chanel Coco Mademoiselle Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Chanel Coco Mademoiselle EDP là một trong những chai nước hoa nữ nổi tiếng nhất của Chanel vì nó thể hiện rất rõ hình ảnh người phụ nữ thanh lịch nhưng không hề mờ nhạt. Mùi mở đầu sáng với citrus, sau đó nhanh chóng phát triển sang lớp hoa và patchouli rất đặc trưng. Tổng thể cho cảm giác sắc, sạch, sang và cực kỳ chỉnh chu, đúng kiểu mùi hương có thể khiến người mặc trông đắt giá hơn chỉ bằng cách xuất hiện cùng nó.

Điểm mạnh của Coco Mademoiselle là khí chất. Nó không ngọt hiền theo kiểu dễ thương, cũng không mềm kiểu romantic. Đây là kiểu nữ tính có xương sống: rõ ràng, tự tin và có độ sắc sảo rất đẹp. Chính patchouli là yếu tố làm chai này khác biệt, vì nó cho mùi một đường nét rõ, giúp tổng thể luôn có chiều sâu thay vì chỉ là một mùi floral-citrus dễ quên.

Khi lên da, phần citrus đầu làm mùi bắt rất nhanh và gọn, nhưng càng về sau lớp hoa cùng patchouli càng nổi bật hơn. Đây là lúc Coco Mademoiselle đẹp nhất: sang, sáng nhưng vẫn có trọng lượng. Nó phù hợp với phụ nữ đi làm, gặp khách hàng, dự tiệc nhẹ, đi ăn tối hoặc bất kỳ dịp nào cần hình ảnh thật chỉn chu và có thần thái.

Về hiệu năng, Chanel Coco Mademoiselle EDP lưu hương tốt và tỏa hương khá rõ trong những giờ đầu. Nó đủ nổi để tạo dấu ấn nhưng vẫn giữ được chất thanh lịch, không trở nên nặng nề nếu dùng hợp lý. Trong khí hậu Việt Nam, chai này dùng được quanh năm, chỉ cần tiết chế số lần xịt vào những ngày quá nóng.

Nếu bạn muốn một chai nước hoa nữ kinh điển, sang, có độ nhận diện cao và gần như không lỗi thời, Coco Mademoiselle EDP là lựa chọn rất mạnh. Nó không phải mùi để thử nghiệm cá tính lạ, mà là mùi để khẳng định sự chỉn chu, khí chất và gu thẩm mỹ một cách rất rõ ràng.`,
    article: "Coco Mademoiselle dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "armaf-club-de-nuit-intense-man",
    brandSlug: "armaf",
    brand: "ARMAF",
    name: "Club de Nuit Intense Man",
    subName: "Eau de Toilette",
    perfumer: "Armaf",
    gender: "nam",
    image: "/images/products/armaf-club-de-nuit-intense-man-main.jpg",
    images: [{ url: "/images/products/armaf-club-de-nuit-intense-man-main.jpg", source: "fragram", caption: "Armaf Club de Nuit Intense Man Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Armaf Club de Nuit Intense Man EDT là cái tên rất quen thuộc với những ai tìm một chai nước hoa nam nổi bật, dễ gây ấn tượng và có cảm giác cao cấp hơn tầm giá. Mùi mở đầu thường khá sắc, với citrus sáng mạnh, sau đó nhanh chóng đi vào phần trái cây khói và gỗ khô. Khi qua lớp đầu, tổng thể trở nên nam tính, lịch lãm và có độ sang rất rõ.

Điểm mạnh của chai này là hiệu ứng tạo ấn tượng. Nó cho cảm giác một người đàn ông tự tin, có tham vọng, ăn mặc gọn và không ngại để mình được chú ý. Club de Nuit Intense Man đặc biệt hợp với những ai muốn một mùi hương dùng cho đi làm, đi gặp khách, đi chơi tối hoặc những dịp cần sự hiện diện rõ ràng.

Trên da, phần đẹp nhất của chai này thường đến sau khoảng 20 đến 30 phút, khi lớp mở đầu dịu lại và phần khói trái cây bắt đầu mượt hơn. Lúc đó mùi cho cảm giác rất nam tính, chững chạc và dễ khiến người xung quanh nhớ. Đây là lý do nhiều người chấp nhận lớp đầu hơi gắt để đổi lấy phần dry down rất đáng tiền.

Về hiệu năng, Club de Nuit Intense Man EDT thường làm tốt ở cả độ lưu hương lẫn độ tỏa. Nó có thể hoạt động mạnh trong điều kiện Việt Nam, nên nếu dùng nơi kín hoặc thời tiết nóng thì chỉ cần xịt vừa phải. Dùng buổi tối hoặc môi trường máy lạnh sẽ đẹp hơn nhiều.

Nếu bạn cần một chai nước hoa nam nổi bật, giá dễ tiếp cận và mang vibe thành đạt, Club de Nuit Intense Man là lựa chọn rất thực dụng. Nó không phải kiểu hoàn hảo ngay từ đầu, nhưng hiệu quả tổng thể mà nó mang lại khiến chai này vẫn có chỗ đứng rất vững trên thị trường.`,
    article: "Club de Nuit Intense Man dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "givenchy-gentleman-reserve-privee",
    brandSlug: "givenchy",
    brand: "GIVENCHY",
    name: "Gentleman",
    subName: "Reserve Priv�e",
    perfumer: "Nathalie Lorson & Olivier Cresp",
    gender: "nam",
    image: "/images/products/givenchy-gentleman-reserve-privee-main.jpg",
    images: [{ url: "/images/products/givenchy-gentleman-reserve-privee-main.jpg", source: "fragram", caption: "Givenchy Gentleman Réserve Privée chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Givenchy Gentleman Réserve Privée EDP là một chai nước hoa nam có chất sang rất rõ nhưng không phô trương. Mùi hương kết hợp iris phấn mịn với cảm giác rượu whisky nhẹ, cacao và nền gỗ ấm, tạo nên tổng thể vừa mềm, vừa nam tính, vừa có chiều sâu. Đây là kiểu mùi không quá đại trà và cũng không dễ bị nhầm với những chai designer phổ biến khác.

Điểm đẹp của Réserve Privée nằm ở sự tinh tế. Nó không phải kiểu ngọt ấm đơn giản, mà có những lớp chuyển khá thú vị trên da. Sự xuất hiện của iris làm mùi trở nên sang và mượt, trong khi nốt whisky tạo cảm giác trưởng thành, điềm tĩnh và hơi nghệ một chút. Rất hợp với người thích phong cách lịch lãm nhưng muốn có nét riêng.

Khi lên da, mùi phát triển mềm và sâu hơn qua thời gian. Lớp đầu hơi boozy một chút giúp tạo dấu ấn, sau đó cacao và gỗ làm tổng thể ấm hơn, ôm da hơn. Đây là kiểu nước hoa hợp với những buổi tối, tiệc nhẹ, ăn tối sang hoặc môi trường cần sự tinh tế trong khoảng cách gần.

Về hiệu năng, Givenchy Gentleman Réserve Privée EDP lưu hương khá tốt và tỏa hương ở mức vừa đến khá. Trong khí hậu Việt Nam, chai này sẽ đẹp nhất vào buổi tối, trời mát hoặc không gian máy lạnh. Nếu dùng ban ngày nắng nóng, nên xịt tiết chế để mùi giữ được độ sang cần thiết.

Nếu bạn muốn một chai nước hoa nam có chất gentleman hiện đại, sang mà không nhàm, Réserve Privée là lựa chọn rất đáng thử. Nó không dành cho người thích kiểu fresh đơn giản, nhưng lại rất hợp với ai muốn mùi hương của mình có chiều sâu và sự tinh tế thật sự.`,
    article: "Gentleman dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "viktor-rolf-spicebomb-extreme",
    brandSlug: "viktor-rolf",
    brand: "VIKTOR&ROLF",
    name: "Spicebomb Extreme",
    subName: "Eau de Parfum",
    perfumer: "Carlos Benaim",
    gender: "nam",
    image: "/images/products/viktor-rolf-spicebomb-extreme-main.jpg",
    images: [{ url: "/images/products/viktor-rolf-spicebomb-extreme-main.jpg", source: "fragram", caption: "Viktor & Rolf Spicebomb Extreme Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Viktor & Rolf Spicebomb Extreme EDP đúng như tên gọi: một quả bom gia vị dành cho những ai thích mùi hương nam đậm và có sức nặng. Mùi mở đầu với cảm giác cay ấm rõ rệt, sau đó dần đi vào lớp vanilla, thuốc lá và nền hổ phách dày. Tổng thể vừa nóng, vừa ngọt, vừa nam tính, tạo ra cảm giác rất cuốn trong thời tiết mát hoặc buổi tối.

Điểm hấp dẫn của Spicebomb Extreme là nó không cố gắng trở nên an toàn. Đây là kiểu mùi dành cho người thích cá tính rõ, thích sự nổi bật và không ngại mùi hương của mình chiếm không gian. Nó hợp với áo khoác, buổi tối, hẹn hò, đi bar hoặc những dịp cần một mùi hương thật có lực.

Trên da, lớp gia vị đầu có thể khá mạnh, nhưng sau đó mùi trở nên mượt hơn và quyến rũ hơn khi vanilla bắt đầu rõ lên. Thuốc lá trong chai này không quá khô mà khá mềm, giúp tổng thể vừa nam tính vừa gợi cảm. Đây là lý do nhiều người xem nó là một chai cold weather rất hấp dẫn.

Về hiệu năng, Spicebomb Extreme EDP làm rất tốt ở cả lưu hương lẫn độ tỏa. Trong điều kiện Việt Nam, nên ưu tiên dùng vào buổi tối, phòng máy lạnh hoặc những ngày mưa mát. Nếu dùng giữa trưa nóng, chai này dễ trở nên quá nặng nếu xịt nhiều.

Nếu bạn muốn một chai nước hoa nam cay ngọt, mạnh mẽ và có thần thái cuốn hút rất rõ, Spicebomb Extreme là lựa chọn cực kỳ đáng cân nhắc. Nó không dành cho người thích sự nhẹ nhàng, nhưng lại rất phù hợp với người muốn một mùi hương có cá tính và độ sexy nổi bật.`,
    article: "Spicebomb Extreme dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "issey-miyake-leau-dissey-pour-homme",
    brandSlug: "issey-miyake",
    brand: "ISSEY MIYAKE",
    name: "L�Eau d�Issey Pour Homme",
    subName: "Eau de Toilette",
    perfumer: "Jacques Cavallier",
    gender: "nam",
    image: "/images/products/issey-miyake-leau-dissey-pour-homme-main.jpg",
    images: [{ url: "/images/products/issey-miyake-leau-dissey-pour-homme-main.jpg", source: "fragram", caption: "Issey Miyake L'Eau d'Issey Pour Homme chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Issey Miyake L'Eau d'Issey Pour Homme EDT là một trong những chai nước hoa nam tươi mát kinh điển. Mùi mở đầu rất sáng với citrus và cảm giác watery sạch sẽ, sau đó dần chuyển sang lớp hương cay nhẹ và gỗ thoáng. Tổng thể tạo cảm giác mát, thanh và có phần tối giản, đúng tinh thần gọn gàng mà nhiều người yêu ở các thiết kế Nhật Bản.

Điểm hay của chai này là sự trong trẻo. Nó không ngọt, không dày, không cố quyến rũ bằng kiểu nồng ấm. Thay vào đó, L'Eau d'Issey Pour Homme mang đến cảm giác người mặc rất sạch, rất dễ chịu và gần như luôn phù hợp trong môi trường hằng ngày. Đây là kiểu mùi cực ổn cho thời tiết nóng hoặc những ai ngại mùi quá nặng.

Khi lên da, chai này giữ được sự sáng và mát khá lâu trước khi nền gỗ hiện ra. Điều đó làm tổng thể không bị quá mỏng mà vẫn giữ được tính nam cần thiết. Nó gợi ra hình ảnh một người đàn ông điềm tĩnh, tinh gọn và ưu tiên sự thoải mái hơn là phô diễn cá tính.

Về hiệu năng, L'Eau d'Issey Pour Homme EDT ở mức khá với độ tỏa vừa phải. Đây không phải kiểu mùi bám cả ngày quá mạnh, nhưng lại rất đẹp cho ban ngày, văn phòng, đi học, đi dạo hoặc bất kỳ hoàn cảnh nào cần sự dễ chịu. Trong khí hậu Việt Nam, chai này là một lựa chọn rất hợp mùa nóng.

Nếu bạn cần một chai nước hoa nam tươi sạch, thanh lịch và không bao giờ quá đà, L'Eau d'Issey Pour Homme là cái tên rất đáng thử. Nó không phải kiểu trendy ồn ào, nhưng sự gọn gàng và cân bằng của nó vẫn khiến nhiều người trung thành suốt nhiều năm.`,
    article: "L�Eau d�Issey Pour Homme dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "bvlgari-man-in-black",
    brandSlug: "bvlgari",
    brand: "BVLGARI",
    name: "Man In Black",
    subName: "Eau de Parfum",
    perfumer: "Alberto Morillas",
    gender: "nam",
    image: "/images/products/bvlgari-man-in-black-main.jpg",
    images: [{ url: "/images/products/bvlgari-man-in-black-main.jpg", source: "fragram", caption: "Bvlgari Man In Black Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Bvlgari Man In Black EDP là kiểu nước hoa nam mang sắc tối và hơi quyền lực ngay từ những phút đầu. Mùi mở ra với cảm giác rum và gia vị khá rõ, sau đó chuyển sang thuốc lá mềm, da thuộc nhẹ và nền hổ phách ấm. Tổng thể rất nam tính, hơi bí ẩn và có chất ăn tối sang trọng rõ rệt.

Điểm mạnh của chai này là khí chất. Man In Black không đi theo hướng dễ thương hay fresh dễ gần, mà thiên về hình ảnh một người đàn ông trưởng thành, có chiều sâu và biết mình muốn gì. Nó hợp với buổi tối, các dịp mặc đồ chỉnh chu, gặp gỡ riêng tư hoặc những không gian cần mùi hương có trọng lượng.

Khi lên da, phần rum và gia vị làm mùi khá nổi trong giai đoạn đầu, nhưng sau đó chai này trở nên ấm và mềm hơn nhờ lớp thuốc lá và amber. Đây là lúc Man In Black đẹp nhất: sang, trầm, cuốn và có độ ôm rất nam tính. Nó không quá ồn, nhưng chắc chắn có cá tính mạnh.

Về hiệu năng, Bvlgari Man In Black EDP lưu hương tốt và tỏa hương ở mức khá. Trong khí hậu Việt Nam, nó sẽ phát huy đẹp hơn vào buổi tối, mùa mưa hoặc môi trường máy lạnh. Nếu dùng ban ngày nóng, nên xịt tiết chế để mùi không bị dày quá mức.

Nếu bạn muốn một chai nước hoa nam ấm tối, có chút boozy và tạo cảm giác trưởng thành rõ rệt, Bvlgari Man In Black là lựa chọn rất đáng cân nhắc. Nó không dành cho người thích mùi an toàn kiểu văn phòng, nhưng lại rất hợp với ai muốn một mùi hương có bản lĩnh và chất riêng.`,
    article: "Man In Black dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "boss-bottled-edp",
    brandSlug: "hugo-boss",
    brand: "HUGO BOSS",
    name: "Boss Bottled",
    subName: "Eau de Parfum",
    perfumer: "Honorine Blanc",
    gender: "nam",
    image: "/images/products/boss-bottled-edp-main.jpg",
    images: [{ url: "/images/products/boss-bottled-edp-main.jpg", source: "fragram", caption: "Hugo Boss Boss Bottled Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Boss Bottled EDP là một kiểu nước hoa nam rất đúng tinh thần lịch sự, dễ dùng và thực tế. Mùi mở đầu có cảm giác táo và gia vị nhẹ, sau đó chuyển dần sang lớp gỗ ấm và sạch. Tổng thể không quá nổi loạn hay quá cá tính, mà thiên về hình ảnh một người đàn ông trưởng thành, đáng tin và biết cách giữ hình ảnh gọn gàng trong đời sống hằng ngày.

Điểm mạnh của Boss Bottled EDP là sự cân bằng. Nó đủ ấm để không bị nhạt, đủ tươi để không bị già, và đủ nam tính để dùng trong nhiều hoàn cảnh khác nhau. Đây là kiểu chai bạn có thể dùng đi làm, đi gặp đối tác, đi ăn tối nhẹ hoặc các dịp cần sự lịch sự mà không phải suy nghĩ nhiều.

Trên da, Boss Bottled EDP phát triển theo hướng khá mượt. Lớp táo đầu giúp mùi dễ tiếp cận hơn, trong khi phần gỗ và gia vị phía sau giữ lại sự chững chạc. Nó không phải kiểu tạo cú sốc hay quá khác biệt, nhưng lại làm rất tốt việc khiến người xung quanh cảm thấy bạn thơm, gọn và dễ chịu.

Về hiệu năng, chai này lưu hương khá và tỏa hương ở mức vừa phải. Trong điều kiện khí hậu Việt Nam, Boss Bottled EDP dùng tốt cả ngày lẫn tối, đặc biệt ở môi trường công sở hoặc nơi có máy lạnh. Đây là một lựa chọn ổn định cho người cần sự linh hoạt cao.

Nếu bạn muốn một chai nước hoa nam an toàn theo nghĩa tích cực, trưởng thành và hợp nhiều tình huống, Boss Bottled EDP là lựa chọn rất dễ sống chung lâu dài. Nó không quá flashy, nhưng sự ổn định và hình ảnh lịch sự mà nó mang lại luôn có giá trị thực tế.`,
    article: "Boss Bottled dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "coach-for-men",
    brandSlug: "coach",
    brand: "COACH",
    name: "For Men",
    subName: "Eau de Toilette",
    perfumer: "Anne Flipo & Bruno Jovanovic",
    gender: "nam",
    image: "/images/products/coach-for-men-main.jpg",
    images: [{ url: "/images/products/coach-for-men-main.jpg", source: "fragram", caption: "Coach For Men Eau de Toilette chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Coach for Men EDT là kiểu nước hoa nam dễ dùng ngay từ lần đầu thử. Mùi mở đầu sáng, tươi và có cảm giác trái cây nhẹ, sau đó chuyển sang lớp hương sạch hơn với chút gỗ và da rất mềm ở nền. Tổng thể mang màu sắc trẻ trung, hiện đại và khá thân thiện, không hề tạo cảm giác quá nghiêm hay quá phô trương.

Điểm đáng giá của chai này là sự dễ tiếp cận. Coach for Men phù hợp với nhiều người, từ người mới bắt đầu dùng nước hoa đến những ai muốn một chai thơm gọn để dùng hằng ngày. Nó cho cảm giác của một người đàn ông năng động, lịch sự vừa đủ, thích sự thoải mái và không cần mùi hương quá nặng để thể hiện bản thân.

Khi lên da, chai này giữ được sự sáng trong thời gian đầu, sau đó trở nên mềm hơn và nam tính hơn nhờ lớp nền. Dù không quá phức tạp, Coach for Men EDT vẫn có độ hoàn thiện khá tốt trong tầm designer dễ dùng. Nó hợp với môi trường đi làm, đi học, đi cà phê hoặc gặp gỡ bạn bè cuối tuần.

Về hiệu năng, chai này ở mức vừa phải: đủ lưu lại đẹp trên da và quần áo, nhưng không phải kiểu tỏa mạnh. Chính điều đó lại là ưu điểm với những ai thích mùi hương nhẹ nhàng, không làm phiền người xung quanh. Trong thời tiết Việt Nam, đây là dạng mùi rất dễ dùng quanh năm.

Nếu bạn cần một chai nước hoa nam trẻ, sạch, linh hoạt và không có rủi ro cao khi blind buy, Coach for Men EDT là lựa chọn khá an toàn. Nó không phải kiểu để gây choáng ngợp, nhưng lại rất hợp với người muốn thơm một cách tự nhiên và dễ gần.`,
    article: "For Men dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "moschino-toy-boy",
    brandSlug: "moschino",
    brand: "MOSCHINO",
    name: "Toy Boy",
    subName: "Eau de Parfum",
    perfumer: "Yann Vasnier",
    gender: "nam",
    image: "/images/products/moschino-toy-boy-main.jpg",
    images: [{ url: "/images/products/moschino-toy-boy-main.jpg", source: "fragram", caption: "Moschino Toy Boy Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Moschino Toy Boy EDP là một trong những chai nước hoa nam khác biệt nhất trong nhóm designer vì nó đưa hoa hồng vào trung tâm theo cách rất cá tính. Mùi mở đầu cay và hơi sắc, sau đó hoa hồng dần hiện lên cùng xạ hương và nền gỗ, tạo thành một tổng thể vừa lạ, vừa hiện đại, vừa có chất thời trang rõ rệt. Đây không phải kiểu mùi nam đại trà ai cũng đoán được ngay.

Điểm thú vị của Toy Boy là nó nam tính theo một hướng mới. Hoa hồng ở đây không mềm kiểu nữ tính, mà được đặt trên nền cay và musky nên cho cảm giác lạnh, sắc và rất có attitude. Mùi hương này hợp với người thích thời trang, thích sự khác biệt và không ngại để người khác nhớ đến mình vì một mùi thơm rất riêng.

Khi lên da, Toy Boy trở nên mượt hơn sau lớp đầu khá mạnh. Hoa hồng dần hiện ra rõ hơn, nhưng luôn được giữ trong khung nam tính nhờ tiêu, gỗ và xạ hương. Chính sự tương phản này khiến chai nước hoa có chiều sâu và tạo cảm giác vừa nghệ vừa hiện đại.

Về hiệu năng, Moschino Toy Boy EDP làm khá tốt với độ lưu hương tốt và tỏa hương khá rõ. Trong khí hậu Việt Nam, chai này có thể dùng được cả ngày lẫn tối nếu xịt vừa phải, nhưng đẹp nhất vẫn là buổi tối hoặc không gian máy lạnh khi các lớp hương lên rõ hơn.

Nếu bạn đã chán những mùi nam blue hoặc gỗ ngọt quen thuộc và muốn một chai nước hoa thực sự có cá tính riêng, Toy Boy là lựa chọn rất đáng thử. Nó không phải mùi cho số đông, nhưng với người hợp gu, đây là một chai rất đáng nhớ và khó bị thay thế.`,
    article: "Toy Boy dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nam", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nam", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "initio-side-effect",
    brandSlug: "initio",
    brand: "INITIO",
    name: "Side Effect",
    subName: "Eau de Parfum",
    perfumer: "Initio",
    gender: "unisex",
    image: "/images/products/initio-side-effect-main.jpg",
    images: [{ url: "/images/products/initio-side-effect-main.jpg", source: "fragram", caption: "Initio Side Effect Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Initio Side Effect EDP là kiểu nước hoa khiến người ta nghĩ ngay đến chữ quyến rũ theo nghĩa trưởng thành. Mùi hương mở ra với cảm giác rượu mạnh, ngọt ấm và hơi cay, sau đó nhanh chóng đi vào lớp thuốc lá, vanilla và gỗ mềm. Tổng thể vừa dày, vừa mượt, vừa có độ tối vừa đủ để tạo ra cảm giác sang và cuốn mà không bị thô. Đây là một mùi hương không đi theo hướng an toàn, nhưng một khi hợp gu thì rất dễ gây nghiện.

Điểm mạnh nhất của Side Effect là chiều sâu cảm xúc. Nó không cố gây ấn tượng bằng sự phức tạp cầu kỳ, mà bằng cảm giác rất rõ của một buổi tối đẹp: ánh đèn thấp, ly rượu ngon, không khí ấm và một sự thân mật được kiểm soát. Đây là kiểu mùi unisex nhưng nghiêng về tinh thần sensual nhiều hơn là sạch hay tươi. Người mặc Side Effect thường sẽ tạo cảm giác tự tin, có chủ đích và biết cách để lại dấu ấn.

Khi lên da, lớp rượu và gia vị đầu tạo hiệu ứng rất bắt mũi, nhưng điều đáng giá hơn nằm ở phần dry down. Sau khoảng 20 đến 30 phút, mùi trở nên tròn hơn, mềm hơn và rất ôm da, với vanilla, thuốc lá và nền gỗ làm tất cả hòa lại thành một khối mượt. Đây là lúc Side Effect đẹp nhất: không còn quá sắc, nhưng cực kỳ hấp dẫn ở khoảng cách gần.

Về hiệu năng, Initio Side Effect làm rất tốt. Độ lưu hương lâu, độ tỏa khá rõ và khả năng giữ sự hiện diện trong nhiều giờ là điểm mạnh thực sự. Trong khí hậu Việt Nam, chai này nên dùng vào buổi tối, phòng máy lạnh, mùa mưa hoặc những ngày thời tiết dịu để mùi phát huy đúng chất.

Nếu bạn cần một chai nước hoa unisex thiên về quyến rũ, trưởng thành và có chiều sâu rất rõ, Initio Side Effect là lựa chọn cực kỳ đáng thử. Nó không phải kiểu thơm dễ chiều số đông, nhưng lại rất hợp với người muốn mùi hương của mình có sức hút kiểu chậm, dày và rất khó quên.`,
    article: "Side Effect dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "unisex", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["unisex", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "xerjoff-erba-pura",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "Erba Pura",
    subName: "Eau de Parfum",
    perfumer: "Christian Carbonnel",
    gender: "unisex",
    image: "/images/products/xerjoff-erba-pura-main.jpg",
    images: [{ url: "/images/products/xerjoff-erba-pura-main.jpg", source: "fragram", caption: "Xerjoff Erba Pura Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Xerjoff Erba Pura EDP là một trong những chai nước hoa niche nổi bật nhất ở nhóm fruity-musky hiện đại. Mùi mở đầu rất sáng với cảm giác trái cây ngọt mọng, sau đó dần chuyển sang lớp xạ hương sạch và nền ấm mềm. Tổng thể cho cảm giác rực rỡ, sang và có sức bật rất cao, gần như ngay lập tức tạo ra một vùng hương rõ xung quanh người mặc. Đây là kiểu mùi khó có thể gọi là kín đáo.

Điểm mạnh của Erba Pura là độ bắt mũi và độ bóng bẩy. Nó không đi theo hướng trái cây tự nhiên mộc mạc, mà là trái cây được đánh bóng rất kỹ: mọng, sáng, sạch và có độ lux rõ rệt. Nhờ lớp musk phía dưới, tổng thể không bị quá sticky mà có cảm giác như một lớp khăn lụa sạch phủ lên phần trái cây ngọt. Điều đó khiến chai này vừa flashy vừa có tính thẩm mỹ riêng.

Khi lên da, Erba Pura thường khá nổi trong giai đoạn đầu, nhưng càng về sau càng mượt hơn. Lúc này phần xạ hương hiện rõ, giúp mùi vừa ngọt vừa sạch, tạo hiệu ứng rất dễ khiến người khác liên tưởng đến sự chỉn chu và đắt tiền. Đây là một trong những lý do chai này thường được dùng trong những dịp muốn xuất hiện nổi bật hoặc cần một mùi hương có độ nhận diện cao.

Về hiệu năng, Xerjoff Erba Pura là chai rất mạnh. Độ lưu hương lâu, độ tỏa rõ và khả năng bám tốt khiến nó chỉ cần vài xịt là đủ. Trong điều kiện khí hậu Việt Nam, nếu dùng ban ngày nắng nóng nên tiết chế rõ ràng. Buổi tối, phòng máy lạnh hoặc thời tiết dịu là lúc chai này phát huy đẹp hơn nhiều.

Nếu bạn muốn một chai nước hoa unisex trái cây sang, nổi bật, sạch và rất dễ để lại dấu ấn, Erba Pura là lựa chọn đáng thử. Nó không dành cho người thích sự tối giản hay gần da, nhưng lại cực hợp với ai muốn mùi hương của mình có ánh sáng, có độ sang và có mặt rất rõ trong không gian.`,
    article: "Erba Pura dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "unisex", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["unisex", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 1990000,
    shopeeOffers: []
  },
  {
    id: "mugler-alien-edp",
    brandSlug: "mugler",
    brand: "MUGLER",
    name: "Alien",
    subName: "Eau de Parfum",
    perfumer: "Dominique Ropion & Laurent Bruyere",
    gender: "nu",
    image: "/images/products/mugler-alien-edp-main.jpg",
    images: [{ url: "/images/products/mugler-alien-edp-main.jpg", source: "fragram", caption: "Mugler Alien Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Mugler Alien EDP là một chai nước hoa nữ rất đặc trưng, gần như khó nhầm với bất kỳ mùi nào khác. Mùi hương xoay quanh hoa nhài, amber và gỗ, tạo nên tổng thể vừa rực rỡ, vừa ấm, vừa có cảm giác bí ẩn. Đây không phải kiểu nữ tính ngọt hiền quen thuộc, mà là kiểu nữ tính mạnh, có năng lượng và rất dễ để lại ấn tượng.

Điểm hấp dẫn của Alien là sự khác biệt. Ngay từ đầu, chai này đã cho cảm giác hoa trắng sáng mạnh, gần như phát sáng trên da, nhưng lại được neo lại bằng nền hổ phách và gỗ nên không bị quá mỏng. Nó gợi ra hình ảnh một người phụ nữ nổi bật, có thần thái riêng và không ngại bước ra khỏi vùng an toàn về mùi hương.

Khi lên da, Alien trở nên ấm hơn và sâu hơn theo thời gian. Phần hoa nhài vẫn giữ vai trò chính, nhưng càng về sau lớp amber càng khiến mùi trở nên ôm và cuốn hơn. Đây là kiểu nước hoa hợp với buổi tối, tiệc nhẹ, sự kiện hoặc bất cứ dịp nào bạn muốn mùi hương của mình có “hào quang” rất rõ.

Về hiệu năng, Mugler Alien EDP là chai làm tốt cả ở độ lưu hương lẫn độ tỏa. Nó có khả năng bám lâu và dễ được nhận ra, nên không cần xịt quá nhiều. Trong điều kiện Việt Nam, chai này hợp hơn với buổi tối, môi trường máy lạnh hoặc thời tiết dịu.

Nếu bạn thích một chai nước hoa nữ có cá tính mạnh, khác biệt và mang cảm giác sang bí ẩn, Mugler Alien EDP là lựa chọn rất đáng thử. Nó không phải mùi cho số đông, nhưng với người hợp gu, đây là kiểu hương rất khó thay thế và cực kỳ dễ gây nghiện.`,
    article: "Alien dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2390000,
    shopeeOffers: []
  },
  {
    id: "elie-saab-le-parfum",
    brandSlug: "elie-saab",
    brand: "ELIE SAAB",
    name: "Le Parfum",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "nu",
    image: "/images/products/elie-saab-le-parfum-main.jpg",
    images: [{ url: "/images/products/elie-saab-le-parfum-main.jpg", source: "fragram", caption: "Elie Saab Le Parfum Eau de Parfum chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Elie Saab Le Parfum EDP là kiểu nước hoa nữ mang cảm giác sang và thanh lịch rất rõ ngay từ những phút đầu. Mùi mở ra với hoa cam rực rỡ, sau đó đi vào lớp hoa trắng dày hơn cùng mật ong và nền gỗ nhẹ. Tổng thể tạo cảm giác sáng, nữ tính và chỉn chu, như một chiếc váy đẹp được cắt may rất khéo chứ không cần quá nhiều chi tiết phô diễn.

Điểm đẹp của chai này là sự sang trọng mềm mại. Nó không ngọt kiểu trẻ trung, cũng không quá sắc lạnh. Thay vào đó, Elie Saab Le Parfum mang lại hình ảnh một người phụ nữ trưởng thành, ăn mặc đẹp, có sự dịu dàng nhưng vẫn toát ra đẳng cấp rất rõ. Mùi hương này hợp với tiệc, sự kiện, gặp gỡ trang trọng hoặc những ngày muốn mình thật thanh lịch.

Trên da, lớp mật ong làm mùi trở nên ấm hơn và có chiều sâu hơn, nhưng hoa cam vẫn giữ cho tổng thể sự rạng rỡ. Chính sự kết hợp đó giúp chai này vừa có ánh sáng của hoa, vừa có độ ôm của nền ấm, tạo cảm giác rất cân bằng và cao cấp.

Về hiệu năng, Elie Saab Le Parfum EDP lưu hương khá tốt và tỏa hương vừa đến khá. Trong khí hậu Việt Nam, nên dùng vừa tay vào ban ngày nóng để mùi giữ được độ tinh tế. Buổi tối, môi trường máy lạnh hoặc thời tiết dịu sẽ là thời điểm chai này lên rất đẹp.

Nếu bạn muốn một chai nước hoa nữ sang, thanh lịch và có chất “dressy” rõ ràng, Elie Saab Le Parfum là lựa chọn rất đáng cân nhắc. Nó không ồn ào hay quá trendy, nhưng sự tinh tế và độ hoàn thiện của nó đủ để khiến người mặc trông rất có gu.`,
    article: "Le Parfum dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "nu", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["nu", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 2290000,
    shopeeOffers: []
  },
  {
    id: "maison-francis-kurkdjian-gentle-fluidity-gold",
    brandSlug: "maison-francis-kurkdjian",
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Gentle Fluidity Gold",
    subName: "Eau de Parfum",
    perfumer: "Francis Kurkdjian",
    gender: "unisex",
    image: "/images/products/maison-francis-kurkdjian-gentle-fluidity-gold-main.jpg",
    images: [{ url: "/images/products/maison-francis-kurkdjian-gentle-fluidity-gold-main.jpg", source: "fragram", caption: "Maison Francis Kurkdjian Gentle Fluidity Gold chính hãng", verified: true }],
    description: "Phi�n b?n dang du?c b? sung nhanh v�o catalog Maison de SON d? ho�n thi?n thu vi?n s?n ph?m live.",
    productCopy: `Maison Francis Kurkdjian Gentle Fluidity Gold EDP là kiểu nước hoa thể hiện sự sang trọng bằng độ mượt chứ không bằng độ ồn. Mùi hương mở ra mềm và ấm, sau đó vanilla, amber và xạ hương dần hiện rõ, tạo nên một tổng thể rất tròn, rất gọn và cực kỳ tinh tế. Đây không phải mùi khiến người ta giật mình vì quá lạ, mà là kiểu càng ở gần càng thấy đắt, càng ngửi lâu càng thấy độ hoàn thiện cao.

Điểm đẹp nhất của Gentle Fluidity Gold là sự cân bằng giữa độ ấm và độ trong. Nó có vanilla nhưng không gourmand, có amber nhưng không nặng, có musk nhưng không quá sạch kiểu xà phòng. Tất cả được xử lý để tạo ra cảm giác mềm như lụa, ôm da, sang và rất có gu. Đây là một mùi unisex thật sự, nhưng thường hợp với những người thích phong cách chỉnh chu, tinh tế và không cần mùi hương phải gào lên để được chú ý.

Khi lên da, Gentle Fluidity Gold phát triển rất mượt, gần như không có giai đoạn thô. Lớp đầu đã đẹp, nhưng lớp sau còn đẹp hơn khi vanilla và amber hòa vào nhau thành một cảm giác ấm sạch rất sang. Nó tạo ra kiểu hiện diện mà người đối diện phải đứng gần mới cảm nhận hết, và chính điều đó khiến chai này có sức hút riêng: kín đáo nhưng cực kỳ thẩm mỹ.

Về hiệu năng, đây là chai có độ lưu hương tốt và độ tỏa vừa phải. Nó không phải kiểu lấp đầy căn phòng, nhưng lại bám ổn và giữ sự thanh lịch trong nhiều giờ. Trong khí hậu Việt Nam, Gentle Fluidity Gold dùng tốt ở cả ban ngày lẫn buổi tối nếu tiết chế hợp lý, đặc biệt đẹp trong môi trường máy lạnh hoặc những dịp cần hình ảnh tinh gọn.

Nếu bạn muốn một chai nước hoa unisex sang, mềm, tinh tế và mang cảm giác cao cấp rất rõ mà không quá phô trương, Gentle Fluidity Gold là lựa chọn cực kỳ đáng cân nhắc. Nó không dành cho người thích hiệu ứng bùng nổ, nhưng lại hoàn hảo với ai muốn thơm theo cách trưởng thành, mượt và có đẳng cấp thật sự.`,
    article: "Gentle Fluidity Gold dang du?c Maison de SON b? sung v�o catalog live. N?i dung review chi ti?t s? ti?p t?c du?c n�ng chu?n sau.",
    verdict: "M�i d? x?p d�ng nhu c?u s? d?ng th?c t?.",
    verdictShort: "LIVE CATALOG UPDATE",
    score: { scent: 8.4, uniqueness: 7.8, compliments: 8.6, value: 8.2, total: 8.3 },
    vibes: [
      { label: "unisex", icon: "?" },
      { label: "D? d�ng", icon: "??" },
      { label: "Catalog live", icon: "??" }
    ],
    longevity: 7,
    sillage: 7,
    seasons: { spring: 68, summer: 52, fall: 82, winter: 78 },
    dayNight: { day: 58, night: 82 },
    topNotes: [{ name: "Top note" }],
    middleNotes: [{ name: "Middle note" }],
    baseNotes: [{ name: "Base note" }],
    accords: [
      { name: "Ch? d?o", value: 58, color: "#8B4513" },
      { name: "D? d�ng", value: 32, color: "#1abc9c" },
      { name: "Hi?n d?i", value: 24, color: "#9b59b6" },
      { name: "?m", value: 20, color: "#e67e22" }
    ],
    tags: ["unisex", "Catalog", "Live", "2026"],
    sizes: ["10ml Chi?t", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 4990000,
    shopeeOffers: []
  },
  {
    id: "ysl-la-nuit-de-lhomme",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "La Nuit de l'Homme",
    subName: "Eau de Toilette",
    perfumer: "Anne Flipo, Pierre Wargnye, Dominique Ropion",
    gender: "nam",
    image: "/images/products/ysl-la-nuit-de-lhomme-main.jpg",
    images: [{ url: "/images/products/ysl-la-nuit-de-lhomme-main.jpg", source: "studio", caption: "Ảnh sản phẩm La Nuit de L'Homme (chai và hộp)" }, { url: "/images/products/ysl-la-nuit-de-lhomme-bottle.jpg", source: "studio", caption: "Ảnh chai La Nuit de L'Homme" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
La Nuit de l'Homme là một trong những chai nước hoa nam quyến rũ nhất của YSL theo kiểu mềm, gần, sang và có chút bí ẩn. Mùi hương không đi theo hướng nam tính gắt hay tỏa ồn ào, mà chọn cách dùng bạch đậu khấu, oải hương, gỗ và chút ngọt vừa đủ để tạo cảm giác rất cuốn khi đứng gần. Đây là kiểu mùi khiến người đối diện muốn lại gần hơn chứ không phải kiểu bước vào phòng ai cũng nhận ra ngay.

Cái hay của La Nuit nằm ở sự cân bằng. Nó vừa đủ lịch sự để không bị phản cảm, vừa đủ sensual để dùng cho buổi tối, hẹn hò hoặc không gian thân mật. Ở thị trường Việt Nam, đây là nhóm mùi rất dễ được khen vì nó sạch, quyến rũ nhưng không phô. Tuy nhiên, độ bùng nổ của nó không nằm ở projection mà ở aura khi tiếp xúc gần.

## Diễn biến trên da
Mở đầu là bạch đậu khấu khá rõ, tạo cảm giác cay nhẹ và sang. Sau đó oải hương làm mùi hương mềm lại, còn gỗ tuyết tùng giữ cho tổng thể vẫn nam tính và đứng form. Trên da ấm, La Nuit thường lên mượt hơn, ngọt hơn một chút và có độ ôm da rất đẹp.

Khoảng sau 30-45 phút, mùi chuyển sang giai đoạn ổn định nhất: cay nhẹ, thơm sạch, trầm vừa đủ và rất dễ chịu. Nó không có quá nhiều lớp biến chuyển phức tạp, nhưng lại cực kỳ dễ dùng. Điểm mạnh là sự chỉn chu và cảm giác gợi cảm kín đáo; điểm yếu là ai kỳ vọng mùi cực sâu hoặc cực niche có thể thấy nó hơi an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
La Nuit de l'Homme bản EDT có độ lưu hương trung bình, thường khoảng 4-6 giờ trên da, trên quần áo sẽ khá hơn. Tỏa hương ở mức gần đến vừa, nên đặc biệt hợp môi trường hẹn hò, ăn tối, đi bar nhẹ, cà phê tối hoặc văn phòng máy lạnh nếu mày xịt tiết chế.

Trong khí hậu nóng ẩm Việt Nam, chai này lên đẹp nhất vào chiều tối, trời mát hoặc không gian điều hòa. Ban ngày nắng gắt vẫn dùng được nhưng không phải thời điểm đẹp nhất của nó. Nhược điểm lớn nhất là hiệu năng không quá mạnh so với kỳ vọng giá tiền, nên ai ưu tiên bền mùi có thể thấy hơi thiếu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nước hoa nam thiên về quyến rũ, lịch sự, dễ gần và cực hợp hẹn hò, La Nuit de l'Homme vẫn là lựa chọn kinh điển. Nó hợp người trẻ đến trung niên, đặc biệt ai thích phong cách ăn mặc gọn gàng, tối giản nhưng có gu.

Nên mua khi mày cần một mùi buổi tối an toàn, dễ dùng và có khả năng tạo thiện cảm cao. Không nên mua nếu mục tiêu là hiệu năng mạnh, tỏa xa hoặc cần một mùi quá khác biệt.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Bạch đậu khấu" }],
    middleNotes: [{ name: "Oải hương" }, { name: "Gỗ tuyết tùng Virginia" }, { name: "Cam bergamot" }],
    baseNotes: [{ name: "Cỏ hương bài" }, { name: "Thì là Ai Cập" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "Hương gỗ cay thanh lịch, biểu tượng quyến rũ ban đêm",
    verdictShort: "VERIFIED",
    shopeeOffers: []
  },
  {
    id: "xerjoff-naxos",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "XJ 1861 Naxos",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "XERJOFF XJ 1861 Naxos chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Naxos là kiểu thuốc lá - mật ong - lavender rất nổi tiếng vì vừa sang, vừa dày, vừa dễ gây thiện cảm hơn nhiều chai niche cùng tông. Nó không đi theo hướng thuốc lá khô già cứng, mà có độ ngọt ấm, bóng và rất quyến rũ. Đây là kiểu mùi vừa có chất Ý hào hoa, vừa đủ đậm để tạo ấn tượng rõ ngay từ lần đầu ngửi.

Điểm mạnh của Naxos là cân bằng. Nó có thuốc lá, có ngọt, có thảo mộc và có nền ấm, nhưng không phần nào lấn át đến mức mất kiểm soát. Trong khí hậu Việt Nam, chai này hợp hơn cho chiều tối, máy lạnh, đi chơi hoặc người thích mùi nam nổi bật mà vẫn sang.

## Diễn biến trên da
Mở đầu có lavender và cảm giác sáng vừa đủ trước khi mật ong cùng thuốc lá dần kéo tổng thể vào vùng ấm hơn. Naxos chuyển tầng khá mượt, không quá gắt, và càng về sau càng cho cảm giác dày, tròn và nam tính hơn.

Drydown là lúc chai này đẹp nhất: thuốc lá mềm, ngọt ấm, hơi resinous và rất nịnh mũi. Nó không quá khô như vài mùi tobacco cổ điển. Nhược điểm là nếu dùng nặng tay trong thời tiết nóng ẩm, lớp ngọt có thể hơi dày.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Naxos có hiệu năng tốt, thường 8-10 giờ lưu hương; tỏa hương khá trong vài giờ đầu. Nó hợp hẹn hò, tiệc tối, đi chơi đêm, không gian máy lạnh hoặc những lúc muốn mùi hương có độ hiện diện rõ.

Ở Việt Nam, nên ưu tiên buổi tối và tiết chế số lần xịt. Ưu điểm là rất cuốn và có chất niche rõ; nhược điểm là không phải kiểu dùng vô tư giữa trưa nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích tông thuốc lá ngọt ấm sang, dễ khen hơn mặt bằng niche, Naxos là lựa chọn rất mạnh. Nó hợp người muốn một chai tối có sức hút và vẫn giữ độ sang.

Nên mua khi mày cần một chai signature cho buổi tối hoặc mùa mát. Nếu mày ghét mùi ngọt ấm, nên test kỹ trước khi chốt.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "louis-vuitton-imagination",
    brandSlug: "louis-vuitton",
    brand: "LOUIS VUITTON",
    name: "Imagination",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LOUIS VUITTON Imagination chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Imagination là kiểu citrus sạch, trà và ambrox rất hiện đại: sáng, gọn, sang và cực kỳ dễ dùng. Nó không gây choáng bằng độ dày hay độ ngọt, mà thắng ở cảm giác tinh, sạch và đắt tiền theo kiểu effortless. Đây là một trong những hướng mùi nam niche-luxury dễ sống nhất trong thời tiết Việt Nam.

Điểm hay của Imagination là nó tạo cảm giác người mặc rất chỉn chu mà không hề cố gắng. Có độ fresh rõ, có chất sạch sang, lại không quá sporty hay quá blue phổ thông. Vì vậy, chai này hợp từ đi làm, đi chơi ban ngày đến du lịch hoặc dùng làm signature.

## Diễn biến trên da
Mở đầu là citrus sáng và rất sạch, sau đó phần trà cùng nền ambrox giúp tổng thể trở nên tròn, mượt và hiện đại hơn. Mùi phát triển không phức tạp, nhưng độ hoàn thiện rất cao.

Drydown cho cảm giác sạch, hơi khoáng, hơi xà phòng cao cấp và bám da rất dễ chịu. Nó không phải kiểu bùng nổ cá tính, nhưng rất dễ khiến người khác thấy mày thơm và gọn gàng. Nhược điểm là ai thích mùi tối, ngọt hoặc quá độc lạ có thể thấy nó hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Imagination có độ lưu hương khá đến tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, đi học, ban ngày, du lịch, mùa nóng và gần như mọi hoàn cảnh cần một mùi sạch-sang.

Ở Việt Nam, đây là một trong những kiểu mùi dùng rất khỏe. Ưu điểm là linh hoạt, sạch và cao cấp; nhược điểm là mức giá cao so với cảm giác “nhẹ”.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai fresh-sạch-sang để dùng cực nhiều trong năm, Imagination rất đáng tiền. Nó hợp người thích phong cách chỉn chu, hiện đại và không muốn mùi hương làm quá.

Nên mua khi mày cần một chai signature ban ngày cao cấp. Nếu mày thích mùi đậm, tối hoặc sexy rõ, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-layton",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Layton",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PARFUMS DE MARLY Layton chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Layton là kiểu táo, vanilla, gia vị và gỗ cực kỳ nổi tiếng vì vừa sang vừa dễ khen. Nó có chất ngọt ấm hiện đại, nhưng không đi theo hướng quá trẻ con hay quá bánh kẹo. Đây là mùi kiểu “niche cho người muốn được thích”: đủ khác designer phổ thông, nhưng vẫn rất dễ tạo thiện cảm.

Điểm mạnh của Layton là cảm giác giàu có và tròn trịa. Mùi mở ra sáng vừa phải rồi nhanh chóng đi vào vùng ấm, ngọt, cay nhẹ và rất nam tính theo hướng dressy. Ở Việt Nam, chai này hợp cho tối, hẹn hò, đi chơi, máy lạnh hoặc các dịp muốn mùi hương rõ ràng có đầu tư.

## Diễn biến trên da
Mở đầu có trái cây sáng và gia vị nhẹ, sau đó vanilla cùng nền gỗ bắt đầu làm tổng thể dày hơn. Layton chuyển tầng mượt và rất “lên outfit”: càng về sau càng trông chững chạc và sang hơn.

Drydown ngọt ấm, mịn, ôm da tốt và khá dễ gây nghiện. Đây là kiểu mùi nhiều người sẽ thấy cuốn mà không cần cố hiểu. Nhược điểm là vì quá nổi tiếng nên độ độc bản không còn quá cao trong giới chơi mùi.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Layton có hiệu năng tốt, thường 7-9 giờ lưu hương; tỏa hương khá trong giai đoạn đầu. Nó hợp hẹn hò, tiệc tối, event, mùa mát hoặc dùng khi muốn để lại ấn tượng rõ.

Ở Việt Nam, nên dùng buổi tối để vanilla và gia vị lên đẹp hơn. Ưu điểm là rất cuốn, sang và dễ dùng; nhược điểm là có thể hơi dày nếu xịt mạnh lúc trời nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai niche nam ngọt ấm, sang và rất dễ được khen, Layton là lựa chọn cực mạnh. Nó hợp người thích mùi nổi bật nhưng vẫn an toàn đủ để dùng thực tế.

Nên mua khi mày cần một chai buổi tối hoặc date night có độ ăn tiền cao. Nếu mày thích mùi khô, xanh hoặc tối kiểu trầm, Layton có thể không phải gu chính.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "amouage-reflection-man",
    brandSlug: "amouage",
    brand: "AMOUAGE",
    name: "Reflection Man",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "AMOUAGE Reflection Man chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Reflection Man là kiểu floral woody nam cực kỳ sạch, sáng và sang theo cách trưởng thành. Nó nổi bật ở cảm giác hoa trắng được xử lý rất nam tính: mượt, thanh lịch, có chất xà phòng cao cấp nhưng không hề yếu. Đây là mùi của một người đàn ông chỉn chu, mặc sơ mi đẹp và không cần mùi hương phải gào lên để gây chú ý.

Điểm ăn tiền của Reflection Man là sự lịch thiệp. Nó khác với các mùi fresh thể thao hoặc blue fragrance thường gặp vì có độ mịn và chiều sâu hơn hẳn. Trong điều kiện Việt Nam, đây là chai dùng rất đẹp cho đi làm, gặp gỡ lịch sự, văn phòng cao cấp hoặc làm signature nếu mày thích phong cách gọn và sang.

## Diễn biến trên da
Mở đầu khá sáng và sạch, sau đó lớp floral cùng gỗ bắt đầu hiện rõ hơn. Mùi chuyển tầng mượt, không có đoạn gắt và giữ được sự chỉn chu gần như xuyên suốt.

Drydown mềm, sạch, có chút kem và rất sang. Nó không phải kiểu sexy lộ liễu, mà cuốn theo kiểu tinh tế. Nhược điểm là ai thích cá tính mạnh hoặc mùi quá tối sẽ thấy nó hơi quá lịch sự.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Reflection Man có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, ban ngày, họp hành, sự kiện lịch sự và đặc biệt đẹp trong môi trường điều hòa.

Ở Việt Nam, đây là chai khá dễ dùng vì sạch và thoáng. Ưu điểm là sang, mịn, trưởng thành; nhược điểm là độ “wow” với người thích mùi đậm sẽ không quá mạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam sạch-sang-trưởng thành và khác hẳn hướng blue phổ thông, Reflection Man rất đáng thử. Nó hợp người thích sự thanh lịch, gọn gàng và mùi hương có nền tảng sang rõ rệt.

Nên mua khi mày muốn một signature văn phòng hoặc gặp gỡ lịch sự. Nếu mày cần mùi tối, ngọt hoặc nổi mạnh, nên cân nhắc chai khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-fahrenheit",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Fahrenheit",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Fahrenheit chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Fahrenheit là một tượng đài rất khó nhầm: da, violet, xăng nhẹ và cảm giác nóng - lạnh đan xen tạo nên một DNA cực kỳ riêng. Đây không phải kiểu mùi để chiều số đông, mà là kiểu ai hợp thì mê rất sâu. Nó nam tính, có bụi bặm, có nghệ và có độ “đàn ông” theo kiểu cổ điển nhưng vẫn khác biệt đến tận bây giờ.

Điểm mạnh lớn nhất của Fahrenheit là bản sắc. Trong một thị trường đầy mùi sạch, ngọt hoặc blue fragrance, nó đứng hẳn một vùng riêng. Ở Việt Nam, chai này hợp với người đã có gu tương đối rõ, thích mùi nam có cá tính và không ngại chuyện kén người dùng.

## Diễn biến trên da
Mở đầu có cảm giác xanh, hơi lạnh và hơi “xăng” rất đặc trưng, sau đó da và violet dần làm tổng thể trở nên ấm, dày và nam tính hơn. Mùi phát triển liên tục và có chiều sâu chứ không tuyến tính đơn giản.

Drydown của Fahrenheit vẫn giữ chất da-ấm rất rõ, nhưng mượt hơn phần mở đầu. Đây là giai đoạn đẹp nhất nếu mày thích gu nam cũ-school có cá tính. Nhược điểm là người quen mùi hiện đại có thể thấy nó lạ hoặc khó gần.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Fahrenheit có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp chiều tối, thời tiết mát, lái xe, đi chơi hoặc những dịp muốn dùng một mùi thật sự có bản sắc.

Ở Việt Nam, nên ưu tiên buổi chiều tối để mùi lên đẹp hơn. Ưu điểm là cực kỳ riêng; nhược điểm là độ đại chúng thấp và không phải blind buy an toàn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam có DNA khác biệt thật sự và không muốn hòa vào đám đông, Fahrenheit là cái tên đáng thử nghiêm túc. Nó hợp người thích mùi da, xanh, vintage-modern rất riêng.

Nên mua khi mày muốn một chai mang cá tính rõ. Nếu mày chỉ cần mùi dễ khen, đây không phải lựa chọn đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-ombre-leather",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Ombré Leather",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Ombré Leather chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Ombré Leather là kiểu da hiện đại rất Tom Ford: sạch, tối, mượt và có độ sexy rõ mà không quá hoang dã. Nó không phải da bụi bặm kiểu khô cứng, mà là da bóng, sang, có chút floral làm mượt và rất dễ mặc hơn nhiều người tưởng. Đây là chai dùng được cho cả nam lẫn nữ nếu thích tông da sang.

Điểm mạnh của Ombré Leather là sự cân bằng giữa cá tính và khả năng dùng thực tế. Nó vẫn ra mùi da rất rõ, nhưng không quá khó gần như vài mùi leather niche nặng đô. Trong khí hậu Việt Nam, chai này hợp cho tối, máy lạnh, đi chơi, event hoặc khi muốn nâng outfit lên một bậc.

## Diễn biến trên da
Mở đầu là da hiện lên gần như ngay lập tức, sau đó các sắc floral và gỗ làm mùi tròn hơn, mượt hơn. Toàn bộ quá trình phát triển không quá nhiều tầng, nhưng giữ được texture da rất đẹp.

Drydown ấm, da mềm và hơi ôm da, tạo cảm giác sang và gần. Nó không quá gắt nếu dùng đúng liều. Nhược điểm là ai không thích leather rõ có thể thấy nó hơi áp lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Ombré Leather có hiệu năng tốt, khoảng 7-9 giờ lưu hương; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, tiệc, máy lạnh và các dịp cần mùi hương có chất thời trang rõ.

Ở Việt Nam, nên dùng tối và xịt tiết chế. Ưu điểm là da đẹp, sang và rất wearable; nhược điểm là kém linh hoạt cho ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai leather hiện đại, dễ mặc hơn tưởng tượng và rất hợp outfit tối màu, Ombré Leather là lựa chọn rất mạnh. Nó hợp người thích tông da sang và muốn một mùi có cá tính nhưng chưa quá khó.

Nên mua khi mày cần một chai buổi tối có chất thời trang. Nếu mày ghét mùi da, nên tránh blind buy.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-oud-wood",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Oud Wood",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Oud Wood chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Oud Wood là kiểu gỗ phương Đông sang, khô vừa phải và rất dễ tiếp cận so với cái tên “oud”. Nó không đi theo hướng oud động vật, tối đen hoặc nặng trầm, mà nghiêng về gỗ mịn, gia vị nhẹ, chút khói và cảm giác high-end rất rõ. Đây là một trong những chai niche-luxury dễ dùng nhất cho người muốn bước vào nhóm mùi gỗ tối sang.

Điểm mạnh của Oud Wood là sự tinh. Nó không cố làm quá, không quá dày, không quá tối, nhưng vẫn cho cảm giác đắt tiền ngay từ đầu. Trong điều kiện Việt Nam, đây là chai hợp cho tối, không gian điều hòa, gặp gỡ lịch sự hoặc người muốn một mùi sang mà không quá phô trương.

## Diễn biến trên da
Mở đầu có gia vị và gỗ rất mượt, sau đó nền oud theo kiểu sạch và gỗ khô dần ổn định hơn. Mùi phát triển mềm, ít góc cạnh và không làm người mới chơi bị sốc.

Drydown là lớp gỗ ấm, khô vừa, sang và khá ôm da. Nó không bùng nổ nhưng có chiều tinh tế cao. Nhược điểm là ai kỳ vọng oud mạnh, tối và quái có thể thấy Oud Wood hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Oud Wood có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, máy lạnh, công việc cần hình ảnh chỉn chu, event nhỏ hoặc hẹn hò theo hướng lịch thiệp.

Ở Việt Nam, chai này dùng ổn hơn nhiều mùi gỗ tối khác vì không quá nặng. Ưu điểm là sang, dễ tiếp cận và rất wearable; nhược điểm là hiệu năng không thuộc nhóm bùng nổ.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai gỗ tối sang, cao cấp và không quá khó gần, Oud Wood rất đáng thử. Nó hợp người thích phong cách lịch thiệp, tối giản và muốn mùi hương tạo cảm giác đắt tiền nhẹ nhàng.

Nên mua khi mày cần một chai buổi tối sang nhưng không quá nặng. Nếu mày thích oud cực mạnh, có thể hướng này chưa đủ đô.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-homme-parfum",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dior Homme Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dior Homme Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dior Homme Parfum là một trong những chai designer nam sang nhất nếu mày thích iris, da và cacao theo hướng tối mịn. Nó không nam tính kiểu cơ bắp hay tươi sáng, mà quyến rũ bằng cảm giác phấn mịn, da mềm, hơi son nhẹ và cực kỳ dressy. Đây là kiểu mùi đòi hỏi gu, nhưng khi hợp thì rất khó thay bằng chai khác.

Điểm mạnh của Dior Homme Parfum là độ sang và độ hoàn thiện. Nó có chất thời trang cao cấp rất rõ, mặc suit đẹp, sơ mi đẹp, tối đẹp. Trong thị trường Việt Nam, đây là kiểu mùi dành cho người đã biết mình thích gì và muốn một chai nam khác hẳn mặt bằng blue - sweet phổ thông.

## Diễn biến trên da
Mở đầu iris lên khá rõ, sau đó da, cacao và nền gỗ làm mùi sâu hơn, tối hơn và mượt hơn. Quá trình phát triển rất liền lạc và càng về sau càng tạo cảm giác cao cấp.

Drydown cực kỳ đẹp: phấn mịn, da mềm, hơi ấm và rất ôm da. Nó không gào thét nhưng có sức hút lớn ở khoảng cách gần. Nhược điểm là với ai không hợp iris hoặc ghét cảm giác son-phấn, chai này sẽ khá khó.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dior Homme Parfum có hiệu năng tốt, thường 7-9 giờ hoặc hơn; tỏa hương vừa. Nó hợp tối, hẹn hò, event, thời tiết mát và các dịp muốn mùi hương thật sự sang.

Ở Việt Nam, dùng đẹp nhất trong máy lạnh hoặc buổi tối. Ưu điểm là rất sang, khác biệt và có khí chất; nhược điểm là không quá đa dụng cho người mới.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai designer nam có chiều sâu, thời trang và rất có gu, Dior Homme Parfum là lựa chọn cực mạnh. Nó hợp người thích mùi sang kín, iris-da-cacao và không ngại chuyện kén người.

Nên mua khi mày cần một chai tối thật đẹp. Nếu mày thích mùi sạch sáng, casual, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "acqua-di-gio-profumo",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Acqua di Giò Profumo",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIORGIO ARMANI Acqua di Giò Profumo chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Acqua di Giò Profumo là phiên bản trưởng thành và có chiều sâu hơn hẳn DNA Acqua di Giò quen thuộc. Nó vẫn giữ tinh thần biển sạch, khoáng và rất dễ sống, nhưng thêm vào sắc hương tối hơn với thảo mộc và chút khói, khiến tổng thể nam tính và chững chạc hơn. Đây là kiểu chai cực mạnh cho ai muốn mùi vừa an toàn vừa có bản sắc.

Điểm hay của Profumo là nó đứng giữa hai thế giới: đủ fresh để dùng nhiều, đủ tối để không nhạt như aquatic thông thường. Trong điều kiện Việt Nam, đây là một trong những chai nam linh hoạt nhất cho đi làm, đi chơi, gặp gỡ và thậm chí cả buổi tối.

## Diễn biến trên da
Mở đầu là biển-khoáng sạch rất quen, sau đó phần thảo mộc và nét khói nhẹ bắt đầu làm mùi sâu hơn. Profumo chuyển tầng mượt, gọn và rất dễ mặc, không bị đột ngột.

Drydown cho cảm giác sạch, nam tính, hơi tối và trưởng thành hơn bản gốc. Nó không quá nặng, nhưng đủ khác để người đã quen Acqua di Giò thường nhận ra ngay. Nhược điểm là nếu mày thích mùi cực sáng và trẻ, bản này có thể hơi nghiêm hơn mong đợi.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Profumo có hiệu năng khá tốt, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp đi làm, đi chơi, ban ngày lẫn tối, du lịch, hội họp và gần như quanh năm.

Ở Việt Nam, chai này dùng rất khỏe nhờ độ cân bằng tốt. Ưu điểm là đa dụng, nam tính và chững hơn bản thường; nhược điểm là độ độc đáo không quá cao với người chơi lâu năm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam đa dụng, sạch nhưng trưởng thành hơn fresh phổ thông, Acqua di Giò Profumo là lựa chọn cực vững. Nó hợp người cần một chai mặc được nhiều hoàn cảnh mà vẫn có khí chất riêng.

Nên mua khi mày cần một chai an toàn nhưng không nhạt. Nếu mày thích mùi ngọt ấm hoặc cực kỳ nổi, Profumo không đi theo hướng đó.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "bleu-de-chanel-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Bleu de Chanel",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Bleu de Chanel chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Bleu de Chanel Parfum là phiên bản ấm, dày và sang hơn của DNA Bleu de Chanel. Nó vẫn giữ tinh thần sạch, nam tính và lịch thiệp quen thuộc, nhưng giảm độ tươi gắt để tăng cảm giác gỗ, chiều sâu và độ trưởng thành. Đây là kiểu mùi dành cho người thích sự chỉn chu cao cấp hơn là sự bùng nổ trẻ trung.

Điểm mạnh của bản Parfum là sự mượt và sang kín. Nó không cố gây ấn tượng bằng độ tỏa quá mạnh, mà bằng cảm giác hoàn thiện rất đẹp trên da. Trong bối cảnh Việt Nam, chai này hợp cho đi làm môi trường tốt, gặp gỡ lịch sự, tối nhẹ hoặc làm signature cho người thích phong cách trưởng thành.

## Diễn biến trên da
Mở đầu vẫn có chút tươi sáng quen thuộc, nhưng nhanh chóng nhường chỗ cho nền gỗ ấm và mượt hơn. So với bản EDP, Parfum ít sắc hơn, ít “blue” hơn và thiên về sự tròn, dày.

Drydown là nơi nó phát huy đẹp nhất: gỗ sạch, ấm, nam tính và rất gọn. Nó không tạo cảm giác quá ồn ào nhưng rất đáng tin. Nhược điểm là ai thích cảm giác sáng, bùng nổ hơn có thể thấy bản này hơi kín.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Bleu de Chanel Parfum có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, đi gặp đối tác, tối nhẹ, sự kiện gọn gàng hoặc những lúc cần mùi hương lịch thiệp và ít rủi ro.

Ở Việt Nam, chai này dùng khá ổn quanh năm. Ưu điểm là sang, mượt và rất an toàn theo nghĩa tích cực; nhược điểm là độ nổi bật không quá lớn nếu mày thích statement scent.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Bleu de Chanel nhưng muốn phiên bản trưởng thành, mượt và sang hơn, bản Parfum rất đáng cân nhắc. Nó hợp người thích sự chỉn chu, nam tính kín và độ wearable cao.

Nên mua khi mày cần một chai signature lịch thiệp. Nếu mày muốn độ tươi sáng linh hoạt hơn, bản EDP thường dễ trúng hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-hypnotic-poison",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Hypnotic Poison",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Hypnotic Poison chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Hypnotic Poison là một trong những chai nữ ngọt ấm nổi tiếng nhất của Dior vì nó quyến rũ theo kiểu rất rõ ràng: vanilla, hạnh nhân, chút dừa mềm và nền gỗ ấm tạo nên một tổng thể vừa mềm vừa gây nghiện. Đây không phải kiểu nữ tính thanh mảnh hay trong veo, mà là kiểu ôm sát, ngọt, tối nhẹ và có sức hút rất bản năng.

Điểm khiến Hypnotic Poison luôn có chỗ đứng là nó vừa đậm chất gợi cảm vừa rất dễ nhớ. Mùi hương này có độ signature cao, chỉ cần lên da đúng người là tạo ra cảm giác rất riêng. Ở Việt Nam, đây là kiểu chai hợp với buổi tối, hẹn hò, môi trường máy lạnh hoặc người thích mùi ngọt ấm có sức hút rõ hơn là mùi hoa sạch truyền thống.

## Diễn biến trên da
Mở đầu có cảm giác ngọt mềm gần như kem, sau đó phần hạnh nhân và vanilla bắt đầu nổi lên rõ hơn. Mùi không quá biến chuyển phức tạp, nhưng càng về sau càng mượt, ấm và ôm da hơn. Chính sự tròn trịa này làm Hypnotic Poison rất dễ gây nghiện với người hợp gu.

Drydown vẫn là vanilla-hạnh nhân-gỗ mềm, tạo cảm giác cực kỳ nữ tính và gần gũi. Nó không mang kiểu tỏa xa áp đảo mà hấp dẫn mạnh ở khoảng cách gần. Nhược điểm là nếu mày không thích mùi ngọt đậm hoặc dễ ngấy với nhóm gourmand-amber, chai này có thể hơi nặng.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Hypnotic Poison có độ lưu hương tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp nhất cho buổi tối, hẹn hò, tiệc nhẹ, thời tiết mát hoặc không gian máy lạnh.

Trong khí hậu Việt Nam, nên dùng tiết chế vào ban ngày hoặc mùa nóng. Ưu điểm là sexy, dễ nhớ và rất có cá tính; nhược điểm là không đa dụng bằng các chai nữ sáng sạch.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ ngọt ấm, gợi cảm, ôm da và tạo cảm giác gây nghiện, Hypnotic Poison là lựa chọn kinh điển. Nó hợp người thích phong cách nữ tính đậm, buổi tối và có chút bí ẩn.

Nên mua khi mày cần một chai date night hoặc tối cuối tuần thật cuốn. Nếu mày chỉ tìm mùi sáng nhẹ dùng đi làm hằng ngày, đây không phải hướng đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-shalimar-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Shalimar",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Shalimar chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Shalimar là một huyền thoại đúng nghĩa của nước hoa nữ phương Đông. Nó mang vanilla, nhựa thơm, hổ phách, citrus và một cảm giác khói nhẹ theo cách rất cổ điển, rất sang và gần như vượt thời gian. Đây không phải mùi hương để làm vừa lòng tất cả mọi người, mà là mùi hương có bản lĩnh riêng, có lịch sử và có sức nặng rất rõ khi lên da.

Điểm đáng nể ở Shalimar là dù đã ra đời rất lâu, nó vẫn có thể tạo cảm giác đắt và cuốn với người hợp gu. Mùi hương này không trẻ trung theo chuẩn hiện đại, nhưng lại có phong thái rất riêng: sang, điềm tĩnh, bí ẩn và có chiều sâu. Ở Việt Nam, Shalimar hợp hơn với người yêu gu cổ điển, sưu tập nước hoa hoặc muốn một mùi signature không giống thị trường số đông.

## Diễn biến trên da
Mở đầu là lớp citrus có phần cổ điển, sau đó rất nhanh vanilla, nhựa thơm và hổ phách kéo mùi vào thế giới oriental đặc trưng. Trên da, Shalimar thường phát triển theo hướng ngày càng ấm, mềm và khói hơn, rất có chiều sâu.

Drydown của Shalimar là nơi sức hút bộc lộ rõ nhất: vanilla không đơn giản là ngọt, mà có cảm giác resinous, tối và sang. Nó vừa mềm, vừa có lực. Nhược điểm là ai quen mùi nữ hiện đại sáng hoặc fruity có thể thấy Shalimar hơi quá cổ điển, thậm chí khó tiếp cận.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Shalimar có độ lưu hương tốt, khoảng 7-9 giờ, tỏa hương vừa đến khá và khá bền trên áo quần. Nó hợp nhất cho tối, thời tiết mát, tiệc, không gian có dress code hoặc những lúc muốn một mùi nữ thật sự có trọng lượng.

Trong khí hậu Việt Nam, nên ưu tiên dùng buổi tối hoặc trong phòng điều hòa. Ưu điểm là đẳng cấp, có khí chất và rất khác biệt; nhược điểm là độ kén khá cao nếu người dùng chỉ thích mùi dễ thương, hiện đại.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nước hoa nữ kinh điển, phương Đông, sang và có chiều sâu thật sự, Shalimar là cái tên phải thử. Nó hợp người có gu, thích lịch sử nước hoa và muốn một mùi hương không bị hòa tan trong đám đông.

Nên mua khi mày cần một chai tối, cổ điển, sang trọng và có bản sắc. Nếu mày cần mùi dễ dùng mỗi ngày, có thể nên bắt đầu bằng lựa chọn hiền hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-mon-guerlain",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Mon Guerlain",
    subName: "Eau de Parfum",
    perfumer: "Thierry Wasser, Delphine Jelk",
    gender: "nu",
    image: "/images/products/guerlain-mon-guerlain-main.jpg",
    images: [{ url: "/images/products/guerlain-mon-guerlain-main.jpg", source: "studio", caption: "Ảnh sản phẩm Mon Guerlain (chai và hộp)" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Mon Guerlain là kiểu nữ tính hiện đại rất dễ được yêu thích: oải hương, vanilla, gỗ đàn hương và chút sạch sáng được phối theo cách mềm, sang và cực kỳ dễ mặc. Nó không quá trẻ con, cũng không quá trưởng thành; thay vào đó là một cảm giác nữ tính gọn gàng, thanh lịch và gần như luôn dễ tạo thiện cảm.

Điểm mạnh lớn của Mon Guerlain nằm ở sự cân bằng. Vanilla đủ mềm để tạo cảm giác ấm áp, oải hương giữ cho tổng thể có nét tinh và sạch, còn nền gỗ làm mùi không bị mỏng. Ở Việt Nam, đây là một trong những hướng mùi rất dễ dùng cho nhiều độ tuổi và nhiều hoàn cảnh, đặc biệt hợp người thích vẻ nữ tính chỉn chu thay vì quá ngọt hoặc quá sexy.

## Diễn biến trên da
Mở đầu có cảm giác sạch và thơm dịu, sau đó vanilla bắt đầu hiện rõ hơn nhưng không dày. Oải hương giúp mùi luôn giữ được độ thanh, khiến Mon Guerlain không rơi vào kiểu ngọt kẹo hay gourmand quá đà.

Drydown khá mượt: ấm, mềm, hơi kem và rất dễ gần. Đây là kiểu mùi ít gây tranh cãi vì mọi thứ được blend theo hướng hài hòa. Nhược điểm là ai muốn một cá tính cực sắc hoặc quá khác biệt có thể thấy Mon Guerlain hơi an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Mon Guerlain có hiệu năng khá, khoảng 6-8 giờ lưu hương và tỏa hương vừa phải. Nó dùng rất đẹp cho đi làm, đi học, cà phê, hẹn hò nhẹ, gặp gỡ gia đình hoặc dùng làm signature hằng ngày.

Trong thời tiết Việt Nam, chai này hợp quanh năm vì vừa có độ ấm vừa không quá dày. Ban ngày, văn phòng, môi trường điều hòa đều ổn. Ưu điểm là đẹp, dễ dùng, sang; nhược điểm là không phải kiểu mùi tạo cú wow quá mạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nữ thanh lịch, mềm, hiện đại và dễ dùng nhiều hoàn cảnh, Mon Guerlain là lựa chọn rất vững. Nó hợp người thích mùi nữ có chiều sâu nhẹ nhưng vẫn đủ sáng và dễ gần.

Nên mua khi mày muốn một chai signature ít rủi ro, dễ tạo thiện cảm và có chất Guerlain hiện đại. Nếu mày thích những mùi cực ngọt hoặc cực nổi, có thể cần một lựa chọn cá tính hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Oải hương" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Hoa diên vĩ" }, { name: "Nhài Sambac" }, { name: "Hoa hồng" }],
    baseNotes: [{ name: "Vani Tahiti" }, { name: "Coumarin" }, { name: "Gỗ đàn hương Úc" }, { name: "Cam thảo" }, { name: "An tức hương" }, { name: "Hoắc hương" }],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-addict-edp",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dior Addict",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dior Addict chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dior Addict EDP là kiểu floral oriental đậm, tối và rất gợi cảm theo phong cách nữ tính trưởng thành. Nó không đi theo hướng hoa trong trẻo hay ngọt dễ thương, mà thiên về vanilla, hoa trắng và độ dày rất rõ trên da. Đây là một mùi hương có thần thái mạnh, hợp với người thích sự hiện diện thay vì chỉ thơm nhẹ nhàng.

Điểm mạnh của Dior Addict là cá tính. Nó cho cảm giác sang, hơi dramatic và có màu sắc rất riêng, khác với nhiều chai nữ hiện đại quá an toàn. Ở Việt Nam, chai này hợp hơn cho buổi tối, không gian điều hòa, đi tiệc hoặc người thật sự thích mùi hương đậm và có bản lĩnh.

## Diễn biến trên da
Mở đầu có sắc hoa khá rõ, nhưng rất nhanh vanilla và nền ấm bắt đầu kéo tổng thể xuống sâu hơn. Mùi phát triển theo hướng dày dần, mềm dần và gợi cảm hơn khi ngồi sát da.

Drydown là lớp vanilla - hoa trắng ấm, mịn và khá quyến rũ. Nó không quá gourmand, nhưng cũng không phải floral thuần. Nhược điểm là nếu dùng nặng tay trong thời tiết nóng, mùi dễ trở nên hơi dày và áp lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dior Addict EDP có hiệu năng tốt, thường 7-9 giờ lưu hương; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, tiệc, sự kiện hoặc những dịp muốn mùi hương có độ gợi cảm rõ rệt.

Ở Việt Nam, chai này đẹp nhất khi dùng buổi tối hoặc phòng lạnh. Ưu điểm là sang và rất có cá tính; nhược điểm là không phải kiểu mùi dễ blind buy cho số đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ đậm, sang và sexy theo kiểu trưởng thành, Dior Addict EDP là cái tên rất đáng thử. Nó hợp người thích vanilla hoa trắng có chiều sâu và không ngại mùi hương có trọng lượng.

Nên mua khi mày cần một chai buổi tối thật nổi. Nếu mày thích mùi nhẹ, airy hoặc quá dễ dùng ban ngày, đây không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-libre-le-parfum",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Libre Le Parfum",
    subName: "Le Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Libre Le Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Libre Le Parfum là phiên bản ấm, dày và sang hơn trong dòng Libre. Nó vẫn giữ khung lavender - hoa cam đặc trưng, nhưng được đẩy về hướng đậm, mượt và gợi cảm hơn bản EDP. Đây là kiểu mùi nữ hiện đại rất hợp người thích sự tự tin, sang và có độ hiện diện rõ mà vẫn giữ tinh thần YSL dễ tiếp cận.

Điểm hay của bản Le Parfum là nó không đánh mất DNA gốc, chỉ làm nó trưởng thành hơn. Với khí hậu Việt Nam, chai này hợp tối, phòng lạnh, đi ăn tối, event hoặc người thấy Libre EDP vẫn còn hơi sáng và muốn bản sâu hơn.

## Diễn biến trên da
Mở đầu vẫn có nét sáng từ floral aromatic quen thuộc, sau đó phần ấm và vanilla bắt đầu kéo tổng thể vào vùng mềm, dày và quyến rũ hơn. Chuyển tầng mượt, rất dễ dùng nếu mày đã hợp dòng Libre.

Drydown ấm, sang và nữ tính mạnh hơn EDP. Lavender vẫn hiện diện nhưng được làm mịn và ít góc cạnh hơn. Nhược điểm là trời nóng dễ khiến mùi dày hơn mong muốn nếu xịt quá tay.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Libre Le Parfum có hiệu năng tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, tiệc nhẹ, môi trường máy lạnh hoặc những dịp muốn thơm theo kiểu nữ hiện đại rất rõ.

Ở Việt Nam, dùng đẹp nhất về chiều tối. Ưu điểm là sang, cuốn và dễ tiếp cận hơn nhiều mùi nữ đậm khác; nhược điểm là kém đa dụng hơn bản EDP trong ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Libre nhưng muốn một phiên bản đậm đà, quyến rũ và sang hơn, Le Parfum là nâng cấp rất hợp lý. Nó hợp người thích floral ấm có độ hiện diện tốt mà không quá khó dùng.

Nên mua khi mày cần một chai tối, đi chơi hoặc date night. Nếu mày ưu tiên sự sáng và linh hoạt ban ngày, bản EDP vẫn dễ sống hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "frederic-malle-portrait-of-a-lady",
    brandSlug: "frederic-malle",
    brand: "FRÉDÉRIC MALLE",
    name: "Portrait of a Lady",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "FRÉDÉRIC MALLE Portrait of a Lady chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Portrait of a Lady là một trong những chai niche nữ nổi bật nhất vì nó làm rose trở nên quyền lực, tối và đầy khí chất. Đây không phải kiểu hoa hồng mềm mại dễ thương, mà là hoa hồng đậm, có nhựa thơm, gia vị, gỗ và một bóng tối rất sang phía sau. Mùi hương này bước vào phòng với phong thái của một người phụ nữ có tiếng nói, có gu và không cần phải làm vừa lòng tất cả.

Điểm mạnh nhất của Portrait of a Lady là khí chất. Nó không đơn thuần thơm, mà tạo hình ảnh. Trong bối cảnh Việt Nam, đây là kiểu mùi cực hợp với người đã có gu rõ, thích niche, thích mùi có độ drama và có chiều sâu, đặc biệt cho tối, tiệc hoặc những dịp cần hiện diện mạnh.

## Diễn biến trên da
Mở đầu là hoa hồng đậm, nhưng không trong trẻo mà có chiều sâu ngay từ đầu. Sau đó nhựa thơm, gia vị và nền gỗ khiến mùi ngày càng dày, tối và sang. Trên da, nó phát triển rất đẹp theo hướng quyền lực và rất có lớp lang.

Drydown vẫn giữ được tinh thần rose đậm nhưng mềm hơn, quyện hơn và cực kỳ lưu dấu. Đây là kiểu mùi nếu hợp sẽ rất khó quên. Nhược điểm là nó không hề đại chúng; ai thích mùi nữ sáng, ngọt hoặc casual có thể thấy Portrait of a Lady quá nghiêm và quá nhiều lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Portrait of a Lady có hiệu năng mạnh, lưu hương rất tốt và tỏa hương rõ trong những giờ đầu. Nó hợp nhất cho tối, tiệc, event, thời tiết mát, không gian sang hoặc những dịp cần mùi hương đóng vai trò như một phần của outfit.

Trong khí hậu Việt Nam, chai này nên dùng tiết chế và ưu tiên tối hoặc máy lạnh. Ưu điểm là sang, niche, rất có khí chất; nhược điểm là kén gu và không dễ dùng hằng ngày.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai rose niche có chiều sâu, có quyền lực và rất khác đám đông, Portrait of a Lady là lựa chọn đỉnh cao. Nó hợp người thích mùi sang tối, có drama, có tính tuyên ngôn.

Nên mua khi mày đã biết gu mình và cần một chai thật sự có cá tính. Nếu mày mới chơi hoặc ưu tiên tính dễ dùng, hãy thử kỹ trước khi chốt.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "kilian-love-dont-be-shy",
    brandSlug: "kilian",
    brand: "BY KILIAN",
    name: "Love, Don't Be Shy",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "BY KILIAN Love, Don't Be Shy chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Love, Don’t Be Shy là một trong những chai gourmand floral nổi tiếng nhất vì nó tạo cảm giác kẹo marshmallow, vanilla và hoa trắng rất rõ. Đây là kiểu mùi ngọt mềm, nữ tính và cực kỳ “dessert-like”, khiến người thích gourmand thường mê ngay từ lần đầu. Nó không tinh tế kiểu mùi trong veo, mà hấp dẫn bằng độ ngọt dày và cảm giác rất ôm.

Điểm mạnh của chai này là khả năng tạo cảm xúc. Nó vui, ngọt, mềm và có nét xa xỉ rất đặc trưng của Kilian. Ở Việt Nam, đây là mùi hợp hơn với tối, máy lạnh, hẹn hò hoặc những ai thật sự thích mùi ngọt rõ, không ngại bị chú ý.

## Diễn biến trên da
Mở đầu là ngọt và hoa trắng lên khá nhanh, sau đó lớp marshmallow và vanilla làm tổng thể trở nên dày, mềm và rất gourmand. Mùi phát triển không quá phức tạp, nhưng texture lại rất dễ nhận ra.

Drydown ngọt, kem và bám da kiểu gây nghiện nếu đúng gu. Nó tạo cảm giác vừa đáng yêu vừa gợi cảm. Nhược điểm là người không hợp gourmand hoặc sợ ngọt sẽ thấy nó hơi quá.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Love, Don’t Be Shy có độ lưu hương khá đến tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, hẹn hò, đi chơi, mùa mát hoặc khi muốn mùi hương thật sự ngọt và nổi.

Ở Việt Nam, nên dùng nhẹ tay nếu trời oi. Ưu điểm là rất đặc trưng và dễ gây nhớ; nhược điểm là tính đa dụng thấp với người không mê mùi ngọt.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích floral gourmand ngọt rõ, mềm và hơi xa xỉ, Love, Don’t Be Shy là cái tên nên thử. Nó hợp người yêu mùi marshmallow - vanilla và muốn một chai có cá tính rất riêng.

Nên mua khi mày cần một chai ngọt nổi cho buổi tối. Nếu mày muốn sự thanh, khô hoặc ít ngọt, nên né hướng này.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-jadore-edp",
    brandSlug: "dior",
    brand: "DIOR",
    name: "J'adore",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR J'adore chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
J’adore EDP là kiểu floral nữ sang theo trường phái kinh điển hiện đại: rạng rỡ, nữ tính, chỉn chu và rất “Dior”. Nó không ngọt đậm kiểu gourmand, cũng không tối kiểu oriental, mà đi theo hướng hoa sáng, tròn và dễ tạo thiện cảm trong nhiều hoàn cảnh. Đây là một trong những mùi nữ cao cấp rất an toàn theo nghĩa tích cực.

Điểm mạnh của J’adore là độ cân bằng. Nó đủ đẹp để dùng trong dịp quan trọng, nhưng cũng đủ dễ mặc để không bị xa cách. Trong bối cảnh Việt Nam, đây là kiểu chai đi làm, đi gặp gỡ, đi tiệc nhẹ hoặc dùng làm signature rất ổn nếu thích floral sang.

## Diễn biến trên da
Mở đầu là cảm giác hoa sáng và sạch, sau đó các lớp hoa dần hòa vào nhau thành một tổng thể mượt, nữ tính và có độ bóng đẹp. Mùi không chuyển tầng quá gắt, mà ổn định và sang suốt quá trình dùng.

Drydown mềm, floral ấm nhẹ và rất dễ chịu trên da. Nó không gây sốc hay quá cá tính, nhưng có độ hoàn thiện khiến người khác dễ thấy thơm và sang. Nhược điểm là người thích mùi độc, tối hoặc quá hiện đại có thể thấy J’adore hơi “safe”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
J’adore EDP có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ, tiệc nhẹ, ban ngày lẫn tối sớm và nhiều hoàn cảnh cần mùi hương thanh lịch.

Ở Việt Nam, chai này dùng khá khỏe nhờ floral sáng. Ưu điểm là sang, dễ dùng và nịnh nhiều độ tuổi; nhược điểm là độ cá tính không quá cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai floral sang, dễ mặc và rất ít rủi ro, J’adore EDP là lựa chọn cực ổn. Nó hợp người thích phong cách nữ tính, chỉn chu và muốn một mùi hương cao cấp nhưng không phức tạp.

Nên mua khi mày cần một chai signature floral an toàn. Nếu mày thích mùi tối, ngọt hoặc có tuyên ngôn mạnh, có thể tìm hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-shalimar-parfum",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Shalimar Parfum",
    subName: "Parfum / Extrait",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Shalimar Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Shalimar Parfum là tinh thần Shalimar ở trạng thái đậm, sâu và sang nhất: vanilla, nhựa thơm, powder và oriental cổ điển hòa vào nhau rất dày nhưng rất đẹp. Đây không phải kiểu mùi dành cho số đông hay gu hiện đại nhanh gọn, mà là một biểu tượng thật sự của trường phái oriental Pháp.

Điểm mạnh của bản Parfum là độ giàu chất liệu. Nó cho cảm giác sang trọng, cổ điển và gần như mang tính nghi lễ hơn là một chai để xịt vô thức mỗi ngày. Ở Việt Nam, đây là chai hợp với người yêu mùi vintage high-end, thích chiều sâu và chấp nhận sự kén chọn.

## Diễn biến trên da
Mở đầu đã cho cảm giác đậm và giàu hơn các phiên bản loãng hơn, sau đó vanilla, nhựa thơm và sắc powder dần bung ra rất mượt. Mùi không đi nhanh, mà mở chậm và có chiều sâu rõ ràng.

Drydown cực kỳ sang: ấm, bột, resinous và ôm da như một lớp vải dày. Nó đẹp với người hợp gu cổ điển, nhưng sẽ khó với ai quen mùi hiện đại sạch-sáng. Nhược điểm rõ nhất là tính đại chúng thấp.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Shalimar Parfum có độ lưu hương tốt, thường 8 giờ trở lên; tỏa hương vừa, thiên về độ bám và chiều sâu hơn là bùng nổ. Nó hợp tối, thời tiết mát, sự kiện đặc biệt hoặc những lúc muốn một mùi hương thực sự có tính di sản.

Ở Việt Nam, nên dùng rất tiết chế và ưu tiên phòng lạnh. Ưu điểm là sang và có chiều sâu hiếm; nhược điểm là không phù hợp với số đông hoặc thời tiết nóng gắt.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn chạm vào một biểu tượng oriental cổ điển ở phiên bản đậm và đẹp nhất, Shalimar Parfum rất đáng thử. Nó hợp người có gu vintage, yêu Guerlain và thích mùi hương như một tuyên ngôn thẩm mỹ.

Nên mua khi mày cần một chai để thưởng thức hoặc dùng trong dịp đặc biệt. Nếu mày cần sự dễ dùng hàng ngày, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-poison",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Poison",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Poison chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Poison là một cái tên đúng nghĩa biểu tượng: đậm, tối, dày và rất có kịch tính. Nó không cố làm dễ thương hay chiều thị hiếu, mà chọn cách xuất hiện thật rõ và gần như áp đặt bầu không khí riêng lên người mặc. Đây là kiểu mùi của một thời kỳ nước hoa nữ rất mạnh tay, rất tự tin và rất khó bị quên.

Điểm đặc biệt của Poison là cá tính cực lớn. Trong một thị trường đầy mùi sạch sáng và floral ngọt, Poison đứng riêng như một tuyên ngôn. Ở Việt Nam, chai này hợp với người thật sự thích mùi vintage đậm, có thần thái và không ngại chuyện số đông thấy “quá”.

## Diễn biến trên da
Mở đầu đã khá dày và tối, sau đó các lớp gia vị, hoa và nền ấm khiến mùi càng thêm sâu. Poison không chuyển tầng kiểu mượt nhẹ, mà luôn giữ một độ hiện diện mạnh xuyên suốt.

Drydown vẫn đậm, ấm và có cảm giác quyền lực rất rõ. Nó không phải kiểu sexy mềm, mà là kiểu áp đảo. Nhược điểm là cực kén người dùng và gần như không phù hợp với ai chỉ thích mùi nhẹ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Poison có hiệu năng tốt, thường 8 giờ trở lên; tỏa hương khá mạnh. Nó hợp tối, thời tiết mát, sự kiện đặc biệt hoặc những lúc thật sự muốn dùng mùi hương như một tuyên ngôn cá tính.

Ở Việt Nam, nên dùng rất tiết chế. Ưu điểm là bản sắc cực mạnh và khó nhầm; nhược điểm là độ ứng dụng thấp và dễ quá tay nếu không kiểm soát.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích nước hoa nữ cổ điển đậm, tối và quyền lực, Poison là cái tên phải thử ít nhất một lần. Nó hợp người có gu mạnh, thích mùi hương có sân khấu riêng.

Nên mua khi mày muốn một chai mang tính tuyên ngôn. Nếu mày cần mùi dễ mặc hằng ngày, nên chọn hướng khác hẳn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-allure-homme-sport-eau-extreme",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Allure Homme Sport Eau Extrême",
    subName: "Eau de Parfum",
    perfumer: "Jacques Polge",
    gender: "nam",
    image: "/images/products/chanel-allure-homme-sport-eau-extreme-main.jpg",
    images: [{ url: "/images/products/chanel-allure-homme-sport-eau-extreme-main.jpg", source: "studio", caption: "Ảnh sản phẩm Allure Homme Sport Eau Extrême (chai và hộp)" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Allure Homme Sport Eau Extreme là một trong những chai Chanel nam dễ dùng và dễ được yêu thích nhất vì nó cân bằng rất khéo giữa cảm giác sạch, thể thao và độ ngọt ấm vừa đủ. Mùi hương mở ra tươi, sáng, có citrus và bạc hà nhẹ, nhưng thứ giữ người ta ở lại là phần đậu tonka, xạ hương và gỗ rất mượt ở phía sau. Kết quả là một chai vừa trẻ, vừa sang, vừa linh hoạt hơn nhiều so với tên gọi Sport.

Điểm mạnh lớn của chai này là độ đa dụng. Nó không chỉ dành cho gym hay outfit sporty, mà còn dùng rất đẹp với sơ mi, polo, casual smart hoặc những dịp muốn có mùi thơm sạch nhưng không quá hiền. Trong thị trường Việt Nam, đây là kiểu mùi cực dễ bán vì vừa dễ ngửi, vừa có chất lượng hoàn thiện cao theo đúng phong cách Chanel.

## Diễn biến trên da
Mở đầu cho cảm giác mát và sáng với citrus, có chút the và trong. Nhưng chỉ sau một lúc, phần tonka bean và musk bắt đầu ôm lấy mùi hương, làm tổng thể ấm, mịn và nam tính hơn. Đây là điểm khiến Eau Extreme hấp dẫn hơn bản sport tươi thuần: nó có chiều sâu và độ sexy nhẹ ở drydown.

Trên da, chai này phát triển rất mượt, không sốc, không gắt. Càng về cuối, phần ngọt ấm sạch càng rõ, tạo cảm giác rất dễ chịu và dễ được compliment. Nhược điểm là mức độ độc đáo không quá cao nếu mày đã dùng nhiều designer nam cao cấp, vì nó chọn hướng an toàn nhưng làm rất tốt.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Allure Homme Sport Eau Extreme có hiệu năng khá ổn: lưu hương khoảng 6-8 giờ, tỏa hương vừa đến khá trong giai đoạn đầu. Nó dùng tốt cả ban ngày lẫn buổi tối, đặc biệt hợp đi làm, đi chơi, cà phê, hẹn hò nhẹ hoặc môi trường văn phòng có điều hòa.

Ở Việt Nam, chai này dùng được quanh năm nhờ cấu trúc vừa tươi vừa ấm. Ngày nóng vẫn ổn nếu xịt vừa tay; tối mát lại càng đẹp. Ưu điểm lớn là dễ dùng và ít gây khó chịu; nhược điểm là ai tìm một mùi rất cá tính hoặc rất niche có thể thấy nó quá đẹp chuẩn và ít góc cạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam cao cấp, đa dụng, dễ khen, có thể dùng từ đi làm đến đi chơi mà vẫn ra vibe gọn gàng sang sáng, Allure Homme Sport Eau Extreme là lựa chọn rất mạnh. Nó hợp cả người mới chơi lẫn người đã có nhiều chai nhưng vẫn cần một option an toàn chất lượng cao.

Nên mua khi mày muốn một chai signature dễ dùng quanh năm. Nếu đã có nhiều mùi fresh-sweet tương tự, hãy mua vì chất lượng blend của Chanel chứ đừng kỳ vọng độ đột phá.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Quýt" }, { name: "Bạc hà" }, { name: "Bách xanh" }, { name: "Xô thơm" }],
    middleNotes: [{ name: "Tiêu" }],
    baseNotes: [{ name: "Đậu Tonka" }, { name: "Xạ hương" }, { name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "nishane-hacivat",
    brandSlug: "nishane",
    brand: "NISHANE",
    name: "Hacivat",
    subName: "Extrait de Parfum",
    perfumer: "Jorge Lee",
    gender: "unisex",
    image: "/images/products/nishane-hacivat-main.jpg",
    images: [{ url: "/images/products/nishane-hacivat-main.jpg", source: "studio", caption: "Ảnh sản phẩm Nishane Hacivat (chai và hộp)" }, { url: "/images/products/nishane-hacivat-bottle.jpg", source: "studio", caption: "Ảnh chai Nishane Hacivat" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Hacivat là kiểu niche nam sáng, sắc, sang và rất clean luxury theo hướng dứa, citrus, rêu sồi và gỗ. Nhiều người sẽ liên tưởng ngay đến nhóm DNA Aventus, nhưng Hacivat không đi theo hướng smoky-fruity quá nam tính cổ điển mà sáng hơn, sạch hơn và bóng bẩy hơn. Đây là chai có cảm giác chỉn chu, tự tin và nổi bật theo cách rất hiện đại.

Điều khiến Hacivat được săn đón là nó vừa dễ tiếp cận hơn nhiều chai niche khó ngửi, vừa đủ khác biệt để không bị nhầm với designer phổ thông. Ở khí hậu Việt Nam, kiểu mùi sáng, sắc, sạch như Hacivat dùng rất bắt, đặc biệt cho người muốn một chai signature cao cấp để đi làm, gặp khách, đi chơi ban ngày hoặc lên đồ sang gọn.

## Diễn biến trên da
Mở đầu của Hacivat rất sáng với dứa, bưởi và bergamot, cho cảm giác mọng, sạch và có độ sang ngay lập tức. Sau đó phần gỗ, patchouli và đặc biệt là rêu sồi xuất hiện, khiến mùi hương chững lại và nam tính hơn. Chính lớp nền này giúp Hacivat không bị quá trái cây mà giữ được sự đĩnh đạc.

Drydown của chai này rất đẹp: sạch, hơi xanh, khô nhẹ và cực kỳ sang. Trên da nóng, phần citrus có thể bay nhanh hơn nhưng nền gỗ-rêu vẫn bám rất chắc. Điểm trừ là nếu mày không hợp oakmoss hoặc ghét cảm giác hơi xanh-khoáng ở nền, Hacivat có thể cho cảm giác hơi sắc và không mềm như một số chai compliment beast khác.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Hacivat nổi tiếng có hiệu năng mạnh: lưu hương dễ 8-10 giờ hoặc hơn, tỏa hương khá rõ trong những giờ đầu. Nó cực hợp đi làm, gặp đối tác, sự kiện ban ngày, tiệc ngoài trời hoặc những lúc muốn thơm sang và sạch theo kiểu high-end.

Trong thời tiết Việt Nam, Hacivat dùng tốt quanh năm nhưng đặc biệt đẹp vào mùa nóng, thời điểm ban ngày và không gian mở. Chỉ cần tiết chế số lần xịt vì hiệu năng của nó không yếu. Ưu điểm là sang, bền và có khí chất; nhược điểm là giá cao và độ sắc của nền rêu có thể hơi kén người mới.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai niche nam sáng, sang, dùng rất tự tin và có độ hiện diện mạnh, Hacivat là ứng viên đáng tiền. Nó hợp người thích phong cách gọn gàng, hiện đại, thích mùi sạch nhưng không nhạt.

Nên mua khi mày cần một chai premium để đi làm, gặp khách hoặc làm signature ban ngày. Nếu mày thích mùi mềm, ấm, tình cảm hơn là sáng sắc và sang lạnh, nên thử kỹ trước khi chốt.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Dứa" }, { name: "Bưởi" }, { name: "Cam bergamot" }],
    middleNotes: [{ name: "Gỗ tuyết tùng" }, { name: "Hoắc hương" }, { name: "Nhài" }],
    baseNotes: [{ name: "Rêu sồi" }, { name: "Gỗ" }],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "prada-lhomme-intense",
    brandSlug: "prada",
    brand: "PRADA",
    name: "L'Homme Intense",
    subName: "Eau de Parfum",
    perfumer: "Daniela Andrier",
    gender: "nam",
    image: "/images/products/prada-lhomme-intense-bottle.jpg",
    images: [{ url: "/images/products/prada-lhomme-intense-bottle.jpg", source: "studio", caption: "Ảnh sản phẩm Prada L'Homme Intense (chai và hộp)" }, { url: "/images/products/prada-lhomme-intense-main.jpg", source: "studio", caption: "Ảnh chai Prada L'Homme Intense" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Prada L'Homme Intense là bản tối, dày và gợi cảm hơn của Prada L'Homme gốc. Nếu bản thường giống một chiếc sơ mi trắng sạch sẽ thì bản Intense giống một bộ suit tối màu trong không gian ánh đèn vàng. Iris vẫn là linh hồn chính, nhưng lần này được phủ lên bởi amber, da và đậu tonka, khiến tổng thể ấm hơn, dày hơn và có độ buổi tối rõ hơn.

Điểm hấp dẫn của chai này là nó vẫn giữ được cảm giác sạch sang đặc trưng của Prada, nhưng thêm chiều sâu để phù hợp các dịp trang trọng hoặc hẹn hò. Nó không ngọt theo hướng trẻ, cũng không da thuộc quá gắt; thay vào đó là kiểu ấm, mượt, tinh tế và có khí chất trưởng thành. Trong phân khúc designer nam mặc suit đi tối, đây là một option rất đáng giá.

## Diễn biến trên da
Mở đầu vẫn có cảm giác iris sạch quen thuộc nhưng nhanh chóng chuyển sang nền amber dày và da mềm. Chính phần da này không quá bụi hay khô mà được làm mượt, nên mùi lên rất sang và liền mạch. Trên da ấm, phần tonka và amber nổi rõ hơn, tạo cảm giác ấm áp và rất ôm da.

Drydown là lúc Prada L'Homme Intense đẹp nhất: phấn sạch, da mềm, chút ngọt ấm và cực kỳ chỉn chu. Nó mang nét formal và có phần quiet luxury, không ồn nhưng người tinh mũi sẽ nhận ra chất lượng. Điểm trừ là nếu mày thích bản gốc vì sự sáng và dễ dùng ban ngày, bản Intense có thể hơi nặng hơn nhu cầu.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Hiệu năng của bản Intense tốt hơn bản thường: lưu hương khoảng 7-9 giờ, tỏa hương vừa đến khá. Nó hợp nhất cho chiều tối, phòng máy lạnh, hẹn hò, event có dress code hoặc những lúc muốn thơm sang mà không quá đại trà.

Trong khí hậu Việt Nam, chai này nên ưu tiên dùng khi trời mát hoặc không gian điều hòa. Ban ngày nắng nóng có thể vẫn dùng được nếu xịt nhẹ, nhưng đây không phải sân chơi đẹp nhất của nó. Ưu điểm là sang, khác biệt vừa đủ và có chiều sâu; nhược điểm là độ đa dụng thấp hơn Prada L'Homme bản gốc.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích DNA sạch sang của Prada nhưng muốn bản trưởng thành, tối và quyến rũ hơn, Prada L'Homme Intense là nâng cấp rất hợp lý. Nó hợp người đi làm đã có gu, thích suit, thích mùi sạch nhưng không muốn quá văn phòng.

Nên mua khi mày cần một chai tối lịch sự, hẹn hò hoặc đi event. Nếu đang tìm một chai dùng ban ngày quanh năm, bản gốc sẽ hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Hoa diên vĩ" }],
    middleNotes: [{ name: "Hổ phách" }, { name: "Hoắc hương" }],
    baseNotes: [{ name: "Đậu Tonka" }, { name: "Da thuộc" }, { name: "Gỗ đàn hương" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "sospiro-vibrato",
    brandSlug: "sospiro",
    brand: "SOSPIRO",
    name: "Vibrato",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "SOSPIRO Vibrato chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Sospiro Vibrato là kiểu mùi niche sáng, sang và cực kỳ sạch bóng theo hướng citrus, gừng, thảo mộc xanh và gỗ mịn. Nó cho cảm giác như một bộ đồ trắng được cắt may rất chuẩn: nổi bật nhưng không lòe loẹt, sang nhưng vẫn dễ tiếp cận. Nếu mày thích những mùi fresh cao cấp có độ long lanh, Vibrato là một trong những cái tên rất đáng chú ý.

Điểm mạnh của Vibrato nằm ở cảm giác cao cấp rõ rệt ngay từ những phút đầu. Nó không giống kiểu fresh rẻ tiền chỉ sáng rồi biến mất, mà có phần thân mùi chắc, sạch và có chiều sâu nhẹ đủ để giữ được sự sang. Ở Việt Nam, nhóm mùi này hợp cực tốt với nhu cầu đi làm, đi chơi ban ngày, gặp khách hoặc dùng làm signature khi thích phong cách chỉnh tề và hiện đại.

## Diễn biến trên da
Mở đầu là citrus rất sáng, đi cùng gừng tạo hiệu ứng sắc và trong. Sau đó mùi chuyển dần sang trạng thái mượt hơn với các note thảo mộc và gỗ, khiến tổng thể không chỉ tươi mà còn có form nam tính rõ. Trên da, Vibrato thường lên rất sạch và polished, ít khi bị đục hay ngọt bết.

Drydown không quá tối mà vẫn giữ cảm giác sáng-sạch đặc trưng. Đây là kiểu mùi ít biến động nhưng chất lượng blend tốt, nên mang lại cảm giác ổn định và sang. Nhược điểm là ai thích mùi đậm, tối, gourmand hoặc cực kỳ cá tính sẽ thấy Vibrato thiên về đẹp chuẩn hơn là phá cách.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Vibrato có hiệu năng khá tốt đối với một mùi fresh-luxury: lưu hương khoảng 6-8 giờ, tỏa hương vừa đến khá ở giai đoạn đầu. Nó cực hợp ban ngày, môi trường văn phòng cao cấp, gặp khách, hẹn cà phê, đi brunch hoặc những bối cảnh cần thơm sạch mà vẫn sang.

Trong khí hậu nóng ẩm Việt Nam, đây là kiểu chai rất dễ phát huy. Mùa nóng, mùa xuân hè hoặc không gian mở đều hợp. Ưu điểm là dễ mặc, sang và ít rủi ro; nhược điểm là giá thường không dễ chịu và độ khác biệt có thể chưa đủ lớn nếu mày đã có nhiều chai fresh niche.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai niche sáng, sạch, sang và dùng cực ổn trong môi trường Việt Nam, Vibrato là lựa chọn rất đáng cân nhắc. Nó hợp người thích phong cách hiện đại, gọn gàng, thích mùi chỉn chu hơn là phô diễn.

Nên mua khi mày đang tìm một signature ban ngày cao cấp. Nếu ưu tiên độ độc lạ hoặc chiều sâu buổi tối, mày nên có thêm một chai khác để bổ sung.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "hermes-terre-dhermes-parfum",
    brandSlug: "hermes",
    brand: "HERMÈS",
    name: "Terre d'Hermès Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "HERMÈS Terre d'Hermès Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Terre d'Hermes Parfum là phiên bản đậm, tròn và sâu hơn so với bản gốc EDT. Nó vẫn giữ DNA cam chanh khoáng chất và vetiver đặc trưng, nhưng giảm độ sắc của phần citrus để nhường chỗ cho lớp nền gỗ, nhựa cây và khoáng ấm hơn. Kết quả là một mùi hương trưởng thành, chắc chắn, sang và có cảm giác formal hơn bản gốc.

Nếu EDT giống hình ảnh một người đàn ông đi làm chỉn chu ban ngày thì bản Parfum giống phiên bản chững hơn, sang hơn và phù hợp thời điểm chiều tối hoặc những dịp cần vẻ đĩnh đạc nhiều hơn. Đây là chai rất hợp với người đã hiểu Terre d'Hermes và muốn một bản ít chua hơn, mượt hơn nhưng vẫn giữ cái hồn khoáng-gỗ rất riêng của Hermes.

## Diễn biến trên da
Mở đầu vẫn có cam và citrus, nhưng không bùng sáng như EDT. Thay vào đó, cảm giác khô, khoáng và gỗ xuất hiện sớm hơn, khiến tổng thể dày và sâu hơn ngay từ đầu. Khoảng sau 20-30 phút, phần nhựa, gỗ và vetiver bắt đầu ôm lấy làn da, tạo cảm giác rất điềm tĩnh và có trọng lượng.

Drydown của bản Parfum thường đẹp hơn với người không thích độ sắc của bản gốc. Nó mềm hơn, ít bụi đá hơn nhưng lại già dặn hơn. Nhược điểm là ai mê chính sự tươi sáng, linh hoạt và độ mở ban ngày của EDT có thể thấy Parfum kém thoáng hơn một chút.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Terre d'Hermes Parfum có độ lưu hương tốt, thường 7-9 giờ; tỏa hương ở mức vừa phải nhưng bám ổn định. Nó rất hợp đi làm, gặp đối tác, không gian cần sự trưởng thành, ăn mặc nghiêm túc hoặc những ngày mát trời. So với EDT, bản này hợp chiều tối và mùa mát hơn.

Trong thời tiết Việt Nam, vẫn dùng được quanh năm nhưng đẹp nhất khi tiết trời dễ chịu hoặc ở môi trường máy lạnh. Ưu điểm là sang, chững và có chiều sâu; nhược điểm là mức độ thân thiện với người mới không cao bằng bản EDT, vì tính khoáng-gỗ của dòng Terre luôn có chút khô và nghiêm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích DNA Terre d'Hermes nhưng muốn bản đậm hơn, trưởng thành hơn và sang hơn, bản Parfum là lựa chọn hợp lý. Nó hợp người đã đi làm, thích phong cách kín, gọn, ít nói nhưng có trọng lượng.

Nên mua khi mày muốn một chai dùng cho công việc, gặp gỡ nghiêm túc hoặc làm mùi chữ ký trưởng thành. Nếu mày cần sự linh hoạt, sáng và dễ gần hơn, bản EDT vẫn dễ dùng hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "creed-green-irish-tweed",
    brandSlug: "creed",
    brand: "CREED",
    name: "Green Irish Tweed",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CREED Green Irish Tweed chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Green Irish Tweed là kiểu xanh sạch, lịch lãm và rất “old money” của Creed. Nó không xanh kiểu cỏ non đơn giản, mà là xanh được may đo: sạch, có chiều sâu, có gỗ và rất sang theo cách không cần lên gân. Đây là một trong những mùi nam kinh điển cho người thích phong cách chỉn chu, trưởng thành và kín tiếng.

Điểm hay của Green Irish Tweed là độ thanh lịch bền vững. Nó không phụ thuộc trend, không quá trẻ, cũng không quá già. Trong điều kiện Việt Nam, đây là chai dùng rất đẹp cho đi làm, ban ngày, gặp gỡ lịch sự hoặc làm signature cho người thích mùi xanh có đẳng cấp.

## Diễn biến trên da
Mở đầu là xanh sáng và sạch, sau đó phần floral xanh và gỗ bắt đầu làm tổng thể trở nên mượt hơn. Mùi phát triển khá gọn, không nhiều tầng kịch tính nhưng rất ổn định và đẹp.

Drydown sạch, xanh mềm và hơi xà phòng cao cấp. Nó không phải kiểu gây sốc, mà là kiểu càng ngửi càng thấy gu. Nhược điểm là ai thích mùi đậm, ngọt hoặc statement mạnh có thể thấy nó quá kín.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Green Irish Tweed có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, ban ngày, chơi golf, gặp khách hàng, du lịch hoặc mọi tình huống cần mùi hương gọn và lịch thiệp.

Ở Việt Nam, chai này dùng khá khỏe nhờ độ xanh sạch. Ưu điểm là sang, timeless và wearable; nhược điểm là mức giá cao cho một phong cách rất kín đáo.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai xanh sạch có đẳng cấp thật sự và không bị lỗi mốt, Green Irish Tweed là lựa chọn cực vững. Nó hợp người thích phong cách trưởng thành, kín tiếng và tinh tế.

Nên mua khi mày cần một signature ban ngày sang. Nếu mày thích mùi ngọt ấm hay cực kỳ nổi bật, đây không phải hướng chính.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-eau-sauvage",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Eau Sauvage",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Eau Sauvage chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Eau Sauvage là một tượng đài nước hoa nam theo đúng nghĩa cổ điển Pháp: citrus, thảo mộc, hoa nhẹ và nền gỗ sạch được phối rất thanh, rất sáng và cực kỳ lịch sự. Đây không phải kiểu mùi ngọt hay ồn ào để gây chú ý nhanh, mà là kiểu mùi tạo cảm giác người mặc gọn gàng, có nề nếp và có gu lâu năm.

Điểm hay của Eau Sauvage là dù sinh ra từ thời kỳ rất khác, nó vẫn dùng được tốt nhờ sự tinh tế trong cấu trúc. Nó sáng nhưng không rẻ, sạch nhưng không mỏng, nam tính nhưng không gắt. Ở Việt Nam, đây là kiểu mùi hợp với người thích vẻ trưởng thành, thích đi làm, gặp gỡ lịch sự hoặc đơn giản là muốn một mùi citrus nam kinh điển không bị đại trà kiểu hiện đại.

## Diễn biến trên da
Mở đầu là citrus rõ rệt, sáng và rất gọn. Sau đó các note aromatic và nền gỗ nhẹ bắt đầu hiện ra, làm tổng thể bớt sắc hơn và có chiều sâu hơn. Mùi phát triển mượt, không sốc, không tạo cảm giác quá cầu kỳ nhưng rất có chất.

Drydown của Eau Sauvage khá thanh và sạch, vẫn giữ tinh thần citrus-aromatic đặc trưng. Nó không có kiểu chuyển mình dramatic mà ổn định theo hướng quý ông. Nhược điểm là nếu mày quen với các mùi hiện đại đậm đà, chai này có thể hơi hiền và hơi cổ điển.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Eau Sauvage có hiệu năng vừa phải, thường khoảng 5-7 giờ trên da và tỏa hương lịch sự. Nó cực hợp cho ban ngày, đi làm, gặp khách, trời nóng hoặc những lúc cần mùi hương sạch sang mà không làm phiền người khác.

Trong khí hậu Việt Nam, chai này phát huy tốt nhờ độ sáng và thoáng. Ưu điểm là thanh lịch, dễ mặc, đúng chất kinh điển; nhược điểm là không phải vũ khí cho hẹn hò tối hay những ai thích mùi bám cực mạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai citrus nam cổ điển, sang và rất có gu, Eau Sauvage là lựa chọn đáng thử. Nó hợp người trưởng thành, thích chất Pháp và không chạy theo mùi ngọt đương đại.

Nên mua khi mày cần một chai ban ngày lịch sự hoặc muốn hiểu một cột mốc lớn của nước hoa nam. Nếu mày thích mùi hiện đại, nổi và bám mạnh, có thể cần một hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "marc-antoine-barrois-ganymede",
    brandSlug: "marc-antoine-barrois",
    brand: "MARC-ANTOINE BARROIS",
    name: "Ganymède",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MARC-ANTOINE BARROIS Ganymède chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Ganymede là kiểu niche hiện đại rất khác đám đông: khoáng, da lộn sạch, kim loại nhẹ, trái cây khô và cảm giác không gian rất đặc trưng. Nó không ngọt dễ chịu theo kiểu phổ thông, cũng không quá oud hay gỗ đậm, mà đi theo một hướng rất riêng: sáng nhưng lạnh, sạch nhưng lạ, sang nhưng không dễ đoán.

Điểm khiến Ganymede nổi là nó tạo ra được một texture rất đặc biệt. Người ngửi thường không gọi tên chính xác được nó là gì, nhưng dễ nhớ cảm giác sang, khô, hơi metallic và rất hiện đại. Ở Việt Nam, đây là chai hợp với người đã chơi nước hoa một thời gian, muốn một thứ thật khác biệt và có khả năng tạo nhận diện rất mạnh.

## Diễn biến trên da
Mở đầu cho cảm giác khoáng và sáng, sau đó lớp da lộn sạch cùng chút trái cây khô làm mùi hương mềm hơn nhưng vẫn giữ độ lạnh. Ganymede phát triển khá ổn định, không biến đổi nhiều tầng, nhưng aura của nó rất rõ và rất dễ nhận ra.

Drydown vẫn mang cảm giác airy-mineral đặc trưng, hơi sạch, hơi da và rất hiện đại. Nó không ôm theo hướng ngọt tình cảm, mà cuốn ở sự khác biệt. Nhược điểm là ai chỉ thích mùi dễ hiểu, dễ ngửi ngay có thể thấy Ganymede hơi lạ và hơi xa cách.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Ganymede có hiệu năng tốt, lưu hương khoảng 8 giờ hoặc hơn, tỏa hương khá trong giai đoạn đầu. Nó dùng đẹp cho đi làm sáng tạo, gặp gỡ, event, thời tiết dễ chịu hoặc những lúc muốn mùi hương đóng vai trò như điểm nhấn phong cách.

Ở Việt Nam, chai này vẫn dùng được ngày nóng nhờ độ thoáng, nhưng nên tiết chế số lần xịt vì aura của nó khá rõ. Ưu điểm là độc đáo và rất sang; nhược điểm là không phải mùi ai cũng yêu từ lần đầu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày đang tìm một chai niche hiện đại, khác biệt thật sự và có khả năng tạo dấu ấn riêng, Ganymede rất đáng thử. Nó hợp người thích phong cách tối giản, high-fashion và muốn mùi hương không trùng số đông.

Nên mua khi mày đã chán các DNA quen thuộc và muốn một bước sang thế giới niche hiện đại. Nếu mày cần mùi an toàn, dễ khen ngay, nên test kỹ trước khi chốt.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-althair",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Althaïr",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PARFUMS DE MARLY Althaïr chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Althaïr là kiểu vanilla - gia vị - gỗ hiện đại rất tròn, sang và dễ gây nghiện. Nó không phải vanilla nữ tính mềm hoàn toàn, cũng không quá tối, mà nằm ở điểm giữa rất đẹp: ấm, mịn, ngọt vừa và có cảm giác upscale rõ. Đây là một trong những chai gourmand nam hiện đại dễ lấy lòng nhất của Parfums de Marly.

Điểm mạnh của Althaïr là độ nịnh mũi cao. Nó sang hơn nhiều chai ngọt phổ thông nhưng vẫn đủ dễ chịu để nhiều người thích ngay. Trong khí hậu Việt Nam, chai này hợp cho tối, máy lạnh, đi chơi hoặc người thích một mùi ngọt ấm hiện đại nhưng không quá “kẹo”.

## Diễn biến trên da
Mở đầu có gia vị và độ sáng vừa phải trước khi vanilla cùng gỗ làm tổng thể mượt và dày hơn. Mùi chuyển khá mềm, không gắt và càng về sau càng tạo cảm giác ôm da rất đẹp.

Drydown là lớp vanilla ấm, hơi kem, hơi gỗ và rất nịnh khoảng cách gần. Nó không quá phức tạp nhưng hoàn thiện tốt. Nhược điểm là nếu mày đã có nhiều chai vanilla ấm, Althaïr có thể không tạo cú sốc mới mẻ lớn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Althaïr có hiệu năng tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp hẹn hò, tối, mùa mát, không gian máy lạnh hoặc những dịp muốn thơm theo kiểu ấm sang hiện đại.

Ở Việt Nam, nên dùng buổi tối để mùi lên đẹp nhất. Ưu điểm là dễ thích, sang và wearable; nhược điểm là không thật sự hợp trời nóng gay gắt.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai vanilla nam hiện đại, sang và rất dễ được thích, Althaïr là lựa chọn rất mạnh. Nó hợp người thích mùi ngọt ấm mượt nhưng không muốn quá trẻ con.

Nên mua khi mày cần một chai buổi tối dễ khen. Nếu mày ưu tiên sự xanh, khô hoặc quá khác biệt, nên cân nhắc hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-angelique-noire",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Angélique Noire",
    subName: "Eau de Parfum",
    perfumer: "Daniela Andrier",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Angélique Noire chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Angelique Noire là kiểu vanilla niche rất Pháp: mềm, tối, sang và có chiều sâu tinh tế thay vì ngọt theo kiểu món tráng miệng. Vanilla ở đây đi cùng angelica và một cảm giác xanh nhẹ, khiến tổng thể vừa có độ ấm, vừa có độ thanh, không hề dễ dãi. Đây là một mùi hương đẹp theo kiểu càng ngửi càng thấy tinh vi.

Điểm đặc biệt của Angelique Noire là nó không làm vanilla trở nên quá gourmand. Thay vào đó, Guerlain tạo ra một vanilla có bóng tối, có độ khô nhẹ và có nét sang rất đắt. Trong điều kiện Việt Nam, chai này hợp nhất với người thích mùi ấm nhưng không muốn ngọt dày, và muốn một mùi hương có tính sang trọng kín đáo hơn là gây chú ý ngay.

## Diễn biến trên da
Mở đầu có chút xanh và hơi sắc, sau đó vanilla bắt đầu trồi lên nhưng không tràn ngập mà đi rất mượt. Sự đối lập giữa phần xanh và phần ngọt làm Angelique Noire luôn giữ được độ căng, không bị phẳng.

Drydown rất đẹp: vanilla mềm, ấm, hơi tối và có cảm giác sang sâu. Nó bám theo kiểu ôm da hơn là phát tỏa ồn ào. Nhược điểm là ai thích vanilla gourmand rõ, kiểu bánh kẹo dễ thương, có thể thấy chai này hơi lạnh và hơi nghiêm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Angelique Noire có độ lưu hương tốt, khoảng 7-9 giờ; tỏa hương vừa, thiên về aura gần. Nó hợp với chiều tối, hẹn hò, tiệc nhẹ, không gian tinh tế hoặc những ngày trời mát.

Ở Việt Nam, chai này nên dùng trong không gian điều hòa hoặc buổi tối để vanilla lên đẹp và không bị dày. Ưu điểm là tinh tế, sang, khác biệt; nhược điểm là giá cao và không phải kiểu vanilla đại chúng dễ hiểu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai vanilla niche có chiều sâu, không trẻ con, không quá ngọt và mang đúng chất Guerlain cao cấp, Angelique Noire là lựa chọn rất đáng giá. Nó hợp người có gu, thích sự kín và sang hơn là effect tức thì.

Nên mua khi mày đã chán các vanilla phổ thông và muốn một thứ tinh hơn, có cá tính hơn. Nếu mày cần mùi dễ thương, gourmand rõ hoặc dễ khen ngay, đây không phải hướng đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Bạch chỉ" }, { name: "Lê" }, { name: "Tiêu hồng" }],
    middleNotes: [{ name: "Nhài" }, { name: "Thì là Ai Cập" }],
    baseNotes: [{ name: "Bạch chỉ" }, { name: "Vani" }, { name: "Gỗ tuyết tùng" }],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-pure-poison",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Pure Poison",
    subName: "Eau de Parfum",
    perfumer: "Carlos Benaïm, Dominique Ropion, Olivier Polge",
    gender: "nu",
    image: "/images/products/dior-pure-poison-main.jpg",
    images: [{ url: "/images/products/dior-pure-poison-main.jpg", source: "studio", caption: "Ảnh sản phẩm Dior Pure Poison (chai và hộp)" }, { url: "/images/products/dior-pure-poison-bottle.jpg", source: "studio", caption: "Ảnh chai Dior Pure Poison" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Pure Poison là một kiểu nữ tính rất đẹp của Dior: hoa trắng sạch, sáng, có độ sang nhưng không quá nồng. Nó không đi theo hướng kẹo ngọt, fruity hay quá sexy kiểu ồn ào, mà thiên về cảm giác tinh khiết, thanh và có chút lạnh. Đây là kiểu mùi khiến người mặc trông chỉn chu, sạch sẽ và có khí chất hơn là cố gây choáng.

Điểm mạnh của Pure Poison nằm ở sự cân bằng giữa vẻ nữ tính và độ dễ dùng. Hoa trắng ở đây không dày như một số chai tuberose nặng đô, mà sáng và thoáng hơn. Trong điều kiện Việt Nam, đây là kiểu mùi rất hợp với người thích hương hoa thanh lịch, dùng được nhiều hoàn cảnh và không muốn quá ngọt.

## Diễn biến trên da
Mở đầu cho cảm giác sáng và tinh với citrus nhẹ và lớp hoa trắng sạch. Sau đó hoa nhài, hoa cam và nền gỗ mềm bắt đầu hiện rõ hơn, khiến mùi hương nữ tính nhưng vẫn có khung rất gọn.

Drydown của Pure Poison khá đẹp: vẫn là hoa trắng nhưng mềm hơn, kem hơn và có chút ấm nhẹ. Nó giữ được sự thanh sạch trong suốt quá trình phát triển. Nhược điểm là ai thích mùi nữ đậm, ngọt hoặc quá quyến rũ có thể thấy chai này hơi ngoan.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Pure Poison có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa phải, phù hợp văn phòng, đi làm, hẹn nhẹ, dự tiệc ban ngày hoặc các dịp cần vẻ nữ tính thanh lịch.

Ở Việt Nam, chai này dùng tốt quanh năm, đặc biệt đẹp trong thời tiết nóng vì hoa trắng lên sáng và sạch. Ưu điểm là sang, dễ mặc, ít rủi ro; nhược điểm là độ cá tính không quá cao nếu so với các chai hoa trắng đậm nét hơn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nữ thanh lịch, sạch, hoa trắng đẹp và dễ dùng, Pure Poison là lựa chọn rất đáng cân nhắc. Nó hợp người thích vẻ chỉn chu, tinh và không muốn mùi ngọt gắt.

Nên mua khi mày cần một chai dùng đi làm hoặc signature nhẹ nhàng sang. Nếu mày muốn mùi cực quyến rũ buổi tối, nên tìm hướng đậm hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Nhài" }, { name: "Cam" }, { name: "Cam bergamot" }, { name: "Quýt Sicily" }],
    middleNotes: [{ name: "Dành dành" }, { name: "Hoa cam" }],
    baseNotes: [{ name: "Gỗ đàn hương" }, { name: "Hổ phách trắng" }, { name: "Gỗ tuyết tùng" }, { name: "Xạ hương trắng" }],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-opium-edt",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Opium",
    subName: "Eau de Toilette",
    perfumer: "",
    gender: "nu",
    image: "/images/products/ysl-opium-edt-main.jpg",
    images: [{ url: "/images/products/ysl-opium-edt-main.jpg", source: "studio", caption: "Ảnh sản phẩm YSL Opium EDT (chai và hộp)" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Opium là một tượng đài phương Đông cổ điển của YSL, mang tinh thần gia vị, nhựa thơm, hoa và độ ấm rất đặc trưng. Đây không phải kiểu nước hoa nữ hiện đại theo hướng fruity-sweet dễ chiều, mà là một mùi hương có quyền lực, có chất retro và có độ hiện diện mạnh. Opium bước vào không gian với cá tính rất rõ, khiến người mặc trông bí ẩn, sắc và có chiều sâu hơn hẳn.

Điểm làm Opium khác biệt là nó không cố làm dễ thương. Nó chọn cách sang, dày và trưởng thành. Trong bối cảnh hiện nay, chính sự cổ điển đó lại trở thành bản sắc riêng. Ở Việt Nam, Opium sẽ hợp hơn với người thích mùi có cá tính lớn, dùng cho buổi tối, thời tiết mát hoặc các dịp muốn tạo dấu ấn rất riêng thay vì theo gu ngọt an toàn.

## Diễn biến trên da
Mở đầu là nhóm gia vị khá rõ, tạo cảm giác ấm, cay và có chút sắc. Sau đó phần hoa và nhựa thơm làm mùi hương trở nên dày hơn, tròn hơn, trong khi nền vani và hổ phách kéo tổng thể về hướng phương Đông rõ nét.

Drydown của Opium là nơi bản sắc được giữ rất bền: ấm, đậm, có chút khói và chất vintage sang trọng. Nó không nhẹ nhàng hay airy, mà mang cảm giác đầm và chắc. Nhược điểm là nếu mày quen mùi nữ hiện đại sáng sủa, Opium có thể hơi nặng và quá chín.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Opium có độ lưu hương tốt, thường 7-9 giờ; tỏa hương vừa đến khá và có độ hiện diện rõ. Nó hợp nhất cho buổi tối, tiệc, thời tiết mát, phòng điều hòa hoặc những lúc cần một mùi nữ mạnh cá tính.

Trong khí hậu Việt Nam, nên dùng có tiết chế và ưu tiên chiều tối. Đây không phải chai lý tưởng cho trưa nóng hoặc môi trường quá kín nếu xịt nhiều. Ưu điểm là độc đáo, có phong thái và rất khó nhầm; nhược điểm là khá kén người mặc lẫn người ngửi.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích nước hoa nữ cổ điển, phương Đông, đậm chất quyền lực và không ngại một mùi hương có tuổi đời lẫn cá tính, Opium rất đáng thử. Nó hợp người có gu riêng, thích chất drama và sang theo kiểu không chiều đám đông.

Nên mua khi mày muốn một chai tối, lạnh, có statement rõ. Nếu mày cần mùi nữ hiện đại, sáng và dễ dùng mỗi ngày, Opium sẽ không phải lựa chọn đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Quýt" }, { name: "Cam bergamot" }, { name: "Hoa linh lan" }],
    middleNotes: [{ name: "Mộc dược" }, { name: "Cẩm chướng" }, { name: "Nhài" }],
    baseNotes: [{ name: "Hổ phách" }, { name: "Hoắc hương" }, { name: "Vani" }],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-black-opium-le-parfum",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Black Opium Le Parfum",
    subName: "Le Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Black Opium Le Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Black Opium Le Parfum là phiên bản đậm, vanilla hơn và gợi cảm hơn của Black Opium. Nó vẫn giữ tinh thần cà phê - ngọt - quyến rũ quen thuộc, nhưng đẩy mạnh phần vanilla để tổng thể mượt, dày và sexy hơn rõ. Đây là kiểu mùi tối rất hợp người thích gourmand nữ hiện đại và muốn sự nổi bật dễ hiểu.

Điểm hấp dẫn của bản này là độ nịnh mũi cao. Nó không cố làm quá nghệ hay quá phức tạp, mà tập trung vào việc khiến người mặc thơm, cuốn và nổi bật trong không gian gần. Ở Việt Nam, chai này hợp với tối, hẹn hò, đi chơi hoặc người mê vanilla đậm theo hướng hiện đại.

## Diễn biến trên da
Mở đầu ngọt và khá nhanh vào vùng cà phê - vanilla, sau đó mùi dần tròn hơn, kem hơn và đậm hơn so với bản EDP. Chuyển tầng không quá phức tạp nhưng rất rõ về cảm giác tăng độ ấm.

Drydown là vanilla dày, mềm và khá gợi cảm. Nó dễ gây thiện cảm nếu mày hợp gourmand. Nhược điểm là trời nóng hoặc người không thích mùi ngọt sẽ thấy bản này hơi quá tay.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Black Opium Le Parfum có hiệu năng khá tốt, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp tối, đi bar, hẹn hò, tiệc nhẹ hoặc các dịp muốn mùi hương rõ và cuốn.

Ở Việt Nam, nên dùng tiết chế và đẹp nhất trong môi trường máy lạnh. Ưu điểm là sexy, dễ thích, dễ nhớ; nhược điểm là độ đa dụng ban ngày thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Black Opium và muốn một bản vanilla đậm, quyến rũ hơn, Le Parfum là lựa chọn rất hợp lý. Nó hợp người mê gourmand nữ hiện đại và thích mùi hương có sức hút rõ.

Nên mua khi mày cần một chai tối dễ tạo ấn tượng. Nếu mày thích sự thanh, ít ngọt hoặc trong trẻo, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-insolence-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Insolence",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Insolence chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Insolence EDP là một mùi tím rất Guerlain: violet, iris, powder và nền ngọt mềm tạo nên cảm giác vừa bột, vừa sang, vừa hơi ngông đúng như tên gọi. Nó không đi theo hướng hoa tươi sáng thông thường, mà tạo một thế giới rất riêng: mềm, tím, phấn và có chút retro quyến rũ.

Điểm mạnh của Insolence là độ nhận diện cao. Chỉ cần ngửi một lúc là biết nó không giống số đông. Trong bối cảnh Việt Nam, đây là chai hợp với người thích powdery floral có cá tính và không ngại mùi hương mang màu sắc cổ điển hiện đại khá rõ.

## Diễn biến trên da
Mở đầu violet hiện lên nhanh, sau đó iris và nền powder bắt đầu làm tổng thể trở nên mịn hơn, tròn hơn và nữ tính hơn. Mùi chuyển tầng khá liền, thiên về texture hơn là kịch tính note.

Drydown là lớp phấn tím mềm, hơi ngọt và rất đặc trưng. Nó có sức hút riêng nếu mày mê phong cách này. Nhược điểm là ai không hợp powder hoặc thấy violet quá rõ sẽ khó sống cùng lâu dài.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Insolence EDP có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm môi trường mát, gặp gỡ, buổi chiều tối nhẹ hoặc dùng khi muốn một mùi floral phấn có bản sắc riêng.

Ở Việt Nam, chai này nên dùng vừa tay. Ưu điểm là rất riêng và sang kiểu Guerlain; nhược điểm là kén gu hơn nhiều floral hiện đại phổ thông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích violet, iris và mùi phấn tím có cá tính, Insolence EDP là một lựa chọn rất đáng thử. Nó hợp người yêu mùi floral powdery sang và không muốn đi theo lối hoa trắng hay gourmand quá quen.

Nên mua khi mày muốn một mùi nữ có bản sắc riêng. Nếu mày thích mùi quá sạch, quá tươi hoặc ít phấn, nên test trước kỹ.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-mon-guerlain-intense",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Mon Guerlain Intense",
    subName: "Eau de Parfum Intense",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Mon Guerlain Intense chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Mon Guerlain Intense là phiên bản đậm, ấm và dày hơn của Mon Guerlain gốc. Nó vẫn giữ lavender, vanilla và cảm giác nữ tính sang đặc trưng, nhưng được làm sâu hơn, tối hơn và quyến rũ hơn rõ rệt. Đây là kiểu mùi rất hợp với người thích phong cách nữ hiện đại, mềm nhưng không nhạt.

Điểm hay của bản Intense là nó tăng chiều sâu mà không đánh mất sự dễ mặc. So với bản gốc, chai này có nhiều “trọng lượng” hơn, hợp buổi tối và môi trường máy lạnh hơn. Ở Việt Nam, đây là lựa chọn đẹp cho người thích mùi ấm sang nhưng vẫn muốn giữ độ nịnh mũi cao.

## Diễn biến trên da
Mở đầu vẫn có nét floral-aromatic quen thuộc, sau đó vanilla và nền ấm bắt đầu kéo tổng thể xuống vùng mềm, dày và mượt hơn. Mùi phát triển liền lạc, không gắt và giữ được chất Guerlain rất rõ.

Drydown là lớp vanilla ấm, nữ tính và khá ôm da. Nó sang theo kiểu mềm chứ không áp đảo. Nhược điểm là ai thích sự sáng thoáng ban ngày có thể vẫn hợp bản gốc hơn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Mon Guerlain Intense có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa. Nó hợp tối, hẹn hò, tiệc nhẹ, dùng mùa mát hoặc khi muốn một mùi nữ tính sang rõ hơn thường ngày.

Ở Việt Nam, nên dùng đẹp nhất vào chiều tối hoặc phòng điều hòa. Ưu điểm là quyến rũ, dễ mặc và giữ DNA rất tốt; nhược điểm là không quá hợp trời nóng gắt.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Mon Guerlain nhưng muốn phiên bản đậm và trưởng thành hơn, bản Intense rất đáng mua. Nó hợp người thích vanilla-lavender nữ tính sang và muốn một chai tối dễ dùng.

Nên mua khi mày cần một chai ấm sang cho buổi tối. Nếu mày ưu tiên sự thoáng nhẹ ban ngày, bản gốc vẫn dễ sống hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-samsara-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Samsara",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Samsara chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Samsara EDP là một mùi hương rất Guerlain: gỗ đàn hương, hoa và cảm giác ấm sang cổ điển hòa vào nhau cực kỳ mượt. Nó không đi theo hướng ngọt trẻ hay floral hiện đại, mà mang vẻ đẹp chững chạc, nữ tính và rất có chiều sâu. Đây là kiểu mùi cần gu, nhưng khi hợp thì cho cảm giác sang rất riêng.

Điểm mạnh của Samsara là sự mềm dày đầy khí chất. Nó có chất gỗ rõ nhưng không hề thô, floral hiện diện nhưng không mỏng. Trong khí hậu Việt Nam, chai này hợp hơn với người thích phong cách cổ điển cao cấp, dùng tối hoặc trong môi trường mát.

## Diễn biến trên da
Mở đầu hoa lên khá nhanh, sau đó đàn hương và nền ấm bắt đầu đẩy mùi vào trạng thái mượt, sâu và trưởng thành hơn. Samsara phát triển không gắt, mà rất liền và “lụa”.

Drydown là lớp gỗ - hoa ấm, bột nhẹ và cực kỳ sang. Nó không phô trương nhưng có cảm giác rất đắt. Nhược điểm là người chỉ quen mùi hiện đại sáng sạch có thể thấy Samsara hơi vintage.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Samsara EDP có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa. Nó hợp tối, gặp gỡ lịch sự, dùng mùa mát hoặc những dịp muốn một mùi nữ trưởng thành có chiều sâu.

Ở Việt Nam, nên dùng vừa tay và ưu tiên buổi tối. Ưu điểm là sang, mềm, giàu chiều sâu; nhược điểm là độ đại chúng không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích floral-woody cổ điển và muốn một chai nữ có khí chất thật sự, Samsara EDP rất đáng thử. Nó hợp người yêu mùi sang kiểu Pháp cũ, mềm nhưng không dễ quên.

Nên mua khi mày muốn một chai signature có chiều sâu. Nếu mày thích mùi trẻ, sáng và trendy, nên test kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-dune-edt",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dune",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dune chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dune EDT là kiểu mùi rất riêng của Dior: thoáng, cát, biển, gỗ và một cảm giác khô ấm rất khó gọi tên chính xác. Nó không floral rõ, không aquatic đơn giản, cũng không hoàn toàn woody, mà giống một khung cảnh hơn là một công thức note. Đây là kiểu mùi có tính nghệ rõ, rất hợp người không thích đi theo số đông.

Điểm đặc biệt của Dune là không khí. Nó tạo cảm giác gió biển, cồn cát, nắng và sự tĩnh lặng nhiều hơn là “thơm ngon” theo nghĩa thông thường. Trong bối cảnh Việt Nam, đây là chai dành cho người có gu riêng, thích mùi lạ nhưng không quái.

## Diễn biến trên da
Mở đầu có cảm giác thoáng và hơi mặn - khô, sau đó các lớp gỗ, amber nhẹ và sắc floral mờ làm tổng thể trở nên tròn hơn. Mùi chuyển tầng mềm nhưng luôn giữ chất cảnh quan rất rõ.

Drydown là lớp khô ấm, yên và có chút mơ hồ rất đẹp. Nó không bùng nổ compliment, nhưng tạo dấu ấn sâu với người hợp gu. Nhược điểm là ai thích mùi rõ note, ngọt hoặc dễ hiểu có thể thấy Dune hơi “trừu tượng”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dune EDT có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa nhẹ. Nó hợp ban ngày, chiều mát, đi dạo, du lịch hoặc khi muốn một mùi hương có không khí rất riêng.

Ở Việt Nam, chai này dùng ổn vì không quá nặng. Ưu điểm là rất khác biệt và có chiều nghệ; nhược điểm là không phải kiểu dễ khen đại trà.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích những mùi gợi cảnh quan, có chất thơ và không đụng hàng, Dune EDT là cái tên rất đáng khám phá. Nó hợp người muốn một mùi hương riêng hơn là một mùi “an toàn”.

Nên mua khi mày muốn một chai mang mood rõ. Nếu mày cần floral sáng hoặc gourmand dễ gần, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "byredo-bal-dafrique",
    brandSlug: "byredo",
    brand: "BYREDO",
    name: "Bal d'Afrique",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "BYREDO Bal d'Afrique chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Bal d'Afrique là một trong những mùi clean-luxury dễ yêu nhất của Byredo: citrus, hoa mềm, gỗ sáng và xạ hương được làm rất mượt, tạo ra cảm giác vừa tươi vừa ấm rất đặc trưng. Nó không quá niche khó gần, cũng không quá đại trà, mà nằm ở giữa: sang, sáng, vui và có chất thời trang rõ.

Điểm hay của Bal d'Afrique là khả năng tạo cảm giác thoải mái nhưng vẫn đắt. Nó có ánh nắng, có sự sạch sẽ và có độ mềm rất dễ gần. Ở Việt Nam, đây là kiểu mùi dùng được nhiều hoàn cảnh, đặc biệt cho người thích phong cách gọn gàng, nghệ, hơi lifestyle hơn là formal cổ điển.

## Diễn biến trên da
Mở đầu là citrus và trái cây sáng, sau đó hoa cùng xạ hương làm mùi mềm đi và trở nên rất dễ chịu. Lớp nền gỗ giữ mọi thứ đứng form, không để mùi bị quá nhẹ hay quá ngọt.

Drydown của Bal d'Afrique rất đẹp: sạch, mềm, hơi kem nhẹ và rất dễ mến. Nó không quá phức tạp, nhưng blend rất khéo nên tạo cảm giác sang nhẹ nhàng. Nhược điểm là ai thích chiều sâu tối hoặc hiệu ứng quá mạnh có thể thấy chai này hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Bal d'Afrique có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa phải. Nó hợp cho ban ngày, đi làm sáng tạo, cà phê, brunch, hẹn nhẹ hoặc làm signature quanh năm.

Trong khí hậu Việt Nam, chai này dùng rất tốt vì vừa sáng vừa mềm, không quá nặng. Ưu điểm là dễ mặc, sang và hợp nhiều giới; nhược điểm là giá cao nếu xét trên độ bùng nổ hay độc lạ.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai niche dễ dùng, sạch, sáng và có chất thời trang, Bal d'Afrique là ứng viên rất mạnh. Nó hợp người thích phong cách hiện đại, tinh và không muốn mùi hương quá nghiêm.

Nên mua khi mày cần một signature ban ngày cao cấp, dễ sống chung. Nếu mày muốn một mùi rất tối hoặc cực kỳ khác người, đây không phải hướng đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-mitsouko-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Mitsouko",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Mitsouko chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Mitsouko là một tượng đài của Guerlain và cũng là một trong những mùi chypre cổ điển quan trọng nhất trong lịch sử nước hoa. Nó không ngọt dễ chiều, không sáng vui kiểu hiện đại, mà đi theo hướng quả chín, rêu sồi, gia vị và nền tối rất sang. Đây là kiểu mùi cần thời gian để hiểu, nhưng khi hợp rồi thì cực kỳ khó thay thế.

Điểm mạnh của Mitsouko nằm ở chiều sâu và khí chất. Nó cho cảm giác người mặc có gu, có lịch sử, không chạy theo trend và đủ tự tin để dùng một mùi hương không chiều đám đông. Ở Việt Nam, Mitsouko hợp hơn với người đã có trải nghiệm mùi hương tương đối, thích chất cổ điển Pháp và muốn một thứ thật sự có bản sắc.

## Diễn biến trên da
Mở đầu có cảm giác trái cây chín nhưng không ngọt trẻ, rất nhanh sau đó phần rêu, gia vị và nền chypre bắt đầu xuất hiện. Mitsouko phát triển theo kiểu ngày càng sâu và giàu sắc độ hơn, chứ không bùng nổ ngay từ đầu.

Drydown là nơi chai này đẹp nhất: tối, khô vừa phải, mềm theo kiểu cổ điển và có sức gợi rất riêng. Nó không dễ hiểu ngay, nhưng rất giàu chiều sâu với người chịu ngửi kỹ. Nhược điểm là ai chỉ quen mùi modern fruity-floral có thể thấy Mitsouko hơi khó tiếp cận.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Mitsouko có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa phải nhưng bền. Nó hợp nhất cho thời tiết mát, không gian yên, tối, sự kiện lịch sự hoặc những dịp muốn một mùi thật sự có khí chất.

Ở Việt Nam, nên dùng trong phòng điều hòa hoặc buổi tối để mùi lên đẹp hơn. Ưu điểm là đẳng cấp và rất riêng; nhược điểm là tính đại chúng thấp và không phải ai cũng hợp từ lần đầu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai cổ điển thật sự có chiều sâu và có lịch sử lớn trong thế giới nước hoa, Mitsouko là cái tên rất đáng thử. Nó hợp người có gu cổ điển, thích sự sang kín và muốn một mùi hương không hòa tan vào số đông.

Nên mua khi mày cần một chai signature có cá tính rất riêng hoặc muốn khám phá trường phái chypre đúng nghĩa. Nếu mày cần mùi dễ dùng mỗi ngày, đây không phải điểm bắt đầu tốt nhất.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-shalimar-lessence",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Shalimar L'Essence",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Shalimar L'Essence chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Shalimar L'Essence là một nhánh hiện đại và mượt hơn của tinh thần Shalimar cổ điển. Nó vẫn giữ chất vanilla, nhựa thơm và màu oriental sang trọng, nhưng được làm mềm, sáng và dễ tiếp cận hơn một chút. Đây là kiểu mùi vẫn mang khí chất Guerlain rõ, nhưng ít “khó vào” hơn Shalimar nguyên bản.

Điểm hấp dẫn của bản này là nó cho người dùng cảm giác cổ điển sang mà không quá dày. Với những ai từng thấy Shalimar quá vintage hoặc quá resinous, L'Essence thường là cửa vào dễ chịu hơn. Ở Việt Nam, đây là kiểu chai hợp cho người thích mùi ấm sang nhưng không muốn quá nặng.

## Diễn biến trên da
Mở đầu có sắc độ tươi hơn một chút so với Shalimar cổ điển, nhưng rất nhanh vanilla và nền oriental vẫn hiện rõ. Mùi chuyển khá mượt, không sắc cạnh, thiên về sự mềm và bóng.

Drydown ấm, sang và mịn, vẫn có nét nhựa thơm đặc trưng nhưng ít gai hơn. Nó dễ mặc hơn bản gốc, dù vẫn không phải kiểu ngọt hiện đại đơn giản. Nhược điểm là ai mê đúng tinh thần rất cổ điển của Shalimar có thể thấy bản này bớt “thép” đi phần nào.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L'Essence có độ lưu hương tốt, thường 7-9 giờ; tỏa hương vừa. Nó hợp với tối, thời tiết mát, đi tiệc, không gian lịch sự hoặc những lúc muốn một mùi nữ sang nhưng không quá áp lực.

Ở Việt Nam, nên dùng trong điều hòa hoặc buổi tối. Ưu điểm là sang, mượt, dễ tiếp cận hơn Shalimar cổ điển; nhược điểm là vẫn cần gu nhất định để cảm hết cái hay.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích chất oriental của Guerlain nhưng muốn một phiên bản mềm và hiện đại hơn Shalimar gốc, L'Essence rất đáng thử. Nó hợp người thích mùi ấm, nữ tính sang và có chiều sâu nhưng không quá vintage.

Nên mua khi mày muốn bước vào thế giới Shalimar theo lối dễ dùng hơn. Nếu mày thích bản gốc vì chất cổ điển mạnh, có thể vẫn ưu tiên bản original hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "lalique-encre-noire",
    brandSlug: "lalique",
    brand: "LALIQUE",
    name: "Encre Noire",
    subName: "Eau de Toilette",
    perfumer: "Nathalie Lorson",
    gender: "nam",
    image: "/images/products/lalique-encre-noire-main.jpg",
    images: [{ url: "/images/products/lalique-encre-noire-main.jpg", source: "studio", caption: "Ảnh sản phẩm Lalique Encre Noire (chai và hộp)" }, { url: "/images/products/lalique-encre-noire-bottle.jpg", source: "studio", caption: "Ảnh chai Lalique Encre Noire" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Encre Noire là một trong những chai nước hoa nam có DNA gỗ-vetiver rõ cá tính nhất ở tầm giá dễ tiếp cận. Nó tối, khô, lạnh và có cảm giác như gỗ ẩm, rễ cây, mực đen và đất sau mưa. Đây không phải kiểu mùi ngọt dễ khen hay sáng sủa kiểu văn phòng phổ thông, mà là kiểu mùi dành cho người thích sự trầm, kín và có phần nghệ sĩ.

Điểm khiến Encre Noire đáng giá nằm ở chỗ nó cho một trải nghiệm rất riêng mà nhiều chai đắt tiền hơn cũng chưa chắc làm được. Nó có chiều sâu, có mood và có màu sắc rất rõ. Ở Việt Nam, chai này không phải lựa chọn an toàn cho số đông, nhưng lại cực hợp với ai thích phong cách tối giản, all black, ít nói và không muốn mùi hương của mình giống phần còn lại của đám đông.

## Diễn biến trên da
Mở đầu là cypress hơi xanh và khô, sau đó vetiver nhanh chóng chiếm sân khấu. Vetiver ở đây không sáng kiểu tươi cỏ mới cắt mà đi theo hướng tối, gỗ, có chút đất và khoáng. Khi mùi xuống sâu hơn, lớp xạ hương và gỗ cashmere làm tổng thể mềm hơn đôi chút nhưng vẫn giữ tinh thần lạnh và tối.

Diễn biến của Encre Noire không quá nhiều lớp, nhưng màu mùi rất nhất quán. Nó không cố lấy lòng người dùng bằng sweetness hay citrus dễ chịu. Chính sự thẳng thắn đó làm nó có cá tính. Nhược điểm là ai quen mùi fresh, gourmand hoặc thích compliment nhanh sẽ thấy chai này quá khô và hơi khó gần.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Encre Noire có độ lưu hương khá tốt so với giá, thường khoảng 6-8 giờ; tỏa hương vừa phải, thiên về aura gần hơn là khuếch tán mạnh. Nó hợp nhất cho buổi chiều tối, thời tiết mát, mùa mưa, không gian yên và những dịp không cần quá social.

Ở khí hậu Việt Nam, nên dùng nhẹ tay và đẹp nhất vào ngày mát hoặc trong phòng điều hòa. Đây không phải chai dành cho buổi trưa nắng gắt hay môi trường cần quá thân thiện. Ưu điểm là cá tính mạnh và giá tốt; nhược điểm là khá kén người mặc lẫn người ngửi.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai vetiver tối, khác biệt, có chiều sâu và giá trị vượt giá tiền, Encre Noire rất đáng thử. Nó hợp người thích gu trầm, hơi nghệ và không ngại một mùi hương khó chiều hơn mặt bằng chung.

Nên mua khi mày muốn thêm một chai mood scent cho tối, ngày mưa hoặc những lúc cần một vibe rất riêng. Nếu mày mới chơi nước hoa hoặc chỉ cần mùi dễ dùng hằng ngày, đây không phải lựa chọn ưu tiên đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Bách xanh" }],
    middleNotes: [{ name: "Cỏ hương bài Bourbon" }, { name: "Cỏ hương bài Haiti" }],
    baseNotes: [{ name: "Gỗ cashmere" }, { name: "Xạ hương" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "jpg-le-male-elixir",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Le Male Elixir",
    subName: "Parfum",
    perfumer: "Quentin Bisch",
    gender: "nam",
    image: "/images/products/jpg-le-male-elixir-bottle.jpg",
    images: [{ url: "/images/products/jpg-le-male-elixir-bottle.jpg", source: "studio", caption: "Ảnh chai JPG Le Male Elixir" }, { url: "/images/products/jpg-le-male-elixir-main.jpg", source: "studio", caption: "Ảnh chi tiết JPG Le Male Elixir" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Le Male Elixir là phiên bản đậm nhất, ngọt nhất và tạo hiệu ứng mạnh nhất trong family Le Male hiện tại. Nếu Le Male gốc vui vẻ, Le Male Le Parfum sang hơn thì Elixir đi thẳng vào hướng mật ong, vanilla, amber và oải hương đậm, tạo cảm giác rất dày, rất quyến rũ và rất buổi tối. Đây là kiểu mùi sinh ra để nổi bật.

Điểm mạnh của chai này là sức hút rất trực diện. Nó không chơi kiểu tinh tế khó hiểu, mà chọn cách gây ấn tượng rõ bằng độ ngọt ấm, cảm giác sang tối và độ bám mùi mạnh. Trong gu dùng nước hoa ở Việt Nam, đây là kiểu chai dễ được khen ở môi trường đi chơi, hẹn hò, quán bar, tiệc đêm hoặc những dịp muốn thơm nổi bật rõ ràng.

## Diễn biến trên da
Mở đầu có chút oải hương và bạc hà mang dấu ấn Le Male, nhưng rất nhanh phần vanilla, mật ong và hổ phách kéo tổng thể sang màu ngọt đậm. Trên da ấm, Elixir lên cực kỳ dày, mượt và có cảm giác gần như syrupy nếu xịt nhiều.

Drydown là nơi chai này thể hiện đúng bản chất: ngọt, ấm, nặng và rất ôm da. Cảm giác sang theo kiểu hiện đại, sexy, hơi flashy chứ không understated. Nhược điểm cũng đến từ chính điểm mạnh này: nếu trời quá nóng hoặc dùng quá tay, nó rất dễ trở nên nặng và gây ngợp.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Le Male Elixir có hiệu năng rất tốt: lưu hương thường 8-10 giờ, tỏa hương mạnh trong những giờ đầu. Nó hợp nhất cho chiều tối, ban đêm, phòng máy lạnh, thời tiết mát hoặc những dịp cần mùi hương có độ hiện diện cao.

Ở Việt Nam, nên ưu tiên dùng buổi tối và tiết chế số lần xịt. Đây không phải chai lý tưởng để đi làm ban ngày hoặc dùng trong môi trường kín chật. Ưu điểm là bám khỏe, dễ gây ấn tượng; nhược điểm là độ linh hoạt thấp và không hợp người ghét mùi ngọt đậm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam tối, ngọt, mạnh và đúng kiểu compliment beast cho date night hoặc đi chơi, Le Male Elixir là lựa chọn rất rõ ràng. Nó hợp người trẻ, thích vibe ăn mặc nổi bật và muốn mùi hương góp phần tạo spotlight.

Nên mua khi mày đang cần một chai buổi tối có sức công phá. Nếu mày thích sự tinh tế, kín đáo hoặc khí hậu dùng chủ yếu là trưa nóng ngoài trời, nên cân nhắc kỹ.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Oải hương" }, { name: "Bạc hà" }],
    middleNotes: [{ name: "Vani" }, { name: "An tức hương" }],
    baseNotes: [{ name: "Mật ong" }, { name: "Đậu Tonka" }, { name: "Thuốc lá" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "jpg-le-male-edt",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Le Male",
    subName: "Eau de Toilette",
    perfumer: "Francis Kurkdjian",
    gender: "nam",
    image: "/images/products/jpg-le-male-edt-bottle.jpg",
    images: [{ url: "/images/products/jpg-le-male-edt-bottle.jpg", source: "studio", caption: "Ảnh sản phẩm JPG Le Male EDT (chai và hộp)" }, { url: "/images/products/jpg-le-male-edt-main.jpg", source: "studio", caption: "Ảnh chi tiết JPG Le Male EDT" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Le Male EDT là một tượng đài của nước hoa nam hiện đại: oải hương, bạc hà, vanilla và chút gia vị ấm được phối theo cách vừa dễ nhớ vừa rất có bản sắc. Dù ra đời đã lâu, chai này vẫn giữ được sức sống vì nó vừa vui, vừa gợi cảm, vừa có độ nhận diện rất cao. Đây là kiểu mùi nam không cố tỏ ra quá nghiêm túc, mà thiên về hấp dẫn, trẻ trung và có phần hơi tinh nghịch.

Điểm hay của Le Male nằm ở việc nó tạo ra một DNA barbershop ngọt mà số đông vẫn thấy dễ chịu. Ở Việt Nam, chai này hợp với người trẻ, người thích những mùi có màu sắc rõ và muốn một option dễ dùng cho đi chơi, hẹn hò nhẹ hoặc dùng hằng ngày khi thích phong cách hơi nổi bật hơn mức an toàn.

## Diễn biến trên da
Mở đầu là bạc hà và oải hương khá rõ, tạo cảm giác mát và sạch. Nhưng chỉ một lúc sau, vanilla và tonka bắt đầu hiện lên, khiến tổng thể chuyển sang ngọt ấm và mềm hơn. Chính sự chuyển từ mát sang ấm này là thứ làm Le Male dễ nhớ.

Drydown của chai này khá dễ chịu: ngọt, thơm, có chút xà phòng sạch nhưng không quá formal. Nó không quá phức tạp, nhưng rất hiệu quả. Nhược điểm là với người chơi nước hoa lâu năm, Le Male có thể bị xem là hơi quen và thiếu độ mới mẻ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Le Male EDT có hiệu năng khá ổn, lưu hương khoảng 6-8 giờ, tỏa hương vừa đến khá. Nó dùng tốt cho chiều tối, đi chơi, gặp gỡ bạn bè, hẹn hò casual hoặc những ngày mát.

Trong khí hậu Việt Nam, vẫn dùng được ban ngày nếu tiết chế, nhưng sẽ đẹp hơn vào tối hoặc trong không gian điều hòa. Ưu điểm là dễ ngửi, dễ thích, dễ nhớ; nhược điểm là không phải mùi quá sang hoặc quá trưởng thành nếu so với các flankers mới hơn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam kinh điển, có màu sắc riêng, dễ gây thiện cảm và vẫn đủ thú vị để không bị nhạt, Le Male EDT là lựa chọn hợp lý. Nó hợp người trẻ, người mới chơi nước hoa hoặc ai muốn một chai vui và có chất riêng hơn nhóm fresh phổ thông.

Nên mua khi mày muốn một mùi linh hoạt cho đi chơi và dùng casual. Nếu mày đang tìm một chai cực kỳ hiện đại hoặc cực kỳ sang tối, các bản flankers như Le Parfum hay Elixir có thể hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Oải hương" }, { name: "Bạc hà" }, { name: "Bạch đậu khấu" }, { name: "Cam bergamot" }, { name: "Ngải cứu" }],
    middleNotes: [{ name: "Quế" }, { name: "Hoa cam" }, { name: "Thì là Ai Cập" }],
    baseNotes: [{ name: "Vani" }, { name: "Đậu Tonka" }, { name: "Hổ phách" }, { name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "creed-absolu-aventus",
    brandSlug: "creed",
    brand: "CREED",
    name: "Absolu Aventus",
    subName: "Eau de Parfum",
    perfumer: "House of Creed",
    gender: "nam",
    image: "/images/products/creed-absolu-aventus-main.jpg",
    images: [{ url: "/images/products/creed-absolu-aventus-main.jpg", source: "studio", caption: "Ảnh sản phẩm Creed Absolu Aventus (chai và hộp)" }, { url: "/images/products/creed-absolu-aventus-bottle.jpg", source: "studio", caption: "Ảnh chai Creed Absolu Aventus" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Absolu Aventus là cách Creed làm mới DNA Aventus theo hướng đậm hơn, tối hơn và bóng bẩy hơn. Nó vẫn mang tinh thần trái cây-gỗ sang trọng quen thuộc, nhưng thêm chiều sâu, độ dày và cảm giác modern luxury rõ hơn. Đây không phải bản thay thế hoàn toàn Aventus gốc, mà là một biến thể sang tối, ít airy hơn và có phần sắc nét hơn.

Điểm hấp dẫn của Absolu Aventus là nó giữ được khí chất thành đạt, gọn gàng của Aventus nhưng cho cảm giác ăn diện hơn. Ở thị trường Việt Nam, dòng DNA này vốn đã rất dễ được đón nhận, nên bản Absolu sẽ hợp với người thích vibe thành công, lịch sự nhưng muốn thêm chút lực và độ hiện diện cho những dịp quan trọng hơn.

## Diễn biến trên da
Mở đầu vẫn có nét trái cây sáng đặc trưng của Aventus, nhưng cảm giác không quá thoáng mà đậm và bóng hơn. Sau đó phần gỗ, nhựa và nền tối hơn xuất hiện, khiến tổng thể có chiều sâu và có cảm giác dressy hơn bản gốc.

Drydown là phần đẹp nhất nếu mày thích DNA Aventus theo hướng trưởng thành hơn. Nó vẫn sạch và sang, nhưng ít playful hơn. Nhược điểm là ai mê sự tươi sáng, thoáng và cân bằng cổ điển của Aventus gốc có thể thấy bản Absolu hơi nặng hơn mức cần thiết.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Absolu Aventus có hiệu năng khá tốt, thường lưu 7-9 giờ, tỏa hương vừa đến khá trong giai đoạn đầu. Nó hợp dùng ở môi trường công việc cao cấp, gặp khách, event buổi tối nhẹ, tiệc hoặc những ngày muốn lên mùi thật chỉn chu.

Trong khí hậu Việt Nam, chai này vẫn dùng tốt nhưng sẽ đẹp hơn ở thời tiết dễ chịu hoặc không gian máy lạnh. Ưu điểm là khí chất sang, hiện đại và nhận diện tốt; nhược điểm là giá cao và khó làm hài lòng tất cả fan Aventus gốc vì hai hướng tính cách không hoàn toàn giống nhau.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích DNA Aventus nhưng muốn bản đậm hơn, bóng hơn và có cảm giác luxury rõ hơn, Absolu Aventus rất đáng thử. Nó hợp người đã có gu, thích sự thành công, gọn gàng và muốn mùi hương nâng outfit lên một nấc.

Nên mua khi mày cần một chai premium cho dịp quan trọng hoặc muốn sưu tập thêm một twist khác của Aventus. Nếu mày chỉ cần một chai linh hoạt nhất trong nhóm này, bản Aventus gốc vẫn dễ sống chung hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Bưởi" }, { name: "Cam bergamot" }, { name: "Tiêu hồng" }, { name: "Nho đen" }, { name: "Dứa" }, { name: "Nhục đậu khấu" }, { name: "Đinh hương" }],
    middleNotes: [{ name: "Gừng" }, { name: "Quế" }, { name: "Thanh yên" }, { name: "Bạch đậu khấu" }, { name: "Hoa hồng" }],
    baseNotes: [{ name: "Hoắc hương" }, { name: "Cỏ hương bài" }, { name: "Rêu sồi" }, { name: "Ambroxan" }, { name: "Xạ hương" }, { name: "Gỗ đàn hương" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "nishane-ani",
    brandSlug: "nishane",
    brand: "NISHANE",
    name: "Ani",
    subName: "Extrait de Parfum",
    perfumer: "Cécile Zarokian",
    gender: "unisex",
    image: "/images/products/nishane-ani-main.jpg",
    images: [{ url: "/images/products/nishane-ani-main.jpg", source: "studio", caption: "Ảnh sản phẩm Nishane Ani (chai và hộp)" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Ani là một trong những chai vanilla niche nổi bật nhất vì nó không ngọt theo kiểu bánh kẹo đơn thuần, mà kết hợp vanilla với gia vị, gỗ và chút xanh để tạo cảm giác vừa ấm vừa có cấu trúc. Đây là kiểu mùi dày, sang và có độ ôm rất đẹp trên da, phù hợp người thích những chai mang cảm giác comfort nhưng vẫn đủ cá tính.

Điểm mạnh của Ani là vanilla ở đây vừa ngon vừa có chiều sâu. Nó không quá trẻ con, cũng không thiên hẳn gourmand, nên nam hay nữ dùng đều ra chất riêng. Trong điều kiện Việt Nam, Ani hợp nhất với chiều tối, thời tiết mát hoặc môi trường điều hòa, nơi lớp vanilla-gia vị của nó có không gian để phát huy hết độ đẹp.

## Diễn biến trên da
Mở đầu thường có cảm giác tươi nhẹ từ citrus và chút cay của gia vị, nhưng nhanh chóng phần vanilla bắt đầu mở ra. Sau đó gỗ và nền ấm đỡ phía sau giúp mùi không bị kẹo hay quá mượt theo kiểu tuyến tính.

Trên da, Ani phát triển khá tròn: đầu hơi sáng, giữa ấm dần, cuối mềm và dày. Drydown rất dễ gây nghiện nếu mày thích vanilla có chiều sâu. Điểm trừ là với người không hợp vanilla hoặc thích sự khô thoáng, Ani có thể hơi dày và quá hiện diện.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Ani có hiệu năng tốt, lưu hương khoảng 8-10 giờ và tỏa hương khá trong những giờ đầu. Nó hợp dùng cho tối, hẹn hò, đi chơi, thời tiết mát, mùa mưa hoặc những ngày muốn một mùi vừa sang vừa ấm.

Ở Việt Nam, không nên xịt quá tay nếu trời nóng, vì vanilla dày dễ thành ngọt nặng. Ưu điểm là bám khỏe, khác biệt và rất niche; nhược điểm là độ đa dụng ban ngày không cao bằng các mùi sáng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày đang tìm một chai vanilla niche vừa đẹp, vừa có chiều sâu, vừa không quá đại trà, Ani là ứng viên rất mạnh. Nó hợp người thích mùi ấm, ôm da và có cá tính rõ hơn mặt bằng vanilla phổ thông.

Nên mua khi mày cần một chai tối, mùa mát hoặc hẹn hò. Nếu mày chủ yếu dùng giữa trưa nóng hoặc thích mùi rất fresh, Ani không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Gừng" }, { name: "Cam bergamot" }, { name: "Tiêu hồng" }, { name: "Lá xanh" }],
    middleNotes: [{ name: "Bạch đậu khấu" }, { name: "Nho đen" }, { name: "Hoa hồng Thổ Nhĩ Kỳ" }],
    baseNotes: [{ name: "Vani" }, { name: "An tức hương" }, { name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }, { name: "Hoắc hương" }, { name: "Long diên hương" }, { name: "Xạ hương" }],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-allure-homme-sport",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Allure Homme Sport",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Allure Homme Sport chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Allure Homme Sport là kiểu Chanel nam tươi, sạch và cực kỳ gọn gàng. Nó không quá ngọt như nhiều chai sport hiện đại, cũng không quá xanh hay quá aquatic, mà nằm ở điểm cân bằng rất đẹp giữa citrus, sự sạch sẽ và độ gỗ nhẹ phía sau. Đây là kiểu mùi khiến người mặc trông khỏe khoắn, sáng sủa và có gu.

Điểm mạnh của chai này là sự linh hoạt. Nó vừa đủ trẻ để dùng hằng ngày, vừa đủ sang để không bị tầm thường. Trong khí hậu Việt Nam, đây là một trong những kiểu mùi dễ dùng nhất vì lên sáng, thoáng và ít khi làm người xung quanh khó chịu.

## Diễn biến trên da
Mở đầu là citrus sạch và mát, sau đó các note gỗ, xạ hương và chút ngọt nhẹ làm tổng thể tròn hơn. Chai này không biến đổi quá nhiều tầng, nhưng mọi chuyển động đều rất mượt và hợp logic.

Drydown vẫn giữ tinh thần sạch-sáng đặc trưng, chỉ ấm hơn một chút. Nó không phải mùi cực kỳ cá tính, nhưng blend đẹp và ra đúng chất cao cấp dễ mặc. Nhược điểm là ai thích mùi đậm, tối hoặc quá riêng có thể thấy nó hơi an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Allure Homme Sport có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, đi học, đi chơi ban ngày, du lịch, vận động nhẹ hoặc dùng làm signature quanh năm.

Ở Việt Nam, chai này phát huy rất tốt nhờ tính sạch và thoáng. Ưu điểm là cực dễ mặc và có chất lượng hoàn thiện cao; nhược điểm là độ bùng nổ không mạnh bằng bản Eau Extreme.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam tươi, sạch, cao cấp và ít rủi ro, Allure Homme Sport là lựa chọn rất vững. Nó hợp người muốn một mùi signature sáng sủa, gọn gàng và không cần suy nghĩ quá nhiều.

Nên mua khi mày muốn một chai dùng ban ngày thật ổn. Nếu mày thích phiên bản ngọt ấm và nổi bật hơn, Eau Extreme sẽ hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-tuxedo",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Tuxedo",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Tuxedo chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Tuxedo là một trong những mùi patchouli-amber sang nhất của YSL theo hướng dressy, tối và cực kỳ tinh. Nó không nặng kiểu oud, không ngọt kiểu gourmand, mà quyến rũ bằng sự sạch tối, gia vị nhẹ, patchouli mượt và nền amber rất sang. Đây là kiểu mùi đúng với cái tên: mặc lên là thấy outfit đẹp hơn.

Điểm ăn tiền của Tuxedo là độ thanh lịch có khí chất. Nó vừa hiện đại vừa cổ điển, vừa sang vừa dễ tiếp cận hơn nhiều chai niche rất khó. Trong bối cảnh Việt Nam, đây là chai rất hợp cho tối, event, gặp gỡ lịch sự hoặc những lúc muốn một mùi hương làm phần mở rộng cho phong cách ăn mặc.

## Diễn biến trên da
Mở đầu có chút gia vị và độ sạch sáng rất vừa phải, sau đó patchouli cùng amber bắt đầu tạo khung chính. Cái hay là patchouli ở đây không bẩn, không quá earthy, mà mượt và rất polished.

Drydown của Tuxedo đẹp theo kiểu sang kín: hơi tối, hơi ấm, rất chỉn chu và giữ khí chất tốt. Nó không quăng quá nhiều tầng note vào mặt người ngửi, mà thắng ở tổng thể hoàn thiện. Nhược điểm là giá cao và ai thích mùi cực nổi, cực quái có thể thấy nó quá lịch thiệp.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Tuxedo có độ lưu hương tốt, thường 7-9 giờ; tỏa hương vừa đến khá. Nó hợp nhất cho tối, máy lạnh, event, tiệc hoặc những lúc mặc đồ có cấu trúc và muốn thơm theo hướng sang.

Ở Việt Nam, nên dùng buổi tối hoặc không gian điều hòa. Ưu điểm là rất sang và linh hoạt trong nhóm mùi dressy; nhược điểm là không phải chai dành cho mọi ngày hoặc mọi mood.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai sang tối, patchouli-amber thật đẹp và có chất high-end rõ ràng, Tuxedo là ứng viên rất mạnh. Nó hợp người thích phong cách chỉn chu, thanh lịch và muốn mùi hương đồng bộ với outfit.

Nên mua khi mày cần một chai event hoặc buổi tối cao cấp. Nếu mày ưu tiên sự tươi sáng, casual và giá dễ chịu hơn, nên cân nhắc hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-lhomme-ideal-parfum",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L'Homme Idéal Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN L'Homme Idéal Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L'Homme Ideal Parfum là phiên bản đậm hơn, tối hơn và sang hơn của dòng L'Homme Ideal. Nó vẫn giữ DNA hạnh nhân đặc trưng, nhưng được đẩy sâu hơn với nền da, gỗ và cảm giác ấm tối rõ ràng hơn Eau de Parfum. Đây là kiểu mùi dành cho người thích sự hấp dẫn có chiều sâu chứ không chỉ dừng ở ngọt dễ khen.

Điểm mạnh của bản Parfum là khí chất. Nó ít playful hơn EDP, ít sáng hơn, nhưng lại có độ chững và độ sang tốt hơn. Trong điều kiện Việt Nam, chai này hợp với tối, máy lạnh, hẹn hò hoặc người muốn một designer nam khác mặt bằng ngọt-fruity phổ thông.

## Diễn biến trên da
Mở đầu vẫn có nét hạnh nhân quen thuộc, nhưng rất nhanh phần nền tối, da và gỗ kéo mùi vào một không gian trưởng thành hơn. Mùi phát triển theo hướng dày hơn và dressy hơn, ít tươi hơn EDP.

Drydown của bản Parfum mềm, tối và quyến rũ kín. Nó không cần quá ồn ào để tạo ấn tượng. Nhược điểm là ai thích bản EDP vì tính dễ dùng và độ sáng có thể thấy bản này nghiêm hơn và ít linh hoạt hơn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L'Homme Ideal Parfum có hiệu năng tốt, khoảng 7-9 giờ lưu hương, tỏa hương vừa đến khá. Nó hợp nhất cho tối, hẹn hò, event hoặc những dịp cần một mùi nam sang và có dấu ấn riêng.

Ở Việt Nam, nên dùng buổi tối hoặc trong phòng điều hòa. Ưu điểm là khác biệt, đẹp và có chiều sâu; nhược điểm là không phải lựa chọn tối ưu cho ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích DNA L'Homme Ideal nhưng muốn một phiên bản đậm, tối và trưởng thành hơn, bản Parfum rất đáng thử. Nó hợp người thích mùi nam có độ sang và cá tính nhưng vẫn giữ độ wearable.

Nên mua khi mày cần một chai tối có bản sắc riêng. Nếu mới bắt đầu với dòng này, EDP thường dễ tiếp cận hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-vetiver",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Vétiver",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Vétiver chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Guerlain Vetiver là một chuẩn mực khác của nhóm vetiver nam: sáng, khô, xanh và rất chỉn chu. Nó không tối như Encre Noire, cũng không khoáng như Terre d'Hermes, mà đi theo hướng cỏ rễ, citrus và thảo mộc kiểu rất gentleman. Đây là loại mùi dùng lên người sẽ cho cảm giác sạch, gọn và cổ điển theo cách rất đẹp.

Điểm mạnh của Guerlain Vetiver là sự cân bằng. Nó vừa đủ cỏ-rễ để có cá tính, vừa đủ sáng để không bị nặng, vừa đủ lịch sự để đi làm rất hợp. Trong điều kiện Việt Nam, đây là chai khá lý tưởng cho người thích vetiver nhưng không muốn thứ gì quá tối hoặc quá khó dùng.

## Diễn biến trên da
Mở đầu là citrus sáng và một chút cay nhẹ, sau đó vetiver hiện lên rõ hơn với cảm giác xanh-khô rất đặc trưng. Lớp nền giữ tổng thể thanh và gọn, không bị earthy quá mức.

Drydown của Guerlain Vetiver khá ổn định: sạch, cỏ-rễ, hơi khô và rất chỉn chu. Nó không có nhiều góc cạnh drama, nhưng chính sự ổn định đó khiến chai này dùng rất lâu bền trong đời sống thực tế. Nhược điểm là ai cần mùi sexy hay quá hiện đại có thể thấy nó hơi classic.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Guerlain Vetiver có độ lưu hương vừa khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp cho đi làm, ban ngày, trời nóng, môi trường lịch sự hoặc những lúc cần một mùi nam trưởng thành mà không áp đảo.

Ở Việt Nam, chai này dùng rất tốt vào ban ngày nhờ sự khô sáng. Ưu điểm là dễ mặc và có gu; nhược điểm là không phải lựa chọn gây chú ý mạnh giữa đám đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai vetiver nam cổ điển, lịch sự và dùng cực ổn ở thời tiết nóng, Guerlain Vetiver là lựa chọn rất vững. Nó hợp người trưởng thành, thích gu clean gentleman và không cần mùi hương phải quá ồn.

Nên mua khi mày cần một chai signature đi làm hoặc muốn khám phá vetiver theo hướng dễ dùng. Nếu mày thích vetiver tối và nhiều cá tính, có thể sẽ hợp Encre Noire hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "frederic-malle-musc-ravageur",
    brandSlug: "frederic-malle",
    brand: "FRÉDÉRIC MALLE",
    name: "Musc Ravageur",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "FRÉDÉRIC MALLE Musc Ravageur chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Musc Ravageur là kiểu mùi ấm, da thịt và cực kỳ gợi cảm theo cách rất người lớn. Nó không sạch sáng, không playful, không dễ chiều; thay vào đó là xạ hương, vanilla, gia vị và nhựa thơm tạo thành một tổng thể nóng, sâu và rất ôm da. Đây là một trong những chai niche có sức hút xác thịt rõ rệt nhất.

Điểm mạnh của Musc Ravageur là nó không cố làm đẹp theo kiểu an toàn. Nó muốn quyến rũ, và nó làm điều đó rất trực diện nhưng vẫn có chất lượng blend cao. Trong điều kiện Việt Nam, đây là chai hợp buổi tối, máy lạnh, hẹn hò hoặc những dịp muốn một mùi hương thật sự có sức kéo cảm xúc.

## Diễn biến trên da
Mở đầu là gia vị và độ ấm khá nhanh, sau đó xạ hương cùng vanilla bắt đầu làm tổng thể trở nên dày và mềm hơn. Mùi không đi theo hướng sáng mở rồi tối dần, mà gần như ngay từ đầu đã rất ôm, rất thân mật.

Drydown của Musc Ravageur cực kỳ đẹp nếu mày thích skin scent có lực: ấm, mịn, quyến rũ và rất sâu. Nhược điểm là nó không hề dễ mặc trong thời tiết nóng hoặc những bối cảnh cần sự sạch sẽ trung tính.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Musc Ravageur có hiệu năng tốt, thường 7-9 giờ hoặc hơn; tỏa hương vừa đến khá. Nó hợp nhất cho tối, hẹn hò, không gian kín, trời mát hoặc những lúc muốn mùi hương mang tính thân mật rõ ràng.

Ở Việt Nam, nên dùng cực tiết chế và ưu tiên tối hoặc phòng lạnh. Ưu điểm là sexy, niche, rất có chiều sâu; nhược điểm là không đa dụng và khá kén thời tiết.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai niche thật sự gợi cảm, ấm và có cảm giác rất da thịt, Musc Ravageur là cái tên đáng thử nghiêm túc. Nó hợp người đã biết gu mình, thích mùi ôm sát và có sức nặng cảm xúc.

Nên mua khi mày cần một chai tối đặc biệt cho hẹn hò hoặc dịp riêng tư. Nếu mày cần mùi đi làm sáng sạch, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "jpg-la-belle-edp",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "La Belle",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "JEAN PAUL GAULTIER La Belle chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
La Belle là kiểu nữ ngọt trái cây-gourmand rất bắt tai của Jean Paul Gaultier: lê chín, vanilla và độ mềm ấm tạo cảm giác vừa vui vừa gợi cảm. Nó không thanh lịch kín đáo theo kiểu cổ điển, mà quyến rũ theo hướng hiện đại, ngọt, mướt và dễ gây chú ý hơn.

Điểm mạnh của La Belle là tính gây nghiện ngay từ đầu. Mùi hương dễ hiểu, dễ yêu và có khả năng tạo thiện cảm cao với số đông. Trong thị trường Việt Nam, đây là loại chai rất hợp với người thích mùi nữ rõ nét, hơi sexy, dùng đi chơi, hẹn hò hoặc những dịp muốn mùi hương ngọt nhưng vẫn có cá tính riêng.

## Diễn biến trên da
Mở đầu là quả lê mọng và sáng, sau đó vanilla cùng nền ấm làm mùi trở nên dày và mượt hơn. Chuyển động của La Belle khá tự nhiên: từ ngọt trái cây sang ngọt ấm gợi cảm mà không quá phức tạp.

Drydown là lớp vanilla-fruity mềm, ôm da và rất dễ tạo cảm giác gần gũi. Nó không quá niche hay nhiều lớp, nhưng hiệu quả rất cao trong thực tế. Nhược điểm là ai không thích mùi ngọt rõ hoặc sợ cảm giác gourmand sẽ thấy chai này hơi nhiều đường.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
La Belle có hiệu năng khá tốt, lưu hương khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp với buổi tối, đi chơi, hẹn hò, party nhẹ hoặc cả ban ngày nếu xịt tiết chế.

Trong khí hậu Việt Nam, chai này đẹp hơn vào chiều tối hoặc không gian điều hòa. Ưu điểm là dễ khen, dễ mặc và nữ tính rõ; nhược điểm là độ đa dụng văn phòng không cao bằng các mùi sạch hơn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ ngọt hiện đại, gợi cảm và dễ tạo thiện cảm, La Belle là lựa chọn rất mạnh. Nó hợp người thích fruity-vanilla và muốn mùi hương có độ quyến rũ rõ ràng.

Nên mua khi mày cần một chai đi chơi hoặc hẹn hò nổi bật. Nếu mày thích kiểu nữ thanh sạch hoặc ít ngọt, nên thử hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-midnight-poison",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Midnight Poison",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Midnight Poison chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Midnight Poison là kiểu nữ tối, bí ẩn và sang theo hướng rất điện ảnh. Nó không đi theo lối ngọt dễ thương hay hoa sáng, mà chọn một màu tối hơn với rose, patchouli, amber và cảm giác đêm rõ rệt. Đây là mùi hương dành cho người thích sự dramatic, có chút lạnh và có dấu ấn rất riêng.

Điểm khiến Midnight Poison được nhớ lâu là bầu không khí nó tạo ra. Chỉ cần lên da một lúc là đã thấy màu sắc khá khác so với các chai Poison khác: ít gourmand hơn Hypnotic, ít hoa trắng hơn Pure, mà nghiêng về bóng tối sang trọng và quyến rũ kín. Trong điều kiện Việt Nam, đây là chai hợp tối, thời tiết dịu hoặc môi trường điều hòa.

## Diễn biến trên da
Mở đầu có cảm giác sáng nhẹ nhưng rất nhanh chuyển vào phần rose-patchouli tối hơn. Sau đó amber và nền ấm kéo tổng thể trở nên sâu, mềm và bí ẩn hơn. Mùi phát triển khá liền mạch, thiên về mood hơn là show kỹ thuật notes.

Drydown của Midnight Poison ôm da, tối và gợi cảm theo kiểu sang lạnh. Nó không ngọt quá nhiều, nên dễ tạo cảm giác mature hơn các mùi nữ gourmand. Nhược điểm là người thích mùi vui, trẻ hoặc quá dễ dùng có thể thấy chai này hơi nghiêm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Midnight Poison có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp nhất cho buổi tối, hẹn hò, event, máy lạnh hoặc những lúc muốn mùi hương tạo không khí rõ.

Ở Việt Nam, nên dùng buổi tối và xịt vừa tay. Ưu điểm là khí chất, khác biệt và có chiều sâu; nhược điểm là độ đa dụng không cao và không phải gu số đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ tối, bí ẩn và có cảm giác sang kiểu cinematic, Midnight Poison rất đáng thử. Nó hợp người thích phong cách buổi tối, có chút drama và không ngại mùi hương có cá tính rõ.

Nên mua khi mày cần một chai tối khác biệt với thị trường ngọt-fruity phổ biến. Nếu mày muốn mùi sáng, sạch và dùng dễ mỗi ngày, đây không phải hướng đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-addict-edp-2014",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dior Addict Eau de Parfum 2014",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dior Addict Eau de Parfum 2014 chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dior Addict EDP 2014 là một mùi nữ ấm, vanilla trắng và rất quyến rũ theo cách bóng bẩy. Nó không còn hoàn toàn “quái” như ký ức về vài phiên bản Dior Addict cũ, nhưng vẫn giữ được DNA sensual rất rõ: đậm, nữ tính và hợp buổi tối. Đây là kiểu mùi dành cho người thích vanilla floral có độ hiện diện và thần thái sang.

Điểm mạnh của bản 2014 là nó cân bằng hơn: vẫn gợi cảm, vẫn dressy, nhưng wearable hơn với nhiều người. Trong điều kiện Việt Nam, chai này hợp tối, hẹn hò, không gian mát hoặc người muốn một mùi nữ sexy nhưng không quá khó tiếp cận.

## Diễn biến trên da
Mở đầu floral trắng và độ ấm lên khá nhanh, sau đó vanilla bắt đầu kéo tổng thể vào vùng mềm, dày và nữ tính hơn. Mùi phát triển mượt, ôm và khá tròn trịa.

Drydown là lớp vanilla trắng ấm, mềm và khá gây nghiện nếu hợp gu. Nó không hoàn toàn teen ngọt, mà có chất trưởng thành rõ. Nhược điểm là trời nóng dễ làm phần ngọt dày hơn mong muốn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dior Addict EDP 2014 có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, tiệc nhẹ, mùa mát hoặc khi muốn một mùi nữ quyến rũ mà vẫn sang.

Ở Việt Nam, nên ưu tiên buổi tối và phòng lạnh. Ưu điểm là sensual và dễ nhớ; nhược điểm là không phải kiểu floral nhẹ nhàng ban ngày.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích vanilla floral gợi cảm, ấm và bóng bẩy, Dior Addict EDP 2014 là lựa chọn rất đáng thử. Nó hợp người muốn một chai tối nữ tính rõ, có độ cuốn và dễ tạo dấu ấn.

Nên mua khi mày cần một chai date night hoặc evening scent. Nếu mày thích mùi trong, mát và nhẹ, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-lheure-bleue-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L'Heure Bleue",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN L'Heure Bleue chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L’Heure Bleue EDP là một kiệt tác cổ điển của Guerlain: powdery, floral, hơi melancholic và cực kỳ giàu cảm xúc. Nó không vui tươi hay hiện đại theo kiểu dễ dùng, mà mang vẻ đẹp mềm, tím, hơi buồn và rất sang. Đây là kiểu mùi giống một bức tranh lúc chạng vạng hơn là một chai nước hoa để lấy lòng số đông.

Điểm mạnh của L’Heure Bleue là chiều sâu cảm xúc. Nó có khí chất rất riêng, vừa nữ tính vừa mơ hồ. Trong điều kiện Việt Nam, chai này hợp hơn với người yêu nước hoa cổ điển, thích mùi phấn hoa có tính nghệ và không ngại chuyện kén gu.

## Diễn biến trên da
Mở đầu floral powder lên khá rõ, sau đó các lớp ấm và bột dần làm tổng thể tròn hơn, sâu hơn. Mùi phát triển chậm, mềm và rất giàu sắc thái nếu chịu ngửi kỹ.

Drydown là lớp phấn ấm, hoa mềm và cảm giác vintage cực đẹp. Nó không phải kiểu sexy trực diện, mà cuốn ở sự tinh tế và hơi buồn. Nhược điểm là tính hiện đại thấp và khó blind buy.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L’Heure Bleue EDP có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, thời tiết mát, không gian yên, những dịp thưởng mùi hơn là chạy compliment.

Ở Việt Nam, nên dùng vừa tay và đẹp hơn trong máy lạnh. Ưu điểm là cực kỳ có hồn; nhược điểm là kén người dùng và không phải chai cho mọi ngày.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày yêu Guerlain cổ điển và muốn một mùi floral powdery có chiều sâu cảm xúc lớn, L’Heure Bleue EDP rất đáng thử. Nó hợp người thích vẻ đẹp vintage, tinh tế và không chạy theo sự dễ hiểu.

Nên mua khi mày muốn một chai để thưởng thức thật sự. Nếu mày cần mùi hiện đại, sáng và dễ khen, nên đi hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-libre-intense",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Libre Intense",
    subName: "Eau de Parfum Intense",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Libre Intense chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Libre Intense là phiên bản dày, ấm và gợi cảm hơn của Libre EDP. Nó giữ bộ khung lavender - hoa cam hiện đại quen thuộc, nhưng tăng phần vanilla và chiều sâu để tổng thể trở nên tối hơn, nữ tính hơn và nổi hơn. Đây là kiểu mùi rất hợp người thích sự tự tin kiểu hiện đại, sang nhưng vẫn dễ gần.

Điểm mạnh của Libre Intense là khả năng dung hòa giữa cá tính và tính đại chúng. Nó đậm hơn Libre gốc nhưng không quá khó dùng. Trong bối cảnh Việt Nam, đây là chai đẹp cho tối, hẹn hò, đi chơi hoặc người muốn floral ấm thay vì floral sáng.

## Diễn biến trên da
Mở đầu vẫn có cảm giác floral aromatic quen thuộc, sau đó vanilla và nền ấm xuất hiện nhanh làm mùi dày và mượt hơn. Chuyển tầng rõ nhưng không gắt, rất nịnh mũi nếu mày đã thích Libre.

Drydown ấm, mịn và nữ tính hơn EDP. Lavender vẫn giữ bản sắc, nhưng tổng thể ngọt hơn và ít sắc hơn. Nhược điểm là có thể hơi dày nếu dùng mạnh tay lúc trời oi.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Libre Intense có độ lưu hương tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, mùa mát, không gian máy lạnh hoặc các dịp muốn mùi hương có độ hiện diện rõ hơn.

Ở Việt Nam, dùng đẹp nhất từ chiều tối trở đi. Ưu điểm là cuốn, sang và dễ được thích; nhược điểm là kém linh hoạt hơn Libre EDP trong ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Libre nhưng muốn bản quyến rũ và đậm hơn, Libre Intense là lựa chọn rất hợp lý. Nó hợp người thích floral ấm hiện đại và muốn một chai tối có sức hút tốt.

Nên mua khi mày cần một chai date night hoặc đi chơi tối. Nếu mày ưu tiên sự sáng, mát và dễ mặc cả ngày, nên chọn EDP.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "jpg-classique-edt",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "Classique",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "JEAN PAUL GAULTIER Classique chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Classique EDT là một biểu tượng của Jean Paul Gaultier: floral oriental nữ tính, gợi cảm và có chút retro rất đặc trưng. Nó không đi theo hướng trong trẻo hay tối giản, mà mang cảm giác corset, son phấn, đường cong và sân khấu. Đây là kiểu mùi có cá tính rõ, vừa mềm vừa khiêu khích theo cách rất JPG.

Điểm mạnh của Classique là khí chất. Nó không cần phải quá tối hay quá nặng mới sexy; nó cuốn bằng sự nữ tính có chủ đích. Trong điều kiện Việt Nam, chai này hợp với người thích mùi có màu sắc, không ngại chút vintage và muốn một floral oriental có thần thái.

## Diễn biến trên da
Mở đầu floral khá rõ, sau đó nền ấm và powder nhẹ bắt đầu làm tổng thể trở nên mượt, quyến rũ hơn. Mùi phát triển không quá hiện đại kiểu tối giản, mà giàu đường nét hơn.

Drydown mềm, ấm và rất nữ tính. Nó tạo cảm giác cổ điển nhưng không quá già. Nhược điểm là ai thích mùi sạch-sáng tối giản có thể thấy Classique hơi nhiều màu.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Classique EDT có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp tối, hẹn hò, đi tiệc nhẹ hoặc những lúc muốn mùi hương nữ tính có thần thái riêng.

Ở Việt Nam, chai này dùng được nếu tiết chế số lần xịt. Ưu điểm là cá tính và dễ nhận ra; nhược điểm là không phải gu của người thích mùi hiện đại rất sạch.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ cổ điển - gợi cảm - có màu sắc riêng, Classique EDT rất đáng thử. Nó hợp người thích phong cách nữ tính rõ và không ngại một chút retro.

Nên mua khi mày muốn một mùi mang thần thái hơn là chỉ thơm dễ chịu. Nếu mày thích tối giản, nên test kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-spiritueuse-double-vanille",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Spiritueuse Double Vanille",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Spiritueuse Double Vanille chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Spiritueuse Double Vanille là một trong những chai vanilla cao cấp nhất của Guerlain: boozy nhẹ, vanilla sâu, nhựa thơm và gỗ mềm hòa vào nhau theo cách cực kỳ sang. Nó không phải vanilla bánh kẹo đơn giản, mà là vanilla có chiều sâu, có bóng tối và có cảm giác rất couture.

Điểm khiến chai này đắt giá là cách nó làm vanilla trở nên trưởng thành. Mùi hương mềm nhưng không yếu, ngọt nhưng không non, ôm da nhưng không nhàm. Ở Việt Nam, đây là chai rất hợp cho tối, máy lạnh, người yêu vanilla nhưng đã chán các hướng gourmand phổ thông.

## Diễn biến trên da
Mở đầu có sắc boozy nhẹ và vanilla mở ra rất đẹp, sau đó nhựa thơm và gỗ làm nền khiến mùi sâu hơn. Toàn bộ quá trình phát triển rất mượt, rất liền và ít góc gắt.

Drydown là điểm mạnh lớn nhất: vanilla tối, ấm, sang và cực kỳ ôm da. Nó mang cảm giác đắt tiền rõ ràng. Nhược điểm là không phải vanilla dễ chiều cho số đông, và hiệu quả đẹp nhất nằm ở khoảng cách gần chứ không phải tỏa ồn ào.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Spiritueuse Double Vanille có độ lưu hương tốt, khoảng 7-9 giờ; tỏa hương vừa. Nó hợp nhất cho tối, hẹn hò, không gian riêng, thời tiết mát hoặc những lúc muốn một mùi hương mang cảm giác sang tinh tế.

Ở Việt Nam, nên dùng tiết chế và ưu tiên buổi tối. Ưu điểm là vanilla cực đẹp và sang; nhược điểm là giá cao và không phải lựa chọn ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai vanilla niche/cao cấp thật sự tinh và có chiều sâu, Spiritueuse Double Vanille là lựa chọn rất mạnh. Nó hợp người yêu vanilla nhưng muốn một tầng sang và trưởng thành hơn hẳn mặt bằng chung.

Nên mua khi mày cần một chai tối, gần gũi, sang và có sức hút mềm. Nếu mày muốn vanilla dễ khen, dễ dùng đại trà, có thể còn nhiều hướng đơn giản hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-allure-edp",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Allure",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Allure chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Allure EDP là một mùi nữ rất Chanel: mềm, sang, cân bằng và cực kỳ dễ sống cùng. Nó không phải kiểu floral ồn ào hay gourmand đậm, mà là một hỗn hợp rất đẹp của hoa, độ ấm nhẹ, chút powder và sự thanh lịch tổng thể. Đây là chai dành cho người thích mùi nữ trưởng thành nhưng không quá nghiêm hay quá cổ.

Điểm mạnh của Allure EDP là tính toàn diện. Nó dùng đi làm được, đi ăn tối được, mặc đẹp hay mặc thường ngày đều không lạc quẻ. Trong điều kiện Việt Nam, chai này đặc biệt hợp với người muốn một mùi nữ sang nhẹ, không gây mệt và không đòi hỏi phải “đúng mood” mới dùng được.

## Diễn biến trên da
Mở đầu mềm và khá tròn, floral xuất hiện rõ nhưng không gắt, sau đó nền ấm cùng cảm giác hơi powder giúp tổng thể trở nên sang và chỉn chu hơn. Mùi phát triển mượt, gần như không có đoạn nào thô.

Drydown là lớp floral ấm mềm, thanh lịch và rất dễ chịu. Nó không tạo cú sốc lớn, nhưng cực kỳ bền cảm tình. Nhược điểm là ai thích cá tính mạnh có thể thấy Allure hơi quá “đẹp an toàn”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Allure EDP có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ, hẹn hò nhẹ, tiệc nhỏ hoặc dùng như một chai nữ signature rất bền vững.

Ở Việt Nam, chai này dùng khá khỏe vì cân bằng tốt. Ưu điểm là sang và linh hoạt; nhược điểm là không phải kiểu mùi nổi bật theo hướng drama.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai Chanel nữ mềm, sang và cực dễ ứng dụng, Allure EDP là lựa chọn rất mạnh. Nó hợp người thích thanh lịch trưởng thành nhưng vẫn gần gũi.

Nên mua khi mày muốn một chai signature nữ đa dụng. Nếu mày cần một mùi cực kỳ cá tính hoặc quá ngọt, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "les-liquides-imaginaires-blanche-bete",
    brandSlug: "les-liquides-imaginaires",
    brand: "LES LIQUIDES IMAGINAIRES",
    name: "Blanche Bête",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LES LIQUIDES IMAGINAIRES Blanche Bête chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Blanche Bete là kiểu mùi sữa-trắng-mịn rất đặc trưng, vừa airy vừa creamy, tạo cảm giác như một đám mây ngọt nhẹ phủ trên da. Nó không ngọt theo kiểu bánh kẹo rõ nét, cũng không floral theo hướng cổ điển, mà mang cảm giác trắng, mềm, hơi mơ màng và rất dễ gây nghiện với người hợp gu.

Điểm nổi bật của Blanche Bete là texture. Nó tạo ra cảm giác da được phủ một lớp sữa mềm và ánh sáng dịu, rất khác với nhiều mùi ngọt đậm hoặc xạ hương sạch thông thường. Ở Việt Nam, đây là chai hợp với người thích mùi personal scent cao cấp, nữ tính theo hướng mềm mịn hơn là sắc nét.

## Diễn biến trên da
Mở đầu khá mềm và sáng, sau đó phần kem-sữa và chút ngọt nhẹ bắt đầu rõ hơn. Mùi phát triển tương đối mượt, ít góc cạnh và thiên về cảm giác hơn là tách note.

Drydown cực kỳ ôm da: trắng, mịn, hơi ngọt và rất skin-like. Đây là kiểu mùi khiến người ngửi gần dễ thích. Nhược điểm là ai cần projection mạnh hoặc cấu trúc rõ ràng có thể thấy nó hơi mơ hồ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Blanche Bete có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa nhẹ, thiên về aura gần. Nó hợp đi làm, đi chơi nhẹ, hẹn hò, dùng hằng ngày hoặc khi muốn một mùi hương thật mềm trên da.

Ở Việt Nam, chai này dùng khá ổn vì không quá nặng. Ưu điểm là độc đáo ở texture và rất nịnh khoảng cách gần; nhược điểm là tính statement không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích những mùi trắng-sữa-mịn, ôm da và có cảm giác rất riêng, Blanche Bete là một cái tên đáng thử. Nó hợp người yêu mùi hương mềm, mơ và không muốn đi theo lối ngọt ồn ào.

Nên mua khi mày cần một chai personal scent cao cấp. Nếu mày thích mùi có lực mạnh hoặc cực kỳ rõ note, nên test kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "prada-infusion-diris",
    brandSlug: "prada",
    brand: "PRADA",
    name: "Infusion d'Iris",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PRADA Infusion d'Iris chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Infusion d'Iris là kiểu sạch sang rất Prada: iris mịn, xà phòng thanh, chút citrus và nền gỗ sáng tạo nên cảm giác tinh, sạch và gần như tối giản tuyệt đối. Đây không phải mùi hương để gây choáng hay tạo sex appeal trực diện, mà là mùi của sự tinh tươm, chỉn chu và gu thẩm mỹ kín.

Điểm mạnh của chai này là nó lên người như một lớp vải sạch cao cấp. Mọi thứ đều mượt, mỏng và gọn chứ không phô diễn. Trong bối cảnh Việt Nam, Infusion d'Iris hợp với người thích mùi sạch-sang, dùng đi làm, đi gặp gỡ nhẹ hoặc làm signature cho những ai không muốn mùi hương quá ồn.

## Diễn biến trên da
Mở đầu là citrus và cảm giác xà phòng sạch rất tinh. Sau đó iris bắt đầu lộ ra, nhưng không phấn đậm mà mịn, sáng và hiện đại. Toàn bộ diễn biến của chai này tương đối nhẹ nhàng, không có cú twist lớn mà chủ yếu duy trì trạng thái thanh và sạch.

Drydown của Infusion d'Iris rất mượt: hơi phấn nhẹ, sạch, sáng và rất ôm da. Nó đẹp theo kiểu gần gũi chứ không bùng nổ. Nhược điểm là ai thích mùi đậm, ngọt hoặc tỏa mạnh sẽ thấy chai này hơi kín.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Infusion d'Iris có độ lưu hương vừa khá, khoảng 5-7 giờ; tỏa hương nhẹ đến vừa. Nó cực hợp cho văn phòng, đi làm, ban ngày, thời tiết nóng hoặc môi trường cần sự thanh lịch kín đáo.

Ở Việt Nam, đây là kiểu mùi rất dễ dùng vì không ngọt và không nặng. Ưu điểm là sạch, tinh tế, ít rủi ro; nhược điểm là không tạo spotlight mạnh và có thể hơi hiền với người thích mùi đậm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai mùi sạch-sang theo hướng understated luxury, Infusion d'Iris là lựa chọn cực đẹp. Nó hợp người thích gu tối giản, chỉn chu và muốn mùi hương như một phần của phong cách hơn là tuyên bố lớn.

Nên mua khi mày cần một chai signature văn phòng hoặc dùng thường ngày thật thanh. Nếu mày cần hiệu năng mạnh hoặc cá tính cao, nên bổ sung thêm một chai khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "diptyque-philosykos-edp",
    brandSlug: "diptyque",
    brand: "DIPTYQUE",
    name: "Philosykos",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIPTYQUE Philosykos chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Philosykos EDP là một trong những chai mùi fig đẹp nhất vì nó tái hiện gần như trọn vẹn cảm giác cây sung: lá xanh, nhựa cây, gỗ và quả sung mềm. Đây không phải chỉ là mùi trái cây, mà là mùi của cả thân cây và không khí quanh nó. Kết quả là một mùi hương xanh, sang và rất artistic.

Điểm hay của Philosykos là nó vừa tự nhiên vừa rất có gu. Nó không cố gồng sang bằng độ dày hay độ tối, mà thuyết phục bằng độ chân thật và cách dựng không gian. Ở Việt Nam, đây là chai hợp với người thích mùi xanh sáng tạo, lifestyle, ít đụng hàng và dùng rất đẹp ban ngày.

## Diễn biến trên da
Mở đầu là lá sung và độ xanh rõ rệt, sau đó phần gỗ và quả sung bắt đầu làm tổng thể mềm hơn. EDP cho cảm giác tròn và có chiều sâu hơn bản EDT, nhưng vẫn giữ được tinh thần rất airy và tự nhiên.

Drydown là lớp gỗ xanh-mềm rất dễ chịu, vừa thanh vừa có chất nghệ. Nó không quá ngọt, không quá khô, mà cân bằng rất đẹp. Nhược điểm là ai thích mùi nổi mạnh hoặc cực kỳ sexy có thể thấy Philosykos quá calm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Philosykos EDP có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp với ban ngày, đi làm sáng tạo, cà phê, gallery, dạo phố hoặc làm signature cho người thích mùi xanh có bản sắc.

Trong khí hậu Việt Nam, chai này dùng rất tốt vào ngày nóng nhờ độ xanh thoáng. Ưu điểm là tự nhiên, tinh và khác biệt; nhược điểm là không phải kiểu compliment bomb đại trà.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai fig xanh đẹp, chân thật và có cá tính nghệ rõ, Philosykos EDP là lựa chọn cực đáng thử. Nó hợp người thích mùi tự nhiên, hiện đại và không bị công thức hóa.

Nên mua khi mày cần một chai ban ngày có gu. Nếu mày thích mùi tối, ngọt hoặc cực mạnh, đây không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "giardini-di-toscana-bianco-latte",
    brandSlug: "giardini-di-toscana",
    brand: "GIARDINI DI TOSCANA",
    name: "Bianco Latte",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIARDINI DI TOSCANA Bianco Latte chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Bianco Latte là một trong những chai gourmand hiện đại được nhắc nhiều vì nó đánh thẳng vào cảm giác sữa, caramel, vanilla và độ ngọt mềm rất dễ gây nghiện. Đây là kiểu mùi comfort scent điển hình: ấm, ngọt, mịn và khiến người ta liên tưởng đến món tráng miệng hơn là hoa cỏ truyền thống.

Điểm mạnh của Bianco Latte là sự dễ yêu. Nó không cố tỏ ra quá phức tạp, mà tập trung vào việc khiến người mặc thơm ngon, mềm và ấm. Ở Việt Nam, chai này hợp với người thích gourmand rõ, dùng tối, đi chơi, hẹn hò hoặc đơn giản là thích mùi ngọt ôm da.

## Diễn biến trên da
Mở đầu là ngọt mềm gần như ngay lập tức, sau đó lớp sữa, caramel và vanilla bắt đầu rõ hơn. Mùi phát triển khá tuyến tính, nhưng chính sự tuyến tính đó lại làm nó thỏa mãn nếu mày thích hướng gourmand.

Drydown vẫn là lớp ngọt sữa-vanilla rất rõ, mềm và bền. Nó tạo cảm giác gần gũi, đáng yêu và khá dễ gây nghiện. Nhược điểm là ai không hợp mùi ngọt hoặc sợ cảm giác dessert-like sẽ thấy nó hơi nhiều đường.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Bianco Latte có hiệu năng tốt, thường 7-9 giờ hoặc hơn; tỏa hương vừa đến khá. Nó hợp tối, mùa mát, máy lạnh, hẹn hò hoặc những lúc muốn thơm theo kiểu ấm áp dễ chịu.

Ở Việt Nam, nên dùng nhẹ tay nếu trời nóng. Ưu điểm là gourmand rất rõ và cực kỳ nịnh khoảng cách gần; nhược điểm là độ đa dụng ban ngày thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích mùi sữa-caramel-vanilla mềm và muốn một chai gourmand rất thẳng thắn, Bianco Latte là lựa chọn rất đáng cân nhắc. Nó hợp người yêu comfort scent và không ngại một mùi hương ngọt rõ từ đầu đến cuối.

Nên mua khi mày cần một chai tối hoặc thời tiết mát thật ôm da. Nếu mày thích sự khô, sạch hoặc ít ngọt, nên tránh hướng này.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chloe-nomade-edp",
    brandSlug: "chloe",
    brand: "CHLOÉ",
    name: "Nomade",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHLOÉ Nomade chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Nomade EDP là một mùi nữ hiện đại rất đẹp theo hướng fruity-chypre sáng, khô nhẹ và có tinh thần tự do. Nó không ngọt đậm như nhiều mùi nữ phổ thông, mà tạo cảm giác thanh, có chuyển động và rất “city chic”. Đây là một chai hợp với người muốn nữ tính nhưng không bánh bèo, có gu mà vẫn dễ dùng.

Điểm mạnh của Nomade là sự cân bằng giữa mềm và sắc. Nó có trái cây nhưng không kẹo, có hoa nhưng không quá bồng bềnh. Trong điều kiện Việt Nam, chai này hợp đi làm, đi chơi ban ngày, du lịch hoặc người thích mùi nữ thanh hiện đại.

## Diễn biến trên da
Mở đầu có trái cây sáng và cảm giác khô nhẹ khá rõ, sau đó phần hoa cùng nền gỗ/chypre làm tổng thể đứng form hơn và sang hơn. Mùi phát triển gọn, thông minh và không bị sến.

Drydown là lớp trái cây - hoa khô nhẹ, thanh lịch và hơi bụi phố. Nó rất hợp với phong cách smart-casual. Nhược điểm là ai thích floral ngọt ôm hoặc gourmand sẽ thấy Nomade hơi ít “độ nuông chiều”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Nomade EDP có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, ban ngày, gặp gỡ, du lịch, cà phê hoặc làm chai signature cho người thích vẻ nữ hiện đại, linh hoạt.

Ở Việt Nam, chai này dùng ổn vì khá thoáng. Ưu điểm là thanh, có gu và không quá đại trà; nhược điểm là không phải kiểu mùi tối quyến rũ.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ hiện đại, thanh và có tinh thần tự do, Nomade EDP là lựa chọn rất đáng thử. Nó hợp người thích trái cây - hoa theo hướng trưởng thành và không quá ngọt.

Nên mua khi mày cần một chai ban ngày có gu. Nếu mày chỉ thích mùi ngọt ôm hoặc cực kỳ nữ tính cổ điển, nên test trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-allure-homme-edition-blanche",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Allure Homme Édition Blanche",
    subName: "Eau de Parfum",
    perfumer: "Jacques Polge",
    gender: "nam",
    image: "/images/products/chanel-allure-edition-blanche-main.jpg",
    images: [{ url: "/images/products/chanel-allure-edition-blanche-main.jpg", source: "studio", caption: "Ảnh chai Chanel Allure Homme Édition Blanche" }, { url: "/images/products/chanel-allure-edition-blanche-bottle.jpg", source: "studio", caption: "Ảnh chi tiết Chanel Allure Homme Édition Blanche" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Allure Homme Edition Blanche là kiểu Chanel nam rất tinh: citrus sáng, kem chanh, gỗ đàn hương và vanilla nhẹ được phối theo cách cực kỳ sạch và sang. Nó không phải một chai fresh thuần, cũng không phải gourmand rõ rệt, mà nằm giữa hai thế giới đó: vừa sáng, vừa mượt, vừa lịch sự. Đây là kiểu mùi khiến người mặc trông gọn gàng và có gu hơn ngay lập tức.

Điểm ăn tiền của Edition Blanche nằm ở sự thanh lịch rất kiểu Chanel. Nó không ồn, không phô, không cố gây chú ý quá mạnh, nhưng chất lượng blend và cảm giác cao cấp thể hiện rất rõ. Ở Việt Nam, đây là chai rất hợp với người thích mùi citrus có chiều sâu, dùng ban ngày, đi làm, đi café hoặc gặp gỡ nhẹ nhưng vẫn muốn toát ra cảm giác sang sạch.

## Diễn biến trên da
Mở đầu là chanh và bergamot khá sáng, tạo cảm giác tươi và sắc. Nhưng chỉ sau một lúc, phần vanilla và gỗ bắt đầu làm mùi hương mềm lại, khiến tổng thể giống như lớp kem chanh mịn phủ trên nền gỗ sạch. Chính sự chuyển từ sáng sang mượt này làm chai rất dễ nghiện.

Drydown của Edition Blanche khá đẹp: không ngọt quá, không khô quá, mà cân bằng giữa citrus, creaminess và gỗ. Trên da nóng, phần chanh bay nhanh hơn, để lại lớp nền mềm và sang. Nhược điểm là ai thích projection mạnh hoặc độ bền cực khủng có thể thấy chai này hơi hiền so với giá.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Edition Blanche có độ lưu hương khá, thường khoảng 5-7 giờ; tỏa hương ở mức vừa phải, thiên về lịch sự hơn là nổi bật. Nó rất hợp cho ban ngày, môi trường điều hòa, văn phòng, đi brunch, đi hẹn nhẹ hoặc những dịp mặc áo sơ mi, polo, outfit sáng màu.

Trong khí hậu Việt Nam, chai này dùng rất ổn ở mùa nóng vì mở đầu sáng và sạch, nhưng cũng đủ chiều sâu để không bị nhạt. Ưu điểm là sang, tinh và khác đám đông; nhược điểm là hiệu năng không phải điểm mạnh nhất.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai Chanel nam thiên về thanh lịch, citrus sang và dễ mặc, Allure Homme Edition Blanche là lựa chọn rất đáng giá. Nó hợp người thích gu sạch, sáng, gọn gàng và không muốn mùi hương quá ngọt hay quá nặng.

Nên mua khi mày cần một chai ban ngày chất lượng cao, đặc biệt cho môi trường lịch sự. Nếu ưu tiên độ bền khủng hoặc vibe tối quyến rũ, nên có thêm một chai khác bổ sung.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Chanh Sicily" }, { name: "Cam bergamot" }, { name: "Tiêu hồng" }],
    middleNotes: [{ name: "Gỗ đàn hương" }, { name: "Gỗ tuyết tùng" }, { name: "Vani" }, { name: "Đậu Tonka" }],
    baseNotes: [{ name: "Hổ phách" }, { name: "Cỏ hương bài" }, { name: "Xạ hương" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "hermes-terre-dhermes-eau-givree",
    brandSlug: "hermes",
    brand: "HERMÈS",
    name: "Terre d'Hermès Eau Givrée",
    subName: "Eau de Parfum",
    perfumer: "Christine Nagel",
    gender: "nam",
    image: "/images/products/hermes-eau-givree-main.jpg",
    images: [{ url: "/images/products/hermes-eau-givree-main.jpg", source: "studio", caption: "Ảnh sản phẩm Hermès Terre d'Hermès Eau Givrée (chai và hộp)" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Terre d'Hermes Eau Givree là phiên bản tươi và mát nhất trong family Terre. Nó giữ lại tinh thần khoáng-gỗ đặc trưng của dòng này, nhưng đẩy phần citrus lạnh, sắc và sạch lên rõ rệt hơn. Cảm giác chung là một bản Terre sáng hơn, gọn hơn, dễ mặc hơn trong thời tiết nóng và có chất thanh lịch rất hợp khí hậu Việt Nam.

Điểm hay của Eau Givree là nó không biến Terre thành một chai fresh vô hồn. Dưới lớp citrus lạnh vẫn còn cái khung khoáng và gỗ khiến người dùng nhận ra ngay DNA Hermes. Kết quả là một chai vừa dễ tiếp cận hơn Terre gốc, vừa vẫn giữ được sự trưởng thành và gu kín vốn là điểm mạnh của dòng này.

## Diễn biến trên da
Mở đầu là citrus rất sáng và mát, tạo cảm giác như vỏ chanh và bưởi được làm lạnh. Sau đó phần khoáng và gỗ nổi lên, giữ cho mùi không bị mỏng. Vetiver và nền sạch giúp tổng thể không quá trẻ mà vẫn có tính đàn ông trưởng thành.

Drydown của Eau Givree vẫn sạch, hơi khô và có chiều sâu vừa đủ. Nó không dày, không trầm như bản Parfum hay EDT gốc, mà chọn hướng thanh và mát hơn. Nhược điểm là ai mê sự nặng đô, dày lớp và tính nghiêm túc đặc trưng của Terre cổ điển có thể thấy bản này hiền hơn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Eau Givree có hiệu năng khá ổn với một chai thiên fresh: lưu hương khoảng 5-7 giờ, tỏa hương vừa phải. Nó hợp nhất cho ban ngày, mùa nóng, đi làm, di chuyển, gặp khách hoặc những lúc cần thơm sạch mà vẫn sang.

Trong thời tiết Việt Nam, đây là một trong những bản Terre dễ dùng nhất. Nó hợp xuân hè, trời nắng, môi trường văn phòng lẫn casual. Ưu điểm là gọn, sáng, thanh lịch; nhược điểm là độ wow với người thích mùi tối sâu sẽ không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích tinh thần Terre d'Hermes nhưng muốn một phiên bản sáng và hợp thời tiết nóng hơn, Eau Givree rất đáng thử. Nó hợp người đi làm, thích gu thanh lịch, trưởng thành nhưng không muốn mùi quá khô hay quá nghiêm.

Nên mua khi mày cần một chai signature ban ngày mùa nóng. Nếu mày ưu tiên chiều sâu buổi tối, bản EDT hoặc Parfum vẫn hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Thanh yên" }],
    middleNotes: [{ name: "Bách xù" }, { name: "Tiêu Timur" }],
    baseNotes: [{ name: "Khoáng chất" }, { name: "Gỗ" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-habit-rouge-parfum",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Habit Rouge Parfum",
    subName: "Parfum",
    perfumer: "Delphine Jelk",
    gender: "nam",
    image: "/images/products/guerlain-habit-rouge-main.jpg",
    images: [{ url: "/images/products/guerlain-habit-rouge-main.jpg", source: "studio", caption: "Ảnh sản phẩm Guerlain Habit Rouge Parfum (chai và hộp)" }, { url: "/images/products/guerlain-habit-rouge-bottle.jpg", source: "studio", caption: "Ảnh chai Guerlain Habit Rouge Parfum" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Habit Rouge Parfum là tinh thần quý ông Pháp cổ điển được làm đậm và mượt hơn. DNA của nó xoay quanh citrus, vanilla, da, nhựa thơm và chút oriental cổ điển, tạo ra cảm giác rất lịch sự, sang và có chiều sâu. Đây không phải kiểu mùi trẻ trung chạy theo trend, mà là kiểu mùi có phong thái, có lịch sử và cần người mặc có chút gu để lên đúng chất.

Điểm cuốn của Habit Rouge Parfum là nó sang theo kiểu rất khác với designer hiện đại. Không phải ngọt gắt, không phải fresh sạch, mà là ấm, trầm, có phần dressy và có chút retro charm. Trong bối cảnh Việt Nam, chai này hợp hơn với người trưởng thành, thích suit, sơ mi, giày da hoặc những ai muốn một mùi hương có bản sắc quý ông rõ ràng thay vì safe choice.

## Diễn biến trên da
Mở đầu là citrus cổ điển nhưng không quá sáng, chỉ đủ để mở màn cho lớp nền nhanh chóng đi vào vanilla, da và nhựa thơm. Càng xuống da, mùi càng trở nên ấm, tròn và mang màu hơi oriental rất đặc trưng của Guerlain.

Drydown là phần đẹp nhất: vanilla mềm, da nhẹ và một cảm giác cổ điển sang trọng rất riêng. Nó không quá dễ hiểu với người mới, nhưng lại có chiều sâu và độ lưu dấu cao với người yêu phong cách classic. Nhược điểm là nếu mày chỉ quen mùi hiện đại tươi sáng, Habit Rouge Parfum có thể thấy hơi già dặn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Habit Rouge Parfum có độ lưu hương tốt, khoảng 7-9 giờ; tỏa hương vừa phải nhưng bền. Nó hợp nhất cho chiều tối, môi trường lịch sự, thời tiết mát, tiệc tối, gặp gỡ trang trọng hoặc những lúc ăn mặc chỉn chu.

Ở Việt Nam, chai này nên ưu tiên dùng trong phòng máy lạnh hoặc thời tiết dịu. Ưu điểm là đậm chất quý ông, có chiều sâu và khác biệt; nhược điểm là không đa dụng bằng các mùi hiện đại, và không phải ai cũng hợp ngay từ lần thử đầu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích nước hoa nam cổ điển, sang, có độ lịch lãm chứ không chạy theo sự dễ khen tức thời, Habit Rouge Parfum rất đáng để thử kỹ. Nó hợp người trưởng thành, gu classic hoặc người sưu tập muốn có một đại diện đậm chất Guerlain.

Nên mua khi mày cần một chai tối lịch sự và có khí chất quý ông. Nếu mày chỉ tìm một chai trẻ trung, dễ dùng hằng ngày, đây sẽ không phải lựa chọn đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Cam bergamot" }],
    middleNotes: [{ name: "Vani" }, { name: "Rum" }],
    baseNotes: [{ name: "Hoắc hương" }, { name: "Gỗ" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "penhaligons-halfeti",
    brandSlug: "penhaligons",
    brand: "PENHALIGON'S",
    name: "Halfeti",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PENHALIGON'S Halfeti chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Halfeti là kiểu mùi phương Đông-gỗ-gia vị rất sang, rất dày và có màu sắc luxury rõ rệt. Nó mang cảm giác nhựa thơm, gia vị, gỗ tối và chút hoa ẩn phía dưới, tạo nên một tổng thể bí ẩn, đậm và rất hợp thời điểm buổi tối. Đây là kiểu mùi bước vào phòng với khí chất rõ ràng, không cần la hét nhưng ai cũng nhận ra có sự hiện diện.

Điểm hay của Halfeti là nó cân bằng tốt giữa độ sang và độ dễ mặc. Nó không quá thử thách như một số mùi oud nặng, nhưng vẫn đủ tối và đủ sâu để không bị đại trà. Trong bối cảnh Việt Nam, chai này hợp với người thích mùi dressy, đi tiệc, đi tối hoặc muốn một chai signature cho những dịp cần cảm giác đắt tiền và khác biệt.

## Diễn biến trên da
Mở đầu là gia vị và độ ấm khá rõ, sau đó phần hoa-gỗ-nhựa thơm bắt đầu hiện lên, khiến mùi hương có cảm giác tròn hơn và sang hơn. Nó không phát triển theo hướng sáng mở rồi mới tối, mà khá nhanh chóng đi vào màu đậm đặc trưng của mình.

Drydown của Halfeti rất đẹp: ấm, tối, mượt và có cảm giác hơi resinous. Trên da nóng, mùi có thể dày hơn khá rõ, nên càng hợp môi trường mát hoặc phòng máy lạnh. Nhược điểm là nếu mày chỉ thích mùi sạch sáng ban ngày, Halfeti sẽ hơi quá nhiều lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Halfeti có hiệu năng tốt, lưu hương khoảng 7-9 giờ, tỏa hương vừa đến khá trong giai đoạn đầu. Nó hợp nhất cho tối, event, tiệc, hẹn hò, mùa mát hoặc không gian sang.

Ở Việt Nam, chai này nên ưu tiên dùng chiều tối và xịt vừa tay. Ưu điểm là sang, khác biệt và rất có chiều sâu; nhược điểm là độ đa dụng ban ngày không cao, giá cũng không dễ chịu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai niche/luxury có màu tối, sang và dùng tốt cho những dịp đặc biệt, Halfeti là lựa chọn rất đáng cân nhắc. Nó hợp người thích mùi đậm, có khí chất và không muốn đi theo lối dễ đoán.

Nên mua khi mày cần một chai buổi tối cao cấp. Nếu mày chỉ cần mùi hằng ngày dễ sống chung, Halfeti sẽ hơi nặng hơn nhu cầu.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-antaeus",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Antaeus",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Antaeus chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Antaeus là một trong những chai nam cổ điển mạnh nhất của Chanel: da, gia vị, thảo mộc và chiều tối rất rõ, tạo nên cảm giác quyền lực và hơi nghiêm. Đây không phải kiểu mùi để lấy lòng số đông, mà là kiểu mùi có cá tính lớn, mang hình ảnh người đàn ông trưởng thành, quyết đoán và không cần xu nịnh ai.

Điểm đặc biệt của Antaeus là nó rất old-school nhưng không tầm thường. Nó có độ dày, có khí chất và có chất Chanel theo cách rất mạnh tay. Trong điều kiện Việt Nam, chai này hợp hơn với người thực sự thích gu cổ điển và muốn một mùi hương mang bản sắc nam tính rõ ràng.

## Diễn biến trên da
Mở đầu là gia vị và thảo mộc khá mạnh, sau đó da và nền tối hiện lên rõ hơn. Antaeus không đi theo hướng mượt mà dễ thương, mà phát triển với sự chắc, có góc cạnh và nhiều cá tính.

Drydown của chai này bớt sắc hơn nhưng vẫn rất nam tính, hơi khô và có cảm giác da-gỗ rõ. Nhược điểm là người quen designer hiện đại có thể thấy nó khá nghiêm và hơi vintage.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Antaeus có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp với tối, thời tiết mát, môi trường trang trọng hoặc những dịp muốn mùi hương có trọng lượng rõ ràng.

Ở Việt Nam, nên dùng có tiết chế và đẹp hơn vào tối hoặc phòng lạnh. Ưu điểm là rất có bản sắc; nhược điểm là độ đại chúng thấp và không hợp số đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích một chai Chanel nam cổ điển, da-gia vị, có quyền lực và không hòa vào đám đông, Antaeus là cái tên đáng thử. Nó hợp người có gu mạnh, thích mùi nam cũ-school và không sợ sự kén chọn.

Nên mua khi mày muốn một mùi tuyên ngôn rõ. Nếu mày cần sự an toàn, sạch sáng và dễ khen, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "davidoff-cool-water",
    brandSlug: "davidoff",
    brand: "DAVIDOFF",
    name: "Cool Water",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DAVIDOFF Cool Water chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Cool Water là một tượng đài fresh nam vì nó định hình rất rõ cảm giác mát, sạch, biển và nam tính cho cả một thế hệ. Dù ngày nay có nhiều chai mới hơn, DNA của Cool Water vẫn còn giá trị nhờ sự đơn giản, dễ hiểu và dễ dùng. Đây là kiểu mùi tạo cảm giác vừa tắm xong, áo quần sạch sẽ, sẵn sàng cho một ngày nóng nực.

Điểm mạnh lớn nhất của Cool Water là tính ứng dụng. Nó không cần quá nhiều thời gian để hiểu, không kén môi trường và đặc biệt hợp khí hậu nóng. Trong bối cảnh Việt Nam, đây vẫn là một lựa chọn ổn cho người muốn một chai nam mát, gọn, dễ dùng đi làm, đi học, đi chơi ban ngày mà không cần đầu tư quá nhiều.

## Diễn biến trên da
Mở đầu cho cảm giác aquatic-aromatic rất rõ: mát, xanh và hơi biển. Sau đó phần thảo mộc và nền gỗ nhẹ hiện ra, giữ cho mùi không bị quá mỏng. Mọi thứ đi theo hướng rất thẳng, rất dễ hiểu và không có nhiều chuyển biến phức tạp.

Drydown của Cool Water vẫn giữ được tinh thần sạch mát đặc trưng, chỉ mềm hơn và sát da hơn. Nó không có chiều sâu lớn, nhưng bù lại cực dễ dùng. Nhược điểm là nếu so với các mùi fresh hiện đại cao cấp hơn, Cool Water có thể cho cảm giác hơi cổ điển và đơn giản.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Cool Water có độ lưu hương trung bình, khoảng 4-6 giờ; tỏa hương ở mức vừa nhẹ. Nó hợp nhất cho ban ngày, trời nóng, đi làm, đi học, tập thể thao nhẹ hoặc những dịp không muốn mùi hương quá hiện diện.

Trong thời tiết Việt Nam, đây là loại chai dễ phát huy vì bản chất mát và thoáng. Ưu điểm là dễ dùng, giá ổn và ít rủi ro; nhược điểm là hiệu năng không mạnh và độ độc đáo thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam mát-sạch kinh điển, dễ dùng và không phải suy nghĩ nhiều, Cool Water vẫn là cái tên có lý do để tồn tại. Nó hợp người mới chơi, người cần mùi đi học đi làm cơ bản hoặc muốn một chai fresh dùng thoải mái.

Nên mua khi mày muốn sự đơn giản và hiệu quả. Nếu mày đòi hỏi chiều sâu, độ bám mạnh hoặc sự sang trọng rõ rệt, sẽ có nhiều lựa chọn cao cấp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guy-laroche-drakkar-noir",
    brandSlug: "guy-laroche",
    brand: "GUY LAROCHE",
    name: "Drakkar Noir",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUY LAROCHE Drakkar Noir chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Drakkar Noir là một mẫu nước hoa nam cổ điển rất đặc trưng: xanh, aromatic, fougere và nam tính theo kiểu old-school. Nó cho cảm giác cạo râu sạch, áo sơ mi trắng, chút nghiêm và rất đàn ông theo phong cách thập niên trước. Với người quen các mùi hiện đại ngọt ấm, Drakkar Noir có thể gây cảm giác retro; nhưng với người thích classic masculine, đây lại là một biểu tượng.

Điểm đáng chú ý là Drakkar Noir không cố làm mềm hay làm dễ gần theo chuẩn mới. Nó giữ vẻ nam tính khô, hơi sắc và có phần khá trực diện. Ở Việt Nam, chai này sẽ hợp với người thích mùi barbershop cổ điển, muốn thứ gì đó khác hẳn nhóm fresh-sweet đương đại và không ngại một chút vintage attitude.

## Diễn biến trên da
Mở đầu là thảo mộc xanh rất rõ, tạo cảm giác sạch nhưng không hiền. Sau đó phần gia vị, lavender và nền gỗ hiện ra, làm tổng thể trở nên đậm chất fougere cổ điển hơn. Nó không biến chuyển nhiều nhưng luôn giữ được vibe nam tính rõ ràng.

Drydown là giai đoạn mùi ôm da hơn, bớt sắc nhưng vẫn giữ độ xanh-khô đặc trưng. Nhược điểm là với người trẻ quen mùi hiện đại, Drakkar Noir có thể bị xem là hơi cứng và thiếu sự mượt mà.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Drakkar Noir có độ lưu hương trung bình khá, khoảng 5-7 giờ; tỏa hương ở mức vừa. Nó hợp cho ban ngày, đi làm, thời tiết mát hoặc những dịp muốn một mùi nam cổ điển rõ tính cách.

Trong khí hậu Việt Nam, chai này vẫn dùng được nhưng đẹp hơn khi trời dịu hoặc trong môi trường điều hòa. Ưu điểm là cá tính và có lịch sử; nhược điểm là khá kén gu và không dễ được compliment như các mùi hiện đại hơn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích nước hoa nam cổ điển, fougere xanh khô và có vibe barbershop rất rõ, Drakkar Noir là một cái tên đáng thử ít nhất một lần. Nó hợp người thích gu vintage và muốn tránh xa sự đại trà.

Nên mua khi mày cần một chai có bản sắc old-school rõ. Nếu mục tiêu là mùi dễ khen, hiện đại và linh hoạt hơn, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "memo-african-leather",
    brandSlug: "memo-paris",
    brand: "MEMO PARIS",
    name: "African Leather",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MEMO PARIS African Leather chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
African Leather là kiểu mùi spicy-leather hiện đại rất có lực: gia vị, da, saffron và nền ấm khô tạo nên cảm giác sang, mạnh và có chút hoang dã được kiểm soát. Nó không phải kiểu da thuộc bụi bặm quá khó dùng, mà là loại da được làm bóng, có độ luxury và rất hợp cho những dịp muốn hiện diện rõ.

Điểm mạnh của African Leather là nó tạo hình ảnh rất nhanh. Chỉ vài phút đầu là đã thấy vibe sang tối, cá tính và hơi khác người. Trong bối cảnh Việt Nam, đây là chai hợp với tối, tiệc, date hoặc khi muốn một mùi hương có cá tính lớn hơn nhóm designer thông thường.

## Diễn biến trên da
Mở đầu là gia vị rất nổi bật, tạo cảm giác nóng, khô và sắc. Sau đó phần da và nền ấm xuất hiện, làm mùi hương sang hơn và dày hơn. Nó không quá nhiều tầng lớp cầu kỳ nhưng đường phát triển rất chắc, rất tự tin.

Drydown giữ được độ da thuộc ấm và chút nhựa thơm, tạo hiệu ứng ôm da nhưng vẫn có lực. Nếu da mày nóng, gia vị có thể lên rõ hơn và khiến tổng thể mạnh hơn khá nhiều. Nhược điểm là người thích mùi nhẹ, sạch hoặc ban ngày có thể thấy chai này quá đậm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
African Leather có hiệu năng tốt, lưu hương khoảng 7-9 giờ và tỏa hương khá trong giai đoạn đầu. Nó hợp nhất cho tối, máy lạnh, thời tiết mát, event hoặc những dịp muốn lên mùi có cá tính.

Ở Việt Nam, nên tiết chế số lần xịt và tránh dùng giữa trưa nóng. Ưu điểm là sang, độc đáo và có sức nặng; nhược điểm là độ đa dụng thấp và không phải chai dành cho số đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai da-gia vị cao cấp, có chất riêng và đủ nổi bật để dùng trong các dịp đặc biệt, African Leather là lựa chọn đáng cân nhắc. Nó hợp người thích mùi đậm, mạnh và mang tính tuyên ngôn.

Nên mua khi mày cần một chai buổi tối có khí chất. Nếu ưu tiên sự an toàn, thân thiện và dùng hằng ngày, đây không phải hướng đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-linstant-homme-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L'Instant de Guerlain pour Homme",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN L'Instant de Guerlain pour Homme chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L’Instant de Guerlain pour Homme EDP là một mùi nam rất đẹp theo hướng cacao, gia vị, gỗ và cảm giác ấm sang. Nó không phải kiểu ngọt trẻ hay fresh dễ đoán, mà có sự mềm, sâu và rất Pháp. Đây là kiểu mùi phù hợp với người thích nam tính lịch thiệp nhưng không muốn đi theo blue fragrance đại trà.

Điểm ăn tiền của chai này là độ tinh tế. Nó có sự quyến rũ kín, không ồn ào nhưng càng ngửi càng thấy gu. Trong khí hậu Việt Nam, chai này hợp cho tối, đi làm môi trường mát, hẹn hò hoặc những ai muốn một designer nam có chiều sâu hơn mặt bằng chung.

## Diễn biến trên da
Mở đầu có sắc cay và chút sáng vừa đủ, sau đó cacao cùng nền gỗ bắt đầu làm tổng thể mềm, ấm và chững hơn. Mùi chuyển tầng khá mượt, không gắt và giữ được cảm giác sang kín xuyên suốt.

Drydown là lớp cacao - gỗ ấm, hơi ngọt nhẹ và rất ôm da. Nó không bùng nổ nhưng rất dễ ghi điểm ở khoảng cách gần. Nhược điểm là với người thích mùi cực nam tính khô hoặc cực tươi, chai này có thể hơi “mềm”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L’Instant pour Homme EDP có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, hẹn hò, ăn tối, văn phòng máy lạnh hoặc những dịp muốn mùi hương lịch thiệp mà khác số đông.

Ở Việt Nam, chai này dùng đẹp nhất về chiều tối. Ưu điểm là sang, tinh và có bản sắc; nhược điểm là không quá hợp người thích mùi bùng nổ.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam ấm, sang, hơi gourmand nhẹ nhưng vẫn rất lịch thiệp, L’Instant de Guerlain pour Homme EDP rất đáng thử. Nó hợp người thích gu Pháp và muốn sự quyến rũ kín.

Nên mua khi mày cần một chai tối tinh tế. Nếu mày thích mùi quá fresh hoặc quá dark, nên cân nhắc kỹ.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "hermes-un-jardin-sur-le-nil",
    brandSlug: "hermes",
    brand: "HERMÈS",
    name: "Un Jardin Sur Le Nil",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "HERMÈS Un Jardin Sur Le Nil chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Un Jardin Sur Le Nil là một trong những mùi xanh tươi đẹp nhất của Hermès: trái cây xanh, lá, nước và cảm giác rất thanh, rất sạch. Nó không ngọt, không nặng, không cố sexy, mà đẹp ở sự nhẹ, tinh và có hình ảnh rất rõ. Đây là kiểu mùi phù hợp với người thích phong cách tối giản, nghệ và rất “thở được” trong khí hậu nóng.

Điểm mạnh của chai này là không khí. Nó tạo cảm giác như gió thổi qua khu vườn xanh gần sông, chứ không chỉ là tập hợp note. Trong bối cảnh Việt Nam, đây là một lựa chọn cực tốt cho ban ngày, mùa nóng hoặc những ai thấy đa số mùi phổ thông quá dày.

## Diễn biến trên da
Mở đầu là trái cây xanh và cảm giác watery rất rõ, sau đó lá và nền gỗ nhẹ giúp tổng thể bớt sắc và trở nên mượt hơn. Mùi phát triển khá nhẹ, nhưng có chiều rất đẹp nếu ngửi gần.

Drydown xanh mềm, sạch và cực kỳ dễ chịu. Nó không phải kiểu statement scent, mà là kiểu personal scent thanh lịch. Nhược điểm là người thích projection mạnh có thể thấy nó hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Un Jardin Sur Le Nil có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương nhẹ đến vừa. Nó hợp đi làm, đi học, ban ngày, mùa nóng, du lịch hoặc bất cứ lúc nào muốn mùi hương sạch và thoáng.

Ở Việt Nam, chai này dùng rất khỏe. Ưu điểm là thanh, tinh và ít gây mệt; nhược điểm là độ nổi bật không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai xanh watery có gu và dùng cực ổn trong thời tiết nóng, Un Jardin Sur Le Nil là lựa chọn rất đẹp. Nó hợp người thích mùi nhẹ, tự nhiên và thanh lịch hơn là phô trương.

Nên mua khi mày cần một chai ban ngày thật dễ sống. Nếu mày thích mùi đậm, ngọt hoặc cực sexy, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-dolce-vita",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dolce Vita",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dolce Vita chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dolce Vita là một mùi nữ ấm, cay nhẹ, gỗ và hơi fruity theo cách rất riêng của Dior thời cũ. Nó không floral sáng kiểu dễ mặc hiện đại, mà có độ vàng, dày và hơi retro rất đẹp. Đây là kiểu mùi gợi cảm theo hướng chững chạc, có cá tính và không cố làm hài lòng tất cả mọi người.

Điểm đặc biệt của Dolce Vita là màu sắc. Nó tạo cảm giác nắng vàng, vải vóc, da thịt ấm và chút xa hoa cổ điển. Trong khí hậu Việt Nam, chai này hợp với người thích mùi nữ trưởng thành, có chiều sâu và không ngại nét vintage.

## Diễn biến trên da
Mở đầu có sắc trái cây và gia vị nhẹ, sau đó nền gỗ ấm làm tổng thể trở nên dày hơn, mềm hơn và sang hơn. Mùi chuyển tầng khá mượt, không quá gắt nhưng luôn có sự hiện diện rõ.

Drydown là lớp ấm, mềm và hơi spicy rất đẹp. Nó không ngọt kiểu trẻ, mà quyến rũ theo hướng trưởng thành. Nhược điểm là người thích floral tươi hoặc gourmand hiện đại có thể thấy nó hơi lạ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dolce Vita có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, mùa mát, đi ăn tối, gặp gỡ hoặc những lúc muốn mùi hương có màu sắc riêng.

Ở Việt Nam, dùng đẹp nhất về chiều tối hoặc phòng lạnh. Ưu điểm là cá tính và sang; nhược điểm là không phải kiểu an toàn đại trà.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích mùi nữ ấm, hơi retro, hơi spicy và rất có thần thái, Dolce Vita là cái tên đáng thử. Nó hợp người muốn một chai có cá tính hơn mặt bằng floral hiện đại.

Nên mua khi mày cần một mùi nữ trưởng thành và khác biệt. Nếu mày thích sự trong trẻo dễ thương, nên test trước kỹ.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "nishane-hundred-silent-ways",
    brandSlug: "nishane",
    brand: "NISHANE",
    name: "Hundred Silent Ways",
    subName: "Extrait de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "NISHANE Hundred Silent Ways chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Hundred Silent Ways là kiểu floral vanilla rất nịnh mũi: sang, mềm, ngọt vừa và cực kỳ dễ tạo thiện cảm. Nó có chất niche ở độ mượt và độ dày, nhưng tổng thể lại khá dễ gần, khiến nhiều người xem đây là một trong những chai “dễ yêu” nhất của Nishane.

Điểm mạnh của chai này là độ cân bằng. Nó không quá gourmand, không quá floral, cũng không quá tối. Trong bối cảnh Việt Nam, đây là lựa chọn đẹp cho hẹn hò, đi chơi, đi tiệc nhẹ hoặc người muốn một mùi nữ/unisex mềm sang và dễ được thích.

## Diễn biến trên da
Mở đầu có cảm giác floral sáng vừa phải, sau đó vanilla và nền mềm bắt đầu làm tổng thể tròn hơn, dày hơn. Mùi phát triển mượt, không gắt và khá “ôm” ngay từ sớm.

Drydown là lớp vanilla floral mềm, sang và rất dễ ngửi. Nó không độc lạ tới mức gây tranh cãi, mà thiên về cảm giác đẹp và dễ sống cùng. Nhược điểm là người thích mùi quá khác biệt có thể thấy nó hơi an toàn trong thế giới niche.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Hundred Silent Ways có hiệu năng tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp hẹn hò, tối, tiệc nhẹ, dùng mùa mát hoặc khi muốn một mùi hương nịnh khoảng cách gần rất tốt.

Ở Việt Nam, nên tiết chế nếu trời nóng. Ưu điểm là dễ thích, sang và có độ cuốn; nhược điểm là tính đa dụng ban ngày không cao bằng các mùi sáng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai floral vanilla sang, mềm và dễ được yêu thích, Hundred Silent Ways rất đáng thử. Nó hợp người thích mùi hương đẹp, mượt và có chút xa xỉ mà không quá khó dùng.

Nên mua khi mày cần một chai tối nịnh mũi cao. Nếu mày thích mùi xanh, khô hoặc avant-garde, đây không phải hướng chính.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "jpg-la-belle-le-parfum",
    brandSlug: "jean-paul-gaultier",
    brand: "JEAN PAUL GAULTIER",
    name: "La Belle Le Parfum",
    subName: "Le Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "JEAN PAUL GAULTIER La Belle Le Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
La Belle Le Parfum là phiên bản đậm, tối và quyến rũ hơn rõ của La Belle EDP. Nó vẫn giữ chất lê ngọt và vanilla gợi cảm quen thuộc, nhưng được làm sâu hơn, dày hơn và có cảm giác buổi tối hơn hẳn. Đây là kiểu mùi rất hợp với người thích gourmand nữ hiện đại, sexy và có độ hiện diện cao.

Điểm mạnh của bản này là độ cuốn. Nó không chỉ ngọt, mà còn có chiều sâu đủ để không bị quá trẻ con. Trong điều kiện Việt Nam, chai này hợp hẹn hò, đi chơi tối, event nhẹ hoặc người muốn một mùi hương thật sự “lên mood”.

## Diễn biến trên da
Mở đầu là trái cây ngọt hiện lên khá nhanh, sau đó vanilla và nền ấm kéo tổng thể vào vùng mượt, dày và nữ tính hơn. Mùi chuyển tầng khá mịn, không bị gắt nếu dùng đúng liều.

Drydown là lớp ngọt ấm, mềm và rất ôm da. Nó tạo cảm giác quyến rũ theo kiểu gần gũi, không quá sắc lạnh. Nhược điểm là dùng nặng tay lúc trời nóng có thể hơi bí.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
La Belle Le Parfum có hiệu năng tốt, thường 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, đi chơi, mùa mát hoặc không gian máy lạnh.

Ở Việt Nam, chai này nên ưu tiên buổi tối. Ưu điểm là ngọt cuốn và dễ gây thiện cảm; nhược điểm là không quá đa dụng cho ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích mùi trái cây - vanilla gợi cảm và muốn một phiên bản đậm hơn La Belle gốc, bản Le Parfum rất đáng thử. Nó hợp người thích gourmand nữ hiện đại và muốn độ cuốn rõ ngay từ lần đầu ngửi.

Nên mua khi mày cần một chai tối nổi và sexy. Nếu mày ghét mùi ngọt, nên test trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-cinema",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Cinéma",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Cinéma chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Cinema là một mùi nữ rất YSL theo nghĩa cổ điển sang: hoa, vanilla, chút ấm và cảm giác ánh vàng rất rõ. Nó không phải floral sáng hiện đại, cũng không hẳn oriental đậm, mà đứng ở giữa với khí chất nữ tính, lấp lánh và rất “lên đèn”. Đây là kiểu mùi hợp người thích vẻ đẹp cổ điển nhưng vẫn đủ mềm để dùng thực tế.

Điểm đẹp của Cinema là thần thái. Nó cho cảm giác váy đẹp, ánh đèn, son môi và sự chỉn chu kiểu Paris cũ. Trong bối cảnh Việt Nam, chai này hợp với người thích mùi nữ sang, dùng tối hoặc trong những dịp cần vẻ ngoài được hoàn thiện hơn.

## Diễn biến trên da
Mở đầu floral sáng vừa phải, sau đó vanilla và nền ấm làm mùi trở nên tròn, bóng và mềm hơn. Mùi phát triển mượt, không quá kịch tính nhưng giữ khí chất tốt xuyên suốt.

Drydown là lớp hoa ấm, hơi bột nhẹ và khá sang. Nó không quá trẻ, nhưng cũng không già nếu dùng đúng hoàn cảnh. Nhược điểm là người thích mùi tối giản hiện đại có thể thấy Cinema hơi “dressy”.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Cinema có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, tiệc nhẹ, gặp gỡ, hẹn hò hoặc những lúc muốn một mùi nữ sáng sang chứ không quá ngọt.

Ở Việt Nam, chai này dùng đẹp hơn về chiều tối hoặc phòng lạnh. Ưu điểm là có khí chất và dễ nhận ra; nhược điểm là không hẳn là chai signature cho mọi ngày.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích mùi nữ cổ điển sang, có ánh vàng và thần thái rõ, Cinema là cái tên rất đáng thử. Nó hợp người thích floral ấm kiểu thanh lịch hơn là mùi ngọt dễ thương.

Nên mua khi mày cần một chai cho dịp cần lên mood nữ tính sang. Nếu mày muốn mùi quá trẻ hoặc quá casual, có thể chưa phải lựa chọn đầu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-diorissimo",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Diorissimo",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Diorissimo chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Diorissimo là một tượng đài của mùi hoa linh lan: xanh, trong, thanh và rất tinh tế. Nó không ngọt, không dày, không cố sexy, mà đẹp ở sự sạch, mềm và gần như mong manh. Đây là kiểu mùi floral cổ điển rất khác thị trường hiện nay, hợp với người yêu sự tinh giản và thanh lịch thật sự.

Điểm mạnh của Diorissimo là độ tinh khiết. Nó cho cảm giác như bó hoa trắng xanh vừa cắt xong, có gió và có ánh sáng. Trong điều kiện Việt Nam, đây là chai rất đẹp cho ban ngày, người thích mùi nhẹ và không muốn mùi hương áp lên không gian quá mạnh.

## Diễn biến trên da
Mở đầu floral xanh rất rõ, sau đó mùi mềm dần nhưng vẫn giữ nét sáng và thanh suốt quá trình dùng. Nó không có nhiều lớp tối hay ngọt; toàn bộ vẻ đẹp nằm ở sự trong trẻo và liền lạc.

Drydown sạch, floral mềm và hơi xanh nhẹ, rất dễ chịu trên da. Nó không tạo cảm giác phô trương mà nghiêng về sự kín đáo. Nhược điểm là ai thích mùi đậm, ngọt hoặc sexy sẽ thấy Diorissimo quá hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Diorissimo có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương nhẹ đến vừa. Nó hợp đi làm, ban ngày, mùa nóng, gặp gỡ nhẹ hoặc khi muốn một mùi hương thật thanh.

Ở Việt Nam, chai này dùng rất ổn nhờ độ thoáng. Ưu điểm là tinh và lịch sự; nhược điểm là độ statement thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích floral xanh sạch, cổ điển và rất thanh, Diorissimo là lựa chọn đẹp. Nó hợp người yêu nước hoa hoa cỏ theo hướng tinh tế hơn là gây chú ý.

Nên mua khi mày cần một chai ban ngày nhẹ và có gu. Nếu mày muốn mùi nổi hoặc ngọt ấm, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-samsara-extrait",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Samsara Extrait",
    subName: "Extrait de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Samsara Extrait chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Samsara Extrait là phiên bản cô đặc và sang nhất của thế giới Samsara: đàn hương, floral và độ ấm mềm được nén lại rất sâu. Nó không còn đơn thuần là một chai nước hoa dùng hằng ngày, mà gần như là một trải nghiệm sang cổ điển đậm đặc. Đây là kiểu mùi dành cho người thực sự yêu Guerlain và thích sự giàu chất liệu.

Điểm mạnh của bản Extrait là chiều sâu và độ mịn. Mùi không cần tỏa quá mạnh vẫn cho cảm giác rất đắt và rất có trọng lượng. Trong bối cảnh Việt Nam, chai này hợp với người yêu phong cách cổ điển, thích dùng mùi như một món đồ thưởng thức hơn là một sản phẩm tiện dụng.

## Diễn biến trên da
Mở đầu đã cho cảm giác đặc và giàu hơn bản EDP, sau đó đàn hương cùng floral tiếp tục mở ra theo hướng mềm, dày và cực kỳ tròn. Mùi phát triển chậm, sang và gần như không có chỗ thừa.

Drydown là lớp gỗ hoa ấm, mịn và có cảm giác rất quý. Nó không dễ hiểu với người mới, nhưng rất đẹp nếu mày thích mùi cổ điển. Nhược điểm là độ ứng dụng hằng ngày thấp và khá kén gu.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Samsara Extrait có độ lưu hương tốt, thường 8 giờ trở lên; tỏa hương vừa, thiên về chiều sâu hơn là độ bay. Nó hợp tối, thời tiết mát, dịp đặc biệt hoặc những lúc muốn thưởng một mùi thực sự có đẳng cấp cổ điển.

Ở Việt Nam, nên dùng tiết chế và ưu tiên không gian mát. Ưu điểm là cực sang và sâu; nhược điểm là không phù hợp số đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày mê Samsara và muốn bản cô đặc, sang và giàu trải nghiệm hơn, Extrait rất đáng thử. Nó hợp người yêu Guerlain cổ điển và thích mùi hương như một thú chơi nghiêm túc.

Nên mua khi mày muốn một chai để thưởng thức nhiều hơn là dùng đại trà. Nếu mày cần sự dễ mặc, bản EDP sẽ hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "zadig-voltaire-this-is-her",
    brandSlug: "zadig-voltaire",
    brand: "ZADIG & VOLTAIRE",
    name: "This Is Her!",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "ZADIG & VOLTAIRE This Is Her! chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
This Is Her! là một mùi rất thú vị vì nó trộn hạt dẻ, vanilla, gỗ và cảm giác kem ấm theo kiểu vừa casual vừa có chất riêng. Nó không ngọt theo lối bánh kẹo rõ, cũng không quá floral, mà mang cảm giác cozy, hơi nổi loạn và rất dễ nhớ. Đây là kiểu mùi hợp với hình ảnh áo len, da, tóc rối đẹp và gu tối giản có cá tính.

Điểm mạnh của chai này là vibe. Nó không cố sang kiểu cổ điển, mà sang theo kiểu cool hiện đại. Trong điều kiện Việt Nam, đây là chai hợp với tối, mùa mát, đi chơi hoặc người muốn một mùi ấm mềm nhưng không quá nữ tính truyền thống.

## Diễn biến trên da
Mở đầu có cảm giác kem và hạt khá rõ, sau đó vanilla cùng nền gỗ làm tổng thể tròn, mượt và ấm hơn. Mùi phát triển khá tuyến tính nhưng rất dễ sống cùng.

Drydown là lớp gỗ-vanilla mềm, hơi sữa và khá ôm da. Nó tạo cảm giác gần gũi mà vẫn có cá tính. Nhược điểm là người thích floral rõ hoặc mùi quá sang trọng kiểu tiệc có thể thấy nó hơi casual.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
This Is Her! có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi chơi, hẹn hò, cà phê tối, mùa mát hoặc dùng như một comfort scent có gu.

Ở Việt Nam, chai này nên dùng vừa tay nếu trời nóng. Ưu điểm là có vibe riêng và khá dễ nghiện; nhược điểm là kém hợp với môi trường quá trang trọng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai ấm mềm, hơi creamy-gỗ và có cá tính cool hiện đại, This Is Her! là lựa chọn đáng thử. Nó hợp người thích mùi cozy nhưng không quá bánh kẹo.

Nên mua khi mày cần một chai đi chơi hoặc mùa mát có chất riêng. Nếu mày thích floral sáng hoặc gourmand rất ngọt, nên cân nhắc thêm.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-la-nuit-de-lhomme-bleu-electrique",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "La Nuit de l'Homme Bleu Électrique",
    subName: "Eau de Toilette Intense",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT La Nuit de l'Homme Bleu Électrique chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
La Nuit de L’Homme Bleu Électrique là một nhánh rất được thích vì nó giữ tinh thần cardamom - lavender - gỗ sexy của La Nuit de L’Homme, nhưng làm sáng và sắc hơn một chút. Nó vẫn là kiểu mùi buổi tối, quyến rũ, gần gũi, nhưng có thêm độ điện, độ sạch và cảm giác hiện đại rõ hơn. Đây là flanker rất đáng giá với ai mê DNA La Nuit.

Điểm mạnh của Bleu Électrique là nó cho cảm giác trẻ hơn và gọn hơn bản gốc, nhưng không làm mất chất quyến rũ quen thuộc. Trong điều kiện Việt Nam, đây là chai rất hợp hẹn hò, đi chơi tối, dùng máy lạnh hoặc người muốn một mùi sexy nhưng không quá dày.

## Diễn biến trên da
Mở đầu là cardamom và aromatic sáng lên khá nhanh, sau đó phần gỗ cùng lavender làm tổng thể mượt lại và tròn hơn. Mùi chuyển tầng mượt, ít góc cạnh và giữ sự gần gũi rất tốt.

Drydown ấm nhẹ, sạch và nam tính theo kiểu dễ thích. Nó không tối bằng vài chai date scent nặng đô, nhưng lại linh hoạt và trẻ hơn. Nhược điểm là ai thích kiểu La Nuit tối sâu có thể thấy bản này sáng hơn mong đợi.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Bleu Électrique có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp hẹn hò, tối, đi chơi, quán bar nhẹ, ăn tối hoặc những lúc muốn mùi hương sexy mà không quá áp lực.

Ở Việt Nam, chai này dùng khá ổn vì không quá dày. Ưu điểm là dễ mặc, cuốn và hiện đại; nhược điểm là không quá đậm nếu mày thích hiệu năng thật mạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích DNA La Nuit de L’Homme nhưng muốn bản sáng và gọn hơn, Bleu Électrique rất đáng thử. Nó hợp người cần một chai date scent hiện đại, dễ dùng và vẫn giữ độ cuốn.

Nên mua khi mày muốn một chai buổi tối linh hoạt. Nếu mày thích mùi cực tối hoặc cực ngọt, nó có thể hơi hiền.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-habit-rouge-edt",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Habit Rouge",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Habit Rouge chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Habit Rouge EDT là một mùi nam cổ điển rất đẹp của Guerlain: citrus, vanilla, da và một cảm giác quý ông Pháp rất rõ. Nó không trẻ, không gào, không chạy theo xu hướng, mà sang theo kiểu đã có lịch sử lâu năm. Đây là kiểu mùi dành cho người thích gu cổ điển nhưng vẫn muốn một chai có độ mềm và dễ mặc hơn vẻ ngoài của nó.

Điểm hay của Habit Rouge là sự tương phản giữa sáng và ấm. Mở đầu thanh nhưng càng về sau càng mềm, hơi ngọt và rất lịch thiệp. Trong khí hậu Việt Nam, chai này hợp với người thích phong cách nam trưởng thành, dùng tối hoặc trong môi trường mát.

## Diễn biến trên da
Mở đầu citrus khá rõ và sáng, sau đó vanilla, da và nền ấm bắt đầu hiện ra, kéo mùi vào trạng thái tròn và sang hơn. Mùi phát triển mượt, không quá nặng nề dù mang khung cổ điển.

Drydown mềm, hơi bột nhẹ, ấm và rất gentleman. Nó không phải kiểu nam tính cơ bắp, mà là nam tính lịch thiệp. Nhược điểm là người thích mùi hiện đại quá sạch hoặc quá tối có thể thấy nó lửng giữa hai thế giới.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Habit Rouge EDT có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp tối, gặp gỡ lịch sự, dùng mùa mát hoặc những dịp muốn một mùi nam có chiều cổ điển rõ rệt.

Ở Việt Nam, chai này dùng đẹp hơn trong điều hòa hoặc chiều tối. Ưu điểm là sang và rất có lịch sử; nhược điểm là không phải gu của người thích mùi trẻ, thẳng và hiện đại.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam Guerlain cổ điển, mềm và rất lịch thiệp, Habit Rouge EDT rất đáng thử. Nó hợp người thích mùi có chất quý ông hơn là muốn gây ồn ào.

Nên mua khi mày cần một chai tối mang màu cổ điển. Nếu mày thích blue fragrance hoặc tông ngọt hiện đại, nên test kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-allure-homme-edt",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Allure Homme",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Allure Homme chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Allure Homme EDT là kiểu Chanel nam rất cân bằng: sạch, hơi ngọt nhẹ, chút cay, chút gỗ và cực kỳ gọn gàng. Nó không tươi thể thao như Allure Homme Sport, cũng không ấm đậm như vài bản buổi tối, mà đứng ở giữa với chất lịch thiệp và đa dụng rất cao. Đây là kiểu mùi “đàn ông có gu” hơn là “muốn gây chú ý”.

Điểm mạnh của chai này là sự chỉn chu. Nó không có một note đập mạnh vào mặt, mà thắng ở tổng thể blend rất đẹp. Trong điều kiện Việt Nam, Allure Homme EDT là một lựa chọn tốt cho người muốn một chai nam lịch sự dùng được nhiều hoàn cảnh.

## Diễn biến trên da
Mở đầu sáng và sạch, sau đó phần cay nhẹ, gỗ và độ ngọt vừa phải bắt đầu làm tổng thể trở nên tròn hơn. Mùi phát triển mượt, có độ nam tính ổn định và không bị quá trẻ.

Drydown ấm nhẹ, gọn và rất dễ chịu. Nó không tạo cảm giác statement mạnh, nhưng có độ cao cấp rõ. Nhược điểm là ai thích mùi quá fresh hoặc quá sexy có thể thấy Allure Homme EDT hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Allure Homme EDT có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ, đi ăn tối nhẹ, dùng hằng ngày hoặc làm signature cho người thích phong cách chỉnh tề.

Ở Việt Nam, chai này dùng khá khỏe quanh năm. Ưu điểm là đa dụng và lịch thiệp; nhược điểm là không quá nổi trong đám đông.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai Chanel nam cân bằng, lịch sự và dùng rất thực tế, Allure Homme EDT là lựa chọn vững. Nó hợp người thích mùi gọn gàng, trưởng thành và không cần phô trương.

Nên mua khi mày cần một chai signature thanh lịch. Nếu mày muốn bản thể thao hơn, Allure Homme Sport sẽ hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "lalique-encre-noire-a-lextreme",
    brandSlug: "lalique",
    brand: "LALIQUE",
    name: "Encre Noire à l'Extrême",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LALIQUE Encre Noire à l'Extrême chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Encre Noire À L’Extrême là phiên bản đậm, tối và khói hơn của Encre Noire. Nó vẫn giữ tinh thần vetiver khô, mực và gỗ rất đặc trưng của dòng, nhưng thêm độ dày và bóng tối khiến tổng thể trở nên nghiêm và có sức nặng hơn. Đây là kiểu mùi nam tối đúng nghĩa, không dành cho người thích sự dễ chịu đại trà.

Điểm mạnh của bản này là cá tính. Nó rất hợp với người thích mùi gỗ khô, tối, ít ngọt và muốn một chai có tính tuyên ngôn mạnh hơn so với Encre Noire gốc. Trong khí hậu Việt Nam, chai này hợp tối, mưa, phòng lạnh hoặc người có gu khá rõ.

## Diễn biến trên da
Mở đầu đã khá tối và khô, sau đó vetiver cùng sắc gỗ khói ngày càng rõ hơn, khiến tổng thể trở nên sâu và nặng hơn bản gốc. Mùi phát triển không quá nhiều tầng, nhưng cực kỳ nhất quán về mood.

Drydown là lớp gỗ tối, khô và hơi nhựa rất đặc trưng. Nó không thân thiện với số đông, nhưng rất đã với người hợp gu. Nhược điểm là tính ứng dụng thấp hơn nhiều mùi nam thông thường.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
À L’Extrême có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, thời tiết mát, không gian riêng hoặc những dịp muốn một mùi hương rất có màu.

Ở Việt Nam, nên tránh xịt mạnh trong ngày nóng. Ưu điểm là bản sắc cao và giá trị cá tính tốt; nhược điểm là cực kén gu.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày mê Encre Noire và muốn bản đậm, tối, khói hơn, À L’Extrême rất đáng thử. Nó hợp người thích vetiver-gỗ khô cực rõ và không ngại mùi hương nghiêm.

Nên mua khi mày muốn một chai tối có chất riêng mạnh. Nếu mày cần mùi dễ gần, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "cartier-la-panthere",
    brandSlug: "cartier",
    brand: "CARTIER",
    name: "La Panthère",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CARTIER La Panthère chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
La Panthère là một mùi nữ rất Cartier: floral chypre, có chiều sang, có khí chất và có độ sắc vừa đủ để không lẫn vào đám đông. Nó không ngọt theo kiểu dễ thương, mà nữ tính theo hướng trưởng thành, gọn và có thần thái. Đây là kiểu mùi hợp với người thích vẻ đẹp sang lạnh hơn là ngọt ôm.

Điểm mạnh của La Panthère là sự chỉn chu và bản lĩnh. Nó tạo cảm giác một người phụ nữ biết mình là ai, ăn mặc đẹp và không cần cố làm vừa lòng tất cả. Trong điều kiện Việt Nam, chai này hợp với môi trường lịch sự, tối nhẹ hoặc người thích floral sang không quá phổ thông.

## Diễn biến trên da
Mở đầu floral lên sáng nhưng không mỏng, sau đó nền chypre và xạ hương làm tổng thể trở nên sắc, sạch và sang hơn. Mùi phát triển khá gọn, không quá ngọt và giữ khí chất rất tốt.

Drydown là lớp floral sạch, hơi khô nhẹ và cực kỳ thanh lịch. Nó không phải kiểu sexy mềm, mà cuốn theo kiểu có khoảng cách. Nhược điểm là người thích gourmand hay floral ngọt sẽ thấy nó hơi nghiêm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
La Panthère có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ, tiệc nhẹ, tối sớm hoặc những dịp cần một mùi nữ có thần thái rõ.

Ở Việt Nam, chai này dùng được khá ổn nếu không xịt quá tay. Ưu điểm là sang và có bản sắc; nhược điểm là tính đại chúng không cao bằng các floral ngọt hiện đại.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai floral chypre nữ tính, sang và hơi sắc, La Panthère rất đáng thử. Nó hợp người thích phong cách trưởng thành, có gu và không đi theo lối ngọt dễ đoán.

Nên mua khi mày cần một mùi nữ lịch sự có thần thái. Nếu mày thích mùi mềm ngọt dễ ôm, nên test trước kỹ.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ysl-rive-gauche",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "Rive Gauche",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "YVES SAINT LAURENT Rive Gauche chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Rive Gauche là một mùi nữ có cá tính rất rõ: aldehydic, floral, hơi kim loại lạnh và cực kỳ thanh lịch theo kiểu Paris cũ. Nó không mềm ngọt hay nịnh mũi theo cách hiện đại, mà đẹp ở sự sắc, sạch và có khí chất rất riêng. Đây là kiểu mùi dành cho người thích thời trang, gu cổ điển và không ngại một chút khoảng cách trong mùi hương.

Điểm mạnh của Rive Gauche là thần thái. Nó tạo cảm giác váy may đo, son đỏ, tóc gọn và sự tự tin rất “left bank”. Trong bối cảnh Việt Nam, chai này hợp với người thích phong cách cổ điển Pháp, muốn một floral sạch sang chứ không đi theo gourmand hay hoa ngọt phổ thông.

## Diễn biến trên da
Mở đầu aldehyde và floral hiện lên khá rõ, tạo cảm giác sáng lạnh và sắc. Sau đó mùi mềm dần nhưng vẫn giữ bộ khung thanh, khô và rất chỉn chu.

Drydown là lớp floral sạch, hơi bột nhẹ và cực kỳ thanh lịch. Nó không phải mùi ôm ngọt dễ mến, mà là kiểu cuốn bằng khí chất. Nhược điểm là người quen mùi nữ hiện đại mềm mại có thể thấy nó hơi nghiêm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Rive Gauche có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ lịch sự, tối nhẹ hoặc những dịp cần một mùi nữ có cá tính trưởng thành.

Ở Việt Nam, dùng đẹp nếu tiết chế số lần xịt. Ưu điểm là rất có gu và khác biệt; nhược điểm là độ đại chúng không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích floral aldehydic sắc, sạch và cổ điển sang, Rive Gauche rất đáng thử. Nó hợp người thích thời trang, yêu vẻ đẹp Paris cũ và không cần mùi hương phải quá dễ đoán.

Nên mua khi mày muốn một chai nữ có khí chất riêng. Nếu mày thích mùi mềm, ngọt hoặc dễ ôm, nên test trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-lheure-bleue-edt",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L'Heure Bleue",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN L'Heure Bleue chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L’Heure Bleue EDT nhẹ hơn, thoáng hơn và dễ vào hơn bản EDP, nhưng vẫn giữ nguyên linh hồn rất đặc trưng: powdery floral, hơi tím, hơi buồn và cực kỳ thơ. Nó không phải mùi hiện đại dễ hiểu, mà là một thế giới cảm xúc riêng của Guerlain. Bản EDT vì thế phù hợp hơn cho người muốn chạm vào vẻ đẹp này theo cách mềm và wearable hơn.

Điểm mạnh của EDT là sự thanh hơn. Nó bớt dày, bớt đậm và ít áp lực hơn EDP, nên dễ dùng thực tế hơn trong khí hậu Việt Nam. Tuy vậy, khí chất hoài niệm và sang kiểu cổ điển vẫn còn rất rõ.

## Diễn biến trên da
Mở đầu floral powder hiện lên dịu hơn bản EDP, sau đó nền ấm nhẹ và lớp bột mềm dần bao lấy tổng thể. Mùi phát triển mượt, không quá nặng và cho cảm giác bay hơn.

Drydown là lớp phấn hoa ấm, nhẹ, mềm và đầy chất thơ. Nó không quá sâu như EDP nhưng lại dễ sống cùng hơn. Nhược điểm là ai mê chiều sâu đậm của bản EDP có thể thấy bản này thiếu trọng lượng hơn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L’Heure Bleue EDT có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương nhẹ đến vừa. Nó hợp buổi chiều, tối nhẹ, không gian yên, dùng khi muốn một mùi floral powder cổ điển nhưng không quá dày.

Ở Việt Nam, bản EDT dễ dùng hơn EDP rõ rệt. Ưu điểm là giữ tinh thần rất đẹp mà wearable hơn; nhược điểm là vẫn kén gu nếu mày không thích powdery vintage.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày tò mò về L’Heure Bleue nhưng sợ bản EDP quá đậm, bản EDT là điểm bắt đầu hợp lý hơn. Nó hợp người thích floral powder mềm, có hồn và muốn một bản cổ điển dễ mặc hơn.

Nên mua khi mày muốn một chai vintage gentle hơn. Nếu mày thích chiều sâu đậm và nhiều drama hơn, EDP sẽ hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "frederic-malle-carnal-flower",
    brandSlug: "frederic-malle",
    brand: "FRÉDÉRIC MALLE",
    name: "Carnal Flower",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "FRÉDÉRIC MALLE Carnal Flower chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Carnal Flower là một trong những mùi tuberose nổi tiếng nhất vì nó cực kỳ sống động: xanh, kem, hoa trắng, hơi lạnh rồi lại rất gợi cảm. Nó không phải kiểu tuberose ngọt dày nặng đầu, mà có độ thoáng và độ thật khiến mùi hương vừa nghệ vừa sexy. Đây là một chai niche rất mạnh cho người thích white floral có cá tính lớn.

Điểm mạnh của Carnal Flower là chiều tương phản. Nó vừa xanh vừa kem, vừa sạch vừa xác thịt, vừa sang vừa có chút hoang dại. Trong bối cảnh Việt Nam, chai này hợp với người yêu hoa trắng nhưng đã chán những hướng floral ngọt phổ thông.

## Diễn biến trên da
Mở đầu xanh và hơi lạnh, sau đó tuberose bắt đầu bung ra rõ hơn, kéo theo cảm giác kem và floral sâu hơn. Mùi phát triển rất giàu chuyển động, khiến nó luôn sống chứ không nằm yên một chỗ.

Drydown mềm hơn, kem hơn nhưng vẫn giữ linh hồn tuberose rõ. Nó đẹp và rất có bản sắc. Nhược điểm là ai sợ white floral mạnh có thể thấy nó quá hiện diện.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Carnal Flower có hiệu năng tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, gặp gỡ đặc biệt, đi tiệc hoặc những lúc muốn dùng một floral có cá tính rõ.

Ở Việt Nam, nên dùng tiết chế vì white floral mạnh dễ nổi trong thời tiết nóng. Ưu điểm là rất đẹp và rất có gu; nhược điểm là không phải kiểu floral an toàn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích tuberose thật đẹp, có chiều xanh-kem và rất niche, Carnal Flower là lựa chọn cực đáng thử. Nó hợp người muốn một white floral có sân khấu riêng.

Nên mua khi mày cần một chai floral statement. Nếu mày thích mùi nhẹ, hiền và ít hoa trắng, nên test kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-linstant-de-guerlain-femme",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L'Instant de Guerlain",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN L'Instant de Guerlain chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L’Instant de Guerlain Femme là một mùi nữ rất đẹp theo kiểu Guerlain: floral ấm, mềm, có chút gourmand nhẹ nhưng vẫn sang và rất nữ tính. Nó không hoàn toàn cổ điển nặng đô, cũng không chạy theo style ngọt trẻ, mà nằm ở vùng trưởng thành, tinh tế và hơi lãng mạn. Đây là chai dành cho người thích mùi nữ có chiều sâu mà vẫn mềm mại.

Điểm mạnh của chai này là độ duyên. Nó không cố gây ấn tượng bằng sự bùng nổ, mà chinh phục bằng sự mượt và rất “đàn bà”. Trong điều kiện Việt Nam, chai này hợp tối nhẹ, đi làm phòng lạnh, gặp gỡ hoặc người thích mùi floral ấm có chất Guerlain rõ nhưng dễ tiếp cận hơn các tượng đài vintage.

## Diễn biến trên da
Mở đầu mềm với floral khá nhanh, sau đó nền ấm và chút ngọt nhẹ làm tổng thể tròn hơn, mượt hơn và giàu cảm xúc hơn. Mùi phát triển đẹp ở cách các lớp hòa vào nhau rất tự nhiên.

Drydown là lớp floral ấm, mềm và hơi bột nhẹ, tạo cảm giác rất ôm. Nó nữ tính mà không yếu. Nhược điểm là ai thích mùi rất sắc nét hoặc rất hiện đại có thể thấy nó hơi dịu.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L’Instant de Guerlain Femme có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, tối nhẹ, hẹn hò, gặp gỡ lịch sự hoặc làm signature nữ theo hướng mềm sang.

Ở Việt Nam, chai này dùng khá ổn nếu tiết chế. Ưu điểm là thanh lịch và có chiều sâu; nhược điểm là không phải kiểu mùi “đập vào mặt” ngay lập tức.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích floral ấm, mềm và rất nữ tính theo phong cách Guerlain, L’Instant de Guerlain Femme là lựa chọn rất đáng thử. Nó hợp người thích vẻ đẹp trưởng thành, tinh tế và không ồn ào.

Nên mua khi mày cần một chai nữ dễ sống nhưng vẫn có hồn. Nếu mày muốn mùi thật trẻ, thật ngọt hoặc cực kỳ hiện đại, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "hermes-24-faubourg",
    brandSlug: "hermes",
    brand: "HERMÈS",
    name: "24 Faubourg",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "HERMÈS 24 Faubourg chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
24 Faubourg là một mùi nữ rất Hermès: sang, ấm, sáng vàng và cực kỳ lịch thiệp. Nó không đi theo hướng trẻ trung trendy, mà là vẻ đẹp trưởng thành, quý phái và có độ hoàn thiện rất cao. Đây là kiểu mùi hợp với người thích phong cách thanh lịch đúng nghĩa và không ngại một chút tinh thần cổ điển.

Điểm mạnh của 24 Faubourg là khí chất. Nó gợi cảm theo kiểu có giáo dưỡng, có khoảng cách và rất biết mình đẹp ở đâu. Trong điều kiện Việt Nam, chai này hợp hơn cho tối, dịp trang trọng hoặc người muốn một floral oriental sang theo kiểu kín chứ không ồn.

## Diễn biến trên da
Mở đầu floral sáng và giàu chất liệu, sau đó phần ấm cùng sắc cam-hổ phách nhẹ bắt đầu làm tổng thể tròn và sâu hơn. Mùi phát triển mượt và rất quý phái.

Drydown là lớp floral ấm, mềm và cực kỳ thanh lịch. Nó không tạo cảm giác quá ngọt mà nghiêng về “golden floral”. Nhược điểm là người thích mùi hiện đại tối giản có thể thấy nó hơi dressy.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
24 Faubourg có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tiệc nhẹ, gặp gỡ lịch sự, tối sớm hoặc những dịp muốn mùi hương thật sự sang.

Ở Việt Nam, dùng đẹp nhất trong không gian mát. Ưu điểm là rất quý và có khí chất; nhược điểm là không phải kiểu casual everyday.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nữ sang, quý phái và có tinh thần Hermès rõ rệt, 24 Faubourg là cái tên rất đáng thử. Nó hợp người thích floral ấm trưởng thành và phong cách thanh lịch thực thụ.

Nên mua khi mày cần một chai cho dịp đẹp. Nếu mày thích mùi trẻ, ngọt hoặc quá casual, nên thử kỹ trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "lolita-lempicka-le-parfum",
    brandSlug: "lolita-lempicka",
    brand: "LOLITA LEMPICKA",
    name: "Lolita Lempicka Le Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LOLITA LEMPICKA Lolita Lempicka Le Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Lolita Lempicka Le Parfum là kiểu gourmand fantasy rất đặc trưng: ngọt, hơi kẹo, hơi thảo mộc và có cảm giác cổ tích đêm. Nó không phải vanilla đơn giản, mà có màu tím đậm, hơi licorice và một chất mơ màng rất riêng. Đây là kiểu mùi dành cho người thích thế giới mùi hương có concept rõ và không quá thực dụng.

Điểm mạnh của chai này là cá tính. Nó vừa nữ tính vừa bí ẩn, vừa ngọt vừa có cạnh tối nhỏ khiến tổng thể không bị quá phẳng. Trong điều kiện Việt Nam, đây là chai hợp cho tối, đi chơi, hẹn hò hoặc những ai mê mùi ngọt có màu sắc riêng.

## Diễn biến trên da
Mở đầu ngọt khá rõ, sau đó các sắc thảo mộc và nền ấm giúp mùi bớt đơn giản và trở nên sâu hơn. Mùi phát triển theo hướng mượt, ôm và có chút kỳ ảo đúng tinh thần thương hiệu.

Drydown là lớp ngọt tím, mềm, hơi bột và khá gây nghiện nếu hợp gu. Nó không phải kiểu gourmand sạch sẽ đại trà. Nhược điểm là ai không thích licorice hoặc mùi ngọt có cá tính sẽ thấy nó hơi lạ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Le Parfum có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, mùa mát, đi chơi, hẹn hò hoặc khi muốn một mùi hương ngọt có câu chuyện riêng.

Ở Việt Nam, nên dùng nhẹ tay nếu trời oi. Ưu điểm là rất riêng và có hình ảnh; nhược điểm là tính đại chúng không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích gourmand fantasy, hơi tím, hơi cổ tích và không ngại cá tính, Lolita Lempicka Le Parfum rất đáng thử. Nó hợp người muốn một mùi ngọt khác số đông.

Nên mua khi mày cần một chai tối có màu sắc riêng. Nếu mày thích floral sạch hoặc gourmand đơn giản, nên test trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "ck-obsession",
    brandSlug: "calvin-klein",
    brand: "CALVIN KLEIN",
    name: "Obsession",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CALVIN KLEIN Obsession chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Obsession là một trong những cái tên kinh điển của nhóm oriental đậm: cay, ấm, resinous và rất giàu cảm giác da thịt. Nó không ngại sự mạnh tay, cũng không cố trở nên dễ thương. Đây là mùi hương của một thời kỳ nước hoa thích sự hiện diện lớn, rất hợp với người thích vintage đậm và không sợ bị chú ý.

Điểm mạnh của Obsession là độ nóng và sức hút kiểu bản năng. Nó không tinh kiểu tối giản, mà dày, tối và rất đầy đặn. Trong bối cảnh Việt Nam, chai này hợp hơn với buổi tối, thời tiết mát và người thực sự thích phong cách oriental cổ điển.

## Diễn biến trên da
Mở đầu gia vị và độ ấm lên khá mạnh, sau đó nhựa thơm và nền ngọt cay làm tổng thể càng sâu hơn. Mùi phát triển ít nhẹ nhàng, mà giữ phong độ đậm xuyên suốt.

Drydown ấm, dày và rất vintage. Nó có sức hút riêng với người đúng gu, nhưng sẽ quá tay với ai thích mùi sạch hoặc nhẹ. Nhược điểm là độ ứng dụng hằng ngày thấp.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Obsession có hiệu năng tốt, thường 8 giờ trở lên; tỏa hương khá mạnh. Nó hợp tối, mùa mát, dịp đặc biệt hoặc khi muốn một mùi hương thật sự có độ nóng.

Ở Việt Nam, nên dùng rất tiết chế. Ưu điểm là khí chất mạnh và khó nhầm; nhược điểm là dễ áp lực trong thời tiết oi.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày mê oriental cổ điển đậm, cay và có thần thái vintage rõ, Obsession là cái tên nên thử. Nó hợp người có gu mạnh và thích mùi hương như một tuyên ngôn.

Nên mua khi mày muốn một chai tối có sức nóng rõ rệt. Nếu mày cần sự nhẹ, sạch và dễ dùng, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-champs-elysees-edp",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "Champs-Élysées",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GUERLAIN Champs-Élysées chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Champs-Élysées EDP là một mùi floral của Guerlain theo hướng sáng, nữ tính và vui hơn so với nhiều tượng đài cổ điển khác của hãng. Nó có cảm giác hoa nở, mềm, tươi và khá rạng rỡ, nhưng vẫn giữ nét sang tinh tế kiểu Guerlain. Đây là chai phù hợp với người muốn một floral cổ điển dễ tiếp cận hơn.

Điểm hay của Champs-Élysées là sự nhẹ sáng và duyên. Nó không quá powdery, không quá dark, cũng không ngọt nặng. Trong khí hậu Việt Nam, đây là chai có thể dùng khá ổn ban ngày hoặc những dịp cần một floral thanh lịch nhưng không quá nghiêm.

## Diễn biến trên da
Mở đầu floral tươi và khá vui, sau đó mùi dần trở nên mềm hơn, tròn hơn với nền ấm nhẹ phía sau. Quá trình phát triển mượt, sạch và ít góc cạnh.

Drydown floral mềm, nữ tính và dễ chịu. Nó không quá sâu hay quá dramatic, nhưng giữ được vẻ chỉn chu. Nhược điểm là với người thích mùi cá tính mạnh, chai này có thể hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Champs-Élysées EDP có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, gặp gỡ, ban ngày, tiệc nhẹ hoặc làm mùi floral thanh lịch thường nhật.

Ở Việt Nam, chai này dùng khá dễ nhờ độ sáng và mềm. Ưu điểm là thanh lịch, dễ gần; nhược điểm là không phải mùi quá nổi hoặc quá hiện đại.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một floral Guerlain nữ tính, sáng và dễ sống hơn các chai cổ điển nặng đô, Champs-Élysées EDP là lựa chọn đẹp. Nó hợp người thích hoa cỏ thanh lịch và không cần quá nhiều drama.

Nên mua khi mày cần một chai floral dùng ban ngày. Nếu mày thích mùi tối, dày hoặc cực kỳ cá tính, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-tobacco-vanille",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Tobacco Vanille",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Tobacco Vanille chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Tobacco Vanille là một trong những mùi thuốc lá-vanilla nổi tiếng nhất vì nó làm rất rõ hai chữ đậm và sang. Thuốc lá ở đây không bụi bặm kiểu khói thuốc thực tế, mà khô, ngọt, dày và được phủ bởi vanilla, cacao, trái cây khô cùng gia vị ấm. Kết quả là một mùi hương rất giàu texture, rất tối và cực kỳ hợp buổi tối.

Điểm ăn tiền của Tobacco Vanille là khí chất luxury rõ ràng ngay từ đầu. Nó không cần tinh tế kiểu kín đáo; chỉ cần lên da là đã thấy sang tối và có lực. Trong điều kiện Việt Nam, đây là chai dùng đẹp nhất khi trời mát, phòng máy lạnh, đi event, đi tối hoặc những dịp muốn mùi hương thật sự nổi bật.

## Diễn biến trên da
Mở đầu là thuốc lá khô và gia vị rõ nét, sau đó vanilla cùng cacao làm mùi tròn và dày lên rất nhanh. Trên da ấm, tổng thể có thể rất đậm và cho cảm giác gần như món tráng miệng phương Đông nhưng vẫn giữ bộ khung nam tính.

Drydown là lớp vanilla-thuốc lá-gỗ rất bền, ôm sát nhưng không hề nhẹ. Nó tạo cảm giác sang và hơi áp đảo nếu dùng nhiều. Nhược điểm là độ dày cao, dễ nặng trong thời tiết nóng và không phải kiểu mùi dùng vô tư ban ngày.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Tobacco Vanille có hiệu năng mạnh, lưu hương 8-10 giờ hoặc hơn, tỏa hương rõ trong những giờ đầu. Nó hợp nhất cho tối, mùa mát, tiệc, máy lạnh, dịp đặc biệt hoặc khi muốn lên outfit thật có lực.

Ở Việt Nam, chai này nên dùng tiết chế và tránh trưa nóng. Ưu điểm là sang, đặc trưng và rất dễ nhận diện; nhược điểm là khá kén hoàn cảnh và không hợp người ghét mùi ngọt đậm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai sang tối, đậm, thuốc lá-vanilla đúng nghĩa statement piece, Tobacco Vanille là lựa chọn kinh điển. Nó hợp người thích mùi ấm, giàu texture và có sức nặng rõ ràng.

Nên mua khi mày cần một chai tối, mùa lạnh hoặc dịp đặc biệt. Nếu mày chủ yếu dùng giữa thời tiết nóng ẩm ban ngày, đây không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-egoiste-platinum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Égoïste Platinum",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Égoïste Platinum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Platinum Égoïste là một trong những chai Chanel nam sạch và sắc nhất: aromatic, metallic nhẹ, xanh và cực kỳ gọn gàng. Nó cho cảm giác cạo râu xong, áo sơ mi trắng, tóc vuốt gọn và phong thái rất chỉn chu. Đây không phải kiểu mùi mềm ôm hay ngọt nịnh, mà là mùi của sự crisp và tự tin.

Điểm mạnh của Platinum Égoïste là độ sang kiểu lạnh. Nó nam tính nhưng không nặng nề, sáng nhưng không quá trẻ. Trong điều kiện Việt Nam, đây là chai dùng cực tốt cho đi làm, ban ngày, môi trường chuyên nghiệp hoặc người thích mùi sạch có cá tính hơn blue fragrance thường gặp.

## Diễn biến trên da
Mở đầu aromatic xanh rất rõ, sau đó sắc kim loại nhẹ và nền gỗ giúp tổng thể trở nên sắc nét nhưng vẫn mượt. Mùi phát triển khá gọn và ổn định, không có nhiều lớp tối.

Drydown sạch, hơi xà phòng cao cấp và rất nam tính theo kiểu chỉn chu. Nó không sexy trực diện nhưng có sức hút riêng với người thích mùi sạch sắc. Nhược điểm là ai thích mùi ấm, tối hoặc ngọt có thể thấy nó hơi lạnh.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Platinum Égoïste có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, đi học, ban ngày, mùa nóng, gặp đối tác hoặc làm signature văn phòng rất tốt.

Ở Việt Nam, chai này dùng khỏe nhờ độ xanh sạch. Ưu điểm là cực gọn và sang; nhược điểm là không phải kiểu mùi tình cảm hay buổi tối đậm.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai Chanel nam sạch, sắc và trưởng thành, Platinum Égoïste là lựa chọn cực mạnh. Nó hợp người thích phong cách chỉn chu, lạnh và ít màu mè.

Nên mua khi mày cần một chai đi làm rất vững. Nếu mày muốn mùi ấm, ngọt và sexy hơn, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "mfk-grand-soir",
    brandSlug: "mfk",
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Grand Soir",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MAISON FRANCIS KURKDJIAN Grand Soir chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Grand Soir đúng như tên gọi: một mùi tối, amber, nhựa thơm và vanilla cực kỳ sang. Nó không cố mô phỏng quá nhiều note phức tạp, mà tập trung xây một khối ấm, bóng, giàu và đắt tiền. Đây là một trong những chai amber hiện đại đẹp nhất nếu mày thích sự ấm sang rõ rệt.

Điểm mạnh của Grand Soir là độ hoàn thiện. Nó vừa đủ ngọt để cuốn, vừa đủ resinous để sang, và cực kỳ “lên không gian” khi dùng buổi tối. Trong điều kiện Việt Nam, chai này hợp cho máy lạnh, event, hẹn hò, tiệc hoặc những lúc cần một mùi hương có cảm giác dressed-up ngay lập tức.

## Diễn biến trên da
Mở đầu đã khá ấm và resinous, sau đó amber cùng vanilla dần làm tổng thể mượt hơn, dày hơn và sang hơn. Mùi phát triển không quá nhiều tầng, nhưng texture thay đổi rất đẹp.

Drydown là lớp amber ấm, mềm, sang và cực kỳ ôm da. Nó tạo cảm giác đắt tiền rất rõ. Nhược điểm là trời nóng dễ làm nó trở nên hơi nhiều nếu xịt mạnh.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Grand Soir có hiệu năng tốt, thường 8-10 giờ; tỏa hương khá trong giai đoạn đầu. Nó hợp tối, hẹn hò, event, thời tiết mát và những dịp muốn mùi hương thật sự có khí chất sang.

Ở Việt Nam, nên ưu tiên buổi tối và không gian mát. Ưu điểm là amber cực đẹp và rất sang; nhược điểm là không hợp ban ngày nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai amber tối sang, hiện đại và cực kỳ chỉnh chu, Grand Soir là lựa chọn hàng đầu. Nó hợp người thích mùi ấm, xa xỉ và muốn một chai buổi tối thật sự nổi chất lượng.

Nên mua khi mày cần một chai event/date night đắt tiền đúng nghĩa. Nếu mày thích mùi sáng, fresh hoặc casual, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "bvlgari-tygar",
    brandSlug: "bvlgari",
    brand: "BVLGARI",
    name: "Tygar",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "BVLGARI Tygar chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Tygar là kiểu grapefruit - ambrox cực sáng, cực hiện đại và rất sang theo phong cách luxury fresh. Nó không phức tạp theo kiểu nhiều note, mà đánh thẳng vào cảm giác sạch, khoáng, sáng và bốc ra rất đẹp. Đây là một trong những mùi niche-luxury fresh có độ nịnh mũi cao nhất với người thích sự gọn, sắc và đắt.

Điểm mạnh của Tygar là độ “clean power”. Nó vừa tươi vừa có lực, vừa ban ngày vừa có khí chất. Trong điều kiện Việt Nam, chai này gần như sinh ra cho thời tiết nóng: dễ mặc, ít mệt và rất hợp người thích mùi sang nhưng không muốn quá nặng.

## Diễn biến trên da
Mở đầu grapefruit sáng và rất có lực, sau đó phần ambrox cùng nền gỗ nhẹ làm tổng thể trở nên mượt, khoáng và hiện đại hơn. Mùi phát triển khá tuyến tính nhưng chất lượng cảm giác rất cao.

Drydown sạch, sáng và hơi mineral, bám da rất dễ chịu. Nó không nhiều tầng nghệ thuật nhưng rất hiệu quả. Nhược điểm là ai thích chiều sâu tối hoặc cấu trúc phức tạp có thể thấy Tygar hơi thẳng.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Tygar có độ lưu hương khá đến tốt, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp đi làm, mùa nóng, du lịch, đi chơi ban ngày hoặc làm signature fresh cao cấp.

Ở Việt Nam, đây là kiểu chai dùng cực khỏe. Ưu điểm là sáng, sang, hiện đại và ít rủi ro; nhược điểm là độ độc bản về cấu trúc không quá cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai fresh sáng cao cấp, dễ dùng nhưng vẫn rất có khí chất, Tygar là lựa chọn cực mạnh. Nó hợp người thích grapefruit, ambrox và phong cách luxury-clean.

Nên mua khi mày cần một chai signature mùa nóng. Nếu mày thích mùi tối, ngọt hoặc cổ điển, đây không phải hướng chính.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "boss-bottled-absolu",
    brandSlug: "boss",
    brand: "HUGO BOSS",
    name: "Boss Bottled Absolu",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "HUGO BOSS Boss Bottled Absolu chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Boss Bottled Absolu đi theo hướng ấm, gỗ và ngọt nhẹ kiểu nam hiện đại dễ tiếp cận. Nó giữ tinh thần lịch sự, wearable của line Boss Bottled nhưng làm đậm và sang hơn, khiến tổng thể chững hơn các bản sáng trẻ thông thường. Đây là kiểu mùi hợp với người muốn một chai nam an toàn nhưng vẫn có cảm giác buổi tối rõ hơn.

Điểm mạnh của Absolu là tính thực dụng. Nó không quá thử thách, không quá nghệ, mà tập trung vào việc thơm, nam tính và dễ ứng dụng trong đời sống thật. Trong bối cảnh Việt Nam, chai này hợp đi làm môi trường mát, hẹn hò nhẹ, đi ăn tối hoặc người thích designer nam dễ sống.

## Diễn biến trên da
Mở đầu ấm và hơi cay nhẹ, sau đó phần gỗ cùng độ ngọt mềm bắt đầu hiện rõ hơn. Mùi phát triển khá gọn, ít góc cạnh và thiên về sự mượt.

Drydown cho cảm giác gỗ ấm, sạch và nam tính. Nó không quá bùng nổ nhưng khá dễ chịu ở khoảng cách gần. Nhược điểm là người thích mùi thật cá tính hoặc thật niche có thể thấy nó hơi an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Boss Bottled Absolu có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, đi gặp gỡ, buổi tối nhẹ hoặc làm chai grab-and-go theo hướng chững chạc.

Ở Việt Nam, chai này dùng khá ổn nếu không xịt quá tay. Ưu điểm là dễ mặc và gọn; nhược điểm là độ độc đáo không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam ấm, lịch sự và dễ dùng hơn nhiều mùi nặng đô buổi tối, Boss Bottled Absolu là lựa chọn ổn. Nó hợp người thích designer nam chững, không ồn ào.

Nên mua khi mày cần một chai tối nhẹ hoặc dùng đi làm môi trường mát. Nếu mày cần mùi thật nổi, nên tìm hướng mạnh hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-herod",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Herod",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PARFUMS DE MARLY Herod chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Herod là một trong những mùi tobacco ngọt đẹp nhất của Parfums de Marly: quế, thuốc lá, vanilla và gỗ hòa vào nhau theo kiểu rất mượt, rất sang và rất dễ gây nghiện. Nó không khô khắc kiểu thuốc lá cổ điển, mà mềm, ấm và có sức hút rõ ngay từ đầu. Đây là kiểu mùi tối rất mạnh cho người thích chất nam tính quyến rũ.

Điểm mạnh của Herod là độ cân bằng giữa tobacco và vanilla. Nó đủ tối để có chiều sâu, nhưng đủ mượt để không khó gần. Trong khí hậu Việt Nam, chai này hợp cho tối, hẹn hò, máy lạnh hoặc các dịp muốn một mùi hương sang và cuốn.

## Diễn biến trên da
Mở đầu là gia vị và độ ngọt ấm lên khá nhanh, sau đó thuốc lá bắt đầu rõ hơn và kéo tổng thể vào vùng dày, tròn và quyến rũ. Mùi phát triển mượt, rất “nằm da”.

Drydown là lớp tobacco-vanilla mềm, ấm và cực kỳ dễ gây thiện cảm ở cự ly gần. Nó không quá khói hay quá khô. Nhược điểm là trời nóng và xịt mạnh tay dễ làm mùi trở nên hơi dày.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Herod có hiệu năng khá tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, hẹn hò, ăn tối, event hoặc mùa mát khi muốn một mùi thật sự có sức hút.

Ở Việt Nam, dùng đẹp nhất trong điều hòa hoặc buổi tối. Ưu điểm là tobacco rất đẹp và wearable; nhược điểm là không phải kiểu chai vô tư dùng giữa trưa nóng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích tobacco ngọt ấm, sang và nịnh mũi, Herod là lựa chọn cực mạnh. Nó hợp người cần một chai tối có chiều sâu mà vẫn đủ dễ dùng để được thích.

Nên mua khi mày muốn một chai date night hoặc mùa mát rất ăn tiền. Nếu mày ghét mùi ngọt ấm, nên test trước.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "essential-parfums-bois-imperial",
    brandSlug: "essential-parfums",
    brand: "ESSENTIAL PARFUMS",
    name: "Bois Impérial",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "ESSENTIAL PARFUMS Bois Impérial chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Bois Impérial là kiểu woody-aromatic hiện đại rất sáng, rất khoáng và cực kỳ đúng tinh thần niche tối giản. Nó không ngọt, không quá ấm, không đi theo kiểu gỗ cổ điển, mà thiên về cảm giác sạch, xanh, mineral và rất sắc. Đây là một mùi hương có cá tính rõ nhưng vẫn dùng được thực tế, nhất là trong thời tiết nóng.

Điểm mạnh của Bois Impérial là sự hiện đại. Nó cho cảm giác công nghệ, kiến trúc, vật liệu sạch hơn là gỗ mềm truyền thống. Trong bối cảnh Việt Nam, đây là chai cực hợp cho người thích mùi khác số đông nhưng vẫn thoáng và wearable ban ngày.

## Diễn biến trên da
Mở đầu khá sắc và khoáng, sau đó phần gỗ cùng aromatic xanh bắt đầu tròn lại nhưng vẫn giữ độ crisp. Mùi phát triển gọn, không quá nhiều tầng, nhưng bản sắc rất rõ.

Drydown sạch, hơi mặn-khoáng và gỗ sáng, bám da đẹp theo kiểu rất hiện đại. Nhược điểm là ai thích mùi mềm, ngọt hoặc cổ điển có thể thấy nó hơi lạnh.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Bois Impérial có độ lưu hương khá đến tốt, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp đi làm, ban ngày, mùa nóng, môi trường sáng tạo hoặc làm signature cho người thích mùi niche sạch-sắc.

Ở Việt Nam, chai này dùng rất khỏe. Ưu điểm là hiện đại, khác biệt và ít ngợp; nhược điểm là không phải kiểu mùi ai cũng thấy “dễ thương” ngay.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai woody hiện đại, khoáng, sáng và có cá tính riêng, Bois Impérial là cái tên rất đáng thử. Nó hợp người thích phong cách tối giản, lạnh và khác biệt với blue fragrance phổ thông.

Nên mua khi mày cần một chai ban ngày có gu riêng. Nếu mày thích mùi ấm, ngọt hoặc mềm mại, hướng này có thể chưa hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-eau-sauvage-parfum",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Eau Sauvage Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Eau Sauvage Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Eau Sauvage Parfum giữ tinh thần lịch thiệp cổ điển của Eau Sauvage nhưng làm tối hơn, sâu hơn và nam tính trưởng thành hơn rõ. Nó không còn chỉ là citrus sạch sáng, mà có thêm chiều dày của gỗ và độ ấm khiến tổng thể rất dressy. Đây là một mùi nam đẹp cho người thích phong cách cổ điển được làm sang trọng hơn.

Điểm mạnh của bản Parfum là sự chững chạc. Nó vẫn thanh lịch, nhưng có nhiều chiều sâu hơn bản EDT và hợp hoàn cảnh buổi tối hơn. Trong khí hậu Việt Nam, chai này rất hợp với người thích mùi lịch thiệp nam tính mà không muốn quá ngọt hay quá hiện đại.

## Diễn biến trên da
Mở đầu vẫn có nét citrus cổ điển quen thuộc, sau đó gỗ và nền ấm bắt đầu hiện lên làm mùi trở nên tròn, sâu và trưởng thành hơn. Mùi phát triển khá mượt, giữ chất quý ông rất rõ.

Drydown là lớp gỗ ấm, sạch và rất tinh. Nó không quá phô trương nhưng có độ sang cao. Nhược điểm là ai thích kiểu fresh trẻ trung có thể thấy bản Parfum hơi nghiêm.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Eau Sauvage Parfum có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, đi làm môi trường lịch sự, gặp đối tác hoặc những dịp cần một mùi nam rất chỉnh tề.

Ở Việt Nam, chai này dùng đẹp trong phòng lạnh hoặc chiều tối. Ưu điểm là sang, tinh và rất gentleman; nhược điểm là không quá hợp người thích mùi hiện đại đậm ambroxan.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích mùi nam cổ điển nhưng muốn chiều sâu và sự dressy hơn bản thường, Eau Sauvage Parfum rất đáng thử. Nó hợp người thích phong cách quý ông, gọn và có gu lâu dài.

Nên mua khi mày cần một chai lịch thiệp cho tối hoặc dịp nghiêm chỉnh. Nếu mày thích mùi ngọt ấm hiện đại, nên đi hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "xerjoff-alexandria-ii",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "Alexandria II",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "XERJOFF Alexandria II chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Alexandria II là kiểu oud-woody sang, dày và cực kỳ xa xỉ theo phong cách Xerjoff. Nó không đi theo hướng oud thô hay động vật mạnh, mà mượt, bóng, gỗ và rất “royal”. Đây là kiểu mùi chỉ cần ngửi một lúc là thấy rõ nó muốn nói về sự giàu chất liệu và cảm giác đắt tiền.

Điểm mạnh của Alexandria II là khí chất. Nó không nhất thiết phải quá dễ mặc, nhưng cực kỳ có sân khấu. Trong điều kiện Việt Nam, chai này hợp hơn với tối, điều hòa, sự kiện đặc biệt hoặc người đã quen với mùi gỗ - oud sang và muốn nâng hẳn thang độ.

## Diễn biến trên da
Mở đầu đã khá đậm với gỗ và chiều ấm rõ ràng, sau đó oud theo hướng sạch sang cùng nền mềm bắt đầu bung ra, làm tổng thể ngày càng dày và tròn. Mùi phát triển chậm, sang và nhiều lớp.

Drydown là lớp gỗ ấm, oud mềm và rất giàu cảm giác xa xỉ. Nó không dành cho số đông và cũng không cần phải làm vừa lòng ai. Nhược điểm là tính ứng dụng hằng ngày thấp, đặc biệt ở thời tiết nóng.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Alexandria II có hiệu năng tốt, thường 8-10 giờ hoặc hơn; tỏa hương khá. Nó hợp tối, sự kiện, tiệc, mùa mát hoặc những dịp muốn mùi hương thật sự nổi khí chất.

Ở Việt Nam, nên dùng rất tiết chế và ưu tiên không gian mát. Ưu điểm là cực sang và có trọng lượng; nhược điểm là dễ quá tay nếu dùng sai hoàn cảnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai oud-woody rất sang, có cảm giác hoàng gia và không ngại độ đậm, Alexandria II là lựa chọn rất mạnh. Nó hợp người thích mùi high-end thực sự và đã quen với phong cách niche đậm.

Nên mua khi mày cần một chai cho dịp đặc biệt. Nếu mày muốn sự nhẹ, linh hoạt hoặc dễ dùng ban ngày, đây không phải hướng phù hợp.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "versace-dylan-blue",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Pour Homme Dylan Blue",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "VERSACE Pour Homme Dylan Blue chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dylan Blue là một blue fragrance nam hiện đại rất hiệu quả: sạch, tối vừa, có ambroxan, citrus và chút ngọt nhẹ đủ để tạo cảm giác mạnh mẽ nhưng vẫn dễ dùng. Nó không quá tinh như Chanel, cũng không quá khô, mà thiên về việc làm người mặc trông gọn gàng, tự tin và dễ tạo thiện cảm.

Điểm mạnh của Dylan Blue là tính thực chiến. Đây là kiểu chai dễ dùng, dễ hợp nhiều độ tuổi và bối cảnh, đặc biệt với ai cần một mùi nam hiện đại không quá đắt đỏ. Trong điều kiện Việt Nam, nó hợp đi làm, đi học, đi chơi và dùng quanh năm khá ổn.

## Diễn biến trên da
Mở đầu là citrus sạch và cảm giác hơi tối kiểu blue fragrance, sau đó ambroxan cùng nền gỗ giúp tổng thể trở nên nam tính và ổn định hơn. Mùi phát triển gọn, dễ hiểu và hiệu quả.

Drydown sạch, hơi ngọt nhẹ, nam tính và có độ bám khá dễ chịu. Nó không quá độc bản nhưng làm tốt đúng vai trò của nó. Nhược điểm là ai đã có nhiều chai blue sẽ thấy Dylan Blue không quá mới.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dylan Blue có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa đến khá. Nó hợp đi làm, đi chơi, ban ngày lẫn tối nhẹ, du lịch hoặc dùng làm chai grab-and-go rất tiện.

Ở Việt Nam, đây là kiểu mùi dùng khỏe vì sạch và linh hoạt. Ưu điểm là dễ mặc, nam tính và ít rủi ro; nhược điểm là tính cá nhân không quá cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai blue fragrance dễ dùng, giá dễ chịu và hiệu quả tốt, Dylan Blue là lựa chọn đáng cân nhắc. Nó hợp người cần một chai nam hiện đại gọn và không phải suy nghĩ nhiều.

Nên mua khi mày cần một chai everyday đa dụng. Nếu mày muốn chất cao cấp tinh hơn, có thể nhìn sang hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-egoiste",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Égoïste",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Égoïste chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Égoïste là một trong những chai Chanel nam có cá tính mạnh nhất: gỗ, gia vị, ấm và rất cổ điển theo kiểu quyền lực. Nó không sạch sáng như Platinum Égoïste, cũng không mềm trung tính, mà có chiều dày, sự nghiêm và một kiểu nam tính rất riêng. Đây là mùi hương dành cho người có gu rõ, không ngại bị xem là old-school.

Điểm mạnh của Égoïste là bản sắc. Trong một thị trường đầy mùi blue hoặc ngọt hiện đại, nó đứng hẳn một lane riêng. Ở điều kiện Việt Nam, chai này hợp hơn cho tối, thời tiết mát, không gian lịch sự hoặc người thích gu nam cổ điển có trọng lượng.

## Diễn biến trên da
Mở đầu có gia vị và gỗ lên khá rõ, sau đó phần ấm và nền mềm khiến tổng thể tròn hơn nhưng vẫn giữ khí chất nghiêm. Mùi phát triển nhất quán, ít chiều lòng số đông.

Drydown là lớp gỗ ấm, cay nhẹ và cực kỳ nam tính. Nó không phải kiểu sexy dễ dãi, mà là kiểu có uy. Nhược điểm là người quen mùi hiện đại có thể thấy Égoïste hơi khó gần.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Égoïste có độ lưu hương khá tốt, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, đi gặp gỡ trang trọng, dùng mùa mát hoặc khi muốn một mùi nam thật sự có quan điểm riêng.

Ở Việt Nam, nên dùng vừa tay và đẹp nhất trong phòng lạnh. Ưu điểm là rất có cá tính; nhược điểm là độ đại chúng thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai Chanel nam cổ điển, gỗ-gia vị và rất có khí chất, Égoïste là cái tên đáng thử. Nó hợp người thích mùi nam mạnh bản sắc và không muốn hòa tan vào thị trường hiện đại.

Nên mua khi mày muốn một mùi tuyên ngôn. Nếu mày cần sự dễ khen và linh hoạt cao, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "amouage-interlude-man",
    brandSlug: "amouage",
    brand: "AMOUAGE",
    name: "Interlude Man",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "AMOUAGE Interlude Man chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Interlude Man là một “quái vật” theo nghĩa tích cực: nhựa thơm, khói, oregano, da và chiều tối rất mạnh tạo nên một trong những mùi niche nam có bản sắc lớn nhất. Nó không hề dễ mặc, nhưng nếu hợp thì cho cảm giác cực kỳ quyền lực và không thể nhầm lẫn. Đây là chai dành cho người không ngại mùi hương có sân khấu riêng.

Điểm mạnh của Interlude là độ hoành tráng. Nó không chỉ đậm, mà còn giàu cấu trúc và cảm giác nghi lễ. Trong điều kiện Việt Nam, chai này hợp hơn cho tối, phòng lạnh, sự kiện đặc biệt hoặc người đã quen với mùi nhựa thơm nặng đô.

## Diễn biến trên da
Mở đầu khá dữ với oregano, khói và nhựa thơm hiện lên rất nhanh, sau đó mùi dần ổn định hơn khi da và nền ấm kéo tổng thể vào trạng thái tròn hơn. Đây là mùi phát triển rất mạnh, rất có chuyển động.

Drydown là lúc chai này dễ mặc nhất: nhựa thơm, da và khói mềm lại nhưng vẫn cực kỳ rõ bản sắc. Nhược điểm là đoạn đầu có thể gây choáng với người mới.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Interlude Man có hiệu năng rất mạnh, thường 9 giờ trở lên; tỏa hương khá lớn. Nó hợp tối, mùa mát, sự kiện, không gian rộng hoặc những lúc muốn mùi hương mang tính tuyên ngôn.

Ở Việt Nam, phải dùng cực kỳ tiết chế. Ưu điểm là quá khác biệt và rất có khí chất; nhược điểm là gần như không dành cho blind buy an toàn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích incense-resinous mạnh, dark và full character, Interlude Man là lựa chọn cực kỳ đáng giá. Nó hợp người có gu niche rõ và muốn một mùi hương thật sự không giống đám đông.

Nên mua khi mày muốn một chai cho dịp đặc biệt hoặc mood rõ. Nếu mày cần chai dùng hàng ngày, tránh hướng này.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "amouage-reflection-45-man",
    brandSlug: "amouage",
    brand: "AMOUAGE",
    name: "Reflection 45 Man",
    subName: "Extrait de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "AMOUAGE Reflection 45 Man chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Reflection 45 Man là phiên bản cô đặc, sâu và sang hơn của Reflection Man. Nó vẫn giữ tinh thần floral woody nam tính rất mượt, nhưng dày hơn, tối hơn và có độ sang đậm đặc hơn. Đây là kiểu mùi dành cho người thích phong cách thanh lịch nhưng muốn cảm giác high-end và trưởng thành rõ hơn.

Điểm mạnh của Reflection 45 là độ hoàn thiện rất cao. Nó không phải mùi “nổi loạn”, mà là mùi cực kỳ polished. Trong điều kiện Việt Nam, chai này hợp với tối, sự kiện lịch sự, môi trường điều hòa hoặc người thích dòng Reflection nhưng muốn bản đậm và nghiêm hơn.

## Diễn biến trên da
Mở đầu vẫn sạch và floral theo kiểu Reflection, nhưng nhanh chóng cho cảm giác dày, sâu và ít airy hơn bản thường. Mùi phát triển rất mượt, gần như không có góc gắt.

Drydown là lớp floral-gỗ ấm, sang và cực kỳ ôm da. Nó thanh lịch nhưng không mỏng. Nhược điểm là ai thích độ sáng thoáng của Reflection Man có thể thấy bản 45 quá nghiêm và quá dressy.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Reflection 45 Man có độ lưu hương tốt, khoảng 8 giờ trở lên; tỏa hương vừa đến khá. Nó hợp tối, gặp gỡ cấp cao, event, không gian sang hoặc những dịp cần một mùi nam cực kỳ chỉnh tề.

Ở Việt Nam, nên ưu tiên điều hòa hoặc buổi tối. Ưu điểm là cực sang và refined; nhược điểm là giá cao và tính everyday thấp hơn bản thường.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày yêu Reflection Man nhưng muốn phiên bản sâu, đậm và sang hơn nhiều, Reflection 45 Man rất đáng thử. Nó hợp người thích thanh lịch đỉnh cao và mùi hương được hoàn thiện rất kỹ.

Nên mua khi mày cần một chai dressy cao cấp. Nếu mày ưu tiên sự nhẹ và dễ dùng hằng ngày, Reflection Man thường hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-homme-sport-2021",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Dior Homme Sport 2021",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Dior Homme Sport 2021 chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Dior Homme Sport 2021 là kiểu citrus woody nam hiện đại rất sáng, sạch và có độ sang thể thao vừa phải. Nó không đơn thuần là mùi gym hay shower gel, mà có thêm nền gỗ và chút cay làm tổng thể trưởng thành hơn. Đây là một chai fresh rất tốt cho người muốn sự năng động nhưng vẫn giữ hình ảnh chỉnh chu.

Điểm mạnh của bản 2021 là sự cân bằng giữa tươi và nam tính. Nó đủ sáng cho ban ngày, nhưng không quá mỏng hay trẻ con. Trong điều kiện Việt Nam, đây là kiểu mùi cực hợp để dùng đi làm, đi học, đi chơi ban ngày hoặc du lịch.

## Diễn biến trên da
Mở đầu citrus rất rõ và sáng, sau đó gỗ cùng chút cay nhẹ giúp tổng thể tròn hơn và đứng form hơn. Mùi phát triển gọn, hiện đại và hiệu quả.

Drydown sạch, gỗ nhẹ và rất dễ chịu trên da. Nó không quá phức tạp, nhưng làm tốt đúng vai trò của một chai sporty cao cấp. Nhược điểm là độ cá tính không mạnh nếu mày đã có nhiều chai fresh.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Dior Homme Sport 2021 có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, ban ngày, du lịch, mùa nóng, gặp gỡ casual hoặc làm signature cho người thích tông sáng sạch.

Ở Việt Nam, chai này dùng rất khỏe. Ưu điểm là fresh nhưng không nhạt; nhược điểm là không dành cho ai thích mùi tối hoặc statement mạnh.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai fresh nam sáng, gọn và có chất lượng hoàn thiện tốt, Dior Homme Sport 2021 là lựa chọn rất ổn. Nó hợp người thích phong cách năng động, sạch và trưởng thành vừa đủ.

Nên mua khi mày muốn một chai ban ngày dùng nhiều. Nếu mày thích mùi dày, ngọt hoặc rất cá tính, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "versace-pour-homme",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Pour Homme",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "VERSACE Pour Homme chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Versace Pour Homme là kiểu citrus aromatic nam rất sáng, sạch và dễ dùng. Nó không cố trở nên quá cá tính hay quá sang kiểu trầm, mà tập trung vào cảm giác gọn gàng, dễ gần và cực hợp thời tiết nóng. Đây là một trong những chai designer nam fresh dễ sống nhất nếu mày cần thứ gì đó đơn giản mà hiệu quả.

Điểm mạnh của chai này là tính ứng dụng. Nó đi làm, đi học, đi chơi ban ngày, đi cà phê hay du lịch đều ổn. Trong khí hậu Việt Nam, đây là kiểu mùi gần như luôn có đất diễn vì sáng, thoáng và ít gây mệt cho người xung quanh.

## Diễn biến trên da
Mở đầu là citrus và neroli sạch sáng lên khá nhanh, sau đó nền xạ hương và gỗ nhẹ giúp mùi tròn hơn nhưng vẫn giữ cảm giác mát. Mùi phát triển gọn, dễ hiểu và không có góc gắt.

Drydown sạch, hơi xà phòng cao cấp và khá ôm da. Nó không tạo cảm giác quá phô trương, nhưng đủ khiến người khác thấy mày thơm và chỉnh tề. Nhược điểm là độ cá tính và độ bùng nổ không cao.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Versace Pour Homme có độ lưu hương vừa, khoảng 4-6 giờ; tỏa hương vừa nhẹ. Nó hợp đi làm, đi học, mùa nóng, sau tắm, du lịch hoặc làm chai fresh hằng ngày rất thực dụng.

Ở Việt Nam, chai này dùng cực khỏe nhờ độ thoáng. Ưu điểm là dễ mặc, sạch và giá trị sử dụng cao; nhược điểm là hiệu năng chỉ ở mức ổn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam fresh dễ dùng, ít rủi ro và hợp thời tiết nóng, Versace Pour Homme là lựa chọn rất ổn. Nó hợp người thích mùi sạch, sáng và không muốn suy nghĩ nhiều.

Nên mua khi mày muốn một chai ban ngày thật thực dụng. Nếu mày cần mùi đậm, tối hoặc thật nổi, nên tìm hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-grey-vetiver",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Grey Vetiver",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Grey Vetiver chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Grey Vetiver là một trong những chai Tom Ford chỉn chu nhất theo hướng sạch, khô, sang và trưởng thành. Nó không đi theo kiểu Tom Ford tối, ngọt hay sexy thường thấy, mà chọn hướng vetiver-citrus cực kỳ lịch sự, gọn và mang khí chất doanh nhân rõ rệt. Đây là kiểu mùi không cần phô trương nhưng vẫn khiến người mặc trông rất có gu.

Điểm mạnh của Grey Vetiver là sự tinh gọn. Mọi thứ được làm rất sạch: citrus đủ sáng, vetiver đủ khô, gia vị đủ nhẹ để tạo form nam tính rõ nhưng không gắt. Ở khí hậu Việt Nam, đây là nhóm mùi rất hợp với đi làm, gặp khách, mặc sơ mi, vest hoặc những lúc cần một mùi hương đáng tin cậy hơn là gây ấn tượng kiểu ồn ào.

## Diễn biến trên da
Mở đầu là citrus sáng và sắc, tạo cảm giác rất gọn gàng. Sau đó vetiver xuất hiện rõ dần, mang đến phần thân mùi khô, xanh và rất nam tính. Càng về sau, lớp nền gỗ và gia vị nhẹ giữ tổng thể ổn định, không bị mỏng hay bay theo kiểu nước cologne đơn giản.

Drydown của Grey Vetiver rất đẹp nếu mày thích kiểu clean executive. Nó không ngọt, không tối, không dramatic, mà đều và sang theo cách rất controlled. Nhược điểm là ai thích Tom Ford kiểu nổi bật, đậm cá tính có thể thấy chai này quá an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Grey Vetiver có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa phải, rất hợp môi trường công sở và không gian lịch sự. Nó dùng tốt cho ban ngày, họp hành, gặp đối tác, đi làm hoặc các dịp cần sự chuyên nghiệp.

Trong thời tiết Việt Nam, đây là chai rất dễ dùng vì không ngọt và không nặng. Ưu điểm là thanh lịch, sạch, ít rủi ro; nhược điểm là không phải lựa chọn tối ưu cho hẹn hò buổi tối hoặc những ai thích mùi có độ gây nghiện cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày cần một chai nam văn phòng cao cấp, lịch sự, sang và cực kỳ dễ mặc, Grey Vetiver là ứng viên rất mạnh. Nó hợp người trưởng thành, làm việc chuyên nghiệp và thích mùi hương phản ánh sự chỉn chu hơn là sự bùng nổ.

Nên mua khi mày muốn một chai signature đi làm hoặc gặp khách. Nếu mày tìm một chai tối, ngọt hay quyến rũ hơn, Tom Ford còn nhiều hướng khác hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-fahrenheit-le-parfum",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Fahrenheit Le Parfum",
    subName: "Le Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Fahrenheit Le Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Fahrenheit Le Parfum là phiên bản ấm, ngọt và dressy hơn của DNA Fahrenheit. Nó vẫn giữ phần khung nam tính đặc trưng, nhưng thay vì nhấn mạnh sắc xanh-xăng-violet như bản gốc, nó đưa mùi vào vùng vanilla, da và chiều tối rõ hơn. Đây là kiểu mùi dành cho người thích Fahrenheit nhưng muốn một phiên bản dễ “đi tối” và quyến rũ hơn.

Điểm mạnh của bản Le Parfum là nó vẫn có cá tính Fahrenheit, nhưng bớt góc cạnh và có độ cuốn đại chúng hơn một chút. Trong khí hậu Việt Nam, chai này hợp cho tối, hẹn hò, máy lạnh hoặc người muốn một mùi nam có bản sắc nhưng vẫn mềm hơn bản EDT.

## Diễn biến trên da
Mở đầu vẫn có chút DNA quen thuộc, nhưng khá nhanh vanilla và nền ấm bắt đầu kéo tổng thể vào vùng dày, mượt và quyến rũ hơn. Mùi phát triển rõ theo hướng dressy hơn bản gốc.

Drydown là lớp da-vanilla ấm, nam tính và khá ôm da. Nó giữ được chất riêng mà bớt “khó” hơn Fahrenheit thường. Nhược điểm là ai yêu đúng chất xanh-xăng của bản EDT có thể thấy bản này đã đổi mood đáng kể.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Fahrenheit Le Parfum có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa. Nó hợp tối, đi ăn tối, hẹn hò, thời tiết mát hoặc khi muốn một mùi nam có chiều sâu và chất riêng.

Ở Việt Nam, dùng đẹp nhất về chiều tối hoặc trong phòng điều hòa. Ưu điểm là cá tính nhưng dễ mặc hơn bản gốc; nhược điểm là trời nóng dễ làm lớp ngọt dày hơn mong muốn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích Fahrenheit nhưng muốn phiên bản ấm, mượt và sexy hơn, Le Parfum là lựa chọn rất đáng thử. Nó hợp người thích mùi nam tối có bản sắc mà vẫn đủ wearable cho thực tế.

Nên mua khi mày cần một chai tối có khí chất riêng. Nếu mày mê đúng DNA khô và sắc của Fahrenheit EDT, nên giữ kỳ vọng đúng trước khi mua.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "armani-code-parfum",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Armani Code Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIORGIO ARMANI Armani Code Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Armani Code Parfum là kiểu mùi nam sạch, mượt và sang theo hướng hiện đại tối giản. Nó giữ tinh thần lịch thiệp của line Armani Code nhưng bớt ngọt nặng, bớt tối dày hơn vài bản trước, thay vào đó là cảm giác cân bằng, gọn và rất dễ dùng. Đây là một chai nam rất hợp người thích phong cách chững chạc mà không muốn mùi hương quá áp lực.

Điểm mạnh của Code Parfum là độ tinh chỉnh. Nó không quá sexy kiểu câu kéo, cũng không quá công sở khô cứng. Trong bối cảnh Việt Nam, chai này hợp đi làm, gặp gỡ, tối nhẹ hoặc làm signature cho người thích mùi sạch-sang.

## Diễn biến trên da
Mở đầu sáng và khá sạch, sau đó nền ấm cùng chút tonka/gỗ làm tổng thể mềm và mượt hơn. Mùi phát triển liền lạc, không có đoạn nào quá gắt.

Drydown là lớp sạch, ấm nhẹ và nam tính vừa đủ. Nó không gây chú ý kiểu quá mạnh, nhưng rất dễ khiến người khác thấy gọn gàng và có gu. Nhược điểm là người thích mùi thật nổi hoặc thật dark có thể thấy nó hơi an toàn.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Armani Code Parfum có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, gặp đối tác, đi ăn tối nhẹ, dùng quanh năm hoặc làm chai đa dụng thiên về lịch sự.

Ở Việt Nam, chai này dùng khá khỏe vì không quá dày. Ưu điểm là sang, gọn và dễ mặc; nhược điểm là độ cá tính không quá lớn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam lịch thiệp, modern và ít rủi ro hơn nhiều bản ngọt đậm, Armani Code Parfum là lựa chọn rất ổn. Nó hợp người thích sự chững chạc gọn gàng hơn là statement mạnh.

Nên mua khi mày cần một chai signature dễ dùng. Nếu mày thích mùi thật đậm hoặc cực kỳ sexy, có thể thấy nó hơi hiền.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "xerjoff-torino21",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "Torino21",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "XERJOFF Torino21 chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Torino21 là kiểu aromatic xanh mát rất sáng, rất thể thao nhưng được làm với chất lượng niche cực đẹp. Nó cho cảm giác bạc hà, thảo mộc, độ sạch và năng lượng cao ngay từ đầu, nhưng không rẻ tiền hay quá shower-gel. Đây là một chai cực hợp với người thích mùi tươi, sạch, hoạt bát mà vẫn muốn có chất lượng cảm giác cao hơn designer phổ thông.

Điểm mạnh của Torino21 là độ sảng khoái và độ “lên người” rất tốt. Trong khí hậu Việt Nam, chai này gần như sinh ra để dùng ban ngày, mùa nóng, vận động nhẹ hoặc những lúc muốn đầu óc thấy thoáng ngay từ cú xịt đầu.

## Diễn biến trên da
Mở đầu là bạc hà và aromatic xanh rất rõ, sau đó phần thảo mộc cùng nền sạch giúp tổng thể ổn định và bớt bốc hơn. Mùi phát triển khá tuyến tính nhưng chất lượng blend rất cao.

Drydown sạch, xanh và mát kiểu sang chứ không đơn điệu. Nó không có chiều tối hay độ sexy lớn, nhưng rất đáng tin khi cần mùi tươi. Nhược điểm là ai thích mùi dày, ấm hoặc phức tạp sẽ thấy Torino21 hơi thẳng.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Torino21 có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp ban ngày, mùa nóng, đi làm, đi học, du lịch, tập nhẹ hoặc làm chai summer signature rất tốt.

Ở Việt Nam, chai này dùng cực ổn nhờ độ thoáng. Ưu điểm là fresh rất đẹp và khác mùi sporty rẻ tiền; nhược điểm là không dành cho ai thích chiều sâu tối.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai xanh mát, sạch và có năng lượng cao cho mùa nóng, Torino21 là lựa chọn rất mạnh. Nó hợp người thích aromatic fresh nhưng vẫn muốn chất lượng niche rõ rệt.

Nên mua khi mày cần một chai ban ngày thật sảng khoái. Nếu mày chỉ thích mùi ấm, tối hoặc rất sexy, đây không phải hướng chính.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-tuscan-leather",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Tuscan Leather",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Tuscan Leather chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Tuscan Leather là một trong những chai leather nổi tiếng nhất của Tom Ford: da, quả chín sẫm, khói và cảm giác xa xỉ rất rõ. Nó không mềm ôm như Ombré Leather, mà mạnh hơn, đậm hơn và có chất quyền lực hơn. Đây là kiểu mùi không dành cho người thích sự an toàn; nó hiện diện như một tuyên ngôn.

Điểm mạnh của Tuscan Leather là độ nhận diện cực cao. Nó có sức nặng, có cái sang kiểu dark luxury và rất dễ tạo ấn tượng. Trong điều kiện Việt Nam, chai này hợp với tối, phòng lạnh, sự kiện hoặc người thật sự thích leather đậm có cá tính mạnh.

## Diễn biến trên da
Mở đầu da lên rất nhanh cùng sắc quả sẫm và chút khói, sau đó tổng thể dần tròn hơn nhưng vẫn giữ độ dày và cảm giác dark. Mùi phát triển mạnh, không hiền ngay cả ở giai đoạn sau.

Drydown là lớp da khô-ấm, hơi khói và rất quyền lực. Nó không “thân thiện”, nhưng cực kỳ có bản sắc. Nhược điểm là dùng sai hoàn cảnh sẽ dễ quá tay và làm người khác thấy áp lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Tuscan Leather có hiệu năng tốt, thường 8 giờ trở lên; tỏa hương khá. Nó hợp tối, event, mùa mát, không gian sang hoặc những lúc muốn dùng mùi hương như một phần của hình ảnh mạnh.

Ở Việt Nam, nên dùng cực tiết chế. Ưu điểm là leather rất iconic; nhược điểm là độ đa dụng thấp và kén gu cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai leather dark-luxury thật sự có tiếng nói riêng, Tuscan Leather là lựa chọn rất đáng thử. Nó hợp người thích mùi đậm, có uy và không ngại bị nhớ.

Nên mua khi mày cần một chai tuyên ngôn cho buổi tối. Nếu mày muốn leather mềm, dễ mặc hơn, Ombré Leather thường hợp hơn.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dg-light-blue-intense-homme",
    brandSlug: "dg",
    brand: "DOLCE & GABBANA",
    name: "Light Blue Eau Intense Pour Homme",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DOLCE & GABBANA Light Blue Eau Intense Pour Homme chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Light Blue Eau Intense Pour Homme là kiểu aquatic-citrus cực kỳ sáng, mặn và mát, mang đúng tinh thần biển mùa hè Địa Trung Hải. Nó không đi theo hướng ngọt hay quá xanh lá, mà tập trung vào cảm giác nước, gió, nắng và sự sạch rõ rệt. Đây là một chai rất hiệu quả cho người thích mùi nam mùa nóng.

Điểm mạnh của bản Intense là nó “ra biển” rõ hơn bản thường và bám tốt hơn. Trong khí hậu Việt Nam, đây là kiểu chai rất hợp ban ngày, nắng nóng, đi biển, du lịch hoặc dùng khi cần một mùi hương thoáng và năng lượng cao.

## Diễn biến trên da
Mở đầu citrus và cảm giác aquatic mặn lên rất nhanh, sau đó lớp xạ hương và nền gỗ nhẹ giúp mùi ổn định hơn nhưng vẫn giữ tinh thần biển. Mùi phát triển khá thẳng, dễ hiểu và rất đúng vai trò.

Drydown sạch, mặn nhẹ và bám da kiểu fresh rất dễ chịu. Nó không quá nghệ nhưng cực kỳ thực dụng. Nhược điểm là ai không thích cảm giác aquatic mặn có thể thấy nó hơi “biển” quá mức.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Light Blue Eau Intense Pour Homme có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp ban ngày, mùa nóng, du lịch, đi biển, hoạt động ngoài trời hoặc làm chai fresh rất đúng chức năng.

Ở Việt Nam, chai này dùng khá khỏe. Ưu điểm là mát, sáng và hợp nắng nóng; nhược điểm là tính chiều sâu và độ khác biệt không lớn.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam aquatic rõ, mặn mát và dùng ngon trong mùa nóng, Light Blue Eau Intense Pour Homme là lựa chọn rất ổn. Nó hợp người thích cảm giác biển thật sự thay vì fresh chung chung.

Nên mua khi mày cần một chai summer scent đúng nghĩa. Nếu mày ghét aquatic hoặc thích mùi ấm, nên tránh hướng này.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "prada-luna-rossa-black",
    brandSlug: "prada",
    brand: "PRADA",
    name: "Luna Rossa Black",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PRADA Luna Rossa Black chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Luna Rossa Black là kiểu mùi nam ấm, tối nhẹ và rất mượt theo cách Prada: sạch, hơi powder, hơi amber và cực kỳ dễ mặc. Nó không gào lên “sexy” như nhiều chai ngọt tối, mà cuốn theo kiểu gần da, tinh tế và hiện đại. Đây là một chai buổi tối rất hợp với người thích mùi hương sang nhưng không ồn.

Điểm mạnh của chai này là texture. Nó mịn, tròn, hơi phấn nhẹ và rất dễ chịu khi lên da. Trong bối cảnh Việt Nam, Luna Rossa Black hợp với tối, hẹn hò, đi ăn, môi trường điều hòa hoặc người không thích mùi quá gắt.

## Diễn biến trên da
Mở đầu có cảm giác sạch tối khá rõ, sau đó phần amber và nền mềm làm tổng thể dày hơn nhưng vẫn giữ nét Prada rất gọn. Mùi phát triển êm, ít góc cạnh và khá ôm.

Drydown là lớp ấm, sạch, hơi powder và rất dễ gần. Nó không quá nổ, nhưng càng ngửi gần càng thấy đẹp. Nhược điểm là ai thích projection lớn hoặc mùi statement mạnh có thể thấy nó hơi kín.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Luna Rossa Black có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp tối, hẹn hò, đi ăn tối, đi làm buổi chiều tối hoặc dùng như một chai dark-clean signature.

Ở Việt Nam, chai này dùng khá ổn trong máy lạnh. Ưu điểm là mượt, sang và dễ sống cùng; nhược điểm là độ cá tính không thuộc nhóm bùng nổ.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai nam tối nhẹ, sạch và sang kiểu Prada, Luna Rossa Black rất đáng thử. Nó hợp người thích mùi gần da, tinh tế và không muốn quá phô trương.

Nên mua khi mày cần một chai buổi tối mềm và gọn. Nếu mày muốn mùi thật đậm hoặc thật ngọt, có thể chưa đủ đô.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-carlisle",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Carlisle",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PARFUMS DE MARLY Carlisle chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Carlisle là kiểu mùi tối, dày, ngọt ấm và rất sang của Parfums de Marly. Nó có trái cây tối, gia vị, patchouli và vanilla hòa vào nhau theo cách rất “full body”, tạo cảm giác quyền lực và giàu rõ rệt. Đây là chai dành cho người thích mùi buổi tối có lực mạnh và khí chất sang không cần phải giải thích nhiều.

Điểm mạnh của Carlisle là độ hiện diện. Nó vừa có ngọt, vừa có chiều tối, vừa có texture sang nên rất dễ để lại ấn tượng. Trong điều kiện Việt Nam, chai này hợp cho tối, điều hòa, event, hẹn hò hoặc những dịp cần mùi hương có trọng lượng lớn.

## Diễn biến trên da
Mở đầu hơi tối với trái cây và gia vị, sau đó patchouli cùng vanilla dần đẩy tổng thể vào vùng dày, tròn và rất đậm. Mùi phát triển khá mạnh, không dành cho người thích sự nhẹ nhàng.

Drydown là lớp ngọt ấm, tối và rất bền. Nó có cảm giác xa xỉ rõ và giữ mood tốt trong thời gian dài. Nhược điểm là trời nóng hoặc xịt nặng tay dễ làm nó trở nên hơi nhiều.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Carlisle có hiệu năng tốt, thường 8-10 giờ; tỏa hương khá. Nó hợp tối, event, hẹn hò, mùa mát hoặc khi muốn mùi hương mang cảm giác giàu, đậm và nổi.

Ở Việt Nam, nên dùng tiết chế và ưu tiên không gian mát. Ưu điểm là rất sang và mạnh; nhược điểm là tính đa dụng ban ngày thấp.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai buổi tối đậm, ngọt ấm và cực kỳ có khí chất, Carlisle là lựa chọn rất mạnh. Nó hợp người thích mùi hương full-bodied và không ngại sự nổi bật.

Nên mua khi mày cần một chai tối statement. Nếu mày thích sự sáng, nhẹ hoặc casual, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "versace-eros-flame",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Eros Flame",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "VERSACE Eros Flame chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Eros Flame là phiên bản cay, ấm và đỏ hơn của Eros. Nó vẫn giữ tinh thần dễ gây chú ý, năng lượng cao và có độ sexy rõ, nhưng thay vì đi theo hướng mint-vanilla sáng, nó đẩy sang vùng citrus nóng, gia vị và nền ấm nam tính hơn. Đây là một chai rất hợp với người thích mùi nổi nhưng muốn trưởng thành hơn Eros gốc một chút.

Điểm mạnh của Eros Flame là sự bùng nổ có kiểm soát. Nó vẫn rất dễ nhận ra là một chai “đi chơi”, nhưng có chiều hơn và ít trẻ con hơn bản xanh. Trong khí hậu Việt Nam, chai này hợp với tối, hẹn hò, tiệc nhẹ hoặc những dịp muốn để lại ấn tượng nhanh.

## Diễn biến trên da
Mở đầu citrus và gia vị lên khá mạnh, sau đó nền ấm và ngọt bắt đầu xuất hiện, làm tổng thể dày hơn và cuốn hơn. Mùi phát triển theo hướng nồng nhiệt, không hề kín.

Drydown là lớp ấm, ngọt nhẹ và nam tính rõ. Nó dễ tạo cảm giác hấp dẫn nếu dùng đúng liều. Nhược điểm là xịt mạnh tay trong thời tiết nóng dễ khiến mùi hơi áp lực.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Eros Flame có độ lưu hương khá tốt, khoảng 7-9 giờ; tỏa hương vừa đến khá. Nó hợp tối, đi chơi, date night, mùa mát hoặc những lúc muốn mùi hương bật lên rõ.

Ở Việt Nam, nên dùng về chiều tối và kiểm soát số lần xịt. Ưu điểm là nổi và dễ tạo ấn tượng; nhược điểm là tính công sở không cao.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích vibe của Eros nhưng muốn một phiên bản cay ấm và chững hơn, Eros Flame là lựa chọn đáng thử. Nó hợp người thích mùi thu hút, năng lượng cao và không ngại nổi.

Nên mua khi mày cần một chai đi chơi tối rất hiệu quả. Nếu mày thích sự kín đáo hoặc quá thanh lịch, nên chọn hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "louis-vuitton-limmensite",
    brandSlug: "louis-vuitton",
    brand: "LOUIS VUITTON",
    name: "L'Immensité",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LOUIS VUITTON L'Immensité chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L’Immensité là kiểu citrus-ginger-ambrox rất hiện đại, sạch và phóng khoáng. Nó cho cảm giác sáng, airy và rất “expensive fresh”, nhưng vẫn có độ ấm nhẹ ở nền để không bị mỏng. Đây là một trong những chai Louis Vuitton nam dễ mặc nhất nếu mày thích sự lịch thiệp thoáng và không muốn mùi hương quá ồn.

Điểm mạnh của L’Immensité là cảm giác rộng và thoáng như đúng cái tên. Nó vừa đủ fresh cho ban ngày, vừa đủ polished để giữ hình ảnh cao cấp. Trong điều kiện Việt Nam, đây là chai rất hợp cho đi làm, du lịch, dùng mùa nóng hoặc làm signature fresh-sang.

## Diễn biến trên da
Mở đầu là citrus và gừng khá sáng, sau đó ambrox cùng nền gỗ nhẹ giúp mùi trở nên mượt, sạch và có chiều hơn. Mùi phát triển không quá phức tạp nhưng cực kỳ dễ sống cùng.

Drydown sạch, hơi ấm nhẹ và rất gọn gàng. Nó không cố gây choáng, mà chinh phục bằng cảm giác chỉn chu và dễ gần. Nhược điểm là ai thích chiều tối sâu hoặc cá tính mạnh có thể thấy nó hơi hiền.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L’Immensité có độ lưu hương khá, khoảng 6-8 giờ; tỏa hương vừa. Nó hợp đi làm, ban ngày, mùa nóng, du lịch, gặp gỡ hoặc làm signature cho người thích mùi sạch cao cấp.

Ở Việt Nam, chai này dùng rất khỏe. Ưu điểm là fresh sang và linh hoạt; nhược điểm là giá cao cho một phong cách tương đối tối giản.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai Louis Vuitton nam sáng, sang và cực dễ mặc, L’Immensité là lựa chọn rất tốt. Nó hợp người thích mùi hương tinh, thoáng và không cần phải gồng để nổi bật.

Nên mua khi mày cần một chai fresh signature cao cấp. Nếu mày thích mùi tối, ngọt hoặc statement mạnh, đây không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "louis-vuitton-ombre-nomade",
    brandSlug: "louis-vuitton",
    brand: "LOUIS VUITTON",
    name: "Ombre Nomade",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LOUIS VUITTON Ombre Nomade chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Ombre Nomade là kiểu oud-rose-dark luxury cực kỳ đậm và rất “statement”. Nó không mềm mại dễ gần, cũng không cố làm oud trở nên hiền, mà đẩy thẳng vào cảm giác tối, sâu, hơi khói và cực kỳ xa xỉ. Đây là một chai dành cho người thích mùi hương có trọng lượng lớn và muốn xuất hiện với khí chất rất rõ.

Điểm mạnh của Ombre Nomade là độ sang kiểu đêm. Nó vừa giàu, vừa tối, vừa có cảm giác được hoàn thiện ở mức cao. Trong điều kiện Việt Nam, chai này hợp hơn cho tối, phòng lạnh, event hoặc người đã quen với mùi oud đậm và không cần sự an toàn.

## Diễn biến trên da
Mở đầu rất đậm với oud và sắc tối hiện lên nhanh, sau đó lớp hoa hồng tối cùng nền khói - nhựa làm tổng thể ngày càng dày và mượt hơn. Mùi phát triển chậm nhưng rất có uy lực.

Drydown là lớp oud tối, ấm và cực kỳ bền trên da. Nó không nhẹ nhàng ở bất kỳ giai đoạn nào. Nhược điểm là cực kén hoàn cảnh và dễ quá tay nếu dùng sai chỗ.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Ombre Nomade có hiệu năng rất mạnh, thường 9 giờ trở lên; tỏa hương khá lớn. Nó hợp tối, sự kiện, mùa mát, không gian sang hoặc những lúc muốn mùi hương làm một tuyên ngôn rõ ràng.

Ở Việt Nam, phải dùng cực tiết chế. Ưu điểm là cực sang và không thể nhầm; nhược điểm là gần như không phù hợp cho người thích mùi nhẹ hoặc môi trường kín ban ngày.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai oud dark-luxury thực sự có độ hiện diện lớn, Ombre Nomade là lựa chọn rất mạnh. Nó hợp người thích mùi tối, đắt và có cá tính quyền lực.

Nên mua khi mày cần một chai special occasion hoặc evening statement. Nếu mày cần sự linh hoạt hằng ngày, đây không phải hướng nên ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "acqua-di-parma-colonia",
    brandSlug: "acqua-di-parma",
    brand: "ACQUA DI PARMA",
    name: "Colonia",
    subName: "Eau de Cologne",
    perfumer: "BLOCKED_SOURCE",
    gender: "unisex",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "ACQUA DI PARMA Colonia chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Colonia là hình mẫu của citrus cổ điển Ý: sáng, sạch, thanh lịch và cực kỳ gọn gàng. Nó không theo hướng trẻ trung ngọt hoặc quá sporty, mà là vẻ đẹp của áo sơ mi trắng, barber tinh tế và phong thái lịch sự nhẹ nhàng. Đây là một trong những mùi citrus kinh điển cho người thích sự thanh sạch đúng nghĩa.

Điểm mạnh của Colonia là khí chất. Nó không cần phải đậm mới sang, mà sang ở cách đứng rất thẳng, rất sạch và rất chuẩn. Trong khí hậu Việt Nam, chai này hợp ban ngày, đi làm, gặp gỡ lịch sự hoặc những ai thích mùi citrus không đại trà kiểu shower gel.

## Diễn biến trên da
Mở đầu citrus rất sáng và tự nhiên, sau đó lavender/aromatic nhẹ cùng nền gỗ - xạ giúp tổng thể tròn hơn mà vẫn giữ nét mát thanh. Mùi phát triển tinh tế, ít phô trương.

Drydown sạch, hơi barbershop và cực kỳ lịch thiệp. Nó không sexy trực diện, nhưng rất có gu. Nhược điểm là hiệu năng không thuộc nhóm mạnh và tính hiện đại “wow” không cao.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Colonia có độ lưu hương vừa, khoảng 4-6 giờ; tỏa hương nhẹ đến vừa. Nó hợp đi làm, buổi sáng, mùa nóng, gặp đối tác hoặc làm chai fresh thanh lịch hằng ngày.

Ở Việt Nam, chai này dùng rất hợp nhờ độ thoáng. Ưu điểm là đẹp, sạch và sang kiểu cổ điển; nhược điểm là ai thích mùi đậm sẽ thấy hơi hiền.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày thích citrus thanh lịch, barbershop sạch và khí chất Ý cổ điển, Colonia là lựa chọn rất đáng thử. Nó hợp người thích mùi hương gọn, có giáo dưỡng và không cần phô trương.

Nên mua khi mày cần một chai buổi sáng thật đẹp. Nếu mày muốn hiệu năng mạnh hoặc vibe hiện đại hơn, nên cân nhắc hướng khác.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Unisex", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "parfums-de-marly-sedley",
    brandSlug: "parfums-de-marly",
    brand: "PARFUMS DE MARLY",
    name: "Sedley",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "PARFUMS DE MARLY Sedley chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
Sedley là kiểu fresh xanh - bạc hà - citrus được làm theo phong cách niche sáng, sạch và rất “đắt”. Nó không nặng tính biển hay shower gel, mà mang cảm giác mát, thoáng và polished hơn. Đây là chai hợp với người thích mùi nam fresh cao cấp, có năng lượng nhưng vẫn rất chỉn chu.

Điểm mạnh của Sedley là sự cân bằng giữa sảng khoái và sang. Nó đủ dễ dùng cho ban ngày, nhưng vẫn có chất lượng cảm giác cao hơn nhiều chai fresh phổ thông. Trong khí hậu Việt Nam, Sedley gần như là kiểu chai sinh ra để dùng ở thời tiết nóng.

## Diễn biến trên da
Mở đầu citrus và bạc hà lên rất tươi, sau đó lớp aromatic xanh cùng nền gỗ nhẹ giúp tổng thể mượt và đứng form hơn. Mùi phát triển khá sạch, mát và có cảm giác “air-conditioned luxury”.

Drydown là lớp fresh sạch, hơi xanh và rất dễ chịu. Nó không có chiều tối hoặc độ sexy nặng, nhưng rất đáng tin khi cần một mùi thơm sang - thoáng. Nhược điểm là người thích chiều sâu ấm có thể thấy Sedley hơi nhẹ mood.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
Sedley có độ lưu hương khá, khoảng 5-7 giờ; tỏa hương vừa. Nó hợp đi làm, mùa nóng, ban ngày, du lịch, đi chơi nhẹ hoặc làm signature fresh cao cấp.

Ở Việt Nam, chai này dùng cực ổn. Ưu điểm là fresh đẹp và ít mệt; nhược điểm là giá thường cao hơn mức người ta kỳ vọng cho một mùi sáng.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai fresh niche sáng, sạch và có cảm giác cao cấp thực sự, Sedley là lựa chọn rất mạnh. Nó hợp người thích phong cách chỉn chu, mát và hiện đại.

Nên mua khi mày cần một chai mùa nóng dùng nhiều. Nếu mày thích mùi tối, dày hoặc quá cá tính, đây không phải hướng ưu tiên.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dg-the-one-for-men-eau-de-parfum",
    brandSlug: "dg",
    brand: "DOLCE & GABBANA",
    name: "The One for Men Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DOLCE & GABBANA The One for Men Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "guerlain-l-homme-ideal-eau-de-parfum",
    brandSlug: "guerlain",
    brand: "GUERLAIN",
    name: "L Homme Ideal Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "Thierry Wasser, Delphine Jelk",
    gender: "nam",
    image: "/images/products/guerlain-l-homme-ideal-edp-main.jpg",
    images: [{ url: "/images/products/guerlain-l-homme-ideal-edp-main.jpg", source: "studio", caption: "Ảnh sản phẩm L'Homme Ideal EDP (chai và hộp)" }, { url: "/images/products/guerlain-l-homme-ideal-edp-bottle.jpg", source: "studio", caption: "Ảnh chai L'Homme Ideal EDP" }],
    description: "(Chờ nguồn xác minh)",
    productCopy: `## Mùi hương tổng thể
L'Homme Ideal Eau de Parfum là một trong những chai designer nam có cá tính riêng rõ nhất của Guerlain. DNA nổi bật là hạnh nhân, cherry, vanilla, da và chút gia vị ấm, tạo cảm giác sang, hơi dark và có độ ăn chơi vừa đủ. Đây không phải kiểu ngọt trẻ trung theo hướng kẹo hay bubblegum, mà là kiểu ngọt có chiều sâu, phù hợp người muốn một mùi nam tính nhưng vẫn có điểm nhấn khác biệt.

Ở Việt Nam, chai này hợp với những ai đã chán các mùi xanh sạch phổ thông và muốn thứ gì đó đậm đà hơn cho chiều tối. Nó vừa có độ quyến rũ, vừa có tính nhận diện tốt. Khi lên đúng da, phần cherry-hạnh nhân-da của L'Homme Ideal EDP rất bắt, tạo cảm giác sang và hơi bad boy theo cách trưởng thành.

## Diễn biến trên da
Mở đầu thường có chút gia vị và citrus nhẹ, nhưng rất nhanh hạnh nhân và cherry xuất hiện, tạo ra màu sắc gần như đặc trưng riêng của dòng này. Sau đó vanilla, da và gỗ làm tổng thể sâu hơn, ấm hơn và dày hơn. Nếu da mày ấm, phần ngọt sẽ rõ hơn; nếu da khô, phần da và gỗ sẽ nổi hơn.

Đây là chai có diễn biến khá thú vị vì từ đầu đến cuối nó vẫn giữ được chất dark sweet riêng. Drydown thường mềm, tròn và có cảm giác hơi quyến rũ kiểu dressed-up. Nhược điểm là với ai cực ghét note ngọt hoặc cherry, chai này có thể hơi kén hơn các mùi nam phổ thông.

## Độ lưu hương / tỏa hương / hoàn cảnh dùng
L'Homme Ideal EDP có hiệu năng khá tốt, lưu hương khoảng 7-9 giờ, tỏa hương vừa đến khá trong giai đoạn đầu. Nó hợp nhất cho buổi tối, hẹn hò, đi chơi, tiệc nhẹ, thời tiết mát hoặc không gian máy lạnh.

Trong khí hậu Việt Nam, nên tiết chế số lần xịt nếu dùng khi trời nóng. Mùa mưa, phòng lạnh, tối hoặc dịp cuối năm là lúc chai này phát huy đẹp nhất. Ưu điểm là mùi có màu sắc riêng và dễ tạo ấn tượng; nhược điểm là không phải kiểu an toàn tuyệt đối cho văn phòng chật kín.

## Kết luận nhanh: hợp ai, khi nào nên mua
Nếu mày muốn một chai designer nam khác biệt hơn mặt bằng chung, có chiều sâu, có độ sexy và không quá đại trà, L'Homme Ideal EDP rất đáng thử. Nó hợp người thích phong cách tối màu, buổi tối, có chút bí ẩn và muốn một mùi làm điểm nhấn cá nhân.

Nên mua khi mày đã có ít nhất một chai fresh hoặc văn phòng, và đang cần một option tối hơn cho hẹn hò hay đi chơi tối. Không nên ưu tiên nó làm chai duy nhất nếu nhu cầu chính là đi làm mỗi ngày giữa thời tiết nóng.`,
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [{ name: "Hạnh nhân" }, { name: "Gia vị" }, { name: "Oải hương" }, { name: "Cam bergamot" }, { name: "Hương thảo" }, { name: "Xạ hương" }],
    middleNotes: [{ name: "Anh đào" }, { name: "Vani" }, { name: "Trầm hương" }, { name: "Hoa hồng Bulgaria" }],
    baseNotes: [{ name: "Đậu Tonka" }, { name: "Da thuộc" }, { name: "Gỗ đàn hương" }],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "Hạnh nhân-cherry-da thuộc gourmand, phong cách nam tính hiện đại",
    verdictShort: "VERIFIED",
    shopeeOffers: []
  },
  {
    id: "givenchy-gentleman-eau-de-parfum-reserve-privee",
    brandSlug: "givenchy",
    brand: "GIVENCHY",
    name: "Gentleman Eau de Parfum Reserve Privee",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIVENCHY Gentleman Eau de Parfum Reserve Privee chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "armani-acqua-di-gio",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Acqua di Gio",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIORGIO ARMANI Acqua di Gio chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  }, {
    id: "givenchy-l-interdit-eau-de-parfum-rouge",
    brandSlug: "givenchy",
    brand: "GIVENCHY",
    name: "L Interdit Eau de Parfum Rouge",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIVENCHY L Interdit Eau de Parfum Rouge chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "mugler-angel",
    brandSlug: "mugler",
    brand: "MUGLER",
    name: "Angel",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MUGLER Angel chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "burberry-goddess",
    brandSlug: "burberry",
    brand: "BURBERRY",
    name: "Goddess",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "BURBERRY Goddess chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-no-5-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel No 5 Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel No 5 Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "versace-crystal-noir-eau-de-toilette",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Crystal Noir Eau de Toilette",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "VERSACE Crystal Noir Eau de Toilette chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-coco-eau-de-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Coco Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Coco Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-chance-eau-tendre",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chance Eau Tendre",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chance Eau Tendre chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-coco-noir",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Coco Noir",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Coco Noir chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "amouage-guidance",
    brandSlug: "amouage",
    brand: "AMOUAGE",
    name: "Guidance",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "AMOUAGE Guidance chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chloe-eau-de-parfum",
    brandSlug: "chloe",
    brand: "CHLOE",
    name: "Chloe Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHLOE Chloe Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-black-orchid",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Black Orchid",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Black Orchid chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-no-5-eau-de-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel No 5 Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel No 5 Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-no-19-eau-de-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel No 19 Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel No 19 Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "givenchy-l-interdit-eau-de-parfum",
    brandSlug: "givenchy",
    brand: "GIVENCHY",
    name: "L Interdit Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIVENCHY L Interdit Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "xerjoff-lira",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "Lira",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "XERJOFF Lira chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "lancome-poeme",
    brandSlug: "lancome",
    brand: "LANCOME",
    name: "Poeme",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LANCOME Poeme chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "lancome-tresor",
    brandSlug: "lancome",
    brand: "LANCOME",
    name: "Tresor",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "LANCOME Tresor chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "hermes-elixir-des-merveilles",
    brandSlug: "hermes",
    brand: "HERMES",
    name: "Elixir des Merveilles",
    subName: "Elixir",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "HERMES Elixir des Merveilles chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-n019",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel N019",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel N019 chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "dior-miss-dior-cherie",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Miss Dior Cherie",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "DIOR Miss Dior Cherie chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "mugler-angel-muse",
    brandSlug: "mugler",
    brand: "MUGLER",
    name: "Angel Muse",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MUGLER Angel Muse chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "narciso-rodriguez-pure-musc-for-her",
    brandSlug: "narciso-rodriguez",
    brand: "NARCISO RODRIGUEZ",
    name: "Pure Musc For Her",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "NARCISO RODRIGUEZ Pure Musc For Her chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-coromandel-eau-de-parfum",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Coromandel Eau de Parfum",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Coromandel Eau de Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "givenchy-organza",
    brandSlug: "givenchy",
    brand: "GIVENCHY",
    name: "Organza",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIVENCHY Organza chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "mfk-oud-satin-mood",
    brandSlug: "mfk",
    brand: "MAISON FRANCIS KURKDJIAN",
    name: "Oud Satin Mood",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "MAISON FRANCIS KURKDJIAN Oud Satin Mood chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-no-19-poudre",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel No 19 Poudre",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel No 19 Poudre chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "kayali-fragrances-vanilla",
    brandSlug: "kayali-fragrances",
    brand: "KAYALI FRAGRANCES",
    name: "Vanilla",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "KAYALI FRAGRANCES Vanilla chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "initio-musk-therapy",
    brandSlug: "initio",
    brand: "INITIO PARFUMS PRIVÉS",
    name: "Musk Therapy",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "INITIO PARFUMS PRIVÉS Musk Therapy chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-coco-eau-de-toilette",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Coco Eau de Toilette",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Coco Eau de Toilette chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "chanel-no-5-eau-de-toilette",
    brandSlug: "chanel",
    brand: "CHANEL",
    name: "Chanel No 5 Eau de Toilette",
    subName: "Eau de Toilette",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "CHANEL Chanel No 5 Eau de Toilette chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "versace-crystal-noir",
    brandSlug: "versace",
    brand: "VERSACE",
    name: "Crystal Noir",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "VERSACE Crystal Noir chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "xerjoff-dama-bianca",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "Dama Bianca",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "XERJOFF Dama Bianca chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "narciso-rodriguez-musc-noir-rose-for-her",
    brandSlug: "narciso-rodriguez",
    brand: "NARCISO RODRIGUEZ",
    name: "Musc Noir Rose For Her",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "NARCISO RODRIGUEZ Musc Noir Rose For Her chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "tom-ford-lost-cherry",
    brandSlug: "tom-ford",
    brand: "TOM FORD",
    name: "Lost Cherry",
    subName: "Eau de Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nu",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "TOM FORD Lost Cherry chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nữ", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  },
  {
    id: "armani-acqua-di-gio-parfum",
    brandSlug: "armani",
    brand: "GIORGIO ARMANI",
    name: "Acqua di Gio Parfum",
    subName: "Parfum",
    perfumer: "BLOCKED_SOURCE",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "fragram", caption: "GIORGIO ARMANI Acqua di Gio Parfum chính hãng", verified: false }],
    description: "(Chờ nguồn xác minh)",
    productCopy: "(Chờ Coder viết bài)",
    article: "(Chờ Coder viết bài)",
    score: { scent: 0, uniqueness: 0, compliments: 0, value: 0, total: 0 },
    vibes: [],
    longevity: 0,
    sillage: 0,
    seasons: { spring: 0, summer: 0, fall: 0, winter: 0 },
    dayNight: { day: 0, night: 0 },
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    accords: [],
    tags: ["Nam", "NEEDS_SOURCE"],
    sizes: [],
    basePrice: 0,
    verdict: "(Chờ nguồn xác minh)",
    verdictShort: "NEEDS_SOURCE",
    shopeeOffers: []
  }
];
