
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medraup-blue-dark text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Medraup</h3>
            <p className="text-blue-200 mb-6 leading-relaxed text-base sm:text-lg">
              Transformando ideias em produtos digitais de sucesso através de metodologias ágeis e gestão estratégica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/loyannemedradoproductowner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/medraup?igsh=MWVuMnJsY2s3OTBoZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://wa.me/5531986274984" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-blue-200 text-base">
              <li><a href="#services" className="hover:text-white transition-colors">Product Owner</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gerência de Projetos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Criação de Sites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-blue-200 text-base">
              <p className="break-all">loyannemedrado@hotmail.com</p>
              <p>(31) 98627-4984</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-8 text-center">
          <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
            © {currentYear} Medraup. Todos os direitos reservados. | Desenvolvido com ❤️ para transformar ideias em realidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
