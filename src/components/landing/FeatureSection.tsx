import { useState, useEffect, useRef } from "react";
import { Phone, Clock, Ban, Lock, Zap, Camera, ArrowRight, Sparkles, Brain, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  id?: string;
}

export const FeatureSection = ({ id }: FeatureSectionProps) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const features = [
    {
      title: "Break the Scroll Loop",
      subtitle: "Real-time dopamine tracking",
      description: "FocusOS detects when you're falling into mindless scrolling and helps you break free with intelligent interventions.",
      image: "/delay-screen.png",
      color: "#FF6B6B",
      gradient: "from-[#FF6B6B]/20 to-[#FF6B6B]/5",
      icon: <Activity className="h-6 w-6" />,
      stats: [
        { label: "Average Focus Boost", value: "47%" },
        { label: "Time Saved Daily", value: "2.4h" }
      ]
    },
    {
      title: "Touch Grass Verification",
      subtitle: "Get out there, for real",
      description: "When you need a break, we'll make sure you actually step into the real world. No cheating allowed.",
      image: "/Touch-the-grass.png",
      color: "#00A3FF",
      gradient: "from-[#00A3FF]/20 to-[#00A3FF]/5",
      icon: <Camera className="h-6 w-6" />,
      stats: [
        { label: "Daily Nature Time", value: "+15m" },
        { label: "Mood Improvement", value: "63%" }
      ]
    },
    {
      title: "Redownload Protection",
      subtitle: "Break the cycle, permanently",
      description: "Caught in the delete-redownload loop? We'll make it awkward enough that you'll think twice.",
      image: "/redownload-blocker.png",
      color: "#FFA94D",
      gradient: "from-[#FFA94D]/20 to-[#FFA94D]/5",
      icon: <Ban className="h-6 w-6" />,
      stats: [
        { label: "Redownload Rate", value: "-82%" },
        { label: "Willpower Boost", value: "3.5x" }
      ]
    }
  ];

  const scrollToFeature = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * index,
        behavior: 'smooth'
      });
      setActiveFeature(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current && !isScrolling) {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      const newActive = Math.round(scrollLeft / width);
      if (newActive !== activeFeature) {
        setActiveFeature(newActive);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeFeature]);

  return (
    <section id={id} className="py-24 relative overflow-hidden bg-[#121212]">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[url('/matrix.png')] opacity-[0.02]" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px circle at 0% 0%, ${features[activeFeature].color}15, transparent)`,
            `radial-gradient(600px circle at 100% 100%, ${features[activeFeature].color}15, transparent)`
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="h-5 w-5 text-[#FFA94D]" />
            <span className="text-white/80 text-sm">Intelligent Intervention System</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your Focus Journey,{" "}
            <span className="text-[#FF6B6B]">Reimagined</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Three powerful features working in harmony to help you reclaim your attention and break free from digital distractions.
          </motion.p>
        </div>

        {/* Feature Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {features.map((feature, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToFeature(index)}
              className={`group relative px-6 py-2 rounded-full transition-all ${
                activeFeature === index ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: activeFeature === index 
                    ? `linear-gradient(90deg, ${feature.color}20, ${feature.color}10)`
                    : 'transparent'
                }}
                layoutId="activeFeatureIndicator"
                transition={{ type: "spring", duration: 0.6 }}
              />
              <span className={`relative z-10 text-sm font-medium ${
                activeFeature === index 
                  ? `text-[${feature.color}]` 
                  : 'text-white/60'
              }`}>
                {index + 1}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Features Container */}
        <div
          ref={containerRef}
          className="relative flex snap-x snap-mandatory overflow-x-hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full snap-center"
              style={{ scrollSnapAlign: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[${feature.color}]/10 text-[${feature.color}]`}>
                    {feature.icon}
                    <span className="text-sm font-medium">Feature {index + 1}/3</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className={`text-[${feature.color}] text-xl mb-4`}>{feature.subtitle}</p>
                    <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {feature.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`p-4 rounded-xl bg-[${feature.color}]/5 border border-[${feature.color}]/10`}
                      >
                        <div className={`text-2xl font-bold mb-1 text-[${feature.color}]`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Phone Mockup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-3xl rounded-full transform -rotate-12 scale-95`} />
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-[300px] md:w-[380px]"
                  >
                    <div className="relative rounded-[3rem] border-[14px] border-[#2A2A2A] bg-black overflow-hidden shadow-2xl">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#2A2A2A] rounded-b-2xl" />
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full aspect-[9/19.5] object-cover"
                      />
                      <div className={`absolute inset-0 pointer-events-none ${feature.gradient} mix-blend-overlay`} />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <motion.button
            onClick={() => scrollToFeature(Math.max(0, activeFeature - 1))}
            disabled={activeFeature === 0}
            className={`p-3 rounded-full ${
              activeFeature === 0 
                ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            whileHover={activeFeature > 0 ? { scale: 1.1 } : {}}
            whileTap={activeFeature > 0 ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FF6B6B]"
              style={{ width: `${((activeFeature + 1) / features.length) * 100}%` }}
              layoutId="progressBar"
            />
          </div>

          <motion.button
            onClick={() => scrollToFeature(Math.min(features.length - 1, activeFeature + 1))}
            disabled={activeFeature === features.length - 1}
            className={`p-3 rounded-full ${
              activeFeature === features.length - 1 
                ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            whileHover={activeFeature < features.length - 1 ? { scale: 1.1 } : {}}
            whileTap={activeFeature < features.length - 1 ? { scale: 0.9 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
