import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactScene } from "@/components/contact/ContactScene";
import { localePage, type LocaleParams } from "@/i18n/page-params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.contact.title, description: t.meta.pages.contact.description };
}

export default function ContactPage() {
  return (
    <ContactScene>
      <ContactForm />
    </ContactScene>
  );
}
