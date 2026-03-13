// Script: Add first 3 NEW_WRITE products to mockData.ts
// Products: La Nuit de l'Homme, Xerjoff Naxos, LV Imagination
const fs = require('fs');
const file = 'D:/anti/perfume-luxury-vn/src/constants/mockData.ts';
let data = fs.readFileSync(file, 'utf8');

const newProducts = `
  {
    id: "ysl-la-nuit-de-lhomme",
    brandSlug: "ysl",
    brand: "YVES SAINT LAURENT",
    name: "La Nuit de l'Homme",
    subName: "Eau de Toilette",
    perfumer: "Anne Flipo, Pierre Wargnye & Dominique Ropion",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "pending", caption: "YSL La Nuit de l'Homme chính hãng", verified: false }],
    description: "Mùi nam quyến rũ với bạch đậu khấu, oải hương và gỗ tuyết tùng. Hợp hẹn hò, đi tối hoặc người thích phong cách sang nhưng gần gũi.",
    productCopy: \`YSL La Nuit de l'Homme là một trong những chai nước hoa nam quyến rũ nhất ở phân khúc designer. Mùi mở đầu với bạch đậu khấu cay nhẹ, oải hương mềm và chút cam bergamot, tạo cảm giác sang, gần gũi và có chút bí ẩn rất hấp dẫn.

Điểm đẹp nhất của chai này nằm ở sự mềm mại. Nó không phải kiểu nam tính ồn ào hay bốc lửa, mà là kiểu nam tính trầm, có chiều sâu và rất dễ khiến người đối diện muốn đến gần hơn. La Nuit hợp với những buổi tối, hẹn hò, ăn tối hoặc đơn giản là khi bạn muốn mình có mùi hương đẹp theo cách rất tinh tế.

Trên da, lớp oải hương và bạch đậu khấu quyện vào nhau tạo nên cảm giác ấm nhưng không nặng. Phần nền gỗ tuyết tùng và vetiver giúp giữ sự nam tính mà không cần phô trương. Đây là chai mà người đứng gần thường sẽ hỏi bạn đang xịt gì.

Về hiệu năng, La Nuit de l'Homme bản EDT có độ tỏa và lưu hương ở mức vừa phải. Trong khí hậu Việt Nam, chai này đẹp nhất vào buổi tối hoặc phòng máy lạnh. Nếu cần bám lâu hơn, xịt vào quần áo sẽ giúp kéo dài hiệu quả.

Nếu bạn muốn một chai nước hoa nam mềm, sang và rất quyến rũ theo kiểu không cần cố gắng, La Nuit de l'Homme vẫn là một lựa chọn kinh điển đáng có trong bộ sưu tập.\`,
    article: \`## Mùi hương của La Nuit de l'Homme

La Nuit de l'Homme mở đầu với bạch đậu khấu cay nhẹ hòa cùng oải hương Pháp tạo nên cảm giác sang trọng, gần gũi. Lớp giữa có vetiver và gỗ tuyết tùng giữ sự nam tính mềm mại. Tổng thể là kiểu mùi rất gợi cảm nhưng không hề phô trương.

## Hiệu năng và hoàn cảnh sử dụng

Bản EDT có độ tỏa vừa phải và lưu hương khoảng 4-6 giờ. Phù hợp nhất cho buổi tối, hẹn hò, ăn tối hoặc những dịp cần sự lịch lãm kín đáo. Trong khí hậu Việt Nam, nên ưu tiên dùng khi trời mát hoặc trong phòng máy lạnh.

## La Nuit de l'Homme hợp với ai?

Hợp với nam giới thích phong cách trưởng thành, biết cách tạo sức hút bằng sự tinh tế thay vì sự ồn ào. Đặc biệt phù hợp cho người 25-40 tuổi, làm việc văn phòng và thích hẹn hò kiểu lịch sự.

## Kết luận nhanh

La Nuit de l'Homme là chai quyến rũ kinh điển của YSL. Điểm trừ duy nhất là hiệu năng không quá mạnh ở bản EDT, nhưng bù lại mùi hương cực kỳ đẹp và rất khó ai ghét.\`,
    verdict: "Mùi nam quyến rũ kinh điển, mềm và sang. Hợp hẹn hò và buổi tối. Hiệu năng bản EDT vừa phải nhưng mùi cực đẹp.",
    verdictShort: "QUYẾN RŨ, MỀM, RẤT SANG",
    score: { scent: 9.2, uniqueness: 8.5, compliments: 9.3, value: 8.0, total: 8.8 },
    vibes: [
      { label: "Hẹn hò", icon: "❤️" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Quyến rũ", icon: "✨" }
    ],
    longevity: 6,
    sillage: 6,
    seasons: { spring: 55, summer: 30, fall: 90, winter: 85 },
    dayNight: { day: 30, night: 100 },
    topNotes: [{ name: "Bạch đậu khấu" }, { name: "Cam bergamot" }, { name: "Oải hương" }],
    middleNotes: [{ name: "Vetiver" }, { name: "Gỗ tuyết tùng" }, { name: "Hoa violet" }],
    baseNotes: [{ name: "Đậu tonka" }, { name: "Carob" }, { name: "Coumarin" }],
    accords: [
      { name: "Gia vị ấm", value: 92, color: "#e67e22" },
      { name: "Thơm thảo mộc", value: 78, color: "#2c7a4b" },
      { name: "Gỗ", value: 62, color: "#8B4513" },
      { name: "Ngọt", value: 48, color: "#8B0000" }
    ],
    tags: ["Hẹn hò", "Buổi tối", "Nam", "Quyến rũ"],
    sizes: ["10ml Chiết", "60ml Fullbox", "100ml Fullbox"],
    basePrice: 2650000,
    shopeeOffers: []
  },
  {
    id: "xerjoff-naxos",
    brandSlug: "xerjoff",
    brand: "XERJOFF",
    name: "XJ 1861 Naxos",
    subName: "Eau de Parfum",
    perfumer: "Chris Maurice",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "pending", caption: "Xerjoff Naxos chính hãng", verified: false }],
    description: "Mùi nam ngọt ấm với thuốc lá, mật ong, oải hương và vani. Hợp buổi tối, mùa mát hoặc người thích phong cách niche sang trọng và có chiều sâu.",
    productCopy: \`Xerjoff Naxos là một trong những chai niche nam được yêu thích nhất nhờ sự kết hợp giữa thuốc lá, mật ong và oải hương. Mùi mở đầu với cam bergamot và oải hương tươi, rồi nhanh chóng chuyển sang lớp thuốc lá ngọt, mật ong và quế tạo cảm giác ấm áp, sang trọng và rất cuốn hút.

Điểm đặc biệt của Naxos là sự hòa quyện hoàn hảo giữa ngọt và nam tính. Thuốc lá ở đây không khô hay đắng mà được làm mềm bởi mật ong và vani, tạo nên tổng thể vừa sang vừa dễ gần. Đây là kiểu mùi khiến người ta muốn ngửi lại nhiều lần.

Trên da, Naxos phát triển rất đẹp. Sau khoảng 30 phút, phần oải hương dịu xuống và nhường chỗ cho lớp nền thuốc lá ngọt, cashmeran và xạ hương. Cảm giác ấm, mượt và có chiều sâu rất rõ. Đây là chai hợp với blazer, áo sơ mi tối màu và những buổi tối có không khí.

Về hiệu năng, Naxos thuộc phân khúc niche nên lưu hương và tỏa hương đều rất tốt. Trong khí hậu Việt Nam, nên ưu tiên dùng buổi tối, mùa mưa hoặc phòng máy lạnh. Chỉ cần 2-3 xịt là đủ để tạo vùng hương rất sang.

Nếu bạn đang tìm một chai niche nam ngọt ấm, sang và có cá tính rõ ràng, Xerjoff Naxos là lựa chọn cực kỳ đáng cân nhắc.\`,
    article: \`## Mùi hương của Xerjoff Naxos

Naxos mở đầu bằng oải hương Địa Trung Hải và cam bergamot tươi sáng. Sau đó lớp thuốc lá ngọt, mật ong và quế bắt đầu hiện lên rất rõ, tạo cảm giác ấm áp và sang trọng. Phần nền có vani, cashmeran và xạ hương giúp mùi tròn và bám rất tốt.

## Hiệu năng và hoàn cảnh sử dụng

Naxos có độ lưu hương tốt (8-10+ giờ) và tỏa hương mạnh. Phù hợp nhất cho buổi tối, sự kiện, hẹn hò hoặc mùa thu đông. Tại Việt Nam, nên dùng khi trời mát hoặc trong phòng máy lạnh để phát huy hết vẻ đẹp.

## Xerjoff Naxos hợp với ai?

Hợp với nam giới có gu, thích niche và muốn một mùi hương khác biệt so với designer phổ thông. Đặc biệt phù hợp với người biết tiết chế và thích phong cách thanh lịch có chiều sâu.

## Kết luận nhanh

Naxos là một trong những chai niche nam đẹp nhất trong tầm giá. Thuốc lá, mật ong và oải hương kết hợp hoàn hảo tạo nên một mùi hương vừa sang vừa cuốn.\`,
    verdict: "Thuốc lá ngọt, mật ong và oải hương kết hợp hoàn hảo. Sang, ấm và rất cuốn. Hợp buổi tối và mùa mát.",
    verdictShort: "THUỐC LÁ NGỌT, MẬT ONG, CỰC SANG",
    score: { scent: 9.5, uniqueness: 9.2, compliments: 9.0, value: 7.8, total: 8.9 },
    vibes: [
      { label: "Niche", icon: "💎" },
      { label: "Buổi tối", icon: "🌙" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 9,
    sillage: 8,
    seasons: { spring: 40, summer: 15, fall: 95, winter: 100 },
    dayNight: { day: 25, night: 100 },
    topNotes: [{ name: "Oải hương" }, { name: "Cam bergamot" }, { name: "Chanh" }],
    middleNotes: [{ name: "Thuốc lá" }, { name: "Mật ong" }, { name: "Quế" }, { name: "Hoa nhài" }],
    baseNotes: [{ name: "Vani" }, { name: "Cashmeran" }, { name: "Đậu tonka" }, { name: "Xạ hương" }],
    accords: [
      { name: "Thuốc lá", value: 95, color: "#5D4037" },
      { name: "Ngọt", value: 85, color: "#FF6D00" },
      { name: "Gia vị ấm", value: 78, color: "#e67e22" },
      { name: "Thơm thảo mộc", value: 62, color: "#2c7a4b" }
    ],
    tags: ["Niche", "Buổi tối", "Thu đông", "Nam"],
    sizes: ["5ml Chiết", "10ml Chiết", "50ml Fullbox", "100ml Fullbox"],
    basePrice: 6500000,
    shopeeOffers: []
  },
  {
    id: "dior-fahrenheit",
    brandSlug: "dior",
    brand: "DIOR",
    name: "Fahrenheit",
    subName: "Eau de Toilette",
    perfumer: "Jean-Louis Sieuzac & Maurice Roger",
    gender: "nam",
    image: PENDING_IMAGE,
    images: [{ url: PENDING_IMAGE, source: "pending", caption: "Dior Fahrenheit chính hãng", verified: false }],
    description: "Mùi nam độc đáo với cảm giác xăng, violet lá và da thuộc. Hợp người thích phong cách cá tính mạnh, khác biệt và không theo số đông.",
    productCopy: \`Dior Fahrenheit là một trong những chai nước hoa nam huyền thoại, nổi tiếng bằng mùi hương không giống bất kỳ chai nào khác. Ngay từ lần ngửi đầu, bạn sẽ thấy một cảm giác rất đặc biệt: violet lá, xăng nhẹ và da thuộc quyện vào nhau tạo nên tổng thể vừa mạnh, vừa lạ, vừa có chiều sâu rất riêng.

Điểm làm Fahrenheit trở thành kinh điển là sự can đảm trong công thức. Nó không cố làm dễ chịu theo cách thông thường. Thay vào đó, nó tạo ra một bản sắc rất rõ: nam tính, hơi thô, có phần nguyên bản và rất khó nhầm lẫn với bất kỳ mùi hương nào khác trên thị trường.

Trên da, Fahrenheit phát triển từ lớp violet và xăng ban đầu sang phần gỗ, da và hổ phách ấm áp. Sự chuyển đổi này tạo cảm giác từ sắc bén sang trầm ấm rất tự nhiên. Đây là chai mà người ta hoặc rất yêu hoặc không hợp, rất hiếm có phản ứng ở giữa.

Về hiệu năng, Fahrenheit lưu hương tốt và tỏa ở mức khá. Trong khí hậu Việt Nam, chai này hợp nhất vào mùa mát hoặc buổi tối. Đây là chai nước hoa cho người có cá tính, không sợ khác biệt và muốn mùi hương của mình mang tuyên ngôn rõ ràng.\`,
    article: \`## Mùi hương của Fahrenheit

Fahrenheit mở đầu với nốt violet lá và cảm giác xăng nhẹ rất đặc trưng. Lớp giữa có hoa oải hương, nhục đậu khấu và da thuộc. Phần nền gỗ tuyết tùng, vetiver và hổ phách tạo chiều sâu ấm áp. Tổng thể là mùi nam rất khác biệt, không giống bất kỳ chai nào khác.

## Hiệu năng và hoàn cảnh sử dụng

Lưu hương khoảng 6-8 giờ, tỏa hương khá tốt. Hợp mùa mát, buổi tối hoặc những dịp muốn tạo dấu ấn khác biệt. Không phải chai an toàn cho văn phòng kín vì mùi khá đặc trưng.

## Fahrenheit hợp với ai?

Hợp với nam giới có cá tính mạnh, thích sự khác biệt và không ngại một mùi hương gây chia rẽ. Đặc biệt phù hợp người 30+ đã thử nhiều chai và muốn một thứ thật sự riêng.

## Kết luận nhanh

Fahrenheit là huyền thoại vì một lý do: nó không cố làm hài lòng tất cả mà tạo ra bản sắc rất riêng. Nếu bạn thích, bạn sẽ rất yêu.\`,
    verdict: "Huyền thoại nam tính với violet, xăng và da. Cá tính cực mạnh, không giống ai. Hoặc yêu hoặc không hợp.",
    verdictShort: "HUYỀN THOẠI, CÁ TÍNH, KHÔNG GIỐNG AI",
    score: { scent: 9.0, uniqueness: 9.8, compliments: 7.5, value: 8.5, total: 8.7 },
    vibes: [
      { label: "Cá tính", icon: "🔥" },
      { label: "Kinh điển", icon: "👑" },
      { label: "Thu đông", icon: "🍂" }
    ],
    longevity: 8,
    sillage: 7,
    seasons: { spring: 50, summer: 25, fall: 90, winter: 85 },
    dayNight: { day: 45, night: 85 },
    topNotes: [{ name: "Violet lá" }, { name: "Cam bergamot" }, { name: "Hoa oải hương" }],
    middleNotes: [{ name: "Nhục đậu khấu" }, { name: "Da thuộc" }, { name: "Hoa violet" }],
    baseNotes: [{ name: "Gỗ tuyết tùng" }, { name: "Vetiver" }, { name: "Hổ phách" }],
    accords: [
      { name: "Da thuộc", value: 88, color: "#5D4037" },
      { name: "Gỗ", value: 75, color: "#8B4513" },
      { name: "Thơm thảo mộc", value: 65, color: "#2c7a4b" },
      { name: "Gia vị ấm", value: 52, color: "#e67e22" }
    ],
    tags: ["Kinh điển", "Cá tính", "Nam", "Thu đông"],
    sizes: ["10ml Chiết", "50ml Fullbox", "100ml Fullbox", "200ml Fullbox"],
    basePrice: 3200000,
    shopeeOffers: []
  },`;

// Insert before the closing "];"
data = data.replace(/\n\];\s*$/, ',\n' + newProducts + '\n];\n');
fs.writeFileSync(file, data, 'utf8');
console.log('Added 3 products: La Nuit, Naxos, Fahrenheit');
