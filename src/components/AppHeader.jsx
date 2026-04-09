"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import BrandLogo from "./BrandLogo";
import LocaleDropdown from "./LocaleDropdown";
import ThemeDropdown from "./ThemeDropdown";

export default function AppHeader() {
  const { locale, t } = useLocale();
  const { localizePath } = useLocalePaths();
  const pathname = usePathname();

  const navLinks = [
    { slug: "how-it-works", label: t("nav.howItWorks") },
    { slug: "faq", label: t("nav.faq") },
  ];

  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="app-header-main">
          <Link className="app-brand" href={`/${locale}`}>
            <BrandLogo
              context="chrome"
              className="app-brand-logo"
              alt="Fiber Link"
            />
            <span className="app-brand-name">Fiber Link</span>
          </Link>

          <nav className="app-nav" aria-label="Primary">
            {navLinks.map((item) => {
              const href = localizePath(item.slug);
              const active = pathname === href;
              return (
                <Link
                  key={item.slug}
                  className={`app-nav-link${active ? " active" : ""}`}
                  href={href}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="app-header-tools">
          <Link className="app-header-cta" href={localizePath("request-demo")}>
            {t("nav.requestDemo")}
          </Link>
          <LocaleDropdown />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
}
