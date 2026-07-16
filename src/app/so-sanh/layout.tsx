import type { Metadata } from "next";

/**
 * /so-sanh is a personal interactive comparison utility (client-side selection).
 * Policy B: allow crawl so Google can see robots meta noindex; do not index.
 * No verified merchant price feed — never expose basePrice as a live purchase price.
 */
export const metadata: Metadata = {
  title: "So sánh nước hoa",
  description:
    "Công cụ so sánh nước hoa theo mùi, độ lưu và độ tỏa. Trang tiện ích cá nhân — không phải bảng giá mua bán.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  // Prefer no self-indexable canonical for interactive utility query states
  alternates: {
    canonical: "https://www.maisondeson.com/so-sanh",
  },
};

export default function SoSanhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
