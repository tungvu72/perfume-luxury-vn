import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export const dynamicParams = false;

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'buying-guides');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md') && file.length > 3)
    .map(file => ({ slug: file.replace('.md', '') }));
  
  return files.filter(p => p.slug && p.slug.length > 0);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), 'content', 'buying-guides');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return { title: 'Không tìm thấy | Maison de SON' };
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const title = content.match(/^#\s+(.+)/m)?.[1] || slug;
  
  return {
    title: `${title} | Maison de SON`,
    description: 'Kiến thức nước hoa từ chuyên gia Maison de SON',
  };
}

function parseFrontmatter(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  const parts = content.split('---');
  if (parts.length < 3) {
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^\*\*(.+?):\*\*\s*(.+)/);
      if (match) result[match[1].trim()] = match[2].trim();
    }
    return result;
  }
  const fm = parts[1];
  for (const line of fm.split('\n')) {
    const m = line.match(/^([^:]+):\s*(.+)/);
    if (m) result[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return result;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug || slug === 'undefined' || slug.length === 0) {
    notFound();
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'buying-guides');
  const filePath = path.join(contentDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const raw = fs.readFileSync(filePath, 'utf-8');
  const fm = parseFrontmatter(raw);
  const parts = raw.split('---');
  const body = parts.length >= 3 ? parts.slice(2).join('---') : raw;
  
  const title = fm['title'] || fm['Title'] || raw.match(/^#\s+(.+)/m)?.[1] || slug;
  const featuredImage = fm['Featured Image'] || fm['featuredImage'] || fm['image'] || null;
  const author = fm['author'] || fm['Tác giả'] || 'Maison de SON';
  const readTime = fm['readTime'] || '5 phút đọc';
  const category = fm['category'] || 'Kiến thức';
  
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Featured Image */}
      {featuredImage && (
        <div className="relative w-full h-[320px] md:h-[480px] bg-gray-100">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-5 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-primary">Trang chủ</Link>
          <span>/</span>
          <Link href="/kien-thuc" className="hover:text-primary">Kiến thức</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{title}</span>
        </nav>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            {category}
          </span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 border-y border-gray-100 py-4 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            M
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{author}</p>
            <p className="text-xs text-gray-400">Maison de SON Editorial Team</p>
          </div>
        </div>

        {/* Content with ReactMarkdown */}
        <div className="prose prose-gray max-w-none
          prose-headings:font-serif prose-headings:text-gray-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-gray-700 prose-li:mb-1
          prose-strong:text-gray-900
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-md
          prose-table:text-sm prose-th:bg-gray-50 prose-th:font-semibold
          prose-blockquote:border-primary prose-blockquote:text-gray-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {body}
          </ReactMarkdown>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-sm text-gray-500 mb-3">Bạn cần tư vấn thêm?</p>
          <Link
            href="/kien-thuc"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            ← Xem thêm bài viết
          </Link>
        </div>
      </article>
    </main>
  );
}
