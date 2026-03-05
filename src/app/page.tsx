import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getTopRankedProducts } from "@/sanity/lib/fetchers";
import { getAllPosts } from "@/sanity/lib/posts";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison de SON | Review Nước Hoa Chính Hãng & Giải Mã Scent DNA",
  description: "Cơ sở dữ liệu đánh giá nước hoa chuyên sâu (Niche, Designer & Dupe). Cam kết review trung thực, so sánh giá nước hoa chính hãng, tư vấn Zalo 24/7.",
  keywords: ["review nước hoa", "nước hoa chính hãng", "giá nước hoa", "maison de son", "scent dna"],
};

// Giới tính icons — SVG stroke-based, hiện đại
const GenderIcons = {
  male: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="19" r="7" />
      <line x1="18.9" y1="13.1" x2="27" y2="5" />
      <polyline points="22 5 27 5 27 10" />
    </svg>
  ),
  female: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="12" r="7" />
      <line x1="16" y1="19" x2="16" y2="28" />
      <line x1="11" y1="23.5" x2="21" y2="23.5" />
    </svg>
  ),
  unisex: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="19" r="5.5" />
      <circle cx="21.5" cy="12" r="5.5" />
      <line x1="15.4" y1="16.6" x2="16.6" y2="14.4" />
    </svg>
  ),
  bestseller: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3l3.09 6.26L26 10.27l-5 4.87 1.18 6.88L16 18.77l-6.18 3.25L11 15.14 6 10.27l6.91-1.01L16 3z" />
    </svg>
  ),
};

const CATEGORY_TAG_COLORS: Record<string, string> = {
  'Product Review': 'bg-amber-100 text-amber-700',
  'Buying Guide': 'bg-blue-100 text-blue-700',
  'How-to': 'bg-green-100 text-green-700',
  'Trend': 'bg-rose-100 text-rose-700',
  'So sánh': 'bg-orange-100 text-orange-700',
  'Brand Story': 'bg-indigo-100 text-indigo-700',
};

const PLACEHOLDER = 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800';

