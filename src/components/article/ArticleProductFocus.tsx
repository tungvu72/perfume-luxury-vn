import Image from "next/image";
import Link from "next/link";

export type ProductFocusTone = "cool-day" | "warm-evening";

/**
 * Editorial product-focus module for articles.
 * Bottle layer is always a real repository product image (no AI redraw).
 */
export default function ArticleProductFocus({
  imageSrc,
  imageAlt,
  caption,
  ctaLabel,
  ctaHref,
  tone,
  productName,
}: {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  ctaLabel: string;
  ctaHref: string;
  tone: ProductFocusTone;
  productName: string;
}) {
  const isCool = tone === "cool-day";
  const panelClass = isCool
    ? "from-[#dce8f2] via-[#e8eef5] to-[#c5d4e3]"
    : "from-[#2a1a14] via-[#3d2418] to-[#1a100c]";
  const textClass = isCool ? "text-[#1a2430]" : "text-[#f5ebe3]";
  const mutedClass = isCool ? "text-[#3d4a58]" : "text-[#d4c4b4]";
  const ctaClass = isCool
    ? "bg-[#1a2430] text-white hover:bg-[#0f1720]"
    : "bg-[#e8c9a8] text-[#1a100c] hover:bg-[#f0d8bc]";

  return (
    <aside
      className={
        isCool
          ? "my-10 sm:my-12 not-prose rounded-2xl overflow-hidden border border-[#e0d7ca]"
          : "my-10 sm:my-12 not-prose rounded-2xl overflow-hidden border border-[#4a3024]"
      }
      data-article-module="product-focus"
      data-tone={tone}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className={`relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] bg-gradient-to-br ${panelClass} flex items-center justify-center p-6 sm:p-8`}
        >
          {/* Soft stage — no nested white frame */}
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[3/4]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width:768px) 70vw, 280px"
              className="object-contain object-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
              unoptimized={imageSrc.endsWith(".jpg") || imageSrc.endsWith(".jpeg")}
            />
          </div>
        </div>
        <div
          className={`flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10 ${isCool ? "bg-[#f7f9fb]" : "bg-[#241610]"}`}
        >
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.18em] ${isCool ? "text-primary" : "text-[#c9a882]"}`}
          >
            {productName}
          </p>
          <p className={`text-[16px] sm:text-[17px] leading-[1.75] font-medium ${textClass}`}>
            {caption}
          </p>
          <p className={`text-[13px] leading-relaxed ${mutedClass}`}>
            Ảnh sản phẩm từ catalog Maison de Son — không chỉnh sửa chai.
          </p>
          <div>
            <Link
              href={ctaHref}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${ctaClass}`}
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
