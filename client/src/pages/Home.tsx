import { Navigation } from "@/components/Navigation";
import { WebGLBackground } from "@/components/WebGLBackground";
import { PremiumHeroSection } from "@/components/PremiumHeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PremiumPortfolioSection } from "@/components/PremiumPortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black" id="home">
      {/* WebGL Background - Fixed */}
      <WebGLBackground />
      
      {/* Content - Relative to WebGL bg */}
      <div className="relative z-10">
        <Navigation />
        <PremiumHeroSection />
        <FeaturesSection />
        <PremiumPortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