export default async function Home() {
  const [allProducts, topRanked, allPosts] = await Promise.all([
    getAllProducts(),
    getTopRankedProducts(),
    getAllPosts(),
  ]);

  // ─── SECTION DATA RULES ───────────────────────────────────────────────────
  // 1. XU HƯỚNG: Top rated theo score.total — dùng topRanked slice 6
  const trendingSection = topRanked.length > 0 ? topRanked.slice(0, 6) : allProducts.slice(0, 6);

  // 2. BẢNG XẾP HẠNG: Sắp xếp theo score.total desc (khác trending — lấy tiếp theo)
  const rankingSection = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 6);

  // 3. ĐÁNH GIÁ MỚI NHẤT: Lấy các sản phẩm có updatedAt mới nhất (không trùng top trending)
  const trendingIds = new Set(trendingSection.map((p: any) => p.id));
  const latestReviews = allProducts
    .filter((p: any) => !trendingIds.has(p.id))
    .slice(0, 4);

  // 4. BÀI VIẾT MỚI NHẤT: 3 bài viết nổi bật từ content/
  const featuredPosts = allPosts.slice(0, 3);

  const now = new Date();
  const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 py-4 md:py-6">
        <div className="relative rounded-2xl overflow-hidden bg-[#F5F0EB] h-[300px] md:h-[500px] flex flex-col justify-end p-6 md:p-14 group">
          <Image
            src="/hero-main-v2.png"
            alt="Maison de SON — Luxury Fragrance"
            fill sizes="100vw" priority
            className="object-cover object-right opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e0a]/80 via-[#1a0e0a]/40 to-transparent" />
          <div className="relative z-10 max-w-sm md:max-w-lg">
            <span className="text-[10px] md:text-[11px] font-bold text-[#c9a97a] tracking-[3px] uppercase mb-2 md:mb-3 block">
              Xu hướng tháng {currentMonthYear}
            </span>
            <h1 className="text-2xl md:text-5xl font-serif text-white leading-tight mb-4 md:mb-8">
              Đỉnh cao của sự thanh lịch hiện đại
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link href="/bang-xep-hang"
                className="inline-block bg-white text-[#1a0e0a] px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-[#c9a97a] hover:text-white transition-colors active:scale-95">
                Khám phá ngay
              </Link>
              <Link href="/kien-thuc"
                className="inline-block border border-white/50 text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-white/10 transition-colors active:scale-95">
                Đọc kiến thức
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK CATEGORIES ────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-4 gap-2 md:gap-5">
          {[
            { icon: GenderIcons.male, label: "Cho Nam", href: "/nam-gioi", accent: "group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50" },
            { icon: GenderIcons.female, label: "Cho Nữ", href: "/nu-gioi", accent: "group-hover:text-pink-600 group-hover:border-pink-200 group-hover:bg-pink-50" },
            { icon: GenderIcons.unisex, label: "Unisex", href: "/unisex", accent: "group-hover:text-purple-600 group-hover:border-purple-200 group-hover:bg-purple-50" },
            { icon: GenderIcons.bestseller, label: "Best Seller", href: "/bang-xep-hang", accent: "group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5" },
          ].map((cat, i) => (
            <Link key={i} href={cat.href}
              className={`group flex flex-col items-center justify-center p-3 md:p-6 border border-[var(--border)] rounded-2xl transition-all duration-200 active:scale-95 bg-white ${cat.accent}`}>
              <div className="mb-1.5 md:mb-3 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 text-gray-500 group-hover:text-inherit">
                {cat.icon}
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-gray-600 group-hover:text-inherit">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── XU HƯỚNG HIỆN NAY ───────────────────────────────────────────── */}
      {trendingSection.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-8 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-5 md:mb-6">
            <div>
              <span className="text-[10px] font-bold text-primary tracking-[3px] uppercase block mb-1">🔥 Hot tháng {currentMonthYear}</span>
              <h2 className="text-xl md:text-3xl font-serif">Xu hướng hiện nay</h2>
            </div>
            <Link href="/bang-xep-hang" className="text-[11px] font-bold text-primary tracking-wider hover:underline uppercase">
              Tất cả →
            </Link>
          </div>
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex overflow-x-auto gap-3 pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-6 md:gap-4 scrollbar-hide">
            {trendingSection.map((p: any) => (
              <Link key={p.id} href={`/san-pham/${p.id}`}
                className="min-w-[120px] md:min-w-0 group bg-white rounded-xl hover:shadow-xl transition-all duration-300 p-1 flex-shrink-0">
                <div className="aspect-square bg-[#F7F7F7] rounded-xl overflow-hidden mb-2 relative">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 120px, 180px"
                    className="object-contain p-3 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-1.5 right-1.5 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold shadow">
                    {p.score.total}
                  </div>
                </div>
                <div className="px-1 text-[8px] font-bold text-gray-400 tracking-wider uppercase">{p.brand}</div>
                <div className="px-1 text-xs font-semibold truncate group-hover:text-primary transition-colors">{p.name}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ─── BẢNG XẾP HẠNG ──────────────────────────────────────────────── */}
      {rankingSection.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-8 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-5 md:mb-6">
            <div>
              <span className="text-[10px] font-bold text-gray-400 tracking-[3px] uppercase block mb-1">📊 Điểm cao nhất</span>
              <h2 className="text-xl md:text-3xl font-serif">Bảng xếp hạng tháng {currentMonthYear}</h2>
            </div>
            <Link href="/bang-xep-hang" className="text-[11px] font-bold text-primary tracking-wider hover:underline uppercase">
              Đầy đủ →
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-3 pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 scrollbar-hide">
            {rankingSection.slice(0, 6).map((product: any, i: number) => (
              <Link key={product.id} href={`/san-pham/${product.id}`}
                className="min-w-[155px] md:min-w-0 group bg-white rounded-xl hover:shadow-xl transition-all duration-300 p-2 flex-shrink-0">
                <div className="aspect-square bg-[#F7F7F7] rounded-xl overflow-hidden mb-3 relative">
                  <span className="absolute top-3 left-3 font-serif text-3xl opacity-8 font-black text-gray-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Image src={product.image} alt={product.name} fill
                    sizes="(max-width:768px) 155px, 350px"
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm">
                    ★ {product.score.total}/10
                  </div>
                </div>
                <div className="px-1">
                  <span className="text-[9px] font-bold text-gray-400 tracking-[2px] uppercase">{product.brand}</span>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors mt-0.5 line-clamp-1">{product.name}</h3>
                  <div className="text-xs text-gray-500 mt-1">{product.basePrice > 0 ? product.basePrice.toLocaleString() + ' VNĐ' : 'Liên hệ'}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ─── BÀI VIẾT KIẾN THỨC MỚI ─────────────────────────────────────── */}
      {featuredPosts.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-10 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-5 md:mb-6">
            <div>
              <span className="text-[10px] font-bold text-primary tracking-[3px] uppercase block mb-1">📖 Kiến thức</span>
              <h2 className="text-xl md:text-3xl font-serif">Bài viết mới nhất</h2>
            </div>
            <Link href="/kien-thuc" className="text-[11px] font-bold text-primary tracking-wider hover:underline uppercase">
              Xem tất cả →
            </Link>
          </div>

          {/* Featured post (large) + 2 small */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Main feature */}
            {featuredPosts[0] && (
              <Link href={`/${featuredPosts[0].urlSlug}`}
                className="group flex-1 min-w-0 flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="relative h-[180px] md:h-[240px] bg-gray-100 overflow-hidden flex-shrink-0">
                  <Image
                    src={featuredPosts[0].mainImage || PLACEHOLDER}
                    alt={featuredPosts[0].title} fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized={!featuredPosts[0].mainImage || featuredPosts[0].mainImage.startsWith('http')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className={`absolute top-3 left-3 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${CATEGORY_TAG_COLORS[featuredPosts[0].category] || 'bg-gray-100 text-gray-600'}`}>
                    {featuredPosts[0].category}
                  </span>
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-base md:text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 flex-1">{featuredPosts[0].excerpt}</p>
                  <div className="text-[10px] text-gray-400 font-semibold mt-3">⏱ {featuredPosts[0].readTime}</div>
                </div>
              </Link>
            )}

            {/* 2 smaller posts */}
            <div className="flex flex-col gap-4 md:w-[300px] flex-shrink-0">
              {featuredPosts.slice(1, 3).map(post => (
                <Link key={post.urlSlug} href={`/${post.urlSlug}`}
                  className="group flex gap-3 p-3 border border-[var(--border)] rounded-xl hover:border-primary/30 hover:shadow-md transition-all bg-white">
                  <div className="w-[80px] h-[80px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                    <Image
                      src={post.mainImage || PLACEHOLDER} alt={post.title}
                      fill sizes="80px" className="object-cover"
                      unoptimized={!post.mainImage || post.mainImage.startsWith('http')}
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <span className={`text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${CATEGORY_TAG_COLORS[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                      <h3 className="text-[13px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2 mt-1.5">
                        {post.title}
                      </h3>
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">⏱ {post.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── ĐÁNH GIÁ MỚI NHẤT ──────────────────────────────────────────── */}
      {latestReviews.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 py-6 md:py-10 border-t border-[var(--border)]">
          <h2 className="text-xl md:text-3xl font-serif mb-5 md:mb-8">Đánh giá mới nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {latestReviews.map((product: any) => (
              <Link key={product.id} href={`/san-pham/${product.id}`}
                className="flex gap-4 p-3 md:p-4 border border-[var(--border)] rounded-xl hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group bg-white">
                <div className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] flex-shrink-0 bg-[#F7F7F7] rounded-lg overflow-hidden relative">
                  <Image src={product.image} alt={product.name} fill sizes="80px"
                    className="object-contain p-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold text-primary tracking-wider uppercase">{product.brand}</span>
                    <span className="text-[9px] text-gray-400">★ {product.score.total}/10</span>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                  <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{product.verdict}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ─── ZALO FLOATING ──────────────────────────────────────────────── */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[100]">
        <Link href="https://zalo.me/0961226169" rel="nofollow" target="_blank"
          className="flex items-center gap-2.5 bg-white border border-[var(--border)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95">
          <div className="w-7 h-7 bg-[#0068FF] rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow flex-shrink-0">
            ZL
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-semibold block">Tư vấn Stylist</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] text-gray-400">Online</span>
            </div>
          </div>
        </Link>
      </div>

      {/* ─── MOBILE BOTTOM NAV ──────────────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 w-full border-t border-[var(--border)] bg-white/95 backdrop-blur-sm flex md:hidden z-50 py-1 safe-area-pb">
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ), label: "Trang chủ", href: "/"
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            ), label: "Bộ sưu tập", href: "/bang-xep-hang"
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
            ), label: "Kiến thức", href: "/kien-thuc"
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            ), label: "Tư vấn", href: "https://zalo.me/0961226169"
          },
        ].map((item, i) => (
          <Link key={i} href={item.href}
            className={`flex-1 text-center flex flex-col items-center py-2 ${i === 0 ? 'text-primary' : 'text-gray-400 hover:text-primary'} transition-colors`}>
            {item.icon}
            <span className="text-[9px] font-semibold mt-0.5">{item.label}</span>
          </Link>
        ))}
      </nav>

      <Newsletter />
    </main>
  );
}
