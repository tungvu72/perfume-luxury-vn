import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/theo-not-huong',
          '/theo-nhu-cau',
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
    sitemap: 'https://www.maisondeson.com/sitemap.xml',
  };
}
