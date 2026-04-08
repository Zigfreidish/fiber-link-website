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
import AmbientSignalScene from "../components/AmbientSignalScene";
import { editorialMedia } from "../data/editorialMedia";

const ease = [0.16, 1, 0.3, 1];
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
  const faqItems = dict.faq?.items ?? [];

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

        <motion.div className="hero-actions" {...fadeUp(0.52)}>
          <Link className="btn-hero-primary" href={localizePath("request-demo")}>
            {t("hero.primary")}
          </Link>
          <Link
            className="btn-hero-secondary"
            href={localizePath("product")}
          >
            {t("hero.learnMore")}
          </Link>
        </motion.div>

        <motion.ul className="hero-highlights" {...fadeUp(0.62)}>
          {(dict.hero?.highlights ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </motion.ul>
      </section>

      <div className="page-stack home-stack">
        <section className="page-section home-editorial-split" data-reveal>
          <div className="section-heading">
            <p className="section-eyebrow">{t("product.eyebrow")}</p>
            <h2 className="section-title">{t("product.title")}</h2>
            <p className="section-copy">{t("product.intro")}</p>
          </div>

          <div className="editorial-split">
            <EditorialImagePanel {...homeMedia} />
            <div className="editorial-stack">
              <AmbientSignalScene />
              <div className="feature-grid-premium">
                {productCards.map((item, index) => (
                  <article key={item.title} className="surface-panel">
                    <span className="info-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="use-case-grid">
            {useCases.map((item) => (
              <article key={item.title} className="use-case-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section" data-reveal>
          <div className="section-heading section-heading-inline">
            <div>
              <p className="section-eyebrow">{t("howItWorks.eyebrow")}</p>
              <h2 className="section-title">{t("howItWorks.title")}</h2>
              <p className="section-copy">{t("howItWorks.description")}</p>
            </div>

            <Link className="text-link" href={localizePath("how-it-works")}>
              {t("hero.learnMore")}
            </Link>
          </div>

          <div className="step-grid">
            {steps.map((step, index) => (
              <article key={step.title} className="step-card">
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section" data-reveal>
          <div className="section-heading section-heading-inline">
            <div>
              <p className="section-eyebrow">{t("faq.eyebrow")}</p>
              <h2 className="section-title">{t("faq.title")}</h2>
              <p className="section-copy">{t("faq.cta")}</p>
            </div>

            <Link className="text-link" href={localizePath("faq")}>
              {t("nav.faq")}
            </Link>
          </div>

          <div className="faq-preview-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-preview-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="page-section page-section-muted page-section-announcements">
        <Announcements />
      </section>

      <section className="cta-band-section">
        <div className="cta-band">
          <div className="cta-band-copy">
            <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
            <h2>{t("requestDemo.title")}</h2>
            <p>{t("requestDemo.description")}</p>
          </div>

          <div className="cta-band-actions">
            <Link className="btn-hero-primary" href={localizePath("request-demo")}>
              {t("hero.primary")}
            </Link>
            <Link className="btn-hero-secondary" href={localizePath("product")}>
              {t("hero.learnMore")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
