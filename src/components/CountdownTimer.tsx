import { useEffect, useState } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="sticky top-0 z-50 bg-[#CE7A80] text-white py-4 px-4 text-center shadow-lg">
      <p className="text-sm sm:text-base font-medium">
        Parabéns pela sua compra! Esta oferta única expira em poucos minutos:{' '}
        <span className="font-bold text-lg">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </p>
    </div>
  );
}
