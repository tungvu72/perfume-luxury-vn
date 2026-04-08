import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Whitelist: chỉ Google & Bing được crawl toàn bộ ──
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: ['/'],
      },

      // ── Blacklist: SEO crawlers & AI scrapers tốn bandwidth ──
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
          'PetalBot',
          'Baiduspider',
          'Bytespider',
          'YandexBot',
          'Amazonbot',
          'ClaudeBot',
          'GPTBot',
          'anthropic-ai',
          'CCBot',
          'DataForSeoBot',
          'MajesticSEO',
          'BLEXBot',
          'serpstatbot',
          'SeznamBot',
          'meta-externalagent',
        ],
        disallow: ['/'],
      },

      // ── Default: tất cả crawlers còn lại ──
      {
        userAgent: '*',
        allow: ['/'],
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
