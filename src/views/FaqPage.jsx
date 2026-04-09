"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";

const FaqPage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();
  const items = dict.faq?.items ?? [];

  return (
    <main className="content-page">
      <div className="page-stack">
        <section className="page-section page-section-faq-top" data-reveal>
          <div className="page-hero page-hero-faq">
            <p className="section-eyebrow">{t("faq.eyebrow")}</p>
            <h1 className="page-title">{t("faq.title")}</h1>
            <p className="page-copy">{t("faq.cta")}</p>
          </div>

          <div className="faq-details-list faq-details-list-spacious">
            {items.map((item, index) => (
              <details
                key={item.question}
                className="faq-detail"
                open={index === 0}
              >
                <summary>
                  <span className="faq-detail-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-detail-question">{item.question}</span>
                  <span className="faq-detail-toggle" aria-hidden="true">+</span>
                </summary>

                <div className="faq-detail-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-band-section cta-band-section-embedded" data-reveal>
          <div className="cta-band">
            <div className="cta-band-copy">
              <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
              <h2>{t("faq.cta")}</h2>
              <p>{t("requestDemo.panelCopy")}</p>
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

export default FaqPage;
