import { useState, useEffect } from "react";
import { Brain, AlertTriangle, ChevronRight, ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DopamineScoreSection = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [focusState, setFocusState] = useState<'focused' | 'warning' | 'critical'>('focused');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      setScrollPercentage(currentPercentage);
      
      // Smooth score calculation
      const targetScore = Math.min(100, Math.round(currentPercentage * 1.2));
      const smoothingFactor = 0.1;
      const newScore = Math.round(score + (targetScore - score) * smoothingFactor);
      
      setScore(newScore);
      
      // Update focus state
      if (newScore < 30) {
        setFocusState('focused');
      } else if (newScore < 70) {
        setFocusState('warning');
      } else {
        setFocusState('critical');
        setShowWarning(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [score]);

  if (isDismissed) return null;

  const stateConfig = {
    focused: {
      color: '#00A3FF',
      text: 'Focus mode activated',
      icon: Brain,
      bgGradient: 'from-[#00A3FF]/10 to-transparent'
    },
    warning: {
      color: '#FFA94D',
      text: 'Focus drifting',
      icon: Brain,
      bgGradient: 'from-[#FFA94D]/10 to-transparent'
    },
    critical: {
      color: '#FF6B6B',
      text: 'Critical focus drift',
      icon: AlertTriangle,
      bgGradient: 'from-[#FF6B6B]/10 to-transparent'
    }
  };

  const currentState = stateConfig[focusState];
  const StateIcon = currentState.icon;
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          x: isMinimized ? 'calc(100% - 48px)' : 0 
        }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <motion.div
          className={`relative overflow-hidden rounded-2xl border bg-black/90 backdrop-blur-xl
            ${focusState === 'focused' ? 'border-[#00A3FF]/20' : 
              focusState === 'warning' ? 'border-[#FFA94D]/20' : 
              'border-[#FF6B6B]/20'}`}
        >
          {/* Background Gradient */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                `radial-gradient(circle at 0% 0%, ${currentState.color}15, transparent 70%)`,
                `radial-gradient(circle at 100% 100%, ${currentState.color}15, transparent 70%)`
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Control Buttons */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <motion.button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMinimized ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-white/80 hover:text-white"
              >
                {isMinimized ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4 text-white/80 hover:text-white" />
            </motion.button>
          </div>

          <div className={`p-4 ${isMinimized ? 'hidden' : 'block'}`}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className={`p-2 rounded-xl bg-gradient-to-br ${currentState.bgGradient}`}
                animate={showWarning ? {
                  scale: [1, 1.1, 1],
                  rotate: [-5, 5, -5]
                } : {}}
                transition={{ duration: 2, repeat: showWarning ? Infinity : 0 }}
              >
                <StateIcon className={`h-5 w-5 text-[${currentState.color}]`} />
              </motion.div>
              <div>
                <h4 className="text-sm font-medium text-white">Focus Meter</h4>
                <p className={`text-xs`} style={{ color: currentState.color }}>
                  {currentState.text}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-1 bg-white/5 rounded-full overflow-hidden mb-2">
              <motion.div 
                className="absolute inset-0 blur-md"
                style={{ 
                  width: `${score}%`,
                  background: `linear-gradient(90deg, ${currentState.color}, transparent)`
                }}
              />
              <motion.div 
                className="h-full relative"
                style={{ 
                  width: `${score}%`,
                  background: `linear-gradient(90deg, ${currentState.color}, ${currentState.color}80)`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 0 0 ${currentState.color}40`,
                      `0 0 0 4px ${currentState.color}00`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Warning Message */}
            <AnimatePresence>
              {showWarning && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3"
                >
                  <motion.div 
                    className="flex items-center gap-2 p-2 rounded-lg bg-[#FF6B6B]/10"
                    animate={{ 
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertTriangle className="h-4 w-4 text-[#FF6B6B]" />
                    <span className="text-xs text-[#FF6B6B]">
                      Time for a break?
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
