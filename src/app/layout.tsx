import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSupport from "@/components/FloatingSupport";
import { CompareProvider } from "@/components/CompareSystem";
import { Suspense } from "react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maison de SON | Đánh giá nước hoa chuyên sâu #1 Việt Nam",
  description: "Khám phá thế giới mùi hương với đánh giá chuyên sâu từ chuyên gia. Nốt hương, điểm số, giá tốt - tất cả tại Maison de SON.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-180x180.png", sizes: "180x180", type: "image/png" }],
  },
};

function GoogleAnalyticsWrapper() {
  if (typeof window === 'undefined') return null;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <Suspense fallback={null}>
          <GoogleAnalyticsWrapper />
        </Suspense>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased text-[#1a1a1a]`} suppressHydrationWarning>
        <CompareProvider>
          {children}
          <Footer />
          <FloatingSupport />
        </CompareProvider>
      </body>
    </html>
  );
}
