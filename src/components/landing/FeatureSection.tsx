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
      {/* Dynamic background effects */}
      <div className="absolute inset-0 bg-[url('/matrix.png')] opacity-[0.02]" />
      <motion.div
        className="absolute inset-0 bg-gradient-radial"
        animate={{
          background: [
            `radial-gradient(circle at 30% 30%, ${features[activeFeature].color}15 0%, transparent 60%)`,
            `radial-gradient(circle at 70% 70%, ${features[activeFeature].color}15 0%, transparent 60%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6 border border-white/10"
          >
            <Sparkles className="h-5 w-5 text-[#FFA94D]" />
            <span className="text-white/80 text-sm">Intelligent Intervention System</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Your Focus Journey,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D]">
              Reimagined
            </span>
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
        <div className="flex justify-center gap-3 mb-16">
          {features.map((feature, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToFeature(index)}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-white/10 backdrop-blur-sm' 
                  : 'hover:bg-white/5'
              }`}>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: activeFeature === index 
                      ? `linear-gradient(90deg, ${feature.color}30, ${feature.color}10)`
                      : 'transparent',
                    opacity: activeFeature === index ? 1 : 0
                  }}
                  layoutId="activeFeatureIndicator"
                  transition={{ type: "spring", duration: 0.6 }}
                />
                <span className={`relative z-10 text-sm font-medium ${
                  activeFeature === index 
                    ? `text-[${feature.color}]` 
                    : 'text-white/60'
                }`}>
                  Feature {index + 1}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Features Container */}
        <div
          ref={containerRef}
          className="relative flex snap-x snap-mandatory overflow-x-hidden scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <AnimatePresence mode="wait">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full snap-center"
                style={{ scrollSnapAlign: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[${feature.color}]/10 text-[${feature.color}] border border-[${feature.color}]/20`}>
                      {feature.icon}
                      <span className="text-sm font-medium">{feature.subtitle}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{feature.title}</h3>
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
                          whileHover={{ scale: 1.02 }}
                          className={`p-6 rounded-xl bg-[${feature.color}]/5 border border-[${feature.color}]/10 backdrop-blur-sm hover:bg-[${feature.color}]/10 transition-colors duration-300`}
                        >
                          <div className={`text-3xl font-bold mb-1 text-[${feature.color}]`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Feature Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >
                    <motion.div
                      className="absolute inset-0 blur-3xl"
                      animate={{
                        background: [
                          `radial-gradient(circle at 50% 50%, ${feature.color}30 0%, transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, ${feature.color}20 20%, transparent 80%)`
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: -1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-[300px] md:w-[380px]"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                      <motion.div
                        className={`absolute inset-0 rounded-2xl pointer-events-none ${feature.gradient} mix-blend-overlay`}
                        animate={{
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <motion.button
            onClick={() => scrollToFeature(Math.max(0, activeFeature - 1))}
            disabled={activeFeature === 0}
            className={`p-4 rounded-full backdrop-blur-sm border ${
              activeFeature === 0 
                ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20 border-white/10'
            }`}
            whileHover={activeFeature > 0 ? { scale: 1.1 } : {}}
            whileTap={activeFeature > 0 ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full"
              style={{ 
                background: `linear-gradient(90deg, ${features[activeFeature].color}, ${features[activeFeature].color}90)`,
                width: `${((activeFeature + 1) / features.length) * 100}%`
              }}
              layoutId="progressBar"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <motion.button
            onClick={() => scrollToFeature(Math.min(features.length - 1, activeFeature + 1))}
            disabled={activeFeature === features.length - 1}
            className={`p-4 rounded-full backdrop-blur-sm border ${
              activeFeature === features.length - 1 
                ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed' 
                : 'bg-white/10 text-white hover:bg-white/20 border-white/10'
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
