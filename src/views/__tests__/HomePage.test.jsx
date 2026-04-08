import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage from "../HomePage";

vi.mock("../../hooks/useLocalePaths", () => ({
  useLocalePaths: () => ({
    localizePath: (slug = "") => (slug ? `/zh/${slug}` : "/zh"),
  }),
}));

vi.mock("../../contexts/LocaleContext", () => ({
  useLocale: () => ({
    t: (key) =>
      ({
        "hero.earlyAccess": "抢先体验",
        "hero.headlinePrimary": "支付",
        "hero.headlineSecondary": "无所限制",
        "hero.tagline": "让社区的每一次支持，都沉淀为创作者的真实收益。",
        "hero.primary": "抢先体验",
        "hero.learnMore": "了解更多",
        "product.eyebrow": "产品说明",
        "product.title": "我们提供面向社区的支付层，而不是钱包产品。",
        "product.intro": "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制。",
        "product.visualTitle": "旧的产品视觉标题",
        "product.visualCaption": "旧的产品视觉说明。",
        "product.homeVisualTitle": "社区支持协作现场",
        "product.homeVisualCaption": "用真实社区场景说明创作者支持如何在运营侧落地。",
        "howItWorks.eyebrow": "工作原理",
        "howItWorks.title": "Fiber Network：社区支付通道架构。",
        "howItWorks.description": "Fiber Network 将创作者支付能力作为可插拔通道接入。",
        "faq.eyebrow": "常见问题",
        "faq.title": "先回答常见疑问。",
        "faq.cta": "如果你有独特的场景，我们愿意先帮你画一版流程。",
        "requestDemo.eyebrow": "抢先体验",
        "requestDemo.title": "申请 Fiber Link 抢先体验资格。",
        "requestDemo.description": "你可以先访问 demo.fiberlink.me 预览产品。",
      }[key]),
    dict: {
      hero: {
        highlights: ["专为社区运营而建", "更清晰的创作者收益", "低摩擦即时支付"],
      },
      product: {
        cards: [
          { title: "给管理员", description: "管理员收益说明" },
          { title: "给创作者", description: "创作者收益说明" },
          { title: "给成员", description: "成员收益说明" },
        ],
      },
      useCases: {
        cases: [{ title: "创作社区", description: "对高质量内容贡献及时打赏。" }],
      },
      howItWorks: {
        steps: [{ title: "社区接入 Fiber Link", description: "管理员完成接入。" }],
      },
      faq: {
        items: [{ question: "这是不是钱包产品？", answer: "不是。" }],
      },
    },
  }),
}));

vi.mock("../../components/HeroLogo", () => ({
  default: () => <div data-testid="hero-logo" />,
}));
vi.mock("../../components/ShutterText", () => ({
  default: ({ text }) => <>{text}</>,
}));
vi.mock("../../components/AnimatedGradientBadge", () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));
vi.mock("../../components/Announcements", () => ({
  default: () => <div data-testid="announcements">announcements</div>,
}));
vi.mock("../../components/AmbientSignalScene", () => ({
  default: () => <div data-testid="ambient-scene" />,
}));

describe("HomePage", () => {
  it("keeps the hero CTA path and renders localized editorial content", () => {
    const { container } = render(<HomePage />);

    const heroActions = container.querySelector(".hero-actions");
    expect(heroActions).not.toBeNull();
    expect(
      within(heroActions).getByRole("link", { name: "了解更多" }),
    ).toHaveAttribute("href", "/zh/product");
    expect(screen.getByAltText("社区支持协作现场")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "社区支持协作现场" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("用真实社区场景说明创作者支持如何在运营侧落地。"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("ambient-scene")).toBeInTheDocument();
  });
});
