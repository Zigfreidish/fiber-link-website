import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiArrowUpRight, FiAlertCircle } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";

const requestEndpoint = import.meta.env.VITE_DEMO_REQUEST_ENDPOINT || "https://formspree.io/f/xbdpqkvj";

const RequestDemoPage = () => {
  const { t, dict, locale } = useLocale();
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    notes: "",
  });

  const roleOptions = useMemo(() => dict.requestDemo.roleOptions || [], [dict]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setStatus("submitting");

    const payload = {
      ...formData,
      locale,
      requestedAt: new Date().toISOString(),
      source: "fiberlink.me",
      demoUrl: "https://demo.fiberlink.me",
    };

    if (!requestEndpoint) {
      setStatus("idle");
      setSubmitError(t("requestDemo.form.configMissing"));
      return;
    }

    try {
      const response = await fetch(requestEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setStatus("done");
      setFormData({ name: "", email: "", organization: "", role: "", notes: "" });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setSubmitError(t("requestDemo.form.error"));
    }
  };

  const updateField = (key, value) => {
    setFormData((previous) => ({ ...previous, [key]: value }));
  };

  return (
    <section className="section section-wrap request-page">
      <div className="section-intro">
        <p className="eyebrow">{t("requestDemo.eyebrow")}</p>
        <h1>{t("requestDemo.title")}</h1>
        <p>{t("requestDemo.description")}</p>
      </div>
      <div className="request-grid">
        <motion.div
          className="card-surface"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t("requestDemo.panelTitle")}</h2>
          <p className="request-panel-copy">{t("requestDemo.panelCopy")}</p>
          <ul>
            {dict.requestDemo.steps.map((step) => (
              <li key={step}>
                <FiClock size={16} /> {step}
              </li>
            ))}
          </ul>
          <a className="btn-ghost demo-preview-link" href="https://demo.fiberlink.me" target="_blank" rel="noreferrer">
            <FiArrowUpRight size={16} /> {t("requestDemo.preview")}
          </a>
        </motion.div>

        <motion.form
          className="card-surface request-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <label>
            {t("requestDemo.form.name")}
            <input
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder={t("requestDemo.form.placeholderName")}
              required
            />
          </label>
          <label>
            {t("requestDemo.form.email")}
            <input
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder={t("requestDemo.form.placeholderEmail")}
              required
            />
          </label>
          <label>
            {t("requestDemo.form.org")}
            <input
              value={formData.organization}
              onChange={(event) => updateField("organization", event.target.value)}
              placeholder={t("requestDemo.form.placeholderOrg")}
              required
            />
          </label>
            <label>
            {t("requestDemo.form.role")}
            <select value={formData.role} onChange={(event) => updateField("role", event.target.value)} required>
              <option value="">Select one</option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t("requestDemo.form.notes")}
            <textarea
              rows={5}
              value={formData.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder={t("requestDemo.form.placeholderNotes")}
            />
          </label>
          <button className="btn-primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? t("requestDemo.form.submitting") : t("requestDemo.form.submit")}
          </button>
          <p className="form-helper-copy">{t("requestDemo.form.helper")}</p>
          {submitError && (
            <p className="error-note">
              <FiAlertCircle size={16} /> {submitError}
            </p>
          )}
          {status === "done" && (
            <p className="success-note" role="status" aria-live="polite">
              <FiCheckCircle size={16} /> {t("requestDemo.form.success")}
            </p>
          )}
        </motion.form>
      </div>

      {status === "done" && (
        <motion.div
          className="request-result-banner"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          role="status"
          aria-live="polite"
        >
          <strong>{t("requestDemo.successTitle") || "Request received"}</strong>
          <p>{t("requestDemo.form.success")}</p>
        </motion.div>
      )}
    </section>
  );
};

export default RequestDemoPage;
