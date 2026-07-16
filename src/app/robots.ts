import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Google & Bing: crawl allowed (including /so-sanh so noindex meta can be seen) ──
      // Indexing of /so-sanh is controlled by page robots metadata (noindex,follow), not robots.txt alone.
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

      // ── Default: other crawlers ──
      // Allow /so-sanh crawl so well-behaved bots can honor noindex meta (policy B).
      // Do not rely on robots.txt alone for deindexing.
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://www.maisondeson.com/sitemap.xml',
  };
}
