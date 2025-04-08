
import { useState, useEffect } from 'react';
import { ShieldX, Clock, User, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('problem-section');
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
<div className="section-container relative z-10 flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm">
  <div className={`w-full lg:w-1/2 space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} p-8 lg:p-12`}>
    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">Atendimento Pediátrico</span>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-a1blue leading-tight">
      <span className="relative inline-block mr-2">
        <span className="relative z-10">Nunca Mais</span>
        <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-40 rounded-sm -z-0"></span>
      </span>
      Carregue Seu Filho Com Febre Por Quilômetros
    </h1>
        
        <p className="section-subheading text-center">
          Você conhece bem essa história…
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              icon: <AlertTriangle className="h-12 w-12 text-a1red" />,
              title: "Seu filho está ardendo em febre",
              description: "A preocupação toma conta e você precisa de ajuda médica urgente."
            },
            {
              icon: <Clock className="h-12 w-12 text-a1red" />,
              title: "A fila dá volta no quarteirão",
              description: "Horas de espera com uma criança doente no colo, exposta a mais doenças."
            },
            {
              icon: <User className="h-12 w-12 text-a1red" />,
              title: "O médico mal olha para você",
              description: "É só uma virose. Dá dipirona e observa. Sem atenção adequada."
            },
            {
              icon: <ShieldX className="h-12 w-12 text-a1red" />,
              title: "Você volta para casa desamparada",
              description: "Com medo, cansaço e nenhuma resposta. Se sentindo invisível e ignorada."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`feature-card flex flex-col items-center text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-a1blue">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-a1blue mb-4">Não é sua culpa.</h3>
          <p className="text-lg">
            O sistema foi feito para te empurrar para fora.
            <span className="block mt-2">
              Para te fazer aceitar que não merece cuidado digno.
            </span>
          </p>
          <div className="mt-8">
            <a href="#assinar" className="cta-button">
              MEREÇO UM ATENDIMENTO MELHOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
