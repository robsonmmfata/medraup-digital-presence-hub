
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medraup-blue-dark text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Medraup</h3>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm sm:text-base">
              Transformando ideias em produtos digitais de sucesso através de metodologias ágeis e gestão estratégica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/loyannemedradoproductowner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/medraup?igsh=MWVuMnJsY2s3OTBoZA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a 
                href="https://wa.me/5531862749884" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-medraup-orange rounded-lg flex items-center justify-center hover:bg-medraup-orange/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-blue-200 text-sm sm:text-base">
              <li><a href="#services" className="hover:text-white transition-colors">Product Owner</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gerência de Projetos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Criação de Sites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-blue-200 text-sm sm:text-base">
              <p className="break-all">loyannemedrado@hotmail.com</p>
              <p>(31) 8627-4984</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
            © {currentYear} Medraup. Todos os direitos reservados. | Desenvolvido com ❤️ para transformar ideias em realidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
