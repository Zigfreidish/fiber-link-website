import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
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
});
