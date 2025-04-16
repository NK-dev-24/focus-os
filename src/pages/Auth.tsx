import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input-with-icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LockKeyhole, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerMessages = [
  "You promised yourself you wouldn't come back.",
  "This is your 5th login today.",
  "FocusOS doesn't judge. But we do keep score.",
  "Get it over with.",
  "Your screen time isn't going to fix itself.",
];

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [randomMessage, setRandomMessage] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setRandomMessage(footerMessages[Math.floor(Math.random() * footerMessages.length)]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Welcome back!" : "Account created",
      description: "Redirecting to payment...",
    });
    setTimeout(() => navigate("/purchase"), 1500);
  };

  return (
    <div className="fixed inset-0 min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4">
      {/* Ambient background effects */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent"
        style={{ pointerEvents: 'none' }}
      />
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B6B]/10 rounded-full blur-[120px]"
        style={{ pointerEvents: 'none' }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key="auth-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md relative z-10"
        >
          <Card className="relative overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(255,107,107,0.1)] rounded-lg">
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
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {isLogin ? "Welcome back, addict" : "Still trying to quit?"}
              </CardTitle>
              <CardDescription className="text-gray-400 text-base">
                {isLogin 
                  ? "Let's continue your recovery journey" 
                  : "Create an account to start your recovery journey"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <InputWithIcon
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-colors"
                    icon={<Mail className="h-4 w-4 text-gray-500" />}
                  />
                  <InputWithIcon
                    type="password"
                    placeholder="••••••••"
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-colors"
                    icon={<LockKeyhole className="h-4 w-4 text-gray-500" />}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-medium bg-gradient-to-r from-[#FF6B6B] to-[#FF4949] hover:from-[#FF4949] hover:to-[#FF6B6B] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,107,0.3)] active:scale-[0.98]"
                  >
                    {isLogin ? "I'm Weak, Let Me In" : "Start Recovery"}
                  </Button>
                </motion.div>

                <motion.div 
                  className="mt-6 space-y-3 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-sm text-gray-500 italic">{randomMessage}</p>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-gray-400 hover:text-[#FF6B6B] transition-colors"
                  >
                    {isLogin 
                      ? "Don't have an account? Stay clean while you still can" 
                      : "Already have an account? Back to old habits"}
                  </button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Auth;
