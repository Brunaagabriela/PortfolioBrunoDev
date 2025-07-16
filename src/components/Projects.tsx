import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
  {
  title: "entend.me",
  description:
    "Aplicação web criada como uma brincadeira entre eu e meu namorado para ajudar na comunicação durante fases de TPM ou oscilações emocionais. O app permite registrar percepções diárias e identificar padrões de humor — e acabou virando um projeto que adorei desenvolver!",
  image: "/api/placeholder/400/250",
  technologies: ["JavaScript", "Firebase", "UX", "Design Emocional"],
  github: "https://github.com/Brunaagabriela/entend-me",
  demo: "https://entend-me.vercel.app/",
  featured: true
},
  {
    title: "verificar-pipeline-bitrix24",
    description:
      "Scripts em Python para consulta de negócios e negócios recorrentes por pipeline no Bitrix24, via API REST. Útil para análises comerciais e integrações personalizadas.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "REST API", "Bitrix24"],
    github: "https://github.com/Brunaagabriela/verificar-pipeline-bitrix24",
    demo: "#",
    featured: true
  },
  {
    title: "Projeto BR24 - Mentoria Dev",
    description:
      "Projeto criado durante mentoria na BR24, focado em desenvolvimento web com HTML e boas práticas. Exercícios práticos e aprendizado em equipe.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "Colaboração"],
    github: "https://github.com/Brunaagabriela/Projeto-Br24",
    demo: "#",
    featured: false
  },
  {
    title: "Pokedex",
    description:
      "Projeto de uma Pokédex estática, com estrutura HTML e estilização personalizada. Foco em organização de conteúdo e responsividade.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Brunaagabriela/pokedex",
    demo: "#",
    featured: false
  },
];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi para praticar e demonstrar minhas habilidades em front-end
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-all duration-500 overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  ⭐ Projeto Destacado
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-muted/40 flex items-center justify-center">
                    <Eye className="h-12 w-12 text-primary/60" />
                    <span className="ml-2 text-muted-foreground">Preview em breve</span>
                  </div>
                  
                  {/* Overlay com botões */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Brunaagabriela" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver Todos os Projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;