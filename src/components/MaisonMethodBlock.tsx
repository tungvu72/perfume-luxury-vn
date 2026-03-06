import Link from "next/link";

export default function MaisonMethodBlock() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-4 sm:px-5 sm:py-6">
      <div className="rounded-3xl border border-[var(--border)] bg-[#111111] p-5 text-white sm:p-6 lg:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">Maison Method</p>
        <h2 className="mt-2 text-2xl font-serif">Maison De Son review nước hoa như thế nào?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75 sm:text-base">
          Chúng tôi không chỉ chấm mùi hay hay dở. Mỗi bài viết được xây trên DNA mùi hương, độ bám tỏa trong điều kiện sử dụng thực tế tại Việt Nam, giá trị tiền bỏ ra và bối cảnh dùng phù hợp.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "DNA mùi hương và cấu trúc top / mid / base",
            "Hiệu năng trong khí hậu nóng ẩm, môi trường dùng thực tế tại Việt Nam",
            "Giá trị tiền bỏ ra, độ đáng mua và mức độ dễ dùng",
            "Ngữ cảnh phù hợp: đi làm, hẹn hò, đi chơi, dùng hằng ngày",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/85">
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/gioi-thieu"
          className="mt-6 inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Tìm hiểu thêm về Maison De Son
        </Link>
      </div>
    </section>
  );
}
