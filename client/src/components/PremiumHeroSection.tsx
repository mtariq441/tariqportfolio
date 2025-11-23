import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

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
      className="relative h-screen flex flex-col items-center justify-center z-10 overflow-hidden pt-20"
    >
      {/* Premium Animated Gradients */}
      <motion.div
        className="absolute top-32 left-12 w-96 h-96 rounded-full blur-3xl opacity-25"
        style={{
          background: 'linear-gradient(135deg, #dc143c, #c41e3a)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-12 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #c41e3a, #dc143c)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Premium Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block"
        >
          <div className="glass-effect-premium px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-600/40 w-fit mx-auto backdrop-blur-xl hover:border-red-600/60 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <Zap className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-red-500 font-bold text-xs sm:text-sm tracking-wide text-center sm:text-left whitespace-nowrap">
                350+ Apps | $27M+ Revenue
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight uppercase"
          >
            <span className="block text-white mb-2">
              I SHIP <motion.span
                className="premium-gradient-text inline-block ml-1"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(220, 20, 60, 0.15)',
                    '0 0 40px rgba(220, 20, 60, 0.25)',
                    '0 0 20px rgba(220, 20, 60, 0.15)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                $1M–$10M+
              </motion.span>
            </span>
            <span className="block text-gray-200">
              SAAS PRODUCTS ON REPLIT IN WEEKS
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="block md:inline">$27M+ client revenue</span>
          <span className="hidden md:inline text-gray-500"> | </span>
          <span className="block md:inline">350+ apps shipped</span>
          <span className="hidden md:inline text-gray-500"> | </span>
          <span className="block md:inline">157+ founders served</span>
          <span className="hidden md:inline text-gray-500"> | </span>
          <span className="block md:inline">Only 2 clients per month</span>
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold border-0 text-base px-8 py-3 min-h-12 shadow-xl hover:shadow-[0_0_30px_rgba(220,20,60,0.4)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              Book Call (2 Spots)
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </span>
          </Button>
          <Button
            className="border-2 border-red-500 text-red-500 hover:text-red-400 bg-transparent hover:bg-red-600/10 font-bold text-base px-8 py-3 min-h-12 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Results
            <ArrowRight className="h-4 w-4 flex-shrink-0" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
