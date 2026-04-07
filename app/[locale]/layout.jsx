import { redirect } from "next/navigation";
import { LocaleProvider } from "../../src/contexts/LocaleContext";
import { ThemeProvider } from "../../src/contexts/ThemeContext";
import { supportedLocales, defaultLocale } from "../../src/i18n/strings";
import AppHeader from "../../src/components/AppHeader";
import AppFooter from "../../src/components/AppFooter";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    redirect(`/${defaultLocale}`);
  }

  return (
    <ThemeProvider>
      <LocaleProvider locale={locale}>
        <div className="site-shell">
          <AppHeader />
          {children}
          <AppFooter />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}
