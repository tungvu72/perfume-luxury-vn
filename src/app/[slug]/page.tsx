import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import ArticleShare from '@/components/ArticleShare';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { getPostByUrlSlug, getAllPosts } from '@/sanity/lib/posts';
import { getProductBySlug, getAllProducts, getProductsByBrand } from '@/sanity/lib/fetchers';
import { getBrandBySlug, getAllBrands } from '@/sanity/lib/fetchers';
import type { Perfume } from '@/types';
import ProductClient from '@/app/san-pham/[id]/ProductClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedProducts from '@/components/RelatedProducts';
import RelatedArticles from '@/components/RelatedArticles';

export const dynamicParams = true;
export const revalidate = 3600; // ISR: re-generate sau 1 tiếng, đảm bảo content mới lên live không cần redeploy


// Detect content type từ slug
async function resolveSlug(slug: string) {
    const [product, post, brand] = await Promise.allSettled([
        getProductBySlug(slug),
        getPostByUrlSlug(slug),
        getBrandBySlug(slug),
    ]);
    return {
        product: product.status === 'fulfilled' ? product.value : null,
        post: post.status === 'fulfilled' ? post.value : null,
        brand: brand.status === 'fulfilled' ? brand.value : null,
    };
}

export async function generateStaticParams() {
    const [posts, products, brands] = await Promise.all([
        getAllPosts(),
        getAllProducts(),
        getAllBrands(),
    ]);
    return [
        ...posts.map((p: any) => ({ slug: p.urlSlug })),
        ...products.map((p: Perfume) => ({ slug: p.id })),
        ...brands.map((b: any) => ({ slug: b.slug })),
    ].filter(x => x.slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { product, post, brand } = await resolveSlug(slug);
    const now = new Date();
    const mm_yyyy = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    if (product) {
        return {
            title: `${product.name} ${product.subName || ''} — Giá tốt ${mm_yyyy} | Maison de SON`,
            description: `${product.name}: Review chuyên sâu, phân tích cá tính mùi hương, giá tham khảo ${mm_yyyy}. Điểm đánh giá: ${product.score.total}/10. Tư vấn chọn nước hoa chính hãng qua Zalo.`,
            keywords: [product.name, product.brand, `mua ${product.name} chính hãng`, `giá ${product.name}`, `${product.name} ở đâu`],
            alternates: { canonical: `${CANONICAL_BASE}/${product.id}` },
            openGraph: {
                title: `${product.brand} ${product.name} — Maison de SON`,
                description: product.verdict,
                images: [product.image],
            },
        };
    }
    if (brand) {
        return {
            title: `Nước hoa ${brand.name} chính hãng — Bộ sưu tập | Maison de SON`,
            description: `Khám phá nước hoa ${brand.name} tại Maison de SON với review, trải nghiệm thực tế, giá tham khảo và gợi ý chọn mua chính hãng cho người Việt.`,
            keywords: [brand.name, `nước hoa ${brand.name}`, `${brand.name} chính hãng`, `mua ${brand.name}`],
            alternates: { canonical: `${CANONICAL_BASE}/${brand.slug}` },
        };
    }
    if (post) {
        return {
            title: `${post.title} | Maison de SON`,
            description: post.excerpt || `${post.title} — Maison de SON`,
            alternates: { canonical: `${CANONICAL_BASE}/${slug}` },
            openGraph: {
                title: post.title,
                description: post.excerpt || '',
                images: post.mainImage ? [{ url: post.mainImage, width: 1200, height: 630 }] : [],
                type: 'article',
                publishedTime: post.publishedAt || undefined,
            },
        };
    }
    return { title: 'Không tìm thấy | Maison de SON' };
}

// ─── CONSTANTS ───────────────────────────────────────────────
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200';
const SITE_URL = 'https://www.maisondeson.com';
const CANONICAL_BASE = 'https://www.maisondeson.com';
const TAG_COLORS: Record<string, string> = {
    'Product Review': 'bg-amber-50 text-amber-700 border-amber-200',
    'Buying Guide': 'bg-blue-50 text-blue-700 border-blue-200',
    'How-to': 'bg-green-50 text-green-700 border-green-200',
    'Kiến thức': 'bg-purple-50 text-purple-700 border-purple-200',
    'Trend': 'bg-rose-50 text-rose-700 border-rose-200',
    'So sánh': 'bg-orange-50 text-orange-700 border-orange-200',
    'Brand Story': 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

// ─── PRODUCT PAGE (render khi slug là sản phẩm) ──────────────
async function ProductPage({ product, slug }: { product: Perfume; slug: string }) {
    const jsonLd = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: `${product.brand} ${product.name}`,
        image: product.image,
        description: product.description,
        brand: { '@type': 'Brand', name: product.brand },
        sku: product.id,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.score.total,
            bestRating: '10',
            worstRating: '1',
            ratingCount: '1200',
        },
        offers: {
            '@type': 'Offer',
            url: `${SITE_URL}/${product.id}`,
            priceCurrency: 'VND',
            price: product.basePrice,
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
        },
    };

    // Breadcrumb JSON-LD 4 tầng (cho Google), UI 3 tầng (cho người dùng)
    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: product.gender === 'nam' ? 'Nam giới' : product.gender === 'nu' ? 'Nữ giới' : 'Unisex', item: `${SITE_URL}/${product.gender === 'nam' ? 'nam-gioi' : product.gender === 'nu' ? 'nu-gioi' : 'unisex'}` },
            { '@type': 'ListItem', position: 3, name: product.brand, item: `${SITE_URL}/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, '-')}` },
            { '@type': 'ListItem', position: 4, name: product.name, item: `${SITE_URL}/${product.id}` },
        ],
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <ScrollProgress />
            <Header />
            <div className="max-w-[1200px] mx-auto px-5 py-10">
                {/* Breadcrumb UI: 3 tầng */}
                <Breadcrumbs
                    items={[
                        { label: product.brand, href: `/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, '-')}` },
                        { label: product.name },
                    ]}
                />
                <ProductClient
                    product={product}
                    relatedProducts={
                        <Suspense fallback={<div className="h-40 animate-pulse bg-gray-50 rounded-xl mt-10" />}>
                            <RelatedProducts current={product} />
                        </Suspense>
                    }
                    relatedArticles={
                        <Suspense fallback={null}>
                            <RelatedArticles product={product} />
                        </Suspense>
                    }
                />
            </div>
        </main>
    );
}

