import { getAllProducts } from "@/lib/dataFetchers";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import NhuCauClient from "./NhuCauClient";
import { Suspense } from "react";
import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import { DiscoveryHubCommercialNote } from "@/components/commercial/CommercialTrustSections";

const CORE = getCommercialCoreSeo("/nuoc-hoa-theo-nhu-cau")!;

export const metadata: Metadata = {
    title: CORE.title,
    description: CORE.description,
    alternates: {
        canonical: CORE.canonical,
    },
    openGraph: {
        title: CORE.title,
        description: CORE.description,
        url: CORE.canonical,
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
                        <p className="mb-1 md:mb-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Công cụ lọc & khám phá</p>
                        <h1 className="text-xl md:text-5xl font-serif mb-2 md:mb-4 leading-tight">{CORE.h1}</h1>
                        <p className="hidden md:block text-sm leading-7 text-gray-600 max-w-3xl md:text-base">
                            Lọc catalog theo hoàn cảnh, mùa, nhóm mùi, ngân sách và thuộc tính — rồi mở review từng chai.
                            Đây là trang lọc sản phẩm, không phải hub biên tập theo tình huống.
                        </p>
                        <div className="mt-3 md:mt-5 flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">{products.length} sản phẩm</span>
                            <span className="rounded-full bg-[#f7f2eb] px-3 py-1.5 md:px-4 md:py-2 font-semibold text-[#4b3b30]">Bộ lọc đa tiêu chí</span>
                            <span className="hidden md:inline-block rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Giá tham khảo · tiêu chí nguồn mua</span>
                        </div>
                    </div>
                </div>
            </section>

            <DiscoveryHubCommercialNote role="filter" />

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
