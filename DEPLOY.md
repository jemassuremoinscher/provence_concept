# Déployer Provence Concept

Le projet est déjà initialisé en repo Git avec un premier commit. Deux routes au choix.

---

## Route A — Vercel CLI (la plus rapide, sans GitHub)

Depuis le dossier `provence-concept`, dans un terminal :

```bash
npm i -g vercel      # une seule fois
vercel               # suivre les questions : Set up and deploy → oui
```

Vercel crée le projet, build et déploie. À la fin il te donne l'URL.
Pour la prod : `vercel --prod`.

---

## Route B — GitHub → Vercel (si tu veux le repo + déploiements auto)

1. Crée un repo vide sur github.com (ex. `provence-concept`).
2. Depuis le dossier, relie-le et pousse :

```bash
git remote add origin https://github.com/<ton-compte>/provence-concept.git
git branch -M main
git push -u origin main
```

3. Sur vercel.com : **Add New → Project → Import** ce repo → **Deploy**.
   (Next.js détecté automatiquement, aucune variable d'environnement à régler.)

Ensuite, chaque `git push` redéploie tout seul.

---

## Après le premier déploiement

1. Note l'URL Vercel.
2. Remplace `https://provence-concept.vercel.app` par cette URL dans :
   `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`.
3. Commit + push (ou `vercel --prod`).

---

## Rappels

- **Prix** : `src/data/products.ts`, remplace `price: null` par le montant. Le paiement reste
  désactivé tant qu'un prix n'est pas saisi.
- **Photos** : déjà en place pour les 7 t-shirts (`public/products/`).
