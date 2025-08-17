import { cn } from "@/lib/utils";

type PreloaderProps = {
  show: boolean;
};

export default function Preloader({ show }: PreloaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[hsl(var(--preloader))] transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      role="status"
      aria-live="polite"
      aria-busy={show}
    >
      <img
        src="/lovable-uploads/91949685-c855-45df-ad14-1ebb92c3f15a.png"
        alt="Daez Digital"
        className="h-16 w-auto animate-pulse"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}
