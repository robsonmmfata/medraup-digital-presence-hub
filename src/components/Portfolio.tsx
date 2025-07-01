
import { Card, CardContent } from "./ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Plataforma E-commerce B2B",
      category: "Product Owner + Gerência",
      description: "Desenvolvimento de plataforma completa para vendas B2B com integração de sistemas e gestão de pedidos automatizada.",
      results: ["Aumento de 40% nas vendas", "Redução de 60% no tempo de processamento", "Satisfação do cliente: 95%"],
      tech: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Sistema de Gestão Hospitalar",
      category: "Consultoria + Gestão",
      description: "Consultoria e implementação de sistema de gestão para clínica médica com foco em otimização de processos.",
      results: ["Redução de 50% no tempo de atendimento", "Eliminação de filas de espera", "ROI de 200% em 6 meses"],
      tech: ["Vue.js", "Laravel", "MySQL", "Docker"]
    },
    {
      title: "Marketplace Digital",
      category: "Product Owner",
      description: "Criação de marketplace conectando fornecedores locais com consumidores finais através de plataforma mobile-first.",
      results: ["1000+ usuários ativos", "Taxa de conversão: 25%", "NPS: 8.5/10"],
      tech: ["React Native", "Firebase", "Stripe", "MongoDB"]
    },
    {
      title: "Portal Corporativo",
      category: "Desenvolvimento Web",
      description: "Site institucional com CMS personalizado e integração com ferramentas de marketing digital.",
      results: ["Aumento de 80% no tráfego", "Geração de 150+ leads/mês", "Melhoria de 70% no SEO"],
      tech: ["Next.js", "Strapi", "Tailwind", "Vercel"]
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projetos que transformaram ideias em resultados concretos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-medraup-gray-light">
              <CardContent className="p-8">
                <div className="mb-6">
                  <span className="inline-block bg-medraup-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-medraup-blue mb-3">Resultados Obtidos:</h4>
                  <div className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 flex-shrink-0"></div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-medraup-blue mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-medraup-blue text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Quer ver seu projeto aqui também?</p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-medraup-orange hover:bg-medraup-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
