import { useEffect, useRef } from "react";

const DOTS = 12;
const MAX_INTENSITY = 0.55;

const rand = (min, max) => Math.random() * (max - min) + min;

const HeroHeatmapCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seeds = Array.from({ length: DOTS }).map(() => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(120, 240),
      t: rand(0, Math.PI * 2),
      speed: rand(0.12, 0.35),
      driftX: rand(-0.08, 0.08),
      driftY: rand(-0.06, 0.06),
      hue: Math.random() > 0.5 ? 210 : 160,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timeMs) => {
      const time = timeMs / 1000;
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      ctx.fillStyle = "#f6f8ff";
      ctx.fillRect(0, 0, width, height);

      seeds.forEach((dot) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * dot.speed + dot.t);
        const alpha = (0.18 + 0.32 * pulse) * MAX_INTENSITY;
        const x = width * dot.x + Math.sin(time * 0.2 + dot.t) * 60 + dot.driftX * time * 30;
        const y = height * dot.y + Math.cos(time * 0.22 + dot.t) * 60 + dot.driftY * time * 24;
        const radius = dot.r * (0.85 + pulse * 0.35);

        const gradient = ctx.createRadialGradient(x, y, radius * 0.1, x, y, radius);
        gradient.addColorStop(0, `rgba(${dot.hue}, ${dot.hue + 20}, 255, ${alpha})`);
        gradient.addColorStop(0.7, `rgba(${dot.hue}, ${dot.hue + 20}, 255, ${alpha * 0.35})`);
        gradient.addColorStop(1, "rgba(22, 48, 104, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(x, y, radius, radius * 0.82, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-heatmap" aria-hidden="true" />;
};

export default HeroHeatmapCanvas;
