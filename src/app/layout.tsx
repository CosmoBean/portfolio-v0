import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

import { seo } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(seo.og.url),
  title: {
    default: seo.title,
    template: `%s | ${seo.title}`,
  },
  description: seo.description,
  openGraph: {
    title: seo.og.title,
    description: seo.description,
    url: seo.og.url,
    siteName: seo.title,
    images: [
      {
        url: "/icons/ms-icon-310x310.png",
        width: 310,
        height: 310,
        alt: seo.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/icons/ms-icon-310x310.png"],
    creator: "@cosmobean",
  },
  icons: {
    icon: [
      { url: "/icons/ms-icon-70x70.png", sizes: "70x70" },
      { url: "/icons/ms-icon-144x144.png", sizes: "144x144" },
      { url: "/icons/ms-icon-150x150.png", sizes: "150x150" },
      { url: "/icons/ms-icon-310x310.png", sizes: "310x310" },
    ],
    apple: [
      { url: "/icons/ms-icon-144x144.png" },
    ],
  },
  other: {
    "msapplication-TileImage": "/icons/ms-icon-144x144.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-textPrimary selection:bg-accent selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
