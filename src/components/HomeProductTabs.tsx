"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";

// Import the css from nhucau so we reuse the exact fragrantica-like grid
import "@/app/nuoc-hoa-theo-nhu-cau/nhucau.css";

interface HomeProductTabsProps {
    products: Perfume[];
}

type Tab = "nam" | "nu" | "unisex";

export default function HomeProductTabs({ products }: HomeProductTabsProps) {
    const [activeTab, setActiveTab] = useState<Tab>("nam");

    // Filter products by active tab and sort them to get top picks
    const filteredProducts = products
        .filter(p => p.gender === activeTab)
        .sort((a, b) => b.score.total - a.score.total)
        .slice(0, 10); // 10 items to fill 2 desktop rows nicely (5 columns)

    return (
        <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                        Lựa chọn đáng thử
                    </p>
                    <h2 className="font-serif text-[26px] md:text-[34px] tracking-tight mt-2">
                        Gợi ý từ Maison de SON
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] mt-1.5 max-w-[600px] leading-relaxed">
                        Những mùi hương dễ tiếp cận, nịnh mũi và an toàn nhất cho người Việt. Bám toả tốt, tỷ lệ nhận lời khen cao.
                    </p>
                </div>
                <div className="flex bg-gray-100/80 p-1.5 rounded-full flex-shrink-0 self-start md:self-auto overflow-x-auto no-scrollbar max-w-full">
                    <button
                        onClick={() => setActiveTab("nam")}
                        className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${activeTab === "nam" ? "bg-white text-[var(--color-primary)] shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                    >
                        Nước hoa Nam
                    </button>
                    <button
                        onClick={() => setActiveTab("nu")}
                        className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${activeTab === "nu" ? "bg-white text-[var(--color-primary)] shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                    >
                        Nước hoa Nữ
                    </button>
                    <button
                        onClick={() => setActiveTab("unisex")}
                        className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${activeTab === "unisex" ? "bg-white text-[var(--color-primary)] shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                    >
                        Unisex
                    </button>
                </div>
            </div>

            <div className="nhucau-grid">
                {filteredProducts.map(product => (
                    <Link
                        key={product.id}
                        href={getProductUrl(product)}
                        className="nhucau-card group"
                    >
                        {/* Image area */}
                        <div className="nhucau-card-img">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 30vw, 180px"
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* Content area */}
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

            <div className="mt-8 text-center">
                <Link
                    href={`/nuoc-hoa-theo-nhu-cau?gender=${activeTab}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-[13px] font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex-shrink-0"
                >
                    Khám phá thêm nước hoa {activeTab === "nam" ? "nam" : activeTab === "nu" ? "nữ" : "unisex"} →
                </Link>
            </div>
        </section>
    );
}
