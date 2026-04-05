import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/sanity/lib/fetchers";
import { getAllPosts } from "@/sanity/lib/posts";
import HomeProductTabs from "@/components/HomeProductTabs";
import { getProductUrl } from "@/lib/productUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison de SON | Kiến Thức, Review Nước Hoa & Gợi Ý Mua Chính Hãng",
  description:
    "Trang web chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa cho người Việt. Tìm nước hoa theo nhu cầu, chọn mùi phù hợp và tham khảo nơi mua chính hãng giá tốt.",
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

export const revalidate = 86400; // ISR: re-generate sau 24 giờ (giảm edge requests)

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

const QUICK_PATHS = [
  {
    id: "nam",
    title: "Nước hoa nam dễ dùng",
    desc: "Đi làm, hẹn hò, dùng hằng ngày — hợp nhiều hoàn cảnh",
    href: "/nuoc-hoa-theo-nhu-cau?gender=nam",
    image: "/images/ambient/di-lam-v2.png",
    imageAlt: "Bàn làm việc buổi sáng với chai nước hoa nam",
  },
  {
    id: "nu",
    title: "Nước hoa nữ thanh lịch",
    desc: "Nhẹ nhàng, dễ ngửi, không quá gắt",
    href: "/nuoc-hoa-theo-nhu-cau?gender=nu",
    image: "/images/ambient/nu-thanh-lich-v2.png",
    imageAlt: "Chai nước hoa oval trên marble kem",
  },
  {
    id: "dang-tien",
    title: "Top đáng tiền nhất",
    desc: "Chất lượng xứng giá — nhiều người chọn và hài lòng",
    href: "/nuoc-hoa-theo-nhu-cau",
    image: "/images/ambient/dang-tien-v2.png",
    imageAlt: "Bộ chai nước hoa cao cấp trên nền đá tối",
  },
  {
    id: "tu-van",
    title: "Nhờ tư vấn gu mùi",
    desc: "Chưa biết bắt đầu từ đâu? Nhắn Zalo là có gợi ý ngay",
    href: "https://zalo.me/0961226169",
    image: "/images/ambient/tu-van-v2.png",
    imageAlt: "Khay mẫu thử nước hoa và tư vấn chọn mùi",
  },
];

const ONBOARDING_PATHS = [
  {
    num: "01",
    title: "Tôi cần mùi đi làm",
    desc: "Lịch sự, không gây chú ý quá mức, hợp văn phòng và không ngợp trong phòng máy lạnh kín.",
    href: "/nuoc-hoa-theo-nhu-cau",
    cta: "Xem gợi ý đi làm",
  },
  {
    num: "02",
    title: "Tôi cần mùi hẹn hò",
    desc: "Ấm hơn, cuốn hơn, dễ khiến người khác nhớ — hợp buổi tối và những dịp muốn nổi bật.",
    href: "/nuoc-hoa-theo-nhu-cau",
    cta: "Xem gợi ý hẹn hò",
  },
  {
    num: "03",
    title: "Tôi mới bắt đầu chơi nước hoa",
    desc: "Chưa biết mình thích gì, cần chai dễ dùng và an toàn — không lo mua nhầm.",
    href: "/nuoc-hoa-theo-nhu-cau",
    cta: "Xem top dành cho người mới",
  },
];

