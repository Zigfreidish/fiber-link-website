"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { useLocale } from "../contexts/LocaleContext";
import HeroLogo from "../components/HeroLogo";
import ShutterText from "../components/ShutterText";
import AnimatedGradientBadge from "../components/AnimatedGradientBadge";
import Announcements from "../components/Announcements";

const ease = [0.16, 1, 0.3, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease, delay },
});

export default function HomePage() {
  const { localizePath } = useLocalePaths();
  const { t } = useLocale();

  return (
    <main className="home-main">
      <section className="hero-section">

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
            Get Early Access
          </AnimatedGradientBadge>
        </motion.div>

        <h1 className="hero-headline">
          <span className="hero-line-dark">
            <ShutterText text="Payments" delay={0.18} accentColor="#2480e0" midColor="var(--on-surface)" />
          </span>
          <span className="hero-line-muted">
            <ShutterText text="Uncompromised" delay={0.3} accentColor="#3aa8f8" midColor="#8c8f90" />
          </span>
        </h1>

        <motion.p className="hero-desc" {...fadeUp(0.42)}>
          {t("hero.tagline")}
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.52)}>
          <Link className="btn-hero-primary" href={localizePath("request-demo")}>
            {t("hero.primary")}
          </Link>
          <a
            className="btn-hero-secondary"
            href="https://github.com/Keith-CY/fiber-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.viewOnGithub")}
          </a>
        </motion.div>

      </section>

      <Announcements />
    </main>
  );
}
