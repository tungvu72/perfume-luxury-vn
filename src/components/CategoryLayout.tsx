"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Perfume } from "@/types";

export default function CategoryLayout({ title, description, products }: { title: string, description: string, products: Perfume[] }) {
    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            {/* HERO */}
            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">{title}</h1>
                    <p className="text-sm text-gray-500 max-w-lg">{description}</p>
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-[1200px] mx-auto px-5 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
                    {products.map((product, i) => (
                        <Link key={i} href={`/product/${product.id}`} className="group">
                            <div className="aspect-square bg-[#F7F7F7] rounded-xl overflow-hidden mb-3 relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-full text-[10px] font-bold">
                                    ★ {product.score.total}/10
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{product.brand}</span>
                            <h3 className="text-sm font-semibold group-hover:text-primary transition-colors mt-1">{product.name}</h3>
                            <div className="text-xs text-gray-500 mt-1">{product.basePrice.toLocaleString()} VNĐ</div>
                        </Link>
                    ))}
                </div>
                {products.length === 0 && (
                    <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-xl">
                        <p className="text-gray-400 text-sm">Đang cập nhật dữ liệu...</p>
                    </div>
                )}
            </section>
        </main>
    );
}
