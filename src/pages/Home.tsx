import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-hero-pattern text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sabores que Contam História
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Tapiocas e cuscuz com nomes de mulheres negras que fizeram história
            </p>
            <Link
              to="/cardapio"
              className="inline-flex items-center bg-brand-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Ver Cardápio
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-terra mb-8">
            Nossa Cozinha
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    alt="Pratos típicos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26"
                    alt="Tapioca sendo preparada"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515516969-d4008cc6241a"
                    alt="Ambiente acolhedor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-terra mb-4">
                Sabor Autêntico
              </h3>
              <p className="text-gray-600">
                Receitas tradicionais com ingredientes frescos e selecionados
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-terra mb-4">
                Cultura Viva
              </h3>
              <p className="text-gray-600">
                Cada prato homenageia uma mulher negra importante
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-terra mb-4">
                Delivery
              </h3>
              <p className="text-gray-600">
                Peça pelo iFood ou WhatsApp e receba em casa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Venha nos Conhecer!
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            De Segunda a Sábado das 11h às 22h
            <br />
            Domingo das 12h às 20h
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-brand-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Como Chegar
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};