import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-primary" fill="currentColor" /> por{" "}
            <span className="font-medium text-foreground">Bruna Gabriela</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;