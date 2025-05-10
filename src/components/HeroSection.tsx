// HeroSection.jsx - Performance extrema, otimizado para Core Web Vitals
const HeroSection = () => (
  <section className="hero-wrapper">
    <div className="hero-container">
      <div className="hero-text">
        <span className="pill">Clinico Geral e Pediatra 24H</span>
        <h1>
          <span>Nunca Mais Carregue</span>
          <span>Seu Filho Com Febre No Colo</span>
          <span className="accent">Quilômetros</span>
        </h1>
        <p>Atendimento médico em minutos, onde você estiver.</p>
        <a href="#assinar" className="cta">FALE COM UM MÉDICO AGORA</a>
        <div className="benefits">
          <div>✓ Médicos certificados</div>
          <div>✓ Atendimento em 5 min</div>
        </div>
        <div className="rating">★★★★★ 4.9/5 de satisfação</div>
      </div>
      <div className="hero-image">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3C/svg%3E"
          data-src="https://i.ibb.co/GQzV1GHc/mae-carinhosa-medindo-a-temperatura-para-seu-filho-doente-deitado-na-cama-a-noite-doenca-infantil-45.jpg"
          alt="Mãe cuidando de filho doente"
          width="600" 
          height="400"
          loading="eager"
          className="hero-img"
          onLoad={(e) => {
            // Carrega a imagem real somente quando o placeholder estiver renderizado
            if (e.target.dataset.src) {
              e.target.src = e.target.dataset.src;
              delete e.target.dataset.src;
            }
          }}
        />
        <div className="badge">
          <div className="dot"></div>
          <span>Médicos online</span>
        </div>
      </div>
    </div>
  </section>
);

// Estilos CSS inline para eliminar bloqueio de renderização
// Inclua isso no seu arquivo CSS principal ou como <style> no <head>
/*
.hero-wrapper {
  padding: 6rem 1rem 3rem;
  background: linear-gradient(to bottom, #ebf3ff, #fff);
}

.hero-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    align-items: center;
  }
}

.hero-text {
  padding: 2rem;
  flex: 1;
}

.pill {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #fee2e2;
  color: #dc2626;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1e40af;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 span {
  display: block;
}

.accent {
  color: #dc2626;
}

p {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.cta {
  display: inline-block;
  background: #4cb050;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  margin-bottom: 1rem;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #374151;
}

.rating {
  color: #374151;
  font-size: 0.875rem;
}

.hero-image {
  flex: 1;
  position: relative;
  padding: 1rem;
}

.hero-img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  display: block;
  content-visibility: auto;
}

.badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #4cb050;
  border-radius: 50%;
  margin-right: 0.375rem;
}
*/

export default HeroSection;
