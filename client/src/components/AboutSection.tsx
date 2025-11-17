import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About Me
          </h2>
          <motion.div
            className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-foreground">
              Hi, I'm <span className="font-semibold text-primary">Muhammad Tariq</span> — a <span className="font-semibold">Certified Full-Stack Developer</span> and <span className="font-semibold">Graphic & Brand Designer</span> with a unique blend of technical expertise and creative vision.
            </p>
            <p className="text-muted-foreground">
              I build end-to-end web applications using modern technologies like React, Node.js, TypeScript, and PostgreSQL, while also crafting beautiful brand identities and user interfaces that resonate with audiences. This hybrid skillset allows me to bridge the gap between design and development, delivering solutions that are both visually stunning and technically robust.
            </p>
            <p className="text-muted-foreground">
              Whether you need a full-stack application, a stunning Webflow website, or a complete brand identity, I bring a holistic approach to every project — ensuring consistency, quality, and attention to detail from concept to deployment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-work-with-me"
            >
              Work With Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
