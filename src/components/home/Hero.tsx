import { CinematicHero } from "@/components/layout/CinematicHero";

export function Hero() {
  return (
    <CinematicHero
      image="/hero-aliplus-bag.png"
      imageAlt="Aliplus feed bag standing in a pasture at sunset"
      imagePosition="80% 62%"
      unoptimized
      crumbs={["Products", "Aliplus"]}
      title={"Aliplus\nFeed Additive"}
      tagline="More from every ration."
      body="Feed is your biggest cost — it does not have to be your biggest waste. Mix Aliplus with cereals you already grow to raise protein and energy, support the rumen, and turn every bite into measurable performance."
      cta={{ href: "/usage-guide", label: "Usage Guide" }}
      note="Most producers start with the guide — mix at 22 kg per ton, mature for 14 days, then feed."
    />
  );
}
