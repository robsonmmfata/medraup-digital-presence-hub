
import { Card, CardContent } from "./ui/card";

const Portfolio = () => {
  const cases = [
    {
      title: "E-commerce em 30 dias… ou quase",
      problem: "Uma agência prometeu um e-commerce completo em 30 dias. O cliente pagou 50% adiantado. O que recebeu? Apenas um template gratuito, sem loja, checkout ou integração.",
      solution: [
        "Backlog claro com funcionalidades prioritárias",
        "Critérios de aceite definidos para cada item", 
        "Roadmap com validações semanais",
        "Transparência no desenvolvimento"
      ]
    },
    {
      title: "Site bonito, mas só no desktop",
      problem: "Uma influenciadora contratou um freelancer com preço atrativo. O visual parecia ótimo no computador, mas o site quebrava no celular, não tinha SEO e não tinha painel de edição de conteúdo.",
      solution: [
        "Requisitos não funcionais bem definidos (responsividade, SEO, CMS)",
        "Validação contínua com o usuário",
        "Testes antes da entrega final"
      ]
    },
    {
      title: "Sistema médico que nunca existiu",
      problem: "Um investidor contratou uma equipe para um sistema de agendamento médico. Durante semanas, recebeu apenas vídeos simulando a interface, mas o sistema nunca existiu de verdade.",
      solution: [
        "MVP funcional testável, mesmo que simples",
        "Acompanhamento por sprints e reuniões de review",
        "Backlog visível com status atualizado"
      ]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cases de <span className="text-medraup-blue">Sucesso</span>
          </h2>
          <div className="w-20 h-1 bg-medraup-orange mx-auto mb-6"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4">
              Você sabia que muita gente cai em golpes ao contratar um site?
            </p>
            <p className="text-lg text-gray-600">
              Veja 3 casos reais de falsas entregas — e como técnicas de Product Owner (PO) poderiam ter evitado o prejuízo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {cases.map((caso, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-medraup-gray-light">
              <CardContent className="p-8">
                <div className="mb-6">
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Caso {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{caso.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-red-600 mb-3">⚠️ Situação:</h4>
                    <p className="text-gray-600 leading-relaxed bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      {caso.problem}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-medraup-blue mb-3">✅ Com um PO no projeto:</h4>
                  <div className="space-y-2 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    {caso.solution.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-medraup-blue to-medraup-blue-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">O que aprendemos com isso?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-blue-100">Nem todo desenvolvedor é gestor de produto</p>
              </div>
              <div className="text-center">
                <p className="text-blue-100">Nem todo projeto começa com código</p>
              </div>
              <div className="text-center">
                <p className="text-blue-100">Todo projeto precisa de visão, alinhamento e transparência</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-medraup-orange mb-6">
              É aí que entra o papel do Product Owner.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center bg-medraup-gray-light p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Evite prejuízos. Tenha um PO com você.</h3>
          <p className="text-lg text-gray-600 mb-6">
            ✨ Eu sou <strong>Loyanne Medrado</strong>, PO e fundadora da <strong>Medraup</strong>.<br/>
            Ajudo negócios a tirarem ideias do papel com entregas reais, funcionais e seguras.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-medraup-orange hover:bg-medraup-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            🔗 Me chama para conversar!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
