import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiGit, SiGithub, SiDocker, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs, SiVite, SiWebflow, SiFigma, SiOpenai } from "react-icons/si";

const allSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#000000", category: "Backend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "AI" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend" },
  { name: "Webflow", icon: SiWebflow, color: "#4353FF", category: "Design" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Design" },
  { name: "OpenAI API", icon: SiOpenai, color: "#412991", category: "AI" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "Tools" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Tools" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Frontend" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "Backend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
];

export function TechnicalSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4"
          >
            <span className="text-sm font-semibold text-primary">MERN Stack Specialist</span>
            <div className="flex items-center gap-1">
              <SiMongodb className="h-4 w-4 text-[#47A248]" />
              <SiExpress className="h-4 w-4 text-foreground" />
              <SiReact className="h-4 w-4 text-[#61DAFB]" />
              <SiNodedotjs className="h-4 w-4 text-[#339933]" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              Technical Expertise
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Full-stack development with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
              data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full flex flex-col items-center justify-center gap-3"
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                  }}
                />
                
                <motion.div
                  className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {skill.category}
                </motion.div>

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <skill.icon 
                    className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 relative z-10" 
                    style={{ color: skill.color }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40"
                    style={{ backgroundColor: skill.color }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <span className="text-xs sm:text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors relative z-10">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
