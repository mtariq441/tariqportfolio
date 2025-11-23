import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import kateBagoy from '@assets/kate-bagoy.png';
import fiveFourDigital from '@assets/5four-digital.png';
import heyMara from '@assets/heymara.png';
import bhField from '@assets/bhfield.png';
import evvvolution from '@assets/evvvolution.png';
import dealerVault from '@assets/dealervault.png';

const projects = [
  {
    title: 'Kate Bagoy Portfolio',
    category: 'Portfolio',
    description: 'Professional portfolio with premium design and smooth interactions.',
    image: kateBagoy,
    url: 'https://www.katebagoy.com/',
    tags: ['Portfolio', 'Design', 'React', 'Framer'],
  },
  {
    title: '5Four Digital',
    category: 'Agency',
    description: 'Digital agency website showcasing creative services and portfolio.',
    image: fiveFourDigital,
    url: 'https://www.5fourdigital.com/',
    tags: ['Agency', 'Web Design', 'Webflow', 'Marketing'],
  },
  {
    title: 'Hey Mara',
    category: 'SaaS',
    description: 'Modern SaaS platform with intuitive user interface and features.',
    image: heyMara,
    url: 'https://www.heymara.com/',
    tags: ['SaaS', 'Platform', 'UI/UX', 'Web App'],
  },
  {
    title: 'BH Field',
    category: 'E-Commerce',
    description: 'E-commerce platform with advanced product filtering and checkout.',
    image: bhField,
    url: 'https://bhfield.com/',
    tags: ['E-commerce', 'Shopping', 'Design', 'Webflow'],
  },
  {
    title: 'Evvvolution',
    category: 'Tech Startup',
    description: 'Innovative startup website with cutting-edge design and animations.',
    image: evvvolution,
    url: 'https://evvvolution.com/',
    tags: ['Startup', 'Tech', 'Innovation', 'Design'],
  },
  {
    title: 'Dealer Vault',
    category: 'Automotive',
    description: 'Automotive dealership management platform with modern interface.',
    image: dealerVault,
    url: 'https://www.dealervault.com/',
    tags: ['Automotive', 'SaaS', 'Management', 'Platform'],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

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
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
        scale: scrollScale,
        opacity: scrollOpacity,
        position: 'relative',
      }}
      className="cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(project.url, '_blank')}
    >
      <motion.div
        style={!isMobile ? { rotateX, rotateY } : {}}
        whileHover={!isMobile ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Card className="overflow-hidden border-[#00d4ff]/15 bg-gradient-to-br from-white/3 to-white/0 backdrop-blur-sm hover:border-[#00d4ff]/40 transition-all duration-300 h-full shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="h-6 w-6 text-[#00d4ff]" />
            </motion.div>
          </div>
          <CardContent className="p-6">
            <Badge className="mb-3 text-xs bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/40 font-bold">
              {project.category}
            </Badge>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs text-gray-400">
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

export function PremiumPortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" ref={ref} className="relative py-32 px-6 z-10 overflow-hidden" style={{ position: 'relative' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #00d4ff, #8e2de2)' }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Featured <span className="premium-gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Enterprise-level SaaS applications and premium web experiences trusted by leading companies worldwide.
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
