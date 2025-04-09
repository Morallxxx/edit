
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
    <h2 className="section-heading text-center">
      A <span className="text-[#df2026] font-bold">Síndrome</span> da Porta Fechada™
    </h2>
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
  <h3 className="text-2xl font-bold text-a1blue mb-4">A OPORTUNIDADE</h3>
    <span className="block mt-2 font-medium">
      Sem sair de casa.
    </span>
    <span className="block mt-1 font-medium">
      Sem pegar ônibus.
    </span>
    <span className="block mt-1 font-medium">
      Sem arrastar criança no colo.
    </span>
    <span className="block mt-1 font-medium">
      Sem depender de sorte.
    </span>
  </p>
  <div className="mt-8">
    <a href="#assinar" className="cta-button">
      QUERO ESTA FACILIDADE
    </a>
  </div>
</div>
</div>
</section>
  );
};

export default ProblemSection;
