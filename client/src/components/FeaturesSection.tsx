import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Sparkles, Shield, TrendingUp, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Production-ready SaaS applications with modern tech stack and scalable architecture.',
    gradient: 'from-cyan-500/20 to-cyan-500/0',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Optimized for speed with GPU-accelerated animations and efficient code.',
    gradient: 'from-yellow-500/20 to-yellow-500/0',
  },
  {
    icon: Sparkles,
    title: 'Premium Animations',
    description: 'World-class 3D animations and smooth interactions using Three.js and GSAP.',
    gradient: 'from-purple-500/20 to-purple-500/0',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with best practices and compliance standards.',
    gradient: 'from-green-500/20 to-green-500/0',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused',
    description: 'Built for scale with analytics, automation, and user engagement tools.',
    gradient: 'from-blue-500/20 to-blue-500/0',
  },
  {
    icon: Database,
    title: 'Data Excellence',
    description: 'Advanced database design and real-time data synchronization.',
    gradient: 'from-pink-500/20 to-pink-500/0',
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" ref={containerRef} className="relative py-32 px-6 z-10 overflow-hidden" style={{ position: 'relative' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #8e2de2, #00d4ff)' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">My Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to build premium SaaS products that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden h-full border-cyan-500/10 bg-gradient-to-br from-white/2 to-white/0 backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-300">
                  {/* Gradient border effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 opacity-0 group-hover:opacity-20"
                    whileHover={{ opacity: 0.2 }}
                  />

                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 border border-cyan-500/20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <feature.icon className="w-7 h-7 text-cyan-400" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                    <motion.div
                      className="mt-4 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Learn more →
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
