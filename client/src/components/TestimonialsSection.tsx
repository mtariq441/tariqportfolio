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
    text: "Tariq provides great design and has a great sense of user experience and aesthetics. He delivers on time and is an overall great communicator. I highly recommend working with him.",
    initials: "MN",
    image: maraNikolicImg,
  },
  {
    name: "Danaisa Urgelles",
    role: "Medical Doctor, BHField",
    company: "BHField",
    rating: 5,
    text: "He will exceed your expectations. Super easy to work with Tariq, incredibly intelligent, and perceptive. He took the fumbled thoughts from my head and turned it all into a beautiful creation. I am very impressed, Tariq is extremely talented and attentive. He delivered exactly what I was looking for based on my very picky taste.",
    initials: "DU",
    image: danaisaUrgellesImg,
  },
  {
    name: "Kam Malik",
    role: "Managing Director, LeadSense",
    company: "LeadSense",
    rating: 5,
    text: "Tariq is clearly a very talented designer. The project went smoothly, and we're happy with the outcome!",
    initials: "KM",
    image: kamMalikImg,
  },
  {
    name: "Kate Bagoy",
    role: "Principal Product Designer",
    company: "Kate Bagoy",
    rating: 5,
    text: "Tariq is an amazing designer, delivered on time and communicated well. I asked for a few revisions after the initial concept and he got updates back to me just 24-hours later. Fully intend to hire again in the future.",
    initials: "KB",
    image: kateBagoyImg,
  },
  {
    name: "John D Saunders",
    role: "Co-founder, 5fourdigital",
    company: "5fourdigital",
    rating: 5,
    text: "Amazing designer with an eye for aesthetics. I had pretty vigorous requests and he hit every single one. He was patient and highly skilled!",
    initials: "JS",
    image: johnDSaundersImg,
  },
  {
    name: "Vincent Arrouet",
    role: "Co-founder, Sunology",
    company: "Sunology",
    rating: 5,
    text: "Working with Tariq is always smooth and full of empathy. The project is very high quality, and has been done in a tight schedule. I recommend working with Tariq if you want to get a fast and pro service.",
    initials: "VA",
    image: vincentArrouetImg,
  },
  {
    name: "Leon Dapoz",
    role: "Co-Founder, Evvvolution",
    company: "Evvvolution",
    rating: 5,
    text: "Excellent Webflow Development Service. I recently had the pleasure of working with Tariq on a Webflow development project, and I must say that I am thoroughly impressed with the level of service that I received. Really great! Thanks",
    initials: "LD",
    image: leonDapozImg,
  },
  {
    name: "Harbik Davidyan",
    role: "Founder, Webk Agency",
    company: "Webk Agency",
    rating: 5,
    text: "Great designer as I love his work. Produced a great design with little time, tho would love to see what he can do with a proper heads up on a project.",
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
            <span className="text-white">CLIENT </span>
            <span className="premium-gradient-text">TESTIMONIALS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            What industry leaders say about working with me
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
                    <Card className="p-8 hover-elevate relative overflow-hidden group" data-testid={`card-testimonial-${index}`}>
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
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
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
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
