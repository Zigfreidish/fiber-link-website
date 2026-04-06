import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteAtmosphere from "./SiteAtmosphere";

const PageShell = () => {
  const location = useLocation();
  const isHome = /^\/[^/]+\/?$/.test(location.pathname) && !location.pathname.endsWith("/request-demo") && !location.pathname.endsWith("/product") && !location.pathname.endsWith("/how-it-works");

  return (
    <div className="page-shell">
      {!isHome && <SiteHeader />}
      <main className="page-main">
        <SiteAtmosphere />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {!isHome && <SiteFooter />}
    </div>
  );
};

export default PageShell;
