import { translations, supportedLocales, defaultLocale } from "../../../src/i18n/strings";
import LegalPage from "../../../src/views/LegalPage";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function Privacy({ params }) {
  const { locale } = await params;
  const safeLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
  const pageData = translations[safeLocale]?.privacy ?? translations[defaultLocale].privacy;
  return <LegalPage pageData={pageData} />;
}
