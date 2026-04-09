import React from "react";
import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BrandLogo from "../BrandLogo";

vi.mock("../../contexts/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

import { useTheme } from "../../contexts/ThemeContext";

describe("BrandLogo", () => {
  it('uses the inverted outline logo in dark mode for context="chrome"', () => {
    useTheme.mockReturnValue({ resolvedMode: "dark" });

    render(<BrandLogo context="chrome" alt="Fiber Link" data-testid="brand-logo" />);

    expect(screen.getByTestId("brand-logo")).toHaveAttribute(
      "src",
      "/brand/fiber-link-logo-outline-white.png",
    );
  });

  it('keeps default logo in dark mode for context="hero"', () => {
    useTheme.mockReturnValue({ resolvedMode: "dark" });

    render(<BrandLogo context="hero" alt="Fiber Link" data-testid="brand-logo" />);

    expect(screen.getByTestId("brand-logo")).toHaveAttribute(
      "src",
      "/brand/fiber-link-logo.png",
    );
  });

  it("ships a raster dark chrome logo asset for the inverted outline mark", () => {
    const logo = readFileSync(
      "public/brand/fiber-link-logo-outline-white.png",
    );

    expect(logo.byteLength).toBeGreaterThan(0);
  });
});
