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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : null;

  return (
    <main className="min-h-screen bg-white pb-20">
      <ScrollProgress />
      <Header />

      {/* HERO IMAGE */}
      {post.mainImage && (
        <div className="w-full h-[300px] md:h-[460px] relative overflow-hidden">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            unoptimized={post.mainImage.includes('unsplash') || post.mainImage.includes('fragrantica') || post.mainImage.includes('fimgs')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {post.category && (
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-white text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="max-w-[800px] mx-auto px-5 py-8">
        {/* BREADCRUMBS */}
        <Breadcrumbs
          items={[
            { label: 'Kiến thức', href: '/kien-thuc' },
            { label: post.title },
          ]}
        />

        {/* CATEGORY badge (nếu không có hero image) */}
        {!post.mainImage && post.category && (
          <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
        )}

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-5 leading-snug text-gray-900">
          {post.title}
        </h1>

        {/* META INFO */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold mb-8 pb-6 border-b border-[var(--border)]">
          <span>{post.author}</span>
          {formattedDate && (
            <>
              <span className="text-gray-200">•</span>
              <span>{formattedDate}</span>
            </>
          )}
          {post.readTime && (
            <>
              <span className="text-gray-200">•</span>
              <span>⏱ {post.readTime}</span>
            </>
          )}
        </div>

        {/* ARTICLE BODY */}
        <article className="prose prose-sm md:prose-base max-w-none
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-800 prose-strong:font-semibold
                    prose-ul:text-gray-600 prose-ol:text-gray-600
                    prose-li:my-1
                    prose-blockquote:border-l-primary prose-blockquote:text-gray-500 prose-blockquote:italic
                    prose-hr:border-[var(--border)]
                    prose-table:text-sm
                    prose-th:bg-gray-50 prose-th:font-semibold
                    prose-img:rounded-xl prose-img:shadow-md
                ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.body}
          </ReactMarkdown>
        </article>

        {/* BACK + CTA */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/kien-thuc"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors font-semibold"
          >
            ← Quay lại Kiến thức
          </Link>
          <div className="flex gap-3">
            <Link
              href="/bang-xep-hang"
              className="text-xs font-bold px-4 py-2 border border-[var(--border)] rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Xem bảng xếp hạng
            </Link>
            <a
              href="https://zalo.me/0961226169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 bg-[#0068FF] text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Tư vấn Zalo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}