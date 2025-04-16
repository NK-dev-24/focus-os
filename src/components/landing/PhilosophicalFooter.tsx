import { Github, Twitter, ExternalLink, Heart, Sparkles, Brain } from "lucide-react";
import { motion } from "framer-motion";

export const PhilosophicalFooter = () => {
  return (
    <footer className="relative py-24 px-4 bg-gradient-to-br from-[#1A0E1F] to-black overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <motion.div 
        className="absolute inset-0 bg-[url('/matrix.png')] opacity-[0.02]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Main Message */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Brain className="h-5 w-5 text-[#FF6B6B]" />
              <span className="text-white/80 text-sm">Break free from the matrix</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              You're not weak.
              <motion.span
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block ml-2"
              >
                <Sparkles className="h-8 w-8 text-[#FFA94D]" />
              </motion.span>
            </h3>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              The apps are engineered to hijack you.
              <span className="block mt-2 text-[#FF6B6B]">focusOS fights back — by making things a little awkward.</span>
            </p>
          </motion.div>
          
          {/* Right Column - Stats & Social Proof */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Hours Saved", value: "124K+" },
              { label: "Apps Blocked", value: "50K+" },
              { label: "Users Freed", value: "10K+" },
              { label: "Grass Touched", value: "∞" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="h-3 w-3 bg-[#FF6B6B] rounded-full"></div>
              <span className="font-bold text-xl text-white">focusOS</span>
            </motion.div>
            
            {/* Links */}
            <div className="flex items-center gap-8 text-gray-400">
              <motion.a 
                whileHover={{ scale: 1.1, color: "#fff" }}
                href="#"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">Source</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                href="#"
                className="flex items-center gap-2 hover:text-[#1DA1F2] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="text-sm">Updates</span>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-[#FF6B6B]"
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm">Made for Hackathon</span>
              </motion.div>
            </div>
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm flex items-center gap-2">
              © 2025 focusOS
              <span className="px-2 py-1 rounded-full bg-white/5 text-xs">
                Break loops, not your bank account
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
