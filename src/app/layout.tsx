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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION_CODE = process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || "YOUR_GSC_VERIFICATION_CODE";

export const metadata: Metadata = {
  title: "Maison de SON | Danh gia nuoc hoa chuyen sau #1 Viet Nam",
  description: "Kham pha the gioi mui huong voi danh gia chuyen sau tu chuyen gia.",
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C1C" },
  ],
  verification: {
    google: GSC_VERIFICATION_CODE,
  },
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
  if (typeof window === "undefined") return null;
  if (!GA_ID) return null;
  const gtagScript = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '" + GA_ID + "');";
  return (
    <>
      <script async src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID} />
      <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
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
        {GSC_VERIFICATION_CODE && GSC_VERIFICATION_CODE !== "YOUR_GSC_VERIFICATION_CODE" && (
          <meta name="google-site-verification" content={GSC_VERIFICATION_CODE} />
        )}
      </head>
      <body className={playfair.variable + " " + inter.variable + " font-sans antialiased text-[#1a1a1a]"} suppressHydrationWarning>
        <CompareProvider>
          {children}
          <Footer />
          <FloatingSupport />
        </CompareProvider>
      </body>
    </html>
  );
}