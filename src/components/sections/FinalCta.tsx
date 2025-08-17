import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="container mx-auto py-24 text-center animate-fade-in">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">¿Estás listo para escribir el próximo capítulo de tu negocio?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Hablemos sin compromiso. Agenda una <strong>consultoría estratégica GRATUITA de 15 minutos</strong> y te daremos un diagnóstico inicial de tu presencia online y 3 ideas clave que puedes implementar desde ya.
        </p>
        <div className="mb-4 flex items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto" aria-label="Agendar consultoría gratuita">AGENDAR MI CONSULTORÍA GRATIS</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Sin spam. Sin compromiso. Solo valor para tu negocio.</p>
      </div>
    </section>
  );
}
