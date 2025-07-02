
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
    setIsLoading(true);
    
    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_type: formData.service,
        message: formData.message,
        to_email: 'loyannemedrado@hotmail.com'
      };

      console.log('Enviando email com dados:', templateParams);
      
      // Envio real com EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Você precisa configurar isso no EmailJS
        'YOUR_TEMPLATE_ID', // Você precisa configurar isso no EmailJS  
        templateParams,
        'YOUR_PUBLIC_KEY' // Você precisa configurar isso no EmailJS
      );
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve. Obrigada!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
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
    <section id="contact" className="section-padding bg-medraup-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vamos <span className="text-medraup-blue">Conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-medraup-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronta para transformar suas ideias em realidade? Entre em contato e vamos construir algo incrível juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-medraup-blue rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">loyannemedrado@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-medraup-orange rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">(31) 8627-4984</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-medraup-blue to-medraup-blue-dark rounded-lg text-white">
                  <h4 className="font-bold mb-2">Resposta Rápida</h4>
                  <p className="text-blue-100 text-sm">
                    Respondo todas as mensagens em até 24 horas. Para urgências, use o WhatsApp!
                  </p>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Para ativar o envio de emails:</strong><br/>
                    Configure suas chaves do EmailJS nas variáveis YOUR_SERVICE_ID, YOUR_TEMPLATE_ID e YOUR_PUBLIC_KEY no código.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="h-12"
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
                        className="h-12"
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
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="product-owner">Product Owner</SelectItem>
                        <SelectItem value="project-management">Gerência de Projetos</SelectItem>
                        <SelectItem value="web-development">Criação de Sites/Plataformas</SelectItem>
                        <SelectItem value="consulting">Consultoria</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
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
                      className="min-h-32"
                      placeholder="Conte-me mais sobre seu projeto e como posso ajudar..."
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-medraup-blue hover:bg-medraup-blue-dark text-white h-12 text-lg font-semibold"
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
