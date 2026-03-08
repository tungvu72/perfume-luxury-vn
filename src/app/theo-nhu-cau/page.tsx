import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chọn nước hoa theo nhu cầu | Maison de SON",
  description:
    "Tìm nước hoa theo nhu cầu thực tế tại Maison de SON: đi làm, hẹn hò, mùa hè nóng ẩm, sang trọng, dễ dùng hằng ngày và theo tầm giá phù hợp.",
  alternates: {
    canonical: "https://www.maisondeson.com/theo-nhu-cau",
  },
};

const useCases = [
  {
    title: "Đi làm văn phòng",
    description: "Ưu tiên sạch, gọn, dễ chịu, không quá áp lực với người ngồi gần và đủ chỉn chu để dùng hằng ngày.",
    href: "/bang-xep-hang",
    chips: ["Dễ dùng", "Sạch sẽ", "Ít rủi ro"],
  },
  {
    title: "Hẹn hò buổi tối",
    description: "Tập trung vào những lựa chọn cuốn hút hơn, có chiều sâu hơn và tạo dấu ấn tốt khi ở khoảng cách gần.",
    href: "/bang-xep-hang",
    chips: ["Cuốn hút", "Gần gũi", "Ấn tượng"],
  },
  {
    title: "Mùa hè nóng ẩm",
    description: "Dành cho người cần mùi thoáng, sáng, sạch và không bị bí khi dùng trong thời tiết Việt Nam.",
    href: "/bang-xep-hang",
    chips: ["Thoáng", "Mát", "Hợp khí hậu VN"],
  },
  {
    title: "Dễ dùng hằng ngày",
    description: "Những chai ít kén hoàn cảnh, dễ tạo thiện cảm và phù hợp nếu bạn chỉ muốn có một lựa chọn an toàn mà vẫn đẹp.",
    href: "/bang-xep-hang",
    chips: ["An toàn", "Đa dụng", "Ai cũng dùng được"],
  },
  {
    title: "Sang trọng & chỉn chu",
    description: "Cho người muốn mùi hương tạo cảm giác trưởng thành, có gu, điềm tĩnh và chỉnh chu hơn bình thường.",
    href: "/bang-xep-hang",
    chips: ["Sang", "Trưởng thành", "Có gu"],
  },
  {
    title: "Theo tầm giá",
    description: "Nếu ngân sách là thứ bạn cần chốt trước, hãy đi vào bảng xếp hạng để lọc nhanh theo mức giá phù hợp.",
    href: "/bang-xep-hang",
    chips: ["Dưới 2.5tr", "2.5–5tr", "5tr+"],
  },
];

export default function UseCaseFinderPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf7] pb-20">
      <Header />

      <section className="border-b border-[var(--border)] bg-[#faf8f6] py-10 md:py-14">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="overflow-hidden rounded-[32px] border border-[#eadfce] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(27,18,13,0.05)] md:px-8 md:py-10">
            <Breadcrumbs items={[{ label: "Theo nhu cầu" }]} />
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Perfume Finder</p>
            <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">Chọn nước hoa theo nhu cầu thực tế</h1>
            <p className="max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
              Nếu bạn chưa nhớ tên chai nào, cũng không chắc mình thích note nào, hãy bắt đầu từ hoàn cảnh dùng thật. Đây là cách Maison de SON Việt hóa tinh thần perfume finder để người xem chọn nhanh hơn và đỡ mơ hồ hơn.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Đi từ nhu cầu thật</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Phù hợp người mới lẫn người đã biết gu</span>
              <span className="rounded-full bg-[#f7f2eb] px-4 py-2 font-semibold text-[#4b3b30]">Dẫn thẳng vào bảng xếp hạng</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-8 md:py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-[#eadfce] bg-white p-6 shadow-[0_12px_35px_rgba(27,18,13,0.03)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,18,13,0.08)]"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Use case</div>
              <h2 className="mt-3 text-2xl font-serif text-[#1b120d]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#decfbd] bg-[#faf6f1] px-3 py-1.5 text-xs font-semibold text-[#4b3b30]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                Xem gợi ý →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-10">
        <div className="rounded-[28px] border border-[#e6d8c7] bg-[#1c130f] p-6 text-white shadow-[0_20px_50px_rgba(27,18,13,0.16)] md:p-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d9bc94]">Need help</div>
          <h2 className="mt-3 text-2xl font-serif">Muốn được chốt nhanh theo gu và ngân sách?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Nếu bạn chỉ biết mình cần một mùi đi làm, một mùi hẹn hò hay một chai sang để dùng lâu dài, cứ nhắn Zalo. Maison de SON sẽ gợi ý từ nhu cầu thật trước khi nói đến tên chai.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://zalo.me/0961226169"
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1b120d] transition hover:bg-[#d7b48c] hover:text-white"
            >
              Nhắn Zalo để được tư vấn
            </Link>
            <Link
              href="/theo-not-huong"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Khám phá theo nốt hương
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
