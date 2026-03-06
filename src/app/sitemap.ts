import { MetadataRoute } from 'next';
import { getAllProducts } from '@/sanity/lib/fetchers';
import { getAllPosts } from '@/sanity/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://maisondeson.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/bang-xep-hang`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/thuong-hieu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kien-thuc`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/nam-gioi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/nu-gioi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/unisex`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/gioi-thieu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  // Dynamic product pages — /san-pham/[id]
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const products = await getAllProducts();
    productPages = products.map((p) => ({
      url: `${baseUrl}/san-pham/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));
  } catch { /* bỏ qua nếu lỗi */ }

  // Dynamic article pages — /[slug] (root-level)
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    articlePages = posts
      .filter((p: any) => p.status === 'published' && (p.urlSlug || p.slug))
      .map((p: any) => ({
        url: `${baseUrl}/${p.urlSlug || p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
  } catch { /* bỏ qua nếu lỗi */ }

  return [...staticPages, ...productPages, ...articlePages];
}
