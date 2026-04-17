import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 px-6 overflow-hidden relative"
      style={{ background: "#3700FF" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span
              className="inline-block font-black text-sm uppercase tracking-widest px-5 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              ⚡ Limited Availability
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black uppercase leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ONLY{" "}
            <span style={{ color: "#CCFF00" }}>2 CLIENT</span>
            <br />
            SPOTS LEFT FOR
            <br />
            Q2 2026
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            They will be booked this week. Get your 15-minute consultation now
            and let's see if we're the right fit for your $1M+ revenue goals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="flex items-center justify-center gap-2 font-black text-base uppercase tracking-wide px-10 py-4 rounded-full transition-all"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Your Call Now
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="flex items-center justify-center gap-2 font-bold text-base uppercase tracking-wide px-10 py-4 rounded-full border-2 border-white/30 text-white hover:border-white/60 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://twitter.com/muhammadtariq", "_blank")}
            >
              DM &quot;10X&quot; on Twitter
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
