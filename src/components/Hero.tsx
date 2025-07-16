import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-photo.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6 text-gray-700 dark:text-gray-200">
  {/* Elementos de fundo */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-primary blur-xl" />
    <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-tech blur-xl" />
    <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary-glow blur-lg" />
  </div>

  <div className="container mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Foto */}
      <div className="relative">
        <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-glow border-4 border-purple-300/30">
          <img
            src={profileImage}
            alt="Bruna Gabriela"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -inset-4 rounded-full bg-purple-400 opacity-20 blur-md -z-10" />
      </div>

      {/* Conteúdo */}
      <div className="text-center lg:text-left max-w-2xl">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
          Desenvolvedora Front-end
        </p>
        <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          Bruna Gabriela
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Desenvolvedora front-end em formação, criando soluções digitais modernas com React e TypeScript. Com projetos práticos publicados e foco em boas práticas de código e acessibilidade.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
          <a
            href="/BrunaGabriela-CV.pdf"
            download
            className="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700 flex items-center gap-2"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="#contact"
            className="border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
          >
            <Mail size={18} /> Contato
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            href="https://github.com/Brunaagabriela"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/brunagabriela23"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:bruna.gabriela.pereira98@gmail.com"
            className="hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}