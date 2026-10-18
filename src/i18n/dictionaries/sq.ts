import type { Dictionary } from "./en";

// Albanian copy. Same shape as en.ts — TypeScript flags any missing key.

export const sq: Dictionary = {
  meta: {
    siteName: "Aliplus Kosova",
    defaultTitle: "Aliplus Kosova — Ushqyerje natyrale për ripërtypës",
    description:
      "Aliplus — një koncept ushqimor i gatshëm për fermën, për gjedhe, dele dhe dhi. Përzihet me drithërat tuaja për rumen më të shëndetshëm, racione më të forta dhe rezultate më të mira në fermë.",
    pages: {
      aliplus: {
        title: "Aliplus",
        description:
          "Aliplus është një përzierje e gatshme për fermën me katërmbëdhjetë përbërës natyralë, 22 kg për ton drithëra, e maturuar 14 ditë.",
      },
      company: {
        title: "Kompania",
        description:
          "Rreth Aliplus Kosova — koncepti Aliplus në Kosovë. Ushqyerje në nivel ferme që vlerëson drithërat vendore për gjedhe, dele dhe dhi.",
      },
      usageGuide: {
        title: "Udhëzuesi i përdorimit",
        description:
          "Përgatitni Aliplus në fermë — përzieni 22 kg për ton drithëra, lëreni 14 ditë, pastaj ushqeni me pajisjet që tashmë i keni.",
      },
      contact: {
        title: "Kontakti",
        description: "Kontaktoni Aliplus Kosova — këshilla për racionin, pyetje për produktin dhe mbështetje në fermë.",
      },
      products: { title: "Gama e produkteve" },
      faq: { title: "Pyetjet e shpeshta" },
      concept: {
        title: "Koncepti Aliplus",
        description: "Ushqyerje e gjallë dhe drithëra të trajtuara — kuptoni formulën dhe mënyrën si funksionon.",
      },
      testimonials: { title: "Dëshmitë" },
      product: { title: "Produkti" },
    },
  },

  routes: {
    "/": "Ballina",
    "/products": "Produktet",
    "/products/aliplus": "Aliplus",
    "/products/alimaya": "Alimaya",
    "/products/aliplantes": "Aliplantes",
    "/company": "Kompania",
    "/usage-guide": "Udhëzuesi",
    "/contact": "Kontakti",
    "/faq": "Pyetjet",
    "/concept": "Koncepti",
    "/testimonials": "Dëshmitë",
  },

  nav: {
    home: "Ballina",
    aliplus: "Aliplus",
    company: "Kompania",
    usageGuide: "Udhëzuesi i përdorimit",
    contact: "Kontakti",
    contactUs: "Na kontaktoni",
    menu: "Menyja",
    close: "Mbyll",
    closeMenu: "Mbyll menynë",
    siteNav: "Faqja",
    language: "Gjuha",
    brandHome: "Aliplus Kosova — Ballina",
  },

  footer: {
    products: "Produktet",
    guide: "Udhëzuesi",
    about: "Rreth nesh",
    faq: "Pyetjet e shpeshta",
    promptLine1: "Nëse keni ndonjë pyetje,",
    promptLine2: "na kontaktoni lirisht:",
    privacy: "Politika e privatësisë",
    terms: "Kushtet e përdorimit",
    legal: "Ligjore",
    location: "Lokacioni",
    openMap: "Hap lokacionin në Google Maps",
  },

  common: {
    requestSample: "· Kërko një mostër ·",
    talkToTeam: "· Flisni me ekipin tonë ·",
    seeProduct: "· Shiko produktin ·",
    usageGuide: "· Udhëzuesi i përdorimit ·",
    estimate: "Kërko një vlerësim",
    pdf: "Kërko fletën PDF",
    talkAdvisor: "Flisni me një këshilltar",
    bookVisit: "Kërko një vizitë",
    bookAppointment: "Cakto një takim",
  },

  home: {
    hero: {
      title: "Aliplus\nAditiv ushqimor",
      tagline: "Më shumë nga çdo racion.",
      body: "Ushqimi është kostoja juaj më e madhe — nuk duhet të jetë edhe humbja juaj më e madhe. Përzieni Aliplus me drithërat që tashmë i kultivoni për të rritur proteinën dhe energjinë, për të mbështetur rumenin dhe për ta kthyer çdo kafshatë në rezultat të matshëm.",
      cta: "Udhëzuesi i përdorimit",
      note: "Shumica e fermerëve nisin me udhëzuesin — përziejnë 22 kg për ton, e lënë 14 ditë, pastaj ushqejnë.",
      imageAlt: "Thesi i Aliplus në një livadh në perëndim të diellit",
    },
    difference: {
      title: "Ndryshimi\nAliplus",
      lead: "Katërmbëdhjetë përbërës të gatshëm për fermën në një formulë të vetme, të përzier me drithërat që tashmë i kultivoni. Aliplus është gati për fermerët që duan më shumë nga çdo racion.",
      pillars: [
        {
          title: "Ushqyerje më e zgjuar",
          body: "Katërmbëdhjetë përbërës natyralë në një formulë. I përzier 22 kg për ton, Aliplus rrit proteinën dhe energjinë më njëtrajtshëm se koncentratet e blera.",
        },
        {
          title: "Shfrytëzim më i lartë i lëndëve ushqyese",
          body: "Mbështetje prebiotike dhe probiotike për rumenin — përthithje më e qëndrueshme, racione energjike dhe më pak rrezik acidoze.",
        },
        {
          title: "Rezultate të dëshmuara",
          body: "Kafshë më të shëndetshme, konvertim më i fortë dhe marzhe më të mira nga drithërat që tashmë rriten në fermë.",
        },
      ],
    },
    imageBreak: {
      aria: "Gjedhe në një stallë të hapur",
      alt: "Një radhë gjedhesh duke ngrënë racion të trajtuar me Aliplus",
    },
    whatIs: {
      title: "Çka është\nAliplus",
      body: "Ushqimi duhet të punojë më shumë se sa punon. Aliplus është një përzierje e gatshme për fermën me katërmbëdhjetë përbërës natyralë, 22 kg për ton drithëra, që ndihmon kafshët të shfrytëzojnë ushqyerjen që tashmë gjendet në racion. Mbështet rumenin, rrit proteinën dhe energjinë pas 14 ditësh maturimi dhe përshtatet me sistemin e ushqyerjes që tashmë e përdorni.",
      productAlt: "Dy duar që mbajnë një grusht drithëra të trajtuara me Aliplus",
      isTitle: "Çka është",
      isBody: "Një përzierje e strukturuar e uresë, ekstrakteve bimore, oligoelementeve dhe argjilës që përmirëson vlerën ushqyese të drithërave të fermës. Përzihet në fermë, maturohet, pastaj ushqehet.",
      notTitle: "Çka nuk është",
      notBody: "Nuk është ushqim i plotë, nuk është ilaç veterinar dhe nuk zëvendëson mbarështimin e mirë. Përdoreni vetëm në dozën e caktuar prej 22 kg për ton.",
    },
    how: {
      title: "Si funksionon",
      lead: "Aliplus i trajton drithërat e fermës që racioni të punojë më fort në rumen — përzieni, maturoni, pastaj ushqeni.",
      cta: "Hap udhëzuesin",
      mediaAlt: "Një dem duke ngrënë racion të trajtuar me Aliplus",
      stepsAria: "Hapat e funksionimit",
      steps: [
        {
          title: "Katërmbëdhjetë përbërës natyralë",
          body: "Ure, ekstrakte bimore, oligoelemente dhe argjilë në një formulë — 22 kg për ton drithëra që tashmë i kultivoni.",
        },
        {
          title: "Maturim i gatshëm për rumenin",
          body: "Rregulloni lagështinë në rreth 24% dhe lëreni përzierjen të maturohet 14 ditë, që vlerat e proteinës dhe energjisë të rriten.",
        },
        {
          title: "Shfrytëzim më i qëndrueshëm",
          body: "Mbështetje prebiotike dhe probiotike për florën e rumenit — racione energjike pa rrezikun e zakonshëm të acidozës.",
        },
        {
          title: "E ndërtuar për ferma të vërteta",
          body: "Funksionon me mikserët dhe racionet ekzistuese për gjedhe, dele dhe dhi. Nuk kërkohet sistem i ri ushqyerjeje.",
        },
      ],
    },
    fieldProven: {
      title: "E dëshmuar në fermë.",
      sub: "Në tufa, drithëra dhe ferma.",
      cta: "Shiko udhëzuesin",
      items: [
        {
          title: "Gjedhet",
          body: "Racione për gjedhe të ndërtuara mbi grurin, elbin ose misrin që tashmë gjendet në fermë. I përzier 22 kg për ton dhe i maturuar 14 ditë, Aliplus rrit proteinën dhe energjinë nga i njëjti drith.",
          facts: ["14 përbërës", "22 kg / ton", "14 ditë"],
          cta: "Hap udhëzuesin",
          imageAlt: "Një radhë gjedhesh duke ngrënë racion të trajtuar me Aliplus te koritja",
        },
        {
          title: "Dele dhe dhi",
          body: "Një formulë për ripërtypësit e vegjël — e njëjta dozë, të njëjtët mikserë, pa sistem të ri ushqyerjeje. Mbështetja prebiotike dhe probiotike e mban rumenin të qëndrueshëm në racione energjike.",
          facts: ["1 formulë", "E njëjta dozë 22 kg"],
          cta: "Shiko udhëzuesin e racionit",
          imageAlt: "Gjedhe duke pushuar mbi shtrojë në një stallë të hapur",
        },
        {
          title: "Rezultate të përbashkëta",
          body: "Rumen më i shëndetshëm, racione më të forta dhe marzhe më të mira nga drithërat që tashmë rriten në fermë. Këshilltarët tanë në Kosovë ju ndihmojnë të planifikoni përzierjen e parë dhe ta përsosni më tej.",
          facts: ["Rumen më i shëndetshëm", "Marzhe më të mira"],
          cta: "Flisni me ekipin tonë",
          imageAlt: "Një dem duke ngrënë racion Aliplus te hekurat",
        },
      ],
    },
    integrate: {
      title: "Integrohet\npa mundim",
      lead: "Aliplus është krijuar për t’u futur në rutinat ekzistuese pa shqetësim. Nuk e zëvendëson ushqyerjen — i ndihmon kafshët të shfrytëzojnë më shumë nga drithërat që tashmë janë në fermë.",
      points: [
        "Përzihet me grurë, elb, misër dhe drithëra të tjera të fermës",
        "22 kg për ton — nuk kërkohet sistem i ri ushqyerjeje",
        "I qëndrueshëm gjatë përzierjes, ruajtjes dhe ushqyerjes ditore",
        "Përshtatet me racionet ekzistuese për gjedhe, dele dhe dhi",
        "Mbështetje nga këshilltarët për tranzicion dhe përshtatje",
      ],
      linkBefore: "→ Shihni",
      linkGuide: "Udhëzuesin e përdorimit",
      linkOr: "ose",
      linkConsult: "konsultohuni",
      linkAfter: "me ekipin e Aliplus për ushqyerjen e blegtorisë.",
      mediaAlt: "Pamje nga afër e kokrrizave Aliplus — kokrriza gri me njolla të verdha",
      labelText: "Katërmbëdhjetë përbërës natyralë · 22 kg për ton",
    },
    formats: {
      title: "Formatet dhe qasja",
      lead: "Nisni me një përzierje të parë mbi drithërat që tashmë i kultivoni, pastaj kaloni në racion për gjithë fermën. Këshilltarët në Kosovë ju ndihmojnë të planifikoni tranzicionin.",
      cards: [
        {
          title: "Përzierja fillestare",
          coverage: "Mbulimi — provat e para",
          meta: "Ideale për të nisur me një grup ose një drith",
          alt: "Një grumbull drithërash të trajtuara me Aliplus",
        },
        {
          title: "Gjithë ferma",
          coverage: "Mbulimi — gjithë tufa",
          meta: "Ideale për ferma të mesme dhe të mëdha",
          alt: "Një dem duke ngrënë te hekurat",
        },
      ],
    },
    cta: {
      title: "Ushqimi është kostoja juaj më e madhe. Aliplus e kthen në përparësinë tuaj më të madhe.",
      lead: "Tashmë përdoret nga ferma në gjithë rajonin. Gati për fermën tuaj.",
    },
  },

  aliplus: {
    kickerN: "N° 01",
    kicker: "Aditiv ushqimor · Prodhuar në Francë",
    title: "Aliplus",
    sub: "Katërmbëdhjetë përbërës natyralë për drithërat që tashmë i kultivoni.",
    body: "I njëjti drith. Më shumë fitim. I përzier 22 kg për ton dhe i maturuar 14 ditë, Aliplus e vë grurin, elbin dhe misrin e hambarit tuaj në punë me orar të plotë.",
    strip: {
      rate: "Doza",
      rateValue: "22 kg / ton",
      inside: "Përbërja",
      insideValue: "14 përbërës natyralë",
      wait: "Pritja",
      waitValue: "14 ditë",
      herd: "Tufa",
      herdValue: "Gjedhe, dele dhe dhi",
      scroll: "Lëviz",
    },
    introEyebrow: "Çka bën Aliplus",
    introStatement:
      "Drithërat tuaja kanë dhënë më pak se sa munden. Aliplus i jep grurit, elbit dhe misrit të hambarit tuaj një ngritje serioze.",
    introP1:
      "I zhvilluar në Francë nga një blegtor dhe disa biologë shumë të durueshëm, Aliplus përzihet në drithin që tashmë e keni. Nuk zëvendëson asgjë në fermë — bën që gjithçka në koritë ta japë maksimumin.",
    introLead: "Çka nuk është:",
    introP2: "ushqim i plotë, ilaç apo magji. Është thjesht shfrytëzim më i mirë i asaj që tashmë e keni.",
    swipeAria: "Produkti, hap pas hapi",
    slides: [
      {
        tab: "Thesi",
        title: "Një thes.\nNjë ton.",
        body: "Njëzet e dy kilogramë Aliplus trajtojnë një ton të plotë të drithërave që tashmë i kultivoni. Doza është produkti — as më shumë, as më pak.",
        fact: "22 kg për ton",
        alt: "Thesi 22 kg i Aliplus në një livadh",
      },
      {
        tab: "Përbërja",
        title: "Katërmbëdhjetë përbërës\nnatyralë.",
        body: "Ure, ekstrakte bimore, oligoelemente dhe argjilë në një përzierje të strukturuar. Rrit proteinën dhe energjinë dhe zbërthen pjesërisht niseshtenë dhe celulozën.",
        fact: "14 përbërës",
        alt: "Pamje nga afër e kokrrizave Aliplus",
      },
      {
        tab: "Në fermë",
        title: "Përzieni. Pastaj\nprisni 14 ditë.",
        body: "Thërrmoni drithin, përzieni 22 kg për ton, sillni lagështinë në rreth 24% dhe lëreni. Brenda grumbullit vlerat rriten në heshtje.",
        fact: "14 ditë",
        alt: "Dy duar që mbajnë drithëra të trajtuara me Aliplus",
      },
      {
        tab: "Në koritë",
        title: "Një racion për\ngjithë tufën.",
        body: "Gjedhe, dele dhe dhi — nga viçat 30-ditësh deri te kafshët në majmëri. Vazhdoni me kashtë ose sanë; fibra ende e drejton rumenin.",
        fact: "Gjedhe · dele · dhi",
        alt: "Një radhë gjedhesh duke ngrënë te koritja",
      },
    ],
    formatsEyebrow: "Formatet",
    formatsTitle1: "Zgjidhni madhësinë.",
    formatsTitle2: "Doza mbetet 22 kg.",
    formats: [
      {
        name: "Thes 22 kg",
        role: "Një thes, një ton. Madhësia për fillim — përzieni në një ton të vetëm të drithërave tuaja.",
        meta: "Trajton 1 ton",
      },
      {
        name: "Paletë · 50 thasë",
        role: "Pesëdhjetë thasë, pesëdhjetë tonë. Për përdoruesit e rregullt — një sezon racionesh në një paletë.",
        meta: "Trajton 50 tonë",
      },
      {
        name: "Big bag · 1100 kg",
        role: "Pesëdhjetë tonë në një ngritje. Për fermat që punojnë seriozisht dhe mikserët që punojnë gjithë ditën.",
        meta: "Trajton 50 tonë",
      },
    ],
    ctaTitle: "Drithërat tuaja janë gati për një ngritje.",
    ctaLead: "Nisni me një thes dhe një ton. Tufa do t’ju tregojë pjesën tjetër.",
  },

  company: {
    heroEyebrow: "Kompania",
    heroAlt: "Ndërtesa dhe depoja e Aliplus Kosova në Lipjan",
    heroTitle: "Jemi këtu për të rimenduar çka mund të bëjnë drithërat e fermës — dhe çka mund të jetë një partner ushqimi.",
    heroBody:
      "Nga përzierja e parë në fermën tuaj deri te rezultatet në qumësht dhe mish, ne e vëmë në pyetje praktikën e zakonshme të ushqyerjes. Nuk shesim ushqim të plotë — i ndihmojmë kafshët të shfrytëzojnë më shumë nga drithërat që tashmë i kultivoni. Sepse kur punoni me rumenin dhe jo kundër tij, hapni një lloj tjetër rritjeje — në tufë, në stallë dhe në bilanc.",
    s1: {
      alt: "Një radhë gjedhesh duke ngrënë te koritja në një fermë në Kosovë",
      title: "Nisëm nga ferma",
      p1: "Aliplus u zhvillua nga një blegtor në bashkëpunim me biologë. Qëllimi ishte i thjeshtë: të merret më shumë nga drithërat që tashmë janë në hambar, pa sistem të ri ushqyerjeje.",
      p2: "Katërmbëdhjetë përbërës natyralë më vonë, koncepti prodhohet në Francë dhe përdoret në mijëra ferma. Aliplus Kosova e sjell në shtëpi — me ekip vendor, këshilltarë vendorë dhe drithërat që fermerët e Kosovës tashmë i kultivojnë.",
    },
    s2: {
      title: "Ku racioni takon rumenin",
      p1: "Shumica e kostove të ushqimit vijnë nga ajo që blihet. Ne pamë një rrugë tjetër: t’u shtohet vlerë drithërave vendore dhe të prodhohet ushqim cilësor në fermë, me kosto më të ulët.",
      p2: "Aliplus përzihet me drithërat e fermës. Rrit vlerën e tyre ushqyese — aminoacide, proteinë, PDI — dhe hidrolizon pjesërisht niseshtenë dhe celulozën.",
      p3: "Rezultati është një drith i trajtuar që është i qëndrueshëm, i lehtë për t’u ruajtur dhe i qëndrueshëm në kohë — dhe një fermë që afrohet drejt vetëmjaftueshmërisë proteinike.",
      alt: "Një grumbull drithërash të trajtuara me Aliplus në depo",
    },
    s3: {
      title: "Doza s’është hamendje",
      alts: ["Aliplus në prodhim në objektin në Lipjan", "Kokrrizat e gatshme Aliplus", "Një mëzat duke pushuar mbi shtrojë"],
      p1: "E respektojmë formulën — dhe nuk improvizojmë me të. Përdorni vetëm 22 kg Aliplus për ton drithëra, rregulloni lagështinë në rreth 24% dhe lëreni përzierjen të maturohet 14 ditë. Doza është produkti.",
      p2: "Aliplus nuk është ushqim i plotë dhe nuk është ilaç veterinar. Nuk zëvendëson mbarështimin e mirë — i ndihmon kafshët të shfrytëzojnë më shumë nga ajo që tashmë është aty.",
    },
    s4: {
      title: "E ndërtuar për ferma të vërteta",
      specLine1: "Formula",
      specLine2: "Aliplus",
      rate: "Doza",
      rateValue: "22 kg / t",
      components: "Përbërësit",
      componentsValue: "14 natyralë",
      maturation: "Maturimi",
      maturationValue: "14 ditë",
      p1: "Punojmë me atë që fermat tashmë e kanë. Drithërat tuaja, mikseri juaj, rutinat tuaja.",
      p2: "Blojeni ose thërrmojeni drithin, përzieni 22 kg për ton, prisni 14 ditë, pastaj ushqeni. Pa ndërtesë të re, pa pajisje të reja, pa sistem të ri ushqyerjeje.",
      p3: "Kështu një formulë mbulon gjedhet, delet dhe dhitë — nga viçat 30-ditësh deri te lopët qumështore dhe kafshët në majmëri.",
      p4: "Jo sepse tufa është e thjeshtë — por sepse rumeni punon njësoj te të gjithë ripërtypësit.",
    },
    s5: {
      alt: "Thesi 22 kg i Aliplus në një livadh",
      stats: [
        { value: "14", label: "Përbërës natyralë" },
        { value: "22 kg", label: "Për ton drithëra" },
        { value: "14 ditë", label: "Maturim" },
        { value: "1", label: "Formulë për tufën" },
      ],
      title: "Ndërtojmë besim, jo zhurmë",
      p: "E dimë që besimi nuk shitet — fitohet në fermë. Prandaj nisim me një bisedë, jo me një paletë. Përzierja e parë përshtatet me drithërat dhe kafshët tuaja, dhe këshilltarët tanë qëndrojnë me ju ndërsa vijnë rezultatet — duke përshtatur racionin dhe shtesat minerale (CMV) gjatë rrugës. Pa premtime të fryra. Vetëm numra të ndershëm.",
    },
    cta: {
      title: "Shiheni vetë ndryshimin",
      lead: "Nisni me një përzierje të parë mbi drithërat që tashmë i kultivoni. Këshilltarët në Kosovë ju ndihmojnë të planifikoni tranzicionin.",
    },
  },

  guide: {
    eyebrow: "Udhëzues",
    eyebrowTitle: "Ushqyerja e ripërtypësve me Aliplus",
    titleLines: ["Drithërat tuaja.", "Mikseri juaj.", "Një racion për tufën."],
    lead: "Aliplus është një koncept ushqimor me katërmbëdhjetë përbërës — ure, ekstrakte bimore, oligoelemente dhe argjilë — i krijuar për të rritur vlerën ushqyese të drithërave në fermën tuaj. I përzier 22 kg për ton grurë, elb ose misër, rrit proteinën dhe energjinë e ushqimit. I thjeshtë për t’u aplikuar, i lehtë për t’u përshtatur, me rezultate që i shihni shpejt.",
    facts: [
      { value: "14", unit: "", label: "Përbërës natyralë" },
      { value: "22", unit: "kg", label: "Për ton drithëra" },
      { value: "24", unit: "%", label: "Lagështia gjatë përzierjes" },
      { value: "14", unit: "ditë", label: "Maturim para ushqyerjes" },
    ],
    sections: {
      journey: { title: "Aliplus në fermën tuaj", lead: "Katër momente, nga biseda e parë deri te rezultatet e ndjekura me vite." },
      who: {
        title: "Për çdo ripërtypës, çdo prodhim",
        lead: "Ushqyerje e gjallë, e përshtatur posaçërisht për ripërtypësit. E njëjta bazë drithërash të trajtuara ushqen gjithë fermën, me sasi të caktuara për çdo grup.",
      },
      process: { title: "Procesi", lead: "Përgatitni, ruani, ndërtoni racionin, ushqeni — me drithërat dhe pajisjet që tashmë i keni." },
      ration: { title: "Çka hyn në racion", lead: "Në fillim, këshilltarët e Aliplus ju ndihmojnë ta optimizoni racionin sipas prodhimit dhe burimeve vendore." },
      formats: { title: "Formatet", lead: "Zgjidhni madhësinë. Doza mbetet një thes 22 kg për ton." },
      why: { title: "Pse funksionon", lead: "Katërmbëdhjetë përbërësit veprojnë së bashku — në drith, në racion dhe në rumen." },
      results: { title: "Rezultatet", lead: "Vlera ushqyese të testuara nga Institut de l’Élevage dhe INRA, dhe rezultate tipike në fermë." },
      faq: { title: "Përgjigje të shpejta", lead: "" },
    },
    journey: [
      {
        title: "Racioni dhe tranzicioni",
        body: "Bazuar në qëllimet tuaja dhe drithërat në fermën tuaj ose në zonën tuaj, këshilltarët e Aliplus propozojnë një racion të optimizuar. Së bashku caktoni tranzicionin e ushqimit.",
      },
      {
        title: "Drithëra të trajtuara",
        body: "Drithërat përgatiten me Aliplus në fermën tuaj, me pajisjet tuaja ose nga një ofrues shërbimi i Aliplus Kosova. Ruhen lehtë.",
      },
      {
        title: "Rezultatet në fermën tuaj",
        body: "Me mijëra përdorues — 600.000 ripërtypës të ushqyer me Aliplus çdo ditë — i ndjekim rezultatet tuaja së bashku për ta përsosur racionin.",
      },
      {
        title: "Mbështetje afatgjatë",
        body: "Këshilltarët e Aliplus ju ndjekin dhe ju këshillojnë vazhdimisht, ndërsa ndryshojnë prodhimi, drithërat në dispozicion, qëllimet dhe rezultatet e fermës.",
      },
    ],
    herd: [
      "Gjedhe — viça nga 30 ditë, mëshqerra, lopë qumështore dhe lopë mëmë, mëzetër, majmëri",
      "Dele",
      "Dhi dhe ripërtypës të tjerë",
    ],
    who: [
      {
        title: "Me të gjitha drithërat",
        body: "Grurë, tritikale, elb, tërshërë, misër (kokërr e lagësht ose e thatë, ose kallinj), thekër, spelt, bizele, përzierje drithërash dhe nënprodukte — çdo lëndë e parë me bazë niseshteje ose celuloze. Racione shumë energjike pa rrezik acidoze.",
      },
      {
        title: "Për qumësht dhe për mish",
        body: "Përmes optimizimit metabolik dhe furnizimit të pakufizuar me lëndë ushqyese, Aliplus vepron në cilësinë e produkteve — në qumësht dhe në majmëri — dhe në sasinë e prodhuar.",
      },
      {
        title: "Plus fibër: kashtë ose sanë",
        body: "Fibra pranë drithërave të trajtuara, ose e përfshirë në racion, është thelbësore për zhvillimin e mirë të mikroorganizmave të rumenit.",
      },
    ],
    process: [
      {
        when: "Dita 0",
        title: "Përgatitni",
        body: "Blojini imët ose thërrmojini drithërat që i keni në dispozicion — grurë, elb, tërshërë, misër (të lagësht ose të thatë), tritikale, thekër, spelt, bizele, përzierje drithërash ose nënprodukte. Përziejini me Aliplus: **një thes 22 kg për ton drithëra të bluara**. Pastaj shtoni ujë deri në rreth **24% lagështi** — gati për ruajtje.",
        note: "Trajtojeni drithin vetë, ose Aliplus Kosova ju lidh me një ofrues shërbimi të besuar në rajonin tuaj.",
      },
      {
        when: "Ditët 1 – 14",
        title: "Ruani",
        body: "Në drithin e trajtuar zhvillohen procese natyrale. Që përzierja të maturohet plotësisht, duhet të pushojë **14 ditë para ushqyerjes**. Përgatiteni muaj përpara — madje një vit — dhe mbajeni **brenda, pa mbulesë plastike**. Pastaj merrni nga grumbulli për çdo ripërtypës në fermë.",
        note: "Pas dy vitesh testimesh, drithërat e trajtuara ruhen edhe jashtë, të pambuluara, pa humbje cilësie. Rekomandohet, por nuk kërkohet, një tranzicion 10-ditësh nga racioni i mëparshëm.",
      },
      {
        when: "Ndërtimi i racionit",
        title: "Ndërtoni",
        body: "Racionet ndërtohen nga **4 deri në 15 kg e më shumë** drithëra të trajtuara dhe mund të përfshijnë silazhe — misër, kallinj misri, bar, jonxhë. Fibra menaxhohet si zakonisht me **kashtë ose sanë**. Shtesat minerale (CMV) përshtaten me këshillën e Aliplus Kosova.",
        note: "Përzieni çdo përbërës derisa të bëhet homogjen, me mikser ushqimi ose me pajisjet tuaja të zakonshme. Fibra mund të përzihet plotësisht ose pjesërisht, ose të jepet veçmas.",
      },
      {
        when: "Nga dita 14 e tutje",
        title: "Ushqeni",
        body: "Shpërndajeni me pajisjet tuaja të zakonshme. Varësisht nga lloji i racionit, prodhimi dhe shpërndarja, ushqeni **deri në një herë në javë** me racion të thatë — duke kursyer punë — ose **çdo ditë** me racion të lagësht. Prodhimi i lartë që arrihet me Aliplus kërkon vëmendje të veçantë për mineralet.",
        note: "",
      },
    ],
    ration: [
      { name: "Drithëra të trajtuara me Aliplus", amount: "4 – 15 kg +", note: "Grurë, tritikale, elb, tërshërë, misër, thekër, spelt, bizele — të bluara ose të thërrmuara." },
      { name: "Silazhe", amount: "Opsionale", note: "Misër, kallinj misri, bar, jonxhë — sipas disponueshmërisë vendore." },
      { name: "Fibër — kashtë ose sanë", amount: "Thelbësore", note: "Mbështetje fizike për mikrobet e rumenit. E përzier ose veçmas." },
      { name: "Shtesa minerale (CMV)", amount: "Të përshtatura", note: "Rregullohen me Aliplus Kosova ndërsa rriten rezultatet në qumësht dhe majmëri." },
    ],
    formats: [
      { label: "Thes 22 kg", meta: "Trajton 1 ton", note: "Një thes për ton drithëra." },
      { label: "Paletë · 50 thasë", meta: "Trajton 50 tonë", note: "Një sezon racionesh në një paletë." },
      { label: "Big bag · 1100 kg", meta: "Trajton 50 tonë", note: "Pesëdhjetë tonë në një ngritje." },
    ],
    keyPointsTitle: "Katër pika kyçe",
    pillars: [
      "I kthen drithërat vendore me kosto të ulët në ushqim cilësor, pa acidozë.",
      "I frymëzuar nga biologjia e ripërtypësve, optimizon rumenin dhe gjithë metabolizmin.",
      "Optimizon prodhimin e qumështit dhe majmërinë, në sasi dhe në cilësi.",
      "Optimizon ekonominë e fermës duke ulur kostot dhe duke rritur fitimin.",
    ],
    objectivesTitle: "Objektivat teknike",
    objectives: [
      "Efekt prebiotik dhe probiotik",
      "Ripërtypje dhe pështymë",
      "Kafshë më të qeta",
      "Vlera ushqyese më të larta të drithërave",
      "Metabolizëm dhe imunitet",
      "Prodhim më shumë dhe më të mirë",
    ],
    whyFoot:
      "Hidroliza e pjesshme e niseshtesë dhe celulozës, plus azoti nga Aliplus, u lejon kafshëve të shprehin potencialin e tyre të plotë. Heqja e rrezikut të acidozës lejon sasi të mëdha drithërash të trajtuara në mënyrë të sigurt — 3 deri në 8 kg në prodhimin e qumështit, pa kufi në majmëri. Efekti prebiotik dhe probiotik mbështet pastaj një zhvillim shumë të fortë të baktereve të rumenit — ushqimi më fitimprurës, ekologjik dhe natyral që mund të ketë një ripërtypës.",
    results: {
      inraTitle: "Drithëra të trajtuara — përzierje grurë/elb",
      inraSub: "Dita 0 kundrejt mesatares nga dita 14 deri në ditën 120",
      day0: "Dita 0",
      day14: "Dita 14 – 120",
      inraRows: ["Lënda e thatë (%)", "Proteina bruto (% LTH)", "DE1 (% LTH)", "UFV (/kg LTH)", "PDIN (g/kg LTH)", "PDIE (g/kg LTH)"],
      inraFoot:
        "Vlera të larta, të balancuara në mënyrë të përsosur — UF 1.17, PDIN 117, PDIE 116. Drithi që nuk mund të jepej i vetëm, sidomos në sasi të mëdha, bëhet ushqimi ideal për çdo rumen.",
      beefTitle: "Gjedhe për mish, majmëri",
      beef: [
        { k: "Shtesa mesatare ditore", v: "2.8 kg" },
        { k: "Klasa EUROP", v: "+ 1/3 klasë" },
        { k: "Koha e majmërisë", v: "− 30 deri 40 ditë" },
        { k: "Pesha e karkasës", v: "+ 30 kg" },
        { k: "Rendimenti i mishit", v: "+ 3 %" },
        { k: "Cilësia e karkasës dhe mishit", v: "Shumë e mirë" },
      ],
      dairyTitle: "Lopë qumështore",
      dairy: [
        { k: "Prodhimi i qumështit", v: "34 kg" },
        { k: "Proteina (TP)", v: "deri në 34" },
        { k: "Yndyra (TB)", v: "deri në 41" },
        { k: "Aftësia për djathë", v: "E optimizuar" },
      ],
    },
    care: [
      {
        title: "Shëndeti dhe mirëqenia",
        body: "Aliplus respekton funksionimin natyral të ripërtypësit, duke sjellë gjendje të përgjithshme shumë të mirë në të gjithë treguesit metabolikë — dhe më pak kosto shtesë.",
      },
      {
        title: "Edhe mirëqenia e fermerit",
        body: "Më pak shpenzime, më pak punë dhe më shumë prodhim njëkohësisht — duke e parë tufën në gjendje të mirë.",
      },
      {
        title: "Jeta ushqen jetën",
        body: "Ushqyerja e gjallë vazhdon nga drithi te rumeni, te plehu — më i shëndetshëm, me shumë më pak amoniak — e deri te toka dhe bimët.",
      },
    ],
    faqs: [
      { q: "Sa është doza e përzierjes?", a: "Një thes 22 kg Aliplus për ton drithëra të bluara. Doza është produkti — mos e koncentroni dhe mos e holloni." },
      { q: "Sa kohë duhet të maturohet përzierja?", a: "14 ditë para ushqyerjes së parë, që proceset natyrale në drith të përfundojnë." },
      { q: "Cilat kafshë mund ta hanë?", a: "Të gjithë ripërtypësit — gjedhe nga viçat 30-ditësh deri te lopët qumështore dhe ato për mish, dele dhe dhi. Përshtatni sasitë, jo formulën." },
      {
        q: "Cilat drithëra funksionojnë?",
        a: "Grurë, elb, tërshërë, misër (i lagësht ose i thatë), tritikale, thekër, spelt, bizele, përzierje drithërash dhe nënprodukte me bazë niseshteje ose celuloze — të bluara imët ose të thërrmuara.",
      },
      {
        q: "A më duhen pajisje të reja?",
        a: "Jo. Përzieni dhe ushqeni me mikserin dhe rutinat që tashmë i keni në fermë. Aliplus Kosova mund t’ju lidhë edhe me një shërbim vendor trajtimi.",
      },
      { q: "Si duhet ta ruaj?", a: "Brenda, pa mbulesë plastike, për muaj ose deri në një vit. E testuar edhe jashtë, e pambuluar, pa humbje cilësie." },
    ],
    close: {
      title: "Nisni me drithërat tuaja.",
      lead: "Planifikoni përzierjen e parë me këshilltarët tanë, ose shihni produktin në detaje.",
    },
  },

  contact: {
    kicker: "Aliplus Kosova · Këshilltarë në terren",
    titleLines: ["Të flasim", "për racione."],
    titleAria: "Të flasim për racione.",
    lead: "Këshilla për racionin, pyetje për produktin ose një vizitë në fermë — na shkruani dhe një këshilltar ju kthen përgjigje.",
    email: "Email",
    phone: "Telefoni",
    address: "Adresa",
    form: {
      title: "Na kontaktoni",
      topic: "Tema",
      topicError: "Zgjidhni një temë",
      topics: {
        general: "Pyetje e përgjithshme",
        ration: "Këshillë për racionin",
        product: "Produkti Aliplus",
        visit: "Vizitë në fermë",
        usage: "Përdorimi dhe tranzicioni",
      },
      name: "Emri",
      email: "Email",
      phone: "Telefoni",
      subject: "Subjekti",
      message: "Mesazhi",
      submit: "Dërgo",
      required: "Kjo fushë është e detyrueshme",
      invalidEmail: "Shkruani një email të vlefshëm",
      sentTitle: "Mesazhi u dërgua",
      sentNote: "Faleminderit. E kemi marrë kërkesën tuaj dhe do t’ju përgjigjemi brenda pak ditësh.",
    },
  },

  catalog: {
    eyebrow: "Gama",
    title: "Ushqyerje, minerale, bimë",
    description: "Tri gama plotësuese për të ndërtuar një strategji koherente ushqyerjeje në fermë.",
    more: "Fleta e produktit →",
    lines: [
      {
        slug: "aliplus",
        name: "Aliplus",
        category: "Ushqyerje",
        excerpt: "Një bio-aktivator që përzihet me drithërat e fermës për të prodhuar ushqim cilësor në vend.",
      },
      {
        slug: "alimaya",
        name: "Alimaya",
        category: "Minerale",
        excerpt: "Programe minerale dhe blloqe lëpirjeje për të siguruar marrjen në momentet kyçe të ciklit të prodhimit.",
      },
      {
        slug: "aliplantes",
        name: "Aliplantes",
        category: "Bimë",
        excerpt: "Një program plotësues me bazë bimore për fillimin, tranzicionin dhe mirëqenien tretëse të kafshëve të reja.",
      },
    ],
  },
  productDetails: {
    alimaya: {
      name: "Programet minerale Alimaya",
      category: "Minerale",
      intro: "Marrje minerale e kalibruar për prodhim të lartë, periudhën para pjelljes dhe parandalimin e përditshëm — përfshirë blloqe lëpirjeje.",
      sections: [
        { title: "Para pjelljes", body: "Sigurimi i nevojave në prag të pjelljes dhe gjatë tranzicionit të ushqimit." },
        { title: "Blloqe lëpirjeje", body: "Cilësi e qëndrueshme, e përshtatur për dieta dhe kontekste të ndryshme shëndetësore." },
        { title: "Këshillimi", body: "Programe të ndërtuara me këshilltarët e Aliplus sipas tufës suaj." },
      ],
    },
    aliplantes: {
      name: "Programi bimor Aliplantes",
      category: "Bimë",
      intro: "Një gamë me bazë bimore për të mbështetur fillimin, tretjen dhe mirëqenien — në sinergji me racionin Aliplus.",
      sections: [
        { title: "Fillimi", body: "Mbështetje për kafshët e reja gjatë fazave të ndjeshme." },
        { title: "Ekstraktet", body: "Tanine dhe përbërës bimorë të përzgjedhur për të plotësuar ushqyerjen bazë." },
        { title: "Sinergjia", body: "E integruar në një plan të përgjithshëm për qumësht ose mish, e vërtetuar me këshilltarin tuaj." },
      ],
    },
  },

  faq: {
    eyebrow: "Mbështetje",
    title: "Pyetjet e shpeshta — përdorimi i Aliplus",
    description: "Tranzicioni, llojet e kafshëve, qumështi, kostot dhe dallimet nga ushqimet konvencionale.",
    question: "Keni një pyetje specifike për racionin tuaj?",
    items: [
      {
        q: "A është produkti i përshtatshëm për të gjithë ripërtypësit?",
        a: "Po — gjedhe, dele dhe dhi, për qumësht dhe për mish. Formulimi përshtatet me llojin dhe fazën e prodhimit përmes këshillimit për racionin.",
      },
      {
        q: "Si bëhet tranzicioni në Aliplus?",
        a: "Gradualisht, gjatë disa javësh. Kafshët përshtaten pa ndryshim të papritur kur racioni rregullohet me një këshilltar.",
      },
      {
        q: "Cilat janë efektet në qumësht dhe ure?",
        a: "Fermerët vërejnë cilësi më të mirë qumështi, proteinë të stabilizuar dhe nivele uree më të kontrolluara kur racioni është i balancuar.",
      },
      {
        q: "Si dallon Aliplus nga ushqimet konvencionale?",
        a: "Aliplus u shton vlerë drithërave tuaja në vend, kufizon humbjet e lëndëve ushqyese dhe synon efikasitet më të lartë ushqimor — jo një ushqim të importuar gjithëpërfshirës.",
      },
      {
        q: "A mund ta shoh në punë në një fermë?",
        a: "Po — këshilltarët e Aliplus Kosova mund të organizojnë një vizitë në një fermë që tashmë ushqen me Aliplus. Kërkoni një takim.",
      },
      {
        q: "Që kur ekziston Aliplus?",
        a: "Në treg që nga viti 2013, i krijuar nga një fermer me biologë, i prodhuar në Francë.",
      },
    ],
  },

  concept: {
    eyebrow: "Koncepti",
    title: "Aliplus, një bio-aktivator i krijuar nga një fermer",
    description:
      "I lansuar në vitin 2013, Aliplus kombinon 14 përbërës natyralë për të optimizuar racionet, florën e rumenit dhe vlerën e drithërave vendore — me më pak acidozë dhe më pak korrektorë azotikë.",
    imageAlt: "Tokë bujqësore dhe kultura",
    livingTitle: "Ushqyerje e gjallë",
    livingP1:
      "Aliplus i vendos ciklet e dobishme mes kafshëve, tokës dhe bimëve në qendër të blegtorisë. Prodhim vendor, zinxhirë të shkurtër furnizimi dhe shije autentike — për qumësht dhe mish të përgjegjshëm.",
    livingP2:
      "Në Kosovë, e njëjta ide nis në fermën tuaj: drithëra të kultivuara afër, të trajtuara në vend, të dhëna tufës suaj — me një ekip vendor pranë jush.",
    presentationEyebrow: "Prezantimi",
    presentationTitle: "Nga fermerët dhe këshilltarët e Aliplus Kosova",
    presentationBody: "Regjistrime nga terreni dhe vizita me kërkesë — shiheni Aliplus në punë në një fermë afër jush.",
    principlesTitle: "Si funksionon",
    pillars: [
      {
        title: "Efikasitet ekonomik dhe ekologjik",
        points: [
          "Më pak korrektorë azotikë dhe ushqime të importuara",
          "Kosto ushqimi nën kontroll falë drithërave vendore",
          "Ushqim i prodhuar në fermë, me zinxhir të shkurtër",
        ],
      },
      {
        title: "Cilësi dhe performancë",
        points: [
          "Ushqim i sigurt me vlerë ushqyese të përforcuar",
          "Prodhim qumështi dhe rritje mishi të optimizuara",
          "Shtesë ditore, rendiment karkase dhe përbërje qumështi më të mira",
        ],
      },
      {
        title: "Shëndet dhe mirëqenie",
        points: [
          "Parandalim i acidozës dhe rehati më e mirë e rumenit",
          "Shtrojë më e shëndetshme, më pak amoniak në stallë",
          "Kafshë më të qeta, kosto shëndetësore më të ulëta",
        ],
      },
    ],
    formulaTitle: "Formula me 14 përbërës",
    formulaBody:
      "Aliplus hidrolizon pjesërisht niseshtenë dhe celulozën, stabilizon drithin e trajtuar dhe rrit vlerën e tij ushqyese (aminoacide, proteinë, PDI).",
    formulaComponents: [
      "Bimë dhe ekstrakte bimore",
      "Burime azoti të përmirësuara",
      "Argjila dhe përbërës mineralë",
      "Mikroelemente të synuara",
      "Tanine dhe përbërës bioaktivë",
    ],
  },

  testimonials: {
    eyebrow: "Fermerët",
    title: "Dëshmi nga qumështi, mishi dhe tavolina",
    description: "Përvoja nga fermat që kaluan në drithëra të trajtuara — performancë, shëndet dhe thjeshtësi çdo ditë.",
    items: [
      {
        quote:
          "Për Holsteinat tona, një racion i thjeshtë me 4 kg drithëra të trajtuara me Aliplus — 34 L mesatarisht me përbërje të shkëlqyer. E sheh në shëndet dhe në pagesën e qumështit.",
        author: "Lilian",
        role: "Fermer qumështi",
      },
      {
        quote:
          "Mish cilësor për qytetin — reagime të shkëlqyera. Përdorim Aliplantes për fillimin: kemi harruar çka do të thotë të kurosh një viç.",
        author: "Pierre",
        role: "Fermer i lopëve mëmë",
      },
      {
        quote: "Çdo kafshë e merr. Një koncept që e thjeshton jetën dhe që funksionon — jemi të bindur dhe duam të ecim më shpejt.",
        author: "Thibaud",
        role: "Fermer qumështi",
      },
    ],
    visitPrompt: "Vizitoni një fermë që tashmë ushqen me Aliplus dhe bisedoni me fermerë të tjerë.",
    visitCta: "Kërko një vizitë",
  },
};
