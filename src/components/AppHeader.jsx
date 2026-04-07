"use client";

import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import LocaleDropdown from "./LocaleDropdown";
import ThemeDropdown from "./ThemeDropdown";

export default function AppHeader() {
  const { locale } = useLocale();

  return (
    <header className="app-header">
      <div className="app-header-inner">
        {/* ── left: logo + brand ── */}
        <Link className="app-brand" href={`/${locale}`}>
          <img
            className="app-brand-logo"
            src="/brand/fiber-link-logo.png"
            alt="Fiber Link"
          />
          <span className="app-brand-name">Fiber Link</span>
        </Link>

        {/* ── right: locale dropdown + theme dropdown ── */}
        <div className="app-header-tools">
          <LocaleDropdown />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
}
