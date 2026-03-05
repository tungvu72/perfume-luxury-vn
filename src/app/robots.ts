import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/san-pham/',
          '/thuong-hieu/',
          '/bang-xep-hang',
          '/kien-thuc/',
          '/gioi-thieu',
          '/nam-gioi',
          '/nu-gioi',
          '/unisex',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/so-sanh',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://maisondeson.com/sitemap.xml',
  };
}
