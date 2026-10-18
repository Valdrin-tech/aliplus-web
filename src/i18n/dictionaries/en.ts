// English copy. The Albanian dictionary (sq.ts) must carry the same keys —
// `Dictionary` is derived from this object, so TypeScript checks it.

export const en = {
  meta: {
    siteName: "Aliplus Kosova",
    defaultTitle: "Aliplus Kosova — Natural nutrition for ruminants",
    description:
      "Aliplus — a farm-ready feed concept for cattle, sheep and goats. Mix with your own cereals for healthier rumens, stronger rations and better farm performance.",
    pages: {
      aliplus: {
        title: "Aliplus",
        description:
          "Aliplus is a farm-ready blend of fourteen natural components, mixed at 22 kg per ton of cereals and matured for 14 days.",
      },
      company: {
        title: "Company",
        description:
          "About Aliplus Kosova — the Aliplus concept in Kosovo. Farm-level nutrition that valorizes local grains for cattle, sheep and goats.",
      },
      usageGuide: {
        title: "Usage Guide",
        description:
          "Prepare Aliplus on the farm — mix at 22 kg per ton of cereals, mature for 14 days, then feed with the equipment you already have.",
      },
      contact: {
        title: "Contact",
        description: "Get in touch with Aliplus Kosova — ration advice, product questions, and on-farm support.",
      },
      products: { title: "Product range" },
      faq: { title: "Frequently asked questions" },
      concept: {
        title: "The Aliplus concept",
        description: "Living nutrition and treated cereals — understand the formula and how it works.",
      },
      testimonials: { title: "Testimonials" },
      product: { title: "Product" },
    },
  },

  // Route labels shown on the page transition.
  routes: {
    "/": "Home",
    "/products": "Products",
    "/products/aliplus": "Aliplus",
    "/products/alimaya": "Alimaya",
    "/products/aliplantes": "Aliplantes",
    "/company": "Company",
    "/usage-guide": "Usage guide",
    "/contact": "Contact",
    "/faq": "FAQ",
    "/concept": "Concept",
    "/testimonials": "Testimonials",
  } as Record<string, string>,

  nav: {
    home: "Home",
    aliplus: "Aliplus",
    company: "Company",
    usageGuide: "Usage Guide",
    contact: "Contact",
    contactUs: "Contact us",
    menu: "Menu",
    close: "Close",
    closeMenu: "Close menu",
    siteNav: "Site",
    language: "Language",
    brandHome: "Aliplus Kosova — Home",
  },

  footer: {
    products: "Products",
    guide: "Guide",
    about: "About",
    faq: "FAQ",
    promptLine1: "If you have any questions",
    promptLine2: "feel free to contact us:",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    legal: "Legal",
    location: "Location",
    openMap: "Open the location in Google Maps",
  },

  common: {
    requestSample: "· Request a sample ·",
    talkToTeam: "· Talk to our team ·",
    seeProduct: "· See the product ·",
    usageGuide: "· Usage guide ·",
    estimate: "Request an estimate",
    pdf: "Request a PDF sheet",
    talkAdvisor: "Talk to an advisor",
    bookVisit: "Book a visit",
    bookAppointment: "Book an appointment",
  },

  home: {
    hero: {
      title: "Aliplus\nFeed Additive",
      tagline: "More from every ration.",
      body: "Feed is your biggest cost — it does not have to be your biggest waste. Mix Aliplus with cereals you already grow to raise protein and energy, support the rumen, and turn every bite into measurable performance.",
      cta: "Usage Guide",
      note: "Most producers start with the guide — mix at 22 kg per ton, mature for 14 days, then feed.",
      imageAlt: "Aliplus feed bag standing in a pasture at sunset",
    },
    difference: {
      title: "The Aliplus\nDifference",
      lead: "Fourteen farm-ready components in one formula, mixed with cereals you already grow. Aliplus is ready for producers who want more from every ration.",
      pillars: [
        {
          title: "Smarter nutrition",
          body: "Fourteen natural components in one formula. Mixed at 22 kg per ton, Aliplus raises protein and energy more evenly than bought-in concentrates.",
        },
        {
          title: "Higher nutrient use",
          body: "Prebiotic and probiotic support for the rumen — steadier uptake, energetic rations, and less acidosis risk.",
        },
        {
          title: "Proven performance",
          body: "Healthier animals, stronger conversion and better margins from grain already grown on the farm.",
        },
      ],
    },
    imageBreak: {
      aria: "Cattle in an open barn",
      alt: "A row of cattle feeding on an Aliplus-treated ration",
    },
    whatIs: {
      title: "What is\nAliplus",
      body: "Feed should work harder than it does. Aliplus is a farm-ready blend of fourteen natural components, mixed at 22 kg per ton of cereals to help animals use the nutrition already in the ration. It supports the rumen, raises protein and energy after 14 days of maturation, and fits the feeding system you already run.",
      productAlt: "Two hands holding a scoop of Aliplus-treated cereal",
      isTitle: "What it is",
      isBody: "A structured blend of urea, plant extracts, oligoelements and clay that improves the nutritional value of farm cereals. Mixed on the farm, matured, then fed.",
      notTitle: "What it is not",
      notBody: "Not a complete feed, not a veterinary medicine, and not a replacement for good husbandry. Use only at the stated rate of 22 kg per ton.",
    },
    how: {
      title: "How it works",
      lead: "Aliplus treats farm cereals so the ration works harder at the rumen — mix, mature, then feed.",
      cta: "Open Usage Guide",
      mediaAlt: "A bull feeding on an Aliplus-treated ration",
      stepsAria: "How it works steps",
      steps: [
        {
          title: "Fourteen natural components",
          body: "Urea, plant extracts, oligoelements and clay in one formula — mixed at 22 kg per ton of cereals you already grow.",
        },
        {
          title: "Rumen-ready maturation",
          body: "Adjust moisture to about 24% and let the mix mature for 14 days so protein and energy values can rise.",
        },
        {
          title: "Steadier nutrient use",
          body: "Prebiotic and probiotic support for rumen flora — energetic rations without the usual acidosis risk.",
        },
        {
          title: "Built for real farms",
          body: "Works in existing mixers and rations for cattle, sheep and goats. No new feeding system required.",
        },
      ],
    },
    fieldProven: {
      title: "Field-Proven.",
      sub: "Across herds, cereals & farms.",
      cta: "View usage guide",
      items: [
        {
          title: "Cattle",
          body: "Cattle rations built on the wheat, barley or maize already on the farm. Mixed at 22 kg per ton and matured for 14 days, Aliplus raises protein and energy from the same grain.",
          facts: ["14 components", "22 kg / ton", "14 days"],
          cta: "Open usage guide",
          imageAlt: "A row of cattle feeding on an Aliplus-treated ration at the trough",
        },
        {
          title: "Sheep & goats",
          body: "One formula across small ruminants — the same rate, the same mixers, no new feeding system. Prebiotic and probiotic support keeps the rumen steady on energetic rations.",
          facts: ["1 formula", "Same 22 kg rate"],
          cta: "See the ration guide",
          imageAlt: "Cattle resting on deep bedding in an open barn",
        },
        {
          title: "Shared outcomes",
          body: "Healthier rumens, stronger rations and better margins from grain already grown on the farm. Our advisors in Kosova help you plan the first mix and fine-tune from there.",
          facts: ["Healthier rumens", "Better margins"],
          cta: "Talk to our team",
          imageAlt: "A bull feeding at the rail on an Aliplus ration",
        },
      ],
    },
    integrate: {
      title: "Effortless to\nintegrate",
      lead: "Aliplus is designed to slip into existing routines without disruption. It does not replace nutrition — it helps animals use more of the cereals already on the farm.",
      points: [
        "Mixes with wheat, barley, maize and other farm cereals",
        "22 kg per ton — no new feeding system required",
        "Stable through mixing, storage and daily feeding",
        "Fits existing rations for cattle, sheep and goats",
        "Advisor support for transition and fine-tuning",
      ],
      linkBefore: "→ Refer to the",
      linkGuide: "Usage Guide",
      linkOr: "or",
      linkConsult: "consult",
      linkAfter: "the Aliplus livestock nutrition team.",
      mediaAlt: "Close-up of Aliplus granules — grey pellets flecked with yellow",
      labelText: "Fourteen natural components · 22 kg per ton",
    },
    formats: {
      title: "Formats & access",
      lead: "Start with a first mix on the cereals you already grow, then move to a full-farm ration. Advisors in Kosova help you plan the transition.",
      cards: [
        {
          title: "Starter mix",
          coverage: "Coverage — first trials",
          meta: "Ideal to begin on one group or one cereal",
          alt: "A pile of Aliplus-treated cereals",
        },
        {
          title: "Full farm",
          coverage: "Coverage — whole herd",
          meta: "Ideal for mid- to large-scale operations",
          alt: "A bull feeding at the rail",
        },
      ],
    },
    cta: {
      title: "Feed is your biggest cost. Aliplus turns it into your biggest advantage.",
      lead: "Already used by farms across the region. Ready for your operation.",
    },
  },

  aliplus: {
    kickerN: "N° 01",
    kicker: "Feed additive · Made in France",
    title: "Aliplus",
    sub: "Fourteen natural components for the cereals you already grow.",
    body: "Same grain. More gain. Mixed at 22 kg per ton and matured for 14 days, Aliplus puts the wheat, barley and maize in your barn on a full shift.",
    strip: {
      rate: "Rate",
      rateValue: "22 kg / ton",
      inside: "Inside",
      insideValue: "14 natural components",
      wait: "Wait",
      waitValue: "14 days",
      herd: "Herd",
      herdValue: "Cattle, sheep & goats",
      scroll: "Scroll",
    },
    introEyebrow: "What Aliplus does",
    introStatement:
      "Your cereals have been underachieving. Aliplus gives the wheat, barley and maize in your barn a serious promotion.",
    introP1:
      "Developed in France by a livestock farmer and some very patient biologists, Aliplus is mixed into the grain you already have. It doesn’t replace anything on the farm — it makes everything in the trough pull its weight.",
    introLead: "What it isn’t:",
    introP2: "a complete feed, a medicine, or magic. It’s simply better use of what’s already there.",
    swipeAria: "The product, step by step",
    slides: [
      {
        tab: "The bag",
        title: "One bag.\nOne ton.",
        body: "Twenty-two kilos of Aliplus treats a full ton of the cereals you already grow. The rate is the product — no more, no less.",
        fact: "22 kg per ton",
        alt: "The Aliplus 22 kg bag standing in a pasture",
      },
      {
        tab: "Inside",
        title: "Fourteen natural\ncomponents.",
        body: "Urea, plant extracts, oligoelements and clay in one structured blend. It lifts protein and energy, and partly breaks down starch and cellulose.",
        fact: "14 components",
        alt: "Close-up of Aliplus granules",
      },
      {
        tab: "On the farm",
        title: "Mix. Then\nwait 14 days.",
        body: "Crush the grain, mix at 22 kg per ton, bring it to about 24% moisture and leave it. Inside the pile, the values quietly go up.",
        fact: "14 days",
        alt: "Two hands holding Aliplus-treated cereal",
      },
      {
        tab: "In the trough",
        title: "One ration for\nthe whole herd.",
        body: "Cattle, sheep and goats — from calves at 30 days to finishing animals. Keep the straw or hay coming; fibre still runs the rumen.",
        fact: "Cattle · sheep · goats",
        alt: "A row of cattle feeding at the trough",
      },
    ],
    formatsEyebrow: "Formats",
    formatsTitle1: "Pick your size.",
    formatsTitle2: "The rate stays 22 kg.",
    formats: [
      {
        name: "22 kg bag",
        role: "One bag, one ton. The first-date size — mix it into a single ton of your own cereals.",
        meta: "Treats 1 ton",
      },
      {
        name: "Pallet · 50 bags",
        role: "Fifty bags, fifty tons. For the regulars — a season of rations on one pallet.",
        meta: "Treats 50 tons",
      },
      {
        name: "Big bag · 1100 kg",
        role: "Fifty tons in one lift. For farms that mean business and mixers that run all day.",
        meta: "Treats 50 tons",
      },
    ],
    ctaTitle: "Your cereals are ready for a promotion.",
    ctaLead: "Start with one bag and one ton. The herd will tell you the rest.",
  },

  company: {
    heroEyebrow: "Company",
    heroAlt: "The Aliplus Kosova building and warehouse in Lipjan",
    heroTitle: "We’re here to rethink what farm cereals can do — and what a feed partner can be.",
    heroBody:
      "From the first mix on your farm to the results in milk and meat, we question the usual feeding playbook. We don’t sell a complete feed — we help animals use more of the cereals you already grow. Because when you work with the rumen instead of against it, you unlock a different kind of growth — in the herd, in the barn, and on the balance sheet.",
    s1: {
      alt: "A row of cattle feeding at the trough on a Kosovo farm",
      title: "We started with the farm",
      p1: "Aliplus was developed by a livestock farmer working alongside biologists. The goal was simple: get more from the cereals already in the barn, without a new feeding system.",
      p2: "Fourteen natural components later, the concept is manufactured in France and used on thousands of farms. Aliplus Kosova brings it home — with a local team, local advisors and the cereals Kosovo farmers already grow.",
    },
    s2: {
      title: "Where the ration meets the rumen",
      p1: "Most feed costs come from what you buy in. We saw a different path: add value to local grains and make high-quality feed on the farm, at a lower cost.",
      p2: "Aliplus is mixed with farm cereals. It raises their nutritional value — amino acids, protein, PDI — and partially hydrolyses the starch and cellulose.",
      p3: "The result is a treated grain that is stable, easy to store and durable — and a farm that moves closer to protein self-sufficiency.",
      alt: "A pile of Aliplus-treated cereals in the store",
    },
    s3: {
      title: "We don’t guess the rate",
      alts: ["Aliplus in production at the Lipjan site", "Finished Aliplus granules", "A young bull resting on the bedding"],
      p1: "We respect the formula — and we don’t improvise with it. Use only 22 kg of Aliplus per ton of cereals, adjust moisture to about 24%, and let the mix mature for 14 days. The rate is the product.",
      p2: "Aliplus is not a complete feed and not a veterinary medicine. It does not replace good husbandry — it helps animals use more of what is already there.",
    },
    s4: {
      title: "Built for real farms",
      specLine1: "Aliplus",
      specLine2: "formula",
      rate: "Rate",
      rateValue: "22 kg / t",
      components: "Components",
      componentsValue: "14 natural",
      maturation: "Maturation",
      maturationValue: "14 days",
      p1: "We work with what farms already have. Your cereals, your mixer, your routines.",
      p2: "Grind or crush the grain, mix at 22 kg per ton, wait 14 days, then feed. No new building, no new equipment, no new feeding system.",
      p3: "That’s how one formula covers cattle, sheep and goats — from calves at 30 days to dairy and finishing animals.",
      p4: "Not because the herd is simple — but because the rumen works the same way across ruminants.",
    },
    s5: {
      alt: "The Aliplus 22 kg bag standing in a pasture",
      stats: [
        { value: "14", label: "Natural components" },
        { value: "22 kg", label: "Per ton of cereals" },
        { value: "14 days", label: "Maturation" },
        { value: "1", label: "Formula for the herd" },
      ],
      title: "Building trust, not hype",
      p: "We know trust isn’t something you sell — it’s something you earn on the farm. That’s why we start with a conversation, not a pallet. The first mix is set to your cereals and your animals, and our advisors stay with you as results come in — adapting the ration and CMV supplements along the way. No inflated promises. Only honest numbers.",
    },
    cta: {
      title: "See the difference for yourself",
      lead: "Start with a first mix on the cereals you already grow. Advisors in Kosova help you plan the transition.",
    },
  },

  guide: {
    eyebrow: "Guide",
    eyebrowTitle: "Feeding ruminants with Aliplus",
    titleLines: ["Your cereals.", "Your mixer.", "One ration for the herd."],
    lead: "Aliplus is a feed concept of fourteen components — urea, plant extracts, oligoelements and clay — created to raise the nutritional value of the cereals on your farm. Mixed at 22 kg per ton of wheat, barley or maize, it lifts the protein and energy of the feed. Simple to apply, easy to adapt, with results you see quickly.",
    facts: [
      { value: "14", unit: "", label: "Natural components" },
      { value: "22", unit: "kg", label: "Per ton of cereals" },
      { value: "24", unit: "%", label: "Moisture at mixing" },
      { value: "14", unit: "days", label: "Maturation before feeding" },
    ],
    sections: {
      journey: { title: "Aliplus on your farm", lead: "Four moments, from the first conversation to results followed over the years." },
      who: {
        title: "For every ruminant, every production",
        lead: "Living nutrition, specially adapted to ruminants. The same base of treated cereals feeds the whole farm, with amounts set for each group.",
      },
      process: { title: "The process", lead: "Prepare, store, build the ration, feed — with the cereals and the equipment you already have." },
      ration: { title: "What goes in the ration", lead: "At the start, Aliplus advisors help you optimise the ration to your production and local resources." },
      formats: { title: "Formats", lead: "Pick your size. The rate stays one 22 kg bag per ton." },
      why: { title: "Why it works", lead: "The fourteen components act together — in the grain, in the ration and in the rumen." },
      results: { title: "Results", lead: "Nutritional values tested by Institut de l’Élevage and INRA, and typical on-farm results." },
      faq: { title: "Quick answers", lead: "" },
    },
    journey: [
      {
        title: "Ration and transition",
        body: "Based on your goals and the cereals on your farm or in your area, Aliplus advisors propose an optimised ration. Together you set the feed transition.",
      },
      {
        title: "Treated cereals",
        body: "Cereals are prepared with Aliplus on your farm, with your own equipment or by an Aliplus Kosova service provider. They store easily.",
      },
      {
        title: "Results on your farm",
        body: "With thousands of users — 600,000 ruminants fed with Aliplus every day — we follow your results together to fine-tune the ration.",
      },
      {
        title: "Long-term support",
        body: "Aliplus advisors follow and advise you continuously, as your production, available cereals, goals and farm results evolve.",
      },
    ],
    herd: [
      "Cattle — calves from 30 days, heifers, dairy and suckler cows, young bulls, finishing",
      "Sheep",
      "Goats and other ruminants",
    ],
    who: [
      {
        title: "With all cereals",
        body: "Wheat, triticale, barley, oats, maize (wet or dry grain, or cobs), rye, spelt, peas, cereal mixes and by-products — any starch or cellulose-based raw material. Very energetic rations without acidosis risk.",
      },
      {
        title: "For milk and for meat",
        body: "Through metabolic optimisation and unrestricted nutrient supply, Aliplus acts on the quality of the products — in milk and in finishing — and on the quantity produced.",
      },
      {
        title: "Plus fibre: straw or hay",
        body: "Fibre beside the treated cereals, or included in the ration, is essential for the good development of the rumen microorganisms.",
      },
    ],
    // **text** marks a bold run.
    process: [
      {
        when: "Day 0",
        title: "Prepare",
        body: "Grind finely or crush the cereals available locally — wheat, barley, oats, maize (wet or dry), triticale, rye, spelt, peas, cereal mixes or by-products. Mix with Aliplus: **one 22 kg bag per ton of ground cereals**. Then adjust the water to reach about **24% moisture** — ready to store.",
        note: "Treat the grain yourself, or Aliplus Kosova connects you with a trusted service provider in your region.",
      },
      {
        when: "Days 1 – 14",
        title: "Store",
        body: "Natural processes develop in the treated grain. To let the mix mature fully it must rest **14 days before feeding**. Prepare months ahead — even a year — and keep it **indoors without plastic cover**. Then take from the pile for every ruminant on the farm.",
        note: "After two years of testing, treated cereals also keep outdoors, uncovered, without loss of quality. A 10-day transition from the previous ration is recommended, not required.",
      },
      {
        when: "Building the ration",
        title: "Build",
        body: "Rations are built from **4 to 15 kg and more** of treated cereals, and may include silages — maize, maize cobs, grass, lucerne. Fibre is managed in the usual way with **straw or hay**. Mineral supplements (CMV) are adapted with advice from Aliplus Kosova.",
        note: "Mix every ingredient until homogeneous, with a feed mixer or your usual equipment. Fibre can be fully or partly mixed in, or given separately.",
      },
      {
        when: "Day 14 onward",
        title: "Feed",
        body: "Distribute with your usual equipment. Depending on ration type, production and distribution, feed **up to once a week** on a dry ration — saving work — or **every day** on a moist ration. The high output reached with Aliplus calls for special attention to minerals.",
        note: "",
      },
    ],
    ration: [
      { name: "Aliplus-treated cereals", amount: "4 – 15 kg +", note: "Wheat, triticale, barley, oats, maize, rye, spelt, peas — ground or crushed." },
      { name: "Silages", amount: "Optional", note: "Maize, maize cobs, grass, lucerne — by local availability." },
      { name: "Fibre — straw or hay", amount: "Essential", note: "Physical support for rumen microbes. Mixed in or on the side." },
      { name: "Mineral supplements (CMV)", amount: "Adapted", note: "Adjusted with Aliplus Kosova as milk and finishing results rise." },
    ],
    formats: [
      { label: "22 kg bag", meta: "Treats 1 ton", note: "One bag per ton of cereals." },
      { label: "Pallet · 50 bags", meta: "Treats 50 tons", note: "A season of rations on one pallet." },
      { label: "Big bag · 1100 kg", meta: "Treats 50 tons", note: "Fifty tons in one lift." },
    ],
    keyPointsTitle: "Four key points",
    pillars: [
      "Turns low-cost local cereals into high-quality feed, without acidosis.",
      "Inspired by ruminant biology, it optimises the rumen and the whole metabolism.",
      "Optimises milk and finishing output, in quantity and in quality.",
      "Optimises the farm economy by lowering costs and raising profit.",
    ],
    objectivesTitle: "Technical objectives",
    objectives: [
      "Prebiotic and probiotic effect",
      "Rumination and salivation",
      "Calmer animals",
      "Higher cereal nutritional values",
      "Metabolism and immunity",
      "More and better production",
    ],
    whyFoot:
      "Partial hydrolysis of starch and cellulose, plus nitrogen from Aliplus, lets animals express their full potential. Removing acidosis risk allows large amounts of treated cereals safely — 3 to 8 kg in milk production, without limit in finishing. The prebiotic and probiotic effect then supports a very strong development of rumen bacteria — the most profitable, ecological and natural feed a ruminant can have.",
    results: {
      inraTitle: "Treated cereals — wheat/barley mix",
      inraSub: "Day 0 versus the average from day 14 to day 120",
      day0: "Day 0",
      day14: "Day 14 – 120",
      inraRows: ["Dry matter (%)", "Crude protein (% DM)", "DE1 (% DM)", "UFV (/kg DM)", "PDIN (g/kg DM)", "PDIE (g/kg DM)"],
      inraFoot:
        "High, perfectly balanced values — UF 1.17, PDIN 117, PDIE 116. Grain that could not be fed alone, especially in large amounts, becomes the ideal feed for every rumen.",
      beefTitle: "Beef cattle, finishing",
      beef: [
        { k: "Average daily gain", v: "2.8 kg" },
        { k: "EUROP grade", v: "+ 1/3 class" },
        { k: "Finishing time", v: "− 30 to 40 days" },
        { k: "Carcass weight", v: "+ 30 kg" },
        { k: "Meat yield", v: "+ 3 %" },
        { k: "Carcass and meat quality", v: "Very good" },
      ],
      dairyTitle: "Dairy cattle",
      dairy: [
        { k: "Milk yield", v: "34 kg" },
        { k: "Protein (TP)", v: "up to 34" },
        { k: "Fat (TB)", v: "up to 41" },
        { k: "Cheese-making ability", v: "Optimised" },
      ],
    },
    care: [
      {
        title: "Health and wellbeing",
        body: "Aliplus respects the natural functioning of the ruminant, bringing very good general condition across all metabolic indicators — and lower extra costs.",
      },
      {
        title: "The farmer’s wellbeing too",
        body: "Less spending, less work and more production at the same time — while seeing the herd in good condition.",
      },
      {
        title: "Life feeds life",
        body: "Living nutrition continues from the grain to the rumen, to the manure — healthier, with far less ammonia — and on to the soil and the plants.",
      },
    ],
    faqs: [
      { q: "What is the mix rate?", a: "One 22 kg bag of Aliplus per ton of ground cereals. The rate is the product — do not concentrate or dilute it." },
      { q: "How long does the mix need to mature?", a: "14 days before the first feeding, so the natural processes in the grain can complete." },
      { q: "Which animals can eat it?", a: "All ruminants — cattle from calves at 30 days through dairy and beef, sheep and goats. Adjust amounts, not the formula." },
      {
        q: "Which cereals work?",
        a: "Wheat, barley, oats, maize (wet or dry), triticale, rye, spelt, peas, cereal mixes and starch or cellulose-based by-products — ground finely or crushed.",
      },
      {
        q: "Do I need new equipment?",
        a: "No. Mix and feed with the mixer and routines already on the farm. Aliplus Kosova can also connect you with a local treatment service.",
      },
      { q: "How should I store it?", a: "Indoors, without plastic cover, for months or up to a year. Tested outdoors uncovered too, without loss of quality." },
    ],
    close: {
      title: "Start with your own cereals.",
      lead: "Plan the first mix with our advisors, or see the product in detail.",
    },
  },

  contact: {
    kicker: "Aliplus Kosova · Advisors in the field",
    titleLines: ["Let’s talk", "rations."],
    titleAria: "Let’s talk rations.",
    lead: "Ration advice, product questions or a farm visit — write to us and an advisor gets back to you.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    form: {
      title: "Get in touch",
      topic: "Topic",
      topicError: "Choose a topic",
      topics: {
        general: "General enquiry",
        ration: "Ration advice",
        product: "Aliplus product",
        visit: "Farm visit",
        usage: "Usage & transition",
      } as Record<string, string>,
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      submit: "Submit",
      required: "This field is required",
      invalidEmail: "Enter a valid email",
      sentTitle: "Message sent",
      sentNote: "Thank you. We have your enquiry and will get back to you within a few days.",
    },
  },

  // Legacy catalogue pages: /products, /products/[slug], /faq, /concept, /testimonials.
  catalog: {
    eyebrow: "Range",
    title: "Nutrition, minerals, plants",
    description: "Three complementary ranges to build a coherent nutrition strategy on the farm.",
    more: "Product sheet →",
    lines: [
      {
        slug: "aliplus",
        name: "Aliplus",
        category: "Nutrition",
        excerpt: "A bio-activator to mix with the farm’s own cereals and produce premium feed on site.",
      },
      {
        slug: "alimaya",
        name: "Alimaya",
        category: "Minerals",
        excerpt: "Mineral programmes and lick blocks to secure intake at the key moments of the production cycle.",
      },
      {
        slug: "aliplantes",
        name: "Aliplantes",
        category: "Plants",
        excerpt: "A complementary plant-based programme for starting, transition and digestive wellbeing in young animals.",
      },
    ],
  },
  productDetails: {
    alimaya: {
      name: "Alimaya mineral programmes",
      category: "Minerals",
      intro: "Calibrated mineral intake for high performance, pre-calving and everyday prevention — including lick blocks.",
      sections: [
        { title: "Pre-calving", body: "Securing requirements in the run-up to calving and through the feed transition." },
        { title: "Lick blocks", body: "Consistent quality, adapted to different diets and health contexts." },
        { title: "Advice", body: "Programmes built with Aliplus advisors according to your herd." },
      ],
    },
    aliplantes: {
      name: "Aliplantes plant programme",
      category: "Plants",
      intro: "A plant-based range to support starting, digestion and wellbeing — in synergy with the Aliplus ration.",
      sections: [
        { title: "Starting", body: "Support for young animals through the sensitive phases." },
        { title: "Extracts", body: "Tannins and selected plant compounds to complete the base nutrition." },
        { title: "Synergy", body: "Integrated into an overall milk or meat plan, validated with your advisor." },
      ],
    },
  } as Record<string, { name: string; category: string; intro: string; sections: { title: string; body: string }[] }>,

  faq: {
    eyebrow: "Support",
    title: "FAQ — using Aliplus",
    description: "Transition, species, milk, costs and differences versus conventional feeds.",
    question: "A question specific to your ration?",
    items: [
      {
        q: "Is the product suitable for all ruminants?",
        a: "Yes — cattle, sheep and goats, for milk and for meat. The formulation adapts to the species and production stage through ration advice.",
      },
      {
        q: "How does the transition to Aliplus work?",
        a: "Gradually, over a few weeks. Animals adapt without an abrupt change when the ration is adjusted with an advisor.",
      },
      {
        q: "What are the effects on milk and urea?",
        a: "Farmers see better milk quality, stabilised protein and better-controlled urea levels when the ration is balanced.",
      },
      {
        q: "How is Aliplus different from conventional feeds?",
        a: "Aliplus adds value to your cereals on site, limits nutrient losses and aims for higher feed efficiency — not an imported all-in-one feed.",
      },
      {
        q: "Can I see it working on a farm?",
        a: "Yes — Aliplus Kosova advisors can arrange a visit to a farm already feeding Aliplus. Ask us for an appointment.",
      },
      {
        q: "How long has Aliplus existed?",
        a: "On the market since 2013, designed by a farmer with biologists, manufactured in France.",
      },
    ],
  },

  concept: {
    eyebrow: "Concept",
    title: "Aliplus, a bio-activator created by a farmer",
    description:
      "Launched in 2013, Aliplus combines 14 natural components to optimise rations, the rumen flora and the value of local cereals — with less acidosis and fewer nitrogen correctors.",
    imageAlt: "Farmland and crops",
    livingTitle: "Living nutrition",
    livingP1:
      "Aliplus places the virtuous cycles between animals, soils and plants at the centre of livestock farming. Local production, short supply chains and authentic taste — for responsible milk and meat.",
    livingP2:
      "In Kosovo, the same idea starts on your farm: cereals grown nearby, treated on site, fed to your own herd — with a local team beside you.",
    presentationEyebrow: "Presentation",
    presentationTitle: "By the farmers and advisors of Aliplus Kosova",
    presentationBody: "Field recordings and visits available on request — see Aliplus at work on a farm near you.",
    principlesTitle: "How it works",
    pillars: [
      {
        title: "Economic and ecological efficiency",
        points: [
          "Fewer nitrogen correctors and imported feeds",
          "Feed cost under control thanks to local cereals",
          "Feed produced on the farm, in a short supply chain",
        ],
      },
      {
        title: "Quality and performance",
        points: [
          "Safe feed with reinforced nutritional value",
          "Optimised milk production and meat growth",
          "Better daily gain, carcass yield and milk solids",
        ],
      },
      {
        title: "Health and wellbeing",
        points: [
          "Acidosis prevention and better rumen comfort",
          "Healthier bedding, less ammonia in the barn",
          "Calmer animals, lower health costs",
        ],
      },
    ],
    formulaTitle: "The formula in 14 components",
    formulaBody:
      "Aliplus partially hydrolyses starch and cellulose, stabilises the treated cereal and raises its nutritional value (amino acids, protein, PDI).",
    formulaComponents: [
      "Plants and plant extracts",
      "Upgraded nitrogen sources",
      "Clays and mineral compounds",
      "Targeted trace elements",
      "Tannins and bioactive compounds",
    ],
  },

  testimonials: {
    eyebrow: "Farmers",
    title: "Testimonials from milk, meat and the table",
    description: "Feedback from farms that adopted treated cereals — performance, health and simplicity every day.",
    items: [
      {
        quote:
          "For our Holsteins, a simple ration with 4 kg of Aliplus-treated cereals — 34 L on average with remarkable solids. You see it in the health and in the milk cheque.",
        author: "Lilian",
        role: "Dairy farmer",
      },
      {
        quote:
          "Quality meat for the city — excellent feedback. We use Aliplantes for starting: we have forgotten what it is to treat a calf.",
        author: "Pierre",
        role: "Suckler farmer",
      },
      {
        quote: "Every animal gets it. A concept that simplifies life and that works — we are convinced and we want to go faster.",
        author: "Thibaud",
        role: "Dairy farmer",
      },
    ],
    visitPrompt: "Visit a farm already feeding Aliplus and talk with other farmers.",
    visitCta: "Request a visit",
  },
};

export type Dictionary = typeof en;
