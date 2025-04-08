
import { useState, useEffect } from 'react';
import { Heart, PhoneCall, Shield } from "lucide-react";

const FutureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('futuro');
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
  
  return (
    <section id="futuro" className="py-16 bg-gradient-to-t from-blue-50 to-white">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Imagine sua próxima madrugada difícil...
        </h2>
        
        <div className={`max-w-4xl mx-auto mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="uploads/foto-mae.webp" 
                  alt="Mãe com criança usando celular" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              
              <div className="md:w-1/2">
                <p className="text-xl text-gray-700 mb-6">
                  <span className="font-semibold">Seu filho tossindo.</span>
                  <br />
                  <span className="font-semibold">Você com o coração apertado.</span>
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-6 relative">
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rotate-45"></div>
                  <div className="flex items-start">
                    <PhoneCall className="h-5 w-5 text-a1blue mr-2 shrink-0 mt-1" />
                    <p className="italic">
                      "Alô, mamãe... tô aqui com você. Vamos cuidar disso juntas?"
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  Você respira.
                  <br />
                  Se acalma.
                  <br />
                  E volta a cuidar com segurança.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-a1red mr-3" />
                    <span className="text-lg font-medium">Mais saúde.</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-a1blue mr-3" />
                    <span className="text-lg font-medium">Mais controle.</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-a1green mr-3" />
                    <span className="text-lg font-medium">Mais vida.</span>
                  </div>
                </div>
                
                <p className="mt-6 text-xl font-bold text-a1blue">
                   Life é a paz que cabe no seu bolso.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <a href="#assinar" className="cta-button">
            QUERO TER ESSA PAZ NA PALMA DA MÃO
          </a>
          <p className="mt-4 text-gray-600 italic">
            "Você não precisa decidir agora. Mas só de saber que isso existe… já alivia o coração."
          </p>
          <a href="https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2021/2299_2021.pdf" className="text-blue-500 underline mt-2 block">
            Link da Resolução Federal de Medicina
          </a>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
