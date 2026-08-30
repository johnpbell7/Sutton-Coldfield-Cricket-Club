import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MenuBar } from "@/app/components/MenuBar";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { teamPhotos } from "@/app/data/teamPhotos";
import woodTable from "@/assets/ui/wood-table.jpg";

/**
 * Clubhouse Mode — photographs laid out on the clubhouse table.
 *
 * A single screen, no scrolling: a handful of team photographs sit on a dark
 * wooden table as Polaroids, slightly overlapping and each at its own angle.
 * Tapping one lifts it to the front with its caption and the names recorded in
 * the archive. A fresh batch is dealt every ten seconds, or on demand.
 */

const CYCLE_MS = 10000;

/** Where each photograph lies on the table, and how far it is turned. */
const DESKTOP_SLOTS = [
  { left: "3%", top: "5%", rotate: -7 },
  { left: "31%", top: "0%", rotate: 4 },
  { left: "59%", top: "6%", rotate: -3 },
  { left: "10%", top: "44%", rotate: 6 },
  { left: "37%", top: "50%", rotate: -5 },
  { left: "64%", top: "43%", rotate: 8 },
];

const MOBILE_SLOTS = [
  { left: "2%", top: "1%", rotate: -6 },
  { left: "42%", top: "8%", rotate: 5 },
  { left: "5%", top: "48%", rotate: 7 },
  { left: "45%", top: "55%", rotate: -4 },
];

function shuffle<T>(items: T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function ClubhouseMode() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 768
  );
  const [batch, setBatch] = useState<number[]>([]);
  const [focused, setFocused] = useState<number | null>(null);
  const [dealt, setDealt] = useState(false);

  // A shuffled bag of every photograph, drawn from in order so that the same
  // picture does not come round twice before the rest have been seen.
  const bag = useRef<number[]>([]);
  const bagPos = useRef(0);

  const slots = isDesktop ? DESKTOP_SLOTS : MOBILE_SLOTS;
  const perBatch = slots.length;

  const draw = useCallback((count: number) => {
    const picked: number[] = [];
    while (picked.length < count) {
      if (bagPos.current >= bag.current.length) {
        bag.current = shuffle(teamPhotos.map((_, i) => i));
        bagPos.current = 0;
      }
      const next = bag.current[bagPos.current++];
      if (!picked.includes(next)) picked.push(next);
    }
    return picked;
  }, []);

  const deal = useCallback(
    (count: number) => {
      setDealt(false);
      setBatch(draw(count));
      // Let the new photographs mount face-down, then flip them in.
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setDealt(true)));
    },
    [draw]
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Deal a first hand, and re-deal whenever the table changes size.
  useEffect(() => {
    deal(perBatch);
  }, [perBatch, deal]);

  // Auto-cycle, held while a photograph is being read.
  useEffect(() => {
    if (focused !== null) return;
    const id = window.setInterval(() => deal(perBatch), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [focused, perBatch, deal]);

  // Escape closes the enlarged photograph.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFocused(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Clubhouse Mode is a single screen; stop the page behind it scrolling.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const focusedPhoto = useMemo(
    () => (focused === null ? null : teamPhotos[focused]),
    [focused]
  );

  return (
    <div className="h-[100dvh] overflow-hidden relative">
      <MenuBar />

      {/* The table */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${woodTable})` }}
      >
        <div className="absolute inset-0 bg-black/25" />
        {/* Light falling on the middle of the table */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(255,246,224,0.22) 0%, rgba(0,0,0,0) 62%)",
          }}
        />
      </div>

      {/* Everything sits above the table */}
      <div className="relative h-full flex flex-col pt-[88px] pb-4 md:pt-[104px] md:pb-6 px-3 md:px-6">
        <div className="text-center shrink-0">
          <h1 className="font-['Archivo_Black',sans-serif] text-2xl md:text-4xl text-white drop-shadow-lg">
            Clubhouse Mode
          </h1>
          <p className="font-['Georgia',serif] text-xs md:text-base text-white/70 mt-1">
            Photographs from the club archive, laid out on the table
          </p>
        </div>

        {/* Table top */}
        <div className="relative flex-1 mt-3 md:mt-5">
          {batch.map((photoIndex, slotIndex) => {
            const photo = teamPhotos[photoIndex];
            const slot = slots[slotIndex];
            if (!slot) return null;
            return (
              <button
                key={`${photoIndex}-${slotIndex}`}
                type="button"
                onClick={() => setFocused(photoIndex)}
                aria-label={`Enlarge ${photo.title}`}
                className="absolute w-[54%] md:w-[32%] max-w-[340px] bg-[#fdfcf8] p-2 pb-10 md:p-3 md:pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out hover:z-30 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538] text-left"
                style={{
                  left: slot.left,
                  top: slot.top,
                  zIndex: slotIndex + 1,
                  transform: `rotate(${slot.rotate}deg) ${dealt ? "translateY(0) scale(1)" : "translateY(14px) scale(0.94)"}`,
                  opacity: dealt ? 1 : 0,
                }}
              >
                <div className="aspect-[4/3] bg-[#efece4] overflow-hidden">
                  <ImageWithFallback
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="absolute bottom-2 md:bottom-3 left-2 right-2 md:left-3 md:right-3 font-['Georgia',serif] text-[10px] md:text-sm text-[#3a3a3a] text-center leading-tight line-clamp-2">
                  {photo.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deal again */}
        <div className="shrink-0 flex justify-center pt-2">
          <button
            type="button"
            onClick={() => deal(perBatch)}
            className="font-['Helvetica',sans-serif] text-sm md:text-base font-semibold uppercase tracking-wide text-white bg-[#8B1538] hover:bg-[#6d1029] transition-colors px-6 py-3 shadow-lg"
          >
            Next photographs
          </button>
        </div>
      </div>

      {/* Enlarged photograph */}
      {focusedPhoto && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setFocused(null)}
          role="dialog"
          aria-modal="true"
          aria-label={focusedPhoto.title}
        >
          <div
            className="bg-[#fdfcf8] p-3 pb-4 md:p-4 md:pb-6 shadow-2xl max-w-3xl w-full max-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#efece4] flex-1 min-h-0 flex items-center justify-center">
              <ImageWithFallback
                src={focusedPhoto.image}
                alt={focusedPhoto.title}
                className="max-w-full max-h-[52vh] w-auto h-auto object-contain"
              />
            </div>
            <div className="pt-3 shrink-0 overflow-y-auto">
              <h2 className="font-['Archivo_Black',sans-serif] text-lg md:text-2xl text-[#1a1a1a]">
                {focusedPhoto.title}
              </h2>
              <p className="font-['Georgia',serif] text-sm md:text-base text-[#6b6b6b] mt-0.5">
                {focusedPhoto.year}
              </p>
              {focusedPhoto.players.length > 0 && (
                <p className="font-['Georgia',serif] text-xs md:text-sm text-[#4a4a4a] mt-2 leading-relaxed">
                  {focusedPhoto.players.map((p) => p.name).join(" · ")}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setFocused(null)}
              className="mt-3 shrink-0 self-end font-['Helvetica',sans-serif] text-sm font-semibold uppercase tracking-wide text-white bg-[#8B1538] hover:bg-[#6d1029] transition-colors px-5 py-2"
            >
              Put it back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
