import Link from "next/link";

export default function KnowledgeCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-5 sm:py-10 lg:py-12">
      <div className="rounded-3xl border border-[var(--border)] bg-[#f5efe8] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Tư vấn qua Zalo</p>
          <h2 className="mt-2 text-2xl font-serif text-[var(--foreground)] sm:text-3xl">
            Chưa biết nên bắt đầu từ chai nào?
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
            Nhắn Zalo để được gợi ý theo gu mùi, ngân sách và hoàn cảnh sử dụng. Maison de SON ưu tiên tư vấn thực tế, rõ ràng và không nói quá để ép chốt.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Link
            href="https://zalo.me/0961226169"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Tư vấn qua Zalo
          </Link>
          <Link
            href="/bang-xep-hang"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-primary hover:text-primary"
          >
            Xem bảng xếp hạng
          </Link>
        </div>
      </div>
    </section>
  );
}
