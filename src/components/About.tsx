import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Git", "Figma", "Responsive Design"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento Front-end",
      description: "Criação de interfaces modernas e responsivas com foco na experiência do usuário"
    },
    // {
    //   icon: Palette,
    //   title: "Design UI/UX",
    //   description: "Paixão por criar designs intuitivos e esteticamente agradáveis"
    // },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização de aplicações para melhor performance e acessibilidade"
    },
    {
      icon: Heart,
      title: "Aprendizado Contínuo",
      description: "Sempre buscando aprender novas tecnologias e melhores práticas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou estudante de Engenharia de Software e apaixonada por desenvolvimento front-end. Após anos atuando na área administrativa, decidi seguir meu verdadeiro interesse: criar interfaces que unem design, funcionalidade e acessibilidade.
              Hoje, me especializo em React e TypeScript, sempre buscando as melhores práticas para desenvolver aplicações modernas e intuitivas. Acredito que a tecnologia tem o poder de transformar realidades  e quero contribuir para essa transformação com cada linha de código.


            </p>
            
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente, estou me especializando em React e TypeScript, sempre buscando as melhores práticas para criar aplicações modernas, acessíveis e performáticas. Acredito que a tecnologia pode transformar vidas e estou animada para fazer parte dessa transformação.
            </p> */}

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Tecnologias & Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-primary transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;