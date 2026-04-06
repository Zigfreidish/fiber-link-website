import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiGithub, FiMenu, FiMoon, FiMonitor, FiSun, FiX } from "react-icons/fi";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useTheme } from "../contexts/ThemeContext";
import { navItems, supportedLocales } from "../i18n/strings";
import { useLocale } from "../contexts/LocaleContext";
import { useEffect, useRef, useState } from "react";

const SiteHeader = () => {
  const { t, locale } = useLocale();
  const { switchLocalePath, localizePath } = useLocalePaths();
  const { setMode, resolvedMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const utilityRef = useRef(null);
  const base = `/${locale}`;

  const themeLabels = {
    light: t("labels.light") || "Light",
    dark: t("labels.dark") || "Dark",
    system: t("labels.system") || "System",
  };

  const activePath = pathname.replace(base, "") || "/";

  useEffect(() => {
    setMobileOpen(false);
    setOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    if (!open) return;

    const handleDocumentClick = (event) => {
      const utilityTarget = utilityRef.current;
      if (!utilityTarget?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [open]);

  const navLinks = navItems.map((item) => {
    const path = item.slug ? `${base}/${item.slug}` : base;
    return (
      <NavLink
        key={item.key}
        to={path}
        className={({ isActive }) => `nav-pill ${isActive ? "active" : ""} ${activePath === path.replace(base, "") ? "active" : ""}`}
        end={item.slug === ""}
      >
        <motion.span whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
          {t(`nav.${item.key}`)}
        </motion.span>
      </NavLink>
    );
  });

  const utilityModeIcon = resolvedMode === "dark" ? <FiMoon size={15} /> : <FiSun size={15} />;

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" to={`/${locale}`}>
          {t("brand")}
        </Link>

        <nav className="main-nav" aria-label="Main">
          {navLinks}
        </nav>

        <div className="header-tools" ref={utilityRef}>
          <div className="utility-pill-wrap">
            <button type="button" className="utility-pill" aria-label={t("labels.locale") || "Language and theme menu"} onClick={() => setOpen((current) => !current)}>
              {utilityModeIcon}
              <span>{t("labels.theme")}</span>
              <FiChevronDown size={14} className={open ? "open" : ""} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="utility-dropdown"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="utility-section">
                    <p>{t("labels.theme")}</p>
                    <button type="button" className={resolvedMode === "system" ? "active" : ""} onClick={() => setMode("system")}>
                      <FiMonitor size={14} />
                      {themeLabels.system}
                    </button>
                    <button type="button" className={resolvedMode === "light" ? "active" : ""} onClick={() => setMode("light")}>
                      <FiSun size={14} />
                      {themeLabels.light}
                    </button>
                    <button type="button" className={resolvedMode === "dark" ? "active" : ""} onClick={() => setMode("dark")}>
                      <FiMoon size={14} />
                      {themeLabels.dark}
                    </button>
                  </div>

                  <div className="utility-section">
                    <p>{t("labels.locale") || "Language"}</p>
                    <div className="utility-locale-links" aria-label={t("labels.locale") || "Language"}>
                      {supportedLocales.map((item) => (
                        <Link
                          key={item}
                          to={switchLocalePath(item, pathname.replace(/^\/[^/]+/, ""))}
                          className={locale === item ? "active-locale" : ""}
                          onClick={() => setOpen(false)}
                        >
                          {item.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <a
                    className="utility-link"
                    href="https://github.com/Keith-CY/fiber-link"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <FiGithub size={16} />
                    {t("nav.source")}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div className="header-cta" whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
            <Link className="btn-primary" to={localizePath("request-demo")}>
              {t("nav.requestDemo")}
            </Link>
          </motion.div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileOpen ? (t("labels.closeMenu") || "Close menu") : (t("labels.openMenu") || "Open menu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
          >
            <div className="mobile-menu-inner">
              <nav className="mobile-nav" aria-label="Mobile Main">
                {navLinks}
              </nav>
              <div className="mobile-meta">
                <div className="mobile-theme-row">
                  <button type="button" className="mobile-chip" onClick={() => setMode("system")}>
                    <FiMonitor size={15} /> {themeLabels.system}
                  </button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("light")}>
                    <FiSun size={15} /> {themeLabels.light}
                  </button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("dark")}>
                    <FiMoon size={15} /> {themeLabels.dark}
                  </button>
                </div>
                <div className="mobile-locale-switch" aria-label={t("labels.locale") || "Language"}>
                  {supportedLocales.map((item) => (
                    <Link key={item} to={switchLocalePath(item, pathname.replace(/^\/[^/]+/, ""))} className={locale === item ? "active-locale" : ""}>
                      {item.toUpperCase()}
                    </Link>
                  ))}
                </div>
                <a className="source-link" href="https://github.com/Keith-CY/fiber-link" target="_blank" rel="noreferrer">
                  <FiGithub size={16} /> {t("nav.source")}
                </a>
                <Link className="btn-primary mobile-request-btn" to={localizePath("request-demo")}>
                  {t("nav.requestDemo")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
