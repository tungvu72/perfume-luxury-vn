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
            alternates: { canonical: `https://maisondeson.com/${product.id}` },
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
            alternates: { canonical: `https://maisondeson.com/${brand.slug}` },
        };
    }
    if (post) {
        return {
            title: `${post.title} | Maison de SON`,
            description: post.excerpt || `${post.title} — Maison de SON`,
            alternates: { canonical: `https://maisondeson.com/${slug}` },
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

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((p: Perfume) => (
                            <Link key={p.id} href={`/${p.id}`} className="group rounded-2xl border border-[#eadfce] bg-white p-4 shadow-[0_12px_35px_rgba(27,18,13,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)]">
                                <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-[#F7F7F7]">
                                    <Image src={p.image} alt={p.name} fill sizes="200px" className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-[9px] font-bold text-primary tracking-wider uppercase mb-0.5">{p.brand}</div>
                                <div className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">{p.name}</div>
                                <div className="text-[10px] text-gray-400 mt-1">{p.subName}</div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs font-bold">★ {p.score.total}/10</span>
                                    <span className="text-[10px] text-gray-400">{p.basePrice > 0 ? `${p.basePrice.toLocaleString()}đ` : 'Liên hệ'}</span>
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
            <main className="min-h-screen bg-[#fcfaf7] pb-20">
                <ScrollProgress />
                <Header />
                <div className="w-full relative overflow-hidden" style={{ background: '#111', minHeight: '240px' }}>
                    <div className="relative w-full" style={{ paddingTop: 'min(52%, 460px)' }}>
                        <Image
                            src={post.mainImage || PLACEHOLDER_IMAGE}
                            alt={post.title}
                            fill sizes="100vw"
                            className="object-cover object-center"
                            priority
                            unoptimized={!post.mainImage || post.mainImage.startsWith('http')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    </div>
                    {post.category && (
                        <div className="absolute top-4 left-4">
                            <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{post.category}</span>
                        </div>
                    )}
                </div>

                <div className="max-w-[1200px] mx-auto px-5 py-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 min-w-0">
                            <nav className="text-xs text-gray-400 flex items-center gap-1.5 mb-4">
                                <Link href="/" className="hover:text-primary">Trang chủ</Link>
                                <span>/</span>
                                <Link href="/kien-thuc" className="hover:text-primary">Kiến thức</Link>
                                <span>/</span>
                                <span className="text-gray-600 line-clamp-1">{post.title}</span>
                            </nav>

                            <section className="mb-8 rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-[0_18px_45px_rgba(27,18,13,0.04)] md:p-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    {post.category && (
                                        <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{post.category}</span>
                                    )}
                                    {post.publishedAt && (Date.now() - new Date(post.publishedAt).getTime()) < 7 * 24 * 60 * 60 * 1000 && (
                                        <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-bold">Mới cập nhật</span>
                                    )}
                                </div>
                                <h1 className="text-3xl md:text-[44px] font-serif font-bold mt-4 leading-tight text-gray-900">{post.title}</h1>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">{post.excerpt || 'Bài viết chia sẻ kiến thức, trải nghiệm thực tế và góc nhìn chọn mua nước hoa rõ ràng hơn cho người Việt.'}</p>
                                <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold border-t border-[var(--border)] pt-5">
                                    <Link href="/maison-editorial" className="text-gray-600 hover:text-primary transition-colors">{post.author || 'Maison de SON Editorial'}</Link>
                                    {formattedDate && <><span>•</span><span>{formattedDate}</span></>}
                                    {post.readTime && <><span>•</span><span>⏱ {post.readTime}</span></>}
                                </div>
                            </section>
                            <article className="
                                prose prose-base max-w-none
                                prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-semibold
                                prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4
                                prose-p:text-base prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:my-5
                                prose-li:text-base prose-li:text-gray-700 prose-li:leading-[1.9] prose-li:mb-1
                                prose-ul:my-5 prose-ol:my-5 prose-ul:space-y-1 prose-ol:space-y-1
                                prose-strong:text-gray-900 prose-strong:font-semibold
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:pl-5 prose-blockquote:py-1 prose-blockquote:text-gray-600 prose-blockquote:bg-[#faf8f5] prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                                prose-hr:border-gray-200 prose-hr:my-10
                                prose-img:rounded-xl prose-img:my-8 prose-img:w-full
                                prose-table:text-sm prose-th:p-3 prose-th:border prose-th:border-gray-200 prose-th:bg-gray-50 prose-th:font-semibold
                                prose-td:p-3 prose-td:border prose-td:border-gray-100
                            ">
                                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                    {post.body}
                                </ReactMarkdown>
                            </article>
                            <div className="mt-10 pt-6 border-t border-[var(--border)]">
                                <div className="flex flex-wrap gap-2">
                                    {post.category && (
                                        <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{post.category}</span>
                                    )}
                                    {(post.tags || '').split(',').filter(Boolean).map((tag: string) => (
                                        <span key={tag} className="text-[10px] font-semibold px-3 py-1.5 rounded-full border bg-gray-50 text-gray-500 border-gray-200">{tag.trim()}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 pt-5 border-t border-[var(--border)]">
                                <ArticleShare title={post.title} />
                            </div>
                            <div className="mt-6 p-5 bg-white rounded-2xl border border-[#eadfce] flex gap-4 items-start shadow-[0_12px_35px_rgba(27,18,13,0.03)]">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Maison de SON" fill sizes="48px" className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <Link href="/maison-editorial" className="text-sm font-bold hover:text-primary">{post.author || 'Maison de SON Editorial'}</Link>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Đội ngũ biên tập Maison de SON — review thực tế, không sponsored, verify số liệu từ ≥ 2 nguồn độc lập.</p>
                                    <Link href="/maison-editorial" className="text-[10px] font-bold text-primary mt-1 inline-block hover:underline">Xem tất cả bài viết →</Link>
                                </div>
                            </div>
                            <section className="mt-8 rounded-[28px] border border-[#eadfce] bg-[#f7f2eb] p-5 sm:p-6">
                                <h2 className="text-lg font-serif font-bold mb-2 text-[#1b120d]">Cần gợi ý mùi phù hợp sau khi đọc bài này?</h2>
                                <p className="text-sm text-gray-600 mb-4 leading-7">Nếu bạn vẫn đang phân vân giữa vài lựa chọn, cứ nhắn Zalo. Maison de SON sẽ gợi ý theo gu mùi, ngân sách và hoàn cảnh dùng thực tế.</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0068FF] text-white text-sm font-bold rounded-full hover:opacity-90">💬 Hỏi qua Zalo</a>
                                    <Link href="/bang-xep-hang" className="flex items-center justify-center gap-2 px-5 py-3 border border-[#decfbd] text-[#4b3b30] text-sm font-bold rounded-full hover:border-primary hover:text-primary">Xem bảng xếp hạng</Link>
                                </div>
                            </section>
                            <div className="mt-8">
                                <Link href="/kien-thuc" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary font-semibold">← Quay lại Kiến thức</Link>
                            </div>
                            {relatedPosts.length > 0 && (
                                <section className="mt-12 pt-8 border-t border-[var(--border)]">
                                    <h2 className="text-xl font-serif font-bold mb-6">Bài viết liên quan</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {relatedPosts.map((p: any) => (
                                            <Link key={p.urlSlug} href={`/${p.urlSlug}`} className="group flex flex-col">
                                                <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                                                    <Image src={p.mainImage || PLACEHOLDER_IMAGE} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized={!p.mainImage || p.mainImage.startsWith('http')} />
                                                </div>
                                                <span className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1">{p.category}</span>
                                                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                                                <p className="text-[11px] text-gray-400 mt-1">{p.readTime}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                        <aside className="lg:w-[300px] flex-shrink-0">
                            <div className="sticky top-[140px] space-y-6">
                                <div className="border border-[#eadfce] bg-white rounded-2xl p-5 shadow-[0_12px_35px_rgba(27,18,13,0.03)]">
                                    <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-4">🧴 Sản phẩm nên xem tiếp</h3>
                                    <div className="space-y-4">
                                        {relatedProducts.map(product => (
                                            <Link key={product.id} href={`/${product.id}`} className="flex items-center gap-3 group">
                                                <div className="w-14 h-14 bg-[#F7F7F7] rounded-xl overflow-hidden flex-shrink-0 relative">
                                                    <Image src={product.image} alt={product.name} fill sizes="56px" className="object-contain p-1 group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-[9px] font-bold text-primary tracking-wider uppercase">{product.brand}</div>
                                                    <div className="text-xs font-semibold truncate group-hover:text-primary transition-colors">{product.name}</div>
                                                    <div className="text-[10px] text-gray-400 mt-0.5">★ {product.score.total}/10</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/bang-xep-hang" className="block text-center text-[10px] font-bold text-primary hover:underline mt-4 pt-3 border-t border-[var(--border)]">Xem tất cả →</Link>
                                </div>
                                <div className="border border-[#eadfce] bg-white rounded-2xl p-5 shadow-[0_12px_35px_rgba(27,18,13,0.03)]">
                                    <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-3">🏷️ Chủ đề</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Nước hoa Nam', 'Nước hoa Nữ', 'Niche', 'Designer', 'Mùa Hè', 'Mùa Đông', 'Hẹn hò', 'Công sở'].map(tag => (
                                            <Link key={tag} href="/kien-thuc" className="text-[10px] font-semibold px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors">{tag}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-[#e6d8c7] bg-[#1c130f] p-5 text-white shadow-[0_20px_50px_rgba(27,18,13,0.16)]">
                                    <div className="text-lg mb-2">🎯</div>
                                    <h3 className="text-sm font-bold mb-1">Tư vấn chọn nước hoa</h3>
                                    <p className="text-xs opacity-80 mb-4 leading-6">Kể gu của bạn, ngân sách và hoàn cảnh dùng — Maison de SON sẽ gợi ý mùi phù hợp hơn.</p>
                                    <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-bold bg-white text-[#1c130f] px-4 py-2.5 rounded-full hover:opacity-90">Nhắn Zalo ngay</a>
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
