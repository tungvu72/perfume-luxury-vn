import { getAllProducts } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import RankingClient from "@/app/bang-xep-hang/RankingClient";
import { Suspense } from "react";

export const metadata = {
    title: "Bảng Xếp Hạng Nước Hoa Chính Hãng 2026 - Maison de SON Review",
    description: "Khám phá bảng xếp hạng nưóc hoa chính hãng tốt nhất 2026. Review chuyên sâu, chấm điểm bám tỏa, mùi hương và tư vấn lựa chọn từ chuyên gia Maison de SON.",
};

export default async function RankingPage() {
    const products = await getAllProducts();

    return (
        <main className="min-h-screen bg-white pb-32">
            <Header />

            {/* HEADER */}
            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[1200px] mx-auto px-5">
                    <Breadcrumbs items={[{ label: 'Bảng xếp hạng' }]} />
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">Bảng Xếp Hạng Nước Hoa Chính Hãng</h1>
                    <p className="text-sm text-gray-400 max-w-lg">
                        Dựa trên đánh giá thực tế từ chuyên gia Maison de SON · {products.length} sản phẩm
                    </p>
                </div>
            </section>

            <Suspense fallback={
                <div className="max-w-[1200px] mx-auto px-5 py-20 text-center animate-pulse text-gray-400">
                    Đang tải danh sách sản phẩm...
                </div>
            }>
                <RankingClient initialProducts={products} />
            </Suspense>
        </main>
    );
}
