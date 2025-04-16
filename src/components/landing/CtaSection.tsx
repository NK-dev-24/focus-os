
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Infinity, AlertTriangle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CtaSection = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#1A0E1F] to-[#2A1029] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#FF6B6B] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#FFA94D] rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to break the loop?
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 animate-fade-in delay-200">
          Your dopamine wants you to scroll past this.<br />
          Don't let it win.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mb-12 animate-fade-in delay-200">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#00A3FF]/10 rounded-full text-[#00A3FF]">
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">One-Time Purchase</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#FF6B6B]/10 rounded-full text-[#FF6B6B]">
            <X className="h-4 w-4" />
            <span className="text-sm font-medium">No Subscriptions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#FFA94D]/10 rounded-full text-[#FFA94D]">
            <Infinity className="h-4 w-4" />
            <span className="text-sm font-medium">Lifetime Access</span>
          </div>
        </div>
        
        {/* Fake app opening animation */}
        <div className="relative mb-16 mx-auto w-full max-w-md">
          <div 
            className={`absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl transition-all duration-500 
              ${isHovering ? 'opacity-30 scale-110 blur-sm' : 'opacity-0 scale-100 blur-none'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] animate-pulse opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 p-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center"
                  >
                    <span className="text-xs text-white/70">App {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-black px-10 py-8 text-xl rounded-xl hover:scale-105 transition-transform animate-fade-in delay-400 w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => navigate('/auth')}
          >
            [ RUIN MY SCROLLS ]
          </Button>
        </div>
        
        {/* Emergency Mode Button */}
        <div className="mt-24 p-8 border border-red-500 rounded-xl bg-[#FF6B6B]/5 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#FF6B6B]">
            <AlertTriangle className="h-6 w-6" />
            <h3 className="text-xl font-bold">Emergency Mode</h3>
          </div>
          <p className="text-white/80 mb-6">
            You're in deep. FocusOS is initiating lockdown.
          </p>
          <Button
            className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/80 text-black flex items-center gap-2"
          >
            <Zap className="h-4 w-4" />
            Enable Emergency Protocol
          </Button>
        </div>
      </div>
    </section>
  );
};
