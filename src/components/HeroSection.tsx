
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Use a small timeout to ensure CSS transitions work properly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 md:pt-28 pb-12 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-30 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-green-100 opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-red-100 opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
<div className="section-container relative z-10 flex flex-col lg:flex-row items-center py-12 md:py-20">
  <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    {/* Badge de destaque */}
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
      <span className="flex h-3 w-3 relative mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-a1blue opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-a1blue"></span>
      </span>
      <span className="text-a1blue font-medium text-sm">Atendimento 24h</span>
    </div>
    
    {/* Título principal melhorado */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-a1blue leading-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-1 -skew-y-3 bg-blue-100 opacity-30 rounded-lg transform -rotate-1"></span>
        <span className="relative">Nunca Mais</span>
      </span>{" "}
      Carregue Seu Filho Com{" "}
      <span className="text-red-500 relative inline-block">
        Febre
        <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </span>{" "}
      Por Quilômetros
      <div className="h-1 w-24 bg-a1blue mt-5 rounded-full"></div>
    </h1>
    
    {/* Subtítulo com animação de entrada */}
    <h2 className="text-xl md:text-2xl text-[#626870] font-medium animate-fadeIn">
      Atendimento médico digno, 24 horas por dia, direto no seu celular.
      <span className="block mt-2 font-semibold">Sem fila. Sem espera. Sem humilhação.</span>
    </h2>
    
    {/* Botões de CTA */}
    <div className="flex flex-col sm:flex-row gap-4 pt-3">
      <button className="px-8 py-4 rounded-lg bg-a1blue text-white font-bold text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200">
        Consultar agora
        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
      <button className="px-8 py-4 rounded-lg border-2 border-a1blue text-a1blue font-bold text-lg hover:bg-blue-50 transition focus:ring-4 focus:ring-blue-100">
        Saiba como funciona
      </button>
    </div>
    
    {/* Elemento de confiança */}
    <div className="flex items-center space-x-4 pt-4">
      <div className="flex -space-x-2">
        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="Avatar" />
        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="Avatar" />
        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="Avatar" />
      </div>
      <div className="text-sm text-gray-500">
        <span className="font-medium text-gray-700">+2.500 famílias</span> atendidas este mês
      </div>
    </div>
  </div>
  
  {/* Lado direito - espaço para imagem ou ilustração */}
  <div className={`w-full lg:w-1/2 mt-10 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
    <div className="relative">
      <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-yellow-100 rounded-full opacity-50"></div>
      {/* Aqui você pode adicionar sua imagem, por exemplo: */}
      <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
        <img 
          src="https://via.placeholder.com/600x500" 
          alt="Médico atendendo criança" 
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  </div>
</div>

          
<h2 className="text-xl md:text-2xl text-[#626870] font-medium">
  Atendimento médico digno, 24 horas por dia, direto no seu celular.
  <span className="block mt-2 font-semibold">Sem fila. Sem espera. Sem humilhação.</span>
</h2> 

          
          <div className="pt-6">
            <a href="#assinar" className="cta-button inline-flex items-center space-x-2 group">
              <span>FALE COM UM MÉDICO AGORA</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            {/* Elemento "Primeira consulta" reposicionado para abaixo do botão CTA */}
            <div className="mt-4 bg-a1blue text-white p-3 rounded-lg shadow-lg text-center w-max">
              <p className="font-bold text-xs md:text-sm whitespace-nowrap">Primeira consulta em até 5 minutos!</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
            <div className="flex items-center space-x-2 group">
              <CheckCircle className="text-a1green transition-transform duration-300 group-hover:scale-110" size={20} />
              <span className="group-hover:text-a1blue transition-colors duration-300">Médicos certificados pelo CRM</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Clock className="text-a1green transition-transform duration-300 group-hover:scale-110" size={20} />
              <span className="group-hover:text-a1blue transition-colors duration-300">Atendimento em até 5 minutos</span>
            </div>
          </div>
          
          <div className="pt-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({length: 5}).map((_, i) => (
                  <span key={i} className="text-yellow-500 transition-transform duration-300 hover:scale-125">
                    ★
                  </span>
                ))}
              </div>
              <span className="font-medium">4.9/5 de satisfação</span>
            </div>
            <p className="mt-2 text-sm">Só cresce o número de famílias atendidas</p>
          </div>
        </div>
        
        <div className={`w-full lg:w-1/2 mt-10 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <img 
                src="uploads/criancas-1.webp" 
                alt="Mãe sorrindo com celular e criança no colo" 
                className="rounded-lg w-full h-auto object-cover"
                loading="eager"
              />
              
              {/* "Médicos online" badge - fixed at top right corner for both mobile and desktop */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 z-10">
                <div className="flex items-center">
                  <div className="h-2 w-2 md:h-3 md:w-3 bg-green-500 rounded-full animate-ping mr-2"></div>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">Médicos online agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,138.7C672,139,768,213,864,229.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
