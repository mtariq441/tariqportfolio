import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiFiverr } from "react-icons/si";

const FIVERR = "https://www.fiverr.com/tariq_webflow";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "#3700FF" }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 line-grid-blue" />

      {/* Neon glow orb */}
      <motion.div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.2) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Giant ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-black uppercase leading-none tracking-tighter"
          style={{ color: "rgba(255,255,255,0.03)", whiteSpace: "nowrap" }}
        >
          LIMITED
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-[0.25em] px-5 py-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "#CCFF00" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            ⚡ Limited Availability — Q2 2026
          </motion.span>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase leading-tight text-white tracking-tight">
              ONLY{" "}
              <span
                className="inline-block"
                style={{ color: "#CCFF00", WebkitTextStroke: "0px" }}
              >
                2 CLIENT
              </span>
              <br />
              <span style={{ color: "#CCFF00" }}>SPOTS</span> LEFT
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            I only accept projects through Fiverr. DM me there and let's build
            your $1M+ revenue product — fast.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <motion.a
              href={FIVERR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-10 py-5 rounded-full"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(204,255,0,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              <SiFiverr className="h-5 w-5" />
              DM Me on Fiverr
            </motion.a>
            <motion.a
              href={FIVERR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wide px-10 py-5 rounded-full border-2 text-white transition-all"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
              whileHover={{ borderColor: "rgba(204,255,0,0.6)", scale: 1.03 } as any}
              whileTap={{ scale: 0.97 }}
            >
              View Fiverr Profile
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
