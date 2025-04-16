
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy, Download, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Code = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const lifetimeCode = "FOCUS-4-LIFE-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  useEffect(() => {
    // Dramatic reveal delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(lifetimeCode);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Don't lose it again. We're watching.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCertificate = () => {
    toast({
      title: "Certificate of Recovery",
      description: "Your badge of shame is downloading...",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF9EC] flex items-center justify-center p-4">
      <Card className={`w-full max-w-md transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <CardHeader>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 bg-[#FF6B6B] rounded-full" />
            <span className="font-bold">focusOS</span>
          </div>
          <CardTitle className="text-2xl">You Did It. 🫠</CardTitle>
          <CardDescription>You're free now. For now.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-black p-8 text-center relative overflow-hidden group animate-pulse-glow">
            <Lock className="h-5 w-5 text-[#FF6B6B] absolute top-4 left-4" />
            <div className="font-mono text-xl text-white tracking-wider">
              {lifetimeCode}
            </div>
            <div className="text-xs text-gray-500 mt-2">Your dopamine-blocker license key</div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="font-medium mb-2">Installation Guide:</div>
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5">
                <li>Download and install focusOS</li>
                <li>Launch the application</li>
                <li>Click "Activate with Code"</li>
                <li>Enter your lifetime code</li>
                <li>Begin your journey to digital freedom</li>
              </ol>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={copyCode}
                className="flex-1 h-12 bg-black hover:bg-black/90 hover:scale-105 transform transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                {copied ? "Copied!" : "Copy Code"}
              </Button>
              <Button
                onClick={downloadCertificate}
                variant="outline"
                className="flex-1 h-12 border-2 hover:bg-black/5 hover:scale-105 transform transition-all flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Recovery Certificate
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            If you reinstall TikTok again, we're watching 👀
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Code;
