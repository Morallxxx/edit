
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
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
    },
 {
  question: "Mas é confiável?",
  answer: (
    <>
      Sim. Atendimentos feitos por médicos com CRM ativo, com assinatura digital válida em todo o Brasil, conforme{" "}
      <a 
        href="https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2021/2299_2021.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-a1blue hover:underline inline-flex items-center"
      >
        Resolução CFM nº 2.299/21
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      . Nosso índice de satisfação é de 4.9/5.
    </>
  )
},
    {
      question: "E se for grave?",
      answer: "Orientamos, direcionamos. 74% dos casos evitam emergências com nosso primeiro atendimento. Quando a situação exige atendimento presencial, nossos médicos orientam sobre o melhor local para buscar ajuda."
    },
    {
      question: "Tem fidelidade?",
      answer: "Zero. Você pode cancelar a qualquer momento, direto pelo app ou WhatsApp, sem perguntas nem letras miúdas."
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
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-xl text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco</p>
          <a 
            href="https://wa.me/31997703573" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-a1blue hover:text-a1blue-light font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
