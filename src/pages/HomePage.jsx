import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { FiArrowRight, FiCalendar, FiMessageCircle, FiHeart } from "react-icons/fi";
import FiberReveal from "../components/FiberReveal";
import HeroHeatmapCanvas from "../components/HeroHeatmapCanvas";

const HomePage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();

  const updates = dict.hero?.updates ?? [];
  const joinText = t("hero.joinText") || "Request Demo";

  return (
    <FiberReveal className="section-wrap innoflow-home">
      <section className="section hero section-surface hero-shader hero-inno">
        <HeroHeatmapCanvas />
        <div className="innoflow-shell">
          <p className="eyebrow inno-eyebrow">{t("hero.eyebrow")}</p>
          <h1 className="inno-title">{t("hero.title")}</h1>
          <p className="inno-description">{t("hero.description")}</p>

          <div className="inno-cta-row">
            <Link className="btn-primary" to={localizePath("request-demo")}>
              {joinText} <FiArrowRight />
            </Link>
            <a href="mailto:hello@studiox@gmail.com" className="btn-ghost">
              {t("hero.secondary")}
            </a>
          </div>

          <p className="inno-muted">{t("hero.footerTag")}</p>
        </div>
      </section>

      <section className="section inno-listing">
        <div className="section-intro">
          <p className="eyebrow">{t("howItWorks.eyebrow")}</p>
          <h2>{t("hero.updateTitle")}</h2>
          <p>{t("hero.updateSubtitle")}</p>
        </div>

        <div className="inno-update-grid">
          {updates.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="card-surface inno-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="inno-card-tag"><FiCalendar size={14} /> {item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="inno-card-link" href={item.authorUrl || "#"}>
                {item.author}
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-surface inno-cta-strip">
        <div className="mini-cta compact inno-mini">
          <div>
            <h2>{t("hero.joinHeading")}</h2>
            <p>{t("hero.joinSubheading")}</p>
          </div>
          <div className="inno-social-row">
            <a className="footer-link" href="#" onClick={(event) => event.preventDefault()}>
              <FiMessageCircle size={15} />
              {t("hero.community")}
            </a>
            <a className="footer-link" href="#" onClick={(event) => event.preventDefault()}>
              <FiHeart size={15} />
              {t("hero.social")}
            </a>
          </div>
        </div>
      </section>
    </FiberReveal>
  );
};

export default HomePage;
