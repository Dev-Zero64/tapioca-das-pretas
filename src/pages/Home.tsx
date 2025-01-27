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
            src="https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/352748556_727113366083804_6835828196191455742_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGVuZGI_z2XM2ZzGnEMhoULUdb1vk0cuotR1vW-TRy6i23E1kRbEd_gf4MbV61LVBzAIJSLwJ-PesiNKjabu-J0&_nc_ohc=kTFBStRgzDsQ7kNvgHffDB7&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AI8iFrxaYKtPpyCDQPBTez0&oh=00_AYBUNT-p4UXMvm3Zgaq9RnoNS984SlDa_TzYqAJKneouJA&oe=679AFB33"
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
                  src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t51.75761-15/470674879_18452870341066159_6701537351673620886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBayHBfAT4UUmOdkvM2Jdd37KIUctw8f7fsohRy3Dx_rfBrwHYc9DB7hRop5Wn8ZRBzED78jx0oT1YyFLNtMn0&_nc_ohc=Ed5gaHihxVwQ7kNvgEhP5SL&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=A4nGt25JF3Pguf5HBgPcTAz&oh=00_AYBicDwtFQdF_WwKCGEm8rkip_JgLEcJxRZC8kOZUokuXA&oe=679B27B7",
                  alt: "Pratos típicos arrumados artisticamente",
                },
                {
                  src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/294154490_2360153517469027_1887559466463743490_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeEuUsIlen-jIQNLb6H4z8Yhg4cDmcJd3YCDhwOZwl3dgDLg1jCAgkP9xHMfitkjTb30DXAxG26lvWc9UJshPsJw&_nc_ohc=BCQPHN3d8YsQ7kNvgGFHwaw&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=A4MNYzZSbs79zCQd7nCczX-&oh=00_AYA3CAM22FtsrUO-kfT8NKhiLLZ1OoBvQzV278epk6IzmA&oe=679B08FC",
                  alt: "Mão segurando tapioca tradicional sendo preparada",
                },
                {
                  src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/295104954_462905359171274_2621381930678775740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeFuvqMa6HrrA2yMkMXTWgtYN3kMWEP82wQ3eQxYQ_zbBMkQoHsPoF1t8CVkqsI8I5Kbj9aHmXGpQlq2Y-uLt6Fa&_nc_ohc=vU3pQ5aJwJsQ7kNvgGCcT0D&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AcE6bTFlcrq1HgTEKKxFNoA&oh=00_AYBLHn1EDfsgxloOjjL4v_JKFKtmgcJ4099lHc_XXIlsCg&oe=679B16B6",
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