import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress, SiWebflow, SiFigma, SiJavascript, SiGithub } from "react-icons/si";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <div ref={ref}>{count}+</div>;
}

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: 150 },
  { icon: TrendingUp, label: "Code Commits", value: 5000 },
  { icon: Award, label: "Years Experience", value: 5 },
  { icon: Users, label: "Happy Clients", value: 80 },
];

const technologies = [
  { Icon: SiWebflow, name: "Webflow" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiGithub, name: "GitHub" },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results for clients worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate active-elevate-2 relative overflow-hidden group" data-testid={`card-stat-${index}`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                />
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4 relative z-10" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 relative z-10">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground relative z-10">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I Master</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {technologies.map(({ Icon, name }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}

                className="flex flex-col items-center gap-2 group cursor-pointer"
                data-testid={`tech-${name.toLowerCase()}`}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="p-4 rounded-lg bg-card border border-card-border hover-elevate active-elevate-2 transition-all relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <Icon className="h-12 w-12 text-foreground group-hover:text-primary transition-colors relative z-10" />
                </motion.div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
