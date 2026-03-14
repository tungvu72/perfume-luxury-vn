"use client";

import { Perfume, GalleryImage } from "@/types";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  MessageSquare,
  Droplet,
  MoveRight,
  Sun,
  Moon,
  CloudSun,
  Snowflake,
  Leaf,
  Flower2,
  Clock,
  Wind,
  Scale,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
  Sparkles,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useCompare } from "@/components/CompareSystem";

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
  fragram: "Fragram",
  community: "Community",
  studio: "Studio",
  owner: "Chủ shop",
};

const GENDER_LABELS: Record<Perfume["gender"], string> = {
  nam: "Nam giới",
  nu: "Nữ giới",
  unisex: "Unisex",
};

function scoreTone(score: number) {
  if (score >= 8.8) return "text-emerald-600";
  if (score >= 8) return "text-primary";
  if (score >= 7) return "text-amber-600";
  return "text-gray-700";
}

function priceLabel(price: number) {
  return price > 0 ? `${price.toLocaleString()} VNĐ` : "Liên hệ tư vấn giá";
}

function fitSummary(product: Perfume) {
  if (!product.dayNight) return "Dễ dùng hằng ngày";
  if (product.dayNight.day > product.dayNight.night + 10) return "Hợp đi làm, ban ngày";
  if (product.dayNight.night > product.dayNight.day + 10) return "Hợp đi tối, hẹn hò";
  return "Dùng linh hoạt cả ngày lẫn đêm";
}

function avoidSummary(product: Perfume) {
  if (!product.sillage) return "Người thích mùi thật nổi bật ngay từ đầu.";
  if (product.sillage >= 8) return "Không hợp môi trường kín hoặc người thích mùi thật nhẹ.";
  if (product.sillage <= 5) return "Không hợp ai muốn mùi hiện diện mạnh và gây chú ý xa.";
  return "Không quá hợp nếu bạn cần một mùi thật cá tính hoặc thật bùng nổ.";
}

type GalleryRailProps = {
  images: (string | GalleryImage)[];
  activeImage: number;
  setActiveImage: (index: number) => void;
};

