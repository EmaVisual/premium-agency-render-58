import { MessageCircleMore } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/584120591116"
      target="_blank"
      rel="noopener"
      aria-label="Chat por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:brightness-110"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
