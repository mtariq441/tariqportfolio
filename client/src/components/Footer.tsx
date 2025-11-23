import { Linkedin, Twitter, Mail } from "lucide-react";
import { SiDribbble, SiBehance } from "react-icons/si";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/muhammad-tariq-webflow/", 
      label: "LinkedIn" 
    },
    { 
      icon: SiDribbble, 
      href: "https://dribbble.com/muhammadtariq", 
      label: "Dribbble",
      isReactIcon: true
    },
    { 
      icon: SiBehance, 
      href: "https://www.behance.net/muhammadtariq", 
      label: "Behance",
      isReactIcon: true
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/muhammadtariq", 
      label: "Twitter" 
    },
  ];

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyan-500/20 bg-gradient-to-b from-black/50 to-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-3xl font-bold mb-4">
              <span className="gradient-text">MT.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building premium SaaS applications and web experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    onClick={() => window.open(social.href, '_blank')}
                    className="p-2 rounded-lg glass-effect border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/60 transition-all neon-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors group flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  <span className="w-0 group-hover:w-4 transition-all h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600" />
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@muhammadtariq.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                contact@muhammadtariq.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Tariq. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            Crafted with code and creativity
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
