import { useState, useEffect } from 'react';
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 10, seconds: 0 });
  
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
        
        {/* Cronômetro de 2 horas */}
        <div className="max-w-md mx-auto mt-4 mb-10 bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
          <p className="text-gray-700 mb-2 font-medium">Esta oferta expira em:</p>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
              <span className="text-2xl font-bold">{String(countdown.hours).padStart(2, '0')}</span>
              <p className="text-xs mt-1">Horas</p>
            </div>
            <span className="text-2xl font-bold text-gray-700">:</span>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
              <span className="text-2xl font-bold">{String(countdown.minutes).padStart(2, '0')}</span>
              <p className="text-xs mt-1">Minutos</p>
            </div>
            <span className="text-2xl font-bold text-gray-700">:</span>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
              <span className="text-2xl font-bold">{String(countdown.seconds).padStart(2, '0')}</span>
              <p className="text-xs mt-1">Segundos</p>
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row gap-6 max-w-6xl mx-auto mt-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Plano 1 Mês */}
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
            <div className="bg-blue-100 p-4 text-center">
              <h3 className="font-bold text-gray-800">Plano Mensal</h3>
              <p className="font-bold text-white">1 mês de atendimento</p>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="my-4">
                <img src="/uploads/mockup.webp" alt="Plano 1 Mês" className="h-32 object-contain" />
              </div>
              
              <div className="flex items-end mt-4">
                <span className="text-3xl font-bold">R$79</span>
                <span className="text-sm text-gray-500 ml-1 mb-1">/mês</span>
              </div>
              
              <div className="my-4 w-full">
                <div className="flex items-center justify-center text-sm text-green-700 mb-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  ECONOMIZE R$20! (20% OFF)
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                  <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                  GARANTIA DE 30 DIAS
                </div>
              </div>
              
              <a href="#buy" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$99</span> R$79</p>
                <p>+ FRETE</p>
              </div>
            </div>
          </div>
          
          {/* Plano 6 Meses - DESTAQUE */}
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-green-500 transform md:scale-105 md:-translate-y-2 z-10">
            <div className="bg-green-500 p-4 text-center relative">
              <h3 className="font-bold text-white">Melhor Oferta</h3>
              <p className="font-bold text-white">6 meses de atendimento</p>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="my-4">
                <img src="/uploads/mockup.webp" alt="Plano 6 Meses" className="h-32 object-contain" />
              </div>
              
              <div className="flex items-end mt-4">
                <span className="text-3xl font-bold">R$49,50</span>
                <span className="text-sm text-gray-500 ml-1 mb-1">/mês</span>
              </div>
              
              <div className="my-4 w-full">
                <div className="flex items-center justify-center text-sm text-green-700 mb-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  ECONOMIZE R$297! (50% OFF)
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                  <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                  MAIOR DESCONTO
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                  <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                  GARANTIA DE 30 DIAS
                </div>
              </div>
              
              <a href="#buy" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$594</span> R$297</p>
                <p className="text-red-600">+ FRETE GRÁTIS</p>
              </div>
            </div>
          </div>
          
          {/* Plano 3 Meses */}
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
            <div className="bg-blue-100 p-4 text-center">
              <h3 className="font-bold text-gray-800">Boa Oferta</h3>
              <p className="font-bold text-white">3 meses de atendimento</p>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="my-4">
                <img src="/uploads/mockup.webp" alt="Plano 3 Meses" className="h-32 object-contain" />
              </div>
              
              <div className="flex items-end mt-4">
                <span className="text-3xl font-bold">R$69</span>
                <span className="text-sm text-gray-500 ml-1 mb-1">/mês</span>
              </div>
              
              <div className="my-4 w-full">
                <div className="flex items-center justify-center text-sm text-green-700 mb-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  ECONOMIZE R$90! (30% OFF)
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-1">
                  <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                  GARANTIA DE 30 DIAS
                </div>
              </div>
              
              <a href="#buy" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$297</span> R$207</p>
                <p className="text-red-600">+ FRETE GRÁTIS</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`max-w-4xl mx-auto mt-12 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
    <h4 className="text-2xl font-bold text-green-700 text-center mb-4">
      🎁 BÔNUS EXCLUSIVO DE BOAS-VINDAS
    </h4>
    <p className="text-center text-red-600 font-medium text-sm mb-6">
      (por tempo limitado)
    </p>
    
    <div className="space-y-5">
      <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-shrink-0 text-green-600 font-bold mr-3">
          ✅
        </div>
        <div>
          <p className="font-bold text-gray-800">Serviço de Assistência Funerária Zelo</p>
          <p className="text-gray-600">Sim — até nos piores dias, você não estará sozinha(o).</p>
        </div>
      </div>
      
      <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-shrink-0 text-green-600 font-bold mr-3">
          ✅
        </div>
        <div>
          <p className="font-bold text-gray-800">Acesso Imediato ao App e à Central Médica 24h</p>
          <p className="text-gray-600">Consulta em minutos, direto do seu celular.</p>
        </div>
      </div>
      
      <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-shrink-0 text-green-600 font-bold mr-3">
          ✅
        </div>
        <div>
          <p className="font-bold text-gray-800">Garantia Total de Satisfação por 30 Dias</p>
          <p className="text-gray-600">Usou, não gostou? Cancelou. E pronto.</p>
          <p className="text-gray-600">Sem dor de cabeça. Sem estresse.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      
        {/* Seção de garantia */}
        <div className={`max-w-4xl mx-auto mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-a1blue text-center mb-4">GARANTIA</h4>
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-a1green mr-2" />
              <span className="font-semibold">Garantia de 30 Dias Sem Risco</span>
            </div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
              Se você não sentir na pele que isso é uma verdadeira proteção para você e sua família, receba seu dinheiro de volta imediatamente, sem perguntas ou enrolação.
            </p>
            <p className="text-gray-600 text-center font-medium max-w-2xl mx-auto mb-2">
              Sem burocracia. Sem taxa. Sem letras miúdas.
            </p>
            <p className="text-gray-700 text-center font-bold max-w-2xl mx-auto">
              Você tem tudo a ganhar — e nada a perder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