const BRAND_SPOTLIGHT = [
  {
    slug: "dior",
    abbr: "D",
    logo: "/images/brands/dior.svg",
    name: "Dior",
    tag: "Sang, phổ thông, lực mạnh",
    desc: "Thương hiệu Pháp được người Việt tìm mua nhiều nhất — Sauvage là chai bán chạy nhất phân khúc nam toàn cầu.",
    flagshipSlug: "nuoc-hoa-nam-dior-sauvage-edp",
    flagshipName: "Sauvage EDP",
  },
  {
    slug: "chanel",
    abbr: "C",
    logo: "/images/brands/chanel.svg",
    name: "Chanel",
    tag: "Lịch sự, cổ điển, bền giá trị",
    desc: "Thương hiệu Pháp lâu đời — Bleu de Chanel và Coco Mademoiselle được tìm kiếm nhiều nhất.",
    flagshipSlug: "nuoc-hoa-nam-chanel-bleu-de-chanel-edp",
    flagshipName: "Bleu de Chanel EDP",
  },
  {
    slug: "ysl",
    abbr: "YSL",
    logo: "/images/brands/ysl.svg",
    name: "Yves Saint Laurent",
    tag: "Trẻ trung, cuốn, unisex",
    desc: "Y EDP và Black Opium hợp thị hiếu Việt — mùi có sức hút rõ, không cần cố nương.",
    flagshipSlug: "nuoc-hoa-nam-ysl-y-edp",
    flagshipName: "Y EDP",
  },
  {
    slug: "tom-ford",
    abbr: "TF",
    logo: "/images/brands/tom-ford.svg",
    name: "Tom Ford",
    tag: "Tối, sang, kén người",
    desc: "Không dành cho tất cả — Tom Ford ra mùi có cá tính, chất liệu đặc. Tobacco Vanille và Noir Extreme là 2 chai còn đang được nhắc nhiều nhất.",
    flagshipSlug: "nuoc-hoa-nam-tom-ford-noir-extreme-edp",
    flagshipName: "Noir Extreme EDP",
  },
  {
    slug: "mancera",
    abbr: "MC",
    logo: "/images/brands/mancera.svg",
    name: "Mancera",
    tag: "Hương Pháp tầm trung, bám lâu",
    desc: "Niche Pháp giá phải chăng nhưng lưu hương vượt trội — Cedrat Boisé là chai bán chạy nhất.",
    flagshipSlug: "nuoc-hoa-unisex-mancera-cedrat-boise",
    flagshipName: "Cedrat Boisé",
  },
  {
    slug: "lattafa",
    abbr: "LT",
    logo: "/images/brands/lattafa.svg",
    name: "Lattafa",
    tag: "Đáng tiền, ngọt ấm",
    desc: "Nước hoa Trung Đông giá tốt nhất thị trường — Khamrah là lựa chọn số 1 tầm dưới 2 triệu.",
    flagshipSlug: "nuoc-hoa-unisex-lattafa-khamrah",
    flagshipName: "Khamrah",
  },
];

const TRUST_POINTS = [
  {
    num: "01",
    title: "Review trong khí hậu Việt Nam",
    desc: "Nóng ẩm, máy lạnh, ban ngày ban đêm — chúng tôi test và nói thật mùi đó lên như thế nào ở đây, không phải ở Paris.",
  },
  {
    num: "02",
    title: "Không nhận tài trợ, dám nói nhược điểm",
    desc: "Nếu chai đó ngợp, ngọt sến hoặc không xứng tiền — chúng tôi nói thẳng. Không có chai nào là hoàn hảo trong mọi hoàn cảnh.",
  },
  {
    num: "03",
    title: "Tư vấn theo nhu cầu thật",
    desc: "Zalo tư vấn miễn phí — kể gu mùi, ngân sách và hoàn cảnh. Gợi ý thật, không ép mua, không nhận hoa hồng sản phẩm.",
  },
  {
    num: "04",
    title: "Định hướng mua an toàn",
    desc: "Hướng dẫn phân biệt hàng thật/giả, nguồn uy tín và thời điểm mua để không mất tiền oan.",
  },
];

