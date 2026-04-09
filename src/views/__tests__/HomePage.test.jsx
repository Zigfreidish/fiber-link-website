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
        "product.title": "面向社区平台的支付层。",
        "product.intro": "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制。",
        "product.visualTitle": "旧的产品视觉标题",
        "product.visualCaption": "旧的产品视觉说明。",
        "product.homeVisualTitle": "创作者激励与收益面板",
        "product.homeVisualCaption": "用更明确的激励场景，说明创作者支持、分发与收益沉淀如何在社区内形成闭环。",
        "howItWorks.eyebrow": "工作原理",
        "howItWorks.title": "Fiber Network：社区支付通道架构。",
        "howItWorks.description": "Fiber Network 将创作者支付能力作为可插拔通道接入。",
        "useCases.eyebrow": "使用场景",
        "useCases.title": "适用于内容与社群高度活跃的场景。",
        "useCases.description": "无论是垂类社区还是兴趣社区，都能把真实互动转换为真实收益。",
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
vi.mock("../../components/FiberReveal", () => ({
  default: ({ children, className = "" }) => <div className={className}>{children}</div>,
}));

describe("HomePage", () => {
  it("keeps the hero CTA path and renders localized editorial content", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelector("#product-overview.home-editorial-split")).not.toBeNull();
    expect(container.querySelector(".page-stack.home-stack")).toHaveClass("home-stack-spacious");

    const heroActions = container.querySelector(".hero-actions");
    expect(heroActions).not.toBeNull();
    expect(heroActions).toHaveClass("hero-actions-equal");
    const heroPrimaryLink = within(heroActions).getByRole("link", { name: "抢先体验" });
    const heroSecondaryLink = within(heroActions).getByRole("link", { name: "了解更多" });
    expect(heroPrimaryLink).toHaveClass("btn-hero-wide");
    expect(heroSecondaryLink).toHaveClass("btn-hero-wide");
    expect(heroSecondaryLink).toHaveAttribute("href", "https://github.com/Keith-CY/fiber-link");
    expect(heroSecondaryLink).toHaveAttribute("target", "_blank");
    expect(heroSecondaryLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(container.querySelector(".hero-highlights")).toBeNull();

    const ctaBandActions = container.querySelector(".cta-band-actions");
    expect(ctaBandActions).not.toBeNull();
    expect(ctaBandActions).toHaveClass("cta-band-actions-equal");
    const ctaBandPrimaryLink = within(ctaBandActions).getByRole("link", { name: "抢先体验" });
    const ctaBandSecondaryLink = within(ctaBandActions).getByRole("link", { name: "了解更多" });
    expect(ctaBandPrimaryLink).toHaveClass("btn-hero-wide");
    expect(ctaBandSecondaryLink).toHaveClass("btn-hero-wide");
    expect(ctaBandSecondaryLink).toHaveAttribute("href", "https://github.com/Keith-CY/fiber-link");
    expect(ctaBandSecondaryLink).toHaveAttribute("target", "_blank");
    expect(ctaBandSecondaryLink).toHaveAttribute("rel", "noopener noreferrer");

    const inlineLearnMoreLink = container.querySelector(".text-link");
    expect(inlineLearnMoreLink).not.toBeNull();
    expect(inlineLearnMoreLink).toHaveAttribute("href", "https://github.com/Keith-CY/fiber-link");
    expect(inlineLearnMoreLink).toHaveAttribute("target", "_blank");
    expect(inlineLearnMoreLink).toHaveAttribute("rel", "noopener noreferrer");

    const homeVisual = screen.getByAltText("创作者激励与收益面板");
    expect(homeVisual).toHaveAttribute("src", "/editorial/home-tip-received.jpg");
    expect(
      screen.getByRole("heading", { name: "创作者激励与收益面板" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("用更明确的激励场景，说明创作者支持、分发与收益沉淀如何在社区内形成闭环。"),
    ).toBeInTheDocument();
    expect(container.querySelector(".home-editorial-split .section-heading[data-reveal]")).not.toBeNull();
    const featureGridStack = container.querySelector(".feature-grid-premium-stack");
    expect(featureGridStack).toBeInTheDocument();
    expect(featureGridStack).toHaveClass("feature-grid-premium");
    expect(featureGridStack.querySelectorAll(".surface-panel[data-reveal]")).toHaveLength(3);
    expect(featureGridStack.querySelectorAll(".feature-stack-copy")).toHaveLength(3);
    expect(screen.getByText("适用于内容与社群高度活跃的场景。")).toBeInTheDocument();
    expect(
      screen.getByText("无论是垂类社区还是兴趣社区，都能把真实互动转换为真实收益。"),
    ).toBeInTheDocument();
    expect(container.querySelectorAll(".use-case-grid .use-case-card[data-reveal]")).toHaveLength(1);
    expect(container.querySelectorAll(".step-grid .step-card[data-reveal]")).toHaveLength(1);
    expect(container.querySelector(".page-section-announcements[data-reveal]")).not.toBeNull();
    expect(container.querySelector(".cta-band[data-reveal]")).not.toBeNull();
    expect(screen.queryByText("先回答常见疑问。")).not.toBeInTheDocument();
  });
});
