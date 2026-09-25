import { Hero } from "@/components/home/Hero";
import { ImpactCards } from "@/components/home/ImpactCards";
import { HomeImageBreak } from "@/components/home/HomeImageBreak";
import { SystemSpotlight } from "@/components/home/SystemSpotlight";
import { HomeClosing } from "@/components/home/HomeClosing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactCards />
      <HomeImageBreak />
      <SystemSpotlight />
      <HomeClosing />
    </>
  );
}
