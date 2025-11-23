import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'linear-gradient(135deg, #c41e3a, #dc143c)' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-effect px-6 py-2 rounded-full border border-red-600/20 backdrop-blur-md w-fit mx-auto">
              <span className="text-red-400/90 font-semibold text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Ready to Transform Your Vision?
              </span>
            </div>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">Let's Build Your </span>
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
              Next-Gen Product
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Premium SaaS development with world-class design, advanced animations, and AI-powered features. Let's create something extraordinary together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-red-600/20 text-white hover:bg-red-600/10 px-8 py-6 text-lg"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="pt-8 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-500">Trusted by 157+ clients worldwide</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Premium Quality', 'Fast Delivery', 'Expert Team', '24/7 Support'].map((item) => (
                <motion.div
                  key={item}
                  className="px-3 py-1 rounded-full border border-red-600/20 bg-red-600/5 text-xs text-gray-300"
                  whileHover={{ borderColor: 'rgb(220, 20, 60)', backgroundColor: 'rgba(220, 20, 60, 0.1)' }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
