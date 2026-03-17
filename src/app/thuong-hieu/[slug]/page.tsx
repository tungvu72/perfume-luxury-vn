import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { StarIcon, MapPin, Calendar, User, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { MASTER_PERFUMES } from "@/constants/mockData";
import { filterValidProducts } from "@/lib/productValidation";

// Build brand map from MASTER_PERFUMES (repo = source of truth)
function getBrandData(brandSlug: string) {
    const products = filterValidProducts(
        MASTER_PERFUMES.filter(p =>
            (p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-')) === brandSlug
        )
    );
    if (products.length === 0) return null;
    return {
        name: products[0].brand,
        slug: brandSlug,
        products,
        productCount: products.length,
    };
}

function getAllBrandSlugs() {
    const slugs = new Set<string>();
    MASTER_PERFUMES.forEach(p => {
        slugs.add(p.brandSlug || p.brand.toLowerCase().replace(/\s+/g, '-'));
    });
    return Array.from(slugs);
}

// Brand content data (factual, no fabrication)
const BRAND_CONTENT: Record<string, {
    intro: string; founded: string; founder: string; country: string;
    positioning: string; signatureStyle: string;
}> = {
    'dior': { founded: '1946', founder: 'Christian Dior', country: 'Pháp', positioning: 'Luxury fashion & fragrance house', signatureStyle: 'Đa dạng từ fresh sạch (Sauvage) đến floral sang (J\'adore)', intro: 'Dior là một trong những thương hiệu nước hoa lớn nhất thế giới, thuộc tập đoàn LVMH. Với lịch sử hơn 7 thập kỷ, Dior phủ rộng cả nam lẫn nữ với nhiều dòng mùi từ sạch sáng đến đậm quyến rũ. Tại Việt Nam, Sauvage và J\'adore là hai cái tên được tìm kiếm nhiều nhất.' },
    'chanel': { founded: '1910', founder: 'Coco Chanel', country: 'Pháp', positioning: 'Biểu tượng luxury toàn cầu', signatureStyle: 'Thanh lịch, tinh tế, chuẩn mực nước hoa cao cấp', intro: 'Chanel định hình chuẩn mực nước hoa cao cấp từ khi ra mắt No. 5 năm 1921. Thương hiệu Pháp này nổi tiếng với phong cách thanh lịch, tinh tế. Bleu de Chanel và Coco Mademoiselle là hai trụ cột thương mại lớn nhất hiện tại.' },
    'ysl': { founded: '1961', founder: 'Yves Saint Laurent', country: 'Pháp', positioning: 'Luxury fashion, nước hoa hiện đại', signatureStyle: 'Nữ hiện đại (Black Opium, Libre), nam trẻ trung (Y, La Nuit)', intro: 'Yves Saint Laurent mang đến hình ảnh hiện đại, cá tính trong thế giới nước hoa. Black Opium và Y EDP là hai dòng bán chạy nhất, phủ rộng cả nam lẫn nữ với phong cách trẻ trung, dễ tiếp cận.' },
    'tom-ford': { founded: '2006', founder: 'Tom Ford', country: 'Mỹ', positioning: 'Designer-niche crossover', signatureStyle: 'Đậm, sexy, nhiều chai unisex', intro: 'Tom Ford nổi tiếng với hình ảnh sang trọng và gợi cảm. Nhiều chai trong Private Blend được xem là cầu nối giữa designer và niche. Oud Wood, Tobacco Vanille và Lost Cherry là những cái tên được nhắc nhiều nhất.' },
    'armani': { founded: '1975', founder: 'Giorgio Armani', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Thanh lịch Ý, từ aquatic đến ấm ngọt', intro: 'Giorgio Armani phủ rộng phân khúc nước hoa nam và nữ. Acqua di Giò là một trong những chai nam bán chạy nhất mọi thời đại. Stronger With You và My Way là những dòng mới đang có sức hút mạnh.' },
    'creed': { founded: '1760', founder: 'James Henry Creed', country: 'Anh', positioning: 'Nhà nước hoa lâu đời, cao cấp', signatureStyle: 'Sang, chỉn chu, nổi tiếng với Aventus', intro: 'Creed tự nhận là nhà nước hoa có lịch sử từ thế kỷ 18. Aventus là chai nam niche được nhắc đến nhiều nhất trong cộng đồng nước hoa toàn cầu. Thương hiệu thuộc tập đoàn Kering từ 2023.' },
    'versace': { founded: '1978', founder: 'Gianni Versace', country: 'Ý', positioning: 'Luxury fashion, nước hoa nam nổi bật', signatureStyle: 'Táo bạo, trẻ trung (Eros, Dylan Blue)', intro: 'Versace nổi tiếng với phong cách nước hoa trẻ trung, nổi bật. Eros là một trong những chai designer nam phổ biến nhất, đặc biệt trong nhóm tuổi 20-30.' },
    'prada': { founded: '1913', founder: 'Mario Prada', country: 'Ý', positioning: 'Luxury fashion, nước hoa tinh tế', signatureStyle: 'Thanh lịch, iris sạch, thể thao sang', intro: 'Prada tiếp cận nước hoa theo hướng tinh tế, hiện đại. L\'Homme với iris sạch và Luna Rossa với cảm hương thể thao sang là hai dòng nam đáng chú ý nhất.' },
    'guerlain': { founded: '1828', founder: 'Pierre-François Pascal Guerlain', country: 'Pháp', positioning: 'Một trong những nhà nước hoa lâu đời nhất', signatureStyle: 'Cổ điển Pháp, oriental, guerlinade signature', intro: 'Guerlain là một trong những nhà nước hoa lâu đời nhất thế giới. Shalimar (1925) vẫn được xem là kinh điển. Thương hiệu thuộc LVMH và nổi tiếng với chất guerlinade đặc trưng.' },
    'maison-francis-kurkdjian': { founded: '2009', founder: 'Francis Kurkdjian', country: 'Pháp', positioning: 'Niche cao cấp, thuộc LVMH', signatureStyle: 'Hiện đại, tinh chỉnh, BR540 signature', intro: 'Maison Francis Kurkdjian là nhà nước hoa niche do Francis Kurkdjian sáng lập. Baccarat Rouge 540 là chai có độ nhận diện cao nhất trong thế giới niche hiện đại. Thương hiệu thuộc LVMH từ 2022.' },
    'parfums-de-marly': { founded: '2009', founder: 'Julien Sprecher', country: 'Pháp', positioning: 'Niche, cảm hứng hoàng gia Pháp', signatureStyle: 'Sang, phức tạp, hiện diện mạnh', intro: 'Parfums de Marly lấy cảm hứng từ thời đại hoàng gia Pháp thế kỷ 18. Layton, Delina và Herod là những cái tên được yêu thích nhất trong cộng đồng niche.' },
    'xerjoff': { founded: '2003', founder: 'Sergio Momo', country: 'Ý', positioning: 'Ultra-niche, nguyên liệu cao cấp', signatureStyle: 'Phức tạp, sang, chai thiết kế đặc biệt', intro: 'Xerjoff là nhà nước hoa Ý ultra-niche, nổi tiếng với nguyên liệu cao cấp và thiết kế chai độc đáo. Naxos và Erba Pura là hai chai phổ biến nhất.' },
    'nishane': { founded: '2012', founder: 'Murat Katran', country: 'Thổ Nhĩ Kỳ', positioning: 'Niche, extrait de parfum', signatureStyle: 'Đậm, lưu hương tốt, unisex', intro: 'Nishane là nhà nước hoa niche từ Thổ Nhĩ Kỳ, chuyên extrait de parfum. Hacivat và Ani là hai chai được biết đến rộng rãi nhất.' },
    'hermes': { founded: '1837', founder: 'Thierry Hermès', country: 'Pháp', positioning: 'Ultra-luxury', signatureStyle: 'Tiết chế, tinh tế, thiên nhiên', intro: 'Hermès tiếp cận nước hoa theo hướng tiết chế, tinh tế. Terre d\'Hermès là chai nam signature, còn dòng Jardin nổi tiếng với cảm hứng từ thiên nhiên và du lịch.' },
    'jean-paul-gaultier': { founded: '1982', founder: 'Jean Paul Gaultier', country: 'Pháp', positioning: 'Designer nổi tiếng, hình ảnh táo bạo', signatureStyle: 'Nổi bật, ngọt, sexy', intro: 'Jean Paul Gaultier nổi tiếng với hình ảnh táo bạo trong thế giới nước hoa. Le Male là một trong những chai nam bán chạy nhất mọi thời đại. Ultra Male và Le Male Elixir tiếp tục thành công của dòng này.' },
    'givenchy': { founded: '1952', founder: 'Hubert de Givenchy', country: 'Pháp', positioning: 'Luxury fashion house', signatureStyle: 'Thanh lịch, hiện đại hóa qua Gentleman và L\'Interdit', intro: 'Givenchy mang đến hình ảnh thanh lịch cổ điển Pháp. Gentleman Réserve Privée và L\'Interdit là hai dòng nổi bật nhất hiện tại, phủ cả nam và nữ.' },
    'narciso-rodriguez': { founded: '1997', founder: 'Narciso Rodriguez', country: 'Mỹ', positioning: 'Designer, minimalism', signatureStyle: 'Musk sạch, nữ tính tinh tế', intro: 'Narciso Rodriguez nổi tiếng với For Her — một trong những chai nữ musk sạch thành công nhất. Pure Musc và Musc Noir Rose tiếp tục khai thác thế mạnh này.' },
    'mugler': { founded: '1992', founder: 'Thierry Mugler', country: 'Pháp', positioning: 'Designer, mùi đột phá', signatureStyle: 'Ngọt gourmand đột phá, alien floral', intro: 'Mugler (trước đây là Thierry Mugler) nổi tiếng với Angel — chai nước hoa mở ra trào lưu gourmand năm 1992. Alien là trụ cột thứ hai với hướng hoa gỗ đặc trưng.' },
    'kilian': { founded: '2007', founder: 'Kilian Hennessy', country: 'Pháp', positioning: 'Niche cao cấp, Estée Lauder', signatureStyle: 'Sang, gourmand tinh tế', intro: 'By Kilian là nhà nước hoa niche do Kilian Hennessy (gia đình Hennessy cognac) sáng lập. Angel\'s Share và Love Don\'t Be Shy là hai chai phổ biến nhất.' },
    'byredo': { founded: '2006', founder: 'Ben Gorham', country: 'Thụy Điển', positioning: 'Niche hiện đại, minimalist', signatureStyle: 'Tối giản, nghệ thuật', intro: 'Byredo là nhà nước hoa niche từ Stockholm, nổi tiếng với thiết kế tối giản và mùi hương có tính nghệ thuật. Bal d\'Afrique và Gypsy Water được biết đến rộng rãi nhất.' },
    'frederic-malle': { founded: '2000', founder: 'Frédéric Malle', country: 'Pháp', positioning: 'Niche cao cấp, publisher model', signatureStyle: 'Mỗi chai do một perfumer nổi tiếng riêng sáng tạo', intro: 'Frédéric Malle hoạt động theo mô hình publisher — mỗi chai do một perfumer nổi tiếng sáng tạo độc lập. Portrait of a Lady (Dominique Ropion) là chai được nhắc nhiều nhất.' },
    'dolce-gabbana': { founded: '1985', founder: 'Domenico Dolce & Stefano Gabbana', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Địa Trung Hải, ấm, nổi bật', intro: 'Dolce & Gabbana mang hơi thở Địa Trung Hải vào thế giới nước hoa. The One và Light Blue là hai dòng thương mại thành công nhất của hãng.' },
    'hugo-boss': { founded: '1924', founder: 'Hugo Boss', country: 'Đức', positioning: 'Premium fashion & fragrance', signatureStyle: 'Nam tính hiện đại, dễ tiếp cận', intro: 'Hugo Boss mang đến nước hoa nam hiện đại, dễ tiếp cận. Boss Bottled là dòng trụ cột có nhiều phiên bản khác nhau qua nhiều năm.' },
    'maison-margiela': { founded: '1988', founder: 'Martin Margiela', country: 'Pháp/Bỉ', positioning: 'Avant-garde fashion, Replica line', signatureStyle: 'Concept ký ức, mùi đời thường', intro: 'Maison Margiela nổi tiếng với dòng Replica — mỗi chai tái hiện một khoảnh khắc, một bối cảnh cụ thể. Jazz Club, By the Fireplace là những tên được biết đến nhiều nhất.' },
    'lancome': { founded: '1935', founder: 'Armand Petitjean', country: 'Pháp', positioning: 'Luxury beauty & fragrance', signatureStyle: 'Nữ tính, thanh lịch', intro: 'Lancôme là thương hiệu luxury beauty thuộc L\'Oréal, mạnh ở phân khúc nước hoa nữ. La Vie Est Belle là một trong những chai nữ bán chạy nhất thế giới nhiều năm liên tiếp.' },
    'mancera': { founded: '2008', founder: 'unknown', country: 'Pháp', positioning: 'Niche, giá tầm trung', signatureStyle: 'Đậm, lưu hương tốt, dễ tiếp cận', intro: 'Mancera là nhà nước hoa niche Pháp với hơn 100 mùi hương, nổi bật ở giá tầm trung và hiệu năng mạnh. Cedrat Boise và Instant Crush được ưa chuộng nhất.' },
    'initio': { founded: '2015', founder: 'unknown', country: 'Pháp', positioning: 'Niche, concept pheromone', signatureStyle: 'Đậm, gợi cảm, concept khoa học', intro: 'Initio Parfums Privés tiếp cận nước hoa qua góc nhìn khoa học về pheromone và mùi hương. Side Effect và Musk Therapy là hai chai nổi bật trong catalog.' },
    'lattafa': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Ngọt đậm, ấm, Trung Đông hiện đại', intro: 'Lattafa là nhà nước hoa từ UAE, nổi tiếng với những chai ngọt đậm, hiệu năng mạnh và giá rất mềm. Khamrah nổi lên nhờ hiệu ứng truyền miệng trên mạng xã hội.' },
    'valentino': { founded: '1960', founder: 'Valentino Garavani', country: 'Ý', positioning: 'Luxury fashion house', signatureStyle: 'Lãng mạn Ý, hiện đại', intro: 'Valentino mang phong cách lãng mạn Ý vào thế giới nước hoa. Born in Roma là dòng hiện đại đang có sức hút mạnh ở cả nam và nữ.' },
    'louis-vuitton': { founded: '1854', founder: 'Louis Vuitton', country: 'Pháp', positioning: 'Ultra-luxury, LVMH flagship', signatureStyle: 'Sang, hiện đại, nguyên liệu cao cấp', intro: 'Louis Vuitton bước vào thế giới nước hoa từ 2016, do Jacques Cavallier Belletrud chỉ đạo. Imagination và Ombre Nomade là hai chai nam được tìm kiếm nhiều tại Việt Nam.' },
    'armaf': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Clone/inspired chất lượng', intro: 'Armaf là nhà nước hoa từ UAE, được biết đến nhiều nhất với Club de Nuit Intense Man — một chai lấy cảm hứng từ Creed Aventus với giá mềm hơn nhiều lần.' },
    'afnan': { founded: 'unknown', founder: 'unknown', country: 'UAE', positioning: 'Arabian fragrance, giá mềm', signatureStyle: 'Clone/inspired, giá rất mềm', intro: 'Afnan là nhà nước hoa từ UAE với nhiều chai lấy cảm hứng từ các mùi nổi tiếng. 9PM là chai được biết đến rộng rãi nhất.' },
    'acqua-di-parma': { founded: '1916', founder: 'unknown', country: 'Ý', positioning: 'Niche Ý, thuộc LVMH', signatureStyle: 'Citrus Ý cổ điển, thanh lịch', intro: 'Acqua di Parma là nhà nước hoa Ý có lịch sử hơn 100 năm, thuộc LVMH. Colonia là dòng signature với hướng citrus Ý cổ điển, thanh lịch.' },
};

export async function generateStaticParams() {
    return getAllBrandSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandData(slug);
    if (!brand) return { title: "Không tìm thấy thương hiệu | Maison de SON" };
    const content = BRAND_CONTENT[slug];
    return {
        title: content?.intro
            ? `Nước hoa ${brand.name} | Review & Gợi ý chọn mùi 2026 | Maison de SON`
            : `Nước hoa ${brand.name} | Maison de SON`,
        description: content?.intro || `Khám phá nước hoa ${brand.name} tại Maison de SON với review và gợi ý chọn mùi phù hợp cho người Việt.`,
        alternates: { canonical: `https://www.maisondeson.com/thuong-hieu/${slug}` },
    };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const brand = getBrandData(slug);
    if (!brand) notFound();

    const content = BRAND_CONTENT[slug];
    const hasContent = !!content;

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* BRAND HERO */}
            <section className="relative bg-gradient-to-b from-[#1a1410] to-[#2a2018] text-white py-16 md:py-24">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
                <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                    <Breadcrumbs items={[{ label: 'Thương hiệu', href: '/thuong-hieu' }, { label: brand.name }]} />
                    <div className="mt-8 max-w-3xl">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-4">Brand Profile</p>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">{brand.name}</h1>
                        {hasContent && (
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
                                {content.intro}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* BRAND FACTS CARD */}
            {hasContent && (
                <section className="max-w-[1200px] mx-auto px-5 -mt-8 relative z-20 mb-12">
                    <div className="bg-white rounded-2xl border border-[#eadfce] shadow-[0_20px_60px_rgba(27,18,13,0.08)] p-6 md:p-8">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Thông tin nhanh</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <div className="flex items-start gap-3">
                                <Calendar size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Thành lập</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.founded !== 'unknown' ? content.founded : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <User size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Nhà sáng lập</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.founder !== 'unknown' ? content.founder : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Xuất xứ</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.country !== 'unknown' ? content.country : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Sparkles size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phong cách</p>
                                    <p className="text-sm font-semibold mt-0.5">{content.signatureStyle !== 'unknown' ? content.signatureStyle : '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-[9px] font-bold text-amber-700">{brand.productCount}</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Sản phẩm</p>
                                    <p className="text-sm font-semibold mt-0.5">{brand.productCount} chai đang có</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* PRODUCT GRID */}
            <section className="max-w-[1200px] mx-auto px-5 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif">
                        Nước hoa {brand.name} tại Maison de SON
                    </h2>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                        {brand.productCount} sản phẩm
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brand.products.map((product, i) => (
                        <Link
                            key={product.id}
                            href={`/${product.id}`}
                            className="group rounded-2xl border border-[#eadfce] bg-white overflow-hidden hover:shadow-[0_12px_40px_rgba(27,18,13,0.08)] transition-all duration-300"
                        >
                            <div className="aspect-[3/4] bg-[#faf8f6] relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={`${product.brand} ${product.name}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <div className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center border border-[#eadfce] shadow-sm">
                                        <span className="text-xs font-bold text-amber-700 leading-none">{product.score.total}</span>
                                        <span className="text-[6px] font-bold text-gray-400 uppercase mt-0.5">Score</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">{product.subName || 'Eau de Parfum'}</p>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                                <div className="flex items-center gap-1.5 mb-3">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, j) => <StarIcon key={j} size={10} fill="currentColor" />)}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-medium">{product.score.total}/10</span>
                                </div>
                                {product.verdictShort && (
                                    <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{product.verdictShort}</p>
                                )}
                                <p className="text-base font-serif font-medium">{product.basePrice?.toLocaleString('vi-VN')} ₫</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* BRAND STORY */}
            {hasContent && (
                <section className="bg-[#faf8f6] border-t border-[#eadfce] py-16">
                    <div className="max-w-3xl mx-auto px-5">
                        <h2 className="text-2xl md:text-3xl font-serif mb-6">
                            Về {brand.name}
                        </h2>
                        <div className="prose prose-sm prose-gray prose-headings:font-serif">
                            <p className="text-gray-600 leading-relaxed">{content.intro}</p>
                            {content.positioning !== 'unknown' && (
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>Định vị:</strong> {content.positioning}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-12 border-t border-[#eadfce]">
                <div className="max-w-3xl mx-auto px-5 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Chưa chắc chai nào phù hợp? Nhắn Zalo để được tư vấn theo gu, hoàn cảnh dùng và ngân sách.
                    </p>
                    <a
                        href="https://zalo.me/0961226169"
                        className="inline-flex items-center gap-2 bg-[#1a1410] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-800 transition-colors"
                    >
                        Nhắn Zalo tư vấn
                    </a>
                </div>
            </section>
        </main>
    );
}
