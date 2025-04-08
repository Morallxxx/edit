import { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
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
  
  // Efeito de animação contínua tipo "nuvem"
  useEffect(() => {
    if (!carouselRef.current || !isVisible) return;
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      position -= 0.5; // Velocidade do deslocamento
      
      // Resetar a posição quando necessário para criar um loop infinito
      if (position <= -250) {
        position = 0;
      }
      
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, [isVisible]);
  
  return (
    <section id="depoimentos" className="py-20 bg-white overflow-hidden">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          Essa é a <span className="text-yellow-500">reação de quem já testou</span> essa <span className="text-yellow-500">metodologia inovadora:</span>
        </h2>
        
        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Container para o efeito de nuvem */}
          <div className="relative mx-auto max-w-6xl py-8">
            <div className="flex" style={{ width: `${totalDepoimentos * 300}px` }} ref={carouselRef}>
              {/* Primeira cópia dos depoimentos */}
              {depoimentos.map((src, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 px-2"
                  style={{ width: '300px' }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" 
                       style={{ height: '220px' }}
                  >
                    <img 
                      src={src} 
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
              
              {/* Segunda cópia dos depoimentos para loop infinito */}
              {depoimentos.map((src, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 px-2"
                  style={{ width: '300px' }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" 
                       style={{ height: '220px' }}
                  >
                    <img 
                      src={src} 
                      alt={`Depoimento de cliente ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Estes são depoimentos reais de clientes que utilizam nossos serviços diariamente.
            </p>
            <a href="#assinar" className="mt-4 inline-block px-8 py-3 bg-a1blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              QUERO EXPERIMENTAR
            </a>
          </div>
        </div>
        
        <div className={`mt-16 bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-a1blue mb-6">
              Atendimento com Médicos Reais, de Verdade
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <div className="mb-3 bg-blue-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-a1blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Todos os profissionais possuem CRM ativo e registro válido
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-3 bg-blue-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-a1blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Receituário com assinatura digital oficial válida em todo o país
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
