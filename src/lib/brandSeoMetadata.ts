/**
 * Owner-approved brand SEO metadata (BATCH_02_BRANDS_P1).
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
};

export function getBrandSeoMetadata(slug: string | undefined | null): BrandSeoMetadata | null {
  if (!slug) return null;
  const key = resolveBrandSlug(slug);
  return BRAND_SEO_METADATA[key] || null;
}

