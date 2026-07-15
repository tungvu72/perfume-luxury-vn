import Link from "next/link";
import type { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";
import type { ArticleModuleProfile } from "@/lib/articleSeoMetadata";

/**
 * Shared server-rendered article intent support (COMMERCIAL_V13_ARTICLES_14).
 * One component, profile-based behavior — not duplicated per article.
 */

const PRICE_DISCLOSURE =
  "Giá nước hoa có thể thay đổi theo dung tích, nhà bán và chương trình khuyến mãi. Các mức giá trong bài chỉ mang tính tham khảo; hãy kiểm tra giá cuối cùng trên trang đối tác trước khi mua.";

const AUTHENTICITY_GUIDANCE =
  "Ưu tiên nơi bán công khai thông tin liên hệ, chính sách đổi trả và chứng từ giao dịch. Bao bì, batch code hay mức giá chỉ là dấu hiệu tham khảo, không đủ để tự khẳng định thật giả.";

const AFFILIATE_DISCLOSURE =
  "Maison de Son có thể nhận hoa hồng từ một số giao dịch đủ điều kiện qua liên kết đối tác, không làm tăng giá người đọc phải trả. Quan hệ thương mại không quyết định kết luận biên tập.";

const PRICE_THRESHOLD_CAVEAT =
  "Mốc dưới 1 triệu phụ thuộc dung tích, nhà bán và khuyến mãi tại thời điểm kiểm tra. Một sản phẩm có thể vượt ngưỡng này; hãy xác nhận giá cuối cùng trước khi mua.";

const INFORMATIONAL_NOTE =
  "Nội dung này nhằm giải thích khái niệm và cách sử dụng, không thay thế trải nghiệm thử mùi trên da hoặc hướng dẫn riêng cho từng sản phẩm.";

export default function ArticleIntentSupport({
  profile,
  relatedProducts = [],
  relatedReadings = [],
}: {
  profile: ArticleModuleProfile;
  relatedProducts?: Perfume[];
  relatedReadings?: { href: string; label: string }[];
}) {
  const isInformational = profile === "INFORMATIONAL_LIGHT";
  const isThreshold = profile === "COMMERCIAL_FULL_PRICE_THRESHOLD";
  const isCommercial = profile === "COMMERCIAL_FULL" || isThreshold;

  return (
    <section
      className="mt-10 rounded-3xl border border-[#eadfce] bg-[#faf8f6] p-6 md:p-8"
      data-commercial-section="article-intent-support"
      data-module-profile={profile}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        {isInformational ? "Ghi chú biên tập" : "Hướng dẫn đọc trước khi mua"}
      </p>
      <h2 className="mt-2 font-serif text-2xl md:text-3xl text-[#1b120d]">
        {isInformational
          ? "Cách dùng bài viết này"
          : "Giá tham khảo, nguồn mua và minh bạch"}
      </h2>

      {isInformational ? (
        <div className="mt-5 space-y-4" data-commercial-block="informational-light">
          <p className="text-sm leading-7 text-gray-600 md:text-[15px]">
            {INFORMATIONAL_NOTE}
          </p>
          <p className="text-sm leading-7 text-gray-600 md:text-[15px]">
            Hiệu quả lưu hương và cảm nhận mùi có thể khác nhau theo da, thời tiết
            và cách xịt. Hãy dùng bài viết như khung hiểu khái niệm, rồi tự kiểm
            chứng khi thử mùi.
          </p>
          {relatedReadings.length > 0 ? (
            <div data-commercial-block="related-reading">
              <h3 className="text-sm font-bold text-[#1b120d]">Đọc thêm</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {relatedReadings.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex rounded-full border border-[#decfbd] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b3b30] hover:border-primary/40 hover:text-primary"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="mt-2 flex flex-wrap gap-2 text-sm" data-commercial-block="policy-links">
            <Link
              href="/gioi-thieu#tieu-chuan-bien-tap"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Tiêu chuẩn biên tập
            </Link>
            <Link
              href="/gioi-thieu#chinh-sach-chinh-sua"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Chính sách chỉnh sửa
            </Link>
            <Link
              href="/gioi-thieu#minh-bach-affiliate"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Minh bạch site
            </Link>
          </div>
        </div>
      ) : null}

      {isCommercial ? (
        <div className="mt-5 space-y-4" data-commercial-block="commercial-full">
          <div
            className="rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
            data-commercial-block="price-disclosure"
          >
            <h3 className="text-sm font-bold text-[#1b120d]">Giá tham khảo</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{PRICE_DISCLOSURE}</p>
            {isThreshold ? (
              <p
                className="mt-3 text-sm leading-7 text-gray-700 font-medium"
                data-commercial-block="price-threshold-caveat"
              >
                {PRICE_THRESHOLD_CAVEAT}
              </p>
            ) : null}
          </div>

          <div
            className="rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
            data-commercial-block="authenticity-guidance"
          >
            <h3 className="text-sm font-bold text-[#1b120d]">
              Chọn nguồn mua &amp; chính hãng
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              {AUTHENTICITY_GUIDANCE}
            </p>
          </div>

          <div
            className="rounded-2xl border border-[#decfbd] bg-white p-4 md:p-5"
            data-commercial-block="affiliate-disclosure"
          >
            <h3 className="text-sm font-bold text-[#1b120d]">Minh bạch affiliate</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{AFFILIATE_DISCLOSURE}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm" data-commercial-block="policy-links">
            <Link
              href="/gioi-thieu#gia-tham-khao"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Giá tham khảo
            </Link>
            <Link
              href="/gioi-thieu#minh-bach-affiliate"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Minh bạch affiliate
            </Link>
            <Link
              href="/gioi-thieu#tieu-chuan-bien-tap"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Tiêu chuẩn biên tập
            </Link>
            <Link
              href="/gioi-thieu#chinh-sach-chinh-sua"
              className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
            >
              Chính sách chỉnh sửa
            </Link>
          </div>

          {relatedProducts.length > 0 ? (
            <div data-commercial-block="related-products">
              <h3 className="text-sm font-bold text-[#1b120d]">
                Sản phẩm liên quan trong catalog
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {relatedProducts.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={getProductUrl(p)}
                      className="inline-flex rounded-full border border-[#decfbd] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b3b30] hover:border-primary/40 hover:text-primary"
                    >
                      {p.brand} {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
