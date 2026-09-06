import { useEffect } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

/**
 * One archive photograph, full screen.
 *
 * Escape or a click outside closes it. The picture fills the space it is
 * given rather than stopping at its own pixel size, because much of this
 * material was scanned small and the point of opening it is to see it bigger.
 */
export function PhotoViewer({
  src,
  alt,
  caption,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/90 flex flex-col"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="flex items-center justify-end px-4 py-3 shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center px-3 md:px-16">
        <ImageWithFallback
          src={src}
          alt={alt}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="w-full h-full object-contain"
        />
      </div>

      {caption && (
        <p
          className="shrink-0 px-4 py-4 text-center font-['Georgia',serif] text-sm md:text-base text-white/80"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
