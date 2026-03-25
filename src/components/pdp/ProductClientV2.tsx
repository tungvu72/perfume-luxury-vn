"use client";

import { Perfume, GalleryImage } from "@/types";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ZoomIn, X, ChevronLeft, ChevronRight, Sparkles,
  MessageCircle, Scale,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useCompare } from "@/components/CompareSystem";
import {
  AccordBars, NotePyramid, ScoreDisplay,
  PerformanceBars, AffiliateWidget,
} from "@/components/pdp";

/* ── Image helpers ── */
function getImageUrl(img: string | GalleryImage): string {
  return typeof img === "string" ? img : img.url;
}
function getImageSource(img: string | GalleryImage): string | undefined {
  return typeof img === "string" ? undefined : img.source;
}
function getImageCaption(img: string | GalleryImage): string | undefined {
  return typeof img === "string" ? undefined : img.caption;
}

const SOURCE_LABELS: Record<string, string> = {
  fragram: "Fragram", community: "Community", studio: "Studio",
  owner: "Chủ shop", amazon: "Amazon", ebay: "eBay",
};
const GENDER_LABELS: Record<Perfume["gender"], string> = {
  nam: "Nam giới", nu: "Nữ giới", unisex: "Unisex",
};
const BRAND_ORIGIN: Record<string, string> = {
  DIOR: "Pháp", CHANEL: "Pháp", "TOM FORD": "Mỹ", VERSACE: "Ý",
  "DOLCE & GABBANA": "Ý", GUCCI: "Ý", PRADA: "Ý", YSL: "Pháp",
  GIVENCHY: "Pháp", VALENTINO: "Ý", HERMÈS: "Pháp", BURBERRY: "Anh",
  "RALPH LAUREN": "Mỹ", "CALVIN KLEIN": "Mỹ", ARMANI: "Ý",
  BVLGARI: "Ý", CREED: "Anh", "MAISON FRANCIS KURKDJIAN": "Pháp",
  LATTAFA: "UAE", "ARMAF": "UAE", "AL HARAMAIN": "UAE",
  MONTBLANC: "Đức", LACOSTE: "Pháp", CAROLINA: "Mỹ",
  "JEAN PAUL GAULTIER": "Pháp", MUGLER: "Pháp", ISSEY: "Nhật",
  ACQUA: "Ý", NARCISO: "Mỹ",
};

/* ═════════════════════════════════════════════
   GALLERY RAIL
   ═════════════════════════════════════════════ */
function GalleryRail({
  images, activeImage, setActiveImage,
}: {
  images: (string | GalleryImage)[];
  activeImage: number;
  setActiveImage: (i: number) => void;
}) {
  if (images.length <= 1) return null;
  return (
    <div className="p-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => setActiveImage(i)}
          className={`group relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
            activeImage === i
              ? "border-[var(--color-primary)] shadow-md"
              : "border-[var(--color-border)] opacity-70 hover:opacity-100"
          }`}
        >
          <Image src={getImageUrl(img)} alt={`Thumb ${i + 1}`} fill sizes="64px" className="object-cover" />
        </button>
      ))}
    </div>
  );
}

/* ═════════════════════════════════════════════
   LIGHTBOX
   ═════════════════════════════════════════════ */
