"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { withLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

/** next/link that prefixes internal hrefs with the active locale. */
export function Link({ href, ...rest }: Props) {
  const locale = useLocale();
  return <NextLink href={withLocale(locale, href)} {...rest} />;
}

export default Link;
