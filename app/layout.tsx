import type { Metadata, Viewport } from "next";
import {
  Be_Vietnam_Pro,
  Carattere,
  Lora,
  Philosopher,
  Pinyon_Script,
} from "next/font/google";
import { COUPLE_PROFILE } from "@/data/wedding";
import { getWeddingStructuredData } from "@/lib/structured-data";
import "@/styles/globals.css";

const carattere = Carattere({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-vn",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-vn",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-gate-script",
  display: "swap",
});

const philosopher = Philosopher({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  variable: "--font-couple-serif",
  display: "swap",
});

const siteTitle = `${COUPLE_PROFILE.groom.fullName} & ${COUPLE_PROFILE.bride.fullName} — Thiệp Mời Cưới`;
const siteDescription = `${COUPLE_PROFILE.weddingDateDisplay}. ${COUPLE_PROFILE.heroQuote}`;

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
  themeColor: "#7a0808",
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
      className={`${carattere.variable} ${lora.variable} ${beVietnamPro.variable} ${pinyonScript.variable} ${philosopher.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-[#990000] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
