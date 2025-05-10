import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Otimizado: função memoizada com useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Otimizado: combinando os useEffects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Prevent background scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, handleScroll]);

  // Otimizado: função para fechar o menu e melhorar reuso
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="uploads/logo.webp" 
            alt="Life Logo" 
            className={`${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
            width={isScrolled ? "auto" : "auto"}
            height={isScrolled ? "40" : "64"}
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#como-funciona" className="text-a1blue hover:text-a1blue-light font-medium">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-a1blue hover:text-a1blue-light font-medium">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-a1blue hover:text-a1blue-light font-medium">Depoimentos</a></li>
              <li><a href="#faq" className="text-a1blue hover:text-a1blue-light font-medium">FAQ</a></li>
            </ul>
          </nav>
          <a href="#assinar" className="cta-button flex items-center space-x-2">
            <Phone size={16} />
            <span>Falar com um médico</span>
          </a>
        </div>
        
        {/* Mobile Menu Button - simplificado */}
        <button 
          className="md:hidden text-a1blue p-2 rounded-full hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - simplificado */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          <div className="container mx-auto px-4 py-4 mt-16">
            <nav>
              <ul className="flex flex-col space-y-6">
                <li><a href="#como-funciona" className="block py-2 text-xl text-a1blue hover:text-a1blue-light" onClick={closeMenu}>Como Funciona</a></li>
                <li><a href="#beneficios" className="block py-2 text-xl text-a1blue hover:text-a1blue-light" onClick={closeMenu}>Benefícios</a></li>
                <li><a href="#depoimentos" className="block py-2 text-xl text-a1blue hover:text-a1blue-light" onClick={closeMenu}>Depoimentos</a></li>
                <li><a href="#faq" className="block py-2 text-xl text-a1blue hover:text-a1blue-light" onClick={closeMenu}>FAQ</a></li>
                <li className="pt-4 border-t border-gray-200">
                  <a href="#assinar" className="flex items-center space-x-2 w-full cta-button justify-center" onClick={closeMenu}>
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
