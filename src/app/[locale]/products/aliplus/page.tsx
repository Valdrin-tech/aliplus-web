import type { Metadata } from "next";
import { AliplusStory } from "@/components/product/AliplusStory";
import { localePage, type LocaleParams } from "@/i18n/page-params";
import "./aliplus.css";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.aliplus.title, description: t.meta.pages.aliplus.description };
}

export default function AliplusProductPage() {
  return <AliplusStory />;
}
