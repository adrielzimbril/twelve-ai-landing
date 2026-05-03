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
  title: "Twelve AI | AI Image Generation for Production Visual Systems",
  description:
    "Day 4/30 of the AI-Generated Landing Page Challenge. Twelve AI is a conceptual AI image generation workspace that turns campaign prompts into coherent brand-safe visual systems for creative studios.",
  keywords: [
    "Twelve AI",
    "AI image generation",
    "AI visual system",
    "AI campaign imagery",
    "campaign imagery",
    "brand-safe visuals",
    "creative studio",
    "image generation tool",
    "Next.js",
    "React",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Twelve AI | AI Image Generation for Production Visual Systems",
    description:
      "A conceptual AI image generation landing page for Day 4/30 of the AI-Generated Landing Page Challenge.",
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
    title: "Twelve AI | AI Image Generation for Production Visual Systems",
    description:
      "A conceptual AI image generation landing page for Day 4/30 of the AI-Generated Landing Page Challenge.",
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
