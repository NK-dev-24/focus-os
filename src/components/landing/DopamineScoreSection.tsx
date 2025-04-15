
import { useState, useEffect } from "react";
import { Gauge, AlertTriangle } from "lucide-react";

export const DopamineScoreSection = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      setScrollPercentage(scrollPercentage);
      
      // Calculate a "dopamine risk score" based on scroll percentage
      const newScore = Math.min(100, Math.round(scrollPercentage * 1.3));
      setScore(newScore);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const getMessage = () => {
    if (score < 30) {
      return "You're doing great. Keep your focus strong.";
    } else if (score < 60) {
      return "That's the same effort you put into quitting TikTok.";
    } else if (score < 80) {
      return "Your dopamine receptors are getting desperate.";
    } else {
      return "Critical dopamine craving levels. Intervention needed.";
    }
  };
  
  return (
    <div className="fixed bottom-0 right-0 p-4 z-50">
      <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-[#FF6B6B]/30 shadow-lg max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="h-5 w-5 text-[#FF6B6B]" />
          <h4 className="text-white font-bold text-sm">Dopamine Risk Score</h4>
        </div>
        
        <div className="w-full h-3 bg-gray-700 rounded-full mb-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${score}%`, 
              background: score < 30 ? '#00A3FF' : score < 60 ? '#FFA94D' : '#FF6B6B' 
            }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 mb-3">
          <span>Safe</span>
          <span>Risky</span>
          <span>Critical</span>
        </div>
        
        <div className="text-sm">
          <p className="text-white mb-1">You've scrolled {scrollPercentage}% of the page.</p>
          <p className="text-gray-300">{getMessage()}</p>
          
          {score > 70 && (
            <div className="flex items-center gap-1 mt-2 text-[#FF6B6B]">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs">High dopamine seeking behavior detected</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
