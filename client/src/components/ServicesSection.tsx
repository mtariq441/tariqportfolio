import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Globe, 
  Sparkles,
  Zap,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "AI App Development",
    description: "Build intelligent SaaS applications with Replit AI integration, automation, and cutting-edge backend architecture.",
    color: "from-cyan-500/20 to-cyan-500/0",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: Globe,
    title: "SaaS MVP Launch",
    description: "From ideation to launch. Full-stack development of minimum viable products with focus on speed and scalability.",
    color: "from-purple-500/20 to-purple-500/0",
    borderColor: "border-purple-500/30",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards",
    description: "Interactive data visualization dashboards with real-time analytics, charts, and user-friendly interfaces.",
    color: "from-cyan-500/20 to-purple-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times, Core Web Vitals optimization, and SEO-ready architecture for maximum visibility.",
    color: "from-yellow-500/20 to-orange-500/0",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces with glassmorphism design, smooth animations, and premium aesthetics.",
    color: "from-pink-500/20 to-rose-500/0",
    borderColor: "border-pink-500/30",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-black/50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-services">
            <span className="text-white">Premium </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your SaaS product, from development to design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card 
                className={`relative overflow-hidden h-full border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/60 neon-glow`}
                data-testid={`card-service-${index}`}
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardContent className="p-6 sm:p-8 relative z-10">
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
