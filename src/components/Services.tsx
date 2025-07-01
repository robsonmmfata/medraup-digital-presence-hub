
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
    <section id="services" className="section-padding bg-medraup-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-medraup-blue">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-medraup-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar suas ideias em produtos digitais de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-medraup-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-medraup-orange transition-colors duration-300">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-medraup-blue hover:bg-medraup-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
