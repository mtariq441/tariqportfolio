import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PremiumHeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ background: "#3700FF" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span
                className="inline-block font-black text-sm uppercase tracking-widest px-5 py-2 rounded-full"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                Full Stack Builder
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I SHIP{" "}
              <span style={{ color: "#CCFF00" }}>
                $1M–$10M+
              </span>
              <br />
              SAAS ON
              <br />
              REPLIT IN
              <br />
              <span style={{ color: "#CCFF00" }}>WEEKS</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Welcome to Muhammad Tariq's world — where speed meets precision to
              produce revenue-generating SaaS products. Join the founders who've
              unlocked $27M+ in growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <button
                className="flex items-center justify-center gap-2 font-black text-base uppercase tracking-wide px-8 py-4 rounded-full transition-all hover:brightness-110 hover:scale-105"
                style={{ background: "#CCFF00", color: "#3700FF" }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                className="flex items-center justify-center gap-2 font-bold text-base uppercase tracking-wide px-8 py-4 rounded-full border-2 border-white/30 text-white hover:border-white/60 transition-all"
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { num: "$27M+", label: "Client Revenue" },
                { num: "350+", label: "Apps Shipped" },
                { num: "157+", label: "Founders Served" },
              ].map((stat) => (
                <div key={stat.num} className="text-center">
                  <div className="text-2xl font-black" style={{ color: "#CCFF00" }}>
                    {stat.num}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wide font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl flex items-center justify-center"
                style={{ background: "rgba(204,255,0,0.1)", border: "2px solid rgba(204,255,0,0.3)" }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto"
                    style={{ background: "#CCFF00" }}
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(204,255,0,0.3)",
                        "0 0 60px rgba(204,255,0,0.6)",
                        "0 0 30px rgba(204,255,0,0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-4xl font-black" style={{ color: "#3700FF" }}>
                      MT
                    </span>
                  </motion.div>
                  <div className="text-white font-black text-xl uppercase">
                    Muhammad Tariq
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-widest">
                    Full Stack Builder
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      { label: "Projects", value: "350+" },
                      { label: "Revenue", value: "$27M+" },
                      { label: "Clients", value: "157+" },
                      { label: "Spots/mo", value: "2 Only" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl p-3 text-center"
                        style={{ background: "rgba(204,255,0,0.15)" }}
                      >
                        <div className="font-black text-white text-sm">{item.value}</div>
                        <div className="text-white/50 text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 rounded-2xl px-4 py-3"
                style={{ background: "#CCFF00" }}
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="font-black text-xs uppercase" style={{ color: "#3700FF" }}>
                  Only 2 Spots
                </div>
                <div className="font-black text-xs uppercase" style={{ color: "#3700FF" }}>
                  This Month
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
