import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPosts } from "@/sanity/lib/posts";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
    title: "Ki&#7871;n Th&#7913;c N&#432;&#7833;c Hoa - Review & H&#432;&#7899;ng D&#7851;n | Maison de SON",
    description: "C&#7813;m nang t&#7915; Maison de SON: review n&#432;&#7833;c hoa, h&#432;&#7899;ng d&#7851;n ch&#7885;n mùi, phân bi&#7879;t th&#7853;t gi&#7843;, top picks theo ngân sách.",
    openGraph: {
        title: "Ki&#7871;n Th&#7913;c N&#432;&#7833;c Hoa | Maison de SON",
        description: "Review & h&#432;&#7899;ng d&#7851;n ch&#7885;n n&#432;&#7833;c hoa chuyên sâu t&#7915; Maison de SON",
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
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">Ki&#7871;n th&#7913;c n&#432;&#7833;c hoa</h1>
                    <p className="text-sm text-gray-500">Tr&#7903; thành chuyên gia mùi h&#432;&#417;ng cùng Maison de SON. {posts.length > 0 ? `${posts.length} bài vi&#7871;t` : ""}</p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-[1200px] mx-auto px-5 py-10">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/kien-thuc/${post.slug}`} className="group flex flex-col">
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
                                        {post.category || "Ki&#7871;n th&#7913;c"}
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="text-[10px] text-gray-400 font-semibold mb-2 flex items-center gap-2">
                                    {post.publishedAt
                                        ? new Date(post.publishedAt).toLocaleDateString("vi-VN")
                                        : "M&#7899;i c&#7853;p nh&#7853;t"
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
                        <p className="text-4xl mb-4">&#128214;</p>
                        <p className="font-semibold text-lg text-gray-600">Ch&#432;a có bài vi&#7871;t nào trong m&#7909;c ki&#7871;n th&#7913;c.</p>
                        <p className="text-sm mt-1">Team &#273;ang chu&#7849;n b&#7883; n&#7893;i dung, quay l&#7841;i s&#7899;m nhé!</p>
                    </div>
                )}
            </section>

            <Newsletter />
        </main>
    );
}
