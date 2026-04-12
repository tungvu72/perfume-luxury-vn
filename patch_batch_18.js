const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "imagination": {
    subName: "EDP", perfumer: "Jacques Cavallier", year: 2021, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 75, night: 25 },
    seoTitle: "Nước hoa nam Louis Vuitton Imagination trà chiều thượng lưu",
    metaDescription: "Đánh giá Louis Vuitton Imagination: Bình trà (Tea) cam chanh hảo hạng lót nệm Long diên hương (Ambroxan). Thanh tao, xa xỉ dành cho quý ông thành đạt mùa hè.",
    description: "Nhắm mắt lại và tưởng tượng bạn đang nhấp một ngụm trà chiều trên du thuyền tản mạn dọc bờ sông Riviera. Imagination mở ra rực rỡ với trái Thanh Yên (Citron) và Cam Bergamot mọng nước, trước khi xoa dịu thần kinh bằng làn hương Trà đen (Tea) hảo hạng. Sự vương giả thực sự nằm ở lớp nền Long diên hương (Ambroxan) trắng trẻo, ngửi sạch sẽ bóng bẩy như một chiếc áo sơ mi lụa đắt tiền. Chấp hết mọi thời tiết nóng nực đổ lửa, Imagination vẫn bung tỏa cái nhã nhặn, thanh cao tuyệt đối của giới tinh hoa.",
    vibes: [{label: "Trà chiều", icon: "🍵"}, {label: "Thượng lưu", icon: "🛥️"}],
    score: { scent: 9.5, uniqueness: 8.5, compliments: 9.5, value: 8.0, total: 8.9 },
    topNotes: [{name: "Quả Thanh Yên (Citron)"}, {name: "Cam Bergamot"}, {name: "Quả Cam"}],
    middleNotes: [{name: "Trà Đen (Tea)"}, {name: "Hoa Cam Neroli"}, {name: "Gừng (Ginger)"}],
    baseNotes: [{name: "Long diên hương (Ambroxan)"}, {name: "Gỗ Guaiac (Guaiac Wood)"}, {name: "Trầm hương"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Cay tươi", value: 85, color: "#9acd32"},
      {name: "Tươi mát", value: 75, color: "#add8e6"},
      {name: "Hương xanh", value: 65, color: "#008000"},
      {name: "Hổ phách", value: 60, color: "#d2691e"}
    ]
  },
  "limmensite": {
    subName: "EDP", perfumer: "Jacques Cavallier", year: 2018, gender: "nam", longevity: 7, sillage: 8,
    seasons: { spring: 30, summer: 40, fall: 20, winter: 10 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Louis Vuitton L'Immensite biển cả cay nồng",
    metaDescription: "Review Louis Vuitton L'Immensite: Đại dương vô tận cắt lên từ nước ép Bưởi (Grapefruit), Gừng đâm tơi bời và Long diên hương mặn mòi. Mùi hương nam tính đỉnh cao.",
    description: "'Sự vĩnh cửu' (L'Immensité) là cách Vuitton cắt nghĩa sự rộng lớn của đại dương. Ngửi nhát đầu như chẻ đứt một múi Bưởi Tây (Grapefruit) xấp nước (Water), tạt thẳng thêm củ Gừng (Ginger) ngâm hăng hắc sắc bén và Hương Thảo cay nam tính rợn người. Lớp hương khô xuống đầm lại bởi Ambroxan cực kì phóng khoáng. Một hình mẫu soái ca sơ mi trắng hững hờ mặn mòi phong trần, vô cùng sạch sẽ rạng ngời và bám tỏa cực kỳ ấn tượng.",
    vibes: [{label: "Soái ca", icon: "🤵🏻‍♂️"}, {label: "Phong trần", icon: "🌊"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 9.0, value: 8.0, total: 8.5 },
    topNotes: [{name: "Bưởi Tây (Grapefruit)"}, {name: "Gừng (Ginger)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hương nước (Water)"}, {name: "Cây Xô thơm"}, {name: "Hương thảo (Rosemary)"}, {name: "Phong lữ"}],
    baseNotes: [{name: "Long diên hương (Ambroxan)"}, {name: "Hổ phách"}, {name: "Nhựa hương Labdanum"}],
    accords: [
      {name: "Cay tươi", value: 100, color: "#9acd32"},
      {name: "Thảo mộc", value: 85, color: "#2e8b57"},
      {name: "Cam chanh", value: 75, color: "#ffff00"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Hương nước", value: 60, color: "#5f9ea0"}
    ]
  },
  "ombre-nomade": {
    subName: "EDP", perfumer: "Jacques Cavallier", year: 2018, gender: "unisex", longevity: 9, sillage: 10,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa Louis Vuitton Ombre Nomade quái vật trầm hương",
    metaDescription: "Đánh giá LV Ombre Nomade: Ông hoàng sa mạc. Gỗ Trầm hương (Oud) khét lẹt nung với Nhang (Incense) và Quả mâm xôi đỏ rực. Sillage hạt nhân quái thú.",
    description: "Nhà vua của vòm đêm Trung Đông! Ombre Nomade là mùi hương kinh điển và bạo chúa nhất nhà Louis Vuitton. Sự hoang dã của Gỗ Trầm Hương (Oud) bốc khói đen đặc quánh (Smoky), chưng cất cùng Hoa Hồng (Rose) dập úa và Quả mâm xôi (Raspberry) ngầm chua tứa máu. Quái thú này mang độ bám tỏa hủy diệt (quẹt nhẹ cũng bám rách da 12 tiếng). Nó không dành cho mấy cháu trai ngoan hiền, nó dành cho vị chủ tịch đang ngồi đếm tiền trong căn phòng mờ mịt khói xì gà.",
    vibes: [{label: "Chủ tịch", icon: "💎"}, {label: "Bạo chúa", icon: "🌋"}],
    score: { scent: 9.0, uniqueness: 9.5, compliments: 8.5, value: 8.0, total: 8.8 },
    topNotes: [{name: "Gỗ Trầm hương (Oud)"}, {name: "Nhang (Incense)"}],
    middleNotes: [{name: "Hoa Hồng (Rose)"}, {name: "Quả mâm xôi (Raspberry)"}, {name: "Nhụy hoa nghệ tây (Saffron)"}],
    baseNotes: [{name: "Nhựa đỏ Benzoin"}, {name: "Nhựa gỗ Hổ phách (Amberwood)"}, {name: "Gỗ Bạch dương (Birch)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#d2691e"},
      {name: "Cay ấm", value: 85, color: "#cd853f"},
      {name: "Trầm hương", value: 75, color: "#4c3821"},
      {name: "Hoa hồng", value: 65, color: "#ff1493"},
      {name: "Khói", value: 60, color: "#778899"}
    ]
  },
  "deliah-blanc": {
    subName: "Delilah Pour Femme EDP", perfumer: "Maison Alhambra", year: 2022, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 45, summer: 30, fall: 15, winter: 10 }, dayNight: { day: 70, night: 30 },
    seoTitle: "Nước hoa Maison Alhambra Delilah quả vải hoa hồng",
    metaDescription: "Review Maison Alhambra Delilah: Bản clone Parfums de Marly Delina tuyệt sắc. Hoa hồng phấn, Trái Vải (Litchi) và Đại Hoàng dòn chua ngọt nũng nịu vạn người mê.",
    description: "Được mệnh danh là bản sao xuất sắc nhất của tượng đài Delina nhà Parfums de Marly! Delilah ập tới phủ lấp mọi thứ bằng mùi Quả Vải (Litchi) chín đỏ lịm dầm với Cây Đại Hoàng (Rhubarb) chua chua thanh mát vô cùng dễ chịu. Lớp cánh Hoa hồng phấn (Rose) và Hoa mẫu đơn ngậm sương bung nở bồng bềnh, trẻ trung như một nàng tiểu thư áo lụa bước ra từ vườn thượng uyển. Ngọt ngào, đài các, cực bắt mũi và đi làm hay đi hẹn hò đều ăn đứt mọi đối thủ trong tầm giá rẻ.",
    vibes: [{label: "Tiểu thư", icon: "🎀"}, {label: "Ngọt ngào", icon: "🍬"}],
    score: { scent: 8.5, uniqueness: 7.5, compliments: 9.0, value: 9.5, total: 8.6 },
    topNotes: [{name: "Quả Vải (Litchi)"}, {name: "Đại Hoàng (Rhubarb)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Hồng (Rose)"}, {name: "Hoa Mẫu đơn (Peony)"}, {name: "Hương Lilac"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Xạ hương (Musk)"}, {name: "Phấn Cashmeran"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Trái cây", value: 75, color: "#ff8c00"},
      {name: "Xạ hương", value: 65, color: "#d8bfd8"},
      {name: "Tươi mát", value: 60, color: "#afeeee"}
    ]
  },
  "mfk-a-la-rose": {
    subName: "EDP", perfumer: "Francis Kurkdjian", year: 2014, gender: "nu", longevity: 6, sillage: 8,
    seasons: { spring: 50, summer: 40, fall: 5, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa nữ MFK A La Rose những đóa hồng tinh khiết",
    metaDescription: "Đánh giá MFK A la Rose: Tinh khôi như sớm mai với 250 nụ Hoa Hồng (Rose) Đan Mạch và Grasse ép lạnh, vương trên mình lớp Xạ hương (Musk). Gái nhà lành 100%.",
    description: "'Gửi cho đóa hồng của tôi' - MFK tạo ra À la Rose như một bài thơ dâng tặng sự nữ tính tuyệt đối. Tương truyền mỗi chai nước hoa chứa đầy dồn dập 250 nụ Hồng Centifolia (Grasse) và Damascena tươi mơn mởn. Bóp vụn sương mai bằng Cam chanh, vuốt ve bằng Hoa Violet (Tím) ngầy ngậy phấn bông. Mùi hương ngửi trong vắt, điệu đà, tinh khiết 100% không vướng tạp niệm. Một hương thơm dành riêng cho những kiều nữ con nhà gia giáo mang váy ren lụa ngày xuân.",
    vibes: [{label: "Tinh khiết", icon: "🕊️"}, {label: "Nàng thơ", icon: "💐"}],
    score: { scent: 8.8, uniqueness: 8.0, compliments: 8.5, value: 7.5, total: 8.2 },
    topNotes: [{name: "Cam Bergamot"}, {name: "Quả Cam (Orange)"}],
    middleNotes: [{name: "Hoa Hồng Tươi (Rose)"}, {name: "Hoa Tím (Violet)"}, {name: "Hoa cỏ"}],
    baseNotes: [{name: "Xạ Hương (Musk)"}, {name: "Gỗ Tuyết Tùng"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Phấn", value: 75, color: "#f5deb3"},
      {name: "Cam chanh", value: 65, color: "#ffff00"},
      {name: "Hoa tím", value: 60, color: "#9400d3"}
    ]
  },
  "maison-francis-kurkdjian-kurky": {
    subName: "Aqua Universalis EDT", perfumer: "Francis Kurkdjian", year: 2009, gender: "unisex", longevity: 6, sillage: 8,
    seasons: { spring: 35, summer: 50, fall: 10, winter: 5 }, dayNight: { day: 80, night: 20 },
    seoTitle: "Nước hoa MFK Aqua Universalis mảng nước hồi sinh",
    metaDescription: "Review MFK Aqua Universalis: Mảng nước chanh tươi Lemon sắc lẹm và Hoa Linh Lan đanh lạnh. Mùi chiếc áo sơ mi lanh mới giặt xốp mềm. Tươi mát vô cực.",
    description: "Tuyệt phẩm để rửa trôi mọi mệt mỏi! Aqua Universalis mang nghĩa 'Vùng nước cội nguồn', khởi sinh bằng rổ Chanh vàng (Lemon) vắt óng ánh, tưới đẫm lên một mảng Hoa Linh Lan Trắng (Lily-of-the-valley) cực kỳ thanh lãnh tột độ. Xạ hương làm nó bốc mùi sạch sẽ bong tróc như một bộ drap trải giường khách sạn 5 sao vừa được giặt phơi mím dưới nắng sớm. Mặc nó vào là tự gột rửa phiền muộn, mang ngập không khí mùa hè sảng khoái.",
    vibes: [{label: "Sạch sẽ", icon: "🧼"}, {label: "Hồi sinh", icon: "💦"}],
    score: { scent: 8.5, uniqueness: 8.0, compliments: 8.0, value: 7.5, total: 8.0 },
    topNotes: [{name: "Chanh vàng (Lemon)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Linh Lan Trắng (Lily-of-the-valley)"}, {name: "Hoa Cam"}],
    baseNotes: [{name: "Xạ Hương (Musk)"}, {name: "Hương Gỗ (Woody Notes)"}],
    accords: [
      {name: "Cam chanh", value: 100, color: "#ffff00"},
      {name: "Hoa trắng", value: 85, color: "#f8f8ff"},
      {name: "Tươi mát", value: 75, color: "#add8e6"},
      {name: "Xạ hương", value: 65, color: "#e6e6fa"},
      {name: "Thảo mộc", value: 60, color: "#2e8b57"}
    ]
  },
  "mfk-baccarat-54-edp": {
    subName: "Baccarat Rouge 540 EDP", perfumer: "Francis Kurkdjian", year: 2015, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa MFK Baccarat Rouge 540 huyền thoại yến tiệc",
    metaDescription: "Đánh giá Baccarat Rouge 540 EDP: Kẹo đường (Sugar) hỏa thiêu, Nhụy hoa nghệ tây (Saffron) và Nhựa thông (Fir). Huyền thoại siêu tỏa hương càn quét thế giới mùi hương.",
    description: "Nhắc đến Niche là phải nhắc đến 'Baccarat 540' – Kẻ định hình lại cả một ngành công nghiệp làm hương. Dát vàng bằng Đường nướng cháy (Sugar) xông dính vô cánh Nhụy hoa Nghệ tây (Saffron) sắc như đinh y tế. Lớp Long diên hương đắt đỏ bung tỏa thứ uy lực 'thoắt ẩn thoắt hiện', lúc vô tình dâng lên mũi ngào ngạt kinh diễm, bưng bít cả phòng, khi thì lại len lỏi lặng lẽ trong da. Một mùi hương ma túy, siêu sang chảnh mà ai ai cũng ngước nhìn.",
    vibes: [{label: "Sang chảnh", icon: "💎"}, {label: "Quyền lực", icon: "💳"}],
    score: { scent: 9.5, uniqueness: 9.5, compliments: 10.0, value: 8.5, total: 9.4 },
    topNotes: [{name: "Nhụy Hoa Nghệ Tây (Saffron)"}, {name: "Hoa Nhài (Jasmine)"}],
    middleNotes: [{name: "Nhựa Thông Tảo (Amberwood)"}, {name: "Long Diên Hương Tự Nhiên (Ambergris)"}],
    baseNotes: [{name: "Cây Linh Sam (Fir)"}, {name: "Nhựa gỗ Tuyết Tùng"}],
    accords: [
      {name: "Gỗ", value: 100, color: "#8b4513"},
      {name: "Hổ phách", value: 85, color: "#d2691e"},
      {name: "Cay ấm", value: 75, color: "#cd853f"},
      {name: "Kim loại", value: 65, color: "#8a9a99"},
      {name: "Cay tươi", value: 60, color: "#9acd32"}
    ]
  },
  "gentle-fluidity-gold": {
    subName: "EDP", perfumer: "Francis Kurkdjian", year: 2019, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 20, summer: 10, fall: 40, winter: 30 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa MFK Gentle Fluidity Gold Vani ánh vàng",
    metaDescription: "Review MFK Gentle Fluidity Gold: Vani béo mượt ánh vàng đồng quyện cùng Nhục đậu khấu và Hạt bách xù. Đẳng cấp tiểu thư tài phiệt xa xỉ, hiền dịu.",
    description: "Dòng vàng chảy xiết trên bầu ngực Nàng thơ! Gentle Fluidity Gold lấy Vani béo mượt rười rượi làm hạt nhân, nấu lỏng cùng Xạ hương, Hổ phách rực nóng. Không mang vị ngọt sứt đầu ọc bơ, MFk bỏ vào vài hạt Bách xù (Juniper Berries) mát rượi và chút ngậy Nhục đậu khấu làm nó lãng mạn, mịn màng nhưng lại cực đỉnh kiêu hãnh. Hương bay la đà theo từng nếp váy lụa satin mỏng dính vào đêm thu hoạch. Nịnh mũi cực đỉnh.",
    vibes: [{label: "Ánh vàng", icon: "✨"}, {label: "Sành điệu", icon: "🥂"}],
    score: { scent: 9.0, uniqueness: 8.0, compliments: 9.0, value: 8.0, total: 8.5 },
    topNotes: [{name: "Nhục đậu khấu (Nutmeg)"}, {name: "Hạt bách xù (Juniper Berries)"}],
    middleNotes: [{name: "Ngò rí (Coriander)"}],
    baseNotes: [{name: "Vani (Vanilla)"}, {name: "Hổ phách (Amberwoods)"}, {name: "Xạ hương (Musk)"}],
    accords: [
      {name: "Vani", value: 100, color: "#f5f5dc"},
      {name: "Phấn", value: 85, color: "#f5deb3"},
      {name: "Xạ hương", value: 75, color: "#d8bfd8"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Thảo mộc", value: 60, color: "#2e8b57"}
    ]
  },
  "grand-soir": {
    subName: "EDP", perfumer: "Francis Kurkdjian", year: 2016, gender: "unisex", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 20, night: 80 },
    seoTitle: "Nước hoa MFK Grand Soir tiệc tối Hổ phách Paris",
    metaDescription: "Đánh giá MFK Grand Soir: Màn đêm Paris sáng rực dưới thứ ánh sáng Hổ Phách (Amber) và Vani nhão nhoẹt. Uy lực thống trị những bữa dạ tiệc thượng lưu.",
    description: "'Đêm Vĩ Đại' (Grand Soir) vẽ lại ánh đèn rực rỡ của Paris lúc lên đèn. Một khối Hổ Phách (Amber) nồng ấm, béo ngậy quấn chặt tay vào đồi Vani quánh ngọt lác đác vài giọt Nhựa Benzoin và Đậu Tonka cháy xém xực nức dạ dày. Mùi hương ngùn ngụt lửa, sâu thẳm xa xỉ và mang sức mạnh tỏa hương sưởi ấm trong mùa đông khắc nghiệt. Nhắm mắt lại ngửi mùi Grand Soir là thấy người kia toát lên vẻ giàu sang cộc vàng.",
    vibes: [{label: "Dạ tiệc", icon: "🍾"}, {label: "Giàu sụ", icon: "💰"}],
    score: { scent: 9.2, uniqueness: 8.5, compliments: 9.0, value: 8.5, total: 8.8 },
    topNotes: [{name: "Cánh hoa Oải hương (Lavender)"}],
    middleNotes: [{name: "Nhựa Benzoin (Benzoin)"}, {name: "Nhựa Labdanum"}],
    baseNotes: [{name: "Hổ Phách (Amber)"}, {name: "Vani (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}],
    accords: [
      {name: "Hổ phách", value: 100, color: "#d2691e"},
      {name: "Vani", value: 85, color: "#f5f5dc"},
      {name: "Phấn", value: 75, color: "#f5deb3"},
      {name: "Ngọt ngào", value: 65, color: "#ff4500"},
      {name: "Thảo mộc", value: 60, color: "#2e8b57"}
    ]
  },
  "oud-satin-mood": {
    subName: "EDP", perfumer: "Francis Kurkdjian", year: 2015, gender: "unisex", longevity: 9, sillage: 10,
    seasons: { spring: 10, summer: 5, fall: 35, winter: 50 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa MFK Oud Satin Mood hoa hồng mứt dầm trầm",
    metaDescription: "Review MFK Oud Satin Mood: Dải lụa Satin nhuộm máu từ đống Hoa Hồng nghiền Vani béo lẫy và Mảng Gỗ Trầm hương vương giả. Lưu bám hàng chục tiếng đồng hồ.",
    description: "Nhắc đến gỗ Trầm là nhắc đến gai góc? MFK đập nát định kiến đó bằng Oud Satin Mood. Gỗ Trầm hương nguyên chất (Oud) được nhuộm bằng một lượng khổng lồ Hoa hồng Thổ Nhĩ Kỳ và Bulgaria, nung chảy dưới núi lửa Vani kẹo đường siêu béo ngậy. Nó mềm mại mướt mát nhưng lỳ lợm khủng khiếp như một chiếc khăn lụa phủ kín bầu trời. Với sillage cuồng phong càn quét vạn vật, cẩn thận kẻo bạn làm cả hội trường bị sốc hương.",
    vibes: [{label: "Càn quét", icon: "🌪️"}, {label: "Mê mị", icon: "🥀"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 8.8, value: 8.5, total: 8.8 },
    topNotes: [{name: "Hoa Hồng Damask (Rose)"}, {name: "Hoa Tím (Violet)"}],
    middleNotes: [{name: "Gỗ Trầm Hương (Oud)"}, {name: "Nhựa Benzoin"}],
    baseNotes: [{name: "Hoa Hồng Centifolia"}, {name: "Vani (Vanilla)"}, {name: "Hổ phách"}],
    accords: [
      {name: "Hoa hồng", value: 100, color: "#ff1493"},
      {name: "Hoa cỏ", value: 85, color: "#ff69b4"},
      {name: "Trầm hương", value: 75, color: "#4c3821"},
      {name: "Hổ phách", value: 65, color: "#d2691e"},
      {name: "Vani", value: 60, color: "#f5f5dc"}
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
console.log('==> BATCH 18 HOAN TAT.');
