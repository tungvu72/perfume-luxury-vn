import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://maisondeson.com';
  
  // Static pages - always available
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: baseUrl + '/bang-xep-hang',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/thuong-hieu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/kien-thuc',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/gioi-thieu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: baseUrl + '/nam-gioi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/nu-gioi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/unisex',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Note: Dynamic pages (products, brands, articles) will be added
  // when API endpoints are available. For now, return static pages only.
  // 
  // To add dynamic pages, ensure these API endpoints exist:
  // - /api/products (returns array of { id, _updatedAt })
  // - /api/brands (returns array of { slug, _updatedAt })
  // - /api/articles (returns array of { id, _updatedAt })

  return staticPages;
}
