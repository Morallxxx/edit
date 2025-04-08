import { useState, useEffect } from 'react';
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 47, minutes: 59, seconds: 59 });
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('assinar');
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
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        const newSeconds = prevCountdown.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevCountdown.minutes - 1 : prevCountdown.minutes;
        const newHours = newMinutes < 0 ? prevCountdown.hours - 1 : prevCountdown.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="assinar" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Garanta sua paz de espírito agora
        </h2>
        
        <div className={`max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-xl overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-a1blue text-white p-6 text-center">
            <h3 className="text-3xl font-bold mb-2">Plano  Life Família</h3>
            <p className="text-xl">Atendimento médico 24h na palma da sua mão</p>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-8 mb-8">
              <div>
                <p className="text-gray-500 text-lg mb-2">Por apenas</p>
                <div className="flex items-end">
                  <span className="text-5xl font-bold text-a1blue">R$49,90</span>
                  <span className="text-gray-500 ml-2 mb-1">/mês</span>
                </div>
                <p className="text-gray-500 mt-2">Menos de R$1,70 por dia</p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-gray-700 font-medium mb-2">Oferta por tempo limitado</p>
                  <div className="flex justify-center space-x-2">
                    <div className="bg-a1red text-white p-2 rounded-md w-16 text-center">
                      <span className="text-xl font-bold">{String(countdown.hours).padStart(2, '0')}</span>
                      <p className="text-xs">Horas</p>
                    </div>
                    <div className="bg-a1red text-white p-2 rounded-md w-16 text-center">
                      <span className="text-xl font-bold">{String(countdown.minutes).padStart(2, '0')}</span>
                      <p className="text-xs">Minutos</p>
                    </div>
                    <div className="bg-a1red text-white p-2 rounded-md w-16 text-center">
                      <span className="text-xl font-bold">{String(countdown.seconds).padStart(2, '0')}</span>
                      <p className="text-xs">Segundos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-a1blue mb-6">O que está incluso:</h4>
            
            <ul className="space-y-4 mb-8">
              {[
                "Atendimento médico 24 horas por dia",
                "Consultas ilimitadas com clínico geral",
                "Consultas ilimitadas com pediatra",
                "Acesso a 17 especialidades médicas",
                "Receitas com assinatura digital oficiais",
                "Cadastro para até 5 familiares"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-a1green mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-a1blue mb-4">BÔNUS EXCLUSIVOS DE BOAS-VINDAS:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-a1green mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-lg font-semibold">Serviço de Assistência Funerária Zelo</span>
                    <p className="text-gray-600">Sim — até nos piores dias, você não estará sozinha(o).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-a1green mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-lg font-semibold">Acesso Imediato ao App e à Central Médica 24h</span>
                    <p className="text-gray-600">Consulta em minutos, direto do seu celular.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <a 
                href="https://pay.life.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button w-full text-center text-lg py-4"
              >
                QUERO COMEÇAR AGORA
              </a>
              
              <div className="flex items-center mt-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Pagamento 100% seguro</span>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex justify-center items-center mb-2">
                  <Clock className="h-5 w-5 text-a1green mr-2" />
                  <span className="font-semibold">Garantia de 30 Dias Sem Risco</span>
                </div>
                <p className="text-gray-600 text-sm max-w-md">
                  Se você não sentir na pele que isso é uma verdadeira proteção para você e sua família, receba seu dinheiro de volta imediatamente, sem perguntas ou enrolação.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-a1red mr-3 shrink-0 mt-0.5" />
              <p className="text-gray-600">
                <span className="font-semibold">Sem taxa de adesão. Sem carência. Sem fidelidade. Sem letras miúdas.</span> 
                <span className="block mt-1">É saúde de verdade, no momento que você mais precisa. Sem surpresa no fim do mês.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
