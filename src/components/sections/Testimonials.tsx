import TrustmaryWidget from "@/components/common/TrustmaryWidget";

export default function Testimonials() {
  return (
    <section className="container mx-auto py-20" aria-labelledby="testimonios-title">
      <div className="mb-8">
        <span className="text-primary font-medium">Casos reales</span>
        <h2 id="testimonios-title" className="font-display text-3xl md:text-4xl font-bold mt-2 animate-fade-in">Testimonios</h2>
      </div>
      <TrustmaryWidget />
    </section>
  );
}