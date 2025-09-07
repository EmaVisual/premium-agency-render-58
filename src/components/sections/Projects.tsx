import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ delay: 300 });

  return (
    <section id="proyectos" className="container mx-auto py-20" aria-labelledby="proyectos-title">
      <div ref={headerRef} className="mb-8 flex items-end justify-between">
        <div>
          <span className={`text-primary font-medium transition-all duration-500 ${
            headerVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-4'
          }`}>Portafolio</span>
          <h2 id="proyectos-title" className={`font-display text-3xl md:text-4xl font-bold mt-2 transition-all duration-700 delay-200 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>Proyectos Realizados</h2>
        </div>
        <a href="#contacto" className={`story-link transition-all duration-500 delay-400 ${
          headerVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-4'
        }`}>Ver todos los proyectos</a>
      </div>

      <div ref={carouselRef}>
        <Carousel className={`w-full transition-all duration-700 ${
          carouselVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/232163545?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 232163545" className="w-full"></iframe>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/223262561?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 223262561" className="w-full"></iframe>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/216920105?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 216920105" className="w-full"></iframe>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/215422833?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 215422833" className="w-full"></iframe>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/208402237?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 208402237" className="w-full"></iframe>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-card hover-scale glow-on-hover transition-all duration-300">
                <iframe src="https://www.behance.net/embed/project/178679695?ilo0=1" height="316" width="404" allowFullScreen loading="lazy" frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" title="Proyecto Behance 178679695" className="w-full"></iframe>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hover-scale" />
          <CarouselNext className="hover-scale" />
        </Carousel>
      </div>
    </section>
  );
}
