import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

export const ImageCarousel = () => {
    return (
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
                  src: "cuscuz.jpg",
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
    )
}