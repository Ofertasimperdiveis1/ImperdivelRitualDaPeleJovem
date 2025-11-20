import { Check } from 'lucide-react';

const benefits = [
  'Potencializa e aprofunda o efeito do Ritual',
  'Guia perfeito para 21 dias de evolução',
  'Técnicas simples e rápidas',
  'Pele mais firme e luminosa',
  'Resultados cumulativos e progressivos',
  'Indispensável para quem quer mudança real',
];

export function Benefits() {
  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#A85C63] text-center mb-12">
        Por que este é o próximo passo perfeito para você?
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-md shadow-[#E7B3B1]/10 transform transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#E7B3B1]/20"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#A85C63] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </div>
            <p className="text-[#333333] text-base sm:text-lg leading-relaxed flex-1">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
