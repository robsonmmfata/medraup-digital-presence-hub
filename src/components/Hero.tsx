
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-medraup-blue to-medraup-blue-dark overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-medraup-orange"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Transforme ideias em 
            <span className="text-medraup-orange block mt-1 sm:mt-2">produtos reais</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed px-4">
            Product Owner especializada em gestão de projetos e criação de plataformas digitais que geram resultados
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-medraup-orange hover:bg-medraup-orange/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Fale Comigo Agora
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto border-medraup-orange text-medraup-orange hover:bg-medraup-orange hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
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
