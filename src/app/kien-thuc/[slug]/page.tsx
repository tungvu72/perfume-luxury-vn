import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollProgress from '@/components/ScrollProgress';
import ArticleShare from '@/components/ArticleShare';
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
  if (!post) return { title: 'Không tìm thấy bài viết | Maison de SON' };

  return {
    title: `${post.title} | Maison de SON`,
    description: post.excerpt || `Đọc bài viết ${post.title} tại Maison de SON — kiến thức nước hoa chuyên sâu.`,
    authors: [{ name: post.author || 'Maison de SON' }],
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.mainImage ? [{ url: post.mainImage, width: 1200, height: 630 }] : [],
      type: 'article',
      publishedTime: post.publishedAt || undefined,
      authors: [post.author || 'Maison de SON'],
    },
  };
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200';
const SITE_URL = 'https://www.maisondeson.com';

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

  // Fetch song song
  const [post, allPosts, allProducts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
    getAllProducts(),
  ]);

  if (!post) notFound();

  const articleUrl = `${SITE_URL}/kien-thuc/${slug}`;

  // Related articles: cùng category hoặc keyword, loại bỏ bài hiện tại
  const relatedPosts = allPosts
    .filter(p =>
      p.slug !== slug &&
      (p.category === post.category ||
        post.title.split(' ').some((w: string) => w.length > 4 && p.title.toLowerCase().includes(w.toLowerCase())))
    )
    .slice(0, 3);

  // Related products: top 3 theo điểm
  const relatedProducts: Perfume[] = allProducts.slice(0, 3);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const tagColorClass = TAG_COLORS[post.category] || 'bg-gray-100 text-gray-600 border-gray-200';

  // ─── JSON-LD Article Schema ───────────────────────────────────────────────
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    image: post.mainImage || PLACEHOLDER_IMAGE,
    url: articleUrl,
    datePublished: post.publishedAt || new Date().toISOString(),
    dateModified: post.publishedAt || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author || 'Maison de SON',
      url: `${SITE_URL}/tac-gia/maison-editorial`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maison de SON',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    articleSection: post.category || 'Kiến thức',
    inLanguage: 'vi-VN',
  };

  return (
    <>
      {/* Article JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        {/* MAIN LAYOUT */}
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ── ARTICLE COLUMN ── */}
            <div className="flex-1 min-w-0">
              <Breadcrumbs items={[
                { label: 'Kiến thức', href: '/kien-thuc' },
                { label: post.title },
              ]} />

              <h1 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-4 leading-snug text-gray-900">
                {post.title}
              </h1>

              {/* META */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold mb-6 pb-5 border-b border-[var(--border)]">
                <Link href="/tac-gia/maison-editorial" className="text-gray-600 hover:text-primary transition-colors">
                  {post.author || 'Maison de SON'}
                </Link>
                {formattedDate && <><span>•</span><span>{formattedDate}</span></>}
                {post.readTime && <><span>•</span><span>⏱ {post.readTime}</span></>}
                {/* Freshness badge nếu bài mới trong 7 ngày */}
                {post.publishedAt && (Date.now() - new Date(post.publishedAt).getTime()) < 7 * 24 * 60 * 60 * 1000 && (
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider">🟢 MỚI</span>
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
                                prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:my-1.5
                                prose-blockquote:border-l-4 prose-blockquote:border-primary
                                prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4
                                prose-blockquote:rounded-r-lg prose-blockquote:text-gray-600 prose-blockquote:not-italic
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

              {/* TAGS */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-2">
                  {post.category && (
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${tagColorClass}`}>
                      {post.category}
                    </span>
                  )}
                  {['Nước hoa', 'Review', 'Maison de SON'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border bg-gray-50 text-gray-500 border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SHARE BUTTONS */}
              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <ArticleShare title={post.title} />
              </div>

              {/* AUTHOR BOX */}
              <div className="mt-6 p-5 bg-[#FAFAFA] rounded-2xl border border-[var(--border)] flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Maison de SON"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Link href="/tac-gia/maison-editorial" className="text-sm font-bold hover:text-primary transition-colors">
                    {post.author || 'Maison de SON Editorial'}
                  </Link>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    Đội ngũ biên tập Maison de SON — review thực tế, không sponsored, verify số liệu ≥ 2 nguồn.
                  </p>
                  <Link href="/tac-gia/maison-editorial" className="text-[10px] font-bold text-primary mt-1 inline-block hover:underline">
                    Xem tất cả bài viết →
                  </Link>
                </div>
              </div>

              {/* FEEDBACK / COMMENT SECTION */}
              <section className="mt-8 pt-6 border-t border-[var(--border)]">
                <h2 className="text-lg font-serif font-bold mb-2">Bạn có câu hỏi về bài này?</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Góc feedback — nếu bạn có câu hỏi, góp ý, hoặc trải nghiệm khác với bài review, hãy liên hệ với tao qua Zalo.
                  Tao đọc và phản hồi mọi tin nhắn.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://zalo.me/0961226169`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0068FF] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
                  >
                    💬 Hỏi qua Zalo
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#1877F2] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
                  >
                    📢 Thảo luận trên Facebook
                  </a>
                </div>
              </section>

              {/* CTA BAR */}
              <div className="mt-8">
                <Link href="/kien-thuc" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-semibold">
                  ← Quay lại Kiến thức
                </Link>
              </div>

              {/* RELATED ARTICLES */}
              {relatedPosts.length > 0 && (
                <section className="mt-12 pt-8 border-t border-[var(--border)]">
                  <h2 className="text-xl font-serif font-bold mb-6">Bài viết liên quan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {relatedPosts.map(p => (
                      <Link key={p.slug} href={`/kien-thuc/${p.slug}`} className="group flex flex-col">
                        <div className="aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                          <Image
                            src={p.mainImage || PLACEHOLDER_IMAGE}
                            alt={p.title}
                            fill
                            sizes="(max-width:768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized={!p.mainImage || p.mainImage.includes('unsplash')}
                          />
                        </div>
                        <span className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1">{p.category}</span>
                        <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
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
                  <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-4">🧴 Sản phẩm nổi bật</h3>
                  <div className="space-y-4">
                    {relatedProducts.map(product => (
                      <Link key={product.id} href={`/product/${product.id}`} className="flex items-center gap-3 group">
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
                  <Link href="/bang-xep-hang" className="block text-center text-[10px] font-bold text-primary hover:underline mt-4 pt-3 border-t border-[var(--border)]">
                    Xem tất cả sản phẩm →
                  </Link>
                </div>

                {/* QUICK TAGS / BROWSE */}
                <div className="border border-[var(--border)] rounded-2xl p-5">
                  <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-3">🏷️ Chủ đề khác</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Nước hoa Nam', 'Nước hoa Nữ', 'Niche', 'Designer', 'Mùa Hè', 'Mùa Đông', 'Hẹn hò', 'Công sở'].map(tag => (
                      <Link key={tag} href="/kien-thuc" className="text-[10px] font-semibold px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CONTENT REPURPOSING — Zalo Channel CTA */}
                <div className="border border-[var(--border)] rounded-2xl p-5 bg-gradient-to-br from-[#0068FF]/5 to-white">
                  <h3 className="text-xs font-bold tracking-[2px] uppercase text-gray-400 mb-2">📲 Nhận bản tóm tắt</h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Mỗi bài viết được tóm tắt thành bản ngắn gọn gửi qua Zalo.
                    Theo dõi để không bỏ lỡ.
                  </p>
                  <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer"
                    className="block text-center text-xs font-bold bg-[#0068FF] text-white px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                    💬 Theo dõi Zalo
                  </a>
                </div>

                {/* ZALO CONSULT */}
                <div className="bg-[#0068FF] text-white rounded-2xl p-5">
                  <div className="text-lg mb-2">🎯</div>
                  <h3 className="text-sm font-bold mb-1">Tư vấn chọn nước hoa</h3>
                  <p className="text-xs opacity-80 mb-4">Kể cho chuyên gia nghe về gu của bạn — sẽ có gợi ý phù hợp ngay</p>
                  <a href="https://zalo.me/0961226169" target="_blank" rel="noopener noreferrer"
                    className="block text-center text-xs font-bold bg-white text-[#0068FF] px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                    Chat ngay
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}