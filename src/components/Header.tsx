import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, Phone } from "lucide-react";

// Componente para os links de navegação - extraído para reduzir re-renderizações
const NavLinks = memo(({ mobile = false, closeMenu = null }) => {
  const links = [
    { href: "#como-funciona", text: "Como Funciona" },
    { href: "#beneficios", text: "Benefícios" },
    { href: "#depoimentos", text: "Depoimentos" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <ul className={mobile ? "flex flex-col space-y-6" : "flex space-x-6"}>
      {links.map(link => (
        <li key={link.href}>
          <a 
            href={link.href} 
            className={
              mobile 
                ? "block py-2 text-xl text-a1blue hover:text-a1blue-light" 
                : "text-a1blue hover:text-a1blue-light font-medium"
            }
            onClick={closeMenu}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
});

// Componente CTA Button - extraído para consistência e reuso
const CTAButton = memo(({ mobile = false, onClick = null }) => (
  <a 
    href="#assinar" 
    className={
      mobile
        ? "flex items-center space-x-2 w-full cta-button justify-center"
        : "cta-button flex items-center space-x-2"
    }
    onClick={onClick}
  >
    <Phone size={mobile ? 18 : 16} aria-hidden="true" />
    <span>Falar com um médico</span>
  </a>
));

// Componente principal Header otimizado
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Função throttled para melhorar performance do scroll
  const handleScroll = useCallback(() => {
    // Usa requestAnimationFrame para limitar execuções a cada frame
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 10);
    });
  }, []);

  // Função para alternar o menu
  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);
  
  // Função para fechar o menu
  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    // Listener de scroll otimizado com passive true
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Toggle no overflow quando menu mobile está aberto
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

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img 
            src="https://i.ibb.co/jkTBXpCZ/logo-1.png" 
            alt="A1 Life Logo" 
            className={isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}
            width={isScrolled ? 40 : 64}
            height={isScrolled ? 40 : 64}
            loading="eager"
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav aria-label="Navegação principal">
            <NavLinks />
          </nav>
          <CTAButton />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-a1blue p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-a1blue"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu com preload e css display em vez de renderização condicional */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-4 mt-16">
          <nav aria-label="Navegação mobile">
            <NavLinks mobile={true} closeMenu={closeMenu} />
            <div className="pt-4 border-t border-gray-200 mt-6">
              <CTAButton mobile={true} onClick={closeMenu} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
