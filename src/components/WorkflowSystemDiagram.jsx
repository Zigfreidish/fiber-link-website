"use client";

import React from "react";
import { useLocale } from "../contexts/LocaleContext";

const WORKFLOW_REFERENCE_IMAGE = "/editorial/how-it-works-reference.jpg";

export default function WorkflowSystemDiagram({ className = "" }) {
  const { dict } = useLocale();
  const diagram = dict.howItWorks?.diagram ?? {};

  return (
    <figure
      className={`workflow-system-diagram ${className}`.trim()}
      data-testid="workflow-system-diagram"
    >
      <img
        className="workflow-system-image"
        src={WORKFLOW_REFERENCE_IMAGE}
        alt={diagram.ariaLabel ?? ""}
        loading="lazy"
      />
    </figure>
  );
}
