import { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Caminho das imagens de depoimentos
  const depoimentos = Array.from({ length: totalSlides }, (_, i) => `/uploads/depoimento${i + 1}.jpg`);
  
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
  
  // Efeito para rotação automática do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Troca a cada 3 segundos
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  // Efeito para atualizar a posição do scroll quando o slide muda
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * currentSlide,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);
  
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">
          Histórias de quem já está com a A1 Life
        </h2>
        
        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Carrossel automático de depoimentos */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <div 
              ref={sliderRef}
              className="flex overflow-x-hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {depoimentos.map((src, index) => (
                <div 
                  key={index} 
                  className="min-w-full w-full flex-shrink-0"
                >
                  <img 
                    src={src} 
                    alt={`Depoimento de cliente ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
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
