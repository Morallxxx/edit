
import { useState, useEffect } from 'react';
import { Clock, CheckCircle, HeartPulse, Sparkles, Pill } from "lucide-react";

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
          icon: <HeartPulse className="h-12 w-12 text-a1green" />,
          title: "Consultas ilimitadas com clínico e pediatra",
          description: "Quantas consultas você precisar, sem limite ou cobrança adicional."
        },
        {
          icon: <Sparkles className="h-12 w-12 text-a1green" />,
          title: "17 especialidades inclusas",
          description: "Acesso a diversas especialidades médicas, todas no seu plano."
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
        <section id="publico-alvo" className="py-16 bg-gray-50">
  <div className="section-container">
    <h2 className="section-heading text-center mb-12">
      <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase block mb-2">4)</span>
      PÚBLICO-ALVO
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

        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-bold text-a1blue mb-4">O futuro da saúde não é esperar.</h3>
          <p className="text-xl text-gray-700 mb-6">
            É ser atendida na hora em que você mais precisa.
          </p>
          <a href="#assinar" className="cta-button">
            QUERO ATENDIMENTO IMEDIATO
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
