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
      // SP: /san-pham/[id] → /[id]
      {
        source: '/san-pham/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Brand: /thuong-hieu/[slug] → /[slug]
      {
        source: '/thuong-hieu/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Bài viết cũ: /kien-thuc/[slug] → /[slug]
      {
        source: '/kien-thuc/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Tác giả: /tac-gia/[slug] → /[slug]
      {
        source: '/tac-gia/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Product old route
      {
        source: '/product/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Product slug renaming
      { source: '/bleu-de-chanel-edp', destination: '/bleu-chanel-edp', permanent: true },
      { source: '/san-pham/bleu-de-chanel-edp', destination: '/bleu-chanel-edp', permanent: true },
      { source: '/armani-stronger-with-you', destination: '/armani-stronger-with-you-intensely', permanent: true },
      { source: '/san-pham/armani-stronger-with-you', destination: '/armani-stronger-with-you-intensely', permanent: true },
      { source: '/mfk-baccarat-rouge-540', destination: '/baccarat-rouge-540', permanent: true },
      { source: '/san-pham/mfk-baccarat-rouge-540', destination: '/baccarat-rouge-540', permanent: true },
    ];
  },
};

export default nextConfig;
