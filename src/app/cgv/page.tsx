import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "CGV de Provence Concept : commande, prix, paiement, livraison, rétractation et garanties.",
  alternates: { canonical: "/cgv" },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalDoc title="Conditions générales de vente" updated="20 juin 2026">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions générales de vente (CGV) régissent les ventes de produits proposés
        sur le Site par <strong>MAMMOUTH PATRIMOINE</strong> à toute personne y effectuant un achat
        (« le Client »). Toute commande implique l’acceptation sans réserve des présentes CGV.
      </p>

      <h2>2. Produits</h2>
      <p>
        Les produits sont décrits et présentés avec la plus grande exactitude possible. Les photographies
        et visuels ont une valeur d’illustration ; de légères variations (teinte, broderie) n’engagent
        pas la responsabilité de l’éditeur.
      </p>

      <h2>3. Prix</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises (TTC), hors frais de livraison précisés
        avant validation de la commande. L’éditeur se réserve le droit de modifier ses prix à tout
        moment, les produits étant facturés au tarif en vigueur lors de la commande.
      </p>

      <h2 id="paiement">4. Commande et paiement</h2>
      <p>
        La commande est validée après confirmation du paiement. Le paiement s’effectue par carte
        bancaire via <strong>Stripe</strong>, notre prestataire de paiement sécurisé, qui traite
        les données de paiement de façon chiffrée ; l’éditeur n’a à aucun moment accès à votre
        numéro de carte. La vente est réputée conclue à réception de la confirmation de commande.
      </p>

      <h2 id="livraison">5. Livraison</h2>
      <p>
        Les produits sont expédiés depuis la France à l’adresse indiquée par le Client.
        Délai indicatif : <strong>[X à Y jours ouvrés]</strong>. Frais de livraison :
        <strong> [grille tarifaire / gratuité à partir de … €]</strong>. En cas de retard
        anormal, le Client peut annuler la commande dans les conditions prévues par la loi.
      </p>

      <h2 id="retractation">6. Droit de rétractation</h2>
      <p>
        Conformément aux articles L221-18 et suivants du Code de la consommation, le Client dispose
        d’un délai de <strong>14 jours</strong> à compter de la réception pour exercer son droit de
        rétractation, sans avoir à motiver sa décision. Les produits doivent être retournés neufs,
        non portés et dans leur état d’origine. Les frais de retour sont à la charge du Client, sauf
        mention contraire.
      </p>

      <h2>7. Retours et remboursement</h2>
      <p>
        En cas de rétractation ou de produit non conforme, le remboursement intervient dans un délai
        maximal de 14 jours suivant la réception du retour, par le même moyen de paiement que celui
        utilisé lors de la commande.
      </p>

      <h2>8. Garanties légales</h2>
      <p>
        Tous les produits bénéficient de la garantie légale de conformité (art. L217-3 et suivants du
        Code de la consommation) et de la garantie contre les vices cachés (art. 1641 et suivants du
        Code civil), indépendamment de toute garantie commerciale.
      </p>

      {/*
        ⚠️ IMPORTANT — à lire avant de compléter ce bloc :
        La loi interdit de nommer un médiateur sur le site sans avoir préalablement signé une
        convention avec lui (ou adhéré à une fédération qui en désigne un). Mentionner un nom
        sans convention signée est un manquement, pas un simple oubli — donc PAS de faux nom ici.
        Marche à suivre : aller sur economie.gouv.fr/mediation-conso, filtrer par secteur
        "vente à distance / e-commerce", contacter un médiateur référencé CECMC (ex. CM2C),
        signer la convention, PUIS remplacer le texte ci-dessous par son nom + adresse + URL.
      */}
      <h2>9. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L612-1 et suivants du Code de la consommation, le Client peut
        recourir gratuitement à un médiateur de la consommation en cas de litige non résolu avec
        l’éditeur. Les coordonnées du médiateur de la consommation compétent seront communiquées
        sur cette page dès la désignation effective de celui-ci.{" "}
        <strong>[médiateur en cours de désignation]</strong>. Une plateforme européenne de
        règlement des litiges est également disponible sur{" "}
        <a href="https://ec.europa.eu/consumers/odr" rel="nofollow noopener">ec.europa.eu/consumers/odr</a>.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, les
        tribunaux compétents seront ceux du ressort du siège de l’éditeur, sous réserve des
        dispositions protectrices du consommateur.
      </p>
    </LegalDoc>
  );
}
