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
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/463492201_1079743490820788_3320678029966861142_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqcg3J-PXBnHJMSvL2HBZwWXOkonZSWD1Zc6SidlJYPbGIDN8AUoyXfseWaM4L10eOH3EXHjltshBhpqjXgl_O&_nc_ohc=xIxlCtQJNPsQ7kNvgGAswiN&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=ArF4APR2XsLs_dGa4FEw9cx&oh=00_AYBOgF8zWpy812UhFMrIHpoiScqB5qCQaWU48DUKpMQATg&oe=679CF4E7",
      alt: "Pratos típicos arrumados artisticamente",
      description: "Nossa culinária tradicional com um toque especial"
    },
    {
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/274588593_2245248995626147_2653737793166941107_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeFHKz5bDB0SVFD-4YiXcOFqK2zH--Rpok0rbMf75GmiTVhn5Ijf08wrsg0BSgD-xVB33wwvUlK7z4I6mvCRlkr1&_nc_ohc=7yF4fre7r6QQ7kNvgH6DtF7&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AYi5OiaW4XWTbO1QhYSDcuq&oh=00_AYDXxfokKsZEO2UTn1KyNwMDvqalPGAblFqvo9xZsHnf2Q&oe=679CE62E",
      alt: "Tapioca sendo preparada",
      description: "Preparo artesanal das nossas tapiocas"
    },
    {
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/352748556_727113366083804_6835828196191455742_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGVuZGI_z2XM2ZzGnEMhoULUdb1vk0cuotR1vW-TRy6i23E1kRbEd_gf4MbV61LVBzAIJSLwJ-PesiNKjabu-J0&_nc_ohc=kTFBStRgzDsQ7kNvgEnnPTV&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=A0Uhdz0rr4oW5YsegQyS-45&oh=00_AYChDiPzcvfHlodLfpe4eVuP785UToSIe-E6EM0SHh9fiA&oe=679CF573",
      alt: "Ambiente acolhedor",
      description: "Nosso espaço acolhedor para você"
    },
    {
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/279886589_2303948453089534_367534294688931180_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeHpY1yM1YIqH78l_HOKYqfZFHpkaTMGLtMUemRpMwYu0_QisAFzdZGobCGGofhrenBqJiwK-ZMmkaH4WpN6Y_VW&_nc_ohc=2fFXHvnuBC4Q7kNvgEzwa6F&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AAuX-fu-5Lx45zOkCidicZ5&oh=00_AYC5ZBMJze_VDOXCSBo9MnijUnjppFnUkagVT6c4YllkqA&oe=679CEE29",
      alt: "Chef preparando pratos",
      description: "Nossa equipe em ação"
    },
    {
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/250653927_2154614928022888_7237862323168318025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeFDByencbGWMHHZ79mZd4g1EvXtf3hFe8YS9e1_eEV7xtG5xvmbTWig2SAQ3uH5M_SrMMVc2ga36sNG-YyxEdb2&_nc_ohc=MJtFui0mmyoQ7kNvgGR6--n&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AtL_zUUwu_21hr9KjHIObrW&oh=00_AYA4tPhGH-WceJHQCN7lAZvPksY8co8LVPAZ0Ttb0ki0UA&oe=679D02D0",
      alt: "Pratos coloridos",
      description: "Sabores que encantam"
    },
    {
      src: "https://scontent.frvd1-1.fna.fbcdn.net/v/t39.30808-6/459569218_1050867123708425_157203446432315677_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFYMhYy4EnpHPWhouXox05BGP8kYzQfWMgY_yRjNB9YyL18BtrgoTq6jhCq2fPKNDnVAalhYn3qAazbcLTWiw3w&_nc_ohc=0vr0KOarfKkQ7kNvgEDJ3Wq&_nc_zt=23&_nc_ht=scontent.frvd1-1.fna&_nc_gid=AaWC__qyQ9QEED7S4HX4h8m&oh=00_AYDgH1apqljLJLNVsiM_xQ5u0yPX4vGRG5P9UzsXisQabw&oe=679CDB08",
      alt: "Ambiente aconchegante",
      description: "Nosso espaço é a sua casa"
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
              href="https://www.instagram.com/tapiocadaspretas/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/tapiocadaspretas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@tapiocadaspretas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Tik Tok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};