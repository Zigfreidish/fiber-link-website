import { useLocale } from "../contexts/LocaleContext";
import FiberReveal from "../components/FiberReveal";

const UseCasesPage = () => {
  const { t, dict } = useLocale();

  return (
    <FiberReveal className="section-wrap">
      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">{t("useCases.eyebrow")}</p>
          <h1>{t("useCases.title")}</h1>
          <p>{t("useCases.description")}</p>
        </div>
        <div className="two-col">
          {dict.useCases.cases.map((item) => (
            <article key={item.title} className="card-surface" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </FiberReveal>
  );
};

export default UseCasesPage;
