import { useEffect, useRef } from "react";
import anime from "animejs";

const DecorPulse = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const nodes = ref.current.querySelectorAll(".decor-dot");
    const timeline = anime
      .timeline({
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
      })
      .add({
        targets: nodes,
        translateY: [-6, 0],
        scale: [0.95, 1.08],
        opacity: [0.22, 0.85],
        delay: anime.stagger(120),
        duration: 1100,
      })
      .add({
        targets: ".decor-line",
        scaleX: [0.78, 1.06],
        duration: 1200,
        easing: "easeInOutQuad",
      });

    return () => timeline.pause();
  }, []);

  return (
    <div className="hero-decoration" aria-hidden="true" ref={ref}>
      <span className="decor-line" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
      <span className="decor-dot" />
    </div>
  );
};

export default DecorPulse;
