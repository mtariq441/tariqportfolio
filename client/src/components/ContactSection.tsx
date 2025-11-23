import { motion, useInView } from "framer-motion";
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
  
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-contact">
              <span className="text-white">Ready to Build </span>
              <span className="gradient-text">Your SaaS MVP?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Send me a message with your project details and let's create something amazing together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-effect rounded-lg p-8 border border-cyan-500/30 neon-glow">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      data-testid="input-contact-name"
                      className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      data-testid="input-contact-email"
                      className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    value={contactFormData.message}
                    onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                    placeholder="Tell me about your SaaS idea, project requirements, timeline, and budget..."
                    rows={6}
                    required
                    data-testid="input-contact-message"
                    className="bg-black/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 neon-glow"
                  size="lg"
                  data-testid="button-contact-submit"
                >
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Or book a consultation call directly</p>
            <Button
              onClick={() => window.open("https://calendly.com", "_blank")}
              variant="outline"
              className="glass-effect border-cyan-500/50 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/80 group"
            >
              <span className="flex items-center gap-2">
                Schedule a Call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
