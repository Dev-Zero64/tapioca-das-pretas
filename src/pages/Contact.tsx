import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contato
          </h1>
          <p className="text-xl text-gray-600">
            Venha nos visitar ou peça delivery!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Informações
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-brand-terra mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600">
                    Rua das Quitandeiras, 123
                    <br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-brand-terra mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-brand-terra mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-gray-600">contato@tapiocadaspretas.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-brand-terra mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Horário de Funcionamento</h3>
                  <p className="text-gray-600">
                    Segunda a Sábado: 11h às 22h
                    <br />
                    Domingo: 12h às 20h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-brand-orange mb-6">
              Delivery
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">iFood</h3>
                <p className="text-gray-600">
                  Peça através do nosso perfil no iFood
                </p>
                <a
                  href="#"
                  className="inline-block mt-2 text-brand-orange hover:text-brand-terra"
                >
                  Fazer pedido →
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600">
                  Peça diretamente pelo nosso WhatsApp
                </p>
                <a
                  href="#"
                  className="inline-block mt-2 text-brand-orange hover:text-brand-terra"
                >
                  Enviar mensagem →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};