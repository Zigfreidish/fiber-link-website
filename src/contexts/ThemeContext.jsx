import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "fiber-link-theme-mode";
const ThemeContext = createContext({
  mode: "system",
  setMode: () => undefined,
  resolvedMode: "light",
  resolvedLabel: "system",
});

export const ThemeProvider = ({ children }) => {
  const [mode, setModeState] = useState(() => {
    if (typeof window === "undefined") return "system";
    return window.localStorage.getItem(STORAGE_KEY) || "system";
  });

  const [resolvedMode, setResolvedMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => {
      const next =
        mode === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : mode;
      setResolvedMode(next);
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.setAttribute("data-theme-mode", mode);
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [mode]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = (next) => {
    setModeState(next);
  };

  const value = useMemo(
    () => ({
      mode,
      setMode,
      resolvedMode,
      resolvedLabel: mode === "system" ? "system" : mode,
    }),
    [mode, resolvedMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
