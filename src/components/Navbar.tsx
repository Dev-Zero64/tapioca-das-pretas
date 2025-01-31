import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-orange">
              Tapioca das Pretas
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-orange">
              Início
            </Link>
            <Link
              to="/cardapio"
              className="text-gray-700 hover:text-brand-orange"
            >
              Cardápio
            </Link>
            <Link
              to="/nossa-historia"
              className="text-gray-700 hover:text-brand-orange"
            >
              Nossa História
            </Link>
            <Link
              to="/contato"
              className="text-gray-700 hover:text-brand-orange"
            >
              Contato
            </Link>
            <Link
              to="/midias"
              className="text-gray-700 hover:text-brand-orange"
            >
              Mídias
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-orange focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-brand-orange"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              to="/cardapio"
              className="block px-3 py-2 text-gray-700 hover:text-brand-orange"
              onClick={toggleMenu}
            >
              Cardápio
            </Link>
            <Link
              to="/nossa-historia"
              className="block px-3 py-2 text-gray-700 hover:text-brand-orange"
              onClick={toggleMenu}
            >
              Nossa História
            </Link>
            <Link
              to="/contato"
              className="block px-3 py-2 text-gray-700 hover:text-brand-orange"
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <Link
              to="/midias"
              className="block px-3 py-2 text-gray-700 hover:text-brand-orange"
              onClick={toggleMenu}
            >
              Mídias
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
