
import { useState, useEffect } from 'react';
import { Heart } from "lucide-react";

const OriginStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('origem');
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
    <section id="origem" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">
            Nossa História de Origem
          </h2>
          
          <div className={`mt-12 flex flex-col md:flex-row items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="uploads/CRIANÇADOENTE.jpg" 
                alt="Mãe com criança no colo" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="prose prose-lg">
                <h3 className="text-2xl font-bold text-a1blue mb-4">
                  Tudo começou com uma mãe
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Sozinha. De madrugada. Com o filho doente e nenhuma ajuda.
                </p>
                
                <blockquote className="border-l-4 border-a1blue pl-4 italic mb-6">
                  "Naquela noite, percebi que não era só sobre febre. Era sobre desamparo."
                </blockquote>
                
                <p className="text-gray-700 mb-6">
                  Depois disso, nasceu a  1A Life. Um jeito novo, humano e acessível de cuidar da saúde. Feito por quem viveu na pele. Feito por quem se importa.
                </p>
                
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-a1red mr-2" />
                  <p className="text-a1blue font-bold">
                    Porque saúde é mais do que tratamento, é sobre cuidado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <a href="#assinar" className="cta-button">
              FAÇA PARTE DESSA HISTÓRIA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStorySection;
