import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import ArticleShare from '@/components/ArticleShare';
import Link from 'next/link';
import Image from 'next/image';
import { Children, isValidElement, Suspense, type ReactNode } from 'react';
import { getPostByUrlSlug, getAllPosts } from '@/lib/dataPosts';
import {
    getProductBySlug,
    getAllProducts,
    getPublishedProducts,
    getBrandBySlug,
    getAllBrands,
    getProductsByBrand,
} from '@/lib/dataFetchers';
import { getProductUrl, isProductSlug } from '@/lib/productUrl';
import type { Perfume } from '@/types';
import ProductClientV2 from '@/components/pdp/ProductClientV2';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedProducts from '@/components/RelatedProducts';
import RelatedArticles from '@/components/RelatedArticles';
import Footer from '@/components/Footer';
import BrandDetailPage, { buildBrandDetail } from '@/components/brand/BrandDetailPage';
import { getBrandEditorial } from '@/components/brand/brandContent';
import { getBrandSeoMetadata } from '@/lib/brandSeoMetadata';
import { getProductSeoMetadata } from '@/lib/productSeoMetadata';
import ProductCommercialGuide from '@/components/pdp/ProductCommercialGuide';
import { getCanonicalBrandSlug } from '@/lib/brandCanonical';
import { getArticleSeoMetadata } from '@/lib/articleSeoMetadata';
import ArticleIntentSupport from '@/components/article/ArticleIntentSupport';

