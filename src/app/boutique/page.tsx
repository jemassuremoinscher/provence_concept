import { Suspense } from "react";
import type { Metadata } from "next";
import { Catalogue } from "@/components/catalogue";

export const metadata: Metadata = {
  title: "Boutique",
  description: "T-shirts, sweatshirts et bientôt polos — toute la collection Provence Concept.",
};

export default function BoutiquePage({ searchParams }: { searchParams: { cat?: string } }) {
  return (
    <Suspense>
      <Catalogue initialCat={searchParams.cat} />
    </Suspense>
  );
}
