
import { useState, useEffect } from 'react';
import { Smartphone, Calendar, FileText, Pill, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('como-funciona-detalhes');
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
  
  const steps = [
    {
      icon: <Smartphone className="h-10 w-10 text-a1blue" />,
      title: "Assine a A 1 Life em 2 minutos",
      description: "Processo rápido e descomplicado, sem burocracia."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-a1blue" />,
      title: "Receba login para o app no celular",
      description: "Acesso imediato após a confirmação de pagamento."
    },
    {
      icon: <FileText className="h-10 w-10 text-a1blue" />,
      title: "Tenha acesso imediato a médicos 24h",
      description: "Consultas por videochamada com médicos reais a qualquer hora."
    },
    {
      icon: <Calendar className="h-10 w-10 text-a1blue" />,
      title: "Agende especialistas direto no app",
      description: "Acesso a 17 especialidades médicas diferentes."
    }
  ];
  
  return (
    <section id="como-funciona-detalhes" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Como Funciona
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg shadow-md p-6 mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mr-6 shrink-0 mb-4 md:mb-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-a1blue mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-xl shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <img 
              src="uploads/mockup.webp" 
              alt="App A 1 Life na tela do celular" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-a1blue mb-4">
              Interface simples, visual e amigável
            </h3>
            <p className="text-gray-600 mb-6">
              O app A 1 Life foi projetado para ser intuitivo e fácil de usar, mesmo em momentos de preocupação. Com poucos toques, você tem acesso a médicos qualificados prontos para te atender.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-a1green mr-2 mt-1 shrink-0" />
                <span>Videochamadas estáveis mesmo com conexão limitada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-a1green mr-2 mt-1 shrink-0" />
                <span>Histórico médico seguro e acessível</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-a1green mr-2 mt-1 shrink-0" />
                <span>Receitas digitais enviadas diretamente para seu e-mail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
