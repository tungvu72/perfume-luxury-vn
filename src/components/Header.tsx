"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Menu, X, TrendingUp, Sparkles, ArrowRight, Loader2, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SEARCH_INDEX } from "@/constants/searchIndex";
import type { SearchProduct } from "@/constants/searchIndex";
import { getProductUrl } from "@/lib/productUrl";

const TRENDING_SEARCHES = ["Sauvage", "Bleu de Chanel", "Aventus", "Baccarat Rouge", "Lost Cherry"];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Local instant search — no network call, results on every keystroke
    useEffect(() => {
        const q = searchQuery.trim().toLowerCase();
        if (q.length < 2) {
            setSearchResults([]);
            return;
        }
        const results = SEARCH_INDEX.filter((p: SearchProduct) =>
            p.isPublished !== false && (
                p.name.toLowerCase().includes(q) ||
                p.brand.toLowerCase().includes(q) ||
                (p.subName && p.subName.toLowerCase().includes(q)) ||
                (p.tags && p.tags.some((t: string) => t.toLowerCase().includes(q)))
            )
        ).slice(0, 8);
        setSearchResults(results);
    }, [searchQuery]);

    // Click outside to close search results
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Keyboard shortcut: Ctrl/Cmd + K to focus search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
                setIsSearchFocused(true);
            }
            if (e.key === 'Escape') {
                inputRef.current?.blur();
                setIsSearchFocused(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Keyboard navigation for results
    const handleSearchKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => Math.max(prev - 1, -1));
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            const selected = searchResults[selectedIndex];
            if (selected) {
                window.location.href = getProductUrl(selected);
            }
        }
    }, [searchResults, selectedIndex]);

    // Reset selected index when query changes
    useEffect(() => { setSelectedIndex(-1); }, [searchQuery]);

    const showResults = isSearchFocused && (searchQuery.trim().length >= 2 || searchQuery.trim().length === 0);

    const menuItems = [
        { name: "Bảng xếp hạng", href: "/bang-xep-hang" },
        { name: "Nam", href: "/nam-gioi" },
        { name: "Nữ", href: "/nu-gioi" },
        { name: "Kiến thức", href: "/kien-thuc" },
    ];

    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const brandRef = useRef<HTMLDivElement>(null);

    // Close brand dropdown on click outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (brandRef.current && !brandRef.current.contains(e.target as Node)) {
                setIsBrandOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const TOP_BRANDS = [
        { name: 'Dior', slug: 'dior' },
        { name: 'Chanel', slug: 'chanel' },
        { name: 'YSL', slug: 'ysl' },
        { name: 'Tom Ford', slug: 'tom-ford' },
        { name: 'Creed', slug: 'creed' },
        { name: 'Armani', slug: 'armani' },
        { name: 'Hermès', slug: 'hermes' },
        { name: 'MFK', slug: 'maison-francis-kurkdjian' },
        { name: 'Versace', slug: 'versace' },
        { name: 'Prada', slug: 'prada' },
        { name: 'Guerlain', slug: 'guerlain' },
        { name: 'Nishane', slug: 'nishane' },
    ];

    const [isMobileBrandOpen, setIsMobileBrandOpen] = useState(false);

    return (
        <>
            <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
                {/* ROW 1: Logo + Nav + Icons */}
                <div className="border-b border-[var(--border)]">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-5 flex justify-between items-center py-3 md:py-4">
                        {/* MOBILE MENU BUTTON */}
                        <button className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setIsMenuOpen(true)} aria-label="Mở menu">
                            <Menu size={22} />
                        </button>

                        {/* LOGO */}
                        <Link href="/" className="flex flex-col items-center">
                            <span className="font-serif text-[18px] sm:text-[22px] md:text-[28px] font-bold tracking-[2px] sm:tracking-[4px] uppercase">
                                MAISON DE SON
                            </span>
                            <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[2px] sm:tracking-[3px] uppercase text-gray-400/60 font-normal -mt-0.5">
                                Find Your Signature
                            </span>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase">
                            <Link href="/bang-xep-hang" className="relative hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full">
                                Bảng xếp hạng
                            </Link>

                            {/* THƯƠNG HIỆU MEGA DROPDOWN */}
                            <div ref={brandRef} className="relative">
                                <button
                                    onMouseEnter={() => setIsBrandOpen(true)}
                                    onClick={() => setIsBrandOpen(!isBrandOpen)}
                                    className={`relative flex items-center gap-1 py-1 transition-colors ${isBrandOpen ? 'text-primary' : 'hover:text-primary'} after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary after:transition-all ${isBrandOpen ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                >
                                    Thương hiệu
                                    <ChevronDown size={12} className={`transition-transform ${isBrandOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mega Dropdown */}
                                {isBrandOpen && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-white rounded-2xl border border-[var(--border)] shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200 z-[100]"
                                        onMouseLeave={() => setIsBrandOpen(false)}
                                    >
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Thương hiệu nổi bật</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {TOP_BRANDS.map(brand => (
                                                <Link
                                                    key={brand.slug}
                                                    href={`/thuong-hieu/${brand.slug}`}
                                                    onClick={() => setIsBrandOpen(false)}
                                                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-semibold normal-case tracking-normal text-gray-700 hover:bg-primary/5 hover:text-primary transition-all"
                                                >
                                                    {brand.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <Link
                                                href="/thuong-hieu"
                                                onClick={() => setIsBrandOpen(false)}
                                                className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-primary normal-case tracking-normal hover:underline"
                                            >
                                                Xem tất cả 30+ thương hiệu <ArrowRight size={12} />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/nam-gioi" className="relative hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full">
                                Nam
                            </Link>
                            <Link href="/nu-gioi" className="relative hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full">
                                Nữ
                            </Link>
                            <Link href="/kien-thuc" className="relative hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full">
                                Kiến thức
                            </Link>
                        </nav>

                        {/* Placeholder for alignment on desktop (nav takes center) */}
                        <div className="w-5 md:hidden" />
                    </div>
                </div>

                {/* ROW 2: SEARCH BAR - Enhanced */}
                <div className="border-b border-[var(--border)] bg-[#FAFAFA]">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-1.5" ref={searchRef}>
                        <div className="relative">
                            <div className={`flex items-center gap-2.5 bg-white border rounded-lg px-3 py-2 transition-all duration-200 ${isSearchFocused ? 'border-primary shadow-lg shadow-primary/5' : 'border-gray-200'}`}>
                                <Search size={16} className={`flex-shrink-0 transition-colors ${isSearchFocused ? 'text-primary' : 'text-gray-400'}`} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Tìm nước hoa, thương hiệu, nốt hương..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onKeyDown={handleSearchKeyDown}
                                    className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
                                    id="search-input"
                                />
                                {searchQuery ? (
                                    <button
                                        onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                        aria-label="Xoá tìm kiếm"
                                    >
                                        <X size={16} />
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        {isLoading && <Loader2 size={14} className="animate-spin text-primary" />}
                                        <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-100 rounded border border-gray-200">
                                            Ctrl+K
                                        </kbd>
                                    </div>
                                )}
                            </div>

                            {/* DROPDOWN RESULTS */}
                            {showResults && isSearchFocused && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-[70vh] overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-200">
                                    {searchQuery.trim().length >= 2 ? (
                                        isLoading ? (
                                            <div className="py-10 text-center flex flex-col items-center gap-3">
                                                <Loader2 size={24} className="animate-spin text-primary" />
                                                <span className="text-xs text-gray-400">Đang tìm kiếm...</span>
                                            </div>
                                        ) : searchResults.length > 0 ? (
                                            <>
                                                <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                                        {searchResults.length} kết quả
                                                    </span>
                                                    <span className="text-[10px] text-gray-300">↑↓ để chọn · Enter để mở</span>
                                                </div>
                                                {searchResults.map((product, idx) => (
                                                    <Link
                                                        key={product.id}
                                                        href={getProductUrl(product)}
                                                        onClick={() => { setSearchQuery(""); setIsSearchFocused(false); (document.activeElement as HTMLElement)?.blur(); }}
                                                        className={`flex items-center gap-4 px-4 py-3 transition-colors border-b border-gray-50 last:border-b-0 ${selectedIndex === idx ? 'bg-primary/5' : 'hover:bg-gray-50'}`}
                                                    >
                                                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                                                            <Image
                                                                src={product.image || '/images/placeholder.jpg'}
                                                                alt={product.name}
                                                                fill
                                                                sizes="48px"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-0.5">
                                                                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
                                                                    {product.brand}
                                                                </span>
                                                            </div>
                                                            <div className="text-sm font-semibold truncate text-foreground">
                                                                {product.name}
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-end flex-shrink-0">
                                                            {product.subName && (
                                                                <span className="text-[10px] text-gray-400 max-w-[80px] truncate text-right">{product.subName}</span>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                                <Link
                                                    href={`/bang-xep-hang`}
                                                    onClick={() => { setIsSearchFocused(false); }}
                                                    className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
                                                >
                                                    Xem tất cả sản phẩm <ArrowRight size={12} />
                                                </Link>
                                            </>
                                        ) : (
                                            <div className="py-10 text-center">
                                                <div className="text-3xl mb-3">🔍</div>
                                                <div className="text-gray-500 text-sm mb-1">
                                                    Không tìm thấy &ldquo;{searchQuery}&rdquo;
                                                </div>
                                                <div className="text-[11px] text-gray-400 mb-4">
                                                    Thử tìm theo tên, thương hiệu, hoặc nốt hương
                                                </div>
                                                <div className="flex justify-center gap-2">
                                                    {["Oải hương", "Vani", "Gỗ đàn hương"].map(s => (
                                                        <button
                                                            key={s}
                                                            onClick={() => setSearchQuery(s)}
                                                            className="text-[10px] px-3 py-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors"
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ) : (
                                        /* Empty state - Show trending & popular */
                                        <div className="py-4">
                                            <div className="px-4 pb-3 border-b border-gray-100">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <TrendingUp size={12} className="text-primary" />
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Xu hướng tìm kiếm</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {TRENDING_SEARCHES.map(term => (
                                                        <button
                                                            key={term}
                                                            onClick={() => setSearchQuery(term)}
                                                            className="text-[11px] px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-600 hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all"
                                                        >
                                                            {term}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="px-4 pt-3">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Sparkles size={12} className="text-amber-500" />
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nốt hương phổ biến</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Vani", "Oải hương", "Gỗ đàn hương", "Hoa hồng", "Hoắc hương", "Cam bergamot", "Xạ hương"].map(note => (
                                                        <button
                                                            key={note}
                                                            onClick={() => setSearchQuery(note)}
                                                            className="text-[11px] px-3 py-1.5 bg-amber-50/50 border border-amber-100/50 rounded-full text-amber-700 hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all"
                                                        >
                                                            🌿 {note}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE SLIDE MENU */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[200] md:hidden">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                    <div className="absolute top-0 left-0 w-[300px] h-full bg-white p-8 flex flex-col shadow-2xl overflow-y-auto">
                        <button className="self-end mb-6" onClick={() => setIsMenuOpen(false)} aria-label="Đóng menu">
                            <X size={24} />
                        </button>
                        <Link href="/" className="font-serif text-xl font-bold tracking-[3px] uppercase mb-6" onClick={() => setIsMenuOpen(false)}>
                            MAISON DE SON
                        </Link>

                        {/* Search in mobile menu */}
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2.5 mb-6">
                            <Search size={14} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Tìm nước hoa..."
                                className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400"
                                onFocus={() => { setIsMenuOpen(false); setTimeout(() => { inputRef.current?.focus(); setIsSearchFocused(true); }, 300); }}
                            />
                        </div>

                        <nav className="flex flex-col gap-1">
                            {/* Core nav */}
                            <Link href="/bang-xep-hang" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-primary/5 hover:text-primary transition-colors">
                                📊 Bảng xếp hạng
                            </Link>

                            {/* Thương hiệu collapsible */}
                            <button
                                onClick={() => setIsMobileBrandOpen(!isMobileBrandOpen)}
                                className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-primary/5 hover:text-primary transition-colors w-full text-left"
                            >
                                <span>🏷️ Thương hiệu</span>
                                <ChevronRight size={14} className={`text-gray-400 transition-transform ${isMobileBrandOpen ? 'rotate-90' : ''}`} />
                            </button>
                            {isMobileBrandOpen && (
                                <div className="ml-4 pl-3 border-l-2 border-primary/20 flex flex-col gap-0.5 mb-2">
                                    {TOP_BRANDS.slice(0, 8).map(brand => (
                                        <Link
                                            key={brand.slug}
                                            href={`/thuong-hieu/${brand.slug}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
                                        >
                                            {brand.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/thuong-hieu"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-3 py-2 text-[11px] font-bold text-primary hover:underline"
                                    >
                                        Xem tất cả →
                                    </Link>
                                </div>
                            )}

                            {/* Gender shortcuts */}
                            <div className="my-2 border-t border-gray-100" />
                            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Theo giới tính</p>
                            <Link href="/nam-gioi" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-colors">
                                🤵 Nước hoa Nam
                            </Link>
                            <Link href="/nu-gioi" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-colors">
                                💃 Nước hoa Nữ
                            </Link>
                            <Link href="/unisex" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-colors">
                                ✨ Nước hoa Unisex
                            </Link>

                            <div className="my-2 border-t border-gray-100" />
                            <Link href="/kien-thuc" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-primary/5 hover:text-primary transition-colors">
                                📚 Kiến thức
                            </Link>
                        </nav>

                        {/* Mobile bottom links */}
                        <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
                            <Link href="/gioi-thieu" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-sm text-gray-500 hover:text-primary transition-colors">
                                Về chúng tôi
                            </Link>
                            <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-500 hover:text-primary transition-colors">
                                <span className="text-lg">💬</span>
                                Tư vấn qua Zalo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;