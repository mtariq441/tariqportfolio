import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiGit, SiGithub, SiDocker, SiPostgresql, SiRedis, SiGraphql, SiNextdotjs, SiVite, SiWebflow, SiFigma, SiOpenai } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    title: "Design & No-Code",
    skills: [
      { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export function TechnicalSkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Full-stack developer with expertise in MERN stack, AI development, and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all group cursor-pointer"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <skill.icon 
                        className="h-10 w-10 sm:h-12 sm:w-12" 
                        style={{ color: skill.color }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20"
                        style={{ backgroundColor: skill.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border-2 border-primary/30 rounded-full">
            <span className="text-sm sm:text-base font-semibold text-primary">
              MERN Stack Specialist
            </span>
            <div className="flex items-center gap-1">
              <SiMongodb className="h-5 w-5 text-[#47A248]" />
              <SiExpress className="h-5 w-5 text-foreground" />
              <SiReact className="h-5 w-5 text-[#61DAFB]" />
              <SiNodedotjs className="h-5 w-5 text-[#339933]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
