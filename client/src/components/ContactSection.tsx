import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
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
      description: "Thank you for reaching out. I'll review your details and get back to you within 24 hours.",
    });
    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6"
              style={{ color: "#0a0a0a" }}
              data-testid="heading-contact"
            >
              LET&apos;S TALK
              <br />
              ABOUT YOUR{" "}
              <span style={{ color: "#3700FF" }}>$1M+</span>
              <br />
              GOALS
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Tell me about your project, revenue goals, and timeline. I only
              take founders who are serious about shipping fast and scaling hard.
            </p>

            <div className="space-y-6">
              {[
                { emoji: "🚀", title: "Fast Delivery", desc: "MVP to production in 2–4 weeks" },
                { emoji: "💰", title: "Revenue Focused", desc: "Every line of code targets your growth" },
                { emoji: "🔒", title: "Bank-Level Security", desc: "Production-ready from day one" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "#f0ecff" }}
                  >
                    {item.emoji}
                  </div>
                  <div>
                    <div className="font-black text-base" style={{ color: "#0a0a0a" }}>
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8 border-2"
              style={{ borderColor: "#f0f0f0", background: "#fafafa" }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-black uppercase tracking-wide mb-2"
                      style={{ color: "#0a0a0a" }}
                    >
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      value={contactFormData.name}
                      onChange={(e) =>
                        setContactFormData({ ...contactFormData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      data-testid="input-contact-name"
                      className="bg-white border-2 focus-visible:ring-0 rounded-xl font-medium"
                      style={{ borderColor: "#e0e0e0" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-black uppercase tracking-wide mb-2"
                      style={{ color: "#0a0a0a" }}
                    >
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactFormData.email}
                      onChange={(e) =>
                        setContactFormData({ ...contactFormData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      data-testid="input-contact-email"
                      className="bg-white border-2 focus-visible:ring-0 rounded-xl font-medium"
                      style={{ borderColor: "#e0e0e0" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-black uppercase tracking-wide mb-2"
                    style={{ color: "#0a0a0a" }}
                  >
                    Project Details & Revenue Goals
                  </label>
                  <Textarea
                    id="contact-message"
                    value={contactFormData.message}
                    onChange={(e) =>
                      setContactFormData({ ...contactFormData, message: e.target.value })
                    }
                    placeholder="Project details, current revenue, target growth, timeline..."
                    required
                    rows={5}
                    data-testid="input-contact-message"
                    className="bg-white border-2 focus-visible:ring-0 resize-none rounded-xl font-medium"
                    style={{ borderColor: "#e0e0e0" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-black text-base uppercase tracking-wide py-4 rounded-2xl transition-all"
                  style={{ background: "#3700FF", color: "white" }}
                  whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-contact-submit"
                >
                  Book Your 15-Min Call
                  <Send className="h-4 w-4" />
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  Only founders doing $500K+ annual revenue with serious 10x ambitions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
