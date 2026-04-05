import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'fimgs.net' },
      { protocol: 'https', hostname: 'www.sephora.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'www.dior.com' },
      { protocol: 'https', hostname: 'www.michael84.co.uk' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  async redirects() {
    return [
      // ── Bot block rules (Prevent aggressive scrapers from hitting limits) ──
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(.*)(AhrefsBot|SemrushBot|DotBot|MJ12bot|PetalBot|Baiduspider|Bytespider|YandexBot|bingbot|Amazonbot|ClaudeBot|GPTBot)(.*)',
          },
        ],
        destination: 'https://en.wikipedia.org/wiki/HTTP_403',
        permanent: false,
      },

      // ── /bang-xep-hang → /nuoc-hoa-theo-nhu-cau (page replacement) ──
      { source: '/bang-xep-hang', destination: '/nuoc-hoa-theo-nhu-cau', permanent: true },

      // ── Indexed URL redirects (from GSC) ──
      // baccarat-rouge-540 is the only indexed product — redirect to new URL format
      { source: '/baccarat-rouge-540', destination: '/nuoc-hoa-unisex-maison-francis-kurkdjian-baccarat-rouge-540', permanent: true },
      { source: '/san-pham/baccarat-rouge-540', destination: '/nuoc-hoa-unisex-maison-francis-kurkdjian-baccarat-rouge-540', permanent: true },

      // ── Legacy route patterns ──
      // /san-pham/[id] → product pages now use /nuoc-hoa-* format, catch remaining old links
      { source: '/product/:slug', destination: '/:slug', permanent: true },

      // Bài viết cũ: /kien-thuc/[slug] → /[slug]
      { source: '/kien-thuc/:slug', destination: '/:slug', permanent: true },

      // ── Old slug renames ──
      { source: '/bleu-de-chanel-edp', destination: '/nuoc-hoa-nam-chanel-bleu-chanel-edp', permanent: true },
      { source: '/san-pham/bleu-de-chanel-edp', destination: '/nuoc-hoa-nam-chanel-bleu-chanel-edp', permanent: true },
      { source: '/bleu-chanel-edp', destination: '/nuoc-hoa-nam-chanel-bleu-chanel-edp', permanent: true },
      { source: '/armani-stronger-with-you', destination: '/nuoc-hoa-nam-armani-armani-stronger-with-you-intensely', permanent: true },
      { source: '/san-pham/armani-stronger-with-you', destination: '/nuoc-hoa-nam-armani-armani-stronger-with-you-intensely', permanent: true },
      { source: '/armani-stronger-with-you-intensely', destination: '/nuoc-hoa-nam-armani-armani-stronger-with-you-intensely', permanent: true },
      { source: '/mfk-baccarat-rouge-540', destination: '/nuoc-hoa-unisex-maison-francis-kurkdjian-baccarat-rouge-540', permanent: true },
      { source: '/san-pham/mfk-baccarat-rouge-540', destination: '/nuoc-hoa-unisex-maison-francis-kurkdjian-baccarat-rouge-540', permanent: true },
      // Old product URLs for the 5 published products
      { source: '/sauvage-elixir', destination: '/nuoc-hoa-nam-dior-sauvage-elixir', permanent: true },
      { source: '/san-pham/sauvage-elixir', destination: '/nuoc-hoa-nam-dior-sauvage-elixir', permanent: true },
      { source: '/lattafa-khamrah', destination: '/nuoc-hoa-unisex-lattafa-lattafa-khamrah', permanent: true },
      { source: '/san-pham/lattafa-khamrah', destination: '/nuoc-hoa-unisex-lattafa-lattafa-khamrah', permanent: true },
      { source: '/versace-eros-edp', destination: '/nuoc-hoa-nam-versace-versace-eros-edp', permanent: true },
      { source: '/san-pham/versace-eros-edp', destination: '/nuoc-hoa-nam-versace-versace-eros-edp', permanent: true },
    ];
  },
};

export default nextConfig;
