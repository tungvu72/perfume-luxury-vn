import { getAllProducts } from "@/lib/dataFetchers";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import NhuCauClient from "./NhuCauClient";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Nước Hoa Theo Nhu Cầu — Tìm Chai Phù Hợp Nhất | Maison de SON",
    description: "Lọc và tìm nước hoa theo thương hiệu, mùa, độ lưu hương, note hương và nhóm mùi. 218+ chai đánh giá chi tiết tại Maison de SON.",
    alternates: {
        canonical: "https://www.maisondeson.com/nuoc-hoa-theo-nhu-cau",
    },
    openGraph: {
        title: "Nước Hoa Theo Nhu Cầu | Maison de SON",
        description: "Tìm chai nước hoa phù hợp nhất theo nhu cầu thực tế — lọc theo thương hiệu, mùa, note hương và nhiều tiêu chí khác.",
    },
};

export default async function NhuCauPage() {
    const products = await getAllProducts();

    return (
        <main className="min-h-screen bg-white pb-32 overflow-x-hidden">
            <Header />

            {/* HERO */}
            <section className="border-b border-[var(--border)] bg-[#faf8f6] py-5 md:py-16">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="overflow-hidden rounded-2xl md:rounded-[32px] border border-[#eadfce] bg-white px-4 py-5 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
                        <Breadcrumbs items={[{ label: 'Nước hoa theo nhu cầu' }]} />
                        <p className="mb-1 md:mb-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Khám phá & tìm kiếm</p>
                        <h1 className="text-xl md:text-5xl font-serif mb-2 md:mb-4 leading-tight">Nước hoa theo nhu cầu</h1>
                        <p className="hidden md:block text-sm leading-7 text-gray-600 max-w-3xl md:text-base">
                            Lọc theo thương hiệu, mùa phù hợp, độ lưu hương, note hương hoặc nhóm mùi — tìm đúng chai dành cho bạn.
                            Tất cả đều đã được Maison de SON đánh giá thực tế.
                        </p>
                        <div className="mt-3 md:mt-5 flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">{products.length} sản phẩm</span>
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">Lọc theo nhu cầu thực tế</span>
                            <span className="hidden md:inline-block rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Đánh giá thực tế Việt Nam</span>
                        </div>
                    </div>
                </div>
            </section>

            <Suspense fallback={
                <div className="max-w-[1200px] mx-auto px-5 py-20 text-center animate-pulse text-gray-400">
                    Đang tải danh sách sản phẩm...
                </div>
            }>
                <NhuCauClient initialProducts={products} />
            </Suspense>
        </main>
    );
}