function GalleryRail({ images, activeImage, setActiveImage }: GalleryRailProps) {
  if (images.length <= 1) return null;

  return (
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
      {images.map((img, i) => {
        const source = getImageSource(img);
        return (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`group relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border transition-all ${activeImage === i
              ? "border-primary shadow-[0_10px_30px_rgba(196,122,61,0.16)]"
              : "border-[var(--border)] bg-white opacity-80 hover:opacity-100"
              }`}
          >
            <Image src={getImageUrl(img)} alt={`Thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 py-1 text-left text-[8px] font-bold uppercase tracking-[0.12em] text-white">
              {i === 0 ? "Ảnh bìa" : SOURCE_LABELS[source || "community"] || "Gallery"}
            </div>
          </button>
        );
      })}
    </div>
  );
}

type ProductHeroProps = {
  product: Perfume;
  allImages: (string | GalleryImage)[];
  activeImage: number;
  setActiveImage: (index: number) => void;
  setLightboxOpen: (open: boolean) => void;
  isComparing: boolean;
  onCompare: () => void;
};

function ProductHero({
  product,
  allImages,
  activeImage,
  setActiveImage,
  setLightboxOpen,
  isComparing,
  onCompare,
}: ProductHeroProps) {
  const activeSource = activeImage > 0 ? getImageSource(allImages[activeImage]) : undefined;

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-12">
      <div className="h-fit lg:sticky lg:top-24">
        <div className="rounded-[24px] border border-[var(--border)] bg-[#faf8f6] p-2.5 shadow-[0_20px_60px_rgba(17,17,17,0.04)] sm:rounded-[28px] sm:p-4">
          <div
            className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-[24px] bg-white"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src={getImageUrl(allImages[activeImage])}
              alt={`${product.name} - ${activeImage === 0 ? "ảnh chính" : `gallery ${activeImage}`}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-8"
            />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3 sm:p-4">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  {activeImage === 0 ? "Ảnh chính" : SOURCE_LABELS[activeSource || "community"] || "Gallery"}
                </span>
                {!isImageVerified(allImages[activeImage]) && (
                  <span className="hidden rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-800 sm:inline-block">
                    Chưa xác minh
                  </span>
                )}
                {allImages.length > 1 && (
                  <span className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-gray-700 backdrop-blur-sm">
                    {activeImage + 1}/{allImages.length}
                  </span>
                )}
              </div>
              <div className="rounded-full bg-white/80 p-2 text-gray-700 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ZoomIn size={16} />
              </div>
            </div>

            {getImageCaption(allImages[activeImage]) && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 pt-10 text-sm text-white/90">
                {getImageCaption(allImages[activeImage])}
              </div>
            )}
          </div>

          <GalleryRail images={allImages} activeImage={activeImage} setActiveImage={setActiveImage} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <Link
              href={`/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-primary hover:underline"
            >
              {product.brand}
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">{GENDER_LABELS[product.gender]}</span>
          </div>
          <ShareButton />
        </div>

        <div className="mt-4">
          <h1 className="text-[28px] font-serif leading-[1.08] tracking-[-0.02em] text-gray-950 sm:text-5xl lg:text-[58px]">
            {product.name}
          </h1>
          {product.subName && <p className="mt-3 text-base text-gray-500 sm:text-lg">{product.subName}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
            {product.perfumer && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5">
                <Sparkles size={14} className="text-primary" />
                Tác giả: <strong className="text-gray-800">{product.perfumer}</strong>
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5">
              <Camera size={14} className="text-primary" />
              {allImages.length} ảnh trong gallery
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.longevity && <span className="rounded-full bg-[#f7f3ef] px-3 py-1.5 text-xs font-semibold text-gray-700">Lưu hương {product.longevity}/10</span>}
            {product.sillage && <span className="rounded-full bg-[#f7f3ef] px-3 py-1.5 text-xs font-semibold text-gray-700">Tỏa hương {product.sillage}/10</span>}
            {product.vibes && product.vibes.length > 0 && product.vibes.slice(0, 3).map((vibe, i) => <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f3ef] px-3 py-1.5 text-xs font-semibold text-gray-700"><span>{vibe.icon}</span><span>{vibe.label}</span></span>)}
          </div>
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-6">
          <div className="flex items-start gap-4">
            <div className="flex h-[60px] w-[60px] flex-shrink-0 flex-col items-center justify-center rounded-full border border-primary/20 bg-[#fbf4ee]">
              <div className={`font-serif text-xl leading-none ${scoreTone(product.score.total)}`}>{product.score.total}</div>
              <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">/10</div>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Nhận xét nhanh</div>
              <h2 className="mt-1 text-lg font-semibold leading-snug text-gray-950 sm:text-xl">{product.verdictShort}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{product.verdict}</p>
              <p className="mt-2 text-xs text-gray-400">{fitSummary(product)}. {avoidSummary(product)}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Mùi hương", desc: "Chất mùi tổng thể", val: product.score.scent },
            { label: "Nét riêng", desc: "Mức độ khác biệt", val: product.score.uniqueness },
            { label: "Sức hút", desc: "Khả năng gây thiện cảm", val: product.score.compliments },
            { label: "Đáng tiền", desc: "So với giá bán", val: product.score.value },
          ].map((s) => (
            <div key={s.label} className="py-2 text-center">
              <div className={`font-serif text-2xl ${scoreTone(s.val)}`}>
                {s.val}<span className="text-sm text-gray-300">/10</span>
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[24px] border border-[var(--border)] bg-[#fcfbf9] p-4 sm:mt-6 sm:rounded-[28px] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Giá tham khảo</div>
              <div className="mt-2 text-3xl font-serif text-gray-950 sm:text-4xl">{priceLabel(product.basePrice)}</div>
              <p className="mt-2 text-sm leading-6 text-gray-500">Tư vấn qua Zalo để chốt size, hàng sẵn và mức giá chính xác theo thời điểm.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(product.sizes || []).slice(0, 4).map((size) => (
                <span key={size} className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-semibold text-gray-700">{size}</span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link href="https://zalo.me/0961226169" rel="nofollow" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0068FF] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:opacity-90">
              <MessageSquare size={18} /> Tư vấn qua Zalo
            </Link>
            <button
              onClick={onCompare}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold transition ${isComparing ? "border border-primary bg-primary text-white shadow-lg shadow-orange-50" : "border border-[var(--border)] bg-white text-gray-700 hover:border-primary hover:text-primary"}`}
            >
              <Scale size={18} /> {isComparing ? "Đã thêm vào so sánh" : "Thêm vào so sánh"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProductClientProps = {
  product: Perfume;
  relatedProducts: React.ReactNode;
  relatedArticles?: React.ReactNode;
};

export default function ProductClient({ product, relatedProducts, relatedArticles }: ProductClientProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { add, items } = useCompare();

  useEffect(() => {
    setMounted(true);
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[product.sizes.length - 1]);
    }
  }, [product]);

  const isComparing = useMemo(() => items.some((x) => x.id === product.id), [items, product.id]);
  const allImages = useMemo(() => [product.image, ...(product.images || [])].filter(Boolean) as (string | GalleryImage)[], [product.image, product.images]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") setLightboxOpen(false);
    if (e.key === "ArrowRight") setActiveImage((prev) => Math.min(prev + 1, allImages.length - 1));
    if (e.key === "ArrowLeft") setActiveImage((prev) => Math.max(prev - 1, 0));
  }, [lightboxOpen, allImages.length]);

  const currentMonthYear = useMemo(() => {
    const now = new Date();
    return `${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear()}`;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  if (!product) return null;
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <>
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95" onClick={() => setLightboxOpen(false)}>
          <button className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white" onClick={() => setLightboxOpen(false)}><X size={28} /></button>
          <div className="absolute left-4 top-4 text-sm font-medium text-white/60">{activeImage + 1} / {allImages.length}</div>
          {activeImage > 0 && (
            <button className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25" onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => prev - 1); }}>
              <ChevronLeft size={20} />
            </button>
          )}
          <div className="relative h-[85vh] w-[90vw] max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
            <Image src={getImageUrl(allImages[activeImage])} alt={`${product.name} - ảnh ${activeImage + 1}`} fill sizes="90vw" className="object-contain" priority />
          </div>
          {activeImage < allImages.length - 1 && (
            <button className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25" onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => prev + 1); }}>
              <ChevronRight size={20} />
            </button>
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            {activeImage === 0 ? <span className="text-xs font-semibold text-white/50">Ảnh bìa chính thức</span> : <>
              {getImageSource(allImages[activeImage]) && <span className="mb-1 inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">{SOURCE_LABELS[getImageSource(allImages[activeImage])!] || "Ảnh thực tế"}</span>}
              {getImageCaption(allImages[activeImage]) && <div className="mt-1 text-xs text-white/60">{getImageCaption(allImages[activeImage])}</div>}
            </>}
          </div>
          <div className="absolute bottom-16 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-1.5 overflow-x-auto pb-1">
            {allImages.map((img, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setActiveImage(i); }} className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${activeImage === i ? "border-white shadow-lg" : "border-transparent opacity-40 hover:opacity-80"}`}>
                <Image src={getImageUrl(img)} alt={`Thumb ${i + 1}`} fill sizes="48px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="animate-in fade-in grid grid-cols-1 gap-10 fill-mode-forwards duration-500" style={{ opacity: 1 }}>
        <ProductHero product={product} allImages={allImages} activeImage={activeImage} setActiveImage={setActiveImage} setLightboxOpen={setLightboxOpen} isComparing={isComparing} onCompare={() => add(product)} />

        <div className="grid grid-cols-1 gap-8">
          <div className="min-w-0">
            {(product.longevity || product.sillage || product.seasons) && (
              <div className="mt-8 border-t border-[var(--border)] pt-8 sm:mt-10 sm:pt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {(product.longevity || product.sillage) && <div className=""><h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">Hiệu năng thực chiến</h3><div className="space-y-4">{product.longevity && <div><div className="mb-1.5 flex items-center justify-between text-sm font-semibold text-gray-700"><span className="inline-flex items-center gap-2"><Clock size={14} className="text-primary" /> Độ lưu hương</span><span>{product.longevity}/10</span></div><div className="flex gap-1">{Array.from({ length: 10 }).map((_, i) => <div key={i} className={`h-1.5 flex-1 rounded-full ${i < product.longevity! ? "bg-primary" : "bg-gray-200"}`} />)}</div><p className="mt-1.5 text-[11px] text-gray-400">{product.longevity >= 8 ? "Rất lâu, hợp người thích mùi bám rõ." : product.longevity >= 6 ? "Khá ổn cho nhu cầu hằng ngày." : "Thiên về cảm giác gọn, không đeo bám quá mạnh."}</p></div>}{product.sillage && <div><div className="mb-1.5 flex items-center justify-between text-sm font-semibold text-gray-700"><span className="inline-flex items-center gap-2"><Wind size={14} className="text-primary" /> Độ tỏa hương</span><span>{product.sillage}/10</span></div><div className="flex gap-1">{Array.from({ length: 10 }).map((_, i) => <div key={i} className={`h-1.5 flex-1 rounded-full ${i < product.sillage! ? "bg-primary" : "bg-gray-200"}`} />)}</div><p className="mt-1.5 text-[11px] text-gray-400">{product.sillage >= 8 ? "Tỏa mạnh, có độ hiện diện rõ trong không gian." : product.sillage >= 6 ? "Tỏa vừa phải, dễ dùng cho số đông." : "Khá kín, thiên về cảm giác riêng tư hơn."}</p></div>}</div></div>}

                {product.seasons && <div className=""><h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">Mùa & thời điểm</h3><div className="space-y-2.5">{[{ label: "Xuân", icon: <Flower2 size={13} />, val: product.seasons.spring }, { label: "Hè", icon: <Sun size={13} />, val: product.seasons.summer }, { label: "Thu", icon: <Leaf size={13} />, val: product.seasons.fall }, { label: "Đông", icon: <Snowflake size={13} />, val: product.seasons.winter }].map((s) => <div key={s.label} className="flex items-center gap-3"><div className="flex w-14 items-center gap-1 text-xs font-semibold text-gray-500">{s.icon}{s.label}</div><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200"><div className="h-full rounded-full bg-primary" style={{ width: `${s.val}%` }} /></div><div className="w-10 text-right text-xs font-bold text-gray-400">{s.val}%</div></div>)}{product.dayNight && <div className="flex items-center gap-3 mt-1"><div className="flex w-14 items-center gap-1 text-xs font-semibold text-gray-500"><CloudSun size={13} className="text-amber-500" />Ngày</div><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200"><div className="h-full rounded-full bg-amber-400" style={{ width: `${product.dayNight.day}%` }} /></div><div className="w-10 text-right text-xs font-bold text-gray-400">{product.dayNight.day}%</div></div>}{product.dayNight && <div className="flex items-center gap-3"><div className="flex w-14 items-center gap-1 text-xs font-semibold text-gray-500"><Moon size={13} className="text-indigo-500" />Đêm</div><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200"><div className="h-full rounded-full bg-indigo-400" style={{ width: `${product.dayNight.night}%` }} /></div><div className="w-10 text-right text-xs font-bold text-gray-400">{product.dayNight.night}%</div></div>}</div></div>}
              </div>
            )}

            <section className="mt-8 border-t border-[var(--border)] pt-8 sm:mt-10 sm:pt-10">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Droplet size={20} /></div><h2 className="text-2xl font-serif text-gray-950 sm:text-3xl">Khám phá các tầng hương</h2></div>
              <div className="relative space-y-8 pl-8 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent before:content-['']">{[{ title: "Hương đầu", note: "Bay sau 15-30 phút", color: "border-primary", bg: "bg-[#FFF8E7] border-[#F5E6C4]", notes: product.topNotes }, { title: "Hương giữa", note: "Kéo dài 3-5 tiếng", color: "border-rose-400", bg: "bg-[#FEF0F0] border-[#F5D5D5]", notes: product.middleNotes }, { title: "Hương cuối", note: "Bám 6-12+ tiếng", color: "border-gray-400", bg: "bg-gray-50 border-gray-200", notes: product.baseNotes }].map((section) => <div key={section.title} className="relative"><div className={`absolute -left-[31px] top-1.5 z-10 h-4 w-4 rounded-full border-4 bg-white ${section.color}`} /><div className="flex flex-col gap-4 md:flex-row md:items-start"><div className="min-w-[120px]"><div className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-800">{section.title}</div><div className="mt-1 text-[11px] italic text-gray-400">{section.note}</div></div><div className="flex flex-wrap gap-2">{section.notes.map((n, i) => <Link key={i} href={`/bang-xep-hang?note=${encodeURIComponent(n.name)}`} className={`rounded-xl border px-4 py-2 text-xs font-semibold text-gray-800 transition hover:border-primary ${section.bg}`}>{n.name}</Link>)}</div></div></div>)}</div>
            </section>

            <section className="mt-8 border-t border-[var(--border)] pt-8 sm:mt-10 sm:pt-10">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">Nhóm hương chính</h3>
              <div className="space-y-2.5">{product.accords.map((accord, i) => <div key={i} className="flex items-center gap-3"><div className="w-24 text-xs font-semibold text-gray-600">{accord.name}</div><div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full transition-all duration-500" style={{ width: `${accord.value}%`, backgroundColor: accord.color }} /></div><div className="w-10 text-right text-xs font-bold text-gray-400">{accord.value}%</div></div>)}</div>
            </section>

            {product.article && <section className="mt-8 border-t border-[var(--border)] pt-8 sm:mt-10 sm:pt-10">
              <div className="mb-8 border-b border-[var(--border)] pb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Thông tin & cảm nhận thực tế</p>
                <h2 className="mt-2 text-2xl font-serif text-gray-950 sm:text-3xl">Cần biết gì về {product.name}?</h2>
              </div>
              <div className="prose prose-base max-w-none text-gray-900 prose-headings:font-serif prose-headings:text-gray-950 prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[1.3rem] prose-p:my-0 prose-p:mb-5 prose-p:text-[16px] prose-p:leading-[1.9] sm:prose-p:text-[17px] prose-li:text-[15px] prose-li:leading-7 prose-ul:my-4 prose-ul:space-y-1 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                {(() => {
                  let selfLinked = false; let homeLinked = false; let categoryLinked = false; let brandLinked = false;
                  let isFirstPara = true;
                  const searchName = product.name;
                  const categoryLabel = product.gender === "nam" ? "nước hoa nam" : product.gender === "nu" ? "nước hoa nữ" : "nước hoa unisex";
                  const categoryHref = product.gender === "nam" ? "/nam-gioi" : product.gender === "nu" ? "/nu-gioi" : "/unisex";
                  const brandLabel = product.brand.split(" ").map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");

                  function addInternalLinks(text: string, paraIdx: number) {
                    const patterns = [
                      !homeLinked ? { label: "Maison de SON", href: "/", key: "home" } : null,
                      !categoryLinked ? { label: categoryLabel, href: categoryHref, key: "category" } : null,
                      !brandLinked ? { label: brandLabel, href: `/${product.brandSlug}`, key: "brand" } : null,
                      !selfLinked ? { label: searchName, href: `/${product.id}`, key: "self" } : null,
                    ].filter(Boolean) as Array<{ label: string; href: string; key: string }>;
                    const nodes: React.ReactNode[] = [];
                    let cursor = 0;
                    let working = text;
                    while (working.length > 0) {
                      let best: { index: number; item: { label: string; href: string; key: string } } | null = null;
                      for (const item of patterns) {
                        const idx = working.toLowerCase().indexOf(item.label.toLowerCase());
                        if (idx >= 0 && (!best || idx < best.index)) best = { index: idx, item };
                      }
                      if (!best) { nodes.push(working); break; }
                      if (best.index > 0) nodes.push(working.slice(0, best.index));
                      const foundLabel = working.slice(best.index, best.index + best.item.label.length);
                      nodes.push(<Link key={`${best.item.key}-${paraIdx}-${cursor}`} href={best.item.href} className="border-b border-primary/30 font-semibold text-primary transition-colors hover:border-primary">{foundLabel}</Link>);
                      if (best.item.key === "home") homeLinked = true;
                      if (best.item.key === "category") categoryLinked = true;
                      if (best.item.key === "brand") brandLinked = true;
                      if (best.item.key === "self") selfLinked = true;
                      working = working.slice(best.index + best.item.label.length);
                      cursor += 1;
                    }
                    return nodes;
                  }

                  function renderInline(text: string, paraIdx: number) {
                    /* handle **bold** */
                    const parts = text.split(/(\*\*[^*]+\*\*)/);
                    return parts.map((part, pi) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={pi}>{part.slice(2, -2)}</strong>;
                      }
                      return <span key={pi}>{addInternalLinks(part, paraIdx)}</span>;
                    });
                  }

                  return product.article!.split("\n\n").map((block, i) => {
                    const trimmed = block.trim();
                    if (!trimmed) return null;

                    /* headings */
                    if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.slice(4)}</h3>;
                    if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.slice(3)}</h2>;

                    /* bullet list */
                    if (trimmed.split("\n").every(l => l.trim().startsWith("- ") || l.trim() === "")) {
                      return <ul key={i}>{trimmed.split("\n").filter(l => l.trim().startsWith("- ")).map((line, li) => (
                        <li key={li}>{renderInline(line.trim().slice(2), i)}</li>
                      ))}</ul>;
                    }

                    /* normal paragraph — drop cap on first */
                    const content = renderInline(trimmed, i);
                    if (isFirstPara) {
                      isFirstPara = false;
                      return <p key={i} className="first-letter:text-[2.8em] first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[0.8] first-letter:text-primary">{content}</p>;
                    }
                    return <p key={i}>{content}</p>;
                  });
                })()}
              </div>
            </section>}


            <section className="rounded-[28px] border border-[var(--border)] bg-[#fcfbf9] p-5 sm:p-6"><div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><h3 className="flex items-center gap-2 text-sm font-bold text-gray-900"><ShoppingBag size={18} className="text-primary" /> Tham khảo giá sàn TMĐT</h3><span className="text-[11px] font-medium italic text-gray-400">Cập nhật: {currentMonthYear}</span></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{product.shopeeOffers.length > 0 ? product.shopeeOffers.map((offer, i) => <Link key={i} href={offer.link} rel="nofollow noreferrer" target="_blank" className="group rounded-2xl border border-[var(--border)] bg-white p-3 transition-all hover:-translate-y-1 hover:shadow-md"><div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-[#EEE]"><Image src={offer.image} alt={offer.label} fill sizes="(max-width: 768px) 50vw, 150px" className="object-cover" /></div><div className="line-clamp-2 h-9 text-[11px] font-medium leading-tight text-gray-700">{offer.label}</div><div className="mt-2 flex items-center justify-between"><span className="text-xs font-bold text-[#EE4D2D]">{offer.price}</span><MoveRight size={12} className="text-gray-300 transition group-hover:text-primary" /></div></Link>) : <div className="col-span-3 py-8 text-center"><p className="text-xs italic text-gray-400">Đang cập nhật giá từ các shop uy tín trên Shopee...</p><Link href="https://zalo.me/0961226169" className="mt-3 inline-block text-[11px] font-bold text-primary underline">Hỏi giá trực tiếp qua Zalo →</Link></div>}</div></section>

            {relatedProducts}
            {relatedArticles && <section className="mt-10 border-t border-[var(--border)] pt-10"><h2 className="mb-6 text-2xl font-serif">Bài viết liên quan</h2>{relatedArticles}</section>}
          </div>
        </div>
      </div>

      {/* Sticky CTA — mobile only */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[var(--border)] bg-white/95 backdrop-blur-sm p-3 lg:hidden">
        <div className="flex items-center gap-3 max-w-[600px] mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-gray-500">Giá tham khảo</div>
            <div className="text-lg font-serif font-bold text-gray-950 truncate">{priceLabel(product.basePrice)}</div>
          </div>
          <Link href="https://zalo.me/0961226169" rel="nofollow" target="_blank"
            className="flex-shrink-0 rounded-full bg-[#0068FF] px-6 py-3 text-sm font-bold text-white">
            Tư vấn Zalo
          </Link>
        </div>
      </div>
    </>
  );
}
