import { MessageSquare, Twitter, Laugh, Star, Heart, Sparkles, Brain, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialsSectionProps {
  id?: string;
}

const testimonials = [
  {
    text: "I opened Instagram. It opened regret.",
    author: "@dopamine_hangover",
    icon: "😭",
    style: "bg-white",
    likes: 2.4,
    shares: 847,
    color: "text-gray-800",
    iconBg: "bg-[#FF6B6B]/10",
    iconColor: "text-[#FF6B6B]"
  },
  {
    text: "FocusOS made me go outside. I saw the sun. I panicked.",
    author: "beta tester #14",
    icon: "🧠",
    style: "bg-gradient-to-br from-[#1A1F2C] to-[#1A1F2C]/90",
    likes: 3.1,
    shares: 1243,
    color: "text-white",
    iconBg: "bg-[#00A3FF]/10",
    iconColor: "text-[#00A3FF]"
  },
  {
    text: "Opened Twitter 47 times in one day. focusOS made me wait 60 seconds EVERY TIME. I hate it. I need it.",
    author: "Recovering Doomscroller",
    icon: "⏱️",
    style: "bg-gradient-to-br from-[#2A1029] to-[#1A0E1F]",
    likes: 5.6,
    shares: 2891,
    color: "text-white",
    iconBg: "bg-[#FFA94D]/10",
    iconColor: "text-[#FFA94D]"
  }
];

export const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  return (
    <section id={id} className="py-24 px-4 bg-[#1A0E1F] relative overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(255,107,107,0.07), transparent)",
            "radial-gradient(800px circle at 100% 100%, rgba(255,169,77,0.07), transparent)",
            "radial-gradient(600px circle at 50% 50%, rgba(0,163,255,0.07), transparent)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="absolute inset-0 bg-[url('/matrix.png')] opacity-[0.02]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Brain className="h-5 w-5 text-[#FFA94D]" />
            <span className="text-white/80 text-sm">Real User Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Doomscrollers Anonymous
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
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stories from the frontlines of focus recovery
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <motion.div 
                className={`rounded-2xl relative backdrop-blur-sm ${
                  index === 1 ? '' : index === 0 ? 'rotate-1' : '-rotate-1'
                }`}
                whileHover={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card Content */}
                <div className={`rounded-2xl p-8 ${testimonial.style} relative overflow-hidden border border-white/10`}>
                  {/* Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${index === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}, transparent)`
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex items-center gap-3 ${testimonial.color}`}>
                        {index === 1 ? (
                          <motion.div 
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/20"
                          >
                            <Twitter className="h-4 w-4 text-[#00A3FF]" />
                            <span className="text-sm font-medium text-[#00A3FF]">Twitter Post</span>
                          </motion.div>
                        ) : (
                          <div className={`p-2 rounded-full ${testimonial.iconBg}`}>
                            <MessageSquare className={`h-4 w-4 ${testimonial.iconColor}`} />
                          </div>
                        )}
                      </div>
                      
                      <motion.div 
                        className="text-2xl"
                        animate={index === 1 ? {
                          scale: [1, 1.1, 1],
                          rotate: [-5, 5, -5]
                        } : {}}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        {testimonial.icon}
                      </motion.div>
                    </div>

                    {/* Message */}
                    <p className={`text-lg mb-6 ${testimonial.color} font-medium leading-relaxed`}>
                      "{testimonial.text}"
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={`h-8 w-8 rounded-full ${testimonial.iconBg} flex items-center justify-center`}
                        >
                          <Laugh className={`h-4 w-4 ${testimonial.iconColor}`} />
                        </motion.div>
                        <p className={`${index === 0 ? 'text-gray-600' : 'text-gray-300'} text-sm font-medium`}>
                          {testimonial.author}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <motion.button 
                          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FF6B6B] transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart className="h-4 w-4" />
                          <span>{testimonial.likes}k</span>
                        </motion.button>
                        <motion.button 
                          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FFA94D] transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Star className="h-4 w-4" />
                          <span>{testimonial.shares}</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
