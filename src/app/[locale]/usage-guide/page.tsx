import type { Metadata } from "next";
import { UsageGuide } from "@/components/guide/UsageGuide";
import { localePage, type LocaleParams } from "@/i18n/page-params";
import "./usage-guide.css";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.usageGuide.title, description: t.meta.pages.usageGuide.description };
}

export default function UsageGuidePage() {
  return <UsageGuide />;
}
