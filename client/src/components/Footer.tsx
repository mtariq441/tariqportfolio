import { Linkedin, Twitter, Mail } from "lucide-react";
import { SiDribbble, SiBehance } from "react-icons/si";
import { Button } from "@/components/ui/button";

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
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-muted/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">MT</span>
              <span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Premium Webflow Development & Design Services
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    onClick={() => window.open(social.href, '_blank')}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    {social.isReactIcon ? (
                      <Icon className="h-4 w-4" />
                    ) : (
                      <Icon className="h-4 w-4" />
                    )}
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:contact@muhammadtariq.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                contact@muhammadtariq.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Tariq. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Built with Webflow expertise
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
