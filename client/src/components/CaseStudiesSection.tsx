import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "SaaS", "E-commerce", "Dashboard", "Digital Product"];

const caseStudies = [
  {
    name: "Mara99",
    category: "SaaS",
    result: "412% Increase in Paid Signups",
    metric: "+412%",
    period: "in 75 Days",
    description: "AI-powered analytics platform for e-commerce founders.",
    tech: "Next.js · Supabase · Clerk · Stripe · Three.js",
    link: "https://mara99.com",
    highlight: true,
  },
  {
    name: "BHField",
    category: "E-commerce",
    result: "$4.2M Revenue Growth",
    metric: "+$4.2M",
    period: "Revenue",
    description: "Medical e-commerce platform with premium membership tier.",
    tech: "Next.js · PostgreSQL · Stripe · Resend",
    link: "https://bhfield.com",
    highlight: false,
  },
  {
    name: "Dealer Vault",
    category: "Dashboard",
    result: "Complete Internal Tool Replacement",
    metric: "100%",
    period: "Adoption",
    description: "Full dealership management dashboard replacing legacy systems.",
    tech: "Next.js · Supabase · Real-time Sync · Three.js",
    link: "#",
    highlight: false,
  },
  {
    name: "AI Startup Dashboard",
    category: "Dashboard",
    result: "$2.8M Seed Funding",
    metric: "$2.8M",
    period: "Raised",
    description: "Enterprise dashboard that helped close seed round with investors.",
    tech: "Next.js · PostgreSQL · Clerk · Data Viz",
    link: "#",
    highlight: true,
  },
  {
    name: "Coaching Membership",
    category: "Digital Product",
    result: "$800K to $4M/year",
    metric: "5x",
    period: "Revenue Growth",
    description: "High-ticket coaching platform scaled from $800K to $4M annual revenue.",
    tech: "Next.js · Stripe · Memberstack · Sendgrid",
    link: "#",
    highlight: false,
  },
];

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeCategory);

  return (
    <section id="portfolio" ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight" style={{ color: "#0a0a0a" }}>
              OUR BEST{" "}
              <span style={{ color: "#3700FF" }}>WORK</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-gray-500 text-sm max-w-xs">
              Real results from founders who trusted us with their biggest challenges.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wide transition-all"
              style={
                activeCategory === cat
                  ? { background: "#CCFF00", color: "#3700FF" }
                  : { background: "#f5f5f5", color: "#555" }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden border-2 cursor-pointer group"
              style={{ borderColor: study.highlight ? "#3700FF" : "#f0f0f0" }}
            >
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{ background: study.highlight ? "#3700FF" : "#f8f8f8" }}
              >
                <div className="text-center">
                  <div
                    className="text-4xl font-black"
                    style={{ color: study.highlight ? "#CCFF00" : "#3700FF" }}
                  >
                    {study.metric}
                  </div>
                  <div
                    className="text-sm font-bold uppercase"
                    style={{ color: study.highlight ? "rgba(255,255,255,0.7)" : "#666" }}
                  >
                    {study.period}
                  </div>
                </div>
                <div
                  className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-black uppercase"
                  style={{ background: study.highlight ? "#CCFF00" : "#3700FF", color: study.highlight ? "#3700FF" : "white" }}
                >
                  {study.category}
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-black uppercase mb-2" style={{ color: "#0a0a0a" }}>
                  {study.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{study.description}</p>
                <div className="text-xs text-gray-400 mb-4">{study.tech}</div>

                {study.link !== "#" && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide transition-all hover:gap-3"
                    style={{ color: "#3700FF" }}
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
