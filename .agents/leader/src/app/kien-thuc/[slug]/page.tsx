import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

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
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const title = content.split('\n')[0].replace(/^#\s*/, '');
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      <div className="mb-6">
        <a href="/kien-thuc" className="text-blue-600 hover:underline text-sm">← Quay lại Kiến thức</a>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{title}</h1>
      <div className="prose prose-lg max-w-none">
        <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border">{content}</pre>
      </div>
    </article>
  );
}