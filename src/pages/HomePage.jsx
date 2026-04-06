import { useMemo, useState } from "react";
import { FiCalendar, FiHeart, FiInstagram, FiMail, FiSend, FiTwitter } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const avatarPool = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
];

const HomePage = () => {
  const { t, dict, locale } = useLocale();
  const { localizePath } = useLocalePaths();
  const [email, setEmail] = useState("");
  const updates = useMemo(() => dict.hero?.updates || [], [dict]);

  return (
    <main className="section-wrap innoflow-page inno-shell">
      <section className="innoflow-hero section">
        <div className="innoflow-headline"> 
          <img className="inno-top-logo" src="/brand/fiber-link-logo.jpg" alt="Fiber Link" />
          <div className="inno-top-divider" />
          <a className="inno-top-email" href={`mailto:${dict.hero?.contact || "hello@studiox.com"}`}>
            <span className="email-dot" />
            {dict.hero?.contact || "hello@studiox@gmail.com"}
          </a>
          <span className="inno-head-spacer" />
          <a className="top-social" href="#" onClick={(event) => event.preventDefault()} aria-label="social links">
            <FiInstagram size={16} />
          </a>
          <a className="top-social" href="#" onClick={(event) => event.preventDefault()} aria-label="social links">
            <FiTwitter size={16} />
          </a>
          <a className="top-social" href="#" onClick={(event) => event.preventDefault()} aria-label="social links">
            <FiHeart size={16} />
          </a>
        </div>

        <div className="innoflow-main">
          <p className="inno-eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="inno-description">{t("hero.description")}</p>

          <div className="inno-mailbox">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={locale === "zh" ? "you@email.com" : "Your email"}
              required
              aria-label="Email"
            />
            <Link className="inno-mailbox-link inno-mailbox-button" to={localizePath("request-demo")}>
              {t("labels.requestDemoTitle")} <FiSend size={14} />
            </Link>
          </div>

          <div className="inno-proof">
            <div className="avatar-stack" aria-hidden="true">
              {avatarPool.slice(0, 4).map((avatar) => (
                <img key={avatar} src={avatar} alt="" />
              ))}
            </div>
            <span>{t("hero.footerTag")}</span>
          </div>
        </div>
      </section>

      <section className="section section-surface innoflow-feed">
        <div className="announcements-head">
          <span>{t("hero.updateTitle")}</span>
        </div>

        <div className="inno-feed">
          {updates.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="inno-item"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="inno-item-pill">
                <FiCalendar size={14} />
                {item.date}
              </div>
              <div className="inno-item-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <a className="inno-item-author" href={item.authorUrl || "#"}>
                <img
                  src={avatarPool[index % avatarPool.length]}
                  alt="author"
                  style={{ width: 28, height: 28, borderRadius: 999, objectFit: "cover" }}
                />
                <span>{item.author}</span>
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-footerbar inno-footer">
        <div className="inno-footer-inner">
          <p>{t("hero.community")}</p>
          <a href={`mailto:${dict.hero?.contact || "hello@studiox@gmail.com"}`}>
            <FiMail size={14} />
            {dict.hero?.contact || "hello@studiox@gmail.com"}
          </a>
          <p>© {new Date().getFullYear()} Fiber Link</p>
          <a href="#">Remix The Template</a>
          <a href="#">Made in Framer</a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
