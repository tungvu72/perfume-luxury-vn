import Header from "@/components/Header";
import { Metadata } from "next";
import { getAllPosts } from "@/sanity/lib/posts";
import Footer from "@/components/Footer";
import KnowledgeHero from "@/components/KnowledgeHero";
import KnowledgeChips from "@/components/KnowledgeChips";
import FeaturedArticles from "@/components/FeaturedArticles";
import StarterPath from "@/components/StarterPath";
import AllArticlesGrid from "@/components/AllArticlesGrid";
import MaisonMethodBlock from "@/components/MaisonMethodBlock";
import KnowledgeCTA from "@/components/KnowledgeCTA";

export const metadata: Metadata = {
  title: "Kiến Thức Nước Hoa - Review & Hướng Dẫn | Maison de SON",
  description:
    "Cẩm nang từ Maison de SON: review nước hoa, hướng dẫn chọn mùi, phân biệt thật giả, top picks theo ngân sách.",
  alternates: {
    canonical: "https://www.maisondeson.com/kien-thuc",
  },
  openGraph: {
    title: "Kiến Thức Nước Hoa | Maison de SON",
    description: "Review và hướng dẫn chọn nước hoa chuyên sâu từ Maison de SON",
  },
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts: any[] = await getAllPosts();

  const featured = posts[0] ?? null;
  const secondary = posts.slice(1, 3);
  const starterPath = posts.slice(0, Math.min(posts.length, 4));

  // Slugs của bài đã featured — để AllArticlesGrid loại trùng
  const featuredSlugs = [featured, ...secondary]
    .filter(Boolean)
    .map((p: any) => p.fullSlug);

  return (
    <main className="min-h-screen bg-white pb-20">
      <Header />
      <KnowledgeHero totalPosts={posts.length} />
      <KnowledgeChips />
      <FeaturedArticles featured={featured} secondary={secondary} />
      <StarterPath posts={starterPath} />
      <AllArticlesGrid posts={posts} excludeSlugs={featuredSlugs} />
      <MaisonMethodBlock />
      <KnowledgeCTA />
      <Footer />
    </main>
  );
}

