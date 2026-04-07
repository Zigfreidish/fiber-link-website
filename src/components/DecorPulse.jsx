"use client";

import { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";

const DecorPulse = ({ variant = "hero" }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const dots = Array.from(ref.current.querySelectorAll(".decor-dot"));
    const line = ref.current.querySelector(".decor-line");
    const sheen = ref.current.querySelector(".decor-pulse-sheen");

    const timeline = createTimeline({
      loop: true,
      direction: "alternate",
      autoplay: true,
      easing: "easeInOutSine",
    });

    timeline
      .add(dots, {
        translateY: [-6, 6],
        translateX: [-3, 3],
        scale: [0.94, 1.12],
        opacity: [0.2, 0.85],
        delay: stagger(85),
        duration: 1350,
      })
      .add(line, {
        scaleX: [0.7, 1.06],
        scaleY: [0.7, 1.1],
        opacity: [0.12, 0.45],
        duration: 1300,
      }, "-=900")
      .add(sheen, {
        translateX: [-24, 24],
        opacity: [0.1, 0.35, 0.08],
        duration: 1800,
      }, "-=1100");

    return () => timeline.pause();
  }, []);

  return (
    <div className={`hero-decoration ${variant}`} aria-hidden="true" ref={ref}>
      <span className="decor-line" />
      <span className="decor-pulse-sheen" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
    </div>
  );
};

export default DecorPulse;
