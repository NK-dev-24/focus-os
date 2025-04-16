
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CreditCardForm from "@/components/payment/CreditCardForm";

const Purchase = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    toast({
      title: "Processing your recovery...",
      description: "Analyzing dopamine levels... 🧬",
    });

    // Simulate processing delay
    setTimeout(() => {
      toast({
        title: "Purchase successful!",
        description: "Welcome to the clean life. Sort of.",
      });
      navigate("/code");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF9EC] flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 bg-[#FF6B6B] rounded-full" />
            <span className="font-bold">focusOS</span>
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-2xl">Complete Your Recovery Purchase</CardTitle>
            <div className="text-sm font-medium text-[#FF6B6B]">Step 2/3</div>
          </div>
          
          <CardDescription className="text-base">
            We normally charge for this. But you're lucky.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <CreditCardForm />

          <Button 
            onClick={handlePurchase}
            disabled={isProcessing}
            className="w-full h-12 text-lg bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-black hover:scale-105 transform transition-all flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Lock className="h-5 w-5" />
                Complete Purchase
              </>
            )}
          </Button>

          <div className="text-center text-sm text-gray-500">
            No subscription. Just lifetime guilt. 🫠
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Purchase;
