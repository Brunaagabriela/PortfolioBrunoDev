import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const Experience = () => {
 const education = [
  {
    title: "Engenharia de Software",
    institution: "Uninter",
    period: "2024 - 2028",
    status: "Em andamento",
    description: "Focando em desenvolvimento de software, estruturas de dados, algoritmos e engenharia de requisitos.",
    type: "education"
  },
  {
    title: "ReactJS na prática (Hooks, Router, API, Projetos e mais)",
    institution: "Udemy",
    period: "2024",
    status: "Concluído",
    description: "Especialização em React, TypeScript e desenvolvimento responsivo com foco em melhores práticas e reatividade.",
    type: "course"
  },
  {
    title: "JavaScript: Manipulação da DOM",
    institution: "Udemy",
    period: "2025",
    status: "Concluído",
    description: "Curso voltado à manipulação prática da DOM com JavaScript puro, sem foco na linguagem em si.",
    type: "course"
  },
  {
    title: "Imersão DevOps",
    institution: "DIO",
    period: "Jul 2025",
    status: "Concluído",
    description: "Introdução ao ecossistema DevOps com foco em CI/CD, Docker, Kubernetes e boas práticas de versionamento e automação.",
    type: "course"
  },
  {
    title: "Dominando BDD da Teoria à Prática",
    institution: "Udemy",
    period: "2024",
    status: "Concluído",
    description: "Curso completo de Behavior-Driven Development com foco em testes automatizados, Gherkin, Cucumber e integração com frameworks.",
    type: "course"
  },
  {
    title: "Automação de Testes com Robot Framework",
    institution: "Udemy",
    period: "2024",
    status: "Concluído",
    description: "Automação de testes usando Robot Framework, abordando testes end-to-end, execução com Selenium e boas práticas de QA.",
    type: "course"
  },
  {
    title: "Curso de Python - Módulo Básico",
    institution: "Curso em Vídeo (Prof. Guanabara)",
    period: "2024",
    status: "Concluído",
    description: "Introdução à lógica de programação com Python, manipulação de dados, estruturas de controle e funções.",
    type: "course"
  }
];

  const experiences = [
    {
      title: "Projetos Pessoais",
      company: "Desenvolvimento Independente",
      period: "2023 - Presente",
      description: "Desenvolvimento de aplicações web usando React, TypeScript e Tailwind CSS. Foco em UI/UX e responsividade.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
      type: "project"
    },
    {
      title: "Analista de Suporte Técnico",
      company: "BR24",
      period: "2023 - 2025",
      description: "Atuação no suporte técnico de sistemas SaaS (Bitrix24), com foco em análise de problemas, documentação de processos e apoio à automação de fluxos. Colaboração próxima com o time de desenvolvimento em testes e melhorias de interface.",
      skills: ["Bitrix24", "APIs", "JavaScript", "Git", "HTML", "CSS"],
      type: "full-time"
    }

  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "education": return GraduationCap;
      case "course": return BookOpen;
      case "project": return Award;
      case "internship": return Calendar;
      default: return BookOpen;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "education": return "bg-gradient-primary";
      case "course": return "bg-gradient-tech";
      case "project": return "bg-primary/10";
      case "internship": return "bg-primary";
      default: return "bg-primary/10";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experiência & Educação</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Educação</h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className={`p-3 rounded-lg ${getIconBg(item.type)} flex-shrink-0 w-fit mx-auto lg:mx-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1 text-center lg:text-left">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <Badge variant="outline" className="w-fit mx-auto lg:mx-0 mt-2 lg:mt-0">
                              {item.status}
                            </Badge>
                          </div>
                          
                          <p className="text-primary font-medium mb-2">{item.institution}</p>
                          <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Experiência</h3>
            <div className="space-y-6">
              {experiences.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <Card key={index} className="group hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className={`p-3 rounded-lg ${getIconBg(item.type)} flex-shrink-0 w-fit mx-auto lg:mx-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1 text-center lg:text-left">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <span className="text-sm text-muted-foreground mt-1 lg:mt-0">{item.period}</span>
                          </div>
                          
                          <p className="text-primary font-medium mb-3">{item.company}</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                          
                          {item.skills && (
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                              {item.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;