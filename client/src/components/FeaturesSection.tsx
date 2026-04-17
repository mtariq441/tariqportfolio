import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Sparkles, Shield, TrendingUp, Lightbulb } from "lucide-react";

const features = [
  {
    num: "01",
    icon: TrendingUp,
    title: "Revenue-First Development",
    description:
      "Every feature, every line of code is engineered for revenue, conversions, and sustainable growth. No fluff—only what makes money.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Lightning-Fast MVPs",
    description:
      "From zero to paying users in 2–4 weeks on Replit. Next.js + Supabase + Clerk + Stripe. Ship fast, iterate faster.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Production-Ready Code",
    description:
      "Scalable, secure, 99.9% uptime. Bank-level security. Handoff-ready code you can give to any engineering team on day one.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Premium UI + Animations",
    description:
      "Three.js, GSAP, Framer Motion. Premium interactions that feel like Apple. Converts casual visitors into paying customers.",
  },
  {
    num: "05",
    icon: Lightbulb,
    title: "Zero Tech Debt",
    description:
      "Clean, documented, organized architecture. No shortcuts. No legacy code. Built for scale from day one, not from day 500.",
  },
  {
    num: "06",
    icon: Shield,
    title: "Replit-Native Speed",
    description:
      "Built on Replit for founders. Deploy in seconds. Scale from prototype to $10M revenue without infrastructure nightmares.",
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={containerRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-white opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ color: "#3700FF" }}>
              ✦ What You Get
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight" style={{ color: "#0a0a0a" }}>
              WHY FOUNDERS{" "}
              <br />
              <span
                className="inline-block rounded-xl px-3 py-1"
                style={{ background: "#3700FF", color: "white" }}
              >
                HIRE ME
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:max-w-xs"
          >
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              I work with 7–8 figure founders scaling to $10M+. Here's exactly what you get when you work with me.
            </p>
            <button
              className="font-black text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "#3700FF", color: "#3700FF" }}
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              See Results →
            </button>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const isHighlight = index === 1;
            return (
              <motion.div
                key={feature.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-2xl border-2 p-8 cursor-pointer relative overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isHighlight ? "#3700FF" : "#f0f0f0",
                  background: isHighlight ? "#3700FF" : "white",
                }}
              >
                {/* Big ghost number */}
                <div
                  className="absolute -top-3 -right-2 text-8xl font-black leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    color: isHighlight ? "rgba(204,255,0,0.12)" : "rgba(55,0,255,0.05)",
                    opacity: 0.6,
                  }}
                >
                  {feature.num}
                </div>

                <div className="relative z-10">
                  {/* Number badge + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={
                        isHighlight
                          ? { background: "#CCFF00", color: "#3700FF" }
                          : { background: "#f5f5f5", color: "#3700FF" }
                      }
                    >
                      {feature.num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={
                        isHighlight
                          ? { background: "rgba(204,255,0,0.2)" }
                          : { background: "#f0f0f0" }
                      }
                    >
                      <feature.icon
                        className="w-5 h-5"
                        style={{ color: isHighlight ? "#CCFF00" : "#3700FF" }}
                      />
                    </div>
                  </div>

                  <h3
                    className="text-lg font-black uppercase mb-3 leading-tight"
                    style={{ color: isHighlight ? "white" : "#0a0a0a" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isHighlight ? "rgba(255,255,255,0.65)" : "#777" }}
                  >
                    {feature.description}
                  </p>

                  <div
                    className="mt-6 text-xs font-black uppercase tracking-wide flex items-center gap-1"
                    style={{ color: isHighlight ? "#CCFF00" : "#3700FF" }}
                  >
                    Learn More →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
