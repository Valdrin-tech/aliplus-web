import type { Metadata } from "next";
import { CompanyApproach } from "@/components/company/CompanyApproach";
import { localePage, type LocaleParams } from "@/i18n/page-params";
import "./company.css";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.company.title, description: t.meta.pages.company.description };
}

export default function CompanyPage() {
  return <CompanyApproach />;
}
