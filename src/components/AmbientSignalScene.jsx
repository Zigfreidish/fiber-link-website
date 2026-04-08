"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AmbientSignalScene({ className = "" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.to(".ambient-flow-route", {
        backgroundPositionX: "140px",
        duration: 4.8,
        repeat: -1,
        ease: "none",
        stagger: 0.2,
      });

      gsap.to(".ambient-flow-packet-primary", {
        x: 232,
        duration: 5.8,
        repeat: -1,
        ease: "none",
        stagger: 1.24,
      });

      gsap.to(".ambient-flow-packet-secondary", {
        x: 196,
        duration: 4.9,
        repeat: -1,
        ease: "none",
        stagger: 1.08,
        delay: 0.35,
      });

      gsap.to(".ambient-flow-node-routing", {
        scale: 1.08,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`ambient-signal-scene ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="ambient-flow-node ambient-flow-node-source" />
      <span className="ambient-flow-node ambient-flow-node-routing" />
      <span className="ambient-flow-node ambient-flow-node-settlement" />

      <span className="ambient-flow-route ambient-flow-route-upper" />
      <span className="ambient-flow-route ambient-flow-route-lower" />

      <span className="ambient-flow-packet ambient-flow-packet-primary ambient-flow-packet-upper ambient-flow-packet-1" />
      <span className="ambient-flow-packet ambient-flow-packet-primary ambient-flow-packet-upper ambient-flow-packet-2" />
      <span className="ambient-flow-packet ambient-flow-packet-secondary ambient-flow-packet-lower ambient-flow-packet-3" />
      <span className="ambient-flow-packet ambient-flow-packet-secondary ambient-flow-packet-lower ambient-flow-packet-4" />

      <span className="ambient-flow-label ambient-flow-label-source">source</span>
      <span className="ambient-flow-label ambient-flow-label-routing">routing</span>
      <span className="ambient-flow-label ambient-flow-label-settlement">settlement</span>
    </div>
  );
}
