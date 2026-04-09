import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import RequestDemoPage from "../RequestDemoPage";
import FaqPage from "../FaqPage";
import LegalPage from "../LegalPage";

vi.mock("../../hooks/useLocalePaths", () => ({
  useLocalePaths: () => ({
    currentLocale: "zh",
    localizePath: (slug = "") => (slug ? `/zh/${slug}` : "/zh/request-demo"),
  }),
}));

vi.mock("../../contexts/LocaleContext", () => ({
  useLocale: () => ({
    t: (key) =>
      ({
        "requestDemo.eyebrow": "抢先体验",
        "requestDemo.title": "申请 Fiber Link 抢先体验资格。",
        "requestDemo.description": "你可以先访问 demo.fiberlink.me 预览产品。",
        "requestDemo.panelTitle": "抢先体验申请流程",
        "requestDemo.panelCopy": "当前采用邀请制体验流程。",
        "requestDemo.form.formSubtitle": "我们会基于这些信息判断优先级，并在一周内与你联系。",
        "requestDemo.form.helper": "我们会基于这些信息判断优先级，并在一周内与你联系。",
        "requestDemo.form.name": "姓名",
        "requestDemo.form.email": "工作邮箱",
        "requestDemo.form.org": "公司 / 社区",
        "requestDemo.form.role": "角色",
        "requestDemo.form.notes": "使用场景 / 备注",
        "requestDemo.form.submit": "抢先体验",
        "requestDemo.form.submitting": "提交中...",
        "requestDemo.form.placeholderName": "你的名字",
        "requestDemo.form.placeholderEmail": "you@company.com",
        "requestDemo.form.placeholderOrg": "产品社区",
        "requestDemo.form.placeholderNotes": "请说明你的社区类型。",
        "requestDemo.form.error": "提交失败",
        "requestDemo.form.success": "申请已收到",
        "faq.eyebrow": "常见问题",
        "faq.title": "先回答常见疑问。",
        "faq.cta": "如果你有独特的场景，我们愿意先帮你画一版流程。",
        "nav.home": "首页",
        "nav.requestDemo": "抢先体验",
        "hero.learnMore": "了解更多",
      }[key]),
    dict: {
      requestDemo: {
        roleOptions: ["管理员"],
        steps: ["先在", "提交团队信息与预期使用场景"],
      },
      faq: {
        items: [{ question: "这是不是钱包产品？", answer: "不是。" }],
      },
    },
  }),
}));

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("supporting marketing pages", () => {
  it("keeps request-demo structured but leaves faq and legal image-free", () => {
    const { container: requestContainer } = render(<RequestDemoPage />);
    expect(requestContainer.querySelector(".demo-shell-spacious")).not.toBeNull();
    expect(requestContainer.querySelector(".demo-story")).not.toBeNull();
    expect(
      screen.getByRole("heading", {
        name: "我们会基于这些信息判断优先级，并在一周内与你联系。",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /使用场景/i })).toBeInTheDocument();

    const { container: faqContainer } = render(<FaqPage />);
    expect(faqContainer.querySelector(".page-section.page-section-faq-top")).not.toBeNull();
    expect(faqContainer.querySelector(".faq-details-list-spacious")).not.toBeNull();
    expect(faqContainer.querySelectorAll("img")).toHaveLength(0);

    const pageData = {
      title: "隐私政策",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [{ heading: "适用范围", text: "正文" }],
    };
    const { container: legalContainer } = render(<LegalPage pageData={pageData} />);
    expect(legalContainer.querySelector(".legal-body-spacious")).not.toBeNull();
    expect(legalContainer.querySelectorAll("img")).toHaveLength(0);
    expect(screen.getByRole("link", { name: "适用范围" })).toBeInTheDocument();
  });

  it("routes the success-state home button to the locale root after submitting", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    render(<RequestDemoPage />);

    fireEvent.change(screen.getByLabelText("姓名"), { target: { value: "测试用户" } });
    fireEvent.change(screen.getByLabelText("工作邮箱"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("公司 / 社区"), { target: { value: "Fiber Link" } });
    fireEvent.change(screen.getByLabelText("角色"), { target: { value: "管理员" } });
    fireEvent.change(screen.getByLabelText("使用场景 / 备注"), { target: { value: "验证首页跳转" } });

    fireEvent.submit(screen.getByRole("button", { name: "抢先体验" }).closest("form"));

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "首页" })).toHaveAttribute("href", "/zh");
    });
  });
});
