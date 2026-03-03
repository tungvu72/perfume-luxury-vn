import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPosts } from "@/sanity/lib/fetchers";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
    title: "Kiáº¿n Thá»©c NÆ°á»›c Hoa - Review & HÆ°á»›ng Dáº«n | Maison de SON",
    description: "Cáº©m nang tá»« Maison de SON: cÃ¡ch phÃ¢n biá»‡t tháº­t giáº£, ná»‘t hÆ°Æ¡ng, phong cÃ¡ch...",
};

export default async function BlogPage() {
    const posts: any[] = await getAllPosts();

    return (
        <main className="min-h-screen bg-white pb-20">
            <Header />

            <section className="bg-[#F9F9F9] py-12 md:py-16 border-b border-[var(--border)]">
                <div className="max-w-[1200px] mx-auto px-5">
                    <h1 className="text-3xl md:text-5xl font-serif mb-3">Kiáº¿n thá»©c nÆ°á»›c hoa</h1>
                    <p className="text-sm text-gray-500">Trá»Ÿ thÃ nh chuyÃªn gia mÃ¹i hÆ°Æ¡ng cÃ¹ng Maison de SON.</p>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-5 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.length > 0 ? posts.map((post, i) => (
                        <Link key={post.slug} href={`/kien-thuc/${post.slug}`} className="group">
                            <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4 relative">
                                <Image
                                    src={post.mainImage || 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800'}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-primary z-10">
                                    Tin tá»©c
                                </div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-semibold mb-2">
                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('vi-VN') : 'Má»›i cáº­p nháº­t'} â€¢ 5 phÃºt Ä‘á»c
                            </div>
                            <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                            <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                        </Link>
                    )) : (
                        <div className="col-span-3 py-20 text-center text-gray-400">
                            <p>ChÆ°a cÃ³ bÃ i viáº¿t nÃ o trong má»¥c kiáº¿n thá»©c.</p>
                        </div>
                    )}
                </div>
            </section>

            <Newsletter />
        </main>
    );
}


