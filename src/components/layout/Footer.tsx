export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary mt-24">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-4">
        <div>
          <img src="/lovable-uploads/d6248a20-1dca-4224-b816-09043534f352.png" alt="Logotipo Daez Digital" className="h-8 w-auto mb-3" loading="lazy" />
          <p className="text-muted-foreground">Branding, Diseño Web y SEO para marcas premium.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Servicios</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground">Diseño y Desarrollo Web</a></li>
            <li><a href="#servicios" className="hover:text-foreground">SEO y Posicionamiento</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Branding y Diseño</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="https://www.instagram.com/daez.digital/" target="_blank" rel="noopener" className="hover:text-foreground">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/daez-digital" target="_blank" rel="noopener" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/daezdigital" target="_blank" rel="noopener" className="hover:text-foreground">Facebook</a></li>
            <li><a href="https://www.behance.net/daezdigital" target="_blank" rel="noopener" className="hover:text-foreground">Behance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="tel:+584120591116" className="hover:text-foreground">+58 412 059 1116</a></li>
            <li><a href="mailto:info@daezdigital.com" className="hover:text-foreground">info@daezdigital.com</a></li>
            <li><a href="https://wa.me/584120591116" target="_blank" rel="noopener" className="hover:text-foreground">WhatsApp Business</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Daez Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
