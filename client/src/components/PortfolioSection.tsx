import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import kateBagoy from "@assets/kate-bagoy.png";
import fiveFourDigital from "@assets/5four-digital.png";
import heyMara from "@assets/heymara.png";
import bhField from "@assets/bhfield.png";
import evvvolution from "@assets/evvvolution.png";
import dealerVault from "@assets/dealervault.png";
import rippleshot from "@assets/rippleshot.png";
import recordRecharge from "@assets/record-recharge.png";
import atriz from "@assets/atriz.png";
import pfpClinic from "@assets/pfp-clinic.png";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ 
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className="group overflow-hidden border-2 hover-elevate active-elevate-2 cursor-pointer relative"
          data-testid={`card-project-${index}`}
          onClick={() => window.open(project.url, '_blank')}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            animate={isHovered ? { 
              background: [
                "radial-gradient(circle at 0% 0%, rgba(198, 255, 0, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(198, 255, 0, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(198, 255, 0, 0.1) 0%, transparent 50%)",
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
          <CardContent className="p-6">
            <Badge className="mb-3" data-testid={`badge-category-${index}`}>
              {project.category}
            </Badge>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

const projects = [
  {
    title: "Kate Bagoy Portfolio",
    category: "Portfolio",
    description: "Freelance product designer portfolio showcasing end-to-end design work for startups and edTech",
    image: kateBagoy,
    url: "https://katebagoy.com/",
    tags: ["Product Design", "UI/UX", "Portfolio", "Freelancing"],
  },
  {
    title: "5Four Digital",
    category: "Agency",
    description: "Full-service branding and web design agency crafting profitable brands and websites for business growth",
    image: fiveFourDigital,
    url: "https://www.5fourdigital.com/",
    tags: ["Branding", "Web Design", "Agency", "Business Growth"],
  },
  {
    title: "HeyMara",
    category: "E-Commerce",
    description: "World-class online store platform for e-commerce teams, Shopify Plus partner specializing in conversions",
    image: heyMara,
    url: "https://heymara.com/",
    tags: ["Shopify Plus", "E-Commerce", "Conversions", "Online Store"],
  },
  {
    title: "BH Field Behavioral Health",
    category: "Healthcare",
    description: "Bilingual ABA therapy practice offering joyful and engaged learning experiences for children",
    image: bhField,
    url: "https://www.bhfield.com/",
    tags: ["Healthcare", "ABA Therapy", "Bilingual", "Education"],
  },
  {
    title: "Evvvolution",
    category: "Marketing",
    description: "Employee testimonial marketing platform helping businesses attract candidates through authentic storytelling",
    image: evvvolution,
    url: "https://www.evvvolution.com/",
    tags: ["Marketing", "Recruitment", "Testimonials", "HR Tech"],
  },
  {
    title: "DealerVault",
    category: "SaaS",
    description: "Automotive dealership platform streamlining vendor management and dealer-vendor relationships",
    image: dealerVault,
    url: "https://www.authenticom.com/product/dealervault",
    tags: ["Automotive", "SaaS", "B2B", "Platform"],
  },
  {
    title: "Rippleshot",
    category: "FinTech",
    description: "AI-powered fraud intelligence platform combining machine learning with human insight for financial institutions",
    image: rippleshot,
    url: "https://www.rippleshot.com/",
    tags: ["AI", "FinTech", "Fraud Detection", "Machine Learning"],
  },
  {
    title: "Record Recharge",
    category: "SaaS",
    description: "Customer data verification platform helping businesses boost retention and enhance profit margins",
    image: recordRecharge,
    url: "https://www.authenticom.com/product/recordrecharge",
    tags: ["Data Management", "Customer Retention", "SaaS", "Analytics"],
  },
  {
    title: "Atriz Hiring Platform",
    category: "Recruitment",
    description: "Modern recruitment platform connecting talented professionals with innovative companies",
    image: atriz,
    url: "https://www.hireatriz.com/",
    tags: ["Recruitment", "HR Tech", "Hiring", "Platform"],
  },
  {
    title: "PFP Clinic Gym",
    category: "Fitness",
    description: "Professional fitness and personal training clinic offering physio and customized workout programs",
    image: pfpClinic,
    url: "https://www.pfpclinicgym.com/",
    tags: ["Fitness", "Personal Training", "Healthcare", "Wellness"],
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
