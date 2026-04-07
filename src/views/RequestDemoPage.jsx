"use client";

import { useState } from "react";
import { useLocale } from "../contexts/LocaleContext";

const ENDPOINT =
  process.env.NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT ||
  "https://formspree.io/f/xbdpqkvj";

const EMPTY = { name: "", email: "", organization: "", role: "", notes: "" };

export default function RequestDemoPage() {
  const { t, dict } = useLocale();
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

  return (
    <main className="demo-section">
      <div className="demo-card">
        {status === "done" ? (
          <div className="demo-success">
            <div className="demo-success-icon">✓</div>
            <h2>{t("requestDemo.eyebrow")}</h2>
            <p>{t("requestDemo.form.success")}</p>
          </div>
        ) : (
          <>
            <h1>{t("requestDemo.eyebrow")}</h1>
            <p className="demo-subtitle">{t("requestDemo.formSubtitle")}</p>

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
          </>
        )}
      </div>
    </main>
  );
}
