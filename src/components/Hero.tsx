
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-medraup-blue to-medraup-blue-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-medraup-orange"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme ideias em 
            <span className="text-medraup-orange block mt-2">produtos reais</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Product Owner especializada em gestão de projetos e criação de plataformas digitais que geram resultados
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-medraup-orange hover:bg-medraup-orange/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Fale Comigo Agora
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-medraup-orange text-medraup-orange hover:bg-medraup-orange hover:text-white px-8 py-4 text-lg font-semibold"
            >
              Conheça a Medraup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
