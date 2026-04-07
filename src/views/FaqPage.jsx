import { motion } from "framer-motion";
import { useLocale } from "../contexts/LocaleContext";
import FiberReveal from "../components/FiberReveal";

const FaqPage = () => {
  const { t, dict } = useLocale();

  return (
    <FiberReveal className="section-wrap">
      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h1>{t("faq.title")}</h1>
          <p>{t("faq.cta")}</p>
        </div>
        <div className="faq-stack">
          {dict.faq.items.map((item) => (
            <motion.div
              key={item.question}
              className="faq-item card-surface"
              data-reveal
              whileHover={{ y: -3 }}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </FiberReveal>
  );
};

export default FaqPage;