// false = unknown slugs get a real HTTP 404 (not soft-404 200 under streaming/loading.tsx).
// All valid product / article / brand paths are emitted by generateStaticParams at build.
export const dynamicParams = false;
export const revalidate = 86400; // ISR: re-generate sau 24 giờ (giảm edge requests, content ít thay đổi)


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
        getPublishedProducts(),
        getAllBrands(),
    ]);
    return [
        ...posts.map((p: any) => ({ slug: p.urlSlug })),
        ...products.map((p: Perfume) => ({ slug: getProductUrl(p).slice(1) })),
        ...brands.map((b: any) => ({ slug: b.slug })),
    ].filter(x => x.slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { product, post, brand } = await resolveSlug(slug);
    const now = new Date();
    const mm_yyyy = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

    if (product) {
        const productUrl = getProductUrl(product);
        const approved = getProductSeoMetadata(product.id);
        if (approved) {
            return {
                title: approved.title,
                description: approved.description,
                keywords: [product.name, product.brand, `mua ${product.name} chính hãng`, `${product.name} mua ở đâu`, `review ${product.name}`],
                alternates: { canonical: approved.canonical },
                openGraph: {
                    title: approved.title,
                    description: approved.description,
                    url: approved.canonical,
                    images: [product.image],
                },
            };
        }
        return {
            title: product.seoTitle || `${product.brand} ${product.name} chính hãng mua ở đâu? Review 2026`,
            description: product.metaDescription || `Đánh giá ${product.brand} ${product.name} chính hãng: độ bám tỏa thực tế và tư vấn nơi mua uy tín 2026 tại Maison De Son.`,
            keywords: [product.name, product.brand, `mua ${product.name} chính hãng`, `${product.name} mua ở đâu`, `review ${product.name}`],
            alternates: { canonical: `${CANONICAL_BASE}${productUrl}` },
            openGraph: {
                title: `${product.brand} ${product.name} — Maison de SON`,
                description: product.verdict,
                images: [product.image],
            },
        };
    }
    if (brand) {
        const approved = getBrandSeoMetadata(brand.slug);
        if (approved) {
            return {
                title: approved.title,
                description: approved.description,
                alternates: { canonical: approved.canonical },
                openGraph: {
                    title: approved.title,
                    description: approved.description,
                    url: approved.canonical,
                },
            };
        }
        const editorial = getBrandEditorial(brand.slug);
        return {
            title: editorial?.intro
                ? `Nước hoa ${brand.name} | Review & Gợi ý chọn mùi | Maison de Son`
                : `Nước hoa ${brand.name} | Maison de Son`,
            description:
                editorial?.intro ||
                `Khám phá nước hoa ${brand.name} tại Maison de Son với review và gợi ý chọn mùi phù hợp.`,
            alternates: { canonical: `${CANONICAL_BASE}/${brand.slug}` },
        };
    }
    if (post) {
        const approved = getArticleSeoMetadata(slug);
        if (approved) {
            return {
                title: approved.title,
                description: approved.description,
                alternates: { canonical: approved.canonical },
                openGraph: {
                    title: approved.title,
                    description: approved.description,
                    url: approved.canonical,
                    images: post.mainImage ? [{ url: post.mainImage, width: 1200, height: 630 }] : [],
                    type: 'article',
                    publishedTime: post.publishedAt || undefined,
                },
            };
        }
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
    // Should be unreachable for unknown slugs when dynamicParams=false.
    // Keep defensive not-found metadata without a self-canonical.
    return {
        title: 'Không tìm thấy | Maison de SON',
        robots: { index: false, follow: false },
    };
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
const CATEGORY_LABELS: Record<string, string> = {
    'Product Review': 'Đánh giá sản phẩm',
    'Buying Guide': 'Cẩm nang chọn mua',
    'How-to': 'Hướng dẫn',
    'Kiến thức': 'Kiến thức',
    'Trend': 'Xu hướng',
    'So sánh': 'So sánh',
    'Brand Story': 'Câu chuyện thương hiệu',
};

// ─── PRODUCT PAGE (render khi slug là sản phẩm) ──────────────
async function ProductPage({ product, slug }: { product: Perfume; slug: string }) {
    const productUrl = getProductUrl(product);
    const commercial = getProductSeoMetadata(product.id);
    const brandSlug = getCanonicalBrandSlug(product);
    const sameBrand = commercial
        ? (await getProductsByBrand(brandSlug)).filter((p) => p.id !== product.id)
        : [];

    // Product JSON-LD: identity only. No aggregateRating / offers unless backed by
    // a verified live commerce or review-count source of truth (Maisondeson is catalog/content SEO).
    const jsonLd = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: `${product.brand} ${product.name}`,
        image: product.image,
        description: product.description,
        brand: { '@type': 'Brand', name: product.brand },
        sku: product.id,
        url: commercial?.canonical || `${SITE_URL}${productUrl}`,
    };

    // Breadcrumb JSON-LD 4 tầng (cho Google), UI 3 tầng (cho người dùng)
    const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: product.gender === 'nam' ? 'Nam giới' : product.gender === 'nu' ? 'Nữ giới' : 'Unisex', item: `${SITE_URL}/${product.gender === 'nam' ? 'nuoc-hoa-nam-chinh-hang' : product.gender === 'nu' ? 'nuoc-hoa-nu-chinh-hang' : 'nuoc-hoa-unisex-chinh-hang'}` },
            { '@type': 'ListItem', position: 3, name: product.brand, item: `${SITE_URL}/${product.brandSlug || product.brand.toLowerCase().replace(/\s+/g, '-')}` },
            { '@type': 'ListItem', position: 4, name: product.name, item: commercial?.canonical || `${SITE_URL}${productUrl}` },
        ],
    };

    return (
        <main className="min-h-screen bg-[var(--color-bg)] pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <ScrollProgress />
            <Header />
            <div className="max-w-[1200px] mx-auto px-5 py-8">
                {/* Breadcrumb UI removed — ProductClientV2 already shows category + brand inline */}
                <ProductClientV2
                    product={product}
                    commercialH1={commercial?.h1}
                    commercialMode={!!commercial}
                    commercialGuide={
                        commercial ? (
                            <ProductCommercialGuide
                                product={product}
                                sameBrandProducts={sameBrand}
                            />
                        ) : undefined
                    }
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
            <Footer />
        </main>
    );
}

