
import { Github, Twitter } from "lucide-react";

export const PhilosophicalFooter = () => {
  return (
    <footer className="py-16 px-4 bg-white text-center">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold animate-fade-in">
            You're not weak.
          </h3>
          <p className="text-lg text-gray-600 animate-fade-in delay-200">
            The apps are engineered to hijack you. 
            <span className="block mt-2">focusOS fights back — by making things a little awkward.</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-2 w-2 bg-[#FF6B6B] rounded-full"></div>
          <span className="font-bold text-lg">focusOS</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          © 2025 focusOS — Break loops, not your bank account.
        </p>
      </div>
    </footer>
  );
};
