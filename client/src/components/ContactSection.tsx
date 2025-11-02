import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule your consultation call today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Send me a message or schedule a meeting
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="space-y-6">
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
                    />
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
                      rows={8}
                      required
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" data-testid="button-contact-submit">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Calendly Meeting Scheduler */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-0 h-full overflow-hidden">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/muhammadtariqw33/30min?hide_gdpr_banner=1&primary_color=c6ff00"
                style={{ minWidth: '320px', height: '700px' }}
                data-testid="calendly-widget"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
