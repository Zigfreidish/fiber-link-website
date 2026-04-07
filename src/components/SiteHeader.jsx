"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGlobe, FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths, localeFromPath } from "../hooks/useLocalePaths";
import { useTheme } from "../contexts/ThemeContext";
import { supportedLocales } from "../i18n/strings";
import { useMemo, useState } from "react";

const SiteHeader = () => {
  const { t, locale } = useLocale();
  const { localizePath, currentLocale, switchLocalePath } = useLocalePaths();
  const { setMode, resolvedMode } = useTheme();
  const pathname = usePathname();
  const [localeOpen, setLocaleOpen] = useState(false);

  const currentSlug = useMemo(() => localeFromPath(pathname), [pathname]);

  const cycleMode = () => {
    if (resolvedMode === "system") setMode("light");
    else if (resolvedMode === "light") setMode("dark");
    else setMode("system");
  };

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" href={`/${currentLocale}`} aria-label={t("brand")}>
          <div className="brand-mark-wrap">
            <span className="brand-mark-heat" aria-hidden="true" />
            <img className="brand-mark" src="/brand/fiber-link-logo.jpg" alt="Fiber Link logo" />
          </div>
          <span>{t("brand")}</span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          <Link className={`nav-pill ${currentSlug === "" ? "active" : ""}`} href={localizePath("")}>
            {t("nav.home")}
          </Link>
          <Link
            className={`nav-pill ${currentSlug === "request-demo" ? "active" : ""}`}
            href={localizePath("request-demo")}
          >
            {t("nav.requestDemo")}
          </Link>
        </nav>

        <div className="header-tools">
          <button type="button" className="micro-btn" onClick={cycleMode} aria-label={t("labels.theme")}>
            {resolvedMode === "dark" ? (
              <FiMoon size={15} />
            ) : resolvedMode === "light" ? (
              <FiSun size={15} />
            ) : (
              <FiMonitor size={15} />
            )}
          </button>

          <div className="locale-switch" style={{ position: "relative" }}>
            <button
              type="button"
              className="micro-btn"
              onClick={() => setLocaleOpen((open) => !open)}
              aria-label={t("labels.locale")}
            >
              <FiGlobe size={15} />
            </button>
            {localeOpen && (
              <div className="inno-locale-dropdown locale-dropdown">
                {supportedLocales.map((item) => (
                  <Link
                    key={item}
                    href={switchLocalePath(item, currentSlug)}
                    className={item === locale ? "active-locale" : ""}
                    onClick={() => setLocaleOpen(false)}
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
