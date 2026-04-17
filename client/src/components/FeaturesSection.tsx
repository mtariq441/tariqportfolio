import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Sparkles, Shield, TrendingUp, Lightbulb } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Revenue-First Development",
    description:
      "Every feature, every line of code is engineered for revenue, conversions, and sustainable growth.",
    accent: "#CCFF00",
  },
  {
    icon: Zap,
    title: "Lightning-Fast MVPs",
    description:
      "From zero to paying users in 2–4 weeks on Replit. Next.js + Supabase + Clerk + Stripe. Ship fast, iterate faster.",
    accent: "#3700FF",
  },
  {
    icon: Code2,
    title: "Production-Ready Code",
    description:
      "Scalable, secure, 99.9% uptime. Bank-level security. Handoff-ready code for any engineering team.",
    accent: "#CCFF00",
  },
  {
    icon: Sparkles,
    title: "Premium UI + Animations",
    description:
      "Three.js, GSAP, Framer Motion. Premium interactions that feel like Apple. Converts visitors into customers.",
    accent: "#3700FF",
  },
  {
    icon: Lightbulb,
    title: "Zero Tech Debt",
    description:
      "Clean, documented, organized architecture. No shortcuts. No legacy code. Built for scale from day one.",
    accent: "#CCFF00",
  },
  {
    icon: Shield,
    title: "Replit-Native Speed",
    description:
      "Built on Replit for founders. Deploy in seconds. Scale from prototype to $10M revenue without headaches.",
    accent: "#3700FF",
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight" style={{ color: "#0a0a0a" }}>
              CREATIVE{" "}
              <span
                className="px-3 py-1 rounded-full inline-block"
                style={{ background: "#3700FF", color: "white" }}
              >
                SOLUTIONS
              </span>
              <br />
              JUST FOR YOU
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:max-w-xs"
          >
            <p className="text-gray-500 mb-4 text-sm">
              I offer a range of creative services designed to bring your vision to life and generate revenue.
            </p>
            <button
              className="font-black text-sm uppercase tracking-wide px-6 py-2 rounded-full border-2 hover:scale-105 transition-all"
              style={{ borderColor: "#3700FF", color: "#3700FF" }}
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View All
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl p-8 border-2 cursor-pointer transition-all group"
              style={{
                borderColor: index === 2 ? "#CCFF00" : "#f0f0f0",
                background: index === 2 ? "#CCFF00" : "white",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: index === 2 ? "#3700FF" : "#f5f5f5",
                }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: index === 2 ? "#CCFF00" : "#3700FF" }}
                />
              </div>

              <h3
                className="text-lg font-black uppercase mb-3"
                style={{ color: index === 2 ? "#3700FF" : "#0a0a0a" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: index === 2 ? "#3700FF/80" : "#666" }}
              >
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span
                  className="text-xs font-black uppercase tracking-wide"
                  style={{ color: index === 2 ? "#3700FF" : "#3700FF" }}
                >
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
