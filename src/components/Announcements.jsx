"use client";

import { motion } from "framer-motion";
import { useLocale } from "../contexts/LocaleContext";
import { translations } from "../i18n/strings";

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const ease = [0.16, 1, 0.3, 1];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
};

export default function Announcements() {
  const { dict } = useLocale();

  // Weekly-report data (avatars, forum links) only exists in the en locale.
  // Always source from en so avatars are consistent across all language switches.
  const updates = [...(translations.en.hero?.updates ?? [])]
    .sort((a, b) => {
      const da = Date.parse(a.date) || 0;
      const db = Date.parse(b.date) || 0;
      if (db !== da) return db - da;
      return (b.postNumber || 0) - (a.postNumber || 0);
    })
    .slice(0, 3);

  if (!updates.length) return null;

  // Label is still localised
  const label = dict.hero?.updateTitle || "Announcements";

  return (
    <section className="announcements-section">
      <div className="ann-header">
        <span className="ann-dot" />
        <span className="ann-label">{label}</span>
      </div>

      <motion.div
        className="ann-list"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {updates.map((item, i) => (
          <motion.a
            key={i}
            className="ann-card"
            href={item.authorUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
          >
            {/* left: date + avatar (avatar links to author profile separately) */}
            <div className="ann-meta">
              <time className="ann-date">{formatDate(item.date)}</time>
              {item.authorAvatar ? (
                <img
                  className="ann-avatar"
                  src={item.authorAvatar}
                  alt={item.author || ""}
                />
              ) : (
                <span className="ann-avatar-init" aria-hidden="true">
                  {(item.author || "?").charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* body: title + excerpt */}
            <div className="ann-body">
              <p className="ann-title">{item.title}</p>
              <p className="ann-text">{item.desc || item.text}</p>
            </div>

            {/* arrow */}
            <span className="ann-arrow" aria-hidden="true">↗</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
