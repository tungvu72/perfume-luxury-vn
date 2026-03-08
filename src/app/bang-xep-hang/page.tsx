import { getAllProducts } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import RankingClient from "@/app/bang-xep-hang/RankingClient";
import { Suspense } from "react";

export const metadata = {
    title: "Bảng Xếp Hạng Nước Hoa Đáng Xem Nhất 2026 | Maison de SON",
    description: "Khám phá những chai nước hoa đáng xem nhất tại Maison de SON. So sánh theo mùi hương, độ lưu, độ tỏa, tầm giá và hoàn cảnh sử dụng thực tế tại Việt Nam.",
    alternates: {
        canonical: "https://www.maisondeson.com/bang-xep-hang",
    },
};

export default async function RankingPage() {
    const products = await getAllProducts();

    return (
        <main className="min-h-screen bg-white pb-32">
            <Header />

            {/* HEADER */}
            <section className="border-b border-[var(--border)] bg-[#faf8f6] py-12 md:py-16">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
                        <Breadcrumbs items={[{ label: 'Bảng xếp hạng' }]} />
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Ranking Hub</p>
                        <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">Bảng xếp hạng nước hoa đáng xem nhất</h1>
                        <p className="text-sm leading-7 text-gray-600 max-w-3xl md:text-base">
                            Đây là nơi Maison de SON gom lại những chai đáng xem nhất theo trải nghiệm thực tế, độ lưu hương, độ tỏa hương, mức giá và hoàn cảnh sử dụng tại Việt Nam. Không phải danh sách cho có — mà là điểm bắt đầu để chọn nhanh hơn và đỡ mơ hồ hơn.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3 text-sm">
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">{products.length} sản phẩm</span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Lọc theo nhu cầu thực tế</span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Dễ so sánh, dễ quyết định</span>
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
