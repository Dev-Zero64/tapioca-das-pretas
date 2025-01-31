import { CTASection } from "@/components/CTASection";
import { Features } from "@/components/Features";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Hero } from "@/components/Hero";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ImageCarousel />
      <Features />
      <CTASection />
    </div>
  );
};
