
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
<section id="problem-section" className="py-20 bg-gray-50">
  <div className="section-container">
    <h2 className="section-heading text-center relative inline-block mx-auto mb-6">
      <span className="absolute -top-6 left-0 w-full text-gray-200 text-sm font-light tracking-wider text-center">PROBLEMA PRINCIPAL</span>
      <span className="relative inline-block pb-2 px-4 border-b-4 border-gray-200">
        A <span className="text-[#df2026] font-bold">Síndrome</span> da Porta Fechada™
      </span>
      <span className="absolute w-20 h-1 bg-[#df2026] bottom-0 left-1/2 transform -translate-x-1/2"></span>
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
      Quando você mais precisa, é quando menos consegue atendimento médico para seu filho.
    </p>
        
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
