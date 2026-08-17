import { Catalogue } from "@/components/catalogue";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique — Provence Concept",
  description:
    "T-shirts brodés aux spécialités niçoises et italiennes. Collections Cuisine et Italiana.",
  alternates: { canonical: "/boutique" },
};

export default function BoutiquePage({
  searchParams,
}: {
  searchParams: { cat?: string; collection?: string };
}) {
  return (
    <Catalogue
      initialCat={searchParams.cat}
      initialCollection={searchParams.collection}
    />
  );
}
