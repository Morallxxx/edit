
import { useState, useEffect } from 'react';
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('depoimentos');
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
  
  const testimonials = [
    {
      quote: "Era 2h da manhã, minha bebê com febre... Em 3 minutos, uma médica já me acalmou pelo celular. Nunca mais me senti sozinha.",
      author: "Maria Clara, mãe de primeira viagem",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "É como ter uma médica no bolso. Já me salvou em noites difíceis quando meu filho teve crises de asma.",
      author: "Camila, mãe solo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      quote: "Nunca fui tão bem atendida, mesmo sem plano caro. Os médicos realmente escutam e te dão atenção. Vale cada centavo.",
      author: "Luana, autônoma",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
    }
  ];
  
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Histórias de quem já está com a  Life
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card flex flex-col ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute -top-5 -left-5 bg-a1red text-white p-2 rounded-full">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center mb-4 mt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <p className="font-bold text-a1blue">{testimonial.author}</p>
              </div>
              
              <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
              
              <div className="mt-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-yellow-500">
                    {star}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-a1blue mb-6">
              Atendimento com Médicos Reais, de Verdade
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <div className="mb-3 bg-blue-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-a1blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Todos os profissionais possuem CRM ativo e registro válido
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-3 bg-blue-50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-a1blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Receituário com assinatura digital oficial válida em todo o país
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
