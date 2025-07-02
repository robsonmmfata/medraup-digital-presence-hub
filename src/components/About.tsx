
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                👩‍💻 <span className="text-medraup-blue">Sobre mim</span>
              </h2>
              <div className="w-20 h-1 bg-medraup-orange mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou <strong>Loyanne Medrado</strong>, fundadora da <strong>Medraup</strong>, empresa especializada em gestão de produtos e projetos digitais.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-medraup-blue">Atuo com:</h3>
              <div className="space-y-3">
                <div className="flex items-start text-gray-600">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Construção e validação de sites e plataformas</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Tradução de ideias para requisitos técnicos</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Acompanhamento de times de desenvolvimento</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <div className="w-2 h-2 bg-medraup-orange rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Entregas reais com foco em valor de negócio</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-medraup-blue to-medraup-blue-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Loyanne Medrado - Fundadora</h3>
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
