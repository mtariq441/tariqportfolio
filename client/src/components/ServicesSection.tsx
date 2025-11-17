import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Globe, 
  Layers3, 
  Sparkles,
  ArrowRight,
  Database,
  Smartphone,
  Boxes,
  Pen,
  Target,
  Layout
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, Express, and PostgreSQL. Building scalable, secure, and performant solutions.",
    featured: true,
    category: "Technical"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "RESTful APIs, database design, authentication systems, and server-side logic. Expert in Node.js, Express, and database management.",
    category: "Technical"
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    description: "Modern, responsive user interfaces with React, TypeScript, and Tailwind CSS. Focus on performance, accessibility, and seamless user experience.",
    category: "Technical"
  },
  {
    icon: Globe,
    title: "Webflow Development",
    description: "Custom, responsive websites built in Webflow. From landing pages to complex multi-page sites with animations and interactions.",
    featured: true,
    category: "Technical"
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete brand identity systems including logos, color palettes, typography, and brand guidelines that make your business stand out.",
    featured: true,
    category: "Creative"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interface design for web and mobile applications. Creating intuitive, beautiful experiences that users love.",
    category: "Creative"
  },
  {
    icon: Pen,
    title: "Graphic Design",
    description: "Visual design for marketing materials, social media, presentations, and digital assets. Modern, professional designs aligned with your brand.",
    category: "Creative"
  },
  {
    icon: Layers3,
    title: "Design Systems",
    description: "Comprehensive design systems and component libraries for consistent, scalable design across your digital products.",
    category: "Creative"
  },
  {
    icon: Boxes,
    title: "Figma to Code",
    description: "Pixel-perfect conversion of Figma designs into production-ready React components or Webflow sites.",
    category: "Technical"
  },
  {
    icon: Target,
    title: "SEO & Performance",
    description: "Website optimization for search engines and lightning-fast load times. Technical SEO, Core Web Vitals, and performance audits.",
    category: "Technical"
  },
  {
    icon: Sparkles,
    title: "Custom Integrations",
    description: "API integrations, third-party services, payment gateways, and custom automation solutions tailored to your needs.",
    category: "Technical"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" data-testid="heading-services">
            Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Full-stack development and creative design solutions to bring your vision to life
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
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-primary/10 w-fit"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
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
