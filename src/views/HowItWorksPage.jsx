"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import FiberReveal from "../components/FiberReveal";
import WorkflowSystemDiagram from "../components/WorkflowSystemDiagram";

const HowItWorksPage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();
  const steps = dict.howItWorks?.steps ?? [];

  return (
    <main className="content-page">
      <div className="page-stack">
        <FiberReveal>
          <section className="page-section editorial-support-section">
            <div className="page-hero" data-reveal>
              <p className="section-eyebrow">{t("howItWorks.eyebrow")}</p>
              <h1 className="page-title">{t("howItWorks.title")}</h1>
              <p className="page-copy">{t("howItWorks.description")}</p>
            </div>

            <div className="how-workflow-layout how-workflow-layout-reference">
              <div className="workflow-diagram-stage" data-reveal>
                <WorkflowSystemDiagram />
              </div>
              <div className="editorial-stack workflow-step-stack">
                {steps.map((step, index) => (
                  <article key={step.title} className="surface-panel" data-reveal>
                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FiberReveal>

        <FiberReveal>
          <section className="cta-band-section cta-band-section-embedded">
            <div className="cta-band" data-reveal>
              <div className="cta-band-copy">
                <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
                <h2>{t("requestDemo.title")}</h2>
                <p>{t("requestDemo.panelCopy")}</p>
              </div>

              <div className="cta-band-actions">
                <Link className="btn-hero-primary" href={localizePath("request-demo")}>
                  {t("hero.primary")}
                </Link>
              </div>
            </div>
          </section>
        </FiberReveal>
      </div>
    </main>
  );
};

export default HowItWorksPage;
