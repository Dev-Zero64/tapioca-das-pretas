import { useState } from "react";
import {
  IconCookie,
  IconCake,
  IconLeaf,
  IconBottle,
  IconBuildingStore,
  IconX,
} from "@tabler/icons-react";

const menuCategories = [
  {
    category: "Tapiocas",
    icon: <IconCookie className="text-brand-orange" size={32} />,
    items: [
      {
        name: "Beyoncé",
        description:
          "Frango artesanal desfiado, requeijão cremoso, pimenta biquinho e uma pitadinha de orégano e manjericão.",
        price: 16.0,
        tags: ["Especiais"],
        image:
          "https://res.cloudinary.com/vuca-solution/image/upload/w_480,h_360,c_fit,q_auto,fl_lossy/v1695417763/storage.vucasolution.com.br/tapiocadaspretas/arqs/produtos/etjhzke0rwb1r8iox1yv.jpg",
      },
      {
        name: "Sheron Menezes",
        description:
          "Queijo muçarela, carne seca artesanal desfiada diferenciada é claro e tomate cereja. É demais, é muito boa",
        price: 28.0,
        tags: ["Clássicas"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202404292123_1K8G_i.jpg",
      },
      {
        name: "Gloria Maria",
        description:
          "Tapioca tradicional na manteiguinha de leite. O biju que amamos! Tapioca leve e massa fininha",
        price: 14.0,
        tags: ["Classicas"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202003241142_GH2L_1.jpg",
      },
      {
        name: "Tais Araujo",
        description:
          "Queijo muçarela, presunto, leve pitada de orégano. A tradicional que é saborosa",
        price: 19.0,
        tags: ["Classicas"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202206161902_74CE_i.jpg",
      },
      {
        name: "Das Pretas",
        description:
          "Queijo muçarela, cebola picadinha, carne seca artesanal desfiada diferenciada, cheddar, requeijão e tomate cereja. À Moda da casa.",
        price: 33.0,
        tags: ["Especiais"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202003241145_Eok5_i.jpg",
      },
      {
        name: "Oprah Winfrey",
        description:
          "Carne seca artesanal desfiada diferenciada, requeijão cremoso, mix de folhas (alface e rúcula) e molho especial maionese verde. Combinação que nunca erra. Sugerimos a goma rosa.",
        price: 27.0,
        tags: ["Especiais"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202501011758_P0MW_i.jpg",
      },
      {
        name: "Albanisa Maximiano",
        description:
          "Queijo muçarela, bacon, carne seca artesanal desfiada diferenciada e banana fresca. Combinação mais que perfeita.",
        price: 35.0,
        tags: ["Especiais"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202404292131_C3U6_i.jpg",
      },
      {
        name: "Silvia Nascimento",
        description: "Coco e leite condensando. Tradicionalmente deliciosa.",
        price: 19.0,
        tags: ["Sobremesa de Tapioca"],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202404292154_OL0E_i.jpg",
      },
    ],
  },
  {
    category: "Cuscuz",
    icon: <IconCake className="text-brand-terra" size={32} />,
    items: [
      {
        name: "Marta",
        description: "Cuscuz de milho, carne seca, muçarela, ovos, manteiga.",
        price: 26.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202501011821_S5UL_i.jpg",
      },
      {
        name: "Melania Luz",
        description: "Cuscuz de milho, com ovos, coalho e manteiga.",
        price: 18.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202309221857_C232_i.jpg",
      },
      {
        name: "Rebeca Andrade",
        description: "Cuscuz tradicional de milho e manteiga.",
        price: 14.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202309221857_80E8_i.jpg",
      },
    ],
  },
  {
    category: "Bebidas",
    icon: <IconBottle className="text-brand-terra" size={32} />,
    items: [
      {
        name: "Água Mineral",
        description: "500ml",
        price: 5.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202309121810_DVGS_i.jpg",
      },
      {
        name: "Coca Cola",
        description:
          "A Coca-Cola regular Lata 350ml proporciona um sabor inigualável! Preparado a partir de água gaseificada, açúcar, extrato de noz de cola e cafeína, é uma ótima opção para refrescar!",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202306061709_337A_i.jpg",
      },
      {
        name: "Suco de Laranja",
        description:
          "Só o caldo da laranja 500 ml, sem adição de água e açúcar. Nota: O sabor do suco vai depender de como está a safra da laranja, se a safra estrá mais azeda ou mais doce.",
        price: 10.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202109122029_BC1L_i.jpg",
      },
      {
        name: "Guaraná Jesus",
        description:
          "Bebida mais vendida no maranhão, “o sabor de viver o Maranhão”. É docinho, com um toque de cravo e canela e, claro, tem um tom rosado inconfundível.",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202306061646_87HC_i.jpg",
      },
      {
        name: "Coca Cola Zero",
        description:
          "A Coca-Cola sem açucar Lata 350ml! Um convite para aqueles que amam desfrutar do sabor único de Coca-Cola, mas preferem opções sem açúcar: com o sabor de-li-ci-o-so que você já conhece.",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202306061711_325V_i.jpg",
      },
      {
        name: "Guaraná Mineiro",
        description:
          "Refrigerante Guaraná Mineiro o melhor de minas Com você em todos os momentos. lata 350ml.",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202306061720_45IA_i.jpg",
      },
    ],
  },
  {
    category: "Mercearia",
    icon: <IconBuildingStore className="text-brand-terra" size={32} />,
    items: [
      {
        name: "Cuscuzeira Modelo Quilombo",
        description:
          "Nosso modelo de cuscuzeira para você fazer suas preparações em casa!",
        price: 60.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202404292151_54LI_i.jpg",
      },
      {
        name: "Molho de Alho",
        description: "Saboroso molho de alho.",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202501011610_pxdio3zhw.png",
      },
      {
        name: "Molho de Pimenta",
        description: "Extraforte",
        price: 7.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202501011610_3hxbnuodj26.png",
      },
      {
        name: "Gominha de Tapioca Branca",
        description:
          "Fabricado pela Tapioca das Pretas de forma artesanal, livre de conservantes e zero glúten. 500 gr",
        price: 17.0,
        tags: [""],
        image:
          "https://static.ifood-static.com.br/image/upload/t_medium/pratos/01d1ccac-5a87-44fb-8984-6f9491753203/202501011610_n4xpc2fso3t.png",
      },
    ],
  },
];

const MenuItem = ({ name, description, price, tags, image, onClick }) => (
  <article
    className="group p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300 focus-within:ring-2 focus-within:ring-brand-orange cursor-pointer"
    tabIndex={0}
    onClick={onClick}
  >
    <div className="flex gap-4">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
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
        <div className="sm:w-32 flex-shrink-0">
          <p className="text-brand-terra font-bold text-lg sm:text-right">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  </article>
);

const Modal = ({ item, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <IconX size={24} />
          </button>
        </div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">{item.description}</p>
        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-brand-light text-brand-terra rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-brand-terra font-bold text-lg">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  </div>
);

export const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredCategories = menuCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Nosso Cardápio</h1>
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
                    <MenuItem
                      key={item.name}
                      {...item}
                      onClick={() => setSelectedItem(item)}
                    />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};
