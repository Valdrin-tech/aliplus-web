import type { Metadata } from "next";
import { UsageGuideScience } from "@/components/guide/UsageGuideScience";

export const metadata: Metadata = {
  title: "Usage Guide",
  description:
    "Prepare Aliplus on the farm — mix at 22 kg per ton of cereals, mature for 14 days, then feed with the equipment you already have.",
};

export default function UsageGuidePage() {
  return <UsageGuideScience />;
}
