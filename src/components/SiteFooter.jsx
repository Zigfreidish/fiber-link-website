"use client";

import Link from "next/link";
import { FiHeart, FiMail, FiArrowUp } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";

const SiteFooter = () => {
  const { t } = useLocale();
  const { localizePath } = useLocalePaths();

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p>{t("footer.text")}</p>
        <p className="footer-legal">{t("footer.legal")}</p>
        <div className="footer-rows">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer-link"
          >
            <FiArrowUp size={16} /> Top
          </a>
          <Link className="footer-link" href={localizePath("request-demo")}>
            <FiMail size={16} /> {t("nav.requestDemo")}
          </Link>
          <a className="footer-link" href="https://github.com/Keith-CY/fiber-link" target="_blank" rel="noreferrer">
            <FiHeart size={16} /> {t("nav.source")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
