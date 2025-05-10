import { useState, useEffect } from 'react';
import { Shield, Award, FileCheck } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      image: "https://i.ibb.co/MynQbHQT/images-2.jpg",
      quote: "Minha mãe tem Alzheimer. Já fiquei 7 horas esperando no hospital. Com esse app, resolvi uma crise em 10 minutos. Só quem cuida entende o valor disso.",
      author: "Henrique Dias",
      age: "39 anos",
      location: "Curitiba/PR"
    },
    {
      id: 2,
      image: "https://i.ibb.co/20TTCgnC/download-2.jpg",
      quote: "Eu me sentia invisível no SUS. Aqui, me chamaram pelo nome e falaram com calma. Pela primeira vez, senti que minha dor era ouvida.",
      author: "Luciene Rocha",
      age: "46 anos",
      location: "Manaus/AM"
    },
    {
      id: 3,
      image: "https://i.ibb.co/XZxmGTWC/images.jpg",
      quote: "Madrugada. Meu filho com falta de ar. Em 4 minutos, o clínico me atendeu, acalmou e orientou. A1 Life salvou a gente naquela noite.",
      author: "Rafael Martins",
      age: "41 anos",
      location: "Brasília/DF"
    },
    {
      id: 4,
      image: "https://i.ibb.co/C5dcyhFP/761aec5712ec01c7140ec60eeb57adf9.jpg",
      quote: "Achei que era mais um desses apps frios. Mas o médico escutou cada detalhe, até perguntou como meu filho tava se sentindo hoje. Nunca fui tratada assim nem no particular.",
      author: "Juliana Tavares",
      age: "37 anos",
      location: "Santos/SP"
    },
    {
      id: 5,
      image: "https://i.ibb.co/0ymT3Ljs/images-1.jpg",
      quote: "Minha filha vomitando, eu chorando no banheiro. Liguei pro app, e uma médica me atendeu em 3 minutos. Aquilo não foi uma consulta. Foi um abraço.",
      author: "Patrícia Nunes",
      age: "30 anos",
      location: "Salvador/BA"
    }
  ];
  
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
  
  return (
    <section id="depoimentos" className="py-16 bg-white text-gray-800">
      <div className="section-container">
        <h2 className="section-heading text-center mb-8 text-gray-900">
          Essa é a <span className="text-[#013e7d]">reação de quem já testou</span> a <span className="text-gray-900 font-bold">A1 Life:</span>
        </h2>
        
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Rolagem horizontal para depoimentos */}
          <div className="relative">
            {/* Indicador de rolagem */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="bg-white rounded-full shadow-md p-2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cb050]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Container com rolagem */}
            <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`flex-shrink-0 w-80 mx-2 snap-center bg-white rounded-xl p-4 shadow-md border-l-4 border-[#4cb050] transform transition-all duration-300 hover:shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex flex-col items-center">
                    {/* Foto arredondada */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[#4cb050] shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={`Foto de ${testimonial.author}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Citação */}
                    <div className="text-center mb-3">
                      <span className="text-[#4cb050] text-lg">📍</span>
                      <p className="text-gray-700 italic text-sm">"{testimonial.quote}"</p>
                    </div>
                    
                    {/* Informações da pessoa */}
                    <div className="mt-auto text-center">
                      <p className="font-bold text-[#013e7d]">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.age} – {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 italic mb-2 md:hidden">
              Deslize para ver mais depoimentos →
            </p>
            <p className="text-lg text-gray-700">
              Estes são depoimentos reais de clientes que utilizam nossos serviços diariamente.
            </p>
            <a href="#assinar" className="mt-6 inline-block px-8 py-3 bg-[#4cb050] text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
              QUERO EXPERIMENTAR
            </a>
          </div>
        </div>
        
        {/* Seção de autoridade e segurança */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            <span className="text-[#4cb050]">📊</span> Autoridade e Segurança Total no Atendimento
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    <span className="text-[#4cb050]">🔒</span> Atendimento com Médicos Reais
                  </h4>
                  <p className="text-sm text-gray-600">
                    Todos os profissionais possuem CRM ativo, registro válido e são qualificados nas suas especialidades.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-3">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    <span className="text-[#4cb050]">✅</span> Autorizado pelo Ministério da Saúde
                  </h4>
                  <p className="text-sm text-gray-600">
                    Nosso sistema segue 100% das normas da telemedicina no Brasil — com respaldo legal e clínico.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-[#4cb050] hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="bg-[#4cb050] p-3 rounded-lg mr-3">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    <span className="text-[#4cb050]">🖋️</span> Receituário com Assinatura Digital
                  </h4>
                  <p className="text-sm text-gray-600">
                    Todas as prescrições têm validação jurídica, exatamente como um receituário físico — com assinatura digital reconhecida em todo o país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
