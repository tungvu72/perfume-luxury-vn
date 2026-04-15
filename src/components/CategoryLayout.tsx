"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";

export default function CategoryLayout({
    title,
    description,
    products,
}: {
    title: string;
    description: string;
    products: Perfume[];
}) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return products;

        return products.filter((product) => {
            const name = product.name.toLowerCase();
            const brand = product.brand.toLowerCase();
            const subName = product.subName?.toLowerCase() || "";
            return name.includes(q) || brand.includes(q) || subName.includes(q);
        });
    }, [products, searchQuery]);

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">{title}</h1>
                    <p className="text-sm text-gray-500 max-w-lg">{description}</p>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-5 py-10">
                <div className="nhucau-main">
                    <div className="nhucau-mobile-bar">
                        <div className="nhucau-mobile-search">
                            <Search size={16} className="nhucau-mobile-search-icon" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Tìm nước hoa..."
                                className="nhucau-mobile-search-input"
                            />
                        </div>
                    </div>

                    <div className="nhucau-desktop-search">
                        <Search size={18} className="nhucau-desktop-search-icon" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Tìm nước hoa theo tên hoặc thương hiệu..."
                            className="nhucau-desktop-search-input"
                        />
                    </div>

                    <div className="nhucau-results-header">
                        <span className="nhucau-results-label">Danh sách sản phẩm</span>
                        <span className="nhucau-results-count">{filteredProducts.length} sản phẩm</span>
                    </div>

                    <div className="nhucau-grid">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={getProductUrl(product)} className="nhucau-card">
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

                                <div className="nhucau-card-info">
                                    <h3 className="nhucau-card-name" title={product.name}>
                                        {product.name}
                                    </h3>
                                    <p className="nhucau-card-brand">{product.brand}</p>
                                    <div className="nhucau-card-meta">
                                        <span className="nhucau-card-year">{(product as Perfume & { year?: number }).year || "—"}</span>
                                        <span className="nhucau-card-score">
                                            <Star size={12} fill="#0D7377" stroke="#0D7377" />
                                            {product.score.total}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="nhucau-empty">
                        <div className="nhucau-empty-icon">🔍</div>
                        <p className="nhucau-empty-title">Không tìm thấy sản phẩm phù hợp</p>
                        <p className="nhucau-empty-desc">Thử đổi từ khóa tìm kiếm để xem thêm kết quả</p>
                    </div>
                )}
            </section>
        </main>
    );
}
