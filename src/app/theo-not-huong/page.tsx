import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theo nốt hương | Maison de SON",
  description:
    "Khám phá nước hoa theo nốt hương tại Maison de SON. Bắt đầu từ vani, gỗ đàn hương, cam bergamot, hoa hồng, xạ hương và các nhóm mùi quen thuộc với người Việt.",
};

const noteGroups = [
  {
    title: "Ấm áp & cuốn hút",
    description: "Phù hợp nếu bạn thích cảm giác ngọt, dày, ôm sát và dễ tạo ấn tượng vào buổi tối.",
    notes: ["Vani", "Hổ phách", "Quế", "Da thuộc"],
  },
  {
    title: "Sạch sẽ & dễ dùng",
    description: "Dành cho người muốn một mùi sáng, gọn, dễ đi làm, dễ dùng hằng ngày và ít rủi ro.",
    notes: ["Cam bergamot", "Xạ hương", "Neroli", "Oải hương"],
  },
  {
    title: "Gỗ & nam tính",
    description: "Hợp với người thích cảm giác chững chạc, chỉn chu, khô ráo và có chiều sâu hơn.",
    notes: ["Gỗ đàn hương", "Gỗ tuyết tùng", "Hoắc hương", "Cỏ hương bài"],
  },
  {
    title: "Hoa & thanh lịch",
    description: "Cho những ai thích mùi mềm mại, nữ tính hoặc sang theo kiểu nhẹ nhàng và tinh tế.",
    notes: ["Hoa hồng", "Hoa nhài", "Diên vĩ", "Mẫu đơn"],
  },
];

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] pb-20">
      <Header />

      <section className="border-b border-[var(--border)] bg-[#faf8f6] py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
            <Breadcrumbs items={[{ label: "Theo nốt hương" }]} />
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Note Finder</p>
            <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">Chọn nước hoa theo nốt hương</h1>
            <p className="max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
              Đây là cách khám phá lấy cảm hứng từ Fragrantica nhưng được Việt hóa cho dễ dùng hơn. Nếu bạn chỉ nhớ mình thích mùi vani, gỗ, cam chanh hay hoa hồng,
              hãy bắt đầu từ đây thay vì phải nhớ tên từng chai.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Bắt đầu từ mùi bạn thích</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Đi thẳng vào bảng xếp hạng đã lọc</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Dễ dùng cho người mới</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-8 md:py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {noteGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-[0_12px_35px_rgba(27,18,13,0.03)]"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Nhóm mùi</div>
              <h2 className="mt-3 text-2xl font-serif text-[#1b120d]">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.notes.map((note) => (
                  <Link
                    key={note}
                    href={`/bang-xep-hang?note=${encodeURIComponent(note)}`}
                    className="rounded-full border border-[#decfbd] bg-[#faf6f1] px-4 py-2.5 text-sm font-semibold text-[#4b3b30] transition hover:border-primary hover:text-primary"
                  >
                    {note}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-10">
        <div className="rounded-[28px] border border-[#e6d8c7] bg-[#1c130f] p-6 text-white shadow-[0_20px_50px_rgba(27,18,13,0.16)] md:p-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d9bc94]">Gợi ý dùng nhanh</div>
          <h2 className="mt-3 text-2xl font-serif">Không chắc mình hợp note nào?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Nếu bạn chỉ biết mình thích kiểu sạch, ngọt, gỗ hay sang trọng, hãy nhắn Zalo. Maison de SON sẽ gợi ý từ gu mùi thực tế trước khi đi đến chai cụ thể.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://zalo.me/0961226169"
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1b120d] transition hover:bg-[#d7b48c] hover:text-white"
            >
              Nhắn Zalo để được gợi ý
            </Link>
            <Link
              href="/bang-xep-hang"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Xem toàn bộ bảng xếp hạng
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
