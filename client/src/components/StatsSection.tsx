import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 27, suffix: "M+", prefix: "$", label: "Client Revenue Generated", desc: "Across 350+ shipped products" },
  { value: 350, suffix: "+", prefix: "", label: "Apps Shipped on Replit", desc: "MVPs to enterprise-grade SaaS" },
  { value: 157, suffix: "+", prefix: "", label: "Founders Served", desc: "7–8 figure revenue builders" },
  { value: 2, suffix: " Only", prefix: "", label: "Spots Per Month", desc: "Strictly selective — apply now" },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [isInView, motionVal, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#0a0a14" }} ref={containerRef}>
      {/* Neon line top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #CCFF00, transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div
                className="rounded-2xl p-6 md:p-8 border transition-all duration-300 h-full"
                style={{
                  background: "rgba(55,0,255,0.15)",
                  borderColor: "rgba(204,255,0,0.12)",
                }}
              >
                {/* Big number */}
                <div
                  className="text-4xl md:text-5xl xl:text-6xl font-black tabular-nums leading-none mb-3"
                  style={{ color: "#CCFF00" }}
                >
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>

                <div className="font-black text-white text-sm uppercase tracking-wide mb-1">
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {stat.desc}
                </div>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                  style={{ background: "#CCFF00" }}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neon line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(55,0,255,0.6), transparent)" }} />
    </section>
  );
}
