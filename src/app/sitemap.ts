import { MetadataRoute } from 'next';
import { getPublishedProducts, getAllBrands } from '@/lib/dataFetchers';
import { getAllPosts } from '@/lib/dataPosts';
import { getProductUrl } from '@/lib/productUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.maisondeson.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/nuoc-hoa-theo-nhu-cau`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/thuong-hieu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kien-thuc`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/nuoc-hoa-nam-chinh-hang`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/nuoc-hoa-nu-chinh-hang`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/nuoc-hoa-unisex-chinh-hang`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/theo-nhu-cau`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/theo-not-huong`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tac-gia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/gioi-thieu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  // Dynamic product pages — only published, using new URL format
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const products = await getPublishedProducts();
    productPages = products.map((p) => ({
      url: `${baseUrl}${getProductUrl(p)}`,
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

  // Dynamic brand pages — /thuong-hieu/[slug]
  let brandPages: MetadataRoute.Sitemap = [];
  try {
    const brands = await getAllBrands();
    brandPages = brands.map((b: any) => ({
      url: `${baseUrl}/thuong-hieu/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch { /* bỏ qua nếu lỗi */ }

  return [...staticPages, ...productPages, ...articlePages, ...brandPages];
}
