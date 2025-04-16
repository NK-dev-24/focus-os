import { useState, useEffect } from "react";
import { Phone, Clock, Ban, Lock, Zap, Camera, ArrowRight, Sparkles, Brain, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  id?: string;
}

export const FeatureSection = ({ id }: FeatureSectionProps) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [countdown, setCountdown] = useState(59);
  const [showGlitch, setShowGlitch] = useState(false);

  // Simulate countdown
  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 150);
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Handle scroll snap
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const newActive = Math.round(scrollLeft / width);
      setActiveFeature(newActive);
    };

    const container = document.getElementById('feature-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scroll to feature function
  const scrollToFeature = (index: number) => {
    const container = document.getElementById('feature-container');
    if (container) {
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      title: "You tap Twitter.",
      subtitle: "FocusOS kicks in.",
      icon: <Activity className="h-6 w-6 text-[#FF6B6B]" />,
      content: (
        <div className={`bg-black rounded-xl p-6 text-center relative ${showGlitch ? 'animate-glitch' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent opacity-50 rounded-xl"></div>
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-[#FF6B6B] text-xl font-bold mb-2 glitch-text"
            >
              APP LOCKED
            </motion.div>
            <div className="text-white text-sm mb-4">So you're back for more dopamine?</div>
            <div className="text-[#FFA94D] text-5xl font-mono mb-4 tracking-wider">
              {countdown < 10 ? `00:0${countdown}` : `00:${countdown}`}
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all border border-white/10"
            >
              Snap to Unlock
            </motion.button>
            <div className="text-white/60 text-xs">Take a breath. Or scream internally.</div>
          </div>
        </div>
      )
    },
    {
      title: "I'll just check one thing...",
      subtitle: "FOCUSOS IS WATCHING",
      icon: <Brain className="h-6 w-6 text-[#FFA94D]" />,
      content: (
        <div className="bg-gradient-to-br from-[#4A1942] to-[#2E0F29] rounded-xl p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/matrix.png')] opacity-5"></div>
          <div className="relative z-10">
            <motion.div 
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#FFA94D] text-xl font-bold mb-2"
            >
              COOL DOWN
            </motion.div>
            <div className="text-white text-sm mb-4">Is this worth your time?</div>
            <div className="text-[#FF6B6B] text-5xl font-mono mb-4 tracking-wider">
              {countdown < 10 ? `00:0${countdown}` : `00:${countdown}`}
            </div>
            <motion.div 
              animate={{ 
                x: [-4, 4, -4],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-4 px-4 py-2 inline-block rounded-full bg-[#FF6B6B]/20 text-[#FF6B6B] text-sm border border-[#FF6B6B]/20"
            >
              <span className="mr-2">⚡</span>
              Neutralizing impulse...
            </motion.div>
            <div className="text-white/80 text-sm">
              This cooldown helps retrain your dopamine triggers.
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Go touch grass.",
      subtitle: "Camera verification required.",
      icon: <Camera className="h-6 w-6 text-[#00A3FF]" />,
      content: (
        <div className="bg-black rounded-xl p-6 text-center relative">
          <div className="absolute inset-0 bg-[#00A3FF]/5 mix-blend-overlay"></div>
          <div className="relative z-10">
            <motion.div 
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#00A3FF] text-xl font-bold mb-2"
            >
              SITE BLOCKED
            </motion.div>
            <div className="text-white text-sm mb-4">Go touch grass, friend.</div>
            <div className="relative">
              <div className="bg-[url('/placeholder-grass.jpg')] bg-cover bg-center w-full h-48 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div 
                  className="absolute inset-0 border-2 border-[#00A3FF]/30"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6] text-white font-medium transition-all shadow-lg shadow-[#8B5CF6]/20"
            >
              I'M READY
            </motion.button>
            <div className="text-white/60 text-xs mt-3 italic">
              The feed can wait. This is real.
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-[#121212] relative overflow-hidden">      
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-[#4A1942]/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/matrix.png')] opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Breaking
            <span className="text-[#FF6B6B]"> dopamine-driven </span>
            loops
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-2"
            >
              <Sparkles className="h-8 w-8 text-[#FFA94D]" />
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300">
            One-time purchase. Lifetime of focus. No subscription BS.
          </p>
        </motion.div>

        {/* Feature Navigation Dots */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.button
              key={index}
              onClick={() => scrollToFeature(index)}
              className={`group relative px-6 py-2 rounded-full transition-all ${
                activeFeature === index ? 'bg-[#FF6B6B]/20' : 'hover:bg-white/5'
              }`}
            >
              <motion.div 
                className={`absolute inset-0 rounded-full ${
                  activeFeature === index ? 'bg-[#FF6B6B]/20' : 'bg-transparent'
                }`}
                layoutId="activeFeature"
                transition={{ type: "spring", duration: 0.6 }}
              />
              <span className={`relative z-10 text-sm font-medium ${
                activeFeature === index ? 'text-[#FF6B6B]' : 'text-white/60'
              }`}>
                Feature {index + 1}/3
              </span>
            </motion.button>
          ))}
        </div>

        {/* Feature Container */}
        <div 
          id="feature-container"
          className="relative snap-x snap-mandatory flex overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="snap-center flex-shrink-0 w-full flex flex-col md:flex-row gap-10 items-center px-4"
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  {feature.icon}
                  <span className="text-white/80 text-sm">Feature {index + 1}/3</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
                <p className="text-xl text-[#FF6B6B]">{feature.subtitle}</p>
                <div className="inline-block bg-[#FF6B6B]/10 text-[#FF6B6B] py-2 px-4 rounded-full border border-[#FF6B6B]/20">
                  <Zap className="h-4 w-4 inline-block mr-2" />
                  <span className="text-sm font-bold">Real-time regret technology</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-[280px] md:w-[320px] rounded-[25px] border-[8px] border-black bg-black shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent opacity-50 rounded-[17px]"></div>
                  {feature.content}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-between items-center mt-8 px-4">
          <motion.button
            onClick={() => scrollToFeature(Math.max(0, activeFeature - 1))}
            className={`p-2 rounded-full bg-white/5 border border-white/10 ${
              activeFeature === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
            }`}
            whileHover={activeFeature > 0 ? { scale: 1.1 } : {}}
            whileTap={activeFeature > 0 ? { scale: 0.95 } : {}}
          >
            <ArrowRight className="h-6 w-6 text-white rotate-180" />
          </motion.button>

          {/* Progress Bar */}
          <div className="flex-1 mx-8 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FF6B6B]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeFeature + 1) * 33.33}%` }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <motion.button
            onClick={() => scrollToFeature(Math.min(2, activeFeature + 1))}
            className={`p-2 rounded-full bg-white/5 border border-white/10 ${
              activeFeature === 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
            }`}
            whileHover={activeFeature < 2 ? { scale: 1.1 } : {}}
            whileTap={activeFeature < 2 ? { scale: 0.95 } : {}}
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </motion.button>
        </div>

        {/* Touch Grass Section with enhanced visuals */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/30 to-[#8B5CF6]/30 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform"></div>
            <div className="bg-[url('/placeholder-grass.jpg')] bg-cover bg-center h-[500px] rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl flex flex-col justify-end p-8">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-4 text-white"
                >
                  Touch Grass Moment
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 mb-6"
                >
                  We make your phone ask if you've touched grass lately.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-gradient-to-br from-[#1A1F2C] to-[#1A1F2C]/80 p-8 text-white border border-white/5"
            >
              <div className="text-xs text-[#FF6B6B] mb-1">Blocked: twitter.com</div>
              <h3 className="text-2xl font-bold mb-4">Step into the real world for a sec</h3>
              <div className="flex items-center space-x-4 text-[#FF6B6B]">
                <Camera className="h-6 w-6" />
                <span>Camera verification required</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-gradient-to-br from-[#1A1F2C] to-[#1A1F2C]/80 p-8 text-white border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-2">Verified real world.</h3>
              <p className="text-gray-300 mb-4">Cravings temporarily stunned.</p>
              <div className="flex items-center space-x-2 text-[#00A3FF]">
                <ArrowRight className="h-5 w-5" />
                <span>Go ahead, open Instagram.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* User Flow Section with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            User Attempts vs. FocusOS Response
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, color: "#FF6B6B", title: "User opens Reddit", desc: "Countdown + Snap Button" },
              { icon: Ban, color: "#FFA94D", title: "User snaps, tries again", desc: "Nope. Grass first." },
              { icon: Camera, color: "#00A3FF", title: "User goes outside, takes snap", desc: "Good job. Proceed." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1A1F2C] to-[#1A1F2C]/80 rounded-xl p-6 text-white border border-white/5"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="mb-4 flex justify-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-[${item.color}]/20 flex items-center justify-center relative group`}>
                    <div className={`absolute inset-0 rounded-full bg-[${item.color}]/20 group-hover:scale-110 transition-transform`}></div>
                    <item.icon className={`h-8 w-8 text-[${item.color}] relative z-10`} />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
