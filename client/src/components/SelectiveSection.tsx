import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const criteria = [
  { title: "Founders & Teams", desc: "doing $500K–$20M+/year revenue" },
  { title: "SaaS Founders", desc: "ready to 10x fast and move decisively" },
  { title: "Startup Teams", desc: "focused on revenue and outcomes, not vanity" },
  { title: "Decisive Builders", desc: "who want production-ready code shipped fast" },
];

const notFor = [
  "MVP hobbyists with no budget clarity",
  "Teams that can't move in < 48 hours",
  "Spec writers who need 10 revision rounds",
];

export function SelectiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#3700FF" }}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 line-grid-blue opacity-60 pointer-events-none" />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.15) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,255,0,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-5" style={{ color: "rgba(204,255,0,0.7)" }}>
              ✦ Who This Is For
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black uppercase leading-tight text-white mb-8">
              I TRANSFORM
              <br />
              YOUR CONCEPT
              <br />
              INTO A{" "}
              <span
                className="inline-block rounded-xl px-3 py-1"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                REVENUE
              </span>
              <br />
              ENGINE.
            </h2>

            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Not a freelancer. Not an agency. A founder-turned-builder who's shipped $27M+ in
              revenue-generating software on Replit.
            </p>

            <motion.button
              className="flex items-center gap-3 font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204,255,0,0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply for a Spot
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Ideal client criteria */}
            {criteria.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "#CCFF00" }}
                >
                  <Check className="w-4 h-4" style={{ color: "#3700FF" }} />
                </div>
                <div>
                  <div className="font-black text-white text-base">{item.title}</div>
                  <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Not for */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                Not the right fit if you are:
              </p>
              {notFor.map((text, i) => (
                <p key={i} className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  × {text}
                </p>
              ))}
            </motion.div>

            {/* Urgency */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: "#CCFF00" }}
            >
              <motion.span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: "#3700FF" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <div>
                <p className="font-black text-sm uppercase tracking-wide" style={{ color: "#3700FF" }}>
                  Only 2 client spots per month.
                </p>
                <p className="text-xs font-bold mt-0.5" style={{ color: "rgba(55,0,255,0.6)" }}>
                  If that's you — let's talk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
