import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Search, Palette, Megaphone } from "lucide-react";

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
  return (
    <section id="servicios" className="container mx-auto py-20" aria-labelledby="servicios-title">
      <div className="mb-10 text-center">
        <h2 id="servicios-title" className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Tu hoja de ruta hacia el éxito digital.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        {services.map(({ icon: Icon, title, desc, featured }) => (
          <Card key={title} className={featured ? "bg-primary text-primary-foreground shadow-glow hover:brightness-105 hover-scale animate-scale-in" : "bg-card hover:bg-secondary/80 transition-colors hover-scale animate-scale-in"}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className={featured ? "h-6 w-6" : "h-6 w-6 text-primary"} />
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
              <CardDescription className={featured ? "text-primary-foreground/80" : undefined}>{desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <a href="#contacto">DESCUBRIR NUESTROS PLANES</a>
        </Button>
      </div>
    </section>
  );
}
