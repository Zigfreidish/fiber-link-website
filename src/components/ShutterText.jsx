"use client";

/**
 * ShutterText — port of hero-shutter-text.tsx (no Tailwind, no TS, no lucide)
 *
 * Each character enters with three clip-path slices sweeping in opposite
 * directions, then the real character fades in from blur.
 *
 * Props:
 *   text      — string to animate
 *   className — extra class applied to the outer wrapper
 *   delay     — base delay offset (seconds) for stagger start
 *   accentColor — color of top/bottom slices (default: blue from heatmap palette)
 *   midColor    — color of middle slice
 */

import { motion, AnimatePresence } from "framer-motion";

export default function ShutterText({
  text = "",
  className = "",
  delay = 0,
  accentColor = "#2480e0",
  midColor = "currentColor",
}) {
  const chars = text.split("");

  return (
    <AnimatePresence mode="wait">
      <span className={`shutter-text ${className}`}>
        {chars.map((char, i) => {
          const charDelay = delay + i * 0.045;
          const isSpace = char === " ";

          return (
            <span key={i} className="shutter-char">
              {/* ── main character fades in through blur ── */}
              <motion.span
                className="shutter-main"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: charDelay + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden={isSpace ? "true" : undefined}
              >
                {isSpace ? "\u00A0" : char}
              </motion.span>

              {/* slices are decorative — aria-hidden */}
              {!isSpace && (
                <>
                  {/* top slice — sweeps left→right */}
                  <motion.span
                    className="shutter-slice"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 33%, 0 33%)", color: accentColor }}
                    initial={{ x: "-110%", opacity: 0 }}
                    animate={{ x: "110%", opacity: [0, 1, 0] }}
                    transition={{ duration: 0.65, delay: charDelay, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    {char}
                  </motion.span>

                  {/* mid slice — sweeps right→left */}
                  <motion.span
                    className="shutter-slice"
                    style={{ clipPath: "polygon(0 33%, 100% 33%, 100% 66%, 0 66%)", color: midColor }}
                    initial={{ x: "110%", opacity: 0 }}
                    animate={{ x: "-110%", opacity: [0, 1, 0] }}
                    transition={{ duration: 0.65, delay: charDelay + 0.1, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    {char}
                  </motion.span>

                  {/* bottom slice — sweeps left→right */}
                  <motion.span
                    className="shutter-slice"
                    style={{ clipPath: "polygon(0 66%, 100% 66%, 100% 100%, 0 100%)", color: accentColor }}
                    initial={{ x: "-110%", opacity: 0 }}
                    animate={{ x: "110%", opacity: [0, 1, 0] }}
                    transition={{ duration: 0.65, delay: charDelay + 0.2, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    {char}
                  </motion.span>
                </>
              )}
            </span>
          );
        })}
      </span>
    </AnimatePresence>
  );
}
