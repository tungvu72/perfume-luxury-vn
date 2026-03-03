import { getPostBySlug } from "@/sanity/lib/fetchers";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollProgress from "@/components/ScrollProgress";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post: any = await getPostBySlug(id);
    return {
        title: post ? `${post.title} | Maison de SON` : "BÃ i viáº¿t khÃ´ng tá»“n táº¡i",
        description: post?.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post: any = await getPostBySlug(id);

    if (!post) notFound();

    return (
        <main className="min-h-screen bg-white pb-20">
            <ScrollProgress />
            <Header />

            <article className="max-w-[800px] mx-auto px-5 py-10">
                <Breadcrumbs items={[{ label: 'Kiáº¿n thá»©c', href: '/kien-thuc' }, { label: post.title }]} />

                <div className="mb-10 text-center">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-[3px] mb-4">Kiáº¿n thá»©c</div>
                    <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-6">{post.title}</h1>
                    <div className="text-xs text-gray-400 font-semibold">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('vi-VN') : 'Má»›i cáº­p nháº­t'} â€¢ 5 phÃºt Ä‘á»c
                    </div>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
                    <Image
                        src={post.mainImage || 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800'}
                        alt={post.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-lg prose-gray max-w-none">
                    <p className="text-xl text-gray-500 italic mb-10 leading-relaxed border-l-4 border-primary pl-6">
                        {post.excerpt}
                    </p>
                    <div className="text-gray-700 leading-loose space-y-6">
                        {/* 
                           Note: If Sanity schema has a body field (Portable Text), it should be rendered here.
                           For now, we use the excerpt as the main content or a placeholder.
                        */}
                        <p>Ná»™i dung bÃ i viáº¿t Ä‘ang Ä‘Æ°á»£c cáº­p nháº­t tá»« há»‡ thá»‘ng quáº£n trá»‹ Maison de SON...</p>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-[var(--border)] flex justify-between items-center">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Chia sáº»</div>
                    <div className="flex gap-4">
                        <button className="text-[10px] font-bold uppercase hover:text-primary transition-colors">Facebook</button>
                        <button className="text-[10px] font-bold uppercase hover:text-primary transition-colors">Instagram</button>
                        <button className="text-[10px] font-bold uppercase hover:text-primary transition-colors">Zalo</button>
                    </div>
                </div>
            </article>
        </main>
    );
}

