
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sobre a <span className="text-medraup-blue">Loyanne M</span>
              </h2>
              <div className="w-20 h-1 bg-medraup-orange mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              A Loyanne M nasceu da paixão por transformar ideias complexas em soluções digitais reais e funcionais. Com expertise em Product Owner e gestão de projetos, ajudo empresas a materializar suas visões em produtos que realmente fazem a diferença no mercado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-medraup-gray-light p-6 rounded-lg">
                <h3 className="font-semibold text-medraup-blue mb-2">Nossa Missão</h3>
                <p className="text-gray-600">Transformar ideias em produtos digitais de sucesso através de metodologias ágeis e gestão estratégica.</p>
              </div>
              
              <div className="bg-medraup-gray-light p-6 rounded-lg">
                <h3 className="font-semibold text-medraup-blue mb-2">Nossa Visão</h3>
                <p className="text-gray-600">Ser referência em Product Owner e gestão de projetos, impulsionando o crescimento dos nossos clientes.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-medraup-blue to-medraup-blue-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Loyanne - Fundadora</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Product Owner experiente com foco em metodologias ágeis e gestão estratégica de projetos. Especialista em transformar requisitos complexos em soluções práticas e eficientes.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3"></div>
                  Certificações em metodologias ágeis
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3"></div>
                  +5 anos de experiência em gestão de projetos
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3"></div>
                  Especialista em criação de plataformas digitais
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
