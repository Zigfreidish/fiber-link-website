import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AppHeader from "../AppHeader";

vi.mock("next/navigation", () => ({
  usePathname: () => "/zh",
}));

vi.mock("../../hooks/useLocalePaths", () => ({
  useLocalePaths: () => ({
    localizePath: (slug = "") => (slug ? `/zh/${slug}` : "/zh"),
  }),
}));

vi.mock("../../contexts/LocaleContext", () => ({
  useLocale: () => ({
    locale: "zh",
    t: (key) =>
      ({
        "nav.product": "产品",
        "nav.howItWorks": "工作原理",
        "nav.faq": "常见问题",
        "nav.requestDemo": "抢先体验",
      }[key]),
  }),
}));

vi.mock("../BrandLogo", () => ({
  default: () => <div data-testid="brand-logo" />,
}));

vi.mock("../LocaleDropdown", () => ({
  default: () => <div data-testid="locale-dropdown" />,
}));

vi.mock("../ThemeDropdown", () => ({
  default: () => <div data-testid="theme-dropdown" />,
}));

describe("AppHeader", () => {
  it("removes product from primary nav but keeps how-it-works, faq, and request demo", () => {
    globalThis.React = React;
    render(<AppHeader />);

    expect(screen.queryByRole("link", { name: "产品" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "工作原理" })).toHaveAttribute("href", "/zh/how-it-works");
    expect(screen.getByRole("link", { name: "常见问题" })).toHaveAttribute("href", "/zh/faq");
    expect(screen.getByRole("link", { name: "抢先体验" })).toHaveAttribute("href", "/zh/request-demo");
  });
});
