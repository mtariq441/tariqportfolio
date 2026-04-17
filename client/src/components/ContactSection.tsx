import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, DollarSign, Lock, ArrowRight } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [contactFormData, setContactFormData] = useState({ name: "", email: "", message: "", budget: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll review your details and get back to you within 24 hours.",
    });
    setContactFormData({ name: "", email: "", message: "", budget: "" });
  };

  const perks = [
    { icon: Zap, title: "Fast Delivery", desc: "MVP to production in 2–4 weeks" },
    { icon: DollarSign, title: "Revenue Focused", desc: "Every line of code targets your growth" },
    { icon: Lock, title: "Bank-Level Security", desc: "Production-ready from day one" },
  ];

  const budgets = ["$5K–$15K", "$15K–$30K", "$30K–$60K", "$60K+"];

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "#0f0f1e" }}>
      {/* Background */}
      <div className="absolute inset-0 line-grid-blue opacity-40 pointer-events-none" />
      <motion.div
        className="absolute -top-60 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(55,0,255,0.3) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,255,0,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* Left — headline + perks */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-5" style={{ color: "#CCFF00" }}>
              ✦ Limited Spots Open
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6 text-white">
              LET&apos;S BUILD
              <br />
              YOUR{" "}
              <span
                className="relative inline-block px-3 py-1 rounded-xl"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                $1M+
              </span>
              <br />
              PRODUCT
            </h2>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              I only work with founders serious about shipping fast and scaling hard.
              Tell me your goals — I'll tell you how to get there.
            </p>

            {/* Perks */}
            <div className="space-y-4 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(204,255,0,0.12)" }}
                  >
                    <perk.icon className="w-5 h-5" style={{ color: "#CCFF00" }} />
                  </div>
                  <div>
                    <div className="font-black text-white text-sm">{perk.title}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{perk.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <div
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: "rgba(204,255,0,0.07)", border: "1px solid rgba(204,255,0,0.15)" }}
              >
                <motion.span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: "#CCFF00" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-black" style={{ color: "#CCFF00" }}>
                  DM me on{" "}
                  <a
                    href="https://twitter.com/muhammadtariq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    @muhammadtariq
                  </a>
                </span>
              </div>

              <a
                href="https://www.fiverr.com/s/2K2Pjj4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl transition-all hover:opacity-90 group"
                style={{ background: "rgba(30,191,100,0.1)", border: "1px solid rgba(30,191,100,0.25)" }}
              >
                <SiFiverr className="w-5 h-5 flex-shrink-0" style={{ color: "#1DBF6E" }} />
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-black" style={{ color: "#1DBF6E" }}>
                    Hire me on Fiverr
                  </span>
                  <p className="text-xs mt-0.5 truncate" style={{ color: "rgba(29,191,110,0.6)" }}>
                    fiverr.com/s/2K2Pjj4
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: "#1DBF6E" }} />
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
              }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { id: "contact-name", label: "Full Name", placeholder: "Your name", type: "text", key: "name" },
                    { id: "contact-email", label: "Email Address", placeholder: "your@email.com", type: "email", key: "email" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-black uppercase tracking-widest mb-2"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        value={contactFormData[field.key as keyof typeof contactFormData]}
                        onChange={(e) => setContactFormData({ ...contactFormData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(204,255,0,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  ))}
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setContactFormData({ ...contactFormData, budget: b })}
                        className="py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wide transition-all duration-200"
                        style={
                          contactFormData.budget === b
                            ? { background: "#CCFF00", color: "#3700FF" }
                            : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }
                        }
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-black uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Project Details & Revenue Goals
                  </label>
                  <textarea
                    id="contact-message"
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                    placeholder="Describe your product, current revenue, target growth, timeline..."
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(204,255,0,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest py-5 rounded-2xl transition-all"
                  style={{ background: "#CCFF00", color: "#3700FF" }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(204,255,0,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-contact-submit"
                >
                  Book Your 15-Min Call
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Only founders doing $500K+ annual revenue with serious 10x ambitions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
