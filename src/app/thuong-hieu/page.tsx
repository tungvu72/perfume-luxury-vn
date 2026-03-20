import { getAllBrands } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thương hiệu nước hoa đáng xem | Maison de SON",
    description: "Khám phá các thương hiệu nước hoa nổi bật tại Maison de SON. Xem review, lựa chọn đáng chú ý và định hướng chọn mùi phù hợp cho người Việt.",
    alternates: {
        canonical: "https://www.maisondeson.com/thuong-hieu",
    },
};

// Danh sách đầy đủ các brand (kết hợp data thật + placeholder cho SEO)
const SEO_PLACEHOLDER_BRANDS = [
    "AMOUAGE", "ARMANI", "BURBERRY",
    "CHANEL", "CREED",
    "DIOR", "DOLCE & GABBANA",
    "GIORGIO ARMANI", "GIVENCHY", "GUCCI", "GUERLAIN",
    "HERMES", "HUGO BOSS",
    "ISSEY MIYAKE",
    "JEAN PAUL GAULTIER", "JO MALONE",
    "KILIAN",
    "LANCOME", "LOUIS VUITTON",
    "MAISON FRANCIS KURKDJIAN", "MAISON MARGIELA", "MONTBLANC",
    "NARCISO RODRIGUEZ", "NISHANE",
    "PACO RABANNE", "PRADA",
    "ROJA DOVE",
    "TOM FORD",
    "VALENTINO", "VERSACE",
    "XERJOFF",
    "YVES SAINT LAURENT"
];

export default async function BrandsIndexPage() {
    // Lấy danh sách brand từ Sanity
    const sanityBrands = await getAllBrands();
    const activeBrandsMap = new Map(sanityBrands.map((b: any) => [b.name.toUpperCase(), b]));

    // Gộp tất cả brand (thật + placeholder), loại bỏ trùng lặp
    const allBrandNamesSet = new Set([...SEO_PLACEHOLDER_BRANDS, ...sanityBrands.map((b: any) => b.name.toUpperCase())]);
    const allBrandNames = Array.from(allBrandNamesSet).sort();

    // Nhóm theo chữ cái đầu
    const grouped: Record<string, string[]> = {};
    allBrandNames.forEach(brand => {
        const letter = brand.charAt(0).toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(brand);
    });

    const letters = Object.keys(grouped).sort();
    const totalProducts = sanityBrands.reduce((acc: number, b: any) => acc + (b.productCount || 0), 0);

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            {/* PAGE HEADER */}
            <section className="border-b border-[var(--border)] bg-[#faf8f6] py-10 md:py-14">
                <div className="max-w-[1200px] mx-auto px-5">
                    <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
                        <Breadcrumbs items={[{ label: 'Thương hiệu' }]} />
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Brand Directory</p>
                        <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">Thương hiệu nước hoa đáng khám phá</h1>
                        <p className="max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                            Bắt đầu từ thương hiệu nếu bạn muốn hiểu rõ tinh thần, phong cách mùi và các lựa chọn nổi bật trước khi đi vào từng chai cụ thể. Maison de SON ưu tiên cách tiếp cận dễ hiểu, thực tế và hợp người dùng Việt.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3 text-sm">
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">{allBrandNames.length} thương hiệu A-Z</span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">{totalProducts} sản phẩm đã có</span>
                            <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Review + định hướng chọn mùi</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ALPHABET QUICK NAV */}
            <section className="sticky top-[72px] z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto px-5 py-3 flex flex-wrap gap-1">
                    {letters.map(letter => (
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

            {/* BRAND DIRECTORY */}
            <section className="max-w-[1200px] mx-auto px-5 py-8">
                {letters.map(letter => (
                    <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-32 rounded-[28px] border border-[#eadfce] bg-white p-5 shadow-[0_12px_35px_rgba(27,18,13,0.03)] md:p-6">
                        {/* Letter Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl md:text-4xl font-serif font-bold text-gray-200">{letter}</span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        {/* Brand List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
                            {grouped[letter].map(brandName => {
                                const brandData: any = activeBrandsMap.get(brandName);
                                const isActive = !!brandData;

                                if (isActive) {
                                    return (
                                        <Link
                                            key={brandName}
                                            href={`/${brandData.slug}`}
                                            className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors group hover:bg-[#faf6f1]"
                                        >
                                            <span className="text-sm font-semibold tracking-wide uppercase group-hover:text-primary transition-colors">
                                                {brandName}
                                            </span>
                                            <span className="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                                                {brandData.productCount || 0} sản phẩm
                                            </span>
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={brandName}
                                        className="flex items-center justify-between rounded-2xl px-4 py-3"
                                    >
                                        <span className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                                            {brandName}
                                        </span>
                                        <span className="text-[10px] text-gray-300 italic">
                                            Sắp có
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    );
}
