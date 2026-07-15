/**
 * Owner-approved article SEO metadata — COMMERCIAL_V13_ARTICLES_14.
 * Source: MaisonDeSon_Commercial_Article_Batch_14.xlsx (Article_Batch_14)
 * + MaisonDeSon_Commercial_SEO_Master_V13.xlsx
 * Do NOT rewrite Final_* strings — copy-only implementation map.
 * Keyed by URL slug (path without leading slash).
 */

export type ArticleModuleProfile =
  | 'COMMERCIAL_FULL'
  | 'COMMERCIAL_FULL_PRICE_THRESHOLD'
  | 'INFORMATIONAL_LIGHT';

export type ArticleIntentClass =
  | 'COMMERCIAL_INVESTIGATION'
  | 'INFORMATIONAL';

export type ArticleSeoMetadata = {
  title: string;
  description: string;
  h1: string;
  canonical: string;
  urlPath: string;
  intentClass: ArticleIntentClass;
  moduleProfile: ArticleModuleProfile;
};

/** slug → approved commercial article SEO metadata */
export const ARTICLE_SEO_METADATA: Record<string, ArticleSeoMetadata> = {
  "bleu-de-chanel-edp-vs-ysl-y-edp": {
    title: `Bleu de Chanel EDP vs YSL Y EDP: chai nào đáng mua hơn?`,
    description: `So sánh mùi, độ linh hoạt, hoàn cảnh dùng và giá tham khảo thực tế của Bleu de Chanel EDP với YSL Y EDP trước khi chọn chai phù hợp.`,
    h1: `Bleu de Chanel EDP và YSL Y EDP: chai nào đáng mua hơn?`,
    canonical: `https://www.maisondeson.com/bleu-de-chanel-edp-vs-ysl-y-edp`,
    urlPath: `/bleu-de-chanel-edp-vs-ysl-y-edp`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "cach-chon-nuoc-hoa-nam-di-lam-trong-khi-hau-nong-am-viet-nam": {
    title: `Chọn nước hoa nam đi làm: mùi nào hợp thời tiết nóng ẩm?`,
    description: `Hướng dẫn chọn nước hoa nam đi làm theo nhóm mùi, nồng độ, ngân sách và độ dễ chịu để tránh cảm giác quá nồng trong thời tiết nóng ẩm.`,
    h1: `Cách chọn nước hoa nam đi làm khi thời tiết nóng ẩm`,
    canonical: `https://www.maisondeson.com/cach-chon-nuoc-hoa-nam-di-lam-trong-khi-hau-nong-am-viet-nam`,
    urlPath: `/cach-chon-nuoc-hoa-nam-di-lam-trong-khi-hau-nong-am-viet-nam`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "creed-la-thuong-hieu-nuoc-hoa-nhu-the-nao": {
    title: `Creed có đáng tiền? Lịch sử, Aventus và mức giá cao`,
    description: `Tìm hiểu lịch sử Creed, vai trò của Aventus, mức giá cao và những điểm cần cân nhắc để đánh giá thương hiệu này có phù hợp với nhu cầu hay không.`,
    h1: `Creed là thương hiệu nước hoa như thế nào?`,
    canonical: `https://www.maisondeson.com/creed-la-thuong-hieu-nuoc-hoa-nhu-the-nao`,
    urlPath: `/creed-la-thuong-hieu-nuoc-hoa-nhu-the-nao`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "edt-edp-la-gi": {
    title: `EDT và EDP khác nhau thế nào? Cách chọn theo nhu cầu`,
    description: `So sánh EDT và EDP về nồng độ, cảm giác mùi, độ hiện diện và hoàn cảnh dùng để chọn phiên bản phù hợp thay vì mặc định EDP luôn tốt hơn.`,
    h1: `EDT và EDP khác nhau thế nào?`,
    canonical: `https://www.maisondeson.com/edt-edp-la-gi`,
    urlPath: `/edt-edp-la-gi`,
    intentClass: `INFORMATIONAL`,
    moduleProfile: `INFORMATIONAL_LIGHT`,
  },
  "lan-dau-mua-nuoc-hoa-nam-nen-chon-gi": {
    title: `Lần đầu mua nước hoa nam: nên chọn chai nào dễ dùng?`,
    description: `Cách chọn chai nước hoa nam đầu tiên theo ngân sách, hoàn cảnh, phong cách mùi và độ dễ dùng; kèm tiêu chí đánh giá nguồn mua trước khi quyết định.`,
    h1: `Lần đầu mua nước hoa nam nên chọn gì?`,
    canonical: `https://www.maisondeson.com/lan-dau-mua-nuoc-hoa-nam-nen-chon-gi`,
    urlPath: `/lan-dau-mua-nuoc-hoa-nam-nen-chon-gi`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "nuoc-hoa-di-bien-mua-he-cho-nam": {
    title: `Nước hoa nam đi biển: 8 lựa chọn đáng cân nhắc mùa hè`,
    description: `Gợi ý 8 nước hoa nam tươi sạch cho chuyến đi biển, so sánh phong cách mùi, độ dễ dùng, hoàn cảnh phù hợp và giá tham khảo trước khi chọn mua.`,
    h1: `8 nước hoa nam phù hợp cho chuyến đi biển mùa hè`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-di-bien-mua-he-cho-nam`,
    urlPath: `/nuoc-hoa-di-bien-mua-he-cho-nam`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "nuoc-hoa-nam-di-lam-mua-he": {
    title: `Nước hoa nam đi làm mùa hè: 10 chai dễ dùng, ít ngộp`,
    description: `So sánh 10 nước hoa nam dễ dùng trong văn phòng mùa hè theo phong cách mùi, độ hiện diện, giá tham khảo và mức độ phù hợp với không gian kín.`,
    h1: `10 nước hoa nam dễ dùng khi đi làm mùa hè`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-di-lam-mua-he`,
    urlPath: `/nuoc-hoa-nam-di-lam-mua-he`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "nuoc-hoa-nam-duoi-1-trieu-dang-mua-2026": {
    title: `Nước hoa nam dưới 1 triệu: 7 lựa chọn đáng cân nhắc`,
    description: `Tham khảo 7 nước hoa nam có thể nằm dưới mốc 1 triệu tùy dung tích, nhà bán và khuyến mãi; so sánh phong cách mùi trước khi kiểm tra giá cuối.`,
    h1: `7 nước hoa nam dưới 1 triệu đáng cân nhắc`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-duoi-1-trieu-dang-mua-2026`,
    urlPath: `/nuoc-hoa-nam-duoi-1-trieu-dang-mua-2026`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL_PRICE_THRESHOLD`,
  },
  "nuoc-hoa-nam-luu-huong-lau-nhat-mua-he-2026": {
    title: `Nước hoa nam bám mùi tốt mùa hè: 7 chai đáng cân nhắc`,
    description: `So sánh 7 nước hoa nam có độ hiện diện tốt trong ngày nóng theo phong cách mùi, hoàn cảnh dùng và giá tham khảo; hiệu quả thực tế tùy cơ địa.`,
    h1: `7 nước hoa nam có độ hiện diện tốt cho mùa hè`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-luu-huong-lau-nhat-mua-he-2026`,
    urlPath: `/nuoc-hoa-nam-luu-huong-lau-nhat-mua-he-2026`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "nuoc-hoa-unisex-la-gi": {
    title: `Nước hoa unisex là gì? Cách chọn mùi phù hợp với bạn`,
    description: `Giải thích nước hoa unisex, cách mùi thay đổi trên da và cách chọn theo sở thích, hoàn cảnh dùng thay vì chỉ dựa vào nhãn giới tính.`,
    h1: `Nước hoa unisex là gì?`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-la-gi`,
    urlPath: `/nuoc-hoa-unisex-la-gi`,
    intentClass: `INFORMATIONAL`,
    moduleProfile: `INFORMATIONAL_LIGHT`,
  },
  "vi-sao-nguoi-dung-kho-tinh-hon-voi-nuoc-hoa-niche-2026": {
    title: `Nước hoa niche có đáng tiền? Những điều nên cân nhắc`,
    description: `Phân tích mức giá, chất lượng, độ sáng tạo và trải nghiệm sử dụng để hiểu vì sao danh tiếng niche không đủ quyết định một chai có đáng mua hay không.`,
    h1: `Vì sao người mua khó tính hơn với nước hoa niche?`,
    canonical: `https://www.maisondeson.com/vi-sao-nguoi-dung-kho-tinh-hon-voi-nuoc-hoa-niche-2026`,
    urlPath: `/vi-sao-nguoi-dung-kho-tinh-hon-voi-nuoc-hoa-niche-2026`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "xit-nuoc-hoa-dung-cach-cho-nam": {
    title: `Xịt nước hoa đúng cách cho nam: vị trí và số lần dùng`,
    description: `Hướng dẫn vị trí xịt, số lần dùng, khoảng cách, cách bảo quản và những sai lầm phổ biến khiến mùi biến đổi hoặc gây khó chịu.`,
    h1: `Xịt nước hoa đúng cách cho nam như thế nào?`,
    canonical: `https://www.maisondeson.com/xit-nuoc-hoa-dung-cach-cho-nam`,
    urlPath: `/xit-nuoc-hoa-dung-cach-cho-nam`,
    intentClass: `INFORMATIONAL`,
    moduleProfile: `INFORMATIONAL_LIGHT`,
  },
  "xu-huong-nuoc-hoa-clean-office-scent-2026": {
    title: `Nước hoa sạch cho văn phòng: mùi nào dễ dùng?`,
    description: `Phân tích các hướng mùi sạch, ít ngọt và dễ chịu trong môi trường công sở; so sánh lựa chọn, hoàn cảnh dùng và giá tham khảo.`,
    h1: `Vì sao nước hoa sạch được ưa chuộng trong văn phòng?`,
    canonical: `https://www.maisondeson.com/xu-huong-nuoc-hoa-clean-office-scent-2026`,
    urlPath: `/xu-huong-nuoc-hoa-clean-office-scent-2026`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
  "creed-aventus-review-2026": {
    title: `Creed Aventus giá bao nhiêu? Review và có đáng mua?`,
    description: `Review Creed Aventus về phong cách mùi, điểm mạnh, giới hạn, giá tham khảo và rủi ro thật giả để đánh giá chai này còn phù hợp hay không.`,
    h1: `Creed Aventus EDP có đáng mua ở mức giá hiện tại?`,
    canonical: `https://www.maisondeson.com/creed-aventus-review-2026`,
    urlPath: `/creed-aventus-review-2026`,
    intentClass: `COMMERCIAL_INVESTIGATION`,
    moduleProfile: `COMMERCIAL_FULL`,
  },
};

export function getArticleSeoMetadata(
  slug: string | undefined | null,
): ArticleSeoMetadata | null {
  if (!slug) return null;
  const key = slug.replace(/^\//, '');
  return ARTICLE_SEO_METADATA[key] || null;
}
