// /home/brunagabriela/soft-tech-glow-portfolio/src/components/Header.tsx
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#experience", label: "Experiência" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center">
        <a href="#" className="font-bold text-lg mr-auto">
          Bruna Gabriela
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
