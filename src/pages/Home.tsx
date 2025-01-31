import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Reusable CTA Button component
const CtaButton = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="inline-flex items-center bg-brand-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
  >
    {children}
    <ArrowRight className="ml-2" size={20} aria-hidden="true" />
  </Link>
);

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src="/public/restaurante.jpg"
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

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center text-brand-terra mb-8">
            Nossa Cozinha
          </h2>
          <Carousel 
            className="w-full mx-auto shadow-xl rounded-lg overflow-hidden"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {[
                {
                  src: "public/cuscuz.jpg",
                  alt: "Pratos típicos arrumados artisticamente",
                },
                {
                  src: "tapioca.jpg",
                  alt: "Mão segurando tapioca tradicional sendo preparada",
                },
                {
                  src: "cuscuz2.jpg",
                  alt: "Ambiente interno aconchegante do estabelecimento",
                },
              ].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-light">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sabor Autêntico",
                content: "Receitas tradicionais com ingredientes frescos e selecionados",
                icon: "🌽",
              },
              {
                title: "Cultura Viva",
                content: "Cada prato homenageia uma mulher negra importante",
                icon: "✊🏾",
              },
              {
                title: "Delivery",
                content: "Peça pelo iFood ou WhatsApp e receba em casa",
                icon: "🛵",
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-terra mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};