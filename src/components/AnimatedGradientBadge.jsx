"use client";

/**
 * Port of MagicUI AnimatedGradientText — no Tailwind, no shadcn.
 *
 * Renders a pill with an animated gradient border (1 px gradient
 * outline) and gradient-clipped text inside, both scrolling at the
 * same speed so they feel unified.
 *
 * Usage:
 *   <AnimatedGradientBadge href="/en/request-demo">
 *     Early Access
 *   </AnimatedGradientBadge>
 */

import Link from "next/link";

export default function AnimatedGradientBadge({ children, href }) {
  return (
    <Link href={href} className="agb-outer" aria-label={typeof children === "string" ? children : undefined}>
      <span className="agb-inner">
        {/* animated gradient text */}
        <span className="agb-text">{children}</span>
        {/* chevron arrow */}
        <span className="agb-arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
