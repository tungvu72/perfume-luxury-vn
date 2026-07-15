import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { MapPin, Calendar, User, Sparkles } from "lucide-react";
import type { Perfume } from "@/types";
import { getBrandEditorial } from "@/components/brand/brandContent";
import {
  getCanonicalBrandDisplayName,
  resolveBrandSlug,
} from "@/lib/brandCanonical";
import { getBrandSeoMetadata } from "@/lib/brandSeoMetadata";
import BrandCommercialGuide from "@/components/brand/BrandCommercialGuide";
import ProductListingGrid from "@/components/product/ProductListingGrid";
import { getProductsForCanonicalBrand } from "@/lib/brandMembership";

export type BrandDetailModel = {
  name: string;
  slug: string;
  products: Perfume[];
  productCount: number;
  /** Owner-approved visible H1 when present (BATCH_02+) */
  h1?: string;
};

/** Build brand detail from canonical membership resolver. */
export function buildBrandDetail(brandSlug: string): BrandDetailModel | null {
  const canonical = resolveBrandSlug(brandSlug);
  const products = getProductsForCanonicalBrand(canonical);
  if (products.length === 0) return null;
  const seo = getBrandSeoMetadata(canonical);
  return {
    name: getCanonicalBrandDisplayName(products[0]) || products[0].brand,
    slug: canonical,
    products,
    productCount: products.length,
    h1: seo?.h1,
  };
}

/**
 * Canonical rich brand-detail experience for root URL /[brandSlug].
 * Ported from the former nested /thuong-hieu/[slug] page.
 */
export default function BrandDetailPage({ brand }: { brand: BrandDetailModel }) {
  const content = getBrandEditorial(brand.slug);
  const hasContent = !!content;

  return (
    <main className="min-h-screen bg-white pb-0">
      <Header />

      {/* BRAND HERO */}
                  <section className="relative bg-gradient-to-b from-[#1a1410] to-[#2a2018] text-white py-16 md:py-24">
                      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
                      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                          <Breadcrumbs items={[{ label: 'Thương hiệu', href: '/thuong-hieu' }, { label: brand.name }]} />
                          <div className="mt-8 max-w-3xl">
                              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-4">Hồ sơ thương hiệu</p>
                              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">{brand.h1 || brand.name}</h1>
                              {hasContent && (
                                  <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl">
                                      {content.intro}
                                  </p>
                              )}
                          </div>
                      </div>
                  </section>
      
                  {/* BRAND FACTS CARD */}
                  {hasContent && (
                      <section className="max-w-[1200px] mx-auto px-5 -mt-8 relative z-20 mb-12">
                          <div className="bg-white rounded-2xl border border-[#eadfce] shadow-[0_20px_60px_rgba(27,18,13,0.08)] p-6 md:p-8">
                              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Thông tin nhanh</h2>
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                                  <div className="flex items-start gap-3">
                                      <Calendar size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Thành lập</p>
                                          <p className="text-sm font-semibold mt-0.5">{content.founded !== 'unknown' ? content.founded : '—'}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <User size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Nhà sáng lập</p>
                                          <p className="text-sm font-semibold mt-0.5">{content.founder !== 'unknown' ? content.founder : '—'}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <MapPin size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Xuất xứ</p>
                                          <p className="text-sm font-semibold mt-0.5">{content.country !== 'unknown' ? content.country : '—'}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <Sparkles size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phong cách</p>
                                          <p className="text-sm font-semibold mt-0.5">{content.signatureStyle !== 'unknown' ? content.signatureStyle : '—'}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                          <span className="text-[9px] font-bold text-amber-700">{brand.productCount}</span>
                                      </div>
                                      <div>
                                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Sản phẩm</p>
                                          <p className="text-sm font-semibold mt-0.5">{brand.productCount} chai đang có</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  )}
      
                  <BrandCommercialGuide
                      brandName={brand.name}
                      brandSlug={brand.slug}
                      products={brand.products}
                  />

                  {/* PRODUCT GRID */}
                  <section id="danh-sach-san-pham" className="max-w-[1200px] mx-auto px-5 py-12">
                      <div className="flex items-center justify-between mb-8">
                          <h2 className="text-2xl md:text-3xl font-serif">
                              Review nước hoa {brand.name}
                          </h2>
                          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                              {brand.productCount} sản phẩm
                          </span>
                      </div>
      
                      {/* Shared canonical listing card/grid (same system as /nuoc-hoa-nam) */}
                      <ProductListingGrid products={brand.products} />
                  </section>
      
                  {/* BRAND STORY */}
                  {hasContent && (
                      <section className="bg-[#faf8f6] border-t border-[#eadfce] py-16">
                          <div className="max-w-3xl mx-auto px-5">
                              <h2 className="text-2xl md:text-3xl font-serif mb-6">
                                  Về {brand.name}
                              </h2>
                              <div className="prose prose-sm prose-gray prose-headings:font-serif">
                                  <p className="text-gray-600 leading-relaxed">{content.intro}</p>
                                  {content.positioning !== 'unknown' && (
                                      <p className="text-gray-600 leading-relaxed">
                                          <strong>Định vị:</strong> {content.positioning}
                                      </p>
                                  )}
                              </div>
                          </div>
                      </section>
                  )}
      
                  {/* CTA */}
                  <section className="py-12 border-t border-[#eadfce]">
                      <div className="max-w-3xl mx-auto px-5 text-center">
                          <p className="text-gray-500 text-sm mb-4">
                              Chưa chắc chai nào phù hợp? Nhắn Zalo để được tư vấn theo gu, hoàn cảnh dùng và ngân sách.
                          </p>
                          <a
                              href="https://zalo.me/0961226169"
                              className="inline-flex items-center gap-2 bg-[#1a1410] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-800 transition-colors"
                          >
                              Nhắn Zalo tư vấn
                          </a>
                      </div>
                  </section>
              

      <Footer />
    </main>
  );
}
