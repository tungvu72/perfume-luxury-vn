import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getTopRankedProducts } from "@/sanity/lib/fetchers";
import { getAllPosts } from "@/sanity/lib/posts";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison de SON | Kiến Thức, Review Nước Hoa & Gợi Ý Mua Chính Hãng",
  description:
    "Trang web chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa cho người Việt. Xem bảng xếp hạng, chọn mùi phù hợp và tham khảo nơi mua chính hãng giá tốt.",
  alternates: {
    canonical: "https://www.maisondeson.com/",
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

const CATEGORY_TAG_COLORS: Record<string, string> = {
  "Product Review": "bg-amber-100 text-amber-800",
  "Buying Guide": "bg-blue-100 text-blue-800",
  "How-to": "bg-emerald-100 text-emerald-800",
  Trend: "bg-rose-100 text-rose-800",
  "So sánh": "bg-orange-100 text-orange-800",
  "Brand Story": "bg-indigo-100 text-indigo-800",
};

const trustItems = [
  {
    title: "Review độc lập",
    desc: "Nói rõ điểm mạnh, điểm yếu và độ đáng tiền thay vì khen cho có.",
  },
  {
    title: "Phân tích cá tính mùi hương",
    desc: "Đi sâu vào nhóm hương, nốt hương và cảm giác thực tế khi dùng.",
  },
  {
    title: "Hiệu năng tại Việt Nam",
    desc: "Đánh giá trong bối cảnh nóng ẩm, đi làm, đi chơi và dùng hằng ngày.",
  },
  {
    title: "Tư vấn qua Zalo",
    desc: "Cần chốt nhanh chai phù hợp, cứ nhắn để được gợi ý theo nhu cầu thật.",
  },
];

const quickPaths = [
  {
    title: "Tìm chai phù hợp",
    desc: "Bắt đầu từ nhu cầu thật như đi làm, hẹn hò, mùa hè hay mùi sang trọng dễ dùng.",
    href: "/bang-xep-hang",
    cta: "Khám phá theo nhu cầu",
  },
  {
    title: "Xem top nước hoa tốt nhất",
    desc: "Xem những chai có điểm tổng cao, hiệu năng ổn và đáng đọc nhất tháng này.",
    href: "/bang-xep-hang",
    cta: "Vào bảng xếp hạng",
  },
  {
    title: "Học trước khi mua",
    desc: "Đọc kiến thức nền tảng để hiểu độ lưu hương, độ tỏa hương và cách chọn đúng chai.",
    href: "/kien-thuc",
    cta: "Vào khu kiến thức",
  },
];

const needPaths = [
  { label: "Cho nam", href: "/nam-gioi" },
  { label: "Cho nữ", href: "/nu-gioi" },
  { label: "Unisex", href: "/unisex" },
  { label: "Đi làm văn phòng", href: "/bang-xep-hang" },
  { label: "Hẹn hò buổi tối", href: "/bang-xep-hang" },
  { label: "Mùa hè nóng ẩm", href: "/bang-xep-hang" },
  { label: "Mùi sang trọng", href: "/bang-xep-hang" },
  { label: "Dễ dùng hằng ngày", href: "/bang-xep-hang" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6 md:mb-8">
      <div className="max-w-2xl">
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </span>
        <h2 className="text-2xl md:text-4xl font-serif text-[#1b120d]">{title}</h2>
        <p className="mt-2 text-sm md:text-base leading-7 text-gray-600">{description}</p>
      </div>
      {href && cta ? (
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          {cta} →
        </Link>
      ) : null}
    </div>
  );
}

export default async function Home() {
  const [allProducts, topRanked, allPosts] = await Promise.all([
    getAllProducts(),
    getTopRankedProducts(),
    getAllPosts(),
  ]);

  const rankingSection = [...allProducts]
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 5);

  const featuredProduct = rankingSection[0];
  const rankingRest = rankingSection.slice(1, 5);

  const latestReviews = [...allProducts]
    .filter((product) => product.id !== featuredProduct?.id)
    .slice(0, 4);

  const featuredPosts = allPosts.slice(0, 3);

  const now = new Date();
  const currentMonthYear = `${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${now.getFullYear()}`;

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#1b120d]">
      <Header />

      <section className="mx-auto max-w-[1200px] px-4 pt-3 pb-6 md:pt-6 md:pb-12">
        <div className="relative overflow-hidden rounded-[28px] border border-[#e7ddd3] bg-[#f3ece4]">
          <Image
            src="/hero-main-v2.png"
            alt="Maison de SON"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_45%),linear-gradient(135deg,rgba(24,15,10,0.96),rgba(24,15,10,0.8)_50%,rgba(24,15,10,0.38)_100%)]" />

          <div className="relative z-10 grid gap-5 px-4 py-6 md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] md:px-10 md:py-14 lg:px-14">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f1d7b4] backdrop-blur sm:text-[11px] sm:tracking-[0.24em]">
                Kiến thức thực tế • Review chọn lọc • Gợi ý đáng xem
              </span>
              <h1 className="mt-4 text-[28px] font-serif leading-[1.12] text-white sm:text-3xl md:text-5xl md:leading-[1.1]">
                Trang nước hoa giúp bạn thực sự hiểu một chai nước hoa
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base md:leading-7">
                Maison de Son chia sẻ kiến thức, trải nghiệm thực tế và review nước hoa theo cách dễ hiểu. Xem bảng xếp hạng chọn lọc, tìm mùi hợp mình và tham khảo nơi mua chính hãng giá hợp lý.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/bang-xep-hang"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1b120d] transition hover:bg-[#d7b48c] hover:text-white"
                >
                  Xem bảng xếp hạng
                </Link>
                <Link
                  href="/kien-thuc"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Xem kiến thức chọn mùi
                </Link>
              </div>
            </div>

            <div className="hidden md:grid gap-3 rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur md:p-5">
              <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d9bc94]">
                    Xu hướng tháng {currentMonthYear}
                  </p>
                  <p className="mt-2 text-lg font-serif text-white">Bắt đầu từ những gì đáng xem nhất</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Maison Method
                </span>
              </div>

              <div className="grid gap-3 text-sm text-white/85">
                <div className="rounded-2xl bg-white/8 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9bc94]">
                    01 • Cá tính mùi hương
                  </div>
                  <p className="mt-2 leading-6">Phân tích cảm giác mùi, nhóm hương và độ dễ dùng ngoài đời thật.</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9bc94]">
                    02 • Hiệu năng tại VN
                  </div>
                  <p className="mt-2 leading-6">Đánh giá trong bối cảnh nóng ẩm, công sở, hẹn hò và dùng hằng ngày.</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9bc94]">
                    03 • Giá trị sử dụng
                  </div>
                  <p className="mt-2 leading-6">Không chỉ thơm, mà phải hợp nhu cầu và xứng đáng với số tiền bỏ ra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:mt-5 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#eadfce] bg-white p-3.5 shadow-[0_10px_30px_rgba(27,18,13,0.04)] md:p-4"
            >
              <h2 className="text-[13px] font-semibold text-[#1b120d] md:text-sm">{item.title}</h2>
              <p className="mt-1 text-[13px] leading-5 text-gray-600 md:text-sm md:leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-4 md:py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {quickPaths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group rounded-[24px] border border-[#eadfce] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)] md:p-6"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                Lối vào nhanh
              </div>
              <h2 className="mt-2.5 text-[26px] font-serif leading-tight text-[#1b120d] md:mt-3 md:text-2xl">{path.title}</h2>
              <p className="mt-2.5 text-sm leading-6 text-gray-600 md:mt-3 md:leading-7">{path.desc}</p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                {path.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {featuredProduct && (
        <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
          <SectionHeading
            eyebrow="Top picks"
            title="Những chai đáng xem nhất tháng này"
            description="Bắt đầu từ các lựa chọn có điểm tổng cao, hiệu năng ổn và đủ lý do để người mới lẫn người chơi lâu năm phải bấm vào đọc tiếp."
            href="/bang-xep-hang"
            cta="Xem bảng xếp hạng đầy đủ"
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <Link
              href={`/${featuredProduct.id}`}
              className="group overflow-hidden rounded-[28px] border border-[#eadfce] bg-white shadow-[0_20px_50px_rgba(27,18,13,0.06)] transition duration-300 hover:-translate-y-1"
            >
              <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px] bg-[#f7f3ee] md:min-h-[420px]">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-8 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#f4ede4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        Top 01 tháng {currentMonthYear}
                      </span>
                      <span className="rounded-full bg-[#111]/[0.03] px-3 py-1 text-xs font-semibold text-gray-700">
                        ★ {featuredProduct.score.total}/10
                      </span>
                    </div>
                    <div className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                      {featuredProduct.brand}
                    </div>
                    <h3 className="mt-2 text-3xl font-serif leading-tight text-[#1b120d] md:text-4xl">
                      {featuredProduct.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                      {featuredProduct.verdictShort || featuredProduct.verdict}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#faf6f1] p-4">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        Hợp với ai
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        Người cần một lựa chọn dễ gây thiện cảm, chỉn chu và đủ khác biệt để nhớ lâu.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#faf6f1] p-4">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        Mức giá tham khảo
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-700">
                        {featuredProduct.basePrice > 0
                          ? `${featuredProduct.basePrice.toLocaleString()} VNĐ`
                          : "Liên hệ để cập nhật"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="grid gap-4">
              {rankingRest.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/${product.id}`}
                  className="group grid grid-cols-[96px_minmax(0,1fr)] items-center gap-4 rounded-[24px] border border-[#eadfce] bg-white p-4 shadow-[0_16px_40px_rgba(27,18,13,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)] md:grid-cols-[110px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f7f3ee]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="110px"
                      className="object-contain p-3 transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold uppercase tracking-[0.16em]">Top 0{index + 2}</span>
                      <span>•</span>
                      <span className="font-semibold uppercase tracking-[0.16em]">{product.brand}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#1b120d] transition group-hover:text-primary line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                      {product.verdictShort || product.verdict}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="font-semibold text-primary">★ {product.score.total}/10</span>
                      <span>
                        {product.basePrice > 0
                          ? `${product.basePrice.toLocaleString()} VNĐ`
                          : "Liên hệ"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
        <SectionHeading
          eyebrow="Maison Method"
          title="Vì sao những gợi ý này đáng tin"
          description="Chúng tôi không chỉ nhìn mùi hương trên giấy. Mỗi chai được xem xét qua cảm nhận thực tế, độ lưu hương, độ tỏa hương, độ dễ dùng và giá trị nhận lại so với mức giá."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="rounded-[24px] border border-[#eadfce] bg-white p-5 shadow-[0_14px_40px_rgba(27,18,13,0.04)]"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-xl font-serif text-[#1b120d]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
        <SectionHeading
          eyebrow="Theo nhu cầu"
          title="Khám phá nhanh theo hoàn cảnh sử dụng"
          description="Thay vì bắt đầu từ tên chai, hãy đi từ nhu cầu thật: đi làm, hẹn hò, mùa hè nóng ẩm hay một mùi sang trọng dễ dùng lâu dài."
        />

        <div className="flex flex-wrap gap-2.5">
          {needPaths.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-[#decfbd] bg-white px-3.5 py-2 text-xs font-semibold text-[#4b3b30] transition hover:border-primary hover:text-primary sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {latestReviews.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
          <SectionHeading
            eyebrow="Review nổi bật"
            title="Những bài đánh giá đáng đọc trước khi xuống tiền"
            description="Tập trung vào những chai đang được quan tâm, có giá trị tham khảo cao và đủ thông tin để bạn hiểu rõ trước khi quyết định."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {latestReviews.map((product) => (
              <Link
                key={product.id}
                href={`/${product.id}`}
                className="group overflow-hidden rounded-[24px] border border-[#eadfce] bg-white shadow-[0_16px_40px_rgba(27,18,13,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,18,13,0.08)]"
              >
                <div className="relative aspect-[4/3] bg-[#f7f3ee]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-5 transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
                    <span className="font-semibold uppercase tracking-[0.16em]">{product.brand}</span>
                    <span className="font-semibold text-primary">★ {product.score.total}/10</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#1b120d] transition group-hover:text-primary line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                    {product.verdictShort || product.verdict}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featuredPosts.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
          <SectionHeading
            eyebrow="Kiến thức nền"
            title="Đọc trước khi mua để đỡ chọn sai"
            description="Nếu bạn chưa chắc mình hợp nhóm hương nào hoặc chưa hiểu cách chọn nước hoa theo thời tiết, hãy bắt đầu từ các bài kiến thức nền tảng này."
            href="/kien-thuc"
            cta="Xem toàn bộ kiến thức"
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            {featuredPosts[0] && (
              <Link
                href={`/${featuredPosts[0].urlSlug}`}
                className="group overflow-hidden rounded-[28px] border border-[#eadfce] bg-white shadow-[0_20px_50px_rgba(27,18,13,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[220px] bg-[#f7f3ee] md:h-[340px]">
                  <Image
                    src={featuredPosts[0].mainImage || PLACEHOLDER}
                    alt={featuredPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized={!featuredPosts[0].mainImage || featuredPosts[0].mainImage.startsWith("http")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${CATEGORY_TAG_COLORS[featuredPosts[0].category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {featuredPosts[0].category}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-serif leading-snug text-[#1b120d] transition group-hover:text-primary md:text-3xl">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600 md:text-base">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="mt-4 text-sm font-medium text-gray-500">⏱ {featuredPosts[0].readTime}</div>
                </div>
              </Link>
            )}

            <div className="grid gap-4">
              {featuredPosts.slice(1, 3).map((post) => (
                <Link
                  key={post.urlSlug}
                  href={`/${post.urlSlug}`}
                  className="group grid grid-cols-[110px_minmax(0,1fr)] gap-4 rounded-[24px] border border-[#eadfce] bg-white p-4 shadow-[0_16px_40px_rgba(27,18,13,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f7f3ee]">
                    <Image
                      src={post.mainImage || PLACEHOLDER}
                      alt={post.title}
                      fill
                      sizes="110px"
                      className="object-cover"
                      unoptimized={!post.mainImage || post.mainImage.startsWith("http")}
                    />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${CATEGORY_TAG_COLORS[post.category] || "bg-gray-100 text-gray-700"}`}
                    >
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#1b120d] transition group-hover:text-primary line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                    <div className="mt-3 text-sm font-medium text-gray-500">⏱ {post.readTime}</div>
                  </div>
                </Link>
              ))}

              <div className="rounded-[24px] border border-[#eadfce] bg-[#f7f2eb] p-5 md:p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Lộ trình cho người mới</div>
                <h3 className="mt-3 text-2xl font-serif text-[#1b120d]">Không biết bắt đầu từ đâu?</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Hãy bắt đầu từ các bài giúp bạn hiểu độ lưu hương, độ tỏa hương, cách chọn theo thời tiết và cách mua nước hoa ít rủi ro hơn.
                </p>
                <Link
                  href="/kien-thuc"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Vào khu kiến thức →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
        <div className="overflow-hidden rounded-[28px] border border-[#e6d8c7] bg-[#1c130f] text-white shadow-[0_22px_60px_rgba(27,18,13,0.16)]">
          <div className="grid gap-6 px-5 py-7 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] md:px-8 md:py-10 lg:px-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d9bc94]">
                Trust + Commerce
              </span>
              <h2 className="mt-3 text-3xl font-serif leading-tight md:text-4xl">
                Chia sẻ thật, tư vấn thật, định hướng mua nước hoa chính hãng
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                Khi cần chốt nhanh, bạn có thể nhắn Zalo để được tư vấn theo ngân sách,
                gu mùi và hoàn cảnh sử dụng. Ngoài ra vẫn có thể tham khảo giá trên các
                kênh phù hợp trước khi quyết định.
              </p>
            </div>

            <div className="grid gap-3 md:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold">Cam kết đền 10 triệu nếu phát hiện hàng giả</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold">Tư vấn qua Zalo, không ép mua, tập trung chọn đúng chai</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold">Có thể tham khảo giá Shopee hoặc TikTok Shop khi phù hợp</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 md:px-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/75">Chưa biết bắt đầu từ đâu? Chọn một hướng đi rõ ràng thay vì lướt vô định.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://zalo.me/0961226169"
                  rel="nofollow"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1b120d] transition hover:bg-[#d7b48c] hover:text-white"
                >
                  Nhắn Zalo
                </Link>
                <Link
                  href="tel:0961226169"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Gọi 0961 226 169
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full border-t border-[#eadfce] bg-white/95 py-1 backdrop-blur-sm md:hidden safe-area-pb shadow-[0_-8px_30px_rgba(27,18,13,0.08)]">
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            label: "Trang chủ",
            href: "/",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M12 4h9" />
                <path d="M4 9h16" />
                <path d="M4 15h16" />
              </svg>
            ),
            label: "Xếp hạng",
            href: "/bang-xep-hang",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
            ),
            label: "Kiến thức",
            href: "/kien-thuc",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
              index === 0 ? "text-primary" : "text-gray-400 hover:text-primary"
            }`}
          >
            {item.icon}
            <span className="mt-0.5 text-[10px] font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>

      <Newsletter />
    </main>
  );
}
