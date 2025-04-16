import { useState, useEffect } from "react";
import { Gauge, AlertTriangle, Brain, Zap, Activity, Trophy, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DopamineScoreSection = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [achievements, setAchievements] = useState([
    { id: 1, title: "Focus Initiate", description: "Started your journey", threshold: 20, unlocked: false, icon: "🌱" },
    { id: 2, title: "Mindful Explorer", description: "Reached halfway", threshold: 50, unlocked: false, icon: "🧘" },
    { id: 3, title: "Dopamine Warrior", description: "Master of self-control", threshold: 80, unlocked: false, icon: "⚔️" },
  ]);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const currentPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      setScrollPercentage(currentPercentage);
      
      // Smoother score calculation with easing
      const targetScore = Math.min(100, Math.round(currentPercentage * 1.2));
      const smoothingFactor = 0.1;
      const newScore = Math.round(score + (targetScore - score) * smoothingFactor);
      
      // Check achievements
      const newAchievements = achievements.map(achievement => ({
        ...achievement,
        unlocked: newScore >= achievement.threshold ? true : achievement.unlocked
      }));
      
      // If any new achievements were unlocked
      const newlyUnlocked = newAchievements.find(
        (a, i) => a.unlocked && !achievements[i].unlocked
      );
      
      if (newlyUnlocked) {
        setAchievementUnlocked(true);
        setTimeout(() => setAchievementUnlocked(false), 3000);
      }
      
      setAchievements(newAchievements);
      setScore(newScore);
      setShowWarning(newScore > 70);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [score, achievements]);

  const getMessage = () => {
    if (score < 30) return {
      text: "Focus mode activated. Keep it up!",
      icon: <Brain className="h-4 w-4 text-[#00A3FF]" />,
      color: "text-[#00A3FF]"
    };
    if (score < 60) return {
      text: "Stay mindful of your scrolling",
      icon: <Activity className="h-4 w-4 text-[#FFA94D]" />,
      color: "text-[#FFA94D]"
    };
    if (score < 80) return {
      text: "Time for a dopamine reset?",
      icon: <Zap className="h-4 w-4 text-[#FF6B6B]" />,
      color: "text-[#FF6B6B]"
    };
    return {
      text: "Critical focus drift detected",
      icon: <AlertTriangle className="h-4 w-4 text-[#FF6B6B]" />,
      color: "text-[#FF6B6B]"
    };
  };

  const message = getMessage();
  
  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50"
      animate={{ x: isMinimized ? 'calc(100% - 48px)' : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={`relative bg-black/90 backdrop-blur-xl rounded-xl border shadow-lg overflow-hidden
          ${score < 30 ? 'border-[#00A3FF]/30' : score < 60 ? 'border-[#FFA94D]/30' : 'border-[#FF6B6B]/30'}`}
      >
        {/* Minimize Button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <motion.div
            animate={{ rotate: isMinimized ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {isMinimized ? '←' : '→'}
          </motion.div>
        </button>

        <div className={`p-4 ${isMinimized ? 'hidden' : 'block'}`}>
          {/* Header */}
          <motion.div 
            className="flex items-center gap-2 mb-4"
            animate={{ scale: pulseEffect ? [1, 1.05, 1] : 1 }}
          >
            <div className="p-2 rounded-lg bg-white/5">
              <Gauge className={`h-5 w-5 ${message.color}`} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Focus Meter</h4>
              <p className="text-white/60 text-xs">Level {Math.floor(score / 20) + 1}</p>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="relative h-4 bg-white/5 rounded-full mb-4 overflow-hidden">
            <motion.div 
              className="absolute inset-0 opacity-20 blur-md"
              style={{ 
                width: `${score}%`,
                background: `linear-gradient(90deg, 
                  ${score < 30 ? '#00A3FF' : score < 60 ? '#FFA94D' : '#FF6B6B'},
                  transparent
                )`
              }}
            />
            <motion.div 
              className="h-full rounded-full relative z-10"
              style={{ 
                width: `${score}%`,
                background: score < 30 
                  ? 'linear-gradient(90deg, #00A3FF, #00A3FF80)' 
                  : score < 60 
                  ? 'linear-gradient(90deg, #FFA94D, #FFA94D80)' 
                  : 'linear-gradient(90deg, #FF6B6B, #FF6B6B80)' 
              }}
              animate={{
                scale: pulseEffect ? [1, 1.02, 1] : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className={`p-2 rounded-lg text-center ${
                  achievement.unlocked 
                    ? 'bg-white/10 text-white' 
                    : 'bg-white/5 text-white/40'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl mb-1">{achievement.unlocked ? achievement.icon : '🔒'}</div>
                <div className="text-xs font-medium truncate">{achievement.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Status Message */}
          <motion.div 
            className="flex items-center gap-2 p-2 rounded-lg bg-white/5"
            animate={{ 
              backgroundColor: showWarning ? ['rgba(255,255,255,0.05)', 'rgba(255,107,107,0.1)', 'rgba(255,255,255,0.05)'] : 'rgba(255,255,255,0.05)'
            }}
            transition={{ duration: 2, repeat: showWarning ? Infinity : 0 }}
          >
            {message.icon}
            <span className={`text-sm ${message.color}`}>{message.text}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Achievement Popup */}
      <AnimatePresence>
        {achievementUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFA94D] p-[1px] rounded-lg shadow-lg"
          >
            <div className="bg-black/90 backdrop-blur-xl rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[#FFA94D]" />
                <div>
                  <div className="text-sm font-bold text-white">Achievement Unlocked!</div>
                  <div className="text-xs text-white/80">
                    {achievements.find(a => a.unlocked && !achievements[achievements.indexOf(a) - 1]?.unlocked)?.description}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
