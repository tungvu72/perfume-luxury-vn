/**
 * Owner-approved product SEO metadata — COMMERCIAL_V9_PRODUCTS_A_23.
 * Source: MaisonDeSon_Commercial_Product_Batch_A_23.xlsx (sheet Product_Batch_A_23)
 * + MaisonDeSon_Commercial_SEO_Master_V9.xlsx
 * Do NOT rewrite Final_* strings — copy-only implementation map.
 * Keyed by stable Product_ID (not URL position or display title).
 */

import { resolveProductId } from '@/lib/productEntity';

export type ProductSeoMetadata = {
  title: string;
  description: string;
  h1: string;
  canonical: string;
  /** Path-only validation field (must match Target_Canonical path) */
  urlPath: string;
  /** Optional workbook facts for ProductCommercialGuide (omit when blank) */
  concentration?: string;
  notesUsed?: string;
  scentDirection?: string;
};

/** Product_ID → approved commercial SEO metadata */
export const PRODUCT_SEO_METADATA: Record<string, ProductSeoMetadata> = {
  "montblanc-signature-edp": {
    title: `Montblanc Signature EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Montblanc Signature EDP hòa vani mềm, xạ hương trắng và cam clementine; xem review, giá tham khảo và tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Montblanc Signature EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-montblanc-montblanc-signature-edp`,
    urlPath: `/nuoc-hoa-nu-montblanc-montblanc-signature-edp`,
    concentration: `Eau de Parfum`,
  },
  "24-faubourg": {
    title: `Hermès 24 Faubourg EDP chính hãng: giá và review`,
    description: `Hermès 24 Faubourg EDP kết hợp hoa cam, nhài, hổ phách và vani; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua hàng chính hãng.`,
    h1: `Hermès 24 Faubourg EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-hermes-24-faubourg`,
    urlPath: `/nuoc-hoa-nu-hermes-24-faubourg`,
    concentration: `EDP`,
  },
  "9pm": {
    title: `Afnan 9PM EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Afnan 9PM EDP đi theo hướng ngọt, trẻ và dễ gây chú ý; xem review, giá tham khảo, lưu ý thật giả và tiêu chí chọn nơi mua chính hãng.`,
    h1: `Afnan 9PM EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-afnan-9pm`,
    urlPath: `/nuoc-hoa-nam-afnan-9pm`,
    concentration: `EDP`,
  },
  "absolu-aventus": {
    title: `Creed Absolu Aventus EDP chính hãng: giá và review`,
    description: `Creed Absolu Aventus EDP nhấn vào quế và gỗ tuyết tùng theo hướng ấm, sâu; xem review, giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Creed Absolu Aventus EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-creed-absolu-aventus`,
    urlPath: `/nuoc-hoa-nam-creed-absolu-aventus`,
    concentration: `EDP`,
    notesUsed: `quế, gỗ tuyết tùng`,
    scentDirection: `ấm và sâu`,
  },
  "acqua-di-gio": {
    title: `Giorgio Armani Acqua di Giò EDT chính hãng: giá và review`,
    description: `Acqua di Giò EDT nổi bật với cam bergamot, chanh xanh và hương biển tươi khoáng; xem giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Giorgio Armani Acqua di Giò EDT`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-giorgio-armani-acqua-di-gio`,
    urlPath: `/nuoc-hoa-nam-giorgio-armani-acqua-di-gio`,
    concentration: `EDT`,
    notesUsed: `chanh, chanh xanh, cam bergamot, hương biển`,
    scentDirection: `tươi khoáng`,
  },
  "acqua-di-gio-parfum": {
    title: `Acqua di Giò Parfum chính hãng: giá, review và mua ở đâu?`,
    description: `Acqua di Giò Parfum kết hợp hương biển, trầm hương và hoắc hương theo hướng sâu hơn; xem giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Giorgio Armani Acqua di Giò Parfum`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-parfum`,
    urlPath: `/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-parfum`,
    concentration: `Parfum`,
    notesUsed: `trầm hương, hoắc hương, hương biển`,
    scentDirection: `tươi khoáng`,
  },
  "acqua-di-gio-profondo": {
    title: `Acqua di Giò Profondo EDP chính hãng: giá và review`,
    description: `Acqua di Giò Profondo EDP khai thác hương biển, quýt và sắc khoáng tươi mát; xem review, giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Giorgio Armani Acqua di Giò Profondo EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-profondo`,
    urlPath: `/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-profondo`,
    concentration: `EDP (2020)`,
    notesUsed: `hương biển, quýt, khoáng chất`,
    scentDirection: `tươi khoáng`,
  },
  "acqua-di-gio-profumo": {
    title: `Acqua di Giò Profumo chính hãng: giá và mua ở đâu?`,
    description: `Acqua di Giò Profumo phối hương biển với trầm hương theo hướng tối và nam tính; xem review, giá tham khảo và lưu ý khi chọn nguồn mua chính hãng.`,
    h1: `Giorgio Armani Acqua di Giò Profumo Parfum`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-profumo`,
    urlPath: `/nuoc-hoa-nam-giorgio-armani-acqua-di-gio-profumo`,
    concentration: `Parfum`,
    notesUsed: `hương biển, trầm hương`,
    scentDirection: `tươi khoáng`,
  },
  "addict-edp": {
    title: `Dior Addict EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Dior Addict EDP kết hợp hoa nhài với vani theo hướng ấm, mềm và đậm; xem review, giá tham khảo cùng tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Dior Addict EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-dior-addict-edp`,
    urlPath: `/nuoc-hoa-nu-dior-addict-edp`,
    concentration: `EDP`,
    notesUsed: `hoa nhài, vani`,
    scentDirection: `ấm và mềm`,
  },
  "african-leather": {
    title: `Memo Paris African Leather EDP chính hãng: giá và review`,
    description: `African Leather EDP nổi bật với da thuộc, bạch đậu khấu và hoắc hương cay khô; xem giá tham khảo cùng tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Memo Paris African Leather EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-memo-african-leather`,
    urlPath: `/nuoc-hoa-unisex-memo-african-leather`,
    concentration: `EDP`,
    notesUsed: `da thuộc, bạch đậu khấu, hoắc hương`,
    scentDirection: `gỗ–cay sâu`,
  },
  "alexandria-ii": {
    title: `Xerjoff Alexandria II EDP chính hãng: giá và review`,
    description: `Alexandria II EDP kết hợp oải hương, trầm hương và vani theo hướng ấm, sâu; xem review, giá tham khảo và tiêu chí chọn nơi mua chính hãng.`,
    h1: `Xerjoff Alexandria II EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-xerjoff-alexandria-ii`,
    urlPath: `/nuoc-hoa-unisex-xerjoff-alexandria-ii`,
    concentration: `EDP`,
    notesUsed: `oải hương, trầm hương, vani`,
    scentDirection: `ấm và sâu`,
  },
  "alien-edp": {
    title: `Mugler Alien EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Mugler Alien EDP tập trung vào hoa nhài và hổ phách theo hướng đậm, ấm và dễ nhận biết; xem giá tham khảo cùng tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Mugler Alien EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-mugler-alien-edp`,
    urlPath: `/nuoc-hoa-nu-mugler-alien-edp`,
    concentration: `EDP`,
    notesUsed: `hoa nhài, hổ phách`,
    scentDirection: `ấm và mềm`,
  },
  "allure-edp": {
    title: `Chanel Allure EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Chanel Allure EDP hòa cam quýt, đào và vani theo hướng thanh lịch, ngọt ấm; xem review, giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Chanel Allure EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-chanel-allure-edp`,
    urlPath: `/nuoc-hoa-nu-chanel-allure-edp`,
    concentration: `EDP`,
    notesUsed: `cam, quýt, đào, vani`,
    scentDirection: `ngọt ấm`,
  },
  "allure-homme-edition-blanche": {
    title: `Chanel Allure Homme Édition Blanche chính hãng: giá và review`,
    description: `Allure Homme Édition Blanche EDP nổi bật với sắc chanh kem và gỗ mềm; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua Chanel chính hãng.`,
    h1: `Chanel Allure Homme Édition Blanche EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-chanel-allure-homme-edition-blanche`,
    urlPath: `/nuoc-hoa-nam-chanel-allure-homme-edition-blanche`,
    concentration: `EDP`,
    notesUsed: `chanh`,
    scentDirection: `có cá tính riêng`,
  },
  "allure-homme-edt": {
    title: `Chanel Allure Homme EDT chính hãng: giá và mua ở đâu?`,
    description: `Chanel Allure Homme EDT theo phong cách ấm, lịch sự và cổ điển; xem review, giá tham khảo cùng tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Chanel Allure Homme EDT`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-chanel-allure-homme-edt`,
    urlPath: `/nuoc-hoa-nam-chanel-allure-homme-edt`,
    concentration: `EDT`,
  },
  "allure-homme-sport": {
    title: `Chanel Allure Homme Sport EDT chính hãng: giá và review`,
    description: `Allure Homme Sport EDT kết hợp cam quýt với hương biển theo hướng tươi và năng động; xem giá tham khảo cùng tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Chanel Allure Homme Sport EDT`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-chanel-allure-homme-sport`,
    urlPath: `/nuoc-hoa-nam-chanel-allure-homme-sport`,
    concentration: `EDT`,
    notesUsed: `cam, quýt, hương biển`,
    scentDirection: `tươi khoáng`,
  },
  "allure-homme-sport-eau-extreme": {
    title: `Chanel Allure Homme Sport Eau Extrême: giá và review chính hãng`,
    description: `Allure Homme Sport Eau Extrême nhấn vào đậu tonka theo hướng ấm, mượt và thể thao; xem giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Chanel Allure Homme Sport Eau Extrême`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-chanel-allure-homme-sport-eau-extreme`,
    urlPath: `/nuoc-hoa-nam-chanel-allure-homme-sport-eau-extreme`,
    concentration: `Eau Extrême`,
    notesUsed: `đậu tonka`,
    scentDirection: `ấm và mềm`,
  },
  "althair": {
    title: `Parfums de Marly Althaïr EDP chính hãng: giá và review`,
    description: `Althaïr EDP kết hợp quế, vani và sắc praline theo hướng ngọt ấm; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua hàng chính hãng.`,
    h1: `Parfums de Marly Althaïr EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-parfums-de-marly-althair`,
    urlPath: `/nuoc-hoa-nam-parfums-de-marly-althair`,
    concentration: `EDP`,
    notesUsed: `quế, vani, kẹo bông`,
    scentDirection: `ngọt ấm`,
  },
  "angel": {
    title: `Mugler Angel EDP chính hãng: giá, review và mua ở đâu?`,
    description: `Mugler Angel EDP pha sô cô la, kẹo bông và hoắc hương theo hướng gourmand đậm; xem giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Mugler Angel EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-mugler-angel`,
    urlPath: `/nuoc-hoa-nu-mugler-angel`,
    concentration: `EDP`,
    notesUsed: `sô cô la, kẹo bông, hoắc hương, cỏ khô`,
    scentDirection: `ấm và sâu`,
  },
  "angel-muse": {
    title: `Mugler Angel Muse EDP chính hãng: giá và review`,
    description: `Angel Muse EDP kết hợp hạt dẻ, cacao và hoắc hương theo hướng ngọt, tối và béo; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Mugler Angel Muse EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-mugler-angel-muse`,
    urlPath: `/nuoc-hoa-nu-mugler-angel-muse`,
    concentration: `EDP`,
    notesUsed: `hạt dẻ, cacao, hoắc hương`,
    scentDirection: `ấm và sâu`,
  },
  "angelique-noire": {
    title: `Guerlain Angélique Noire EDP chính hãng: giá và review`,
    description: `Angélique Noire EDP đặt vani cạnh sắc xanh của bạch chỉ theo hướng mềm và khác biệt; xem giá tham khảo cùng tiêu chí chọn nơi mua chính hãng.`,
    h1: `Guerlain Angélique Noire EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-guerlain-angelique-noire`,
    urlPath: `/nuoc-hoa-unisex-guerlain-angelique-noire`,
    concentration: `EDP`,
    notesUsed: `vani`,
    scentDirection: `ấm và mềm`,
  },
  "angels-share": {
    title: `Kilian Angels’ Share EDP chính hãng: giá và review`,
    description: `Angels’ Share EDP kết hợp quế, vani và sắc rượu cognac theo hướng ngọt ấm; xem review, giá tham khảo cùng tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Kilian Angels' Share EDP`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-kilian-angels-share`,
    urlPath: `/nuoc-hoa-unisex-kilian-angels-share`,
    concentration: `EDP`,
    notesUsed: `quế, vani`,
    scentDirection: `ngọt ấm`,
  },
  "ani": {
    title: `Nishane Ani Extrait chính hãng: giá, review và mua ở đâu?`,
    description: `Nishane Ani Extrait phối vani, gừng và gỗ đàn hương theo hướng cay ấm, sâu; xem giá tham khảo cùng tiêu chí chọn nơi mua hàng chính hãng.`,
    h1: `Nishane Ani Extrait`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-nishane-ani`,
    urlPath: `/nuoc-hoa-unisex-nishane-ani`,
    concentration: `Extrait de Parfum`,
    notesUsed: `vani, gừng, gỗ đàn hương`,
    scentDirection: `gỗ–cay sâu`,
  },
};

export function getProductSeoMetadata(
  productId: string | undefined | null,
): ProductSeoMetadata | null {
  if (!productId) return null;
  const key = resolveProductId(productId);
  return PRODUCT_SEO_METADATA[key] || null;
}

export function hasProductCommercialSeo(productId: string | undefined | null): boolean {
  return getProductSeoMetadata(productId) !== null;
}
