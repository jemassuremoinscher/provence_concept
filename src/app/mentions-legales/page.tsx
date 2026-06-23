import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Provence Concept : éditeur, hébergeur et propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalDoc title="Mentions légales" updated="20 juin 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>provence-concept.vercel.app</strong> (ci-après « le Site ») est édité par :
      </p>
      <ul>
        <li>Raison sociale : <strong>[Raison sociale]</strong></li>
        <li>Forme juridique : <strong>[SASU / SARL / micro-entreprise…]</strong></li>
        <li>Capital social : <strong>[montant] €</strong></li>
        <li>Siège social : <strong>[adresse complète]</strong></li>
        <li>SIREN / SIRET : <strong>[numéro]</strong> — RCS de <strong>[ville]</strong></li>
        <li>N° TVA intracommunautaire : <strong>[FR…]</strong></li>
        <li>Adresse e-mail : <strong>contact@provence-concept.fr</strong></li>
        <li>Directeur de la publication : <strong>[Nom Prénom]</strong></li>
      </ul>

      <h2>Hébergeur</h2>
      <p>
        Le Site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789,
        États-Unis — <a href="https://vercel.com" rel="nofollow noopener">vercel.com</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des éléments du Site (textes, visuels, logo, broderies, mise en page) est protégé
        par le droit de la propriété intellectuelle et reste la propriété exclusive de l’éditeur,
        sauf mention contraire. Toute reproduction ou utilisation sans autorisation écrite préalable
        est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        L’éditeur s’efforce d’assurer l’exactitude des informations diffusées sur le Site, sans
        pouvoir en garantir l’exhaustivité ni l’absence d’erreur. Les liens vers des sites tiers
        n’engagent pas la responsabilité de l’éditeur quant à leur contenu.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative au Site : <strong>contact@provence-concept.fr</strong>.
      </p>
    </LegalDoc>
  );
}
