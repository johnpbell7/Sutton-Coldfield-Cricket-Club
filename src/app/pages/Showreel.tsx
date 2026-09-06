import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MenuBar } from "@/app/components/MenuBar";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { teamPhotos } from "@/app/data/teamPhotos";
import woodTable from "@/assets/ui/wood-table.jpg";

/**
 * Showreel — photographs laid out on the clubhouse table.
 *
 * A single screen, no scrolling and no wording: six team photographs sit on a
 * dark wooden table as Polaroids, overlapping and each at its own angle. The
 * pictures are the whole of it. Tapping one lifts it to the front with its
 * caption and the names recorded in the archive, and a fresh six is dealt
 * every ten seconds or on demand.
 */

const CYCLE_MS = 10000;

/**
 * Where each photograph lies on the table.
 *
 * Given as a column and a row rather than a percentage across the page. A
 * percentage flings the cards to the edges of a wide monitor while a max-width
 * keeps them small, so the six sat marooned in a lot of empty wood. Instead the
 * card size is worked out from the height of the table — the binding
 * constraint, since two rows must fit above the button — and the group is
 * then laid out at that size and centred, so it stays tight at any width.
 *
 * dx and dy nudge each card by a fraction of its own size so the arrangement
 * reads as photographs dropped on a table rather than a grid.
 */
const DESKTOP_SLOTS = [
  { col: 0, row: 0, dx: 0.00, dy: 0.06, rotate: -7 },
  { col: 1, row: 0, dx: 0.03, dy: -0.03, rotate: 4 },
  { col: 2, row: 0, dx: -0.02, dy: 0.05, rotate: -3 },
  { col: 0, row: 1, dx: 0.07, dy: 0.01, rotate: 6 },
  { col: 1, row: 1, dx: 0.01, dy: 0.06, rotate: -5 },
  { col: 2, row: 1, dx: -0.05, dy: -0.02, rotate: 8 },
];

const MOBILE_SLOTS = [
  { col: 0, row: 0, dx: 0.00, dy: 0.00, rotate: -6 },
  { col: 1, row: 0, dx: 0.01, dy: 0.09, rotate: 5 },
  { col: 2, row: 0, dx: -0.01, dy: 0.02, rotate: -4 },
  { col: 0, row: 1, dx: 0.05, dy: 0.02, rotate: 7 },
  { col: 1, row: 1, dx: 0.00, dy: 0.09, rotate: -5 },
  { col: 2, row: 1, dx: -0.04, dy: 0.01, rotate: 6 },
];

/**
 * How much of a card the next one along covers. Across, the overlap is
 * generous - that is what makes the group read as a pile rather than a row.
 * Down, it stops short of the caption band of the row above, because a
 * photograph whose caption you cannot read is just a photograph.
 */
const COL_STEP_DESKTOP = 0.76;
const COL_STEP_MOBILE = 0.60;
const ROW_STEP = 0.86;
const MARGIN = 16;

/**
 * Work out how big each Polaroid can be, and where each one sits.
 *
 * The card is turned on the table, and a rotated rectangle needs a taller box
 * than an upright one — a 450x396 card at 8 degrees stands 454 tall, nearly
 * 60px more. Leaving that out is what pushed the bottom row over the button,
 * so the rotation is part of the sum rather than an afterthought.
 */
function layout(stageW: number, stageH: number, desktop: boolean) {
  const slots = desktop ? DESKTOP_SLOTS : MOBILE_SLOTS;
  const cols = 3;
  const COL_STEP = desktop ? COL_STEP_DESKTOP : COL_STEP_MOBILE;
  const pad = desktop ? 12 : 8;          // p-3 / p-2
  const caption = desktop ? 48 : 40;     // pb-12 / pb-10
  const maxDy = Math.max(...slots.map((s) => Math.abs(s.dy)));
  const maxDx = Math.max(...slots.map((s) => Math.abs(s.dx)));
  const theta = (Math.max(...slots.map((s) => Math.abs(s.rotate))) * Math.PI) / 180;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);

  // card height as a function of card width: H = a*W + b
  const a = 0.75;
  const b = caption - pad / 2;

  // The lowest edge is (ROW_STEP + maxDy)*H down, plus half the extra a
  // rotated card claims: H/2 + (W*sin + H*cos)/2.
  const K = ROW_STEP + maxDy;
  const denom = K * a + (a * (1 + cos)) / 2 + sin / 2;
  const fromHeight = (stageH - MARGIN - b * (K + (1 + cos) / 2)) / denom;

  // Across, the group plus the overhang of the two turned end cards must fit.
  const spanFactor = COL_STEP * (cols - 1) + 1 + maxDx;
  const fromWidth = (stageW - MARGIN) / (spanFactor + sin * a) - (b * sin) / (spanFactor + sin * a);

  const cardW = Math.max(120, Math.min(fromHeight, fromWidth, desktop ? 520 : 320));
  const cardH = a * cardW + b;

  const groupW = COL_STEP * (cols - 1) * cardW + cardW;
  const originX = Math.max(0, (stageW - groupW) / 2);
  // Rotation also lifts the top edge, so start the first row below it.
  const lift = (cardW * sin + cardH * cos - cardH) / 2;

  return {
    cardW,
    positions: slots.map((s) => ({
      rotate: s.rotate,
      left: originX + s.col * COL_STEP * cardW + s.dx * cardW,
      top: lift + s.row * ROW_STEP * cardH + s.dy * cardH,
    })),
  };
}

function shuffle<T>(items: T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function Showreel() {
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

  // The table is measured rather than assumed, so the Polaroids grow to fill
  // whatever screen they are on and stay grouped in the middle of it.
  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const { cardW, positions } = useMemo(
    () => layout(stage.w, stage.h, isDesktop),
    [stage.w, stage.h, isDesktop]
  );

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

  // The showreel is a single screen; stop the page behind it scrolling.
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
      <div className="relative h-full flex flex-col pt-[84px] pb-3 md:pt-[92px] md:pb-4 px-3 md:px-6">
        {/* Table top */}
        <div ref={stageRef} className="relative flex-1">
          {batch.map((photoIndex, slotIndex) => {
            const photo = teamPhotos[photoIndex];
            const pos = positions[slotIndex];
            if (!pos || !cardW) return null;
            return (
              <button
                key={`${photoIndex}-${slotIndex}`}
                type="button"
                onClick={() => setFocused(photoIndex)}
                aria-label={`Enlarge ${photo.title}`}
                className="absolute bg-[#fdfcf8] p-2 pb-10 md:p-3 md:pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out hover:z-30 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538] text-left"
                style={{
                  width: cardW,
                  left: pos.left,
                  top: pos.top,
                  zIndex: slotIndex + 1,
                  transform: `rotate(${pos.rotate}deg) ${dealt ? "translateY(0) scale(1)" : "translateY(14px) scale(0.94)"}`,
                  opacity: dealt ? 1 : 0,
                }}
              >
                <div className="aspect-[4/3] bg-[#efece4] overflow-hidden">
                  <ImageWithFallback
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
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
        <div className="shrink-0 flex justify-center pt-1">
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
