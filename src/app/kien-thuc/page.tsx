import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPosts } from "@/sanity/lib/posts";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
    title: "Kiến Thức Nước Hoa - Review & Hướng Dẫn | Maison de SON",
    description: "Cẩm nang từ Maison de SON: review nước hoa, hướng dẫn chọn mùi, phân biệt thật giả, top picks theo ngân sách.",
    openGraph: {
        title: "Kiến Thức Nước Hoa | Maison de SON",
        description: "Review & hướng dẫn chọn nước hoa chuyên sâu từ Maison de SON",
    }
};

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800";

export default async function BlogPage() {
    const posts: any[] = await getAllPosts();

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            {/* Hero */}
            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[1200px] mx-auto px-5">
                    <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Editorial</p>
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">Kiến thức nước hoa</h1>
                    <p className="text-sm text-gray-500">Trở thành chuyên gia mùi hương cùng Maison de SON. {posts.length > 0 ? `${posts.length} bài viết` : ""}</p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-[1200px] mx-auto px-5 py-10">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/${post.slug}`} className="group flex flex-col">
                                {/* Image */}
                                <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4 relative flex-shrink-0">
                                    <Image
                                        src={post.mainImage || PLACEHOLDER_IMAGE}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        unoptimized={post.mainImage?.includes("fragrantica") || post.mainImage?.includes("unsplash")}
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-primary z-10">
                                        {post.category || "Kiến thức"}
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="text-[10px] text-gray-400 font-semibold mb-2 flex items-center gap-2">
                                    {post.publishedAt
                                        ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
                                        : "Mới cập nhật"
                                    }
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-xs text-gray-500 line-clamp-2 mt-auto">
                                    {post.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-400">
                        <p className="text-4xl mb-4">📖</p>
                        <p className="font-semibold text-lg text-gray-600">Chưa có bài viết nào trong mục kiến thức.</p>
                        <p className="text-sm mt-1">Team đang chuẩn bị nội dung, quay lại sớm nhé!</p>
                    </div>
                )}
            </section>

            <Newsletter />
        </main>
    );
}
