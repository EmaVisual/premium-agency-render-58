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
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/232163545?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/223262561?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/216920105?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/215422833?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/208402237?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale animate-scale-in">
              <iframe 
                src="https://www.behance.net/embed/project/178679695?ilo0=1" 
                height="316" 
                width="404" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="w-full"
              ></iframe>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  );
}
