import { useState } from "react";
import { Menu, Phone, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#inicio" className="story-link" aria-label="Daez Digital - Inicio">
          <img src="/lovable-uploads/d6248a20-1dca-4224-b816-09043534f352.png" alt="Logotipo Daez Digital" className="h-8 w-auto" loading="eager" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground story-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+584120591116" aria-label="Llamar" className="text-muted-foreground hover:text-foreground">
            <Phone className="h-5 w-5" />
          </a>
          <a href="https://wa.me/584120591116" target="_blank" rel="noopener" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground">
            <MessageCircleMore className="h-5 w-5" />
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#servicios">Servicios</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
          Menú
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-1 py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-1 py-2">
              <Button variant="cta" size="sm" asChild>
                <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
              </Button>
              <a href="tel:+584120591116" className="text-sm">Llámanos</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
