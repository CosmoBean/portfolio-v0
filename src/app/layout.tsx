import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import PageTransition from "@/components/layout/PageTransition";
import GrainOverlay from "@/components/shared/GrainOverlay";
import { seo, socialMediaLinks } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

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
        url: "/icons/apple-touch-icon.png",
        width: 180,
        height: 180,
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
    images: ["/icons/apple-touch-icon.png"],
    creator: "@cosmobean",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png" },
    ],
  },
  manifest: "/icons/manifest.json",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sri Datta Bandreddi",
  alternateName: "Cosmobean",
  description: "AI engineer focused on production systems, applied ML, and biomedical signal intelligence.",
  jobTitle: "AI Engineer & Full Stack Developer",
  sameAs: socialMediaLinks
    .map((link) => link.link)
    .filter((link) => link.startsWith("http")),
  url: seo.og.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${jetbrainsMono.variable} bg-obsidian text-text-primary antialiased selection:bg-accent-amber selection:text-obsidian`}
      >
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <GrainOverlay />
        <Nav />
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="h-24 shrink-0" aria-hidden />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
