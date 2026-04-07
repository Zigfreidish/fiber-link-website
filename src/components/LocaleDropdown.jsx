"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { supportedLocales } from "../i18n/strings";

const LABELS = {
  en: { short: "EN", name: "English" },
  zh: { short: "ZH", name: "中文" },
  ja: { short: "JP", name: "日本語" },
  ko: { short: "KO", name: "한국어" },
};

export default function LocaleDropdown() {
  const { locale } = useLocale();
  const { switchLocalePath } = useLocalePaths();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="locale-dd-wrap">
      <button
        className={`locale-dd-trigger${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        aria-expanded={open}
      >
        <FiGlobe size={15} />
        <span className="locale-dd-cur">{LABELS[locale]?.short ?? locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="locale-dd-menu" role="menu">
          {supportedLocales.map((loc) => (
            <Link
              key={loc}
              href={switchLocalePath(loc)}
              role="menuitem"
              className={`locale-dd-item${loc === locale ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="locale-dd-short">{LABELS[loc].short}</span>
              <span className="locale-dd-name">{LABELS[loc].name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
