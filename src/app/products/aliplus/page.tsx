import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TornEdge } from "@/components/ui/TornEdge";
import { AccordionImages } from "@/components/sections/AccordionImages";

export const metadata: Metadata = {
  title: "Aliplus",
  description:
    "Aliplus është një koncept i ushqyerjes së kafshëve me 14 elemente, i krijuar për të rritur vlerën ushqyese të drithërave në fermë. Përzihet 22 kg për një ton drithëra.",
};

/* ── Content ──────────────────────────────────────────────────────────── */

const highlights = [
  {
    title: "Zbatim i thjeshtë dhe i përshtatshëm",
    body: "Përzihet direkt me drithërat tuaja — pa pajisje speciale dhe pa ndryshuar organizimin e fermës.",
    icon: "mix",
  },
  {
    title: "Përshtatet lehtësisht me fermën tuaj",
    body: "Për çdo lloj racioni, për të gjithë ripërtypësit dhe për çdo lloj prodhimi.",
    icon: "farm",
  },
  {
    title: "Rezultate të dukshme shpejt",
    body: "Efekti vërehet shpejt në shëndet, ngrënie dhe performancë të kafshëve.",
    icon: "chart",
  },
] as const;

const benefits = [
  {
    title: "Ushqim shumë cilësor",
    body: "ALIPLUS ofron një ushqim shumë cilësor, i bazuar në drithëra vendore, duke sjellë përfitime të shumta në shëndet, produktivitet dhe cilësinë e produkteve të fermës.",
    bg: "bg-accent",
    graphic: "/imgs/card-graphic-wheat.svg",
  },
  {
    title: "Kosto më e ulët, fitim më i lartë",
    body: "Kostoja juaj ushqimore është shumë më e ulët se ajo e ushqimeve tregtare, ndërsa fitimet janë dukshëm më të larta.",
    bg: "bg-pine",
    graphic: "/imgs/card-graphic-leaf.svg",
  },
  {
    title: "Prodhoni më shumë",
    body: "Ju lejon të prodhoni më shumë, duke përqendruar racionet pa rrezik acidoze*. Rezultatet janë të shpejta për çdo lloj prodhimi.",
    bg: "bg-moss",
    graphic: "/imgs/card-graphic-drops.svg",
  },
] as const;

const pillars = [
  {
    title: "Drithëra lokale → ushqim cilësor",
    body: "Shndërron drithërat lokale me kosto të ulët në ushqim shumë cilësor, pa acidozë.",
  },
  {
    title: "Optimizon rumenin",
    body: "I frymëzuar nga biologjia e ripërtypësve, optimizon rumenin dhe gjithë metabolizmin e kafshëve.",
  },
  {
    title: "Qumësht & majmëri",
    body: "Optimizon prodhimin e fermave në qumësht dhe majmëri — si në sasi ashtu edhe në cilësi.",
  },
  {
    title: "Ekonomia e fermës",
    body: "Ul shpenzimet dhe rrit fitimet, duke bërë gjithë ekonominë e fermës më të qëndrueshme.",
  },
] as const;

const nutritionValues = [
  { label: "UF", value: "1,17", hint: "/ kg MS" },
  { label: "PDIN", value: "117", hint: "g / kg MS" },
  { label: "PDIE", value: "116", hint: "g / kg MS" },
] as const;

const steps = [
  {
    title: "Llogaritja e racionit dhe kalimi ushqimor",
    body: (
      <>
        Sipas objektivave tuaja dhe drithërave që keni në fermë ose në zonën
        tuaj, fermerët Aliplus ju propozojnë një{" "}
        <strong>racion të optimizuar</strong>. Së bashku përcaktoni kalimin
        tuaj ushqimor.
      </>
    ),
  },
  {
    title: "Prodhimi i drithërave të trajtuara me Aliplus",
    body: (
      <>
        Përgatitja e drithërave me Aliplus bëhet në fermën tuaj, me{" "}
        <strong>mjetet tuaja</strong> ose nga <strong>ofrues shërbimesh</strong>{" "}
        të Aliplus Kosova. Këto drithëra <strong>ruhen lehtësisht</strong>.
      </>
    ),
  },
  {
    title: "Ndjekja e rezultateve në fermën tuaj",
    body: (
      <>
        Me mijëra përdorues (600.000 ripërtypës të ushqyer çdo ditë me
        Aliplus), ne <strong>ndjekim së bashku rezultatet tuaja</strong> për
        të <strong>rregulluar racionin</strong> në mënyrën më të mirë.
      </>
    ),
  },
  {
    title: "Mbështetje afatgjatë",
    body: (
      <>
        Fermerët Aliplus ju ndjekin dhe ju{" "}
        <strong>këshillojnë vazhdimisht</strong>, sipas{" "}
        <strong>zhvillimit</strong> të prodhimit tuaj, drithërave të
        disponueshme, <strong>objektivave</strong> tuaja dhe{" "}
        <strong>rezultateve</strong> të fermës suaj.
      </>
    ),
  },
];

