import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CreditCardForm from "@/components/payment/CreditCardForm";
import { motion } from "framer-motion";

const recoveryLevels = ["Denial", "Awareness", "Action", "Recovery", "Mastery"];

const Purchase = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showWhyNotFree, setShowWhyNotFree] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    toast({
      title: "Processing your recovery...",
      description: "Analyzing dopamine levels... 🧬",
    });

    setTimeout(() => {
      toast({
        title: "Welcome back to control.",
        description: "This time, you're in charge.",
      });
      navigate("/code");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B6B]/10 rounded-full blur-[120px]" />
      
      {/* Doomscrolling illustration */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/doom-scroll.png')] bg-center bg-no-repeat pointer-events-none" />

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
                Commit to Focus.
                <span className="block text-base font-normal text-gray-400 mt-1">
                  Not Just a Purchase.
                </span>
              </CardTitle>
              
              {/* Progress Steps */}
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex-1 flex items-center gap-2">
                    <div className={`h-2 rounded-full flex-1 transition-colors ${
                      step <= 2 ? "bg-[#FF6B6B]" : "bg-white/10"
                    }`} />
                    <span className={`text-xs ${
                      step === 2 ? "text-[#FF6B6B]" : "text-gray-500"
                    }`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Recovery Level Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 rounded-lg p-4 border border-white/5"
            >
              <div className="text-sm text-gray-400 mb-2">Recovery Level</div>
              <div className="flex items-center gap-2">
                {recoveryLevels.map((level, index) => (
                  <div
                    key={level}
                    className={`flex-1 h-1 rounded-full ${
                      index <= 1 ? "bg-[#FF6B6B]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs text-[#FF6B6B] mt-2">Level 2: Awareness</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CreditCardForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <Button 
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full h-12 text-base font-medium bg-gradient-to-r from-[#FF6B6B] to-[#FF4949] hover:from-[#FF4949] hover:to-[#FF6B6B] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,107,0.3)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Processing Recovery...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5 mr-2" />
                    Unlock My Focus
                  </>
                )}
              </Button>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="h-4 w-4" />
                  One-time access. No subscriptions. No trackers.
                </div>

                <button
                  onClick={() => setShowWhyNotFree(!showWhyNotFree)}
                  className="text-sm text-gray-500 hover:text-[#FF6B6B] transition-colors text-center w-full"
                >
                  Why isn't this free?
                </button>

                {showWhyNotFree && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-gray-400 bg-white/5 p-4 rounded-lg border border-white/5"
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-[#FF6B6B] mt-0.5" />
                      <p>
                        We charge a symbolic amount to make your decision meaningful. 
                        Free apps are easy to ignore. This isn't one of them.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="text-xs text-center text-gray-600">
                  "I finally stopped opening the Play Store just to reinstall junk."
                  <br />
                  <span className="text-gray-500">– Ash, recovering scroller</span>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Purchase;
