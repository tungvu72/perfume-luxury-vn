import { getBrandBySlug, getProductsByBrand } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const brand = await getBrandBySlug(slug);

    if (!brand) {
        return { title: "Không tìm thấy thương hiệu | Maison de SON" };
    }

    return {
        title: `Nước hoa ${brand.name} Chính Hãng - Review & Bảng Giá 2026 | Maison de SON`,
        description: brand.description || `Khám phá bộ sưu tập nước hoa ${brand.name} cao cấp tại Maison de SON. Tuyển chọn những mùi hương kinh điển, đánh giá chuyên sâu từ chuyên gia.`,
    };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const [brand, brandProducts] = await Promise.all([
        getBrandBySlug(slug),
        getProductsByBrand(slug)
    ]);

    if (!brand) {
        notFound();
    }

    const brandName = brand.name;
    const brandDescription = brand.description || `Thương hiệu ${brandName} luôn nằm trong top những dòng nước hoa được săn đón nhất tại Việt Nam. Với phong cách thiết kế độc bản và mùi hương đầy mê hoặc, mỗi chai nước hoa của hãng là một kiệt tác nghệ thuật thực thụ.`;

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* BRAND HERO */}
            <section className="bg-[#FAF9F8] py-20 border-b border-[var(--border)]">
                <div className="container mx-auto px-5">
                    <Breadcrumbs items={[{ label: 'Thương hiệu', href: '/thuong-hieu' }, { label: brandName }]} />
                    <div className="max-w-4xl animate-fade-up">
                        <span className="text-xs font-bold text-primary tracking-[4px] uppercase mb-4 block">Thế giới mùi hương</span>
                        <h1 className="text-5xl md:text-8xl font-serif mb-8">{brandName}</h1>
                        <p className="text-gray-500 leading-relaxed text-lg max-w-2xl italic">
                            "{brandDescription}"
                        </p>
                    </div>
                </div>
            </section>

            {/* FILTER & SORT (UI ONLY) */}
            <section className="border-b border-[var(--border)] sticky top-[80px] bg-white z-40">
                <div className="container mx-auto px-5 py-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[2px]">
                    <div className="flex gap-8">
                        <span className="text-primary cursor-pointer hover:underline underline-offset-4">Tất cả</span>
                        
                    </div>
                    <div className="flex gap-2 items-center text-gray-400">
                        Sắp xếp: <span className="text-foreground">Mới nhất ▼</span>
                    </div>
                </div>
            </section>

            {/* PRODUCT GRID */}
            <section className="container mx-auto px-5 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {brandProducts.length > 0 ? brandProducts.map((product, i) => (
                        <Link key={i} href={`/product/${product.id}`} className="group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="aspect-[3/4] bg-[#F7F7F7] rounded-3xl overflow-hidden mb-8 relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6">
                                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-[var(--border)] shadow-md">
                                        <span className="text-xs font-bold text-primary leading-none">{product.score.total}</span>
                                        <span className="text-[6px] font-bold text-gray-400 uppercase mt-0.5 tracking-tighter">Hạng</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-[10px] font-bold text-gray-400 tracking-[3px] uppercase mb-2 block">{product.brand}</span>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                                <div className="flex items-center gap-1.5 mb-4 justify-center md:justify-start">
                                    <div className="flex text-primary">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={10} fill="currentColor" />)}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.5px]">Đánh giá</span>
                                </div>
                                <div className="text-lg font-serif">{product.basePrice.toLocaleString()} VNĐ</div>
                            </div>
                        </Link>
                    )) : (
                        <div className="col-span-3 py-24 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                            <div className="text-4xl mb-4">🏺</div>
                            <h3 className="text-xl font-serif mb-2 text-gray-400 italic">Dữ liệu cho {brandName} đang được nạp...</h3>
                            <p className="text-xs text-gray-400 max-w-xs mx-auto">Chuyên gia đang tiến hành thẩm định và chấm điểm các chai nước hoa cực phẩm từ hãng này.</p>
                            <Link href="/" className="mt-8 text-xs font-bold text-primary underline block uppercase tracking-[2px]">Trở lại trang chủ</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO ARTICLE */}
            <section className="bg-gray-50 py-24 border-t border-[var(--border)]">
                <div className="container mx-auto px-5">
                    <div className="max-w-3xl mx-auto prose prose-sm prose-gray prose-headings:font-serif prose-headings:font-normal">
                        <h2 className="text-3xl mb-8">Tại sao chọn nước hoa {brandName} tại Maison de SON?</h2>
                        <p>
                            Khi nhắc đến nước hoa {brandName}, người ta nghĩ ngay đến phong cách sang trọng và đẳng cấp. Tại <strong>Maison de SON</strong>, chúng tôi không chỉ cung cấp những chai nước hoa {brandName} chính hãng mà còn đem đến cho bạn những trải nghiệm đánh giá chuyên sâu nhất.
                        </p>
                        <ul>
                            <li>100% Sản phẩm chính hãng, cam kết chất lượng tuyệt đối.</li>
                            <li>Bảng điểm chuyên gia (PLV Score) giúp bạn chọn đúng mùi hương phù hợp.</li>
                            <li>Check-list nốt hương chi tiết (Scent DNA) chuẩn quốc tế.</li>
                            <li>Tư vấn Stylist cá nhân 24/7 qua Zalo.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
