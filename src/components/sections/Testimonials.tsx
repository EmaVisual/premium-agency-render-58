import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Secretaria Trimonthilso S.A.S.", text: "Trabajar con Daez Digital fue una experiencia muy enriquecedora, los aportes y la amabilidad de su fundador fueron un pilar importante en la creación de nuestra imagen corporativa. Recomendado al 100%.", rating: 5 },
  { name: "Abraham Romero", text: "Muy bien servicio, tienen un amplio catálogo de propuestas para el diseño de páginas web, una buena analítica del marketing digital y excelente atención al cliente.", rating: 5 },
  { name: "Andrés Hernández Coriano", text: "Excelente labor. Profesionalismo y calidad en cada proyecto desarrollado.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="testimonios-title">
      <div className="mb-6 sm:mb-8">
        <span className="text-primary font-medium text-sm sm:text-base">Casos reales</span>
        <h2 id="testimonios-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Testimonios</h2>
      </div>
      <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
        <CarouselContent className="-ml-2 sm:-ml-4">
          {testimonials.map((t, idx) => (
            <CarouselItem key={idx} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
              <figure className="rounded-lg border border-border/60 bg-card p-4 sm:p-6 h-full flex flex-col justify-between hover-scale animate-scale-in">
                <div className="flex items-center gap-1 text-primary" aria-label={`${t.rating} estrellas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-base sm:text-lg leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium">{t.name}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}