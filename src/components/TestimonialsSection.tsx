import { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalDepoimentos = 7;
  
  // Caminho das imagens de depoimentos
  const depoimentos = Array.from({ length: totalDepoimentos }, (_, i) => `/uploads/depoimento${i + 1}.jpeg`);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('depoimentos');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Efeito de animação infinita (rolagem contínua)
  useEffect(() => {
    if (!isVisible || !scrollContainerRef.current) return;
    
    const scrollContainer = scrollContainerRef.current;
    const totalWidth = scrollContainer.scrollWidth;
    const visibleWidth = scrollContainer.clientWidth;
    let currentPosition = 0;
    
    const animateScroll = () => {
      currentPosition -= 1; // Velocidade de rolagem
      
      // Quando elementos saem completamente pela esquerda, reposiciona para direita
      if (Math.abs(currentPosition) >= totalWidth / 2) {
        currentPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(animateScroll);
    };
    
    const animation = requestAnimationFrame(animateScroll);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isVisible]);
  
  return (
    <section id="depoimentos" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12 text-white">
          Essa é a <span className="text-[#4cb050]">reação de quem já testou</span> essa <span className="text-[#4cb050]">metodologia inovadora:</span>
        </h2>
        
        <div className={`relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Container de rolagem infinita */}
          <div className="max-w-full mx-auto" style={{ overflow: 'hidden' }}>
            <div 
              ref={scrollContainerRef} 
              className="flex"
              style={{ width: `${totalDepoimentos * 600}px` }} // Largura total para caber todos os depoimentos duplicados
            >
              {/* Primeira cópia dos depoimentos */}
              {depoimentos.map((src, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 px-2"
                  style={{ width: '300px' }}
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg p-1 transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={src} 
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
              
              {/* Segunda cópia dos depoimentos para rolagem infinita */}
              {depoimentos.map((src, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 px-2"
                  style={{ width: '300px' }}
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg p-1 transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={src} 
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300">
              Estes são depoimentos reais de clientes que utilizam nossos serviços diariamente.
            </p>
            <a href="#assinar" className="mt-6 inline-block px-8 py-3 bg-[#4cb050] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
              QUERO EXPERIMENTAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
