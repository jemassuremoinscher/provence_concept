import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Provence Concept collecte et protège vos données personnelles (RGPD).",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalDoc title="Politique de confidentialité" updated="20 juin 2026">
      <p>
        La présente politique décrit la manière dont vos données personnelles sont collectées et
        traitées dans le cadre de l’utilisation du Site, conformément au Règlement général sur la
        protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Responsable de traitement</h2>
      <p>
        Le responsable du traitement est <strong>MAMMOUTH PATRIMOINE</strong>, <strong>Villa Diable Rouge, 2 rue d’Angleterre, 06000 Nice</strong>,
        joignable à <strong>contact@provence-concept.fr</strong>.
      </p>

      <h2>Données collectées et finalités</h2>
      <ul>
        <li><strong>Commande</strong> : nom, adresse, e-mail, données de livraison — pour traiter et livrer vos achats.</li>
        <li><strong>Newsletter</strong> : adresse e-mail — pour vous informer des sorties, avec votre consentement.</li>
        <li><strong>Navigation</strong> : données techniques et de mesure d’audience (voir la politique cookies).</li>
      </ul>

      <h2>Bases légales</h2>
      <p>
        Selon les cas : l’exécution du contrat (commande), votre consentement (newsletter, cookies non
        essentiels) et l’intérêt légitime de l’éditeur (sécurité, amélioration du Site).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données de commande sont conservées le temps nécessaire à la relation commerciale et aux
        obligations légales (comptables, fiscales). Les données de newsletter sont conservées jusqu’au
        retrait de votre consentement.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées à l’éditeur et à ses sous-traitants strictement nécessaires
        (hébergeur, prestataire de paiement <strong>Stripe</strong>, transporteur, outil d’e-mailing). Aucune donnée n’est
        vendue à des tiers.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation
        et de portabilité de vos données. Pour les exercer : <strong>contact@provence-concept.fr</strong>.
        Vous pouvez également introduire une réclamation auprès de la CNIL
        (<a href="https://www.cnil.fr" rel="nofollow noopener">cnil.fr</a>).
      </p>
    </LegalDoc>
  );
}
