import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
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
import laptopMockup from "@assets/generated_images/MacBook_laptop_mockup_website_860d0c79.png";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={!isMobile ? { 
        perspective: 1000,
        transformStyle: "preserve-3d",
      } : {}}
      className="cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(project.url, '_blank')}
      data-testid={`card-project-${index}`}
    >
      <motion.div
        style={!isMobile ? { rotateX, rotateY } : {}}
        whileHover={!isMobile ? { scale: 1.03 } : {}}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className="group overflow-hidden border-2 hover-elevate active-elevate-2 relative h-full"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            animate={isHovered && !isMobile ? { 
              background: [
                "radial-gradient(circle at 0% 0%, rgba(20, 110, 245, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(20, 110, 245, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(20, 110, 245, 0.1) 0%, transparent 50%)",
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </motion.div>
          </div>
          <CardContent className="p-4 sm:p-6">
            <Badge className="mb-2 sm:mb-3 text-xs" data-testid={`badge-category-${index}`}>
              {project.category}
            </Badge>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
    tags: ["Data Verification", "SaaS", "Customer Retention", "Analytics"],
  },
  {
    title: "Atriz",
    category: "Recruitment",
    description: "Modern recruitment platform streamlining hiring processes for growing companies",
    image: atriz,
    url: "https://www.atriz.com/",
    tags: ["HR Tech", "Recruitment", "ATS", "Hiring"],
  },
  {
    title: "PFP Clinic Gym",
    category: "Fitness",
    description: "Professional fitness and personal training center focused on health and performance optimization",
    image: pfpClinic,
    url: "https://www.pfpclinic.com/",
    tags: ["Fitness", "Personal Training", "Health", "Wellness"],
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" data-testid="heading-portfolio">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A selection of development and design projects showcasing my technical and creative capabilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <motion.img
              src={laptopMockup}
              alt="Website mockup on laptop"
              className="w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
