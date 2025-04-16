
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input-with-icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { LockKeyhole, Mail, UserPlus } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Welcome back!" : "Account created",
      description: "Redirecting to payment...",
    });
    setTimeout(() => navigate("/purchase"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFF9EC] flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 bg-[#FF6B6B] rounded-full" />
            <span className="font-bold">focusOS</span>
          </div>
          <CardTitle className="text-2xl">
            {isLogin ? "Welcome back, addict" : "Still trying to quit?"}
          </CardTitle>
          <CardDescription>
            {isLogin 
              ? "Sign in to continue your recovery journey" 
              : "Create an account to start your recovery journey"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <InputWithIcon
                type="email"
                placeholder="name@example.com"
                required
                className="h-12"
                icon={<Mail className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <div className="space-y-2">
              <InputWithIcon
                type="password"
                placeholder="••••••••"
                required
                className="h-12"
                icon={<LockKeyhole className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <Button type="submit" className="w-full h-12 text-lg bg-black hover:bg-black/90">
              {isLogin ? "Relapse & Continue" : "Start Recovery"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              {isLogin 
                ? "Don't have an account? Try staying clean" 
                : "Already have an account? Back to old habits"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
