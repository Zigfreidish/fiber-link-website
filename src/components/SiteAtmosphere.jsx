"use client";

import { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";

const SiteAtmosphere = () => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("[data-atmo]"));

    const timeline = createTimeline({
      loop: true,
      easing: "easeInOutSine",
    });

    timeline
      .add(nodes, {
        translateY: [0, -10],
        opacity: [0.16, 0.32],
        duration: 2800,
        delay: stagger(210),
        direction: "alternate",
      })
      .add(nodes, {
        translateX: [0, 8],
        rotate: [0, 6],
        duration: 3000,
        delay: stagger(230),
        direction: "alternate",
      }, "-=2600");

    return () => {
      timeline.pause();
    };
  }, []);

  return (
    <div className="site-atmosphere" ref={ref} aria-hidden="true">
      <span data-atmo className="atmo-dot atmo-dot-1" />
      <span data-atmo className="atmo-dot atmo-dot-2" />
      <span data-atmo className="atmo-dot atmo-dot-3" />
    </div>
  );
};

export default SiteAtmosphere;
