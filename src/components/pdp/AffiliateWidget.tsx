"use client";

import { ShoppingCart, ExternalLink } from "lucide-react";

interface AffiliateLink {
  platform: "shopee" | "tiktok";
  label: string;
  price?: string;
  url: string;
}

interface AffiliateWidgetProps {
  productName: string;
  links?: AffiliateLink[];
}

const PLATFORM_CONFIG = {
  shopee: {
    name: "Shopee",
    color: "#EE4D2D",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  tiktok: {
    name: "TikTok Shop",
    color: "#000000",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
};

export default function AffiliateWidget({ productName, links }: AffiliateWidgetProps) {
  // If no affiliate links, show placeholder
  if (!links || links.length === 0) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
        <div className="flex items-center gap-2 mb-3">
          <ShoppingCart size={16} className="text-[var(--color-text-muted)]" />
          <h3 className="text-sm font-bold text-[var(--color-text)]">Mua ở đâu</h3>
        </div>
        <p className="text-xs text-[var(--color-text-muted)] italic">
          Đang cập nhật link từ các shop uy tín...
        </p>
        <a
          href="https://zalo.me/0961226169"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
        >
          Hỏi giá qua Zalo →
        </a>
      </div>
    );
  }

  // Group by platform
  const grouped = links.reduce<Record<string, AffiliateLink[]>>((acc, link) => {
    if (!acc[link.platform]) acc[link.platform] = [];
    acc[link.platform].push(link);
    return acc;
  }, {});

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart size={16} className="text-[var(--color-primary)]" />
        <h3 className="text-sm font-bold text-[var(--color-text)]">Mua ở đâu</h3>
        <span className="ml-auto text-[10px] text-[var(--color-text-muted)] italic">Sponsored</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {Object.entries(grouped).map(([platform, platformLinks]) => {
          const config = PLATFORM_CONFIG[platform as keyof typeof PLATFORM_CONFIG];
          if (!config) return null;

          return (
            <div key={platform} className={`rounded-[var(--radius-md)] border ${config.border} ${config.bg} p-3`}>
              <div className="text-xs font-bold mb-2" style={{ color: config.color }}>
                {config.name}
              </div>
              <div className="space-y-2">
                {platformLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-[var(--radius-sm)] bg-white p-2 text-xs transition-all hover:shadow-sm"
                  >
                    <span className="text-[var(--color-text-secondary)] truncate">{link.label}</span>
                    <span className="flex items-center gap-1.5 font-bold whitespace-nowrap" style={{ color: config.color }}>
                      {link.price}
                      <ExternalLink size={10} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
