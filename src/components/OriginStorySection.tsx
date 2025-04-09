import { useState, useEffect, useRef } from 'react';
import { Shield, Award, FileCheck } from 'lucide-react';

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
      currentPosition -= 0.3; // Velocidade de rolagem reduzida
      
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
    <section id="depoimentos" className="py-20 bg-white text-gray-800 overflow-hidden">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12 text-gray-900">
          Essa é a <span className="text-[#013e7d]">reação de quem já testou</span> a <span className="text-gray-900 font-bold">A1 Life:</span>
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
                  <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg p-1 transform hover:scale-105 transition-transform duration-300">
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
                  <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg p-1 transform hover:scale-105 transition-transform duration-300">
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
            <p className="text-lg text-gray-700">
              Estes são depoimentos reais de clientes que utilizam nossos serviços diariamente.
            </p>
            <a href="#assinar" className="mt-6 inline-block px-8 py-3 bg-[#4cb050] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
              QUERO EXPERIMENTAR
            </a>
          </div>
        </div>
        
        {/* Seção de autoridade e segurança */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            <span className="text-[#4cb050]">📊</span> Autoridade e Segurança Total no Atendimento
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    <span className="text-[#4cb050]">🔒</span> Atendimento com Médicos Reais, de Verdade
                  </h4>
                  <p className="text-gray-600">
                    Todos os profissionais possuem CRM ativo, registro válido e são qualificados nas suas especialidades.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    <span className="text-[#4cb050]">✅</span> Autorizado pelo Ministério da Saúde
                  </h4>
                  <p className="text-gray-600">
                    Nosso sistema segue 100% das normas da telemedicina no Brasil — com respaldo legal e clínico.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-4">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    <span className="text-[#4cb050]">🖋️</span> Receituário com Assinatura Digital Oficial
                  </h4>
                  <p className="text-gray-600">
                    Todas as prescrições têm validação jurídica, exatamente como um receituário físico — com assinatura digital médica reconhecida e aceita em todo o país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
