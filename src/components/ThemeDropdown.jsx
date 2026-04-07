"use client";

import { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";

export default function ThemeDropdown() {
  const { mode, setMode, resolvedMode } = useTheme();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const OPTIONS = [
    { key: "light",  label: t("labels.light"),  Icon: FiSun },
    { key: "dark",   label: t("labels.dark"),   Icon: FiMoon },
    { key: "system", label: t("labels.system"), Icon: FiMonitor },
  ];

  const ActiveIcon =
    resolvedMode === "dark" ? FiMoon : resolvedMode === "light" ? FiSun : FiMonitor;

  const activeLabel = OPTIONS.find((o) => o.key === mode)?.label ?? mode;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="theme-dd-wrap">
      <button
        className={`locale-dd-trigger${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={t("labels.theme")}
        aria-expanded={open}
      >
        <ActiveIcon size={14} />
        <span className="locale-dd-cur">{activeLabel}</span>
      </button>

      {open && (
        <div className="locale-dd-menu theme-dd-menu" role="menu">
          {OPTIONS.map(({ key, label, Icon }) => (
            <button
              key={key}
              role="menuitem"
              className={`locale-dd-item${mode === key ? " active" : ""}`}
              onClick={() => { setMode(key); setOpen(false); }}
            >
              <Icon size={13} className="theme-dd-icon" />
              <span className="locale-dd-name">{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
