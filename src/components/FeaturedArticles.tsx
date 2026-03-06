import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800";

type Post = {
  fullSlug: string;
  title: string;
  excerpt: string;
  mainImage?: string | null;
  category?: string;
  readTime?: string;
  publishedAt?: string | null;
};

type Props = {
  featured: Post | null;
  secondary: Post[];
};

function formatDate(date?: string | null) {
  if (!date) return "Mới cập nhật";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Mới cập nhật";
  return parsed.toLocaleDateString("vi-VN");
}

export default function FeaturedArticles({ featured, secondary }: Props) {
  if (!featured) return null;

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-5 sm:py-10 lg:py-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Nổi bật</p>
          <h2 className="mt-2 text-2xl font-serif text-[var(--foreground)]">Bài nên đọc trước</h2>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)] lg:gap-6">
        <Link
          href={`/${featured.fullSlug}`}
          className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <Image
              src={featured.mainImage || PLACEHOLDER_IMAGE}
              alt={featured.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              unoptimized={featured.mainImage?.includes("fragrantica") || featured.mainImage?.includes("unsplash")}
            />
          </div>
          <div className="p-5 sm:p-6">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              <span className="rounded-full bg-[#f5efe8] px-3 py-1 text-primary">{featured.category || "Kiến thức"}</span>
              <span>{formatDate(featured.publishedAt)}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold leading-snug text-[var(--foreground)] transition group-hover:text-primary sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 sm:text-base">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex text-sm font-semibold text-primary">Đọc bài →</span>
          </div>
        </Link>

        <div className="grid gap-4">
          {secondary.map((post) => (
            <Link
              key={post.fullSlug}
              href={`/${post.fullSlug}`}
              className="group flex gap-4 rounded-3xl border border-[var(--border)] bg-white p-4 transition hover:border-primary/40"
            >
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-28 sm:w-28">
                <Image
                  src={post.mainImage || PLACEHOLDER_IMAGE}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="112px"
                  unoptimized={post.mainImage?.includes("fragrantica") || post.mainImage?.includes("unsplash")}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  <span className="rounded-full bg-[#f5efe8] px-2.5 py-1 text-primary">{post.category || "Kiến thức"}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-[var(--foreground)] transition group-hover:text-primary sm:text-base">
                  {post.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 sm:text-sm">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
