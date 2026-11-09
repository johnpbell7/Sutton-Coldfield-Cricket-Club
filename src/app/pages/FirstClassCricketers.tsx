import { useState } from "react";
import { useReveal } from "@/app/useReveal";
import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PhotoViewer } from "@/app/components/PhotoViewer";
import {
  cricketersHero,
  cricketersIntro,
  profiles,
  roll,
  cricketersClosing,
} from "@/app/data/firstClassCricketers";

export default function FirstClassCricketers() {
  const { refs, visible } = useReveal();
  const [viewing, setViewing] = useState<number | null>(null);
  const open = viewing === null ? null : profiles[viewing];

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[#1c1c1c]"
          style={{ backgroundImage: `url(${cricketersHero.image})`, backgroundPosition: "center 30%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180">
            <path d="M0 180H1920V0L0 180Z" fill="white" />
          </svg>
        </div>
        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <p className="font-['Georgia',serif] text-lg md:text-xl text-white/90 mb-2">
              First-Class Cricketers, {cricketersHero.years}
            </p>
            <h1 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              {cricketersHero.title}
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-3xl">
              {cricketersHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        ref={(el) => (refs.current[0] = el)}
        data-index={0}
        className={`bg-white py-16 md:py-24 -mt-px transition-all duration-700 ease-out ${
          visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
            {cricketersIntro.large}
          </p>
          {cricketersIntro.body.map((paragraph, i) => (
            <p key={i} className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Their stories */}
      {profiles.map((p, index) => {
        const cream = index % 2 === 0;
        return (
          <div
            key={p.name}
            ref={(el) => (refs.current[index + 1] = el as HTMLElement | null)}
            data-index={index + 1}
            className={`transition-all duration-700 ease-out ${
              visible.has(index + 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative h-[80px] md:h-[120px] -mb-px">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
                <path d={cream ? "M0 120H1920V0L0 120Z" : "M0 0H1920V120L0 0Z"} fill={cream ? "#f8f6f3" : "white"} />
              </svg>
            </div>
            <section className={`${cream ? "bg-[#f8f6f3]" : "bg-white"} py-14 md:py-20 -mt-px`}>
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                  {p.image && (
                    <div className="md:col-span-5">
                      <button
                        type="button"
                        onClick={() => setViewing(index)}
                        aria-label={`Enlarge the photograph of ${p.name}`}
                        className="group block w-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538]"
                      >
                        <ImageWithFallback
                          src={p.image}
                          alt={p.imageCaption || p.name}
                          loading="lazy"
                          className="w-full h-auto object-contain bg-[#f4f1ec] transition-opacity group-hover:opacity-90"
                        />
                      </button>
                      {p.imageCaption && (
                        <div className="border-b border-[#d9c9ca] py-3 mt-4">
                          <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">{p.imageCaption}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className={p.image ? "md:col-span-7" : "md:col-span-10"}>
                    <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-[#8B1538]/80 mb-2">
                      {p.teams} · {p.years}
                    </p>
                    <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-6 leading-tight">
                      {p.name}
                    </h2>
                    {p.paragraphs.map((paragraph, i) => (
                      <p key={i} className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                        {paragraph}
                      </p>
                    ))}
                    {p.decade && (
                      <Link
                        to={p.decade.to}
                        className="inline-flex items-center gap-2 font-['Helvetica',sans-serif] text-base font-semibold text-[#8B1538] hover:text-[#6B0F2A] transition-colors"
                      >
                        Read more in {p.decade.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}

      {/* The full list */}
      <div className="relative h-[80px] md:h-[120px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="#1a472a" />
        </svg>
      </div>
      <section className="bg-[#1a472a] py-16 md:py-24 -mt-px">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-white mb-4">
            All {roll.length} Players
          </h2>
          <p className="font-['Georgia',serif] text-lg md:text-xl text-white/80 mb-10 md:mb-14 max-w-2xl">
            Every Sutton Coldfield player known to have played first-class or List A cricket, in approximate
            chronological order, with the teams they played for and their career span.
          </p>
          <ol className="grid md:grid-cols-2 gap-x-10 border-t border-white/20">
            {roll.map((r) => (
              <li key={r.name + r.years} className="py-4 border-b border-white/20">
                <p className="font-['Archivo_Black',sans-serif] text-lg md:text-xl text-white">{r.name}</p>
                <p className="font-['Georgia',serif] text-base text-white/80">
                  {r.teams} <span className="text-white/60">({r.years})</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <div className="relative h-[80px] md:h-[120px] -mb-px bg-[#1a472a]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="#f8f6f3" />
        </svg>
      </div>
      <section className="bg-[#f8f6f3] py-16 md:py-24 -mt-px">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-8 leading-tight">
            {cricketersClosing.title}
          </h2>
          {cricketersClosing.content.map((paragraph, i) => (
            <p key={i} className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
              {paragraph}
            </p>
          ))}
          <a
            href={cricketersClosing.contact.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-['Helvetica',sans-serif] text-base font-semibold text-[#8B1538] hover:text-[#6B0F2A] transition-colors"
          >
            {cricketersClosing.contact.label}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Onward */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch">
            <Link
              to="/decades"
              className="flex items-center justify-center gap-3 bg-[#8B1538] hover:bg-[#6B0F2A] text-white px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto"
            >
              Through the Decades
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/teams"
              className="flex items-center justify-center gap-3 bg-white hover:bg-[#8B1538] text-[#8B1538] hover:text-white border-2 border-[#8B1538] px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto"
            >
              Meet the Teams
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {open && open.image && (
        <PhotoViewer
          src={open.image}
          alt={open.imageCaption || open.name}
          caption={open.imageCaption}
          onClose={() => setViewing(null)}
        />
      )}
    </div>
  );
}
