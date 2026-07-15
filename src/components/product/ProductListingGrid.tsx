import type { Perfume } from "@/types";
import ProductListingCard from "@/components/product/ProductListingCard";
import "@/app/nuoc-hoa-theo-nhu-cau/nhucau.css";

/**
 * Canonical product listing grid — shared category + brand pages.
 */
export default function ProductListingGrid({
  products,
  className = "nhucau-grid",
}: {
  products: Perfume[];
  className?: string;
}) {
  return (
    <div className={className} data-product-grid-system="canonical-listing">
      {products.map((product) => (
        <ProductListingCard key={product.id} product={product} />
      ))}
    </div>
  );
}
