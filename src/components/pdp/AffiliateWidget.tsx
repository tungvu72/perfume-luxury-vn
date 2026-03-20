"use client";

import { ShoppingCart, ExternalLink, Store } from "lucide-react";
import Image from "next/image";

interface ShopeeOffer {
  shopName: string;
  productTitle: string;
  price: string;
  url: string;
  image?: string;
}

interface AffiliateWidgetProps {
  productName: string;
  shopeeOffers?: ShopeeOffer[];
}

/* Shopee logo SVG inline (orange badge) */
function ShopeeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} width="80" height="28" viewBox="0 0 120 38" fill="none">
      <rect width="120" height="38" rx="6" fill="#EE4D2D"/>
      <text x="60" y="25" textAnchor="middle" fill="white" fontWeight="800" fontSize="18" fontFamily="system-ui, sans-serif">
        Shopee
      </text>
    </svg>
  );
}

export default function AffiliateWidget({ productName, shopeeOffers }: AffiliateWidgetProps) {
  // Placeholder khi chưa có offer
  if (!shopeeOffers || shopeeOffers.length === 0) {
    return (
      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <Store size={16} className="text-[var(--color-text-muted)]" />
            <span className="text-sm font-semibold text-[var(--color-text)]">Mua ở đâu</span>
          </div>
          <ShopeeLogo />
        </div>

        {/* Placeholder */}
        <div className="p-5">
          <p className="text-sm text-[var(--color-text-muted)]">
            Đang cập nhật shop uy tín bán {productName} trên Shopee...
          </p>
          <a
            href={`https://shopee.vn/search?keyword=${encodeURIComponent(productName)}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#EE4D2D] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#d9411f]"
          >
            Tìm trên Shopee
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      {/* Header - kiểu eBay */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <Store size={16} className="text-[var(--color-text-muted)]" />
          <span className="text-sm font-semibold text-[var(--color-text)]">Mua ở đâu</span>
        </div>
        <ShopeeLogo />
      </div>

      {/* Listings */}
      <div className="divide-y divide-[var(--color-border)]">
        {shopeeOffers.map((offer, i) => (
          <a
            key={i}
            href={offer.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--color-surface-raised)] group"
          >
            {/* Product image */}
            <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-[var(--color-surface-raised)] border border-[var(--color-border)]">
              {offer.image ? (
                <Image src={offer.image} alt={offer.productTitle} fill sizes="56px" className="object-contain p-1" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-[var(--color-text-muted)]">
                  <ShoppingCart size={16} />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--color-text)] leading-snug line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                {offer.productTitle}
              </p>
              <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                {offer.shopName}
              </p>
            </div>

            {/* Price */}
            <div className="flex-shrink-0 text-right">
              <span className="text-base font-bold text-[#EE4D2D]">{offer.price}</span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="px-5 pb-4 pt-2">
        <a
          href={`https://shopee.vn/search?keyword=${encodeURIComponent(productName)}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#EE4D2D] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#d9411f]"
        >
          Xem giá trên Shopee
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
