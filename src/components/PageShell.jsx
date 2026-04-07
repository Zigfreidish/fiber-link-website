import { useLocation, Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteAtmosphere from "./SiteAtmosphere";

const PageShell = () => {
  const location = useLocation();
  const isLocaleHome = /^\/[^/]+\/?$/.test(location.pathname);

  return (
    <div className={`page-shell ${isLocaleHome ? "page-shell-home" : ""}`}>
      {isLocaleHome ? null : <SiteHeader />}
      <main className="page-main">
        {isLocaleHome ? null : <SiteAtmosphere />}
        <Outlet />
      </main>
      {isLocaleHome ? null : <SiteFooter />}
    </div>
  );
};

export default PageShell;
