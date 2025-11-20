import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Letícia M.',
    text: 'Minha pele mudou completamente em 3 semanas.',
  },
  {
    name: 'Raquel S.',
    text: 'Esse upgrade foi o divisor de águas nos meus resultados.',
  },
  {
    name: 'Bianca T.',
    text: 'A firmeza que conquistei com o programa vale o investimento.',
  },
  {
    name: 'Débora L.',
    text: 'Transformação real, não só promessa.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-[#E7B3B1] rounded-2xl p-6 sm:p-8 shadow-lg shadow-[#E7B3B1]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E7B3B1]/30"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FAE9E5] to-[#E7B3B1] flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#A85C63]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-base sm:text-lg leading-relaxed mb-3">
                  "{testimonial.text}"
                </p>
                <p className="text-[#A85C63] font-semibold text-sm sm:text-base">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
