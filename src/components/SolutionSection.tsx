import { useState, useEffect } from 'react';
import { Clock, CheckCircle, HeartPulse, AlertTriangle } from "lucide-react";

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaiVisible, setIsPaiVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('como-funciona');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
      
      const paiElement = document.getElementById('sistema-pai');
      if (paiElement) {
        const position = paiElement.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsPaiVisible(true);
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
                title: "Consultas ilimitadas com clínico e pediatra",
                description: "Quantas consultas você precisar, sem limite ou cobrança adicional."
              },
              {
                icon: <HeartPulse className="h-12 w-12 text-a1green" />,
                title: "Atendimento humanizado e respeitoso",
                description: "Médicos que realmente escutam e se importam com você e sua família.."
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

      <section id="publico-alvo" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase block mb-2"></span>
            PARA QUEM É?
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            
            <div className="flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl" role="img" aria-label="Mães Solo">👩‍👧‍👦</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Mães Solo</h3>
                <p className="text-gray-600">Carrega o mundo nas costas — mas precisa de alguém que cuide de você também.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl" role="img" aria-label="Mulheres em Transição de Carreira">💼</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Mulheres em Transição de Carreira</h3>
                <p className="text-gray-600">Você não pode travar seus planos porque seu filho ficou doente.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl" role="img" aria-label="Profissionais Autônomas">📱</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Profissionais Autônomas</h3>
                <p className="text-gray-600">Seu tempo vale dinheiro — e sua saúde vale mais ainda.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 mt-12 border-l-4 border-red-400 bg-white rounded-r-lg shadow-sm">
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl" role="img" aria-label="Para quem não é">🙅‍♂️</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-700 mb-1">Para quem não é</h3>
                <p className="text-gray-600">Se você ainda acredita que plano de saúde caro, 6 meses de carência e 3 horas de espera é "normal"... talvez você ainda não esteja pronta pra isso.</p>
                <p className="mt-2 text-gray-600">Mas quando se cansar de ser só mais um número, a A1 Life vai estar aqui. <span className="text-2xl">💥</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sistema-pai" className="py-16 bg-white">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase block mb-2"></span>
            PROPOSTA DE VALOR
          </h2>
          <h2 className="section-heading text-center mb-12">
            <span className="text-gray-280 text-sm font-semibold tracking-wider uppercase block mb-2"></span>
            É o único com o Sistema P.A.I.™ — Pronto. Ativo. Imediato.
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Cartão introdutório */}
            <div className="flex items-start p-6 border-l-4 border-red-500 bg-white rounded-r-lg shadow-lg">
              <div className="flex-shrink-0 mr-6">
                <AlertTriangle className="h-12 w-12 text-red-500" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🚨 A A1 Life não é um plano de saúde.</h3>
              </div>
            </div>
            
            {/* Pronto */}
            <div className={`flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform ${isPaiVisible ? 'animate-fade-in hover:-translate-y-1' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl">📍</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Pronto</h3>
                <p className="text-gray-600">Médicos reais, de plantão, 24h por dia.</p>
              </div>
            </div>
            
            {/* Ativo */}
            <div className={`flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform ${isPaiVisible ? 'animate-fade-in hover:-translate-y-1' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl">📍</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Ativo</h3>
                <p className="text-gray-600">Funciona desde o primeiro dia — sem carência.</p>
              </div>
            </div>
            
            {/* Imediato */}
            <div className={`flex items-start p-6 border-l-4 border-a1green bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all transform ${isPaiVisible ? 'animate-fade-in hover:-translate-y-1' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl">📍</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-a1blue mb-1">Imediato</h3>
                <p className="text-gray-600">Você chama e em menos de 5 minutos alguém te atende.</p>
              </div>
            </div>
            
            {/* Comparação com planos antigos */}
            <div className={`flex items-start p-6 border-l-4 border-blue-400 bg-white rounded-r-lg shadow-sm ${isPaiVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl">⏱️</span>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600">Enquanto planos antigos te mandam aguardar,</p>
                <p className="text-lg font-bold text-a1blue">a gente responde antes da crise piorar.</p>
              </div>
            </div>
            
            {/* Criado para mães */}
            <div className={`flex items-start p-6 border-l-4 border-purple-400 bg-white rounded-r-lg shadow-sm ${isPaiVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
              <div className="flex-shrink-0 mr-6">
                <span className="text-4xl">🧬</span>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600">Criado para mães. Pensado para emergências.</p>
                <p className="text-lg font-bold text-a1blue">Testado nas madrugadas em que ninguém atende.</p>
              </div>
            </div>
            
            {/* CTA final */}
            <div className={`mt-12 text-center ${isPaiVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
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
