
export const Features = () => {
    return (
        <section className="py-16 bg-brand-light">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sabor Autêntico",
                content:
                  "Receitas tradicionais com ingredientes frescos e selecionados",
                icon: "🌽",
              },
              {
                title: "Cultura Viva",
                content: "Cada prato homenageia uma mulher negra importante",
                icon: "✊🏾",
              },
              {
                title: "Delivery",
                content: "Peça pelo iFood ou WhatsApp e receba em casa",
                icon: "🛵",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-terra mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}