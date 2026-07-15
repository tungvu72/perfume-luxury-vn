import Link from "next/link";
import type { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";
import { getProductSeoMetadata } from "@/lib/productSeoMetadata";
import { isDeprecatedProductId } from "@/lib/productEntity";

/**
 * Reusable product commercial guide (COMMERCIAL_V9_PRODUCTS_A_23+).
 * One component for all commercial product pages — not duplicated per product.
 * Exact guidance copy is locked by the commercial product batch prompt.
 */

const PRICE_GUIDANCE =
  "Giá nước hoa có thể thay đổi theo dung tích, nhà bán và chương trình khuyến mãi. Hãy kiểm tra giá cuối cùng trên trang đối tác trước khi mua.";

const AUTHENTICITY_GUIDANCE =
  "Ưu tiên nơi bán công khai thông tin liên hệ, chính sách đổi trả và chứng từ giao dịch. Bao bì, batch code hay mức giá chỉ là dấu hiệu tham khảo, không đủ để tự khẳng định thật giả.";

const AFFILIATE_DISCLOSURE =
  "Maison de Son có thể nhận hoa hồng từ một số giao dịch đủ điều kiện qua liên kết đối tác, không làm tăng giá người đọc phải trả. Quan hệ thương mại không quyết định kết luận biên tập.";

const GENDER_LABELS: Record<Perfume["gender"], string> = {
  nam: "Nam",
  nu: "Nữ",
  unisex: "Unisex",
};

export default function ProductCommercialGuide({
  product,
  sameBrandProducts = [],
}: {
  product: Perfume;
  /** Actual same-brand catalog products (excluding self); already filtered server-side */
  sameBrandProducts?: Perfume[];
}) {
  const meta = getProductSeoMetadata(product.id);
  if (!meta) return null;

  const related = sameBrandProducts
    .filter((p) => p.id !== product.id && !isDeprecatedProductId(p.id))
    .slice(0, 6);

  const chips: { label: string; value: string }[] = [
    { label: "Thương hiệu", value: product.brand },
    { label: "Sản phẩm", value: product.name },
    { label: "Phân loại", value: GENDER_LABELS[product.gender] },
  ];
  if (meta.concentration) {
    chips.push({ label: "Nồng độ", value: meta.concentration });
  }
  if (meta.notesUsed) {
    chips.push({ label: "Nốt hương", value: meta.notesUsed });
  }
  if (meta.scentDirection) {
    chips.push({ label: "Hướng mùi", value: meta.scentDirection });
  }

  return (
    <section
      className="mt-10 rounded-3xl border border-[#eadfce] bg-[#faf8f6] p-6 md:p-8"
      data-commercial-section="product-guide"
      data-product-id={product.id}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Hướng dẫn mua theo sản phẩm
      </p>
      <h2 className="mt-2 font-serif text-2xl md:text-3xl text-[#1b120d]">
        Cách dùng trang {product.brand} {product.name} trước khi mua
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 md:text-[15px]">
        Đọc review và thông tin mùi trên trang này trước, rồi dùng giá tham khảo
        và tiêu chí chọn nguồn mua — Maison de Son không chốt giao dịch hay tồn
        kho trên trang sản phẩm.
      </p>

      {/* A. Product facts */}
      <div className="mt-5" data-commercial-block="product-facts">
        <h3 className="text-sm font-bold text-[#1b120d]">Thông tin sản phẩm</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#decfbd] bg-white px-3 py-1.5 text-xs text-[#4b3b30]"
            >
              <span className="font-semibold text-[#1b120d]">{c.label}:</span>
              <span>{c.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* B. Price guidance */}
      <div
        className="mt-5 rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
        data-commercial-block="price-guidance"
      >
        <h3 className="text-sm font-bold text-[#1b120d]">Giá &amp; mua sắm</h3>
        <p className="mt-2 text-sm leading-7 text-gray-600">{PRICE_GUIDANCE}</p>
      </div>

      {/* C. Authenticity */}
      <div
        className="mt-4 rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
        data-commercial-block="authenticity-guidance"
      >
        <h3 className="text-sm font-bold text-[#1b120d]">
          Chính hãng &amp; chọn nơi bán
        </h3>
        <p className="mt-2 text-sm leading-7 text-gray-600">
          {AUTHENTICITY_GUIDANCE}
        </p>
      </div>

      {/* D. Affiliate disclosure */}
      <div
        className="mt-4 rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
        data-commercial-block="affiliate-disclosure"
      >
        <h3 className="text-sm font-bold text-[#1b120d]">Minh bạch affiliate</h3>
        <p className="mt-2 text-sm leading-7 text-gray-600">{AFFILIATE_DISCLOSURE}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm" data-commercial-block="policy-links">
          <Link
            href="/gioi-thieu#gia-tham-khao"
            className="rounded-full border border-[#decfbd] bg-[#faf8f6] px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Giá tham khảo
          </Link>
          <Link
            href="/gioi-thieu#minh-bach-affiliate"
            className="rounded-full border border-[#decfbd] bg-[#faf8f6] px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Minh bạch affiliate
          </Link>
          <Link
            href="/gioi-thieu#tieu-chuan-bien-tap"
            className="rounded-full border border-[#decfbd] bg-[#faf8f6] px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Tiêu chuẩn biên tập
          </Link>
        </div>
      </div>

      {/* E. Related same-brand products */}
      {related.length > 0 ? (
        <div className="mt-5" data-commercial-block="related-products">
          <h3 className="text-sm font-bold text-[#1b120d]">
            Sản phẩm cùng thương hiệu trong catalog
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((p) => (
              <li key={p.id}>
                <Link
                  href={getProductUrl(p)}
                  className="inline-flex rounded-full border border-[#decfbd] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b3b30] transition hover:border-primary/40 hover:text-primary"
                >
                  {p.name}
                  {p.subName ? ` · ${p.subName}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
