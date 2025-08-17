import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Target } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Innovación creativa", desc: "Diseños únicos que diferencian tu marca con precisión y estética." },
  { icon: ShieldCheck, title: "Fiabilidad y estrategia", desc: "Procesos claros, métricas y una ejecución sólida orientada a resultados." },
  { icon: Target, title: "Enfoque high‑ticket", desc: "Captamos audiencias de alto valor en salud, real estate y legal." },
];

export default function Benefits() {
  return (
    <section className="container mx-auto py-16" aria-labelledby="beneficios-title">
      <h2 id="beneficios-title" className="sr-only">Beneficios</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-secondary/70 hover:bg-secondary/90 transition-colors hover-scale animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
