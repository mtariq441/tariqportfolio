import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageSquare, Send, Calendar } from "lucide-react";
import { SiFiverr, SiUpwork, SiLinkedin } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const platforms = [
  { name: "Fiverr", icon: SiFiverr, url: "#", color: "hover:text-green-500" },
  { name: "Upwork", icon: SiUpwork, url: "#", color: "hover:text-green-600" },
  { name: "LinkedIn", icon: SiLinkedin, url: "#", color: "hover:text-blue-600" },
  { name: "Email", icon: Mail, url: "mailto:contact@example.com", color: "hover:text-primary" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
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
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative z-10">
                <Tabs defaultValue="message" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="message" data-testid="tab-message">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </TabsTrigger>
                    <TabsTrigger value="schedule" data-testid="tab-schedule">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="message">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            required
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            required
                            data-testid="input-email"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your project..."
                            rows={6}
                            required
                            data-testid="input-message"
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="schedule">
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/muhammadtariqw33/30min"
                      data-testid="calendly-widget"
                      style={{ minWidth: '320px', height: '700px' }}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Connect With Me
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm available on multiple platforms. Choose your preferred way to reach out.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    data-testid={`link-${platform.name.toLowerCase()}`}
                  >
                    <Card className="p-6 text-center hover-elevate active-elevate-2 cursor-pointer group">
                      <CardContent className="p-0">
                        <platform.icon className={`h-8 w-8 mx-auto mb-2 ${platform.color} transition-colors`} />
                        <div className="text-sm font-medium">{platform.name}</div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold mb-2 text-lg">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all inquiries within 24 hours. For urgent projects,
                feel free to reach out directly via LinkedIn or Email.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
