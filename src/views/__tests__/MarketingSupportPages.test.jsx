import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProductPage from "../ProductPage";
import HowItWorksPage from "../HowItWorksPage";

vi.mock("../../hooks/useLocalePaths", () => ({
  useLocalePaths: () => ({
    localizePath: (slug = "") => (slug ? `/zh/${slug}` : "/zh"),
  }),
}));

vi.mock("../../contexts/LocaleContext", () => ({
  useLocale: () => ({
    t: (key) =>
      ({
        "product.eyebrow": "产品说明",
        "product.title": "我们提供面向社区的支付层，而不是钱包产品。",
        "product.intro": "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制。",
        "product.visualTitle": "旧的产品视觉标题",
        "product.visualCaption": "旧的产品视觉说明。",
        "product.workflowVisualTitle": "社区支付路径流程图",
        "product.workflowVisualCaption": "用清晰的流程视图展示支持动作如何进入结算与提现。",
        "useCases.eyebrow": "使用场景",
        "useCases.title": "适用于内容与社群高度活跃的场景。",
        "useCases.description": "无论是垂类社区还是兴趣社区，都能把真实互动转换为真实收益。",
        "howItWorks.eyebrow": "工作原理",
        "howItWorks.title": "Fiber Network：社区支付通道架构。",
        "howItWorks.description": "Fiber Network 将创作者支付能力作为可插拔通道接入。",
        "requestDemo.eyebrow": "抢先体验",
        "requestDemo.title": "申请 Fiber Link 抢先体验资格。",
        "faq.cta": "如果你有独特的场景，我们愿意先帮你画一版流程。",
        "nav.requestDemo": "抢先体验",
        "hero.primary": "抢先体验",
      }[key]),
    dict: {
      product: {
        cards: [{ title: "给管理员", description: "管理员收益说明" }],
      },
      useCases: {
        cases: [{ title: "创作社区", description: "对高质量内容贡献及时打赏。" }],
      },
      howItWorks: {
        steps: [{ title: "社区接入 Fiber Link", description: "管理员完成接入。" }],
      },
    },
  }),
}));

vi.mock("../../components/EditorialImagePanel", () => ({
  default: ({ alt, src, title, body }) => (
    <figure>
      <img alt={alt} src={src} />
      <figcaption>
        <h3>{title}</h3>
        <p>{body}</p>
      </figcaption>
    </figure>
  ),
}));

describe("marketing support pages", () => {
  it("renders product imagery and how-it-works system diagram", () => {
    render(<ProductPage />);
    expect(screen.getByAltText("社区支付路径流程图")).toHaveAttribute(
      "src",
      "/editorial/product-workflow.svg",
    );
    expect(
      screen.getByRole("heading", { name: "社区支付路径流程图" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("用清晰的流程视图展示支持动作如何进入结算与提现。"),
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText("Desk setup tracking community earnings"),
    ).not.toBeInTheDocument();

    render(<HowItWorksPage />);
    expect(screen.getByTestId("workflow-system-diagram")).toBeInTheDocument();
    expect(screen.getByText("社区接入 Fiber Link")).toBeInTheDocument();
  });
});
