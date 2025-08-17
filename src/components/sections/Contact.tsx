import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const text = `Hola Daez Digital,%0A%0AMi nombre es ${encodeURIComponent(name)}.%0AEmail: ${encodeURIComponent(email)}%0ATeléfono: ${encodeURIComponent(phone)}%0AServicio de interés: ${encodeURIComponent(service)}%0A%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/584120591116?text=${text}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <section id="contacto" className="container mx-auto py-20" aria-labelledby="contacto-title">
      <div className="mb-8 text-center">
        <span className="text-primary font-medium">Contacto</span>
        <h2 id="contacto-title" className="font-display text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Hablemos de tu proyecto</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Escríbenos y te responderemos a la brevedad. También puedes contactarnos por WhatsApp.</p>
      </div>

      <div className="mx-auto grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 bg-card border border-border/60 rounded-lg p-6 shadow-sm animate-scale-in">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
            <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Teléfono</label>
            <Input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+58 412 000 0000" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">Servicio de interés</label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diseno-grafico">Diseño Gráfico</SelectItem>
                <SelectItem value="diseno-web">Diseño Web</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                <SelectItem value="consultoria">Consultoría</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
            <Textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Cuéntanos brevemente qué necesitas" rows={5} />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" variant="hero">Enviar por WhatsApp</Button>
            <Button asChild variant="cta">
              <a href="https://wa.me/584120591116" target="_blank" rel="noopener" aria-label="Abrir WhatsApp">Abrir WhatsApp</a>
            </Button>
          </div>
        </form>

        <aside className="space-y-3">
          <div className="bg-card border border-border/60 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Datos de contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://wa.me/584120591116" target="_blank" rel="noopener" className="hover:text-foreground">WhatsApp: +58 412 059 1116</a></li>
              <li><a href="mailto:daezdigital@gmail.com" className="hover:text-foreground">daezdigital@gmail.com</a></li>
            </ul>
          </div>
          <div className="bg-card border border-border/60 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Síguenos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://www.instagram.com/daez.digital/" target="_blank" rel="noopener" className="hover:text-foreground">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/daez-digital" target="_blank" rel="noopener" className="hover:text-foreground">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/daezdigital" target="_blank" rel="noopener" className="hover:text-foreground">Facebook</a></li>
              <li><a href="https://www.behance.net/daezdigital" target="_blank" rel="noopener" className="hover:text-foreground">Behance</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
