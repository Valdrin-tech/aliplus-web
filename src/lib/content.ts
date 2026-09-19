export const site = {
  name: "Aliplus",
  region: "Kosova",
  legalName: "Aliplus Kosova",
  tagline: "Nutrition vivante pour ruminants",
  phone: "04 70 31 04 55",
  email: "contact@france-aliplus.fr",
  address: {
    line1: "53 route de Lenax",
    city: "03130 Neuilly-en-Donjon",
    country: "France",
  },
  hours: "8h00–12h30 · 14h00–18h30 — sur rendez-vous",
} as const;

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Aliplus", href: "/products/aliplus" },
    { label: "Contact", href: "/contact" },
  ],
  support: {
    label: "Usage Guide",
    href: "/usage-guide",
  },
} as const;

export const stats = [
  { value: "14", suffix: "", label: "composants naturels synergiques" },
  { value: "2013", suffix: "", label: "année de lancement" },
  { value: "1000+", suffix: "", label: "éleveurs utilisateurs" },
  { value: "France", suffix: "", label: "fabrication & R&D" },
] as const;

export const animalCategories = [
  {
    id: "bovins",
    title: "Bovins lait & viande",
    description:
      "Vaches laitières, allaitantes, veaux, génisses, taurillons et taureaux — performances, santé ruménale et rentabilité alimentaire.",
    image:
      "https://images.unsplash.com/photo-1546445317-29f4545e9d97?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "ovins-caprins",
    title: "Ovins & caprins",
    description:
      "Compléments adaptés aux brebis, moutons et chèvres, calibrés sur les phases critiques de l’élevage.",
    image:
      "https://images.unsplash.com/photo-1484557985045-edf7e93fa8be?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "mineraux",
    title: "Compléments minéraux",
    description:
      "Gamme Alimaya : minéraux haute performance, pierres à lécher et accompagnement prépartum.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2400&auto=format&fit=crop",
  },
] as const;

export const productLines = [
  {
    slug: "aliplus",
    name: "Aliplus",
    category: "Nutritionnelle",
    excerpt:
      "Bio-dynamiseur à mélanger aux céréales de l’exploitation pour produire un aliment haut de gamme à la ferme.",
    highlights: ["14 composants", "Circuit court", "Autonomie protéique"],
  },
  {
    slug: "alimaya",
    name: "Alimaya",
    category: "Minérale",
    excerpt:
      "Programmes minéraux et pierres à lécher pour sécuriser les apports aux moments clés du cycle d’élevage.",
    highlights: ["Prépartum", "Haute performance", "Conseil éleveur"],
  },
  {
    slug: "aliplantes",
    name: "Aliplantes",
    category: "Plantes",
    excerpt:
      "Programme végétal complémentaire pour démarrage, transition et bien-être digestif des jeunes animaux.",
    highlights: ["Extraits végétaux", "Démarrage veaux", "Synergie ration"],
  },
] as const;

export const conceptPillars = [
  {
    title: "Efficacité économique & écologique",
    points: [
      "Réduction des correcteurs azotés et des aliments importés",
      "Coût aliment maîtrisé grâce aux céréales locales",
      "Aliment produit à la ferme en circuit court",
    ],
  },
  {
    title: "Qualité & performance",
    points: [
      "Aliment sécurisé, valeur nutritionnelle renforcée",
      "Production laitière et croissance viande optimisées",
      "GMQ, rendement carcasse et taux améliorés",
    ],
  },
  {
    title: "Santé & bien-être",
    points: [
      "Prévention de l’acidose et meilleur confort ruminal",
      "Litière plus saine, moins d’ammoniaque en bâtiment",
      "Animaux plus calmes, moins de charges sanitaires",
    ],
  },
] as const;

export const formulaComponents = [
  "Plantes & extraits végétaux",
  "Matières azotées valorisées",
  "Argiles & composés minéraux",
  "Oligo-éléments ciblés",
  "Tanins & composés bioactifs",
] as const;

