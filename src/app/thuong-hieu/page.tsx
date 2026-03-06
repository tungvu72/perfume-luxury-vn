import { getAllBrands } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thương hiệu nước hoa - Maison de SON",
    description: "Khám phá các thương hiệu nước hoa cao cấp chính hãng từ Dior, Chanel, Tom Ford đến các dòng Niche hiếm. Đánh giá chuyên sâu từ Maison de SON.",
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
            <section className="border-b border-[var(--border)] py-10 md:py-14">
                <div className="max-w-[1200px] mx-auto px-5">
                    <Breadcrumbs items={[{ label: 'Thương hiệu' }]} />
                    <h1 className="text-3xl md:text-4xl font-serif mb-2">Thương hiệu nước hoa</h1>
                    <p className="text-sm text-gray-400">
                        Tra cứu {allBrandNames.length} thương hiệu từ A đến Z · {totalProducts} sản phẩm đã đánh giá
                    </p>
                </div>
            </section>

            {/* ALPHABET QUICK NAV */}
            <section className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-[var(--border)]">
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
                    <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-32">
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
                                            className="flex items-center justify-between py-3 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors group"
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
                                        className="flex items-center justify-between py-3 px-3 -mx-3"
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
        </main>
    );
}
