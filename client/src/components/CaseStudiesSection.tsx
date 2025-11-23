import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    name: 'Mara99',
    category: 'AI-Powered SaaS',
    result: '412% Increase in Paid Signups',
    metric: '+412% in 75 Days',
    description: 'AI-powered analytics platform for e-commerce founders.',
    tech: 'Next.js, Supabase, Clerk, Stripe, Three.js',
    link: 'https://mara99.com',
  },
  {
    name: 'BHField',
    category: 'Medical E-commerce + Membership',
    result: '$4.2M Revenue Growth',
    metric: '+$4.2M',
    description: 'Medical e-commerce platform with premium membership tier.',
    tech: 'Next.js, PostgreSQL, Stripe, Resend',
    link: 'https://bhfield.com',
  },
  {
    name: 'Dealer Vault',
    category: 'SaaS Dashboard',
    result: 'Complete Internal Tool Replacement',
    metric: '100% Adoption',
    description: 'Full dealership management dashboard replacing legacy systems.',
    tech: 'Next.js, Supabase, Real-time Sync, Three.js',
    link: '#',
  },
  {
    name: 'AI Startup Dashboard',
    category: 'Custom Dashboard',
    result: '$2.8M Seed Funding',
    metric: '$2.8M Raised',
    description: 'Enterprise dashboard that helped close seed round with investors.',
    tech: 'Next.js, PostgreSQL, Clerk, Data Viz',
    link: '#',
  },
  {
    name: 'Coaching Membership',
    category: 'Digital Product',
    result: '$800K to $4M/year',
    metric: '5x Growth',
    description: 'High-ticket coaching platform scaled from $800K to $4M annual revenue.',
    tech: 'Next.js, Stripe, Memberstack, Sendgrid',
    link: '#',
  },
];

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" ref={containerRef} className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg, #dc143c, #c41e3a)' }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
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
            FEATURED <span className="premium-gradient-text">CASE STUDIES</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real results from founders and teams I've worked with. These aren't templates—these are $1M–$10M+ revenue generators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="relative overflow-hidden h-full border-red-600/15 bg-gradient-to-br from-white/3 to-white/0 backdrop-blur-sm hover:border-red-600/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(220,20,60,0.1)] flex flex-col">
                  <CardContent className="p-8 relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">
                        {study.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.name}</h3>
                    </div>

                    {/* Big Metric */}
                    <div className="mb-6 p-4 bg-red-600/10 rounded-lg border border-red-600/30">
                      <div className="text-3xl font-black text-red-500">{study.metric}</div>
                      <div className="text-sm text-gray-300 mt-1">{study.result}</div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm mb-6 flex-grow">
                      {study.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6 pt-4 border-t border-gray-600/20">
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">
                        TECH STACK
                      </div>
                      <div className="text-xs text-gray-300">{study.tech}</div>
                    </div>

                    {/* CTA */}
                    {study.link && study.link !== '#' && (
                      <a href={study.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-red-600/40 hover:border-red-600/60 text-red-500 hover:text-red-400"
                        >
                          View Project
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </a>
                    )}
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
