import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TornEdge } from "@/components/ui/TornEdge";

export const metadata: Metadata = {
  title: "Usage Guide",
  description:
    "Udhëzuesi i përdorimit të Aliplus — përgatitja, ruajtja dhe shpërndarja e drithërave të trajtuara me Aliplus në fermën tuaj.",
};

/* ── Content ──────────────────────────────────────────────────────────── */

const usageColumns = [
  {
    src: "/guide-ruminants.jpg",
    alt: "Ripërtypës në fermë",
    title: "Për të gjithë ripërtypësit dhe për çdo lloj prodhimi",
    body: (
      <>
        Ushqyerja e gjallë Aliplus është shumë e <strong>shëndetshme</strong>{" "}
        dhe e <strong>përshtatur</strong> posaçërisht për ripërtypësit. Ajo u
        përshtatet{" "}
        <strong>të gjithë gjedhëve, dhive dhe deleve</strong>: viça që nga dita
        e parë, mëshqerra, lopë qumështore, lopë për viça, viça për rritje,
        dema të rinj, lopë për therje etj. Ju mund të shpërndani të{" "}
        <strong>njëjtat baza racionesh</strong>, me{" "}
        <strong>sasi të përshtatura</strong> për të{" "}
        <strong>gjitha kafshët</strong> tuaja, duke përdorur të njëjtin
        grumbull drithërash të trajtuara me Aliplus.
      </>
    ),
  },
  {
    src: "/guide-grains.jpg",
    alt: "Drithëra të bluara për përzierje me Aliplus",
    title: "Me të gjitha drithërat dhe për të gjitha racionet",
    body: (
      <>
        Sipas mundësive të fermës ose burimeve lokale, drithërat e trajtuara me
        Aliplus përbëhen nga:{" "}
        <strong>
          grurë, tritikale, elb, tërshërë, misër kokërr
        </strong>{" "}
        (i lagësht ose i thatë), <strong>thekër, spelte, bizele</strong>,
        përzierje drithërash, ose nënprodukte drithërash (dhe{" "}
        <strong>
          të gjitha lëndët e para me bazë amidoni dhe/ose celuloze
        </strong>
        ), të bluara imët ose të shtypura, të përziera me{" "}
        <strong>Aliplus</strong> (1 thes 22 kg për ton drithëra).
      </>
    ),
  },
  {
    src: "/guide-farm-means.jpg",
    alt: "Fermë — shpërndarja e racioneve me mjetet e zakonshme",
    title: "Shpërndarja sipas mjeteve tuaja të zakonshme",
    body: (
      <>
        Shpërndarja e racioneve bëhet me mjetet tuaja të zakonshme.{" "}
        <strong>
          Drithërave të trajtuara me Aliplus u shtohen fibra (kashtë ose sanë)
        </strong>
        , të përziera në ushqim ose të dhëna veçmas. Të gjitha llojet e
        racioneve (të thata, gjysmë të lagështa ose të lagështa) funksionojnë
        shumë mirë me Aliplus. Prodhimi i lartë që arrihet me Aliplus kërkon
        vëmendje të veçantë ndaj mineraleve.
      </>
    ),
  },
] as const;

const packFormats = [
  {
    label: "Thes 22 kg",
    detail: "1 thes për 1 ton drithëra që do të trajtohen me Aliplus",
  },
  {
    label: "Paletë 50 thasë",
    detail: "50 thasë për 50 ton drithëra",
  },
  {
    label: "Big Bag 1100 kg",
    detail: "Për 50 ton drithëra që do të trajtohen me Aliplus",
  },
] as const;

const objectives = [
  "prebiotikë, probiotikë",
  "ripërtypje, pështymëzim",
  "qetësia e kafshëve",
  "rritja e vlerave ushqyese të drithërave",
  "metabolizëm, imunitet",
  "cilësi dhe sasi më e madhe e prodhimit",
  "dhe më shumë…",
] as const;

