import Link from "next/link";
import {
  AFFILIATE_DISCLOSURE,
  AUTHENTICITY_GUIDE,
  CATEGORY_COMMERCIAL_INTRO,
  EDITORIAL_METHODOLOGY,
  NEED_HUB_ROLES,
  PRICE_DISCLAIMER,
  VIDEO_METHODOLOGY,
} from "@/components/commercial/commercialTrustContent";

type SectionTone = "light" | "muted" | "dark";

function shellClass(tone: SectionTone) {
  if (tone === "dark") {
    return "rounded-3xl border border-white/10 bg-[#1a1410] text-white";
  }
  if (tone === "muted") {
    return "rounded-3xl border border-[#eadfce] bg-[#faf8f6] text-[#1b120d]";
  }
  return "rounded-3xl border border-[#eadfce] bg-white text-[#1b120d]";
}

function mutedText(tone: SectionTone) {
  return tone === "dark" ? "text-white/75" : "text-gray-600";
}

function titleClass(tone: SectionTone) {
  return tone === "dark" ? "text-white" : "text-[#1b120d]";
}

export function PriceDisclaimerBlock({
  id,
  tone = "muted",
  compact = false,
}: {
  id?: string;
  tone?: SectionTone;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${shellClass(tone)} ${compact ? "p-5 md:p-6" : "p-6 md:p-8"}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Giá & mua sắm
      </p>
      <h2 className={`mt-2 font-serif text-xl md:text-2xl ${titleClass(tone)}`}>
        {PRICE_DISCLAIMER.title}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-7 md:text-[15px] ${mutedText(tone)}`}>
        {PRICE_DISCLAIMER.lead}
      </p>
      <ul className={`mt-4 space-y-2 text-sm leading-7 ${mutedText(tone)}`}>
        {PRICE_DISCLAIMER.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AuthenticityGuideBlock({
  id,
  tone = "light",
  compact = false,
}: {
  id?: string;
  tone?: SectionTone;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${shellClass(tone)} ${compact ? "p-5 md:p-6" : "p-6 md:p-8"}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Chính hãng & nguồn mua
      </p>
      <h2 className={`mt-2 font-serif text-xl md:text-2xl ${titleClass(tone)}`}>
        {AUTHENTICITY_GUIDE.title}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-7 md:text-[15px] ${mutedText(tone)}`}>
        {AUTHENTICITY_GUIDE.lead}
      </p>
      <ul className={`mt-4 space-y-2 text-sm leading-7 ${mutedText(tone)}`}>
        {AUTHENTICITY_GUIDE.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-4 text-sm leading-7 ${mutedText(tone)}`}>
        {AUTHENTICITY_GUIDE.cautions}{" "}
        <Link
          href="/kien-thuc"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          Đọc thêm tại hub kiến thức
        </Link>
        .
      </p>
    </section>
  );
}

export function AffiliateDisclosureBlock({
  id = "minh-bach-affiliate",
  tone = "light",
  compact = false,
}: {
  id?: string;
  tone?: SectionTone;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${shellClass(tone)} ${compact ? "p-5 md:p-6" : "p-6 md:p-8"}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Minh bạch
      </p>
      <h2 className={`mt-2 font-serif text-xl md:text-2xl ${titleClass(tone)}`}>
        {AFFILIATE_DISCLOSURE.title}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-7 md:text-[15px] ${mutedText(tone)}`}>
        {AFFILIATE_DISCLOSURE.lead}
      </p>
      <ul className={`mt-4 space-y-2 text-sm leading-7 ${mutedText(tone)}`}>
        {AFFILIATE_DISCLOSURE.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-4 text-sm ${mutedText(tone)}`}>
        Chi tiết chính sách:{" "}
        <Link
          href="/gioi-thieu#minh-bach-affiliate"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          Về Maison de Son — minh bạch affiliate
        </Link>
        .
      </p>
    </section>
  );
}

export function EditorialMethodologyBlock({
  id = "tieu-chuan-bien-tap",
  tone = "muted",
  compact = false,
}: {
  id?: string;
  tone?: SectionTone;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${shellClass(tone)} ${compact ? "p-5 md:p-6" : "p-6 md:p-8"}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
        Biên tập
      </p>
      <h2 className={`mt-2 font-serif text-xl md:text-2xl ${titleClass(tone)}`}>
        {EDITORIAL_METHODOLOGY.title}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-7 md:text-[15px] ${mutedText(tone)}`}>
        {EDITORIAL_METHODOLOGY.lead}
      </p>
      <ul className={`mt-4 space-y-2 text-sm leading-7 ${mutedText(tone)}`}>
        {EDITORIAL_METHODOLOGY.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-4 flex flex-wrap gap-3 text-sm ${mutedText(tone)}`}>
        <Link
          href="/tac-gia"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          Trang tác giả
        </Link>
        <Link
          href="/gioi-thieu#tieu-chuan-bien-tap"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          Tiêu chuẩn trên trang giới thiệu
        </Link>
      </div>
    </section>
  );
}

/** Homepage commercial-trust strip — concise, not ecommerce storefront */
export function HomepageCommercialTrust() {
  return (
    <section
      id="thuong-mai-minh-bach"
      className="border-y border-[var(--color-border)] bg-[var(--color-bg-subtle)]"
      data-commercial-section="homepage-trust"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-14">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Review · giá tham khảo · nơi mua
          </p>
          <h2 className="mt-2 font-serif text-2xl md:text-3xl text-[var(--color-text)]">
            Cách Maison de Son hỗ trợ trước khi bạn mua
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] md:text-[15px]">
            Chúng tôi không phải cửa hàng online hay đại lý chính hãng. Trang này giúp bạn đọc review,
            định hướng ngân sách và chọn nguồn mua cẩn trọng — trước khi quyết định.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Review để thu hẹp gu",
              body: "So sánh phong cách mùi, độ dễ dùng và ngữ cảnh trước khi mở từng chai.",
              href: "/kien-thuc",
              label: "Kiến thức",
            },
            {
              title: "Giá tham khảo",
              body: "Không hiển thị giá chốt ảo. Bạn xác nhận giá cuối trên kênh bán/đối tác.",
              href: "/gioi-thieu#gia-tham-khao",
              label: "Chính sách giá",
            },
            {
              title: "Tiêu chí nguồn mua",
              body: "Danh tính người bán, đổi trả, bao bì, batch code — nhiều tín hiệu, không một chứng cứ tuyệt đối.",
              href: "/kien-thuc",
              label: "Hướng dẫn chọn nguồn",
            },
            {
              title: "Minh bạch affiliate",
              body: "Một số liên kết có thể mang hoa hồng; không làm tăng giá bạn trả và không quyết định kết luận review.",
              href: "/gioi-thieu#minh-bach-affiliate",
              label: "Xem minh bạch",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#eadfce] bg-white p-5 shadow-[0_8px_24px_rgba(27,18,13,0.03)]"
            >
              <h3 className="font-serif text-lg text-[#1b120d]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{card.body}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex text-sm font-semibold text-primary underline-offset-2 hover:underline"
              >
                {card.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            href="/nuoc-hoa-nam-chinh-hang"
            className="rounded-full border border-[#decfbd] bg-white px-4 py-2 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Nước hoa nam
          </Link>
          <Link
            href="/nuoc-hoa-nu-chinh-hang"
            className="rounded-full border border-[#decfbd] bg-white px-4 py-2 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Nước hoa nữ
          </Link>
          <Link
            href="/nuoc-hoa-theo-nhu-cau"
            className="rounded-full border border-[#decfbd] bg-white px-4 py-2 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Lọc theo nhu cầu
          </Link>
          <Link
            href="/theo-nhu-cau"
            className="rounded-full border border-[#decfbd] bg-white px-4 py-2 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Theo hoàn cảnh
          </Link>
          <Link
            href="/thuong-hieu"
            className="rounded-full border border-[#decfbd] bg-white px-4 py-2 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Thương hiệu
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CategoryCommercialGuide({
  gender,
}: {
  gender: "nam" | "nu" | "unisex";
}) {
  const copy = CATEGORY_COMMERCIAL_INTRO[gender];
  return (
    <div className="space-y-4" data-commercial-section={`category-${gender}`}>
      <section className="rounded-3xl border border-[#eadfce] bg-[#faf8f6] p-6 md:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Hướng dẫn danh mục
        </p>
        <h2 className="mt-2 font-serif text-xl md:text-2xl text-[#1b120d]">
          Cách dùng trang này trước khi mua
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-[#1b120d]">Phù hợp ai</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{copy.who}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1b120d]">Chọn theo hoàn cảnh</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{copy.occasion}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1b120d]">Bước tiếp theo</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">{copy.next}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link
            href="/theo-nhu-cau"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Theo hoàn cảnh
          </Link>
          <Link
            href="/nuoc-hoa-theo-nhu-cau"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Lọc sản phẩm
          </Link>
          <Link
            href="/theo-not-huong"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Theo nốt hương
          </Link>
          <Link
            href="/gioi-thieu#minh-bach-affiliate"
            className="rounded-full border border-[#decfbd] bg-white px-3 py-1.5 font-semibold text-[#4b3b30] hover:border-primary/40"
          >
            Minh bạch affiliate
          </Link>
        </div>
      </section>
      <div className="grid gap-4 lg:grid-cols-2">
        <PriceDisclaimerBlock compact />
        <AuthenticityGuideBlock compact />
      </div>
    </div>
  );
}

export function DiscoveryHubCommercialNote({
  role,
}: {
  role: "filter" | "occasion" | "notes" | "brands";
}) {
  if (role === "filter") {
    const r = NEED_HUB_ROLES.filterTool;
    return (
      <section
        className="mx-auto max-w-[1200px] px-5 py-6"
        data-commercial-section="filter-hub"
      >
        <div className="rounded-3xl border border-[#eadfce] bg-[#faf8f6] p-5 md:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            {r.eyebrow}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-[15px]">
            {r.purpose}{" "}
            <Link href="/theo-nhu-cau" className="font-semibold text-primary underline-offset-2 hover:underline">
              {r.vsEditorial}
            </Link>
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <PriceDisclaimerBlock compact />
            <AuthenticityGuideBlock compact />
          </div>
        </div>
      </section>
    );
  }

  if (role === "occasion") {
    const r = NEED_HUB_ROLES.occasionHub;
    return (
      <section className="mx-auto max-w-[1200px] px-5 pb-6" data-commercial-section="occasion-hub">
        <div className="rounded-3xl border border-[#eadfce] bg-white p-5 md:p-6 shadow-[0_12px_30px_rgba(27,18,13,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            {r.eyebrow}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600 md:text-[15px]">
            {r.purpose}{" "}
            <Link
              href="/nuoc-hoa-theo-nhu-cau"
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {r.vsFilter}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Link href="/nuoc-hoa-nam-chinh-hang" className="rounded-full bg-[#f7f2eb] px-3 py-1.5 font-semibold text-[#4b3b30]">
              Danh mục nam
            </Link>
            <Link href="/nuoc-hoa-nu-chinh-hang" className="rounded-full bg-[#f7f2eb] px-3 py-1.5 font-semibold text-[#4b3b30]">
              Danh mục nữ
            </Link>
            <Link href="/gioi-thieu#gia-tham-khao" className="rounded-full bg-[#f7f2eb] px-3 py-1.5 font-semibold text-[#4b3b30]">
              Giá tham khảo
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (role === "notes") {
    return (
      <section className="mx-auto max-w-[1200px] px-5 py-6" data-commercial-section="notes-hub">
        <div className="grid gap-4 lg:grid-cols-2">
          <PriceDisclaimerBlock compact />
          <div className="rounded-3xl border border-[#eadfce] bg-white p-5 md:p-6">
            <h2 className="font-serif text-xl text-[#1b120d]">Tiếp theo sau khi chọn nốt</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Khi đã biết mình thích vani, gỗ, hoa hay cam chanh, hãy sang danh mục hoặc bộ lọc để
              mở review chai cụ thể — rồi áp dụng tiêu chí chọn nguồn mua.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link href="/nuoc-hoa-theo-nhu-cau" className="font-semibold text-primary underline-offset-2 hover:underline">
                Lọc sản phẩm
              </Link>
              <Link href="/thuong-hieu" className="font-semibold text-primary underline-offset-2 hover:underline">
                Thương hiệu
              </Link>
              <Link href="/kien-thuc" className="font-semibold text-primary underline-offset-2 hover:underline">
                Kiến thức
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // brands
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-6" data-commercial-section="brands-hub">
      <div className="grid gap-4 lg:grid-cols-2">
        <AuthenticityGuideBlock compact />
        <AffiliateDisclosureBlock compact />
      </div>
    </section>
  );
}

export function KnowledgeHubCommercialNav() {
  return (
    <section
      className="border-b border-[var(--color-border)] bg-white"
      data-commercial-section="knowledge-nav"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-5">
        <h2 className="font-serif text-2xl text-[var(--color-text)]">
          Đọc trước khi mua: giá, thật–giả, nguồn bán và phương pháp review
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
          Hub kiến thức giữ vai trò giáo dục. Dùng các hướng dẫn dưới đây để tránh mua vội và hiểu
          giới hạn của review online.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/gioi-thieu#gia-tham-khao", title: "Giá & nồng độ", desc: "Cách hiểu giá tham khảo và không nhầm với giá chốt." },
            { href: "/kien-thuc", title: "Thật – giả & sai lầm mua", desc: "Tín hiệu bao bì, người bán và sai lầm phổ biến khi mua online." },
            { href: "/gioi-thieu#tieu-chuan-bien-tap", title: "Phương pháp review", desc: "Nguồn thông tin, giới hạn test và cách sửa lỗi." },
            { href: "/tac-gia", title: "Tiêu chuẩn biên tập", desc: "Ai viết, xung đột lợi ích và minh bạch affiliate." },
            { href: "/nuoc-hoa-theo-nhu-cau", title: "Lọc sản phẩm", desc: "Thu hẹp catalog theo nhu cầu trước khi đọc sâu." },
            { href: "/theo-nhu-cau", title: "Theo hoàn cảnh", desc: "Đi làm, hẹn hò, mùa hè — chọn hướng rồi mới vào chai." },
          ].map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              className="rounded-2xl border border-[#eadfce] bg-[#faf8f6] p-4 transition hover:border-primary/40"
            >
              <div className="font-semibold text-[#1b120d]">{item.title}</div>
              <p className="mt-1 text-sm leading-6 text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoMethodologyBlock() {
  return (
    <section
      className="border-t border-white/10 bg-[#0D0D0E] text-white"
      data-commercial-section="video-method"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-5">
        <h2 className="font-serif text-2xl md:text-3xl">{VIDEO_METHODOLOGY.title}</h2>
        <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-7 text-white/75">
          {VIDEO_METHODOLOGY.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href="/kien-thuc" className="font-semibold text-primary underline-offset-2 hover:underline">
            Kiến thức
          </Link>
          <Link href="/gioi-thieu#tieu-chuan-bien-tap" className="font-semibold text-primary underline-offset-2 hover:underline">
            Tiêu chuẩn biên tập
          </Link>
          <Link href="/gioi-thieu#minh-bach-affiliate" className="font-semibold text-primary underline-offset-2 hover:underline">
            Minh bạch affiliate
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AuthorEditorialStandards() {
  return (
    <section className="border-t border-[var(--border)] bg-[#faf8f6]" data-commercial-section="author-standards">
      <div className="mx-auto max-w-[1200px] space-y-4 px-5 py-10">
        <EditorialMethodologyBlock />
        <div className="grid gap-4 lg:grid-cols-2">
          <AffiliateDisclosureBlock />
          <section className="rounded-3xl border border-[#eadfce] bg-white p-6 md:p-8">
            <h2 className="font-serif text-xl md:text-2xl text-[#1b120d]">
              Xung đột lợi ích & sửa lỗi
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Quan hệ affiliate (nếu có) được công bố; không dùng để “bảo vệ” sản phẩm kém phù hợp.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Không tự nhận chứng chỉ nước hoa hàn lâm hay đã test cá nhân toàn bộ catalog.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Khi phát hiện sai sót, ưu tiên cập nhật nội dung — xem{" "}
                  <Link href="/gioi-thieu#chinh-sach-chinh-sua" className="font-semibold text-primary underline-offset-2 hover:underline">
                    chính sách chỉnh sửa
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export function AboutPolicyAnchors() {
  return (
    <div className="space-y-6" data-commercial-section="about-policy">
      <EditorialMethodologyBlock id="tieu-chuan-bien-tap" />
      <PriceDisclaimerBlock id="gia-tham-khao" />
      <AffiliateDisclosureBlock id="minh-bach-affiliate" />
      <section
        id="chinh-sach-chinh-sua"
        className="rounded-3xl border border-[#eadfce] bg-white p-6 md:p-8"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Chỉnh sửa
        </p>
        <h2 className="mt-2 font-serif text-xl md:text-2xl text-[#1b120d]">
          Chính sách chỉnh sửa nội dung
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-600">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>Sửa lỗi dữ kiện, mô tả mùi hoặc liên kết hỏng khi được phát hiện.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>Cập nhật cách nói về giá và mua sắm khi có feed/đối tác mới — không “đóng băng” giá ảo.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              Phản hồi biên tập: liên hệ qua kênh Zalo/trang{" "}
              <Link href="/tac-gia" className="font-semibold text-primary underline-offset-2 hover:underline">
                tác giả
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
