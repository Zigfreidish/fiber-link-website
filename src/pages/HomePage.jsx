import {
  FiGlobe,
  FiInstagram,
  FiInfo,
  FiMail,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";

const topAvatars = [
  "https://framerusercontent.com/images/6hJrSISXOuw6XHbmBRCGFMIE78.png?width=403&height=403",
  "https://framerusercontent.com/images/Ym3IuKDBwg0U6P3YdFiwaa2xKE.png?width=1668&height=1607",
  "https://framerusercontent.com/images/zU4hhLtCQQrRV7D1ZZ3IKzyve2g.png?width=695&height=733",
];

const authors = [
  "https://framerusercontent.com/images/UmaFwqCdgSxaNNd1llstoAzEI.jpg?width=898&height=1004",
  "https://framerusercontent.com/images/Z3DY6qcEaDryS5ouAiUE3e0XBQ.jpeg?width=4000&height=6000",
  "https://framerusercontent.com/images/UmaFwqCdgSxaNNd1llstoAzEI.jpg?width=898&height=1004",
];

const socialLinks = [
  { href: "https://x.com/home", icon: FiMessageCircle, label: "x" },
  { href: "https://www.instagram.com/", icon: FiInstagram, label: "instagram" },
  { href: "https://www.facebook.com/", icon: FiGlobe, label: "facebook" },
  { href: "https://github.com/Keith-CY/fiber-link", icon: FiInfo, label: "info" },
];

const HomePage = () => {
  const { t, dict } = useLocale();
  const { localizePath } = useLocalePaths();
  const updates = [...(dict.hero?.updates || [])].sort((a, b) => {
    const pa = Date.parse(a.date) || 0;
    const pb = Date.parse(b.date) || 0;
    if (pb !== pa) return pb - pa;
    return (b.postNumber || 0) - (a.postNumber || 0);
  });

  return (
    <main className="section-wrap innoflow-page inno-shell">
      <nav className="inno-nav" aria-label="Innoflow style top navigation">
        <a className="inno-brand" href={localizePath("")}>
          <img className="inno-brand-logo" src="/brand/fiber-link-logo.jpg" alt="Fiber Link logo" />
        </a>

        <span className="inno-nav-divider" aria-hidden="true" />

        <a className="inno-pill-underline" href="mailto:hello@studiox@gmail.com" target="_blank" rel="noreferrer">
          <span className="inno-nav-dot" />
          hello@studiox@gmail.com
        </a>

        <span className="inno-nav-spacer" aria-hidden="true" />

        <span className="inno-social-divider" aria-hidden="true" />

        <div className="inno-top-socials" aria-label="social links">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </nav>

      <section className="innoflow-hero section innoflow-ref">
        <div className="inno-top-logo-wrap" aria-hidden="true">
          <img className="inno-top-badge" src="/brand/fiber-link-logo.jpg" alt="Fiber Link logo" />
        </div>

        <div className="innoflow-main">
          <p className="inno-eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="inno-description">{t("hero.description")}</p>

          <form className="inno-mailbox" onSubmit={(e) => e.preventDefault()}>
            <label className="inno-input-wrap">
              <input required type="email" placeholder="Your email here" aria-label="Email" />
            </label>
            <button type="submit" className="inno-mailbox-button">
              {t("hero.joinText")}
              <span className="inno-arrow">↗</span>
            </button>
          </form>

          <div className="inno-proof">
            <div className="avatar-stack" aria-hidden="true">
              {topAvatars.map((avatar) => (
                <img key={avatar} src={avatar} alt="member avatar" />
              ))}
            </div>
            <span>{t("hero.footerTag")}</span>
          </div>
        </div>
      </section>

      <section className="section section-surface innoflow-feed">
        <div className="announcements-head">
          <span className="inno-dot" />
          <span>{t("hero.updateTitle")}</span>
        </div>

        <div className="inno-feed">
          {updates.map((item, index) => (
            <article className="inno-item" key={`${item.title}-${index}`}>
              <div className="inno-item-pill" aria-hidden="true">
                <FiMapPin size={17} className="inno-pin-icon" />
              </div>

              <div className="inno-item-body">
                <h3>{item.title}</h3>
                <p className="inno-item-date inno-item-date-inline">
                  <span className="inno-item-dot" />
                  {item.date}
                </p>
                <p className="inno-item-text">{item.desc || item.text}</p>
                {item.cta && item.ctaText ? (
                  <a className="inno-item-cta" href={item.cta} target="_blank" rel="noopener noreferrer">
                    {item.ctaText}
                  </a>
                ) : item.ctaText ? (
                  <span className="inno-item-cta-placeholder">{item.ctaText}</span>
                ) : null}
              </div>

              <div className="inno-item-side">
                <a className="inno-item-author" href={item.authorUrl || "#"}>
                  <img src={item.authorAvatar || authors[index % authors.length]} alt="author" />
                  <span>{item.author}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
