import { createContext, useContext, useMemo } from "react";
import { defaultLocale, getTranslation, translations } from "../i18n/strings";

const LocaleContext = createContext({
  locale: defaultLocale,
  t: (key) => getTranslation(defaultLocale, key),
  dict: translations[defaultLocale],
});

export const LocaleProvider = ({ locale, children }) => {
  const normalizedLocale = useMemo(() => {
    const allowed = Object.keys(translations).includes(locale);
    return allowed ? locale : defaultLocale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale: normalizedLocale,
      t: (key) => getTranslation(normalizedLocale, key),
      dict: translations[normalizedLocale],
    }),
    [normalizedLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
