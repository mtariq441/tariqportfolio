import { Navigation } from "@/components/Navigation";
import { PremiumHeroSection } from "@/components/PremiumHeroSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SelectiveSection } from "@/components/SelectiveSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { BlogPreview } from "@/components/BlogPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" id="home">
      <Navigation />
      <PremiumHeroSection />
      <MarqueeTicker />
      <StatsSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <SelectiveSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
