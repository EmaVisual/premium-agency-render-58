import { useRef, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";

export default function FloatingWhatsApp() {
  const ref = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    // Preload WhatsApp link for faster navigation
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'https://wa.me/584120591116';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <a
      ref={ref}
      href="https://wa.me/584120591116"
      target="_blank"
      rel="noopener"
      aria-label="Chat por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:brightness-110 hover-scale glow-on-hover floating-animation touch-manipulation"
    >
      <MessageCircleMore className="h-6 w-6 animate-pulse" />
    </a>
  );
}
