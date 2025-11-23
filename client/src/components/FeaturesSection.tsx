import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Sparkles, Shield, TrendingUp, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: TrendingUp,
    title: 'Revenue-First Development',
    description: 'I build what makes money. Every feature, every line of code is engineered for revenue, conversions, and sustainable growth.',
    gradient: 'from-red-500/20 to-red-500/0',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast MVPs',
    description: 'From zero to paying users in 2–4 weeks on Replit. Next.js + Supabase + Clerk + Stripe. Ship fast, iterate faster.',
    gradient: 'from-orange-500/20 to-orange-500/0',
  },
  {
    icon: Code2,
    title: 'Production-Ready Code',
    description: 'Scalable, secure, 99.9% uptime. Bank-level security. Handoff-ready code you can give to any engineering team.',
    gradient: 'from-yellow-500/20 to-yellow-500/0',
  },
  {
    icon: Sparkles,
    title: 'Premium UI + Animations',
    description: 'Three.js, GSAP, Framer Motion. Premium interactions that feel like Apple. Converts visitors into customers.',
    gradient: 'from-purple-500/20 to-purple-500/0',
  },
  {
    icon: Lightbulb,
    title: 'Zero Tech Debt',
    description: 'Clean, documented, organized architecture. No shortcuts. No legacy code. Built for scale from day one.',
    gradient: 'from-blue-500/20 to-blue-500/0',
  },
  {
    icon: Shield,
    title: 'Replit-Native Speed',
    description: 'Built on Replit for founders. Deploy in seconds. Scale from prototype to $10M revenue without infrastructure headaches.',
    gradient: 'from-green-500/20 to-green-500/0',
  },
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={containerRef} className="relative py-32 px-6 z-10 overflow-hidden" style={{ position: 'relative' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #dc143c, #c41e3a)' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white uppercase">
            WHY <span className="premium-gradient-text">FOUNDERS HIRE ME</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I work with 7–8 figure founders and startups scaling to $10M+ annually. Here's exactly what you get.
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
                <Card className="relative overflow-hidden h-full border-red-600/15 bg-gradient-to-br from-white/3 to-white/0 backdrop-blur-sm hover:border-red-600/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(220,20,60,0.1)]">
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 border border-red-600/30`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <feature.icon className="w-7 h-7 text-red-500" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>

                    <motion.div
                      className="mt-4 text-red-500 text-sm font-bold opacity-0 group-hover:opacity-100 inline-flex items-center gap-1"
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
