import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import team from "@/assets/about-team.jpg";
import office from "@/assets/about-office.jpg";

export default function About() {
  return (
    <section id="sobre-nosotros" className="container mx-auto py-20" aria-labelledby="about-title">
      <div className="mb-8">
        <span className="text-primary font-medium">Sobre Nosotros</span>
        <h2 id="about-title" className="font-display text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Personas, procesos y propósito</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl animate-fade-in">Somos Daez Digital, tu agencia aliada para destacar online. Ayudamos a emprendedores y empresas a construir una presencia digital sólida y estratégica. Desde el diseño web hasta el branding y el posicionamiento SEO, nuestro enfoque es siempre personalizado y orientado a resultados.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card hover-scale animate-scale-in">
          <img src={team} alt="Nuestro equipo en sesión de trabajo" className="h-44 w-full object-cover rounded-t-lg" loading="lazy" decoding="async" />
          <CardHeader>
            <CardTitle>Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Estrategas, diseñadores y desarrolladores alineados a objetivos de negocio.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover-scale animate-scale-in">
          <img src={office} alt="Oficina y espacio de trabajo" className="h-44 w-full object-cover rounded-t-lg" loading="lazy" decoding="async" />
          <CardHeader>
            <CardTitle>Oficina</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Ambiente creativo, procesos claros y foco en calidad.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover-scale animate-scale-in">
          <div className="h-44 w-full rounded-t-lg bg-secondary" />
          <CardHeader>
            <CardTitle>Filosofía</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Menos ruido, más impacto. Diseño y SEO que generan resultados.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2">Misión</h3>
          <p className="text-muted-foreground">Empoderar a las empresas con soluciones web de vanguardia que mejoren su presencia digital e impulsen el crecimiento.</p>
        </div>
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2">Enfoque</h3>
          <p className="text-muted-foreground">Adoptamos un enfoque colaborativo, trabajando en estrecha colaboración con nuestros clientes para ofrecer soluciones personalizadas que se alineen con sus objetivos.</p>
        </div>
        <div className="animate-fade-in">
          <h3 className="font-semibold mb-2">Resultados</h3>
          <p className="text-muted-foreground"><strong>50+</strong> Clientes • <strong>98%</strong> Tasa de Éxito</p>
        </div>
      </div>
    </section>
  );
}
