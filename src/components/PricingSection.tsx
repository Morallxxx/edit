import { useState, useEffect } from 'react';
import { CheckCircle, Clock, ShieldCheck, X, HelpCircle, Cpu } from "lucide-react";

const ObjectionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('objecoes');
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

  const objections = [
    {
      objection: "E se eu não usar?",
      answer: "Mesmo que use pouco, só de saber que tem um médico 24h no bolso já te dá segurança.",
      fact: "87% dos nossos usuários dizem que só o acesso já aliviou crises de ansiedade.",
      icon: <HelpCircle className="h-12 w-12 text-a1blue" />
    },
    {
      objection: "Mas é confiável?",
      answer: "Sim. Atendimentos feitos por médicos com CRM ativo, com assinatura digital válida em todo o Brasil, conforme Resolução CFM nº 2.299/21.",
      fact: "Nosso índice de satisfação é de 4.9/5.",
      icon: <ShieldCheck className="h-12 w-12 text-a1blue" />
    },
    {
      objection: "E se for grave?",
      answer: "Orientamos, direcionamos.",
      fact: "74% dos casos evitam emergências com nosso primeiro atendimento.",
      icon: <Clock className="h-12 w-12 text-a1blue" />
    },
    {
      objection: "Tem fidelidade?",
      answer: "Zero.",
      fact: "Você pode cancelar a qualquer momento, direto pelo app ou WhatsApp, sem perguntas nem letras miúdas.",
      icon: <X className="h-12 w-12 text-a1blue" />
    },
    {
      objection: "É atendimento de verdade ou robô?",
      answer: "Nada de robôs. 👉 Todos os atendimentos são feitos por médicos humanos, com nome, CRM e especialidade exibidos na tela.",
      fact: "Mais de 200 mil atendimentos feitos por profissionais reais.",
      icon: <Cpu className="h-12 w-12 text-a1blue" />
    }
  ];

  return (
    <section id="objecoes" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Respondendo às Suas Dúvidas
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {objections.map((item, index) => (
            <div 
              key={index}
              className={`feature-card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-a1blue">{item.objection}</h3>
              </div>

              <p className="text-gray-600 mb-4">{item.answer}</p>

              <div className="flex items-start mt-4 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-a1green mr-2 shrink-0 mt-1" />
                <p className="text-gray-600">{item.fact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-xl text-gray-700 mb-6">
            Está convencido? Não perca mais tempo esperando em filas.
          </p>
          <a href="#assinar" className="cta-button">
            QUERO ATENDIMENTO MÉDICO 24H
          </a>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
