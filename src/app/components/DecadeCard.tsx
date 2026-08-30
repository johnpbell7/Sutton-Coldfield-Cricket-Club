import { useState } from "react";
import { Link, useNavigate } from "@/app/components/CustomLink";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

/**
 * A single decade block.
 *
 * Desktop: hovering slides an angled red panel up from the bottom, lifts the
 * title and reveals "Explore this decade".
 *
 * Mobile and tablet: there is no hover, so a tap plays the same animation in
 * place, holds it long enough to read "Entering this decade", and only then
 * navigates.
 */

// How long the mobile animation is held before navigating. The panel itself
// takes 300ms to slide up, so this leaves the wording on screen to be read.
const MOBILE_HOLD_MS = 950;

export interface DecadeCardProps {
  id: string;
  title: string;
  years: string;
  image: string;
  link: string;
  /** Sizing for the card, which differs between the grid and the carousels. */
  className?: string;
  lazy?: boolean;
}

export function DecadeCard({
  id,
  title,
  years,
  image,
  link,
  className = "h-80",
  lazy = true,
}: DecadeCardProps) {
  const navigate = useNavigate();
  const [entering, setEntering] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Desktop keeps the plain link; hover has already shown the animation.
    if (window.innerWidth >= 1024 || entering) return;
    e.preventDefault();
    setEntering(true);
    window.setTimeout(() => navigate(link), MOBILE_HOLD_MS);
  };

  return (
    <Link
      to={link}
      onClick={handleClick}
      aria-label={`${title}, ${years}`}
      className={`group block overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${className}`}
    >
      <ImageWithFallback
        src={image}
        alt={title}
        {...(lazy ? { loading: "lazy" as const } : {})}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:from-black/50" />

      {/* Angled red panel — slides up on hover, or on tap below lg */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-[#8B1538] transition-transform duration-300 ${
          entering ? "translate-y-0" : "translate-y-full"
        } lg:translate-y-full lg:group-hover:translate-y-0`}
        style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Title and years lift to make room for the wording */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-300 ${
          entering ? "-translate-y-8" : ""
        } lg:translate-y-0 lg:group-hover:-translate-y-8`}
      >
        <h3 className="font-['Archivo_Black',sans-serif] text-3xl font-bold text-white">
          {title}
        </h3>
        <p className="font-['Helvetica',sans-serif] text-sm text-white/90 mt-1">
          {years}
        </p>
      </div>

      {/* Wording revealed underneath */}
      <div
        className={`absolute bottom-6 left-6 right-6 flex items-center text-white transition-opacity duration-300 z-0 ${
          entering ? "opacity-100" : "opacity-0"
        } lg:opacity-0 lg:group-hover:opacity-100`}
      >
        <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <span className="font-['Helvetica',sans-serif] text-base font-semibold">
          <span className="lg:hidden">Entering this decade</span>
          <span className="hidden lg:inline">Explore this decade</span>
        </span>
      </div>
    </Link>
  );
}
