import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { COUPLE_PROFILE } from "@/data/wedding";
import { getWeddingStructuredData } from "@/lib/structured-data";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteTitle = `${COUPLE_PROFILE.bride.firstName} & ${COUPLE_PROFILE.groom.firstName} — Thiệp Mời Cưới`;
const siteDescription = `${COUPLE_PROFILE.weddingDateDisplay} · ${COUPLE_PROFILE.locationSummary}. ${COUPLE_PROFILE.heroQuote}`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: COUPLE_PROFILE.heroImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [COUPLE_PROFILE.heroImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#6E0F1D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getWeddingStructuredData();

  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ivory text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
