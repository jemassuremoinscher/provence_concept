import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Quels cookies utilise Provence Concept et comment les gérer.",
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalDoc title="Politique de cookies" updated="20 juin 2026">
      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site. Il permet
        d’assurer le bon fonctionnement du Site, de mémoriser vos préférences ou de mesurer l’audience.
      </p>

      <h2>Cookies utilisés</h2>
      <ul>
        <li>
          <strong>Cookies nécessaires</strong> : indispensables au fonctionnement du Site (panier,
          sécurité). Ils ne requièrent pas votre consentement.
        </li>
        <li>
          <strong>Cookies de mesure d’audience</strong> : <strong>[le cas échéant — ex. Vercel Analytics,
          Plausible…]</strong>, pour comprendre la fréquentation et améliorer le Site.
        </li>
        <li>
          <strong>Cookies tiers</strong> : <strong>[le cas échéant — réseaux sociaux, prestataire de
          paiement…]</strong>.
        </li>
      </ul>

      <h2>Votre consentement</h2>
      <p>
        Les cookies non essentiels ne sont déposés qu’après votre accord. Vous pouvez accepter, refuser
        ou modifier vos choix à tout moment via le bandeau de consentement
        <strong> [à intégrer si des cookies non essentiels sont ajoutés]</strong>.
      </p>

      <h2>Gérer les cookies</h2>
      <p>
        Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Le blocage des
        cookies nécessaires peut toutefois dégrader votre expérience sur le Site.
      </p>
    </LegalDoc>
  );
}
