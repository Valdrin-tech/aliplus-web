export const productDetails = {
  aliplus: {
    name: "Aliment comp Aliplus",
    category: "Nutrition Aliplus",
    intro:
      "Le cœur du concept : un complément à incorporer aux céréales de l’exploitation pour fabriquer sur place un aliment très haut de gamme.",
    sections: [
      {
        title: "Mode d’emploi",
        body: "Dosage adapté à l’espèce et à la phase de production, mélange homogène, transition progressive sur plusieurs semaines. Stockage stable de la céréale aliplusée.",
      },
      {
        title: "Technique",
        body: "Optimisation PDI, acides aminés et efficacité ruménale. Réduction des correcteurs azotés et meilleure valorisation des matières azotées locales.",
      },
      {
        title: "Cibles",
        body: "Vaches laitières, allaitantes, engraissement, ovins et caprins — avec accompagnement conseiller.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1574323347407-f5b1fe79c5c2?q=80&w=2400&auto=format&fit=crop",
  },
  alimaya: {
    name: "Programmes minéraux Alimaya",
    category: "Minéraux",
    intro:
      "Apports minéraux calibrés pour les performances élevées, le prépartum et la prévention au quotidien — incluant pierres à lécher.",
    sections: [
      {
        title: "Prépartum",
        body: "Sécurisation des besoins aux approches du vêlage et transition alimentaire.",
      },
      {
        title: "Pierres à lécher",
        body: "Qualité constante, adaptées aux différents régimes et contextes sanitaires.",
      },
      {
        title: "Conseil",
        body: "Programmes construits avec les éleveurs conseillers Aliplus selon votre cheptel.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2400&auto=format&fit=crop",
  },
  aliplantes: {
    name: "Programme plantes Aliplantes",
    category: "Plantes",
    intro:
      "Gamme végétale pour accompagner le démarrage, la digestion et le bien-être — en synergie avec la ration Aliplus.",
    sections: [
      {
        title: "Démarrage",
        body: "Soutien des jeunes animaux lors des phases sensibles.",
      },
      {
        title: "Extraits",
        body: "Tanins et composés végétaux sélectionnés pour compléter la nutrition de base.",
      },
      {
        title: "Synergie",
        body: "Intégration dans un plan global lait ou viande, validé avec votre conseiller.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1501004318643-b39e8150f81e?q=80&w=2400&auto=format&fit=crop",
  },
} as const;

export type ProductSlug = keyof typeof productDetails;
