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
      // ── Bot blocking moved to middleware.ts (runs at Edge, no quota cost) ──

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

      // ── Duplicate merge redirects (2026-04-11) ──
      { source: '/nuoc-hoa-unisex-maison-francis-kurkdjian-baccarat-rouge-540', destination: '/nuoc-hoa-unisex-maison-francis-kurkdjian-mfk-baccarat-54-edp', permanent: true },
      { source: '/nuoc-hoa-nam-lalique-encre-noire', destination: '/nuoc-hoa-nam-lalique-lalique-encre-noir-edt', permanent: true },
      { source: '/nuoc-hoa-nu-narciso-rodriguez-for-her-edp', destination: '/nuoc-hoa-nu-narciso-rodriguez-narciso-rodriguez-for-her-eau-de-parfum', permanent: true },
      { source: '/nuoc-hoa-nu-giorgio-armani-my-way', destination: '/nuoc-hoa-nu-giorgio-armani-my-way-edp', permanent: true },
      { source: '/nuoc-hoa-nam-ysl-y-edp', destination: '/nuoc-hoa-nam-yves-saint-laurent-ysl-y-eau-de-parfum', permanent: true },
      { source: '/nuoc-hoa-nu-carolina-herrera-good-girl-carolina', destination: '/nuoc-hoa-nu-carolina-herrera-good-girl', permanent: true },

      // ── Duplicate merge redirects round 2 (2026-04-11) ──
      { source: '/nuoc-hoa-nam-creed-aventus', destination: '/nuoc-hoa-nam-creed-creed-aventus', permanent: true },
      { source: '/nuoc-hoa-unisex-tom-ford-black-orchid', destination: '/nuoc-hoa-unisex-tom-ford-tom-ford-black-orchid', permanent: true },
      { source: '/nuoc-hoa-nu-versace-bright-crystal', destination: '/nuoc-hoa-nu-versace-versace-bright-crystal', permanent: true },
      { source: '/nuoc-hoa-nam-versace-eros-flame', destination: '/nuoc-hoa-nam-versace-versace-eros-flame', permanent: true },
      { source: '/nuoc-hoa-nam-moschino-toy-boy', destination: '/nuoc-hoa-nam-moschino-moschino-toy-boy', permanent: true },
      { source: '/nuoc-hoa-unisex-mancera-cedrat-boise', destination: '/nuoc-hoa-unisex-mancera-mancera-cedrat-boise', permanent: true },
      { source: '/nuoc-hoa-unisex-xerjoff-torino21', destination: '/nuoc-hoa-nam-xerjoff-xerjoff-torino', permanent: true },
    ];
  },
};

export default nextConfig;
