import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'linear-gradient(135deg, #8e2de2, #00d4ff)' }}
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
            <div className="glass-effect-premium px-6 py-3 rounded-full border border-[#00d4ff]/40 backdrop-blur-md w-fit mx-auto">
              <span className="text-[#00d4ff] font-bold text-sm flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Ready to Build Your SaaS?
              </span>
            </div>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">Transform Your Vision Into </span>
            <motion.span
              className="premium-gradient-text inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.15)',
                  '0 0 40px rgba(0, 212, 255, 0.25)',
                  '0 0 20px rgba(0, 212, 255, 0.15)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Enterprise-Grade SaaS
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Enterprise-grade SaaS solutions with premium design, advanced 3D animations, and AI-powered features. 
            <br className="hidden md:block" />
            Let's build something extraordinary that scales.
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
              className="relative overflow-hidden group bg-gradient-to-r from-[#00d4ff] to-blue-500 hover:from-[#00d4ff] hover:to-blue-600 text-black font-bold border-0 px-8 py-6 text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
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
              className="glass-effect-premium border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/60 font-bold px-8 py-6 text-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
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
            <p className="text-sm text-gray-400 font-semibold">Trusted by 157+ Clients • $27M+ Client Growth • 10+ Years Experience</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Premium Quality', 'Fast Delivery', 'Expert Team', '24/7 Support'].map((item) => (
                <motion.div
                  key={item}
                  className="px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-xs text-gray-300 font-medium"
                  whileHover={{ borderColor: 'rgb(0, 212, 255)', backgroundColor: 'rgba(0, 212, 255, 0.15)' }}
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
