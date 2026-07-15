import Link from "next/link";
import type { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";
import {
  PriceDisclaimerBlock,
  AuthenticityGuideBlock,
} from "@/components/commercial/CommercialTrustSections";

/**
 * Reusable brand-page commercial guide (COMMERCIAL_V5_BRANDS_A_19+).
 * Intro text is derived from the products actually listed on the page.
 * No fake prices, stock, dealer status, or guaranteed authenticity claims.
 */
export default function BrandCommercialGuide({
  brandName,
  brandSlug,
  products,
}: {
  brandName: string;
  brandSlug: string;
  products: Perfume[];
}) {
  const names = products.map((p) => p.name);
  const top = names.slice(0, 3);
  const more = names.length > 3 ? names.length - 3 : 0;

  let intro: string;
  if (names.length === 0) {
    intro = `Trang ${brandName} giúp bạn định hướng review trước khi mua. Hiện chưa có sản phẩm nào trong catalog đã lọc.`;
  } else if (names.length === 1) {
    intro = `Trên Maison de Son hiện có ${names[0]} của ${brandName}. Đọc review chi tiết để hiểu phong cách mùi, rồi dùng giá tham khảo và tiêu chí chọn nguồn mua trước khi quyết định.`;
  } else if (names.length === 2) {
    intro = `${brandName} trên trang này gồm ${names[0]} và ${names[1]}. So sánh hai hướng mùi qua review, sau đó kiểm tra giá tham khảo và nơi mua đáng tin cậy.`;
  } else {
    intro = `${brandName} đang có ${names.length} chai trong catalog: ${top.join(", ")}${
      more > 0 ? ` và ${more} lựa chọn khác` : ""
    }. Bắt đầu từ review từng chai, rồi áp dụng giá tham khảo và tiêu chí chọn nguồn mua chính hãng.`;
  }

  return (
    <section
      className="max-w-[1200px] mx-auto px-5 pb-10"
      data-commercial-section="brand-guide"
      data-brand-slug={brandSlug}
    >
      <div className="rounded-3xl border border-[#eadfce] bg-[#faf8f6] p-6 md:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Hướng dẫn mua theo thương hiệu
        </p>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl text-[#1b120d]">
          Cách dùng trang {brandName} trước khi mua
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 md:text-[15px]">{intro}</p>

        {products.length > 0 ? (
          <div className="mt-5">
            <h3 className="text-sm font-bold text-[#1b120d]">Sản phẩm đang có trên trang</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {products.map((p) => (
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
            <p className="mt-3 text-sm text-gray-600">
              Mở từng link để đọc review chi tiết — Maison de Son không chốt giao dịch hay tồn kho trên trang này.
            </p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
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
            href="/kien-thuc"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Tiêu chí nguồn mua
          </Link>
          <Link
            href="/thuong-hieu"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Tất cả thương hiệu
          </Link>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <PriceDisclaimerBlock compact />
        <AuthenticityGuideBlock compact />
      </div>
    </section>
  );
}
