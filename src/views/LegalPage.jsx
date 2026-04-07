"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function LegalPage({ pageData }) {
  if (!pageData) return null;

  return (
    <main className="legal-page">
      <motion.div
        className="legal-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <h1 className="legal-title">{pageData.title}</h1>
        <p className="legal-updated">{pageData.lastUpdated}</p>

        <div className="legal-body">
          {(pageData.body ?? []).map((item, i) => (
            <section key={i} className="legal-section">
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
