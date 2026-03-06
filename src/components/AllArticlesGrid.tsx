import Link from "next/link";
import Image from "next/image";

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
  posts: Post[];
};

function formatDate(date?: string | null) {
  if (!date) return "Mới cập nhật";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Mới cập nhật";
  return parsed.toLocaleDateString("vi-VN");
}

export default function AllArticlesGrid({ posts }: Props) {
  return (
    <section id="tat-ca-bai-viet" className="mx-auto max-w-[1200px] px-4 py-8 sm:px-5 sm:py-10 lg:py-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Tất cả bài viết</p>
          <h2 className="mt-2 text-2xl font-serif text-[var(--foreground)]">Khám phá toàn bộ thư viện</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {posts.map((post) => (
          <Link
            key={post.fullSlug}
            href={`/${post.fullSlug}`}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src={post.mainImage || PLACEHOLDER_IMAGE}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized={post.mainImage?.includes("fragrantica") || post.mainImage?.includes("unsplash")}
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                <span className="rounded-full bg-[#f5efe8] px-3 py-1 text-primary">{post.category || "Kiến thức"}</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="line-clamp-2 text-base font-semibold leading-7 text-[var(--foreground)] transition group-hover:text-primary">
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
