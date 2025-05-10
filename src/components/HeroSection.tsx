import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simplificado: definir visibilidade imediatamente ou com pequeno delay
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Memoizar as estrelas para evitar recriação a cada renderização
  const starRating = (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen pt-24 md:pt-28 pb-12 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Reduzido número de elementos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-green-100 opacity-40"></div>
      </div>     
      
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-sm">
        <div className={`w-full lg:w-1/2 space-y-6 p-8 lg:p-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-2">Clinico Geral e Pediatra 24H</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-a1blue leading-tight uppercase tracking-tight">
            <span className="inline-block mr-2">Nunca Mais Carregue</span>
            <span className="block mt-2">Seu Filho Com Febre No Colo</span> 
            <span className="text-red-600">Quilômetros</span>
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Atendimento médico especializado em minutos, onde você estiver. Seu filho merece cuidado imediato.
          </p>
          <div className="flex items-center mt-4 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Consulta em até 5 minutos após o chamado</span>
          </div>

          <div className="pt-6">
            <a href="#assinar" className="cta-button inline-flex items-center space-x-2">
              <span>FALE COM UM MÉDICO AGORA</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <div className="mt-4 bg-a1blue text-white p-3 rounded-lg shadow-lg text-center w-max">
              <p className="font-bold text-xs md:text-sm whitespace-nowrap">Primeira consulta em até 5 minutos!</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-a1green" size={20} />
              <span>Médicos certificados pelo CRM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-a1green" size={20} />
              <span>Atendimento em até 5 minutos</span>
            </div>
          </div>
          
          <div className="pt-4 text-gray-700">
            <div className="flex items-center space-x-2">
              {starRating}
              <span className="font-medium">4.9/5 de satisfação</span>
            </div>
            <p className="mt-2 text-sm">Só cresce o número de famílias atendidas</p>
          </div>
        </div>
        
        <div className={`w-full lg:w-1/2 mt-10 lg:mt-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="https://i.ibb.co/GQzV1GHc/mae-carinhosa-medindo-a-temperatura-para-seu-filho-doente-deitado-na-cama-a-noite-doenca-infantil-45.jpg" 
                alt="Mãe medindo a temperatura de seu filho doente" 
                className="rounded-lg w-full h-auto object-cover"
                loading="eager"
                width="600"
                height="400"
              />
              
              {/* "Médicos online" badge simplificado */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md z-10">
                <div className="flex items-center">
                  <div className="h-2 w-2 md:h-3 md:w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">Médicos online agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG simplificado */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" aria-hidden="true">
          <path fill="#ffffff" d="M0,256L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
