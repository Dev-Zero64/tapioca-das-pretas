import { Facebook, Instagram, Music, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sábado: de 11h as 21h</p>
            <p>Domingos e Feriados: Fechado</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Rua CP10 com Avenida Milão Loteamento - Res. Celina Park</p>
            <p>Goiania - GO</p>
            <p>CEP: 74373-200</p>
            <p>Tel: (62) 99860-5278</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tapiocadaspretas" className="hover:text-brand-orange">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/tapiocadaspretas" className="hover:text-brand-orange">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/556298605278" className="hover:text-brand-orange">
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