"use client";

import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";

export default function AppFooter() {
  const { locale, t } = useLocale();
  const { localizePath } = useLocalePaths();
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div className="footer-left">
          <Link className="footer-brand" href={`/${locale}`}>
            <img
              className="footer-brand-logo"
              src="/brand/fiber-link-logo.png"
              alt="Fiber Link"
            />
            <span className="footer-brand-name">Fiber Link</span>
          </Link>
          <span className="footer-sep" aria-hidden="true" />
          <span className="footer-copyright">
            © {year}{" "}
            <a
              href="https://www.random-walk.co.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-copyright-link"
            >
              Random Walk
            </a>
          </span>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a
            className="footer-link"
            href="https://github.com/Keith-CY/fiber-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("nav.source")}
          </a>
          <span className="footer-dot" aria-hidden="true" />
          <Link className="footer-link" href={localizePath("privacy")}>
            {t("nav.privacy")}
          </Link>
          <span className="footer-dot" aria-hidden="true" />
          <Link className="footer-link" href={localizePath("tos")}>
            {t("nav.tos")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
