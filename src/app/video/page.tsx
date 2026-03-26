import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Unboxing & Review Nước Hoa | Maison de SON",
  description:
    "Xem video unboxing, chiết và review nước hoa chính hãng từ Maison de SON. Trải nghiệm thực tế trước khi mua.",
  alternates: {
    canonical: "https://www.maisondeson.com/video",
  },
  openGraph: {
    title: "Video Nước Hoa | Maison de SON",
    description: "Unboxing, chiết và review nước hoa chính hãng — xem trước khi mua.",
  },
};

type VideoItem = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  product?: string;
  productSlug?: string;
  tags: string[];
  date: string;
  type: "short" | "video";
};

const VIDEOS: VideoItem[] = [
  {
    id: "ombre-leather-unbox",
    youtubeId: "i1huUSFTpM0",
    title: "Unbox & Chiết Tom Ford Ombré Leather EDP",
    description: "Mở hộp và chiết Tom Ford Ombré Leather Eau de Parfum — chai da thuộc sang nhất Tom Ford. Cận cảnh chai full, hộp và chiết 10ml.",
    product: "Tom Ford Ombré Leather",
    productSlug: "/nuoc-hoa-unisex-tom-ford-ombre-leather",
    tags: ["Unboxing", "Tom Ford", "Chiết"],
    date: "2026-03-27",
    type: "short",
  },
];

function VideoCard({ video, featured = false }: { video: VideoItem; featured?: boolean }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
  const embedSrc = video.type === "short"
    ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`
    : `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`;

  if (featured) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0">
          {/* Video embed */}
          <div className="relative aspect-[9/16] sm:aspect-video lg:aspect-auto lg:min-h-[400px] bg-black">
            <iframe
              src={embedSrc}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
          {/* Info */}
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-serif font-bold text-[var(--color-text)] sm:text-2xl lg:text-3xl leading-tight">
              {video.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {video.description}
            </p>
            {video.productSlug && (
              <Link
                href={video.productSlug}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Xem review {video.product} →
              </Link>
            )}
            <div className="mt-4 text-xs text-[var(--color-text-muted)]">
              {new Date(video.date).toLocaleDateString("vi-VN")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
      <div className="relative aspect-[9/16] sm:aspect-video bg-black overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform group-hover:scale-110">
            <Play size={24} className="text-[var(--color-primary)] ml-1" fill="currentColor" />
          </div>
        </div>
        {video.type === "short" && (
          <span className="absolute top-3 left-3 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Short
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {video.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-bg-muted)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--color-text)]">
          {video.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
          {video.description}
        </p>
        {video.productSlug && (
          <Link
            href={video.productSlug}
            className="mt-2 inline-block text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            Xem review →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function VideoPage() {
  const featured = VIDEOS[0];
  const otherVideos = VIDEOS.slice(1);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] pb-20">
      <Header />

      {/* ═══════ HERO ═══════ */}
      <section className="bg-[#0D0D0E] text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 text-center sm:py-14">
          <h1 className="text-3xl font-serif sm:text-4xl md:text-5xl">
            Video Nước Hoa
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Unboxing, chiết và review — xem thực tế trước khi chọn mùi.
          </p>
          <a
            href="https://www.youtube.com/@maisondeson"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe @maisondeson
          </a>
        </div>
      </section>

      {/* ═══════ FEATURED VIDEO ═══════ */}
      <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
        {featured && <VideoCard video={featured} featured />}
      </section>

      {/* ═══════ VIDEO GRID ═══════ */}
      {otherVideos.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-4 pb-10">
          <h2 className="mb-6 text-lg font-serif font-bold text-[var(--color-text)] sm:text-xl">
            Tất cả video
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      )}

      {/* ═══════ EMPTY STATE (for now) ═══════ */}
      {VIDEOS.length <= 1 && (
        <section className="mx-auto max-w-[1200px] px-4 pb-10 text-center">
          <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-10">
            <p className="text-sm text-[var(--color-text-muted)]">
              Thêm video mới đang được cập nhật —{" "}
              <a
                href="https://www.youtube.com/@maisondeson"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-primary)] hover:underline"
              >
                Subscribe YouTube
              </a>{" "}
              để không bỏ lỡ.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
