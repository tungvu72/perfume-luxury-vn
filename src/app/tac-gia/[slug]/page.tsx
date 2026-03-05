import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllPosts } from "@/sanity/lib/posts";

// Data của từng author — dùng slug để route
const AUTHOR_DATA: Record<string, any> = {
    "maison-editorial": {
        name: "Maison de SON Editorial",
        role: "Biên tập viên",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
        bio: `Đội ngũ biên tập Maison de SON — gồm những người đam mê nước hoa với kinh nghiệm test hàng trăm chai từ Designer đến Niche. Chúng tôi ưu tiên sự thật hơn marketing, và luôn verify số liệu từ ít nhất 2 nguồn độc lập trước khi publish.

Phương châm: "Không bán nước hoa. Bán sự thông thái khi chọn hương."`,
        expertise: ["Product Review", "Buying Guide", "Niche Fragrance", "Fragrantica Data", "Thị trường Việt Nam"],
        since: "2026",
        zalo: "https://zalo.me/0961226169",
        principles: [
            "Không nhận tài trợ từ nhãn hàng",
            "Verify số liệu ≥ 2 nguồn",
            "Giá cập nhật theo tháng thực tế",
            "Nói thật cả ưu lẫn nhược điểm",
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(AUTHOR_DATA).map(slug => ({ slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const author = AUTHOR_DATA[slug];
    if (!author) return { title: "Tác giả | Maison de SON" };
    return {
        title: `${author.name} — Chuyên gia nước hoa | Maison de SON`,
        description: `${author.name}, ${author.role} tại Maison de SON. Đọc các bài review nước hoa thực tế và trung thực.`,
    };
}

export default async function AuthorProfilePage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const author = AUTHOR_DATA[slug];

    if (!author) {
        return (
            <main className="min-h-screen bg-white">
                <Header />
                <div className="max-w-[800px] mx-auto px-5 py-20 text-center">
                    <p className="text-gray-400">Không tìm thấy tác giả.</p>
                    <Link href="/tac-gia" className="text-primary text-sm mt-4 inline-block">← Xem tất cả tác giả</Link>
                </div>
            </main>
        );
    }

    const allPosts = await getAllPosts();
    const authorPosts = allPosts.filter(
        p => !p.author || p.author === author.name || p.author === "Maison de SON"
    ).slice(0, 6);

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            {/* HEADER */}
            <section className="border-b border-[var(--border)] py-10">
                <div className="max-w-[1200px] mx-auto px-5">
                    <Breadcrumbs items={[
                        { label: "Tác giả", href: "/tac-gia" },
                        { label: author.name }
                    ]} />
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-5 py-10">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT: Author Info */}
                    <aside className="lg:w-[320px] flex-shrink-0">
                        <div className="sticky top-[140px]">
                            {/* Avatar */}
                            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 mb-5 relative ring-4 ring-[var(--border)]">
                                <Image
                                    src={author.avatar}
                                    alt={author.name}
                                    fill
                                    sizes="112px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Basic Info */}
                            <div className="text-[10px] font-bold text-primary tracking-wider uppercase mb-1">{author.role}</div>
                            <h1 className="text-2xl font-serif font-bold mb-2">{author.name}</h1>
                            <div className="text-[11px] text-gray-400 mb-5">Thành viên từ {author.since}</div>

                            {/* Bio */}
                            <div className="text-sm text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                                {author.bio}
                            </div>

                            {/* Expertise */}
                            <div className="mb-6">
                                <div className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-2">Chuyên môn</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {author.expertise.map((tag: string) => (
                                        <span key={tag} className="text-[9px] font-bold px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200 text-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Nguyên tắc */}
                            <div className="mb-6 bg-[#FAFAFA] rounded-xl p-4 border border-[var(--border)]">
                                <div className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-3">Nguyên tắc làm việc</div>
                                <ul className="space-y-2">
                                    {author.principles.map((p: string) => (
                                        <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                                            <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <a
                                href={author.zalo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-bold px-4 py-3 bg-[#0068FF] text-white rounded-full hover:opacity-90 transition-opacity justify-center"
                            >
                                💬 Liên hệ qua Zalo
                            </a>
                        </div>
                    </aside>

                    {/* RIGHT: Articles */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-serif font-bold">Bài viết đã đăng</h2>
                            <span className="text-sm text-gray-400">{authorPosts.length} bài</span>
                        </div>

                        {authorPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {authorPosts.map(post => (
                                    <Link
                                        key={post.slug}
                                        href={`/kien-thuc/${post.slug}`}
                                        className="group flex gap-4 p-4 border border-[var(--border)] rounded-xl hover:shadow-md hover:border-primary/20 transition-all"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                                            {post.mainImage ? (
                                                <Image
                                                    src={post.mainImage}
                                                    alt={post.title}
                                                    fill
                                                    sizes="80px"
                                                    className="object-cover group-hover:scale-105 transition-transform"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-2xl">📝</div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1">{post.category}</div>
                                            <h3 className="text-sm font-semibold leading-snug mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <span className="text-[10px] text-gray-400">{post.readTime}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 text-gray-400">
                                <div className="text-4xl mb-3">📝</div>
                                <p className="text-sm">Chưa có bài viết nào</p>
                            </div>
                        )}

                        {allPosts.length > 6 && (
                            <div className="text-center mt-8">
                                <Link
                                    href="/kien-thuc"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                >
                                    Xem tất cả bài viết →
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
