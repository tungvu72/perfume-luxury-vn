import Link from "next/link";

type Props = {
  totalPosts: number;
};

export default function KnowledgeHero({ totalPosts }: Props) {
  return (
    <section className="border-b border-[var(--border)] bg-[#faf8f6]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-5 sm:py-16 lg:py-20">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          Knowledge Hub
        </p>

        <div className="max-w-3xl">
          <h1 className="text-3xl font-serif leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Kiến thức nước hoa
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Review chuyên sâu, hướng dẫn chọn mùi, so sánh các lựa chọn phổ biến và giải mã thế giới nước hoa theo cách dễ hiểu, thực tế, hợp bối cảnh Việt Nam.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-400 sm:text-[13px]">
            {totalPosts} bài viết đang live
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <Link
            href="#bat-dau"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Bắt đầu cho người mới
          </Link>
          <Link
            href="#tat-ca-bai-viet"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-primary hover:text-primary"
          >
            Xem bài mới nhất
          </Link>
        </div>
      </div>
    </section>
  );
}
