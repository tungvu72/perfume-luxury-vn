"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Menu, X, TrendingUp, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { searchProducts } from "@/sanity/lib/fetchers";
import type { Perfume } from "@/types";

const TRENDING_SEARCHES = ["Sauvage", "Bleu de Chanel", "Aventus", "Baccarat Rouge", "Lost Cherry"];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Perfume[]>([]);
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

    // Sanity Search with Debounce
    useEffect(() => {
        if (searchQuery.trim().length < 2) {
            setSearchResults([]);
            return;
        }

        const delayDebounceFn = setTimeout(async () => {
            setIsLoading(true);
            try {
                const results = await searchProducts(searchQuery);
                setSearchResults(results.slice(0, 8));
            } catch (error) {
                console.error("Search error:", error);
            } finally {
                setIsLoading(false);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
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
                window.location.href = `/${selected.id}`;
            }
        }
    }, [searchResults, selectedIndex]);

    // Reset selected index when query changes
    useEffect(() => { setSelectedIndex(-1); }, [searchQuery]);

    const showResults = isSearchFocused && (searchQuery.trim().length >= 2 || searchQuery.trim().length === 0);

    const menuItems = [
        { name: "Bảng xếp hạng", href: "/bang-xep-hang" },
        { name: "Theo nhu cầu", href: "/theo-nhu-cau" },
        { name: "Theo nốt hương", href: "/theo-not-huong" },
        { name: "So sánh", href: "/so-sanh" },
        { name: "Kiến thức", href: "/kien-thuc" },
        { name: "Về chúng tôi", href: "/gioi-thieu" },
    ];

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
                        <Link href="/" className="font-serif text-[18px] sm:text-[22px] md:text-[28px] font-bold tracking-[2px] sm:tracking-[4px] uppercase">
                            MAISON DE SON
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex gap-7 text-xs font-semibold tracking-wider uppercase">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative hover:text-primary transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Placeholder for alignment on desktop (nav takes center) */}
                        <div className="w-5 md:hidden" />
                    </div>
                </div>

                {/* ROW 2: SEARCH BAR - Enhanced */}
                <div className="border-b border-[var(--border)] bg-[#FAFAFA]">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-5 py-2" ref={searchRef}>
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
                                                        href={`/${product.id}`}
                                                        onClick={() => { setSearchQuery(""); setIsSearchFocused(false); (document.activeElement as HTMLElement)?.blur(); }}
                                                        className={`flex items-center gap-4 px-4 py-3 transition-colors border-b border-gray-50 last:border-b-0 ${selectedIndex === idx ? 'bg-primary/5' : 'hover:bg-gray-50'}`}
                                                    >
                                                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                                                            <Image
                                                                src={product.image}
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
                                                            <span className="text-xs font-bold text-primary">★ {product.score.total}</span>
                                                            <span className="text-[10px] text-gray-400">{product.basePrice.toLocaleString()}đ</span>
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
                    <div className="absolute top-0 left-0 w-[300px] h-full bg-white p-8 flex flex-col shadow-2xl">
                        <button className="self-end mb-8" onClick={() => setIsMenuOpen(false)} aria-label="Đóng menu">
                            <X size={24} />
                        </button>
                        <Link href="/" className="font-serif text-xl font-bold tracking-[3px] uppercase mb-8" onClick={() => setIsMenuOpen(false)}>
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

                        <nav className="flex flex-col gap-5">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Zalo CTA */}
                        <div className="mt-auto pt-8 border-t border-gray-100">
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
