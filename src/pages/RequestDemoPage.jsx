import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { useLocale } from "../contexts/LocaleContext";

const storageKey = "fiber-link-interest-v2";

const RequestDemoPage = () => {
  const { t, dict, locale } = useLocale();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    notes: "",
  });

  const roleOptions = useMemo(() => dict.requestDemo.roleOptions || [], [dict]);

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...formData,
      locale,
      createdAt: new Date().toISOString(),
    };

    const current = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
    current.push(payload);
    window.localStorage.setItem(storageKey, JSON.stringify(current));
    setStatus("done");
    setFormData({ name: "", email: "", organization: "", role: "", notes: "" });
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
          <h2>{t("labels.comingSoon")}</h2>
          <ul>
            {dict.requestDemo.steps.map((step) => (
              <li key={step}>
                <FiClock size={16} /> {step}
              </li>
            ))}
          </ul>
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
          <button className="btn-primary" type="submit">
            {t("requestDemo.form.submit")}
          </button>
          {status === "done" && (
            <p className="success-note">
              <FiCheckCircle size={16} /> {t("requestDemo.form.success")}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default RequestDemoPage;
