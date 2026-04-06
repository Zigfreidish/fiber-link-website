import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiGithub, FiMenu, FiMoon, FiMonitor, FiSun, FiX, FiGlobe } from "react-icons/fi";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useTheme } from "../contexts/ThemeContext";
import { navItems, supportedLocales } from "../i18n/strings";
import { useLocale } from "../contexts/LocaleContext";
import { useEffect, useRef, useState } from "react";

const SiteHeader = () => {
  const { t, locale } = useLocale();
  const { switchLocalePath, localizePath } = useLocalePaths();
  const { setMode, resolvedMode } = useTheme();
  const [openTheme, setOpenTheme] = useState(false);
  const [openLocale, setOpenLocale] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const themeRef = useRef(null);
  const localeRef = useRef(null);

  const base = `/${locale}`;
  const activePath = pathname.replace(base, "") || "/";

  const themeLabel = {
    light: t("labels.light") || "Light",
    dark: t("labels.dark") || "Dark",
    system: t("labels.system") || "System",
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenTheme(false);
    setOpenLocale(false);
  }, [pathname, locale]);

  useEffect(() => {
    const closeAllMenus = () => {
      setOpenTheme(false);
      setOpenLocale(false);
    };

    const handleDocumentClick = (event) => {
      const target = event.target;
      if (!themeRef.current?.contains(target) && !localeRef.current?.contains(target)) {
        closeAllMenus();
      }
    };

    if (openTheme || openLocale) {
      document.addEventListener("mousedown", handleDocumentClick);
      return () => document.removeEventListener("mousedown", handleDocumentClick);
    }

    return undefined;
  }, [openTheme, openLocale]);

  const navLinks = navItems.map((item) => {
    const path = item.slug ? `${base}/${item.slug}` : base;
    return (
      <NavLink
        key={item.key}
        to={path}
        className={({ isActive }) =>
          `nav-pill ${isActive ? "active" : ""} ${activePath === path.replace(base, "") ? "active" : ""}`
        }
        end={item.slug === ""}
      >
        <motion.span whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
          {t(`nav.${item.key}`)}
        </motion.span>
      </NavLink>
    );
  });

  const isDark = resolvedMode === "dark";
  const isSystem = resolvedMode === "system";

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand" to={`/${locale}`} aria-label={t("brand")}>
          <img className="brand-mark" src="/brand/fiber-link-logo.jpg" alt="Fiber Link logo" />
          <span>{t("brand")}</span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          {navLinks}
        </nav>

        <div className="header-tools">
          <div className="utility-pill-wrap" ref={themeRef}>
            <button
              type="button"
              className="utility-pill utility-icon-pill"
              aria-label={t("labels.theme") || "Theme"}
              onClick={() => {
                setOpenLocale(false);
                setOpenTheme((current) => !current);
              }}
            >
              {isDark ? <FiMoon size={15} /> : <FiSun size={15} />}
              <FiChevronDown size={14} className={openTheme ? "open" : ""} />
            </button>
            <AnimatePresence>
              {openTheme && (
                <motion.div
                  className="utility-dropdown"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <button type="button" className={isSystem ? "active" : ""} onClick={() => setMode("system")}>
                    <FiMonitor size={14} /> {themeLabel.system}
                  </button>
                  <button type="button" className={resolvedMode === "light" ? "active" : ""} onClick={() => setMode("light")}>
                    <FiSun size={14} /> {themeLabel.light}
                  </button>
                  <button type="button" className={resolvedMode === "dark" ? "active" : ""} onClick={() => setMode("dark")}>
                    <FiMoon size={14} /> {themeLabel.dark}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="utility-pill-wrap" ref={localeRef}>
            <button
              type="button"
              className="utility-pill utility-icon-pill"
              aria-label={t("labels.locale") || "Language"}
              onClick={() => {
                setOpenTheme(false);
                setOpenLocale((current) => !current);
              }}
            >
              <FiGlobe size={15} />
              <FiChevronDown size={14} className={openLocale ? "open" : ""} />
            </button>
            <AnimatePresence>
              {openLocale && (
                <motion.div
                  className="utility-dropdown locale-dropdown"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="utility-locale-links" aria-label={t("labels.locale") || "Language"}>
                    {supportedLocales.map((item) => (
                      <Link
                        key={item}
                        to={switchLocalePath(item, pathname.replace(/^\/[^/]+/, ""))}
                        className={locale === item ? "active-locale" : ""}
                        onClick={() => setOpenLocale(false)}
                      >
                        {item.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            className="utility-link"
            href="https://github.com/Keith-CY/fiber-link"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>

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
                    <FiMonitor size={15} /> {themeLabel.system}
                  </button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("light")}>
                    <FiSun size={15} /> {themeLabel.light}
                  </button>
                  <button type="button" className="mobile-chip" onClick={() => setMode("dark")}>
                    <FiMoon size={15} /> {themeLabel.dark}
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
                  <FiGithub size={16} /> GitHub
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