import { Button } from "@/components/ui/button";
const heroImg = "/lovable-uploads/7681b889-150a-4b64-971c-e190a4e9e40d.png";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove: React.MouseEventHandler<HTMLDivElement> = e => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };
  return <section id="inicio" className="relative pt-24 md:pt-28">
      <div ref={ref} onMouseMove={onMove} className="spotlight transition-colors relative bg-cover bg-center bg-no-repeat min-h-[80vh]" style={{
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} aria-label="Daez Digital — Branding, Diseño Web y SEO">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[hsl(var(--background)/0.6)] to-[hsl(var(--background)/0.2)]" />

        <div className="container relative z-[1] mx-auto grid items-center gap-10 py-16">
          <div className="animate-enter max-w-3xl">
            <span className="text-primary font-medium">Agencia Digital Premium</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight animate-fade-in">Diseño Gráfico, Páginas Web, SEO y Marketing Digital para Empresas y Marcas</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl animate-fade-in">
              Daez Digital es tu agencia digital enfocada en resultados. Ayudamos a emprendedores, profesionales y empresas como la tuya a destacar en el mundo online, aumentando tu tráfico web y tus ventas con soluciones 100% personalizadas.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto" aria-label="Solicitar auditoría gratuita">AUDITORÍA GRATUITA</a>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}