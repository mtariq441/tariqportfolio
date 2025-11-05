import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef(null);
  const calendlyRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isCalendlyInView = useInView(calendlyRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {/* Contact Form Section */}
        <div ref={formRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Ready to start your project? Fill out the form below or schedule a consultation call.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleContactSubmit}>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="contact-name"
                        value={contactFormData.name}
                        onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        data-testid="input-contact-name"
                        className="text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
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
                        className="text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      data-testid="input-contact-message"
                      className="text-base resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" data-testid="button-contact-submit">
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Calendly Scheduling Section */}
        <div ref={calendlyRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCalendlyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
              Schedule a Meeting
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Prefer a live conversation? Book a 30-minute consultation call at a time that works for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCalendlyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-0 overflow-hidden border-2">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/muhammadtariqw33/30min?hide_gdpr_banner=1&primary_color=146ef5"
                style={{ minHeight: '700px', height: '700px', width: '100%' }}
                data-testid="calendly-widget"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
