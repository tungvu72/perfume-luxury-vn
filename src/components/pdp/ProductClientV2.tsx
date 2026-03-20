"use client";

import { Perfume, GalleryImage } from "@/types";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ZoomIn, X, ChevronLeft, ChevronRight, Camera, Sparkles,
  MessageCircle, Scale, ShoppingBag, MoveRight, ExternalLink,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useCompare } from "@/components/CompareSystem";
import {
  AccordBars, NotePyramid, ScoreDisplay,
  PerformanceBars, MaisonCTA, AffiliateWidget,
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
function isImageVerified(img: string | GalleryImage): boolean {
  return typeof img === "string" ? false : img.verified === true;
}

const SOURCE_LABELS: Record<string, string> = {
  fragram: "Fragram", community: "Community", studio: "Studio",
  owner: "Chủ shop", amazon: "Amazon", ebay: "eBay",
};
const GENDER_LABELS: Record<Perfume["gender"], string> = {
  nam: "Nam giới", nu: "Nữ giới", unisex: "Unisex",
};

function priceLabel(price: number) {
  return price > 0 ? `${price.toLocaleString()} VNĐ` : "Liên hệ tư vấn";
}

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
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
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
   75/25 layout (Fragrantica-inspired)
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

      {/* ═══════ HERO SECTION: Image + Key Info ═══════ */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:gap-12">
        {/* LEFT: Product Image */}
        <div className="h-fit lg:sticky lg:top-24">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-3 shadow-[var(--shadow-sm)]">
            <div
              className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[var(--radius-lg)] bg-white"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={getImageUrl(allImages[activeImage])}
                alt={`${product.name} - ${activeImage === 0 ? "ảnh chính" : `gallery ${activeImage}`}`}
                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-8"
              />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {activeImage === 0 ? "Ảnh chính" : SOURCE_LABELS[getImageSource(allImages[activeImage]) || ""] || "Gallery"}
                  </span>
                  {allImages.length > 1 && (
                    <span className="rounded-full bg-white/80 px-2.5 py-1.5 text-[10px] font-semibold text-gray-700 backdrop-blur-sm">
                      {activeImage + 1}/{allImages.length}
                    </span>
                  )}
                </div>
                <div className="rounded-full bg-white/80 p-2 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                  <ZoomIn size={16} />
                </div>
              </div>
              {getImageCaption(allImages[activeImage]) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm text-white/90">
                  {getImageCaption(allImages[activeImage])}
                </div>
              )}
            </div>
            <GalleryRail images={allImages} activeImage={activeImage} setActiveImage={setActiveImage} />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col">
          {/* Brand + Gender + Share */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
              <Link
                href={`/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {product.brand}
              </Link>
              <span className="text-[var(--color-text-muted)]">•</span>
              <span className="text-[var(--color-text-muted)]">{GENDER_LABELS[product.gender]}</span>
            </div>
            <ShareButton />
          </div>

          {/* Product Name */}
          <h1 className="mt-3 text-3xl font-serif leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-[44px]">
            {product.name}
          </h1>
          {product.subName && (
            <p className="mt-2 text-base text-[var(--color-text-secondary)]">{product.subName}</p>
          )}

          {/* Perfumer + Quick badges */}
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {product.perfumer && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs">
                <Sparkles size={12} className="text-[var(--color-primary)]" />
                <span className="text-[var(--color-text-muted)]">Tác giả:</span>
                <strong className="text-[var(--color-text)]">{product.perfumer}</strong>
              </span>
            )}
            {product.vibes && product.vibes.slice(0, 3).map((vibe, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
              >
                <span>{vibe.icon}</span>
                {vibe.label}
              </span>
            ))}
          </div>


          {/* Score Display */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-6">
            <ScoreDisplay score={product.score} verdictShort={product.verdictShort} verdict={product.verdict} />
          </div>

          {/* Main Accords */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-6">
            <AccordBars accords={product.accords} />
          </div>

          {/* Price + CTA */}
          <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">Giá tham khảo</div>
                <div className="mt-1 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">{priceLabel(product.basePrice)}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {(product.sizes || []).slice(0, 4).map((size) => (
                  <span key={size} className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="https://zalo.me/0961226169"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition hover:bg-[#0055d4]"
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
                <Scale size={18} /> {isComparing ? "Đã thêm so sánh" : "Thêm vào so sánh"}
              </button>
            </div>
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

          {/* Product Description / Article */}
          {(product.productCopy || product.article) && (
            <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
              <div className="mb-5">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  Thông tin & cảm nhận thực tế
                </div>
                <h2 className="mt-2 text-xl font-serif text-[var(--color-text)] sm:text-2xl">
                  Cần biết gì về {product.name}?
                </h2>
              </div>
              <div className="prose prose-sm max-w-none text-[var(--color-text)] prose-headings:text-[var(--color-text)] prose-headings:font-serif prose-p:leading-[1.85] prose-p:text-[15px] prose-li:text-[15px] prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline">
                {(product.productCopy || product.article || "").split("\n\n").map((block, i) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
                  if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;
                  if (trimmed.split("\n").every((l) => l.trim().startsWith("- "))) {
                    return (
                      <ul key={i}>
                        {trimmed.split("\n").filter((l) => l.trim().startsWith("- ")).map((line, li) => (
                          <li key={li}>{line.trim().slice(2)}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
              </div>
            </section>
          )}

          {/* Affiliate Widget */}
          <AffiliateWidget productName={product.name} />

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

        {/* ── SIDEBAR (25%) ── */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {/* Quick Facts */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-4">
                Thông số nhanh
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Thương hiệu</span>
                  <Link
                    href={`/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {product.brand}
                  </Link>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Giới tính</span>
                  <span className="font-semibold text-[var(--color-text)]">{GENDER_LABELS[product.gender]}</span>
                </div>
                {product.perfumer && (
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Nhà tạo hương</span>
                    <span className="font-semibold text-[var(--color-text)] text-right max-w-[160px]">{product.perfumer}</span>
                  </div>
                )}
                {product.longevity && (
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Lưu hương</span>
                    <span className="font-semibold text-[var(--color-text)]">{product.longevity}/10</span>
                  </div>
                )}
                {product.sillage && (
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Tỏa hương</span>
                    <span className="font-semibold text-[var(--color-text)]">{product.sillage}/10</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Điểm tổng</span>
                  <span className="font-bold text-[var(--color-primary)]">{product.score.total}/10</span>
                </div>
              </div>
            </div>

            {/* Maison CTA */}
            <MaisonCTA />

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ═══════ MOBILE STICKY CTA ═══════ */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[var(--color-border)] bg-white/95 backdrop-blur-sm p-3 lg:hidden">
        <div className="flex items-center gap-3 max-w-[600px] mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-[var(--color-text-muted)]">Giá tham khảo</div>
            <div className="text-lg font-bold text-[var(--color-text)] truncate">{priceLabel(product.basePrice)}</div>
          </div>
          <a
            href="https://zalo.me/0961226169"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-[#0068FF] px-6 py-3 text-sm font-bold text-white"
          >
            Tư vấn Zalo
          </a>
        </div>
      </div>
    </>
  );
}
