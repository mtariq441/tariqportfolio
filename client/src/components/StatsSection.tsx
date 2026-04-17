import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 27, suffix: "M+", prefix: "$", label: "Client Revenue", sub: "Generated across all projects" },
  { value: 350, suffix: "+", prefix: "", label: "Apps Shipped", sub: "MVPs to enterprise SaaS" },
  { value: 157, suffix: "+", prefix: "", label: "Founders Served", sub: "7–8 figure builders" },
  { value: 2, suffix: "", prefix: "", label: "Spots / Month", sub: "Strictly selective — apply now" },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [isInView, motionVal, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" style={{ background: "#0a0a14" }} ref={containerRef}>
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #CCFF00, transparent)" }}
      />

      {/* Background ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap"
          style={{ color: "rgba(55,0,255,0.07)" }}
        >
          RESULTS
        </span>
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-dark opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Label */}
        <motion.p
          className="text-xs font-black uppercase tracking-[0.35em] mb-12 text-center"
          style={{ color: "rgba(204,255,0,0.6)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          ✦ Verified Numbers — Real Outcomes
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(204,255,0,0.06)" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative group flex flex-col items-start p-8 md:p-12"
              style={{ background: "#0a0a14" }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(55,0,255,0.25) 0%, transparent 70%)" }}
              />

              {/* Stat number */}
              <div
                className="text-5xl md:text-6xl xl:text-7xl font-black tabular-nums leading-none mb-4 relative z-10"
                style={{ color: "#CCFF00" }}
              >
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>

              <div className="font-black text-white text-sm uppercase tracking-widest mb-1.5 relative z-10">
                {stat.label}
              </div>
              <div className="text-xs relative z-10" style={{ color: "rgba(255,255,255,0.3)" }}>
                {stat.sub}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px]"
                style={{ background: "#CCFF00" }}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {["Next.js", "Supabase", "Clerk", "Stripe", "OpenAI", "Replit", "Resend"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full"
              style={{ background: "rgba(204,255,0,0.06)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(204,255,0,0.1)" }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom neon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(55,0,255,0.5), transparent)" }}
      />
    </section>
  );
}
