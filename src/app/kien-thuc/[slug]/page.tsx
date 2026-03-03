import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const dynamicParams = true;

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'buying-guides');
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => ({ slug: file.replace('.md', '') }));
  return files;
}

function extractFrontmatter(content: string) {
  const parts = content.split('---');
  if (parts.length < 3) return { frontmatter: '', body: content };
  const frontmatter = parts[1];
  const body = parts.slice(2).join('---');
  return { frontmatter, body };
}

function extractField(frontmatter: string, field: string): string {
  const regex = new RegExp('\\*\\*' + field + ':\\*\\*\\s*(.+)');
  const match = frontmatter.match(regex);
  return match ? match[1].trim() : '';
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug || typeof slug !== 'string') {
    return notFound();
  }
  const filePath = path.join(process.cwd(), 'content', 'buying-guides', slug + '.md');
  if (!fs.existsSync(filePath)) {
    return notFound();
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = extractFrontmatter(content);
  const title = extractField(frontmatter, 'Meta Description') || content.split('\n')[0].replace(/^#\s*/, '');
  const featuredImage = extractField(frontmatter, 'Featured Image');
  const author = extractField(frontmatter, 'Tác giả');
  const readTime = extractField(frontmatter, 'Thời gian đọc');
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <a href="/kien-thuc" className="text-blue-600 hover:underline mb-4 inline-block">← Quay lại</a>
      {featuredImage && (
        <img src={featuredImage} alt={title} className="w-full h-64 object-cover mb-8 rounded-lg shadow-md" />
      )}
      <h1 className="text-3xl md:text-4xl font-bold my-6 text-gray-900">{title}</h1>
      {(author || readTime) && (
        <div className="text-gray-600 mb-6 text-sm">
          {author && <span>{author}</span>}
          {author && readTime && <span className="mx-2">•</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      )}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {body}
        </ReactMarkdown>
      </div>
    </article>
  );
}