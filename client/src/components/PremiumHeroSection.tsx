import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function PremiumHeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollProgress = window.scrollY / (window.innerHeight * 0.5);
      if (containerRef.current) {
        containerRef.current.style.opacity = Math.max(1 - scrollProgress, 0.2).toString();
        containerRef.current.style.transform = `translateY(${scrollProgress * 30}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center z-10 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #8e2de2, #00d4ff)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #00d4ff, #8e2de2)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block"
        >
          <div className="glass-effect px-6 py-2 rounded-full border border-cyan-500/20 w-fit mx-auto backdrop-blur-md">
            <span className="text-cyan-300/90 font-semibold text-sm">
              Premium SaaS Development • AI • Replit
            </span>
          </div>
        </motion.div>

        {/* Main headline with animated text */}
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-white">Build </span>
          <motion.span
            className="gradient-text inline-block"
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 212, 255, 0.1)',
                '0 0 40px rgba(0, 212, 255, 0.2)',
                '0 0 20px rgba(0, 212, 255, 0.1)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            World-Class
          </motion.span>
          <br />
          <span className="text-white">SaaS Products</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Premium SaaS development with cutting-edge 3D animations, advanced UI design, and AI-powered features. Transform your vision into a $100K+ product.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-effect border-cyan-500/20 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-cyan-400/60" />
      </motion.div>
    </section>
  );
}
