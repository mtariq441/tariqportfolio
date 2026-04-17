import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const renderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#3700FF",
        pointerEvents: isLoading ? "auto" : "none",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(204,255,0,0.15) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(204,255,0,0.08) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            className="w-28 h-28 rounded-2xl flex items-center justify-center"
            style={{ background: "#CCFF00" }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(204,255,0,0.4)",
                "0 0 60px rgba(204,255,0,0.7)",
                "0 0 30px rgba(204,255,0,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="text-3xl font-black"
              style={{ color: "#3700FF" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              MT
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute -inset-3 rounded-2xl border-2"
            style={{ borderColor: "rgba(204,255,0,0.4)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider">
            CRAFTING EXCELLENCE
          </h2>

          <div className="flex gap-2 justify-center mb-6">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: "#CCFF00" }}
                animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity, delay }}
              />
            ))}
          </div>

          <p className="text-lg font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}>
            YOUR PREMIUM PORTFOLIO AWAITS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: "#CCFF00" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-center"
      >
        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
          Muhammad Tariq • Full Stack SaaS Builder
        </p>
      </motion.div>
    </motion.div>
  );
}
