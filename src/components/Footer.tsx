import { Facebook, Instagram, TikTok, Music, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sábado</p>
            <p>11h às 22h</p>
            <p>Domingo</p>
            <p>12h às 20h</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Rua das Quitandeiras, 123</p>
            <p>São Paulo - SP</p>
            <p>Tel: (11) 99999-9999</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-orange">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-brand-orange">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-brand-orange">
                <TikTok size={24} />
              </a>
              <a href="#" className="hover:text-brand-orange">
                <Music size={24} />
              </a>
              <a href="#" className="hover:text-brand-orange">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Tapioca das Pretas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};