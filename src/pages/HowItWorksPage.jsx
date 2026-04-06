import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import FiberReveal from "../components/FiberReveal";
import CommunityVisual from "../components/CommunityVisual";

const HowItWorksPage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();

  return (
    <FiberReveal className="section-wrap">
      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">{t("howItWorks.eyebrow")}</p>
          <h1>{t("howItWorks.title")}</h1>
          <p>{t("howItWorks.description")}</p>
        </div>
        <div className="timeline">
          {dict.howItWorks.steps.map((step, index) => (
            <article key={step.title} className="timeline-item card-surface" data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-surface">
        <CommunityVisual
          query={dict.images.how.query}
          title={t("product.visualTitle")}
          description={t("howItWorks.description")}
          fallback={dict.images.how.fallback}
        />
      </section>

      <section className="section">
        <div className="mini-cta compact">
          <div>
            <h2>{t("faq.cta")}</h2>
            <p>{t("labels.comingSoon")}</p>
          </div>
          <Link className="btn-primary" to={localizePath("request-demo")}>
            {t("hero.primary")} <FiArrowRight />
          </Link>
        </div>
      </section>
    </FiberReveal>
  );
};

export default HowItWorksPage;
