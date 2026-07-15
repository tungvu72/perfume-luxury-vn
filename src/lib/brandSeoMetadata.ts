/**
 * Owner-approved brand SEO metadata (BATCH_02 + BATCH_03A + BATCH_03B + BATCH_03C).
 * Source: MaisonDeSon_SEO_All_Pages_READY_TO_APPLY.xlsx
 * Do NOT rewrite Final_* strings — copy-only implementation map.
 * BRAND_METADATA_EDITORIAL_HOTFIX_37: title+description only for 37 brands.
 * COMMERCIAL_V5_BRANDS_A_19: first commercial brand metadata slice (19 brands).
 */

import { resolveBrandSlug } from '@/lib/brandCanonical';

export type BrandSeoMetadata = {
  title: string;
  description: string;
  h1: string;
  canonical: string;
};

/** slug → approved metadata (canonical brand paths only) */
export const BRAND_SEO_METADATA: Record<string, BrandSeoMetadata> = {
  "byredo": {
    title: `Nước hoa Byredo chính hãng: giá Bal d’Afrique, Blanche`,
    description: `So sánh Bal d’Afrique, Blanche và La Tulipe theo phong cách mùi, giá tham khảo và tiêu chí chọn nguồn mua nước hoa Byredo chính hãng.`,
    h1: `Nước hoa Byredo`,
    canonical: `https://www.maisondeson.com/byredo`,
  },
  "chanel": {
    title: `Nước hoa Chanel chính hãng: giá Bleu, Coco, N°5 và mua ở đâu?`,
    description: `Khám phá Bleu de Chanel, Coco Mademoiselle và N°5; xem review, giá tham khảo và tiêu chí chọn nơi mua nước hoa Chanel chính hãng.`,
    h1: `Nước hoa Chanel`,
    canonical: `https://www.maisondeson.com/chanel`,
  },
  "creed": {
    title: `Nước hoa Creed chính hãng: giá Aventus, review và mua ở đâu?`,
    description: `So sánh Aventus, Green Irish Tweed và Silver Mountain Water về phong cách, giá tham khảo và tiêu chí chọn nguồn mua Creed chính hãng.`,
    h1: `Nước hoa Creed`,
    canonical: `https://www.maisondeson.com/creed`,
  },
  "dior": {
    title: `Nước hoa Dior chính hãng: giá Sauvage, J’adore và review`,
    description: `So sánh Sauvage, J’adore và Dior Homme theo phong cách mùi, giá tham khảo và tiêu chí chọn nguồn mua nước hoa Dior chính hãng.`,
    h1: `Nước hoa Dior`,
    canonical: `https://www.maisondeson.com/dior`,
  },
  "giorgio-armani": {
    title: `Nước hoa Giorgio Armani chính hãng: giá Acqua di Giò, Sì và My Way`,
    description: `Khám phá Acqua di Giò, Sì và My Way; xem review, mức giá tham khảo cùng tiêu chí chọn nơi mua nước hoa Giorgio Armani chính hãng.`,
    h1: `Nước hoa Giorgio Armani`,
    canonical: `https://www.maisondeson.com/giorgio-armani`,
  },
  "guerlain": {
    title: `Nước hoa Guerlain chính hãng: giá Shalimar, L’Homme Idéal`,
    description: `Khám phá Shalimar, L’Homme Idéal và Aqua Allegoria; so sánh phong cách, giá tham khảo và tiêu chí chọn nơi mua Guerlain chính hãng.`,
    h1: `Nước hoa Guerlain`,
    canonical: `https://www.maisondeson.com/guerlain`,
  },
  "hermes": {
    title: `Nước hoa Hermès chính hãng: giá Terre d’Hermès và review`,
    description: `Khám phá Terre d’Hermès, Un Jardin sur le Nil và 24 Faubourg; so sánh phong cách, giá tham khảo và tiêu chí chọn nguồn mua Hermès chính hãng.`,
    h1: `Nước hoa Hermès`,
    canonical: `https://www.maisondeson.com/hermes`,
  },
  "jean-paul-gaultier": {
    title: `Nước hoa Jean Paul Gaultier: Le Male, La Belle và Ultra Male`,
    description: `So sánh Le Male, La Belle và Ultra Male để thấy phong cách Jean Paul Gaultier từ thơm sạch đến vani ngọt và trái cây đậm.`,
    h1: `Nước hoa Jean Paul Gaultier`,
    canonical: `https://www.maisondeson.com/jean-paul-gaultier`,
  },
  "kilian": {
    title: `Nước hoa Kilian chính hãng: giá Angels’ Share và review`,
    description: `So sánh Angels’ Share, Black Phantom và Rolling in Love; xem phong cách, giá tham khảo và tiêu chí chọn nguồn mua Kilian chính hãng.`,
    h1: `Nước hoa Kilian`,
    canonical: `https://www.maisondeson.com/kilian`,
  },
  "maison-francis-kurkdjian": {
    title: `Nước hoa MFK: Baccarat Rouge 540, Gentle Fluidity và Oud Satin Mood`,
    description: `Khám phá Maison Francis Kurkdjian qua Baccarat Rouge 540, Gentle Fluidity Gold và Oud Satin Mood; từ hổ phách sáng đến vani và trầm hương.`,
    h1: `Nước hoa Maison Francis Kurkdjian (MFK)`,
    canonical: `https://www.maisondeson.com/maison-francis-kurkdjian`,
  },
  "mugler": {
    title: `Nước hoa Mugler chính hãng: giá Angel, Alien và review`,
    description: `So sánh Angel, Alien và Angel Muse từ gourmand đến hoa trắng; xem giá tham khảo, review và tiêu chí chọn nguồn mua Mugler chính hãng.`,
    h1: `Nước hoa Mugler`,
    canonical: `https://www.maisondeson.com/mugler`,
  },
  "narciso-rodriguez": {
    title: `Nước hoa Narciso Rodriguez: For Her, Pure Musc và Musc Noir Rose`,
    description: `Khám phá Narciso Rodriguez qua For Her, Pure Musc và Musc Noir Rose; từ xạ hương sạch đến hoa mềm và vani ấm.`,
    h1: `Nước hoa Narciso Rodriguez`,
    canonical: `https://www.maisondeson.com/narciso-rodriguez`,
  },
  "parfums-de-marly": {
    title: `Parfums de Marly chính hãng: giá Layton, Delina và review`,
    description: `So sánh Layton, Delina và Herod theo phong cách, giá tham khảo và ưu nhược điểm; xem tiêu chí chọn nguồn mua Parfums de Marly chính hãng.`,
    h1: `Nước hoa Parfums de Marly`,
    canonical: `https://www.maisondeson.com/parfums-de-marly`,
  },
  "prada": {
    title: `Nước hoa Prada: L’Homme, Infusion d’Iris và Luna Rossa`,
    description: `So sánh L’Homme, Infusion d’Iris và Luna Rossa để thấy phong cách Prada từ sạch, phấn nhẹ đến gỗ–cay hiện đại.`,
    h1: `Nước hoa Prada`,
    canonical: `https://www.maisondeson.com/prada`,
  },
  "tom-ford": {
    title: `Nước hoa Tom Ford: Oud Wood, Lost Cherry hay Tobacco Vanille?`,
    description: `Khám phá Tom Ford qua Oud Wood, Lost Cherry, Tobacco Vanille và Ombré Leather; so sánh các hướng gỗ, trái cây, vani và da thuộc.`,
    h1: `Nước hoa Tom Ford`,
    canonical: `https://www.maisondeson.com/tom-ford`,
  },
  "versace": {
    title: `Nước hoa Versace: Eros, Dylan Blue và Bright Crystal`,
    description: `Duyệt Versace qua Eros, Dylan Blue và Bright Crystal; từ ngọt nổi bật đến tươi sạch và hoa–trái cây sáng.`,
    h1: `Nước hoa Versace`,
    canonical: `https://www.maisondeson.com/versace`,
  },
  "xerjoff": {
    title: `Nước hoa Xerjoff chính hãng: giá Naxos, Erba Pura và review`,
    description: `Khám phá Naxos, Erba Pura và Alexandria II; so sánh phong cách, giá tham khảo và tiêu chí chọn nơi mua nước hoa Xerjoff chính hãng.`,
    h1: `Nước hoa Xerjoff`,
    canonical: `https://www.maisondeson.com/xerjoff`,
  },
  "ysl": {
    title: `Nước hoa YSL chính hãng: giá Libre, Black Opium và Y EDP`,
    description: `Khám phá Libre, Black Opium, Y EDP và La Nuit de L’Homme; so sánh phong cách, giá tham khảo và tiêu chí chọn nơi mua YSL chính hãng.`,
    h1: `Nước hoa Yves Saint Laurent`,
    canonical: `https://www.maisondeson.com/ysl`,
  },
  // --- BATCH_03A_BRANDS_P2 (20 brands) ---
  "montblanc": {
    title: `Nước hoa Montblanc chính hãng: giá, review Explorer và Signature`,
    description: `So sánh Explorer và Signature theo phong cách mùi, độ dễ dùng và giá tham khảo; xem review từng chai cùng tiêu chí chọn nơi mua Montblanc chính hãng.`,
    h1: `Nước hoa Montblanc`,
    canonical: `https://www.maisondeson.com/montblanc`,
  },
  "gucci": {
    title: `Nước hoa Gucci chính hãng: giá Bloom, Flora và review`,
    description: `So sánh Gucci Bloom và Flora Gorgeous Gardenia về phong cách hoa, giá tham khảo và tiêu chí chọn nguồn mua nước hoa Gucci chính hãng.`,
    h1: `Nước hoa Gucci`,
    canonical: `https://www.maisondeson.com/gucci`,
  },
  "valentino": {
    title: `Nước hoa Valentino: Uomo Born In Roma Intense, Donna Born in Roma Intense`,
    description: `So sánh Uomo Born In Roma Intense và Donna Born in Roma Intense, hai cách thể hiện từ ngọt ấm đến ấm và sâu của Valentino. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Valentino`,
    canonical: `https://www.maisondeson.com/valentino`,
  },
  "hugo-boss": {
    title: `Nước hoa Hugo Boss: so sánh Boss Bottled với Bottled Absolu`,
    description: `So sánh Boss Bottled và Bottled Absolu, hai cách thể hiện từ ấm và mềm đến khô và sâu của Hugo Boss. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Hugo Boss`,
    canonical: `https://www.maisondeson.com/hugo-boss`,
  },
  "calvin-klein": {
    title: `Nước hoa Calvin Klein: Obsession và nét ấm cổ điển`,
    description: `Obsession đại diện cho một Calvin Klein ấm, đậm và nam tính hơn các dòng tối giản quen thuộc. Xem đây có phải phong cách bạn muốn theo đuổi.`,
    h1: `Nước hoa Calvin Klein`,
    canonical: `https://www.maisondeson.com/calvin-klein`,
  },
  "armaf": {
    title: `Armaf: bắt đầu từ Odyssey Limoni hay Effects of Uniq? | Maison de Son`,
    description: `Khám phá Armaf qua Odyssey Limoni, Effects of Uniq và Odyssey Mandarin Sky; từ có cá tính riêng đến ngọt ấm. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Armaf`,
    canonical: `https://www.maisondeson.com/armaf`,
  },
  "chloe": {
    title: `Nước hoa Chloé: Chloé, Nomade và những hướng mùi khác biệt`,
    description: `Khám phá Chloé qua Chloé, Nomade và Santalum; từ hoa rõ nét đến ấm và sâu. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Chloé`,
    canonical: `https://www.maisondeson.com/chloe`,
  },
  "coach": {
    title: `Nước hoa Coach: Coach For Men với sắc lê tươi hiện đại`,
    description: `Coach For Men mở bằng sắc lê tươi rồi chuyển sang cảm giác gọn gàng, hiện đại. Một lựa chọn đáng xem khi bạn thích mùi nam dễ tiếp cận.`,
    h1: `Nước hoa Coach`,
    canonical: `https://www.maisondeson.com/coach`,
  },
  "givenchy": {
    title: `Givenchy: bắt đầu từ Gentleman Réserve Privée hay L'Interdit?`,
    description: `Khám phá Givenchy qua Gentleman Réserve Privée, L'Interdit và Organza; từ ấm và mềm đến hoa rõ nét. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Givenchy`,
    canonical: `https://www.maisondeson.com/givenchy`,
  },
  "carolina-herrera": {
    title: `Nước hoa Carolina Herrera: Good Girl với cacao tối, nữ tính`,
    description: `Good Girl dùng sắc cacao tối để tạo tương phản với phần hoa nữ tính. Xem cấu trúc sáng–tối này có hợp phong cách và dịp bạn thường dùng.`,
    h1: `Nước hoa Carolina Herrera`,
    canonical: `https://www.maisondeson.com/carolina-herrera`,
  },
  "burberry": {
    title: `Nước hoa Burberry: Her và sắc dâu ngọt trẻ trung`,
    description: `Burberry Her xoay quanh sắc dâu ngọt, tươi và hiện đại. Đọc phân tích để biết nét trẻ trung này hợp dùng hằng ngày hay dễ trở nên quá ngọt.`,
    h1: `Nước hoa Burberry`,
    canonical: `https://www.maisondeson.com/burberry`,
  },
  "louis-vuitton": {
    title: `Nước hoa Louis Vuitton: Ombre Nomade, Imagination và những hướng mùi khác biệt`,
    description: `Khám phá Louis Vuitton qua Ombre Nomade, Imagination và L'Immensité; từ tươi sáng đến tươi khoáng. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Louis Vuitton`,
    canonical: `https://www.maisondeson.com/louis-vuitton`,
  },
  "mancera": {
    title: `Khám phá Mancera qua Instant Crush, Cedrat Boise và Sicily`,
    description: `Khám phá Mancera qua Instant Crush, Cedrat Boise và Sicily; từ ngọt ấm đến tươi sáng. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Mancera`,
    canonical: `https://www.maisondeson.com/mancera`,
  },
  "amouage": {
    title: `Nước hoa Amouage: từ Interlude Man đến Reflection Man | Maison de Son`,
    description: `Khám phá Amouage qua Interlude Man, Reflection Man và Reflection 45 Man Extrait; từ khô và sâu đến hoa thanh lịch. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Amouage`,
    canonical: `https://www.maisondeson.com/amouage`,
  },
  "maison-margiela": {
    title: `Nước hoa Maison Margiela: từ Lazy Sunday Morning đến By The Fireplace`,
    description: `Khám phá Maison Margiela qua Lazy Sunday Morning, By The Fireplace và Replica Jazz Club; từ ấm và sâu đến sạch và mềm. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Maison Margiela`,
    canonical: `https://www.maisondeson.com/maison-margiela`,
  },
  "lattafa": {
    title: `Lattafa: hai hướng mùi từ Khamrah đến Oud Forever | Maison de Son`,
    description: `So sánh Khamrah và Oud Forever, hai cách thể hiện từ ngọt ấm đến gỗ–cay sâu của Lattafa. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Lattafa`,
    canonical: `https://www.maisondeson.com/lattafa`,
  },
  "lancome": {
    title: `Lancôme: hai hướng mùi từ La Vie Est Belle đến Trésor | Maison de Son`,
    description: `So sánh La Vie Est Belle và Trésor, hai cách thể hiện từ ấm và sâu đến ngọt ấm của Lancôme. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Lancôme`,
    canonical: `https://www.maisondeson.com/lancome`,
  },
  "dolce-gabbana": {
    title: `Nước hoa Dolce & Gabbana: The One, Light Blue Pour Femme`,
    description: `Khám phá Dolce & Gabbana qua The One, Light Blue Pour Femme và Light Blue Eau Intense; từ tươi khoáng đến tươi sáng. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Dolce & Gabbana`,
    canonical: `https://www.maisondeson.com/dolce-gabbana`,
  },
  "bvlgari": {
    title: `Nước hoa Bvlgari: Man In Black, rum ấm và da thuộc`,
    description: `Man In Black kết hợp sắc rum ấm với da thuộc, tạo phong cách tối và đậm. Xem mùi này hợp những dịp cần điểm nhấn hay sẽ quá nặng với bạn.`,
    h1: `Nước hoa Bvlgari`,
    canonical: `https://www.maisondeson.com/bvlgari`,
  },
  "diptyque": {
    title: `Nước hoa Diptyque: từ Doson đến Philosykos | Maison de Son`,
    description: `Khám phá Diptyque qua Doson, Philosykos và Fleur de Peau; từ khô và sâu đến hoa thanh lịch. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Diptyque`,
    canonical: `https://www.maisondeson.com/diptyque`,
  },
  // --- BATCH_03B_BRANDS_P2 (20 brands) ---
  "afnan": {
    title: `Nước hoa Afnan chính hãng: giá 9PM, review và mua ở đâu?`,
    description: `Tìm hiểu Afnan 9PM EDP từ mùi ngọt nổi bật đến mức giá tham khảo; đọc review, ưu nhược điểm và tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Nước hoa Afnan`,
    canonical: `https://www.maisondeson.com/afnan`,
  },
  "memo": {
    title: `Nước hoa Memo Paris chính hãng: giá African Leather và review`,
    description: `African Leather nổi bật với da thuộc và bạch đậu khấu; xem review, giá tham khảo và tiêu chí chọn nơi mua nước hoa Memo Paris chính hãng.`,
    h1: `Nước hoa Memo Paris`,
    canonical: `https://www.maisondeson.com/memo`,
  },
  "nishane": {
    title: `Nước hoa Nishane chính hãng: giá Hacivat, Ani và review`,
    description: `Khám phá Hacivat, Ani và Hundred Silent Ways ở nồng độ Extrait; xem review, giá tham khảo và tiêu chí chọn nơi mua Nishane chính hãng.`,
    h1: `Nước hoa Nishane`,
    canonical: `https://www.maisondeson.com/nishane`,
  },
  "giardini-di-toscana": {
    title: `Nước hoa Giardini di Toscana chính hãng: giá Bianco Latte`,
    description: `Bianco Latte nổi bật với vani, sữa và mật ong; xem review, giá tham khảo và tiêu chí chọn nơi mua Giardini di Toscana chính hãng.`,
    h1: `Nước hoa Giardini Di Toscana`,
    canonical: `https://www.maisondeson.com/giardini-di-toscana`,
  },
  "essential-parfums": {
    title: `Nước hoa Essential Parfums chính hãng: giá Bois Impérial`,
    description: `Bois Impérial nổi bật với Akigalawood và nét gỗ cay hiện đại; xem review, giá tham khảo và tiêu chí chọn nơi mua Essential Parfums chính hãng.`,
    h1: `Nước hoa Essential Parfums`,
    canonical: `https://www.maisondeson.com/essential-parfums`,
  },
  "frederic-malle": {
    title: `Nước hoa Frederic Malle: Portrait of a Lady, Carnal Flower`,
    description: `Khám phá Frederic Malle qua Portrait of a Lady, Carnal Flower và Musc Ravageur; từ hoa thanh lịch đến ngọt ấm. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Frederic Malle`,
    canonical: `https://www.maisondeson.com/frederic-malle`,
  },
  "acqua-di-parma": {
    title: `Nước hoa Acqua di Parma: Colonia và phong cách citrus Ý`,
    description: `Colonia mở ra phong cách Acqua di Parma bằng cam chanh sáng, sạch và cổ điển. Phù hợp để khám phá chất thanh lịch không phô trương của hãng.`,
    h1: `Nước hoa Acqua Di Parma`,
    canonical: `https://www.maisondeson.com/acqua-di-parma`,
  },
  "davidoff": {
    title: `Nước hoa Davidoff: Cool Water cho gu biển xanh sạch`,
    description: `Cool Water kết hợp cảm giác biển xanh với oải hương theo hướng mát và dễ nhận biết. Xem cấu trúc kinh điển này còn hợp gu hiện tại của bạn không.`,
    h1: `Nước hoa Davidoff`,
    canonical: `https://www.maisondeson.com/davidoff`,
  },
  "guy-laroche": {
    title: `Nước hoa Guy Laroche: Drakkar Noir và chất fougère cổ điển`,
    description: `Drakkar Noir gợi phong cách fougère nam tính với oải hương và rêu. Trang này giúp bạn đánh giá nét cổ điển đó có còn phù hợp để dùng hôm nay.`,
    h1: `Nước hoa Guy Laroche`,
    canonical: `https://www.maisondeson.com/guy-laroche`,
  },
  "marc-antoine-barrois": {
    title: `Nước hoa Marc-Antoine Barrois: Ganymede khoáng và da lộn`,
    description: `Ganymede nổi bật bởi cảm giác khoáng lạnh đặt cạnh da lộn mềm. Khám phá cách Marc-Antoine Barrois tạo một mùi khác biệt mà vẫn chỉn chu.`,
    h1: `Nước hoa Marc-Antoine Barrois`,
    canonical: `https://www.maisondeson.com/marc-antoine-barrois`,
  },
  "penhaligons": {
    title: `Nước hoa Penhaligon’s: Halfeti, hoa hồng và gỗ trầm`,
    description: `Halfeti đưa hoa hồng vào nền gỗ trầm và gia vị ấm, tạo cảm giác dày và sang. Đây là điểm khởi đầu giàu bản sắc của Penhaligon’s.`,
    h1: `Nước hoa Penhaligon's`,
    canonical: `https://www.maisondeson.com/penhaligons`,
  },
  "elie-saab": {
    title: `Nước hoa Elie Saab: Le Parfum, hoa cam phủ mật ong`,
    description: `Le Parfum kết hợp hoa cam với mật ong theo hướng sáng, ấm và nữ tính. Một lựa chọn đáng cân nhắc khi bạn thích phong cách thanh lịch có độ ngọt.`,
    h1: `Nước hoa Elie Saab`,
    canonical: `https://www.maisondeson.com/elie-saab`,
  },
  "lolita-lempicka": {
    title: `Nước hoa Lolita Lempicka: Le Parfum và thế giới ngọt mộng`,
    description: `Le Parfum thể hiện chất ngọt, lãng mạn và giàu hình ảnh của Lolita Lempicka. Trang này giúp bạn xem phong cách cổ tích ấy có hợp gu không.`,
    h1: `Nước hoa Lolita Lempicka`,
    canonical: `https://www.maisondeson.com/lolita-lempicka`,
  },
  "issey-miyake": {
    title: `Nước hoa Issey Miyake: L’Eau d’Issey Pour Homme tươi sáng`,
    description: `L’Eau d’Issey Pour Homme lấy yuzu làm điểm mở đầu sáng và sắc nét. Khám phá một kiểu tươi mát tối giản, khác với citrus ngọt quen thuộc.`,
    h1: `Nước hoa Issey Miyake`,
    canonical: `https://www.maisondeson.com/issey-miyake`,
  },
  "initio": {
    title: `Nước hoa Initio: Musk Therapy hay Side Effect? | Maison de Son`,
    description: `So sánh Musk Therapy và Side Effect, hai cách thể hiện từ sạch và thanh đến ấm và sâu của Initio. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Initio`,
    canonical: `https://www.maisondeson.com/initio`,
  },
  "viktor-rolf": {
    title: `Nước hoa Viktor & Rolf: Spicebomb Extreme cay ngọt, ấm sâu`,
    description: `Spicebomb Extreme phát triển quanh gia vị ấm và vani ngọt, đúng tinh thần mạnh của dòng Spicebomb. Cân nhắc độ đậm trước khi chọn.`,
    h1: `Nước hoa Viktor & Rolf`,
    canonical: `https://www.maisondeson.com/viktor-rolf`,
  },
  "azzaro": {
    title: `Nước hoa Azzaro: The Most Wanted Parfum, gừng cay và vani`,
    description: `The Most Wanted Parfum đặt gừng cay trên nền vani ấm, tạo cảm giác ngọt nhưng có độ sắc. Xem cấu trúc này hợp đi chơi hay dễ quá dày.`,
    h1: `Nước hoa Azzaro`,
    canonical: `https://www.maisondeson.com/azzaro`,
  },
  "zadig-voltaire": {
    title: `Nước hoa Zadig & Voltaire: This Is Her! kem hạt dẻ ấm`,
    description: `This Is Her! kết hợp hạt dẻ và sắc kem mềm theo hướng ấm, gần da. Một lựa chọn thú vị cho người thích gourmand nhưng không muốn quá kẹo.`,
    h1: `Nước hoa Zadig & Voltaire`,
    canonical: `https://www.maisondeson.com/zadig-voltaire`,
  },
  "kayali": {
    title: `Nước hoa Kayali: bắt đầu với Vanilla 28 | Maison de Son`,
    description: `Bắt đầu với Vanilla 28 để hiểu phong cách Kayali: vani và hổ phách. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Kayali`,
    canonical: `https://www.maisondeson.com/kayali`,
  },
  "sospiro": {
    title: `Nước hoa Sospiro: Vibrato, bưởi sáng trên nền gừng`,
    description: `Vibrato mở bằng bưởi tươi rồi thêm độ cay của gừng, tạo cảm giác sáng và có lực. Xem đây có phải kiểu citrus đủ cá tính với bạn.`,
    h1: `Nước hoa Sospiro`,
    canonical: `https://www.maisondeson.com/sospiro`,
  },
  // --- BATCH_03C_BRANDS_P2 (18 brands — final slice) ---
  "bdk-parfums": {
    title: `Nước hoa BDK Parfums: Gris Charnel Extrait đậm trà và gỗ`,
    description: `Gris Charnel Extrait đẩy trà đen và gỗ đàn hương theo hướng đậm, tối hơn. Phù hợp để khám phá BDK Parfums qua một mùi giàu chiều sâu.`,
    h1: `Nước hoa BDK Parfums`,
    canonical: `https://www.maisondeson.com/bdk-parfums`,
  },
  "liquides-imaginaires": {
    title: `Nước hoa Liquides Imaginaires: Blanche Bête mềm như sữa vani`,
    description: `Blanche Bête kết hợp vani, sắc sữa và hoa nhài trong cảm giác mềm, mịn. Xem nét ngọt trắng này có hợp gu gourmand của bạn hay không.`,
    h1: `Nước hoa Liquides Imaginaires`,
    canonical: `https://www.maisondeson.com/liquides-imaginaires`,
  },
  "maison-alhambra": {
    title: `Nước hoa Maison Alhambra: Deliah Blanc, hoa hồng và vải`,
    description: `Deliah Blanc ghép hoa hồng với quả vải theo hướng sáng, ngọt và nữ tính. Trang này giúp bạn đánh giá mùi có hợp phong cách hằng ngày.`,
    h1: `Nước hoa Maison Alhambra`,
    canonical: `https://www.maisondeson.com/maison-alhambra`,
  },
  "al-ambra": {
    title: `Nước hoa Al Ambra: Dubai Musk với xạ hương và quýt`,
    description: `Dubai Musk đặt xạ hương sạch cạnh sắc quýt sáng, tạo cảm giác nhẹ và dễ tiếp cận. Xem đây có phải kiểu musk hợp nhịp dùng của bạn.`,
    h1: `Nước hoa Al Ambra`,
    canonical: `https://www.maisondeson.com/al-ambra`,
  },
  "elizabeth-arden": {
    title: `Nước hoa Elizabeth Arden: White Tea thanh nhẹ, dễ gần`,
    description: `White Tea tập trung vào cảm giác trà sạch, dịu và thư thái. Một điểm vào đơn giản của Elizabeth Arden cho người không thích mùi quá phô trương.`,
    h1: `Nước hoa Elizabeth Arden`,
    canonical: `https://www.maisondeson.com/elizabeth-arden`,
  },
  "ella-k": {
    title: `Nước hoa Ella K: Pluie Sur Ha Long, sen xanh và măng cụt`,
    description: `Pluie Sur Ha Long kết hợp hoa sen với sắc măng cụt, gợi cảm giác xanh và trong. Khám phá cách Ella K kể câu chuyện Hạ Long bằng mùi hương.`,
    h1: `Nước hoa Ella K`,
    canonical: `https://www.maisondeson.com/ella-k`,
  },
  "ex-nihilo": {
    title: `Nước hoa Ex Nihilo: Blue Talisman, lê sáng và gỗ hiện đại`,
    description: `Blue Talisman đưa sắc lê tươi lên nền gỗ Akigalawood hiện đại. Xem sự tương phản sáng–khô này có hợp gu thành thị của bạn.`,
    h1: `Nước hoa Ex Nihilo`,
    canonical: `https://www.maisondeson.com/ex-nihilo`,
  },
  "gritti": {
    title: `Nước hoa Gritti: TuTu, dừa mềm và táo tươi`,
    description: `TuTu kết hợp dừa mềm với táo tươi, tạo cảm giác ngọt nhưng vẫn có độ sáng. Trang này giúp bạn cân nhắc chất gourmand trẻ trung ấy.`,
    h1: `Nước hoa Gritti`,
    canonical: `https://www.maisondeson.com/gritti`,
  },
  "jimmy-choo": {
    title: `Nước hoa Jimmy Choo: I Want Choo, đào chín và hoa nhài`,
    description: `I Want Choo đặt sắc đào chín cạnh hoa nhài theo hướng nữ tính, rực rỡ. Xem mùi này hợp những dịp cần nổi bật hay dùng thường ngày.`,
    h1: `Nước hoa Jimmy Choo`,
    canonical: `https://www.maisondeson.com/jimmy-choo`,
  },
  "lorchestre": {
    title: `Nước hoa L’Orchestre: Piano Santal và gỗ đàn hương mượt`,
    description: `Piano Santal lấy gỗ đàn hương làm trung tâm, mềm và có chiều sâu. Khám phá cách L’Orchestre kết nối cảm giác âm nhạc với chất gỗ.`,
    h1: `Nước hoa L'Orchestre`,
    canonical: `https://www.maisondeson.com/lorchestre`,
  },
  "lalique": {
    title: `Nước hoa Lalique: Encre Noire dành cho gu vetiver tối`,
    description: `Encre Noire khai thác cỏ hương bài theo hướng tối, khô và trầm. Một điểm vào rõ nét của Lalique cho người thích mùi gỗ không ngọt.`,
    h1: `Nước hoa Lalique`,
    canonical: `https://www.maisondeson.com/lalique`,
  },
  "le-labo": {
    title: `Nước hoa Le Labo: Santal 33 hay Thé Noir 29?`,
    description: `So sánh Santal 33 với Thé Noir 29: một bên khô, gỗ và da thuộc; một bên tối hơn với trà đen. Chọn điểm bắt đầu hợp gu của bạn.`,
    h1: `Nước hoa Le Labo`,
    canonical: `https://www.maisondeson.com/le-labo`,
  },
  "mcm": {
    title: `Nước hoa MCM: Eau de Parfum với mơ và hoa mẫu đơn`,
    description: `MCM Eau de Parfum kết hợp quả mơ với hoa mẫu đơn theo hướng tươi, mềm và trẻ. Xem mùi này có hợp phong cách năng động hằng ngày.`,
    h1: `Nước hoa MCM`,
    canonical: `https://www.maisondeson.com/mcm`,
  },
  "moschino": {
    title: `Nước hoa Moschino: Toy Boy, hoa hồng cay khác biệt`,
    description: `Toy Boy đặt hoa hồng cạnh tiêu cay, tạo hình ảnh nam tính khác với kiểu hoa hồng ngọt quen thuộc. Xem cá tính này có hợp bạn.`,
    h1: `Nước hoa Moschino`,
    canonical: `https://www.maisondeson.com/moschino`,
  },
  "attar-collection": {
    title: `Nước hoa Attar Collection: Musk Kashmir, xạ hương trắng mềm`,
    description: `Musk Kashmir tập trung vào xạ hương trắng mềm, sạch và gần da. Một lựa chọn để khám phá Attar Collection theo hướng tinh giản hơn.`,
    h1: `Nước hoa Attar Collection`,
    canonical: `https://www.maisondeson.com/attar-collection`,
  },
  "paco-rabanne": {
    title: `Nước hoa Paco Rabanne: Pure XS, vani ấm và gừng cay`,
    description: `Pure XS ghép vani ấm với gừng cay, tạo cảm giác ngọt nhưng có độ tương phản. Xem phong cách gợi cảm này hợp dịp nào của bạn.`,
    h1: `Nước hoa Paco Rabanne`,
    canonical: `https://www.maisondeson.com/paco-rabanne`,
  },
  "roja": {
    title: `Nước hoa Roja Dove: Burlington 1819 và lớp citrus rực sáng`,
    description: `Burlington 1819 xây dựng lớp cam chanh sáng, sắc nét và nhiều chuyển động. Khám phá một mặt tươi của Roja Dove thay vì chỉ tập trung mùi tối.`,
    h1: `Nước hoa Roja Dove`,
    canonical: `https://www.maisondeson.com/roja`,
  },
  "thomas-kosmala": {
    title: `Nước hoa Thomas Kosmala: No. 4 Après l’Amour, chanh và ambroxan`,
    description: `No. 4 Après l’Amour kết hợp chanh với ambroxan, tạo cảm giác sáng, khô và hiện đại. Xem cấu trúc tối giản này có hợp gu của bạn.`,
    h1: `Nước hoa Thomas Kosmala`,
    canonical: `https://www.maisondeson.com/thomas-kosmala`,
  },
};

export function getBrandSeoMetadata(slug: string | undefined | null): BrandSeoMetadata | null {
  if (!slug) return null;
  const key = resolveBrandSlug(slug);
  return BRAND_SEO_METADATA[key] || null;
}

