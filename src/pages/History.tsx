import { motion } from "framer-motion";
import {
  Clock,
  Utensils,
  HeartHandshake,
  Trophy,
  Globe,
  Star,
  HistoryIcon,
  Users,
  Tv,
} from "lucide-react";

// Timeline atualizada com ícones do Lucide
const timeline = [
  {
    year: "2015",
    title: "Fundação",
    description: "Nascimento de um sonho em um carrinho de rua",
    icon: <HistoryIcon className="text-brand-orange w-6 h-6" />,
  },
  {
    year: "2018",
    title: "Aparição no programa Luciano Huck",
    description: "Visibilidade nacional e aumento significativo nas vendas",
    icon: <Tv className="text-brand-terra w-6 h-6" />,
  },
  {
    year: "2022",
    title: "Reconhecimento",
    description: "Premiação melhor comida de rua de Goiânia",
    icon: <Trophy className="text-brand-orange w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Expansão",
    description: "Abertura de nova unidade e início do serviço de delivery",
    icon: <HeartHandshake className="text-brand-terra w-6 h-6" />,
  },
];

// Valores com ícones genéricos
const values = [
  {
    title: "Valorização Cultural",
    description: "Preservação da herança afro-brasileira",
    icon: <Globe className="text-brand-orange w-8 h-8" />,
  },
  {
    title: "Qualidade",
    description: "Ingredientes selecionados e frescos",
    icon: <Star className="text-brand-orange w-8 h-8" />,
  },
  {
    title: "Ancestralidade",
    description: "Resgate de técnicas tradicionais",
    icon: <Clock className="text-brand-orange w-8 h-8" />,
  },
  {
    title: "Representatividade",
    description: "Visibilidade para mulheres negras",
    icon: <Users className="text-brand-orange w-8 h-8" />,
  },
];

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
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
                Conheça a história por trás da “Tapioca das Pretas”, a mais
                famosa tapiocaria de Goiás
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                As irmãs que conquistaram o público através das tapiocas
                batizadas com nomes de mulheres negras influentes
              </h3>
              <p className="text-gray-600 mb-6">
                A história da “Tapioca das Pretas” explica tamanho sucesso da
                tapiocaria mais famosa de Goiás; vinda de uma pequena cidade do
                interior de Tocantins tentar a sorte na capital de Goiás.
                Enfrentaram o racismo, preconceito e as dificuldades de abrir um
                novo negócio. As irmãs Preta Neiva e Preta Josi, nome artístico
                adotado por elas, são sócias e tocam juntas o empreendimento
                desde 2015. Participaram do programa de TV “Caldeirão do Huck”,
                da Rede Globo, em novembro de 2018 e ganharam grande
                visibilidade desde então.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                O que as levou a sair de Tocantins para Goiás?
              </h3>

              <p className="text-gray-600 mb-6">
                Bom essa é uma história longa, temos motivos diferentes. Nossa
                vida no Tocantins era bastante simples, crescemos juntas, nossos
                pais são lavradores, vivíamos da roça. Nós duas sempre fomos
                vendedoras – vendíamos coisas para terceiros, colocávamos a
                bacia na cabeça e íamos trabalhar. A Josi foi a primeira a se
                aventurar. Assim que terminou ensino médio, tomou a decisão de
                ir para Goiânia, porque lá no interior as pessoas falavam muita
                fantasia da capital de Goiás. Para nós, lá era a melhor capital
                do mundo! Então ao completar 18 anos, em 2011, ela decidiu que
                se mudaria para Goiana para estudar, ter uma profissão e dar uma
                vida melhor aos pais. O sonho é reformar a casa deles! A Neiva
                era casada, trabalhava, tinha uma filha, porém as coisas não
                seguiram como ela planejou; se separou, e a convite da irmã,
                deixou tudo para trás e também foi para o estado de Goiás.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual a relação de vocês com a tapioca?
              </h3>

              <p className="text-gray-600 mb-6">
                {" "}
                Desde criança temos contato com “beiju” era nosso alimento
                primário, já que nossos pais plantavam mandioca.
              </p>
              <p className="text-gray-600 mb-6">
                Beiju é a forma que a “tapioca” é chamada na cidade natal das
                irmãs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual a maior dificuldade enfrentaram ao empreender?
              </h3>

              <p className="text-gray-600 mb-6">
                Nós empreendemos no momento de necessidade. Quando a Neiva
                chegou em Goiânia encontrou a Josi desempregada e sem receber o
                acerto trabalhista; lembro que não tínhamos dinheiro, começamos
                com R$50 e com ajuda de nossa família. Começar não foi nada
                fácil! O financeiro dificultou muito. Consolidar nosso
                empreendimento foi uma tarefa complicada, cada dia uma
                dificuldade diferente! Encontrar nosso espaço aqui foi muito
                difícil; fazer os clientes confiarem no nosso trabalho,
                desafiador. Aí você imagina: 30 dias empurrando um carrinho e,
                no fim do mês, retirar R$50 cada uma para comer, pagar aluguel,
                água, luz… Chegava a ser assustador! Mas não desistimos,
                persistimos até hoje (risos).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual critério utilizaram para escolher o nome que batizariam
                cada tapioca? Por que mulheres pretas?{" "}
              </h3>

              <p className="text-gray-600 mb-6">
                Quando estávamos na parte de criação da empresa discutimos entre
                os nomes da empresa, os quais seriam: Tapioca Tocantinense ou
                Tapioca das Pretas; fizemos uma votação entre a família e
                Tapioca das Pretas venceu. Combinava mais com nós duas, pela
                história de vida e dificuldades que enfrentamos desde pequenas;
                então, com esse nome, teríamos um escudo de força, de
                empoderamento, usaríamos esse nome como arma de luta diária e
                para enaltecer as nossas origens. Como a Josi fazia faculdade,
                toda empolgada ela compartilhou com colegas e professora sua
                ideia de empreender; nesse meio tempo essa professora sugeriu
                que batizassemos a tapioca com nomes de mulheres negras – já que
                o nome tinha uma referência direta a nós mulheres negras.
                Gostamos da ideia e fomos pesquisar nomes de mulheres de
                referência e inspiração para nós, para batizar as tapiocas com,
                inclusive nossas genitoras. A escolha de cada tapioca ao
                respectivos nomes foram aleatórios, por exemplo: Beyoncé =
                Frango com Requeijão. Começamos com cardápio com nomes de quase
                40 mulheres, queríamos homenagear todo mundo! (risos) Hoje nosso
                cardápio leva com inspiração nomes como: Elza Soares, Margareth
                Menezes, Taís Araújo, Sheron Menezes, Dandara dos Palmares,
                Albaniza de Sousa (Mãe Neiva), Angelina Luiz (mãe Josi),
                Marielle Franco, Zezé Mota, Viola Davis, Michele Obama, Iza,
                Karol Konká, Glória Maria, Alcione… Tem até lista de espera!
                (risos)
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual o segredo do sucesso do “Tapioca das Pretas”?{" "}
              </h3>

              <p className="text-gray-600 mb-6">
                Costumamos dizer que Deus sempre nos abençoou e a forma nós
                trabalhamos fez todo sucesso. A gente trabalha levando alegria
                para pessoas! Além de vendermos as tapiocas, levamos alegria
                através de nosso produto; o cliente tem uma experiência com a
                gente, fazemos a diferença, mesmo que pequena, no dia dele.
                Alegria é o nosso nome! Nós fazíamos um auê quando tínhamos o
                carrinho: andávamos nas ruas empurrando ele e não tinha um ser
                vivo que a gente não mexia! Quem olhava a gente nessa alegria
                achava que estávamos derramando dinheiro. (risos)
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                O que mudou após a aparição no Caldeirão do Huck?
              </h3>

              <p className="text-gray-600 mb-6">
                Depois que participamos do Caldeirão do Huck nosso
                empreendimento estava, por exemplo, em 2% e passou para 99%,
                mudou tudo! Vieram mais pessoas, mais pessoas conheceram nosso
                trabalho. Nas redes sociais a procura foi muito grande… A gente
                não conseguia atender todo mundo! (…) A experiência foi muito
                boa. Ganhamos muito aprendizado! Enxugamos até o cardápio (que
                continha cerca de 40 sabores).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual a dica que vocês podem dar para outros afroempreendedores?
              </h3>

              <p className="text-gray-600 mb-6">
                Empreender não é fácil! Se a gente falar que é fácil, estaremos
                mentindo. Ainda mais quando se diz que é preto. A gente
                enfrentou muita coisa. Enfrentamos preconceito, atos racistas… A
                gente pegou, colocou no bolso e seguiu, continuou o nosso
                empreendimento. Para mulher parece que as coisas são mais
                complicadas ainda. Além do racismo, ainda sofremos muito abuso
                vindo dos homens, clientes que acham que tem direito de dar em
                cima, falar coisas desconfortáveis. Você acaba só podendo
                “sorrir”, pois se responder para ele te respeitar, perde o
                cliente. Não é tarefa fácil! Foi através da persistência que
                chegamos até aqui. Não é fácil nos derrubar não, viu!? (…) A
                persistência é essencial, a cada queda aprendemos uma coisa
                nova. Através dos erros aprendemos também. Não desista por nada,
                nem ninguém, dos seus sonhos.{" "}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qual a sensação de ser referência no ramo de Tapioca em Goiás?
              </h3>

              <p className="text-gray-600 mb-6">
                Ser referência no estado de Goiás, ter uma das tapiocas mais
                famosas do Brasil, é uma honra! Ser reconhecida pelo seu
                trabalho, seu esforço. A gente quer levar alegria e comida boa
                para as pessoas, mostrar nosso trabalho e capacidade. É uma
                honra!
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pretendem expandir para outras cidades/estados?
              </h3>

              <p className="text-gray-600 mb-6">
                Nossa intenção é crescer em Goiás primeiro. Mas se for da
                vontade de Deus, queremos levar para outros lugares, sim! O
                pessoal de fora cobra muito. Recebemos sempre mensagem do
                pessoal de São Paulo, Rio de Janeiro e Minas Gerais, dizendo que
                tem vontade de experimentar. Nossa intenção, agora, é abrir uma
                loja aqui e fazer com que todos de Goiás tenham a oportunidade
                de experimentar a Tapioca das Pretas! Finalizamos nossa
                entrevista com uma dica das irmãs empreendedoras: “A gente quer
                ver os pretos dominando o mercado. Quem estiver pensando em
                empreender, bote a ideia no papel e arrisca! Não tenha medo, ele
                impede muitas coisas.{" "}
              </p>

              <h3 className="text-xl font-semibold text-brand-terra mb-4">
                Lugar de preto é onde ele quiser estar.”
              </h3>
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
                      <div className="text-brand-terra text-3xl">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-orange">
                          {item.year}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">
                          {item.title}
                        </h3>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
