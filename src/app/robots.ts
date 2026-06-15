import type { MetadataRoute } from "next";

const BASE = "https://provence-concept.vercel.app"; // ← remplacez par votre domaine final

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
