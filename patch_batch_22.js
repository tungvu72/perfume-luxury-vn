const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "delina": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2017, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 40, summer: 25, fall: 20, winter: 15 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Parfums De Marly Delina đài các hoàng gia Pháp",
    metaDescription: "Review Parfums De Marly Delina EDP: Vương miện của hoàng gia Pháp. Đóa Hoa Hồng (Rose) Thổ Nhĩ Kỳ đẫm sương hòa quyện Quả Vải (Litchi) ngọt ngào kiêu hãnh.",
    description: "Biểu tượng tối thượng của sự nữ tính và quyền lực! Delina bưng lên một đóa Hoa Hồng Thổ Nhĩ Kỳ (Rose) đang nở bung, từng cánh hoa ướt sũng nhúng đẫm trong nước ép Quả Vải (Litchi) và Đại hoàng (Rhubarb) chua chua thanh thanh tươi roi rói. Tựa như một tiểu thư hoàng gia Pháp lộng lẫy mặc chiếc đầm hồng rực bước đi kiêu kỳ. Dù mang nốt quả chua, Xạ hương (Musk) và Cashmeran ở tầng hương cuối làm Delina đặc quánh lại, bám tỏa dai dẳng rộ ngợp cả một căn phòng.",
    vibes: [{label: "Tiểu thư", icon: "👑"}, {label: "Hoa hồng đắt", icon: "🌹"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.5, value: 8.0, total: 8.8 },
    topNotes: [{name: "Quả Vải (Litchi)"}, {name: "Đại hoàng (Rhubarb)"}, {name: "Cam Bergamot"}, {name: "Nhục đậu khấu"}],
    middleNotes: [{name: "Hoa Hồng Thổ Nhĩ Kỳ (Rose)"}, {name: "Hoa Mẫu Đơn (Peony)"}, {name: "Xạ Hương (Musk)"}],
    baseNotes: [{name: "Hương Cashmeran"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Hoa trắng", value: 85, color: "#ffb6c1"},
      {name: "Trái cây", value: 75, color: "#ff4500"},
      {name: "Tươi mát", "value": 65, color: "#add8e6"},
      {name: "Xạ hương", value: 60, color: "#e6e6fa"}
    ]
  },
  "herod": {
    subName: "EDP", perfumer: "Olivier Pescheux", year: 2012, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Parfums De Marly Herod vị vua Thuốc Lá Vani",
    metaDescription: "Đánh giá Parfums De Marly Herod EDP: Khói xì gà (Tobacco) sưởi ấm trong lớp Vani (Vanilla) béo ngậy. Quế và Osmathus tạo ra một ly rượu sang trọng vương giả.",
    description: "Một tuyệt tác đưa nốt Thuốc lá (Tobacco) đi vào huyền thoại! Herod không phải loại khói thuốc lá khét lẹt hay đắng nghét. Đây là điếu Xì gà Cuba hảo hạng được ngâm mình trong hũ Vani (Vanilla) Pháp béo ngậy, vàng óng tươm mật. Rắc thêm chút bột Quế (Cinnamon) cay rân rân nảy nhẹ trên da thịt ấm áp nam tính. Mùi hương đậm chất Trưởng giả, cực kỳ vương giả, rất phù hợp cho một buổi tối hẹn hò sang trọng cùng vest đen và đồng hồ thụy sĩ.",
    vibes: [{label: "Trưởng giả", icon: "🤵"}, {label: "Xì Gà Vani", icon: "🚬"}],
    score: { scent: 9.2, uniqueness: 8.8, compliments: 9.0, value: 8.5, total: 8.9 },
    topNotes: [{name: "Quế (Cinnamon)"}, {name: "Tiêu đen (Pepper)"}],
    middleNotes: [{name: "Thuốc lá (Tobacco)"}, {name: "Nhang trầm (Incense)"}, {name: "Hoa mộc tê (Osmanthus)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Iso E Super"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Xạ hương"}],
    accords: [
      {name: "Thuốc lá", value: 100, color: "#8b4513"},
      {name: "Vani", value: 85, color: "#fafaad"},
      {name: "Cay ấm", value: 75, color: "#d2691e"},
      {name: "Quế", value: 65, color: "#cd853f"},
      {name: "Hổ phách", value: 60, color: "#cd6600"}
    ]
  },
  "layton": {
    subName: "EDP", perfumer: "Hamid Merati-Kashani", year: 2016, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 20, summer: 5, fall: 35, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Parfums De Marly Layton trái táo cay nồng",
    metaDescription: "Review Parfums De Marly Layton: Mùi hương Vani bọc Táo nướng nịnh mũi bậc nhất. Oải hương (Lavender) mix Đàn hương (Sandalwood) tạo vị ngọt the sát gái cực mạnh.",
    description: "Vua sát gái của nhà Parfums De Marly! Layton là cú đấm thép của Táo Xanh (Apple) mọng nước dầm chung vào hũ Vani (Vanilla) bọc đường khét. Khởi đầu tươi mát lịm tim, nhưng ngay lập tức bị nung nóng bởi Tiêu đen rát mũi và Oải hương (Lavender) the mát đậm chất quý ông. Sự đan xen giữa Nóng - Lạnh, Ngọt - The khiến Layton trở thành một chiếc máy gặt lời khen vô đối trong môi trường club bar rực đèn, vắt kiệt trái tim dàn mỹ nữ xung quanh.",
    vibes: [{label: "Sát gái", icon: "😈"}, {label: "Vani Táo nướng", icon: "🍏"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 10.0, value: 8.5, total: 9.0 },
    topNotes: [{name: "Táo xanh (Apple)"}, {name: "Oải hương (Lavender)"}, {name: "Cam Bergamot"}, {name: "Quả quýt"}],
    middleNotes: [{name: "Phong lữ thảo (Geranium)"}, {name: "Hoa nhài (Jasmine)"}, {name: "Hoa tím (Violet)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Bạch đậu khấu (Cardamom)"}, {name: "Gỗ Đàn hương (Sandalwood)"}, {name: "Tiêu (Pepper)"}],
    accords: [
      {name: "Cay ấm", value: 100, color: "#cc2a00"},
      {name: "Cay tươi", value: 85, color: "#9acd32"},
      {name: "Gỗ", value: 75, color: "#8b4513"},
      {name: "Vani", value: 65, color: "#ffffb3"},
      {name: "Thảo mộc", value: 60, color: "#66cdaa"}
    ]
  },
  "parfums-de-marly-palatine": {
    subName: "EDP", perfumer: "Hamid Merati-Kashani", year: 2024, gender: "nu", longevity: 6, sillage: 6,
    seasons: { spring: 35, summer: 15, fall: 30, winter: 20 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Parfums De Marly Palatine hoa tím quý tộc",
    metaDescription: "Đánh giá Parfums De Marly Palatine EDP: Bông Hoa Tím (Violet) kiêu ngạo tung bột phấn lấp lánh (Powdery) sưởi ấm quả Lê mọng nước. Một tinh hoa quý tộc.",
    description: "Palatine được ví von là 'Một chiếc váy dạ hội lộng lẫy bằng lụa Tím nhạt'. Lấy cảm hứng từ nàng công chúa Palatine, mùi hương là tràng hoa Tím (Violet) kiêu sa phủ lên một rổ bột Phấn (Powdery) lấp lánh thượng lưu cực kì đài các. Cắn thêm chút thanh chua mọng nước của Quả Lê (Pear) căng nhức, dập thêm Gỗ Đàn Hương (Sandalwood) mượt mà óng ả. Mùi hương không choé lọe rực rỡ mà rụt rè, mong manh nhưng quý phái dội ngợp không gian.",
    vibes: [{label: "Quý cô Tím", icon: "👗"}, {label: "Hoa Phấn", icon: "💅"}],
    score: { scent: 8.5, uniqueness: 8.5, compliments: 8.0, value: 8.0, total: 8.2 },
    topNotes: [{name: "Quả Lê dập nát (Pear)"}, {name: "Quả Quýt (Mandarin)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Tím (Violet)"}, {name: "Hoa oải hương (Lavender)"}, {name: "Hoa (Floral Notes)"}],
    baseNotes: [{name: "Xạ Hương (Musk)"}, {name: "Gỗ Đàn Hương (Sandalwood)"}, {name: "Cây hoắc hương"}],
    accords: [
      {name: "Phấn", value: 100, color: "#eaddcf"},
      {name: "Hoa Tím", value: 85, color: "#da70d6"},
      {name: "Hoa cỏ", value: 75, color: "#ff69b4"},
      {name: "Xạ hương", value: 65, color: "#e6e6fa"},
      {name: "Gỗ", value: 60, color: "#8b4513"}
    ]
  },
  "sedley": {
    subName: "EDP", perfumer: "Olivier Cresp, Hamid Merati-Kashani", year: 2019, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa Parfums De Marly Sedley chai xanh ngọc bích mùa hè",
    metaDescription: "Review Parfums De Marly Sedley: Ly Bạc Hà (Mint) dầm Chanh vàng (Lemon) sảng khoái đánh tan cái nóng mùa hè. Gỗ Tuyết Tùng và Ambroxan bám tỏa siêu mạnh.",
    description: "Câu trả lời của hoàng gia Pháp cho những trưa hè ngột ngạt! Sedley rót một ly nước Chanh (Lemon) vắt đặc, thả đầy lá Bạc Hà (Mint) the buốt đập nhuyễn đá lạnh tứa vào yết hầu. Bức tranh mát mẻ đó không hề bay lả lướt mà rít lấy da thịt với lõi Ambroxan sắc lạnh cực kỳ vương giả, cộng hưởng với Gỗ Tuyết Tùng (Cedar) chắc nịch. Nam hay nữ khoác em này đi bơi, đi dạo phố mùa Hè thì xác định làm mù quáng, che mờ mọi loại nước hoa freshie bình dân khác.",
    vibes: [{label: "Giải nhiệt", icon: "🧊"}, {label: "Tỷ phú mùa Hè", icon: "🛥️"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.0, value: 8.0, total: 8.4 },
    topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Bạc Hà đập dập (Mint)"}, {name: "Cam Bergamot"}, {name: "Bưởi tây"}],
    middleNotes: [{name: "Oải hương (Lavender)"}, {name: "Hương thảo (Rosemary)"}, {name: "Hoa Phong Lữ"}],
    baseNotes: [{name: "Ambroxan (Long diên hương)"}, {name: "Gỗ Tuyết tùng (Cedar)"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff33"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Cay tươi mát", value: 75, color: "#7cb342"},
      {name: "Gỗ", value: 65, color: "#8b4513"},
      {name: "Hổ phách", value: 60, color: "#cd6600"}
    ]
  },
  "parfums-de-marly-valaya": {
    subName: "EDP", perfumer: "Quentin Bisch", year: 2023, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 40, summer: 35, fall: 15, winter: 10 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa Parfums De Marly Valaya lụa voan trong suốt",
    metaDescription: "Đánh giá Parfums De Marly Valaya EDP: Bọc Hoa Cam (Orange Blossom), Đào trắng mướt rượt trượt trên Cốt Aldehydes tạo ra chiếc đầm voan mỏng manh nhưng quý tộc.",
    description: "Quentin Bisch đã tạo nên một phép màu mang tên Valaya! Không cầu kỳ nồng đậm, đây là hình bóng một tiểu thư ngấu nghiến Quả Đào trắng (Peach) rưới nước ép Hoa Cam (Orange Blossom) tinh túy. Lớp hương Andehit (Aldehydes) tơi xốp, tinh khôi như hàng loạt sợi nilon lụa voan trắng muốt bao bọc lấy Xạ hương. Mùi hương mỏng tựa gió thoảng nhưng độ lưu tỏa thuộc hàng khủng long quái vật, xịt 2 phát dính da 12 tiếng vẫn thoang thoảng sạch sẽ, thanh tao tuyệt đối.",
    vibes: [{label: "Váy Lụa Voan", icon: "👗"}, {label: "Tinh khôi", icon: "✨"}],
    score: { scent: 9.0, uniqueness: 8.5, compliments: 9.0, value: 8.5, total: 8.8 },
    topNotes: [{name: "Quả Đào trắng (Peach)"}, {name: "Cam Bergamot"}, {name: "Quả Quýt (Mandarin)"}, {name: "Aldehydes"}],
    middleNotes: [{name: "Hoa Cam (Orange Blossom)"}, {name: "Hoa Linh lan"}, {name: "Nhựa gỗ Hoa"}],
    baseNotes: [{name: "Xạ Hương (Musk)"}, {name: "Ambroxan"}, {name: "Gỗ Akigalawood"}, {name: "Vani"}],
    accords: [
      {name: "Xạ hương", value: 100, color: "#e6e6fa"},
      {name: "Cam chanh", value: 85, color: "#ffffbb"},
      {name: "Hoa trắng", value: 75, color: "#f8f8ff"},
      {name: "Sạch bong", value: 65, color: "#e0ffff"},
      {name: "Andehit", value: 60, color: "#f0f8ff"}
    ]
  },
  "parfums-de-marly-valaya-exclusif": {
    subName: "Exclusif Extrait", perfumer: "Quentin Bisch", year: 2024, gender: "nu", longevity: 9, sillage: 9,
    seasons: { spring: 35, summer: 30, fall: 20, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Parfums De Marly Valaya Exclusif tinh chất tối thượng",
    metaDescription: "Review Parfums De Marly Valaya Exclusif: Phiên bản tinh chất đặc quyền tột đỉnh của Valaya. Kéo dài sự rực rỡ lộng lẫy bằng lượng Ambroxan đắt tiền và Hoa Huệ trắng cực phẩm.",
    description: "Bước lên một tầm cao mới của tầng lớp tinh hoa vương giả. Nếu Valaya EDP là chiếc váy voan mỏng manh tung bay trước gió, thì bản Exclusif (Độc quyền) là lúc chiếc váy ấy được đính thêm hàng ngàn viên kim cương chói lóa. Tinh chất (Extrait) cô đặc hơn dội bom khứu giác bằng Cốt Ambroxan sắc ngọt cào xé da thịt cộng hưởng với Hoa Huệ Trắng (Tuberose) mượt mà lả lơi. Một 'vũ khí sát thương' dội ngợp cả hội trường, càn quét ánh mắt mọi người phải dán chặt vòng eo của bạn.",
    vibes: [{label: "Kim cương", icon: "💎"}, {label: "Vương giả", icon: "👑"}],
    score: { scent: 9.2, uniqueness: 8.8, compliments: 9.5, value: 8.0, total: 8.9 },
    topNotes: [{name: "Quả Cam ngọt"}, {name: "Lựu mọng chín"}, {name: "Aldehydes mạnh"}],
    middleNotes: [{name: "Cánh hoa hồng Pháp"}, {name: "Hoa huệ trắng (Tuberose)"}, {name: "Hoa cam (Orange Blossom)"}],
    baseNotes: [{name: "Ambroxan (Liều cao)"}, {name: "Hổ phách đậm"}, {name: "Xạ hương (Musk)"}, {name: "Gỗ trắng"}],
    accords: [
      {name: "Hoa xa xỉ", value: 100, color: "#ff69b4"},
      {name: "Cam chanh", value: 85, color: "#ffffcc"},
      {name: "Xạ hương", value: 75, color: "#e6e6fa"},
      {name: "Andehit", value: 65, color: "#f0f8ff"},
      {name: "Đắt tiền", value: 60, color: "#ffd700"}
    ]
  },
  "halfeti": {
    subName: "EDP", perfumer: "Christian Provenzano", year: 2015, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Penhaligon's Halfeti hoa hồng đen ma thuật",
    metaDescription: "Đánh giá Penhaligons Halfeti EDP: Cuộn tranh vương giả thâm u của Hoàng gia Anh. Trầm Hương (Oud) cắn xé Hoa hồng đen (Black Rose) và Da thuộc bí ẩn tột cùng.",
    description: "Một cực phẩm bóng râm của hoàng gia Anh. Halfeti đưa bạn lạc vào màn đêm của ngôi làng Thổ Nhĩ Kỳ cổ đại, nơi Hoa Hồng Đen mọc hiên ngang giữa bùn lầy rêu phong. Nó trói chặt khứu giác bằng mớ Trầm hương (Oud) bốc khói đen kịt, cọ xát với Da thuộc (Leather) khét lẹt. Điểm cân bằng kì diệu nằm ở Nhụy hoa nghệ tây (Saffron) kim loại và Cây bách sáp. Bóng tối, sang trọng, quyền lực và cực kì nguy hiểm - mặc chai này kèm một bộ suit đi vào quầy bar thì ai cũng phải khép nép lùi bước.",
    vibes: [{label: "Hoa hồng đen", icon: "🥀"}, {label: "Bá tước", icon: "🦇"}],
    score: { scent: 9.0, uniqueness: 9.2, compliments: 8.5, value: 8.5, total: 8.8 },
    topNotes: [{name: "Lá Cây bách (Cypress)"}, {name: "Nhụy hoa Saffron"}, {name: "Bạch đậu khấu"}],
    middleNotes: [{name: "Hoa Hồng (Rose)"}, {name: "Nhục đậu khấu"}, {name: "Hoa Nhài"}],
    baseNotes: [{name: "Gỗ Trầm hương (Oud)"}, {name: "Da thuộc (Leather)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Gỗ Đàn hương"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#5c4033"},
      {name: "Cay ấm", value: 85, color: "#cd3300"},
      {name: "Thảo mộc", value: 75, color: "#2e8b57"},
      {name: "Cay tươi", value: 65, color: "#66cc00"},
      {name: "Da thuộc", value: 60, color: "#8b4513"}
    ]
  },
  "infusion-diris": {
    subName: "EDP", perfumer: "Daniela Andrier", year: 2015, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 40, summer: 35, fall: 15, winter: 10 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa Prada Infusion d'Iris bột hoa diên vĩ đài các",
    metaDescription: "Review Prada Infusion d'Iris: Biểu tượng làm sạch kinh điển. Bột thơm Hoa diên vĩ (Iris) khô khốc đánh tơi cùng Tuyết tùng (Cedar) thanh tao, tĩnh lặng, quý phái.",
    description: "Tinh túy làm sạch kinh điển nhất lịch sử nhà Prada! Infusion d'Iris mô phỏng hoàn hảo mùi hương của bánh xà phòng đắt xắt ra miếng đặt trong phòng tắm khách sạn 5 sao. Tâm điểm là củ Hoa Diên Vĩ (Iris) ủ khô nghiền nhuyễn ra bột Phấn (Powder) sạch bưng, tơi xốp, vuốt ve khứu giác. Đệm dưới là thân Gỗ Tuyết tùng (Cedar) trắng xám, nhang Thơm (Incense) mảnh mai vát nhọn. Mùi hương vô cùng tĩnh lặng, ngửi cái là tưởng tượng ra ngay một trí thức đeo kính mặc áo lụa là.",
    vibes: [{label: "Xà phòng VIP", icon: "🧼"}, {label: "Trí thức", icon: "📖"}],
    score: { scent: 8.8, uniqueness: 8.5, compliments: 8.0, value: 8.5, total: 8.4 },
    topNotes: [{name: "Hoa Cam (African Orange Blossom)"}, {name: "Quả Cam tươi"}, {name: "Cam quýt ngâm"}],
    middleNotes: [{name: "Hoa Diên Vĩ đỏ mọng (Iris)"}, {name: "Nhựa Galbanum xanh"}],
    baseNotes: [{name: "Bột Tuyết Tùng (Cedar)"}, {name: "Nhang trầm mảnh (Incense)"}, {name: "Nhựa Benzoin"}],
    accords: [
      {name: "Diên vĩ", value: 100, color: "#b39ddb"},
      {name: "Gỗ", value: 85, color: "#8b4513"},
      {name: "Phấn", value: 75, color: "#f5deb3"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Cam chanh", value: 60, color: "#ffff33"}
    ]
  },
  "lhomme": {
    subName: "EDT", perfumer: "Daniela Andrier", year: 2016, gender: "nam", longevity: 8, sillage: 6,
    seasons: { spring: 40, summer: 30, fall: 20, winter: 10 }, dayNight: { day: 85, night: 15 },
    seoTitle: "Nước hoa nam Prada L'Homme sơ mi trắng đắt đỏ",
    metaDescription: "Đánh giá Prada L'Homme EDT: Vua môi trường văn phòng. Mùi Hoa Diên Vĩ (Iris) cạp Xà phòng xa xỉ gột rửa thân thể sạch sẽ tinh tươm bậc nhất trái đất.",
    description: "Câu trả lời tối thượng cho câu hỏi: 'Đi làm văn phòng xịt gì?'. L'Homme chính là chiếc áo Sơ Mi Trắng ủi phẳng phiu nhất hành tinh. Đây là một tổ hợp sạch không tì vết bằng Hoa Diên Vĩ (Iris) nghiền thành bột mịn, pha cùng Hoa Cam (Neroli) xà phòng thơm phức. Nó không gào thét cồn cào như các chai Club, không ngột ngạt lúa mạch như các chai mùa đông, nó đứng đó, chỉnh tề, thanh lịch, trí thức và khiến mọi nữ đồng nghiệp phải rít mũi khi bạn lướt ngang qua bàn giấy.",
    vibes: [{label: "Sơ mi trắng", icon: "👔"}, {label: "Văn phòng VIP", icon: "💼"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.2, value: 8.5, total: 8.6 },
    topNotes: [{name: "Hoa Cam chát (Neroli)"}, {name: "Hạt tiêu đen"}, {name: "Bạch đậu khấu"}],
    middleNotes: [{name: "Hoa Diên Vĩ (Iris)"}, {name: "Hoa Phong lữ thảo"}, {name: "Hoa Tím Violet"}],
    baseNotes: [{name: "Hổ phách tươi (Amber)"}, {name: "Gỗ tuyết tùng (Cedar)"}, {name: "Hoắc hương sạch"}],
    accords: [
      {name: "Phấn diên vĩ", value: 100, color: "#e0b0ff"},
      {name: "Hoa tím", value: 85, color: "#da70d6"},
      {name: "Gỗ sấy", value: 75, color: "#cd853f"},
      {name: "Sạch bong", value: 65, color: "#f0ffff"},
      {name: "Cay nhẹ", value: 60, color: "#3cb371"}
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
  
  let injectPoint = cleanedLines.findIndex(l => l.trim().startsWith('name:')) + 1;
  cleanedLines.splice(injectPoint, 0, ...injectLines);
  lines.splice(startIdx, endIdx - startIdx + 1, ...cleanedLines);
  console.log('[v] Da cap nhat xong ID: ' + id);
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('==> BATCH 22 HOAN TAT.');
