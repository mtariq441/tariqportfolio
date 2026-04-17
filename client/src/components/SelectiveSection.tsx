import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SelectiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 overflow-hidden"
      style={{ background: "#3700FF" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white mb-8">
              OUR EXPERT TEAM
              <br />
              TRANSFORMS YOUR
              <br />
              CONCEPTS TO{" "}
              <span
                className="px-2 rounded"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                STUNNING
              </span>
              <br />
              SAAS PRODUCTS.
            </h2>

            <motion.button
              className="font-black text-sm uppercase tracking-wide px-8 py-3 rounded-full transition-all hover:brightness-110 hover:scale-105"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              10X Project →
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              {
                arrow: "→",
                title: "Founders & Teams",
                desc: "doing $500K–$20M+/year revenue",
              },
              {
                arrow: "→",
                title: "SaaS Founders",
                desc: "ready to 10x fast and move decisively",
              },
              {
                arrow: "→",
                title: "Startup Teams",
                desc: "focused on revenue and outcomes, not vanity metrics",
              },
              {
                arrow: "→",
                title: "Decisive Builders",
                desc: "who want production-ready code shipped fast",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <span className="font-black text-2xl" style={{ color: "#CCFF00" }}>
                  {item.arrow}
                </span>
                <div>
                  <div className="font-black text-white text-lg">{item.title}</div>
                  <div className="text-white/60 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}

            <div
              className="p-5 rounded-2xl"
              style={{ background: "#CCFF00" }}
            >
              <p className="font-black text-lg uppercase" style={{ color: "#3700FF" }}>
                Only 2 client spots per month.
              </p>
              <p className="font-bold text-sm" style={{ color: "#3700FF" }}>
                If that's you — let's talk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
