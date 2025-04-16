import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Infinity as InfinityIcon, Zap, Shield, Brain, Sparkles, Star, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  text: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface CtaSectionProps {
  id?: string;
}

export const CtaSection = ({ id }: CtaSectionProps) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'lifetime'>('lifetime');
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

  const includedFeatures = [
    "All social media apps supported",
    "Custom delay timers",
    "Touch grass verification",
    "Real-time dopamine tracking",
    "Focus score analytics",
    "Priority support"
  ];
  
  return (
    <section id={id} className="py-24 px-4 bg-gradient-to-br from-[#1A0E1F] to-[#2A1029] text-white relative overflow-hidden">
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

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl"
          animate={{
            x: ['-25%', '25%'],
            y: ['-25%', '25%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 bg-[#FFA94D]/10 rounded-full blur-3xl"
          animate={{
            x: ['25%', '-25%'],
            y: ['25%', '-25%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to break the loop?
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-2"
            >
              <Sparkles className="h-8 w-8 text-[#FFA94D]" />
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your dopamine wants you to scroll past this.<br />
            Don't let it win.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <div className="mt-12 mb-8 inline-flex items-center gap-4 bg-white/5 p-1.5 rounded-full backdrop-blur-sm border border-white/10">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedPlan === 'monthly' 
                ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/25' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan('lifetime')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedPlan === 'lifetime' 
                ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/25' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Lifetime
          </button>
        </div>
        
        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 relative"
        >
          {/* Popular Badge - Fixed positioning */}
          <AnimatePresence>
            {selectedPlan === 'lifetime' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] blur-md opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFA94D]/10 blur-xl opacity-50" />
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative">
              <div className="flex justify-between items-start mb-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedPlan === 'lifetime' ? 'Lifetime Access' : 'Monthly Plan'}
                  </h3>
                  <p className="text-gray-400">Break free from the dopamine loop</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">
                    ${selectedPlan === 'lifetime' ? '49' : '7'}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {selectedPlan === 'lifetime' ? 'One-time payment' : 'per month'}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {includedFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-left group"
                  >
                    <div className="h-5 w-5 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center group-hover:bg-[#FF6B6B]/30 transition-colors duration-300">
                      <Check className="h-3 w-3 text-[#FF6B6B]" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="relative bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-10 py-6 text-xl rounded-xl w-full font-bold overflow-hidden shadow-xl shadow-[#FF6B6B]/20 transition-shadow duration-300 hover:shadow-[#FF6B6B]/30"
                  onClick={() => navigate('/auth')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Get Started Now</span>
                </Button>
              </motion.div>

              <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
                <Shield className="h-4 w-4" />
                <span>30-day money-back guarantee • Instant access</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <Star className="h-6 w-6 text-[#FFA94D]" />,
              title: "4.9/5 Rating",
              desc: "From 1,000+ reviews"
            },
            {
              icon: <Shield className="h-6 w-6 text-[#00A3FF]" />,
              title: "Secure Payment",
              desc: "256-bit SSL encryption"
            },
            {
              icon: <Timer className="h-6 w-6 text-[#FF6B6B]" />,
              title: "Instant Access",
              desc: "Start breaking loops now"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                {item.icon}
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
