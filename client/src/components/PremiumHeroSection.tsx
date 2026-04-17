import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function PremiumHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[65px]"
      style={{ background: "#3700FF", position: "relative" }}
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 line-grid-blue"
        style={{ y: bgY }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(204,255,0,0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-10 items-center">

          {/* Left: Main copy */}
          <motion.div style={{ y: textY }} className="space-y-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.span
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-full"
                style={{ background: "#CCFF00", color: "#3700FF" }}
                animate={{ boxShadow: ["0 0 0px rgba(204,255,0,0)", "0 0 20px rgba(204,255,0,0.6)", "0 0 0px rgba(204,255,0,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                Available — 2 Spots This Month
              </motion.span>
            </motion.div>

            {/* Huge headline */}
            <div className="space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] uppercase text-white">
                  I SHIP
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1
                  className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] uppercase"
                  style={{ color: "#CCFF00" }}
                >
                  $1M–$10M+
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] uppercase text-white">
                  SAAS ON
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1
                  className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] uppercase text-outline-white"
                >
                  REPLIT
                </h1>
              </motion.div>
            </div>

            {/* Sub copy + CTAs */}
            <motion.div
              className="space-y-6 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">
                Muhammad Tariq — where speed meets precision. Join founders who've unlocked
                $27M+ in growth shipping on Replit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
                  style={{ background: "#CCFF00", color: "#3700FF" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204,255,0,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
                <motion.button
                  className="flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-full border-2 text-white"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                  whileHover={{ borderColor: "rgba(255,255,255,0.6)", scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Results
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main card */}
              <div
                className="rounded-3xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(204,255,0,0.25)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Card grid bg */}
                <div className="absolute inset-0 dot-grid-dark opacity-40" />

                <div className="relative z-10 space-y-6">
                  {/* Identity */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 pulse-glow-anim"
                      style={{ background: "#CCFF00", color: "#3700FF" }}
                    >
                      MT
                    </div>
                    <div>
                      <div className="font-black text-white text-base">Muhammad Tariq</div>
                      <div className="text-white/50 text-xs uppercase tracking-widest">Full Stack Builder</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-black uppercase px-2 py-1 rounded-full" style={{ background: "rgba(204,255,0,0.2)", color: "#CCFF00" }}>
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(204,255,0,0.15)" }} />

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "$27M+", label: "Revenue Generated" },
                      { value: "350+", label: "Apps Shipped" },
                      { value: "157+", label: "Founders Served" },
                      { value: "2 Only", label: "Spots / Month" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl p-4"
                        style={{ background: "rgba(204,255,0,0.1)" }}
                      >
                        <div className="font-black text-xl" style={{ color: "#CCFF00" }}>
                          {s.value}
                        </div>
                        <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Supabase", "Clerk", "Stripe", "Replit"].map((t) => (
                        <span
                          key={t}
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full py-3 rounded-2xl font-black text-sm uppercase tracking-wide"
                    style={{ background: "#CCFF00", color: "#3700FF" }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(204,255,0,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book Your Spot →
                  </motion.button>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-2 shadow-xl"
                style={{ background: "#CCFF00" }}
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="font-black text-xs uppercase leading-tight" style={{ color: "#3700FF" }}>
                  🚀 Shipping Fast
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Horizontal marquee bottom strip — full-width, direct child of section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="marquee-track-slow">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[0.2em] px-8 whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              $27M+ Revenue Generated
              <span className="mx-6" style={{ color: "rgba(204,255,0,0.4)" }}>✦</span>
              350+ Apps Shipped
              <span className="mx-6" style={{ color: "rgba(204,255,0,0.4)" }}>✦</span>
              157+ Founders Served
              <span className="mx-6" style={{ color: "rgba(204,255,0,0.4)" }}>✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
