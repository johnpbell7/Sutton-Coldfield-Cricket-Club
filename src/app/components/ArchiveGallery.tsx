import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

/**
 * The rest of the archive for one year.
 *
 * Shown as a small contact sheet rather than a column of full-width pictures.
 * Much of this material is small - portraits, press cuttings, badges, a few
 * only two or three hundred pixels across - and printing those the width of
 * the page magnified them two or three times, which looked poor and pushed
 * the useful photographs far down the article. As thumbnails they read as a
 * set, and a tap opens the picture at its own size, never enlarged past it.
 */

export function ArchiveGallery({
  images,
  year,
  title,
}: {
  images: string[];
  year: string;
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  if (images.length === 0) return null;

  const step = (n: number) =>
    setOpen((i) => (i === null ? i : (i + n + images.length) % images.length));

  return (
    <div>
      <div className="flex items-baseline gap-3 mb-4 md:mb-5">
        <h3 className="font-['Archivo_Black',sans-serif] text-xl md:text-2xl text-[#8B1538]">
          More from this year
        </h3>
        <span className="font-['Georgia',serif] text-sm text-[#9b9b9b]">
          {images.length} {images.length === 1 ? "image" : "images"} — tap to enlarge
        </span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Enlarge archive image ${i + 1} of ${images.length} from ${year}`}
            className="group relative aspect-square overflow-hidden bg-[#f4f1ec] border border-[#e4ded4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538]"
          >
            <ImageWithFallback
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-[#8B1538]/0 group-hover:bg-[#8B1538]/20 transition-colors" />
          </button>
        ))}
      </div>

      <p className="font-['Georgia',serif] text-sm text-[#9b9b9b] mt-3">Club Archives</p>

      {open !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 flex flex-col"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title}, ${year} — archive image ${open + 1} of ${images.length}`}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white shrink-0">
            <span className="font-['Georgia',serif] text-sm">
              {year} — {open + 1} of {images.length}
            </span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
              aria-label="Close"
              className="w-10 h-10 flex items-center justify-center hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 min-h-0 flex items-center justify-center px-2 pb-4">
            <ImageWithFallback
              src={images[open]}
              alt={`${title}, ${year} — archive image ${open + 1}`}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous image"
                className="absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/40 hover:bg-black/70"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next image"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/40 hover:bg-black/70"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
