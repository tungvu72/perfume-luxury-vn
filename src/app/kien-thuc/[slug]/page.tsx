import { redirect } from 'next/navigation';
import { getAllPosts } from '@/sanity/lib/posts';

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

// /kien-thuc/[slug] → /[urlSlug] (301 redirect)
export default async function KienThucRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Find the urlSlug for this filename slug
  const posts = await getAllPosts();
  const post = posts.find(p => p.slug === slug || p.urlSlug === slug);
  const target = post ? `/${post.urlSlug}` : `/${slug}`;
  redirect(target);
}