// Chips là anchor navigation thực — link đến từng section trên trang
const NAV_CHIPS = [
  { label: "Nổi bật", href: "#featured" },
  { label: "Bắt đầu từ đâu", href: "#bat-dau" },
  { label: "Tất cả bài viết", href: "#tat-ca-bai-viet" },
  { label: "Maison Method", href: "#maison-method" },
];

export default function KnowledgeChips() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-5">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 pr-14 sm:pr-0">
          {NAV_CHIPS.map((chip, index) => (
            <a
              key={chip.label}
              href={chip.href}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${index === 0
                  ? "border-primary bg-primary text-white hover:opacity-90"
                  : "border-[var(--border)] bg-[#fafafa] text-gray-700 hover:border-primary hover:text-primary"
                }`}
            >
              {chip.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
