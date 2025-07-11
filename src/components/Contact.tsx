
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      toast({
        title: "Erro de validação",
        description: "Todos os campos são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Parâmetros ajustados para seu template Auto-Reply
      const templateParams = {
        from_name: formData.name,        // Nome da pessoa que está enviando
        email: formData.email,           // Email do usuário (To Email no template)
        reply_to: "loyannemedrado@hotmail.com",  // Seu email para resposta
        service_type: formData.service,  // Tipo de serviço selecionado
        message: formData.message,       // Mensagem do usuário
        to_name: "Loyanne Medrado"       // Seu nome
      };

      console.log('=== ENVIANDO EMAIL ===');
      console.log('Template ID:', 'template_b46cp63');
      console.log('Service ID:', 'service_k7s7fa9');
      console.log('Parâmetros:', templateParams);

      const result = await emailjs.send(
        'service_k7s7fa9',     // Seu Service ID
        'template_b46cp63',    // Seu Template ID
        templateParams,
        'oXDDNqrxAfRm2Vv92'   // Sua Public Key
      );

      console.log('=== RESULTADO DO ENVIO ===', result);

      if (result.status === 200) {
        toast({
          title: "Email enviado com sucesso!",
          description: "Sua mensagem foi enviada. Responderei em breve!",
        });
        
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          service: "",
          message: ""
        });
      }

    } catch (error) {
      console.error('=== ERRO AO ENVIAR EMAIL ===', error);
      toast({
        title: "Erro ao enviar email",
        description: "Tente novamente ou entre em contato pelo WhatsApp",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-medraup-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
            Vamos <span className="text-medraup-blue">Conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-medraup-orange mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Pronta para transformar suas ideias em realidade? Entre em contato e vamos construir algo incrível juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="border-0 bg-white shadow-lg h-full">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-medraup-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 text-base mb-1">Email</p>
                      <p className="text-gray-600 text-base break-all">loyannemedrado@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-medraup-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base mb-1">WhatsApp</p>
                      <p className="text-gray-600 text-base">(31) 98627-4984</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-medraup-blue to-medraup-blue-dark rounded-lg text-white">
                  <h4 className="font-bold mb-2 text-base">Resposta Rápida</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Respondo todas as mensagens em até 24 horas. Para urgências, use o WhatsApp!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 text-base"
                        placeholder="Seu nome completo"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 text-base"
                        placeholder="seu@email.com"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} disabled={isLoading}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="Product Owner">Product Owner</SelectItem>
                        <SelectItem value="Gerência de Projetos">Gerência de Projetos</SelectItem>
                        <SelectItem value="Criação de Sites/Plataformas">Criação de Sites/Plataformas</SelectItem>
                        <SelectItem value="Consultoria">Consultoria</SelectItem>
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-32 text-base resize-none"
                      placeholder="Conte-me mais sobre seu projeto e como posso ajudar..."
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-medraup-blue hover:bg-medraup-blue-dark text-white h-14 text-lg font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
