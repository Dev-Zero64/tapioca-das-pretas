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
              <p>Rua das Quitandeiras, 123</p>
              <p>São Paulo - SP</p>
              <a
                href="https://maps.google.com/?q=Rua+das+Quitandeiras,123,São+Paulo,SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-orange hover:text-brand-terra mt-2"
              >
                Ver no mapa <ChevronRight className="ml-1" size={16} />
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Phone className="w-5 h-5" />} title="Telefone">
              <a
                href="tel:+5511999999999"
                className="hover:text-brand-terra transition-colors"
              >
                (11) 99999-9999
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Mail className="w-5 h-5" />} title="E-mail">
              <a
                href="mailto:contato@tapiocadaspretas.com.br"
                className="hover:text-brand-terra transition-colors break-all"
              >
                contato@tapiocadaspretas.com.br
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon={<Clock className="w-5 h-5" />} title="Horário">
              <p>Segunda a Sábado: 11h às 22h</p>
              <p>Domingo: 12h às 20h</p>
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
                    <img
                      src="/ifood-logo.svg"
                      alt="iFood"
                      className="w-20 h-8 object-contain mr-2"
                    />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Peça agora e receba em casa com todo sabor
                  </p>
                  <a
                    href="https://www.ifood.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    Pedir no iFood <ChevronRight className="ml-2" size={16} />
                  </a>
                </div>

                <div className="bg-brand-light rounded-lg p-4">
                  <h3 className="font-semibold flex items-center mb-2">
                    <img
                      src="/whatsapp-logo.svg"
                      alt="WhatsApp"
                      className="w-8 h-8 object-contain mr-2"
                    />
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Faça seu pedido diretamente pelo nosso WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.650847733444!2d-46.6335833!3d-23.5488083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzU1LjciUyA0NsKwMzgnMDEuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
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