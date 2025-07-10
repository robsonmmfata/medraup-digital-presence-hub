import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-medraup-blue/95 backdrop-blur-md shadow-lg' 
          : 'bg-medraup-blue shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/6b632b81-e47a-4865-8474-8c8bf273eac9.png" 
              alt="Medraup Logo" 
              className="h-30 lg:h-28 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-medraup-orange transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-medraup-orange hover:bg-medraup-orange/90 text-white"
            >
              Fale Comigo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-medraup-blue border-t shadow-lg animate-slide-down">
            <nav className="container-custom py-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-white hover:text-medraup-orange transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 bg-medraup-orange hover:bg-medraup-orange/90 text-white"
              >
                Fale Comigo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
