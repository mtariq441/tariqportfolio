import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import maraNikolicImg from "@assets/image_1762114716597.png";
import danaisaUrgellesImg from "@assets/image_1762202849213.png";
import kamMalikImg from "@assets/image_1762202919284.png";
import kateBagoyImg from "@assets/image_1762202947311.png";
import johnDSaundersImg from "@assets/image_1762202781701.png";
import vincentArrouetImg from "@assets/image_1762203292467.png";
import leonDapozImg from "@assets/image_1762203317918.png";
import harbikDavidyanImg from "@assets/image_1762114800820.png";

const testimonials = [
  {
    name: "Mara Nikolic",
    role: "Founder, Mara99",
    company: "Mara99",
    rating: 5,
    text: "Tariq's Replit AI Service transformed how we build products. The speed is unreal—we went from concept to MVP in 2 weeks. The code quality is production-ready and the AI integration is seamless. Highly recommend.",
    initials: "MN",
    image: maraNikolicImg,
  },
  {
    name: "Danaisa Urgelles",
    role: "Medical Doctor, BHField",
    company: "BHField",
    rating: 5,
    text: "The Replit AI Service exceeded our expectations. Tariq delivered a full-featured platform with premium UI in record time. The platform handles millions in transactions flawlessly. We're absolutely impressed.",
    initials: "DU",
    image: danaisaUrgellesImg,
  },
  {
    name: "Kam Malik",
    role: "Managing Director, LeadSense",
    company: "LeadSense",
    rating: 5,
    text: "Outstanding Replit AI Service. The code is clean, scalable, and production-ready. Deployment was instant and everything works perfectly. This is the fastest way to ship.",
    initials: "KM",
    image: kamMalikImg,
  },
  {
    name: "Kate Bagoy",
    role: "Principal Product Designer",
    company: "Kate Bagoy",
    rating: 5,
    text: "Tariq's Replit AI Service is game-changing. We got multiple AI-powered features integrated seamlessly. The design is premium, the performance is flawless. Shipping with Replit has never been easier.",
    initials: "KB",
    image: kateBagoyImg,
  },
  {
    name: "John D Saunders",
    role: "Co-founder, 5fourdigital",
    company: "5fourdigital",
    rating: 5,
    text: "The Replit AI Service is incredible. Zero infrastructure headaches, everything deploys instantly. Tariq nailed every feature request and delivered production-quality code. Best decision we made.",
    initials: "JS",
    image: johnDSaundersImg,
  },
  {
    name: "Vincent Arrouet",
    role: "Co-founder, Sunology",
    company: "Sunology",
    rating: 5,
    text: "Working with Replit AI Service was smooth and professional. The entire stack is optimized for speed. We launched faster than ever before and the results speak for themselves.",
    initials: "VA",
    image: vincentArrouetImg,
  },
  {
    name: "Leon Dapoz",
    role: "Co-Founder, Evvvolution",
    company: "Evvvolution",
    rating: 5,
    text: "Exceptional Replit AI Service delivery. From design to deployment, everything was handled perfectly. The performance is top-tier and the code is maintainable. Highly recommended.",
    initials: "LD",
    image: leonDapozImg,
  },
  {
    name: "Harbik Davidyan",
    role: "Founder, Webk Agency",
    company: "Webk Agency",
    rating: 5,
    text: "Tariq's Replit AI Service is the real deal. Fast delivery, premium quality, and zero tech debt. This is how modern SaaS gets built. Already planning our next project with him.",
    initials: "HD",
    image: harbikDavidyanImg,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 uppercase" data-testid="heading-testimonials">
            <span className="text-white">WHAT FOUNDERS </span>
            <span className="premium-gradient-text">SAY</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Real feedback from founders who've shipped with Replit AI Service
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0.5, scale: activeIndex === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="p-8 hover-elevate relative overflow-hidden group border border-red-600/20 bg-gradient-to-br from-red-600/5 to-red-700/5" data-testid={`card-testimonial-${index}`}>
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-red-700/10 rounded-full blur-3xl"
                        animate={{ 
                          x: [0, 20, 0],
                          y: [0, -20, 0],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                      <CardContent className="p-0 relative z-10">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-5 w-5 fill-red-500 text-red-500" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <p className="text-lg mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <Avatar className="h-14 w-14 border-2 border-red-600">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-red-600 text-white font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-red-500 w-8"
                      : "bg-gray-600/40"
                  }`}
                  data-testid={`button-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
