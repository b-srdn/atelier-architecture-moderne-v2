import type { MetadataRoute } from "next";
import { PROJETS, SITE } from "@/lib/donnees";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/projets`, priority: 0.9 },
    ...PROJETS.map((projet) => ({
      url: `${SITE.url}/projets/${projet.slug}`,
      priority: 0.7,
    })),
    { url: `${SITE.url}/contact`, priority: 0.8 },
    { url: `${SITE.url}/mentions-legales`, priority: 0.2 },
  ];
}
