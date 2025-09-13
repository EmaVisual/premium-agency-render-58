import { useState } from "react";
import { Menu, Phone, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/common/OptimizedImage";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="story-link" aria-label="Daez Digital - Inicio">
          <OptimizedImage 
            src="/lovable-uploads/d6248a20-1dca-4224-b816-09043534f352.png" 
            alt="Logotipo Daez Digital" 
            className="h-7 sm:h-8 w-auto" 
            priority={true}
            sizes="(max-width: 640px) 120px, 140px"
          />
        </a>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-muted-foreground">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground story-link transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a href="tel:+584120591116" aria-label="Llamar" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <a href="https://wa.me/584120591116" target="_blank" rel="noopener" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <MessageCircleMore className="h-4 w-4 lg:h-5 lg:w-5" />
          </a>
          <Button variant="cta" size="sm" className="text-xs lg:text-sm px-3 lg:px-4" asChild>
            <a href="#servicios">Servicios</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs sm:text-sm active:scale-95 transition-transform"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-4 w-4" />
          Menú
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto flex flex-col py-3 px-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-muted-foreground hover:text-foreground transition-colors active:bg-accent/50 rounded-md text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-2 py-3 border-t border-border/40 mt-2">
              <Button variant="cta" size="sm" className="w-full sm:w-auto" asChild>
                <a href="#servicios" onClick={() => setOpen(false)}>Ver Servicios</a>
              </Button>
              <div className="flex items-center gap-3">
                <a href="tel:+584120591116" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 inline mr-1" />
                  Llámanos
                </a>
                <a href="https://wa.me/584120591116" target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircleMore className="h-4 w-4 inline mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
