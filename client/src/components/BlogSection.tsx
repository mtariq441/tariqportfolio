import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import webflowBlog from "@assets/generated_images/Blog_post_Webflow_tips_5daab18e.png";
import seoBlog from "@assets/generated_images/Blog_post_SEO_strategies_3140d102.png";
import freelancingBlog from "@assets/generated_images/Blog_post_freelancing_5e05f635.png";

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full relative"
        data-testid={`card-blog-${index}`}
        onClick={() => console.log(`Blog post clicked: ${post.title}`)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-4 left-4">
            <Badge className="backdrop-blur-md bg-background/80">
              {post.category}
            </Badge>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium">
            Read More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const posts = [
  {
    title: "10 Webflow Tips to Speed Up Your Development",
    category: "Webflow Tips",
    excerpt: "Discover essential techniques to streamline your Webflow workflow and deliver projects faster.",
    image: webflowBlog,
    readTime: "5 min read",
    date: "Dec 15, 2024",
  },
  {
    title: "SEO Strategies That Actually Work in 2025",
    category: "SEO Strategies",
    excerpt: "Learn proven SEO tactics to boost your website's visibility and drive organic traffic.",
    image: seoBlog,
    readTime: "8 min read",
    date: "Dec 10, 2024",
  },
  {
    title: "Freelancing Success: Client Management Tips",
    category: "Freelancing",
    excerpt: "Master the art of client relationships and build a thriving freelance business.",
    image: freelancingBlog,
    readTime: "6 min read",
    date: "Dec 5, 2024",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights from My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge about web development, design, and business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