function StrongLead({ children }: { children: ReactNode }) {
  return (
    <p className="guide-prose text-center text-base leading-relaxed text-text sm:text-lg [&_strong]:font-semibold [&_strong]:text-dark">
      {children}
    </p>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function UsageGuidePage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="hero-pasture relative isolate overflow-hidden">
        <Image
          src="/guide-hero.jpg"
          alt="Fushë drithërash — udhëzuesi i përdorimit Aliplus"
          fill
          priority
          className="object-cover object-[center_55%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/30 to-dark/60"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(78svh,720px)] items-center justify-center px-5 pb-28 pt-36">
          <div className="hero-content text-center">
            <p className="pfl-subheading text-white/85!">Udhëzuesi</p>
            <h1 className="hero-stamp hero-stamp--base text-[3.25rem] sm:text-[5rem] lg:text-[7rem]">
              Usage Guide
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-xl leading-snug text-white sm:text-2xl">
              Si të përgatisni, ruani dhe shpërndani drithërat Aliplus në fermën
              tuaj — hap pas hapi.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="/calculator" className="hero-pill hero-pill--green">
                Llogarit racionin
              </Link>
              <Link href="/products/aliplus" className="hero-pill hero-pill--pink">
                Rreth produktit
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

      {/* 2 · Three-column usage — cream panel + cow illustration */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <h2 className="pfl-h2 mx-auto mb-10 max-w-4xl text-center text-forest lg:mb-14">
            Përdorimi i drithërave Aliplus, ushqim me performancë të lartë, në
            fermën tuaj
          </h2>

          <div className="guide-panel rounded-[28px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
              {usageColumns.map((col) => (
                <article key={col.title} className="text-center">
                  <div className="relative mx-auto mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={col.src}
                      alt={col.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="pfl-h5 mx-auto max-w-[18rem] text-[1.25rem]! lg:text-[1.5rem]!">
                    {col.title}
                  </h3>
                  <div className="mt-4">
                    <StrongLead>{col.body}</StrongLead>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:mt-14">
            <Image
              src="/imgs/guide-cow.svg"
              alt=""
              width={280}
              height={158}
              className="h-auto w-[220px] sm:w-[280px]"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* 3 · Preparation */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pfl-subheading">Hapi 1</p>
            <h2 className="pfl-h2 text-forest">
              Përgatitja e drithërave të trajtuara me Aliplus
            </h2>
            <StrongLead>
              Aliplus ka një zbatim shumë të <strong>thjeshtë</strong> dhe është
              i <strong>lehtë</strong> për <strong>përdorim</strong>. Për{" "}
              <strong>përgatitjen</strong> e drithërave të trajtuara me Aliplus,{" "}
              <strong>drithërat e disponueshme lokalisht</strong> (grurë, elb,
              tërshërë, misër kokërr i lagësht ose i thatë, tritikale, thekër,
              spelte, bizele, përzierje drithërash ose nënprodukte
              drithërash…) <strong>bluhen imët</strong> ose{" "}
              <strong>shtypen</strong>,{" "}
              <strong>pastaj përzihen me Aliplus</strong> (
              <strong>
                1 ton drithëra të bluara për 1 thes Aliplus prej 22 kg
              </strong>
              ). Pastaj <strong>rregullohet uji</strong> për të arritur një{" "}
              <strong>nivel lagështie</strong> rreth <strong>24%</strong>. Është{" "}
              <strong>gati për ruajtje</strong>!
            </StrongLead>

            <div className="guide-note mt-8 text-left">
              <p className="text-base leading-relaxed text-text sm:text-lg">
                <strong className="font-semibold uppercase tracking-wide text-pine">
                  Shënim:
                </strong>{" "}
                drithërat e trajtuara me Aliplus mund të përgatiten me mjetet
                tuaja ose të trajtohen në fermë nga një ofrues i jashtëm
                shërbimi.
              </p>
            </div>
          </div>

          {/* Packaging formats */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3 lg:mt-16">
            {packFormats.map((p) => (
              <div
                key={p.label}
                className="rounded-[20px] border border-olive/25 bg-soft/40 px-6 py-8 text-center"
              >
                <p className="guide-stamp-label">{p.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-text sm:text-lg [&_strong]:font-semibold [&_strong]:text-dark">
            Ju mund t’i trajtoni drithërat tuaja vetë me Aliplus, ose{" "}
            <strong>Aliplus Kosova</strong> ju lidh me ofrues{" "}
            <strong>shërbimesh</strong> të besueshëm në rajonin tuaj për të
            kryer trajtimin e drithërave tuaja me Aliplus.
          </p>
        </div>
      </section>

      {/* 4 · Storage — soft panel */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-20">
          <div className="guide-panel mx-auto max-w-4xl rounded-[28px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="text-center">
              <p className="pfl-subheading">Hapi 2</p>
              <h2 className="pfl-h2 text-forest">
                Ruajtja e drithërave të trajtuara me Aliplus
              </h2>
            </div>

            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
              <div className="product-stamp guide-maturity-stamp shrink-0">
                <span className="product-stamp__num">14</span>
                <span className="product-stamp__label">ditë maturim</span>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-text sm:text-lg [&_strong]:font-semibold [&_strong]:text-dark">
                <p>
                  Koha para përdorimit: <strong>14 ditë</strong> (koha e
                  nevojshme e maturimit të drithërave të trajtuara me Aliplus).
                </p>
                <p>
                  Në drithërat e trajtuara me Aliplus zhvillohen disa{" "}
                  <strong>procese natyrore</strong>. Për të lejuar maturimin e
                  plotë të përzierjes, është e domosdoshme që ajo të qëndrojë{" "}
                  <strong>14 ditë</strong> para se t’u jepet kafshëve.
                </p>
                <p>
                  <strong>
                    Ruajtja/konservimi i drithërave të trajtuara me Aliplus:
                  </strong>{" "}
                  këto drithëra mund të përgatiten për disa muaj paraprakisht,
                  madje edhe një vit më herët. Ato ruhen brenda objektit pa
                  mbulim me plastmasë*. Pastaj ju merrni nga grumbulli i
                  drithërave të trajtuara me Aliplus për racionet e të gjithë
                  ripërtypësve tuaj.
                </p>
                <p>
                  Rekomandohet një{" "}
                  <strong>kalim ushqimor nga racioni klasik prej 10 ditësh</strong>{" "}
                  (jo i domosdoshëm, por i këshillueshëm).
                </p>
                <p>
                  <strong className="uppercase tracking-wide text-pine">
                    Shënim:
                  </strong>{" "}
                  Pas 2 vitesh testimesh, është vërejtur mundësia që drithërat e
                  trajtuara me Aliplus të ruhen edhe jashtë*, pa mbulim, pa
                  humbje cilësie. Ato mund të përdoren gjithashtu si shtresë
                  mbrojtëse për silazhet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Ration prep — text | framed image */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="grid grid-cols-4 items-center gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <p className="pfl-subheading">Hapi 3</p>
              <h2 className="pfl-h2 text-dark">
                Përgatitja e racioneve me Aliplus
              </h2>
              <div className="pfl-content [&_strong]:font-semibold [&_strong]:text-dark">
                <p className="pfl-lead">
                  Në fillim të përdorimit të këtij koncepti në fermën tuaj,
                  fermerët Aliplus ju këshillojnë për të optimizuar racionin
                  tuaj. Sipas prodhimit tuaj dhe mundësive lokale, racionet do
                  të përbëhen nga:{" "}
                  <strong>
                    drithëra të trajtuara me Aliplus (nga 4 kg deri në 15 kg e
                    më shumë)
                  </strong>{" "}
                  dhe mund të përmbajnë edhe silazhe (misër, kallinj misri, bar,
                  jonxhë etj.).
                </p>
                <p className="pfl-lead">
                  <strong>Furnizimi me fibra</strong> (kashtë ose sanë) — pranë
                  drithërave ose të përfshira në racion — është thelbësor për
                  zhvillimin e mirë të mikroorganizmave të rumenit. Fibra mund
                  të përzihet plotësisht ose pjesërisht me racionin, ose të
                  jepet veçmas.
                </p>
                <p className="pfl-lead">
                  Përgatitja e racioneve bëhet me mikser ushqimi ose me mjetet
                  tuaja të zakonshme. Përziejini të gjithë përbërësit në mënyrë{" "}
                  <strong>homogjene</strong>. Do të jetë e nevojshme të
                  përshtaten suplementet CMV duke marrë këshilla nga Aliplus
                  Kosova.
                </p>
                <h5 className="pfl-h5">
                  Racioni juaj Aliplus është i përshtatshëm për të gjithë
                  ripërtypësit tuaj.
                </h5>
                <p className="pfl-lead">
                  Viça nga 30 ditë, mëshqerra, lopë qumështore, lopë për viça,
                  viça për rritje, dema të rinj, lopë për therje etj. Ju mund të
                  shpërndani të njëjtat racione, me sasi të përshtatura për të
                  gjitha kafshët tuaja.
                </p>
              </div>
              <Link
                href="/contact"
                className="hero-pill hero-pill--green mt-8"
              >
                Këshilloju me një fermer
              </Link>
            </div>

            <div className="col-span-4 lg:col-span-6">
              <div className="relative mx-auto aspect-square max-w-[520px] overflow-hidden">
                <Image
                  src="/float-sheep.jpg"
                  alt="Lopë Holstein në kullotë — racion Aliplus"
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[url(/imgs/border-business-edge.png)] bg-cover bg-center"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5b · Distribution */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-20">
          <div className="guide-panel mx-auto max-w-4xl rounded-[28px] px-6 py-12 text-center sm:px-10 lg:px-14 lg:py-16">
            <p className="pfl-subheading">Hapi 4</p>
            <h2 className="pfl-h2 text-forest">
              Shpërndarja e racioneve me Aliplus
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-text sm:text-lg [&_strong]:font-semibold [&_strong]:text-dark">
              <p>
                Shpërndarja e racioneve bëhet me mikser ushqimi ose me mjetet
                tuaja të zakonshme. Përziejeni të gjithë përmbajtjen në mënyrë{" "}
                <strong>homogjene</strong>. Duke marrë parasysh produktivitetin
                e lartë të arritur në qumësht dhe majmëri, do të jetë e
                nevojshme të përshtaten suplementet CMV duke marrë këshilla nga
                Aliplus Kosova.
              </p>
              <p>
                <strong className="uppercase tracking-wide text-pine">
                  Shënim:
                </strong>{" "}
                Sipas llojit të racionit, prodhimit dhe mjeteve të shpërndarjes,
                ju mund t’u jepni kafshëve ushqim deri në{" "}
                <strong>1 herë në javë</strong> (racion i thatë), duke kursyer
                punë dhe lodhje, ose sipas nevojës çdo ditë (racion i lagësht).
              </p>
              <p>
                Drithi i trajtuar me Aliplus është ushqimi ideal për të gjithë
                rumenet. Vlerat e tij ushqyese janë të larta dhe të balancuara (
                <strong>UF, PDIN, PDIE</strong>). Falë cilësive prebiotike, ai
                bëhet mbështetje për zhvillimin e florës dhe faunës së kafshëve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Technical results — green band */}
      <section className="impact-section bg-forest bg-[url(/imgs/bg-graphic-three-column.svg)] bg-left bg-no-repeat">
        <TornEdge flip />

        <div className="container-pfl pb-16 lg:pb-24">
          <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
            <p className="pfl-subheading text-white/80!">Rezultatet</p>
            <h2 className="pfl-h2 text-white">
              Rezultate teknike të jashtëzakonshme
            </h2>
            <p className="mt-3 text-lg leading-snug text-white/90 sm:text-xl">
              Rritje në peshë &amp; cilësi më e mirë e karkasave — rritje e
              përqindjes së yndyrës/proteinës në qumësht, ulje e qelizave
              somatike.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5 text-base leading-relaxed text-white sm:text-lg [&_strong]:font-semibold">
              <p>
                Me Aliplus, ushqimi premium për gjedhët,{" "}
                <strong>racioni dhe metabolizmi optimizohen</strong>, dhe
                rezultatet vërehen shumë shpejt. Kafshët dallohen nga
                profesionistët; në qumësht shihet rritja e cilësisë dhe ulja e
                humbjeve.
              </p>
              <p>
                Në mish, ulet koha e majmërisë, rritet{" "}
                <strong>shtimi ditor në peshë (GMQ)</strong>, pesha totale dhe
                cilësia e karkasave. Aliplus mundëson të prodhosh më shumë dhe
                më mirë me kosto më të ulët — më ekologjike dhe më ekonomike.
              </p>
              <p>
                <strong>14 përbërësit e formulës Aliplus</strong> sjellin
                efekte të ndërlidhura në drithëra, në racion dhe në rumen.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-olive">
                    Majmëri (tipike)
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/90">
                    <li>GMQ ~ 2,8 kg</li>
                    <li>−30 deri −40 ditë majmëri</li>
                    <li>+30 kg peshë karkase</li>
                    <li>+3 % sasi mishi</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-olive">
                    Qumësht (tipike)
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-white/90">
                    <li>Prodhim ~ 34 kg</li>
                    <li>TP deri në 34</li>
                    <li>TB deri në 41</li>
                    <li>Aftësi djathi e optimizuar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-pine/55 p-8 sm:p-10">
              <h3 className="guide-obj-heading">
                10 objektivët teknike të Aliplus janë:
              </h3>
              <ul className="mt-6 space-y-3">
                {objectives.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-white sm:text-lg"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base leading-relaxed text-white/85">
                Këto ndihmojnë për të arritur autonomi proteinike, për të
                rritur sasinë dhe cilësinë e prodhimit dhe për të ulur kostot e
                ushqimit.
              </p>
            </div>
          </div>
        </div>

        <TornEdge />
      </section>

      {/* 7 · Closing CTA */}
      <section className="bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pfl-subheading">Hapi tjetër</p>
            <h2 className="pfl-h2 text-dark">
              Filloni me racionin tuaj Aliplus
            </h2>
            <p className="pfl-lead">
              Llogaritni sasinë e rekomanduar ose kontaktoni një fermer Aliplus
              për të planifikuar kalimin ushqimor në fermën tuaj.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/calculator" className="hero-pill hero-pill--green">
                Hap kalkulatorin
              </Link>
              <Link href="/contact" className="hero-pill hero-pill--pink">
                Kontakto Aliplus Kosova
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
