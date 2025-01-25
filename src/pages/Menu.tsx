export const Menu = () => {
  const menuItems = [
    {
      category: "Tapiocas",
      items: [
        {
          name: "Tapioca Carolina Maria de Jesus",
          description: "Carne seca, queijo coalho e manteiga de garrafa",
          price: "R$ 25,00"
        },
        {
          name: "Tapioca Lélia Gonzalez",
          description: "Frango desfiado, queijo e oregano",
          price: "R$ 23,00"
        },
        {
          name: "Tapioca Marielle Franco",
          description: "Queijo, tomate e orégano",
          price: "R$ 20,00"
        }
      ]
    },
    {
      category: "Cuscuz",
      items: [
        {
          name: "Cuscuz Laudelina de Campos",
          description: "Cuscuz tradicional com ovo, queijo e manteiga",
          price: "R$ 18,00"
        },
        {
          name: "Cuscuz Tereza de Benguela",
          description: "Cuscuz com carne seca e queijo coalho",
          price: "R$ 25,00"
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nosso Cardápio
        </h1>
        
        <div className="space-y-12">
          {menuItems.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-orange mb-6">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-brand-terra font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};