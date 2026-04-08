"use client";

import React from "react";

export default function WorkflowSystemDiagram({ className = "" }) {
  return (
    <figure
      className={`workflow-system-diagram ${className}`.trim()}
      data-testid="workflow-system-diagram"
      aria-label="Fiber Link workflow system diagram"
    >
      <div className="workflow-system-grid">
        <section className="workflow-band workflow-band-entry">
          <p className="workflow-band-title">Community / Plugin Entry</p>
          <div className="workflow-chip-row">
            <span className="workflow-chip">Community apps</span>
            <span className="workflow-chip">Plugin triggers</span>
            <span className="workflow-chip">Support events</span>
          </div>
        </section>

        <section className="workflow-band workflow-band-admin">
          <p className="workflow-band-title">Admin Oversight Surface</p>
          <div className="workflow-band-body">
            <span>Risk controls</span>
            <span>Payout approvals</span>
            <span>Audit timeline</span>
          </div>
        </section>

        <section className="workflow-band workflow-band-service">
          <p className="workflow-band-title">Fiber Link Service Layer</p>
          <div className="workflow-band-body">
            <span>Intent router</span>
            <span>Policy checks</span>
            <span>Payout orchestration</span>
          </div>
        </section>

        <section className="workflow-band workflow-band-state">
          <p className="workflow-band-title">Redis State + Replay Protection</p>
          <div className="workflow-band-body">
            <span>Session ledger</span>
            <span>Nonce window</span>
            <span>Idempotency cache</span>
          </div>
        </section>

        <section className="workflow-band workflow-band-settlement">
          <p className="workflow-band-title">CKB Fiber Settlement Layer</p>
          <div className="workflow-band-body">
            <span>Channel updates</span>
            <span>Final settlement proofs</span>
            <span>Withdrawal readiness</span>
          </div>
        </section>

        <span className="workflow-link workflow-link-entry-service" />
        <span className="workflow-link workflow-link-entry-admin" />
        <span className="workflow-link workflow-link-service-state" />
        <span className="workflow-link workflow-link-state-settlement" />
      </div>
    </figure>
  );
}
