import { Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/muhammadtariq", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-tariq-webflow/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@muhammadtariq.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0a0a14" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-3xl font-black mb-1 inline-block"
              style={{ color: "#CCFF00" }}
            >
              MT
            </div>
            <div className="text-white font-black text-sm uppercase tracking-widest mb-4">
              Muhammad Tariq
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              Replit-powered SaaS that generates millions. Founder, engineer, revenue-focused builder.
            </p>
            <div className="flex gap-3">
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
                    className="p-2 rounded-lg transition-all"
                    style={{ background: "rgba(204,255,0,0.1)", color: "#CCFF00" }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-black text-white mb-6 uppercase text-sm tracking-widest">Navigation</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm font-medium transition-colors hover:text-[#CCFF00]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  whileHover={{ x: 5 }}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-black text-white mb-6 uppercase text-sm tracking-widest">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-black mb-1 uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Email
                </p>
                <a
                  href="mailto:contact@muhammadtariq.com"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  data-testid="footer-email"
                >
                  contact@muhammadtariq.com
                </a>
              </div>
              <div>
                <p className="text-xs font-black mb-1 uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Twitter
                </p>
                <a
                  href="https://twitter.com/muhammadtariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  data-testid="footer-twitter"
                >
                  @muhammadtariq
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className="h-px mb-8"
          style={{ background: "rgba(204,255,0,0.1)" }}
        />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold" style={{ color: "#CCFF00" }}>
            Replit-Powered SaaS That Generates Millions
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 Muhammad Tariq. Built for founders who move fast and win big.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
