
import { AlertTriangle, Brain, Zap } from "lucide-react";

export const ShockValueSection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-0"></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF6B6B]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#FFA94D]/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            This is <span className="text-[#FF6B6B]">not</span> another focus app
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm transform hover:translate-y-[-10px] transition-transform animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FF6B6B]/20 p-2 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-[#FF6B6B]" />
              </div>
              <h3 className="text-xl font-bold">No Mercy</h3>
            </div>
            <p className="text-gray-300">No subscriptions. No trackers. No excuses. Just pure, uncomfortable friction.</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm transform hover:translate-y-[-10px] transition-transform animate-fade-in delay-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFA94D]/20 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-[#FFA94D]" />
              </div>
              <h3 className="text-xl font-bold">Real-time Regret</h3>
            </div>
            <p className="text-gray-300">Our cutting-edge regret-delaying technology helps you rediscover what life was like before doom-scrolling.</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm transform hover:translate-y-[-10px] transition-transform animate-fade-in delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#00A3FF]/20 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-xl font-bold">Train Your Brain</h3>
            </div>
            <p className="text-gray-300">It's day 1 of dopamine detox, every day. Your brain will hate us. Your future self will thank us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
