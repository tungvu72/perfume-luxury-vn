import type { ProductCommercial } from "./types";

export const commercialData: Record<string, ProductCommercial> = {
  "montblanc-explorer-platinum": {
    productSlug: "montblanc-explorer-platinum",
    merchants: {
      fragrancenet: {
        url: "https://click.linksynergy.com/deeplink?id=EcFWFI453kI&mid=216&murl=https%3A%2F%2Fwww.fragrancenet.com%2Fcologne%2Fmont-blanc%2Fmont-blanc-explorer-platinum%2Feau-de-parfum%23456826",
        enabled: true,
        lastVerifiedAt: "2026-04-23",
      },
    },
    merchantPriority: "fragrancenet",
    fallbackMerchant: "fragrancenet",
    badges: ["New Arrival"],
  },
  "prada-lhomme": {
    productSlug: "prada-lhomme",
    merchants: {
      fragrancenet: {
        url: "https://click.linksynergy.com/deeplink?id=EcFWFI453kI&mid=216&murl=https%3A%2F%2Fwww.fragrancenet.com%2Fcologne%2Fprada%2Fprada-lhomme%2Fedt%23288429",
        enabled: true,
        lastVerifiedAt: "2026-04-23",
      },
    },
    merchantPriority: "fragrancenet",
    fallbackMerchant: "fragrancenet",
    badges: ["Best Seller"],
  },
};

export function getCommercialData(productSlug: string): ProductCommercial | undefined {
  return commercialData[productSlug];
}

export function getAffiliateUrl(productSlug: string): { url: string; merchant: string } | null {
  const data = commercialData[productSlug];
  if (!data) return null;
  const primary = data.merchants[data.merchantPriority];
  if (primary?.enabled && primary.url) return { url: primary.url, merchant: data.merchantPriority };
  const fallback = data.merchants[data.fallbackMerchant];
  if (fallback?.enabled && fallback.url) return { url: fallback.url, merchant: data.fallbackMerchant };
  return null;
}
