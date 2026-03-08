import Link from "next/link";

type Props = {
  totalPosts: number;
};

export default function KnowledgeHero({ totalPosts }: Props) {
  return (
    <section className="border-b border-[var(--border)] bg-[#faf8f6]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-5 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Knowledge Hub
          </p>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-serif leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Kiến thức nước hoa cho người Việt
            </h1>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Nơi Maison de SON chia sẻ kiến thức, trải nghiệm thực tế và cách chọn nước hoa dễ hiểu hơn. Đọc để biết mùi nào hợp mình, dùng trong hoàn cảnh nào và nên bắt đầu từ đâu cho ít mơ hồ nhất.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">{totalPosts} bài viết đang có</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Dễ hiểu, thực tế, rõ ràng</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Phù hợp bối cảnh Việt Nam</span>
            </div>
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
      </div>
    </section>
  );
}
