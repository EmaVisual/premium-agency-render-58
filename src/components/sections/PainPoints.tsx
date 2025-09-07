import { X } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
  "Tienes una página web bonita, pero no genera ni una sola llamada o venta.",
  "Tu competencia siempre aparece primero que tú en los resultados de Google.",
  "Inviertes dinero en publicidad en redes sociales, pero solo consigues \"me gusta\" y no clientes reales.",
  "Sientes que podrías estar vendiendo mucho más, pero no sabes por dónde empezar en el mundo digital.",
  "Te frustra no tener una imagen de marca profesional que transmita confianza y calidad."
];

export default function PainPoints() {
  const { ref, visibleItems } = useStaggeredAnimation(painPoints.length, 200, 150);

  return (
    <section ref={ref} className="container mx-auto py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
          ¿Te suena familiar alguna de estas situaciones?
        </h2>
        <div className="grid gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 bg-card border border-border/60 rounded-lg p-4 md:p-6 text-left hover:bg-secondary/50 hover-scale transition-all duration-300 ${
                visibleItems[index] ? 'animate-fade-in-right' : 'opacity-0'
              }`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                <X className="h-4 w-4 text-destructive" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}