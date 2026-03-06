import Link from "next/link";

type Post = {
  fullSlug: string;
  title: string;
};

type Props = {
  posts: Post[];
};

export default function StarterPath({ posts }: Props) {
  if (!posts.length) return null;

  return (
    <section id="bat-dau" className="mx-auto max-w-[1200px] px-4 py-4 sm:px-5 sm:py-6">
      <div className="rounded-3xl border border-[var(--border)] bg-[#fcfbf9] p-5 sm:p-6 lg:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Bắt đầu từ đâu</p>
        <h2 className="mt-2 text-2xl font-serif text-[var(--foreground)]">Mới bắt đầu với nước hoa? Đọc theo lộ trình này</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Nếu bạn chưa biết nên chọn mùi nào, EDT và EDP khác nhau ra sao, hay đâu là một chai dễ dùng để bắt đầu, đây là shortlist gọn nhất để vào thế giới nước hoa mà không bị ngợp.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post.fullSlug}
              href={`/${post.fullSlug}`}
              className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white px-4 py-4 transition hover:border-primary/40"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f5efe8] text-sm font-bold text-primary">
                {index + 1}
              </span>
              <span className="text-sm font-medium leading-6 text-[var(--foreground)] sm:text-base">{post.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
