
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [countdown, setCountdown] = useState(59);
  const [isFlickering, setIsFlickering] = useState(false);

  // Simulate countdown
  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  // Add random flickering effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 100);
    }, Math.random() * 5000 + 2000);
    
    return () => clearInterval(flickerInterval);
  }, []);

  const scrollToDemo = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-10 relative overflow-hidden bg-gradient-to-br from-[#1A0E1F] via-[#2A1029] to-[#1A0E1F]">
      <div className={`absolute inset-0 bg-noise opacity-5 ${isFlickering ? 'opacity-10' : 'opacity-5'} transition-opacity pointer-events-none z-10`}></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-20 py-16">
        <div className="space-y-8 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-fade-in">
            You're about to scroll.
            <span className="text-[#FF6B6B] block mt-2 animate-fade-in delay-200">Again.</span>
            <span className="text-white text-3xl md:text-4xl block mt-4 font-normal animate-fade-in delay-400">
              Let us ruin it for you <span className="text-[#FFA94D]">(in the best way)</span>.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg animate-fade-in delay-600">
            FocusOS isn't a productivity app. It's a dopamine grenade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-800">
            <Button 
              size="lg"
              className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-black px-8 py-6 text-lg hover:scale-105 transition-transform rounded-xl"
              onClick={scrollToDemo}
            >
              Try Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/10 transition-all rounded-xl"
            >
              How It Works
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center animate-slide-in-right">
          <div className="absolute inset-0 bg-[#FF6B6B]/30 blur-3xl rounded-full transform -translate-y-10"></div>
          
          {/* Phone mockup with app screenshot */}
          <div 
            className={`relative w-[280px] rounded-[40px] border-[8px] border-black bg-black shadow-xl 
              ${isShaking ? 'animate-shake' : ''} animate-pulse-glow`}
            onClick={handleShake}
          >
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>
            
            {/* App screenshot */}
            <div className="rounded-[32px] overflow-hidden">
              <div className="bg-gradient-to-br from-[#4A1942] to-[#2E0F29] p-5 pt-8 h-[580px] flex flex-col items-center text-white">
                <div className="text-[#FF6B6B] text-2xl font-bold mb-2">Hold on.</div>
                <div className="text-white text-center mb-3">
                  <div className="text-lg">You just reinstalled</div>
                  <div className="text-lg">Instagram. <span className="italic">Again.</span></div>
                </div>
                <div className="text-white/80 text-center text-sm mb-8">
                  Let's make this a little awkward...
                </div>
                
                <div className="text-[#FFA94D] text-6xl font-mono mb-8">
                  {countdown < 10 ? `00:0${countdown}` : `00:${countdown}`}
                </div>
                
                <div className="w-full space-y-4">
                  <button className="w-full py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors">
                    Open Anyway
                  </button>
                  <button className="w-full py-3 rounded-full bg-[#FF6B6B]/20 backdrop-blur-sm text-[#FF6B6B] font-medium hover:bg-[#FF6B6B]/30 transition-colors">
                    Delete Again
                  </button>
                </div>
                
                <div className="mt-auto text-center text-white/60 text-sm">
                  We've been here before, remember?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToDemo}
        className="absolute bottom-8 animate-bounce cursor-pointer z-20"
        aria-label="Scroll to features"
      >
        <ArrowDown className="h-8 w-8 text-gray-400" />
      </button>
    </section>
  );
};
