import type { Metadata } from "next";
import { AliplusApproach } from "@/components/product/AliplusApproach";

export const metadata: Metadata = {
  title: "Aliplus",
  description:
    "Aliplus is a farm-ready blend of fourteen natural components, mixed at 22 kg per ton of cereals and matured for 14 days.",
};

export default function AliplusProductPage() {
  return <AliplusApproach />;
}
