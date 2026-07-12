import { notFound } from "next/navigation";

/**
 * Legacy nested brand-detail path: /thuong-hieu/[slug]
 *
 * Known brands: permanent redirect to /[brandSlug] is defined in next.config.ts
 * (HTTP 308 at the edge, before this route runs).
 *
 * Unknown nested slugs must return a real HTTP 404 (not soft-404 200).
 * dynamicParams=false + empty static params → framework 404 for paths that
 * are neither redirected nor prebuilt.
 */

export const dynamicParams = false;

export function generateStaticParams() {
    // No nested brand pages are served. Known brands never reach this file
    // (next.config redirects). Empty list + dynamicParams=false ⇒ hard 404.
    return [];
}

export default async function LegacyNestedBrandFallback({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    await params;
    notFound();
}
