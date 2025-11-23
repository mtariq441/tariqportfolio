import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  });

  // 3D scroll animations
  const formRotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const formScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const formOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.6]);
  
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll review your details and get back to you within 24 hours.",
    });
    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-black relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 space-y-12">
          {/* Header */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase" data-testid="heading-contact">
              <span className="text-white">LET'S TALK ABOUT YOUR </span>
              <span className="premium-gradient-text">$1M+ GOALS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tell me about your project, revenue goals, and timeline. I only take founders who are serious about shipping fast and scaling hard.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
            style={{
              rotateX: formRotateX,
              scale: formScale,
              opacity: formOpacity,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="glass-effect rounded-lg p-8 border border-red-600/15">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      data-testid="input-contact-name"
                      className="bg-black/40 border border-red-600/40 text-white placeholder:text-gray-400 focus:border-red-500 focus-visible:ring-0 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      data-testid="input-contact-email"
                      className="bg-black/40 border border-red-600/40 text-white placeholder:text-gray-400 focus:border-red-500 focus-visible:ring-0 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell me about your project & revenue goals
                  </label>
                  <Textarea
                    id="contact-message"
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                    placeholder="Project details, current revenue, target growth, timeline..."
                    required
                    rows={6}
                    data-testid="input-contact-message"
                    className="bg-black/40 border border-red-600/40 text-white placeholder:text-gray-400 focus:border-red-500 focus-visible:ring-0 resize-none rounded-md"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(220,20,60,0.3)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-contact-submit"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Your 15-Min Call
                    <Send className="h-4 w-4" />
                  </span>
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  I'm selective about projects. Only founders doing $500K+ annual revenue with serious 10x ambitions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
