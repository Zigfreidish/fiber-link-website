import { Navigate, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { defaultLocale, supportedLocales } from "./i18n/strings";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageShell from "./components/PageShell";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import RequestDemoPage from "./pages/RequestDemoPage";
import NotFoundPage from "./pages/NotFoundPage";

const LocaleRouteGuard = () => {
  const { locale } = useParams();
  const safeLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
  const { pathname } = useLocation();

  if (!supportedLocales.includes(locale)) {
    const normalized = pathname.replace(/^\/[^/]+/, `/${safeLocale}`);
    return <Navigate to={normalized} replace />;
  }

  return (
    <LocaleProvider locale={safeLocale}>
      <PageShell />
    </LocaleProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLocale}`} replace />} />
        <Route path="/:locale" element={<LocaleRouteGuard />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="request-demo" element={<RequestDemoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<Navigate to={`/${defaultLocale}`} replace />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
