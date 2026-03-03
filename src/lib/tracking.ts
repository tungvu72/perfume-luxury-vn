/**
 * Affiliate Link Tracking Utility
 * Track clicks on Shopee, TikTok, Lazada links
 */

export interface ClickEvent {
  platform: 'shopee' | 'tiktok' | 'lazada' | 'zalo';
  productId: string;
  timestamp: number;
  userAgent?: string;
  referrer?: string;
}

export function trackClick(platform: ClickEvent['platform'], productId: string) {
  const event: ClickEvent = {
    platform,
    productId,
    timestamp: Date.now(),
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
    referrer: typeof window !== 'undefined' ? document.referrer : undefined,
  };

  // Log to console (later send to GA4)
  console.log('[Affiliate Click]', event);

  // Send to GA4 if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      event_category: 'affiliate',
      event_label: platform,
      product_id: productId,
    });
  }

  // Store locally for later analysis
  try {
    const storageKey = 'maison_son_clicks';
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    existing.push(event);
    localStorage.setItem(storageKey, JSON.stringify(existing.slice(-100))); // Keep last 100
  } catch (e) {
    // Ignore storage errors
  }

  return event;
}

export function getClickHistory(): ClickEvent[] {
  try {
    return JSON.parse(localStorage.getItem('maison_son_clicks') || '[]');
  } catch {
    return [];
  }
}
