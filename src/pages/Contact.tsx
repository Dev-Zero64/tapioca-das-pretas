import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

const ContactInfoCard = ({ icon, title, children }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors"
  >
    <div className="text-brand-terra mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <div className="text-gray-600 space-y-1">{children}</div>
    </div>
  </motion.div>
);

export const Contact = () => {
  return (
    <section className="py-16 bg-gray-50" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Venha nos Visitar
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nosso espaço físico ou peça delivery com toda comodidade
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Seção de Informações */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactInfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Endereço"
            >
              <p>Rua CP10 com Avenida Milão Loteamento - Res. Celina Park</p>
              <p>Goiania - GO</p>
              <p>CEP: 74373-200</p>
              <a
                href="https://www.google.com/maps/place/Tapioca+das+Pretas+-+Eldorado/@-16.7093252,-49.3250216,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef2842b30d903:0x9909d0107f44d75c!8m2!3d-16.7093304!4d-49.3224467!16s%2Fg%2F12hntvsg5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-orange hover:text-brand-terra mt-2"
              >
                Ver no mapa <ChevronRight className="ml-1" size={16} />
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Phone className="w-5 h-5" />} title="Telefone">
              <a
                href="tel:+5562998605278"
                className="hover:text-brand-terra transition-colors"
              >
                (62) 99860-5278
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Mail className="w-5 h-5" />} title="E-mail">
              <a
                href="mailto:contato@tapiocadaspretas.com.br"
                className="hover:text-brand-terra transition-colors break-all"
              >
                rh.tapiocadaspretas@gmail.com
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Clock className="w-5 h-5" />} title="Horário">
              <p>Segunda a Sábado: 11h às 21h</p>
              <p>Domingos e Feriasdos: Fechado</p>
            </ContactInfoCard>
          </motion.div>

          {/* Seção de Delivery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-brand-orange mb-6">
                Delivery Rápido
              </h2>
              
              <div className="space-y-6">
                <div className="bg-brand-light rounded-lg p-4">
                  <h3 className="font-semibold flex items-center mb-2">
                   Ifood
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Peça agora e receba em casa com todo sabor
                  </p>
                  <a
                    href="https://www.ifood.com.br/delivery/goiania-go/tapioca-das-pretas--loteamento-celina-park/01d1ccac-5a87-44fb-8984-6f9491753203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    Pedir no iFood <ChevronRight className="ml-2" size={16} />
                  </a>
                </div>

                <div className="bg-brand-light rounded-lg p-4">
                  <h3 className="font-semibold flex items-center mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Faça seu pedido diretamente pelo nosso WhatsApp
                  </p>
                  <a
                    href="https://wa.me/556298605278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                  >
                    Enviar Mensagem <ChevronRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3509810821183!2d-49.3224467!3d-16.7093304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef2842b30d903%3A0x9909d0107f44d75c!2sTapioca%20das%20Pretas%20-%20Eldorado!5e0!3m2!1spt-BR!2sbr!4v1737949787475!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
                title="Localização no Mapa"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};