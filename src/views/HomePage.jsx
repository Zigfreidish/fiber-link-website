"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useLocale } from "../contexts/LocaleContext";
import HeroLogo from "../components/HeroLogo";
import ShutterText from "../components/ShutterText";
import AnimatedGradientBadge from "../components/AnimatedGradientBadge";
import Announcements from "../components/Announcements";
import EditorialImagePanel from "../components/EditorialImagePanel";
import FiberReveal from "../components/FiberReveal";
import { editorialMedia } from "../data/editorialMedia";

const ease = [0.16, 1, 0.3, 1];
const PRODUCT_SECTION_ID = "product-overview";
const SOURCE_URL = "https://github.com/Keith-CY/fiber-link";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease, delay },
});

export default function HomePage() {
  const { localizePath } = useLocalePaths();
  const { t, dict } = useLocale();
  const homeMedia = {
    ...editorialMedia.home,
    alt: t("product.homeVisualTitle"),
    eyebrow: t("product.eyebrow"),
    title: t("product.homeVisualTitle"),
    body: t("product.homeVisualCaption"),
  };

  const productCards = dict.product?.cards ?? [];
  const useCases = dict.useCases?.cases ?? [];
  const steps = dict.howItWorks?.steps ?? [];

  return (
    <main className="home-main">
      <section className="hero-section hero-section-home">
        <motion.div
          className="hero-logo-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <HeroLogo size={96} />
        </motion.div>

        {/* animated gradient badge → Request Demo */}
        <motion.div style={{ marginBottom: "40px" }} {...fadeUp(0.12)}>
          <AnimatedGradientBadge href={localizePath("request-demo")}>
            {t("hero.earlyAccess")}
          </AnimatedGradientBadge>
        </motion.div>

        <h1 className="hero-headline">
          <span className="hero-line-dark">
            <ShutterText text={t("hero.headlinePrimary")} delay={0.18} accentColor="#2480e0" midColor="var(--on-surface)" />
          </span>
          <span className="hero-line-muted">
            <ShutterText text={t("hero.headlineSecondary")} delay={0.3} accentColor="#3aa8f8" midColor="#8c8f90" />
          </span>
        </h1>

        <motion.p className="hero-desc" {...fadeUp(0.42)}>
          {t("hero.tagline")}
        </motion.p>

        <motion.div className="hero-actions hero-actions-equal" {...fadeUp(0.52)}>
          <Link className="btn-hero-primary btn-hero-wide" href={localizePath("request-demo")}>
            {t("hero.primary")}
          </Link>
          <a
            className="btn-hero-secondary btn-hero-wide"
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.learnMore")}
          </a>
        </motion.div>

      </section>

      <div className="page-stack home-stack home-stack-spacious">
        <FiberReveal>
          <section id={PRODUCT_SECTION_ID} className="page-section home-editorial-split">
            <div className="section-heading" data-reveal>
              <p className="section-eyebrow">{t("product.eyebrow")}</p>
              <h2 className="section-title">{t("product.title")}</h2>
              <p className="section-copy">{t("product.intro")}</p>
            </div>

            <div className="editorial-split">
              <div data-reveal>
                <EditorialImagePanel
                  {...homeMedia}
                  showCaption={false}
                  className="editorial-image-panel-home-reference"
                />
              </div>
              <div className="editorial-stack">
                <div className="feature-grid-premium feature-grid-premium-stack">
                  {productCards.map((item, index) => (
                    <article key={item.title} className="surface-panel" data-reveal>
                      <span className="info-card-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="feature-stack-copy">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="section-heading home-use-cases-heading" data-reveal>
              <p className="section-eyebrow">{t("useCases.eyebrow")}</p>
              <h3 className="section-title">{t("useCases.title")}</h3>
              <p className="section-copy">{t("useCases.description")}</p>
            </div>

            <div className="use-case-grid">
              {useCases.map((item) => (
                <article key={item.title} className="use-case-card" data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </FiberReveal>

        <FiberReveal>
          <section className="page-section">
            <div className="section-heading section-heading-inline" data-reveal>
              <div>
                <p className="section-eyebrow">{t("howItWorks.eyebrow")}</p>
                <h2 className="section-title">{t("howItWorks.title")}</h2>
                <p className="section-copy">{t("howItWorks.description")}</p>
              </div>

              <a
                className="text-link"
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.learnMore")}
              </a>
            </div>

            <div className="step-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="step-card" data-reveal>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>
        </FiberReveal>

      </div>

      <FiberReveal>
        <section className="page-section page-section-muted page-section-announcements" data-reveal>
          <Announcements />
        </section>
      </FiberReveal>

      <FiberReveal>
        <section className="cta-band-section">
          <div className="cta-band" data-reveal>
            <div className="cta-band-copy">
              <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
              <h2>{t("requestDemo.title")}</h2>
              <p>{t("requestDemo.description")}</p>
            </div>

            <div className="cta-band-actions cta-band-actions-equal">
              <Link className="btn-hero-primary btn-hero-wide" href={localizePath("request-demo")}>
                {t("hero.primary")}
              </Link>
              <a
                className="btn-hero-secondary btn-hero-wide"
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.learnMore")}
              </a>
            </div>
          </div>
        </section>
      </FiberReveal>
    </main>
  );
}
