import { MessageSquare, Twitter, Laugh, Star, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I opened Instagram. It opened regret.",
    author: "@dopamine_hangover",
    emoji: "😭",
    style: "bg-white",
    likes: 2.4,
    shares: 847
  },
  {
    text: "FocusOS made me go outside. I saw the sun. I panicked.",
    author: "beta tester #14",
    emoji: "🧠",
    style: "bg-[#1DA1F2]/10",
    likes: 3.1,
    shares: 1243
  },
  {
    text: "Opened Twitter 47 times in one day. focusOS made me wait 60 seconds EVERY TIME. I hate it. I need it.",
    author: "Recovering Doomscroller",
    emoji: "⏱️",
    style: "bg-[#FF6B6B]/10",
    likes: 5.6,
    shares: 2891
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-[#1A0E1F] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-[#1DA1F2]/5 to-transparent"></div>
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/matrix.png')] opacity-[0.02]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
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
              <Sparkles className="h-6 w-6 text-[#FFA94D]" />
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400">
            Stories from the frontlines
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
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <motion.div 
                className={`rounded-2xl p-8 relative backdrop-blur-sm ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
                whileHover={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`absolute top-4 right-4 text-4xl`}
                  animate={{ 
                    y: [0, -4, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {testimonial.emoji}
                </motion.div>
                
                {/* Chat bubble or tweet style */}
                <div className={`rounded-2xl p-6 ${testimonial.style} relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300`}>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {index === 1 && (
                      <motion.div 
                        className="flex items-center gap-2 mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                        <span className="text-sm font-bold text-gray-700">Twitter Post</span>
                      </motion.div>
                    )}
                    
                    {index !== 1 && (
                      <MessageSquare className={`h-6 w-6 ${index === 0 ? 'text-gray-700' : 'text-[#FF6B6B]'} mb-3`} />
                    )}
                    
                    <p className={`text-lg mb-4 ${testimonial.style === 'bg-white' ? 'text-gray-800' : 'text-white'} font-medium italic leading-relaxed`}>
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={`h-8 w-8 rounded-full ${
                            index === 0 ? 'bg-gray-200' : index === 1 ? 'bg-blue-200' : 'bg-red-200'
                          } flex items-center justify-center`}
                        >
                          <Laugh className="h-4 w-4 text-gray-700" />
                        </motion.div>
                        <p className={`${testimonial.style === 'bg-white' ? 'text-gray-600' : 'text-gray-300'} text-sm font-medium`}>
                          — {testimonial.author}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="flex items-center gap-1 text-sm text-gray-400"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Heart className="h-4 w-4" />
                          <span>{testimonial.likes}k</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1 text-sm text-gray-400"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Star className="h-4 w-4" />
                          <span>{testimonial.shares}</span>
                        </motion.div>
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
