import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap justify-center md:justify-start">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Muhammad Tariq using
              <span className="text-foreground font-medium">React</span>,
              <span className="text-foreground font-medium">Framer Motion</span> &
              <span className="text-foreground font-medium">Tailwind CSS</span>
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
