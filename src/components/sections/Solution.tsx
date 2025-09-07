import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Solution() {
  const { ref, isVisible } = useScrollAnimation({ delay: 100 });

  return (
    <section ref={ref} className="container mx-auto py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          No tienes que recorrer este camino solo. Somos tu socio estratégico digital.
        </h2>
        <div className={`bg-card border border-border/60 rounded-lg p-6 md:p-8 hover-scale transition-all duration-700 delay-300 ${
          isVisible ? 'animate-scale-bounce' : 'opacity-0 scale-95'
        }`}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entendemos perfectamente tu frustración. El mundo digital puede ser abrumador, pero no tiene por qué serlo para ti. En Daez Digital, no solo creamos estrategias; construimos relaciones de confianza. Nos enfocamos en entender tu negocio a fondo para diseñar un plan a medida que te genere resultados reales y medibles. Tu éxito es nuestro objetivo.
          </p>
        </div>
      </div>
    </section>
  );
}