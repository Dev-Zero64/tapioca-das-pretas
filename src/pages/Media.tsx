import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Media = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Pratos típicos arrumados artisticamente",
      description: "Nossa culinária tradicional com um toque especial"
    },
    {
      src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
      alt: "Tapioca sendo preparada",
      description: "Preparo artesanal das nossas tapiocas"
    },
    {
      src: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
      alt: "Ambiente acolhedor",
      description: "Nosso espaço acolhedor para você"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      alt: "Chef preparando pratos",
      description: "Nossa equipe em ação"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      alt: "Pratos coloridos",
      description: "Sabores que encantam"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-orange/10 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-terra mb-8">
          Nossa Galeria
        </h1>
        
        {/* Carrossel Principal */}
        <div className="mb-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-lg text-center">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Grade de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Redes Sociais */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-brand-terra mb-6">
            Nos Acompanhe nas Redes
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};