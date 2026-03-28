"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SlidersHorizontal, X, ArrowUpDown, Scale, ChevronDown, RotateCcw } from "lucide-react";
import { useCompare } from "@/components/CompareSystem";
import { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";

type SeasonKey = 'spring' | 'summer' | 'fall' | 'winter';
type SortOption = 'score' | 'price-asc' | 'price-desc' | 'longevity' | 'sillage' | 'compliments';

function CompareButton({ product }: { product: Perfume }) {
    const { add, items } = useCompare();
    const isAdded = items.some(x => x.id === product.id);
    return (
        <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); add(product); }}
            className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isAdded ? 'bg-primary text-white' : 'bg-white text-gray-400 border border-gray-200 opacity-0 group-hover/card:opacity-100 hover:text-primary hover:border-primary'}`}
            title="So sánh"
        >
            <Scale size={13} />
        </button>
    );
}

export default function RankingClient({ initialProducts }: { initialProducts: Perfume[] }) {
    const searchParams = useSearchParams();
    const [genderFilter, setGenderFilter] = useState<string[]>([]);
    const [seasonFilter, setSeasonFilter] = useState<SeasonKey[]>([]);
    const [longevityFilter, setLongevityFilter] = useState<string>("");
    const [sillageFilter, setSillageFilter] = useState<string>("");
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [tagFilter, setTagFilter] = useState<string>("");
    const [brandFilter, setBrandFilter] = useState<string[]>([]);
    const [noteFilter, setNoteFilter] = useState<string>("");
    const [sortBy, setSortBy] = useState<SortOption>("score");
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [showAllBrands, setShowAllBrands] = useState(false);

    // Đọc note param từ URL
    useEffect(() => {
        const note = searchParams.get('note');
        if (note) setNoteFilter(note);
        const gender = searchParams.get('gender');
        if (gender) setGenderFilter([gender]);
    }, [searchParams]);

    // Danh sách thương hiệu unique
    const allBrands = useMemo(() => Array.from(new Set(initialProducts.map(p => p.brand))).sort(), [initialProducts]);

    const popularTags = useMemo(() => {
        const tagCount: Record<string, number> = {};
        initialProducts.forEach(p => p.tags?.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
        return Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([tag]) => tag);
    }, [initialProducts]);

    const toggleGender = (g: string) => setGenderFilter(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
    const toggleSeason = (s: SeasonKey) => setSeasonFilter(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
    const toggleBrand = (b: string) => setBrandFilter(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

    const [visibleCount, setVisibleCount] = useState(20);

    const filteredProducts = useMemo(() => {
        // ... (existing filtering logic)
        const filtered = initialProducts.filter(p => {
            if (genderFilter.length > 0 && !genderFilter.includes(p.gender)) return false;
            if (seasonFilter.length > 0 && p.seasons) {
                const hasSeason = seasonFilter.some(s => p.seasons![s] >= 70);
                if (!hasSeason) return false;
            }
            if (longevityFilter) {
                const lon = p.longevity || 0;
                if (longevityFilter === "high" && lon < 8) return false;
                if (longevityFilter === "mid" && (lon < 6 || lon >= 8)) return false;
                if (longevityFilter === "low" && lon >= 6) return false;
            }
            if (sillageFilter) {
                const sil = p.sillage || 0;
                if (sillageFilter === "strong" && sil < 8) return false;
                if (sillageFilter === "moderate" && (sil < 6 || sil >= 8)) return false;
                if (sillageFilter === "intimate" && sil >= 6) return false;
            }
            if (priceFilter) {
                const price = p.basePrice || 0;
                if (priceFilter === "budget" && price > 2500000) return false;
                if (priceFilter === "mid" && (price <= 2500000 || price > 5000000)) return false;
                if (priceFilter === "premium" && (price <= 5000000 || price > 8000000)) return false;
                if (priceFilter === "luxury" && price <= 8000000) return false;
            }
            if (tagFilter && (!p.tags || !p.tags.includes(tagFilter))) return false;
            if (brandFilter.length > 0 && !brandFilter.includes(p.brand)) return false;
            if (noteFilter) {
                const allNotes = [...p.topNotes, ...p.middleNotes, ...p.baseNotes].map(n => n.name);
                if (!allNotes.some(n => n.includes(noteFilter))) return false;
            }
            return true;
        });
        // Sort
        let sorted = [];
        switch (sortBy) {
            case "price-asc": sorted = [...filtered].sort((a, b) => a.basePrice - b.basePrice); break;
            case "price-desc": sorted = [...filtered].sort((a, b) => b.basePrice - a.basePrice); break;
            case "longevity": sorted = [...filtered].sort((a, b) => (b.longevity || 0) - (a.longevity || 0)); break;
            case "sillage": sorted = [...filtered].sort((a, b) => (b.sillage || 0) - (a.sillage || 0)); break;
            case "compliments": sorted = [...filtered].sort((a, b) => b.score.compliments - a.score.compliments); break;
            default: sorted = [...filtered].sort((a, b) => b.score.total - a.score.total); break;
        }
        return sorted;
    }, [initialProducts, genderFilter, seasonFilter, longevityFilter, sillageFilter, priceFilter, tagFilter, brandFilter, noteFilter, sortBy]);

    // Reset visible count when filter changes
    useEffect(() => {
        setVisibleCount(20);
    }, [genderFilter, seasonFilter, longevityFilter, sillageFilter, priceFilter, tagFilter, brandFilter, noteFilter, sortBy]);

    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const activeFilterCount = genderFilter.length + seasonFilter.length + (longevityFilter ? 1 : 0) + (sillageFilter ? 1 : 0) + (priceFilter ? 1 : 0) + (tagFilter ? 1 : 0) + brandFilter.length + (noteFilter ? 1 : 0);

    const clearAll = () => {
        setGenderFilter([]); setSeasonFilter([]); setLongevityFilter(""); setSillageFilter("");
        setPriceFilter(""); setTagFilter(""); setBrandFilter([]); setNoteFilter(""); setSortBy("score");
        setVisibleCount(20);
    };

    const displayedBrands = showAllBrands ? allBrands : allBrands.slice(0, 10);

    const FilterPanel = () => (
        <div className="space-y-6">
            {/* Gender */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Giới tính</h4>
                <div className="flex flex-wrap gap-2">
                    {[{ id: "nam", label: "Nam 🤵" }, { id: "nu", label: "Nữ 💃" }, { id: "unisex", label: "Unisex ✨" }].map(g => (
                        <button key={g.id} onClick={() => toggleGender(g.id)}
                            className={`px-4 py-2.5 md:py-2 rounded-full text-[13px] md:text-xs font-semibold transition-all ${genderFilter.includes(g.id) ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {g.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Season */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Phù hợp mùa</h4>
                <div className="flex flex-wrap gap-2">
                    {([{ id: "spring" as SeasonKey, label: "Xuân 🌸" }, { id: "summer" as SeasonKey, label: "Hạ ☀️" }, { id: "fall" as SeasonKey, label: "Thu 🍂" }, { id: "winter" as SeasonKey, label: "Đông ❄️" }]).map(s => (
                        <button key={s.id} onClick={() => toggleSeason(s.id)}
                            className={`px-4 py-2.5 md:py-2 rounded-full text-[13px] md:text-xs font-semibold transition-all ${seasonFilter.includes(s.id) ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Longevity */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">⏱️ Độ lưu hương</h4>
                <div className="flex flex-wrap gap-2">
                    {[{ id: "high", label: "Rất lâu (8h+)" }, { id: "mid", label: "Khá (6-8h)" }, { id: "low", label: "Trung bình (<6h)" }].map(l => (
                        <button key={l.id} onClick={() => setLongevityFilter(longevityFilter === l.id ? "" : l.id)}
                            className={`px-4 py-2.5 md:py-2 rounded-full text-[13px] md:text-xs font-semibold transition-all ${longevityFilter === l.id ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {l.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sillage */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">💨 Độ tỏa hương</h4>
                <div className="flex flex-wrap gap-2">
                    {[{ id: "strong", label: "Mạnh (8+)" }, { id: "moderate", label: "Vừa (6-8)" }, { id: "intimate", label: "Nhẹ (<6)" }].map(s => (
                        <button key={s.id} onClick={() => setSillageFilter(sillageFilter === s.id ? "" : s.id)}
                            className={`px-4 py-2.5 md:py-2 rounded-full text-[13px] md:text-xs font-semibold transition-all ${sillageFilter === s.id ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">💰 Tầm giá</h4>
                <div className="flex flex-wrap gap-2">
                    {[
                        { id: "budget", label: "Dưới 2.5tr" },
                        { id: "mid", label: "2.5 - 5tr" },
                        { id: "premium", label: "5 - 8tr" },
                        { id: "luxury", label: "Trên 8tr" },
                    ].map(p => (
                        <button key={p.id} onClick={() => setPriceFilter(priceFilter === p.id ? "" : p.id)}
                            className={`px-4 py-2.5 md:py-2 rounded-full text-[13px] md:text-xs font-semibold transition-all ${priceFilter === p.id ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brand */}
            <div>
                <h4 className="text-[11px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Thương hiệu</h4>
                <div className="flex flex-wrap gap-2">
                    {displayedBrands.map(b => (
                        <button key={b} onClick={() => toggleBrand(b)}
                            className={`px-3 py-1.5 rounded-full text-[11px] md:text-[10px] font-semibold transition-all ${brandFilter.includes(b) ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {b}
                        </button>
                    ))}
                </div>
                {allBrands.length > 10 && (
                    <button onClick={() => setShowAllBrands(!showAllBrands)} className="flex items-center gap-1 text-[11px] md:text-[10px] text-primary font-semibold mt-2 hover:underline">
                        <ChevronDown size={12} className={`transition-transform ${showAllBrands ? 'rotate-180' : ''}`} />
                        {showAllBrands ? 'Thu gọn' : `Xem thêm ${allBrands.length - 10} thương hiệu`}
                    </button>
                )}
            </div>

            {activeFilterCount > 0 && (
                <button onClick={clearAll} className="flex items-center gap-2 text-[13px] md:text-xs text-red-500 font-semibold hover:underline">
                    <RotateCcw size={14} />
                    Xoá tất cả bộ lọc ({activeFilterCount})
                </button>
            )}
        </div>
    );

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-5 py-4 md:py-8 flex gap-10 overflow-x-hidden">
            {/* MOBILE FILTER TOGGLE */}
            <div className="md:hidden sticky top-0 z-40 bg-white border-b border-[var(--border)] px-4 py-3 -mx-4 mb-3">
                <div className="flex items-center justify-between">
                    <button onClick={() => setShowMobileFilter(!showMobileFilter)}
                        className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider">
                        <SlidersHorizontal size={16} /> Bộ lọc
                        {activeFilterCount > 0 && <span className="bg-primary text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center">{activeFilterCount}</span>}
                    </button>
                    <span className="text-[12px] text-gray-400 font-medium">{filteredProducts.length} kết quả</span>
                </div>
                {showMobileFilter && (
                    <div className="mt-3 pb-2 border-t border-gray-100 pt-3 max-h-[60vh] overflow-y-auto -webkit-overflow-scrolling-touch">
                        <FilterPanel />
                    </div>
                )}
            </div>

            {/* SIDEBAR - Desktop */}
            <aside className="hidden md:block w-[260px] flex-shrink-0">
                <div className="sticky top-[140px]">
                    <div className="flex items-center gap-2 mb-6">
                        <SlidersHorizontal size={16} />
                        <span className="text-sm font-bold uppercase tracking-wider">Bộ lọc</span>
                    </div>
                    <FilterPanel />
                </div>
            </aside>

            {/* PRODUCT LIST */}
            <div className="flex-1 min-w-0 overflow-hidden">
                {/* QUICK TAG ROW */}
                <div className="flex overflow-x-auto md:flex-wrap gap-2 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-100 scrollbar-hide">
                    {popularTags.map(tag => (
                        <button key={tag} onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
                            className={`text-[12px] md:text-[10px] font-bold px-3.5 md:px-3 py-2 md:py-1.5 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${tagFilter === tag
                                ? 'bg-primary text-white'
                                : 'bg-gray-50 text-gray-500 hover:bg-primary/10 hover:text-primary'
                                }`}>
                            #{tag}
                        </button>
                    ))}
                </div>

                {/* Active filter indicators */}
                {(noteFilter || activeFilterCount > 0) && (
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {noteFilter && (
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200/50 rounded-lg">
                                <span className="text-[10px] font-bold text-amber-700">🌿 Nốt hương: {noteFilter}</span>
                                <button onClick={() => setNoteFilter("")}><X size={12} className="text-amber-400 hover:text-amber-600" /></button>
                            </div>
                        )}
                        {priceFilter && (
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200/50 rounded-lg">
                                <span className="text-[10px] font-bold text-green-700">💰 {priceFilter === "budget" ? "Dưới 2.5tr" : priceFilter === "mid" ? "2.5 - 5tr" : priceFilter === "premium" ? "5 - 8tr" : "Trên 8tr"}</span>
                                <button onClick={() => setPriceFilter("")}><X size={12} className="text-green-400 hover:text-green-600" /></button>
                            </div>
                        )}
                        {sillageFilter && (
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200/50 rounded-lg">
                                <span className="text-[10px] font-bold text-blue-700">💨 {sillageFilter === "strong" ? "Tỏa mạnh" : sillageFilter === "moderate" ? "Tỏa vừa" : "Tỏa nhẹ"}</span>
                                <button onClick={() => setSillageFilter("")}><X size={12} className="text-blue-400 hover:text-blue-600" /></button>
                            </div>
                        )}
                    </div>
                )}

                <div className="mb-4 md:mb-6 flex flex-col gap-2 md:gap-3 rounded-2xl md:rounded-[24px] border border-[#eadfce] bg-white p-3 md:p-4 shadow-[0_12px_35px_rgba(27,18,13,0.03)] md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-[12px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Kết quả hiện tại</div>
                        <span className="mt-0.5 block text-[13px] md:text-sm text-gray-500">{filteredProducts.length} lựa chọn phù hợp với bộ lọc đang chọn</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ArrowUpDown size={14} className="text-gray-400" />
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="text-[13px] md:text-xs font-semibold bg-transparent outline-none cursor-pointer text-gray-600">
                            <option value="score">Điểm cao nhất</option>
                            <option value="compliments">Nịnh mũi nhất</option>
                            <option value="longevity">Bền nhất</option>
                            <option value="sillage">Tỏa mạnh nhất</option>
                            <option value="price-asc">Giá: Thấp → Cao</option>
                            <option value="price-desc">Giá: Cao → Thấp</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                    {displayedProducts.map((product, i) => (
                        <div key={product.id} className="relative group/card">
                            <Link href={getProductUrl(product)}
                                className="flex items-center gap-2.5 md:gap-5 rounded-2xl border border-[#eae5dd] bg-white p-3 md:p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group">
                                {/* Rank number */}
                                <div className="w-6 md:w-7 text-center text-[14px] md:text-lg font-bold text-gray-300 group-hover:text-primary/40 transition-colors tabular-nums flex-shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                {/* Image frame */}
                                <div className="w-[64px] h-[64px] md:w-[110px] md:h-[110px] flex-shrink-0 rounded-xl bg-[#f7f5f2] overflow-hidden relative"
                                     style={{ padding: '4px' }}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 64px, 110px"
                                        className="object-contain mix-blend-multiply p-1 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                {/* Text block */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 max-w-full">
                                        <span className="text-[11px] md:text-[10px] font-bold text-primary tracking-[1px] md:tracking-[1.5px] uppercase truncate max-w-[140px] md:max-w-none">{product.brand}</span>
                                        <span className="hidden md:inline text-[9px] px-1.5 py-0.5 bg-gray-100 rounded text-gray-400 font-semibold flex-shrink-0">{product.gender === 'nam' ? '♂ Nam' : product.gender === 'nu' ? '♀ Nữ' : '⚡ Uni'}</span>
                                    </div>
                                    <h3 className="text-[14px] md:text-[17px] font-semibold leading-snug text-[#1a1a1a] group-hover:text-primary transition-colors line-clamp-1 md:line-clamp-2">{product.name}</h3>
                                    <div className="text-[12px] md:text-[11px] text-gray-400 mt-0.5 md:mt-1 flex items-center gap-1.5 md:gap-2 flex-wrap">
                                        <span className="font-semibold text-primary md:hidden">{product.score.total}</span>
                                        <span className="font-medium text-gray-600">{product.basePrice.toLocaleString()}đ</span>
                                        {product.longevity && (
                                            <span>⏱ {product.longevity}h</span>
                                        )}
                                        {product.sillage && product.sillage >= 8 && (
                                            <span className="hidden md:inline">💨 Mạnh</span>
                                        )}
                                    </div>
                                </div>
                                {/* Score - desktop only */}
                                <div className="hidden md:flex flex-col items-center gap-0.5 flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center">
                                        <span className="text-lg font-bold text-primary">{product.score.total}</span>
                                    </div>
                                    <div className="text-[7px] text-gray-400 font-bold uppercase tracking-wider">Điểm</div>
                                </div>
                            </Link>
                            <CompareButton product={product} />
                        </div>
                    ))}

                    {/* SHOW MORE BUTTON */}
                    {visibleCount < filteredProducts.length && (
                        <div className="py-10 flex justify-center">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 20)}
                                className="group relative overflow-hidden bg-[#00A88F] text-white px-10 py-4 rounded-xl flex items-center gap-3 active:scale-95 transition-all shadow-xl shadow-[#00A88F]/20"
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative text-sm font-bold uppercase tracking-widest">
                                    Xem thêm lựa chọn
                                </span>
                            </button>
                        </div>
                    )}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16 border-2 border-dashed border-gray-100 rounded-2xl">
                            <div className="text-4xl mb-3">🔍</div>
                            <p className="text-gray-500 text-sm mb-2">Không tìm thấy kết quả phù hợp</p>
                            <p className="text-gray-400 text-xs mb-4">Thử điều chỉnh bộ lọc để xem thêm sản phẩm</p>
                            <button onClick={clearAll} className="text-xs text-white bg-primary px-4 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors">
                                Xoá bộ lọc & hiển thị tất cả
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
