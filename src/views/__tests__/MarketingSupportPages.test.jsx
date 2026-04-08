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
        "requestDemo.panelCopy": "当前采用邀请制体验流程：先预览产品，再提交申请，由团队审核后人工开通。",
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
        diagram: {
          ariaLabel: "Fiber Link 工作流系统图",
          layers: [
            {
              title: "社区 / 插件入口",
              items: ["社区应用", "插件触发器", "支持意图"],
            },
            {
              title: "Fiber Link 服务层",
              items: ["意图路由", "策略校验", "提现编排"],
            },
            {
              title: "Redis 状态与重放保护层",
              items: ["会话状态", "Nonce 窗口", "幂等缓存"],
            },
            {
              title: "CKB Fiber 结算层",
              items: ["通道更新", "结算证明", "提现就绪"],
            },
          ],
          admin: {
            title: "管理员运营看板",
            items: ["风险控制", "审核队列", "审计时间线"],
          },
        },
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
    const { unmount } = render(<ProductPage />);
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

    unmount();
    render(<HowItWorksPage />);
    expect(screen.getByTestId("workflow-system-diagram")).toBeInTheDocument();
    expect(screen.getByText("社区 / 插件入口")).toBeInTheDocument();
    expect(screen.getByText("意图路由")).toBeInTheDocument();
    expect(screen.getByText("社区接入 Fiber Link")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "申请 Fiber Link 抢先体验资格。" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Community / Plugin entry point"),
    ).not.toBeInTheDocument();
  });
});
