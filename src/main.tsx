import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CountdownTimer } from './components/CountdownTimer';
import { ProductMockup } from './components/ProductMockup';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { OfferSection } from './components/OfferSection';

function App() {
  const handleScrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAE9E5] via-white to-[#FAE9E5]">
      <CountdownTimer />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#A85C63] mb-6 leading-tight">
            Sua transformação já começou…
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#A85C63] leading-tight">
            agora acelere seus resultados em apenas 21 dias.
          </h2>
        </section>

        <ProductMockup />

        <section className="py-16 text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl text-[#333333] leading-relaxed mb-8">
            Com o Ritual você ativou o brilho imediato… mas com o Face Renovada, você conquista firmeza, viço e rejuvenescimento contínuo.
          </p>
          <a
            href="#offer-section"
            onClick={handleScrollToOffer}
            className="inline-block bg-[#A85C63] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl shadow-[#A85C63]/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#A85C63]/40 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative">Conhecer a Oferta</span>
          </a>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#E7B3B1] to-transparent my-12"></div>

        <Testimonials />

        <div className="h-px bg-gradient-to-r from-transparent via-[#E7B3B1] to-transparent my-16"></div>

        <Benefits />

        <div className="h-px bg-gradient-to-r from-transparent via-[#E7B3B1] to-transparent my-16"></div>

        <OfferSection />
      </main>

      <footer className="py-12"></footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
