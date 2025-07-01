
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medraup-blue-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Loyanne M</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Transformando ideias em produtos digitais de sucesso através de metodologias ágeis e gestão estratégica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <span className="text-white font-bold">in</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <span className="text-white font-bold">ig</span>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <span className="text-white font-bold">wa</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#services" className="hover:text-white transition-colors">Product Owner</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gerência de Projetos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Criação de Sites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-blue-200">
              <p>contato@loyanne.com</p>
              <p>(11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {currentYear} Loyanne M. Todos os direitos reservados. | Desenvolvido com ❤️ para transformar ideias em realidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
