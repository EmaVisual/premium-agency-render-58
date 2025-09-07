import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Search, Palette, Megaphone } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Palette,
    title: "Diseño Gráfico para Marcas Memorables",
    desc: "Creamos una identidad visual que comunica tus valores, genera confianza y te diferencia de la competencia. Desde tu logo hasta el diseño para redes sociales, hacemos que tu marca se vea tan profesional como es.",
    featured: false,
  },
  {
    icon: Layout,
    title: "Páginas Web Diseñadas para Convertir",
    desc: "No se trata solo de tener una web, sino de tener una máquina de ventas trabajando para ti 24/7. Diseñamos sitios web rápidos, atractivos y optimizados para que cada visitante se convierta en un cliente potencial.",
    featured: true,
  },
  {
    icon: Search,
    title: "SEO para que Seas la Primera Opción",
    desc: "Hacemos que tus clientes te encuentren en Google justo cuando te necesitan. Con nuestras estrategias de SEO, aumentamos tu visibilidad orgánica para que atraigas tráfico de calidad que está listo para comprar.",
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Marketing Digital Integral para Empresas",
    desc: "Unimos todas las piezas. Creamos y gestionamos campañas de publicidad, redes sociales y contenido que trabajan en conjunto para llevar tu mensaje a la audiencia correcta y multiplicar tus oportunidades de venta.",
    featured: false,
  },
];

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(services.length, 300, 200);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ delay: 800 });

  return (
    <section id="servicios" className="container mx-auto py-20" aria-labelledby="servicios-title">
      <div ref={titleRef} className="mb-10 text-center">
        <h2 id="servicios-title" className={`font-display text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
          titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>Tu hoja de ruta hacia el éxito digital.</h2>
      </div>
      <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        {services.map(({ icon: Icon, title, desc, featured }, index) => (
          <Card key={title} className={`
            ${featured ? "bg-primary text-primary-foreground shadow-glow hover:brightness-105" : "bg-card hover:bg-secondary/80"}
            hover-scale transition-all duration-300
            ${visibleItems[index] ? 'animate-scale-bounce' : 'opacity-0 scale-95'}
            ${featured ? 'animate-pulse-glow' : ''}
          `}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className={`h-6 w-6 ${featured ? "" : "text-primary"} ${visibleItems[index] ? 'animate-rotate-in' : ''}`} />
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
              <CardDescription className={featured ? "text-primary-foreground/80" : undefined}>{desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div ref={buttonRef} className="text-center">
        <Button variant="cta" size="lg" asChild className={`
          hover-scale transition-all duration-300
          ${buttonVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'}
        `}>
          <a href="#contacto">DESCUBRIR NUESTROS PLANES</a>
        </Button>
      </div>
    </section>
  );
}
