
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { PhilosophicalFooter } from "@/components/landing/PhilosophicalFooter";
import { DopamineScoreSection } from "@/components/landing/DopamineScoreSection";
import "../styles/animations.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <header className="py-6 px-8 absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-[#FF6B6B] rounded-full"></div>
            <span className="font-bold text-lg text-white">focusOS</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-2 text-white border-white hover:bg-white/10 hover:text-white hover:scale-105 transition-transform rounded-xl"
            onClick={() => navigate('/auth')}
          >
            Get Started
          </Button>
        </div>
      </header>
      
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <CtaSection />
      <PhilosophicalFooter />
      <DopamineScoreSection />
    </div>
  );
};

export default Index;
