# Provence Concept — Boutique

Storefront e-commerce pour la marque **Provence Concept** : des t-shirts blancs brodés aux noms
des spécialités niçoises et provençales (barbajuans, caviar d'aubergine, pan bagnat, petits farcis,
ratatouille niçoise, socca lover, tomates à la provençale).

Construit dans l'esprit de `store.google.com`, avec le langage visuel **Material 3 Expressive** et
l'identité réelle de la marque (bleu `#3C8DCC` + blanc, accent terre cuite).

Stack : **Next.js 14 (App Router) · TypeScript · Tailwind · SSG**. Polices auto-hébergées,
pages produits pré-rendues en HTML unique (bon pour le SEO).

---

## État actuel

- **7 t-shirts en ligne**, avec leurs photos réelles déjà intégrées (`public/products/`).
- Sweats et polos affichés en « bientôt » (catégories teasées, sans produit pour l'instant).
- **Prix non encore fixés** : tout affiche « Prix à venir ». Le paiement est désactivé tant que
  les prix ne sont pas saisis (voir plus bas).

---

## 1. Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

---

## 2. Fixer les prix (la seule chose qui reste à faire pour vendre)

**Un seul fichier : `src/data/products.ts`.** Pour chaque produit, remplacez `price: null` par le
prix en euros, par exemple :

```ts
price: 35,   // au lieu de price: null
```

Tant que c'est `null`, le site affiche « Prix à venir » et masque le paiement. Dès qu'un prix est
saisi, il s'affiche partout automatiquement.

## 3. Ajouter / changer une photo

Les photos vivent dans `public/products/`. Dans `products.ts`, le champ `images` liste les fichiers :

```ts
images: ["/products/barbajuans-1.jpg"],            // 1 photo
images: ["/products/ratatouille-nicoise-1.jpg",
         "/products/ratatouille-nicoise-2.jpg"],   // 2 photos → galerie auto
```

La 1re image est la principale ; les suivantes deviennent des miniatures cliquables sur la fiche.
Pour un nouveau produit, déposez la photo dans `public/products/` et ajoutez le chemin ici.

## 4. Ajouter un nouveau produit

Copiez un bloc produit dans `products.ts` et changez `id`, `slug`, `name`, `tagline`,
`description`, `images`. Rien d'autre à toucher : la fiche, la grille, le sitemap et le SEO se
génèrent tout seuls.

---

## 5. Avant la mise en ligne — l'URL du site

Cherchez `https://provence-concept.vercel.app` et remplacez par le domaine final dans :
`src/app/layout.tsx` (constante `SITE_URL`), `src/app/sitemap.ts`, `src/app/robots.ts`.
(Utilisé pour le SEO, le sitemap et le JSON-LD.)

## 6. Déployer sur Vercel

1. Repo GitHub → push de ce dossier.
2. Vercel : **Add New → Project → Import** le repo. Framework détecté (Next.js), aucune variable
   d'environnement requise. **Deploy.**

---

## 7. Paiement (à brancher quand les prix sont fixés)

Le panier fonctionne (ajout, quantités, persistance locale). Le checkout est volontairement
désactivé (« Paiement bientôt disponible »). Pour encaisser réellement : brancher Stripe Checkout
ou Shopify une fois les prix en place. Ajout ciblé sur le panier, le reste du site est prêt.

---

## Structure

```
src/
  app/              Pages (accueil, /boutique, /produit/[slug], /a-propos) + sitemap/robots
  components/       AppBar, Footer, Hero, cartes, galerie produit, panier, sélecteurs…
  data/products.ts  ← LE fichier à éditer (prix, photos, produits)
  fonts/            Polices auto-hébergées
public/
  products/         Photos produits (déjà remplies pour les 7 t-shirts)
  logo-*, picto-*   Logos et favicons
```
