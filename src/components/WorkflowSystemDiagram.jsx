"use client";

import React from "react";
import { useLocale } from "../contexts/LocaleContext";

export default function WorkflowSystemDiagram({ className = "" }) {
  const { dict } = useLocale();
  const diagram = dict.howItWorks?.diagram ?? {};
  const layers = Array.isArray(diagram.layers) ? diagram.layers : [];
  const admin = diagram.admin ?? {};

  return (
    <figure
      className={`workflow-system-diagram ${className}`.trim()}
      data-testid="workflow-system-diagram"
      aria-label={diagram.ariaLabel ?? ""}
    >
      <div className="workflow-system-grid">
        <div className="workflow-system-main">
          {layers.map((layer, index) => (
            <React.Fragment key={layer.title}>
              <section className="workflow-band">
                <p className="workflow-band-title">{layer.title}</p>
                <div className="workflow-band-body">
                  {(layer.items ?? []).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>

              {index < layers.length - 1 ? (
                <div className="workflow-flow-divider" aria-hidden="true" />
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <section className="workflow-band workflow-band-admin">
          <p className="workflow-band-title">{admin.title}</p>
          <div className="workflow-band-body">
            {(admin.items ?? []).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </figure>
  );
}
