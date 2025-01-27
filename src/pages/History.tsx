import { motion } from "framer-motion";
import { 
  Clock,
  Utensils,
  HeartHandshake,
  Trophy,
  Globe,
  Star,
  HistoryIcon,
  Users
} from "lucide-react";

// Timeline atualizada com ícones do Lucide
const timeline = [
  {
    year: "2015",
    title: "Fundação",
    description: "Nascimento do projeto em uma pequena cozinha comunitária",
    icon: <HistoryIcon className="text-brand-orange w-6 h-6" />
  },
  {
    year: "2018",
    title: "Primeiro Espaço Físico",
    description: "Inauguração do nosso primeiro ponto fixo no centro da cidade",
    icon: <Utensils className="text-brand-terra w-6 h-6" />
  },
  {
    year: "2022",
    title: "Reconhecimento",
    description: "Premiação como melhor projeto cultural gastronômico do estado",
    icon: <Trophy className="text-brand-orange w-6 h-6" />
  },
  {
    year: "2023",
    title: "Expansão",
    description: "Abertura de nova unidade e início do serviço de delivery",
    icon: <HeartHandshake className="text-brand-terra w-6 h-6" />
  }
];

// Valores com ícones genéricos
const values = [
  {
    title: "Valorização Cultural",
    description: "Preservação da herança afro-brasileira",
    icon: <Globe className="text-brand-orange w-8 h-8" />
  },
  {
    title: "Qualidade",
    description: "Ingredientes selecionados e frescos",
    icon: <Star className="text-brand-orange w-8 h-8" />
  },
  {
    title: "Ancestralidade",
    description: "Resgate de técnicas tradicionais",
    icon: <Clock className="text-brand-orange w-8 h-8" />
  },
  {
    title: "Representatividade",
    description: "Visibilidade para mulheres negras",
    icon: <Users className="text-brand-orange w-8 h-8" />
  }
];

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const History = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nossa Jornada
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Conectando tradição, sabor e empoderamento através da gastronomia
          </motion.p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-brand-terra mb-6">
                Nascimento da Tapioca das Pretas
              </h2>
              <p className="text-gray-600 mb-6">
                Em 2020, transformamos uma paixão ancestral em negócio social. Nossa cozinha
                tornou-se palco para contar histórias esquecidas através de sabores autênticos.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Filosofia Gastronômica
              </h3>
              <p className="text-gray-600 mb-6">
                Cada receita é uma pesquisa histórica, combinando ingredientes tradicionais
                com técnicas contemporâneas para criar experiências sensoriais únicas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:pl-12"
          >
            <div className="sticky top-24">
              <div className="space-y-8 pl-8 border-l-2 border-brand-orange">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className="relative"
                  >
                    <div className="absolute w-4 h-4 bg-brand-orange rounded-full -left-[25px] top-6" />
                    <div className="flex gap-4 items-start">
                      <div className="text-brand-terra text-3xl">{item.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-brand-orange">{item.year}</p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-center text-brand-orange mb-12">
            Pilares Fundamentais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInVariants}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};