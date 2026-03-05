import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/sanity/lib/posts';
import { getAllProducts } from '@/sanity/lib/fetchers';
import type { Perfume } from '@/types';

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Không tìm thấy bài viết | Maison de SON' };
  }

  return {
    title: `${post.title} | Maison de SON`,
    description: post.excerpt || `Đọc bài viết ${post.title} tại Maison de SON — kiến thức nước hoa chuyên sâu.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.mainImage ? [post.mainImage] : [],
      type: 'article',
    },
  };
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200';

// Tag color map
const TAG_COLORS: Record<string, string> = {
  'Product Review': 'bg-amber-50 text-amber-700 border-amber-200',
  'Buying Guide': 'bg-blue-50 text-blue-700 border-blue-200',
  'How-to': 'bg-green-50 text-green-700 border-green-200',
  'Kiến thức': 'bg-purple-50 text-purple-700 border-purple-200',
  'Trend': 'bg-rose-50 text-rose-700 border-rose-200',
  'So sánh': 'bg-orange-50 text-orange-700 border-orange-200',
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch bài viết + related data song song
  const [post, allPosts, allProducts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
    getAllProducts(),
  ]);

  if (!post) {
    notFound();
  }

  // Related articles: cùng category hoặc keyword trong title, loại bỏ bài hiện tại
  const relatedPosts = allPosts
    .filter(p =>
      p.slug !== slug &&
      (p.category === post.category ||
        post.title.split(' ').some((w: string) => w.length > 4 && p.title.toLowerCase().includes(w.toLowerCase())))
    )
    .slice(0, 3);

  // Related products: lấy top 3 sản phẩm theo điểm
  const relatedProducts: Perfume[] = allProducts.slice(0, 3);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : null;

  const tagColorClass = TAG_COLORS[post.category] || 'bg-gray-100 text-gray-600 border-gray-200';

  return (
    <main className="min-h-screen bg-white pb-20">
      <ScrollProgress />
      <Header />

      {/* HERO IMAGE */}
      <div className="w-full h-[260px] md:h-[420px] relative overflow-hidden bg-gray-100">
        <Image
          src={post.mainImage || PLACEHOLDER_IMAGE}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized={!post.mainImage || post.mainImage.includes('unsplash') || post.mainImage.includes('fragrantica') || post.mainImage.includes('fimgs')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {post.category && (
          <div className="absolute top-5 left-5">
            <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>
              {post.category}
            </span>
          </div>
        )}
      </div>

      {/* MAIN LAYOUT: Article + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── ARTICLE COLUMN ── */}
          <div className="flex-1 min-w-0">
            {/* BREADCRUMBS */}
            <Breadcrumbs
              items={[
                { label: 'Kiến thức', href: '/kien-thuc' },
                { label: post.title },
              ]}
            />

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-4 leading-snug text-gray-900">
              {post.title}
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold mb-6 pb-5 border-b border-[var(--border)]">
              <span className="text-gray-600">{post.author}</span>
              {formattedDate && (
                <>
                  <span>•</span>
                  <span>{formattedDate}</span>
                </>
              )}
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>⏱ {post.readTime}</span>
                </>
              )}
            </div>

            {/* ARTICLE BODY */}
            <article className="prose prose-sm md:prose-base max-w-none
                            prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900
                            prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-4
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-gray-800 prose-strong:font-semibold
                            prose-ul:text-gray-600 prose-ol:text-gray-600
                            prose-li:my-1.5
                            prose-blockquote:border-l-4 prose-blockquote:border-primary
                            prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                            prose-blockquote:text-gray-600 prose-blockquote:not-italic
                            prose-hr:border-[var(--border)] prose-hr:my-8
                            prose-table:text-sm prose-table:border prose-table:border-gray-200
                            prose-th:bg-gray-50 prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-gray-200
                            prose-td:p-3 prose-td:border prose-td:border-gray-100
                            prose-img:rounded-xl prose-img:shadow-md prose-img:my-6
                            prose-code:bg-gray-100 prose-code:px-1.5 prose-code:rounded prose-code:text-sm
                        ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.body}
              </ReactMarkdown>
            </article>

            {/* ARTICLE TAGS */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="flex flex-wrap gap-2">
                {post.category && (
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>
                    {post.category}
                  </span>
                )}
                <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border bg-gray-50 text-gray-500 border-gray-200">
                  Nước hoa
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border bg-gray-50 text-gray-500 border-gray-200">
                  Review
                </span>
              </div>
            </div>

            {/* CTA BAR */}
            <div className="mt-6 p-5 bg-[#F9F9F9] rounded-2xl border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold mb-1">Cần tư vấn chọn nước hoa?</p>
                <p className="text-xs text-gray-500">Chuyên gia Maison de SON sẵn sàng hỗ trợ miễn phí</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link
                  href="/bang-xep-hang"
                  className="text-xs font-bold px-4 py-2.5 border border-[var(--border)] rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Xem BXH
                </Link>
                <a
                  href="https://zalo.me/0961226169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-4 py-2.5 bg-[#0068FF] text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  💬 Tư vấn Zalo
                </a>
              </div>
            </div>

            {/* BACK LINK */}
            <div className="mt-6">
              <Link
                href="/kien-thuc"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-semibold"
              >
                ← Quay lại Kiến thức
              </Link>
            </div>

            {/* RELATED ARTICLES */}
            {relatedPosts.length > 0 && (
              <section className="mt-12 pt-8 border-t border-[var(--border)]">
                <h2 className="text-xl font-serif font-bold mb-6">Bài viết liên quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedPosts.map(p => (
                    <Link
                      key={p.slug}
                      href={`/kien-thuc/${p.slug}`}
                      className="group flex flex-col"
                    >
                      <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                        <Image
                          src={p.mainImage || PLACEHOLDER_IMAGE}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized={!p.mainImage || p.mainImage.includes('unsplash')}
                        />
                      </div>
                      <span className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1">{p.category}</span>
                      <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-1">{p.readTime}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:w-[300px] flex-shrink-0">
            <div className="sticky top-[140px] space-y-6">

              {/* RELATED PRODUCTS */}
              <div className="border border-[var(--border)] rounded-2xl p-5">
                <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-4">
                  🧴 Sản phẩm được đề cập
                </h3>
                <div className="space-y-4">
                  {relatedProducts.map(product => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-14 h-14 bg-[#F7F7F7] rounded-xl overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="56px"
                          className="object-contain p-1 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] font-bold text-primary tracking-wider uppercase">{product.brand}</div>
                        <div className="text-xs font-semibold truncate group-hover:text-primary transition-colors">{product.name}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">★ {product.score.total}/10</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/bang-xep-hang"
                  className="block text-center text-[10px] font-bold text-primary hover:underline mt-4 pt-3 border-t border-[var(--border)]"
                >
                  Xem tất cả sản phẩm →
                </Link>
              </div>

              {/* QUICK TAGS */}
              <div className="border border-[var(--border)] rounded-2xl p-5">
                <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-3">
                  🏷️ Chủ đề
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Nước hoa Nam', 'Nước hoa Nữ', 'Niche', 'Designer', 'Mùa Đông', 'Hẹn hò', 'Công sở'].map(tag => (
                    <Link
                      key={tag}
                      href="/bang-xep-hang"
                      className="text-[10px] font-semibold px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ZALO CTA SIDEBAR */}
              <div className="bg-[#0068FF] text-white rounded-2xl p-5">
                <div className="text-lg mb-2">💬</div>
                <h3 className="text-sm font-bold mb-1">Tư vấn miễn phí</h3>
                <p className="text-xs opacity-80 mb-4">Chuyên gia sẵn sàng giúp bạn chọn đúng mùi hương</p>
                <a
                  href="https://zalo.me/0961226169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs font-bold bg-white text-[#0068FF] px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Chat Zalo ngay
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}