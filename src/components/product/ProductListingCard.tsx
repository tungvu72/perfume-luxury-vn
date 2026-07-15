import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Perfume } from "@/types";
import { getProductUrl } from "@/lib/productUrl";
import { getCanonicalBrandSlug } from "@/lib/brandCanonical";

/**
 * Canonical product listing card — shared by category pages and brand pages.
 * Visual system: nhucau-card (same as /nuoc-hoa-nam-chinh-hang).
 * No numeric price (no merchant feed). Identity fields from one Perfume record.
 */
export default function ProductListingCard({
  product,
  sizes = "(max-width: 768px) 30vw, 220px",
}: {
  product: Perfume;
  sizes?: string;
}) {
  const href = getProductUrl(product);
  const brandSlug = getCanonicalBrandSlug(product);
  const imageSrc =
    product.image && product.image.trim()
      ? product.image
      : "/images/products/placeholder-bottle.svg";
  const hasRealImage = !!(product.image && product.image.trim());
  const year = (product as Perfume & { year?: number }).year;
  const concentration =
    product.subName &&
    !product.subName.includes("?") &&
    !product.subName.includes("\uFFFD")
      ? product.subName
      : null;

  return (
    <Link
      href={href}
      className="nhucau-card"
      data-product-card-system="canonical-listing"
      data-product-id={product.id}
      data-brand-slug={brandSlug}
      data-product-image={hasRealImage ? product.image : "placeholder"}
    >
      <div className="nhucau-card-img">
        <div className="nhucau-card-bottle-stage">
          {hasRealImage ? (
            <Image
              src={imageSrc}
              alt={`${product.brand} ${product.name}`}
              fill
              sizes={sizes}
              className="nhucau-card-bottle-image"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center px-3 text-center text-[11px] font-semibold text-[#8a7a68]"
              data-product-image-placeholder="true"
            >
              {product.brand}
              <br />
              {product.name}
            </div>
          )}
        </div>
      </div>

      <div className="nhucau-card-info">
        {concentration ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9b8a79] mb-0.5">
            {concentration}
          </p>
        ) : null}
        <h3 className="nhucau-card-name" title={product.name}>
          {product.name}
        </h3>
        <p className="nhucau-card-brand">{product.brand}</p>
        <div className="nhucau-card-meta">
          <span className="nhucau-card-year">{year || "—"}</span>
          <span className="nhucau-card-score">
            <Star size={12} fill="#0D7377" stroke="#0D7377" />
            {product.score.total}
          </span>
        </div>
        <span className="mt-1 text-[11px] font-semibold text-[var(--color-primary,#0D7377)]">
          Xem review
        </span>
      </div>
    </Link>
  );
}
