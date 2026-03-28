import { getAllProducts } from "@/sanity/lib/fetchers";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import RankingClient from "@/app/bang-xep-hang/RankingClient";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Bảng Xếp Hạng Nước Hoa Đáng Xem Nhất 2026 | Maison de SON",
    description: "Khám phá những chai nước hoa đáng xem nhất tại Maison de SON. So sánh theo mùi hương, độ lưu, độ tỏa, tầm giá và hoàn cảnh sử dụng thực tế tại Việt Nam.",
    alternates: {
        canonical: "https://www.maisondeson.com/bang-xep-hang",
    },
    openGraph: {
        title: "Bảng Xếp Hạng Nước Hoa 2026 | Maison de SON",
        description: "Những chai nước hoa đáng xem nhất — so sánh theo mùi hương, độ lưu, tầm giá.",
    },
};

export default async function RankingPage() {
    const products = await getAllProducts();

    return (
        <main className="min-h-screen bg-white pb-32">
            <Header />

            {/* HEADER */}
            <section className="border-b border-[var(--border)] bg-[#faf8f6] py-5 md:py-16">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="overflow-hidden rounded-2xl md:rounded-[32px] border border-[#eadfce] bg-white px-4 py-5 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
                        <Breadcrumbs items={[{ label: 'Bảng xếp hạng' }]} />
                        <p className="mb-1 md:mb-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Bảng xếp hạng toàn bộ</p>
                        <h1 className="text-xl md:text-5xl font-serif mb-2 md:mb-4 leading-tight">Bảng xếp hạng nước hoa đáng xem nhất</h1>
                        <p className="hidden md:block text-sm leading-7 text-gray-600 max-w-3xl md:text-base">
                            Đây là nơi Maison de SON gom lại những chai đáng xem nhất theo trải nghiệm thực tế, độ lưu hương, độ tỏa hương, mức giá và hoàn cảnh sử dụng tại Việt Nam. Không phải danh sách cho có — mà là điểm bắt đầu để chọn nhanh hơn và đỡ mơ hồ hơn.
                        </p>
                        <div className="mt-3 md:mt-5 flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">{products.length} sản phẩm</span>
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">Lọc theo nhu cầu thực tế</span>
                            <span className="hidden md:inline-block rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Dễ so sánh, dễ quyết định</span>
                        </div>
                    </div>
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
