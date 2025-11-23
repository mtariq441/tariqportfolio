import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Shield, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized for excellence in SaaS development and UI/UX design.',
    color: 'from-blue-500/20 to-blue-500/0',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with compliance certifications and data protection.',
    color: 'from-green-500/20 to-green-500/0',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and 99.9% uptime.',
    color: 'from-yellow-500/20 to-yellow-500/0',
  },
  {
    icon: CheckCircle,
    title: 'On-Time Delivery',
    description: 'Consistent delivery record with milestone-based project management.',
    color: 'from-purple-500/20 to-purple-500/0',
  },
];

export function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="trust" ref={containerRef} className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #dc143c, #c41e3a)' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Why <span className="premium-gradient-text">Enterprise Teams</span> Choose Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trusted by leading companies for delivering premium SaaS solutions with exceptional quality and reliability.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden h-full border-red-600/10 bg-gradient-to-br from-white/2 to-white/0 backdrop-blur-sm hover:border-red-600/30 transition-all duration-300">
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 border border-red-600/20`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-7 h-7 text-red-500" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
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
