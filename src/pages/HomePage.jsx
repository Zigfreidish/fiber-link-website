import { useEffect, useRef } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FiArrowRight, FiShield, FiUsers, FiTrendingUp } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import FiberReveal from "../components/FiberReveal";
import DecorPulse from "../components/DecorPulse";
import CommunityVisual from "../components/CommunityVisual";

const HomePage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();
  const heroRef = useRef(null);
  const metricRef = useRef(null);
  const useCaseRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();
    tl.from(heroRef.current.querySelectorAll(".hero-copy-item"), {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.09,
      ease: "power3.out",
    });

    if (metricRef.current) {
      anime(metricRef.current.querySelectorAll(".metric-card"), {
        opacity: [0, 1],
        translateY: [22, 0],
        delay: (el, i) => 100 + i * 80,
        duration: 650,
        easing: "easeOutCubic",
      });
    }

    if (useCaseRef.current) {
      anime(useCaseRef.current.querySelectorAll(".usecase-card"), {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.99, 1],
        delay: (el, i) => 180 + i * 80,
        duration: 600,
        easing: "easeOutQuart",
      });
    }
  }, []);

  return (
    <FiberReveal className="section-wrap">
      <section className="hero section" ref={heroRef}>
        <div className="panel-shell">
          <article className="hero-copy-block" data-reveal>
            <p className="eyebrow hero-eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="hero-title hero-copy-item">{t("hero.title")}</h1>
            <p className="hero-copy hero-copy-item">{t("hero.description")}</p>
            <div className="hero-copy-item hero-actions">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link className="btn-primary" to={localizePath("request-demo")}>
                  <span>{t("hero.primary")}</span> <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link className="btn-ghost" to={localizePath("request-demo")}>
                  {t("hero.secondary")}
                </Link>
              </motion.div>
            </div>
            <ul className="hero-highlights hero-copy-item">
              <li>
                <FiShield size={16} /> {t("hero.highlights.0")}
              </li>
              <li>
                <FiUsers size={16} /> {t("hero.highlights.1")}
              </li>
              <li>
                <FiTrendingUp size={16} /> {t("hero.highlights.2")}
              </li>
            </ul>
          </article>

          <motion.article
            className="hero-right card-surface"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <DecorPulse />
            <h2>{t("hero.cardTitle")}</h2>
            <p className="hero-mini">{t("product.visualCaption")}</p>
            <div className="metric-grid" ref={metricRef}>
              {dict.hero.cards.map((card, index) => (
                <div key={card} data-reveal className="metric-card">
                  <strong>{`0${index + 1}`}</strong>
                  <p>{card}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section section-surface" data-reveal>
        <div className="section-intro">
          <p className="eyebrow">{t("product.eyebrow")}</p>
          <h2>{t("product.title")}</h2>
          <p>{t("product.intro")}</p>
        </div>
        <div className="three-col">
          {dict.product.cards.map((card) => (
            <motion.article
              key={card.title}
              className="feature-card card-surface"
              data-reveal
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-surface" data-reveal>
        <div className="section-intro">
          <h2>{t("useCases.title")}</h2>
          <p>{t("useCases.description")}</p>
        </div>
        <div className="two-col" ref={useCaseRef}>
          {dict.useCases.cases.map((item) => (
            <article key={item.title} className="card-surface usecase-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="section-visual">
          <CommunityVisual
            query={dict.images.home.query}
            title={t("product.visualTitle")}
            description={t("product.visualCaption")}
            fallback={dict.images.home.fallback}
          />
        </div>
      </section>

      <section className="section section-accented" data-reveal>
        <div className="cta-shell">
          <h2>{t("requestDemo.title")}</h2>
          <p>{t("requestDemo.description")}</p>
          <Link className="btn-primary" to={localizePath("request-demo")}>
            {t("labels.requestDemoTitle")}
          </Link>
        </div>
      </section>
    </FiberReveal>
  );
};

export default HomePage;