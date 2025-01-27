import { useState } from "react";
import { IconCookie, IconCake, IconLeaf } from "@tabler/icons-react";

const menuCategories = [
  {
    category: "Tapiocas",
    icon: <IconCookie className="text-brand-orange" size={32} />,
    items: [
      {
        name: "Beyoncé",
        description: "Frango artesanal desfiado, requeijão cremoso, pimenta biquinho e uma pitadinha de orégano e manjericão.",
        price: 16.00,
        tags: ["Especiais"],
        image: "/images/tapioca-beyonce.jpg"
      },
      {
        name: "Sheron Menezes",
        description: "Queijo muçarela, carne seca artesanal desfiada e tomate cereja.",
        price: 28.00,
        tags: ["Clássicas"],
        image: "/images/tapioca-sheron.jpg"
      },
      {
        name: "Tapioca Marielle Franco",
        description: "Queijo, tomate e orégano",
        price: 20.00,
        tags: ["vegetariano"],
        image: "/images/tapioca-marielle.jpg"
      }
    ]
  },
  {
    category: "Cuscuz",
    icon: <IconCake className="text-brand-terra" size={32} />,
    items: [
      {
        name: "Cuscuz Laudelina de Campos",
        description: "Tradicional com ovo, queijo e manteiga",
        price: 18.00,
        tags: ["tradicional"],
        image: "/images/cuscuz-laundelina.jpg"
      },
      {
        name: "Cuscuz Tereza de Benguela",
        description: "Carne seca e queijo coalho",
        price: 25.00,
        tags: ["premium"],
        image: "/images/cuscuz-tereza.jpg"
      }
    ]
  }
];

const MenuItem = ({ name, description, price, tags, image }) => (
  <article 
    className="group p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300 focus-within:ring-2 focus-within:ring-brand-orange"
    tabIndex={0}
  >
    <div className="flex gap-4">
      {/* Container da imagem */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1 text-sm">{description}</p>
          {tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-brand-light text-brand-terra rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Preço */}
        <div className="sm:w-32 flex-shrink-0">
          <p className="text-brand-terra font-bold text-lg sm:text-right">
            {price.toLocaleString("pt-BR", { 
              style: "currency", 
              currency: "BRL",
              minimumFractionDigits: 2
            })}
          </p>
        </div>
      </div>
    </div>
  </article>
);

export const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = menuCategories
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.items.length > 0);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Nosso Cardápio
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Pesquisar pratos..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconLeaf 
              className="absolute right-4 top-3.5 text-gray-400" 
              size={24} 
            />
          </div>
        </header>

        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <IconLeaf className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-xl text-gray-600">Nenhum item encontrado</p>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <section 
                key={category.category}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.items.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
};