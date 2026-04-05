import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot', 'MJ12bot', 'PetalBot', 'Baiduspider', 'Bytespider', 'YandexBot', 'Amazonbot', 'ClaudeBot', 'GPTBot'],
        disallow: ['/']
      },
      {
        userAgent: '*',
        allow: [
          '/',
          '/theo-not-huong',
          '/theo-nhu-cau',
          '/thuong-hieu/',
          '/nuoc-hoa-theo-nhu-cau',
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
