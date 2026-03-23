import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/sanity/lib/fetchers";
import { getAllPosts } from "@/sanity/lib/posts";
import { getProductUrl } from "@/lib/productUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison de SON | Kiến Thức, Review Nước Hoa & Gợi Ý Mua Chính Hãng",
  description:
    "Trang web chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa cho người Việt. Xem bảng xếp hạng, chọn mùi phù hợp và tham khảo nơi mua chính hãng giá tốt.",
  alternates: {
    canonical: "https://www.maisondeson.com/",
  },
  openGraph: {
    title: "Maison de SON | Kiến Thức & Review Nước Hoa #1 Việt Nam",
    description: "Chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa cho người Việt.",
    url: "https://www.maisondeson.com",
    siteName: "Maison de SON",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison de SON | Kiến Thức & Review Nước Hoa",
    description: "Chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa cho người Việt.",
  },
  keywords: [
    "review nước hoa",
    "nước hoa chính hãng",
    "giá nước hoa",
    "maison de son",
    "kinh nghiệm chọn nước hoa",
  ],
};

export const revalidate = 3600;

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200";

const CATEGORY_LABELS: Record<string, string> = {
  "Product Review": "Đánh giá",
  "Buying Guide": "Cẩm nang",
  "How-to": "Hướng dẫn",
  "Kiến thức": "Kiến thức",
  Trend: "Xu hướng",
  "So sánh": "So sánh",
  "Brand Story": "Thương hiệu",
};

const POPULAR_TAGS = [
  { label: "Floral", href: "/theo-not-huong" },
  { label: "Woody", href: "/theo-not-huong" },
  { label: "Summer", href: "/bang-xep-hang" },
  { label: "EDP", href: "/bang-xep-hang" },
  { label: "Niche", href: "/bang-xep-hang" },
  { label: "Office", href: "/bang-xep-hang" },
  { label: "Date Night", href: "/bang-xep-hang" },
  { label: "Fresh", href: "/theo-not-huong" },
];

