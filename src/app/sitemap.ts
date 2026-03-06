import type { MetadataRoute } from "next";
import { projectCatalog } from "@/lib/project-catalog";
import { seo } from "@/lib/data";
import { domainSummaries } from "@/lib/domains";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.og.url;
  const staticRoutes = ["", "/about", "/contact", "/domains", "/projects"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...domainSummaries.map((domain) => ({
      url: `${baseUrl}/domains/${domain.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projectCatalog.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
