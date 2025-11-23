import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingOrb = ({ delay, size }: { delay: number; size: string }) => {
  return (
    <motion.div
      className={`absolute ${size} rounded-full blur-3xl`}
      style={{
        background: "radial-gradient(circle, rgba(142, 45, 226, 0.3) 0%, transparent 70%)",
      }}
      animate={{
        y: [0, 30, 0],
        x: [0, 20, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const NeonParticle = ({ index }: { index: number }) => {
  const randomLeft = Math.random() * 100;
  const randomTop = Math.random() * 100;
  const duration = 20 + Math.random() * 10;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: `${randomLeft}%`,
        top: `${randomTop}%`,
        background: "linear-gradient(135deg, #00d4ff, #8e2de2)",
        boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
      }}
      animate={{
        y: [0, -500, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay: index * 0.5,
      }}
    />
  );
};

const RotatingCube = () => {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 float-sphere"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 180],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Cube faces */}
      {[
        { transform: "translateZ(96px)", bg: "from-purple-500/30" },
        { transform: "translateZ(-96px) rotateY(180deg)", bg: "from-blue-500/30" },
        { transform: "rotateY(90deg) translateZ(96px)", bg: "from-cyan-500/30" },
        { transform: "rotateY(-90deg) translateZ(96px)", bg: "from-purple-500/20" },
        { transform: "rotateX(90deg) translateZ(96px)", bg: "from-blue-500/20" },
        { transform: "rotateX(-90deg) translateZ(96px)", bg: "from-cyan-500/20" },
      ].map((face, i) => (
        <div
          key={i}
          className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-cyan-400/30"
          style={{
            backfaceVisibility: "hidden",
            transform: face.transform,
            background: `linear-gradient(135deg, ${face.bg})`,
          }}
        />
      ))}
    </motion.div>
  );
};

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ perspective: "1200px" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            background: "linear-gradient(135deg, #8e2de2, #00d4ff)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #8e2de2)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating orbs */}
      <FloatingOrb delay={0} size="w-64 h-64" />
      <FloatingOrb delay={2} size="w-48 h-48" />
      <FloatingOrb delay={4} size="w-80 h-80" />

      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {Array.from({ length: 50 }).map((_, i) => (
          <NeonParticle key={i} index={i} />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* 3D Rotating Cube */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 hidden lg:flex"
        style={{
          y: scrollY * 0.1,
        }}
      >
        <RotatingCube />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <div className="glass-effect px-4 py-2 rounded-full border border-cyan-500/30 w-fit mx-auto">
              <span className="gradient-text font-semibold text-sm">SaaS • AI • Webflow</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            data-testid="text-hero-headline"
          >
            <span className="text-white">Building SaaS MVPs </span>
            <br />
            <motion.span 
              className="gradient-text"
              animate={{
                textShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(142, 45, 226, 0.2)",
                  "0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(142, 45, 226, 0.3)",
                  "0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(142, 45, 226, 0.2)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              With Replit AI + Webflow
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            data-testid="text-hero-subheadline"
          >
            I build production-ready SaaS applications, dashboards, and pixel-perfect web experiences with modern technologies and futuristic design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 neon-glow"
              data-testid="button-get-quote"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-cyan-500/50 text-white hover:text-white hover:bg-cyan-500/10 group"
              data-testid="button-view-work"
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
