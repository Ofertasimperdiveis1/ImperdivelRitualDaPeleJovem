export function ProductMockup() {
  return (
    <div className="py-12 flex justify-center animate-fade-in">
      <div className="relative group">
        <div className="absolute inset-0 bg-[#A85C63] opacity-10 blur-3xl rounded-full transform scale-110 group-hover:scale-120 transition-transform duration-700"></div>
        <div className="relative max-w-xl transform transition-transform duration-500 hover:scale-105">
          <img
            src="https://i.imgur.com/Bbsm10C.png"
            alt="Face Renovada - Programa de 21 Dias"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