function Lightbox({
  images, activeImage, setActiveImage, onClose, productName,
}: {
  images: (string | GalleryImage)[];
  activeImage: number;
  setActiveImage: (i: number) => void;
  onClose: () => void;
  productName: string;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95" onClick={onClose}>
      <button className="absolute right-4 top-4 z-10 text-white/70 hover:text-white" onClick={onClose}><X size={28} /></button>
      <div className="absolute left-4 top-4 text-sm font-medium text-white/60">{activeImage + 1} / {images.length}</div>

      {activeImage > 0 && (
        <button
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); setActiveImage(activeImage - 1); }}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div className="relative h-[85vh] w-[90vw] max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
        <Image src={getImageUrl(images[activeImage])} alt={`${productName} - ảnh ${activeImage + 1}`} fill sizes="90vw" className="object-contain" priority />
      </div>

      {activeImage < images.length - 1 && (
        <button
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); setActiveImage(activeImage + 1); }}
        >
          <ChevronRight size={20} />
        </button>
      )}

      <div className="absolute bottom-4 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-1.5 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
            className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
              activeImage === i ? "border-white shadow-lg" : "border-transparent opacity-40 hover:opacity-80"
            }`}
          >
            <Image src={getImageUrl(img)} alt={`Thumb ${i + 1}`} fill sizes="48px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   PRODUCT CLIENT V2 — Main Component
   ═════════════════════════════════════════════ */

type ProductClientV2Props = {
  product: Perfume;
  relatedProducts: React.ReactNode;
  relatedArticles?: React.ReactNode;
};

export default function ProductClientV2({ product, relatedProducts, relatedArticles }: ProductClientV2Props) {
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { add, items } = useCompare();

  useEffect(() => { setMounted(true); }, []);

  const isComparing = useMemo(() => items.some((x) => x.id === product.id), [items, product.id]);
  const allImages = useMemo(
    () => [product.image, ...(product.images || [])].filter(Boolean) as (string | GalleryImage)[],
    [product.image, product.images]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") setLightboxOpen(false);
    if (e.key === "ArrowRight") setActiveImage((prev) => Math.min(prev + 1, allImages.length - 1));
    if (e.key === "ArrowLeft") setActiveImage((prev) => Math.max(prev - 1, 0));
  }, [lightboxOpen, allImages.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  if (!product) return null;
  if (!mounted) return <div className="min-h-screen bg-[var(--color-bg)]" />;

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          images={allImages}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          onClose={() => setLightboxOpen(false)}
          productName={product.name}
        />
      )}

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:gap-12">
        {/* LEFT: Product Image — gradient bg + score badge overlay */}
        <div className="h-fit lg:sticky lg:top-24">
          <div
            className="rounded-[var(--radius-xl)] border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-sm)]"
            style={{ background: "linear-gradient(145deg, #FAF9F7 0%, #EDE8E0 100%)" }}
          >
            <div
              className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={getImageUrl(allImages[activeImage])}
                alt={`${product.name} - ${activeImage === 0 ? "ảnh chính" : `gallery ${activeImage}`}`}
                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-8 mix-blend-multiply"
              />
              {/* Score Badge Overlay */}
              <div className="absolute top-4 right-4 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-[#1A1D21] shadow-xl">
                <span className="text-[22px] font-bold leading-none text-white">{product.score.total}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/60 mt-0.5">/ 10</span>
              </div>
              {/* Image source badge */}
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {activeImage === 0 ? "Ảnh chính" : SOURCE_LABELS[getImageSource(allImages[activeImage]) || ""] || "Gallery"}
                </span>
              </div>
              {/* Zoom hint */}
              <div className="absolute bottom-3 right-3 rounded-full bg-white/80 p-2 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                <ZoomIn size={16} />
              </div>
            </div>
            <GalleryRail images={allImages} activeImage={activeImage} setActiveImage={setActiveImage} />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col">
          {/* Category + Brand + Share */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
              <span className="text-[var(--color-text-muted)]">{product.gender === "nam" ? "Nước Hoa Nam" : product.gender === "nu" ? "Nước Hoa Nữ" : "Nước Hoa Unisex"}</span>
              <span className="text-[var(--color-text-muted)]">•</span>
              <Link
                href={`/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {product.brand}
              </Link>
            </div>
            <ShareButton />
          </div>

          {/* Product Name */}
          <h1 className="mt-3 text-3xl font-serif leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-[44px]">
            {product.name}
          </h1>
          {product.subName && (
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{product.subName}</p>
          )}

          {/* Perfumer */}
          {product.perfumer && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs">
                <Sparkles size={12} className="text-[var(--color-primary)]" />
                <span className="text-[var(--color-text-muted)]">Tác giả:</span>
                <strong className="text-[var(--color-text)]">{product.perfumer}</strong>
              </span>
            </div>
          )}

          {/* Vibes */}
          {product.vibes && product.vibes.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {product.vibes.slice(0, 3).map((vibe, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                >
                  <span>{vibe.icon}</span>
                  {vibe.label}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {product.description && (
            <p className="mt-4 text-sm leading-[1.8] text-[var(--color-text-secondary)]">{product.description}</p>
          )}

          {/* ── Score Display + Trust Commitment (mobile + desktop) ── */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-6">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">Điểm đánh giá</div>
            <ScoreDisplay score={product.score} verdictShort={product.verdictShort} verdict={product.verdict} />

            {/* Trust Commitment Bar */}
            <div className="mt-5 rounded-2xl bg-[#1A1D21] p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 mb-4">Cam kết của Maison de SON</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🏆", title: "Nơi mua uy tín", desc: "Gợi ý nguồn mua online chính hãng, giá tốt nhất" },
                  { icon: "🛡️", title: "Đền 20 triệu nếu sai", desc: "Cam kết 100% chính hãng — sai hàng đền tiền" },
                  { icon: "⚖️", title: "Review trung thực", desc: "Không nhận tài trợ từ thương hiệu để thiên vị" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl bg-white/[0.06] p-3.5">
                    <span className="text-xl leading-none mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[13px] font-bold text-white leading-snug">{item.title}</div>
                      <div className="text-[11px] text-white/55 leading-[1.5] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Accords */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-6">
            <AccordBars accords={product.accords} />
          </div>

          {/* CTA buttons */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://zalo.me/0961226169"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1D21] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#2d3039]"
            >
              <MessageCircle size={18} /> Tư vấn qua Zalo
            </a>
            <button
              onClick={() => add(product)}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold transition ${
                isComparing
                  ? "border border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              <Scale size={18} /> {isComparing ? "Đã thêm so sánh" : "So sánh"}
            </button>
          </div>

          {/* Trust chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["Review khí hậu Việt Nam", "Không nhận tài trợ", "Tư vấn miễn phí"].map((chip) => (
              <span key={chip} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)]">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BODY: 75/25 Layout ═══════ */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
        {/* ── MAIN CONTENT (75%) ── */}
        <div className="min-w-0 space-y-8">

          {/* Note Pyramid */}
          <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
            <NotePyramid topNotes={product.topNotes} middleNotes={product.middleNotes} baseNotes={product.baseNotes} />
          </section>

          {/* Performance */}
          <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
            <PerformanceBars
              longevity={product.longevity}
              sillage={product.sillage}
              seasons={product.seasons}
              dayNight={product.dayNight}
            />
          </section>

          {/* Editorial — 3 vertical sections, label câu hỏi */}
          {(product.productCopy || product.article) && (() => {
            const raw = product.productCopy || product.article || "";
            const sections = raw.split(/(?=###\s)/).filter(s => s.trim()).map(s => {
              const lines = s.trim().split("\n");
              const heading = (lines[0] || "").replace(/^###\s*/, "").trim();
              const body = lines.slice(1).join("\n").trim();
              return { heading, body };
            });

            const sectionStyles = [
              { eyebrow: "Cân nhắc kỹ trước khi mua", accentBorder: "border-l-[3px] border-l-red-400", labelBg: "bg-red-50", labelText: "text-red-700" },
              { eyebrow: "Phân tích giá trị", accentBorder: "border-l-[3px] border-l-emerald-400", labelBg: "bg-emerald-50", labelText: "text-emerald-700" },
              { eyebrow: "Gợi ý hoàn cảnh dùng", accentBorder: "border-l-[3px] border-l-blue-400", labelBg: "bg-blue-50", labelText: "text-blue-700" },
            ];

            return (
              <section>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">Đánh giá thực tế</div>
                  <h2 className="mt-2 text-xl font-serif text-[var(--color-text)] sm:text-2xl">Cần biết gì về {product.name}?</h2>
                </div>
                <div className="space-y-5">
                  {sections.slice(0, 3).map((sec, i) => {
                    const style = sectionStyles[i] || sectionStyles[0];
                    return (
                      <div key={i} className={`rounded-2xl border border-[var(--color-border)] bg-white p-6 ${style.accentBorder}`}>
                        <div className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${style.labelBg} ${style.labelText} mb-3`}>
                          {style.eyebrow}
                        </div>
                        <h3 className="text-base font-bold text-[var(--color-text)] leading-snug mb-4">{sec.heading}</h3>
                        <div className="text-[14px] leading-[1.85] text-[var(--color-text-secondary)] space-y-3">
                          {sec.body.split("\n").filter(l => l.trim()).map((line, li) => (
                            <p key={li}>{line.trim()}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })()}

          {/* Affiliate Widget */}
          <AffiliateWidget productName={product.name} />

          {/* Verdict Dark Block */}
          {product.verdict && (
            <section className="rounded-2xl bg-[#1A1D21] p-7 sm:p-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-400 mb-3">Kết luận của Maison de SON</div>
              <blockquote className="text-lg font-serif leading-[1.7] text-white sm:text-xl">&ldquo;{product.verdict}&rdquo;</blockquote>
              {product.verdictShort && (
                <div className="mt-4 inline-block rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/70">
                  {product.verdictShort}
                </div>
              )}
            </section>
          )}

          {/* Related Products */}
          {relatedProducts}

          {/* Related Articles */}
          {relatedArticles && (
            <section className="border-t border-[var(--color-border)] pt-8">
              <h2 className="mb-6 text-xl font-serif text-[var(--color-text)]">Bài viết liên quan</h2>
              {relatedArticles}
            </section>
          )}
        </div>

        {/* ── SIDEBAR (25%) — 3 card tách biệt ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">

            {/* Card 1: Score tổng */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">Điểm đánh giá</h3>
              <ScoreDisplay score={product.score} verdictShort={product.verdictShort} verdict={product.verdict} />
            </div>

            {/* Card 2: Tư vấn mua — dark */}
            <div className="rounded-[var(--radius-lg)] bg-[#1A1D21] p-5 text-white">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-400 mb-2">Tư vấn chọn mua</div>
              <p className="text-[13px] leading-[1.7] text-white/75 mb-4">Kể gu mùi, ngân sách và hoàn cảnh dùng — Maison de SON gợi ý chai phù hợp.</p>
              <a
                href="https://zalo.me/0961226169"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-white text-[#1A1D21] px-4 py-2.5 text-[12px] font-bold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle size={14} /> Nhắn Zalo ngay
              </a>
            </div>

            {/* Card 3: Thông tin nhanh */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">Thông tin nhanh</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Thương hiệu</span>
                  <Link href={`/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, "-")}`} className="font-semibold text-[var(--color-primary)] hover:underline">{product.brand}</Link>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Giới tính</span>
                  <span className="font-semibold">{GENDER_LABELS[product.gender]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Xuất xứ</span>
                  <span className="font-semibold">{BRAND_ORIGIN[product.brand] || "Pháp"}</span>
                </div>
                {product.longevity && (
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Lưu hương</span>
                    <span className="font-semibold">{product.longevity}/10</span>
                  </div>
                )}
                {product.sillage && (
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Tỏa hương</span>
                    <span className="font-semibold">{product.sillage}/10</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Điểm tổng</span>
                  <span className="font-bold text-[var(--color-primary)] text-base">{product.score.total}/10</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-3">Phân loại</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Card 4: Cam kết sản phẩm */}
            <div className="rounded-[var(--radius-lg)] bg-[#1A1D21] p-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 mb-4">Cam kết</h3>
              <ul className="space-y-3">
                {[
                  { icon: "🏆", text: "Gợi ý nơi mua chính hãng, giá tốt nhất" },
                  { icon: "🛡️", text: "Cam kết chính hãng — sai hàng đền 20 triệu" },
                  { icon: "⚖️", text: "Không nhận tài trợ để review thiên vị" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5 text-[12px] text-white/75 leading-[1.6]">
                    <span className="text-sm flex-shrink-0 mt-0.5">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>
      </div>

      {/* ═══════ MOBILE STICKY CTA ═══════ */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[var(--color-border)] bg-white/95 backdrop-blur-sm p-3 lg:hidden">
        <div className="flex items-center gap-3 max-w-[600px] mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wide">Maison de SON</div>
            <div className="text-base font-bold text-[var(--color-text)] truncate">{product.name}</div>
          </div>
          <a
            href="https://zalo.me/0961226169"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-[#1A1D21] px-6 py-3 text-sm font-bold text-white"
          >
            Tư vấn Zalo
          </a>
        </div>
      </div>
    </>
  );
}
