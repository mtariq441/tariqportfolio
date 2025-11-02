import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import heroBackground from "@assets/generated_images/Hero_background_tech_workspace_5838e7bb.png";
import { useEffect, useState } from "react";

const GeometricShape = ({ index, mouseX, mouseY }: { index: number; mouseX: any; mouseY: any }) => {
  const positions = [
    { left: '10%', top: '20%' },
    { right: '15%', top: '15%' },
    { left: '15%', bottom: '25%' },
    { right: '20%', bottom: '30%' },
    { left: '50%', top: '10%' },
  ];
  
  const position = positions[index % positions.length];
  const baseSize = 80;
  const size = baseSize + (index * 20);
  
  const xOffset = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]);
  const yOffset = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-20, 20]);
  
  return (
    <motion.div
      className="absolute"
      style={{
        ...position,
        width: size,
        height: size,
        x: xOffset,
        y: yOffset,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.15, 0.25, 0.15],
        scale: 1,
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 180],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay: index * 0.5 },
        rotateX: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" },
        rotateY: { duration: 15 + index * 3, repeat: Infinity, ease: "linear" },
        rotateZ: { duration: 25 + index * 4, repeat: Infinity, ease: "linear" },
        scale: { duration: 0.6, delay: index * 0.2 }
      }}
    >
      <div className="w-full h-full border-2 border-primary/40 relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `translateZ(${size/2}px)` }}
        />
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `translateZ(-${size/2}px)` }}
        />
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `rotateY(90deg) translateZ(${size/2}px)` }}
        />
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `rotateY(90deg) translateZ(-${size/2}px)` }}
        />
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `rotateX(90deg) translateZ(${size/2}px)` }}
        />
        <div className="absolute inset-0 border-2 border-primary/30"
          style={{ transform: `rotateX(90deg) translateZ(-${size/2}px)` }}
        />
      </div>
    </motion.div>
  );
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ 
          opacity: 1, 
          scale: 1.1,
          rotateX: [0, 2, 0, -2, 0],
          rotateY: [0, -2, 0, 2, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            filter: 'blur(8px)',
            opacity: 0.3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
      
      <div className="absolute inset-0 overflow-hidden hidden md:block" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <GeometricShape key={`shape-${i}`} index={i} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
      
      <div className="absolute inset-0 overflow-hidden md:hidden" style={{ transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <GeometricShape key={`shape-mobile-${i}`} index={i} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
      
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 overflow-hidden md:hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm Muhammad Tariq
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-foreground">Full Stack Engineer</span>
            <br />
            <span className="text-foreground">&</span>
            <br />
            <motion.span 
              className="text-primary inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(198, 255, 0, 0.5)",
                  "0 0 30px rgba(198, 255, 0, 0.3)",
                  "0 0 20px rgba(198, 255, 0, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Webflow Designer
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting pixel-perfect Webflow websites and building scalable full-stack applications
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-base relative overflow-hidden group"
                data-testid="button-hire-me"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <Briefcase className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Hire Me</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-base backdrop-blur-md bg-background/10 relative group overflow-hidden"
                data-testid="button-view-work"
                onClick={() => {
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
