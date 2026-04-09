"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const slugify = (text = "", index = 0) =>
  `${text}`
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || `section-${index + 1}`;

export default function LegalPage({ pageData }) {
  if (!pageData) return null;

  const sections = (pageData.body ?? []).map((item, index) => ({
    ...item,
    id: `${slugify(item.heading, index)}-${index + 1}`,
  }));

  return (
    <main className="legal-page">
      <motion.div
        className="legal-shell"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <header className="legal-header">
          <h1 className="legal-title">{pageData.title}</h1>
          <p className="legal-updated">{pageData.lastUpdated}</p>
        </header>

        <nav className="legal-toc" aria-label={pageData.title}>
          {sections.map((item) => (
            <a key={item.id} className="legal-toc-link" href={`#${item.id}`}>
              {item.heading}
            </a>
          ))}
        </nav>

        <div className="legal-body legal-body-spacious">
          {sections.map((item, i) => (
            <section key={i} id={item.id} className="legal-card">
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
