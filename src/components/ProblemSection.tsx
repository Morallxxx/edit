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

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(".fade-in");
    targets?.forEach(el => observer.observe(el));

    return () => {
      targets?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="problem-section" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center">
          A <span className="text-[#df2026] font-bold">Síndrome</span> da Porta Fechada™
        </h2>
        <p className="section-subheading text-center">Você conhece bem essa história…</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {PROBLEM_CARDS.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
              className="fade-in opacity-0 translate-y-4 transition-all duration-500 delay-[index*100] ease-out text-center"
            >
              <Icon className="h-10 w-10 text-a1red mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-[#013e7d] mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </article>
          ))}
        </div>
        
        {/* Bloco da oportunidade */}
        <div
          className="fade-in mt-8 bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto text-center opacity-0 translate-y-4 transition-all duration-700 delay-500"
        >
          <h3 className="text-2xl font-bold text-[#013e7d] mb-2">A OPORTUNIDADE</h3>
          <p className="text-gray-700 mb-4">
            Imagine poder falar com um médico em até 5 minutos...<br />
            Sem sair de casa. Sem pegar ônibus. Sem arrastar criança no colo. Sem depender de sorte.
          </p>
          <ul className="space-y-3">
            {OPPORTUNITY_POINTS.map((text, i) => (
              <li key={i} className="text-[#013e7d] bg-[#e6eef6] px-4 py-2 rounded-full shadow">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
