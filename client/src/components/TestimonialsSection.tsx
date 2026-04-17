import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import maraNikolicImg from "@assets/image_1762114716597.png";
import danaisaUrgellesImg from "@assets/image_1762202849213.png";
import kamMalikImg from "@assets/image_1762202919284.png";
import kateBagoyImg from "@assets/image_1762202947311.png";
import johnDSaundersImg from "@assets/image_1762202781701.png";
import vincentArrouetImg from "@assets/image_1762203292467.png";
import leonDapozImg from "@assets/image_1762203317918.png";
import harbikDavidyanImg from "@assets/image_1762114800820.png";

const testimonials = [
  {
    name: "Mara Nikolic",
    role: "Founder, Mara99",
    rating: 5,
    text: "Tariq's work transformed how we build products. From concept to MVP in 2 weeks — the code quality is production-ready and the AI integration is seamless.",
    initials: "MN",
    image: maraNikolicImg,
    highlight: true,
  },
  {
    name: "Danaisa Urgelles",
    role: "Medical Doctor, BHField",
    rating: 5,
    text: "Tariq delivered a full-featured platform with premium UI in record time. The platform handles millions in transactions flawlessly.",
    initials: "DU",
    image: danaisaUrgellesImg,
    highlight: false,
  },
  {
    name: "Kam Malik",
    role: "Managing Director, LeadSense",
    rating: 5,
    text: "Outstanding delivery. The code is clean, scalable, and production-ready. Deployment was instant and everything works perfectly.",
    initials: "KM",
    image: kamMalikImg,
    highlight: false,
  },
  {
    name: "Kate Bagoy",
    role: "Principal Product Designer",
    rating: 5,
    text: "We got multiple AI-powered features integrated seamlessly. The design is premium, the performance is flawless. Best builder I've worked with.",
    initials: "KB",
    image: kateBagoyImg,
    highlight: false,
  },
  {
    name: "John D Saunders",
    role: "Co-founder, 5fourdigital",
    rating: 5,
    text: "Zero infrastructure headaches, everything deploys instantly. Tariq nailed every feature request and delivered production-quality code on time.",
    initials: "JS",
    image: johnDSaundersImg,
    highlight: false,
  },
  {
    name: "Vincent Arrouet",
    role: "Co-founder, Sunology",
    rating: 5,
    text: "The entire stack is optimized for speed. We launched faster than ever before and the results speak for themselves.",
    initials: "VA",
    image: vincentArrouetImg,
    highlight: false,
  },
  {
    name: "Leon Dapoz",
    role: "Co-Founder, Evvvolution",
    rating: 5,
    text: "From design to deployment, everything was handled perfectly. The performance is top-tier and the code is maintainable.",
    initials: "LD",
    image: leonDapozImg,
    highlight: false,
  },
  {
    name: "Harbik Davidyan",
    role: "Founder, Webk Agency",
    rating: 5,
    text: "Fast delivery, premium quality, and zero tech debt. This is how modern SaaS gets built. Already planning our next project.",
    initials: "HD",
    image: harbikDavidyanImg,
    highlight: false,
  },
];

const PER_PAGE = 3;

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden" style={{ background: "#0a0a14" }} ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 dot-grid-dark opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,255,0,0.3), transparent)" }}
      />

      {/* Decorative quote */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none select-none" aria-hidden="true">
        <Quote className="w-48 h-48" style={{ color: "#CCFF00" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ color: "#CCFF00" }}>
              ✦ Social Proof
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
              WHAT THEY&apos;RE
              <br />
              <span style={{ color: "#CCFF00" }}>SAYING</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1 mr-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" style={{ fill: "#CCFF00", color: "#CCFF00" }} />
              ))}
              <span className="ml-2 text-sm font-black" style={{ color: "rgba(255,255,255,0.5)" }}>
                5.0 / 8 reviews
              </span>
            </div>

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110"
              style={{ borderColor: "rgba(204,255,0,0.3)", color: "#CCFF00" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "#CCFF00", color: "#3700FF" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative rounded-3xl p-8 flex flex-col gap-6 group"
                style={{
                  background: i === 0 ? "#3700FF" : "rgba(255,255,255,0.04)",
                  border: i === 0
                    ? "1px solid rgba(204,255,0,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(204,255,0,0.08) 0%, transparent 60%)" }}
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" style={{ fill: "#CCFF00", color: "#CCFF00" }} />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  className="text-base leading-relaxed flex-1 relative z-10"
                  style={{ color: i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                  <Avatar
                    className="h-11 w-11 border-2 flex-shrink-0"
                    style={{ borderColor: i === 0 ? "#CCFF00" : "rgba(204,255,0,0.3)" }}
                  >
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback
                      className="font-black text-xs"
                      style={{ background: "#CCFF00", color: "#3700FF" }}
                    >
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-black text-white text-sm">{t.name}</div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: i === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.35)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Page dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === page ? "28px" : "8px",
                height: "8px",
                background: i === page ? "#CCFF00" : "rgba(204,255,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
