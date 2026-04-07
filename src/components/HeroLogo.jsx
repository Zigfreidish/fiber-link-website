"use client";

import { Heatmap } from "@paper-design/shaders-react";
import { useTheme } from "../contexts/ThemeContext";

const COLORS = [
  "#0a1e40",
  "#123a80",
  "#1a5cc0",
  "#2480e0",
  "#3aa8f8",
  "#80ceff",
  "#c8eaff",
];

export default function HeroLogo({ src = "/brand/fiber-link-logo.png", size = 96 }) {
  const { resolvedMode } = useTheme();
  const isDark = resolvedMode === "dark";

  return (
    <div className="hero-logo-wrap" style={{ width: size, height: size }} aria-hidden="true">
      <Heatmap
        style={{ width: size, height: size, display: "block" }}
        image={src}
        colors={COLORS}
        colorBack={isDark ? "#000000" : "#ffffff"}
        contour={0.6}
        angle={20}
        noise={0}
        innerGlow={0.9}
        outerGlow={0.1}
        speed={0.5}
        scale={1}
      />
    </div>
  );
}
