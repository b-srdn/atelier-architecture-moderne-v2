import type { MetadataRoute } from "next";
import { SITE } from "@/lib/donnees";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atelier d’Architecture Moderne",
    short_name: "AAM Dijon",
    description: SITE.description,
    start_url: "/",
    display: "browser",
    background_color: "#f0efea",
    theme_color: "#17191d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
