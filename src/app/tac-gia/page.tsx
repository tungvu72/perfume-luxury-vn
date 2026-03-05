import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Về tác giả — Maison de SON | Đội ngũ chuyên gia nước hoa",
    description: "Gặp gỡ đội ngũ chuyên gia đứng sau Maison de SON — những người đã test hàng trăm chai nước hoa để mang đến review thực tế và trung thực nhất.",
};

// Danh sách tác giả — cập nhật khi team mở rộng
const AUTHORS = [
    {
        slug: "maison-editorial",
        name: "Maison de SON Editorial",
        role: "Biên tập viên",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        bio: "Đội ngũ biên tập Maison de SON — gồm những người đam mê nước hoa với kinh nghiệm test hàng trăm chai từ Designer đến Niche. Chúng tôi không nhận tài trợ từ nhãn hàng, mọi đánh giá đều độc lập và trung thực.",
        expertise: ["Product Review", "Buying Guide", "Niche Fragrance", "Thị trường VN"],
        articleCount: 33,
        zalo: "https://zalo.me/0961226169",
        since: "2026",
    },
];

export default function AuthorIndexPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            {/* HEADER */}
            <section className="border-b border-[var(--border)] py-10 md:py-14">
                <div className="max-w-[1200px] mx-auto px-5">
                    <Breadcrumbs items={[{ label: "Tác giả" }]} />
                    <h1 className="text-3xl md:text-4xl font-serif mb-2">Đội ngũ chuyên gia</h1>
                    <p className="text-sm text-gray-400">
                        Những người đứng sau mỗi bài review thực tế tại Maison de SON
                    </p>
                </div>
            </section>

            {/* AUTHORS GRID */}
            <section className="max-w-[1200px] mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AUTHORS.map(author => (
                        <Link
                            key={author.slug}
                            href={`/tac-gia/${author.slug}`}
                            className="group block"
                        >
                            <div className="border border-[var(--border)] rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-5 relative ring-2 ring-[var(--border)] group-hover:ring-primary/30 transition-all">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="text-[10px] font-bold text-primary tracking-wider uppercase mb-1">{author.role}</div>
                                <h2 className="text-lg font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                    {author.name}
                                </h2>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                                    {author.bio}
                                </p>

                                {/* Expertise tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {author.expertise.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-[9px] font-bold px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200 text-gray-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-[11px] text-gray-400">
                                    <span>📝 {author.articleCount} bài đã viết</span>
                                    <span>Since {author.since}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* WHY TRUST US */}
            <section className="bg-[#FAFAFA] border-t border-[var(--border)] py-14">
                <div className="max-w-[800px] mx-auto px-5 text-center">
                    <h2 className="text-2xl font-serif font-bold mb-4">Tại sao tin tưởng chúng tôi?</h2>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                        Maison de SON hoạt động theo nguyên tắc độc lập — không nhận sponsorship từ hãng nước hoa,
                        không mua review ảo. Mọi đánh giá đều dựa trên trải nghiệm thực tế và số liệu từ cộng đồng Fragrantica.
                    </p>
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {[
                            { number: "33+", label: "Bài review\nđã publish" },
                            { number: "100%", label: "Độc lập,\nkhông sponsored" },
                            { number: "2+", label: "Nguồn verify\nmỗi số liệu" },
                        ].map(stat => (
                            <div key={stat.label}>
                                <div className="text-3xl font-serif font-bold text-primary mb-1">{stat.number}</div>
                                <div className="text-[11px] text-gray-400 whitespace-pre-line">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
