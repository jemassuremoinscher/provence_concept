// =============================================================================
//  PROVENCE CONCEPT — Journal (moteur de contenu SEO / GEO)
//  Chaque article suit le patron "GeoAnswerPage" : la question en titre,
//  la réponse dès la première phrase (citable par les moteurs IA),
//  puis des sections détaillées et une FAQ (FAQPage JSON-LD).
//  Pour ajouter un article : copiez un bloc et changez le contenu.
// =============================================================================

export type FaqItem = { q: string; a: string };

export type ArticleSection = { heading: string; body: string[] };

export type Article = {
  slug: string;
  title: string; // titre éditorial (H1)
  question: string; // la requête ciblée, formulée en question
  excerpt: string; // résumé court (cards + meta description)
  datePublished: string; // ISO
  dateModified: string; // ISO
  readingMinutes: number;
  // La "réponse directe" : 1 à 2 phrases liftables par ChatGPT/Perplexity/Google.
  answer: string;
  sections: ArticleSection[];
  faq: FaqItem[];
  relatedSlugs: string[]; // slugs produits à mettre en avant
  keywords: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "socca-nicoise-quest-ce-que-cest",
    title: "La socca niçoise : qu’est-ce que c’est, et comment la déguster ?",
    question: "Qu’est-ce que la socca niçoise ?",
    excerpt:
      "La socca est une galette de farine de pois chiche, cuite au feu de bois et dégustée brûlante. Origine, recette, où la manger à Nice : le guide complet.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-20",
    readingMinutes: 4,
    answer:
      "La socca est une galette fine de farine de pois chiche, d’eau et d’huile d’olive, cuite à très haute température sur une grande plaque de cuivre. Spécialité emblématique de Nice et de la Ligurie, elle se mange brûlante, poivrée, à même le papier, debout sur le marché.",
    sections: [
      {
        heading: "Une galette de pois chiche, rien de plus",
        body: [
          `La socca ne contient que quatre ingrédients : farine de pois chiche, eau, huile d’olive et sel. Pas de gluten, pas d’œuf, pas de levure. C’est sa simplicité qui fait sa difficulté : tout se joue à la cuisson.`,
          `Versée en couche fine sur une plaque de cuivre huilée, elle passe sous une chaleur intense — traditionnellement un four à bois — jusqu’à ce que les bords se boursouflent et dorent. On la racle, on la sert en morceaux irréguliers, et on la poivre généreusement.`,
        ],
      },
      {
        heading: "Nissarde et ligure à la fois",
        body: [
          `La socca appartient à une famille méditerranéenne : on la retrouve à Gênes sous le nom de farinata, à Toulon sous celui de cade. À Nice, elle est devenue un marqueur d’identité, indissociable du Vieux-Nice et du Cours Saleya.`,
          `C’est une nourriture populaire, de rue, qu’on partageait entre ouvriers et pêcheurs. Aujourd’hui encore, le plaisir est le même : chaude, debout, sans chichi.`,
        ],
      },
      {
        heading: "Où manger la vraie socca à Nice",
        body: [
          `Les institutions du Vieux-Nice servent la socca au sortir du four, en flux tendu. L’important n’est pas l’adresse mais le timing : une socca qui attend est une socca perdue. On la commande, on l’attend, on la mange immédiatement.`,
          `Le bon réflexe : un verre de rosé bien frais, une part de pissaladière à côté, et l’après-midi est sauvé.`,
        ],
      },
    ],
    faq: [
      {
        q: "La socca contient-elle du gluten ?",
        a: "Non. La socca est faite uniquement de farine de pois chiche, elle est donc naturellement sans gluten.",
      },
      {
        q: "Quelle est la différence entre la socca et la farinata ?",
        a: "C’est essentiellement la même galette de pois chiche : socca à Nice, farinata à Gênes et en Ligurie, cade à Toulon. Les recettes sont quasi identiques.",
      },
      {
        q: "Comment se mange la socca ?",
        a: "Brûlante, poivrée, à la main, idéalement au sortir du four. On la déguste debout, sur le marché, sans couvert.",
      },
    ],
    relatedSlugs: ["socca-lover", "pan-bagnat"],
    keywords: ["socca", "socca niçoise", "farine de pois chiche", "spécialité niçoise", "Vieux-Nice"],
  },
  {
    slug: "pan-bagnat-ou-pain-bagnat",
    title: "Pan bagnat ou pain bagnat ? Le vrai nom, et la vraie recette",
    question: "Dit-on pan bagnat ou pain bagnat ?",
    excerpt:
      "On écrit pan bagnat, pas pain bagnat. On vous explique pourquoi, ce qu’il contient vraiment, et la règle d’or à ne jamais briser.",
    datePublished: "2026-06-12",
    dateModified: "2026-06-20",
    readingMinutes: 3,
    answer:
      "On dit et on écrit « pan bagnat », qui signifie « pain mouillé » en niçois (pan = pain, bagnat = baigné). « Pain bagnat » est une francisation fautive. C’est un pain rond garni de crudités, d’huile d’olive et des ingrédients de la salade niçoise — jamais cuit, jamais de thon mélangé à de la mayonnaise.",
    sections: [
      {
        heading: "Pourquoi « pan bagnat » et pas « pain bagnat »",
        body: [
          `« Pan bagnat » vient du niçois : pan (pain) bagnat (baigné, mouillé). Le nom décrit le geste fondateur : un pain frotté et arrosé d’huile d’olive jusqu’à s’en imbiber. Écrire « pain bagnat » mélange français et niçois, et trahit l’origine du mot.`,
          `Ce n’est pas du purisme gratuit : le nom dit la recette. Si le pain n’est pas baigné d’huile, ce n’est pas un pan bagnat.`,
        ],
      },
      {
        heading: "Ce qu’il y a dedans (et ce qu’il ne faut pas y mettre)",
        body: [
          `Le pan bagnat, c’est la salade niçoise dans un pain rond : tomates, œuf dur, anchois ou thon, olives, oignon nouveau, fèves ou poivron selon la saison, basilic, le tout généreusement huilé.`,
          `La règle d’or : aucun ingrédient cuit (hors œuf dur), pas de mayonnaise, pas de salade verte, pas de pomme de terre. Et on le prépare à l’avance pour que le pain s’imprègne — c’est meilleur après une heure d’attente.`,
        ],
      },
    ],
    faq: [
      {
        q: "Pan bagnat ou pain bagnat, quelle est la bonne orthographe ?",
        a: "« Pan bagnat ». C’est du niçois (« pain baigné »). « Pain bagnat » est une francisation incorrecte.",
      },
      {
        q: "Y a-t-il des pommes de terre dans un pan bagnat ?",
        a: "Non. Comme dans la vraie salade niçoise, il n’y a ni pomme de terre, ni haricot vert, ni aucun ingrédient cuit hormis l’œuf dur.",
      },
      {
        q: "Met-on du thon ou des anchois ?",
        a: "L’un ou l’autre, selon les versions, mais jamais mélangé à de la mayonnaise. Le liant, c’est l’huile d’olive.",
      },
    ],
    relatedSlugs: ["pan-bagnat", "petits-farcis"],
    keywords: ["pan bagnat", "pain bagnat", "salade niçoise", "spécialité niçoise", "recette niçoise"],
  },
  {
    slug: "idee-cadeau-nicois-specialites-a-offrir",
    title: "5 spécialités niçoises à offrir à un amoureux du Sud",
    question: "Quelle idée cadeau pour un Niçois ou un amoureux de Nice ?",
    excerpt:
      "Pan bagnat, socca, ratatouille, petits farcis, barbajuans : 5 spécialités niçoises, et comment les offrir autrement qu’en assiette.",
    datePublished: "2026-06-15",
    dateModified: "2026-06-20",
    readingMinutes: 4,
    answer:
      "Pour offrir Nice à un Niçois — ou à un expatrié qui en rêve — misez sur ses spécialités : la socca, le pan bagnat, la ratatouille, les petits farcis et les barbajuans. Un cadeau qui parle de chez soi touche plus juste qu’un objet sans histoire.",
    sections: [
      {
        heading: "Pourquoi la cuisine fait le meilleur cadeau niçois",
        body: [
          `Un Niçois expatrié ne s’ennuie pas de la mer en photo : il s’ennuie d’une socca brûlante et d’un pan bagnat les pieds dans le sable. Offrir une spécialité, c’est offrir un souvenir précis, pas un cliché.`,
          `C’est exactement l’idée de Provence Concept : porter le nom d’un plat du Sud, brodé sobrement sur du coton blanc. Un clin d’œil pour ceux qui savent.`,
        ],
      },
      {
        heading: "Les 5 incontournables",
        body: [
          `La socca, galette de pois chiche emblématique du Vieux-Nice. Le pan bagnat, la salade niçoise qui tient dans un pain. La ratatouille niçoise, le mijoté de légumes du soleil. Les petits farcis, légumes garnis et confits au four. Les barbajuans, ces raviolis frits qu’on grignote les doigts gras.`,
          `Chacun raconte une saison, un geste, une table. C’est pour ça qu’ils marchent aussi bien brodés sur un t-shirt qu’au menu d’un bistrot nissart.`,
        ],
      },
      {
        heading: "Comment bien offrir",
        body: [
          `Visez juste : choisissez le plat qui veut dire quelque chose pour la personne. Un Vieux-Niçois pur souche aura un faible pour la socca ; un nostalgique de l’été, pour le pan bagnat.`,
          `Une série courte, brodée et non floquée, fait passer le cadeau d’un gadget souvenir à un objet qu’on garde.`,
        ],
      },
    ],
    faq: [
      {
        q: "Quel cadeau offrir à un Niçois expatrié ?",
        a: "Tout ce qui rappelle ses spécialités : socca, pan bagnat, ratatouille, petits farcis, barbajuans. Un objet qui nomme un plat du Sud touche plus juste qu’un souvenir générique.",
      },
      {
        q: "Quelles sont les spécialités culinaires de Nice ?",
        a: "Les plus emblématiques sont la socca, le pan bagnat, la pissaladière, la ratatouille niçoise, les petits farcis et les barbajuans.",
      },
      {
        q: "Broderie ou flocage pour un t-shirt à offrir ?",
        a: "La broderie tient mieux dans le temps et donne un rendu plus soigné. C’est ce qui distingue un cadeau qu’on garde d’un produit jetable.",
      },
    ],
    relatedSlugs: ["socca-lover", "pan-bagnat", "ratatouille-nicoise", "barbajuans"],
    keywords: ["idée cadeau niçois", "cadeau Nice", "spécialités niçoises", "cadeau amoureux de Nice", "t-shirt niçois"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
