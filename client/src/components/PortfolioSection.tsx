import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceProject from "@assets/generated_images/E-commerce_portfolio_project_fd27f7bd.png";
import realEstateProject from "@assets/generated_images/Real_estate_portfolio_project_9b5a9e94.png";
import agencyProject from "@assets/generated_images/Agency_portfolio_project_b598085e.png";
import saasDashboard from "@assets/generated_images/SaaS_Dashboard_Analytics_Interface_5aa11254.png";
import healthcareBooking from "@assets/generated_images/Healthcare_Appointment_Booking_System_c3225af0.png";
import foodDelivery from "@assets/generated_images/Food_Delivery_Platform_Interface_e10a46bf.png";
import luxuryFashion from "@assets/generated_images/Luxury_Fashion_Webflow_Site_92fd526e.png";
import saasLanding from "@assets/generated_images/SaaS_Startup_Webflow_Landing_7bbc3a8e.png";
import creativeAgency from "@assets/generated_images/Creative_Agency_Webflow_Portfolio_4f7b1fff.png";
import restaurantSite from "@assets/generated_images/Restaurant_Webflow_Website_6478901e.png";
import fitnessStudio from "@assets/generated_images/Fitness_Studio_Webflow_Site_5d60e8c3.png";
import blogPlatform from "@assets/generated_images/Blog_Platform_Webflow_CMS_89cbcea7.png";

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
          onClick={() => console.log(`Project clicked: ${project.title}`)}
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
    title: "Premium E-Commerce Platform",
    category: "E-Commerce",
    description: "Built a high-converting online store with seamless checkout experience and inventory management",
    image: ecommerceProject,
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "Luxury Real Estate Website",
    category: "Real Estate",
    description: "Developed an elegant property showcase platform with advanced search and virtual tours",
    image: realEstateProject,
    tags: ["Next.js", "TypeScript", "Tailwind", "Mapbox"],
  },
  {
    title: "Creative Agency Portfolio",
    category: "Agency",
    description: "Designed and developed a stunning portfolio with smooth animations and modern UI",
    image: agencyProject,
    tags: ["React", "Framer Motion", "Vite", "Shadcn UI"],
  },
  {
    title: "SaaS Dashboard Application",
    category: "SaaS",
    description: "Full-featured analytics dashboard with real-time data visualization and reporting",
    image: saasDashboard,
    tags: ["React", "D3.js", "PostgreSQL", "Express"],
  },
  {
    title: "Healthcare Booking System",
    category: "Healthcare",
    description: "Comprehensive appointment scheduling system with patient management features",
    image: healthcareBooking,
    tags: ["Next.js", "Prisma", "Tailwind", "Stripe"],
  },
  {
    title: "Food Delivery Platform",
    category: "Marketplace",
    description: "End-to-end delivery platform with real-time tracking and payment integration",
    image: foodDelivery,
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Luxury Fashion E-Commerce",
    category: "Webflow",
    description: "High-end fashion brand website with elegant design and seamless shopping experience",
    image: luxuryFashion,
    tags: ["Webflow", "E-Commerce", "Custom Code", "Animations"],
  },
  {
    title: "SaaS Startup Landing Page",
    category: "Webflow",
    description: "Modern landing page converted from Figma to Webflow with interactive features",
    image: saasLanding,
    tags: ["Webflow", "Figma to Webflow", "Responsive", "CMS"],
  },
  {
    title: "Creative Agency Showcase",
    category: "Webflow",
    description: "Bold portfolio website with smooth animations and interactive project gallery",
    image: creativeAgency,
    tags: ["Webflow", "Interactions", "Portfolio", "Figma Design"],
  },
  {
    title: "Restaurant & Dining",
    category: "Webflow",
    description: "Beautiful restaurant website with menu integration and reservation system",
    image: restaurantSite,
    tags: ["Webflow", "CMS", "Integrations", "Custom Forms"],
  },
  {
    title: "Fitness Studio Platform",
    category: "Webflow",
    description: "Dynamic fitness website with class schedules and membership management",
    image: fitnessStudio,
    tags: ["Webflow", "CMS", "Memberstack", "Figma to Webflow"],
  },
  {
    title: "Content & Blog Platform",
    category: "Webflow",
    description: "Magazine-style blog platform with advanced CMS and author profiles",
    image: blogPlatform,
    tags: ["Webflow CMS", "Blog", "SEO", "Figma to Webflow"],
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
