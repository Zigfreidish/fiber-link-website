"use client";

import { usePathname } from "next/navigation";
import { supportedLocales, defaultLocale } from "../i18n/strings";

const supportedPattern = new RegExp(`^/(${supportedLocales.join("|")})(?:/|$)`);

export const localeFromPath = (pathname = "") => {
  const match = pathname.match(supportedPattern);
  return match ? match[1] : defaultLocale;
};

export const localizeSlugPath = (locale, pathName = "") => {
  const slug = pathName.replace(supportedPattern, "").replace(/^\//, "");
  return slug ? `/${locale}/${slug}` : `/${locale}`;
};

export const useLocalePaths = () => {
  const pathname = usePathname();
  const currentLocale = localeFromPath(pathname);

  const switchLocalePath = (nextLocale, nextSlug = "") => {
    const slug = nextSlug
      ? nextSlug.replace(/^\//, "")
      : pathname.replace(supportedPattern, "").replace(/^\//, "");

    return slug ? `/${nextLocale}/${slug}` : `/${nextLocale}`;
  };

  const localizePath = (nextSlug = "") =>
    nextSlug ? switchLocalePath(currentLocale, nextSlug) : localizeSlugPath(currentLocale, pathname);

  return {
    currentLocale,
    isLocalePath: (locale) => currentLocale === locale,
    switchLocalePath,
    localizePath,
    localeFromPath,
  };
};
