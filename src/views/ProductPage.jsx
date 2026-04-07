"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import FiberReveal from "../components/FiberReveal";
import CommunityVisual from "../components/CommunityVisual";

const ProductPage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();

  return (
    <FiberReveal className="section-wrap">
      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">{t("product.eyebrow")}</p>
          <h1>{t("product.title")}</h1>
          <p>{t("product.intro")}</p>
        </div>
        <div className="feature-grid">
          {dict.product.cards.map((item) => (
            <motion.article
              key={item.title}
              className="card-surface"
              data-reveal
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-surface">
        <CommunityVisual
          query={dict.images.product.query}
          title={t("product.visualTitle")}
          description={t("product.visualCaption")}
          fallback={dict.images.product.fallback}
        />
      </section>

      <section className="section">
        <div className="mini-cta">
          <h2>{t("requestDemo.title")}</h2>
          <p>{t("requestDemo.steps.0")}</p>
          <Link className="btn-primary" href={localizePath("request-demo")}>
            {t("nav.requestDemo")}
          </Link>
        </div>
      </section>
    </FiberReveal>
  );
};

export default ProductPage;
