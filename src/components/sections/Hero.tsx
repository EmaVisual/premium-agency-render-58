import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import OptimizedImage from "@/components/common/OptimizedImage";
const heroImg = "/lovable-uploads/7681b889-150a-4b64-971c-e190a4e9e40d.png";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove: React.MouseEventHandler<HTMLDivElement> = e => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return <section id="inicio" className="relative pt-16 md:pt-24">
      <div ref={ref} onMouseMove={onMove} className="spotlight transition-colors relative min-h-[85vh] md:min-h-[80vh] overflow-hidden" aria-label="Daez Digital — Branding, Diseño Web y SEO">
        {/* Mobile-optimized background */}
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImg}
            alt="Daez Digital - Agencia Digital Premium"
            className="w-full h-full object-cover object-center"
            priority={true}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[hsl(var(--background)/0.6)] to-[hsl(var(--background)/0.2)]" />

        <div className="container relative z-[1] mx-auto px-4 sm:px-6 flex items-center min-h-[85vh] md:min-h-[80vh]">
          <div className="animate-enter max-w-4xl w-full">
            <span className="text-primary font-medium text-sm sm:text-base">Agencia Digital Premium</span>
            <h1 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Diseño Gráfico, Páginas Web, SEO y Marketing Digital para Empresas y Marcas
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl animate-fade-in">
              Daez Digital es tu agencia digital enfocada en resultados. Ayudamos a emprendedores, profesionales y empresas como la tuya a destacar en el mundo online, aumentando tu tráfico web y tus ventas con soluciones 100% personalizadas.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4" asChild>
                <a href="#contacto" aria-label="Solicitar auditoría gratuita">AUDITORÍA GRATUITA</a>
              </Button>
              <Button variant="cta" size="lg" className="w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
            
            {/* Trust micro-copy */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">
                5.0 en Google • Más de 100 empresas confían en nosotros
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Logos Carousel */}
      <div className="relative bg-background/50 backdrop-blur-sm py-6 sm:py-8 border-t border-border/10">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            Empresas que confían en Daez Digital
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left"
                 style={{ animationDuration: '40s' }}>
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[200px] px-4 sm:px-6 md:px-8">
                <OptimizedImage
                  src="/lovable-uploads/7810cdc1-2bfb-4312-9de7-8db6c633678f.png" 
                  alt="Cacao Vivo" 
                  className="h-8 sm:h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
              {[
                { src: "/lovable-uploads/3dc2ca60-0c26-4220-ab02-5d314d26c12a.png", alt: "BLD" },
                { src: "/lovable-uploads/346b6bba-39f3-49ba-9aab-ff351dbeb16b.png", alt: "Ugly Cookies" },
                { src: "/lovable-uploads/7f90c73e-e7f2-460f-879c-1673ba270274.png", alt: "Poción de Luna" },
                { src: "/lovable-uploads/61f26e0a-7feb-45b3-987f-29602986e634.png", alt: "JC Textiles Continental" },
                { src: "/lovable-uploads/2e0bbae5-afa4-4ae8-aa83-7c38bb63984e.png", alt: "Natural Estilo en Joyas" },
                { src: "/lovable-uploads/abe51551-9633-40c5-b8f0-0cf67038b93c.png", alt: "G Show" },
                { src: "/lovable-uploads/d7185865-4a09-40c2-8e9a-1a61a5c190e7.png", alt: "El Rincón del Maíz" },
                { src: "/lovable-uploads/71c5f84d-b7e6-4053-915d-9d76c8867c1e.png", alt: "Connexo" },
                { src: "/lovable-uploads/65f5df37-213c-454f-8d2e-ebfe756e8ffe.png", alt: "AAPlus+" },
                { src: "/lovable-uploads/a3d181b6-f518-445a-b0cf-25c3b0a85c30.png", alt: "EduFetus" }
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[200px] px-4 sm:px-6 md:px-8">
                  <OptimizedImage
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[200px] px-4 sm:px-6 md:px-8">
                <OptimizedImage
                  src="/lovable-uploads/7810cdc1-2bfb-4312-9de7-8db6c633678f.png" 
                  alt="Cacao Vivo" 
                  className="h-8 sm:h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
              {[
                { src: "/lovable-uploads/3dc2ca60-0c26-4220-ab02-5d314d26c12a.png", alt: "BLD" },
                { src: "/lovable-uploads/346b6bba-39f3-49ba-9aab-ff351dbeb16b.png", alt: "Ugly Cookies" },
                { src: "/lovable-uploads/7f90c73e-e7f2-460f-879c-1673ba270274.png", alt: "Poción de Luna" },
                { src: "/lovable-uploads/61f26e0a-7feb-45b3-987f-29602986e634.png", alt: "JC Textiles Continental" },
                { src: "/lovable-uploads/2e0bbae5-afa4-4ae8-aa83-7c38bb63984e.png", alt: "Natural Estilo en Joyas" },
                { src: "/lovable-uploads/abe51551-9633-40c5-b8f0-0cf67038b93c.png", alt: "G Show" },
                { src: "/lovable-uploads/d7185865-4a09-40c2-8e9a-1a61a5c190e7.png", alt: "El Rincón del Maíz" },
                { src: "/lovable-uploads/71c5f84d-b7e6-4053-915d-9d76c8867c1e.png", alt: "Connexo" },
                { src: "/lovable-uploads/65f5df37-213c-454f-8d2e-ebfe756e8ffe.png", alt: "AAPlus+" },
                { src: "/lovable-uploads/a3d181b6-f518-445a-b0cf-25c3b0a85c30.png", alt: "EduFetus" }
              ].map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[200px] px-4 sm:px-6 md:px-8">
                  <OptimizedImage
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
}