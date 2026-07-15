/**
 * COMMERCIAL_V4_CORE_12 — owner-authorized locked commercial core metadata.
 * Source: MaisonDeSon_Commercial_SEO_Master_V4.xlsx → Core_12
 * Do NOT rewrite Final_* strings — copy-only.
 */

export type CoreSeoMetadata = {
  title: string;
  description: string;
  h1: string;
  canonical: string;
};

/** path key → approved metadata (includes homepage as "/") */
export const COMMERCIAL_CORE_SEO: Record<string, CoreSeoMetadata> = {
  "/": {
    title: `Nước hoa chính hãng: review, giá và nơi mua uy tín | Maison de Son`,
    description: `Khám phá nước hoa nam, nữ và unisex qua review, giá tham khảo, cách nhận biết hàng chính hãng và tiêu chí chọn nơi mua uy tín trước khi quyết định.`,
    h1: `Review nước hoa chính hãng trước khi mua`,
    canonical: `https://www.maisondeson.com`,
  },
  "/nuoc-hoa-theo-nhu-cau": {
    title: `Tìm nước hoa chính hãng theo nhu cầu, mùa và ngân sách`,
    description: `Lọc nước hoa theo hoàn cảnh, mùa, nhóm mùi và ngân sách; xem review, giá tham khảo và tiêu chí chọn nguồn mua chính hãng phù hợp.`,
    h1: `Tìm nước hoa theo nhu cầu và ngân sách`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-theo-nhu-cau`,
  },
  "/thuong-hieu": {
    title: `Thương hiệu nước hoa chính hãng: review, giá và dòng nổi bật`,
    description: `Duyệt các thương hiệu nước hoa, so sánh dòng nổi bật, giá tham khảo và tiêu chí chọn nơi mua chính hãng trước khi mở review chi tiết.`,
    h1: `Thương hiệu nước hoa chính hãng`,
    canonical: `https://www.maisondeson.com/thuong-hieu`,
  },
  "/kien-thuc": {
    title: `Kiến thức nước hoa: review, giá, thật giả và cách chọn`,
    description: `Cẩm nang về nồng độ, cách xịt, giá tham khảo, phân biệt thật giả và tiêu chí chọn nơi mua nước hoa chính hãng đáng tin cậy.`,
    h1: `Kiến thức nước hoa trước khi mua`,
    canonical: `https://www.maisondeson.com/kien-thuc`,
  },
  "/nuoc-hoa-nam-chinh-hang": {
    title: `Nước hoa nam chính hãng: review, giá và cách chọn`,
    description: `Khám phá nước hoa nam theo mùi và hoàn cảnh; xem review, giá tham khảo, chai đáng mua và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Nước hoa nam chính hãng`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nam-chinh-hang`,
  },
  "/nuoc-hoa-nu-chinh-hang": {
    title: `Nước hoa nữ chính hãng: review, giá và cách chọn`,
    description: `So sánh nước hoa nữ theo phong cách, giá tham khảo và hoàn cảnh sử dụng; xem chai đáng mua cùng tiêu chí chọn nơi bán chính hãng.`,
    h1: `Nước hoa nữ chính hãng`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-nu-chinh-hang`,
  },
  "/nuoc-hoa-unisex-chinh-hang": {
    title: `Nước hoa unisex chính hãng: review, giá và mua ở đâu?`,
    description: `Khám phá nước hoa unisex theo nốt hương, review và giá tham khảo; tìm hiểu sản phẩm hợp ai và cách ưu tiên nguồn mua chính hãng.`,
    h1: `Nước hoa unisex chính hãng`,
    canonical: `https://www.maisondeson.com/nuoc-hoa-unisex-chinh-hang`,
  },
  "/theo-nhu-cau": {
    title: `Nước hoa theo hoàn cảnh: đi làm, hẹn hò và mùa hè`,
    description: `Chọn nước hoa cho đi làm, hẹn hò, thời tiết nóng hoặc dùng hằng ngày; xem review, giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`,
    h1: `Chọn nước hoa theo hoàn cảnh sử dụng`,
    canonical: `https://www.maisondeson.com/theo-nhu-cau`,
  },
  "/theo-not-huong": {
    title: `Chọn nước hoa theo nốt hương: review, giá và chai đáng mua`,
    description: `Duyệt nước hoa mùi vani, gỗ, hoa, xạ hương hoặc cam chanh; xem review, giá tham khảo và nơi mua chính hãng trước khi chọn.`,
    h1: `Chọn nước hoa theo nốt hương`,
    canonical: `https://www.maisondeson.com/theo-not-huong`,
  },
  "/tac-gia": {
    title: `Tác giả Maison de Son: tiêu chuẩn review và minh bạch affiliate`,
    description: `Tìm hiểu người viết, cách kiểm chứng thông tin, nguyên tắc đánh giá giá bán, hàng chính hãng và liên kết affiliate trên Maison de Son.`,
    h1: `Tác giả và tiêu chuẩn biên tập`,
    canonical: `https://www.maisondeson.com/tac-gia`,
  },
  "/gioi-thieu": {
    title: `Về Maison de Son: review nước hoa và minh bạch affiliate`,
    description: `Maison de Son giúp người đọc so sánh mùi, giá tham khảo, hàng chính hãng và nơi mua; mọi liên kết affiliate phải được công bố minh bạch.`,
    h1: `Về Maison de Son`,
    canonical: `https://www.maisondeson.com/gioi-thieu`,
  },
  "/video": {
    title: `Video review nước hoa chính hãng: unboxing và cách chọn`,
    description: `Xem video unboxing, review mùi, kiểm tra chi tiết chai và hướng dẫn chọn nơi mua nước hoa chính hãng trước khi quyết định.`,
    h1: `Video review nước hoa`,
    canonical: `https://www.maisondeson.com/video`,
  },
};

export function getCommercialCoreSeo(path: string): CoreSeoMetadata | null {
  const key = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return COMMERCIAL_CORE_SEO[key] || null;
}

/** Build Next.js Metadata from a core path */
export function buildCommercialCoreMetadata(path: string) {
  const seo = getCommercialCoreSeo(path);
  if (!seo) throw new Error(`Missing commercial core SEO for path: ${path}`);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
    },
  };
}
