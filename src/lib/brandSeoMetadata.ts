/**
 * Owner-approved brand SEO metadata (BATCH_02 + BATCH_03A + BATCH_03B + BATCH_03C).
 * Source: MaisonDeSon_SEO_All_Pages_READY_TO_APPLY.xlsx
 * Do NOT rewrite Final_* strings — copy-only implementation map.
 * BRAND_METADATA_EDITORIAL_HOTFIX_37: title+description only for 37 brands.
 * COMMERCIAL_V5_BRANDS_A_19: first commercial brand metadata slice (19 brands).
 * COMMERCIAL_V6_BRANDS_B_19: second commercial brand metadata slice (19 brands).
 * COMMERCIAL_V7_BRANDS_C_19: third commercial brand metadata slice (19 brands).
 * COMMERCIAL_V8_BRANDS_D_19: final commercial brand metadata slice (19 brands) — 76/76 complete.
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
    title: `Nước hoa Jean Paul Gaultier chính hãng: giá Le Male, La Belle`,
    description: `Khám phá Le Male, La Belle và Ultra Male theo các hướng thơm sạch, vani và trái cây; xem giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
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
    title: `Nước hoa MFK chính hãng: giá Baccarat Rouge 540 và review`,
    description: `Khám phá Baccarat Rouge 540, Gentle Fluidity Gold và Oud Satin Mood; xem review, giá tham khảo và tiêu chí chọn nguồn mua MFK chính hãng.`,
    h1: `Nước hoa Maison Francis Kurkdjian`,
    canonical: `https://www.maisondeson.com/maison-francis-kurkdjian`,
  },
  "mugler": {
    title: `Nước hoa Mugler chính hãng: giá Angel, Alien và review`,
    description: `So sánh Angel, Alien và Angel Muse từ gourmand đến hoa trắng; xem giá tham khảo, review và tiêu chí chọn nguồn mua Mugler chính hãng.`,
    h1: `Nước hoa Mugler`,
    canonical: `https://www.maisondeson.com/mugler`,
  },
  "narciso-rodriguez": {
    title: `Nước hoa Narciso Rodriguez chính hãng: giá For Her và Pure Musc`,
    description: `So sánh For Her, Pure Musc và Musc Noir Rose theo sắc thái xạ hương; xem review, giá tham khảo và tiêu chí chọn nguồn mua Narciso Rodriguez chính hãng.`,
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
    title: `Nước hoa Prada chính hãng: giá L’Homme, Luna Rossa và review`,
    description: `So sánh L’Homme, Infusion d’Iris và Luna Rossa từ sạch, phấn nhẹ đến gỗ cay; xem review, giá tham khảo và tiêu chí chọn nơi mua Prada chính hãng.`,
    h1: `Nước hoa Prada`,
    canonical: `https://www.maisondeson.com/prada`,
  },
  "tom-ford": {
    title: `Nước hoa Tom Ford chính hãng: giá Oud Wood và Lost Cherry`,
    description: `Khám phá Oud Wood, Lost Cherry, Tobacco Vanille và Ombré Leather; so sánh phong cách, giá tham khảo và tiêu chí chọn nơi mua Tom Ford chính hãng.`,
    h1: `Nước hoa Tom Ford`,
    canonical: `https://www.maisondeson.com/tom-ford`,
  },
  "versace": {
    title: `Nước hoa Versace chính hãng: giá Eros, Dylan Blue và review`,
    description: `So sánh Eros, Dylan Blue và Bright Crystal từ ngọt nổi bật đến tươi sạch; xem review, giá tham khảo và tiêu chí chọn nguồn mua Versace chính hãng.`,
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
    title: `Nước hoa Valentino chính hãng: giá Born in Roma Intense`,
    description: `So sánh Uomo và Donna Born in Roma Intense theo độ ngọt, độ ấm và phong cách dùng; xem giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Nước hoa Valentino`,
    canonical: `https://www.maisondeson.com/valentino`,
  },
  "hugo-boss": {
    title: `Nước hoa Hugo Boss chính hãng: giá Boss Bottled và review`,
    description: `So sánh Boss Bottled EDP với Bottled Absolu theo độ ấm và chiều sâu; xem review, giá tham khảo và tiêu chí chọn nguồn mua Hugo Boss chính hãng.`,
    h1: `Nước hoa Hugo Boss`,
    canonical: `https://www.maisondeson.com/hugo-boss`,
  },
  "calvin-klein": {
    title: `Nước hoa Calvin Klein chính hãng: giá Obsession và review`,
    description: `Obsession thể hiện phong cách ấm, đậm và cổ điển của Calvin Klein; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua hàng chính hãng.`,
    h1: `Nước hoa Calvin Klein`,
    canonical: `https://www.maisondeson.com/calvin-klein`,
  },
  "armaf": {
    title: `Nước hoa Armaf chính hãng: giá Odyssey Limoni và review`,
    description: `Khám phá Odyssey Limoni, Effects of Uniq và Odyssey Mandarin Sky; xem phong cách, giá tham khảo và tiêu chí chọn nguồn mua Armaf chính hãng.`,
    h1: `Nước hoa Armaf`,
    canonical: `https://www.maisondeson.com/armaf`,
  },
  "chloe": {
    title: `Nước hoa Chloé chính hãng: giá Nomade, Chloé EDP và review`,
    description: `So sánh Chloé EDP, Nomade và Santalum từ hoa sáng đến gỗ ấm; xem review, giá tham khảo và tiêu chí chọn nơi mua nước hoa Chloé chính hãng.`,
    h1: `Nước hoa Chloé`,
    canonical: `https://www.maisondeson.com/chloe`,
  },
  "coach": {
    title: `Nước hoa Coach chính hãng: giá Coach for Men và review`,
    description: `Coach for Men mở bằng sắc lê tươi rồi chuyển sang cảm giác gọn gàng, hiện đại; xem giá tham khảo và tiêu chí chọn nguồn mua Coach chính hãng.`,
    h1: `Nước hoa Coach`,
    canonical: `https://www.maisondeson.com/coach`,
  },
  "givenchy": {
    title: `Nước hoa Givenchy chính hãng: giá Gentleman và L’Interdit`,
    description: `So sánh Gentleman Réserve Privée, L’Interdit và Organza từ ấm sâu đến hoa trắng; xem giá tham khảo và tiêu chí chọn nơi mua Givenchy chính hãng.`,
    h1: `Nước hoa Givenchy`,
    canonical: `https://www.maisondeson.com/givenchy`,
  },
  "carolina-herrera": {
    title: `Nước hoa Carolina Herrera chính hãng: giá Good Girl`,
    description: `Good Girl dùng cacao tối để tạo tương phản với phần hoa nữ tính; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Carolina Herrera chính hãng.`,
    h1: `Nước hoa Carolina Herrera`,
    canonical: `https://www.maisondeson.com/carolina-herrera`,
  },
  "burberry": {
    title: `Nước hoa Burberry chính hãng: giá Burberry Her và review`,
    description: `Burberry Her nổi bật với sắc dâu ngọt, tươi và trẻ trung; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua nước hoa Burberry chính hãng.`,
    h1: `Nước hoa Burberry`,
    canonical: `https://www.maisondeson.com/burberry`,
  },
  "louis-vuitton": {
    title: `Nước hoa Louis Vuitton chính hãng: giá Imagination, Ombre Nomade`,
    description: `Khám phá Imagination, Ombre Nomade và L’Immensité từ citrus sáng đến gỗ trầm; xem giá tham khảo và tiêu chí chọn nguồn mua Louis Vuitton chính hãng.`,
    h1: `Nước hoa Louis Vuitton`,
    canonical: `https://www.maisondeson.com/louis-vuitton`,
  },
  "mancera": {
    title: `Nước hoa Mancera chính hãng: giá Cedrat Boise, Instant Crush`,
    description: `Khám phá Cedrat Boise, Instant Crush và Sicily từ citrus gỗ đến ngọt ấm; xem review, giá tham khảo và tiêu chí chọn nơi mua Mancera chính hãng.`,
    h1: `Nước hoa Mancera`,
    canonical: `https://www.maisondeson.com/mancera`,
  },
  "amouage": {
    title: `Nước hoa Amouage chính hãng: giá Interlude và Reflection`,
    description: `So sánh Interlude Man, Reflection Man và Reflection 45 theo độ đậm và phong cách; xem giá tham khảo và tiêu chí chọn nguồn mua Amouage chính hãng.`,
    h1: `Nước hoa Amouage`,
    canonical: `https://www.maisondeson.com/amouage`,
  },
  "maison-margiela": {
    title: `Nước hoa Maison Margiela chính hãng: giá By the Fireplace`,
    description: `So sánh Lazy Sunday Morning, By the Fireplace và Jazz Club từ sạch mềm đến khói ấm; xem giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Nước hoa Maison Margiela`,
    canonical: `https://www.maisondeson.com/maison-margiela`,
  },
  "lattafa": {
    title: `Nước hoa Lattafa chính hãng: giá Khamrah, Oud Forever và review`,
    description: `So sánh Khamrah và Oud Forever từ ngọt ấm đến gỗ cay sâu; xem review, giá tham khảo và tiêu chí chọn nguồn mua nước hoa Lattafa chính hãng.`,
    h1: `Nước hoa Lattafa`,
    canonical: `https://www.maisondeson.com/lattafa`,
  },
  "lancome": {
    title: `Nước hoa Lancôme chính hãng: giá La Vie Est Belle và Trésor`,
    description: `So sánh La Vie Est Belle và Trésor theo độ ngọt, sắc hoa và phong cách dùng; xem giá tham khảo và tiêu chí chọn nguồn mua Lancôme chính hãng.`,
    h1: `Nước hoa Lancôme`,
    canonical: `https://www.maisondeson.com/lancome`,
  },
  "dolce-gabbana": {
    title: `Nước hoa Dolce & Gabbana chính hãng: giá The One, Light Blue`,
    description: `Khám phá The One, Light Blue Pour Femme và Light Blue Eau Intense; so sánh phong cách, giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Nước hoa Dolce & Gabbana`,
    canonical: `https://www.maisondeson.com/dolce-gabbana`,
  },
  "bvlgari": {
    title: `Nước hoa Bvlgari chính hãng: giá Man in Black và review`,
    description: `Man in Black kết hợp rum ấm với da thuộc theo hướng tối và đậm; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Bvlgari chính hãng.`,
    h1: `Nước hoa Bvlgari`,
    canonical: `https://www.maisondeson.com/bvlgari`,
  },
  "diptyque": {
    title: `Nước hoa Diptyque chính hãng: giá Do Son, Philosykos và review`,
    description: `Khám phá Do Son, Philosykos và Fleur de Peau từ hoa trắng đến xanh gỗ và xạ hương; xem giá tham khảo cùng tiêu chí chọn nơi mua Diptyque chính hãng.`,
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
    title: `Nước hoa Frederic Malle chính hãng: giá Portrait of a Lady`,
    description: `So sánh Portrait of a Lady, Carnal Flower và Musc Ravageur theo các hướng hoa và gia vị; xem giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Nước hoa Frederic Malle`,
    canonical: `https://www.maisondeson.com/frederic-malle`,
  },
  "acqua-di-parma": {
    title: `Nước hoa Acqua di Parma chính hãng: giá Colonia và review`,
    description: `Colonia thể hiện phong cách citrus Ý sáng, sạch và cổ điển; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Acqua di Parma chính hãng.`,
    h1: `Nước hoa Acqua Di Parma`,
    canonical: `https://www.maisondeson.com/acqua-di-parma`,
  },
  "davidoff": {
    title: `Nước hoa Davidoff chính hãng: giá Cool Water và review`,
    description: `Cool Water kết hợp cảm giác biển xanh với oải hương theo hướng mát và dễ nhận biết; xem giá tham khảo và tiêu chí chọn nơi mua Davidoff chính hãng.`,
    h1: `Nước hoa Davidoff`,
    canonical: `https://www.maisondeson.com/davidoff`,
  },
  "guy-laroche": {
    title: `Nước hoa Guy Laroche chính hãng: giá Drakkar Noir và review`,
    description: `Drakkar Noir thể hiện phong cách fougère nam tính với oải hương và rêu; xem review, giá tham khảo và tiêu chí chọn nguồn mua Guy Laroche chính hãng.`,
    h1: `Nước hoa Guy Laroche`,
    canonical: `https://www.maisondeson.com/guy-laroche`,
  },
  "marc-antoine-barrois": {
    title: `Nước hoa Marc-Antoine Barrois chính hãng: giá Ganymede`,
    description: `Ganymede nổi bật với cảm giác khoáng lạnh đặt cạnh da lộn mềm; xem review, giá tham khảo và tiêu chí chọn nguồn mua Marc-Antoine Barrois chính hãng.`,
    h1: `Nước hoa Marc-Antoine Barrois`,
    canonical: `https://www.maisondeson.com/marc-antoine-barrois`,
  },
  "penhaligons": {
    title: `Nước hoa Penhaligon’s chính hãng: giá Halfeti và review`,
    description: `Halfeti đưa hoa hồng vào nền gỗ trầm và gia vị ấm theo hướng dày, sang; xem giá tham khảo cùng tiêu chí chọn nơi mua Penhaligon’s chính hãng.`,
    h1: `Nước hoa Penhaligon's`,
    canonical: `https://www.maisondeson.com/penhaligons`,
  },
  "elie-saab": {
    title: `Nước hoa Elie Saab chính hãng: giá Le Parfum và review`,
    description: `Le Parfum kết hợp hoa cam với mật ong theo hướng sáng, ấm và nữ tính; xem giá tham khảo cùng tiêu chí chọn nguồn mua Elie Saab chính hãng.`,
    h1: `Nước hoa Elie Saab`,
    canonical: `https://www.maisondeson.com/elie-saab`,
  },
  "lolita-lempicka": {
    title: `Nước hoa Lolita Lempicka chính hãng: giá Le Parfum`,
    description: `Le Parfum thể hiện chất ngọt, lãng mạn và giàu hình ảnh của Lolita Lempicka; xem review, giá tham khảo cùng tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Nước hoa Lolita Lempicka`,
    canonical: `https://www.maisondeson.com/lolita-lempicka`,
  },
  "issey-miyake": {
    title: `Nước hoa Issey Miyake chính hãng: giá L’Eau d’Issey Pour Homme`,
    description: `L’Eau d’Issey Pour Homme mở bằng yuzu sáng và sắc nét theo hướng tối giản; xem giá tham khảo và tiêu chí chọn nơi mua Issey Miyake chính hãng.`,
    h1: `Nước hoa Issey Miyake`,
    canonical: `https://www.maisondeson.com/issey-miyake`,
  },
  "initio": {
    title: `Nước hoa Initio chính hãng: giá Side Effect và Musk Therapy`,
    description: `So sánh Side Effect và Musk Therapy giữa hướng ấm sâu và xạ hương sạch; xem giá tham khảo cùng tiêu chí chọn nơi mua Initio chính hãng.`,
    h1: `Nước hoa Initio`,
    canonical: `https://www.maisondeson.com/initio`,
  },
  "viktor-rolf": {
    title: `Nước hoa Viktor & Rolf chính hãng: giá Spicebomb Extreme`,
    description: `Spicebomb Extreme phát triển quanh gia vị ấm và vani ngọt theo hướng đậm; xem review, giá tham khảo và tiêu chí chọn nơi mua Viktor & Rolf chính hãng.`,
    h1: `Nước hoa Viktor & Rolf`,
    canonical: `https://www.maisondeson.com/viktor-rolf`,
  },
  "azzaro": {
    title: `Nước hoa Azzaro chính hãng: giá The Most Wanted Parfum`,
    description: `The Most Wanted Parfum đặt gừng cay trên nền vani ấm và ngọt; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua nước hoa Azzaro chính hãng.`,
    h1: `Nước hoa Azzaro`,
    canonical: `https://www.maisondeson.com/azzaro`,
  },
  "zadig-voltaire": {
    title: `Nước hoa Zadig & Voltaire chính hãng: giá This Is Her!`,
    description: `This Is Her! kết hợp hạt dẻ với sắc kem mềm theo hướng ấm và gần da; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua Zadig & Voltaire chính hãng.`,
    h1: `Nước hoa Zadig & Voltaire`,
    canonical: `https://www.maisondeson.com/zadig-voltaire`,
  },
  "kayali": {
    title: `Nước hoa Kayali chính hãng: giá Vanilla 28 và review`,
    description: `Vanilla 28 khai thác vani và hổ phách theo hướng ngọt, ấm và dễ nhận biết; xem giá tham khảo cùng tiêu chí chọn nơi mua Kayali chính hãng.`,
    h1: `Nước hoa Kayali`,
    canonical: `https://www.maisondeson.com/kayali`,
  },
  "sospiro": {
    title: `Nước hoa Sospiro chính hãng: giá Vibrato và review`,
    description: `Vibrato mở bằng bưởi tươi rồi thêm độ cay của gừng, tạo cảm giác sáng và có lực; xem giá tham khảo và tiêu chí chọn nơi mua Sospiro chính hãng.`,
    h1: `Nước hoa Sospiro`,
    canonical: `https://www.maisondeson.com/sospiro`,
  },
  // --- BATCH_03C_BRANDS_P2 (18 brands — final slice) ---
  "bdk-parfums": {
    title: `Nước hoa BDK Parfums chính hãng: giá Gris Charnel Extrait`,
    description: `Gris Charnel Extrait khai thác trà đen và gỗ đàn hương theo hướng đậm, tối; xem giá tham khảo và tiêu chí chọn nơi mua BDK Parfums chính hãng.`,
    h1: `Nước hoa BDK Parfums`,
    canonical: `https://www.maisondeson.com/bdk-parfums`,
  },
  "liquides-imaginaires": {
    title: `Nước hoa Liquides Imaginaires chính hãng: giá Blanche Bête`,
    description: `Blanche Bête kết hợp vani, sắc sữa và hoa nhài trong cảm giác mềm, mịn; xem giá tham khảo và tiêu chí chọn nguồn mua Liquides Imaginaires chính hãng.`,
    h1: `Nước hoa Liquides Imaginaires`,
    canonical: `https://www.maisondeson.com/liquides-imaginaires`,
  },
  "maison-alhambra": {
    title: `Nước hoa Maison Alhambra chính hãng: giá Deliah Blanc`,
    description: `Deliah Blanc ghép hoa hồng với quả vải theo hướng sáng, ngọt và nữ tính; xem review, giá tham khảo và tiêu chí chọn nơi mua Maison Alhambra chính hãng.`,
    h1: `Nước hoa Maison Alhambra`,
    canonical: `https://www.maisondeson.com/maison-alhambra`,
  },
  "al-ambra": {
    title: `Nước hoa Al Ambra chính hãng: giá Dubai Musk và review`,
    description: `Dubai Musk kết hợp xạ hương sạch với sắc quýt sáng, nhẹ và dễ tiếp cận; xem giá tham khảo cùng tiêu chí chọn nguồn mua Al Ambra chính hãng.`,
    h1: `Nước hoa Al Ambra`,
    canonical: `https://www.maisondeson.com/al-ambra`,
  },
  "elizabeth-arden": {
    title: `Nước hoa Elizabeth Arden chính hãng: giá White Tea`,
    description: `White Tea tập trung vào cảm giác trà sạch, dịu và thư thái; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Elizabeth Arden chính hãng.`,
    h1: `Nước hoa Elizabeth Arden`,
    canonical: `https://www.maisondeson.com/elizabeth-arden`,
  },
  "ella-k": {
    title: `Nước hoa Ella K chính hãng: giá Pluie Sur Ha Long và review`,
    description: `Pluie Sur Ha Long kết hợp hoa sen với sắc măng cụt xanh và trong; xem giá tham khảo cùng tiêu chí chọn nguồn mua nước hoa Ella K chính hãng.`,
    h1: `Nước hoa Ella K`,
    canonical: `https://www.maisondeson.com/ella-k`,
  },
  "ex-nihilo": {
    title: `Nước hoa Ex Nihilo chính hãng: giá Blue Talisman và review`,
    description: `Blue Talisman đưa sắc lê tươi lên nền gỗ Akigalawood hiện đại; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Ex Nihilo chính hãng.`,
    h1: `Nước hoa Ex Nihilo`,
    canonical: `https://www.maisondeson.com/ex-nihilo`,
  },
  "gritti": {
    title: `Nước hoa Gritti chính hãng: giá TuTu và review`,
    description: `TuTu kết hợp dừa mềm với táo tươi, tạo cảm giác gourmand ngọt nhưng vẫn sáng; xem giá tham khảo và tiêu chí chọn nguồn mua Gritti chính hãng.`,
    h1: `Nước hoa Gritti`,
    canonical: `https://www.maisondeson.com/gritti`,
  },
  "jimmy-choo": {
    title: `Nước hoa Jimmy Choo chính hãng: giá I Want Choo và review`,
    description: `I Want Choo kết hợp đào chín với hoa nhài theo hướng nữ tính, rực rỡ; xem review, giá tham khảo và tiêu chí chọn nguồn mua Jimmy Choo chính hãng.`,
    h1: `Nước hoa Jimmy Choo`,
    canonical: `https://www.maisondeson.com/jimmy-choo`,
  },
  "lorchestre": {
    title: `Nước hoa L’Orchestre chính hãng: giá Piano Santal và review`,
    description: `Piano Santal lấy gỗ đàn hương làm trung tâm theo hướng mềm và có chiều sâu; xem giá tham khảo cùng tiêu chí chọn nguồn mua L’Orchestre chính hãng.`,
    h1: `Nước hoa L'Orchestre`,
    canonical: `https://www.maisondeson.com/lorchestre`,
  },
  "lalique": {
    title: `Nước hoa Lalique chính hãng: giá Encre Noire và review`,
    description: `Encre Noire khai thác cỏ hương bài theo hướng tối, khô và trầm; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua Lalique chính hãng.`,
    h1: `Nước hoa Lalique`,
    canonical: `https://www.maisondeson.com/lalique`,
  },
  "le-labo": {
    title: `Nước hoa Le Labo chính hãng: giá Santal 33, Thé Noir 29`,
    description: `So sánh Santal 33 và Thé Noir 29 giữa gỗ khô, da thuộc và trà đen; xem giá tham khảo cùng tiêu chí chọn nơi mua Le Labo chính hãng.`,
    h1: `Nước hoa Le Labo`,
    canonical: `https://www.maisondeson.com/le-labo`,
  },
  "mcm": {
    title: `Nước hoa MCM chính hãng: giá Eau de Parfum và review`,
    description: `MCM Eau de Parfum kết hợp quả mơ với hoa mẫu đơn theo hướng tươi, mềm và trẻ; xem giá tham khảo cùng tiêu chí chọn nguồn mua MCM chính hãng.`,
    h1: `Nước hoa MCM`,
    canonical: `https://www.maisondeson.com/mcm`,
  },
  "moschino": {
    title: `Nước hoa Moschino chính hãng: giá Toy Boy và review`,
    description: `Toy Boy đặt hoa hồng cạnh tiêu cay, tạo phong cách khác với hoa hồng ngọt quen thuộc; xem giá tham khảo và tiêu chí chọn nơi mua Moschino chính hãng.`,
    h1: `Nước hoa Moschino`,
    canonical: `https://www.maisondeson.com/moschino`,
  },
  "attar-collection": {
    title: `Nước hoa Attar Collection chính hãng: giá Musk Kashmir`,
    description: `Musk Kashmir tập trung vào xạ hương trắng mềm, sạch và gần da; xem review, giá tham khảo cùng tiêu chí chọn nơi mua Attar Collection chính hãng.`,
    h1: `Nước hoa Attar Collection`,
    canonical: `https://www.maisondeson.com/attar-collection`,
  },
  "paco-rabanne": {
    title: `Nước hoa Paco Rabanne chính hãng: giá Pure XS và review`,
    description: `Pure XS ghép vani ấm với gừng cay, tạo cảm giác ngọt nhưng có độ tương phản; xem giá tham khảo và tiêu chí chọn nguồn mua Paco Rabanne chính hãng.`,
    h1: `Nước hoa Paco Rabanne`,
    canonical: `https://www.maisondeson.com/paco-rabanne`,
  },
  "roja": {
    title: `Nước hoa Roja Dove chính hãng: giá Burlington 1819 và review`,
    description: `Burlington 1819 xây dựng lớp cam chanh sáng, sắc nét và nhiều chuyển động; xem giá tham khảo và tiêu chí chọn nguồn mua Roja Dove chính hãng.`,
    h1: `Nước hoa Roja Dove`,
    canonical: `https://www.maisondeson.com/roja`,
  },
  "thomas-kosmala": {
    title: `Nước hoa Thomas Kosmala chính hãng: giá No. 4 Après l’Amour`,
    description: `No. 4 Après l’Amour kết hợp chanh với ambroxan theo hướng sáng, khô và hiện đại; xem giá tham khảo cùng tiêu chí chọn nguồn mua Thomas Kosmala chính hãng.`,
    h1: `Nước hoa Thomas Kosmala`,
    canonical: `https://www.maisondeson.com/thomas-kosmala`,
  },
};

export function getBrandSeoMetadata(slug: string | undefined | null): BrandSeoMetadata | null {
  if (!slug) return null;
  const key = resolveBrandSlug(slug);
  return BRAND_SEO_METADATA[key] || null;
}

