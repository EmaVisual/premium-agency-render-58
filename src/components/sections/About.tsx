import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OptimizedImage from "@/components/common/OptimizedImage";
import team from "@/assets/about-team.jpg";
import office from "@/assets/about-office.jpg";

export default function About() {
  return (
    <section id="sobre-nosotros" className="container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 animate-fade-in" aria-labelledby="about-title">
      <div className="mb-6 sm:mb-8">
        <span className="text-primary font-medium text-sm sm:text-base">Sobre Nosotros</span>
        <h2 id="about-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Personas, procesos y propósito</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl animate-fade-in text-sm sm:text-base">Somos Daez Digital, tu agencia aliada para destacar online. Ayudamos a emprendedores y empresas a construir una presencia digital sólida y estratégica. Desde el diseño web hasta el branding y el posicionamiento SEO, nuestro enfoque es siempre personalizado y orientado a resultados.</p>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card className="bg-card hover-scale animate-scale-in">
          <OptimizedImage 
            src={team} 
            alt="Nuestro equipo en sesión de trabajo" 
            className="h-32 sm:h-40 md:h-44 w-full object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <CardHeader className="pb-3">
            <CardTitle className="text-lg sm:text-xl">Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm sm:text-base">Estrategas, diseñadores y desarrolladores alineados a objetivos de negocio.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover-scale animate-scale-in">
          <OptimizedImage 
            src={office} 
            alt="Oficina y espacio de trabajo" 
            className="h-32 sm:h-40 md:h-44 w-full object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <CardHeader className="pb-3">
            <CardTitle className="text-lg sm:text-xl">Oficina</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm sm:text-base">Ambiente creativo, procesos claros y foco en calidad.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover-scale animate-scale-in">
          <div className="h-32 sm:h-40 md:h-44 w-full rounded-t-lg bg-secondary flex items-center justify-center">
            <div className="text-primary opacity-20 text-4xl sm:text-5xl md:text-6xl font-bold">DAEZ</div>
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg sm:text-xl">Filosofía</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm sm:text-base">Menos ruido, más impacto. Diseño y SEO que generan resultados.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Misión</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Empoderar a las empresas con soluciones web de vanguardia que mejoren su presencia digital e impulsen el crecimiento.</p>
        </div>
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Enfoque</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Adoptamos un enfoque colaborativo, trabajando en estrecha colaboración con nuestros clientes para ofrecer soluciones personalizadas que se alineen con sus objetivos.</p>
        </div>
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Resultados</h3>
          <p className="text-muted-foreground text-sm sm:text-base"><strong>50+</strong> Clientes • <strong>98%</strong> Tasa de Éxito</p>
        </div>
      </div>
    </section>
  );
}
