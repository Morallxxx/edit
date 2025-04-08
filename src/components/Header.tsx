
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from '../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="uploads/logo.webp" 
            alt=" Life Logo" 
            className={`transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#como-funciona" className="text-a1blue hover:text-a1blue-light font-medium animated-link transition-all duration-300">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-a1blue hover:text-a1blue-light font-medium animated-link transition-all duration-300">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-a1blue hover:text-a1blue-light font-medium animated-link transition-all duration-300">Depoimentos</a></li>
              <li><a href="#faq" className="text-a1blue hover:text-a1blue-light font-medium animated-link transition-all duration-300">FAQ</a></li>
            </ul>
          </nav>
          <a href="#assinar" className="cta-button flex items-center space-x-2 transform hover:scale-105 transition-all duration-300">
            <Phone size={16} />
            <span>Falar com um médico</span>
          </a>
        </div>
        
        {/* Mobile Menu Button with improved animation */}
        <button 
          className="md:hidden text-a1blue p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu with improved animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 animate-slide-down">
          <div className="container mx-auto px-4 py-4 mt-16">
            <nav>
              <ul className="flex flex-col space-y-6">
                <li><a href="#como-funciona" className="block py-2 text-xl text-a1blue hover:text-a1blue-light transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Como Funciona</a></li>
                <li><a href="#beneficios" className="block py-2 text-xl text-a1blue hover:text-a1blue-light transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Benefícios</a></li>
                <li><a href="#depoimentos" className="block py-2 text-xl text-a1blue hover:text-a1blue-light transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Depoimentos</a></li>
                <li><a href="#faq" className="block py-2 text-xl text-a1blue hover:text-a1blue-light transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
                <li className="pt-4 border-t border-gray-200">
                  <a href="#assinar" className="flex items-center space-x-2 w-full cta-button justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone size={18} />
                    <span>Falar com um médico</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
