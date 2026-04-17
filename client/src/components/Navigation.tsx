import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? "rgba(55,0,255,0.97)" : "rgba(55,0,255,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: isScrolled ? "1px solid rgba(204,255,0,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="text-2xl font-black text-white uppercase tracking-tight">
                MT
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 uppercase tracking-wide"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden sm:flex items-center gap-2 font-black text-sm uppercase tracking-wide px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ background: "#CCFF00", color: "#3700FF" }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a Project
              </motion.button>

              <button
                className="md:hidden text-white p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden"
            style={{ background: "#3700FF", borderBottom: "1px solid rgba(204,255,0,0.2)" }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-sm font-bold text-white hover:text-[#CCFF00] uppercase tracking-wide transition-colors px-3"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-center py-3 rounded-full font-black text-sm uppercase mt-4"
                style={{ background: "#CCFF00", color: "#3700FF" }}
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
