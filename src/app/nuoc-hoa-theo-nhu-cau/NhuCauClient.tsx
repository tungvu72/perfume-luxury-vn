"use client";

import "./nhucau.css";
import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlidersHorizontal, X, Search, ChevronDown, ChevronUp, RotateCcw, Star } from "lucide-react";
import { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";

type SeasonLabel = "he" | "thu-dong" | "da-dung";
type SortOption = "score" | "year-desc" | "year-asc" | "longevity" | "name-asc";
type LongevityGroup = "under4" | "4to6" | "6to8" | "over8";

const LONGEVITY_GROUPS: { id: LongevityGroup; label: string; emoji: string; minScore: number; maxScore: number }[] = [
    { id: "under4", label: "Dưới 4 giờ", emoji: "🕐", minScore: 0, maxScore: 4 },
    { id: "4to6",   label: "4 – 6 giờ",  emoji: "🕓", minScore: 5, maxScore: 6 },
    { id: "6to8",   label: "6 – 8 giờ",  emoji: "🕖", minScore: 7, maxScore: 7 },
    { id: "over8",  label: "8 giờ trở lên", emoji: "🕙", minScore: 8, maxScore: 99 },
];

/* ═══════════════════════════════════════════
   SEASON DERIVE LOGIC
   seasons: { spring, summer, fall, winter } (0-100)
   - Hè: summer ≥ 60
   - Thu đông: fall ≥ 60 || winter ≥ 60
   - Đa dụng: cả hè và thu đông đều ≥ 50
   ═══════════════════════════════════════════ */
function getSeasonLabels(seasons?: { spring: number; summer: number; fall: number; winter: number }): SeasonLabel[] {
    if (!seasons) return [];
    const labels: SeasonLabel[] = [];
    const isSummer = seasons.summer >= 60 || seasons.spring >= 70;
    const isWinter = seasons.fall >= 60 || seasons.winter >= 60;
    if (isSummer && isWinter) {
        labels.push("da-dung");
    } else {
        if (isSummer) labels.push("he");
        if (isWinter) labels.push("thu-dong");
    }
    return labels;
}

/* ═══════════════════════════════════════════
   COLLAPSIBLE FILTER SECTION
   ═══════════════════════════════════════════ */
function FilterSection({ title, icon, children, defaultOpen = true }: {
    title: string; icon?: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="nhucau-filter-section">
            <button
                onClick={() => setOpen(!open)}
                className="nhucau-filter-header"
            >
                <span className="nhucau-filter-title">
                    {icon && <span className="nhucau-filter-icon">{icon}</span>}
                    {title}
                </span>
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {open && <div className="nhucau-filter-body">{children}</div>}
        </div>
    );
}

/* ═══════════════════════════════════════════
   SEARCHABLE CHECKBOX LIST
   ═══════════════════════════════════════════ */
function SearchableCheckboxList({ items, selected, onToggle, maxVisible = 6, searchPlaceholder = "Tìm kiếm..." }: {
    items: { label: string; count: number }[];
    selected: string[];
    onToggle: (item: string) => void;
    maxVisible?: number;
    searchPlaceholder?: string;
}) {
    const [search, setSearch] = useState("");
    const [showAll, setShowAll] = useState(false);

    const filtered = items.filter(i => i.label.toLowerCase().includes(search.toLowerCase()));
    const displayed = showAll ? filtered : filtered.slice(0, maxVisible);

    return (
        <div>
            {items.length > maxVisible && (
                <div className="nhucau-search-box">
                    <Search size={14} className="nhucau-search-icon" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="nhucau-search-input"
                    />
                </div>
            )}
            <div className="nhucau-checkbox-list">
                {displayed.map(item => (
                    <label key={item.label} className="nhucau-checkbox-item">
                        <input
                            type="checkbox"
                            checked={selected.includes(item.label)}
                            onChange={() => onToggle(item.label)}
                            className="nhucau-checkbox"
                        />
                        <span className="nhucau-checkbox-label">{item.label}</span>
                        <span className="nhucau-checkbox-count">{item.count}</span>
                    </label>
                ))}
            </div>
            {filtered.length > maxVisible && !search && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="nhucau-show-more"
                >
                    {showAll ? "Thu gọn" : `Xem thêm (${filtered.length - maxVisible})`}
                </button>
            )}
        </div>
    );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function NhuCauClient({ initialProducts }: { initialProducts: Perfume[] }) {
    const [genderFilter, setGenderFilter] = useState<string[]>([]);
    const [brandFilter, setBrandFilter] = useState<string[]>([]);
    const [seasonFilter, setSeasonFilter] = useState<SeasonLabel[]>([]);
    const [longevityFilter, setLongevityFilter] = useState<LongevityGroup[]>([]);
    const [noteFilter, setNoteFilter] = useState<string[]>([]);
    const [accordFilter, setAccordFilter] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>("score");
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [visibleCount, setVisibleCount] = useState(30);
    const [searchQuery, setSearchQuery] = useState("");

    // Derived data
    const brandCounts = useMemo(() => {
        const map: Record<string, number> = {};
        initialProducts.forEach(p => { map[p.brand] = (map[p.brand] || 0) + 1; });
        return Object.entries(map)
            .map(([label, count]) => ({ label, count }))
            .sort((a, b) => b.count - a.count);
    }, [initialProducts]);

    const noteCounts = useMemo(() => {
        const map: Record<string, number> = {};
        initialProducts.forEach(p => {
            [...p.topNotes, ...p.middleNotes, ...p.baseNotes].forEach(n => {
                map[n.name] = (map[n.name] || 0) + 1;
            });
        });
        return Object.entries(map)
            .map(([label, count]) => ({ label, count }))
            .sort((a, b) => b.count - a.count);
    }, [initialProducts]);

    const accordCounts = useMemo(() => {
        const map: Record<string, number> = {};
        initialProducts.forEach(p => {
            p.accords?.forEach(a => {
                map[a.name] = (map[a.name] || 0) + 1;
            });
        });
        return Object.entries(map)
            .map(([label, count]) => ({ label, count }))
            .sort((a, b) => b.count - a.count);
    }, [initialProducts]);

    // Gender counts
    const genderCounts = useMemo(() => {
        const map: Record<string, number> = { nam: 0, nu: 0, unisex: 0 };
        initialProducts.forEach(p => { map[p.gender] = (map[p.gender] || 0) + 1; });
        return map;
    }, [initialProducts]);

    // Longevity group counts
    const longevityCounts = useMemo(() => {
        const map: Record<string, number> = {};
        LONGEVITY_GROUPS.forEach(g => { map[g.id] = 0; });
        initialProducts.forEach(p => {
            const score = p.longevity || 0;
            for (const g of LONGEVITY_GROUPS) {
                if (score >= g.minScore && score <= g.maxScore) { map[g.id]++; break; }
            }
        });
        return map;
    }, [initialProducts]);

    // Toggles
    const toggleGender = (g: string) => setGenderFilter(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
    const toggleBrand = (b: string) => setBrandFilter(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
    const toggleSeason = (s: SeasonLabel) => setSeasonFilter(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
    const toggleLongevity = (g: LongevityGroup) => setLongevityFilter(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
    const toggleNote = (n: string) => setNoteFilter(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
    const toggleAccord = (a: string) => setAccordFilter(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        let filtered = initialProducts.filter(p => {
            // Search
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const match = p.name.toLowerCase().includes(q) ||
                    p.brand.toLowerCase().includes(q) ||
                    (p.subName && p.subName.toLowerCase().includes(q));
                if (!match) return false;
            }
            // Gender
            if (genderFilter.length > 0 && !genderFilter.includes(p.gender)) return false;
            // Brand
            if (brandFilter.length > 0 && !brandFilter.includes(p.brand)) return false;
            // Season
            if (seasonFilter.length > 0) {
                const labels = getSeasonLabels(p.seasons);
                const hasMatch = seasonFilter.some(s => labels.includes(s));
                if (!hasMatch) return false;
            }
            // Longevity
            if (longevityFilter.length > 0) {
                const score = p.longevity || 0;
                const matchesGroup = longevityFilter.some(gId => {
                    const group = LONGEVITY_GROUPS.find(g => g.id === gId);
                    return group && score >= group.minScore && score <= group.maxScore;
                });
                if (!matchesGroup) return false;
            }
            // Notes
            if (noteFilter.length > 0) {
                const allNotes = [...p.topNotes, ...p.middleNotes, ...p.baseNotes].map(n => n.name);
                const hasNote = noteFilter.some(n => allNotes.includes(n));
                if (!hasNote) return false;
            }
            // Accords
            if (accordFilter.length > 0) {
                const accNames = p.accords?.map(a => a.name) || [];
                const hasAccord = accordFilter.some(a => accNames.includes(a));
                if (!hasAccord) return false;
            }
            return true;
        });

        // Sort
        switch (sortBy) {
            case "year-desc": filtered = [...filtered].sort((a, b) => ((b as any).year || 0) - ((a as any).year || 0)); break;
            case "year-asc": filtered = [...filtered].sort((a, b) => ((a as any).year || 9999) - ((b as any).year || 9999)); break;
            case "longevity": filtered = [...filtered].sort((a, b) => (b.longevity || 0) - (a.longevity || 0)); break;
            case "name-asc": filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name)); break;
            default: filtered = [...filtered].sort((a, b) => b.score.total - a.score.total); break;
        }
        return filtered;
    }, [initialProducts, searchQuery, genderFilter, brandFilter, seasonFilter, longevityFilter, noteFilter, accordFilter, sortBy]);

    // Reset visible on filter change
    useEffect(() => { setVisibleCount(30); }, [genderFilter, brandFilter, seasonFilter, longevityFilter, noteFilter, accordFilter, sortBy, searchQuery]);

    const displayedProducts = filteredProducts.slice(0, visibleCount);
    const activeFilterCount = genderFilter.length + brandFilter.length + seasonFilter.length + longevityFilter.length + noteFilter.length + accordFilter.length;

    const clearAll = useCallback(() => {
        setGenderFilter([]); setBrandFilter([]); setSeasonFilter([]);
        setLongevityFilter([]); setNoteFilter([]); setAccordFilter([]);
        setSortBy("score"); setSearchQuery(""); setVisibleCount(30);
    }, []);

    // Lock body scroll when mobile filter is open
    useEffect(() => {
        if (showMobileFilter) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [showMobileFilter]);

    /* ─── FILTER PANEL (shared desktop/mobile) ─── */
    const FilterPanel = () => (
        <div className="nhucau-filters">
            {/* Gender */}
            <FilterSection title="Giới tính" icon="👤" defaultOpen={true}>
                <div className="nhucau-checkbox-list">
                    {[
                        { id: "nam", label: "Nam", emoji: "🤵" },
                        { id: "nu", label: "Nữ", emoji: "💃" },
                        { id: "unisex", label: "Unisex", emoji: "✨" },
                    ].map(g => (
                        <label key={g.id} className="nhucau-checkbox-item">
                            <input type="checkbox" checked={genderFilter.includes(g.id)} onChange={() => toggleGender(g.id)} className="nhucau-checkbox" />
                            <span className="nhucau-checkbox-label">{g.emoji} {g.label}</span>
                            <span className="nhucau-checkbox-count">{genderCounts[g.id] || 0}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Brand */}
            <FilterSection title="Thương hiệu" icon="🏷️" defaultOpen={true}>
                <SearchableCheckboxList
                    items={brandCounts}
                    selected={brandFilter}
                    onToggle={toggleBrand}
                    searchPlaceholder="Tìm thương hiệu..."
                />
            </FilterSection>

            {/* Season */}
            <FilterSection title="Mùa phù hợp" icon="🌤️" defaultOpen={true}>
                <div className="nhucau-checkbox-list">
                    {[
                        { id: "he" as SeasonLabel, label: "Hè ☀️" },
                        { id: "thu-dong" as SeasonLabel, label: "Thu đông 🍂" },
                        { id: "da-dung" as SeasonLabel, label: "Đa dụng 🔄" },
                    ].map(s => (
                        <label key={s.id} className="nhucau-checkbox-item">
                            <input type="checkbox" checked={seasonFilter.includes(s.id)} onChange={() => toggleSeason(s.id)} className="nhucau-checkbox" />
                            <span className="nhucau-checkbox-label">{s.label}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Longevity */}
            <FilterSection title="Độ lưu hương" icon="⏱️" defaultOpen={false}>
                <div className="nhucau-checkbox-list">
                    {LONGEVITY_GROUPS.map(g => (
                        <label key={g.id} className="nhucau-checkbox-item">
                            <input type="checkbox" checked={longevityFilter.includes(g.id)} onChange={() => toggleLongevity(g.id)} className="nhucau-checkbox" />
                            <span className="nhucau-checkbox-label">{g.emoji} {g.label}</span>
                            <span className="nhucau-checkbox-count">{longevityCounts[g.id] || 0}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Notes */}
            <FilterSection title="Note hương" icon="🌿" defaultOpen={false}>
                <SearchableCheckboxList
                    items={noteCounts}
                    selected={noteFilter}
                    onToggle={toggleNote}
                    searchPlaceholder="Tìm note hương..."
                />
            </FilterSection>

            {/* Accords / Nhóm mùi */}
            <FilterSection title="Nhóm mùi" icon="🎨" defaultOpen={false}>
                <SearchableCheckboxList
                    items={accordCounts}
                    selected={accordFilter}
                    onToggle={toggleAccord}
                    searchPlaceholder="Tìm nhóm mùi..."
                />
            </FilterSection>

            {/* Clear all */}
            {activeFilterCount > 0 && (
                <button onClick={clearAll} className="nhucau-clear-all">
                    <RotateCcw size={14} />
                    Xoá tất cả bộ lọc ({activeFilterCount})
                </button>
            )}
        </div>
    );

    return (
        <div className="nhucau-layout">
            {/* ═══ MOBILE FILTER BUTTON ═══ */}
            <div className="nhucau-mobile-bar">
                <div className="nhucau-mobile-search">
                    <Search size={16} className="nhucau-mobile-search-icon" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Tìm nước hoa..."
                        className="nhucau-mobile-search-input"
                    />
                </div>
                <button onClick={() => setShowMobileFilter(true)} className="nhucau-filter-btn">
                    <SlidersHorizontal size={16} />
                    FILTER
                    {activeFilterCount > 0 && <span className="nhucau-filter-badge">{activeFilterCount}</span>}
                </button>
            </div>

            {/* ═══ MOBILE FILTER DRAWER ═══ */}
            {showMobileFilter && (
                <div className="nhucau-mobile-overlay" onClick={() => setShowMobileFilter(false)}>
                    <div className="nhucau-mobile-drawer" onClick={e => e.stopPropagation()}>
                        <div className="nhucau-mobile-drawer-header">
                            <span className="nhucau-mobile-drawer-title">FILTER</span>
                            <button onClick={() => setShowMobileFilter(false)} className="nhucau-mobile-close">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="nhucau-mobile-drawer-body">
                            {/* Sort */}
                            <FilterSection title="Sắp xếp" icon="↕️" defaultOpen={true}>
                                <select
                                    value={sortBy}
                                    onChange={e => setSortBy(e.target.value as SortOption)}
                                    className="nhucau-sort-select"
                                >
                                    <option value="score">Điểm cao nhất</option>
                                    <option value="year-desc">Mới nhất</option>
                                    <option value="year-asc">Cổ điển nhất</option>
                                    <option value="longevity">Bền nhất</option>
                                    <option value="name-asc">Tên A → Z</option>
                                </select>
                            </FilterSection>
                            <FilterPanel />
                        </div>
                    </div>
                </div>
            )}

            {/* ═══ DESKTOP SIDEBAR ═══ */}
            <aside className="nhucau-sidebar">
                <div className="nhucau-sidebar-sticky">
                    {/* Sort */}
                    <FilterSection title="Sắp xếp" icon="↕️" defaultOpen={true}>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value as SortOption)}
                            className="nhucau-sort-select"
                        >
                            <option value="score">Điểm cao nhất</option>
                            <option value="year-desc">Mới nhất</option>
                            <option value="year-asc">Cổ điển nhất</option>
                            <option value="longevity">Bền nhất</option>
                            <option value="name-asc">Tên A → Z</option>
                        </select>
                    </FilterSection>
                    <FilterPanel />
                </div>
            </aside>

            {/* ═══ MAIN CONTENT ═══ */}
            <div className="nhucau-main">
                {/* Desktop search bar */}
                <div className="nhucau-desktop-search">
                    <Search size={18} className="nhucau-desktop-search-icon" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Tìm nước hoa..."
                        className="nhucau-desktop-search-input"
                    />
                </div>

                {/* Results header */}
                <div className="nhucau-results-header">
                    <span className="nhucau-results-label">Results</span>
                    <span className="nhucau-results-count">{filteredProducts.length} sản phẩm</span>
                </div>

                {/* Active filters */}
                {activeFilterCount > 0 && (
                    <div className="nhucau-active-filters">
                        {genderFilter.map(g => (
                            <span key={g} className="nhucau-active-tag">
                                {g === "nam" ? "Nam" : g === "nu" ? "Nữ" : "Unisex"}
                                <button onClick={() => toggleGender(g)}><X size={12} /></button>
                            </span>
                        ))}
                        {brandFilter.map(b => (
                            <span key={b} className="nhucau-active-tag">
                                {b}
                                <button onClick={() => toggleBrand(b)}><X size={12} /></button>
                            </span>
                        ))}
                        {seasonFilter.map(s => (
                            <span key={s} className="nhucau-active-tag">
                                {s === "he" ? "Hè" : s === "thu-dong" ? "Thu đông" : "Đa dụng"}
                                <button onClick={() => toggleSeason(s)}><X size={12} /></button>
                            </span>
                        ))}
                        {longevityFilter.map(l => {
                            const group = LONGEVITY_GROUPS.find(g => g.id === l);
                            return (
                                <span key={l} className="nhucau-active-tag">
                                    {group?.label || l}
                                    <button onClick={() => toggleLongevity(l)}><X size={12} /></button>
                                </span>
                            );
                        })}
                        {noteFilter.map(n => (
                            <span key={n} className="nhucau-active-tag">
                                {n}
                                <button onClick={() => toggleNote(n)}><X size={12} /></button>
                            </span>
                        ))}
                        {accordFilter.map(a => (
                            <span key={a} className="nhucau-active-tag">
                                {a}
                                <button onClick={() => toggleAccord(a)}><X size={12} /></button>
                            </span>
                        ))}
                        <button onClick={clearAll} className="nhucau-clear-inline">
                            <RotateCcw size={12} /> Xoá tất cả
                        </button>
                    </div>
                )}

                {/* ═══ PRODUCT GRID ═══ */}
                <div className="nhucau-grid">
                    {displayedProducts.map(product => (
                        <Link
                            key={product.id}
                            href={getProductUrl(product)}
                            className="nhucau-card"
                        >
                            {/* Image */}
                            <div className="nhucau-card-img">
                                <div className="nhucau-card-bottle-stage">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 30vw, 220px"
                                        className="nhucau-card-bottle-image"
                                    />
                                </div>
                            </div>
                            {/* Info */}
                            <div className="nhucau-card-info">
                                <h3 className="nhucau-card-name" title={product.name}>{product.name}</h3>
                                <p className="nhucau-card-brand">{product.brand}</p>
                                <div className="nhucau-card-meta">
                                    <span className="nhucau-card-year">{(product as any).year || "—"}</span>
                                    <span className="nhucau-card-score">
                                        <Star size={12} fill="#0D7377" stroke="#0D7377" />
                                        {product.score.total}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProducts.length === 0 && (
                    <div className="nhucau-empty">
                        <div className="nhucau-empty-icon">🔍</div>
                        <p className="nhucau-empty-title">Không tìm thấy kết quả phù hợp</p>
                        <p className="nhucau-empty-desc">Thử điều chỉnh bộ lọc để xem thêm sản phẩm</p>
                        <button onClick={clearAll} className="nhucau-empty-btn">
                            Xoá bộ lọc & hiển thị tất cả
                        </button>
                    </div>
                )}

                {/* Show more */}
                {visibleCount < filteredProducts.length && (
                    <div className="nhucau-loadmore">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 30)}
                            className="nhucau-loadmore-btn"
                        >
                            <span>+ Xem thêm kết quả</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
