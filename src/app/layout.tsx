import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Hanken_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twelve-ai-landing.adrielzimbril.com"),
  title: "Twelve AI | Image Generation for Production Studios",
  description:
    "Day 4 of the 1 landing page per day challenge. Twelve AI is a conceptual image generation workspace for brand-safe campaign visuals, product imagery, and editorial art direction.",
  keywords: [
    "Twelve AI",
    "AI image generation",
    "AI art direction",
    "campaign imagery",
    "creative studio",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Twelve AI | Image Generation for Production Studios",
    description:
      "A minimal, high-end landing page for a conceptual AI image generation tool.",
    url: "https://twelve-ai-landing.adrielzimbril.com",
    siteName: "Twelve AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Twelve AI landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twelve AI | Image Generation for Production Studios",
    description:
      "A conceptual AI image generation landing page for Day 4 of the daily landing page challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} ${mono.variable}`}>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
