import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projects() {
  return (
    <section id="proyectos" className="container mx-auto py-20 animate-fade-in" aria-labelledby="proyectos-title">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-primary font-medium">Portafolio</span>
          <h2 id="proyectos-title" className="font-display text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Proyectos Realizados</h2>
        </div>
        <a href="#contacto" className="story-link">Ver todos los proyectos</a>
      </div>

      <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/232163545" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Proyecto Empresarial</h3>
                  <p className="text-muted-foreground mb-4">Identidad corporativa completa</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/223262561" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Diseño Digital</h3>
                  <p className="text-muted-foreground mb-4">Interfaz web moderna</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/216920105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Branding Completo</h3>
                  <p className="text-muted-foreground mb-4">Logo y aplicaciones</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/215422833" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Marketing Digital</h3>
                  <p className="text-muted-foreground mb-4">Campaña publicitaria</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/208402237" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/15 to-accent/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Desarrollo Web</h3>
                  <p className="text-muted-foreground mb-4">Sitio web responsive</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <a 
              href="https://www.behance.net/gallery/178679695" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-2">Diseño Gráfico</h3>
                  <p className="text-muted-foreground mb-4">Material promocional</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Ver en Behance →
                  </span>
                </div>
              </div>
            </a>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  );
}
