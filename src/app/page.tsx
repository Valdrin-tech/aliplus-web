import { Hero } from "@/components/home/Hero";
import { FeatureSpotlight } from "@/components/home/FeatureSpotlight";
import { ImpactCards } from "@/components/home/ImpactCards";
import { SystemSpotlight } from "@/components/home/SystemSpotlight";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureSpotlight />
      <ImpactCards />
      <SystemSpotlight />
    </>
  );
}
