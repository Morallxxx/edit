import { useState, useEffect } from 'react';
import { Clock, CheckCircle, HeartPulse, AlertTriangle } from "lucide-react";

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('como-funciona');
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
    <>
      <section id="como-funciona" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center">
            Imagine poder falar com um médico em até 5 minutos...
          </h2>
          
          <p className="section-subheading text-center">
            Sem sair de casa. Sem pegar ônibus. Sem arrastar criança no colo. Sem depender de sorte.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Clock className="h-12 w-12 text-a1green" />,
                title: "Médicos 24h por dia no seu celular",
                description: "Atendimento médico quando você precisar, sem espera, sem deslocamento."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-a1green" />,
                title: "Atendimento humanizado e respeitoso",
                description: "Médicos que realmente escutam e se importam com você e sua família."
              },
              {
                icon: <HeartPulse className="h-12 w-12 text-a1green" />,
                title: "Receitas digitais válidas em todo Brasil",
                description: "Receitas com assinatura digital oficial, aceitas em todas as farmácias."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`feature-card flex flex-col items-center text-center border-t-4 border-a1green ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
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
        </div>
      </section>

      <section id="sistema-pai" className="py-16 bg-gray-50">
        <div className="section-container">
          <div className={`max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="flex items-start mb-6">
              <div className="mr-4 mt-1">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                🚨 A A1 Life não é um plano de saúde.
              </h2>
            </div>
            
            <div className="mb-8 text-center">
              <p className="text-xl font-semibold text-a1blue">
                É o único com o <span className="font-bold">Sistema P.A.I.™ — Pronto. Ativo. Imediato.</span>
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-a1blue">📍</div>
                <div>
                  <p className="font-bold text-gray-800">Pronto:</p>
                  <p className="text-gray-700">Médicos reais, de plantão, 24h por dia.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-a1blue">📍</div>
                <div>
                  <p className="font-bold text-gray-800">Ativo:</p>
                  <p className="text-gray-700">Funciona desde o primeiro dia — sem carência.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-a1blue">📍</div>
                <div>
                  <p className="font-bold text-gray-800">Imediato:</p>
                  <p className="text-gray-700">Você chama e em menos de 5 minutos alguém te atende.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-2">
                Enquanto planos antigos te mandam aguardar,
              </p>
              <p className="text-xl font-bold text-a1blue">
                a gente responde antes da crise piorar.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🧬</span>
                <p className="text-gray-700">Criado para mães. Pensado para emergências.</p>
              </div>
              <p className="text-center font-bold text-a1blue text-lg">
                Testado nas madrugadas em que ninguém atende.
              </p>
            </div>
            
            <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <h3 className="text-2xl font-bold text-a1blue mb-4">O futuro da saúde não é esperar.</h3>
              <p className="text-xl text-gray-700 mb-6">
                É ser atendida na hora em que você mais precisa.
              </p>
              <a href="#assinar" className="cta-button inline-flex items-center justify-center">
                QUERO ATENDIMENTO IMEDIATO
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
