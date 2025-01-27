import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Instagram, Facebook, Youtube } from 'lucide-react';

type Photo = {
  src: string;
  alt: string;
  description: string;
};

const Media = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const photos: Photo[] = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Pratos típicos arrumados artisticamente",
      description: "Culinária tradicional com toque especial"
    },
    {
      src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
      alt: "Tapioca sendo preparada",
      description: "Preparo artesanal das tapiocas"
    },
    {
      src: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
      alt: "Ambiente acolhedor",
      description: "Espaço aconchegante para clientes"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      alt: "Chef preparando pratos",
      description: "Equipe qualificada em ação"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      alt: "Pratos coloridos",
      description: "Sabores que encantam o paladar"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-8">
          Conheça Nosso Espaço
        </h1>

        {/* Carrossel Corrigido */}
        <div className="mb-12 max-w-5xl mx-auto">
          <Carousel 
            className="relative group"
            setApi={setApi}
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-6">
                      <p className="text-white text-lg font-medium text-center">
                        {photo.description}
                      </p>
                      <div className="text-center mt-2 text-sm text-orange-200">
                        {activeIndex + 1} / {photos.length}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              aria-label="Slide anterior"
            />
            <CarouselNext 
              className="right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              aria-label="Próximo slide"
            />
          </Carousel>
        </div>

        {/* Galeria em Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 px-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-center font-medium">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Redes Sociais com Ícones */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Siga Nossas Redes
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <SocialLink 
              href="https://instagram.com" 
              icon={<Instagram className="w-6 h-6" />} 
              label="Instagram"
            />
            <SocialLink 
              href="https://facebook.com" 
              icon={<Facebook className="w-6 h-6" />} 
              label="Facebook"
            />
            <SocialLink 
              href="https://youtube.com" 
              icon={<Youtube className="w-6 h-6" />} 
              label="YouTube"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-colors duration-300"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Media;