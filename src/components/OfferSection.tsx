import { Sparkles, Shield } from 'lucide-react';

export function OfferSection() {
  return (
    <section id="offer-section" className="py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[#A85C63] opacity-5 blur-3xl rounded-full"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#E7B3B1]/40 p-8 sm:p-12 border border-[#E7B3B1]/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-[#A85C63] mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium uppercase tracking-wide">Oferta Exclusiva</span>
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-semibold text-[#A85C63] mb-4">
                Programa Face Renovada
              </h3>
              <p className="text-xl sm:text-2xl text-[#333333] mb-2">
                Transformação em 21 Dias
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FAE9E5] to-white rounded-2xl p-6 sm:p-8 mb-8 border border-[#E7B3B1]/20">
              <p className="text-base sm:text-lg text-[#333333] leading-relaxed text-center">
                Rotinas rápidas, práticas e guiadas que elevam sua pele para outro nível de firmeza, brilho e juventude.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.ggcheckout.com/checkout/v2/Zdieor0yojEkWX9tUN40"
                className="block w-full bg-[#A85C63] text-white text-center py-5 sm:py-6 px-8 rounded-2xl font-semibold text-lg sm:text-xl shadow-xl shadow-[#A85C63]/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#A85C63]/40 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative">
                  Quero Acelerar Minha Transformação — R$17,80
                </span>
              </a>

              <div className="text-center pt-2">
                <a
                  href="https://www.ggcheckout.com/checkout/v2/t7EECHwEEDlmjw9KQcvS"
                  className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-600 text-sm font-medium rounded-xl hover:border-[#A85C63] hover:text-[#A85C63] transition-all duration-200"
                >
                  Não quero essa opção agora
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7B3B1]/30">
              <div className="flex items-start gap-3 justify-center text-center">
                <Shield className="w-5 h-5 text-[#A85C63] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  Garantia total de 7 dias. Se você não perceber firmeza e viço real na pele, devolvemos 100% do valor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
