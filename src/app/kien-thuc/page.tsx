import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getAllPosts } from "@/sanity/lib/posts";
import { getAllProducts } from "@/sanity/lib/fetchers";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kiến Thức Nước Hoa - Review & Hướng Dẫn | Maison de SON",
  description:
    "Cẩm nang từ Maison de SON: review nước hoa, hướng dẫn chọn mùi, phân biệt thật giả, top picks theo ngân sách.",
  alternates: {
    canonical: "https://www.maisondeson.com/kien-thuc",
  },
  openGraph: {
    title: "Kiến Thức Nước Hoa | Maison de SON",
    description: "Review và hướng dẫn chọn nước hoa chuyên sâu từ Maison de SON",
  },
};

export const revalidate = 3600;

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800";

const CATEGORY_LABELS: Record<string, string> = {
  "Product Review": "Review",
  "Buying Guide": "Hướng dẫn",
  "How-to": "Hướng dẫn",
  "Kiến thức": "Kiến thức",
  Trend: "Xu hướng",
  "So sánh": "So sánh",
  "Brand Story": "Thương hiệu",
};

const POPULAR_TOPICS = [
  "Review", "Hướng dẫn", "Mùa hè", "Đi làm", "Hẹn hò",
  "Cận hasi", "Tập dần", "Rõ ràn", "Tân ơ",
  "Lượt bạn", "Hẹn hò", "Tìm nhạc",
];

function formatDate(date?: string | null) {
  if (!date) return "Mới cập nhật";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Mới cập nhật";
  return parsed.toLocaleDateString("vi-VN");
}

export default async function KienThucPage() {
  const [posts, allProducts] = await Promise.all([
    getAllPosts(),
    getAllProducts(),
  ]);

  const featured = posts[0] ?? null;
  const gridPosts = posts.slice(1);

  // Related products for sidebar
  const sidebarProducts = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] pb-20">
      <Header />

      {/* ═══════ HERO SECTION (Teal/Dark Background) ═══════ */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 text-center sm:py-14 md:py-16">
          <h1 className="text-3xl font-serif sm:text-4xl md:text-5xl">Kiến thức nước hoa</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Khám phá thế giới mùi hương qua các bài viết chuyên sâu
          </p>
        </div>
      </section>

      {/* ═══════ FILTER TABS ═══════ */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto px-4 py-2 no-scrollbar">
          {["Tất cả", "Review", "Roundup", "Hướng dẫn", "So sánh", "Tin tức"].map((tab, i) => (
            <button
              key={tab}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════ 75/25 LAYOUT ═══════ */}
      <section className="mx-auto max-w-[1200px] px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">

          {/* ── LEFT (75%): Featured + Article Grid ── */}
          <div>
            {/* Featured Article Card */}
            {featured && (
              <Link
                href={`/${featured.urlSlug || featured.fullSlug}`}
                className="group mb-8 grid grid-cols-1 gap-4 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:shadow-[var(--shadow-md)] sm:grid-cols-2"
              >
                <div className="relative h-[200px] overflow-hidden bg-[var(--color-bg-muted)] sm:h-full sm:min-h-[250px]">
                  <Image
                    src={featured.mainImage || PLACEHOLDER}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={!featured.mainImage || featured.mainImage.startsWith("http")}
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  {featured.category && (
                    <span className="mb-2 inline-flex w-fit rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {CATEGORY_LABELS[featured.category] || featured.category}
                    </span>
                  )}
                  <h2 className="text-xl font-serif font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)] sm:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {featured.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                    <span className="font-medium">{featured.author || "Maison de SON"}</span>
                    <span>•</span>
                    <span>{formatDate(featured.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* 3-Column Article Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post: any) => (
                <Link
                  key={post.urlSlug || post.fullSlug}
                  href={`/${post.urlSlug || post.fullSlug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-muted)]">
                    <Image
                      src={post.mainImage || PLACEHOLDER}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={!post.mainImage || post.mainImage.startsWith("http")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    {post.category && (
                      <span className="mb-2 inline-flex w-fit rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-subtle)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
                        {CATEGORY_LABELS[post.category] || post.category}
                      </span>
                    )}
                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-3 flex items-center gap-2 text-[10px] text-[var(--color-text-muted)]">
                      <span>{post.author || "Maison de SON"}</span>
                      <span>•</span>
                      <span>{post.readTime || "5 phút"}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (25%) ── */}
          <aside className="space-y-5">
            {/* Chủ đề phổ biến */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Chủ đề phổ biến
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Review", "Hướng dẫn", "Mùa hè", "Đi làm", "Hẹn hò", "Niche", "Designer", "So sánh"].map(
                  (topic) => (
                    <Link
                      key={topic}
                      href="/kien-thuc"
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-[11px] font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      {topic}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Sản phẩm liên quan */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Sản phẩm liên quan
              </h3>
              <div className="space-y-3">
                {sidebarProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/${product.id}`}
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
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] p-5 text-white">
              <h3 className="text-sm font-bold">Cần gợi ý mùi phù hợp?</h3>
              <p className="mt-2 text-xs leading-relaxed opacity-85">
                Nhắn Zalo để được tư vấn theo ngân sách và hoàn cảnh dùng thực tế.
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

      <Footer />
    </main>
  );
}
