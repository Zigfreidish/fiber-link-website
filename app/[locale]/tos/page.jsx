import { translations, supportedLocales, defaultLocale } from "../../../src/i18n/strings";
import LegalPage from "../../../src/views/LegalPage";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function Tos({ params }) {
  const { locale } = await params;
  const safeLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
  const pageData = translations[safeLocale]?.tos ?? translations[defaultLocale].tos;
  return <LegalPage pageData={pageData} />;
}
