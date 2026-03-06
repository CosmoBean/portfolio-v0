import type { Metadata } from "next";
import { seo } from "@/lib/data";

const defaultImage = "/icons/apple-touch-icon.png";

export function buildMetadata({
  description,
  path = "/",
  title,
}: {
  description: string;
  path?: string;
  title: string;
}): Metadata {
  const url = new URL(path, seo.og.url).toString();

  return {
    alternates: {
      canonical: path,
    },
    description,
    openGraph: {
      description,
      images: [defaultImage],
      title,
      type: "website",
      url,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [defaultImage],
      title,
    },
  };
}
