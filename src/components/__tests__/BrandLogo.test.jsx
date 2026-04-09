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
  it('uses white solid logo in dark mode for context="chrome"', () => {
    useTheme.mockReturnValue({ resolvedMode: "dark" });

    render(<BrandLogo context="chrome" alt="Fiber Link" data-testid="brand-logo" />);

    expect(screen.getByTestId("brand-logo")).toHaveAttribute(
      "src",
      "/brand/fiber-link-logo-solid-white.svg",
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

  it("uses a dark chrome logo asset without evenodd outline cutouts", () => {
    const logo = readFileSync(
      "public/brand/fiber-link-logo-solid-white.svg",
      "utf8",
    );

    expect(logo).not.toContain("fill-rule");
    expect(logo).not.toContain("clip-rule");
  });
});
