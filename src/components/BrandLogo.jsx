"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const DEFAULT_SRC = "/brand/fiber-link-logo.png";
const CHROME_DARK_SRC = "/brand/fiber-link-logo-solid-white.svg";

export default function BrandLogo({
  context = "chrome",
  alt = "Fiber Link",
  className = "",
  ...imgProps
}) {
  const { resolvedMode } = useTheme();
  const src =
    resolvedMode === "dark" && context === "chrome"
      ? CHROME_DARK_SRC
      : DEFAULT_SRC;

  return <img src={src} alt={alt} className={className} {...imgProps} />;
}
