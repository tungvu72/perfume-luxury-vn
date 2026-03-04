"use client";

import { Perfume, GalleryImage } from "@/types";
import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, MessageSquare, Droplet, MoveRight, Sun, Moon, CloudSun, Snowflake, Leaf, Flower2, Clock, Wind, ShieldCheck, Scale, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useCompare } from "@/components/CompareSystem";

// Helper: lấy URL từ string hoặc GalleryImage
function getImageUrl(img: string | GalleryImage): string {
    return typeof img === 'string' ? img : img.url;
}

function getImageSource(img: string | GalleryImage): string | undefined {
    return typeof img === 'string' ? undefined : img.source;
}

function getImageCaption(img: string | GalleryImage): string | undefined {
    return typeof img === 'string' ? undefined : img.caption;
}

const SOURCE_LABELS: Record<string, string> = {
    fragram: '📸 Fragram',
    community: '👥 Community',
    studio: '🏢 Studio',
    owner: '🙋 Chủ shop',
};

export default function ProductClient({ product, relatedProducts }: { product: Perfume, relatedProducts: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const { add, items } = useCompare();

    // Set initial size and mounted state on mount
    useEffect(() => {
        setMounted(true);
        if (product && product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[product.sizes.length - 1]);
        }
    }, [product]);

    const isComparing = useMemo(() => items.some(x => x.id === product.id), [items, product.id]);

    // Safety check for product
    if (!product) return null;

    // Gallery: Cover + Real Images
    const allImages = useMemo(() => [product.image, ...(product.images || [])].filter(Boolean), [product.image, product.images]);
    const [activeImage, setActiveImage] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Keyboard navigation cho lightbox
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!lightboxOpen) return;
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') setActiveImage(prev => Math.min(prev + 1, allImages.length - 1));
        if (e.key === 'ArrowLeft') setActiveImage(prev => Math.max(prev - 1, 0));
    }, [lightboxOpen, allImages.length]);

    const currentMonthYear = useMemo(() => {
        const now = new Date();
        return `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Lock body scroll khi lightbox mở
    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxOpen]);

    if (!mounted) return <div className="min-h-screen bg-white" />;

    return (
        <>
            {/* ═══ LIGHTBOX MODAL ═══ */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                    {/* Nút đóng */}
                    <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10" onClick={() => setLightboxOpen(false)}>
                        <X size={28} />
                    </button>

                    {/* Ảnh counter */}
                    <div className="absolute top-4 left-4 text-white/60 text-sm font-medium">
                        {activeImage + 1} / {allImages.length}
                    </div>

                    {/* Nút trước */}
                    {activeImage > 0 && (
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                            onClick={(e) => { e.stopPropagation(); setActiveImage(prev => prev - 1); }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    {/* Ảnh chính lightbox */}
                    <div className="relative w-[90vw] h-[85vh] max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={getImageUrl(allImages[activeImage])}
                            alt={`${product.name} - Ảnh ${activeImage + 1}`}
                            fill
                            sizes="90vw"
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Nút sau */}
                    {activeImage < allImages.length - 1 && (
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                            onClick={(e) => { e.stopPropagation(); setActiveImage(prev => prev + 1); }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}

                    {/* Caption & Source */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                        {activeImage === 0 ? (
                            <span className="text-white/50 text-xs font-semibold">Ảnh bìa chính thức</span>
                        ) : (
                            <>
                                {getImageSource(allImages[activeImage]) && (
                                    <span className="inline-block bg-white/15 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm mb-1">
                                        {SOURCE_LABELS[getImageSource(allImages[activeImage])!] || '📸 Ảnh thực tế'}
                                    </span>
                                )}
                                {getImageCaption(allImages[activeImage]) && (
                                    <div className="text-white/60 text-xs mt-1">{getImageCaption(allImages[activeImage])}</div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Thumbnail strip dưới đáy */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[90vw] overflow-x-auto pb-1">
                        {allImages.map((img, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                                className={`relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === i ? 'border-white shadow-lg' : 'border-transparent opacity-40 hover:opacity-80'}`}
                            >
                                <Image src={getImageUrl(img)} alt={`Thumb ${i}`} fill sizes="48px" className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 opacity-0 animate-in fade-in duration-500 fill-mode-forwards" style={{ opacity: 1 }}>
                {/* ẢNH SẢN PHẨM + GALLERY */}
                <div className="md:sticky md:top-24 h-fit">
                    <div
                        className="aspect-[4/5] bg-[#F4F4F4] rounded-md overflow-hidden flex items-center justify-center relative group cursor-zoom-in"
                        onClick={() => setLightboxOpen(true)}
                    >
                        <Image
                            src={getImageUrl(allImages[activeImage])}
                            alt={`${product.name} - ${activeImage === 0 ? 'Ảnh chính' : `Ảnh thực tế ${activeImage}`}`}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                        />
                        {activeImage > 0 && (
                            <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                                {SOURCE_LABELS[getImageSource(allImages[activeImage]) || 'fragram'] || '📸 Ảnh thực tế'}
                            </span>
                        )}
                        {/* Zoom hint */}
                        <div className="absolute bottom-3 right-3 bg-black/40 text-white/70 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                            <ZoomIn size={14} />
                        </div>
                    </div>
                    {/* THUMBNAIL NAV */}
                    {allImages.length > 1 && (
                        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                            {allImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === i ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <Image src={getImageUrl(img)} alt={`Thumb ${i}`} fill sizes="64px" className="object-cover" />
                                    {i === 0 && <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[7px] font-bold text-center py-0.5">BÌA</span>}
                                    {i > 0 && getImageSource(img) && (
                                        <span className="absolute top-0 left-0 right-0 bg-primary/80 text-white text-[6px] font-bold text-center py-0.5">
                                            {getImageSource(img) === 'fragram' ? 'THỰC TẾ' : getImageSource(img) === 'community' ? 'CỘNG ĐỒNG' : getImageSource(img) === 'owner' ? 'SHOP' : 'STUDIO'}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>


                {/* NỘI DUNG CHI TIẾT */}
                <div className="flex flex-col">
                    {/* Thương hiệu + Tên */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-primary tracking-[3px] uppercase">{product.brand}</div>
                        <ShareButton />
                    </div>
                    <h1 className="text-4xl md:text-[52px] font-serif leading-[1.1] mb-2">
                        {product.name}
                    </h1>
                    <div className="text-base text-gray-400 mb-3">{product.subName}</div>



                    {/* BẢNG ĐIỂM TỔNG QUÁT */}
                    <div className="flex items-center gap-6 mb-8 p-5 bg-[#F9F9F9] rounded-xl">
                        <div className="w-[90px] h-[90px] border-2 border-primary rounded-full flex flex-col items-center justify-center flex-shrink-0 hover:scale-105 transition-transform cursor-default">
                            <span className="text-3xl font-bold text-primary font-serif leading-none">{product.score.total}</span>
                            <span className="text-[9px] uppercase tracking-wider text-gray-400 mt-1">/ 10</span>
                        </div>
                        <div className="border-l border-[var(--border)] pl-5">
                            <b className="block text-sm mb-1 text-primary">{product.verdictShort}</b>
                            <span className="text-sm text-gray-500 leading-relaxed">{product.verdict}</span>
                        </div>
                    </div>

                    {/* ĐIỂM CHI TIẾT */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {[
                            { label: "Mùi hương", desc: "Chất mùi tổng thể", val: product.score.scent },
                            { label: "Nét riêng", desc: "Khó tìm thấy mùi tương tự", val: product.score.uniqueness },
                            { label: "Sức hút", desc: "Người khác khen ngợi", val: product.score.compliments },
                            { label: "Đáng tiền", desc: "So với giá bán", val: product.score.value }
                        ].map((s, i) => (
                            <div key={i} className="text-center p-3 bg-white border border-[var(--border)] rounded-lg hover:border-primary/50 transition-colors cursor-default group">
                                <div className="text-lg font-serif font-bold mb-0.5 group-hover:text-primary transition-colors">{s.val}<span className="text-gray-300 text-sm">/10</span></div>
                                <div className="text-[10px] font-bold text-gray-600">{s.label}</div>
                                <div className="text-[8px] text-gray-400 mt-0.5">{s.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* PHONG CÁCH & HOÀN CẢNH */}
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Phù hợp khi</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.vibes.map((vibe, i) => (
                                <span key={i} className="px-4 py-2 bg-[#F2EEED] rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-primary/10 transition-colors cursor-default">
                                    {vibe.icon} {vibe.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {(product.longevity || product.sillage) && (
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {product.longevity && (
                                <div className="p-4 bg-[#F9F9F9] rounded-lg">
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-600 mb-3">
                                        <Clock size={14} className="text-primary" /> Độ lưu hương
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                            <div key={i} className={`flex-1 h-3 rounded-sm ${i < product.longevity! ? 'bg-primary' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                    <div className="text-[10px] text-gray-400 mt-2">
                                        {product.longevity! >= 8 ? "Rất lâu (8-12+ tiếng)" : product.longevity! >= 6 ? "Khá (5-8 tiếng)" : "Trung bình (3-5 tiếng)"}
                                    </div>
                                </div>
                            )}
                            {product.sillage && (
                                <div className="p-4 bg-[#F9F9F9] rounded-lg">
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-600 mb-3">
                                        <Wind size={14} className="text-primary" /> Độ tỏa hương
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                            <div key={i} className={`flex-1 h-3 rounded-sm ${i < product.sillage! ? 'bg-primary' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                    <div className="text-[10px] text-gray-400 mt-2">
                                        {product.sillage! >= 8 ? "Toả rất xa (>2m)" : product.sillage! >= 6 ? "Tỏa tốt (~1m)" : "Gần người (~50cm)"}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* MÙA & THỜI GIAN (FRAGRANTICA STYLE) */}
                    {product.seasons && (
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Xịt khi nào là đẹp nhất?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {/* MÙA */}
                                <div className="p-4 bg-[#F9F9F9] rounded-lg">
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Theo mùa</div>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Xuân", icon: <Flower2 size={12} />, val: product.seasons.spring },
                                            { label: "Hạ", icon: <Sun size={12} />, val: product.seasons.summer },
                                            { label: "Thu", icon: <Leaf size={12} />, val: product.seasons.fall },
                                            { label: "Đông", icon: <Snowflake size={12} />, val: product.seasons.winter }
                                        ].map((s, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="flex items-center gap-1 w-14 text-[10px] font-semibold text-gray-500">{s.icon} {s.label}</div>
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.val}%` }} />
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{s.val}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* NGÀY / ĐÊM */}
                                {product.dayNight && (
                                    <div className="p-4 bg-[#F9F9F9] rounded-lg">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Ngày hay Đêm</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-1 w-14 text-[10px] font-semibold text-gray-500"><CloudSun size={12} /> Ngày</div>
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${product.dayNight.day}%` }} />
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{product.dayNight.day}%</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-1 w-14 text-[10px] font-semibold text-gray-500"><Moon size={12} /> Đêm</div>
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${product.dayNight.night}%` }} />
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{product.dayNight.night}%</span>
                                            </div>
                                        </div>
                                        <div className="text-[10px] text-gray-400 mt-3 italic">
                                            {product.dayNight.day > product.dayNight.night ? "→ Hợp xịt ban ngày hơn" : product.dayNight.night > product.dayNight.day ? "→ Hợp xịt buổi tối hơn" : "→ Dùng được cả ngày lẫn đêm"}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* CHỌN DUNG TÍCH */}
                    <div className="mb-8">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Phân loại</div>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((s) => {
                                const isDecant = s.toLowerCase().includes("chiết");
                                // Chỉ lấy số (ví dụ 10ml, 60ml) để hiển thị dòng trên cho sạch
                                const capacityLabel = s.split(" ")[0] || s;
                                return (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSize(s)}
                                        className={`px-4 py-3 border text-xs font-bold transition-all active:scale-95 rounded-lg flex flex-col items-center min-w-[100px] ${selectedSize === s ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-[var(--border)] hover:border-primary'}`}
                                    >
                                        <span>{capacityLabel}</span>
                                        <span className={`text-[8px] mt-0.5 ${selectedSize === s ? 'text-white/80' : 'text-gray-400'}`}>
                                            {isDecant ? "CHIẾT" : "FULLBOX"}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* GIÁ */}
                    {product.basePrice > 0 && (
                        <div className="text-3xl font-serif mb-6">{product.basePrice.toLocaleString()} VNĐ</div>
                    )}

                    {/* NÚT HÀNH ĐỘNG */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        <Link href="https://zalo.me/0961226169" rel="nofollow" target="_blank" className="flex items-center justify-center gap-2 bg-[#0068FF] text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-blue-100">
                            <MessageSquare size={18} /> Nhận tư vấn qua Zalo
                        </Link>
                        <button
                            onClick={() => add(product)}
                            className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${isComparing ? 'bg-primary text-white border-primary shadow-lg shadow-orange-50' : 'border-2 border-gray-100 text-gray-500 hover:border-primary hover:text-primary'}`}
                        >
                            <Scale size={18} /> {isComparing ? 'Đã thêm vào so sánh' : 'Thêm vào so sánh'}
                        </button>
                    </div>

                    {/* ===== CÁC TẦNG HƯƠNG ===== */}
                    <section className="border-t border-[var(--border)] pt-12 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Droplet size={20} />
                            </div>
                            <h2 className="text-3xl font-serif">Khám phá các tầng hương</h2>
                        </div>

                        <div className="relative space-y-10 pl-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent">
                            {/* Tầng đầu */}
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary z-10" />
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="min-w-[120px]">
                                        <div className="text-[10px] font-bold text-primary uppercase tracking-[2px] mb-1">Hương đầu</div>
                                        <div className="text-[9px] text-gray-400 italic font-medium">Bay sau 15-30 phút</div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.topNotes.map((n, i) => (
                                            <Link key={i} href={`/bang-xep-hang?note=${encodeURIComponent(n.name)}`}
                                                className="px-4 py-2 bg-[#FFF8E7] border border-[#F5E6C4] text-xs font-semibold rounded-lg hover:border-primary transition-all">
                                                {n.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tầng giữa */}
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-rose-400 z-10" />
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="min-w-[120px]">
                                        <div className="text-[10px] font-bold text-rose-500 uppercase tracking-[2px] mb-1">Hương giữa</div>
                                        <div className="text-[9px] text-gray-400 italic font-medium">Kéo dài 3-5 tiếng</div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.middleNotes.map((n, i) => (
                                            <Link key={i} href={`/bang-xep-hang?note=${encodeURIComponent(n.name)}`}
                                                className="px-4 py-2 bg-[#FEF0F0] border border-[#F5D5D5] text-xs font-semibold rounded-lg hover:border-rose-400 transition-all">
                                                {n.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tầng cuối */}
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-gray-400 z-10" />
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="min-w-[120px]">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[2px] mb-1">Hương cuối</div>
                                        <div className="text-[9px] text-gray-400 italic font-medium">Bám 6-12+ tiếng</div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.baseNotes.map((n, i) => (
                                            <Link key={i} href={`/bang-xep-hang?note=${encodeURIComponent(n.name)}`}
                                                className="px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-semibold rounded-lg hover:border-gray-400 transition-all">
                                                {n.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ===== THANH NỐT HƯƠNG (ACCORDS) ===== */}
                    <section className="mb-10">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Nhóm hương chính</h3>
                        <div className="space-y-3">
                            {product.accords.map((accord, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-24 text-xs font-semibold text-gray-600">{accord.name}</div>
                                    <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${accord.value}%`, backgroundColor: accord.color }}
                                        />
                                    </div>
                                    <div className="w-10 text-xs font-bold text-gray-400 text-right">{accord.value}%</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ===== BÀI VIẾT CHI TIẾT ===== */}
                    {product.article && (
                        <section className="border-t border-[var(--border)] pt-10 mb-10">
                            <h2 className="text-2xl font-serif mb-8 text-gray-900">📝 Đánh giá chuyên sâu {product.name}</h2>
                            <div className="prose prose-sm max-w-none text-gray-900 leading-relaxed space-y-6">
                                {(() => {
                                    let linkInserted = false;
                                    return product.article.split('\n\n').map((para, i) => {
                                        // 1. Xử lý Heading (###)
                                        if (para.startsWith('###')) {
                                            return <h3 key={i} className="text-xl md:text-2xl font-serif text-gray-900 mt-10 mb-5">{para.replace('###', '').trim()}</h3>;
                                        }

                                        // 2. Xử lý Bold (**)
                                        let content: any = para;
                                        const boldParts = para.split(/(\*\*.*?\*\*)/g);
                                        content = boldParts.map((part, idx) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={idx} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });

                                        // 3. Xử lý Internal Link (Chỉ 1 lần duy nhất)
                                        if (!linkInserted) {
                                            const searchName = product.name;
                                            const regex = new RegExp(`(${searchName})`, 'i');
                                            const match = para.match(regex);

                                            if (match) {
                                                linkInserted = true;
                                                // Chia nội dung đã xử lý bold thành mảng để chèn link
                                                return (
                                                    <p key={i} className="mb-6 text-[16px] md:text-base leading-[1.75] text-gray-900">
                                                        {content.map((cPart: any, cIdx: number) => {
                                                            if (typeof cPart === 'string') {
                                                                const subParts = cPart.split(regex);
                                                                let linked = false;
                                                                return subParts.map((sp, sIdx) => {
                                                                    if (sp.toLowerCase() === searchName.toLowerCase() && !linked) {
                                                                        linked = true;
                                                                        return <Link key={sIdx} href={`/product/${product.id}`} className="text-primary font-bold border-b border-primary/30 hover:border-primary transition-colors">{sp}</Link>;
                                                                    }
                                                                    return sp;
                                                                });
                                                            }
                                                            return cPart;
                                                        })}
                                                    </p>
                                                );
                                            }
                                        }

                                        return <p key={i} className="mb-6 text-[16px] md:text-base leading-[1.75] text-gray-900">{content}</p>;
                                    });
                                })()}
                            </div>
                        </section>
                    )}

                    {/* ===== GIÁ SHOPEE ===== */}
                    <section className="bg-[#FAFAFA] p-6 rounded-xl border border-[var(--border)]">
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="flex items-center gap-2 font-bold text-sm">
                                <ShoppingBag size={18} className="text-primary" /> Tham khảo giá sàn TMĐT
                            </h3>
                            <span className="text-[10px] text-gray-400 font-semibold italic">Cập nhật: {currentMonthYear}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {product.shopeeOffers.length > 0 ? product.shopeeOffers.map((offer, i) => (
                                <Link key={i} href={offer.link} rel="nofollow noreferrer" target="_blank" className="bg-white p-2.5 border border-[var(--border)] rounded-lg hover:shadow-md hover:-translate-y-1 transition-all group">
                                    <div className="aspect-square bg-[#EEE] rounded-md mb-2 overflow-hidden relative">
                                        <Image
                                            src={offer.image}
                                            alt={offer.label}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 150px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-[10px] font-medium leading-tight mb-2 h-8 overflow-hidden line-clamp-2">{offer.label}</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-[#EE4D2D]">{offer.price}</span>
                                        <MoveRight size={10} className="text-gray-300" />
                                    </div>
                                </Link>
                            )) : (
                                <div className="col-span-3 text-center py-8">
                                    <p className="text-xs text-gray-400 italic">Đang cập nhật giá từ các shop uy tín trên Shopee...</p>
                                    <Link href="https://zalo.me/0961226169" className="inline-block mt-3 text-[10px] font-bold text-primary underline">
                                        Hỏi giá trực tiếp qua Zalo →
                                    </Link>
                                </div>
                            )}
                        </div>
                    </section>

                    {relatedProducts}

                </div>
            </div>
        </>
    );
}
