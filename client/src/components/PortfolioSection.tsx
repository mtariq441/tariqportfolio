import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceProject from "@assets/generated_images/E-commerce_portfolio_project_fd27f7bd.png";
import realEstateProject from "@assets/generated_images/Real_estate_portfolio_project_9b5a9e94.png";
import agencyProject from "@assets/generated_images/Agency_portfolio_project_b598085e.png";

const projects = [
  {
    title: "Premium E-Commerce Platform",
    category: "E-Commerce",
    description: "Built a high-converting Shopify store with custom Webflow landing pages",
    image: ecommerceProject,
    tags: ["Webflow", "E-Commerce", "Custom Code"],
  },
  {
    title: "Luxury Real Estate Website",
    category: "Real Estate",
    description: "Developed an elegant property showcase with advanced filtering",
    image: realEstateProject,
    tags: ["Webflow", "CMS", "Animations"],
  },
  {
    title: "Creative Agency Portfolio",
    category: "Agency",
    description: "Designed and developed a stunning portfolio with smooth interactions",
    image: agencyProject,
    tags: ["Webflow", "Design", "Interactions"],
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className="group overflow-hidden border-2 hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-project-${index}`}
                onClick={() => console.log(`Project clicked: ${project.title}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
