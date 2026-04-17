import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    rating: 5,
    text: "Tariq's Replit AI Service transformed how we build products. The speed is unreal—we went from concept to MVP in 2 weeks. The code quality is production-ready and the AI integration is seamless.",
    initials: "MN",
    image: maraNikolicImg,
  },
  {
    name: "Danaisa Urgelles",
    role: "Medical Doctor, BHField",
    rating: 5,
    text: "The Replit AI Service exceeded our expectations. Tariq delivered a full-featured platform with premium UI in record time. The platform handles millions in transactions flawlessly.",
    initials: "DU",
    image: danaisaUrgellesImg,
  },
  {
    name: "Kam Malik",
    role: "Managing Director, LeadSense",
    rating: 5,
    text: "Outstanding Replit AI Service. The code is clean, scalable, and production-ready. Deployment was instant and everything works perfectly. This is the fastest way to ship.",
    initials: "KM",
    image: kamMalikImg,
  },
  {
    name: "Kate Bagoy",
    role: "Principal Product Designer",
    rating: 5,
    text: "Tariq's Replit AI Service is game-changing. We got multiple AI-powered features integrated seamlessly. The design is premium, the performance is flawless.",
    initials: "KB",
    image: kateBagoyImg,
  },
  {
    name: "John D Saunders",
    role: "Co-founder, 5fourdigital",
    rating: 5,
    text: "The Replit AI Service is incredible. Zero infrastructure headaches, everything deploys instantly. Tariq nailed every feature request and delivered production-quality code.",
    initials: "JS",
    image: johnDSaundersImg,
  },
  {
    name: "Vincent Arrouet",
    role: "Co-founder, Sunology",
    rating: 5,
    text: "Working with Replit AI Service was smooth and professional. The entire stack is optimized for speed. We launched faster than ever before and the results speak for themselves.",
    initials: "VA",
    image: vincentArrouetImg,
  },
  {
    name: "Leon Dapoz",
    role: "Co-Founder, Evvvolution",
    rating: 5,
    text: "Exceptional Replit AI Service delivery. From design to deployment, everything was handled perfectly. The performance is top-tier and the code is maintainable.",
    initials: "LD",
    image: leonDapozImg,
  },
  {
    name: "Harbik Davidyan",
    role: "Founder, Webk Agency",
    rating: 5,
    text: "Tariq's Replit AI Service is the real deal. Fast delivery, premium quality, and zero tech debt. This is how modern SaaS gets built. Already planning our next project.",
    initials: "HD",
    image: harbikDavidyanImg,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight" style={{ color: "#0a0a0a" }}>
            WHAT{" "}
            <br className="hidden md:block" />
            THEY&apos;RE{" "}
            <span style={{ color: "#3700FF" }}>SAYING</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <motion.div
                    className="p-8 md:p-12 rounded-3xl"
                    style={{
                      background: activeIndex === index ? "#3700FF" : "#f8f8f8",
                    }}
                    animate={{
                      background: activeIndex === index ? "#3700FF" : "#f8f8f8",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5"
                          style={{ fill: "#CCFF00", color: "#CCFF00" }}
                        />
                      ))}
                    </div>

                    <p
                      className="text-xl md:text-2xl font-bold leading-relaxed mb-8"
                      style={{ color: activeIndex === index ? "white" : "#0a0a0a" }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <Avatar
                        className="h-14 w-14 border-2"
                        style={{ borderColor: "#CCFF00" }}
                      >
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback
                          className="font-black text-sm"
                          style={{ background: "#CCFF00", color: "#3700FF" }}
                        >
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          className="font-black text-lg"
                          style={{ color: activeIndex === index ? "white" : "#0a0a0a" }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: activeIndex === index ? "rgba(255,255,255,0.6)" : "#888" }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border-2 transition-all hover:scale-110"
              style={{ borderColor: "#3700FF", color: "#3700FF" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="rounded-full transition-all"
                  style={{
                    width: index === activeIndex ? "32px" : "8px",
                    height: "8px",
                    background: index === activeIndex ? "#3700FF" : "#e0e0e0",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border-2 transition-all hover:scale-110"
              style={{ borderColor: "#3700FF", color: "#3700FF" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
