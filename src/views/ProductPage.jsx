"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import EditorialImagePanel from "../components/EditorialImagePanel";
import { editorialMedia } from "../data/editorialMedia";

const ProductPage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();
  const productCards = dict.product?.cards ?? [];
  const useCases = dict.useCases?.cases ?? [];
  const productMedia = {
    ...editorialMedia.product,
    alt: t("product.workflowVisualTitle"),
    eyebrow: t("product.eyebrow"),
    title: t("product.workflowVisualTitle"),
    body: t("product.workflowVisualCaption"),
  };

  return (
    <main className="content-page">
      <div className="page-stack">
        <section className="page-section editorial-support-section" data-reveal>
          <div className="page-hero">
            <p className="section-eyebrow">{t("product.eyebrow")}</p>
            <h1 className="page-title">{t("product.title")}</h1>
            <p className="page-copy">{t("product.intro")}</p>
          </div>

          <div className="editorial-split">
            <EditorialImagePanel {...productMedia} />
            <div className="editorial-stack">
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
        </section>

        <section className="page-section" data-reveal>
          <div className="section-heading">
            <p className="section-eyebrow">{t("useCases.eyebrow")}</p>
            <h2 className="section-title">{t("useCases.title")}</h2>
            <p className="section-copy">{t("useCases.description")}</p>
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

        <section className="cta-band-section cta-band-section-embedded" data-reveal>
          <div className="cta-band">
            <div className="cta-band-copy">
              <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
              <h2>{t("requestDemo.title")}</h2>
              <p>{t("faq.cta")}</p>
            </div>

            <div className="cta-band-actions">
              <Link className="btn-hero-primary" href={localizePath("request-demo")}>
                {t("nav.requestDemo")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
