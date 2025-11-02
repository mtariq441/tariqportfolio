import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="text-2xl font-bold">
                <span className="text-foreground">MT</span>
                <span className="text-primary">.</span>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="sm"
                  onClick={() => scrollToSection("#contact")}
                  className="gap-2"
                  data-testid="button-nav-hire"
                >
                  <Briefcase className="h-4 w-4" />
                  Hire Me
                </Button>
              </motion.div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
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
            className="fixed top-[73px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full gap-2"
                  data-testid="button-nav-hire-mobile"
                >
                  <Briefcase className="h-4 w-4" />
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
