import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";

const FIVERR_URL = "https://www.fiverr.com/tariq_webflow";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/muhammadtariq", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-tariq-webflow/", label: "LinkedIn" },
    { icon: SiFiverr, href: FIVERR_URL, label: "Fiverr" },
    { icon: Mail, href: "mailto:contact@muhammadtariq.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const stats = [
    { value: "$27M+", label: "Revenue Generated" },
    { value: "350+", label: "Apps Shipped" },
    { value: "157+", label: "Founders Served" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "#0a0a14" }}>
      <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

      {/* Top CTA strip */}
      <div className="relative border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
              style={{ color: "#CCFF00" }}
            >
              <motion.span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: "#CCFF00" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Currently Accepting 2 Clients
            </p>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tight text-white"
            >
              LET&apos;S BUILD
              <br />
              <span style={{ color: "#CCFF00" }}>TOGETHER</span>
            </h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <motion.button
              className="flex items-center gap-3 font-black text-sm uppercase tracking-widest px-9 py-5 rounded-full"
              style={{ background: "#CCFF00", color: "#3700FF" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(204,255,0,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(FIVERR_URL, "_blank")}
            >
              DM on Fiverr
              <ArrowUpRight className="h-5 w-5" />
            </motion.button>

            <motion.a
              href={FIVERR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-black text-sm uppercase tracking-widest px-9 py-5 rounded-full border-2"
              style={{ borderColor: "rgba(204,255,0,0.3)", color: "#CCFF00" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.06, background: "rgba(204,255,0,0.08)" } as any}
              whileTap={{ scale: 0.97 }}
            >
              <SiFiverr className="h-5 w-5" />
              Hire on Fiverr
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand + bio + stats — spans 2 cols on lg */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl flex-shrink-0"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                MT
              </div>
              <div>
                <div className="text-white font-black text-lg leading-tight">Muhammad Tariq</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  SaaS Engineer &amp; Builder
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "420px" }}>
              Replit-powered SaaS that generates millions. 350+ production apps shipped for founders who demand real revenue, not prototypes.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <div className="text-2xl font-black" style={{ color: "#CCFF00" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="font-black uppercase text-xs tracking-[0.25em] mb-7"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Navigation
            </h3>
            <div className="space-y-5">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-0 group w-full text-left"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span
                    className="h-px mr-0 group-hover:mr-3 w-0 group-hover:w-5 transition-all duration-200 flex-shrink-0"
                    style={{ background: "#CCFF00" }}
                  />
                  <span
                    className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#CCFF00]"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="font-black uppercase text-xs tracking-[0.25em] mb-7"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Get In Touch
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:contact@muhammadtariq.com"
                className="block text-sm font-medium transition-colors duration-200 hover:text-[#CCFF00] break-all"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                contact@muhammadtariq.com
              </a>
              <a
                href="https://twitter.com/muhammadtariq"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium transition-colors duration-200 hover:text-[#CCFF00]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                @muhammadtariq on Twitter
              </a>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-black transition-all duration-200 hover:opacity-80"
                style={{ color: "#CCFF00" }}
              >
                <SiFiverr className="h-4 w-4 flex-shrink-0" />
                Hire me on Fiverr
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    onClick={() => {
                      if (social.href.startsWith("mailto:")) {
                        window.location.href = social.href;
                      } else {
                        window.open(social.href, "_blank");
                      }
                    }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{ background: "rgba(204,255,0,0.08)", color: "#CCFF00" }}
                    whileHover={{ scale: 1.15, background: "rgba(204,255,0,0.18)" } as any}
                    whileTap={{ scale: 0.92 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "linear-gradient(to right, rgba(204,255,0,0.25), rgba(204,255,0,0.06), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Muhammad Tariq. Built on Replit. All rights reserved.
          </p>
          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#CCFF00" }}>
            Replit-Powered SaaS
          </p>
        </div>
      </div>
    </footer>
  );
}
