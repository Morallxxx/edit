import { useCallback, useEffect, useRef } from 'react';
import { ShieldX, Clock, User, AlertTriangle } from "lucide-react";

// Dados movidos para fora do componente para evitar recriação a cada renderização
const PROBLEM_CARDS = [
  {
    icon: AlertTriangle,
    title: "Seu filho está ardendo em febre",
    description: "A preocupação toma conta e você precisa de ajuda médica urgente."
  },
  {
    icon: Clock,
    title: "A fila dá volta no quarteirão",
    description: "Horas de espera com uma criança doente no colo, exposta a mais doenças."
  },
  {
    icon: User,
    title: "O médico mal olha para você",
    description: "É só uma virose. Dá dipirona e observa. Sem atenção adequada."
  },
  {
    icon: ShieldX,
    title: "Você volta para casa desamparada",
    description: "Com medo, cansaço e nenhuma resposta. Se sentindo invisível e ignorada."
  }
];

const OPPORTUNITY_POINTS = [
  "Sem sair de casa.",
  "Sem pegar ônibus.",
  "Sem arrastar criança no colo.",
  "Sem depender de sorte."
];

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const opportunityRef = useRef(null);
  
  // Usando Intersection Observer em vez de scroll listener - muito mais eficiente
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observar cada elemento que queremos animar
    if (sectionRef.current) {
      cardsRef.current.forEach(card => {
        if (card) observer.observe(card);
      });
      
      if (opportunityRef.current) {
        observer.observe(opportunityRef.current);
      }
    }
    
    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
      
      if (opportunityRef.current) {
        observer.unobserve(opportunityRef.current);
      }
    };
  }, []);
  
  return (
    <section id="problem-section" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading text-center">
          A <span className="text-[#df2026] font-bold">Síndrome</span> da Porta Fechada™
        </h2>
        <p className="section-subheading text-center">
          Você conhece bem essa história…
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {PROBLEM_CARDS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="feature-card flex flex-col items-center text-center opacity-0 transition-opacity duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Icon className="h-12 w-12 text-a1red" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#013e7d]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* BLOCO DA OPORTUNIDADE */}
        <div 
          ref={opportunityRef}
          className="mt-16 bg-gradient-to-r from-white to-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-500"
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-3xl font-extrabold text-[#013e7d] mb-6">A OPORTUNIDADE</h3>
          <div className="flex flex-col items-center space-y-4">
            {OPPORTUNITY_POINTS.map((text, i) => (
              <span key={i} className="block text-lg font-medium text-[#013e7d] bg-[#e6eef6] px-5 py-2 rounded-full shadow-md">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* BOTÃO DE AÇÃO */}
        <div className="mt-8 text-center">
          <a
            href="#assinar"
            className="cta-button inline-block px-8 py-4 bg-[#013e7d] text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition-transform"
          >
            QUERO ESTA FACILIDADE
          </a>
        </div>
      </div>
    </section>
  );
};

// Adicionando CSS personalizado
const styles = document.createElement('style');
styles.textContent = `
  .is-visible {
    opacity: 1 !important;
  }
`;
document.head.appendChild(styles);

export default ProblemSection;
