const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'mockData.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const updates = {
  "la-nuit-de-lhomme": {
    subName: "EDT", perfumer: "Anne Flipo, Pierre Wargnye, Dominique Ropion", year: 2009, gender: "nam", longevity: 6, sillage: 6,
    seasons: { spring: 20, summer: 5, fall: 40, winter: 35 }, dayNight: { day: 25, night: 75 },
    seoTitle: "Nước hoa Yves Saint Laurent La Nuit de L'Homme trai ngoan hẹn hò",
    metaDescription: "Đánh giá La Nuit de L'Homme EDT: Huyền thoại hẹn hò kinh điển. Bạch đậu khấu cay nồng quyện Oải hương và Gỗ tuyết tùng lãng tử, làm xiêu lòng mọi cô gái.",
    description: "Nhắc tới 'ông vua hẹn hò First-date', La Nuit de L'Homme luôn là tượng đài! Mùi hương mở ra bằng vị cay nồng ngọt the quyến rũ của Bạch đậu khấu (Cardamom) rất đặc trưng. Tiếp sau đó là sự điềm đạm, lãng tử hào hoa của Hoa Oải hương (Lavender) trên nền Gỗ tuyết tùng ráo rảnh. Gã trai này mặc sơ mi mở cúc, không hầm hố xôi thịt, nhẹ nhàng ấm áp đủ làm các nàng tựa đầu vào bờ vai. Ở bản mới nhất (reformulate), độ bám tỏa có giảm nhẹ nhưng bù lại DNA mùi hương vẫn quá đỉnh cao.",
    vibes: [{label: "Hẹn hò", icon: "🍷"}, {label: "Lãng tử", icon: "✨"}],
    score: { scent: 9.5, uniqueness: 8.5, compliments: 9.5, value: 8.0, total: 8.8 },
    topNotes: [{name: "Bạch đậu khấu (Cardamom)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Gỗ Tuyết tùng (Cedar)"}],
    baseNotes: [{name: "Cỏ hương bài (Vetiver)"}, {name: "Hạt Caraway"}],
    accords: [
      {name: "Gia vị cay ấm", value: 100, color: "#d35400"},
      {name: "Thảo mộc the", value: 85, color: "#2e8b57"},
      {name: "Oải hương bụi", value: 75, color: "#9370db"},
      {name: "Gỗ mộc", value: 65, color: "#8b4513"},
      {name: "Cay mát sắc", value: 60, color: "#7cb342"}
    ]
  },
  "libre-edp": {
    subName: "EDP", perfumer: "Anne Flipo, Carlos Benaim", year: 2019, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 25, summer: 15, fall: 35, winter: 25 }, dayNight: { day: 45, night: 55 },
    seoTitle: "Nước hoa Yves Saint Laurent Libre EDP độc bản hoàng kim",
    metaDescription: "Review YSL Libre EDP: Tự do và ngạo nghễ. Hoa Oải hương nam tính đan xen Hoa cam và Vani nữ tính tạo nên nữ cường nhân sành điệu vạn người mê.",
    description: "Quả bom đánh sập mọi định kiến về nước hoa nữ! Libre (Tự Do) ngang tàng mang nhóm hương Fougere (thảo mộc Oải hương) vốn dành cho nam giới đắp lên da thịt phụ nữ. Cú va chạm giữa Oải hương (Lavender) sắc cạnh và Hoa cam non, Vani ngọt béo làm nên một sự quyến rũ trung tính, lạnh lùng nhưng rực rỡ vàng son. Nàng Libre không cần đàn ông che chở, nàng làm chủ cuộc chơi và thơm phức sang chảnh ngút ngàn.",
    vibes: [{label: "Nữ cường", icon: "👑"}, {label: "Quyền lực", icon: "👠"}],
    score: { scent: 9.0, uniqueness: 9.0, compliments: 9.5, value: 8.5, total: 9.0 },
    topNotes: [{name: "Hoa Oải hương (Lavender)"}, {name: "Cam Mandarin"}, {name: "Thinh dầu lá cam"}],
    middleNotes: [{name: "Hoa Cam ngợp (Orange Blossom)"}, {name: "Hoa nhài thanh (Jasmine)"}],
    baseNotes: [{name: "Vani đen (Vanilla)"}, {name: "Xạ hương sạch (Musk)"}, {name: "Cỏ hương bài"}, {name: "Long diên hương"}],
    accords: [
      {name: "Hoa trắng bay", value: 100, color: "#f8f8ff"},
      {name: "Thảo mộc sắc", value: 85, color: "#2e8b57"},
      {name: "Oải hương the", value: 75, color: "#9370db"},
      {name: "Cam chanh đắng", value: 65, color: "#ffff00"},
      {name: "Vani quánh", value: 60, color: "#ffffe0"}
    ]
  },
  "libre-intense": {
    subName: "EDP", perfumer: "Anne Flipo, Carlos Benaim", year: 2020, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 40, winter: 40 }, dayNight: { day: 35, night: 65 },
    seoTitle: "Nước hoa Yves Saint Laurent Libre Intense tự do rực lửa",
    metaDescription: "Đánh giá YSL Libre Intense: Phiên bản sắc sảo, dạn dĩ hơn với sự gia tăng của Vani Madagasca, Oải hương Pháp và Đậu Tonka rực rỡ bốc lửa.",
    description: "Nếu Libre bản gốc là cô nàng mặc vest quyền lực, thì Intense là cô ta đi thẳng từ công ty vào buổi tiệc đêm ướt át! Libre Intense khuếch đại cực đại sự dữ dội của Hoa Oải hương (Lavender) nam tính, quyện với dòng thác ngọt lịm từ Vani bốc khói và Đậu Tonka. Sức nóng hừng hực bung tỏa một màu vàng ươm, quyến rũ, ngạo nghễ và không gì ngăn cản được. Mùi của một nữ cường nhân có gu, bám tỏa khủng long.",
    vibes: [{label: "Bốc lửa", icon: "🔥"}, {label: "Sắc sảo", icon: "😎"}],
    score: { scent: 9.3, uniqueness: 8.5, compliments: 9.5, value: 8.5, total: 8.9 },
    topNotes: [{name: "Hoa Oải hương sắc (Lavender)"}, {name: "Cam Mandarin"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Oải hương lả"}, {name: "Hoa Lan Châu Phi (Orchid)"}, {name: "Hoa Nhài (Jasmine)"}],
    baseNotes: [{name: "Vani nguyên con (Vanilla)"}, {name: "Đậu Tonka (Tonka Bean)"}, {name: "Long diên hương"}],
    accords: [
      {name: "Vani đen bùi", value: 100, color: "#ffffe0"},
      {name: "Hoa trắng quyến rũ", value: 85, color: "#f8f8ff"},
      {name: "Cam chanh chín mọng", value: 75, color: "#ffff00"},
      {name: "Oải hương the", value: 65, color: "#9370db"},
      {name: "Ngọt ấm nồng", value: 60, color: "#ff4500"}
    ]
  },
  "libre-leau-nue": {
    subName: "EDT", perfumer: "YSL", year: 2021, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 40, fall: 15, winter: 10 }, dayNight: { day: 70, night: 30 },
    seoTitle: "Nước hoa Yves Saint Laurent Libre Eau de Toilette ban mai",
    metaDescription: "Review Libre EDT: Thoát xác khỏi vẻ lạnh lùng, Libre EDT mỏng manh như sương mai. Trà nhài (Jasmine Tea) và Hoa Cam ngậm nước tươi vô tận.",
    description: "Một bản nhạc dịu dàng nhất của đại gia đình Libre! Bản EDT (hay Eau Nue) giảm bớt sự the gắt của Oải hương, và tẩy sạch độ gắt dính của Vani. Thay vào đó, nó phủ một mảng sương trong suốt của Trà hoa nhài (Jasmine Tea) dịu ngọt thanh khiết. Mùi hương ngậm nước, sảng khoái và cực kỳ thanh lịch. Chai này là must-have (phải có) cho các nàng diện váy hoa bồng bềnh dạo phố một sáng mùa hè nắng đẹp.",
    vibes: [{label: "Tinh khôi", icon: "🌸"}, {label: "Trà ban mai", icon: "🍵"}],
    score: { scent: 8.8, uniqueness: 7.5, compliments: 8.8, value: 8.0, total: 8.2 },
    topNotes: [{name: "Hoa Oải hương non"}, {name: "Cam Mandarin"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Trà Hoa nhài (Jasmine Tea)"}, {name: "Hoa Cam tơ"}, {name: "Hoa nhài trắng"}],
    baseNotes: [{name: "Vani mỏng (Vanilla)"}, {name: "Xạ hương ngà (Musk)"}, {name: "Long diên hương"}],
    accords: [
      {name: "Hoa trắng bay", value: 100, color: "#f8f8ff"},
      {name: "Cam chanh tươi bay", value: 85, color: "#ffff00"},
      {name: "Trà Oải hương thanh", value: 75, color: "#9370db"},
      {name: "Hoa tơ nhung", value: 65, color: "#ffb6c1"},
      {name: "Tươi mát", value: 60, color: "#4fc3f7"}
    ]
  },
  "libre-le-parfum": {
    subName: "Parfum", perfumer: "Anne Flipo, Carlos Benaim", year: 2022, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 30, night: 70 },
    seoTitle: "Nước hoa Yves Saint Laurent Libre Le Parfum ngạo nghễ phu nhân",
    metaDescription: "Đánh giá Libre Le Parfum: Đỉnh cao nhất của dòng Libre. Mật ong (Honey) sánh đặc nhồi chung Gừng ấm và Vani. Đậm đà, quyền lực đỉnh chóp.",
    description: "Giọt mật vàng sánh quánh quyền lực tột độ! Bản Le Parfum vứt đi sự lạnh lùng của fougere, nó đẩy cực hạn sự quyến rũ lên tận cùng bằng cách vắt nguyên hũ Mật ong (Honey) cùng Gừng the (Ginger) phủ lên Oải hương. Đặc rệt Vani, ấm sực Đậu Tonka, ngửi phát là sực nức mùi tiền, mùi của sự thành đạt và kiêu ngạo. Xịt em này đi sự kiện, mặc đầm đen xẻ bạo, đảm bảo đè bẹp mọi đoá hoa xung quanh.",
    vibes: [{label: "Quyền lực đỉnh", icon: "👑"}, {label: "Mật đắt tiền", icon: "🍯"}],
    score: { scent: 9.5, uniqueness: 8.5, compliments: 9.3, value: 8.0, total: 8.8 },
    topNotes: [{name: "Gừng tươi (Ginger)"}, {name: "Nghệ tây"}, {name: "Cam máu"}, {name: "Chanh"}],
    middleNotes: [{name: "Hoa Oải hương nguyên bản"}, {name: "Hoa Cam"}],
    baseNotes: [{name: "Mật ong mật (Honey)"}, {name: "Vani đen nhuyễn (Vanilla)"}, {name: "Đậu Tonka"}, {name: "Cỏ hương bài"}],
    accords: [
      {name: "Vani đặc quánh", value: 100, color: "#ffffe0"},
      {name: "Ngọt bạo liệt", value: 85, color: "#ff4500"},
      {name: "Cam chanh đầm", value: 75, color: "#ff8c00"},
      {name: "Mật ong sệt", value: 65, color: "#ffa500"},
      {name: "Hoa trắng bay", value: 60, color: "#f8f8ff"}
    ]
  },
  "mon-paris-edp": {
    subName: "EDP", perfumer: "Olivier Cresp, Harry Fremont", year: 2016, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 30, fall: 20, winter: 15 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Yves Saint Laurent Mon Paris tình yêu Paris say đắm",
    metaDescription: "Review YSL Mon Paris: Cô nhóc tiểu thư Paris cuồng dại trong tình yêu. Rổ Dâu tây, Mâm xôi chín mọng trộn Mẫu đơn lả lơi và Hoắc hương the mát.",
    description: "Một nụ hôn kiểu Pháp say đắm ngập mồm vị trái cây! Mon Paris dồn bạn vào tường bằng một thác quả mọng đỏ choót: Dâu tây (Strawberry), Mâm xôi (Raspberry) và Lê rưới siro chói chang váng vất. Giữa làn hương là Hoa Mẫu đơn (Peony) hồng rực rỡ lả lơi đệm theo Hoắc hương (Patchouli) the mát rười rượi. Dành cho mấy nàng bánh bèo nhưng thích chủ động trong tình yêu, ngọt ngào, hân hoan và tràn trề năng lượng.",
    vibes: [{label: "Nụ hôn Pháp", icon: "💋"}, {label: "Berry đỏ", icon: "🍓"}],
    score: { scent: 8.5, uniqueness: 7.0, compliments: 8.8, value: 8.0, total: 8.0 },
    topNotes: [{name: "Dâu tây (Strawberry)"}, {name: "Qủa Mâm xôi (Raspberry)"}, {name: "Quả Lê dập"}],
    middleNotes: [{name: "Hoa mẫu đơn (Peony)"}, {name: "Hoa cà dược"}, {name: "Hoa nhài thanh"}],
    baseNotes: [{name: "Hoắc hương hoang (Patchouli)"}, {name: "Xạ hương ngà (Musk)"}, {name: "Gỗ Tuyết tùng"}],
    accords: [
      {name: "Trái cây đỏ rực", value: 100, color: "#ff4500"},
      {name: "Ngọt lịm", value: 85, color: "#dc143c"},
      {name: "Tươi mọng nước", value: 75, color: "#4fc3f7"},
      {name: "Hoa trắng muốt", value: 65, color: "#f8f8ff"},
      {name: "Hoắc hương the", value: 60, color: "#556b2f"}
    ]
  },
  "opium-edt": {
    subName: "EDT", perfumer: "YVES SAINT LAURENT", year: 2009, gender: "nu", longevity: 8, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 40, winter: 45 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa Yves Saint Laurent Opium EDT bà trùm ả đào",
    metaDescription: "Đánh giá YSL Opium EDT (2009): Phiên bản cải lùi vẫn mang danh tượng đài cổ điển. Mùi Nhũ hương (Myrrh) cay nồng sặc sụa và Amber ám khói mê luyến.",
    description: "Không phải ai cũng dám khoác Opium lên mình! Cái tên 'Thuốc phiện' đủ nói lên độ gắt và độ lú của ẻm. Bản EDT (2009) vẫn quật ngã khứu giác bằng mùi Nhũ hương (Myrrh), Hổ phách (Amber) và Hoa Cẩm chướng (Carnation) cay nồng phảng phất mùi quế đỏ. Vẻ đẹp cổ xưa đến độ bị gán mác hơi dừ, nhưng xịt cho các mẹ, các bà hoặc chị gái gu vintage (hoài cổ) thì nó trở thành một thứ nước ma thuật vương giả, uy quyền thét ra lửa.",
    vibes: [{label: "Hoài cổ", icon: "🕰️"}, {label: "Ả đào cay", icon: "🔥"}],
    score: { scent: 8.0, uniqueness: 9.5, compliments: 7.0, value: 8.5, total: 8.2 },
    topNotes: [{name: "Quýt Tangerine (Tangerine)"}, {name: "Cam Bergamot"}, {name: "Hoa linh lan"}],
    middleNotes: [{name: "Nhũ hương nhựa (Myrrh)"}, {name: "Hoa Cẩm chướng (Carnation)"}, {name: "Hoa Lài"}],
    baseNotes: [{name: "Hổ phách khét (Amber)"}, {name: "Hoắc hương (Patchouli)"}, {name: "Vani đen (Vanilla)"}],
    accords: [
      {name: "Hổ phách cay", value: 100, color: "#d2691e"},
      {name: "Gia vị nóng", value: 85, color: "#cd5c5c"},
      {name: "Hoa phơn phớt", value: 75, color: "#ff69b4"},
      {name: "Cam chanh đắng", value: 65, color: "#ffff00"},
      {name: "Hoa trắng", value: 60, color: "#f8f8ff"}
    ]
  },
  "rive-gauche": {
    subName: "EDT", perfumer: "Jacques Polge", year: 1971, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 35, summer: 5, fall: 35, winter: 25 }, dayNight: { day: 65, night: 35 },
    seoTitle: "Nước hoa Yves Saint Laurent Rive Gauche cổ điển tả ngạn Paris",
    metaDescription: "Review Rive Gauche EDT: Bức tranh tả ngạn sông Seine hoa lệ. Hương sà phòng kiêu kỳ kim loại từ Anđêhít (Aldehydes) quyện Rêu sồi, Hoa Hồng.",
    description: "Ký ức huy hoàng của những quý bà mặc váy hoa trên tả ngạn bờ sông Seine! Rive Gauche mang sắc thái bột xà phòng sủi bọt ngập ngụa của Aldehydes sắc lẻm. Nó cuốn tung mùi Hoa Hồng nhung, Rêu mùi đất (Oakmoss) xen lẫn chút xanh chua chát thanh lịch lẫy lừng của kỷ nguyên 70. Nếu bạn yêu hương Vintagesắc lẹm như Chanel No.5 đẫm kim loại thì chai sọc xanh đen này là một kho báu vĩnh cửu.",
    vibes: [{label: "Xà phòng thơm", icon: "🛀"}, {label: "Paris 1970", icon: "🎞️"}],
    score: { scent: 8.5, uniqueness: 9.0, compliments: 7.5, value: 8.0, total: 8.2 },
    topNotes: [{name: "Anđêhít kim loại (Aldehydes)"}, {name: "Hương hoa xanh"}, {name: "Kim ngân hoa"}],
    middleNotes: [{name: "Hoa Hồng đỏ (Rose)"}, {name: "Hoa Diên vĩ đắng (Iris)"}, {name: "Hoa Muguet"}],
    baseNotes: [{name: "Rêu sồi ẩm (Oakmoss)"}, {name: "Cỏ hương bài (Vetiver)"}, {name: "Xạ hương da"}],
    accords: [
      {name: "Sủi bọt xà phòng", value: 100, color: "#b0e0e6"},
      {name: "Hoa trắng nhung", value: 85, color: "#f8f8ff"},
      {name: "Gỗ ẩm", value: 75, color: "#8b4513"},
      {name: "Đất bùn rừng", value: 65, color: "#54463d"},
      {name: "Tươi mộc", value: 60, color: "#7fe5f0"}
    ]
  },
  "tuxedo": {
    subName: "EDP", perfumer: "Juliette Karagueuzoglou", year: 2015, gender: "unisex", longevity: 7, sillage: 8,
    seasons: { spring: 10, summer: 5, fall: 45, winter: 40 }, dayNight: { day: 40, night: 60 },
    seoTitle: "Nước hoa YSL Tuxedo kiệt tác vest đen sành điệu",
    metaDescription: "Đánh giá Yves Saint Laurent Tuxedo: Bộ vest đen vạn người mê. Hoắc hương (Patchouli), Vani và Ambergris thượng hạng ướp lá Violet, tiêu đen sang trọng.",
    description: "Khoác bộ vest đen (Tuxedo) quyền lực, bóng bẩy và vương giả! Đỉnh cao của dòng Le Vestiaire YSL, Tuxedo mang lại cảm giác cực kỳ 'nhiều tiền' nhưng không phô trương. Hoắc hương mộc mạc (Patchouli) được lót trên nền Vani ngọt nhạt và Long diên hương (Ambergris) chát chát mặn mặn. Lá Violet ngái nhẹ rải qua da như một cái chớp mắt hờ hững. Cả nam lẫn nữ xịt đều toát lên một chữ 'Sang', ăn cưới, tiệc cuối năm auto vô đối.",
    vibes: [{label: "Vest đen", icon: "🕴️"}, {label: "Giới thượng lưu", icon: "✨"}],
    score: { scent: 9.8, uniqueness: 9.0, compliments: 9.5, value: 8.2, total: 9.1 },
    topNotes: [{name: "Lá Violet (Violet Leaf)"}, {name: "Ngò rí thơm (Coriander)"}, {name: "Cam Bergamot"}],
    middleNotes: [{name: "Hoa Hồng lả (Rose)"}, {name: "Tiêu đen vụn (Pepper)"}, {name: "Hoa linh lan linh"}],
    baseNotes: [{name: "Hoắc hương (Patchouli)"}, {name: "Vani đanh (Vanilla)"}, {name: "Long diên hương mặn (Ambergris)"}],
    accords: [
      {name: "Hoắc hương the", value: 100, color: "#556b2f"},
      {name: "Vani quyện", value: 85, color: "#ffffe0"},
      {name: "Hổ phách chát", value: 75, color: "#d2691e"},
      {name: "Khí quyển mặn", value: 65, color: "#e0ffff"},
      {name: "Gia vị sắc", value: 60, color: "#7cb342"}
    ]
  },
  "this-is-her": {
    subName: "EDP", perfumer: "Sidonie Lancesseur, Michel Almairac", year: 2016, gender: "nu", longevity: 7, sillage: 8,
    seasons: { spring: 15, summer: 5, fall: 35, winter: 45 }, dayNight: { day: 60, night: 40 },
    seoTitle: "Nước hoa Zadig & Voltaire This Is Her bát sữa hạnh nhân",
    metaDescription: "Review Zadig & Voltaire This Is Her: Hương hạt dẻ (Chestnut) quậy chung Kem béo (Cream) và Vani. Đẹp phá cách, lạ lẫm mà cực cuốn.",
    description: "Một ly sữa hạnh nhân hạt dẻ ngậy béo phá đảo mùa đông! This Is Her không ồn ào khoe mùi hoa cỏ, ẻm đập thẳng vào khứu giác bát Kem đặc xốp (Cream) rưới Vani bùi béo dính cả vụn Hạt dẻ nướng (Chestnut). Nhưng khoan, Gỗ Đàn hương (Sandalwood) ngấm ngầm rải sâu dưới đáy tạo nên một mùi da thịt trầm tĩnh, lười biếng mà mlem nhức nhói. Nàng mặc áo len rộng, tóc xõa che nửa vai xịt mùi này thì gắp triệu follow.",
    vibes: [{label: "Áo len len", icon: "👕"}, {label: "Sữa hạt dẻ", icon: "🥛"}],
    score: { scent: 9.0, uniqueness: 9.2, compliments: 9.0, value: 8.5, total: 8.9 },
    topNotes: [{name: "Tiêu hồng the (Pink Pepper)"}, {name: "Lụa Nhài"}, {name: "Cây hợp hoan đào"}],
    middleNotes: [{name: "Kem tươi (Cream)"}, {name: "Vani sệt (Vanilla)"}, {name: "Hạt dẻ bùi nướng (Chestnut)"}],
    baseNotes: [{name: "Gỗ Đàn hương (Sandalwood)"}, {name: "Gỗ Cashmere dẻo (Cashmir wood)"}],
    accords: [
      {name: "Vani bùi ngậy", value: 100, color: "#ffffe0"},
      {name: "Ngọt sữa", value: 85, color: "#dc143c"},
      {name: "Gỗ bào mỏng", value: 75, color: "#8b4513"},
      {name: "Nhựa gỗ ấm", value: 65, color: "#cd853f"},
      {name: "Phấn xốp dịu", value: 60, color: "#faebd7"}
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
console.log('==> BATCH 27 HOAN TAT.');
