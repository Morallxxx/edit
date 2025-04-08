
import { useState, useEffect } from 'react';
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-a1blue text-white shadow-lg transition-all duration-300 hover:bg-a1blue-light z-50 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTop;
