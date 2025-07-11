
import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      title: "Product Owner",
      description: "Gestão completa do produto desde a concepção até o lançamento, garantindo que sua visão se torne realidade.",
      features: ["Definição de requisitos", "Backlog do produto", "Priorização de funcionalidades", "Acompanhamento de métricas"]
    },
    {
      title: "Gerência de Projetos",
      description: "Coordenação eficiente de recursos, prazos e equipes para garantir o sucesso do seu projeto.",
      features: ["Metodologias ágeis", "Controle de cronograma", "Gestão de stakeholders", "Relatórios de progresso"]
    },
    {
      title: "Criação de Sites/Plataformas",
      description: "Desenvolvimento de soluções digitais personalizadas que atendem às suas necessidades específicas.",
      features: ["Sites responsivos", "Plataformas web", "UX/UI strategy", "Integração de sistemas"]
    },
    {
      title: "Consultoria",
      description: "Análise estratégica e recomendações para otimizar seus processos e produtos digitais.",
      features: ["Análise de processos", "Estratégia digital", "Otimização de workflow", "Transformação digital"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-medraup-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-medraup-blue">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-medraup-orange mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Soluções completas para transformar suas ideias em produtos digitais de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-medraup-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-medraup-orange transition-colors duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-medraup-blue hover:bg-medraup-blue-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105"
          >
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
