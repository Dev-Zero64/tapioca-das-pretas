export const History = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa História
          </h1>
          <p className="text-xl text-gray-600">
            Resgatando sabores e memórias através da culinária afro-brasileira
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              A Tapioca das Pretas nasceu do sonho de valorizar a cultura afro-brasileira
              através da gastronomia. Nossa jornada começou em 2020, quando decidimos
              transformar receitas tradicionais em homenagens a mulheres negras que
              fizeram história no Brasil.
            </p>

            <p className="text-gray-600 mb-6">
              Cada item do nosso cardápio carrega o nome de uma mulher negra importante,
              conectando o sabor da nossa comida com a força e a resistência dessas
              mulheres que tanto contribuíram para nossa sociedade.
            </p>

            <p className="text-gray-600 mb-6">
              Nossa missão é oferecer não apenas comida de qualidade, mas também
              proporcionar uma experiência cultural, educativa e saborosa para todos
              que nos visitam.
            </p>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brand-orange mb-4">
                Nossos Valores
              </h2>
              <ul className="list-none space-y-4">
                <li className="text-gray-700">Valorização da cultura afro-brasileira</li>
                <li className="text-gray-700">Qualidade e autenticidade nos ingredientes</li>
                <li className="text-gray-700">Respeito à tradição e à ancestralidade</li>
                <li className="text-gray-700">Compromisso com a representatividade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};