// ─── BRAND PAGE (render khi slug là thương hiệu) ─────────────
async function BrandPage({ brand, slug }: { brand: any; slug: string }) {
    const products = await getProductsByBrand(slug);
    const featuredProducts = products.slice(0, 4);
    return (
        <main className="min-h-screen bg-[#fcfaf7] pb-20">
            <ScrollProgress />
            <Header />
            <div className="max-w-[1200px] mx-auto px-5 py-10">
                <Breadcrumbs items={[
                    { label: 'Thương hiệu', href: '/thuong-hieu' },
                    { label: brand.name },
                ]} />

                <section className="mt-8 overflow-hidden rounded-[32px] border border-[#eadfce] bg-white shadow-[0_20px_60px_rgba(17,17,17,0.05)]">
                    <div className="grid gap-6 px-6 py-7 md:grid-cols-[minmax(0,1.1fr)_320px] md:px-8 md:py-9">
                        <div>
                            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Brand Spotlight</div>
                            <h1 className="mt-3 text-4xl font-serif leading-tight text-[#1b120d] md:text-6xl">Nước hoa {brand.name}</h1>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                                Khám phá những lựa chọn nổi bật từ <strong>{brand.name}</strong> tại Maison de SON. Đây là nơi tổng hợp review, trải nghiệm thực tế và gợi ý chọn mùi phù hợp cho người Việt — dễ hiểu, gọn và đủ để ra quyết định.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3 text-sm">
                                <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">{products.length} sản phẩm đang có</span>
                                <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Review chọn lọc</span>
                                <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Gợi ý mua chính hãng</span>
                            </div>
                        </div>

                        <div className="grid gap-3 rounded-[24px] border border-[#eadfce] bg-[#fcfaf7] p-4">
                            <div className="rounded-2xl bg-white p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">Maison de SON đọc brand này như thế nào?</div>
                                <p className="mt-2 text-sm leading-6 text-gray-600">Ưu tiên cảm nhận thực tế, độ dễ dùng, mức độ đáng tiền và hoàn cảnh sử dụng tại Việt Nam thay vì chỉ nhìn hype.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">Phù hợp cho ai</div>
                                <p className="mt-2 text-sm leading-6 text-gray-600">Người muốn bắt đầu từ thương hiệu trước, rồi mới chọn ra chai hợp gu, hợp túi tiền và hợp hoàn cảnh dùng.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {featuredProducts.length > 0 && (
                    <section className="mt-8 mb-10">
                        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Lựa chọn nổi bật</div>
                                <h2 className="mt-2 text-2xl font-serif text-[#1b120d] md:text-3xl">Những chai nên xem trước</h2>
                            </div>
                            <p className="text-sm text-gray-500">Bắt đầu từ các lựa chọn dễ tham khảo nhất trước khi đi sâu hơn.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {featuredProducts.map((p: Perfume) => (
                                <Link key={p.id} href={`/${p.id}`} className="group overflow-hidden rounded-[24px] border border-[#eadfce] bg-white p-4 shadow-[0_16px_40px_rgba(27,18,13,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,18,13,0.08)]">
                                    <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-[#f7f3ee]">
                                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{p.brand}</div>
                                    <div className="mt-2 text-base font-semibold leading-tight text-[#1b120d] group-hover:text-primary transition-colors">{p.name}</div>
                                    <div className="mt-1 text-xs text-gray-400">{p.subName}</div>
                                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{p.verdictShort || p.verdict}</p>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <span className="font-semibold text-primary">★ {p.score.total}/10</span>
                                        <span className="text-gray-400">{p.basePrice > 0 ? `${p.basePrice.toLocaleString()}đ` : 'Liên hệ'}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Toàn bộ sản phẩm</div>
                            <h2 className="mt-2 text-2xl font-serif text-[#1b120d] md:text-3xl">Khám phá theo chai cụ thể</h2>
                        </div>
                        <p className="text-sm text-gray-500">Danh sách hiện có từ {brand.name} trên Maison de SON.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((p: Perfume) => (
                            <Link key={p.id} href={`/${p.id}`} className="group rounded-[24px] border border-[#eadfce] bg-white p-3 shadow-[0_12px_35px_rgba(27,18,13,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)] sm:p-4">
                                <div className="flex items-start gap-3 sm:block">
                                    <div className="relative h-[92px] w-[92px] flex-shrink-0 overflow-hidden rounded-2xl bg-[#F7F7F7] sm:mb-3 sm:h-auto sm:w-full sm:aspect-square">
                                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 92px, 200px" className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0 flex-1">
                                                <div className="text-[10px] font-bold text-primary tracking-[0.18em] uppercase leading-4">{p.brand}</div>
                                                <div className="mt-1 text-[17px] font-semibold leading-[1.25] text-[#1b120d] transition-colors group-hover:text-primary sm:text-sm">{p.name}</div>
                                                <div className="mt-1 text-[11px] text-gray-400 sm:text-[10px]">{p.subName}</div>
                                            </div>
                                            <div className="shrink-0 rounded-2xl bg-[#faf6f1] px-3 py-2 text-right sm:px-2.5 sm:py-1.5">
                                                <div className="text-sm font-bold leading-none text-primary sm:text-xs">{p.score.total}</div>
                                                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">Điểm tổng</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#f1e7da] pt-3">
                                            <span className="rounded-full bg-[#f7f2eb] px-2.5 py-1 text-[10px] font-semibold text-[#6f5a47]">
                                                {p.gender === 'nam' ? 'Nam' : p.gender === 'nu' ? 'Nữ' : 'Unisex'}
                                            </span>
                                            <span className="text-[11px] font-semibold text-gray-500 sm:text-[10px]">{p.basePrice > 0 ? `${p.basePrice.toLocaleString()}đ` : 'Liên hệ'}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {products.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p>Chưa có sản phẩm {brand.name}. <Link href="https://zalo.me/0961226169" className="text-primary underline">Hỏi qua Zalo →</Link></p>
                    </div>
                )}
            </div>
        </main>
    );
}

// ─── ARTICLE PAGE (render khi slug là bài viết) ──────────────
// Extract TOC headings from markdown body
function extractTOC(body: string): { id: string; text: string; level: number }[] {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const toc: { id: string; text: string; level: number }[] = [];
    let match;
    while ((match = headingRegex.exec(body)) !== null) {
        const level = match[1].length;
        const text = match[2].replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
        const id = text
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .slice(0, 60);
        toc.push({ id, text, level });
    }
    return toc;
}

async function ArticlePage({ post, slug }: { post: any; slug: string }) {
    const articleUrl = `${SITE_URL}/${slug}`;
    const [allPosts, allProducts] = await Promise.all([getAllPosts(), getAllProducts()]);

    const relatedPosts = allPosts
        .filter((p: any) => p.urlSlug !== slug && (
            p.category === post.category ||
            post.title.split(' ').some((w: string) => w.length > 4 && p.title.toLowerCase().includes(w.toLowerCase()))
        ))
        .slice(0, 3);

    const relatedProducts: Perfume[] = allProducts.slice(0, 3);

    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })
        : null;

    const tagColorClass = TAG_COLORS[post.category] || 'bg-gray-100 text-gray-600 border-gray-200';
    const toc = extractTOC(post.body || '');

    // Word count for reading stats
    const wordCount = (post.body || '').split(/\s+/).length;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt || '',
        image: post.mainImage || PLACEHOLDER_IMAGE,
        url: articleUrl,
        datePublished: post.publishedAt || new Date().toISOString(),
        dateModified: post.publishedAt || new Date().toISOString(),
        author: { '@type': 'Organization', name: post.author || 'Maison de SON', url: `${SITE_URL}/maison-editorial` },
        publisher: { '@type': 'Organization', name: 'Maison de SON', url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        articleSection: post.category || 'Kiến thức',
        inLanguage: 'vi-VN',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="min-h-screen bg-[#faf9f7] pb-20">
                <ScrollProgress />
                <Header />

                {/* Hero Image Banner */}
                <div className="w-full relative overflow-hidden" style={{ background: '#0a0a0a', minHeight: '220px' }}>
                    <div className="relative w-full" style={{ paddingTop: 'min(50%, 440px)' }}>
                        <Image
                            src={post.mainImage || PLACEHOLDER_IMAGE}
                            alt={post.title}
                            fill sizes="100vw"
                            className="object-cover object-center"
                            priority
                            unoptimized={!post.mainImage || post.mainImage.startsWith('http')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0 max-w-[760px]">
                            {/* Breadcrumb */}
                            <nav className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-5 font-medium">
                                <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
                                <span className="text-gray-300">/</span>
                                <Link href="/kien-thuc" className="hover:text-primary transition-colors">Kiến thức</Link>
                                <span className="text-gray-300">/</span>
                                <span className="text-gray-500 line-clamp-1">{post.title}</span>
                            </nav>

                            {/* Article Header Card */}
                            <header className="mb-8 rounded-2xl border border-[#e8e0d4] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-7 md:p-9">
                                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                                    {post.category && (
                                        <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{post.category}</span>
                                    )}
                                    {post.publishedAt && (Date.now() - new Date(post.publishedAt).getTime()) < 7 * 24 * 60 * 60 * 1000 && (
                                        <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-200">Mới cập nhật</span>
                                    )}
                                </div>
                                <h1 className="text-[26px] font-serif font-bold leading-[1.25] text-[#1a1a1a] sm:text-[34px] md:text-[40px]">{post.title}</h1>
                                <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-gray-400 font-medium border-t border-gray-100 pt-5">
                                    <Link href="/tac-gia/maison-editorial" className="text-gray-600 hover:text-primary transition-colors font-semibold">{post.author || 'Maison de SON Editorial'}</Link>
                                    {formattedDate && <><span className="text-gray-200">|</span><span>{formattedDate}</span></>}
                                    {post.readTime && <><span className="text-gray-200">|</span><span>⏱ {post.readTime}</span></>}
                                    <span className="text-gray-200">|</span><span>{wordCount.toLocaleString()} từ</span>
                                </div>
                            </header>

                            {/* Table of Contents — mobile */}
                            {toc.length > 3 && (
                                <details className="mb-8 rounded-2xl border border-[#e0d7ca] bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:hidden group">
                                    <summary className="px-5 py-4 cursor-pointer text-[13px] font-bold text-[#3a2f24] flex items-center justify-between hover:bg-gray-50 transition-colors select-none">
                                        <span>📖 Nội dung bài viết</span>
                                        <svg className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </summary>
                                    <nav className="px-5 pb-5 border-t border-gray-100 pt-3">
                                        <ol className="space-y-1">
                                            {toc.map((item, i) => (
                                                <li key={i}>
                                                    <a href={`#${item.id}`} className={`block text-[13px] leading-relaxed hover:text-primary transition-colors ${item.level === 3 ? 'pl-4 text-gray-400' : 'text-gray-600 font-medium'}`}>
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ol>
                                    </nav>
                                </details>
                            )}

                            {/* Article Body — Premium Typography */}
                            <article className="
                                article-body
                                prose prose-base max-w-none
                                prose-headings:font-sans prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-headings:tracking-[-0.01em]
                                prose-h1:text-2xl prose-h1:mt-14 prose-h1:mb-6
                                prose-h2:text-[22px] prose-h2:mt-14 prose-h2:mb-5 prose-h2:pt-8 prose-h2:border-t-2 prose-h2:border-[#f0ebe4] sm:prose-h2:text-[24px]
                                prose-h3:text-[18px] prose-h3:mt-10 prose-h3:mb-4 sm:prose-h3:text-[19px]
                                prose-p:text-[16px] prose-p:text-[#3d3d3d] prose-p:leading-[1.85] prose-p:my-5 sm:prose-p:text-[17px] sm:prose-p:leading-[1.9] sm:prose-p:my-6
                                prose-li:text-[16px] prose-li:text-[#3d3d3d] prose-li:leading-[1.85] prose-li:my-1.5 sm:prose-li:text-[17px]
                                prose-ul:my-6 prose-ol:my-6
                                prose-strong:text-[#1a1a1a] prose-strong:font-semibold
                                prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:decoration-primary/30 prose-a:underline-offset-2 hover:prose-a:decoration-primary/70
                                prose-blockquote:border-l-[3px] prose-blockquote:border-primary/40 prose-blockquote:pl-5 prose-blockquote:py-2 prose-blockquote:text-[#555] prose-blockquote:bg-[#faf8f5] prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
                                prose-hr:border-[#ebe5dc] prose-hr:my-12
                                prose-img:rounded-2xl prose-img:my-8 prose-img:w-full prose-img:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                                prose-table:text-sm prose-th:p-3.5 prose-th:border prose-th:border-gray-200 prose-th:bg-[#faf8f5] prose-th:font-semibold prose-th:text-left
                                prose-td:p-3.5 prose-td:border prose-td:border-gray-100
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        h2: ({ children, ...props }) => {
                                            const text = String(children);
                                            const id = text
                                                .toLowerCase()
                                                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                                                .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                                .replace(/[^a-z0-9\s-]/g, '')
                                                .replace(/\s+/g, '-')
                                                .replace(/-+/g, '-')
                                                .slice(0, 60);
                                            // Special styling for "Kết luận nhanh" section
                                            const isQuickConclusion = text.includes('Kết luận nhanh') || text.includes('ket luan nhanh');
                                            return <h2 id={id} className={isQuickConclusion ? 'scroll-mt-32' : 'scroll-mt-32'} {...props}>{children}</h2>;
                                        },
                                        h3: ({ children, ...props }) => {
                                            const text = String(children);
                                            const id = text
                                                .toLowerCase()
                                                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                                                .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                                .replace(/[^a-z0-9\s-]/g, '')
                                                .replace(/\s+/g, '-')
                                                .replace(/-+/g, '-')
                                                .slice(0, 60);
                                            return <h3 id={id} className="scroll-mt-32" {...props}>{children}</h3>;
                                        },
                                        // Enhanced image rendering
                                        img: ({ src, alt, ...props }) => (
                                            <figure className="my-10 sm:my-12">
                                                <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                                                    <img src={src} alt={alt || ''} className="w-full h-auto block" loading="lazy" {...props} />
                                                </div>
                                                {alt && (
                                                    <figcaption className="mt-3 text-center text-[13px] text-gray-400 italic">{alt}</figcaption>
                                                )}
                                            </figure>
                                        ),
                                        // Enhanced links with arrow
                                        a: ({ href, children, ...props }) => {
                                            const isInternal = href && !href.startsWith('http');
                                            if (isInternal) {
                                                return (
                                                    <Link href={href || '#'} className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary/70 transition-colors" {...props}>
                                                        {children}
                                                    </Link>
                                                );
                                            }
                                            return <a href={href} className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary/70 transition-colors" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                                        },
                                        // Enhanced list items
                                        ul: ({ children, ...props }) => (
                                            <ul className="my-6 space-y-2.5 list-none pl-0" {...props}>
                                                {children}
                                            </ul>
                                        ),
                                        li: ({ children, ...props }) => (
                                            <li className="flex items-start gap-3 text-[16px] sm:text-[17px] text-[#3d3d3d] leading-[1.85]" {...props}>
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                                <span>{children}</span>
                                            </li>
                                        ),
                                    }}
                                >
                                    {post.body}
                                </ReactMarkdown>
                            </article>

                            {/* Tags */}
                            <div className="mt-12 pt-6 border-t-2 border-[#f0ebe4]">
                                <div className="flex flex-wrap gap-2">
                                    {post.category && (
                                        <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{post.category}</span>
                                    )}
                                    {(post.tags || '').split(',').filter(Boolean).map((tag: string) => (
                                        <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-full border bg-white text-gray-500 border-gray-200">{tag.trim()}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Share */}
                            <div className="mt-6 pt-5 border-t border-[#f0ebe4]">
                                <ArticleShare title={post.title} />
                            </div>

                            {/* Author Card */}
                            <div className="mt-8 p-6 bg-white rounded-2xl border border-[#e8e0d4] flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 relative ring-2 ring-[#f0ebe4]">
                                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Maison de SON" fill sizes="56px" className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <Link href="/tac-gia/maison-editorial" className="text-[15px] font-bold hover:text-primary transition-colors">{post.author || 'Maison de SON Editorial'}</Link>
                                    <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">Đội ngũ biên tập Maison de SON — review thực tế, không sponsored, verify số liệu từ ≥ 2 nguồn độc lập.</p>
                                    <Link href="/tac-gia/maison-editorial" className="text-[11px] font-bold text-primary mt-2 inline-block hover:underline">Xem tất cả bài viết →</Link>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <section className="mt-8 rounded-2xl border border-[#e0d7ca] bg-gradient-to-br from-[#f7f2eb] to-[#faf8f5] p-6 sm:rounded-3xl sm:p-8">
                                <h2 className="text-lg font-serif font-bold mb-2 text-[#1b120d]">Cần gợi ý mùi phù hợp sau khi đọc bài này?</h2>
                                <p className="text-[14px] text-gray-600 mb-5 leading-[1.8]">Nếu bạn vẫn đang phân vân giữa vài lựa chọn, cứ nhắn Zalo. Maison de SON sẽ gợi ý theo gu mùi, ngân sách và hoàn cảnh dùng thực tế.</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0068FF] text-white text-sm font-bold rounded-full hover:bg-[#0055d4] transition-colors shadow-[0_4px_14px_rgba(0,104,255,0.3)]">💬 Hỏi qua Zalo</a>
                                    <Link href="/bang-xep-hang" className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#d4c9b8] bg-white text-[#4b3b30] text-sm font-bold rounded-full hover:border-primary hover:text-primary transition-colors">Xem bảng xếp hạng</Link>
                                </div>
                            </section>

                            <div className="mt-8">
                                <Link href="/kien-thuc" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary font-semibold transition-colors">← Quay lại Kiến thức</Link>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <section className="mt-14 pt-10 border-t-2 border-[#f0ebe4]">
                                    <h2 className="text-xl font-serif font-bold mb-7 text-[#1a1a1a]">Bài viết liên quan</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {relatedPosts.map((p: any) => (
                                            <Link key={p.urlSlug} href={`/${p.urlSlug}`} className="group flex flex-col">
                                                <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-3 relative shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                                                    <Image src={p.mainImage || PLACEHOLDER_IMAGE} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized={!p.mainImage || p.mainImage.startsWith('http')} />
                                                </div>
                                                <span className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1.5">{p.category}</span>
                                                <h3 className="text-[14px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                                                <p className="text-[11px] text-gray-400 mt-1.5">{p.readTime}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-[300px] flex-shrink-0">
                            <div className="sticky top-[100px] space-y-5">
                                {/* TOC — desktop only */}
                                {toc.length > 3 && (
                                    <nav className="hidden lg:block border border-[#e8e0d4] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                        <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-4">📖 Trong bài này</h3>
                                        <ol className="space-y-1.5">
                                            {toc.filter(t => t.level === 2).map((item, i) => (
                                                <li key={i}>
                                                    <a href={`#${item.id}`} className="block text-[12px] leading-relaxed text-gray-500 font-medium hover:text-primary transition-colors py-0.5">{item.text}</a>
                                                </li>
                                            ))}
                                        </ol>
                                    </nav>
                                )}

                                <div className="border border-[#e8e0d4] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                    <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-4">🧴 Sản phẩm nên xem tiếp</h3>
                                    <div className="space-y-4">
                                        {relatedProducts.map(product => (
                                            <Link key={product.id} href={`/${product.id}`} className="flex items-center gap-3 group">
                                                <div className="w-14 h-14 bg-[#f7f5f2] rounded-xl overflow-hidden flex-shrink-0 relative">
                                                    <Image src={product.image} alt={product.name} fill sizes="56px" className="object-contain p-1 group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[9px] font-bold text-primary tracking-wider uppercase">{product.brand}</div>
                                                    <div className="text-[12px] font-semibold truncate group-hover:text-primary transition-colors">{product.name}</div>
                                                    <div className="text-[10px] text-gray-400 mt-0.5">★ {product.score.total}/10</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/bang-xep-hang" className="block text-center text-[10px] font-bold text-primary hover:underline mt-4 pt-3 border-t border-gray-100">Xem tất cả →</Link>
                                </div>

                                <div className="border border-[#e8e0d4] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                    <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-3">🏷️ Chủ đề</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Nước hoa Nam', 'Nước hoa Nữ', 'Niche', 'Designer', 'Mùa Hè', 'Mùa Đông', 'Hẹn hò', 'Công sở'].map(tag => (
                                            <Link key={tag} href="/kien-thuc" className="text-[10px] font-semibold px-2.5 py-1.5 bg-[#faf8f5] rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors">{tag}</Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[#e6d8c7] bg-[#1c130f] p-5 text-white shadow-[0_12px_40px_rgba(27,18,13,0.16)]">
                                    <div className="text-lg mb-2">🎯</div>
                                    <h3 className="text-[14px] font-bold mb-1.5">Tư vấn chọn nước hoa</h3>
                                    <p className="text-[12px] opacity-80 mb-4 leading-[1.7]">Kể gu của bạn, ngân sách và hoàn cảnh dùng — Maison de SON sẽ gợi ý mùi phù hợp hơn.</p>
                                    <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="block text-center text-[12px] font-bold bg-white text-[#1c130f] px-4 py-2.5 rounded-full hover:bg-gray-100 transition-colors">Nhắn Zalo ngay</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}

// ─── MAIN ROUTER ─────────────────────────────────────────────
export default async function UniversalSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { product, post, brand } = await resolveSlug(slug);

    if (product) return <ProductPage product={product} slug={slug} />;
    if (brand) return <BrandPage brand={brand} slug={slug} />;
    if (post) return <ArticlePage post={post} slug={slug} />;

    notFound();
}
