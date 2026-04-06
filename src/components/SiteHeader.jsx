import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiGithub, FiMoon, FiSun, FiMonitor, FiMenu, FiX } from "react-icons/fi";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useTheme } from "../contexts/ThemeContext";
import { navItems, supportedLocales } from "../i18n/strings";
import { useLocale } from "../contexts/LocaleContext";
import { useEffect, useState } from "react";

const SiteHeader = () => {
  const { t, locale } = useLocale();
  const { switchLocalePath, localizePath } = useLocalePaths();
  const { setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const base = `/${locale}`;
  const activePath = pathname.replace(base, "") || "/";

  const themeLabels = {
    light: t("labels.light") || "Light",
    dark: t("labels.dark") || "Dark",
    system: t("labels.system") || "System",
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpen(false);
  }, [pathname, locale]);

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

  return (
    <header className="site-header">
      <div className="header-shell">
        <div className="brand-wrap">
          <Link className="brand" to={`/${locale}`}>
            {t("brand")}
          </Link>
          <nav className="locale-menu desktop-only" aria-label="Locale and source">
            <div className="theme-switch">
              <button
                type="button"
                aria-label="Toggle dark mode menu"
                className="micro-btn"
                onClick={() => setOpen((current) => !current)}
              >
                <span>{t("labels.theme")}</span>
                <FiChevronDown size={16} />
              </button>
              <div className={`dropdown ${open ? "open" : ""}`}>
                <button type="button" onClick={() => setMode("system")}>
                  <FiMonitor size={15} /> {themeLabels.system}
                </button>
                <button type="button" onClick={() => setMode("light")}>
                  <FiSun size={15} /> {themeLabels.light}
                </button>
                <button type="button" onClick={() => setMode("dark")}>
                  <FiMoon size={15} /> {themeLabels.dark}
                </button>
              </div>
            </div>
            <div className="locale-switch" aria-label={t("labels.locale") || "Language"}>
              {supportedLocales.map((item) => (
                <Link key={item} to={switchLocalePath(item, pathname.replace(/^\/[^/]+/, ""))} className={locale === item ? "active-locale" : ""}>
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
            <a className="source-link" href="https://github.com/Keith-CY/fiber-link" target="_blank" rel="noreferrer">
              <FiGithub size={16} /> {t("nav.source")}
            </a>
          </nav>
        </div>
        <nav className="main-nav desktop-only" aria-label="Main">
          {navLinks}
        </nav>
        <motion.div className="header-cta desktop-only" whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
          <Link className="btn-primary" to={localizePath("request-demo") || `${base}/request-demo`}>
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
                  <button type="button" className="mobile-chip" onClick={() => setMode("system")}><FiMonitor size={15} /> {themeLabels.system}</button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("light")}><FiSun size={15} /> {themeLabels.light}</button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("dark")}><FiMoon size={15} /> {themeLabels.dark}</button>
                </div>
                <div className="locale-switch mobile-locale-switch" aria-label={t("labels.locale") || "Language"}>
                  {supportedLocales.map((item) => (
                    <Link key={item} to={switchLocalePath(item, pathname.replace(/^\/[^/]+/, ""))} className={locale === item ? "active-locale" : ""}>
                      {item.toUpperCase()}
                    </Link>
                  ))}
                </div>
                <a className="source-link" href="https://github.com/Keith-CY/fiber-link" target="_blank" rel="noreferrer">
                  <FiGithub size={16} /> {t("nav.source")}
                </a>
                <Link className="btn-primary mobile-request-btn" to={localizePath("request-demo") || `${base}/request-demo`}>
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
