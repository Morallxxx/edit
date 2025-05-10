import { useEffect, useRef } from 'react';
import { ShieldX, Clock, User, AlertTriangle } from "lucide-react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    if (opportunityRef.current) observer.observe(opportunityRef.current);

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
      if (opportunityRef.current) observer.unobserve(opportunityRef.current);
    };
  }, []);

  return (
    <section id="problem-section" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-heading text-center">
          A <span className="text-[#df2026] font-bold">Síndrome</span> da Porta Fechada™
        </h2>
        <p className="section-subheading text-center">Você conhece bem essa história…</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {PROBLEM_CARDS.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="flex flex-col items-center text-center opacity-0 transition-opacity duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="h-12 w-12 text-a1red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#013e7d]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div
          ref={opportunityRef}
          className="mt-16 bg-gradient-to-r from-white to-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-500"
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-3xl font-extrabold text-[#013e7d] mb-6">A OPORTUNIDADE</h3>
          <ul className="flex flex-col items-center space-y-4">
            {OPPORTUNITY_POINTS.map((text, i) => (
              <li key={i} className="text-lg font-medium text-[#013e7d] bg-[#e6eef6] px-5 py-2 rounded-full shadow-md">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#assinar"
            className="inline-block px-8 py-4 bg-[#013e7d] text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition-transform"
          >
            QUERO ESTA FACILIDADE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
