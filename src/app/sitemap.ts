import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

const BASE = "https://provence-concept.vercel.app"; // ← remplacez par votre domaine final

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/boutique", "/a-propos"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const productRoutes = PRODUCTS.map((p) => ({
    url: `${BASE}/produit/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...productRoutes];
}
