import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Search, 
  Palette, 
  Layers, 
  Figma, 
  ShoppingCart, 
  Webhook, 
  Users, 
  Database, 
  Zap, 
  Sparkles,
  ArrowRight,
  Bot,
  Cpu
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Replit AI Development",
    description: "Build intelligent, automated AI-powered applications using Replit. From chatbots to automation bots, I develop functional, scalable solutions tailored to real-world use cases with fast prototyping and deployment.",
    featured: true,
  },
  {
    icon: Code,
    title: "Webflow Development",
    description: "Custom, responsive, and interactive websites built entirely in Webflow.",
  },
  {
    icon: Search,
    title: "Webflow SEO Optimization",
    description: "Improve your website's visibility on Google with Webflow-specific SEO strategies.",
  },
  {
    icon: Palette,
    title: "Webflow UX Design",
    description: "User-focused design for seamless navigation and higher engagement.",
  },
  {
    icon: Layers,
    title: "Webflow UI Design",
    description: "Beautiful, modern interfaces designed to match your brand identity.",
  },
  {
    icon: Figma,
    title: "Figma → Webflow Conversion",
    description: "Pixel-perfect conversion of your Figma designs into fully functional Webflow websites.",
  },
  {
    icon: ShoppingCart,
    title: "Webflow Ecommerce Development",
    description: "Build high-converting online stores with Webflow Ecommerce features.",
  },
  {
    icon: Webhook,
    title: "Webflow API Integration",
    description: "Connect your website to external tools and services for automation and better workflow.",
  },
  {
    icon: Users,
    title: "Memberstack Integration",
    description: "Add memberships, gated content, and subscription-based features to your Webflow site.",
  },
  {
    icon: Database,
    title: "Airtable Integration",
    description: "Connect Airtable with your website for dynamic content, inventory, or data management.",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description: "Tailor your website to work with any service, CRM, or API you need.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design Services",
    description: "Complete design services for web apps, landing pages, and mobile-friendly sites.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            What I Can Do for You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive AI development and Webflow services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full hover-elevate active-elevate-2 relative overflow-hidden group border-2 hover:border-primary/50 transition-all ${service.featured ? 'ring-2 ring-primary/30' : ''}`} data-testid={`card-service-${index}`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className="mb-4 p-3 rounded-lg bg-primary/10 w-fit"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-get-custom-quote"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
