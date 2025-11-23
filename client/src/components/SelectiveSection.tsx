import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function SelectiveSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #c41e3a, #dc143c)' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden border-red-600/15 bg-gradient-to-br from-white/3 to-white/0 backdrop-blur-sm hover:border-red-600/40 transition-all duration-300 shadow-lg">
            <CardContent className="p-12 md:p-16 relative z-10">
              <div className="text-center space-y-8">
                <h2 className="text-5xl md:text-6xl font-black text-white uppercase">
                  WHO I <span className="premium-gradient-text">WORK WITH</span>
                </h2>

                <div className="space-y-6 text-lg">
                  <p className="text-gray-300">
                    I'm extremely selective and only take <span className="font-bold text-red-500">2 new clients per month</span>.
                  </p>

                  <div className="space-y-4">
                    <p className="text-gray-300">
                      I work exclusively with:
                    </p>
                    <ul className="space-y-3 text-left max-w-2xl mx-auto">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-xl">→</span>
                        <span className="text-gray-300"><span className="font-bold text-white">Founders & teams</span> doing $500K–$20M+/year revenue</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-xl">→</span>
                        <span className="text-gray-300"><span className="font-bold text-white">SaaS founders</span> ready to 10x fast and move decisively</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-xl">→</span>
                        <span className="text-gray-300"><span className="font-bold text-white">Startup teams</span> focused on revenue and outcomes, not vanity metrics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-xl">→</span>
                        <span className="text-gray-300">People who want <span className="font-bold text-white">production-ready code shipped fast</span>, not "design discussions"</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-red-500 font-bold text-xl uppercase pt-4">
                    If that's you, let's talk.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
