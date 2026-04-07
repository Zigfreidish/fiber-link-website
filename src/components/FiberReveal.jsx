"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FiberReveal = ({ children, className = "", y = 26, delay = 0, once = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    const nodes = Array.from(ref.current?.querySelectorAll("[data-reveal]"));
    const targets = nodes.length ? nodes : [ref.current];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [y, once]);

  return (
    <div ref={ref} className={className} data-fiber-reveal-delay={delay}>
      {children}
    </div>
  );
};

export default FiberReveal;
