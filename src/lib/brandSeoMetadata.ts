/**
 * Owner-approved brand SEO metadata (BATCH_02 + BATCH_03A + BATCH_03B).
 * Source: MaisonDeSon_SEO_All_Pages_READY_TO_APPLY.xlsx
 * Do NOT rewrite Final_* strings — copy-only implementation map.
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
    title: `Nước hoa Byredo: Bal d’Afrique, Blanche và La Tulipe`,
    description: `Khám phá Byredo qua Bal d’Afrique, Blanche và La Tulipe; so sánh ba hướng mùi từ trái cây–gỗ đến sạch aldehyde và hoa tulip.`,
    h1: `Nước hoa Byredo`,
    canonical: `https://www.maisondeson.com/byredo`,
  },
  "chanel": {
    title: `Nước hoa Chanel: Bleu, Coco Mademoiselle hay N°5? | Maison de Son`,
    description: `Khám phá nước hoa Chanel qua Bleu de Chanel, Coco Mademoiselle và N°5; so sánh phong cách từ sạch, lịch sự đến hoa–hổ phách cổ điển.`,
    h1: `Nước hoa Chanel`,
    canonical: `https://www.maisondeson.com/chanel`,
  },
  "creed": {
    title: `Nước hoa Creed: Aventus, Green Irish Tweed và Silver Mountain Water`,
    description: `So sánh Aventus, Green Irish Tweed và Silver Mountain Water để thấy ba hướng mùi khác nhau của Creed: gỗ–trái cây, xanh và sạch.`,
    h1: `Nước hoa Creed`,
    canonical: `https://www.maisondeson.com/creed`,
  },
  "dior": {
    title: `Nước hoa Dior: từ Sauvage, J’adore đến Dior Homme | Maison de Son`,
    description: `Duyệt nước hoa Dior qua Sauvage, J’adore và Dior Homme; so sánh các hướng mùi nam, nữ từ tươi sáng đến hoa trắng và gỗ sâu.`,
    h1: `Nước hoa Dior`,
    canonical: `https://www.maisondeson.com/dior`,
  },
  "giorgio-armani": {
    title: `Nước hoa Giorgio Armani: Acqua di Giò, Sì hay My Way?`,
    description: `Khám phá Giorgio Armani qua Acqua di Giò, Sì và My Way; so sánh các hướng mùi từ biển tươi, trái cây–hoa đến hoa trắng hiện đại.`,
    h1: `Nước hoa Giorgio Armani`,
    canonical: `https://www.maisondeson.com/giorgio-armani`,
  },
  "guerlain": {
    title: `Nước hoa Guerlain: Shalimar, L’Homme Idéal và di sản mùi hương`,
    description: `Duyệt Guerlain qua Shalimar, L’Homme Idéal và Aqua Allegoria; từ vani–hổ phách cổ điển đến gỗ ngọt và citrus tươi.`,
    h1: `Nước hoa Guerlain`,
    canonical: `https://www.maisondeson.com/guerlain`,
  },
  "hermes": {
    title: `Nước hoa Hermès: Terre d’Hermès, Jardin và nét thanh lịch riêng`,
    description: `Khám phá Hermès qua Terre d’Hermès, Un Jardin sur le Nil và 24 Faubourg; từ citrus–gỗ khô đến xanh mát và hoa cổ điển.`,
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
    title: `Nước hoa Kilian: Angels' Share, Black Phantom và cách chọn theo gu`,
    description: `Duyệt nước hoa Kilian qua Angels' Share, Black Phantom và Rolling In Love. So sánh các hướng mùi từ ngọt ấm đến ấm và mềm để tìm điểm bắt đầu hợp gu.`,
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
    title: `Nước hoa Mugler: Angel, Alien hay Angel Muse? | Maison de Son`,
    description: `So sánh Angel, Alien và Angel Muse để thấy ba cá tính của Mugler: gourmand đậm, hoa trắng–hổ phách và cacao–hoắc hương.`,
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
    title: `Nước hoa Parfums de Marly: Layton, Delina và Herod`,
    description: `Khám phá Parfums de Marly qua Layton, Delina và Herod; so sánh các hướng mùi từ táo–vani, hoa hồng đến thuốc lá ấm.`,
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
    title: `Nước hoa Xerjoff: Naxos, Erba Pura và Alexandria II`,
    description: `Duyệt Xerjoff qua Naxos, Erba Pura và Alexandria II; từ mật ong–thuốc lá đến trái cây–xạ hương và gỗ trầm sâu.`,
    h1: `Nước hoa Xerjoff`,
    canonical: `https://www.maisondeson.com/xerjoff`,
  },
  "ysl": {
    title: `Nước hoa YSL: từ Libre, Black Opium đến Y EDP | Maison de Son`,
    description: `Khám phá nước hoa Yves Saint Laurent qua Libre, Black Opium, Y và La Nuit de L’Homme; so sánh phong cách từng dòng để chọn mùi hợp gu.`,
    h1: `Nước hoa Yves Saint Laurent (YSL)`,
    canonical: `https://www.maisondeson.com/ysl`,
  },
  // --- BATCH_03A_BRANDS_P2 (20 brands) ---
  "montblanc": {
    title: `Nước hoa Montblanc: so sánh Explorer với Signature | Maison de Son`,
    description: `So sánh Explorer và Signature, hai cách thể hiện từ ấm và mềm đến khô và sâu của Montblanc. Chọn điểm bắt đầu hợp gu hơn.`,
    h1: `Nước hoa Montblanc`,
    canonical: `https://www.maisondeson.com/montblanc`,
  },
  "gucci": {
    title: `Nước hoa Gucci: Bloom hay Flora Gorgeous Gardenia? | Maison de Son`,
    description: `So sánh Bloom và Flora Gorgeous Gardenia, hai cách thể hiện từ hoa thanh lịch đến tươi sáng của Gucci. Chọn điểm bắt đầu hợp gu hơn.`,
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
    title: `Nước hoa Calvin Klein: bắt đầu với Obsession | Maison de Son`,
    description: `Bắt đầu với Obsession để hiểu phong cách Calvin Klein: nam tính. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Coach: bắt đầu với Coach For Men | Maison de Son`,
    description: `Bắt đầu với Coach For Men để hiểu phong cách Coach: lê. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Carolina Herrera: bắt đầu với Good Girl | Maison de Son`,
    description: `Bắt đầu với Good Girl để hiểu phong cách Carolina Herrera: cacao. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Carolina Herrera`,
    canonical: `https://www.maisondeson.com/carolina-herrera`,
  },
  "burberry": {
    title: `Nước hoa Burberry: bắt đầu với Her | Maison de Son`,
    description: `Bắt đầu với Her để hiểu phong cách Burberry: dâu tây. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Bvlgari: bắt đầu với Man In Black | Maison de Son`,
    description: `Bắt đầu với Man In Black để hiểu phong cách Bvlgari: da thuộc và rượu rum. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Afnan: bắt đầu với 9PM EDP | Maison de Son`,
    description: `Khám phá Afnan 9PM EDP, một lựa chọn ngọt và bắt mũi cho người mới thích mùi nổi bật. Đọc ưu, nhược điểm trước khi quyết định.`,
    h1: `Nước hoa Afnan`,
    canonical: `https://www.maisondeson.com/afnan`,
  },
  "memo": {
    title: `Nước hoa Memo Paris: bắt đầu với African Leather | Maison de Son`,
    description: `Bắt đầu với African Leather để hiểu phong cách Memo Paris: da thuộc và bạch đậu khấu. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Memo Paris`,
    canonical: `https://www.maisondeson.com/memo`,
  },
  "nishane": {
    title: `Nishane: bắt đầu từ Hundred Silent Ways Extrait hay Ani Extrait?`,
    description: `Khám phá Nishane qua Hundred Silent Ways Extrait, Ani Extrait và Hacivat Extrait; từ gỗ–cay sâu đến khô và sâu. So sánh từng lựa chọn trước khi mở review chi tiết.`,
    h1: `Nước hoa Nishane`,
    canonical: `https://www.maisondeson.com/nishane`,
  },
  "giardini-di-toscana": {
    title: `Nước hoa Giardini Di Toscana: bắt đầu với Bianco Latte | Maison de Son`,
    description: `Bắt đầu với Bianco Latte để hiểu phong cách Giardini Di Toscana: vani và mật ong. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Giardini Di Toscana`,
    canonical: `https://www.maisondeson.com/giardini-di-toscana`,
  },
  "essential-parfums": {
    title: `Nước hoa Essential Parfums: bắt đầu với Bois Impérial | Maison de Son`,
    description: `Bắt đầu với Bois Impérial để hiểu phong cách Essential Parfums: gỗ Akigalawood và cỏ hương bài. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Acqua Di Parma: bắt đầu với Colonia | Maison de Son`,
    description: `Bắt đầu với Colonia để hiểu phong cách Acqua Di Parma: cam và chanh. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Acqua Di Parma`,
    canonical: `https://www.maisondeson.com/acqua-di-parma`,
  },
  "davidoff": {
    title: `Nước hoa Davidoff: bắt đầu với Cool Water | Maison de Son`,
    description: `Bắt đầu với Cool Water để hiểu phong cách Davidoff: hương biển và oải hương. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Davidoff`,
    canonical: `https://www.maisondeson.com/davidoff`,
  },
  "guy-laroche": {
    title: `Nước hoa Guy Laroche: bắt đầu với Drakkar Noir | Maison de Son`,
    description: `Bắt đầu với Drakkar Noir để hiểu phong cách Guy Laroche: oải hương và rêu. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Guy Laroche`,
    canonical: `https://www.maisondeson.com/guy-laroche`,
  },
  "marc-antoine-barrois": {
    title: `Nước hoa Marc-Antoine Barrois: bắt đầu với Ganymede | Maison de Son`,
    description: `Bắt đầu với Ganymede để hiểu phong cách Marc-Antoine Barrois: khoáng chất và da lộn. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Marc-Antoine Barrois`,
    canonical: `https://www.maisondeson.com/marc-antoine-barrois`,
  },
  "penhaligons": {
    title: `Nước hoa Penhaligon's: bắt đầu với Halfeti | Maison de Son`,
    description: `Bắt đầu với Halfeti để hiểu phong cách Penhaligon's: trầm hương và hoa hồng. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Penhaligon's`,
    canonical: `https://www.maisondeson.com/penhaligons`,
  },
  "elie-saab": {
    title: `Nước hoa Elie Saab: bắt đầu với Le Parfum | Maison de Son`,
    description: `Bắt đầu với Le Parfum để hiểu phong cách Elie Saab: mật ong và hoa cam. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Elie Saab`,
    canonical: `https://www.maisondeson.com/elie-saab`,
  },
  "lolita-lempicka": {
    title: `Nước hoa Lolita Lempicka: bắt đầu với Le Parfum | Maison de Son`,
    description: `Bắt đầu với Le Parfum để hiểu phong cách Lolita Lempicka: táo và cam. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Lolita Lempicka`,
    canonical: `https://www.maisondeson.com/lolita-lempicka`,
  },
  "issey-miyake": {
    title: `Nước hoa Issey Miyake: bắt đầu với L'Eau d'Issey Pour Homme`,
    description: `Bắt đầu với L'Eau d'Issey Pour Homme để hiểu phong cách Issey Miyake: yuzu và hoa sen. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Viktor & Rolf: bắt đầu với Spicebomb Extreme | Maison de Son`,
    description: `Bắt đầu với Spicebomb Extreme để hiểu phong cách Viktor & Rolf: lựu và vani. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Viktor & Rolf`,
    canonical: `https://www.maisondeson.com/viktor-rolf`,
  },
  "azzaro": {
    title: `Nước hoa Azzaro: bắt đầu với The Most Wanted Parfum | Maison de Son`,
    description: `Bắt đầu với The Most Wanted Parfum để hiểu phong cách Azzaro: gừng. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Azzaro`,
    canonical: `https://www.maisondeson.com/azzaro`,
  },
  "zadig-voltaire": {
    title: `Nước hoa Zadig & Voltaire: bắt đầu với This Is Her! | Maison de Son`,
    description: `Bắt đầu với This Is Her! để hiểu phong cách Zadig & Voltaire: hạt dẻ và kem. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
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
    title: `Nước hoa Sospiro: bắt đầu với Vibrato | Maison de Son`,
    description: `Bắt đầu với Vibrato để hiểu phong cách Sospiro: bưởi và gừng. Đọc phân tích trước khi quyết định đây có phải hướng mùi hợp bạn.`,
    h1: `Nước hoa Sospiro`,
    canonical: `https://www.maisondeson.com/sospiro`,
  },
};

export function getBrandSeoMetadata(slug: string | undefined | null): BrandSeoMetadata | null {
  if (!slug) return null;
  const key = resolveBrandSlug(slug);
  return BRAND_SEO_METADATA[key] || null;
}

