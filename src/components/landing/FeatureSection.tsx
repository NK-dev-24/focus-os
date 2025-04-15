import { useState, useEffect } from "react";
import { Phone, Clock, Ban, Lock, Zap, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeatureSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [countdown, setCountdown] = useState(59);

  // Simulate countdown
  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  const features = [
    {
      title: "You tap Twitter.",
      subtitle: "FocusOS kicks in.",
      content: (
        <div className="bg-black rounded-xl p-6 text-center">
          <div className="text-[#FF6B6B] text-xl font-bold mb-2">APP LOCKED</div>
          <div className="text-white text-sm mb-4">So you're back for more dopamine?</div>
          <div className="text-[#FFA94D] text-5xl font-mono mb-4">
            {countdown < 10 ? `00:0${countdown}` : `00:${countdown}`}
          </div>
          <button className="w-full py-3 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors">
            Snap to Unlock
          </button>
          <div className="text-white/60 text-xs">Take a breath. Or scream internally.</div>
        </div>
      )
    },
    {
      title: "I'll just check one thing...",
      subtitle: "FOCUSOS IS WATCHING",
      content: (
        <div className="bg-gradient-to-br from-[#4A1942] to-[#2E0F29] rounded-xl p-6 text-center">
          <div className="text-[#FFA94D] text-xl font-bold mb-2 crt-flicker">COOL DOWN</div>
          <div className="text-white text-sm mb-4">Is this worth your time?</div>
          <div className="text-[#FF6B6B] text-5xl font-mono mb-4">
            {countdown < 10 ? `00:0${countdown}` : `00:${countdown}`}
          </div>
          <div className="mb-4 px-4 py-2 inline-block rounded-full bg-[#FF6B6B]/20 text-[#FF6B6B] text-sm">
            Neutralizing impulse...
          </div>
          <div className="text-white/80 text-sm">
            This cooldown helps retrain your dopamine triggers.
          </div>
        </div>
      )
    },
    {
      title: "Go touch grass.",
      subtitle: "Camera verification required.",
      content: (
        <div className="bg-black rounded-xl p-6 text-center">
          <div className="text-[#00A3FF] text-xl font-bold mb-2">SITE BLOCKED</div>
          <div className="text-white text-sm mb-4">Go touch grass, friend.</div>
          <div className="bg-[url('/placeholder-grass.jpg')] bg-cover bg-center w-full h-48 rounded-lg mb-4"></div>
          <button className="w-full py-3 rounded-full bg-[#8B5CF6] text-white font-medium hover:bg-[#8B5CF6]/80 transition-colors">
            I'M READY
          </button>
          <div className="text-white/60 text-xs mt-3 italic">
            The feed can wait. This is real.
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-[#121212] relative overflow-hidden">      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Breaking
            <span className="text-[#FF6B6B]"> dopamine-driven </span>
            loops
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in delay-200">
            One-time purchase. Lifetime of focus. No subscription BS.
          </p>
        </div>
        
        {/* Horizontal scroll sections */}
        <div className="snap-x snap-mandatory flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-10 space-x-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="snap-center flex-shrink-0 w-full md:w-[80%] lg:w-[70%] flex flex-col md:flex-row gap-10 items-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-xl text-[#FF6B6B] mb-6">{feature.subtitle}</p>
                <div className="inline-block bg-[#FF6B6B]/10 text-[#FF6B6B] py-2 px-4 rounded-full">
                  <Zap className="h-4 w-4 inline-block mr-2" />
                  <span className="text-sm font-bold">Real-time regret technology</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] rounded-[25px] border-[8px] border-black bg-black shadow-xl transform hover:scale-105 transition-transform">
                  {feature.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Touch Grass Section */}
        <div className="mt-32 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-[url('/placeholder-grass.jpg')] bg-cover bg-center h-[500px] rounded-2xl shadow-xl relative">
            <div className="absolute inset-0 bg-black/50 rounded-2xl flex flex-col justify-end p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Touch Grass Moment</h3>
              <p className="text-xl text-gray-300 mb-6">We make your phone ask if you've touched grass lately.</p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="rounded-2xl bg-[#1A1F2C] p-8 text-white">
              <div className="text-xs text-gray-400 mb-1">Blocked: twitter.com</div>
              <h3 className="text-2xl font-bold mb-4">Step into the real world for a sec</h3>
              <div className="flex items-center space-x-4 text-[#FF6B6B]">
                <Camera className="h-6 w-6" />
                <span>Camera verification required</span>
              </div>
            </div>
            <div className="rounded-2xl bg-[#1A1F2C] p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Verified real world.</h3>
              <p className="text-gray-300 mb-4">Cravings temporarily stunned.</p>
              <div className="flex items-center space-x-2 text-[#00A3FF]">
                <ArrowRight className="h-5 w-5" />
                <span>Go ahead, open Instagram.</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Flow Section */}
        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            User Attempts vs. FocusOS Response
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1F2C] rounded-xl p-6 text-white">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-[#FF6B6B]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">User opens Reddit</h3>
              <p className="text-gray-400 text-center">Countdown + Snap Button</p>
            </div>
            
            <div className="bg-[#1A1F2C] rounded-xl p-6 text-white">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FFA94D]/20 flex items-center justify-center">
                  <Ban className="h-8 w-8 text-[#FFA94D]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">User snaps, tries again</h3>
              <p className="text-gray-400 text-center">"Nope. Grass first."</p>
            </div>
            
            <div className="bg-[#1A1F2C] rounded-xl p-6 text-white">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-[#00A3FF]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">User goes outside, takes snap</h3>
              <p className="text-gray-400 text-center">"Good job. Proceed."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
