import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Link2, Twitter, Linkedin } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import maraNikolicImg from "@assets/image_1762114716597.png";
import danaisaUrgellesImg from "@assets/image_1762202849213.png";
import kamMalikImg from "@assets/image_1762202919284.png";
import kateBagoyImg from "@assets/image_1762202947311.png";
import johnDSaundersImg from "@assets/image_1762202781701.png";

const clientAvatars = [
  { src: maraNikolicImg, initials: "MN", name: "Mara Nikolic" },
  { src: danaisaUrgellesImg, initials: "DU", name: "Danaisa Urgelles" },
  { src: kamMalikImg, initials: "KM", name: "Kam Malik" },
  { src: kateBagoyImg, initials: "KB", name: "Kate Bagoy" },
  { src: johnDSaundersImg, initials: "JS", name: "John D Saunders" },
];

export function PremiumHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  function handleCopyLink() {
    navigator.clipboard.writeText("https://tariqservices.site/").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[65px]"
      style={{ background: "#3700FF" }}
    >
      {/* Animated grid */}
      <motion.div className="absolute inset-0 line-grid-blue" style={{ y: bgY }} />

      {/* Radial glows — reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full hidden sm:block"
          style={{ background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full hidden sm:block"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-10 items-center">

          {/* Left: Main copy */}
          <div className="space-y-6 sm:space-y-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                Available — 2 Spots This Month
              </span>
            </motion.div>

            {/* ── Single H1 (SEO: one h1 per page) ── */}
            <motion.h1
              className="text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.88] tracking-[-0.03em] uppercase"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-white">I SHIP</span>
              <span className="block" style={{ color: "#CCFF00" }}>$1M–$10M+</span>
              <span className="block text-white">SAAS ON</span>
              <span className="block text-outline-white">REPLIT</span>
            </motion.h1>

            {/* Sub copy + CTAs */}
            <motion.div
              className="space-y-5 sm:space-y-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-white/60 max-w-md leading-relaxed">
                Muhammad Tariq — where speed meets precision. Join founders who've unlocked
                $27M+ in growth shipping on Replit.
              </p>

              {/* Social proof avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {clientAvatars.map((client, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 overflow-hidden flex-shrink-0"
                      style={{ borderColor: "#CCFF00", zIndex: 5 - i }}
                      title={client.name}
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: "#CCFF00" }}>★</span>
                    ))}
                  </div>
                  <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Trusted by 157+ founders
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    className="flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
                    style={{ background: "#CCFF00", color: "#3700FF" }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204,255,0,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open("https://www.fiverr.com/tariq_webflow", "_blank")}
                    aria-label="Contact Muhammad Tariq on Fiverr"
                  >
                    DM on Fiverr
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-full border-2 text-white"
                    style={{ borderColor: "rgba(255,255,255,0.25)" }}
                    whileHover={{ borderColor: "rgba(255,255,255,0.6)", scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="View portfolio"
                  >
                    See Results
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Fiverr badge */}
                <a
                  href="https://www.fiverr.com/tariq_webflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 self-start px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                  style={{ background: "rgba(29,191,110,0.12)", border: "1px solid rgba(29,191,110,0.3)" }}
                  aria-label="View Muhammad Tariq's Fiverr profile"
                >
                  <SiFiverr className="h-4 w-4 flex-shrink-0" style={{ color: "#1DBF6E" }} />
                  <span className="text-xs font-black uppercase tracking-wide" style={{ color: "#1DBF6E" }}>
                    Also available on Fiverr
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" style={{ color: "rgba(29,191,110,0.6)" }} />
                </a>

                {/* Social share bar */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Share</span>
                  <a
                    href="https://twitter.com/intent/tweet?text=Muhammad+Tariq+%E2%80%94+Replit+SaaS+Developer+%7C+350%2B+apps+shipped%2C+%2427M%2B+client+revenue&url=https%3A%2F%2Ftariqservices.site%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X (Twitter)"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <Twitter className="h-3 w-3" />
                    X
                  </a>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ftariqservices.site%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-all hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <Linkedin className="h-3 w-3" />
                    LinkedIn
                  </a>
                  <button
                    onClick={handleCopyLink}
                    aria-label="Copy page link"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-all hover:scale-105 cursor-pointer"
                    style={{
                      background: copied ? "rgba(204,255,0,0.15)" : "rgba(255,255,255,0.08)",
                      color: copied ? "#CCFF00" : "rgba(255,255,255,0.6)",
                      border: copied ? "1px solid rgba(204,255,0,0.4)" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Link2 className="h-3 w-3" />
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: floating card — hidden on small mobile, shown tablet+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main card */}
              <div
                className="rounded-3xl p-6 sm:p-7 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(204,255,0,0.25)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="absolute inset-0 dot-grid-dark opacity-40" />

                <div className="relative z-10 space-y-5 sm:space-y-6">
                  {/* Identity */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0"
                      style={{ background: "#CCFF00", color: "#3700FF" }}
                    >
                      MT
                    </div>
                    <div>
                      <div className="font-black text-white text-sm sm:text-base">Muhammad Tariq</div>
                      <div className="text-white/50 text-xs uppercase tracking-widest">Full Stack Builder</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-black uppercase px-2 py-1 rounded-full whitespace-nowrap" style={{ background: "rgba(204,255,0,0.2)", color: "#CCFF00" }}>
                        Online
                      </span>
                    </div>
                  </div>

                  <div style={{ height: "1px", background: "rgba(204,255,0,0.15)" }} />

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { value: "$27M+", label: "Revenue Generated" },
                      { value: "350+", label: "Apps Shipped" },
                      { value: "157+", label: "Founders Served" },
                      { value: "2 Only", label: "Spots / Month" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl p-3 sm:p-4"
                        style={{ background: "rgba(204,255,0,0.1)" }}
                      >
                        <div className="font-black text-lg sm:text-xl" style={{ color: "#CCFF00" }}>
                          {s.value}
                        </div>
                        <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-2 sm:mb-3">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {["Next.js", "Supabase", "Clerk", "Stripe", "Replit"].map((t) => (
                        <span
                          key={t}
                          className="text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full py-3 rounded-2xl font-black text-sm uppercase tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#CCFF00", color: "#3700FF" }}
                    onClick={() => window.open("https://www.fiverr.com/tariq_webflow", "_blank")}
                    aria-label="Hire Muhammad Tariq on Fiverr"
                  >
                    DM on Fiverr →
                  </button>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-2xl px-3 py-1.5 shadow-xl"
                style={{ background: "#CCFF00" }}
              >
                <div className="font-black text-xs uppercase leading-tight" style={{ color: "#3700FF" }}>
                  🚀 Shipping Fast
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Mobile-only compact stats strip */}
        <div className="sm:hidden mt-8 grid grid-cols-3 gap-3">
          {[
            { value: "$27M+", label: "Revenue" },
            { value: "350+", label: "Apps" },
            { value: "157+", label: "Founders" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-3 text-center"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(204,255,0,0.2)" }}
            >
              <div className="font-black text-base" style={{ color: "#CCFF00" }}>{s.value}</div>
              <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
