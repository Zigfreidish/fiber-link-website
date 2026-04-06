import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiGlobe, FiMonitor, FiMoon, FiSend, FiSun } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useTheme } from "../contexts/ThemeContext";
import { supportedLocales } from "../i18n/strings";
import HeroHeatmapCanvas from "../components/HeroHeatmapCanvas";

const avatarPool = [
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/hannah_lee/160/107_2.png",
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/mira_chen/160/94_2.png",
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/maya_tan/160/100_2.png",
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/ruby_ng/160/105_2.png",
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/felix_yu/160/108_2.png",
  "https://demo.fiberlink.me/user_avatar/demo.fiberlink.me/claire_ding/160/109_2.png",
];

const HomePage = () => {
  const { t, dict, locale } = useLocale();
  const { localizePath, currentLocale, switchLocalePath } = useLocalePaths();
  const { setMode, resolvedMode } = useTheme();
  const [email, setEmail] = useState("");
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const updates = useMemo(() => dict.hero?.updates || [], [dict]);

  const modeIcon =
    resolvedMode === "dark" ? <FiMoon size={16} /> : resolvedMode === "light" ? <FiSun size={16} /> : <FiMonitor size={16} />;

  const cycleMode = () => {
    if (resolvedMode === "system") setMode("light");
    else if (resolvedMode === "light") setMode("dark");
    else setMode("system");
  };

  return (
    <main className="section-wrap innoflow-page inno-shell">
      <section className="innoflow-hero section">
        <HeroHeatmapCanvas />

        <div className="innoflow-headline">
          <div className="inno-top-logo-wrap">
            <span className="brand-mark-heat" aria-hidden="true" />
            <img className="inno-top-logo" src="/brand/fiber-link-logo.jpg" alt="Fiber Link logo" />
          </div>

          <div className="inno-top-left">
            <Link className="inno-top-link" to={localizePath("")}>{t("nav.home")}</Link>
          </div>

          <Link className="inno-top-link request-demo-link-top" to={localizePath("request-demo")}>
            {t("nav.requestDemo")}
          </Link>

          <button type="button" className="top-icon-btn" onClick={cycleMode} aria-label={t("labels.theme")}>
            {modeIcon}
          </button>

          <div className="top-locale-wrap">
            <button
              type="button"
              className="top-icon-btn"
              onClick={() => setLocaleMenuOpen((open) => !open)}
              aria-label={t("labels.locale")}
            >
              <FiGlobe size={16} />
            </button>

            <AnimatePresence>
              {localeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="inno-locale-drawer"
                >
                  {supportedLocales.map((item) => (
                    <Link
                      key={item}
                      className={item === currentLocale || item === locale ? "active" : ""}
                      to={switchLocalePath(item, "") }
                      onClick={() => setLocaleMenuOpen(false)}
                    >
                      {item.toUpperCase()}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="innoflow-main">
          <p className="inno-eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="inno-description">{t("hero.description")}</p>

          <div className="inno-mailbox">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={locale === "zh" ? "you@email.com" : "Your email"}
              required
              aria-label="Email"
            />
            <Link className="inno-mailbox-link inno-mailbox-button" to={localizePath("request-demo")}>
              {t("labels.requestDemoTitle")} <FiSend size={14} />
            </Link>
            <a className="inno-visit-demo" href="https://demo.fiberlink.me" target="_blank" rel="noreferrer">
              Visit Demo
            </a>
          </div>

          <div className="inno-proof">
            <div className="avatar-stack" aria-hidden="true">
              {avatarPool.slice(0, 4).map((avatar) => (
                <img key={avatar} src={avatar} alt="" />
              ))}
            </div>
            <span>{t("hero.footerTag")}</span>
          </div>
        </div>
      </section>

      <section className="section section-surface innoflow-feed">
        <div className="announcements-head">
          <span className="inno-dot" />
          <span>{t("hero.updateTitle")}</span>
        </div>

        <div className="inno-feed">
          {updates.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="inno-item"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="inno-item-pill">
                <FiCalendar size={14} />
                {item.date}
              </div>
              <div className="inno-item-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <a className="inno-item-author" href={item.authorUrl || "#"}>
                <img
                  src={avatarPool[index % avatarPool.length]}
                  alt="author"
                  style={{ width: 28, height: 28, borderRadius: 999, objectFit: "cover" }}
                />
                <span>{item.author}</span>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
