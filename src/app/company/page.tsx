import type { Metadata } from "next";
import { CompanyScience } from "@/components/company/CompanyScience";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: `About ${site.legalName} — the Aliplus concept in Kosovo. Farm-level nutrition that valorizes local grains for cattle, sheep and goats.`,
};

export default function CompanyPage() {
  return <CompanyScience />;
}
