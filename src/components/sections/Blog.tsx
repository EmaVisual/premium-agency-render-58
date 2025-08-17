import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, title: "Branding con propósito", text: "Cómo construir marcas memorables en sectores de alto valor." },
  { img: b2, title: "SEO que genera ingresos", text: "Estrategias de posicionamiento para atraer clientes ideales." },
  { img: b3, title: "Webs para real estate", text: "Claves de UX/UI para proyectos inmobiliarios premium." },
];

export default function Blog() {
  return (
    <section id="blog" className="container mx-auto py-20" aria-labelledby="blog-title">
      <div className="mb-8">
        <span className="text-primary font-medium">Innovación y Tendencias</span>
        <h2 id="blog-title" className="font-display text-3xl md:text-4xl font-bold mt-2">Del insight a la acción</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="bg-card">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover rounded-t-lg" loading="lazy" decoding="async" />
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{p.text}</p>
              <a href="#" className="story-link mt-3 inline-block">Leer más</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