export default async function Home() {
  const [allProducts, allPosts] = await Promise.all([
    getAllProducts(),
    getAllPosts(),
  ]);

  const featuredPost = allPosts[0];
  const latestPosts = allPosts.slice(1, 7);

  // Sản phẩm mới nhất cho sidebar
  const latestProducts = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 5);

  // Trending perfumes for mobile
  const trendingProducts = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 4);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maison de SON",
    url: "https://www.maisondeson.com",
    description: "Trang web chia sẻ kiến thức, review nước hoa cho người Việt",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.maisondeson.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maison de SON",
    url: "https://www.maisondeson.com",
    logo: "https://www.maisondeson.com/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-961-226-169",
      contactType: "Customer Service",
      availableLanguage: "Vietnamese",
    },
    sameAs: ["https://shopee.vn/maisondeson", "https://zalo.me/0961226169"],
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Header />

      {/* ═══════ FEATURED ARTICLE HERO ═══════ */}
      {featuredPost && (
        <section className="mx-auto max-w-[1200px] px-4 pt-4 md:pt-6">
          <Link
            href={`/${featuredPost.urlSlug}`}
            className="group relative block overflow-hidden rounded-2xl md:rounded-3xl"
          >
            <div className="relative h-[240px] sm:h-[320px] md:h-[420px] w-full bg-[var(--color-bg-muted)]">
              <Image
                src={featuredPost.mainImage || PLACEHOLDER}
                alt={featuredPost.title}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized={!featuredPost.mainImage || featuredPost.mainImage.startsWith("http")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-10">
              {featuredPost.category && (
                <span className="mb-3 inline-block rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {CATEGORY_LABELS[featuredPost.category] || featuredPost.category}
                </span>
              )}
              <h2 className="text-xl font-serif leading-tight text-white sm:text-2xl md:text-4xl md:max-w-[70%]">
                {featuredPost.title}
              </h2>
              <p className="mt-2 hidden text-sm text-white/80 md:block md:max-w-[60%] md:text-base md:leading-7">
                {featuredPost.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--color-text)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                Đọc ngay →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ═══════ 75/25 LAYOUT: Article Feed + Sidebar ═══════ */}
      <section className="mx-auto max-w-[1200px] px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

          {/* ── LEFT: Article Feed (75%) ── */}
          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Bài viết mới nhất
            </h2>
            <div className="space-y-4">
              {latestPosts.map((post: any) => (
                <Link
                  key={post.urlSlug}
                  href={`/${post.urlSlug}`}
                  className="group flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 sm:gap-5 sm:p-4"
                >
                  {/* Article thumbnail */}
                  <div className="relative h-[100px] w-[150px] flex-shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-muted)] sm:h-[120px] sm:w-[180px]">
                    <Image
                      src={post.mainImage || PLACEHOLDER}
                      alt={post.title}
                      fill
                      sizes="180px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={!post.mainImage || post.mainImage.startsWith("http")}
                    />
                    {/* Teal border accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--color-primary)]" />
                  </div>

                  {/* Article info */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    {post.category && (
                      <span className="mb-1.5 inline-flex w-fit rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-subtle)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
                        {CATEGORY_LABELS[post.category] || post.category}
                      </span>
                    )}
                    <h3 className="text-base font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)] sm:text-lg line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-1 hidden text-sm leading-relaxed text-[var(--color-text-muted)] sm:line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                      <span className="font-medium">{post.author || "Maison de SON"}</span>
                      {post.readTime && (
                        <>
                          <span className="text-[var(--color-border)]">•</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View all articles CTA */}
            <div className="mt-6 text-center">
              <Link
                href="/kien-thuc"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-bold text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Xem tất cả bài viết →
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Sidebar (25%) ── */}
          <aside className="space-y-5">
            {/* Sản phẩm mới nhất */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Sản phẩm mới nhất
              </h3>
              <div className="space-y-3">
                {latestProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={getProductUrl(product)}
                    className="group flex items-center gap-3"
                  >
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-muted)]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1 transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                        {product.brand}
                      </div>
                      <div className="truncate text-sm font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                        {product.name}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        ★ {product.score.total}/10
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/bang-xep-hang"
                className="mt-4 block border-t border-[var(--color-border-subtle)] pt-3 text-center text-[11px] font-bold text-[var(--color-primary)] hover:underline"
              >
                Xem bảng xếp hạng →
              </Link>
            </div>

            {/* Popular Tags */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] p-5 text-white">
              <h3 className="text-sm font-bold">Cần tư vấn chọn nước hoa?</h3>
              <p className="mt-2 text-xs leading-relaxed opacity-85">
                Kể gu mùi, ngân sách và hoàn cảnh dùng — Maison de SON sẽ gợi ý phù hợp.
              </p>
              <a
                href="https://zalo.me/0961226169"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-white px-4 py-2.5 text-center text-xs font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-light)]"
              >
                Nhắn Zalo ngay
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ═══════ MOBILE: Trending Perfumes ═══════ */}
      <section className="mx-auto max-w-[1200px] px-4 pb-6 lg:hidden">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Trending Perfumes
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {trendingProducts.map((product) => (
            <Link
              key={product.id}
              href={getProductUrl(product)}
              className="group flex-shrink-0 w-[160px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 transition-all hover:shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[var(--color-bg-muted)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="160px"
                  className="object-contain p-3 transition-transform group-hover:scale-105"
                />
                {/* Teal border accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--color-primary)]" />
              </div>
              <div className="mt-2">
                <div className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {product.brand}
                </div>
                <div className="mt-0.5 truncate text-xs font-semibold text-[var(--color-text)]">
                  {product.name}
                </div>
                <div className="mt-1 text-[10px] text-[var(--color-text-muted)]">
                  ★ {product.score.total}/10
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ MOBILE BOTTOM NAV ═══════ */}
      <nav className="fixed bottom-0 left-0 z-50 flex w-full border-t border-[var(--color-border)] bg-white/95 py-1 backdrop-blur-sm md:hidden safe-area-pb shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {[
          {
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            label: "Trang chủ",
            href: "/",
          },
          {
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" /><path d="M12 4h9" /><path d="M4 9h16" /><path d="M4 15h16" />
              </svg>
            ),
            label: "Xếp hạng",
            href: "/bang-xep-hang",
          },
          {
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            ),
            label: "Thương hiệu",
            href: "/thuong-hieu",
          },
          {
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
            ),
            label: "Kiến thức",
            href: "/kien-thuc",
          },
          {
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            ),
            label: "Tư vấn",
            href: "https://zalo.me/0961226169",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-1 flex-col items-center py-1.5 text-center transition-colors ${
              index === 0 ? "text-[var(--color-primary)]" : "text-gray-400 hover:text-[var(--color-primary)]"
            }`}
          >
            {item.icon}
            <span className="mt-0.5 text-[9px] font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>

      <Footer />
    </main>
  );
}
