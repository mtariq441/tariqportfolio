import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';

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
          <div className="glass-effect-premium px-6 py-3 rounded-full border border-red-600/40 w-fit mx-auto backdrop-blur-xl hover:border-red-600/60 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-bold text-sm tracking-wide">
                Trusted by 157+ Clients Worldwide
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
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight uppercase"
          >
            <span className="text-white">PREMIUM </span>
            <motion.span
              className="premium-gradient-text inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(220, 20, 60, 0.15)',
                  '0 0 40px rgba(220, 20, 60, 0.25)',
                  '0 0 20px rgba(220, 20, 60, 0.15)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SAAS SOLUTIONS
            </motion.span>
            <br />
            <span className="text-gray-200">BUILT WITH EXCELLENCE</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full-stack SaaS development with cutting-edge 3D animations, advanced UI design, and AI-powered features.
          Trusted by enterprises. Powered by innovation.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold border-0 px-8 py-6 text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(220,20,60,0.4)]"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
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
            className="glass-effect-premium border border-red-600/40 text-red-400 hover:bg-red-600/10 hover:border-red-600/60 font-bold px-8 py-6 text-lg transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-2">
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="pt-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { number: '157+', label: 'Projects Delivered' },
              { number: '$27M+', label: 'Client Growth' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-black text-red-500">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-semibold">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-5 h-5 text-[#00d4ff]" />
        </div>
      </motion.div>
    </section>
  );
}
