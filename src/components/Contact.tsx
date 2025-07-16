import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bruna.gabriela.pereira98@gmail.com",
      href: "mailto:bruna.gabriela.pereira98@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(48) 988592357",
      href: "tel:+5548988592357"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Florianopolis - SC",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Brunagabrielaa",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/brunagabriela23",
      color: "hover:text-tech-blue"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:bruna.gabriela.pereira98@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e colaborações. 
            Entre em contato comigo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card hover:shadow-soft transition-all duration-300">
                    <div className="p-3 rounded-lg bg-gradient-soft">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.href === "#" ? (
                        <p className="text-muted-foreground">{item.value}</p>
                      ) : (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`rounded-full ${social.color} transition-colors`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Status */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Disponível para Oportunidades
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estou buscando oportunidades de estágio ou posições júnior em desenvolvimento front-end.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto *
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Assunto da mensagem"
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva sua mensagem aqui..."
                    className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full shadow-soft hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;