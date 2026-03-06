const CHIP_LABELS = [
  "Tất cả",
  "Review",
  "Top list",
  "So sánh",
  "Hướng dẫn",
  "Brand Story",
  "Xu hướng",
];

export default function KnowledgeChips() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-5">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {CHIP_LABELS.map((chip, index) => (
            <span
              key={chip}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
                index === 0
                  ? "border-primary bg-primary text-white"
                  : "border-[var(--border)] bg-[#fafafa] text-gray-700"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
