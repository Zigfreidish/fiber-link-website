"use client";

const metrics = [
  { value: "$42.8k", width: "86%" },
  { value: "1.3k", width: "62%" },
  { value: "96%", width: "74%" },
];

const ledgerRows = [0, 1, 2, 3];

const CommunityVisual = ({ title, description }) => {
  return (
    <figure className="visual-card">
      <span className="visual-orb visual-orb-a" aria-hidden="true" />
      <span className="visual-orb visual-orb-b" aria-hidden="true" />

      <div className="visual-window">
        <div className="visual-window-top" aria-hidden="true">
          <span className="visual-window-dot visual-window-dot-warm" />
          <span className="visual-window-dot visual-window-dot-cool" />
          <span className="visual-window-dot visual-window-dot-soft" />
        </div>

        <div className="visual-metric-grid" aria-hidden="true">
          {metrics.map((item) => (
            <div key={item.value} className="visual-metric-card">
              <span className="visual-metric-label" />
              <strong>{item.value}</strong>
              <span className="visual-metric-bar" style={{ width: item.width }} />
            </div>
          ))}
        </div>

        <div className="visual-ledger" aria-hidden="true">
          {ledgerRows.map((row) => (
            <div key={row} className="visual-ledger-row">
              <span className="visual-ledger-avatar" />
              <div className="visual-ledger-lines">
                <span className="visual-ledger-line" />
                <span className="visual-ledger-line visual-ledger-line-short" />
              </div>
              <span className="visual-ledger-amount" />
            </div>
          ))}
        </div>
      </div>

      <figcaption className="visual-caption">
        <strong>{title}</strong>
        <span>{description}</span>
      </figcaption>
    </figure>
  );
};

export default CommunityVisual;
