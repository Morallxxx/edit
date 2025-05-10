import { useState, useEffect } from 'react';
import { CheckCircle, Clock, AlertTriangle, Star, Shield, Users, Gift } from "lucide-react";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 5, seconds: 0 });
  
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
              <p className="font-bold text-gray-800">1 mês de atendimento</p>
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
              
              <a href="https://pay.kiwify.com.br/vkfzEPb" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$99</span> R$79</p>
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
              
              <a href="https://pay.kiwify.com.br/AMcxAeQ" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$594</span> R$297</p>
              </div>
            </div>
          </div>
          
          {/* Plano 3 Meses */}
          <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
            <div className="bg-blue-100 p-4 text-center">
              <h3 className="font-bold text-gray-800">Boa Oferta</h3>
              <p className="font-bold text-gray-800">3 meses de atendimento</p>
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
              
              <a href="https://pay.kiwify.com.br/EdNxejR" className="w-full bg-yellow-400 hover:bg-yellow-500 text-center py-3 rounded font-bold text-gray-800 mb-4">
                ASSINAR AGORA
              </a>
              
              <div className="flex justify-center gap-2 mb-2">
                <img src="/uploads/visa.png" alt="Visa" className="h-6" />
                <img src="/uploads/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/uploads/amex.png" alt="Amex" className="h-6" />
              </div>
              
              <div className="text-center text-sm">
                <p className="font-bold">TOTAL: <span className="line-through">R$297</span> R$207</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão CTA com cronômetro de 5 minutos */}
<div className="bg-yellow-100 border-2 border-yellow-300 rounded-xl shadow-md p-6 mt-10 max-w-2xl mx-auto text-center">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">⚠️ Oferta Relâmpago!</h3>
  
  <a href="https://pay.kiwify.com.br/AMcxAeQ" className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300 mb-4">
    🟢 QUERO COMEÇAR AGORA
  </a>
  
  <div className="text-sm text-gray-700 mb-2">Esta condição especial expira em:</div>
  <div className="flex justify-center items-center gap-4">
    <div className="bg-black text-white px-3 py-2 rounded-lg">
      <span className="text-xl font-bold">{String(countdown.minutes).padStart(2, '0')}</span>
      <p className="text-xs mt-1">Min</p>
    </div>
    <span className="text-xl font-bold text-gray-700">:</span>
    <div className="bg-black text-white px-3 py-2 rounded-lg">
      <span className="text-xl font-bold">{String(countdown.seconds).padStart(2, '0')}</span>
      <p className="text-xs mt-1">Seg</p>
    </div>
  </div>
</div>
        {/* NOVA seção de bônus */}
        <div className={`max-w-4xl mx-auto mt-12 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h4 className="text-2xl font-bold text-green-700 text-center mb-2">
              🎁 BÔNUS EXCLUSIVO DE BOAS-VINDAS
            </h4>
            <p className="text-center text-red-600 font-bold text-sm mb-6">
              (por tempo limitado)
            </p>
            
            <div className="space-y-6">
              {/* Bônus #1 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0 text-red-500 mr-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-lg text-gray-800">🔥 Bônus #1 – Passaporte de Prioridade Médica™</h5>
                </div>
                <div className="ml-9">
                  <p className="text-gray-700 mb-2"><strong>Chegue com tudo:</strong> 3 consultas agendadas com especialistas de 15 áreas, já no 1º mês. Gineco, nutrição, psicologia, cardiologia... <strong>sem fila, sem burocracia.</strong></p>
                  <p className="text-gray-700 italic">É sua estreia no cuidado — do jeito que você merecia desde o começo.</p>
                </div>
              </div>
              
              {/* Bônus #2 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0 text-blue-500 mr-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-lg text-gray-800">🛡️ Bônus #2 – Escudo Madrugada™</h5>
                </div>
                <div className="ml-9">
                  <p className="text-gray-700 mb-2">Entre 00h e 6h, você é <strong>atendida com prioridade</strong>, sem disputa de fila. Seu filho teve febre de madrugada? Você fala direto com o médico, antes de todo mundo.</p>
                  <p className="text-gray-700 italic">Quando todo mundo dorme, sua urgência não fica sozinha.</p>
                </div>
              </div>
              
              {/* Bônus #3 */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0 text-purple-500 mr-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-lg text-gray-800">👩‍👧 Bônus #3 – Laço de Vida™</h5>
                </div>
                <div className="ml-9">
                  <p className="text-gray-700 mb-2">Inclua <strong>mais 1 pessoa da família</strong> sem custo no primeiro mês. Mãe, filho, vó... <strong>quem você carrega no coração entra junto com você.</strong></p>
                  <p className="text-gray-700 italic">Porque cuidado de verdade nunca vem sozinho.</p>
                </div>
              </div>
              
              {/* Bônus Secreto */}
              <div className="bg-gray-900 p-5 rounded-lg shadow-md text-white">
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0 text-yellow-400 mr-3">
                    <Gift className="h-6 w-6" />
                  </div>
                  <h5 className="font-bold text-lg">🎁 Bônus Secreto™ – Só pra quem Entra Agora</h5>
                </div>
                <div className="ml-9">
                  <p className="mb-2">Tem um presente escondido nessa oferta. Mas <strong>ninguém fala sobre ele</strong>. Nem nos anúncios. Nem na página.</p>
                  <p className="mb-2">📦 <strong>Só quem entra descobre.</strong> E quando descobre… entende por que tanta gente <strong>fica pra sempre.</strong></p>
                  <p className="text-yellow-300">O que posso te dizer é: <strong>Só esse bônus já vale o valor da assinatura.</strong></p>
                  <p className="mt-2">💡 Não é pra todo mundo. É pra quem age rápido. É pra quem <strong>entra hoje.</strong></p>
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
