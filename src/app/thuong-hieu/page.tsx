import { getAllBrands } from "@/lib/dataFetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Footer from "@/components/Footer";

import { Metadata } from "next";
import { getCommercialCoreSeo } from "@/lib/commercialCoreMetadata";
import { DiscoveryHubCommercialNote } from "@/components/commercial/CommercialTrustSections";

const CORE = getCommercialCoreSeo("/thuong-hieu")!;

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

/**
 * Brand hub — canonical brands only (76).
 * No SEO placeholder aliases (ARMANI/HERMES/LANCOME) inflating the count.
 */
export default async function BrandsIndexPage() {
    const allBrands = await getAllBrands();
    // Canonical entities only — sorted A-Z by display name
    const brands = [...allBrands].sort((a: any, b: any) =>
        String(a.name).localeCompare(String(b.name), "vi"),
    );

    const grouped: Record<string, typeof brands> = {};
    brands.forEach((brand: any) => {
        const letter = String(brand.name).charAt(0).toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(brand);
    });

    const letters = Object.keys(grouped).sort();
    const totalProducts = brands.reduce(
        (acc: number, b: any) => acc + (b.productCount || 0),
        0,
    );

    return (
        <main className="min-h-screen bg-white pb-20" data-brand-hub="canonical">
            <Header />

            <section className="border-b border-[var(--border)] bg-[#faf8f6] py-10 md:py-14">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
                        <Breadcrumbs items={[{ label: "Thương hiệu" }]} />
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                            Thương hiệu A-Z
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
                            {CORE.h1}
                        </h1>
                        <p className="max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                            Bắt đầu từ thương hiệu nếu bạn muốn hiểu rõ phong cách mùi và các lựa chọn nổi bật trước khi đi vào từng chai cụ thể. Maison de SON ưu tiên cách tiếp cận dễ hiểu, thực tế và hợp người dùng Việt.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3 text-sm">
                            <span
                                className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]"
                                data-brand-hub-count={brands.length}
                            >
                                {brands.length} thương hiệu
                            </span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">
                                {totalProducts} sản phẩm đã có
                            </span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">
                                Review + định hướng chọn mùi
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <DiscoveryHubCommercialNote role="brands" />

            <section className="sticky top-[72px] z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto px-5 py-3 flex flex-wrap gap-1">
                    {letters.map((letter) => (
                        <a
                            key={letter}
                            href={`#letter-${letter}`}
                            className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                            {letter}
                        </a>
                    ))}
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-5 py-8">
                {letters.map((letter) => (
                    <div
                        key={letter}
                        id={`letter-${letter}`}
                        className="mb-10 scroll-mt-32 rounded-[28px] border border-[#eadfce] bg-white p-5 shadow-[0_12px_35px_rgba(27,18,13,0.03)] md:p-6"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl md:text-4xl font-serif font-bold text-gray-200">
                                {letter}
                            </span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
                            {grouped[letter].map((brand: any) => (
                                <Link
                                    key={brand.slug}
                                    href={`/${brand.slug}`}
                                    className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors group hover:bg-[#faf6f1]"
                                    data-brand-slug={brand.slug}
                                    data-brand-product-count={brand.productCount}
                                >
                                    <span className="text-sm font-semibold tracking-wide uppercase group-hover:text-primary transition-colors">
                                        {brand.name}
                                    </span>
                                    <span className="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                                        {brand.productCount || 0} sản phẩm
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
