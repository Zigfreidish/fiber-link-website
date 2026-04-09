import React from "react";
import { describe, expect, it, vi } from "vitest";

const { redirect } = vi.hoisted(() => ({
  redirect: vi.fn(() => {
    throw new Error("NEXT_REDIRECT");
  }),
}));

vi.mock("next/navigation", () => ({
  redirect,
}));

import ProductRoute from "../../../app/[locale]/product/page";

describe("localized product route", () => {
  it("redirects legacy product traffic to the homepage product section", async () => {
    globalThis.React = React;
    await expect(
      Promise.resolve().then(() =>
        ProductRoute({ params: Promise.resolve({ locale: "zh" }) }),
      ),
    ).rejects.toThrow("NEXT_REDIRECT");

    expect(redirect).toHaveBeenCalledWith("/zh#product-overview");
  });
});
