import React from 'react';

// Componente extremamente otimizado que prioriza a performance
const HeroSection = React.memo(() => {
  // Definições de ícones como constantes
  const checkIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-a1green">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );

  const clockIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-a1green">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  return (
    <section className="pt-24 md:pt-28 pb-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-sm">
        {/* Coluna de texto */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold inline-block mb-4">
            Clinico Geral e Pediatra 24H
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-a1blue uppercase">
            Nunca Mais Carregue<br />
            Seu Filho Com Febre No Colo<br />
            <span className="text-red-600">Quilômetros</span>
          </h1>
          
          <p className="text-xl text-gray-600 my-4">
            Atendimento médico especializado em minutos, onde você estiver.
          </p>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Consulta em até 5 minutos após o chamado</span>
          </div>

          {/* CTA Button */}
          <a href="#assinar" className="cta-button inline-block text-center mb-4">
            FALE COM UM MÉDICO AGORA
          </a>
          
          {/* Label */}
          <div className="bg-a1blue text-white p-2 rounded-lg text-center inline-block mb-6">
            <p className="font-bold text-sm">Primeira consulta em até 5 minutos!</p>
          </div>
          
          {/* Features */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 mb-6">
            <div className="flex items-center mb-2 sm:mb-0">
              {checkIcon}
              <span className="ml-2">Médicos certificados pelo CRM</span>
            </div>
            <div className="flex items-center">
              {clockIcon}
              <span className="ml-2">Atendimento em até 5 minutos</span>
            </div>
          </div>
          
          {/* Rating */}
          <div className="text-gray-700">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-2">★★★★★</div>
              <span className="font-medium">4.9/5 de satisfação</span>
            </div>
            <p className="text-sm">Só cresce o número de famílias atendidas</p>
          </div>
        </div>
        
        {/* Coluna de imagem */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="relative bg-white rounded-xl p-4">
            {/* Imagem otimizada */}
            <img 
              src="https://i.ibb.co/GQzV1GHc/mae-carinhosa-medindo-a-temperatura-para-seu-filho-doente-deitado-na-cama-a-noite-doenca-infantil-45.jpg" 
              alt="Mãe medindo temperatura" 
              width="600"
              height="400"
              className="rounded-lg w-full h-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            
            {/* Badge simplificado */}
            <div className="absolute top-8 right-8 bg-white px-3 py-1 rounded-lg shadow">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs font-medium">Médicos online agora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
