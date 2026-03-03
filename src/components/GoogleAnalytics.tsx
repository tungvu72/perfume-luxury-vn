"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) return;

    // Load GA4 script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      ((window as any).dataLayer as any).push(arguments);
    }
    (window as any).gtag = gtag;

    gtag("js", new Date());
    gtag("config", gaId, {
      page_path: pathname,
    });
  }, [gaId, pathname]);

  useEffect(() => {
    if (!gaId || !(window as any).gtag) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    (window as any).gtag("event", "page_view", {
      page_path: url,
    });
  }, [gaId, pathname, searchParams]);

  return null;
}



