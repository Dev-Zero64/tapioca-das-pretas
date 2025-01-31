import { CtaButton } from "./CtaButton";

export const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32">
      <div className="absolute inset-0">
        <img
          src="restaurante.jpg"
          alt="Background de tapiocas coloridas"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
            Sabores que Contam História
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up delay-100">
            Tapiocas e cuscuz com nomes de mulheres negras que fizeram história
          </p>
          <div className="animate-fade-in-up delay-200">
            <CtaButton to="/cardapio">Ver Cardápio</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
