import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const skipParam = new URLSearchParams(window.location.search).get("preview");
  const alreadySeen = skipParam || sessionStorage.getItem("mt_loaded");
  const [isLoading, setIsLoading] = useState(!alreadySeen);
  const [shouldRender, setShouldRender] = useState(!alreadySeen);
  const [count, setCount] = useState(alreadySeen ? 100 : 0);

  useEffect(() => {
    if (alreadySeen) return;

    const duration = 500;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const counter = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * 100), 100));
      if (current >= steps) clearInterval(counter);
    }, interval);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("mt_loaded", "1");
    }, 550);
    const renderTimer = setTimeout(() => setShouldRender(false), 900);

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
          exit={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "#3700FF",
            pointerEvents: isLoading ? "auto" : "none",
          }}
        >
          <div className="absolute inset-0 line-grid-blue opacity-30" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              className="w-24 h-24 rounded-2xl flex items-center justify-center font-black text-4xl"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              MT
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-sm font-black tracking-[0.3em] uppercase text-white/60">
                Muhammad Tariq
              </p>
            </motion.div>

            <motion.div
              className="w-48 flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <div
                className="w-full h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "#CCFF00",
                    width: `${count}%`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