export default async function Home() {
  const [allProducts, allPosts] = await Promise.all([
    getAllProducts(),
    getAllPosts(),
  ]);

  const featuredPost = allPosts[0];
  const latestPosts = allPosts.slice(1, 4);
  const sidebarPosts = allPosts.slice(4, 7);

  const topProducts = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 8);

  const featuredProduct = topProducts[0];
  const gridProducts = topProducts.slice(1, 4);

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

      {/* ══════ BLOCK 2 — HERO: VALUE PROP + EDITORIAL IMAGE ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 pt-6 pb-0">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-4 md:gap-5 md:min-h-[520px]">

          {/* Left — Value Prop */}
          <div className="flex flex-col justify-between rounded-2xl md:rounded-[28px] border border-[var(--color-border)] bg-gradient-to-br from-white to-[var(--color-bg-subtle)] p-6 md:p-12">
            <div>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Review nước hoa thực tế — dành cho người Việt
              </p>
              <h1 className="font-serif text-[34px] md:text-[52px] leading-[1.06] tracking-tight mt-3 md:mt-3.5 mb-4 md:mb-5 text-[var(--color-text)]">
                Hiểu mùi<br className="hidden md:block" /> trước khi mua
              </h1>
              <p className="text-base md:text-[17px] leading-[1.8] text-[var(--color-text-secondary)] max-w-[52ch]">
                Maison de SON giúp bạn chọn nước hoa dễ hơn — xem top đáng mua, đọc review thật trong khí hậu Việt Nam và nhắn Zalo khi cần tư vấn nhanh.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/nuoc-hoa-theo-nhu-cau"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white min-h-[46px] hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 transition-all"
                >
                  Tìm nước hoa phù hợp
                </Link>
                <Link
                  href="/kien-thuc"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-bold text-[var(--color-text)] min-h-[46px] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-0.5 transition-all"
                >
                  Đọc kiến thức cho người mới
                </Link>
              </div>
            </div>

            {/* Trust pills */}
            <div className="grid grid-cols-3 gap-2 md:gap-2.5 mt-6 md:mt-8">
              {[
                { title: "Review thực tế", desc: "Test mùi trong khí hậu Việt Nam" },
                { title: "Dễ hiểu", desc: "Giải thích ngắn gọn, đi thẳng vào điểm cần biết" },
                { title: "Tư vấn thật", desc: "Nhắn Zalo — gợi ý phù hợp" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[var(--color-border)] bg-white/70 p-3 md:p-3.5">
                  <strong className="block text-[12px] md:text-[13px] font-bold mb-1">{item.title}</strong>
                  <span className="text-[11px] md:text-[12px] text-[var(--color-text-muted)] leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Editorial Hero Image */}
          <div className="group relative rounded-2xl md:rounded-[28px] overflow-hidden min-h-[280px] md:min-h-0 bg-[#1A1D21]">
            <Image
              src="/images/ambient/hero-editorial.png"
              alt="Nước hoa luxury editorial — Maison de SON"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            {/* Subtle gradient overlay for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            {/* Editorial label bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Maison de SON — Review thực tế
              </span>
            </div>
          </div>

        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)] mt-8" /></div>

      {/* ══════ BLOCK 3 — QUICK PATHS ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
        <div className="mb-5 md:mb-7">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Bắt đầu từ đâu?</p>
          <h2 className="font-serif text-[26px] md:text-[34px] tracking-tight mt-2">Tìm đúng hướng trong 10 giây</h2>
          <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] mt-1.5">Chọn nhóm phù hợp — không cần biết nhiều về nước hoa vẫn tìm được.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3.5">
          {QUICK_PATHS.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className="group flex flex-col rounded-[18px] md:rounded-[20px] border border-[var(--color-border)] bg-white overflow-hidden transition-all hover:border-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              {/* Ambient image top */}
              <div className="relative h-[160px] md:h-[200px] overflow-hidden bg-[#EDE8E0] flex-shrink-0">
                <Image
                  src={path.image}
                  alt={path.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Text below */}
              <div className="p-4 md:p-4">
                <strong className="block text-[13px] md:text-[14px] font-bold mb-1.5 leading-snug">{path.title}</strong>
                <span className="text-[11px] md:text-[12px] text-[var(--color-text-secondary)] leading-[1.55]">{path.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)]" /></div>

      {/* ══════ BLOCK 4 — HOME PRODUCT TABS ══════ */}
      <HomeProductTabs products={allProducts} />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)]" /></div>

      {/* ══════ BLOCK 5 — ONBOARDING ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
        <div className="rounded-[24px] md:rounded-[28px] bg-[var(--color-bg-subtle)] border border-[var(--color-border)] p-6 md:p-12">
          <div className="max-w-[60ch] mb-7 md:mb-9">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Chưa biết gu mùi?</p>
            <h2 className="font-serif text-[26px] md:text-[34px] tracking-tight mt-2">Bắt đầu từ đây</h2>
            <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] mt-1.5 leading-[1.7]">Không cần biết gì về nước hoa. Chọn hoàn cảnh bạn cần dùng — chúng tôi sẽ gợi ý đúng hướng.</p>
          </div>
          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-3 md:hidden">
            {ONBOARDING_PATHS.map((path) => (
              <Link key={path.num} href={path.href} className="group flex items-center gap-4 rounded-[16px] border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] transition-all">
                <span className="font-serif text-[28px] font-bold text-[#B8962E] flex-shrink-0 w-9">{path.num}</span>
                <div className="flex-1">
                  <div className="text-[14px] font-bold">{path.title}</div>
                  <div className="text-[12px] text-[var(--color-text-secondary)] mt-0.5 leading-snug">{path.desc.split(" — ")[0]}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
          {/* Desktop: 3-col */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {ONBOARDING_PATHS.map((path) => (
              <Link key={path.num} href={path.href} className="group flex flex-col rounded-[20px] border border-[var(--color-border)] bg-white p-7 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all">
                <span className="font-serif text-[40px] font-bold text-[#B8962E] leading-none mb-4">{path.num}</span>
                <div className="text-[17px] font-bold mb-2.5">{path.title}</div>
                <div className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] flex-1">{path.desc}</div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--color-primary)]">
                  {path.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)]" /></div>

      {/* ══════ BLOCK 6 — BRAND SPOTLIGHT (Logo Grid) ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Thương Hiệu Nổi Bật</p>
            <h2 className="font-serif text-[26px] md:text-[34px] tracking-tight mt-2">Các thương hiệu trên Maison de SON</h2>
          </div>
          <Link href="/thuong-hieu" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-[13px] font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex-shrink-0">
            Xem tất cả
          </Link>
        </div>

        {/* Logo grid — 3 cols mobile, 6 cols desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {BRAND_SPOTLIGHT.map((brand) => (
            <Link
              key={brand.slug}
              href={`/thuong-hieu/${brand.slug}`}
              className="group flex items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white aspect-[3/2] p-5 md:p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[36px] md:max-h-[40px] max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>

        <div className="mt-4 text-center md:hidden">
          <Link href="/thuong-hieu" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-[12px] font-bold text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
            Xem tất cả thương hiệu →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)]" /></div>

      {/* ══════ BLOCK 7 — KNOWLEDGE HIGHLIGHTS ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-end justify-between gap-4 mb-5 md:mb-7">
          <div>
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Kiến Thức Về Nước Hoa</p>
            <h2 className="font-serif text-[26px] md:text-[34px] tracking-tight mt-2">Chọn đúng mùi, hiểu trước khi mua</h2>
            <p className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] mt-1.5">Hướng dẫn chọn nước hoa, phân biệt nồng độ, so sánh các chai cùng phân khúc.</p>
          </div>
          <Link href="/kien-thuc" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-[13px] font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex-shrink-0">
            Xem tất cả bài viết
          </Link>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-3 md:hidden">
          {allPosts.slice(0, 4).map((post: any, i: number) => (
            <Link key={post.urlSlug} href={`/${post.urlSlug}`} className="group flex overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="relative w-[100px] flex-shrink-0 bg-[var(--color-bg-muted)]">
                <Image src={post.mainImage || PLACEHOLDER} alt={post.title} fill sizes="100px" className="object-cover" unoptimized={!post.mainImage || post.mainImage.startsWith("http")} />
              </div>
              <div className="p-3 flex-1">
                {post.category && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2 py-0.5 rounded-full mb-1.5 inline-block">
                    {CATEGORY_LABELS[post.category] || post.category}
                  </span>
                )}
                <div className="text-[13px] font-bold leading-snug line-clamp-2">{post.title}</div>
                <div className="text-[11px] text-[var(--color-text-muted)] mt-1.5">{post.readTime || "5 phút đọc"}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 1 featured + 3 sidebar */}
        <div className="hidden md:grid grid-cols-[1.4fr_1fr] gap-4">
          {/* Featured */}
          {latestPosts[0] && (
            <Link href={`/${latestPosts[0].urlSlug}`} className="group rounded-[20px] border border-[var(--color-border)] bg-white overflow-hidden hover:shadow-xl hover:-translate-y-[3px] hover:border-transparent transition-all row-span-3">
              <div className="relative aspect-[16/9] bg-[var(--color-bg-muted)]">
                <Image src={latestPosts[0].mainImage || PLACEHOLDER} alt={latestPosts[0].title} fill sizes="(max-width: 1280px) 55vw" className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized={!latestPosts[0].mainImage || latestPosts[0].mainImage.startsWith("http")} />
              </div>
              <div className="p-6">
                {latestPosts[0].category && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2.5 py-0.5 rounded-full mb-3">
                    {CATEGORY_LABELS[latestPosts[0].category] || latestPosts[0].category}
                  </span>
                )}
                <h3 className="font-bold text-[20px] leading-snug mb-2">{latestPosts[0].title}</h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] line-clamp-3">{latestPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-[12px] text-[var(--color-text-muted)]">
                  <span>{latestPosts[0].author || "Maison de SON"}</span>
                  <span>·</span>
                  <span>{latestPosts[0].readTime || "8 phút đọc"}</span>
                </div>
              </div>
            </Link>
          )}
          {/* Right 3 */}
          <div className="flex flex-col gap-4">
            {[...latestPosts.slice(1), ...sidebarPosts].slice(0, 3).map((post: any) => (
              <Link key={post.urlSlug} href={`/${post.urlSlug}`} className="group flex overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="relative w-[120px] flex-shrink-0 bg-[var(--color-bg-muted)]">
                  <Image src={post.mainImage || PLACEHOLDER} alt={post.title} fill sizes="120px" className="object-cover transition-transform group-hover:scale-105" unoptimized={!post.mainImage || post.mainImage.startsWith("http")} />
                </div>
                <div className="p-4 flex-1">
                  {post.category && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2 py-0.5 rounded-full mb-2">
                      {CATEGORY_LABELS[post.category] || post.category}
                    </span>
                  )}
                  <div className="text-[15px] font-bold leading-snug line-clamp-2">{post.title}</div>
                  <div className="text-[12px] text-[var(--color-text-muted)] mt-2">{post.readTime || "5 phút đọc"}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center md:hidden">
          <Link href="/kien-thuc" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-[12px] font-bold text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
            Xem tất cả bài viết →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8"><hr className="border-t border-[var(--color-border-subtle)]" /></div>

      {/* ══════ BLOCK 8 — TRUST SECTION ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 py-8 md:py-12">
        <div className="rounded-[24px] md:rounded-[28px] bg-[#1A1D21] px-6 py-8 md:px-14 md:py-14">
          <div className="max-w-[56ch] mb-8 md:mb-12">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[#7FD4D1]">Tại sao tin Maison de SON?</p>
            <h2 className="font-serif text-[26px] md:text-[38px] leading-[1.12] tracking-tight mt-2.5 text-white">
              Review thật,<br />không có vùng cấm
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/60 mt-3 leading-[1.8]">
              Chúng tôi đánh giá nước hoa dựa trên trải nghiệm thực tế trong điều kiện khí hậu Việt Nam — không đọc lát mô tả của hãng rồi chép lại, không nhận tài trợ để nói tốt.
            </p>
          </div>

          {/* Mobile: list */}
          <div className="flex flex-col gap-0 md:hidden">
            {TRUST_POINTS.map((point, i) => (
              <div key={point.num} className={`flex gap-3 py-4 ${i > 0 ? "border-t border-white/10" : ""}`}>
                <div className="w-5 h-5 rounded-full bg-[#7FD4D1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7FD4D1" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                </div>
                <div>
                  <strong className="block text-[14px] font-bold text-white mb-1">{point.title}</strong>
                  <span className="text-[12px] text-white/55 leading-[1.65]">{point.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 4-col */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {TRUST_POINTS.map((point) => (
              <div key={point.num} className="border-t-2 border-white/15 pt-6">
                <div className="font-serif text-[48px] font-bold text-white/10 leading-none mb-3.5">{point.num}</div>
                <h3 className="text-[15px] font-bold text-white mb-2">{point.title}</h3>
                <p className="text-[13px] text-white/55 leading-[1.7]">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BLOCK 9 — CTA + ZALO ══════ */}
      <section className="mx-auto max-w-[1280px] px-4 md:px-8 pb-10 md:pb-14">
        <div className="rounded-[24px] md:rounded-[28px] bg-gradient-to-br from-[#111519] to-[#1E2530] px-6 py-8 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center gap-8 md:justify-between">
          <div className="md:max-w-[55%]">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[#7FD4D1]">Tư vấn thật, không vòng vo</p>
            <h2 className="font-serif text-[26px] md:text-[38px] leading-[1.1] tracking-tight mt-2.5 text-white">
              Chưa biết chọn<br />chai nào?
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/60 mt-3 leading-[1.8]">
              Kể gu mùi, ngân sách và hoàn cảnh dùng. Maison de SON sẽ gợi ý vài lựa chọn phù hợp nhất — thường trả lời trong 15 phút.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-start gap-3 flex-shrink-0">
            <a
              href="https://zalo.me/0961226169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] hover:-translate-y-0.5 hover:shadow-lg transition-all min-h-[50px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.107 1.524 5.836L.057 23.886c-.071.26.177.508.47.437l6.248-1.487C8.284 23.55 10.11 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Nhắn Zalo tư vấn
            </a>
            <span className="text-[12px] text-white/45 pl-1">Miễn phí · Trả lời thật · Không ép mua</span>
          </div>
        </div>
      </section>

      {/* ══════ MOBILE BOTTOM NAV ══════ */}
      <nav className="fixed bottom-0 left-0 z-50 flex w-full border-t border-[var(--color-border)] bg-white/95 py-1 backdrop-blur-sm md:hidden safe-area-pb shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {[
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
            label: "Trang chủ", href: "/",
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 20 18 10"/><polyline points="12 20 12 4"/><polyline points="6 20 6 14"/></svg>,
            label: "Tìm hoa", href: "/nuoc-hoa-theo-nhu-cau",
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
            label: "Kiến thức", href: "/kien-thuc",
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
            label: "Tư vấn", href: "https://zalo.me/0961226169",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-1 flex-col items-center py-1.5 text-center transition-colors ${index === 0 ? "text-[var(--color-primary)]" : "text-gray-400 hover:text-[var(--color-primary)]"}`}
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
