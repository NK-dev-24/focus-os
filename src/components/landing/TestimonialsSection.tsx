
import { MessageSquare, Twitter, Laugh } from "lucide-react";

const testimonials = [
  {
    text: "I opened Instagram. It opened regret.",
    author: "@dopamine_hangover",
    emoji: "😭",
    style: "bg-white"
  },
  {
    text: "FocusOS made me go outside. I saw the sun. I panicked.",
    author: "beta tester #14",
    emoji: "🧠",
    style: "bg-[#1DA1F2]/10"
  },
  {
    text: "Opened Twitter 47 times in one day. focusOS made me wait 60 seconds EVERY TIME. I hate it. I need it.",
    author: "Recovering Doomscroller",
    emoji: "⏱️",
    style: "bg-[#FF6B6B]/10"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-[#1A0E1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white animate-fade-in">
            Doomscrollers Anonymous
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in delay-200">
            Stories from the frontlines
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 relative animate-fade-in ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                background: `${testimonial.style === 'bg-white' ? 'white' : 'transparent'}`
              }}
            >
              <div className={`absolute top-4 right-4 text-4xl ${index % 2 === 0 ? 'animate-jiggle' : ''}`}>{testimonial.emoji}</div>
              
              {/* Chat bubble or tweet style */}
              <div className={`rounded-2xl p-6 ${testimonial.style} ${testimonial.style === 'bg-white' ? 'shadow-lg' : ''}`}>
                {index === 1 && (
                  <div className="flex items-center gap-2 mb-3">
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                    <span className="text-sm font-bold text-gray-700">Twitter Post</span>
                  </div>
                )}
                
                {index !== 1 && (
                  <MessageSquare className={`h-6 w-6 ${index === 0 ? 'text-gray-700' : 'text-[#FF6B6B]'} mb-3`} />
                )}
                
                <p className={`text-lg mb-4 ${testimonial.style === 'bg-white' ? 'text-gray-800' : 'text-white'} font-medium italic`}>"{testimonial.text}"</p>
                
                <div className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-full ${index === 0 ? 'bg-gray-200' : index === 1 ? 'bg-blue-200' : 'bg-red-200'} flex items-center justify-center`}>
                    <Laugh className="h-4 w-4 text-gray-700" />
                  </div>
                  <p className={`${testimonial.style === 'bg-white' ? 'text-gray-600' : 'text-gray-300'} text-sm font-medium`}>— {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
