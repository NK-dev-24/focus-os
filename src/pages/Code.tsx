import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy, Download, Lock, Share2, Terminal, Shield, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const Code = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [codeRevealIndex, setCodeRevealIndex] = useState(0);
  const [activationStatus, setActivationStatus] = useState<'pending' | 'activated' | 'error'>('pending');
  const { toast } = useToast();
  
  // Generate a persistent lifetime code using a stable seed
  const generateLifetimeCode = () => {
    const timestamp = new Date().toISOString().split('T')[0]; // Use date as seed
    const seed = timestamp.split('-').join(''); // Remove dashes
    const hash = Array.from(seed).reduce((acc, char) => {
      return ((acc << 5) - acc) + char.charCodeAt(0) | 0;
    }, 0);
    return "FOCUS-4-LIFE-" + Math.abs(hash).toString(36).substring(0, 6).toUpperCase();
  };

  // Store the code in state to keep it persistent
  const [lifetimeCode] = useState(generateLifetimeCode());
  const codeArray = lifetimeCode.split('');

  const installSteps: string[] = [
    "Download and install focusOS",
    "Launch the application",
    'Click "Activate with Code"',
    "Enter your lifetime code",
    "Begin your journey to digital freedom"
  ];

  useEffect(() => {
    // Dramatic reveal delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Reveal code character by character
    if (isVisible && codeRevealIndex < codeArray.length) {
      const revealTimer = setInterval(() => {
        setCodeRevealIndex(prev => prev + 1);
      }, 100);
      return () => clearInterval(revealTimer);
    }
    
    return () => clearTimeout(timer);
  }, [isVisible, codeRevealIndex, codeArray.length]);

  const copyCode = () => {
    navigator.clipboard.writeText(lifetimeCode);
    setCopied(true);
    toast({
      title: "Code Secured! 🔐",
      description: "Your lifetime access code is now in your clipboard.",
      className: "bg-[#1A1A1A] border-[#FF6B6B] text-white",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCertificate = () => {
    setActivationStatus('activated');
    toast({
      title: "Achievement Unlocked! 🏆",
      description: "Your Digital Freedom Certificate is being generated...",
      className: "bg-[#1A1A1A] border-[#FF6B6B] text-white",
    });
    setShowEasterEgg(true);
  };

  const shareProgress = () => {
    const text = `🚀 I've just unlocked digital freedom with @focusOS!\n\n"Recovery isn't about perfection. It's about direction." 🧠✨\n\nJoin the movement: https://focus-os.com\n\n#DigitalWellness #FocusOS`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Digital Freedom Journey',
        text: text,
        url: 'https://focus-os.com'
      }).then(() => {
        toast({
          title: "Spread the Movement! 🌟",
          description: "Thank you for sharing your journey!",
          className: "bg-[#1A1A1A] border-[#FF6B6B] text-white",
        });
      });
    } else {
      navigator.clipboard.writeText(text);
      toast({
        title: "Message Copied! 📋",
        description: "Share text is ready to be pasted anywhere.",
        className: "bg-[#1A1A1A] border-[#FF6B6B] text-white",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B6B]/10 rounded-full blur-[120px]" />
      
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-[url('/matrix.png')] bg-repeat opacity-[0.02]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(255,107,107,0.1)] rounded-lg overflow-hidden">
          <CardHeader className="space-y-1 pb-6">
            <motion.div 
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="h-2.5 w-2.5 bg-[#FF6B6B] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,107,107,0.5)]" />
              <span className="font-bold text-[#FF6B6B] tracking-wide">focusOS</span>
            </motion.div>
            
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Freedom Unlocked
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="inline-block ml-2"
                >
                  🎉
                </motion.span>
              </CardTitle>
              <CardDescription className="text-gray-400 text-base">
                Your journey to digital freedom begins now.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* License Key Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-lg bg-gradient-to-br from-black to-gray-900 p-8 text-center relative overflow-hidden group">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-purple-500 to-[#FF6B6B] opacity-20 group-hover:opacity-30 transition-opacity" />
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                
                <div className="relative">
                  <Lock className="h-5 w-5 text-[#FF6B6B] absolute top-0 left-4 animate-pulse" />
                  <Shield className="h-5 w-5 text-[#FF6B6B] absolute top-0 right-4 animate-pulse" />
                  
                  <div className="font-mono text-2xl text-white tracking-wider space-x-1">
                    {codeArray.map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: codeRevealIndex >= index ? 1 : 0,
                          y: codeRevealIndex >= index ? 0 : 20
                        }}
                        className={char === '-' ? 'text-[#FF6B6B]' : ''}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-4">Your key to digital consciousness</div>
                </div>
              </div>
            </motion.div>

            {/* Installation Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 text-white mb-3">
                  <Terminal className="h-4 w-4 text-[#FF6B6B]" />
                  <div className="font-medium">Installation Guide:</div>
                </div>
                <ol className="list-none text-sm text-gray-400 space-y-3">
                  {installSteps.map((step: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-[#FF6B6B] border border-white/10">
                        {index + 1}
                      </div>
                      {step}
                    </motion.li>
                  ))}
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={copyCode}
                  className="flex-1 h-12 bg-gradient-to-r from-[#FF6B6B] to-[#FF4949] hover:from-[#FF4949] hover:to-[#FF6B6B] text-white font-medium hover:scale-[1.02] transform transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,107,0.2)]"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  {copied ? "Secured!" : "Copy Code"}
                </Button>
                
                <Button
                  onClick={shareProgress}
                  className="flex-1 h-12 bg-white/10 hover:bg-white/15 text-white font-medium border-[#FF6B6B]/20 hover:border-[#FF6B6B]/40 hover:scale-[1.02] transform transition-all flex items-center justify-center gap-2"
                >
                  <Share2 className="h-5 w-5 text-[#FF6B6B]" />
                  Share Progress
                </Button>
              </div>

              <Button
                onClick={downloadCertificate}
                className={`w-full h-12 border-0 text-white font-medium hover:scale-[1.02] transform transition-all flex items-center justify-center gap-2 ${
                  activationStatus === 'activated'
                    ? 'bg-[#2A2A2A] hover:bg-[#333333] text-[#FF6B6B]'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <Sparkles className="h-5 w-5 text-[#FF6B6B]" />
                {activationStatus === 'activated' ? 'Certificate Claimed ✨' : 'Claim Recovery Certificate'}
              </Button>
            </motion.div>

            {/* Easter Egg and Footer */}
            <AnimatePresence>
              {showEasterEgg && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-center space-y-2 py-2"
                >
                  <div className="text-sm text-gray-300">
                    "The first step isn't admitting you have a problem.
                    <br />
                    It's admitting your phone has you." 
                  </div>
                  <div className="text-xs text-[#FF6B6B] font-medium">
                    – Ancient focusOS Proverb
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-sm text-gray-400"
            >
              Remember: Relapse is just a notification away 
              <span className="ml-1 inline-block hover:scale-110 transform transition-all cursor-default">👀</span>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Code;
