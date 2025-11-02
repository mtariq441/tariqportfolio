import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mara Nikolic",
    role: "Founder, Mara99",
    company: "Mara99",
    rating: 5,
    text: "Tariq provides great design and has a great sense of user experience and aesthetics. He delivers on time and is an overall great communicator. I highly recommend working with him.",
    initials: "MN",
  },
  {
    name: "Danaisa Urgelles",
    role: "Medical Doctor, BHField",
    company: "BHField",
    rating: 5,
    text: "He will exceed your expectations. Super easy to work with Tariq, incredibly intelligent, and perceptive. He took the fumbled thoughts from my head and turned it all into a beautiful creation. I am very impressed, Tariq is extremely talented and attentive. He delivered exactly what I was looking for based on my very picky taste.",
    initials: "DU",
  },
  {
    name: "Kam Malik",
    role: "Managing Director, LeadSense",
    company: "LeadSense",
    rating: 5,
    text: "Tariq is clearly a very talented designer. The project went smoothly, and we're happy with the outcome!",
    initials: "KM",
  },
  {
    name: "Kate Bagoy",
    role: "Principal Product Designer",
    company: "Kate Bagoy",
    rating: 5,
    text: "Tariq is an amazing designer, delivered on time and communicated well. I asked for a few revisions after the initial concept and he got updates back to me just 24-hours later. Fully intend to hire again in the future.",
    initials: "KB",
  },
  {
    name: "John D Saunders",
    role: "Co-founder, 5fourdigital",
    company: "5fourdigital",
    rating: 5,
    text: "Amazing designer with an eye for aesthetics. I had pretty vigorous requests and he hit every single one. He was patient and highly skilled!",
    initials: "JS",
  },
  {
    name: "Vincent Arrouet",
    role: "Co-founder, Sunology",
    company: "Sunology",
    rating: 5,
    text: "Working with Tariq is always smooth and full of empathy. The project is very high quality, and has been done in a tight schedule. I recommend working with Tariq if you want to get a fast and pro service.",
    initials: "VA",
  },
  {
    name: "Leon Dapoz",
    role: "Co-Founder, Evvvolution",
    company: "Evvvolution",
    rating: 5,
    text: "Excellent Webflow Development Service. I recently had the pleasure of working with Tariq on a Webflow development project, and I must say that I am thoroughly impressed with the level of service that I received. Really great! Thanks",
    initials: "LD",
  },
  {
    name: "Harbik Davidyan",
    role: "Founder, Webk Agency",
    company: "Webk Agency",
    rating: 5,
    text: "Great designer as I love his work. Produced a great design with little time, tho would love to see what he can do with a proper heads up on a project.",
    initials: "HD",
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
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
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
                            <Star className="h-5 w-5 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <p className="text-lg mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <Avatar className="h-14 w-14 border-2 border-primary">
                          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
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