export const testimonials = [
  {
    quote:
      "Pour nos Prim’Holstein, une ration simple avec 4 kg de céréales aliplusées — 34 L en moyenne avec des taux remarquables. On le voit sur la santé et sur la paie de lait.",
    author: "Lilian",
    role: "Éleveur laitier",
  },
  {
    quote:
      "Viande de qualité pour Paris — retours excellents. On utilise Aliplantes démarrage : on ne sait plus ce que c’est que de soigner un veau.",
    author: "Pierre",
    role: "Éleveur allaitant",
  },
  {
    quote:
      "Tous les animaux en ont. Un concept qui simplifie la vie et qui fonctionne — on est convaincus et on veut accélérer.",
    author: "Thibaud",
    role: "Éleveur laitier",
  },
] as const;

export const faqItems = [
  {
    q: "Le produit convient-il à tous les ruminants ?",
    a: "Oui — bovins, ovins et caprins, en lait comme en viande. La formulation s’adapte à l’espèce et au stade physiologique via le conseil ration.",
  },
  {
    q: "Comment se passe la transition vers Aliplus ?",
    a: "Progressivement sur quelques semaines. Les animaux s’adaptent sans rupture brutale lorsque la ration est ajustée avec un conseiller.",
  },
  {
    q: "Quels effets sur le lait et l’urée ?",
    a: "Les éleveurs observent une meilleure qualité de lait, des protéines stabilisées et des taux d’urée mieux maîtrisés lorsque la ration est équilibrée.",
  },
  {
    q: "En quoi Aliplus diffère-t-il des aliments classiques ?",
    a: "Aliplus valorise vos céréales sur place, limite les pertes de nutriments et vise une efficacité alimentaire supérieure — pas un aliment tout-en-un importé.",
  },
  {
    q: "Existe-t-il une ferme de démonstration ?",
    a: "Oui — ferme pilote à Neuilly-en-Donjon. Visites et projections sur rendez-vous avec l’équipe France Aliplus.",
  },
  {
    q: "Depuis quand Aliplus existe-t-il ?",
    a: "Commercialisé depuis 2013, conçu par un éleveur avec des biologistes, fabriqué en France.",
  },
] as const;

export const newsItems = [
  {
    title: "France Aliplus au SPACE 2026 — Rennes",
    date: "9 sept. 2026",
    excerpt: "Salon mondial de l’élevage — venez échanger ration, transition et retours terrain.",
  },
  {
    title: "Foire Sainte-Croix de Lessay 2026",
    date: "9 sept. 2026",
    excerpt: "Rencontrez l’équipe en Manche pour une projection sur votre exploitation.",
  },
  {
    title: "Foire de Libramont 2026",
    date: "10 juil. 2026",
    excerpt: "Du 24 au 27 juillet — démonstrations et conseils nutrition.",
  },
] as const;

export type AnimalType =
  | "vache-laitiere"
  | "vache-viande"
  | "vache-allaitante"
  | "veau"
  | "genisse"
  | "taurillon"
  | "taureau"
  | "chevre"
  | "mouton";

export const animalTypes: { value: AnimalType; label: string; factor: number }[] = [
  { value: "vache-laitiere", label: "Dairy cow", factor: 1 },
  { value: "vache-viande", label: "Beef cow", factor: 0.85 },
  { value: "vache-allaitante", label: "Suckler cow", factor: 0.9 },
  { value: "veau", label: "Calf", factor: 0.15 },
  { value: "genisse", label: "Heifer", factor: 0.55 },
  { value: "taurillon", label: "Young bull", factor: 0.7 },
  { value: "taureau", label: "Bull", factor: 0.95 },
  { value: "chevre", label: "Goat", factor: 0.08 },
  { value: "mouton", label: "Sheep", factor: 0.06 },
];

/** Illustrative kg Aliplus / animal / day (not contractual — for lead-gen UX). */
export function estimateAliplusKg(
  animal: AnimalType,
  headcount: number,
): { dailyKg: number; monthlyKg: number; note: string } {
  const baseDailyPerCow = 0.35;
  const factor = animalTypes.find((a) => a.value === animal)?.factor ?? 1;
  const dailyKg = Math.round(headcount * baseDailyPerCow * factor * 10) / 10;
  const monthlyKg = Math.round(dailyKg * 30);
  return {
    dailyKg,
    monthlyKg,
    note:
      "Indicative estimate to start a conversation with an advisor. Final ration is confirmed after reviewing your farm context.",
  };
}
