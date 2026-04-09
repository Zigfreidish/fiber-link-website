import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
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
        "product.title": "面向社区平台的支付层。",
        "product.intro": "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制。",
        "product.visualTitle": "旧的产品视觉标题",
        "product.visualCaption": "旧的产品视觉说明。",
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
              eyebrow: "用户界面",
              icon: "community",
              title: "Fiber Link Discourse 插件",
              description: "作为社区成员发起小额支持的前端入口。",
            },
            {
              eyebrow: "后端服务",
              icon: "service",
              title: "Fiber Link 服务",
              description: "负责逻辑校验、余额约束与支付处理。",
            },
            {
              eyebrow: "数据 / 缓存层",
              icon: "cache",
              title: "Redis",
              description: "用于共享 nonce 与重放保护，保证请求安全。",
            },
            {
              eyebrow: "结算层 / 链上",
              icon: "settlement",
              title: "CKB Fiber Network",
              description: "负责最终的小额支付结算与上链确认。",
            },
          ],
          steps: [
            {
              number: "1",
              title: "交易发起",
              description: "成员在社区内通过插件直接发起打赏动作。",
            },
            {
              number: "2",
              title: "请求处理与安全检查",
              description: "服务接收请求后，会先校验 nonce 与重放风险。",
            },
            {
              number: "3",
              title: "约束与余额校验",
              description: "系统确认余额充足，并保持账本约束成立。",
            },
            {
              number: "4",
              title: "区块链结算",
              description: "验证通过后，由 Fiber Network 完成最终结算。",
            },
          ],
          admin: {
            eyebrow: "管理与监督",
            icon: "admin",
            title: "独立管理员后台",
            description: "供运营侧监控、设定限额并查看关键状态。",
            stepNumber: "5",
            stepTitle: "管理侧监督",
            stepDescription: "管理员通过后台实时观察流转状态，并保留审计线索。",
          },
        },
      },
    },
  }),
}));

vi.mock("../../components/EditorialImagePanel", () => ({
  default: ({ alt, src, title, body, className = "" }) => (
    <figure className={className}>
      <img alt={alt} src={src} />
      <figcaption>
        <h3>{title}</h3>
        <p>{body}</p>
      </figcaption>
    </figure>
  ),
}));
vi.mock("../../components/FiberReveal", () => ({
  default: ({ children, className = "" }) => <div className={className}>{children}</div>,
}));

describe("marketing support pages", () => {
  it("renders the how-it-works system diagram with localized copy", () => {
    render(<HowItWorksPage />);
    const workflowDiagram = screen.getByTestId("workflow-system-diagram");
    expect(workflowDiagram).toBeInTheDocument();
    expect(workflowDiagram).not.toHaveClass("workflow-system-diagram-reference");
    expect(screen.getByAltText("Fiber Link 工作流系统图")).toHaveAttribute(
      "src",
      "/editorial/how-it-works-reference.jpg",
    );
    expect(document.querySelector(".page-hero[data-reveal]")).not.toBeNull();
    expect(document.querySelector(".workflow-diagram-stage[data-reveal]")).not.toBeNull();
    expect(document.querySelectorAll(".workflow-step-stack .surface-panel[data-reveal]")).toHaveLength(1);
    expect(document.querySelector(".cta-band[data-reveal]")).not.toBeNull();
    expect(screen.getByText("社区接入 Fiber Link")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "申请 Fiber Link 抢先体验资格。" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Community / Plugin entry point"),
    ).not.toBeInTheDocument();
  });
});
