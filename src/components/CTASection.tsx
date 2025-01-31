import { CtaButton } from "./CtaButton";

export const CTASection = () => {
  return (
    <section className="bg-brand-yellow py-16">
      <div className="container px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Venha nos Conhecer!
          </h2>
          <p className="text-xl text-gray-800 mb-8 space-y-2">
            <span className="block">De Segunda a Sábado das 11h às 21h</span>
          </p>
          <div className="flex justify-center space-x-4">
            <CtaButton to="/contato">Como Chegar</CtaButton>
            <a
              href="https://www.ifood.com.br/delivery/goiania-go/tapioca-das-pretas--loteamento-celina-park/01d1ccac-5a87-44fb-8984-6f9491753203"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Pedir no iFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
