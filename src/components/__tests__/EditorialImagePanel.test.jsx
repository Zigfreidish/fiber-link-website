import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EditorialImagePanel from "../EditorialImagePanel";

describe("EditorialImagePanel", () => {
  it("renders a local image with alt text and editorial copy", () => {
    render(
      <EditorialImagePanel
        src="/editorial/home-community-session.jpg"
        alt="Community operator reviewing creator earnings"
        eyebrow="For operators"
        title="Launch support without wallet migration."
        body="Use fixed, trusted imagery instead of random runtime visuals."
      />,
    );

    expect(
      screen.getByAltText("Community operator reviewing creator earnings"),
    ).toHaveAttribute("src", "/editorial/home-community-session.jpg");
    expect(screen.getByText("For operators")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Launch support without wallet migration.",
      }),
    ).toBeInTheDocument();
  });
});
