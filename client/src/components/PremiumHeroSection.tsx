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
            <span className="block text-white mb-2">I SHIP</span>
            <motion.span
              className="premium-gradient-text block mb-2"
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
            <span className="block text-gray-200 leading-tight">
              SAAS PRODUCTS
            </span>
            <span className="block text-gray-200 leading-tight">
              ON REPLIT IN
            </span>
            <span className="block text-gray-200">WEEKS</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          className="text-xs sm:text-sm md:text-lg text-gray-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light space-y-1 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="block md:inline">$27M+ client revenue</p>
          <span className="hidden md:inline text-gray-500"> | </span>
          <p className="block md:inline">350+ apps shipped</p>
          <span className="hidden md:inline text-gray-500"> | </span>
          <p className="block md:inline">157+ founders served</p>
          <span className="hidden md:inline text-gray-500"> | </span>
          <p className="block md:inline">Only 2 clients per month</p>
        </motion.div>

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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Book 15-min Call (2 Spots Left)
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          <Button
            size="lg"
            className="border-2 border-red-500 text-red-500 hover:text-red-400 bg-transparent hover:bg-red-600/10 font-bold px-6 py-6 text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See $1M+ Results
            <ArrowRight className="h-4 w-4" />
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
              { number: '$27M+', label: 'Revenue Generated' },
              { number: '350+', label: 'Apps Shipped' },
              { number: '2', label: 'Spots Left Q1' },
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
    </section>
  );
}