// ─── BRAND PAGE (canonical /[brandSlug] — rich template ported from nested) ──
async function BrandPage({ brand, slug }: { brand: { name: string; slug: string }; slug: string }) {
    const detail = buildBrandDetail(slug) || buildBrandDetail(brand.slug);
    if (!detail) notFound();
    return <BrandDetailPage brand={detail} />;
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

/** Vietnamese long date without locale APIs (SSR/client identical). */
function formatArticleDateVi(raw: string | null | undefined): string | null {
    if (!raw) return null;
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return null;
    const months = [
        'tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6',
        'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12',
    ];
    return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

/** True if published within the last 7 days (stable server-time check only). */
function isArticleRecentlyUpdated(raw: string | null | undefined): boolean {
    if (!raw) return false;
    const t = new Date(raw).getTime();
    if (Number.isNaN(t)) return false;
    // Use publishedAt vs a fixed render instant from the date fields only —
    // for static/ISR pages this is evaluated on the server at generate time.
    // Avoid Date.now() only when comparing would still change at request time;
    // badge is decorative — prefer false when older than ~7 calendar days from build/request.
    const ageMs = Date.now() - t;
    return ageMs >= 0 && ageMs < 7 * 24 * 60 * 60 * 1000;
}

/**
 * Markdown often wraps a sole image in <p>. Custom img renders <figure> (block).
 * <p><figure> is invalid HTML; the browser "repairs" SSR DOM → React #418 hydration.
 * Unwrap paragraphs that contain block-level children so SSR DOM matches React tree.
 */
const MD_BLOCK_TAGS = new Set([
    'figure', 'div', 'table', 'ul', 'ol', 'pre', 'blockquote',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'section', 'aside',
]);

function markdownParagraphHasBlockChild(children: ReactNode): boolean {
    return Children.toArray(children).some((child) => {
        if (!isValidElement(child)) return false;
        const t = child.type;
        // Native block tags already in the tree
        if (typeof t === 'string' && MD_BLOCK_TAGS.has(t)) return true;
        // Custom markdown renderers (function components) that must not nest in <p>
        if (typeof t === 'function') {
            const props = child.props as Record<string, unknown>;
            // Image renderer (src/alt) or table/list-like props
            if (props && typeof props.src === 'string') return true;
            return false;
        }
        return false;
    });
}

/** Stable plain text from markdown heading children (no [object Object]). */
function flattenMarkdownText(children: ReactNode): string {
    return Children.toArray(children)
        .map((child) => {
            if (typeof child === 'string' || typeof child === 'number') return String(child);
            if (isValidElement(child)) {
                const props = child.props as { children?: ReactNode };
                return flattenMarkdownText(props.children);
            }
            return '';
        })
        .join('')
        .trim();
}

function slugifyHeadingId(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 60);
}

async function ArticlePage({ post, slug }: { post: any; slug: string }) {
    const articleSeo = getArticleSeoMetadata(slug);
    const articleUrl = articleSeo?.canonical || `${SITE_URL}/${slug}`;
    const displayTitle = articleSeo?.h1 || post.title;
    const displayDescription = articleSeo?.description || post.excerpt || '';
    const isInformational = articleSeo?.moduleProfile === 'INFORMATIONAL_LIGHT';
    const isCommercialArticle =
        articleSeo?.moduleProfile === 'COMMERCIAL_FULL' ||
        articleSeo?.moduleProfile === 'COMMERCIAL_FULL_PRICE_THRESHOLD';

    const [allPosts, allProducts] = await Promise.all([getAllPosts(), getAllProducts()]);

    const relatedPosts = allPosts
        .filter((p: any) => p.urlSlug !== slug && (
            p.category === post.category ||
            post.title.split(' ').some((w: string) => w.length > 4 && p.title.toLowerCase().includes(w.toLowerCase()))
        ))
        .slice(0, 3);

    // Contextual product chips for commercial investigation articles only
    const articleHay = `${post.title} ${post.body || ''}`.toLowerCase();
    const relatedProducts: Perfume[] = isCommercialArticle
        ? allProducts
            .filter((p) => {
                const brand = p.brand.toLowerCase();
                const name = p.name.toLowerCase();
                return (
                    articleHay.includes(p.id.toLowerCase()) ||
                    (brand.length >= 4 && articleHay.includes(brand)) ||
                    (name.length >= 5 && articleHay.includes(name))
                );
            })
            .slice(0, 6)
        : [];
    // Fallback: a few published products if keyword filter yields nothing
    const relatedProductsFinal =
        relatedProducts.length > 0 ? relatedProducts : isCommercialArticle ? allProducts.slice(0, 4) : [];

    const relatedReadings =
        isInformational
            ? relatedPosts.slice(0, 3).map((p: any) => ({
                href: `/${p.urlSlug}`,
                label: getArticleSeoMetadata(p.urlSlug)?.h1 || p.title,
            }))
            : [];

    // Stable date formatting (avoid Node vs browser toLocaleDateString divergence).
    const formattedDate = formatArticleDateVi(post.publishedAt);

    const tagColorClass = TAG_COLORS[post.category] || 'bg-gray-100 text-gray-600 border-gray-200';
    const toc = extractTOC(post.body || '');

    // Word count for reading stats — plain integer, no locale separators.
    const wordCount = (post.body || '').split(/\s+/).filter(Boolean).length;
    // "Mới cập nhật" badge: compute once from publishedAt (no Date.now() at render).
    const isRecentlyUpdated = isArticleRecentlyUpdated(post.publishedAt);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: displayTitle,
        description: displayDescription,
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
                                <span className="text-gray-500 line-clamp-1">{displayTitle}</span>
                            </nav>

                            {/* Article Header Card */}
                            <header className="mb-10 rounded-2xl border border-[#e8e0d4] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-7 md:p-9">
                                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                                    {post.category && (
                                        <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>{CATEGORY_LABELS[post.category] || post.category}</span>
                                    )}
                                    {isRecentlyUpdated && (
                                        <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-200">Mới cập nhật</span>
                                    )}
                                </div>
                                <h1 className="text-[26px] font-serif font-bold leading-[1.25] text-[#1a1a1a] sm:text-[34px] md:text-[40px]">{displayTitle}</h1>
                                <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-gray-400 font-medium border-t border-gray-100 pt-5">
                                    <Link href="/tac-gia/maison-editorial" className="text-gray-600 hover:text-primary transition-colors font-semibold">{post.author || 'Maison de SON Editorial'}</Link>
                                    {formattedDate && <><span className="text-gray-200">|</span><span>{formattedDate}</span></>}
                                    {post.readTime && <><span className="text-gray-200">|</span><span>⏱ {post.readTime}</span></>}
                                    <span className="text-gray-200">|</span><span>{wordCount} từ</span>
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
                                prose-h1:text-2xl prose-h1:mt-10 prose-h1:mb-4
                                prose-h2:text-[26px] prose-h2:mt-14 prose-h2:mb-[18px] prose-h2:pt-4 prose-h2:border-t-2 prose-h2:border-[#e8e0d4] sm:prose-h2:text-[30px] md:prose-h2:text-[32px]
                                prose-h3:text-[20px] prose-h3:mt-9 prose-h3:mb-[14px] sm:prose-h3:text-[22px]
                                prose-p:text-[16px] prose-p:text-[#3d3d3d] prose-p:leading-[1.9] prose-p:my-5 sm:prose-p:text-[17px] sm:prose-p:leading-[1.95] sm:prose-p:my-[22px]
                                prose-li:text-[16px] prose-li:text-[#3d3d3d] prose-li:leading-[1.85] prose-li:my-2.5 sm:prose-li:text-[17px]
                                prose-ul:my-7 prose-ol:my-7
                                prose-strong:text-[#1a1a1a] prose-strong:font-semibold
                                prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:decoration-primary/30 prose-a:underline-offset-2 hover:prose-a:decoration-primary/70
                                prose-blockquote:border-l-[3px] prose-blockquote:border-primary/40 prose-blockquote:pl-5 prose-blockquote:py-2 prose-blockquote:text-[#555] prose-blockquote:bg-[#faf8f5] prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
                                prose-hr:border-[#ebe5dc] prose-hr:my-12
                                prose-img:rounded-2xl prose-img:my-8 prose-img:w-full prose-img:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                                prose-table:text-sm prose-table:my-8 prose-th:p-3.5 prose-th:border prose-th:border-gray-200 prose-th:bg-[#faf8f5] prose-th:font-semibold prose-th:text-left
                                prose-td:p-3.5 prose-td:border prose-td:border-gray-100
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        // Unwrap <p> that contain block nodes (e.g. figure from img) to prevent invalid nesting / #418.
                                        p: ({ children }) => {
                                            if (markdownParagraphHasBlockChild(children)) {
                                                return <>{children}</>;
                                            }
                                            return (
                                                <p className="text-[16px] sm:text-[17px] text-[#3d3d3d] leading-[1.9] sm:leading-[1.95] my-5 sm:my-[22px]">
                                                    {children}
                                                </p>
                                            );
                                        },
                                        h2: ({ children }) => {
                                            const text = flattenMarkdownText(children);
                                            const id = slugifyHeadingId(text);
                                            return (
                                                <h2
                                                    id={id}
                                                    className="scroll-mt-32 text-[26px] sm:text-[28px] md:text-[32px] font-bold leading-[1.3] text-[#1a1a1a] mt-14 mb-[18px] pt-4 border-t-2 border-[#e8e0d4]"
                                                >
                                                    {children}
                                                </h2>
                                            );
                                        },
                                        h3: ({ children }) => {
                                            const text = flattenMarkdownText(children);
                                            const id = slugifyHeadingId(text);
                                            return (
                                                <h3
                                                    id={id}
                                                    className="scroll-mt-32 text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] text-[#1a1a1a] mt-9 mb-[14px]"
                                                >
                                                    {children}
                                                </h3>
                                            );
                                        },
                                        // Use phrasing-safe wrappers (span) so images remain valid inside
                                        // markdown <p> nodes. Block figure/div inside <p> caused browser DOM
                                        // repair → React hydration #418 on all article pages.
                                        img: ({ src, alt }) => (
                                            <span className="my-8 sm:my-9 block w-full">
                                                <span className="block overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={src}
                                                        alt={alt || ''}
                                                        className="w-full h-auto block"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                {alt ? (
                                                    <span className="mt-3.5 block text-center text-[13px] text-gray-400 italic">
                                                        {alt}
                                                    </span>
                                                ) : null}
                                            </span>
                                        ),
                                        a: ({ href, children }) => {
                                            const isInternal = href && !href.startsWith('http');
                                            if (isInternal) {
                                                return (
                                                    <Link href={href || '#'} className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary/70 transition-colors">
                                                        {children}
                                                    </Link>
                                                );
                                            }
                                            return (
                                                <a
                                                    href={href}
                                                    className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary/70 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {children}
                                                </a>
                                            );
                                        },
                                        ul: ({ children }) => (
                                            <ul className="my-7 space-y-2.5 list-none pl-0">
                                                {children}
                                            </ul>
                                        ),
                                        ol: ({ children }) => (
                                            <ol className="my-7 space-y-2.5 list-decimal pl-6">
                                                {children}
                                            </ol>
                                        ),
                                        li: ({ children }) => (
                                            <li className="flex items-start gap-3 text-[16px] sm:text-[17px] text-[#3d3d3d] leading-[1.85]">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" aria-hidden />
                                                <span>{children}</span>
                                            </li>
                                        ),
                                        // Wrapper div is a block sibling (not inside p) for GFM tables.
                                        table: ({ children }) => (
                                            <div className="table-wrapper overflow-x-auto my-7 rounded-xl border border-[#e8e3dc] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                                                <table className="w-full text-sm">{children}</table>
                                            </div>
                                        ),
                                    }}
                                >
                                    {/* Strip any H1 from body — title is already rendered in article header */}
                                    {(post.body || '').replace(/^#\s+.+\n*/m, '').trim()}
                                </ReactMarkdown>
                            </article>

                            {/* Shared commercial/informational intent support (SSR) */}
                            {articleSeo ? (
                                <ArticleIntentSupport
                                    profile={articleSeo.moduleProfile}
                                    relatedProducts={relatedProductsFinal}
                                    relatedReadings={relatedReadings}
                                />
                            ) : null}

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
                                <ArticleShare title={displayTitle} />
                            </div>

                            {/* Author Card */}
                            <div className="mt-8 p-6 bg-white rounded-2xl border border-[#e8e0d4] flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 relative ring-2 ring-[#f0ebe4]">
                                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Maison de SON" fill sizes="56px" className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <Link href="/tac-gia/maison-editorial" className="text-[15px] font-bold hover:text-primary transition-colors">{post.author || 'Maison de SON Editorial'}</Link>
                                    <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                                        {isInformational
                                            ? 'Đội ngũ biên tập Maison de SON — giải thích khái niệm và cách dùng, không bán hàng trên trang bài viết.'
                                            : 'Đội ngũ biên tập Maison de SON — review độc lập, không sponsored; quan hệ thương mại không quyết định kết luận biên tập.'}
                                    </p>
                                    <Link href="/tac-gia/maison-editorial" className="text-[11px] font-bold text-primary mt-2 inline-block hover:underline">Xem tất cả bài viết →</Link>
                                </div>
                            </div>

                            {/* CTA Box — commercial investigation only; no purchase CTA on informational */}
                            {!isInformational ? (
                                <section className="mt-8 rounded-2xl border border-[#e0d7ca] bg-gradient-to-br from-[#f7f2eb] to-[#faf8f5] p-6 sm:rounded-3xl sm:p-8">
                                    <h2 className="text-lg font-serif font-bold mb-2 text-[#1b120d]">Cần gợi ý mùi phù hợp sau khi đọc bài này?</h2>
                                    <p className="text-[14px] text-gray-600 mb-5 leading-[1.8]">Nếu bạn vẫn đang phân vân giữa vài lựa chọn, cứ nhắn Zalo. Maison de SON sẽ gợi ý theo gu mùi, ngân sách và hoàn cảnh dùng thực tế.</p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0068FF] text-white text-sm font-bold rounded-full hover:bg-[#0055d4] transition-colors shadow-[0_4px_14px_rgba(0,104,255,0.3)]">💬 Hỏi qua Zalo</a>
                                        <Link href="/nuoc-hoa-theo-nhu-cau" className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#d4c9b8] bg-white text-[#4b3b30] text-sm font-bold rounded-full hover:border-primary hover:text-primary transition-colors">Tìm nước hoa</Link>
                                    </div>
                                </section>
                            ) : null}

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

                                {!isInformational && relatedProductsFinal.length > 0 ? (
                                    <div className="border border-[#e8e0d4] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                        <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-4">🧴 Sản phẩm nên xem tiếp</h3>
                                        <div className="space-y-4">
                                            {relatedProductsFinal.slice(0, 3).map(product => (
                                                <Link key={product.id} href={getProductUrl(product)} className="flex items-center gap-3 group">
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
                                        <Link href="/nuoc-hoa-theo-nhu-cau" className="block text-center text-[10px] font-bold text-primary hover:underline mt-4 pt-3 border-t border-gray-100">Xem tất cả →</Link>
                                    </div>
                                ) : null}

                                <div className="border border-[#e8e0d4] bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                    <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-3">🏷️ Chủ đề</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Nước hoa Nam', 'Nước hoa Nữ', 'Niche', 'Designer', 'Mùa Hè', 'Mùa Đông', 'Hẹn hò', 'Công sở'].map(tag => (
                                            <Link key={tag} href="/kien-thuc" className="text-[10px] font-semibold px-2.5 py-1.5 bg-[#faf8f5] rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors">{tag}</Link>
                                        ))}
                                    </div>
                                </div>

                                {!isInformational ? (
                                    <div className="rounded-2xl border border-[#e6d8c7] bg-[#1c130f] p-5 text-white shadow-[0_12px_40px_rgba(27,18,13,0.16)]">
                                        <div className="text-lg mb-2">🎯</div>
                                        <h3 className="text-[14px] font-bold mb-1.5">Tư vấn chọn nước hoa</h3>
                                        <p className="text-[12px] opacity-80 mb-4 leading-[1.7]">Kể gu của bạn, ngân sách và hoàn cảnh dùng — Maison de SON sẽ gợi ý mùi phù hợp hơn.</p>
                                        <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer" className="block text-center text-[12px] font-bold bg-white text-[#1c130f] px-4 py-2.5 rounded-full hover:bg-gray-100 transition-colors">Nhắn Zalo ngay</a>
                                    </div>
                                ) : (
                                    <div className="rounded-2xl border border-[#e8e0d4] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                        <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-3">Minh bạch</h3>
                                        <p className="text-[12px] text-gray-600 leading-[1.7] mb-3">Bài viết mang tính giải thích. Xem tiêu chuẩn biên tập và chính sách chỉnh sửa khi cần.</p>
                                        <Link href="/gioi-thieu#tieu-chuan-bien-tap" className="block text-[12px] font-bold text-primary hover:underline">Tiêu chuẩn biên tập →</Link>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

// ─── MAIN ROUTER ─────────────────────────────────────────────
export default async function UniversalSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { product, post, brand } = await resolveSlug(slug);

    if (product) {
        // Only render published products on the live site
        if (!product.isPublished) return notFound();

        // If the slug is NOT the canonical new URL format, redirect 301
        const canonicalSlug = getProductUrl(product).slice(1); // remove leading /
        if (slug !== canonicalSlug) {
            redirect(`/${canonicalSlug}`);
        }

        return <ProductPage product={product} slug={slug} />;
    }
    if (brand) return <BrandPage brand={brand} slug={slug} />;
    if (post) return <ArticlePage post={post} slug={slug} />;

    notFound();
}
