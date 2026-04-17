import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Client Projects", "Personal", "Agency Work"];

const caseStudies = [
  // --- Featured Case Studies ---
  {
    name: "Mara99",
    category: "Client Projects",
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
    category: "Client Projects",
    result: "$4.2M Revenue Growth",
    metric: "+$4.2M",
    period: "Revenue",
    description: "Medical e-commerce platform with premium membership tier.",
    tech: "Next.js · PostgreSQL · Stripe · Resend",
    link: "https://bhfield.com",
    highlight: false,
  },
  // --- Recent Client Projects ---
  {
    name: "CoachNow",
    category: "Client Projects",
    result: "Coaching Platform",
    metric: "⚡",
    period: "Live",
    description: "Professional sports coaching platform connecting athletes and coaches at scale.",
    tech: "SaaS · Membership · Video",
    link: "https://coachnow.com/",
    highlight: true,
  },
  {
    name: "Resume.io",
    category: "Client Projects",
    result: "Resume Builder SaaS",
    metric: "🚀",
    period: "Live",
    description: "Global resume builder SaaS trusted by millions of job seekers worldwide.",
    tech: "SaaS · Templates · PDF Export",
    link: "https://resume.io/",
    highlight: false,
  },
  {
    name: "Engage CRM",
    category: "Client Projects",
    result: "CRM Platform",
    metric: "📊",
    period: "Live",
    description: "Customer relationship management platform tailored for UK-based sales teams.",
    tech: "CRM · SaaS · Dashboard",
    link: "https://www.engagecrm.co.uk/",
    highlight: false,
  },

  // --- Personal Projects ---
  {
    name: "Purely Solutions",
    category: "Personal",
    result: "Consulting Agency",
    metric: "✦",
    period: "Live",
    description: "Premium consulting agency website with modern design and conversion-focused copy.",
    tech: "Webflow · CMS · Animations",
    link: "https://www.purelysolutions.ca/",
    highlight: false,
  },
  {
    name: "Pandora Greece",
    category: "Personal",
    result: "E-commerce Platform",
    metric: "💎",
    period: "Live",
    description: "Pandora Greece's e-commerce storefront — premium jewelry shopping experience.",
    tech: "E-commerce · UX · Localization",
    link: "https://www.pandora.gr/",
    highlight: true,
  },
  {
    name: "AutoSpark AI",
    category: "Personal",
    result: "AI-Powered SaaS",
    metric: "🤖",
    period: "Live",
    description: "AI-driven automotive marketing platform for dealerships and auto brands.",
    tech: "AI · Next.js · SaaS · Automation",
    link: "https://www.autospark.ai/",
    highlight: false,
  },
  {
    name: "Your Smile",
    category: "Personal",
    result: "Dental Care Platform",
    metric: "😁",
    period: "Live",
    description: "Dental clinic Webflow site with appointment booking and patient-first design.",
    tech: "Webflow · CMS · Booking",
    link: "https://your-smile.webflow.io/",
    highlight: false,
  },
  {
    name: "CDLC Digital",
    category: "Personal",
    result: "Digital Agency",
    metric: "⚡",
    period: "Live",
    description: "Digital marketing agency website showcasing services and case studies.",
    tech: "Web · CMS · Lead Gen",
    link: "https://www.cdlcdigital.com/",
    highlight: false,
  },
  {
    name: "Addressfully",
    category: "Personal",
    result: "Address Platform",
    metric: "📍",
    period: "Live",
    description: "Address verification and management platform built on Webflow with smart UX.",
    tech: "Webflow · SaaS · API",
    link: "https://addressfully-brankmak.webflow.io/",
    highlight: false,
  },

  // --- Agency Work ---
  {
    name: "LiveChat GBL",
    category: "Agency Work",
    result: "Live Chat SaaS",
    metric: "💬",
    period: "Live",
    description: "Global live chat support platform for enterprise customer service teams.",
    tech: "SaaS · Real-time · Support",
    link: "https://www.livechatgbl.com/",
    highlight: true,
  },
  {
    name: "Close Knit Hosiery",
    category: "Agency Work",
    result: "Fashion E-commerce",
    metric: "🛍️",
    period: "Live",
    description: "Boutique hosiery brand e-commerce store with curated product experience.",
    tech: "E-commerce · Shopify · Branding",
    link: "https://closeknithosiery.com",
    highlight: false,
  },
  {
    name: "Chat Pandas",
    category: "Agency Work",
    result: "Support Agency",
    metric: "🐼",
    period: "Live",
    description: "Customer support outsourcing agency with live chat and managed services.",
    tech: "Agency · Live Chat · SaaS",
    link: "https://www.chatpandas.com/",
    highlight: false,
  },
  {
    name: "Dev Pandas",
    category: "Agency Work",
    result: "Development Agency",
    metric: "🛠️",
    period: "Live",
    description: "Software development agency website for a full-stack team delivering web solutions.",
    tech: "Agency · Web Dev · Branding",
    link: "https://www.devpandas.co/",
    highlight: false,
  },
  {
    name: "AAMS SA",
    category: "Agency Work",
    result: "Business Platform",
    metric: "🏢",
    period: "Live",
    description: "Enterprise business platform for Saudi Arabia market with Arabic-first design.",
    tech: "Enterprise · Web · RTL",
    link: "https://www.aams-sa.com/",
    highlight: false,
  },
  {
    name: "5Four Digital",
    category: "Agency Work",
    result: "Digital Agency",
    metric: "54",
    period: "Live",
    description: "Full-service digital agency delivering strategy, design, and development for ambitious brands.",
    tech: "Agency · Branding · Web",
    link: "https://www.5fourdigital.com/",
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

  const counts: Record<string, number> = { All: caseStudies.length };
  categories.slice(1).forEach((c) => {
    counts[c] = caseStudies.filter((s) => s.category === c).length;
  });

  return (
    <section id="portfolio" ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] mb-3" style={{ color: "#3700FF" }}>
              350+ Apps Shipped
            </p>
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
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Real projects for real clients — from SaaS products to enterprise platforms and agency builds.
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wide transition-all"
              style={
                activeCategory === cat
                  ? { background: "#3700FF", color: "#CCFF00" }
                  : { background: "#f5f5f5", color: "#555" }
              }
            >
              {cat}
              <span
                className="rounded-full px-1.5 py-0.5 text-[10px] font-black leading-none"
                style={
                  activeCategory === cat
                    ? { background: "rgba(204,255,0,0.2)", color: "#CCFF00" }
                    : { background: "rgba(0,0,0,0.08)", color: "#888" }
                }
              >
                {counts[cat]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study, index) => (
            <motion.div
              key={study.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.5) }}
              whileHover={{ y: -6 }}
              onClick={() => {
                if (study.link) window.open(study.link, "_blank", "noopener,noreferrer");
              }}
              className={`rounded-2xl overflow-hidden border-2 group flex flex-col ${study.link ? "cursor-pointer" : "cursor-default"}`}
              style={{ borderColor: study.highlight ? "#3700FF" : "#f0f0f0" }}
            >
              {/* Card header */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: study.highlight ? "#3700FF" : "#f8f8f8" }}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: study.highlight
                      ? "radial-gradient(circle at 70% 50%, rgba(204,255,0,0.4) 0%, transparent 60%)"
                      : "radial-gradient(circle at 70% 50%, rgba(55,0,255,0.15) 0%, transparent 60%)",
                  }}
                />

                <div className="text-center relative z-10">
                  <div
                    className="text-4xl font-black mb-1"
                    style={{ color: study.highlight ? "#CCFF00" : "#3700FF" }}
                  >
                    {study.metric}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: study.highlight ? "rgba(255,255,255,0.6)" : "#999" }}
                  >
                    {study.period}
                  </div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 right-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide"
                  style={{
                    background: study.highlight ? "#CCFF00" : "#3700FF",
                    color: study.highlight ? "#3700FF" : "white",
                  }}
                >
                  {study.category}
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(55,0,255,0.85)" }}
                >
                  {study.link && (
                    <span className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-white">
                      View Site <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 bg-white flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-black uppercase" style={{ color: "#0a0a0a" }}>
                    {study.name}
                  </h3>
                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: "#f0f0f0", color: "#3700FF" }}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-gray-500 mb-3 leading-relaxed flex-1">
                  {study.description}
                </p>

                <div
                  className="text-[10px] font-bold uppercase tracking-widest mt-auto pt-3 border-t"
                  style={{ color: "#bbb", borderColor: "#f0f0f0" }}
                >
                  {study.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom count */}
        <motion.p
          className="text-center text-xs mt-10 uppercase tracking-widest"
          style={{ color: "#ccc" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Showing {filtered.length} of {caseStudies.length} projects
        </motion.p>
      </div>
    </section>
  );
}
