
import { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Heart } from "lucide-react";

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('beneficios');
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
    <section id="beneficios" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Os 3 grandes benefícios que você leva com a  Life
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            {
              icon: <Clock className="h-16 w-16 text-a1blue" />,
              title: "Tranquilidade 24h",
              description: "Atendimento médico quando e onde precisar, em até 5 minutos, direto no seu celular, a qualquer hora do dia ou da noite."
            },
            {
              icon: <ShieldCheck className="h-16 w-16 text-a1blue" />,
              title: "Preço justo e fixo",
              description: "Menos que um café por dia, sem surpresas no final do mês. Sem taxa de adesão, sem carência, sem fidelidade."
            },
            {
              icon: <Heart className="h-16 w-16 text-a1blue" />,
              title: "Mais saúde, menos correria",
              description: "Cuide da sua família sem parar sua vida. Sem deslocamentos, sem esperas em filas, sem expor crianças a ambientes hospitalares."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-white p-10 rounded-xl shadow-lg flex flex-col items-center text-center h-full transform hover:-translate-y-2 transition-transform duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-6 bg-blue-50 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-a1blue">{item.title}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a href="#assinar" className="cta-button">
            QUERO ESTES BENEFÍCIOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
