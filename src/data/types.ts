/**
 * Maisondeson.com — commercial / data-layer TypeScript types
 * (historical 3-layer commercial model helpers under src/data/)
 */

export interface ProductNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export interface ProductPerformance {
  longevity: number;   // 1-10
  sillage: number;     // 1-10
  projection: number;  // 1-10
}

export interface ProductSEO {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  gender: "men" | "women" | "unisex";
  concentration: string;
  year: number;
  perfumer: string;
  notes: ProductNotes;
  accords: string[];
  performance: ProductPerformance;
  shortDescription: string;
  reviewContent: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  seo: ProductSEO;
}

export interface MerchantOffer {
  url: string;
  enabled: boolean;
  lastVerifiedAt: string; // ISO date string
}

export interface ProductCommercial {
  productSlug: string;
  merchants: {
    fragrancenet?: MerchantOffer;
    jomashop?: MerchantOffer;
  };
  merchantPriority: "fragrancenet" | "jomashop";
  fallbackMerchant: "fragrancenet" | "jomashop";
  badges: string[];
  couponText?: string;
}

export interface FastTrackItem {
  id: string; // Master Key: This ID must be mapped in campaignConfig.featuredVideos
  title: string;
  brand: string;
  productSlug?: string; // If present, UI shows "Read Review" link to this catalog PDP
  image?: string;
  affiliateUrl: string;
  merchant: string;
  status: "catalog" | "fast-track";
  videoSlug?: string; // Supportive only: for operator tracking/notes
}

export interface VideoProductMapping {
  videoSlug: string;
  videoTitle: string;
  videoThumbnail: string;
  youtubeUrl: string;
  date: string; // ISO date
  productSlugs: string[]; // Slugs for items in the main catalog
  fastTrackItemIds?: string[]; // IDs for fast-track items
}

export interface CampaignConfig {
  homepageCarousel: string[];
  featuredVideos: VideoProductMapping[];
  youtubeLandingConfig: {
    headline: string;
    subtext: string;
    featuredList: string[];
  };
  merchantToggle: {
    fragrancenet: boolean;
    jomashop: boolean;
  };
}

export interface OutboundClickLog {
  timestamp: string;
  productSlug: string;
  merchant: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  userAgent: string;
  ipHash: string;
  sessionId?: string;
}
