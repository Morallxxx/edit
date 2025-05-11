import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0); // Removida a anotação TypeScript
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq');
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
  
  const faqs = [
    {
      question: "Isso funciona mesmo? Tipo… de verdade?",
      answer: "Sim. Funciona tanto que tem gente que só voltou a ir ao médico depois que conheceu nosso atendimento. A diferença? Aqui você é tratado como pessoa, não como mais um número na fila."
    },
    {
      question: "Quantas vezes posso usar?",
      answer: "Consultas com clínico geral e pediatra são ilimitadas. Você pode acessar quantas vezes precisar, sem limite ou custos adicionais."
    },
    {
      question: "É tipo um plano de saúde baratinho ou tem pegadinha?",
      answer: "Não é plano de saúde. É MELHOR. Você não paga por consulta. Não precisa de agendamento. Não tem carência. É atendimento médico na palma da mão, sem surpresas no boleto."
    },
    {
      question: "Tem suporte humano?",
      answer: "Sim, temos equipe de atendimento pronta pra te ajudar."
    },
    {
      question: "É atendimento de verdade ou robô?",
      answer: "Nada de robôs. 👉 Todos os atendimentos são feitos por médicos humanos, com nome, CRM e especialidade exibidos na tela."
    },
    {
      question: "Posso incluir meu filho ou parceiro?",
      answer: "Sim! Oferecemos planos familiares. Fale com a equipe pelo botão."
    }
  ];
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Perguntas Frequentes
        </h2>
        
        <div className={`max-w-3xl mx-auto mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-a1blue">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-a1blue" /> : 
                  <ChevronDown className="h-5 w-5 text-a1blue" />
                }
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-xl text-gray-600 mb-6">Está convencido? Não perca mais tempo esperando em filas.</p>
          <a href="#assinar" className="cta-button">
            QUERO TER ESSA PAZ NA PALMA DA MÃO
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
