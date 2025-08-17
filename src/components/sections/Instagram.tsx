import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    // Load Curator.io script for Instagram feed
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "UTF-8";
    script.src = "https://cdn.curator.io/published/c5a3ddb3-8fd5-49b5-bf9e-008290c9d371.js";
    
    const existingScript = document.getElementsByTagName("script")[0];
    existingScript.parentNode?.insertBefore(script, existingScript);

    return () => {
      // Cleanup script if component unmounts
      script.remove();
    };
  }, []);

  return (
    <section className="container mx-auto py-20 animate-fade-in" aria-labelledby="instagram-title">
      <div className="mb-8 text-center">
        <span className="text-primary font-medium">Síguenos</span>
        <h2 id="instagram-title" className="font-display text-3xl md:text-4xl font-bold mt-2">
          Nuestro Instagram
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Mantente al día con nuestros últimos proyectos y contenido en Instagram
        </p>
      </div>
      
      <div className="bg-card border border-border/60 rounded-lg p-6 animate-scale-in">
        <div id="curator-feed-default-feed-layout">
          <a 
            href="https://curator.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>
    </section>
  );
}