/* ── Small UI pieces ───────────────────────────────────────────────────── */

function HighlightIcon({ name }: { name: (typeof highlights)[number]["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "mix") {
    return (
      <svg {...common}>
        <path d="M4 10h16l-1.5 9a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 10Z" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M9 14.5c1 .8 2 .8 3 0s2-.8 3 0" />
      </svg>
    );
  }
  if (name === "farm") {
    return (
      <svg {...common}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 20V5" />
      <path d="M4 20h16" />
      <path d="m7 15 4-4 3 3 5-6" />
      <path d="M16 8h3v3" />
    </svg>
  );
}

function FramedPhoto({
  src,
  alt,
  caption,
  objectPosition = "center",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 1024px) 100vw, 520px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[url(/imgs/border-business-edge.png)] bg-cover bg-center"
          aria-hidden
        />
      </div>
      {caption && (
        <figcaption className="mt-6 text-base text-text">
          <em>{caption}</em>
        </figcaption>
      )}
    </figure>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function AliplusProductPage() {
  return (
    <>
      {/* 1 · Hero — full-bleed wheat field under the fixed header */}
      <section className="hero-pasture relative isolate overflow-hidden">
        <Image
          src="/aliplus-field.jpg"
          alt="Fushë gruri në perëndim të diellit"
          fill
          priority
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/30 to-dark/60"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(88svh,860px)] items-center justify-center px-5 pb-28 pt-36">
          <div className="hero-content text-center">
            <p className="pfl-subheading text-white/85!">Produkti</p>
            <h1 className="hero-stamp hero-stamp--base text-[4.5rem] sm:text-[6rem] lg:text-[8.5rem] xl:text-[10rem]">
              Aliplus
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-xl leading-snug text-white sm:text-2xl">
              Drithërat Aliplus — ushqim me performancë të lartë, i thjeshtë
              dhe fitimprurës për fermat.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="/calculator" className="hero-pill hero-pill--green">
                Llogarit racionin
              </Link>
              <Link href="/contact" className="hero-pill hero-pill--pink">
                Kontakto fermerët Aliplus
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-torn pointer-events-none absolute inset-x-0 bottom-0 z-20"
          aria-hidden
        >
          <TornEdge />
        </div>
      </section>

      {/* 2 · What is Aliplus — text | framed grain photo with 22 kg stamp */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="grid grid-cols-4 items-center gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <p className="pfl-subheading">Koncepti</p>
              <h2 className="pfl-h2 text-dark">
                Një aditiv me 14 elemente për drithërat e fermës suaj
              </h2>
              <div className="pfl-content">
                <h5 className="pfl-h5">
                  Aliplus është një koncept i ushqyerjes së kafshëve (aditiv) i
                  përbërë nga 14 elemente, i krijuar për të rritur vlerën
                  ushqyese të drithërave në fermë.
                </h5>
                <p className="pfl-lead">
                  Përbërja përfshin ure, ekstrakte bimore, oligoelemente dhe
                  argjilë. Përzihet në sasinë{" "}
                  <strong className="text-pine">22 kg për një ton drithëra</strong>{" "}
                  (grurë, elb, misër, etj.) për të rritur vlerën proteinike dhe
                  energjinë e ushqimit.
                </p>
                <p className="pfl-lead">
                  Formularja me 14 përbërës sjell efekte të ndërlidhura në
                  drithëra, në racion dhe në rumen: hidrolizë të pjesshme të
                  amidonit dhe celulozës, furnizim azotik, si dhe mbështetje
                  prebiotike/probiotike për mikroorganizmat e rumenit — pa
                  rrezik acidoze*.
                </p>
              </div>
              <Link
                href="/usage-guide"
                className="hero-pill hero-pill--green mt-8"
              >
                Si përdoret Aliplus
              </Link>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <div className="relative mx-auto max-w-[520px]">
                <FramedPhoto
                  src="/aliplus-wheat.jpg"
                  alt="Kokrra gruri — drithëra vendore të trajtuara me Aliplus"
                  caption="Drithërat e fermës: gruri, elbi dhe misri"
                />
                {/* 22 kg / ton stamp */}
                <div
                  className="product-stamp absolute -left-3 top-6 sm:-left-8 sm:top-10"
                  aria-hidden
                >
                  <span className="product-stamp__num">22 kg</span>
                  <span className="product-stamp__label">për 1 ton drithëra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three highlights */}
          <ul className="mt-16 grid gap-10 sm:grid-cols-3 lg:mt-24">
            {highlights.map((h) => (
              <li key={h.title} className="flex flex-col items-start">
                <span className="highlight-icon">
                  <HighlightIcon name={h.icon} />
                </span>
                <h3 className="pfl-h5 mt-5 mb-2! text-[1.375rem]! lg:text-2xl!">
                  {h.title}
                </h3>
                <p className="text-base leading-relaxed text-text">{h.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Why Aliplus — green band with three cards */}
      <section className="impact-section bg-forest bg-[url(/imgs/bg-graphic-three-column.svg)] bg-left bg-no-repeat">
        <TornEdge flip />

        <div className="container-pfl pb-16 lg:pb-24">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
            <p className="pfl-subheading text-white/80!">Pse Aliplus?</p>
            <h2 className="pfl-h2 text-white">
              Fitim më i lartë, kosto më e ulët
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {benefits.map((b) => (
              <article
                key={b.title}
                className={`flex min-h-[20rem] flex-col justify-between rounded-[20px] p-8 text-white ${b.bg}`}
                style={{
                  backgroundImage: `url(${b.graphic})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -20% bottom -30%",
                  backgroundSize: "60%",
                }}
              >
                <h3 className="pfl-h3 mb-6! text-[2rem]! lg:text-[2.5rem]!">
                  {b.title}
                </h3>
                <p className="text-[1.0625rem]! leading-[150%]!">{b.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-white/75">
            *Kujdes: këshillohuni me fermerët Aliplus.
          </p>
        </div>

        <TornEdge />
      </section>

      {/* 4 · Drithërat Aliplus — framed wheat ears | text */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="grid grid-cols-4 items-center gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <div className="mx-auto max-w-[520px]">
                <FramedPhoto
                  src="/aliplus-wheat-ears.jpg"
                  alt="Kallinj gruri nën qiell të kaltër"
                  caption="Drithërat e trajtuara me Aliplus ruhen për një vit ose më shumë"
                  objectPosition="center 65%"
                />
              </div>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <p className="pfl-subheading">Drithërat Aliplus</p>
              <h2 className="pfl-h2 text-dark">
                Ushqim me performancë të lartë
              </h2>
              <div className="pfl-content">
                <p className="pfl-lead">
                  <strong className="text-pine">Drithërat Aliplus</strong> janë
                  një ushqim me performancë të lartë. Ato përdoren për ushqimin
                  e gjedhëve dhe të gjithë ripërtypësve — për lopët, lopët
                  qumështore dhe për majmëri.
                </p>
                <h5 className="pfl-h5">
                  Ushqyerja e kafshëve tuaja është e thjeshtë dhe e sigurt.
                </h5>
                <p className="pfl-lead">
                  Trajtimi i drithërave tuaja me Aliplus realizohet në fermë nga
                  ju ose nga një ofrues i jashtëm shërbimi. Drithërat e trajtuara
                  me Aliplus <strong className="text-pine">ruhen lehtësisht</strong>,
                  pa dëmtime dhe pa humbje,{" "}
                  <strong className="text-pine">për një vit ose më shumë</strong>.
                </p>
                <p className="pfl-lead">
                  Racionet e thata, gjysmë të lagështa, të lagështa, si dhe të
                  gjitha llojet e drithërave dhe silazheve mund të përmirësohen
                  me Aliplus. Formula lejon{" "}
                  <strong className="text-pine">
                    racione shumë energjike pa rrezik nga acidoza
                  </strong>
                  , me bazë grurë, tritikale, misër, bimë proteinike dhe të
                  tjera sipas mundësive lokale — për të gjithë gjedhët, delet
                  dhe dhité.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Prodhoni ushqimin Aliplus në fermë",
                  "Ruani drithërat e trajtuara me Aliplus",
                  "Shpërndani racionet tuaja me Aliplus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="check-dot">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </span>
                    <span className="check-item">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4b · Formula process — rumen principle + nutritional values */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pfl-subheading">Formula</p>
            <h2 className="pfl-h2 text-forest">
              Parimi: ushqimi i baktereve të rumenit
            </h2>
            <p className="pfl-lead">
              Optimizimi i drithërave me hidrolizë të pjesshme të amidonit dhe
              celulozës, si dhe me furnizim azotik nga Aliplus, u mundëson
              kafshëve të shprehin plotësisht potencialin e tyre natyror.
              Eliminimi i acidozës lejon në racion sasi të mëdha të drithërave
              të trajtuara me Aliplus në mënyrë të sigurt (3 deri në 8 kg në
              prodhimin e qumështit dhe pa kufi në majmëri).
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-10">
            <div className="rounded-[28px] bg-soft/45 p-8 sm:p-10">
              <h3 className="pfl-h5">Ushqim premium për çdo rumen</h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-text sm:text-lg [&_strong]:font-semibold [&_strong]:text-dark">
                <p>
                  Me vlera ushqyese shumë të larta dhe të balancuara (
                  <strong>UF, PDIN, PDIE</strong>), drithi i trajtuar me Aliplus
                  është ushqimi ideal për çdo rumen.
                </p>
                <p>
                  Efekti <strong>prebiotik / probiotik</strong> mundëson
                  zhvillim të madh të baktereve në rumen. Fibra (kashtë, sanë)
                  bëhet mbështetje fizike për mikrobiotën — ripërtypësi është i
                  vetmi gjitar i aftë të shumëzojë në mënyrë eksponenciale këto
                  baktere të mira.
                </p>
                <p>
                  Disa përbërës veprojnë mbi{" "}
                  <strong>ruminimin, pështymën, qetësinë dhe tretjen</strong>.
                  Duke respektuar metabolizmin e tyre, kafshët e përdorin
                  gjithë energjinë për të prodhuar më shumë dhe më mirë.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-olive/20 bg-white p-8 sm:p-10">
              <p className="pfl-subheading">Pas maturimit (J+14)</p>
              <h3 className="pfl-h5">
                Vlera tipike — përzierje grurë/elb
              </h3>
              <p className="mt-2 text-sm text-muted">
                Teste nga Instituti i Blegtorisë dhe INRA — mesatarja nga dita
                14 deri dita 120.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {nutritionValues.map((v) => (
                  <div
                    key={v.label}
                    className="rounded-2xl bg-soft/60 px-3 py-5 text-center"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-forest">
                      {v.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                      {v.value}
                    </dd>
                    <dd className="mt-1 text-xs text-muted">{v.hint}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-text">
                Pa Aliplus, drithi nuk mund të shpërndahet i vetëm në sasi të
                mëdha. Pas trajtimit, ai fiton vlerë të lartë ushqyese, të
                balancuar dhe të sigurt — plotësisht në përputhje me nevojat e
                kafshëve.
              </p>
            </div>
          </div>

          {/* 4 key pillars */}
          <div className="mt-16 lg:mt-20">
            <h3 className="pfl-h2 text-center text-dark">
              4 pikat kryesore të konceptit
            </h3>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  className="flex gap-5 rounded-[20px] border border-olive/20 bg-soft/30 p-6 sm:p-8"
                >
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="pfl-h5 mb-2! text-[1.25rem]! lg:text-[1.5rem]!">
                      {p.title}
                    </h4>
                    <p className="text-base leading-relaxed text-text">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5 · Setting up Aliplus on your farm — four numbered steps */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pfl-subheading">Zbatimi</p>
            <h2 className="pfl-h2 text-forest">
              Vendosja e Aliplus në fermën tuaj
            </h2>
            <p className="pfl-lead">
              Për suksesin e fermës suaj, fermerët Aliplus ju shoqërojnë në
              zbatimin e këtij sistemi ushqyerjeje — përbërja dhe optimizimi i
              racioneve sipas lëndëve të para në dispozicion, shpërndarja dhe
              ndjekja e rezultateve.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 rounded-[28px] bg-soft/45 p-6 sm:p-10 md:grid-cols-2 lg:mt-16 lg:gap-x-16 lg:gap-y-14 lg:p-14">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-6">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="pfl-h5 mb-3! text-[1.375rem]! lg:text-2xl!">
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text [&_strong]:font-semibold [&_strong]:text-dark">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 · Aliplus farmers — accordion + switching photos */}
      <AccordionImages
        eyebrow="Aliplus farmers"
        title="We walk with you at every step"
        items={[
          {
            title: "Plan the ration together",
            body: "We support any farm — no matter where you are starting from — to move onto Aliplus through ration planning, feed transition, on-farm advice and follow-up. Together we set a mix that fits the cereals you already grow.",
            cta: "Contact an Aliplus farmer",
            href: "/contact",
            image: "/float-sheep.jpg",
            imageAlt: "Holstein cow on pasture — Aliplus feeding",
            tone: "green",
          },
          {
            title: "Mix Aliplus on the farm",
            body: "Grain is milled or crushed, mixed at 22 kg Aliplus per ton of cereals, moisture set to around 24%, then matured for 14 days. You can prepare it with your own equipment or with a local service partner.",
            cta: "Open Usage Guide",
            href: "/usage-guide",
            image: "/guide-feeding.jpg",
            imageAlt: "Cattle feeding on an Aliplus ration",
            tone: "purple",
          },
          {
            title: "Follow the results",
            body: "We track performance with you and adjust the ration as animals adapt — from first mix to a stable season. Long-term advice as your production, cereals and goals evolve.",
            cta: "Calculate your ration",
            href: "/calculator",
            image: "/company-barn.jpg",
            imageAlt: "Cattle in an open-sided barn",
            tone: "dark",
          },
        ]}
      />
    </>
  );
}
