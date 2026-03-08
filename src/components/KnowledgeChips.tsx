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
      <div className="mx-auto max-w-[1200px] px-4 py-3 sm:px-5 sm:py-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {NAV_CHIPS.map((chip, index) => (
            <a
              key={chip.label}
              href={chip.href}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-medium transition sm:px-4 sm:py-2 sm:text-sm ${index === 0
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
