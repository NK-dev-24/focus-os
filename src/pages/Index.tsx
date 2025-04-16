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
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          </nav>
          <Button
            variant="default"
            className="hidden md:flex bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-6 py-2 hover:scale-105 transition-all rounded-xl shadow-lg shadow-[#FF6B6B]/20"
            onClick={() => navigate('/auth')}
          >
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden fixed top-[72px] left-0 right-0 bg-[#1A0E1F] border-t border-white/10 p-4 z-50">
        <nav className="flex flex-col gap-4">
          <a href="#features" className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">Pricing</a>
          <Button
            variant="default"
            className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white py-2 hover:scale-105 transition-all rounded-xl shadow-lg shadow-[#FF6B6B]/20"
            onClick={() => navigate('/auth')}
          >
            Get Started
          </Button>
        </nav>
      </div>
      
      <HeroSection />
      <FeatureSection id="features" />
      <TestimonialsSection id="testimonials" />
      <CtaSection id="pricing" />
      <PhilosophicalFooter />
      <DopamineScoreSection />
    </div>
  );
};

export default Index;
