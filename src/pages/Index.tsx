import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCta from "@/components/sections/FinalCta";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const Schema = () => (
  <script type="application/ld+json" suppressHydrationWarning>
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Daez Digital",
      url: "https://daezdigital.lovable.app/",
      image: "/lovable-uploads/7681b889-150a-4b64-971c-e190a4e9e40d.png",
      telephone: "+58 412 059 1116",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
      },
      sameAs: [
        "https://wa.me/584120591116",
        "https://www.instagram.com/daez.digital/",
        "https://www.linkedin.com/company/daez-digital",
        "https://www.facebook.com/daezdigital",
        "https://www.behance.net/daezdigital"
      ],
      areaServed: ["PE", "LATAM"],
      priceRange: "$$$",
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño y Desarrollo Web" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO y Posicionamiento" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding y Diseño" } }
      ]
    })}
  </script>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Schema />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
