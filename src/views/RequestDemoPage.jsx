"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "../contexts/LocaleContext";
import { useLocalePaths } from "../hooks/useLocalePaths";

const ENDPOINT =
  process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT ||
  "https://formspree.io/f/xbdpqkvj";

const EMPTY = { name: "", email: "", organization: "", role: "", notes: "" };
const PREVIEW_URL = "https://demo.fiberlink.me";
const SOURCE_URL = "https://github.com/Keith-CY/fiber-link";

export default function RequestDemoPage() {
  const { t, dict } = useLocale();
  const { currentLocale, localizePath } = useLocalePaths();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          requestedAt: new Date().toISOString(),
          source: "fiberlink.me",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(t("requestDemo.form.error"));
    }
  };

  const roleOptions = dict.requestDemo?.roleOptions ?? [];
  const steps = dict.requestDemo?.steps ?? [];
  const formSubtitle =
    t("requestDemo.form.formSubtitle") ?? t("requestDemo.form.helper");
  const homeHref = `/${currentLocale}`;

  return (
    <main className="demo-page">
      <div className="demo-shell demo-shell-spacious">
        <section className="page-hero page-hero-tight">
          <p className="section-eyebrow">{t("requestDemo.eyebrow")}</p>
          <h1 className="page-title">{t("requestDemo.title")}</h1>
          <p className="page-copy">{t("requestDemo.description")}</p>
        </section>

        {status === "done" ? (
          <section className="demo-card">
            <div className="demo-success">
              <div className="demo-success-icon">✓</div>
              <h2>{t("requestDemo.eyebrow")}</h2>
              <p>{t("requestDemo.form.success")}</p>

              <div className="cta-band-actions demo-success-actions">
                <Link className="btn-hero-primary" href={homeHref}>
                  {t("nav.home")}
                </Link>
                <a
                  className="btn-hero-secondary"
                  href={SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.learnMore")}
                </a>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="demo-story">
              <div className="demo-story-panel">
                <p className="section-eyebrow">{t("requestDemo.panelTitle")}</p>
                <h2>{t("requestDemo.panelTitle")}</h2>
                <p>{t("requestDemo.panelCopy")}</p>
              </div>

              <ol className="demo-steps">
                {steps.map((step, index) => (
                  <li key={`${step}-${index}`} className="demo-step">
                    <span className="demo-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>
                      {index === 0 ? (
                        <>
                          {step}
                          <a
                            className="demo-step-link"
                            href={PREVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {PREVIEW_URL.replace(/^https?:\/\//, "")}
                          </a>
                        </>
                      ) : (
                        step
                      )}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="demo-card demo-card-form">
              <div className="demo-card-header">
                <h2>{formSubtitle}</h2>
                <p>{t("requestDemo.form.helper")}</p>
              </div>

              <form className="demo-form" onSubmit={onSubmit}>
                <label>
                  {t("requestDemo.form.name")}
                  <input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder={t("requestDemo.form.placeholderName")}
                  />
                </label>

                <label>
                  {t("requestDemo.form.email")}
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder={t("requestDemo.form.placeholderEmail")}
                  />
                </label>

                <label>
                  {t("requestDemo.form.org")}
                  <input
                    required
                    value={form.organization}
                    onChange={set("organization")}
                    placeholder={t("requestDemo.form.placeholderOrg")}
                  />
                </label>

                <label>
                  {t("requestDemo.form.role")}
                  <select required value={form.role} onChange={set("role")}>
                    <option value="">—</option>
                    {roleOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </label>

                <label>
                  {t("requestDemo.form.notes")}
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={set("notes")}
                    placeholder={t("requestDemo.form.placeholderNotes")}
                  />
                </label>

                {status === "error" && (
                  <p className="demo-error">{errorMsg}</p>
                )}

                <button
                  className="demo-submit"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? t("requestDemo.form.submitting")
                    : t("requestDemo.form.submit")}
                </button>
              </form>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
