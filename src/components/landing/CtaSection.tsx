import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Infinity as InfinityIcon, AlertTriangle, Zap, Shield, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  text: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const CtaSection = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  
  const features: Feature[] = [
    {
      icon: <Check className="h-4 w-4" />,
      text: "One-Time Purchase",
      color: "text-[#00A3FF]",
      bgColor: "bg-[#00A3FF]/10",
      borderColor: "border-[#00A3FF]/20"
    },
    {
      icon: <X className="h-4 w-4" />,
      text: "No Subscriptions",
      color: "text-[#FF6B6B]",
      bgColor: "bg-[#FF6B6B]/10",
      borderColor: "border-[#FF6B6B]/20"
    },
    {
      icon: <InfinityIcon className="h-4 w-4" />,
      text: "Lifetime Access",
      color: "text-[#FFA94D]",
      bgColor: "bg-[#FFA94D]/10",
      borderColor: "border-[#FFA94D]/20"
    }
  ];
  
  // Trigger emergency mode randomly
  useEffect(() => {
    const timer = setTimeout(() => setShowEmergency(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Random pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 1000);
    }, Math.random() * 5000 + 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#1A0E1F] to-[#2A1029] text-white relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFA94D]/5 to-transparent"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 bg-[#FF6B6B] rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-20 h-20 bg-[#FFA94D] rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to break the loop?
            <motion.span
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block ml-2"
            >
              <Sparkles className="h-8 w-8 text-[#FFA94D]" />
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Your dopamine wants you to scroll past this.<br />
            Don't let it win.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-4 items-center my-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 ${feature.bgColor} rounded-full ${feature.color} border ${feature.borderColor}`}
            >
              {feature.icon}
              <span className="text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Fake app opening animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mb-16 mx-auto w-full max-w-md"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl"
            animate={{
              opacity: isHovering ? 0.3 : 0,
              scale: isHovering ? 1.1 : 1,
              filter: isHovering ? "blur(8px)" : "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] opacity-50">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-[url('/matrix.png')] opacity-20"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 p-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group"
                  >
                    <motion.span 
                      className="text-xs text-white/70 group-hover:text-white/90 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      App {i+1}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg"
              className={`relative bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-black px-10 py-8 text-xl rounded-xl w-full font-bold overflow-hidden
                ${pulseEffect ? 'animate-pulse' : ''}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => navigate('/auth')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10 tracking-wider">[ RUIN MY SCROLLS ]</span>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Emergency Mode Button */}
        <AnimatePresence>
          {showEmergency && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mt-24 relative"
            >
              <motion.div 
                className="absolute inset-0 bg-[#FF6B6B]/5 rounded-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="p-8 border border-red-500 rounded-xl relative">
                <motion.div 
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-center gap-2 mb-4 text-[#FF6B6B]"
                >
                  <Shield className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Emergency Mode</h3>
                </motion.div>
                <p className="text-white/80 mb-6">
                  You're in deep. FocusOS is initiating lockdown.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/80 text-black flex items-center gap-2 font-medium relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Brain className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Enable Emergency Protocol</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
