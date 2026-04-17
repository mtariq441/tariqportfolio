import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2400;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const counter = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * 100), 100));
      if (current >= steps) clearInterval(counter);
    }, interval);

    const loadTimer = setTimeout(() => setIsLoading(false), 2600);
    const renderTimer = setTimeout(() => setShouldRender(false), 3200);

    return () => {
      clearInterval(counter);
      clearTimeout(loadTimer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "#3700FF",
            pointerEvents: isLoading ? "auto" : "none",
          }}
        >
          {/* Grid lines background */}
          <div className="absolute inset-0 line-grid-blue opacity-50" />

          {/* Radial glow orbs */}
          <motion.div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 65%)" }}
            animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(204,255,0,0.1) 0%, transparent 65%)" }}
            animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(204,255,0,0.4), transparent)" }}
            animate={{ y: ["-100vh", "100vh"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Central content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* MT badge with rings */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            >
              <motion.div
                className="w-32 h-32 rounded-3xl flex items-center justify-center relative z-10 pulse-glow-anim"
                style={{ background: "#CCFF00" }}
              >
                <span className="text-5xl font-black" style={{ color: "#3700FF" }}>
                  MT
                </span>
              </motion.div>

              {/* Pulsing rings */}
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-3xl border"
                  style={{
                    inset: `-${i * 12}px`,
                    borderColor: `rgba(204,255,0,${0.4 - i * 0.15})`,
                  }}
                  animate={{ opacity: [0.8, 0.1, 0.8], scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                />
              ))}
            </motion.div>

            {/* Text block */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="overflow-hidden mb-2">
                <motion.h2
                  className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  CRAFTING EXCELLENCE
                </motion.h2>
              </div>
              <motion.p
                className="text-sm font-bold tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.5)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Muhammad Tariq • Full Stack SaaS Builder
              </motion.p>
            </motion.div>

            {/* Progress */}
            <motion.div
              className="w-64 flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Loading
                </span>
                <motion.span
                  className="text-2xl font-black tabular-nums"
                  style={{ color: "#CCFF00" }}
                >
                  {count}%
                </motion.span>
              </div>
              <div
                className="w-full h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #CCFF00, #AADD00)",
                    width: `${count}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Corner tags */}
          <div className="absolute top-8 left-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs font-black tracking-widest uppercase"
              style={{ color: "rgba(204,255,0,0.5)" }}
            >
              Portfolio v2.0
            </motion.div>
          </div>
          <div className="absolute top-8 right-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xs font-black tracking-widest uppercase"
              style={{ color: "rgba(204,255,0,0.5)" }}
            >
              2025 ©
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
