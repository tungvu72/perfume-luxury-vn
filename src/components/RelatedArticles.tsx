import { getAllPosts } from "@/sanity/lib/posts";
import { Perfume } from "@/types";
import Link from "next/link";

export default async function RelatedArticles({ product }: { product: Perfume }) {
    const allPosts = await getAllPosts();

    // Match bài viết liên quan theo: tên sản phẩm, brand trong title/excerpt
    const searchTerms = [
        product.name.toLowerCase(),
        product.brand.toLowerCase(),
        ...product.tags.map(t => t.toLowerCase()),
    ];

    const related = allPosts
        .filter(post => {
            const text = `${post.title} ${post.excerpt}`.toLowerCase();
            return searchTerms.some(term => text.includes(term));
        })
        .slice(0, 3); // Tối đa 3 bài

    if (related.length === 0) return null;

    return (
        <div className="space-y-4">
            {related.map(post => (
                <Link
                    key={post.fullSlug}
                    href={`/kien-thuc/${post.fullSlug}`}
                    className="flex items-start gap-4 group hover:bg-gray-50 rounded-xl p-3 -mx-3 transition-colors"
                >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-lg">
                        {post.category === 'Product Review' ? '🔍' :
                            post.category === 'So sánh' ? '⚖️' :
                                post.category === 'Buying Guide' ? '🛒' :
                                    post.category === 'How-to' ? '📖' : '📝'}
                    </div>
                    <div className="min-w-0">
                        <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">
                            {post.category || 'Kiến thức'}
                        </div>
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {post.title}
                        </div>
                        {post.excerpt && (
                            <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                {post.excerpt}
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
