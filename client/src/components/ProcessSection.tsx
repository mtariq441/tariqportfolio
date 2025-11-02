import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb, Pencil, Code, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understanding your goals, audience, and creating a tailored roadmap",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Crafting beautiful interfaces with focus on user experience",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Development",
    description: "Building pixel-perfect, responsive websites with clean code",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Deploying your site and continuously improving performance",
    icon: Rocket,
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50) }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:block flex-1" />
                
                <motion.div 
                  className="relative flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg sm:text-xl relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div 
                    className="absolute -z-10 inset-0 bg-primary/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="w-full lg:flex-1"
                  whileHover={!isMobile ? { x: index % 2 === 0 ? 10 : -10 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className="p-4 sm:p-6 hover-elevate active-elevate-2 relative overflow-hidden group"
                    data-testid={`card-step-${index}`}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    />
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className="p-2 sm:p-3 rounded-lg bg-primary/10 relative flex-shrink-0"
                        whileHover={!isMobile ? { rotate: [0, -10, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
