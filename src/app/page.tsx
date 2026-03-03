import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getTopRankedProducts } from "@/sanity/lib/fetchers";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison de SON | Review Nước Hoa Chính Hãng & Giải Mã Scent DNA",
  description: "Cơ sở dữ liệu đánh giá nước hoa chuyên sâu (Niche, Designer & Dupe). Cam kết review trung thực, so sánh giá nước hoa chính hãng, tư vấn Zalo 24/7.",
  keywords: ["review nước hoa", "nước hoa chính hãng", "giá nước hoa", "maison de son", "scent dna"],
};

export default async function Home() {
  const [allProducts, topRanked] = await Promise.all([
    getAllProducts(),
    getTopRankedProducts()
  ]);

  // Fallback nếu chưa có data trong Sanity (trong lúc migrate)
  const displayProducts = allProducts || [];
  const trendingProducts = topRanked.length > 0 ? topRanked.slice(0, 6) : [];
  const monthlyRanking = allProducts.slice(0, 6);
  const latestReviews = allProducts.slice(0, 4);

  const now = new Date();
  const currentMonthYear = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-5 py-5">
        <div className="relative rounded-2xl overflow-hidden bg-[#F7F7F7] h-[360px] md:h-[500px] flex flex-col justify-end p-6 md:p-12 group hover:shadow-2xl transition-all duration-700">
          <Image
            src="/hero-main-v2.png"
            alt="Maison de SON Hero v2"
            fill
            sizes="100vw"
            priority
            className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10 max-w-md animate-fade-up">
            <span className="text-[11px] font-bold text-primary tracking-[2px] uppercase mb-2 block">
              Xu hướng tháng {currentMonthYear}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Đỉnh cao của sự thanh lịch hiện đại
            </h1>
            <Link href="/bang-xep-hang" className="inline-block bg-foreground text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-primary transition-colors active:scale-95">
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORIES */}
      <section className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {[
            { icon: "🤵", label: "Cho Nam", href: "/nam-gioi" },
            { icon: "💃", label: "Cho Nữ", href: "/nu-gioi" },
            { icon: "✨", label: "Unisex", href: "/unisex" },
            { icon: "🔥", label: "Best Seller", href: "/bang-xep-hang" }
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="group flex flex-col items-center justify-center p-4 md:p-6 border border-[var(--border)] rounded-2xl hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 bg-white"
            >
              <div className="text-2xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING NOW */}
      <section className="max-w-[1200px] mx-auto px-5 py-8 border-t border-[var(--border)]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-[10px] font-bold text-primary tracking-[3px] uppercase block mb-1">🔥 Hot</span>
            <h2 className="text-2xl md:text-3xl font-serif">Xu hướng hiện nay</h2>
          </div>
          <Link href="/bang-xep-hang" className="text-xs font-bold text-primary tracking-wider hover:underline uppercase">
            Xem tất cả
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-6 md:gap-4 scrollbar-hide">
          {trendingProducts.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="min-w-[130px] md:min-w-0 group bg-white rounded-xl hover:shadow-xl transition-all p-1">
              <div className="aspect-square bg-[#F7F7F7] rounded-xl overflow-hidden mb-2 relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 130px, 200px"
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-1.5 right-1.5 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold">
                  {p.score.total}
                </div>
              </div>
              <div className="px-1 text-[8px] font-bold text-gray-400 tracking-wider uppercase">{p.brand}</div>
              <div className="px-1 text-xs font-semibold truncate group-hover:text-primary transition-colors">{p.name}</div>
              {p.tags?.[0] && <div className="px-1"><span className="text-[8px] text-primary font-bold">#{p.tags[0]}</span></div>}
            </Link>
          ))}
          {trendingProducts.length === 0 && Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[130px] md:min-w-0 bg-[#F7F7F7] rounded-xl aspect-[3/4] animate-pulse" />
          ))}
        </div>
      </section>

      {/* RANKING SECTION */}
      <section className="max-w-[1200px] mx-auto px-5 py-8 border-t border-[var(--border)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-serif">Bảng xếp hạng tháng</h2>
          <Link href="/bang-xep-hang" className="text-xs font-bold text-primary tracking-wider hover:underline uppercase">
            Xem tất cả
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 scrollbar-hide">
          {monthlyRanking.map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="min-w-[160px] md:min-w-0 group cursor-pointer bg-white rounded-xl hover:shadow-xl transition-all p-2"
            >
              <div className="aspect-square bg-[#F7F7F7] rounded-xl overflow-hidden mb-3 relative">
                <span className="absolute top-3 left-3 font-serif text-2xl opacity-10 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 160px, 350px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold">
                  ★ {product.score.total}/10
                </div>
              </div>
              <div className="px-1">
                <span className="text-[10px] font-bold text-gray-400 tracking-[2px] uppercase">{product.brand}</span>
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors mt-1 line-clamp-1">{product.name}</h3>
                <div className="text-xs text-gray-500 mt-1">{product.basePrice.toLocaleString()} VNĐ</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST REVIEWS */}
      <section className="max-w-[1200px] mx-auto px-5 py-10 border-t border-[var(--border)]">
        <h2 className="text-2xl md:text-3xl font-serif mb-8">Đánh giá mới nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestReviews.map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex gap-5 p-4 border border-[var(--border)] rounded-xl hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all group bg-white"
            >
              <div className="w-[80px] h-[80px] flex-shrink-0 bg-[#F7F7F7] rounded-lg overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{product.brand}</span>
                  <span className="text-[10px] text-gray-400">★ {product.score.total}/10</span>
                </div>
                <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{product.verdict}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ZALO FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <Link
          href="https://zalo.me/0961226169"
          className="flex items-center gap-3 bg-white border border-[var(--border)] px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <div className="w-8 h-8 bg-[#0068FF] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow">
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

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 w-full border-t border-[var(--border)] bg-white flex md:hidden z-50 py-2">
        {[
          { icon: "🏠", label: "Trang chủ", href: "/" },
          { icon: "🏺", label: "Bộ sưu tập", href: "/thuong-hieu" },
          { icon: "📰", label: "Tin tức", href: "/kien-thuc" },
          { icon: "👤", label: "Tài khoản", href: "#" }
        ].map((item, i) => (
          <Link key={i} href={item.href} className={`flex-1 text-center flex flex-col items-center ${i === 0 ? 'text-primary' : ''}`}>
            <span className="text-lg">{item.icon}</span>
            <span className="text-[9px] font-semibold text-gray-500 mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>

      <Newsletter />
    </main>
  );
}
