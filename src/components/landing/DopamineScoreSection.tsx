import { useState, useEffect } from "react";
import { Gauge, AlertTriangle, Brain, Zap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DopamineScoreSection = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      setScrollPercentage(currentPercentage);
      
      // Calculate a "dopamine risk score" based on scroll percentage with some randomness
      const baseScore = Math.min(100, Math.round(currentPercentage * 1.3));
      const randomFactor = Math.random() * 10 - 5; // -5 to +5
      const newScore = Math.min(100, Math.max(0, baseScore + randomFactor));
      
      // Trigger pulse effect on significant score changes
      if (Math.abs(newScore - score) > 10) {
        setPulseEffect(true);
        setTimeout(() => setPulseEffect(false), 1000);
      }
      
      // Show warning when score is high
      setShowWarning(newScore > 70);
      
      // Unlock achievement at certain thresholds
      if (newScore > 80 && !achievementUnlocked) {
        setAchievementUnlocked(true);
        setTimeout(() => setAchievementUnlocked(false), 5000);
      }
      
      setScore(newScore);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [score]);
  
  const getMessage = () => {
    if (score < 30) {
      return {
        text: "You're doing great. Keep your focus strong.",
        icon: <Brain className="h-4 w-4 text-[#00A3FF]" />
      };
    } else if (score < 60) {
      return {
        text: "That's the same effort you put into quitting TikTok.",
        icon: <Activity className="h-4 w-4 text-[#FFA94D]" />
      };
    } else if (score < 80) {
      return {
        text: "Your dopamine receptors are getting desperate.",
        icon: <Zap className="h-4 w-4 text-[#FF6B6B]" />
      };
    } else {
      return {
        text: "Critical dopamine craving levels. Intervention needed.",
        icon: <AlertTriangle className="h-4 w-4 text-[#FF6B6B]" />
      };
    }
  };
  
  const message = getMessage();
  
  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={`bg-black/80 backdrop-blur-md rounded-lg p-4 border shadow-lg max-w-xs
          ${pulseEffect ? 'animate-pulse' : ''}
          ${score < 30 ? 'border-[#00A3FF]/30' : score < 60 ? 'border-[#FFA94D]/30' : 'border-[#FF6B6B]/30'}`}
      >
        <motion.div 
          className="flex items-center gap-2 mb-2"
          animate={{ 
            scale: pulseEffect ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Gauge className={`h-5 w-5 ${
            score < 30 ? 'text-[#00A3FF]' : score < 60 ? 'text-[#FFA94D]' : 'text-[#FF6B6B]'
          }`} />
          <h4 className="text-white font-bold text-sm">Dopamine Risk Score</h4>
        </motion.div>
        
        <div className="relative w-full h-3 bg-gray-700/50 rounded-full mb-2 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-50 blur-sm"
            style={{ 
              width: `${score}%`, 
              background: score < 30 ? '#00A3FF' : score < 60 ? '#FFA94D' : '#FF6B6B' 
            }}
          />
          <motion.div 
            className="h-full rounded-full transition-all duration-300 ease-out relative z-10"
            style={{ 
              width: `${score}%`, 
              background: score < 30 
                ? 'linear-gradient(90deg, #00A3FF, #00A3FF80)' 
                : score < 60 
                ? 'linear-gradient(90deg, #FFA94D, #FFA94D80)' 
                : 'linear-gradient(90deg, #FF6B6B, #FF6B6B80)' 
            }}
            animate={{
              scale: pulseEffect ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="flex justify-between text-xs mb-3">
          <span className="text-[#00A3FF]">Safe</span>
          <span className="text-[#FFA94D]">Risky</span>
          <span className="text-[#FF6B6B]">Critical</span>
        </div>
        
        <div className="text-sm space-y-2">
          <motion.p 
            className="text-white"
            animate={{ opacity: pulseEffect ? [1, 0.7, 1] : 1 }}
          >
            You've scrolled {scrollPercentage}% of the page.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-2 text-gray-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {message.icon}
            <span>{message.text}</span>
          </motion.div>
          
          <AnimatePresence>
            {showWarning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 text-[#FF6B6B] mt-2"
              >
                <AlertTriangle className="h-4 w-4" />
                <span className="text-xs font-medium">High dopamine seeking behavior detected</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Achievement Popup */}
      <AnimatePresence>
        {achievementUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-4 bg-[#FF6B6B] text-white px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="text-sm font-bold mb-1">🏆 Achievement Unlocked!</div>
            <div className="text-xs opacity-90">Master Scroller: Reached Peak Dopamine</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
